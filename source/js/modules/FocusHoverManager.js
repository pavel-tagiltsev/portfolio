export default class FocusHoverManager {
  constructor(options) {
    this.container = options.container
    this.focusedClass = options.focusedClass
    this.hoveredClass = options.hoveredClass
    this.itemSelector = options.itemSelector
    this.container.addEventListener('focus', this.handleFocus.bind(this), true)
    this.container.addEventListener('blur', this.handleBlur.bind(this), true)
    this.container.addEventListener(
      'mouseover',
      this.handleMouseOver.bind(this),
      true
    )
    this.container.addEventListener(
      'mouseout',
      this.handleMouseOut.bind(this),
      true
    )
  }

  handleFocus(event) {
    if (event.target.closest(this.itemSelector)) {
      event.target.closest(this.itemSelector).classList.add(this.focusedClass)
    }
  }

  handleBlur(event) {
    if (event.target.closest(this.itemSelector)) {
      event.target
        .closest(this.itemSelector)
        .classList.remove(this.focusedClass)
    }
  }

  handleMouseOver(event) {
    if (event.target.closest(this.itemSelector)) {
      event.target.closest(this.itemSelector).classList.add(this.hoveredClass)
    }
  }

  handleMouseOut(event) {
    if (event.target.closest(this.itemSelector)) {
      event.target
        .closest(this.itemSelector)
        .classList.remove(this.hoveredClass)
    }
  }
}
