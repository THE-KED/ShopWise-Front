import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Button} from 'primeng/button';
import {Toolbar} from 'primeng/toolbar';

@Component({
  selector: 'app-nav-cmp',
  imports: [
    Button,
    Toolbar,
  ],
  templateUrl: './nav-cmp.component.html',
  standalone: true,
  styleUrl: './nav-cmp.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavCmpComponent {

}
