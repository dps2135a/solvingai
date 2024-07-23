export interface FooterItem {
  title: string;
  items: string[]
}

export const mockFooterData: FooterItem[] = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
  },
  {
    title: 'Resources',
    items: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
  },
  {
    title: 'Social',
    items: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble'],
  },
  {
    title: 'Legal',
    items: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
  },
];
