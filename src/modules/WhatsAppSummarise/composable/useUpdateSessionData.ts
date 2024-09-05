import { ConvertStringMessageToArray } from '@/modules/WhatsAppSummarise/utils/ConvertStringToArray';
import { FileRead } from '@/modules/WhatsAppSummarise/utils/FileRead';
import type { StoreGeneric } from 'pinia';

type formFieldObject = {
  fileValue: FileList | null;
  dateValue: string | null;
  timeValue: string | null;
};

export function useUpdateSessionData(
  formFieldValues: formFieldObject,
  whatsappStore: StoreGeneric
): void {
  const { updateWhatsAppArray, updateStartDateUI, updateStartTimeUI } = whatsappStore;

  sessionStorage.setItem('formDateStart', formFieldValues.dateValue as string);
  sessionStorage.setItem('formTimeStart', formFieldValues.timeValue as string);
  updateStartDateUI(formFieldValues.dateValue as string);
  updateStartTimeUI(formFieldValues.timeValue as string);

  if (formFieldValues.fileValue != null) {
    FileRead(formFieldValues.fileValue as FileList);
    setTimeout(() => {
      const messageToArray = ConvertStringMessageToArray(
        sessionStorage['messageString']
      ) as string[];
      updateWhatsAppArray(messageToArray);
    }, 1000);
  }
}
