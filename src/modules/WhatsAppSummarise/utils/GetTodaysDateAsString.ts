export function GetTodaysDateAsString(): string {
  const date = new Date();
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDay() + 1;

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${date.getFullYear()}-${month}-${day}`;
}
