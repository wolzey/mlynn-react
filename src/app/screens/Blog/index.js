import React, { Component } from 'react'
import Header from '../../components/Header'
import BlogPreview from '../../components/BlogPreview'

import { connect } from 'react-redux'

import { getBlogPosts } from '../../redux/actions/blog'

class Blog extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    let {posts} = this.props
    return (
      <div className="blog">
        <Header />
        <div className="previews">
          {posts.items && posts.items.map((post, index) => {
            return <BlogPreview
              key={index}
              body={post.data.body}
              image={post.data.post_image}
              title={post.data.title}
            />
          })}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getBlogPosts())
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)