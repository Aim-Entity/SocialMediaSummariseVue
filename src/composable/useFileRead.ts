const convertStringMessageToArray = (target: FileReader | null): Error | string[] => {
  if (target == null) {
    return new Error('File Target Is Null');
  }

  if (target.result == null) {
    return new Error('Target Result Is Null');
  }

  if (typeof target.result != 'string') {
    return new Error('Target Result Is Not A String');
  }

  return target.result.split('\n');
};

export function useFileRead(FileList: FileList): string[] | Error {
  if (!FileList) {
    return new Error('File List Does Not Exist');
  }

  const file = FileList[0];
  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');

  if (reader) {
    reader.onload = function (evt) {
      const arr = convertStringMessageToArray(evt.target);
      return arr;
    };

    reader.onerror = function () {
      return new Error('File Content Cannot Be loaded');
    };
  }

  return new Error('File Reader Could Not Open File');
}
