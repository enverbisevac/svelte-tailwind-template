<script>
  export let title;
  export let center;
  export let menu;
</script>

<nav class="flex bg-primary p-3">
  <div class="flex flex-1 text-on-primary mr-6 items-center">
    <span class="font-semibold text-xl tracking-tight text-on-primary">
      {title}
    </span>
  </div>
  {#if center}
    <div class="flex flex-initial text-center items-center">{center}</div>
  {/if}
  {#if menu}
    <div class="flex flex-1 text-right items-center">{menu}</div>
  {/if}
</nav>
