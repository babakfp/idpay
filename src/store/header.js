import { writable } from 'svelte/store'

export const isMobileMenuOpen = writable(false)

export const navItems = writable([
  {
    title: 'درباره آیدی‌پی',
    href: '#',
  },
  {
    title: 'سوالات متداول',
    href: '#',
  },
  {
    title: 'تماس با ما',
    href: '#',
  },
  {
    title: 'اپلیکیشن',
    href: '#',
  },
  {
    title: 'مستندات API',
    href: '#',
  },
])
