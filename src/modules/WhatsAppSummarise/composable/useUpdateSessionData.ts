import { ConvertStringMessageToArray } from '@/modules/WhatsAppSummarise/utils/ConvertStringToArray';
import { FileRead } from '@/modules/WhatsAppSummarise/utils/FileRead';
import { useUpdateWordLength } from '@/modules/WhatsAppSummarise/composable/useUpdateWordLength';
import { useUpdateCharLength } from '@/modules/WhatsAppSummarise/composable/useUpdateCharLength';
import type { StoreGeneric } from 'pinia';
import type { File } from 'buffer';

type formFieldObject = {
  fileValue: FileList | null;
  dateValue: string | null;
  timeValue: string | null;
};

function updateFileData(whatsappStore: StoreGeneric) {
  const { updateWhatsAppArray, updateHasFileUploaded } = whatsappStore;

  const messageToArray = ConvertStringMessageToArray(sessionStorage['messageString']) as string[];
  updateWhatsAppArray(messageToArray);
  useUpdateWordLength(whatsappStore);
  useUpdateCharLength(whatsappStore);
  updateHasFileUploaded(true);
}

export function useUpdateSessionData(
  formFieldValues: formFieldObject,
  whatsappStore: StoreGeneric
): void {
  const { updateStartDateUI, updateStartTimeUI } = whatsappStore;

  sessionStorage.setItem('formDateStart', formFieldValues.dateValue as string);
  sessionStorage.setItem('formTimeStart', formFieldValues.timeValue as string);
  updateStartDateUI(formFieldValues.dateValue as string);
  updateStartTimeUI(formFieldValues.timeValue as string);

  if (formFieldValues.fileValue != null) {
    FileRead(formFieldValues.fileValue as FileList);
    setTimeout(() => {
      updateFileData(whatsappStore);
    }, 1000);
  }
}
