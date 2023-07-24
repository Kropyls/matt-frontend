<script>
  import { createForm } from 'felte';

  const { form } = createForm()
  function handleError(event) {
    const { error, ...context } = event.detail;
    // `FelteSubmitError` contains a `response` property
    // with the response from `fetch`
    const response = error.response;
    // Do something with the error
  }
</script>

<div class="m-auto w-full max-w-xs flex-col h-screen py-16">
  <h1 class="m-auto text-3xl text-gray-700 font-bold mb-5">Matt's App!</h1>

  <form
    use:form
    on:felteerror="{handleError}"
    action="/login"
    method="post"
    class="m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      name="username" type="text" placeholder="Username">
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      name="password" type="password" placeholder="******************">
    </div>

    <div class="flex items-center justify-between">
      <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      >Sign In
      </button>
      <a
      class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
      href="http://dummy-site.com/forgot-pw">
        Forgot Password?
      </a>
    </div>

  </form>

  <div class="m-auto text-center">
    <label class="text-gray-700" for="create-account">Need access?</label>
    <a href="http://dummy-site.com/create-account" 
    class="text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-800 focus:text-neutral-800 active:text-neutral-900 dark:text-neutral-900 dark:hover:text-neutral-900 dark:focus:text-neutral-900 dark:active:text-neutral-900"
      >Create Account
    </a>
  </div>
  <p class="m-auto text-center text-gray-500 text-xs">
    &copy;2023 Nobody. All rights reserved.
  </p>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.100);
  }
</style>
