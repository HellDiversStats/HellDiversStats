<template>
    <header>
    <nav class="navbar" role="navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <span class="logo">Helldivers Stats</span>
          </nuxt-link>
          <button
            class="navbar-burger"
            aria-label="Toggle navigation menu"
            :class="{ 'is-active': isMenuOpen }"
            @click="toggleMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
          <div class="navbar-end">
            <nuxt-link to="/" class="navbar-item" aria-current="page">Home</nuxt-link>
            <nuxt-link to="/stats" class="navbar-item disabled">Stats</nuxt-link>
            <nuxt-link to="/map" class="navbar-item disabled">Map</nuxt-link>
            <a href="https://discord.gg/gHfzSpfaEJ" target="_blank" class="navbar-item">Discord Server</a>
            <nuxt-link to="/api_doc" class="navbar-item">API</nuxt-link>
            <nuxt-link to="/support" class="navbar-item">Support</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    </header>

<div>
    <slot />

</div>

  </template>
  
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #222;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand .logo {
    font-size: 1.5rem;
    color: #fff;
  }
  
  .navbar-menu {
    flex-grow: 1;
  }
  
  .navbar-end .navbar-item {
    margin-left: 1rem;
  }
  
  .navbar-item {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease-in-out;
  }
  
  .navbar-item:hover {
    color: #ccc;
  }
  
  .disabled {
    pointer-events: none;
    color: #888;
  }
  
  @media (max-width: 768px) {
    .navbar-burger {
      display: block;
      margin-left: 1rem;
    }
  
    .navbar-menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #222;
      padding: 1rem;
      display: none;
    }
  
    .navbar-menu.is-active {
      display: block;
    }
  
    .navbar-end {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .navbar-end .navbar-item {
      margin-left: 0;
      margin-bottom: 0.5rem;
    }
  }
  </style>

  