<script>
    export let message, type;

    console.log(type)
</script>

<div class="dialog-header">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h1>{message}</h1>
</div>
    

<style lang="postcss">
.dialog-header {
    @apply flex w-full h-auto justify-start items-center
    }
.dialog-header h1 {
    @apply ml-4 text-lg;
    font-family: 'Antonio', sans-serif;
}
</style>
  
