import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api";

export const getImage = createAsyncThunk("image/get", () => {
  return api.image.get();
});

export const getTags = createAsyncThunk("tag/getList", () => {
  return api.tag.getList();
});

export const patchTag = createAsyncThunk(
  "mural/:id/tag/:id/patch",
  (tag, imageId) => {
    return api.mural.patch({
      params: { tag, id: imageId },
    });
  }
);

export const deleteTag = createAsyncThunk(
  "mural/:id/tag/:id/delete",
  ({ tag, imageId }) => {
    return api.mural.delete({
      params: { tagId: tag.id, id: imageId },
    });
  }
);

export const imagePreviewSlice = createSlice({
  name: "imagePreview",
  initialState: {
    tagListStatus: null,
    tagsStatus: null,
    imageStatus: null,
    tags: [],
    image: {
      title: null,
      imageUrl: null,
      updatedAt: null,
    },
  },
  reducers: {
    addTag(state, action) {
      const tagToDelete = action.payload;
      const tagIndex = state.image.tags.findIndex(
        (tag) => tag.id === tagToDelete.id
      );
      state.image.tags.splice(tagIndex, 1);
    },
  },
  extraReducers: {
    [getImage.pending]: (state) => {
      state.imageStatus = "loading";
    },
    [getImage.fulfilled]: (state, { payload }) => {
      state.imageStatus = "success";
      state.image = payload;
    },
    [getImage.rejected]: (state) => {
      state.imageStatus = "failed";
    },
    [deleteTag.pending]: (state) => {
      state.tagsStatus = "loading";
    },
    [deleteTag.fulfilled]: (state, action) => {
      const tagToDelete = action.payload;
      const tagIndex = state.image.tags.findIndex(
        (tag) => tag.id === tagToDelete.tagId
      );
      state.image.tags.splice(tagIndex, 1);
      state.tagsStatus = "success";
    },
    [deleteTag.rejected]: (state) => {
      state.tagsStatus = "failed";
    },
    [getTags.pending]: (state) => {
      state.tagListStatus = "loading";
    },
    [getTags.fulfilled]: (state, { payload }) => {
      state.tagListStatus = "success";
      state.tags = payload;
    },
    [getTags.rejected]: (state) => {
      state.tagListStatus = "failed";
    },

    [patchTag.pending]: (state) => {
      state.tagsStatus = "loading";
    },
    [patchTag.fulfilled]: (state, { payload }) => {
      state.tagsStatus = "success";
      state.image.tags.push(payload.tag);
    },
    [patchTag.rejected]: (state) => {
      state.tagsStatus = "failed";
    },
  },
});

export const actions = imagePreviewSlice.actions;
export const thunkActions = {
  getImage,
  getTags,
  deleteTag,
  patchTag,
};

export default imagePreviewSlice.reducer;
