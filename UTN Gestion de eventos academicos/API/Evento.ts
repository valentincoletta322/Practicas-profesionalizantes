import { LugarDesarrollo } from "./LugarDesarrollo";
import { Usuario } from "./Usuario";
import { Tag } from "./Tag";

export class Evento{
    id: Number;
    nombre: String;
    fecha: Date;
    fechaCierreConvocatoria: Date;
    lugarDesarrollo: LugarDesarrollo;
    tags: Array<Tag>;
    usuarios: Array<Usuario>;
    
    constructor(id: Number, nombre: String, fecha: Date, fechaCierreConvocatoria: Date, 
        lugarDesarrollo: LugarDesarrollo, tags: Array<Tag>, usuarios: Array<Usuario>){
            this.fecha = fecha;
            this.fechaCierreConvocatoria = fechaCierreConvocatoria;
            this.id = id;
            this.lugarDesarrollo = lugarDesarrollo;
            this.nombre = nombre;
            this.tags = tags;
            this.usuarios = usuarios;
    }
}