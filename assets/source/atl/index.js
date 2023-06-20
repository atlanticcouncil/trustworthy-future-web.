import './style.scss'
import $ from 'jquery'

$(document).on('click', '.annex-sidebar-link', function (e) {
    console.log(e.target);
    // window.parent.location = document.referrer;
})