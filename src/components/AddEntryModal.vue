<template>
  <Modal @close="$emit('close')">
    <div
      slot="header"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <h3>Add patient</h3>
      <p><button @click="$emit('close')">X</button></p>
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
            style="width: 100%"
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
import Vue from "vue";
import Modal from "./Modal.vue";

export default Vue.extend({
  name: "AddEntryModal",
  components: { Modal },
  mounted() {
    const ref = this.$refs.wardNumberField as any;
    if (ref) {
      ref.focus();
    }
  },
});
</script>

<style>
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
}
</style>
