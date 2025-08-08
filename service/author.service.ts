import { IAuthor } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface IGetAuthors extends IAuthor {
  blogs: {
    slug: string;
  };
}

export const getAuthors = async () => {
  const query = gql`
    query Authors {
      authors {
        id
        name
        bio
        image {
          url
        }
        blogs {
          slug
        }
      }
    }
  `;

  const result = await request<{ authors: IGetAuthors[] }>(graphqlAPI, query);
  return result.authors;
};
