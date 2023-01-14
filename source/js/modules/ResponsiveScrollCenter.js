export default class ResponsiveScrollCenter {
  constructor(options) {
    this.options = options
    this.breakpoint = options.breakpoint || 768
    this.handleResize()
    window.addEventListener('resize', this.handleResize.bind(this))
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  handleResize() {
    if (window.innerWidth <= this.breakpoint) {
      this.elements = this.options.elements
      this.className = this.options.className
      this.timeout = this.options.timeout
      this.throttleTimeout = null
    } else {
      this.elements = null
    }
  }

  handleScroll() {
    if (!this.elements || this.throttleTimeout) {
      return
    }
    this.throttleTimeout = setTimeout(() => {
      this.throttleTimeout = null
    }, this.timeout)
    this.elements.forEach((element) => {
      var rect = element.getBoundingClientRect()
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        element.classList.add(this.className)
      } else {
        element.classList.remove(this.className)
      }
    })
  }
}
