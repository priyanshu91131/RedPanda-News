import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,discription, imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card my-2" >
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <p class="card-text"><small class="text-muted"> By {!author ? "Unknown": author} at {new Date(date).toGMTString()}</small></p>
          <a href ={newsUrl}  target='_blank' rel="noopener noreferrer" className='btn btn-sm btn-primary'>Read more</a>
  </div>
</div>
      </div>
    )
  }
}
