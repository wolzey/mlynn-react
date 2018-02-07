import PrismicService from '../../services/Prismic'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

const opts = { apiEndpoint: 'https://melissalynn.prismic.io/api/v2' }

let api = new PrismicService(opts)

export const receivePosts = (posts) => {
  return {
    posts,
    type: RECEIVE_POSTS
  }
}

export const getBlogPosts = () => {
  return (dispatch) => {
    api.getPosts().then(posts => dispatch(receivePosts(posts)))
  }
}