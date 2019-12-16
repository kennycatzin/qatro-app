export class Paquete {
    constructor(
        public nombre: string,
        public numeroClases: number,
        public precioUnitario: number,
        public vigencia: number,
        public _id?: string
    ) {
    }
}