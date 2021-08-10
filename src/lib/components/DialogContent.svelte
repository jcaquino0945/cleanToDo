<script>
    import { taskStore } from '../services/taskStore';
    import { Task } from '../models/task';
    import { createEventDispatcher } from 'svelte';
    export let message, type;

    let comment,
        description,
        title;

    let newTask = new Task();

    function addComment() {
        taskStore.add(newTask);
        dispatcher.dispatch('onTaskAddedSuccessfully', {newTask});
        // publish an event        
        /*
        let newTask = {
            id:  myTasks.length + 1,
            title: title,
            description: description,
            status: 'Pending',
            comments: [comment]
        }
        return myTasks.push(newTask), 
        myTasks = myTasks
        */
    }
    
    function addTask() {
        /*
        let newTask = {
            id:  myTasks.length + 1,
            title: title,
            description: description,
            status: 'Pending',
            comments: []
        }
        return myTasks.push(newTask), 
        myTasks = myTasks,
        console.log(myTasks)*/
    }
</script>

<div class="dialog-header">
    {#if type == 'Comment'}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    {:else if type == 'New Task'}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" />
    </svg>
    {/if}
    <h1>{message}</h1>
</div>

{#if type == 'Comment'}
<div class="modal-body">
    <div class="modal-body-bg">
        <div class="mb-4">
          <label for="comment">
            Comment
          </label>
          <input id="comment" type="text" placeholder="Input your comment" bind:value={comment}>
          <p class="modal-body-error">Please input your comment here</p>
        </div>
      </div>
</div>

<div class="modal-btn-container">
    <button type="button" class="modal-add-btn" on:click={() => addComment()}>
      Add Comment
    </button>
</div>
{/if}

{#if type == 'New Task'}
<div class="modal-body">
    <div class="modal-body-bg">
        <div class="mb-4">
          <label for="title">
            Title
          </label>
          <input id="title" type="text" placeholder="Input your task title" bind:value={newTask.title}>
          {#if !title}
          <p class="modal-body-error">Please input your task title here</p>
          {/if}
        </div>
        <div class="mb-4">
            <label for="description">
              Description
            </label>
            <input id="comment" type="text" placeholder="Input your description" bind:value={description}>
            {#if !description}
            <p class="modal-body-error">Please input your task description here</p>
            {/if}
          </div>
      </div>
</div>

<div class="modal-btn-container">
    <button type="button" class="modal-add-btn" on:click={() => addTask()}>
      Add Task
    </button>
</div>
{/if}

<style lang="postcss">
.dialog-header {
    @apply flex w-full h-auto justify-start items-center
}
.dialog-header h1 {
    @apply ml-4 text-lg;
    font-family: 'Antonio', sans-serif;
}
.modal-body {
    @apply w-full h-full
}
.modal-body-bg {
    @apply bg-white rounded px-6 pt-6 pb-4
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
</style>
  
