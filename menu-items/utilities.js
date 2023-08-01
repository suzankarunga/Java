// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'Pages',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'incident-page',
      title: 'Incident Page',
      type: 'item',
      url: '/incident-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'util-incident-log',
      title: 'Incident-input',
      type: 'item',
      url: '/insert',
      icon: icons.FontSizeOutlined
    }
  ]
};

export default utilities;
