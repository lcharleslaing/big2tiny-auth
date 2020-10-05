<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/"
        ><img src="~assets/icons/Icon1240x1240.png" width="30" height="30"
      /></nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <nuxt-link to="/about" class="navbar-item">
              About
            </nuxt-link>
            <nuxt-link to="" class="navbar-item">
              Jobs
            </nuxt-link>
            <nuxt-link to="" class="navbar-item">
              Contact
            </nuxt-link>
            <nuxt-link to="" class="navbar-item">
              Report an issue
            </nuxt-link>
          </div>
        </div>

          <div v-if="isAuthenticated" class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{ loggedInUser.username }}
              </a>

              <div class="navbar-dropdown">
                <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                <hr class="navbar-divider" />
                <a class="navbar-item" @click="logout">Logout</a>
              </div>
            </div>
          </div>

          <div v-if="!isAuthenticated" class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <nuxt-link class="button is-link" to="/register">
                  <strong>Register</strong>
                </nuxt-link>
                <nuxt-link class="button is-link" to="/login">
                  <strong>Login</strong>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"])
  },
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="sass" scoped>
.navbar
    background-color: #ddd
</style>
