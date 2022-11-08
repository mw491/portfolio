<script lang="ts">
    import type { Project } from '../data';
    export let project: Project;
</script>

<main class="p-4 border-2 border-white text-start">
    <img src="{project.image}" alt="{project.title} screenshot" class="w-full s:h-36 md:h-72">
    <p class="font-bold text-xl text-blue-200 p-2"><a href="{project.link}">{project.title}</a></p>
    <p class="text-blue-100 p-2">{project.description}</p>
    <div class="flex gap-2 p-2">
        {#each project.tags as tag}
            <p class="px-3 py-[0.2rem] text-blue-200 border-2 border-blue-200 rounded-md">{tag}</p>
        {/each}
    </div>
</main>