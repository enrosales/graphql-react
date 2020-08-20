import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content, author: $author) {
      _id
      author
    }
  }
`;

const MessageForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createMessage] = useMutation(CREATE_MESSAGE);

  const handleAuthor = e => setAuthor(e.target.value);
  const handleTitle = e => setTitle(e.target.value);
  const handleContent = e => setContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMessage({variables: {title, content, author}});
    window.location.href = "/";
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  className="form-control"
                  value={author}
                  onChange={handleAuthor}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Write a title"
                  className="form-control"
                  value={title}
                  onChange={handleTitle}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="3"
                  placeholder="Content"
                  className="form-control"
                  value={content}
                  onChange={handleContent}
                ></textarea>
              </div>
              <button className="btn btn-success btn-block">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
