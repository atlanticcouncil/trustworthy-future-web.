import './style.scss'
import $ from 'jquery'

$(document).on('click', '.annex-sidebar-link', function (e) {
    window.parent.location = document.referrer;
})