export function ConvertStringMessageToArray(message: string): Error | string[] {
  if (message == null) {
    return new Error('Message Is Null');
  }

  return message.split('\n');
}
