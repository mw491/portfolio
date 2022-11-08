<script lang="ts">
    import { type Project, projects } from '../data';
    import ProjectCard from './ProjectCard.svelte'

    let page = 1;

    const setPageOne = () => page = 1;
    const setPageTwo = () => page = 2;
    const setPageThree = () => page = 3;
</script>

<main class="flex flex-col justify-center items-center w-[100vw] h-[90vh]">
    <h1 class="text-5xl p-3 mb-6 text-yellow-200 font-bold cursive">My Projects:</h1>
    <div class="flex flex-row flex-wrap max-w-[90vw] gap-4">
        {#each projects as project}
            {#if project.page === page}
                <ProjectCard {project} />
            {/if}
        {/each}
    </div>
    <div class="text-3xl">
        <button class="mt-8 p-3 px-5 rounded-md bg-neutral-900 text-yellow-200" class:bg-neutral-700={page === 1} on:click={setPageOne}>1</button>
        <button class="mt-8 p-3 px-5 rounded-md bg-neutral-900 text-yellow-200" class:bg-neutral-700={page === 2} on:click={setPageTwo}>2</button>
        <button class="mt-8 p-3 px-5 rounded-md bg-neutral-900 text-yellow-200" class:bg-neutral-700={page === 3} on:click={setPageThree}>3</button>
    </div>
</main>
