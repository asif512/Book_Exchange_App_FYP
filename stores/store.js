import { defineStore } from 'pinia'
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const userStore = defineStore('store', {
  state: () => ({
    message: 'hello world',
    isLoading: false,
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
    users: []
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
      if (state.userStatus !== 'all') {
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
    setLoaderStatus(status) {
      this.isLoading = status
    },

    // firebase actions
    async getAllUsers() {
      try {
        const firestore = useNuxtApp().$firestore;
        const querySnapshot = await getDocs(collection(firestore, 'users'));
        const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.users = users
      } catch (error) {
        console.log({ error })
      } finally {
        this.isLoading = false
      }
    },
    async addUser(user) {
      try {
        const firestore = useNuxtApp().$firestore;
        await addDoc(collection(firestore, 'users'), user);
      } catch (error) {
        console.log({ error })
      }
    }

  },
})