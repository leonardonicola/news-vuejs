interface ArticleSource {
  id: string | null
  name: string
}

interface Article {
  author: string
  content: string
  description: string
  publishedAt: string
  source: ArticleSource
  title: string
  url: string
  urlToImage: string
}

export type { Article }
