import { defineStore } from 'pinia'

export const userStore = defineStore('store', {
  state: () => ({
    message: 'hello world',
    activePostsStatus: 'home',
    userStatus: 'all',
    isShowPostModal: false,
    posts: [
      {
        id: 1,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '1',
        date: 'Mar 16, 2020',
        category: 'Marketing',
        status: 'active',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 2,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 2,
        date: 'Mar 16, 2020',
        category: 'CS',
        status: 'exchange',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 3,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'sold',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 4,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 4,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'active',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 5,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 5,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'active',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 6,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 2,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'active',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 7,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 1,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'active',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 8,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 4,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'sold',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 9,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 3,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'exchange',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 10,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 2,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'active',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 11,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 1,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'active',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
      {
        id: 12,
        title: 'Boost your conversion rate',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 2,
        date: 'Mar 16, 2020',
        category: 'computer science',
        status: 'sold',
        author: {
          id: '111-aaa-222',
          phone_number: '03120527219',
          email: 'autor@gmail.com',
          name: 'Michael Foster',
        },
      },
    ],
    users: [
      { id: 1, name: 'john', email: 'johd@gmail.com', avatar: '', status: 'active', phone_number: '123-456-789' },
      { id: 2, name: 'john', email: 'johd@gmail.com', avatar: '', status: 'active', phone_number: '123-456-789' },
      { id: 3, name: 'john', email: 'johd@gmail.com', avatar: '', status: 'pending', phone_number: '123-456-789' },
      { id: 4, name: 'john', email: 'johd@gmail.com', avatar: '', status: 'active', phone_number: '123-456-789' }
    ]
  }),
  getters: {
    getMessage(state) {
      return state.message
    },
    getPosts(state) {
      if (state.activePostsStatus !== 'home') {
        return state.posts.filter((post) => post.status === state.activePostsStatus)
      }
      return state.posts
    },
    getPostModalStatus(state) {
      return state.isShowPostModal
    },
    getUsers(state) {
      if(state.userStatus !== 'all') {
        return state.users.filter((user) => user.status === state.userStatus)
      }
      return state.users
    }
  },
  actions: {
    setMessage(message) {
      this.message = message
    },
    setPostsStatus(status) {
      this.activePostsStatus = status
    },
    setPostModalStatus(status) {
      this.isShowPostModal = status
    },
    setUsersStatus(status) {
      this.userStatus = status
    },
    addUser(user) {
      this.users.push(user)
    }
  },
})