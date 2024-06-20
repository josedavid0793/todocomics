import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  images: string[] = [
    'assets/image1.png',
    'assets/image2.png',
    'assets/image3.png',
  ];
  currentImage: number = 0;
  autoSlider: any;

  /*ngOnInit() {
    this.startAutoSlide();
  }*/

  /*ngOnDestroy() {
    this.stopAutoSlide();
  }
*/
  startAutoSlide() {
    this.autoSlider = setInterval(() => {
      this.nextImage();
    }, 3000); // Cambia cada 3 segundos
  }

  stopAutoSlide() {
    if (this.autoSlider) {
      clearInterval(this.autoSlider);
    }
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }

  prevImage() {
    this.currentImage =
      (this.currentImage - 1 + this.images.length) % this.images.length;
  }


  
}
