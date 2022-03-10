import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkActions, actions } from "@store/reducers/imagePreview";
import ImageLayout from "./components/ImageLayout";
import TagList from "./components/TagList";
import TagForm from "./components/TagForm";
import View from "@components/View";

const selector = (state) => {
  const { imagePreview } = state;
  const { image } = imagePreview;
  return {
    ...imagePreview,
    tags: imagePreview.tags
      .filter((filteredTag) => {
        return !image.tags.find((tag) => tag.id === filteredTag.id);
      })
      .map((tag) => ({
        value: tag.id,
        text: tag.label,
      })),
  };
};

/**
 * View - Container for Image preview
 * @returns JSX View
 */
function ImagePreview() {
  const { tags, image, tagListStatus, imageStatus, tagsStatus } =
    useSelector(selector);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(thunkActions.getImage());
    dispatch(thunkActions.getTags());
  }, [dispatch]);

  function handleTagRemove(tag) {
    dispatch(thunkActions.deleteTag({ tag, imageId: image.id }));
  }

  function handleTagAdd(tag) {
    dispatch(thunkActions.patchTag({ id: tag.value, label: tag.text }));
  }

  const isLoading = [tagListStatus, imageStatus].includes("loading");
  return (
    <View loading={isLoading}>
      <ImageLayout title={image.title} imageUrl={image.imageUrl} />
      <TagList
        tags={image.tags}
        onRemoveTag={handleTagRemove}
        loading={tagsStatus === "loading"}
      />
      <TagForm tags={tags} onAddTag={handleTagAdd} />
    </View>
  );
}

export default ImagePreview;
