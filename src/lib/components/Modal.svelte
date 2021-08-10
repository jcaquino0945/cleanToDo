<script lang="ts">
    export let modalName, modalDescription,tasks,addPrompt;

    let title = '', description = '',id;
    let errorMsg = false;

    function addNewTask() {
      if (title == '' && description == '') {
        errorMsg = true;
        console.log('wala laaman')
      }
      else if (title != '' && description != '') {
        let newTask = {
            id:  tasks.length + 1,
            title: title,
            description: description,
            status: 'Pending'
        }
        title='';
        description = '';
        return tasks.push(newTask), 
        tasks = tasks,
        closePrompt();
      }
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
<div class="modal-container" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="modal-flex">
      <div class="modal-overlay" aria-hidden="true"></div>
      <span class="modal-overlay-container" aria-hidden="true">&#8203;</span>
      <div class="modal-box">
        <div class="modal-header-container">
          <div class="modal-header">
            <div class="modal-header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="modal-header-text">
              <h3 id="modal-title">
                {modalName}
              </h3>
              <div class="mt-2">
                <p>
                  {modalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
            <div class="modal-body-bg">
              <div class="mb-4">
                <label for="title">
                  Title
                </label>
                <input id="title" type="text" placeholder="My New Task" bind:value={title}>
                {#if errorMsg == true}<!-- unchecked -->
                <p class="modal-body-error">Please enter the title of your task.</p>{/if}
              </div>
              <div class="mb-4">
                <label for="description">
                  Description
                </label>
                <input id="description" type="text" placeholder="Description Of My New Task" bind:value={description}>
                {#if errorMsg == true}
                <p class="modal-body-error">Please enter the description of your task.</p>{/if}
              </div>
            </div>
          </div>
        <div class="modal-btn-container">
          <button type="button" class="modal-add-btn" on:click={() => addNewTask()}>
            Add New Task
          </button>
          <button type="button" class="modal-cancel-btn" on:click={() => closePrompt()}>
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
    .modal-container {
      @apply fixed z-10 inset-0 overflow-y-auto
    }
    .modal-flex {
      @apply flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0;
    }
    .modal-overlay {
      @apply fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity
    }
    .modal-overlay-container {
      @apply hidden sm:inline-block sm:align-middle sm:h-screen
    }
    .modal-box {
      @apply inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full;
    }
    .modal-header-container {
      @apply bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4
    }
    .modal-header {
      @apply sm:flex sm:items-start
    }
    .modal-header-icon {
      @apply mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10;
    }
    .modal-header-text {
      @apply mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left
    }
    .modal-header h3 {
      @apply text-lg leading-6 font-medium text-gray-900
    }
    .modal-header p {
      @apply text-sm text-gray-500
    }
    .modal-body {
      @apply w-full h-full
    }
    .modal-body-bg {
      @apply bg-white rounded px-8 pt-6 pb-8
    }
    .modal-body label {
      @apply block text-gray-700 text-sm font-bold mb-2
    }
    .modal-body input {
      @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
    }
    .modal-body-error {
      @apply text-red-500 text-xs italic
    }
    .modal-btn-container {
      @apply bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse;
    }
    .modal-cancel-btn {
      @apply mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
    }
    .modal-add-btn {
      @apply w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm
    }
</style>