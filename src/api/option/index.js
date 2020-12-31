import {request} from "@/utils/request";
export function getOptionList() {
  return request({
    url: '/option/list',
    method: 'get',
  })
}
