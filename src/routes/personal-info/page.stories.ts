import Page from './+page.svelte';
import Layout from '../+layout.svelte'

export default {
    title:"Pages/Personal Info",
	component: Page,
    decorators: [()=> Layout]
};
 
export const personal_info = {}
