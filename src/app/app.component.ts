import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontMaterial';


//owl- Carousel

title2 = 'owl-carousel';

mySlideImages = ['../assets/images/image1.jpg', '../assets/images/image2.jpeg', '../assets/images/image3.jpg'];
myCarouselImages = ['../assets/images/image1.jpg', '../assets/images/image2.jpeg', '../assets/images/image3.jpg'];

mySlideOptions = { items: 1, dots: true, nav: true };
myCarouselOptions = { items: 3, dots: true, nav: true };

//hasta aqui es el carousel

}