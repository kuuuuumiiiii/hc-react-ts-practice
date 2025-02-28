import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  searchQuery: string;
};

const PostTable = ({ searchQuery }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPosts = posts.filter((post) => post.body.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
