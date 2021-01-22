class DateHandler {
  static instance

  constructor(locales, options) {
    if (DateHandler.instance) {
      return DateHandler.instance
    }
    this.locales = locales
    this.options = options

    DateHandler.instance = this
  }

  static init(locales = 'en-US', options) {
    new this(locales, options)
  }

  static formatDate(date) {
    const { locales, options } = this.instance
    return new Date(date).toLocaleString(locales, options)
  }
}

export default DateHandler
