<template>
    <div>
      <nav class="navbar">
        <!-- ... -->
      </nav>
    </div>
  </template>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    z-index: 100;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .navbar img {
    height: 3em;
  }
  
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  