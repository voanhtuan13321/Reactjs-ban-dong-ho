/** Icons are imported separatly to reduce build time */
import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  Squares2X2Icon,
  TableCellsIcon,
  WalletIcon,
  CodeBracketSquareIcon,
  DocumentIcon,
  ExclamationTriangleIcon,
  CalendarDaysIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  Cog6ToothIcon,
  BoltIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  InboxArrowDownIcon,
  UsersIcon,
  KeyIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: '/admin/brands',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Brands',
  },
  {
    path: '/admin/products',
    icon: <ArchiveBoxIcon className={iconClasses} />,
    name: 'Products',
  },
  {
    path: '/admin/orders',
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: 'Orders',
  },
  {
    path: '/admin/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Dashboard',
  },
  {
    path: '/admin/leads', // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: 'Leads', // name that appear in Sidebar
  },
  {
    path: '/admin/transactions', // url
    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
    name: 'Transactions', // name that appear in Sidebar
  },
  {
    path: '/admin/charts', // url
    icon: <ChartBarIcon className={iconClasses} />, // icon component
    name: 'Analytics', // name that appear in Sidebar
  },
  {
    path: '/admin/integration', // url
    icon: <BoltIcon className={iconClasses} />, // icon component
    name: 'Integration', // name that appear in Sidebar
  },
  {
    path: '/admin/calendar', // url
    icon: <CalendarDaysIcon className={iconClasses} />, // icon component
    name: 'Calendar', // name that appear in Sidebar
  },

  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu: [
      {
        path: '/login',
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Login',
      },
      {
        path: '/register', //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: 'Register', // name that appear in Sidebar
      },
      {
        path: '/forgot-password',
        icon: <KeyIcon className={submenuIconClasses} />,
        name: 'Forgot Password',
      },
      {
        path: '/admin/blank',
        icon: <DocumentIcon className={submenuIconClasses} />,
        name: 'Blank Page',
      },
      {
        path: '/admin/404',
        icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
        name: '404',
      },
    ],
  },
  {
    path: '', //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu: [
      {
        path: '/admin/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: 'Profile', // name that appear in Sidebar
      },
      {
        path: '/admin/settings-billing',
        icon: <WalletIcon className={submenuIconClasses} />,
        name: 'Billing',
      },
      {
        path: '/admin/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses} />, // icon component
        name: 'Team Members', // name that appear in Sidebar
      },
    ],
  },
  {
    path: '', //no url needed as this has submenu
    icon: <DocumentTextIcon className={`${iconClasses} inline`} />, // icon component
    name: 'Documentation', // name that appear in Sidebar
    submenu: [
      {
        path: '/admin/getting-started', // url
        icon: <DocumentTextIcon className={submenuIconClasses} />, // icon component
        name: 'Getting Started', // name that appear in Sidebar
      },
      {
        path: '/admin/features',
        icon: <TableCellsIcon className={submenuIconClasses} />,
        name: 'Features',
      },
      {
        path: '/admin/components',
        icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
        name: 'Components',
      },
    ],
  },
];

export default routes;
