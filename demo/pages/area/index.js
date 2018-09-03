import Basic from './basic';
import WithNegative from './with-negative';
import AreaNone from './area-none';
import WithNegativeNotStartOnZero from './with-negative-not-start-on-zero';

export default [
  {
    path: 'area/basic',
    meta: { name: '基础面积图' },
    component: Basic,
  },
  {
    path: 'area/with-negative',
    meta: { name: '带负值面积图' },
    component: WithNegative,
  },
  {
    path: 'area/area-none',
    meta: { name: '区域图（存在空值）' },
    component: AreaNone,
  },
  {
    path: 'area/with-negative-not-start-on-zero',
    meta: { name: '带负值面积图（x 基线不为 0）' },
    component: WithNegativeNotStartOnZero,
  },
];
