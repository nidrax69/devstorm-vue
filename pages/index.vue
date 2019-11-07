<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <chat></chat>
        <chat-box></chat-box>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Chat from '~/components/chat.vue'
import ChatBox from '~/components/chat-box.vue'

export default {
  components: {
    Chat,
    ChatBox
  },
  data: () => ({
    drawer: null
  })
}
</script>