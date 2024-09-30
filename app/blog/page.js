// app/blog/page.jsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts'; // Adjust the import path as needed

const Blog = async () => {
  const posts = await getAllPosts(); // Fetch posts

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.data.title} {/* Directly using title instead of an anchor tag */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
