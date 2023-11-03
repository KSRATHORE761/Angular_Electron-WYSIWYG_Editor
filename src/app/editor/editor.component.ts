import { Component,OnInit } from '@angular/core';
import {NgxWigComponent} from 'ngx-wig';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  myContent:string = '';
  ngOnInit(): void {
      this.getContent();
  }
  constructor(private editorService : EditorService){}

  private async getContent(){
    this.myContent = await this.editorService.getContent();
  }

  saveContent(content : string){
    this.editorService.setContent(content);
  }

}
