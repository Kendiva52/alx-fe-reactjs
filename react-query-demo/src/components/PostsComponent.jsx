import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (page = 1) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  return data;
};

export default function PostsComponent({ page = 1 }) {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 1000 * 60, // 1 minute before data is considered stale
    cacheTime: 1000 * 60 * 5, // 5 minutes before unused cache is garbage-collected
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts (Page {page})</h2>
      {isFetching && <p className="text-gray-500">Updating...</p>}
      <ul className="list-disc pl-5">
        {data.map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {isPreviousData && (
        <p className="text-sm text-gray-500">Showing cached data...</p>
      )}
        <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Refresh Posts
        </button>
    </div>
  );
}


