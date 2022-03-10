import React from "react";
import propTypes from "prop-types";
import Tag from "@components/Tag";
import CloseIcon from "@components/Icons/Close";
import noop from "@utils/noop";
import styles from "./styles.module.css";

/**
 * Will handle a Tag list show, delete
 * @param {object} props Component props
 * @param {Array} props.tags Tags collection
 * @param {function} props.onRemoveTag will triggered on tag remove
 * @param {boolean} props.loading will be true on pending transactions
 * @returns JSX component
 */
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

TagList.propTypes = {
  loading: propTypes.bool,
  onRemoveTag: propTypes.func,
  tags: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      label: propTypes.string,
    })
  ),
};

export default TagList;
