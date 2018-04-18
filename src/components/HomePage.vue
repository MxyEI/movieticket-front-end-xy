<template>
  <div>
    <v-header></v-header>
    <div>
      <transition><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
  import  header from './Header.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    'v-header': header
  },
}
</script>

