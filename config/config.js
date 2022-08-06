import { defineConfig } from 'umi';
import routes from './routes'
const time = new Date();
let theme = time.getHours() > 18 ? true : false;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  //?配置antd
  antd: {
    dark: theme, //?黑暗主题
    compact: true, //?紧凑主题
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  // mfsu: { production: { output: '.mfsu-production' } },
});
