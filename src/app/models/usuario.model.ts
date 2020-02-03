export class Usuario {
    constructor(
        public name: string,
        public apellidoPaterno?: string,
        public apellidoMaterno?: string,
        public fechaNacimiento?: string,
        public genero?: string,
        public email?: string,
        public password?: string,
        public img?: string,
        public telefono?: string,
        public role?: string,
        public _id?: string
    ) {
    }
}