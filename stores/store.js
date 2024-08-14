import { defineStore } from 'pinia'
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

export const userStore = defineStore('store', {
  state: () => ({
    message: 'hello world',
    isLoading: false,
    activePostsStatus: 'home',
    userStatus: 'all',
    isShowPostModal: false,
    selectedPostForUpdate: null,
    notification: {
      isVissible: false,
      title: 'successfully!',
      message: 'user registered successfully'
    },
    posts: [],
    userPosts: [],
    users: []
  }),
  getters: {
    getMessage(state) {
      return state.message
    },
    getPosts(state) {
      return state.posts
    },
    getUserPosts(state) {
      if (state.activePostsStatus !== 'home') {
        return state.userPosts.filter((post) => post.status === state.activePostsStatus)
      }
      return state.userPosts
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
    setSelectedPostForUpdate(payload) {
      this.selectedPostForUpdate = payload
    },
    setUsersStatus(status) {
      this.userStatus = status
    },
    setLoaderStatus(status) {
      this.isLoading = status
    },

    setNotificationFields(payload) {
      this.notification = payload
    },

    // firebase actions
    async fetchUsers() {
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
    },
    async updateUser(user) {
      try {
        const firestore = useNuxtApp().$firestore;
        const userDocRef = doc(firestore, 'users', user.id);
        await updateDoc(userDocRef, user);
      } catch (error) {
        console.log({ error })
      }
    },
    async updateUserStatus(user, id) {
      try {
        const firestore = useNuxtApp().$firestore;
        const userDocRef = doc(firestore, 'users', id);
        await updateDoc(userDocRef, user);
        await this.fetchUsers()
      } catch (error) {
        console.log({ error })
      }
    },
    async deleteUser(id) {
      try {
        const firestore = useNuxtApp().$firestore;
        const userDocRef = doc(firestore, 'users', id);
        await deleteDoc(userDocRef);
        await this.fetchUsers()
      } catch (error) {
        console.log({ error })
      }
    },

    // posts
    async fetchBooksByUser() {
      const activeUser = localStorage.getItem('activeUser')
      const user = JSON.parse(activeUser)
      try {
        const firestore = useNuxtApp().$firestore;
        const usersQuery = query(
          collection(firestore, 'books'),
          where('author_id', '==', user.id)
        );
        const querySnapshot = await getDocs(usersQuery);
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.userPosts = posts
      } catch (error) {
        console.log({ error })
      } finally {
        this.isLoading = false
      }
    },

    async fetchBooks() {
      try {
        const firestore = useNuxtApp().$firestore;
        const querySnapshot = await getDocs(collection(firestore, 'books'));
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.posts = posts
      } catch (error) {
        console.log({ error })
      } finally {
        this.isLoading = false
      }
    },
    async addBooks(payload) {
      this.isLoading = true
      try {
        const firestore = useNuxtApp().$firestore;
        await addDoc(collection(firestore, 'books'), payload);
        await this.fetchBooksByUser()
        this.fetchBooks()
        this.setNotificationFields({
          isVissible: true,
          title: 'successfully',
          message: 'Book post successfully'
        })
      } catch (error) {
        console.log({ error })
      } finally {
        this.isLoading = false
      }
    },
    async deletePost(id) {
      try {
        const firestore = useNuxtApp().$firestore;
        const userDocRef = doc(firestore, 'books', id);
        await deleteDoc(userDocRef);
        await this.fetchBooksByUser()
      } catch (error) {
        console.log({ error })
      }
    },
    async updateBook(payload, id) {
      try {
        const firestore = useNuxtApp().$firestore;
        const userDocRef = doc(firestore, 'books', id);
        await updateDoc(userDocRef, payload);
        await this.fetchBooksByUser()
      } catch (error) {
        console.log({ error })
      }
    },
  },
})