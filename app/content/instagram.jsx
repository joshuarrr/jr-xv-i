var React = require('react');
var Waypoint = require('react-waypoint');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

// Number of images to fetch per request
var count = '6';

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
      // Set the initial state
      self.setState({
        items: pictures,
        nextSet: result.pagination.next_url,
        isLoading: false
      });
    });
  },

  _renderItems: function() {
    // console.log('this.state.isLoading = ' + this.state.isLoading);
    // console.log('this.state.items = ' + this.state.items);
    return this.state.items.map(function(p, index) {
      return (
        <ReactCSSTransitionGroup
          className='ig-picture-li'
          component='li'
          key={index}
          transitionName='fade-in'
          transitionAppear={true}
        >
          <img
            src={p.images.standard_resolution.url}
            alt='image'
            link={p.link}
            title={p.caption ? p.caption.text : ''}
            className='ig-picture'
          />
        </ReactCSSTransitionGroup>
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
        console.log('Something went wrong with the ajax request.')
        return;
      }
      // TODO - immutable helper?
      // console.log('Original Items = ' + this.state.items);
      var currentItems = this.state.items;
      // console.log('Items to add = ' + result.data);
      currentItems = currentItems.concat(result.data);
      // console.log('currentItems + Items to add = ' + currentItems);
      this.setState({
        items: currentItems,
        nextSet: result.pagination.next_url,
        isLoading: false
      });
      console.log('Currently showing = ' + this.state.items.length + ' items.');
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
    // console.log('this.state.isLoading = ' + this.state.isLoading);
    if (!this.state.isLoading) {
      return (
        <li className='ig-waypoint'>
          <Waypoint
            onEnter={this._loadMoreItems}
            threshold={2}
          />
        </li>
      );
    }
  },

  // Render it all
  render: function() {
    return (
      <div className="ig-page">
        <ul className="ig-picture-list">
          {this._renderItems()}
          {this._renderWaypoint()}
        </ul>
        <p className="ig-scroll-arrow" />
      </div>
    );
  }
});

module.exports = infinIG;