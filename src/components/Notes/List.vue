<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in items" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer;" @click="$emit('onRemove', index)">
          &#10005;
        </p>
      </div>
      <div class="note-footer">
        <TagsList
            isPreview
            v-if="note.tags && note.tags.length > 0"
            :items="note.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/TagsList.vue'
export default {
  components: { TagsList },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>