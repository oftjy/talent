import mockjs from 'mockjs';

let dataList = mockjs.mock({
  code: 200,
  msg: '学员获取成功',
  'data|100': [
    {
      'id|+1': 1,
      name: '@cname',
      score: '@integer(50,100)',
      city: '@city',
      time: '@date',
    },
  ],
});
export default {
  // ⽀持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  '/api/users/1': { id: 1 },
  // ⽀持⾃定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
  'GET /api/stu': mockjs.mock({
    code: 1,
    msg: '学员列表加载成功',
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
  'GET /classes/stu': dataList,
  'Delete /classes/stu': (req, res) => {
    for (let i = 0; i < dataList.data.length; i++) {
      if (dataList.data[i].id == req.query.id) {
        dataList.data.splice(i, 1); //?从第i项下标开始删除，删除1项
        res.send({
          code: 200,
          mag: '删除成功',
        });
        return;
      }
    }
    res.send({
      code: 200,
      msg: '删除失败',
    });
  },
};
