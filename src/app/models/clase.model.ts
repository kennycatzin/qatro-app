import { Espacio } from './espacio.model';

export class Clase {
    constructor(
        public horario: string,
        public coachId: string,
        public disciplinaId: string,
        public espacio?: Espacio[],
        public _id?: string
    ) {
    }
}