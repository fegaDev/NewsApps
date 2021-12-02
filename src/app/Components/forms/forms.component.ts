import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Output() target = new EventEmitter<any>();
  
  seleccionCategoria: string="sport";
  seleccionPais: string="ar";



  categorias: any[] =[
    {value: 'general', nombre:'general'},
    {value: 'technology', nombre:'tecnologia'},
    {value: 'sport', nombre:'deportes'},
    {value: 'entertainment', nombre:'entretenimiento'}
  ];
  paises: any[]=[
    {value: 'ar', nombre:'Argentina'},
    {value: 'br', nombre:'Brasil'},
    {value: 'co', nombre:'Colombia'},
    {value: 'ec', nombre:'Ecuador'},
    {value: 've', nombre:'Venezuela'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  buscarNoticia(){
     const parameters ={
       categoria: this.seleccionCategoria,
       pais: this.seleccionPais
     }

     this.target.emit(parameters);
    
  }
}