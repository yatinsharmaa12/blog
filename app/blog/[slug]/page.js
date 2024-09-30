// app/blog/[slug]/page.jsx
import { getPostBySlug } from '@/lib/posts'; // Adjust the import path as needed
import { remark } from 'remark';
import html from 'remark-html';

const BlogPost = async ({ params }) => {
  const { slug } = params; // Extract slug from params
  const post = await getPostBySlug(slug); // Fetch post data

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div>
      <h1>{post.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default BlogPost;
