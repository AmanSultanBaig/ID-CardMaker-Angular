import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formGroup: FormGroup;
  photoUrl: any;
  alphabatRegex = '^[a-zA-Z]*$';
  reader: FileReader;
  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      Name: this._fb.control('', { validators : [Validators.required, Validators.pattern(this.alphabatRegex), Validators.minLength(3)], updateOn: 'change'}),
      designation: this._fb.control('', { validators : [Validators.required, Validators.pattern(this.alphabatRegex)], updateOn: 'change'}),
      web: this._fb.control('', { validators : [Validators.required], updateOn: 'change'})
      // pic: this._fb.control('')
    });
  }

  onFileSelect(input) {
    if (input.files && input.files[0]) {
      this.reader = new FileReader();
      this.reader.onload = (e: any) => {
        this.photoUrl = e.target.result;
      };
      this.reader.readAsDataURL(input.files[0]);
    }
  }

  click() {
    console.log(this.formGroup.value);
  }
}
