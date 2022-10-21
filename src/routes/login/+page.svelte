<script lang="ts">
	import Section from '$lib/Section.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<Section>
	<form method="post">
		<input type="email" name="email" id="email" placeholder="Email" />
		<input type="password" name="password" id="password" placeholder="Password" />

		<button type="submit">Login</button>
	</form>

	{#if form?.missing}
		<p>Email or Password incorrect.</p>
	{/if}
</Section>
