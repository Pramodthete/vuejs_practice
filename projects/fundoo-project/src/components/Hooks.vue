<script>
export default {
  data() {
    return {
      name: 'Hooks',
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      for (let index = 0; index < 5; index++) {
        setTimeout(() => {
          this.counter++
        }, 1000)
      }
    }
  },

  beforeCreate() {
    console.log('Before Create')
  },
  created() {
    console.log('Created')
  },
  beforeMount() {
    console.log('Before Mount')
  },
  mounted() {
    console.log('Mounted')
  },
  beforeUnmount() {
    console.log('Before Unmount')
  },
  unmounted() {
    console.log('Unmounted')
  },
  beforeUpdate() {
    console.log('Before Update')
  },
  updated() {
    console.log('Updated')
  }
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <div class="box"></div>
    <router-link id="register-link1" to="/demo">Demo with routerlink</router-link>
  </div>
  <div>
    <h1>{{ name }}</h1>
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Increment Counter</button>
  </div>
</template>

<style scoped>
.box {
  width: 200px;
  height: 300px;
  background-color: aqua;
  border: 3px solid tomato;
}
</style>
