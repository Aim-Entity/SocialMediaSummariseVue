import { ConvertStringMessageToArray } from '@/modules/WhatsAppSummarise/utils/ConvertStringToArray';
import { FileRead } from '@/modules/WhatsAppSummarise/utils/FileRead';
import { SummariseAPICall } from '@/modules/WhatsAppSummarise/utils/SummariseAPICall';

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

export function useSubmitForm(
  formFieldValues: formFieldObject,
  updateWhatsAppArray: Function
): void {
  const validSubmit: boolean = formValidation(formFieldValues);
  if (validSubmit) {
    sessionStorage.setItem('formDateStart', formFieldValues.dateValue as string);
    sessionStorage.setItem('formTimeStart', formFieldValues.timeValue as string);

    FileRead(formFieldValues.fileValue as FileList);
    SummariseAPICall();

    setTimeout(() => {
      const messageToArray = ConvertStringMessageToArray(
        sessionStorage['messageString']
      ) as string[];
      updateWhatsAppArray(messageToArray);
    }, 1000);
  } else {
    alert('Enter All Form Fields');
  }
}
