import { Routes } from '@angular/router';
import { HomeComponent } from './component/view/home/home.component';
import { CrudComponent } from './component/view/crud/crud.component';
import { ContainerTitleComponent } from './component/template/container-title/container-title.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductReadComponent } from './component/product/product-read/product-read.component';

export const routes: Routes = [
  {
    path: '', component: ContainerTitleComponent
  },
  {
    path: 'sensor', component: CrudComponent
  },
  {
    path: 'sensor/create', component: ProductCreateComponent
  },
  {
    path: 'sensor/update:id', component: ProductReadComponent
  }
];
