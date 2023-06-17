
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColorPickerDialogComponent } from './color-picker-dialog/color-picker-dialog.component';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Input() color = 'gold';
  @Output() recolor = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ColorPickerDialogComponent, {
      data: {color: this.color},
    });

    dialogRef.componentInstance.recolor.subscribe((color) => {
      this.color = color;
      this.recolor.emit(this.color);
    });
  }
}
