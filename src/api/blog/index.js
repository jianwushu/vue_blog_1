import {request} from "@/utils/request";

//分页查询文章列表数据
export function getList(query) {
  return request({
    url: '/blog/list',
    method: 'get',
    params: query
  })
}
export function getArchive() {
  return request({
    url: '/blog/archive',
    method: 'get',
  })
}


