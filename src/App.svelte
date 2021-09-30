<script lang="ts">
	export let name : string

	import Editor from './Editor.svelte'
	import Viewer from './Viewer.svelte'

	console.log('name = ',name)

	type Tab = 'edit' | 'view'
	let tab : Tab = 'edit' 

	function switchTab(e : Event) {
		const elem = e.target as HTMLInputElement
		tab = elem.value as Tab
	}
</script>

<main>
	<div class="top-row">
		<h1>VisualSynth</h1>
		edit
		<input type="radio" name="view" value="edit" checked on:input={switchTab}>
		view
		<input type="radio" name="view" value="view" on:input={switchTab}>
	</div>

	<div>
		{#if tab === 'edit'}
			<Editor/>
		{:else if tab === 'view'}
			<Viewer/>
		{/if}
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		border: 1px solid red;
	}
	
	.top-row {
		display: block;
		text-align: center;
		margin: 0 auto;
		border-bottom: 1px solid green;
		width: 100%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		display: inline-block;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>