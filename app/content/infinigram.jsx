var React = require('react');
var Waypoint = require('react-waypoint');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

// Number of images to fetch per request
var count = '1';

// Setup the initial ajax url
var apiUrl = 'https://api.instagram.com/v1/users/5335790/media/recent/';
var token = '5335790.ab103e5.bcdfe72e51244666a63a238b13eb902c';
var url = apiUrl +'?access_token=' + token + '&count=' + count + '&callback=?';

/* Infinigram */
var Infinigram = React.createClass({

  /* Initial state */
  getInitialState: function() {
    return {
      items: [],
      isLoading: false
    };
  },

  /* Did Mount */
  componentDidMount: function() {
    this.setState({ isLoading: true });
    // Make a jQueery Ajax call
    $.getJSON(url, function(result){
      if(!result || !result.data || !result.data.length){
        console.log('Something went wrong with the ajax request.')
      }
      var initialItems = result.data;
      var nextSet = result.pagination.next_url;

      // console.log('nextSet = ' + nextSet);
      if (this.isMounted()) {
        this.setState({
          items: initialItems,
          nextSet: nextSet,
          isLoading: false
        });
      }
    }.bind(this));
  },

  /* Load More */
  _loadMoreItems: function() {
    var self = this;
    var itemsToAdd = count;
    var morePics = this.state.nextSet;

    if (morePics) {
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
        // console.log('Currently showing = ' + this.state.items.length + ' items.');
      }.bind(this));
    }
  },

  /* Render Items */
  _renderItems: function() {
    // console.log('renderItems this.state.items = ' + this.state.items);
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

  /* Render Waypoint */
  _renderWaypoint: function() {
    if (!this.state.isLoading) {
      return (
        <li className='ig-waypoint'>
          <Waypoint
            onEnter={this._loadMoreItems}
            threshold={.4}
          />
        </li>
      );
    }
  },

  /* Render Loader */
  _renderLoader: function() {
    if (this.state.isLoading) {
      return (
        <p className='scroll-arrow'/>
      );
    }
  },

  /* Render */
  render: function() {
    return (
      <div className="ig-page">
        {this._renderLoader()}
        <p className='scroll-arrow'/>
        <ul className="ig-picture-list">
          {this._renderItems()}
          {this._renderWaypoint()}
        </ul>
      </div>
    );
  }
});

module.exports = Infinigram;