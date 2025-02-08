import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from 'primeng/button';
import {NavCmpComponent} from './shareds/nav-cmp/nav-cmp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavCmpComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ShopWise';
}
