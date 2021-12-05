let navState = false;

const nav = document.getElementById('MobNav');

function onNavClick() {

    if (navState) {

        navState = false;
        nav.style.display = 'none';

    } else {

        navState = true;
        nav.style.display = 'flex';

    }

}