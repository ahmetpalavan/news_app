type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  limit: Int;
  offset: Int;
  count: Int;
  total: Int;
};

type Ahmet = {
  pagination: Pagination;
  data: Article[];
};

type Categories = "general" | "business" | "entertainment" | "health" | "science" | "sports" | "technology";
