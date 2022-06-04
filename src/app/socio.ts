
export class Socio {
	private nombre: String;
	private apellidos: String;
	private nsocio: Number;
	private DNI: String;
	private telefono: String;
	private sexo: String;

	constructor(
		nombre: String,
		apellidos: String,
		nsocio: Number,
		DNI: String,
		telefono: String,
		sexo: String,
	) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.nsocio = nsocio;
		this.DNI = DNI;
		this.telefono = telefono;
		this.sexo = sexo;
	}

	public getNombre() {
		return this.nombre;
	}
	public setNombre(nombre: String) {
		this.nombre = nombre;
	}
	public getApellidos() {
		return this.apellidos;
	}
	public setApellidos(apellidos: String) {
		this.apellidos = apellidos;
	}
	public getNsocio() {
		return this.nsocio;
	}
	public setNsocio(nsocio: Number) {
		this.nsocio = nsocio;
	}
	public getDNI() {
		return this.DNI;
	}
	public setDNI(DNI: String) {
		this.DNI = DNI;
	}
	public getTelefono() {
		return this.telefono;
	}
	public setTelefono(telefono: String) {
		this.telefono = telefono;
	}
	public getSexo() {
		return this.sexo;
	}
	public setSexo(sexo: String) {
		this.sexo = sexo;
	}
	}
