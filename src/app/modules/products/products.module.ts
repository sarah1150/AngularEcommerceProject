import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPipe } from 'src/app/shared/filter.pipe';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent, FilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent, pathMatch: 'full' },
    ]),
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
