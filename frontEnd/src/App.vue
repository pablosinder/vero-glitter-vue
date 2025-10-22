<template>
  <!-- <NavBar /> -->
  <div class="page-wrap">
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: "App",
  components: {
    // NavBar,
  },
  data() {
    return {
      user: null,
    }
  },
  created() {
    // const auth = getAuth();
    // onAuthStateChanged(auth, user => {
    //   this.user = user;
    // });
  }
};
</script>