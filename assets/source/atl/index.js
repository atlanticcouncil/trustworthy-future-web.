import './style.scss'
import $ from 'jquery'

$(document).on('click', '.iframe-link', function (e) {
    e.preventDefault();
    const href = $(this).attr('href');
    window.parent.location = href;
})