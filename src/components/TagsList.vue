<template>
  <div class="tags-list">
    <div
        class="tag-item"
        v-for="item in items"
        :key="item"
        @click="$emit('onItemClick', item)"
        :class="{ isPreview: isPreview }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      reqired: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  }
}
</script>