import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit(): void {
    const observable = this.photoService.listFromUser('flavio');
    observable.subscribe(result => {
      this.photos = result
    });
  }
}
