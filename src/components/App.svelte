<script>
    import Projects from './Projects.svelte';
    import Footer from './Footer.svelte';
</script>
<main class="h-[100vh] w-[100vw]">
    <div class="bg-image ml-0 flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-neutral-900">
        <h1 class="p-5 text-9xl title opacity-80 font-bold text-yellow-200">Musa</h1>
        <p class="p-5 text-6xl title opacity-70 text-yellow-200">Digital Craftsman</p>
    </div>

    <Projects />

    <Footer />
</main>

<style global>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Marker+Hatch&display=swap');

    .title {
        font-family: 'Rubik Marker Hatch';
    }
    .cursive {
        font-family: 'Permanent Marker'
    }

    .bg-image {
        background-image: url("/images/firewatch-dark-minimal.jpg");
        background-size: cover;
        background-position: center;
    }
</style>
