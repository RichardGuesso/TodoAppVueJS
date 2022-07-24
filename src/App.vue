<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-responsive img-logo pt-2" src="@/assets/logorichsoftwares.png" alt="RichSoftwares">
        </section>
        <section class="navbar-section">
          <a href="#" class="btn btn-link">Twitter</a>
          <a href="#" class="btn btn-link">Github</a>
        </section>
      </header>
      <!-- component matched by the route will render here -->
      <router-view class="mt-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.img-logo {
  max-width: 100px;
}
</style>
