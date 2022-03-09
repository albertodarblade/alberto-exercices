import { configureStore } from "@reduxjs/toolkit";
import imagePreview from "./reducers/imagePreview";

export default configureStore({
  reducer: {
    imagePreview,
  },
});
