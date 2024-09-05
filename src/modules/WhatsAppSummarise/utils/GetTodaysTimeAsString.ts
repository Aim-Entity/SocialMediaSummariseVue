export function GetTodaysTimeAsString(): string {
  const time = new Date();
  return time.toLocaleTimeString().slice(0, 5);
}
