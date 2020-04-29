//Modules
import "bootstrap/js/dist/scrollspy";
import "bootstrap/js/dist/modal";
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faHome, faComments, faChartArea, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import AOS from "aos/dist/aos"
import main from "./scripts/main.js";
import "./scripts/snap.js";

//Styles
import "./styles/main.sass";

AOS.init();
library.add(faHome, faComments, faChartArea, faHeart, faUser)
dom.watch()
document.addEventListener("DOMContentLoaded", main);
