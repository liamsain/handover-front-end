<template>
  <div>
    <ul>
      <li v-for="todo in value" :key="todo.id">
        <p>{{ todo.text }}</p>
        <div>
          <input
            type="checkbox"
            :id="todo.id + 'today-looked-at'"
            v-model="todo.lookedAt"
          /><label :for="todo.id + 'today-looked-at'"
            ><small>Looked at</small></label
          >
        </div>
        <div>
          <input
            type="checkbox"
            :id="todo.id + 'today-completed'"
            v-model="todo.completed"
          /><label :for="todo.id + 'today-completed'"
            ><small>Completed</small></label
          >
        </div>
      </li>
    </ul>
    <button type="button" v-if="!showNewTodoField" @click="onClickAddTask">
      Add task
    </button>
    <div v-if="showNewTodoField">
      <input
        v-model="newTodoText"
        placeholder="Task"
        ref="newTodoField"
        style="width: 90%"
        @keyup.enter="onSaveNewTodo"
      />
      <div style="margin-top: 4px">
        <button style="margin-right: 8px" type="button" @click="onSaveNewTodo">
          Save
        </button>
        <button
          @click="
            newTodoText = '';
            showNewTodoField = false;
          "
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { ITodo } from "@/types/ITodo";
import { v4 as guid } from "uuid";
export default Vue.extend({
  props: {
    value: {
      type: Array as PropType<Array<ITodo>>,
    },
    date: {
      type: Date,
    },
  },
  data() {
    return {
      newTodoText: "",
      showNewTodoField: false,
    };
  },
  methods: {
    async onClickAddTask() {
      this.showNewTodoField = true;
      await this.$nextTick();
      const ref = this.$refs.newTodoField as any;
      if (ref) {
        ref.focus();
      }
    },
    onSaveNewTodo() {
      const todo: ITodo = {
        id: guid(),
        text: this.newTodoText,
        isImportant: false,
        lookedAt: false,
        completed: false,
        dueDate: new Date(this.date),
      };
      this.$emit("saveNewTodo", todo);
      this.newTodoText = "";
      this.showNewTodoField = false;
    },
  },
});
</script>

<style scoped></style>
