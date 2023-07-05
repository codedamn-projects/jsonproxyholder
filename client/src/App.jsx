import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = useState("posts");
  const [data, setData] = useState([]);
  const [postBody, setPostBody] = useState();
  const [postComments, setPostComments] = useState();

  useEffect(async () => {
    try {
      const API_URL = `http://${window.location.hostname}:1338/codedamn/${value}`;
      const data = await axios.get(API_URL);
      setPostBody("");
      setPostComments("");
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [value]);

  async function handleClick(id) {
    try {
      const API_URL = `http://${window.location.hostname}:1338/codedamn/posts/${id}`;
      const CommentsURL = `http://${window.location.hostname}:1338/codedamn/posts/${id}/comments`;
      const data = await axios.get(API_URL);
      setData("");
      setPostBody(data.data);
      const comments = await axios.get(CommentsURL);
      setPostComments(comments.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <input
        type="text"
        placeholder="write the relative URL here to get data"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <pre>
        {Array.isArray(data) ? (
          data.map((post) => (
            <button
              onClick={() => handleClick(post.id)}
              style={{ display: "block" }}
            >
              {post.title}
            </button>
          ))
        ) : data.title ? (
          <button
            onClick={() => handleClick(data.id)}
            style={{ display: "block" }}
          >
            {data.title}
          </button>
        ) : (
          ""
        )}
      </pre>
      <pre>
        {postBody ? (
          <div>
            <h1>Body</h1> {postBody.body}
          </div>
        ) : (
          ""
        )}
      </pre>
      <pre>
        {postComments ? (
          <div>
            <h1>Comments</h1>
            {postComments.map((comment) => (
              <div>
                <h3>Name</h3>
                {comment.name}
                <h3>Comment</h3>
                {comment.body}
                <p>
                  -----------------------------------------------------------------------
                </p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </pre>
    </div>
  );
}

export default App;
