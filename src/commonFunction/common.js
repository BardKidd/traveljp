export const copyText = (
  copyValue,
  successMessage = "已複製",
  errorMessage = "該瀏覽器不支援複製功能"
) => {
  const cb = navigator.clipboard.writeText(copyValue);
  cb.then(() => {
    if (successMessage !== "已複製") {
      alert(successMessage);
    }
  }).catch(() => {
    alert(errorMessage);
  });
};
export const guid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
export const addZero = (time) => {
  return time < 10 ? `0${time}` : time;
};

export const today = () => {
  let getDate = new Date();
  let year = getDate.getFullYear();
  let month = addZero(getDate.getMonth() + 1);
  let day = addZero(getDate.getDate());

  let getToday = `${year}-${month}-${day}`;
  return getToday;
};
