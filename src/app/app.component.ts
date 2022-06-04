import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Socio } from './socio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seasons: string[] = ['Hombre', 'Mujer'];
  idEditar: number = -1;

  public formulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    nsocio: ['', [Validators.required, Validators.minLength(1)]],
    DNI: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
    telefono: ['', [Validators.required, Validators.minLength(3)]],
    sexo: ['', [Validators.required]],
  });

  socioArray: Socio[] = []

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  socioDuplicado(numero: Number): boolean {
    if (this.socioArray.findIndex(socio => socio.getNsocio() == numero) == -1)
      return false;
    return true;
  }

  registrar(): void {
    if (this.formulario.status != 'INVALID' && !this.socioDuplicado(this.formulario.value.nsocio)) {
      if (this.idEditar == -1) {
        this.socioArray.push(
          new Socio(
            this.formulario.value.nombre,
            this.formulario.value.apellidos,
            this.formulario.value.nsocio,
            this.formulario.value.DNI,
            this.formulario.value.telefono,
            this.formulario.value.sexo
          ))
      }
      else {
        this.socioArray[this.idEditar].setNombre(this.formulario.value.nombre);
        this.socioArray[this.idEditar].setApellidos(this.formulario.value.apellidos);
        this.socioArray[this.idEditar].setNsocio(this.formulario.value.nsocio);
        this.socioArray[this.idEditar].setDNI(this.formulario.value.DNI);
        this.socioArray[this.idEditar].setTelefono(this.formulario.value.telefono);
        this.socioArray[this.idEditar].setSexo(this.formulario.value.sexo);


        this.idEditar = -1;
      }

      this.formulario.reset()
    }
  }

  eliminar(i: number): void {
    this.socioArray.splice(i, 1)
  }

  modificar(i: number): void {
    this.idEditar = i;
    this.formulario.controls["nombre"].setValue(this.socioArray[i].getNombre());
    this.formulario.controls["apellidos"].setValue(this.socioArray[i].getApellidos());
    this.formulario.controls["nsocio"].setValue(this.socioArray[i].getNsocio());
    this.formulario.controls["DNI"].setValue(this.socioArray[i].getDNI());
    this.formulario.controls["telefono"].setValue(this.socioArray[i].getTelefono());
    this.formulario.controls["sexo"].setValue(this.socioArray[i].getSexo());
  }
}


