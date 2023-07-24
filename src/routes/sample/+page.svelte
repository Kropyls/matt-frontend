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
  <h1 class="m-auto text-3xl text-gray-700 font-bold mb-5">Sample Form</h1>

  <form
    use:form
    on:felteerror="{handleError}"
    action="/sample-submit"
    method="post"
    class="m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div>
      <p class="text-gray-700 text-base font-bold text-center">Section 1</p>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="dummy-var1">
          dummy-var1
        </label>
        <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="dummy-var1" type="text" placeholder="dummy-var1">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="dummy-var2">
          dummy-var2
        </label>
        <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        name="dummy-var2">
      </div>
    </div>

    <div>
      <p class="text-gray-700 text-base font-bold text-center">Section 2</p>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2"
        for="dummy-var3">
          dummy-var3
        </label>
        <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="dummy-var3" type="text" placeholder="dummy-var3">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="dummy-var4">
          dummy-var4
        </label>
        <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        name="dummy-var4">
      </div>
    </div>

    <div class="flex items-center justify-between">
      <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      >Send data
      </button>
    </div>
  </form>

  <p class="m-auto text-center text-gray-500 text-xs">
    &copy;2023 Nobody. All rights reserved.
  </p>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.100);
  }
</style>
