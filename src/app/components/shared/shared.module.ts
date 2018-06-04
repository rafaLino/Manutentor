import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { loadingComponent } from './loading.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    loadingComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    StarComponent,
    loadingComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
