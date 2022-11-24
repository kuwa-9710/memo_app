<template>
  <div class="form">
    <ul v-if="hasMemos">
      <!-- foreach keyを忘れずに -->
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>メモはありません</p>
  </div>
</template>

<style scoped>
.form {
  text-align: left;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: "HomeView",
  // データを取得したり、渡してくれる
  computed: {
    hasMemos() {
      // 配列の長さを取得して、0ならfase,1以上はtrue
      // gettersを使用すると良い
      return this.$store.getters.getCount;
    },
    memos() {
      return this.$store.getters.getAll;
    },
  },
};
</script>
