# SimpleSlideshow
A really simple scalable slideshow with vanilla JS and SASS

I wanted to create a simple scalable slideshow widget that neither cared how many elements you have in the slide show nor required and JS libraries. 

Take a look at the [codepen](https://codepen.io/badgerswork/pen/VRErmy)

## Usage

```html
<section class="slideshow-container">    
  <div class="slideshow-container__images">
      <img src="http://www.fillmurray.com/640/360" class="slideshow slideshow-visible" />
      <img src="https://loremflickr.com/640/360" class="slideshow" />
      <img src="https://placebeard.it/640x360" class="slideshow" />
  </div>
</section>
```

Add the class of 'slideshow' to each element and add the class of 'slideshow-visible' to the first element.

