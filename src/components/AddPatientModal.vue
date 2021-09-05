<template>
  <Modal @close="$emit('close')">
    <div slot="header" class="add-entry-modal__title">
      <h3>Add patient</h3>
      <button @click="$emit('close')">X</button>
    </div>
    <div slot="body">
      <div class="add-entry-modal__text-field">
        <label for="add-entry__ward-number">
          Ward Number<br />
          <input
            ref="wardNumberField"
            id="add-entry__ward-number"
            placeholder="Ward number"
            type="number"
            min="0"
          />
        </label>
      </div>
      <div class="add-entry-modal__text-field">
        <label for="add-entry__patient-name">
          Patient name<br />
          <input id="add-entry__patient-name" placeholder="Patient name" />
        </label>
      </div>
      <div class="add-entry-modal__text-field">
        <label for="add-entry__patient-number">
          Patient number<br />
          <input id="add-entry__patient-number" placeholder="Patient number" />
        </label>
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
        <label for="add-entry__today-notes">
          Today notes<br />
          <textarea
            id="add-entry__today-notes"
            placeholder="Today notes"
            rows="3"
          />
        </label>
      </div>
      <div class="add-entry-modal__text-area">
        <label for="add-entry__tomorrow-notes">
          Tomorrow notes<br />
          <textarea
            id="add-entry__tomorrow-notes"
            placeholder="Tomorrow notes"
            rows="3"
          />
        </label>
      </div>
      <div class="add-entry-modal__text-area">
        <label for="add-entry__day-after-tomorrow-notes">
          Day after tomorrow notes<br />
          <textarea
            id="add-entry__day-after-tomorrow-notes"
            placeholder="Day after tomorrow notes"
            rows="3"
          />
        </label>
      </div>

      <div class="add-entry-modal__text-area">
        <label for="add-entry__three-days-from-now-notes">
          Three days from now notes<br />
          <textarea
            id="add-entry__three-days-from-now-notes"
            placeholder="Three days from now notes"
            rows="3"
          />
        </label>
      </div>
    </div>
    <div slot="footer">
      <button @click="submit">Add patient</button>
    </div>
  </Modal>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Modal from "./Modal.vue";
import AddPatientForm from "@/forms/AddPatientForm";

export default Vue.extend({
  name: "AddPatientModal",
  components: { Modal },
  props: {
    form: {
      type: Object as PropType<AddPatientForm>,
    },
  },
  mounted() {
    const ref = this.$refs.wardNumberField as any;
    if (ref) {
      ref.focus();
    }
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
