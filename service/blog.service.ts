import { IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query Blogs {
      blogs {
        id
        title
        slug
        description
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

  type ResultType = {
    blogs: IBlog[];
  };

  const result: ResultType = await request<{ blogs: IBlog[] }>(
    graphqlAPI,
    query
  );
  return result.blogs;
};
