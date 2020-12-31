import {request} from "@/utils/request";
export function getList(query) {
  return request({
    url: '/comment/list',
    method: 'get',
    params: query
  })
}

export function addComment(data) {
  return request({
    url: '/comment/add',
    method: 'post',
    data: data
  })
}
