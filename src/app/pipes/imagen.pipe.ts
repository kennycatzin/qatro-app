import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + '/img';
    if (!img) {
      return url + '/usuario/xxx';
    }

    // if (img.indexOf('https') >= 0) {
    //   return img;
    // }

    switch ( tipo ) {
      case 'usuario':
      url += '/usuarios/' + img;
      break;

      case 'disciplina':
      url += '/disciplinas/' + img;
      break;

      case 'coach':
      url += '/coaches/' + img;
      break;

      default:
      url += '/usuarios/xxx';
    }
    return url;
  }

}
