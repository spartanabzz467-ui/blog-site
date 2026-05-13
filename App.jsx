import React from "react";
import blog from "./src/blog";
import Header from "./src/components/Header";
import About from "./src/components/About";
import ArticleList from "./src/components/ArticleList";
function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}
export default App;
