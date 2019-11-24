import {Component} from '@angular/core';
@Component({
    selector:'app-body',
    templateUrl:'body.component.html'
})
export class BodyComponents {

        mostrar = true;

        frase: any ={
            mensaje : '"Un gran poder amerita una gran responsabilidad"...',
            autor : 'Ben Parquer'
        }

        personaje: string[]= ['Spiderman', 'Superman', 'Batman', 'Aquaman'];

}