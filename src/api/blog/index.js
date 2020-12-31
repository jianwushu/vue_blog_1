import {request} from "@/utils/request";

//分页查询文章列表数据
export function getList(query) {
  return request({
    url: '/blog/list',
    method: 'get',
    params: query
  })
}
export function addBlog(data) {
  return request({
    url: '/blog/add',
    method: 'post',
    data:data
  })
}
export function updBlog(data) {
  return request({
    url: '/blog/upd',
    method: 'put',
    data:data
  })
}
export function del(ids) {
  return request({
    url: '/blog/del/'+ids,
    method: 'delete',
  })
}

