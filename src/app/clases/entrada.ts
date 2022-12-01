export class Entrada {

    private id?: number
    private titulo: string
    private contenido: string
    private fechaCreacion: Date

    public constructor(titulo: string, contenido: string, fechaCreacion: Date) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.fechaCreacion = fechaCreacion;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id?: number): void {
        if (id != undefined) this.id = id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getContenido(): string {
        return this.contenido;
    }

    public setContenido(contenido: string): void {
        this.contenido = contenido;
    }

    public getFechaCreacionStr(): string {
        return `${this.fechaCreacion.getDate()}/${this.fechaCreacion.getMonth() + 1}/${this.fechaCreacion.getFullYear()} ${this.fechaCreacion.getHours()}:${this.fechaCreacion.getMinutes()}:${this.fechaCreacion.getSeconds()}`;
    }

    public getFechaCreacion(): Date {
        return this.fechaCreacion;
    }

    public setFechaCreacion(fechaCreacion: Date): void {
        this.fechaCreacion = fechaCreacion;
    }

}
