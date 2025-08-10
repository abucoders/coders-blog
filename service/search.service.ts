import { CategorieTag, IBlog } from "@/types/service.type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface ICategoriesTags {
  categories: CategorieTag[];
  tags: CategorieTag[];
}

interface IData {
  title: string;
  slug: string;
  items: CategorieTag[];
}

export const getCategoriesTags = async () => {
  const query = gql`
    query CategoriesAndTags {
      tags(where: { blogs_some: { Blog: {} } }, first: 4) {
        title
        slug
      }
      categories(where: { blogs_some: { Blog: {} } }, first: 4) {
        title
        slug
      }
    }
  `;

  const result = await request<ICategoriesTags>(graphqlAPI, query);
  const data: IData[] = [
    {
      title: "See post by categories",
      slug: "categories",
      items: result.categories,
    },
    {
      title: "See post by tags",
      slug: "tags",
      items: result.tags,
    },
  ];

  return data;
};

export const getSearchBlogs = async (title: string) => {
  const query = gql`
    query SearchBlogs($title: String!) {
      blogs(where: { title_contains: $title }) {
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

  const result = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
    title,
  });
  return result.blogs;
};
