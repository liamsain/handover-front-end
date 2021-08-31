<template>
  <div>
    <table>
      <tr>
        <th>Patient</th>
        <th>{{ format(new Date(), "EEE") }}</th>
        <th>{{ format(addDays(new Date(), 1), "EEE") }}</th>
        <th>{{ format(addDays(new Date(), 2), "EEE") }}</th>
        <th>{{ format(addDays(new Date(), 3), "EEE") }}</th>
      </tr>
      <tr v-for="entry in entries" :key="entry.patientNumber">
        <td>
          {{ entry.patientName }}
          {{ entry.patientNumber }}
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IEntry, generate as generateEntries } from "@/types/IEntry";
import { format, addDays } from "date-fns";
export default Vue.extend({
  name: "Home",
  data() {
    return {
      entries: [] as IEntry[],
      format,
      addDays,
    };
  },
  mounted() {
    this.entries = generateEntries(20);
    console.log(this.entries);
  },
});
</script>
