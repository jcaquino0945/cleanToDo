<script lang="ts">
    import { taskStore } from '../services/taskStore';
    import { Task } from '../models/task';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let newTask = new Task();
    let open = false;

    function openModal() {
        open = true;
    }

    function closeModal() {
        open = false;
    }

    function addTask() {
        taskStore.add(newTask)
        sayHello();
    }

    function sayHello() {
		dispatch('message', {
			text: 'Added New Task!'
		});
	}

</script>

<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" on:click={() => openModal()}>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

{#if open == true}
<div class="modal-container">  
    <div class="modal-body">
        <h1 class="dialog-header">Add A New Task</h1>
        <br>
        <div class="modal-body-bg">
            <div class="mb-4">
              <label for="title">
                Title
              </label>
              <input id="title" type="text" placeholder="Input your title" bind:value={newTask.title}>
              <p class="modal-body-error">Please input your title here</p>
            </div>
            <div class="mb-4">
                <label for="description">
                  Description
                </label>
                <input id="description" type="text" placeholder="Input your description" bind:value={newTask.description}>
                <p class="modal-body-error">Please input your description here</p>
              </div>
            <div class="modal-btn-container">
                <button type="button" class="modal-add-btn" on:click={() => addTask()}>
                  Add Task
                </button>
                <button type="button" class="modal-close-btn" on:click={() => closeModal()}>
                    Close
                </button>
            </div>
        </div>
    </div>
</div>
{/if}

<style lang="postcss">
.modal-container {
    position: fixed;
    top:35%;
    left: 50%;
    border: 1px solid black;
    transform: translate(-50%, 0);
    width: 60%;
    height: auto;

}
.dialog-header {
    @apply text-center text-2xl;
    font-family: 'Antonio', sans-serif;
}
.modal-body {
    @apply w-auto h-full p-4 bg-white rounded
}
.modal-body-bg {
    @apply rounded w-full h-full
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
      @apply  px-4 py-1 sm:px-6 sm:flex sm:flex-row-reverse;
}
.modal-cancel-btn {
      @apply mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
}
.modal-add-btn {
      @apply w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm
}
.modal-close-btn {
      @apply w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm
}
</style>