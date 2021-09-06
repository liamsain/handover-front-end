<template>
  <Modal @close="$emit('close')">
    <div slot="header" class="add-entry-modal__title">
      <h3>Add patient</h3>
      <button @click="$emit('close')">X</button>
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
        <div class="add-entry-modal__text-area">
          <label for="add-entry__today-notes"> Today tasks<br /> </label>
          <button type="button">Add task</button>
        </div>
        <div class="add-entry-modal__text-area">
          <label for="add-entry__tomorrow-notes">
            {{ format(addDays(new Date(), 1), "EEE, do") }} tasks<br />
          </label>
          <button type="button">Add task</button>
        </div>
        <div class="add-entry-modal__text-area">
          <label for="add-entry__day-after-tomorrow-notes">
            {{ format(addDays(new Date(), 2), "EEE, do") }} tasks<br />
          </label>
          <button type="button">Add task</button>
        </div>

        <div class="add-entry-modal__text-area">
          <label for="add-entry__three-days-from-now-notes">
            {{ format(addDays(new Date(), 3), "EEE, do") }} tasks<br />
          </label>
          <button type="button">Add task</button>
        </div>
      </form>
    </div>
    <div slot="footer" style="text-align: right">
      <button @click="submit">Add patient</button>
    </div>
  </Modal>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Modal from "./Modal.vue";
import AddPatientForm from "@/forms/AddPatientForm";
import { addDays, format } from "date-fns";

export default Vue.extend({
  name: "AddPatientModal",
  components: { Modal },
  props: {
    form: {
      type: Object as PropType<AddPatientForm>,
      required: true,
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
}
</style>
