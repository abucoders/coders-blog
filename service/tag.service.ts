import { CategorieTag, IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface ITagBlogs extends CategorieTag {
  blogs: IBlog[];
}

export const getTagBlogs = async (slug: string) => {
  const query = gql`
    query Tag($slug: String!) {
      tag(where: { slug: $slug }) {
        title
        slug
        blogs {
          ... on Blog {
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
    }
  `;

  const result = await request<{ tag: ITagBlogs }>(graphqlAPI, query, {
    slug,
  });
  return result.tag;
};
