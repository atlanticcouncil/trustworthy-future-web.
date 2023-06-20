import './style.scss'
import $ from 'jquery'

$(document).on('click', '.annex-sidebar-link', function (e) {
    console.log(e.target);
    e.preventDefault();
    const href = $(this).attr('href');
    console.log(href);
    window.parent.location = href;
})