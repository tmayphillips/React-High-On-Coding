import React, { Component } from 'react';
import './bootstrap.min.css';
import './Articles.css'

export class Articles extends Component {
  render() {
    return (
      <div>
      <div id="curse">
        <div className="alert alert-secondary" role="alert">
          <h1>Curse of the Current Reviews</h1>
          <p>When you want to buy any applicatoin from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.</p>
        </div>
      </div>

      <div id="watchkit">
        <h1>Hello WatchKit</h1>
        <p>Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.
          The WatchKit framework enable the developers to create Apple Watch applications.
          In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.
        </p>
        <div className="orange">
          <div>12 comments</div>
          <div>124 likes</div>
        </div>
      </div>


      <div id="swift">
        <h1>Introduction to Swift</h1>
        <p> Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications.
          Swift is a fairly new language and still in development but it clearly reflects the inentions and the future direction.
          This aricle will revolve around the basic concepts in the Swift language and how you can get started.
        </p>
        <div className="orange">
          <div>15 comments</div>
          <div>45 likes</div>
        </div>
      </div>
      </div>
    )
  }
}
