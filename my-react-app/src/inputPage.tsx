import React, { useState } from "react";
import { Link } from "react-router-dom";

interface InputPageProps {}

const InputPage: React.FC<InputPageProps> = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  interface Post {
    title: string;
    description: string;
    date: string;
  }

  const PostForm: any = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSend = () => {
      const currentDate = new Date();
      const formattedDate = currentDate.toString();

      const newPost: Post = {
        title,
        description,
        date: formattedDate,
      };

      setPosts((prevPosts) => [...prevPosts, newPost]);

      setTitle('');
      setDescription('');
    };

    return (
      <div className={darkMode ? "darkMode" : ""}>
        <ul>
            <Link to="/">FetchPage</Link>
            <Link to="/inputPage">InputPage</Link>
            <Link to="/todoPage">TodoPage</Link>
        </ul>
        <button onClick={handleDarkModeToggle}>Toggle Dark Mode</button>
        <h2>New Post</h2>
        <form>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="button" onClick={handleSend}>
            Create Post
          </button>
        </form>
        <div className={darkMode ? "darkMode" : ""}>
          <h2>Posts</h2>
          {posts.map((post, index) => (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>Date: {post.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <PostForm />;
};

export default InputPage;
