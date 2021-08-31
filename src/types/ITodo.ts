import { addDays } from "date-fns";
import { getRandomNumber, getRandomString, getFakeWords } from "@/utils/utils";
export interface ITodo {
  dueDate: Date;
  text: string;
  isImportant: boolean;
  lookedAt: boolean;
  completed: boolean;
}

export function generate(count: number = 1): ITodo[] {
  let result: ITodo[] = [];
  for (let i = 0; i < count; i++) {
    const daysToAdd = getRandomNumber(0, 3);
    const todo: ITodo = {
      dueDate: addDays(new Date(), daysToAdd),
      text: getFakeWords(getRandomNumber(5, 50)),
      isImportant: false,
      lookedAt: false,
      completed: false,
    };
  }
  return result;
}
