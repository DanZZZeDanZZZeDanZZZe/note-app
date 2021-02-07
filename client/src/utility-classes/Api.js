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

  static async fetch(urlPart, method, data) {
    const url = `/${this.instance.base}/${urlPart}`

    const params = { headers: this.jsonContentHeader, method }
    if (method === 'POST' || method === 'PUT')
      params.body = JSON.stringify(data)

    return await fetch(url, params).then(async (res) => {
      if (!res.ok) {
        throw new Error(`Data retrieval error. Status: ${res.status}`)
      }
      return await res.json()
    })
  }

  static async get(urlPart) {
    return await Api.fetch(urlPart, 'GET')
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

  static async getList({ entity, start, param, limit }) {
    return await Api.get(
      `${entity}/list/${param || ''}?start=${start}&limit=${limit}`
    )
  }

  static async getListOfNotes(start, limit) {
    return await Api.getList({ entity: 'notes', start, limit, param: null })
  }

  static async getListOfGroups(start, limit) {
    return await Api.getList({ entity: 'groups', start, limit, param: null })
  }

  static async getListOfNotesInGroup(param, start, limit) {
    return await Api.getList({
      entity: 'groups/notes',
      start,
      limit,
      param,
    })
  }

  static async delete(urlPart) {
    return await Api.fetch(urlPart, 'DELETE')
  }

  static async deleteEntity(entity, param) {
    return await Api.fetch(`${entity}/${param}`, 'DELETE')
  }

  static async deleteNote(param) {
    return await Api.deleteEntity('notes', param)
  }

  static async deleteGroup(param) {
    return await Api.deleteEntity('groups', param)
  }

  static async post(urlPart, data) {
    return await Api.fetch(urlPart, 'POST', data)
  }

  static async put(urlPart, data) {
    return await Api.fetch(urlPart, 'PUT', data)
  }

  static async addNewEntity(entity, data) {
    return await Api.post(entity, data).then((res) => {
      const { message } = res
      if (message) {
        throw new Error(message)
      }
    })
  }

  static async addNewNote(data) {
    return await Api.addNewEntity('notes', data)
  }

  static async addNewGroup(data) {
    return await Api.addNewEntity('groups', data)
  }
}

export default Api
