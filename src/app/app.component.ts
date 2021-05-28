import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  photos: Object[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {
    const observable = this.photoService.listFromUser('flavio');
    observable.subscribe(result => {
      this.photos = result
    });
  }
  
  


}
