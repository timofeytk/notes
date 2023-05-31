<template>
  <!-- login exaple -->
  <section>
    <button
        v-if="!isUserLogged"
        @click="handleLoginClick"
        class="btn btnPrimary"
    >
      Логин
    </button>
    <p v-else>
      Пользователь: <i>{{ user }}</i>
    </p>
  </section>

  <!-- users list -->
  <section>
    <h1>Только обычные пользователи:</h1>
    <ul>
      <li v-for="user in getUsers" :key="user.id">
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.admin ? 'Это админ' : 'Обычный юзер' }}</p>
      </li>
    </ul>
  </section>

  <!-- single user -->
  <section>
    <input v-model="userId" type="number" />
    <p>{{ getUser }}</p>
  </section>

  <!-- count users -->
  <section>
    <p>{{ getUsersCount }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userId: 1
    }
  },
  methods: {
    handleLoginClick() {
      this.$store.dispatch('setUser')
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
    isUserLogged() {
      return this.$store.getters.isUserLogged
    },
    getUser() {
      return this.$store.getters.getUserById(this.userId) || 'пользователь не найден'
    },
    getUsers() {
      return this.$store.getters.getUsers
    },
    getUsersCount() {
      return this.$store.getters.getUsersCount
    }
  }
}
</script>
