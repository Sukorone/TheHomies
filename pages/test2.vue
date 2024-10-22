<template>
  <th-tab :names="tabs" v-model="asd" />
</template>

<script setup>


const asd = ref();
const tabs = [
  { label: "1234", id: "1" },
  { label: "х12131242уй", id: "2" },
  { label: "чмо412341вввв", id: "3" },
  { label: "са12341ня ", id: "4" },
];

tabs.sort(function (a, b) {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
});
</script>
