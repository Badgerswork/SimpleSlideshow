# SimpleSlideshow
A really simple scalable slideshow with vanilla JS and SASS

I wanted to create a simple scalable slideshow widget that neither cared how many elements you have in the slide show nor required and JS libraries.

## Settings
SimpleSlideshow has 2 configurable settings:

### Pause Delay
The pause delay id how long you want the slides to show for before they transition on to the next one. The pause delay is configurable by passing an integer to the function like this: `slideshow(5);`.

### Staggered Start
If you have more than one slideshow on a page, staggered start allows you to delay the start of subsequent slideshows to slightly offset transition events. This has a more appealing look than everything changing at the same time. It will offset the start time on each subsequent slideshow by an additional second. This setting is togglable by passing a boolean of true/false into the function  like this: `slideshow(5, true);` - if none is passed, it defaults to false (not staggered start times).

## CodePen
You can view the code pen example here: [SimpleSlideshow codepen](https://codepen.io/badgerswork/pen/VRErmy)

## Usage - HTML

```html
<div class="slideshow-container">
    <img src="http://www.fillmurray.com/640/360" class="slideshow slideshow--visible" />
    <img src="https://loremflickr.com/640/360" class="slideshow" />
    <img src="https://placebeard.it/640x360" class="slideshow" />
</div>
```

Add the class of 'slideshow' to each element and add the class of 'slideshow--visible' to the first element.


## Usage - JS

The call to the slideshow function accepts 2 params; one integer to declare the pause time on each slide and secondly a boolean to declare if to start in a staggered fashion;

```javascript
slideshow(5, true);
```
