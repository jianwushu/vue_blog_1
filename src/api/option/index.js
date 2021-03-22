import {request} from "@/utils/request";
export function getOptionsList(query) {
  return request({
    url: '/options/list',
    method: 'get',
    params: query
  })
}
