import { storeToRefs } from 'pinia';
import type { StoreGeneric } from 'pinia';

export function useUpdateWordLength(whatsappStore: StoreGeneric): void {
  const { updateFileWordLength } = whatsappStore;
  const wordLength: number = sessionStorage['messageString'].match(/\S+/g).length;
  updateFileWordLength(wordLength);
}
