<template>
    <header>
        <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
    </header>

<div>
    <slot />
</div>

  </template>
  
  
  <script setup lang="ts">
  const route = useRoute()
  
  const links = [
    [
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      to: '/'
    }, 
    {
      label: 'Stats',
      icon: 'i-heroicons-chart-bar',
      to: `/stats`
    }, 
    {
      label: 'Map',
      icon: 'i-heroicons-map',
      to: '/map'
    },
    {
      label: 'API',
      icon: 'i-heroicons-command-line',
      to: '/api_doc'
    },    

    ], 
    
    [
    {
      label: 'Discord',
      icon: 'i-cbi-discord',
      to: 'https://discord.gg/gHfzSpfaEJ'
    },  
    {
       label: 'Profile',
       avatar: {
       src: 'https://avatars.githubusercontent.com/u/739984?v=4'
       },
       badge: 69
       },    
    ],     
  ]
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

  