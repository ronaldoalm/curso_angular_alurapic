import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos: Object[] = [];

  constructor(private httpClient: HttpClient){

    const observable = httpClient.get<Object[]>('http://localhost:3000/flavio/photos');

    observable.subscribe(result => this.photos = result);
  }
  
  


}
