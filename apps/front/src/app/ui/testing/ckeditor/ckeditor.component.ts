import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CKEditorComponent implements OnInit {
  @Input() editor;
  @Input() config;
  @Input() data : string;
  constructor() { }

  ngOnInit(): void {
  }

}
