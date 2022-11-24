<template>
  <MemoForm :memo="memo"></MemoForm>
</template>

<script>
import MemoForm from '@/components/MemoForm.vue'
export default {
  name: "EditView",
  components: {
    MemoForm,
  },
  computed: {
    memo() {
      const id = parseInt(this.$route.params.id);
      return this.$store.getters.getMemoById(id);
    },
  },
};
</script>
