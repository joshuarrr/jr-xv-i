var React = require('react');
var MediaQuery = require('react-responsive');
var Waypoint = require('react-waypoint');
import styles from '../styles/ig.css';
import LoadingBar from './components/loader.jsx';


// In this example we also have two components - a picture and
// a picture list. The pictures are fetched from Instagram via AJAX.


var Picture = React.createClass({
  render: function(){
    return (
      <img className='ig-picture'
        src={this.props.src}
        width="200"
        title={this.props.title} />
    );
  }
});

var PictureList = React.createClass({
  getInitialState: function(){
    // The pictures array will be populated via AJAX
    return { pictures: [] };
  },

  componentDidMount: function(){
    // When the component loads, send a jQuery AJAX request
    var self = this;
    var url = 'https://api.instagram.com/v1/users/5335790/media/recent/?access_token=5335790.ab103e5.bcdfe72e51244666a63a238b13eb902c&count=42&callback=?';

    $.getJSON(url, function(result){
      if(!result || !result.data || !result.data.length){
        return;
      }

      var pictures = result.data.map(function(p){
        return {
          id: p.id,
          url: p.link,
          src: p.images.low_resolution.url,
          title: p.caption ? p.caption.text : ''
        };
      });

      // console.log('# of pictures =' + pictures.length);

      var nextSet = result.pagination.next_url;
      // console.log('nextSet = ' + result.pagination.next_url); // yay!

      // Update the component's state. This will trigger a render.
      // Note that this only updates the pictures property
      self.setState({ pictures: pictures});
    });
  },

  getNextSet() {
    var url = nextSet;
  },

  render: function() {

    var self = this;
    var pictures = this.state.pictures.map(function(p){
      return <Picture ref={p.id} key={p.id} src={p.src} title={p.title} />
    });

    var nextSet = this.state.nextSet;

    if(!pictures){
      pictures = <p>Loading images..</p>;
    //   pictures = <LoadingBar
    //               active={true}
    //               color={'#cc0033'}
    //               speed={30} />
    }

    // console.log('rendered nextSet = ' + nextSet);
    return (
      <div>
        <MediaQuery query='(min-width: 768px)'>
          <h1>768</h1>
        </MediaQuery>
        <div className="ig-pictures">
          {pictures}
          <button className="ig-more" onClick={this.getNextSet}>more</button>
        </div>
      </div>
    );
  }
});


// Create the Ig component, which just renders the PictureList component.
var Ig = React.createClass({
  render: function() {
    return (
      <PictureList />
    );
  }
});


module.exports = PictureList;