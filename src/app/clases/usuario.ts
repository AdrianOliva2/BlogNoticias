export class Usuario {

    private nombre: string;
    private contrasenna: string;

    constructor(nombre: string, contrasenna: string) {
        this.nombre = nombre;
        this.contrasenna = contrasenna;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getContrasenna(): string {
        return this.contrasenna;
    }

    public setContrasenna(contrasenna: string): void {
        this.contrasenna = contrasenna;
    }

}