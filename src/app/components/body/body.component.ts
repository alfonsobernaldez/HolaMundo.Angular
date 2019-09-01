import { Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder conlleva una gran responsabilidad',
    author: 'Ben Parker'
  }

  personajes: string[] = ['Spiderman', 'Venom', 'Octopus' , 'Craven' , 'Duende Verde'];

}
