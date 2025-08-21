import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (page) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  return data;
};

export default function PostsComponent({ page }) {
  const {
    data,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,       // ✅ keeps old data while fetching new page
    refetchOnWindowFocus: true,   // ✅ refetches when window regains focus
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts 😢</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts (Page {page})</h2>
      <ul className="mb-2">
        {data.map((post) => (
          <li key={post.id} className="border-b py-1">
            {post.title}
          </li>
        ))}
      </ul>
      {isFetching && <p className="text-sm text-gray-500">Updating...</p>}
    </div>
  );
}
