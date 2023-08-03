const tiposRol = {
    megaAdmin: 'Mega Administrador',
    admin: 'Administrador',
    empleado: 'Empleado',
    cliente: 'Cliente',
    usuario: 'Usuario'
}



function determinarRol(tipo) {
    if (tiposRol[tipo]) {
        console.log(`Bienvenido ${tiposRol[tipo]}`);
        return;
    }
    console.warn('El tipo de usuario no existe');
}


determinarRol('admin');