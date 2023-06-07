import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnChanges {
  @Input() public title: string = "Bem vindo 2";
  ngOnChanges(): void {
    alert('Minha benga aqui tbm')
  }
}
