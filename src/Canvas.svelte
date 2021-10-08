<script lang="ts">
    import { onMount } from 'svelte'

    export let bg : string
    export let applicants : ((canvas : HTMLCanvasElement) => void)[]
        = []

    let canvas : HTMLCanvasElement

    onMount(() => {
        canvas.style.backgroundColor = bg
        applicants.forEach(f => f(canvas))
        console.log('yoooo')
    })
</script>

<canvas bind:this={canvas}/>

<style>
    canvas {
        border-bottom: 1px solid grey;
        width: 100%;
        height: 100%;
        margin: auto;
    }
</style>