import FocusHoverManager from './js/modules/FocusHoverManager.js'
import ResponsiveScrollCenter from './js/modules/ResponsiveScrollCenter.js'

document.addEventListener('DOMContentLoaded', () => {
  new FocusHoverManager({
    container: document.querySelector('.projects'),
    focusedClass: 'project--focused',
    hoveredClass: 'project--hovered',
    itemSelector: '.project'
  })

  new ResponsiveScrollCenter({
    breakpoint: 768,
    elements: document.querySelectorAll('[data-scroll-center-project]'),
    className: 'project--hovered',
    timeout: 100
  })

  new ResponsiveScrollCenter({
    breakpoint: 768,
    elements: document.querySelectorAll('[data-scroll-center-links]'),
    className: 'link--hovered',
    timeout: 10
  })
})
