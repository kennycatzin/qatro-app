import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { DateFormatPipe } from './fecha.pipe';

@NgModule({
  declarations: [ ImagenPipe, DateFormatPipe],
  imports: [
  ],
  exports: [
    ImagenPipe,
    DateFormatPipe
  ]
})
export class PipesModule { }
