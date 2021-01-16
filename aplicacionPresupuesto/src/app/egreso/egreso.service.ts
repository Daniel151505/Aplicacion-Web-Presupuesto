import { Egreso } from "./egreso.model";

export class EgresoService {
    constructor() {}

    //Creando Arreglo
    egresos: Egreso[]=[

        new Egreso('Renta',400),
        new Egreso('Ropa',600)
    ]

    eliminar(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);

    }
    
}