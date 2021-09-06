<template>
  <tr>
    <td style="text-align: center">{{ entry.wardNumber }}</td>
    <td>
      <p>
        <strong>{{ entry.patientName }}</strong>
      </p>
      <p>
        <small>{{ entry.patientNumber }}</small>
      </p>
      <p>{{ entry.patientHistory }}</p>
    </td>
    <td>
      <p v-for="(note, i) in todayTodos" :key="i">{{ note.text }}</p>
    </td>
    <td>
      <p v-for="(note, i) in tomorrowTodos" :key="i">{{ note.text }}</p>
    </td>
    <td>
      <p v-for="(note, i) in dayAfterTomorrowTodos" :key="i">{{ note.text }}</p>
    </td>
    <td>
      <p v-for="(note, i) in threeDaysFromNowTodos" :key="i">{{ note.text }}</p>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IEntry } from "@/types/IEntry";
import { ITodo } from "@/types/ITodo";
import { isSameDay, addDays } from "date-fns";
export default Vue.extend({
  name: "PatientRow",
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
