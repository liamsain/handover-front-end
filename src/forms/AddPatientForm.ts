import { IFormField } from "@/types/IFormField";
import { ITodo } from "@/types/ITodo";
import { IEntry } from "@/types/IEntry";

export interface IAddPatientFormConfig {
  wardNumber?: number;
  patientName?: string;
  patientNumber?: string;
  patientHistory?: string;
  todos?: ITodo[];
  entryCreationDate?: Date;
}
export default class AddPatientForm {
  wardNumber: IFormField = { value: 0, errorMsg: "" };
  patientName: IFormField = { value: "", errorMsg: "" };
  patientNumber: IFormField = { value: "", errorMsg: "" };
  patientHistory: IFormField = { value: "", errorMsg: "" };
  todos: ITodo[] = [];
  entryCreationDate?: Date;

  constructor(arg?: IAddPatientFormConfig) {
    if (!arg) {
      return;
    }
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
    if (arg.entryCreationDate) {
      this.entryCreationDate = arg.entryCreationDate;
    }
  }
  get entry(): IEntry {
    return {
      wardNumber: this.wardNumber.value,
      patientName: this.patientName.value,
      patientNumber: this.patientNumber.value,
      patientHistory: this.patientHistory.value,
      todos: this.todos,
      entryCreationDate: this.entryCreationDate,
    };
  }
}
