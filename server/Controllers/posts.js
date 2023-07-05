const axios = require("axios");

async function getPosts(req, res) {
  try {
    let id = req.params.id;
    let userId = req.query.userId;
    let commentsUrl = req.originalUrl;
    commentsUrl = commentsUrl.split("/").pop();
    let url = "https://jsonplaceholder.typicode.com/posts";
    if (id) {
      url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    }
    if (commentsUrl == "comments") {
      url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    }
    if (userId) {
      url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    }

    let data = await axios.get(url);
    res.header({ "x-codedamn-project": "jsonproxyholder" }).send(data.data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getPosts };
