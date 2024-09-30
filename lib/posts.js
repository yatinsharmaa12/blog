// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to get all posts
export const getAllPosts = () => {
  const postsDirectory = path.join(process.cwd(), 'content'); // Change 'content' to your folder
  const filenames = fs.readdirSync(postsDirectory);

  const allPosts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: filename.replace(/\.md$/, ''), // Adjust this based on your file extension
      ...data,
      content,
    };
  });

  return allPosts;
};
