import express from "express";
import bodyParser from "body-parser";

const app = express();  // Create the web app that - requests and responses
const port = 3000;      // Choose the port where the server will listen for traffic

app.set("view engine", "ejs");
app.use(express.static("public")); //CSS
app.use(bodyParser.urlencoded({ extended: true })); // USER INPUT
 
// Store posts in memory
let posts = [];

app.get("/", (req, res) => {
  res.render("index", { posts }); // Pass posts to EJS
});

app.post("/submit", (req, res) => {
  const content = req.body.content;
  if (content && content.trim() !== "") {
    posts.push({ id: Date.now(), content }); // Add new post with unique id
  }
  res.redirect("/");
});

app.post("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedContent = req.body.content;
  posts = posts.map(post =>
    post.id === id ? { ...post, content: updatedContent } : post
  );
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter(post => post.id !== id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});