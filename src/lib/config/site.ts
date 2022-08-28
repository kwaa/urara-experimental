import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: 'urara-experimental.vercel.app',
  title: 'Urara@Experimental',
  subtitle: 'Experimental fork of Urara for testing Indiekit, Micropub, etc.',
  lang: 'zh',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: '藍+85CD',
    avatar: 'https://kwaa.dev/assets/maskable@192.webp',
    status: '🌌',
    bio: 'Experimental fork of Urara for testing Indiekit, Micropub, etc.'
  },
  themeColor: '#3D4451'
}
