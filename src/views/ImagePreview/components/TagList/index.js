import React from "react";
import Tag from "@components/Tag";
import CloseIcon from "@components/Icons/Close";
import noop from "@utils/noop";
import styles from "./styles.module.css";

function TagList({ tags, onRemoveTag, loading }) {
  return (
    <>
      <h3> Tags {loading && <span> updating...</span>}</h3>
      {!tags.length && <span> Empty tags list</span>}
      {!!tags.length && (
        <div className={styles.tagList}>
          {tags.map((tag) => (
            <Tag
              {...tag}
              key={tag.id}
              endIcon={<CloseIcon onClick={() => onRemoveTag(tag)} />}
            />
          ))}
        </div>
      )}
    </>
  );
}

TagList.defaultProps = {
  tags: [],
  onRemoveTag: noop,
};

export default TagList;
