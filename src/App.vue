<template>
  <div id="app">
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">
            <router-link to="/">Navbar Title</router-link>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->
        <router-view />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <!-- Sidebar content here -->
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>

    <nav></nav>
  </div>
</template>

<style>
</style>
