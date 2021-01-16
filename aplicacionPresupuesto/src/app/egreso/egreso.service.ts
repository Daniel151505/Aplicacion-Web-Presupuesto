import { Egreso } from "./egreso.model";

export class egresoService {
    constructor() {}

    //Creando Arreglo
    egresos: Egreso[]=[

        new Egreso('Renta',400),
        new Egreso('Ropa',600)
    ]
    
}