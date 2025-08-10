import { IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query Blogs {
      blogs(where: { archive: false }) {
        id
        title
        slug
        description
        createdAt
        image {
          url
        }
        content {
          html
        }
        tag {
          title
          slug
        }
        categorie {
          title
          slug
        }
        author {
          ... on Author {
            id
            name
            bio
            image {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
  return result.blogs;
};

export const getBlog = async (slug: string) => {
  const query = gql`
    query Blog($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        slug
        description
        createdAt
        image {
          url
        }
        content {
          html
        }
        tag {
          title
          slug
        }
        categorie {
          title
          slug
        }
        author {
          ... on Author {
            id
            name
            bio
            image {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request<{ blog: IBlog }>(graphqlAPI, query, { slug });
  return result.blog;
};
