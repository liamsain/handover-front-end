import { IFormField } from "@/types/IFormField";
import { ITodo } from "@/types/ITodo";

export interface IAddPatientFormConfig {
  wardNumber?: number;
  patientName?: string;
  patientNumber?: string;
  patientHistory?: string;
  todos?: ITodo[];
}
export default class AddPatientForm {
  wardNumber: IFormField = { value: 0, errorMsg: "" };
  patientName: IFormField = { value: "", errorMsg: "" };
  patientNumber: IFormField = { value: "", errorMsg: "" };
  patientHistory: IFormField = { value: "", errorMsg: "" };
  todos: ITodo[] = [];

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
    if (arg.todos) {
      this.todos = arg.todos;
    }
  }
}
