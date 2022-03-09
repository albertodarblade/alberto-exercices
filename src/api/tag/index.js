import tags from "./tags.json";
import fakeRequest from "@utils/fakeRequest";

const Tag = {
  getList() {
    return fakeRequest(tags);
  },
};

export default Tag;
