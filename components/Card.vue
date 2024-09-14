<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: rgb(27, 27, 27);
  border-radius: $radius;
  width: 100%;
  padding: $padding;
  color: white;
}
</style>