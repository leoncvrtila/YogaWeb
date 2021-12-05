let isAccordion1Visible = false;
let isAccordion2Visible = false;
let isAccordion3Visible = false;

const accordionText1 = document.getElementById('AccordionText1');
const accordionText2 = document.getElementById('AccordionText2');
const accordionText3 = document.getElementById('AccordionText3');

const accordionPlus1 = document.getElementById('AccordionPlus1');
const accordionPlus2 = document.getElementById('AccordionPlus2');
const accordionPlus3 = document.getElementById('AccordionPlus3');

const accordionPlusP1 = document.getElementById('AccordionPlusP1');
const accordionPlusP2 = document.getElementById('AccordionPlusP2');
const accordionPlusP3 = document.getElementById('AccordionPlusP3');

accordionPlus1.addEventListener('click', function(){

    if(isAccordion1Visible) {
        
        return

    } else {

        accordionPlusP1.innerText = '-';
        accordionPlusP2.innerText = '+';
        accordionPlusP3.innerText = '+';

        accordionText1.style.display = 'block';
        accordionText2.style.display = 'none';
        accordionText3.style.display = 'none';

    }
    
});

accordionPlus2.addEventListener('click', function(){

    if(isAccordion2Visible) {
        
        return

    } else {

        accordionPlusP1.innerText = '+';
        accordionPlusP2.innerText = '-';
        accordionPlusP3.innerText = '+';

        accordionText1.style.display = 'none';
        accordionText2.style.display = 'block';
        accordionText3.style.display = 'none';

    }
    
});

accordionPlus3.addEventListener('click', function(){

    if(isAccordion3Visible) {
        
        return

    } else {

        accordionPlusP1.innerText = '+';
        accordionPlusP2.innerText = '+';
        accordionPlusP3.innerText = '-';

        accordionText1.style.display = 'none';
        accordionText2.style.display = 'none';
        accordionText3.style.display = 'block';

    }
    
});
