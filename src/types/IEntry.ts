import { ITodo, generate as generateTodos } from "./ITodo";
import {
  getRandomString,
  getRandomName,
  getRandomNumberString,
  getRandomNumber,
  getFakeWords,
} from "@/utils/utils";

export interface IEntry {
  wardNumber: number;
  patientName: string;
  patientNumber: string;
  patientHistory: string;
  entryCreator: string;
  entryCreationDate: Date;
  todos: ITodo[];
}

export function generate(entryCount = 1, todoCount = 1): IEntry[] {
  const result: IEntry[] = [];
  for (let i = 0; i < entryCount; i++) {
    const entry: IEntry = {
      patientName: getRandomName(),
      patientNumber: getRandomNumberString(8),
      wardNumber: getRandomNumber(1, 6),
      patientHistory: getFakeWords(getRandomNumber(15, 40)),
      entryCreator: "Dr " + getRandomName(),
      entryCreationDate: new Date(),
      todos: generateTodos(todoCount),
    };
    result.push(entry);
  }
  return result;
}
