<script lang="ts">
  export let icon,type;
  import { getContext } from 'svelte';
  import DialogContent from './DialogContent.svelte';

  const { open } = getContext('simple-modal');

  const showSurprise = () => {
    if (type == 'Comment') {
      open(DialogContent, { message: "Add a comment!" , type: "Comment"});
    } else if (type == 'Add') {
      open(DialogContent, { message: "Add a task!" });
    }
  };
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="addIcon" viewBox="0 0 20 20" fill="currentColor" on:click={showSurprise}>
    <path fill-rule="evenodd" d={icon} clip-rule="evenodd" />
</svg>


<style lang="postcss">
.addIcon {
        @apply h-6 w-6 mr-3;
    }
</style>
