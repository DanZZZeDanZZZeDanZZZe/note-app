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

  static async get(urlPart) {
    const url = `/${this.instance.base}/${urlPart}`
    return await fetch(url, { headers: this.jsonContentHeader }).then((res) => {
      if (!res.ok) {
        throw new Error(`Data retrieval error. Status: ${res.status}`)
      }
      return res.json()
    })
  }

  static async getLength(routeForContent, param) {
    return await Api.get(`${routeForContent}/length/${param || ''}`)
  }

  static async getLengthOfGroupsList() {
    return await Api.getLength('groups')
  }

  static async getLengthOfNotesList() {
    return await Api.getLength('notes')
  }

  static async getLengthOfNotesListInGroup(group) {
    return await Api.getLength('groups/notes', group)
  }
}

export default Api
