import './src/scss/style.scss';
import {createHtml} from './src/js/createHtml';
import {toggleLightMode} from './src/js/toggleDarkmode'

function init () {

toggleLightMode("dark-mode");
    createHtml ();

}

init ();




