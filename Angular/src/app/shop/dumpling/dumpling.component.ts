
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dumpling',
  templateUrl: './dumpling.component.html',
  styleUrls: ['./dumpling.component.scss']
})
export class DumplingComponent {
  @Input() color = '#efd7b8';
}
