import { Table, message, Button, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { stuGet, stuDel } from '@/api/api';
export default function Student() {
  const [tableData, setTableData] = useState();
  const tableRef: any = useRef();
  useEffect(() => {
    reload();
  }, []);
  const reload = () => {
    stuGet().then((res: any) => {
      // console.log(res, 'res');
      if (res.code == 200) {
        setTableData(res.data);
      } else {
        message.error('失败' + res.errMsg);
      }
    });
  };
  const columns = [
    {
      title: '姓名',
      render(_: any, record: any) {
        return <Button type="link">{record.name}</Button>;
      },
    },
    {
      title: '分数',
      dataIndex: 'score',
    },
    {
      title: '城市',
      dataIndex: 'city',
    },
    {
      title: '生日',
      dataIndex: 'time',
    },
    {
      title: '城市',
      dataIndex: 'city',
    },
    {
      title: '操作',
      dataIndex: 'city',
      render(_: any, record: any) {
        return (
          <>
            <Space>
              <Button type="primary" key="编辑" size="small">
                编辑
              </Button>
              <Button
                type="primary"
                size="small"
                key="删除"
                onClick={() =>
                  stuDel(record.id).then((res) => {
                    console.log(res, 'res');
                    reload()
                    // tableRef?.current?.reload();
                  })
                }
                danger
              >
                删除
              </Button>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        ref={tableRef}
        dataSource={tableData}
        columns={columns}
        rowKey="id"
      />
      ;
    </div>
  );
}
