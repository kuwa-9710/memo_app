<template>
  <!-- v-modelを指定することで、vueと連携することができる -->
  <div><input type="text" v-model="title" /></div>
  <div><textarea v-model="content"></textarea></div>
  <div class="center">
    <!-- clickしたときにsaveを呼び出す -->
    <button @click="save">保存</button>
    <button @click="remove" v-if="memo.id">削除</button>
  </div>
</template>

<!-- テンプレートとして使用するためには、exportする必要がある -->
<script>
export default {
  name: "MemoForm",
  //値を受け取る
  props: [
    "memo"
  ],
  //v-modelの定義
  data() {
    return {
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    // mutationsで定義したものとは別物
    save() {
      let memo = {
        // v-modelを通じてデータを取得
        title: this.title,
        content: this.content,
      };

      //メモのidが入っている場合にはそれも渡す
      if (this.memo.id) {
        memo.id = this.memo.id
      }

      // mutationを呼び出す
      this.$store.commit("save", memo);
      this.$router.push("/");
    },
    remove() {
        this.$store.commit('delete', this.memo.id)
        this.$router.push("/")
    }
  },
};
</script>

<!-- scoped属性を使用することで、このファイルだけで適用することができる。 -->
<style scoped>
div {
  margin-bottom: 10px;
}
input[type="text"] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 30em;
}
button {
  width: 5em;
  margin: 3px;
}
.center {
  text-align: center;
}
</style>
