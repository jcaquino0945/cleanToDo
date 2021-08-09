<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Menu from '../lib/components/Menu.svelte';
  import Tasks from '../lib/components/Tasks.svelte';
  import Modal from 'svelte-simple-modal';
  import DialogIcon from '../lib/components/DialogIcon.svelte';
  //import Modal from '../lib/components/Modal.svelte';

  let name = 'Miguel' // for banner name
  export let tasks = [
    { id: '0', title: 'Feed The Dogs!', description: 'Remember to feed phairo and phaira!', status: 'Pending'},
    { id: '1', title: 'Study UI/UX Design Best Practices', description: 'Catch up on saved ui/ux videos on coursera', status: 'Pending'},
    { id: '2', title: 'Meeting With Client', description: 'E-commerce App Test', status: 'Completed'}
  ]
    let addPrompt = false;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Tailwind 2</title>
  <meta name="title" content="SvelteKit ❤️ Tailwind 2" />
  <meta name="description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta name="keywords" content="Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript" />
  <meta name="author" content="@dansvel" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta property="og:description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta
    property="og:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta
    property="twitter:description"
    content="SvelteKit and Tailwind 2 toggle dark/light theme demo"
  />
  <meta
    property="twitter:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />
</svelte:head>

<Navbar></Navbar>
<Menu name={name}></Menu>
{#key tasks}
<Tasks tasks={tasks}></Tasks>
{/key}

<div class="addIcon">
  <Modal>
    <DialogIcon icon={'M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'} type={'New Task'}/>
</Modal>
</div>

<style lang="postcss">
.addIcon {
  @apply flex justify-center items-center h-8 w-8 z-50 right-4 bottom-5 text-white fixed bg-blue-500 rounded-full 
}
</style>
