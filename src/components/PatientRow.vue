<template>
  <tr>
    <td style="text-align: center; padding-top: 16px">
      {{ entry.wardNumber }}
    </td>
    <td>
      <div
        style="display: flex; justify-content: space-between; margin-top: 12px"
      >
        <p>
          <strong>{{ entry.patientName }}</strong>
        </p>
        <button @click="$emit('edit', entry)">Edit record</button>
      </div>
      <p>
        <small>{{ entry.patientNumber }}</small>
      </p>
      <p>{{ entry.patientHistory }}</p>
    </td>
    <td>
      <PatientRowCell :todos="todayTodos" />
    </td>
    <td>
      <PatientRowCell :todos="tomorrowTodos" />
    </td>
    <td>
      <PatientRowCell :todos="dayAfterTomorrowTodos" />
    </td>
    <td>
      <PatientRowCell :todos="threeDaysFromNowTodos" />
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IEntry } from "@/types/IEntry";
import { ITodo } from "@/types/ITodo";
import { isSameDay, addDays } from "date-fns";
import PatientRowCell from "./PatientRowCell.vue";
export default Vue.extend({
  name: "PatientRow",
  components: { PatientRowCell },
  props: {
    entry: {
      type: Object as PropType<IEntry>,
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
  methods: {
    getNotesForDay(day: Date): ITodo[] {
      return this.entry.todos.filter((x) =>
        isSameDay(new Date(x.dueDate), day)
      );
    },
  },
});
</script>

<style scoped></style>
