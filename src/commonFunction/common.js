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
