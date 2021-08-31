export function getRandomNumber(min = 0, max = 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString(length: number): string {
  const charString = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length - 1; i++) {
    result += charString[getRandomNumber(0, charString.length)];
  }
  return result;
}

export function getFakeWords(wordCount = 1): string {
  let result = "";
  for (let i = 0; i < wordCount; i++) {
    result += getRandomString(getRandomNumber(1, 12)) + " ";
  }
  return result;
}

export function getRandomNumberString(length: number): string {
  const chars = "1234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[getRandomNumber(0, chars.length - 1)];
  }
  return result;
}

export function getRandomName(): string {
  const firstNames = ["Charlie", "Sophie", "Rebecca", "Sandra", "Kenny"];
  const lastNames = ["Sheen", "Roundbottom", "Hayworth", "Otto", "Grenville"];
  return `${firstNames[getRandomNumber(0, firstNames.length - 1)]} ${
    lastNames[getRandomNumber(0, lastNames.length - 1)]
  }`;
}
