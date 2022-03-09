import React from "react";

function View({ loading, children }) {
  return (
    <div className="view">
      {loading && <div> ...loading view </div>}
      {!loading && children}
    </div>
  );
}

View.defaultProps = {
  loading: false,
};

export default View;
