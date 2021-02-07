import HTTPMethodsHandler from './HTTPMethodsHandler'

class Api extends HTTPMethodsHandler {
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

  static async getListOfGroupTitles() {
    return await Api.get('groups/list-of-titles')
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
