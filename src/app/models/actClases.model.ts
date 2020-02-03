import { ActEspacios } from './actEspacios.model';
export class ActClases {
    constructor(
        public id: string,
        public coachId: string,
        public disciplinaId: string,
        public horario: string,
        public icono: string,
        public espacios: ActEspacios[]
    ) {}

}
