## Vitalidad del procesador

```ps1
# Obtener información sobre el procesador
$processorInfo = Get-WmiObject Win32_Processor

# Obtener información sobre la temperatura del procesador (esto puede variar según el hardware y los controladores)
$temperature = Get-WmiObject -Namespace "Root\cimv2" -Class Win32_TemperatureProbe | Select-Object -First 1 | Select-Object -ExpandProperty CurrentReading

# Obtener la frecuencia actual del procesador
$currentClockSpeed = $processorInfo.CurrentClockSpeed

# Valores límite de temperatura y frecuencia (ajusta según tus necesidades)
$maximumSafeTemperature = 50  # Ejemplo: 70 grados Celsius
$maximumSafeClockSpeed = 75   # Ejemplo: 90% de la frecuencia máxima

# Calcular la salud en base a la temperatura y la frecuencia
$temperatureHealth = [Math]::Max(0, 100 - ($temperature / $maximumSafeTemperature * 100))
$clockSpeedHealth = [Math]::Max(0, 100 - ($currentClockSpeed / ($processorInfo.MaxClockSpeed * ($maximumSafeClockSpeed / 100)) * 100))

# Calcular la salud general como el promedio de las dos medidas de salud
$overallHealth = ($temperatureHealth + $clockSpeedHealth) / 2

# Mostrar resultados
Write-Host "Temperatura del procesador: $temperature °C"
Write-Host "Frecuencia actual del procesador: $currentClockSpeed MHz"
Write-Host "Salud de temperatura: $temperatureHealth%"
Write-Host "Salud de frecuencia: $clockSpeedHealth%"
Write-Host "Salud general del procesador: $overallHealth%"
```

## Vitalidad del disco duro

```ps1
# Obtener la lista de discos físicos en el sistema
$disks = Get-PhysicalDisk

# Filtrar los discos que tienen un estado operativo 'OK' (saludable)
$healthyDisks = $disks | Where-Object { $_.OperationalStatus -eq 'OK' }

# Contar el número total de discos y el número de discos saludables
$totalDisks = $disks.Count
$healthyCount = $healthyDisks.Count

# Calcular el porcentaje de discos saludables en relación con el total de discos
$healthPercentage = ($healthyCount / $totalDisks) * 100

# Mostrar información sobre los discos duros y su salud
Write-Host "Total de discos: $totalDisks"
Write-Host "Discos saludables: $healthyCount"
Write-Host "Salud del disco duro: $healthPercentage%"
```

## Extra

```bash
# Información del procesador
wmic cpu list full
```
