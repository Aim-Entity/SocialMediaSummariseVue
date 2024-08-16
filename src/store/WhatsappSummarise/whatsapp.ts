import { defineStore } from 'pinia';

export const useWhatsappStore = defineStore('whatsapp', {
  state: () => ({
    messageArray: [] as string[],
    messageString: '',
    dateRange: '',
    timeRange: ''
  }),
  actions: {
    updateWhatsAppArray(array: string[]) {
      this.messageArray = array;
      this.updateWhatsAppString();
    },
    updateWhatsAppString() {
      let message: string = '';
      this.messageArray.forEach((line) => {
        console.log(line);
        const strippedLine = line.substring(line.indexOf('-') + 2); // Removes everything before the first '-' and the whitespace after it
        message = message + `\n${strippedLine}`;
      });

      this.messageString = message;
    }
  }
});
