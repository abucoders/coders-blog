import { IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getArchiveBlogs = async () => {
  const query = gql`
    query Blogs {
      blogs(where: { archive: true }) {
        title
        slug
        createdAt
      }
    }
  `;

  const result = await request<{ blogs: IBlog[] }>(graphqlAPI, query);

  const grouped = result.blogs.reduce((acc, blog) => {
    const year = new Date(blog.createdAt).getFullYear();
    (acc[year] ||= []).push(blog);
    return acc;
  }, {} as Record<number, IBlog[]>);

  return grouped;
};
