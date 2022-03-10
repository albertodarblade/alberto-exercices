import reducer, { thunkActions, actions } from "./imagePreview";

const initialState = {
  tagListStatus: null,
  tagsStatus: null,
  imageStatus: null,
  tags: [],
  image: {
    title: null,
    imageUrl: null,
    updatedAt: null,
    tags: [{ id: 1, label: "test" }],
  },
};

test("Should delete the image tag when delete tag fulfilled action is triggered", () => {
  const action = {
    type: thunkActions.deleteTag.fulfilled.type,
    payload: { tagId: 1 },
  };
  const state = reducer(initialState, action);
  expect(state.tagsStatus).toEqual("success");
  expect(state.image.tags).toEqual([]);
});

test("Should set the tagStatus to loading when the delete tag action pending is triggered", () => {
  const action = {
    type: thunkActions.deleteTag.pending.type,
  };
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    tagsStatus: "loading",
  });
});

test("Should set the tagStatus to failed when the delete tag action reject is triggered", () => {
  const action = { type: thunkActions.deleteTag.rejected.type };
  const state = reducer(initialState, action);
  expect(state).toEqual({
    ...initialState,
    tagsStatus: "failed",
  });
});
