<script lang="ts">
    import type { Project } from '../data';
    export let project: Project;
</script>

<main class="p-4 border-2 border-yellow-100 text-start cursive">
    <img src="{project.image}" alt="{project.title} screenshot" class="w-full s:h-36 md:h-72">
    <p class="font-bold text-xl text-yellow-100 p-2"><a class="underline" href="{project.link}">{project.title}</a></p>
    <p class="text-yellow-100 p-2">{project.description}</p>
    <div class="flex gap-2 p-2">
        {#each project.tags as tag}
            <p class="px-3 py-[0.2rem] text-yellow-100 border-2 border-yellow-100 rounded-md">{tag}</p>
        {/each}
    </div>
</main>
