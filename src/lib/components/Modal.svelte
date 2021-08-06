<script lang="ts">
    export let modalName, modalDescription,tasks,addPrompt,currentProp;

    console.log(currentProp)
    let title, description,id;

    function addNewTask() {
        let newTask = {
            id:  tasks.length + 1,
            title: title,
            description: description,
            status: 'Pending'
        }
        console.log(newTask)
        tasks = [...tasks, newTask];
        currentProp = {};
        console.log(tasks)
    }

    function closePrompt() {
        addPrompt = false
        console.log('closed');
    }

    function showPrompt() {
        addPrompt = true;
        console.log('open');
    }
</script>
<svg xmlns="http://www.w3.org/2000/svg" class="addIcon" viewBox="0 0 20 20" fill="currentColor" on:click={() => showPrompt()}>
    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
</svg>

{#if addPrompt == true}<!-- unchecked -->
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {modalName}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  {modalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-full">
            <div class="bg-white rounded px-8 pt-6 pb-8">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                  Title
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="My New Task" bind:value={title}>
                {#if title == ''}<!-- unchecked -->
                <p class="text-red-500 text-xs italic">Please enter the title of your task.</p>{/if}
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                  Description
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description Of My New Task" bind:value={description}>
                {#if description == ''}
                <p class="text-red-500 text-xs italic">Please enter the description of your task.</p>{/if}
              </div>
            </div>
          </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" disabled='{title == '' && description == ''}' on:click={() => addNewTask()}>
            Add New Task
          </button>
          <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" on:click={() => closePrompt()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  {/if}

<style lang="postcss">
    .addIcon {
        @apply h-8 w-8 z-50 right-4 bottom-5 text-white fixed bg-blue-500 rounded-full bg-clip-content bg-cover opacity-70
    }
</style>