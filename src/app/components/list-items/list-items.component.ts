import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {
  @Input() items: Item[] =[];
}
