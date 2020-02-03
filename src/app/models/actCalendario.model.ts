import { ActClases } from './actClases.model';
export class ActCalendario {
    constructor(
        public id: string,
        public dia: string,
        public fecha: string,
        public clases: ActClases[]
    ) {}

}
