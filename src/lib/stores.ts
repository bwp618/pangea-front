import { readable, writable } from 'svelte/store';
import type { SvelteComponent } from 'svelte';
import Api from './api';
import type { Category } from './domain';

//const c = Api.get<Category>("").one().then(c=>c.name);
