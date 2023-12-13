import { writable } from 'svelte/store'

export const isMobileMenuOpen = writable(false)

export const navItems = writable([
  {
    title: 'درباره آیدی‌پی',
    href: 'javascript:',
  },
  {
    title: 'سوالات متداول',
    href: 'javascript:',
  },
  {
    title: 'تماس با ما',
    href: 'javascript:',
  },
  {
    title: 'اپلیکیشن',
    href: 'javascript:',
  },
  {
    title: 'مستندات API',
    href: 'javascript:',
  },
])
