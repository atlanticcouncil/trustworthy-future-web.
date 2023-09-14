import './style.scss'
import $ from 'jquery'

$(document).on('click', '.iframe-link', function (e) {
    e.preventDefault();
    window.parent.location = $(this).attr('href');
})

$(document).on('click', '.menu_checkbox_label', function(e) {
    e.preventDefault();

    $(this).toggleClass('active');
    $('.mobile-menu-top-level').toggleClass('open');
    $('.mobile-menu-expanded-level').toggleClass('open');
})