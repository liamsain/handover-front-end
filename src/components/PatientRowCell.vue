<template>
  <ul>
    <li v-for="(todo, i) in todos" :key="i">
      {{ todo.text }}
      <div>
        <input
          type="checkbox"
          :id="i + 'today-looked-at'"
          v-model="todo.lookedAt"
        /><label :for="i + 'today-looked-at'"><small>Looked at</small></label>
      </div>
      <div>
        <input
          type="checkbox"
          :id="i + 'today-completed'"
          v-model="todo.completed"
        /><label :for="i + 'today-completed'"><small>Completed</small></label>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { ITodo } from "@/types/ITodo";
export default Vue.extend({
  name: "PatientRowCell",
  props: {
    todos: {
      type: Array as PropType<Array<ITodo>>,
    },
  },
});
</script>

<style scoped></style>
