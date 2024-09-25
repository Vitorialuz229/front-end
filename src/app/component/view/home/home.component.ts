import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../../template/header/header.component';
import { FooterComponent } from '../../template/footer/footer.component';
import { ContainerTitleComponent } from '../../template/container-title/container-title.component';
import { NavComponent } from '../../template/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatCardModule, ContainerTitleComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
