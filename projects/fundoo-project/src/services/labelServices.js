import { postData, getData, deleteData, patchData } from './axiosServices'
const token = localStorage.getItem('loginToken')

export const addLabels = (data) => {
  console.log('in service label')
  let url = `noteLabels`
  let headersOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }
  return postData(url, data, headersOptions)
}

export const getAllLabels = (token) => {
  let url = `noteLabels/getNoteLabelList`
  let headersOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }
  return getData(url, headersOptions)
}

export const deleteLabels = (id) => {
  let url = `noteLabels/${id}/deleteNoteLabel`
  let headersOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }
  return deleteData(url, headersOptions)
}
// noteLabels/6674178b9cb86d001e7062ad/updateNoteLabel

export const updateLabels = (data, id) => {
  console.log('in service label')
  let url = `noteLabels/${id}`
  let headersOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }
  return patchData(url, data, headersOptions)
}

export const addLabelToNote = (noteId, labelId, tk) => {
  console.log('in service label')
  let url = `notes/${noteId}/addLabelToNotes/${labelId}/add`
  let data = {}
  let headersOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: tk
    }
  }
  return postData(url, data, headersOptions)
}

export const getLabelsOnNote = (id) => {
  let url = `notes/${id}/noteLabels`
  let headersOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }
  return getData(url, headersOptions)
}

export const removeLabelsOnNote = (labelId, noteId) => {
  let url = `notes/${noteId}/addLabelToNotes/${labelId}/remove`
  let data = {}
  let headersOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }
  return postData(url, data, headersOptions)
}
