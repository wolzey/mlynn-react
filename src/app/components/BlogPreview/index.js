import React, { Component } from 'react'
import PrismicReact from 'prismic-reactjs'

const BLOG_POST = 'blog_post'

const linkResolver = (doc) => {
  switch(doc.type) {
    case BLOG_POST:
      return `/blog/${doc.uid}`
      break;
    default:
      return '/'
  }
}


export default class BlogPreview extends Component {
  constructor(props) {
    super(props)
  }

  _truncate(n) {
    return (string) => {
      return (string.length > n) ? this.substr(0, n-1) + '&hellip;' : string
    }
  }

  render() {
    let { body, image, title } = this.props
    return (
      <div className="blog_preview">
        <div className="blog_image">
          <img src={image.url} />
        </div>
        <div className="title">
          {PrismicReact.RichText.render(title, linkResolver)}
        </div>
        <div className="blog_body">
          {PrismicReact.RichText.render(body, linkResolver)}
        </div>
      </div>
    )
  }
}

// BlogPreview.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   image: React.PropTypes.string.isRequired,
//   body: React.PropTypes.string.isRequired
// }