import React, { Component} from 'react'
import { useState } from 'react';

export default class news_item extends Component {

  render() {

    let {title , description, ImgUrl,news, author, date,source} = this.props;
    return (
      <>
      <div>
      <div className="card">
  <span className="badge bg-danger">{source}</span>
<img src= {ImgUrl} className="card-img-top" alt="..."/>
  <div className="card-body"> 

    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={news} target = "_blank" className="btn btn-dark">Get News</a>
    <p className="card-text my-3"><small className="text-muted">By {author?author:"unknown"} at {date}</small></p>
  </div>
</div>
      </div>
      </>
    )
  }
}


