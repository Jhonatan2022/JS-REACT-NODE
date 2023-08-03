listaAdmins = [
    {
        nombre: "Juan",
        admin: true,
        capaDeAdministrador: 1
    },
    {
        nombre: "Pedro",
        admin: false,
        capaDeAdministrador: 0
    },
    {
        nombre: "Pablo",
        admin: true,
        capaDeAdministrador: 2
    },
    {
        nombre: "Maria",
        admin: false,
    }
]


for (admin of listaAdmins){
    switch (admin.capaDeAdministrador){
        case 0:
            console.log(`Hola ${admin.nombre}`);
            break;
        case 1:
            console.log(`Bienvenido administrador ${admin.nombre}`);
            break;
        case 2:
            console.log(`Bienvenido super administrador ${admin.nombre}`);
            break;
        default:
            console.log(`Hola ${admin.nombre}`);
            break;
    }
}