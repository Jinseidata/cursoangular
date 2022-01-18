import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

 heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Batman', 'Thor'];

 heroesBorrado: string = '';


borrarHeroe():void{

   this.heroesBorrado = this.heroes.shift() || '';

  
}


}
