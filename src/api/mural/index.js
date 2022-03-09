import fakeRequest from "@utils/fakeRequest";

const mural = {
  patch({ params }) {
    const { id, tag } = params;
    console.info(id, tag.id);
    return fakeRequest(params);
  },
  delete({ params }) {
    const { id, tagId } = params;

    console.info(id, tagId);
    return fakeRequest(params);
  },
};

export default mural;
