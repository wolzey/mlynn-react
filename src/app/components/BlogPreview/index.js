import React, { Component } from 'react'

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
          <img src={image} />
        </div>
        <div className="blog_body">
          <p>{this._truncate(250)(body)}</p>
        </div>
      </div>
    )
  }
}

BlogPreview.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired
}