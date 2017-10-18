import React, { Component } from 'react';
import './App.css';

var $ = require('jquery');


class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
      id: ''
    }
    // this.deleteFavorite2 = this.deleteFavorite2.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }


  componentDidMount() {
    fetch('/jobs')
      .then(response => response.json())
      .then(response => this.setState({favorites: response}))

  }
  // deleteFavorite2(e) {

  // }

  // deleteFavorite(e) {
  //   e.preventDefault();
  //   var key = e.target.getAttribute('data-key');
  //   var tempId = e.target.getAttribute('data-id');
  //   var favorites = this.state.favorites;
  //   this.setState({
  //     id: tempId
  //   });
  //   console.log("favorites: ", favorites)
  //   console.log("tempId: ", tempId);
  //   $.ajax({
  //     url: '/jobs/Favorites/' + tempId,
  //     type: 'DELETE',
  //     success: function(result) {
  //       console.log("result: ", result);
  //       fetch('/jobs/Favorites' + tempId, {method: 'DELETE'})
  //     }
  //   })
  //   // fetch('/jobs',
  //   //   {method: 'DELETE'})
  //   }
    deleteFavorite(e) {
      e.preventDefault();
      var key = e.target.getAttribute('data-key');
      var tempId = e.target.getAttribute('data-id');
      var favorites = this.state.favorites;
      this.setState({
        id: tempId
      });
      console.log("favorites: ", favorites)
      console.log("tempId: ", tempId);
      //  $.support.cors = true;
         fetch('/jobs/Favorites/' + tempId, {
              method: 'DELETE'
       }).then(function(response) {
         console.log(response);
       })
     }


  render() {

    var mappedFavorites = this.state.favorites.map( (item, index) => {


    return ([
      <div key={index} className="App">
        <div className="wrapper">
          <div className="card radius shadowDepth1">
            <div className="card__image border-tlr-radius">
            	<img src="http://lorempixel.com/400/200/nightlife/" alt="nightlife" className="border-tlr-radius" />
            </div>
            <div className="card__content card__padding">
              <div className="card__share">
                <div className="card__social">
                    <a className="share-icon facebook" ><span className="fa fa-facebook"></span></a>
                    <a className="share-icon twitter" ><span className="fa fa-twitter"></span></a>
                    <a className="share-icon googleplus" ><span className="fa fa-google-plus"></span></a>
                </div>
                <a id="share" className="share-toggle share-icon" ></a>
              </div>
        			<div className="card__meta">
      					<a>{item.company}</a>
                <time>{item.location}</time>
        			</div>
        			<article className="card__article">
  	    				<h2><a>{item.title}</a></h2>
  	    				<p>Hi <strong>{item.meta.contactPerson}</strong>.
                <br />You have favorited the {item.title} position at {item.company}</p>
              </article>
        		</div>
        		<div className="card__action">
      				<div className="card__author">
      					<img src="http://lorempixel.com/40/40/sports/" alt="user" />
      				  <div className="card__author-content">
      						By <a >John Doe</a>
      					</div>
      			  </div>
      			</div>
            <a data-id={item._id} data-key={index} onClick={this.deleteFavorite} href="/jobs/Favorites/{item._id}"> Remove From Favorites </a>
          </div>
        <p className="text-center">Created By <a href="https://twitter.com/mithicher">Mithicher Baro</a></p>
        </div>
      </div>
    ])
  })
  return (
    <div>
      <h1>My Jobs</h1>
      <div>
        <div>{mappedFavorites}</div>
      </div>
    </div>
    )
  }
}

export default Favorites;
