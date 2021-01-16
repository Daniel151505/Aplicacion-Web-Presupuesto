//importando servicio
import { Ingreso } from "./ingreso.model";

export class IngresoService {
    constructor() {}
    
    //Creando Arreglo
    ingresos: Ingreso[]= [
        new Ingreso('Salario',4000),
        new Ingreso('Venta de auto', 500)
    ];
}