import { Component, ChangeDetectionStrategy, Input, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value: any = '';

  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public onChange(value: string): void {}
  public onTouched(): void {}
}
