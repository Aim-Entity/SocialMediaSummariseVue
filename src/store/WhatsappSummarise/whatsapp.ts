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

export const useWhatsappStore = defineStore('whatsapp', {
  state: () => ({
    messageArray: [] as string[],
    messageString: '' as string,
    dateRange: '',
    timeRange: '',
    summarizedText: ''
  }),
  getters: {
    getMessageString: (state) => state.messageString as string
  },
  actions: {
    updateWhatsAppArray(array: string[]) {
      this.messageArray = array;
      this.updateWhatsAppString();
    },
    updateWhatsAppString() {
      let message: string = '';
      this.messageArray.forEach((line) => {
        message = message + stripDateTime(line) + '\n';
      });

      console.log(message);
      this.messageString = message;
    },
    updateSummarizedText(text: string) {
      this.summarizedText = text;
    }
  }
});
