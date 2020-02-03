import { Clase } from './clase.model';
export class Calendario {
    constructor(
        public dia: string,
        public fecha: Date,
        public createdAt: Date,
        public updatedAt: Date,
        public clases: Clase[],
        public usuarioId: string,
        public _id?: string
    ) {
    }
}
