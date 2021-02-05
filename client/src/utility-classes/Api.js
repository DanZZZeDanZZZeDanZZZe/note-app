class Api {
  static instance
  static jsonContentHeader = { 'Content-Type': 'application/json' }

  constructor(apiBase) {
    if (Api.instance) {
      return Api.instance
    }
    this.base = apiBase
    Api.instance = this
  }

  static init(apiBase) {
    new Api(apiBase)
  }
}

export default Api
