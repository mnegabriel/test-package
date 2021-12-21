<template>
  <article>
    <input type="text" ref="input" @keypress.enter="handleAction"/>
    <button @click="handleAction">click</button>
  </article>
</template>

<script>
export default {
  name: "InputButton",

  methods: {
    handleAction() {
      const { value } = this.$refs.input;

      console.log("from component: " + value);

      this.$emit("action", value);
    },
  },
};
</script>
