const openQRCamera = node => {
  const reader = new FileReader();
  reader.onload = () => {
    node.value = "";
    qrcode.callback = res => {
      if (res instanceof Error) {
        alert(
          "No QR code found. Please make sure the QR code is within the camera's frame and try again."
        );
      } else {
        node.parentNode.previousElementSibling.value = res;
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
};
