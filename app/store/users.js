export const state = () => ({
  users: []
})

export const getters = {
  users: (state) => state.users
}

export const mutations = {
  addUser(state, { user }) {
    state.users.push(user)
  },

  addUserPost(state, { user, post }) {
    state.userPosts[user.id].push(post)
  },

  clearUserPosts(state, { user }) {
    state.userPosts[user.id] = []
  }
}

export const actions = {
  async fetchUser({ commit }, { id }) {
    const user = await this.$axios.$get(`/users/${id}.json`)
    commit('addUser', { user })
  }

  // ------------------------------
  // いいね 処理
  // ------------------------------
  // async addLikeLogToUser({ commit }, { user, post }) {
  //   user.likes.push({
  //     created_at: moment().format(),
  //     user_id: user.id,
  //     post_id: post.id
  //   })
  //   const newPost = await this.$axios.$put(`/posts/${user.id}.json`, post)
  //   commit('updatePost', { post: newPost })
  // },

  // ------------------------------
  // いいね取り消し 処理
  // ------------------------------
  // async removeLikeLogToUser({ commit }, { user, post }) {
  //   post.likes = post.likes.filter(like => like.user_id !== user.id) || []
  //   const newPost = await this.$axios.$put(`/posts/${post.id}.json`, post)
  //   commit('updatePost', { post: newPost })
  // }
}
