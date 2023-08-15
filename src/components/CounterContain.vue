<template>
  <div class="counter-container">
    <div class="counter">
      <div class="counter-title">Counter</div>
      <div class="counter-value">{{ counter }}</div>
      <div class="counter-buttons">
        <button class="counter-button" @click="increment">+</button>
        <button class="counter-button" @click="decrement">-</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script>

<style>
.counter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.counter-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.counter-value {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}
.counter-buttons {
  display: flex;
}
.counter-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

</style>