import { IFormField } from "@/types/IFormField";
export interface IAddPatientFormConfig {
  wardNumber?: number;
  patientName?: string;
  patientNumber?: string;
  patientHistory?: string;
}
export default class AddPatientForm {
  wardNumber: IFormField = { value: 0, errorMsg: "" };
  patientName: IFormField = { value: "", errorMsg: "" };
  patientNumber: IFormField = { value: "", errorMsg: "" };
  patientHistory: IFormField = { value: "", errorMsg: "" };
  constructor(arg: IAddPatientFormConfig) {
    if (arg.wardNumber) {
      this.wardNumber.value = arg.wardNumber;
    }
    if (arg.patientName) {
      this.patientName.value = arg.patientName;
    }
    if (arg.patientNumber) {
      this.patientNumber.value = arg.patientNumber;
    }
    if (arg.patientHistory) {
      this.patientHistory.value = arg.patientHistory;
    }
  }
}
