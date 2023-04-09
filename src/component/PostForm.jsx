import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          maxLength={300}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
