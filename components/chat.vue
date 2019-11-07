<template>
  <v-card class="mx-auto">
    <v-card-text class="py-0">
      <v-timeline dense>
        <v-slide-x-reverse-transition group hide-on-leave>
          <v-timeline-item
            v-for="item in items"
            :key="item.id"
            :color="item.color"
            small
            fill-dot
          >{{item.text}}</v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'chat',
  data: () => ({}),

  methods: {}
}
</script>