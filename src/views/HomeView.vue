<template>
  <div class="home">
    <HomeBase/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBase from '@/components/HomeBase.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBase
  }
}
</script>
