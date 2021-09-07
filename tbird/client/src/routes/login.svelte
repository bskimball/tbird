<script lang="ts">
  import { goto } from "$app/navigation";
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
  import { login } from "../feathersClient";

  let showPassword = false;

  function toggleShowPassword() {
    showPassword = !showPassword;
    document.querySelector("#password").type = showPassword
      ? "text"
      : "password";
  }

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email(),
      password: yup.string().min(6),
    }),
    onSubmit: async (values) => {
      const response = await login(values);
      console.log({ response });
      if (response.user) goto("/messages");
    },
  });
</script>

<div class="container mx-auto">
  <h1 class="text-4xl font-semibold leading-loose mb-4">Login</h1>
  <form class="flex flex-col space-y-4" on:submit={handleSubmit}>
    <div class="flex flex-col">
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        on:change={handleChange}
        on:blur={handleChange}
        bind:value={$form.email}
        autocomplete="username"
      />
      {#if $errors.email}
        <span>{$errors.email}</span>
      {/if}
    </div>
    <div class="flex flex-col">
      <label for="password">Password</label>
      <div class="flex items-center">
        <input
          type="password"
          name="password"
          id="password"
          class="w-full pr-10"
          on:change={handleChange}
          on:blur={handleChange}
          bind:value={$form.password}
          autocomplete="current-password"
        />
        <button
          type="button"
          on:click={toggleShowPassword}
          class="-ml-8 z-1 text-gray-600"
        >
          <Fa icon={showPassword ? faEyeSlash : faEye} fw />
        </button>
      </div>
      {#if $errors.password}
        <span class="text-red-500">{$errors.password}</span>
      {/if}
    </div>
    <div>
      <button
        type="submit"
        class="bg-black text-white font-semibold py-2 px-4 shadow"
      >
        Submit
      </button>
    </div>
  </form>
</div>
