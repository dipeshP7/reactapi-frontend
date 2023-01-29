import React from "react";

const ManageCoursepage = (props) => {
  return (
    <>
      <h2>Manage Course Page</h2>
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursepage;
