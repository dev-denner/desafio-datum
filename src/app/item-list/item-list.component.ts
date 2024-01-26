import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.sass'
})
export class ItemListComponent {
  items = [
    { id: uuidv4(), name: 'Item 1' },
    { id: uuidv4(), name: 'Item 2' },
    { id: uuidv4(), name: 'Item 3' }
  ];

  newItemName = '';
  selectedItem: any;

  addItem() {
    if (this.newItemName) {
      const newItem = {
        id: uuidv4(),
        name: this.newItemName
      };
      this.items.push(newItem);
      this.newItemName = '';
    }
  }

  removeItem(item: any) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  editItem(item: any) {
    this.selectedItem = item;
    this.newItemName = item.name;
  }

  updateItem() {
    if (this.newItemName) {
      this.selectedItem.name = this.newItemName;
      this.selectedItem = null;
      this.newItemName = '';
    }
  }
}
