export default async function fakeRequest(response) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, 500);
  });
}
