import {ActColumnas} from './actColumnas.model';
export class ActEspacios {
    constructor(
        public id: string,
        public nombre: string,
        public posicion: number,
        public columnas: ActColumnas[]
    ) {}

}
