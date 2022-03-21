import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
 //photosTitle = 'Photo/Image Section Title Here';
 photosTitle = 'Random Images';
  image1 = 'https://upload.wikimedia.org/wikipedia/commons/b/ba/ArcheryGermanyEarly1980s-2.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/220px-HONDA_ASIMO.jpg';
  image3 = 'https://www.launchcode.org/assets/homepage/desktop-computer-133c1d5afdb40b0fa1d6bf8cc3bece17d85b685ac21dd0da068433aa5ef885a2.png';
  //https://www.launchcode.org/assets/homepage/desktop-computer-133c1d5afdb40b0fa1d6bf8cc3bece17d85b685ac21dd0da068433aa5ef885a2.png

  constructor() { }

  ngOnInit() {
  }

}