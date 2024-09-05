import { ConvertStringMessageToArray } from '@/modules/WhatsAppSummarise/utils/ConvertStringToArray';
import { FileRead } from '@/modules/WhatsAppSummarise/utils/FileRead';
import { useUpdateSessionData } from '@/modules/WhatsAppSummarise/composable/useUpdateSessionData';
import type { StoreGeneric } from 'pinia';

type formFieldObject = {
  fileValue: FileList | null;
  dateValue: string | null;
  timeValue: string | null;
};

const formValidation = (formFieldValues: formFieldObject): boolean => {
  let validSubmit: boolean = true;

  if (formFieldValues == null) {
    new Error('Field Values Does Not Exist');
    validSubmit = false;
  }

  if (formFieldValues.fileValue == null) {
    new Error('File List Does Not Exist');
    validSubmit = false;
  }

  if (formFieldValues.dateValue == null) {
    new Error('Date Field Is Empty');
    validSubmit = false;
  }

  if (formFieldValues.timeValue == null) {
    new Error('Time Field Is Empty');
    validSubmit = false;
  }

  return validSubmit;
};

export function useSubmitForm(formFieldValues: formFieldObject, whatsappStore: StoreGeneric): void {
  const validSubmit: boolean = formValidation(formFieldValues);
  if (validSubmit) {
    useUpdateSessionData(formFieldValues, whatsappStore);
  } else {
    alert('Enter All Form Fields');
  }
}
