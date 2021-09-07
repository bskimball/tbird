<script lang="ts">
  import feathers from "../feathersClient";
  import { onMount } from "svelte";

  let users = [];

  onMount(async () => {
    const { data } = await feathers.service("users").find();
    users = data;
  });
</script>

<svelte:head>
  <title>Messages</title>
</svelte:head>

<div class="container mx-auto">
  <h1 class="text-4xl leading-loose">Messages</h1>
  <div class="grid grid-cols-4">
    <div class="col-span-1">
      <h2 class="text-2xl font-semibold">Users</h2>
      <ul>
        {#each users as user}
          <li>{user.email}</li>
        {/each}
      </ul>
    </div>
    <div class="col-span-3">
      <p>Test</p>
    </div>
  </div>
</div>
