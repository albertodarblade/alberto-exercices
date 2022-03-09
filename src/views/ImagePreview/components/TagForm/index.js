import React from "react";
import Select from "@components/Select";
import Button from "@components/Button";
import noop from "@utils/noop";
import styles from "./styles.module.css";

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

export default TagForm;
