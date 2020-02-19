require('lightbox2/dist/css/lightbox.min.css');
window.lightbox = require('lightbox2');
import('./styles/styles.scss');


//Full size
import('./media/IMG_0687.jpg');
import('./media/IMG_0704.jpg');
import('./media/IMG_0771.jpg');
import('./media/IMG_0678.jpg');
import('./media/IMG_0706.jpg');
import('./media/IMG_0873.jpg');
import('./media/IMG_0777.jpg');
import('./media/IMG_0732.jpg');
import('./media/IMG_0647.jpg');
import('./media/IMG_0872.jpg');
import('./media/IMG_0870.jpg');
import('./media/IMG_0863.jpg');

//Thumbnails
import('./media/thumbnails/thumb_IMG_0687.jpg');
import('./media/thumbnails/thumb_IMG_0704.jpg');
import('./media/thumbnails/thumb_IMG_0771.jpg');
import('./media/thumbnails/thumb_IMG_0678.jpg');
import('./media/thumbnails/thumb_IMG_0706.jpg');
import('./media/thumbnails/thumb_IMG_0873.jpg');
import('./media/thumbnails/thumb_IMG_0777.jpg');
import('./media/thumbnails/thumb_IMG_0732.jpg');
import('./media/thumbnails/thumb_IMG_0647.jpg');
import('./media/thumbnails/thumb_IMG_0872.jpg');
import('./media/thumbnails/thumb_IMG_0870.jpg');
import('./media/thumbnails/thumb_IMG_0863.jpg');

// ABOUT ICON
import('./media/thumbnails/IMG_0890.jpg')


// Prevent right clicks + dragging

$("body").on("contextmenu",function(e){
    return false;
});

$("img").mousedown(function(e){
    e.preventDefault()
});