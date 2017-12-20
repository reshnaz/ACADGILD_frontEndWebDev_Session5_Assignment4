import { Component, ViewEncapsulation } from '@angular/core';

// New component
@Component({
  selector: 'app-S5A4',
//   This template of new component has inline HTML that displays two text-boxes and a button
//   We use css bootstrap form and button classes here.
  template: `
  <div>
    <div class="form-group col-md-12">
   <!-- Hello<br><br> -->
    <input type="text" class="form-control" placeholder="somebody@example.com">
    <br>
    <input type="password" class="form-control" placeholder="Password">
    <br>
    <button class="btn btn-block">Log in</button>
  </div>`,
//   Below we define body element to have red background
  styles: [`body{background: red;}`],
//   Below we change the encapsulation properties (Emulated/Native/None) to see changes in output.
  encapsulation: ViewEncapsulation.None
})
export class S5A4Component {
  title = 'app';
}
