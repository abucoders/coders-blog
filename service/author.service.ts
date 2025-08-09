import { IAuthor, IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface IGetAuthors extends IAuthor {
  blogs: {
    slug: string;
  };
}

interface IServiceAuthor extends IAuthor {
  blogs: IBlog[];
}

export const getAuthor = async (id: string) => {
  const query = gql`
    query Author($id: ID!) {
      author(where: { id: $id }) {
        id
        name
        bio
        image {
          url
        }
        blogs {
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
    }
  `;

  const result = await request<{ author: IServiceAuthor }>(graphqlAPI, query, {
    id,
  });
  return result.author;
};

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
