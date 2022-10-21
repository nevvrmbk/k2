<script lang="ts">
	async function getUser() {
		const response = await fetch('https://randomuser.me/api/');
		const results = await response.json();

		if (response.ok && response.status == 200) {
			return results;
		} else {
			throw new Error(results);
		}
	}
</script>

<svelte:head>
	<title>Document</title>
</svelte:head>

<section class="flex flex-col justify-center items-center bg-white h-screen">
	<h1>Welcome to Dotts</h1>
	<p>
		You are not logged in!
		<a href="/login">Login</a>
		<a href="/signup">Signup</a>
	</p>

	{#await getUser()}
		<p>Getting a user...</p>
	{:then data}
		{@const values = data.results}
		{#each values as { email, name: { first, last }, picture: { large } }}
			<figure class="flex flex-col justify-center items-center">
				<img src={large} alt="{first}-{last}" />
				<figcaption>
					<p>{first} {last}</p>
					<p>{email}</p>
				</figcaption>
			</figure>
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</section>
