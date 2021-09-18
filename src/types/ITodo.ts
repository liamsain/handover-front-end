import { addDays } from "date-fns";
import { getRandomNumber, getFakeWords } from "@/utils/utils";
import { v4 as guid } from "uuid";
export interface ITodo {
  dueDate: Date;
  text: string;
  isImportant: boolean;
  lookedAt: boolean;
  completed: boolean;
  id: string;
}

export function generate(count = 1): ITodo[] {
  const result: ITodo[] = [];
  for (let i = 0; i < count; i++) {
    const daysToAdd = getRandomNumber(0, 3);
    const todo: ITodo = {
      dueDate: addDays(new Date(), daysToAdd),
      text: getFakeWords(getRandomNumber(3, 25)),
      isImportant: false,
      lookedAt: false,
      completed: false,
      id: guid(),
    };
    result.push(todo);
  }
  return result;
}
