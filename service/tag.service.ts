import { CategorieTag, IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";
import { cache } from "react";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface ITagBlogs extends CategorieTag {
  blogs: IBlog[];
}

export const getTags = async () => {
  const query = gql`
    query Tags {
      tags {
        title
        slug
      }
    }
  `;

  const result = await request<{ tags: CategorieTag[] }>(graphqlAPI, query);
  return result.tags;
};

export const getTagBlogs = cache(async (slug: string) => {
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
});
