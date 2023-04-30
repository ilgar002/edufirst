import React from "react";
import PageTitle from "../../components/Titles/PageTitle";
import Form from "./Form/Form";

const Blog = () => {
  return (
    <div className="blog-page container">
      <PageTitle title="Stay up to date with our newsletter!" />
      <Form />
    </div>
  );
};

export default Blog;
