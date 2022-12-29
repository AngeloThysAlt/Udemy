
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Angelo'
}

const pasajero2: Pasajero = {
    nombre: 'Marlene',
    hijos: ['Marquitos', 'Zebenzui']
}

function imprimeHijos( pasajero: Pasajero ): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}

imprimeHijos( pasajero2 );
