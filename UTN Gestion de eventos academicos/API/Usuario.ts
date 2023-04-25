export class Usuario{
 id: Number;
 correo: String;
 nombre: String;
 fotoPerfil: String;
 tipoUsuario: TipoUsuario;

 constructor(id: number, correo: string, nombre: String, fotoPerfil: string, tipoUsuario: TipoUsuario){
    this.id = id;
    this.correo = correo;
    this.nombre = nombre;
    this.fotoPerfil = fotoPerfil;
    this.tipoUsuario = tipoUsuario
    }
}