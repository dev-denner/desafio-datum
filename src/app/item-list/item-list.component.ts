import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.sass'
})
export class ItemListComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  newItemName = '';

  addItem() {
    if (this.newItemName) {
      const newItem = {
        id: this.items.length + 1,
        name: this.newItemName
      };
      this.items.push(newItem);
      this.newItemName = '';
    }
  }
}
