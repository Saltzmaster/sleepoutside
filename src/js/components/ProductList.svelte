<script>
  import { getProductsByCategory } from "../productData.mjs";
  import ProductSummary from "./ProductSummary.svelte";

  // this is how we make a prop in svelte
  export let category;
  export let categoryHeading;
  // if you are looking at this thinking that's strange to just stop with a promise
  // you would be right.  This will make more sense in a bit...stay tuned.
  let promise = getProductsByCategory(category);
</script>

<h2>Top Products: {categoryHeading}</h2>
<ProductSummary dataPromise={promise} />

<!-- {#await promise}
    <p>Loading</p>    
{:then data}
    <ProductSummary product={data}/>
{:catch error}
    <p>Unable to retrieve data: {error.message}</p>
{/await} -->
