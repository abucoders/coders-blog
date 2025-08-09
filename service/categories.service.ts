import { CategorieTag, IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface ICategorieBlogs extends CategorieTag {
  blogs: IBlog[];
}

export const getCategories = async () => {
  const query = gql`
    query Categories {
      categories {
        title
        slug
      }
    }
  `;

  const result = await request<{ categories: CategorieTag[] }>(
    graphqlAPI,
    query
  );
  return result.categories;
};

export const getCategorieBlogs = async (slug: string) => {
  const query = gql`
    query CategorieBlogs($slug: String!) {
      categorie(where: { slug: $slug }) {
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

  const result = await request<{ categorie: ICategorieBlogs }>(
    graphqlAPI,
    query,
    {
      slug,
    }
  );
  return result.categorie;
};
