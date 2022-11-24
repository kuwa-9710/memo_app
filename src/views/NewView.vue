<template>
    <MemoForm memo=""></MemoForm>
</template>

<script>
// exportされているものをインポートする
import MemoForm from "@/components/MemoForm.vue";
// NewView自体もコンポーネントとして利用するため、export
export default {
  name: "NewView",
  components: {
    MemoForm,
  },
};
</script>
