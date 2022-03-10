import React from "react";
import propTypes from "prop-types";
import Select from "@components/Select";
import Button from "@components/Button";
import noop from "@utils/noop";
import styles from "./styles.module.css";

/**
 * Tag form component
 * @param {object} props Components props
 * @param {function} props.onAddTag Callback used once the user try to add a new tag
 * @returns JSX component
 */
function TagForm({ tags, onAddTag }) {
  const [form, setForm] = React.useState({ tag: { value: "" } });
  function handleTagChange(event, tag) {
    setForm({ ...form, tag });
  }

  function handleAddTag() {
    setForm({ ...form, tag: { value: "" } });
    onAddTag(form.tag);
  }
  return (
    <div>
      <h3> Add a tag for this picture </h3>
      {!!tags.length && (
        <div className={styles.form}>
          <Select
            options={tags}
            value={form.tag.value}
            onChange={handleTagChange}
          />
          <Button onClick={handleAddTag} disabled={!form.tag.value}>
            Add tag
          </Button>
        </div>
      )}
      {!tags.length && <span> No more tags to add</span>}
    </div>
  );
}

TagForm.defaultProps = {
  onAddTag: noop,
  tags: [],
};

TagForm.propTypes = {
  onAddTag: propTypes.func,
  tags: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      text: propTypes.string,
    })
  ),
};
export default TagForm;
