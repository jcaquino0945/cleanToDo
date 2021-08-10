<script lang="ts">
    import { onMount } from 'svelte';
    import { taskStore } from '../services/taskStore';
    import Task from './Task.svelte'

    let myTasks = [];

    onMount(async () => {
		myTasks = taskStore.getAll();
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

<style lang="postcss">
.task-section {
    @apply h-auto;
}
</style>
