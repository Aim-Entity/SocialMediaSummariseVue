import axios from 'axios';
import { summariseKey } from '@/secrets/secret';
import { storeToRefs } from 'pinia';
import type { StoreGeneric } from 'pinia';

export function SummariseAPICall(whatsappStore: StoreGeneric): void {
  const { getMessageString } = storeToRefs(whatsappStore);

  if (getMessageString.value == '' || getMessageString.value == null) {
    alert('No Messages Found. Please Check Uploaded File & Date/Time Fields.');
  } else {
    const options = {
      method: 'POST',
      url: 'https://api.edenai.run/v2/text/summarize',
      headers: {
        authorization: summariseKey()
      },
      data: {
        output_sentences: 2,
        providers: 'openai/gpt-4o-mini',
        text: getMessageString.value,
        language: 'en'
      }
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
