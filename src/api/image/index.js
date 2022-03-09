import fakeRequest from "@utils/fakeRequest";
import imageJSON from './image.json'

const image = {
    get() {
    return fakeRequest(imageJSON);
  },
};
export default image;
