import {HomeIcon,ExploreIcon, ProfileIcon, WalletIcon, ProfilePlusIcon, CircleIcon, SettingsIcon, NotificationIcon} from '@/assets'

export const titles = [
    'Marketing Specialist',
    'Senior Developer',
    'Product Manager',
    'UX/UI Designer',
    'Business Analyst',
    'Customer Success Manager',
    'Sales Director',
    'HR Manager',
    'Software Engineer',
    'Digital Marketing Expert',
    'Finance Officer',
    'Content Strategist',
  ];

export const staff = [
    {
        name: 'Emmanuel Chisom Eze',
        title: 'Leadership & Business',
        img: '/m.png'
    },
    {
        name: 'Stella Ogochukwu',
        title: 'Professional/Expert',
        img: '/w.png'
    },
    {
        name: 'Alex Johnson',
        title: 'Marketing Specialist',
        img: '/m.png'
    },
    {
        name: 'Rachel Adams',
        title: 'Senior Developer',
        img: '/w.png'
    },
    {
        name: 'Michael Smith',
        title: 'Product Manager',
        img: '/m.png'
    },
    {
        name: 'Sophia Brown',
        title: 'UX/UI Designer',
        img: '/w.png'
    },
    {
        name: 'David Lee',
        title: 'Business Analyst',
        img: '/m.png'
    },
    {
        name: 'Emma Davis',
        title: 'Customer Success Manager',
        img: '/w.png'
    },
    {
        name: 'James Wilson',
        title: 'Sales Director',
        img: '/m.png'
    },
    {
        name: 'Olivia Martinez',
        title: 'HR Manager',
        img: '/w.png'
    },
    {
        name: 'Daniel Harris',
        title: 'Software Engineer',
        img: '/m.png'
    },
    {
        name: 'Isabella Clark',
        title: 'Digital Marketing Expert',
        img: '/w.png'
    },
   
]

export interface NavLink {
    icon: any;
    text: string;
    path: string;
    alert?:boolean;
  }
export const navlinks: NavLink[] = [
    {
      icon: HomeIcon,
      text: 'Home',
      path: '/',
    },
    {
      icon: ExploreIcon,
      path: '/explore',
      text: 'Explore',
    },
    {
      icon: ProfileIcon,
      path: '/profile',
      text: 'Profile',
    },
    {
      icon: NotificationIcon,
      path: '/notification',
      text: 'Notification',
      alert: true,
    },
    
    
    {
      icon: WalletIcon,
      path: '/wallet',
      text: 'Wallet',
    },
    {
      icon: ProfilePlusIcon,
      path: '/your-circle',
      text: 'Your Circle',
    },
    {
      icon: CircleIcon,
      path: '/get-verified',
      text: 'Get Verified',
    },
    {
      icon: SettingsIcon,
      path: '/settings',
      text: 'Settings',
    },
  ];
