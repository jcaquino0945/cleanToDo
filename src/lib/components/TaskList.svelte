<script lang="ts">
    import { writable } from 'svelte/store';
    import { onMount } from 'svelte';
    import { taskStore } from '../services/taskStore';
    import Task from './Task.svelte'
    export const modal = writable(null);
    import NewTaskDialog from './NewTaskDialog.svelte'

    let myTasks = [];

    onMount(async () => {
		myTasks = taskStore.getAll();
        taskSort()
    })

    function taskSort() {
        myTasks.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
    }

    function refresh(event) {
		myTasks = taskStore.getAll();
        taskSort();
        console.log(event.detail.text);
	}

</script>

<div class="task-section">
    {#each myTasks as task}
        <Task task={task} on:message={refresh}></Task>
    {/each}
</div>
<NewTaskDialog on:message={refresh}></NewTaskDialog>

<style lang="postcss">
.task-section {
    @apply h-auto;
}
</style>
