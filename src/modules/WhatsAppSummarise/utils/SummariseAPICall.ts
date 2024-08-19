import axios from 'axios';
import { summariseKey } from '@/secrets/secret';
import { storeToRefs } from 'pinia';
import type { StoreGeneric } from 'pinia';

export function SummariseAPICall(whatsappStore: StoreGeneric): void {
  const { getMessageString } = storeToRefs(whatsappStore);

  const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/text/summarize',
    headers: {
      authorization: summariseKey()
    },
    data: {
      output_sentences: 13,
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
