import { readable, writable } from 'svelte/store';



const links: { name: string; url: string; icon?: object }[] = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Member', url: '/member', icon: Team },
  { name: 'Game', url: '/game', icon: Game },
  { name: 'Community', url: '/community', icon: Community },
  { name: 'Support', url: '/support', icon: Support },
  { name: 'Settlement', url: '/settlement', icon: Settlement },
  { name: 'Settings', url: '/settings', icon: Settings }
];
