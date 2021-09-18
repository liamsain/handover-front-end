<template>
  <div>
    <div
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <h3>Handover</h3>
      <button @click="onAddEntry">Add entry</button>
    </div>
    <div style="overflow-x: auto">
      <table class="entry-table">
        <tr>
          <th>Ward</th>
          <th>Patient</th>
          <th>{{ format(new Date(), "MMM, EEE do") }}</th>
          <th>{{ format(addDays(new Date(), 1), "EEE do") }}</th>
          <th>{{ format(addDays(new Date(), 2), "EEE do") }}</th>
          <th>{{ format(addDays(new Date(), 3), "EEE do") }}</th>
        </tr>
        <PatientRow
          v-for="entry in entries"
          :entry="entry"
          :key="entry.patientNumber"
          @edit="onEditRow"
        />
      </table>
    </div>
    <AddPatientModal
      v-if="addEntryModalIsOpen"
      @close="addEntryModalIsOpen = false"
      :form="addPatientForm"
      @submit="onFormSubmit"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IEntry, generate as generateEntries } from "@/types/IEntry";
import { format, addDays } from "date-fns";
import AddPatientModal from "@/components/AddPatientModal.vue";
import PatientRow from "@/components/PatientRow.vue";
import AddPatientForm from "@/forms/AddPatientForm";
export default Vue.extend({
  name: "Home",
  components: { AddPatientModal, PatientRow },
  data() {
    return {
      entries: [] as IEntry[],
      format,
      addDays,
      addEntryModalIsOpen: false,
      addPatientForm: new AddPatientForm(),
    };
  },
  mounted() {
    this.entries = generateEntries(10, 5).sort(
      (a, b) => a.wardNumber - b.wardNumber
    );
  },
  methods: {
    onAddEntry() {
      this.addPatientForm = new AddPatientForm();
      this.addEntryModalIsOpen = true;
    },
    onEditRow(entry: IEntry) {
      this.addPatientForm = new AddPatientForm(entry);
      this.addEntryModalIsOpen = true;
    },
    onFormSubmit(data: IEntry) {
      this.addEntryModalIsOpen = false;
      this.entries.push(data);
      this.entries = this.entries.sort((a, b) => a.wardNumber - b.wardNumber);
    },
  },
});
</script>
<style>
.entry-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.entry-table td {
  vertical-align: top;
}
.entry-table td,
.entry-table th {
  border: 1px solid #ddd;
  padding: 4px;
}

.entry-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* .entry-table tr:hover {
  background-color: #ddd;
  cursor: pointer;
} */

.entry-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
