var React = require('react');
var Waypoint = require('react-waypoint');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import styles from '../styles/_elements/waypoints-example.css';

// Number of images to fetch per request
var count = '6'

var infinIG = React.createClass({

  getInitialState: function() {
    return {
      items: [],
      isLoading: false
    };
  },

  componentDidMount: function(){
    var self = this;
  // Setup the ajax url
    var apiUrl = 'https://api.instagram.com/v1/users/5335790/media/recent/';
    var token = '5335790.ab103e5.bcdfe72e51244666a63a238b13eb902c';
    var url = apiUrl +'?access_token=' + token + '&count=' + count + '&callback=?';

    // Make the initial Ajax call
    $.getJSON(url, function(result){
      if(!result || !result.data || !result.data.length){
        console.log('Something went wrong.')
        return;
      }
      var pictures = result.data;
      self.setState({
        items: pictures,
        nextSet: result.pagination.next_url,
        isLoading: false
      });
    });
  },

  /* @return {Object} */
  _renderItems: function() {
    // console.log('this.state.isLoading = ' + this.state.isLoading);
    // console.log('this.state.items = ' + this.state.items);
    return this.state.items.map(function(p, index) {
      return (
        <ReactCSSTransitionGroup component="span"transitionName='fade-in' transitionAppear={true}>
          <img
            src={p.images.standard_resolution.url}
            alt='image'
            key={index}
            link={p.link}
            title={p.caption ? p.caption.text : ''}
            className="infinite-scroll-example__list-item"
          />
        </ ReactCSSTransitionGroup>
      );
    });
  },

  _loadMoreItems: function() {
    var self = this;
    var itemsToAdd = count;
    this.setState({ isLoading: true });
    var url = this.state.nextSet + '&callback=?';
    // console.log('next url = ' + this.state.nextSet);
    $.getJSON(url, function(result){
      if(!result || !result.data || !result.data.length){
        console.log('Something went wrong.')
        return;
      }
      // console.log('Original Items = ' + this.state.items);
      var currentItems = this.state.items;
      console.log('Items to add = ' + result.data);

      currentItems = currentItems.concat(result.data);
      console.log('new currentItems = ' + currentItems);
      this.setState({
        items: currentItems,
        nextSet: result.pagination.next_url,
        isLoading: false
      });
      console.log('this.state.items = ' + this.state.items.length);
    }.bind(this));
  },

  /* @return {Object} */
  _renderLoadingMessage: function() {
    if (this.state.isLoading) {
      return (
        <p className="infinite-scroll-example__loading-message">
          Loading...
        </p>
      );
    }
  },

  _renderWaypoint: function() {
    console.log('this.state.isLoading = ' + this.state.isLoading);
    if (!this.state.isLoading) {
      return (
        <Waypoint
          onEnter={this._loadMoreItems}
          threshold={2.0}
        />
      );
    }
  },

  /**
   * @return {Object}
   */
  render: function() {
    return (
      <div className="infinite-scroll-example">
        <div className="infinite-scroll-example__scrollable-parent">
          {this._renderItems()}
          {this._renderWaypoint()}
        </div>
        <p className="infinite-scroll-example__arrow" />
      </div>
    );
  }
});

module.exports = infinIG;