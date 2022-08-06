import { Button } from 'antd';
import { Link, history } from 'umi';
export default function Index() {
  return (
    <div>
      <Link
        to="/"
        onClick={() => {
          history.push('/');
        }}
      >
        去首页
      </Link>
      <Button
        onClick={() => {
          history.push('/');
        }}
      >
        去首页
      </Button>
      <Button>1223</Button>
    </div>
  );
}
