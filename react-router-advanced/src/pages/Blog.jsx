import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
];

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
