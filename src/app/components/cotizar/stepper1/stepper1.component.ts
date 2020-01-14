import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CategoriaService } from '../../../services/categoria.service';
import { SolicitudService } from '../../../services/solicitud.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-stepper1',
  templateUrl: './stepper1.component.html',
  styleUrls: ['./stepper1.component.css']
})
export class Stepper1Component implements OnInit {

  @Input() regForm: FormGroup;
  misCategorias: any;
  solicitudLocal: any;
  subs: Subscription;
  subcategorias:any;
  categoria:any;

  constructor(private _sCategorias: CategoriaService,
    private _sSolicitud: SolicitudService) { }


  ngOnInit() {
    this.misCategorias = this._sCategorias.categorias;
    this.subs = this._sSolicitud.solicitudActual.subscribe(solicitudRecibida => {
      this.solicitudLocal = solicitudRecibida;
      // console.log(this.misCategorias);
    });
  }

  // subcategoriasTemplate(subcategorias:any){
  //   this.misCategorias.subcategorias = subcategorias
  //   console.log('Haciendi Click',subcategorias);
    
  // }

  anadirCategoria(categoria: any) {
    this.solicitudLocal.categoria = categoria;
    this._sSolicitud.modificarSolicitud(this.solicitudLocal);
    // console.log("añadiendo categoria", this.solicitudLocal);
  }

  anadirSubcategoria(subcategorias: any) {
    this.solicitudLocal.subcategoria = subcategorias;
    this._sSolicitud.modificarSolicitud(this.solicitudLocal);
  }

    // let subCategorias = this.categoria.filter(subcategorias => subcategorias.categoria === 'CONSTRUCCION')

    // console.log('Clicaste para filtrar Subcategoria',subCategorias)

  }




  // step1Submitted() {
  //   this.regForm.get('categoria').get('categoria').markAsTouched();
  //   this.regForm.get('categoria').get('categoria').updateValueAndValidity();
  // }

  // seleccionCategoria(index:number,nombre:string):void{
  //   this.categoria[index]['nombre'] = nombre;
  //   console.log(index,nombre);

  // }
}
