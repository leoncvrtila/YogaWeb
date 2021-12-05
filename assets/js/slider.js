let isSlider1Visible = true;
let isSlider2Visible = false;
let isSlider3Visible = false;

const slider1 = document.getElementById('GallerySlider1');
const slider2 = document.getElementById('GallerySlider2');
const slider3 = document.getElementById('GallerySlider3');

const dot1 = document.getElementById('GalleryDot1');
const dot2 = document.getElementById('GalleryDot2');
const dot3 = document.getElementById('GalleryDot3');

dot1.addEventListener('click', function(){

    if(isSlider1Visible) {
        
        return

    } else {

        isSlider1Visible = true;
        isSlider2Visible = false;
        isSlider3Visible = false;

        slider1.style.display = 'flex';
        slider2.style.display = 'none';
        slider3.style.display = 'none';

        dot1.style.background = '#e5ccc6';
        dot2.style.background = 'transparent';
        dot3.style.background = 'transparent';

    }
    
});

dot2.addEventListener('click', function(){

    if(isSlider2Visible) {
        
        return

    } else {

        isSlider1Visible = false;
        isSlider2Visible = true;
        isSlider3Visible = false;

        slider1.style.display = 'none';
        slider2.style.display = 'flex';
        slider3.style.display = 'none';

        dot1.style.background = 'transparent';
        dot2.style.background = '#e5ccc6';
        dot3.style.background = 'transparent';

    }
    
});

dot3.addEventListener('click', function(){

    if(isSlider3Visible) {
        
        return

    } else {

        isSlider1Visible = false;
        isSlider2Visible = false;
        isSlider3Visible = true;

        slider1.style.display = 'none';
        slider2.style.display = 'none';
        slider3.style.display = 'flex';

        dot1.style.background = 'transparent';
        dot2.style.background = 'transparent';
        dot3.style.background = '#e5ccc6';

    }
    
});

slider1.addEventListener('mouseup', function(){

    if(isSlider2Visible) {
        
        return

    } else {

        isSlider1Visible = false;
        isSlider2Visible = true;
        isSlider3Visible = false;

        slider1.style.display = 'none';
        slider2.style.display = 'flex';
        slider3.style.display = 'none';

        dot1.style.background = 'transparent';
        dot2.style.background = '#e5ccc6';
        dot3.style.background = 'transparent';

    }

});

slider2.addEventListener('mouseup', function(){

    if(isSlider3Visible) {
        
        return

    } else {

        isSlider1Visible = false;
        isSlider2Visible = false;
        isSlider3Visible = true;

        slider1.style.display = 'none';
        slider2.style.display = 'none';
        slider3.style.display = 'flex';

        dot1.style.background = 'transparent';
        dot2.style.background = 'transparent';
        dot3.style.background = '#e5ccc6';

    }

});

slider3.addEventListener('mouseup', function(){

    if(isSlider1Visible) {
        
        return

    } else {

        isSlider1Visible = true;
        isSlider2Visible = false;
        isSlider3Visible = false;

        slider1.style.display = 'flex';
        slider2.style.display = 'none';
        slider3.style.display = 'none';

        dot1.style.background = '#e5ccc6';
        dot2.style.background = 'transparent';
        dot3.style.background = 'transparent';

    }

});