import { defineStore } from 'pinia';

const stripDateTime = (text: string): string => {
  let resultText: string = '';
  const splitOnDash: string[] = text.split('-');
  const textArr: string[] = splitOnDash.slice(3, splitOnDash.length); // In the case the text has a -, this insures its included

  textArr.forEach((x) => {
    resultText = resultText + ' ' + x;
  });

  return resultText;
};

const isUselessLine = (text: string): boolean => {
  if (
    text.includes('Media omitted') ||
    text.includes('Messages and calls are end to end encrypted') ||
    text.includes('No one outside of this chat, not even WhatsApp') ||
    text.includes('created group "')
  ) {
    return true;
  } else {
    return false;
  }
};

const restrictArrayWithDates = (arr: string[], startDate: Date) => {
  let index = 0;
  arr.forEach((line) => {
    const splitLine: string[] = line.split('-');
    const lineDate: Date = new Date(splitLine.slice(0, 3).join()); // In the case the text has a -, this insures its included
    if (startDate >= lineDate || lineDate.toString() == 'Invalid Date') {
      delete arr[index];
    }
    index++;
  });

  return arr;
};

export const useWhatsappStore = defineStore('whatsapp', {
  state: () => ({
    messageArray: [] as string[],
    messageString: '' as string,
    startDateTime: new Date(),
    summarizedText: '',
    hasFileUploaded: false,
    fileDataSize: -0.1,
    fileWordLength: -1,
    fileCharLength: -1,
    startDateUI: '',
    startTimeUI: ''
  }),
  getters: {
    getMessageString: (state) => state.messageString as string
  },
  actions: {
    updateWhatsAppArray(array: string[]) {
      this.messageArray = restrictArrayWithDates(array, this.startDateTime);
      this.updateWhatsAppString();
    },
    updateHasFileUploaded(state: boolean) {
      this.hasFileUploaded = state;
    },
    updateFileDataSize(size: number) {
      this.fileDataSize = size;
    },
    updateFileWordLength(length: number) {
      this.fileWordLength = length;
    },
    updateFileCharLength(length: number) {
      this.fileCharLength = length;
    },
    updateStartDateUI(date: string) {
      this.startDateUI = date;
    },
    updateStartTimeUI(time: string) {
      this.startTimeUI = time;
    },
    updateWhatsAppString() {
      let message: string = '';
      this.messageArray.forEach((line) => {
        if (isUselessLine(line) == false) {
          message = message + stripDateTime(line) + '\n';
        }
      });

      this.messageString = message;
    },
    updateSummarizedText(text: string) {
      this.summarizedText = text;
    },
    updateStartDateTime(date: string, time: string) {
      this.startDateTime = new Date(`${date} ${time}`);
    }
  }
});
