import Prismic from 'prismic-javascript'

export default class PrismicService {
  constructor(opts) {
    this.apiEndpoint = opts.apiEndpoint
  }

  getPosts() {
    return Prismic.getApi(this.apiEndpoint)
      .then((api) => {
        return api.query(
          Prismic.Predicates.at('document.type', 'blog_post'),
          { orderings : '[my.blog_post.date desc]' }
        )
      }).then((response) => response.results)
  }
}