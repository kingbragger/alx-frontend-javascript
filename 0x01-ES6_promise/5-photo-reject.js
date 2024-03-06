function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} unable to be processed`));
  });
}

export default uploadPhoto;
