import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  // 状態管理（どういうデータを保存するのか）
  state: {
    count: 0,
    memos: [],
  },
  // データを取得
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  // データを保存、編集、削除s
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION, 
    // save memo
    save(state, newMemo) {
      if (newMemo.id) {
        // idと一致するメモを取り出す
        let memo = state.memos.find(memo => memo.id === newMemo.id)
        // 取り出したmemoを上書きする
        memo.title = newMemo.title
        memo.content = newMemo.content
      } else {
        // countに+1してあげたものをidとして設定
        newMemo.id = ++state.count
        // unshiftとは配列の先頭にデータを挿入すること
        state.memos.unshift(newMemo)
      }
    },
    delete (state, id) {
      // deleteにはさまざまなやり方があるが、この方法は、指定したもの以外のすべての配列を入れ直すというやり方
      // 今回はデータ量も少ないためこの方法が1番簡単
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  },
  // 非同期通信
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
