<template>
  <TodoList v-model="todos" style="margin-top: 12px" />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { ITodo } from "@/types/ITodo";
import TodoList from "./TodoList.vue";
export default Vue.extend({
  name: "PatientRowCell",
  components: { TodoList },
  props: {
    todos: {
      type: Array as PropType<Array<ITodo>>,
    },
  },
});
</script>

<style scoped></style>
