<template>
  <Modal @close="$emit('close')">
    <div slot="header" class="add-entry-modal__title">
      <h3>Add patient</h3>
      <button @click="$emit('close')">Close</button>
    </div>
    <div slot="body">
      <form>
        <div class="add-entry-modal__text-field">
          <label for="add-entry__ward-number">
            Ward Number<br />
            <input
              ref="wardNumberField"
              id="add-entry__ward-number"
              placeholder="Ward number"
              type="number"
              v-model="form.wardNumber.value"
              min="0"
            />
          </label>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div class="add-entry-modal__text-field">
            <label for="add-entry__patient-name">
              Patient name<br />
              <input
                id="add-entry__patient-name"
                v-model="form.patientName.value"
                placeholder="Patient name"
                autocomplete="off"
              />
            </label>
          </div>
          <div class="add-entry-modal__text-field">
            <label for="add-entry__patient-number">
              Patient number<br />
              <input
                id="add-entry__patient-number"
                placeholder="Patient number"
                v-model="form.patientNumber.value"
              />
            </label>
          </div>
        </div>
        <div class="add-entry-modal__text-area">
          <label for="add-entry__patient-history">
            Patient history<br />
            <textarea
              id="add-entry__patient-history"
              placeholder="Patient history"
              rows="3"
            />
          </label>
        </div>
        <div class="add-entry-modal__todo-list">
          <label for="add-entry__today-notes"
            ><strong> Today tasks</strong><br />
          </label>
          <TodoList v-model="todayTodos" :date="new Date()" />
        </div>
        <div class="add-entry-modal__todo-list">
          <label for="add-entry__tomorrow-notes">
            <strong
              >{{ format(addDays(new Date(), 1), "EEE, do") }} tasks</strong
            ><br />
          </label>

          <TodoList v-model="tomorrowTodos" :date="addDays(new Date(), 1)" />
        </div>
        <div class="add-entry-modal__todo-list">
          <label for="add-entry__day-after-tomorrow-notes">
            <strong
              >{{ format(addDays(new Date(), 2), "EEE, do") }} tasks</strong
            ><br />
          </label>
          <TodoList
            v-model="dayAfterTomorrowTodos"
            :date="addDays(new Date(), 2)"
          />
        </div>

        <div class="add-entry-modal__todo-list">
          <label for="add-entry__three-days-from-now-notes">
            <strong
              >{{ format(addDays(new Date(), 3), "EEE, do") }} tasks</strong
            ><br />
          </label>
          <TodoList
            v-model="threeDaysFromNowTodos"
            :date="addDays(new Date(), 3)"
          />
        </div>
      </form>
    </div>
    <div slot="footer" style="text-align: right">
      <button @click="submit">Submit</button>
    </div>
  </Modal>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Modal from "./Modal.vue";
import AddPatientForm from "@/forms/AddPatientForm";
import { addDays, format, isSameDay } from "date-fns";
import TodoList from "./TodoList.vue";
import { ITodo } from "@/types/ITodo";
export default Vue.extend({
  name: "AddPatientModal",
  components: { Modal, TodoList },
  props: {
    form: {
      type: Object as PropType<AddPatientForm>,
      required: true,
    },
  },
  computed: {
    todayTodos(): ITodo[] {
      return this.getNotesForDay(new Date());
    },
    tomorrowTodos(): ITodo[] {
      return this.getNotesForDay(addDays(new Date(), 1));
    },
    dayAfterTomorrowTodos(): ITodo[] {
      return this.getNotesForDay(addDays(new Date(), 2));
    },
    threeDaysFromNowTodos(): ITodo[] {
      return this.getNotesForDay(addDays(new Date(), 3));
    },
  },

  data() {
    return {
      format,
      addDays,
    };
  },
  mounted() {
    const ref = this.$refs.wardNumberField as any;
    if (ref) {
      ref.select();
    }
  },
  methods: {
    getNotesForDay(day: Date): ITodo[] {
      return this.form.todos.filter((x: ITodo) =>
        isSameDay(new Date(x.dueDate), day)
      );
    },
    submit() {
      this.$emit("submit", this.form.entry);
    },
  },
});
</script>

<style scoped>
.add-entry-modal__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 8px;
}

.add-entry-modal__title h3 {
  margin: 0;
}
.add-entry-modal__text-field {
  margin-bottom: 8px;
}

.add-entry-modal__text-field input {
  padding: 4px;
}

.add-entry-modal__text-area,
.add-entry-modal__text-field label {
  font-size: smaller;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  padding: 4px;
}
.add-entry-modal__todo-list {
  margin-bottom: 20px;
}
</style>
