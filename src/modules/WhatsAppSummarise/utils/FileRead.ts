export function FileRead(FileList: FileList): void {
  if (!FileList) {
    new Error('File List Does Not Exist');
  }

  const file = FileList[0];
  const reader = new FileReader();

  if (reader) {
    reader.onload = function () {
      sessionStorage.setItem('messageString', reader.result as string);
    };
  } else {
    new Error('File Reader Could Not Open File');
  }

  reader.readAsText(file);
}
