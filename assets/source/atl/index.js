import './style.scss'
import $ from 'jquery'

$(document).on('click', '.iframe-link', function (e) {
    e.preventDefault();
    window.parent.location = $(this).attr('href');
})

$(document).on('click', '.mobile-menu-top-level-toggler', function(e) {
    e.preventDefault();

    $('.mobile-menu-top-level').toggleClass('open');
    $('.mobile-menu-expanded-level').toggleClass('open');
})