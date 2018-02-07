import React, { Component } from 'react'
import Header from '../../components/Header'

import { connect } from 'react-redux'

import { getBlogPosts } from '../../redux/actions/blog'

class Blog extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    console.log(this.props.posts)
    return (
      <div className="blog">
        <Header />
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

/**
 * TODO: Add actions to get Blog Posts from Prismic
 * TODO: Add blog posts to state
 * TODO: Dispatch store to props
 * TODO: Add loader
 * TODO: Add invalidate function.
 * We don't need to constantly pull the blog posts and hit the api
 * we can totally cache the blog posts
 *
 */