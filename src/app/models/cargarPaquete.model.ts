export class CargarPaquete {
    constructor(
        public id: string,
        public usuarioId: string,
        public paqueteId: string,
        public finishAt: string,
        public numClases: number
    ) {
    }
}
