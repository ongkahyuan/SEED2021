import { Tabs } from 'antd';
import { ClaimTable } from './claims';
import { PolicyTable } from './policy';

const items = [
  {
    key: '1',
    label: `Policies`,
    children: <PolicyTable />,
  },
  {
    key: '2',
    label: `Claims`,
    children: <ClaimTable />,
  },
];
const TabBar = () => <Tabs defaultActiveKey="1" items={items} />;
export default TabBar;