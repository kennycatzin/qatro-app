export class ActCalendario {
    constructor(
        public claseId: string,
        public espacioId: string,
        public columnaId: string,
        public usuarioId: string,
        public espacio: number,
        public columna: number,
        public clasesDisp: number
    ) {
    }
}