import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-message-required',
  templateUrl: './form-message-required.component.html',
  styleUrls: ['./form-message-required.component.scss'],
})
export class FormMessageRequiredComponent implements OnInit {
  @Input() public validation: NgForm;
  @Input() public message: string;

  constructor() { }

  ngOnInit() { }

}
