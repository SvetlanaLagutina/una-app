import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'color-picker',
  standalone: true,
  imports: [CommonModule,
            ColorPickerModule,
            InputMaskModule,
            InputNumberModule,
            FormsModule,
            SliderModule,                      
  ],
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  private _opacity: number = 1;
  private _color: string = '#000000';

  @Input() initialValue: { color: string, opacity: number };

  @Output() colorChange = new EventEmitter<{ color: string, opacity: number }>();

  ngOnInit(): void {
    this._color = this.initialValue.color;
    this._opacity = this.initialValue.opacity;
  }

  get opacity() {
      return this._opacity;
  }

  set opacity(value: number) {
      this._opacity = value;

      this.colorChange.emit({ color: this._color, opacity: this._opacity });
  }

  get opacityPercent() {
      return this._opacity * 100;
  }

  set opacityPercent(value: number) {
      this._opacity = value / 100;

      this.colorChange.emit({ color: this._color, opacity: this._opacity });
  }

  get color() {
      return this._color;
  }

  set color(value: string) {
      this._color = value;

      this.colorChange.emit({ color: this._color, opacity: this._opacity });
  }

}
