import { storeToRefs } from 'pinia';
import type { StoreGeneric } from 'pinia';

export function useUpdateCharLength(whatsappStore: StoreGeneric): void {
  const { updateFileCharLength } = whatsappStore;
  const wordLength: number = sessionStorage['messageString'].length;
  updateFileCharLength(wordLength);
}
