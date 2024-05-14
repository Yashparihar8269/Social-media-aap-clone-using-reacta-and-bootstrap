import React, { useContext, useRef } from "react";
import { PostList } from "../store/Posts-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value =  " ";
    titleElement.current.value =  " ";
    bodyElement.current.value = " ";
    reactionsElement.current.value = " ";
    tagsElement.current.value = " ";

    addPost(userId,title,body,reaction,tags)
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Please enter your User Id
        </label>
        <input
          type="text"
          className="form-control"
          ref={userIdElement}
          id="userId"
          placeholder="Enter your user id here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          type="text"
          className="form-control"
          ref={titleElement}
          id="title"
          placeholder="Tell us more about you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          ref={bodyElement}
          id="body"
          placeholder="What are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={reactionsElement}
          id="reactions"
          placeholder="Number of people reacted on this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Please enter tags with single splace
        </label>
        <input
          type="text"
          className="form-control"
          ref={tagsElement}
          id="tags"
          placeholder="Enter your post tags here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
