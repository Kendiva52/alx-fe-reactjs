import { useQuery } from "@tanstack/react-query";

// fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // cache data for 1 minute
    cacheTime: 1000 * 300, // keep unused cache for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Refresh Posts
        </button>
        {isFetching && <p className="text-gray-500">Updating...</p>}
      </div>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-3 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
