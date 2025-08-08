type CategorieTag = {
  title: string;
  slug: string;
};

type Image = {
  url: string;
};

type Content = {
  html: string;
};

// Blog interface
export interface IBlog {
  id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  image: Image;
  content: Content;
  tag: CategorieTag[];
  categorie: CategorieTag[];
  author: IAuthor;
}

// Author interface
export interface IAuthor {
  id: string;
  name: string;
  bio: string;
  image: Image;
}
