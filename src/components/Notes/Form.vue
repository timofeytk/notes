<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Тип вашей записи" />
      <TagsList @onItemClick="handleTagClick" :items="tags" />
      <button class="btn btnPrimary" type="submit">Добавить новую запись</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/TagsList.vue'
export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      this.value = ''
    },
    handleTagClick(tag) {
      console.log(tag)
    }
  }
}
</script>