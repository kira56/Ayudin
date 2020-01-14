import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
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

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})

export class RegistrosComponent implements OnInit {

  hide = true;
  color: 'green';
  email = new FormControl('', [Validators.required, Validators.email]);
  checked = false;


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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.distritoGroupOptions = this.distritoForm.get('distritoGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
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

}
