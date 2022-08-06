import { request } from 'umi';
export const stuGet = () => {
  return request('/classes/stu', {
    method: 'GET',
  });
};
export const stuDel = (query: any) => {
  return request(`/classes/stu?id=${query}`, {
    method: 'Delete',
  });
};
