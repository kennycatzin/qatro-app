export class Coach {
    constructor(
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public genero: string,
        public fechaNacimiento: string,
        public direccion: string,
        public correo: string,
        public alias: string,
        public frase: string,
        public twitter: string,
        public facebook: string,
        public instagram: string,
        public img?: string,
        public _id?: string
    ) {
    }
}