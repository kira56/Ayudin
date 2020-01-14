import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { _filter } from './registros.component';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

import { ClienteService } from '../../services/cliente.service';
import { UsuarioService } from '../../services/usuario.service';

declare var $: any;
export interface DistritoGroup {
  letra: string;
  nombres: string[];
}
export interface ProvinciaGroup {
  letra1: string;
  nombres1: string[];
}
@Component({
  selector: 'app-registros2',
  templateUrl: './registros2.component.html',
  styleUrls: ['./registros2.component.css']
})
export class Registros2Component implements OnInit ,OnDestroy{
  subscripcion: Subscription;

  objCliente={
    cli_ndoc: '',
    cli_nom: '',
    cli_ape: '',
    cli_tel: '',
    cli_dire: ''
  }
  objUsuario={
    usu_email:'',
    usu_pass:'',
    usu_est:'activado',
    usu_tipo:'cliente'
  }

  hide = true;
  checked = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  distritoForm: FormGroup = this._formBuilder.group({
    distritoGroup: '',
  });


  distritoGroups: DistritoGroup[] =
    [{
      letra: 'A',
      nombres: ['Alto Selva Alegre', 'Arequipa']
    }, {
      letra: 'C',
      nombres: ['Cayma', 'Cerro Colorado', 'Characato', 'Chiguata']
    }, {
      letra: 'J',
      nombres: ['Jacobo Hunter', 'José Luis Bustamante y Rivero']
    }, {
      letra: 'L',
      nombres: ['La Joya']
    }, {
      letra: 'M',
      nombres: ['Mariano Melgar', 'Miraflores', 'Mollebaya']
    }, {
      letra: 'P',
      nombres: ['Paucarpata', 'Pocsi', 'Polobaya']
    }, {
      letra: 'Q',
      nombres: ['Quequeña']
    }, {
      letra: 'S',
      nombres: ['Sabandia', 'Sachaca', 'San Juan de Tarucani', 'Santa Isabel de Siguas', 'Santa Rita de Siguas', 'San Juan de Juan de Siguas', 'Socabaya']
    }, {
      letra: 'T',
      nombres: ['Tiabaya']
    }, {
      letra: 'V',
      nombres: ['Vitor']
    }, {
      letra: 'Y',
      nombres: ['Yanahuara', 'Yarabamba', 'Yura']
    }];


  distritoGroupOptions: Observable<DistritoGroup[]>;
  constructor(private _formBuilder: FormBuilder,private _sUsuarios: UsuarioService, private _sCliente: ClienteService) { }

  ngOnInit() {
    this.distritoGroupOptions = this.distritoForm.get('distritoGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  ngOnDestroy() {
    //this.subscripcion.unsubscribe();
    try {
      this.subscripcion.unsubscribe();
    } catch (error) {

    }
  }
  private _filterGroup(value: string): DistritoGroup[] {
    if (value) {
      return this.distritoGroups
        .map(group => ({ letra: group.letra, nombres: _filter(group.nombres, value) }))
        .filter(group => group.nombres.length > 0);
    }

    return this.distritoGroups;
  }
  mensajeError() {
    return this.email.hasError('required') ? 'Debe ingresar un valor' :
      this.email.hasError('email') ? 'Email no valido' : '';
  }
  Registrar()
  {
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos guardando el producto',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    let objUnion = {
      usuario: this.objUsuario,
      cliente: this.objCliente
    }
    this.subscripcion = this._sUsuarios.postUsuario(objUnion)
      .subscribe((rpta) => {
        if (rpta.content.usu_id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            text: 'El Cliente se ha creado exitosamente!!',
            confirmButtonText: 'Ir a Cliente',
            allowOutsideClick: false
          }).then((result) => {
            console.log("Creado Nuevo Usuario/Cliente");
            
          })

        }
      })
  }

}
