import requestService from './request'

export const all = (
  path,
  filter = {}
) => {

  return requestService.send({
    method: 'get',
    path,
    query: { ...filter },
  })
}

export const view = (path) => {
  return requestService.send({
    method: 'get',
    path,
  })
}

export const add = (path, data, query = {}) => {
  return requestService.send({
    method: 'post',
    path,
    data,
    query
  })
}

export const update = (path, data, query = {}) => {
  return requestService.send({
    method: 'put',
    path,
    data,
    query,
  })
}

export const remove = (path) => {
  return requestService.send({
    method: 'delete',
    path,
  })
}


