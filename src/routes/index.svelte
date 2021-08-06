<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Menu from '../lib/components/Menu.svelte';
  import Tasks from '../lib/components/Tasks.svelte';
  import Modal from '../lib/components/Modal.svelte';
  export let currentProp = {}

  let name = 'Miguel' // for banner name
  let tasks = [
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
{#key currentProp}
<Tasks tasks={tasks}></Tasks>
{/key}
<Modal modalName={'Add New Task'} modalDescription={'Input the title and description of your new task!'} tasks={tasks} addPrompt={addPrompt} currentProp={currentProp}></Modal>



<style lang="postcss">
  
</style>
