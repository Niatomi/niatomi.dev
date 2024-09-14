<template>
  
  <div>pos: {{ x }}, {{ y }}</div>
</template>

<script setup>
const { x, y } = useMouse();
const resp = await $fetch("/api/v1/hello");

console.log(resp);
</script>