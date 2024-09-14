<template>
  <div>
    <p>Split</p>
    <div class="split">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>