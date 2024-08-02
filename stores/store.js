import { defineStore } from 'pinia'

export const userStore = defineStore('store', {
  state: () => ({
    message: 'hello world',
  }),
  getters: {
    getMessage(state) {
      return state.message
    },
  },
  actions: {
    setMessage(message) {
      this.message = message
    },
  },
})