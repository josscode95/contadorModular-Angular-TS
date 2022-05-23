import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']
  heroeResponse:string = ''

  borrarHeroe(){
    // const heroeBorrado = this.heroes.pop()
    // if( heroeBorrado ) this.heroeResponse = heroeBorrado
    this.heroeResponse = this.heroes.pop() || ''
  }

}
