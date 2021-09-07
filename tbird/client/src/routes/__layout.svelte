<script lang="ts">
  import Header from "$lib/header/Header.svelte";
  import "../assets/style.css";
  import { onMount } from "svelte";
  import { login } from "../feathersClient";

  onMount(() => login());
</script>

<Header />

<main>
  <slot />
</main>

<footer>Sharing is caring</footer>
