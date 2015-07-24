var React = require('react');
var cx = require('classnames');
var MediaQuery = require('react-responsive');
var Waypoint = require('react-waypoint');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import styles from '../styles/ig.css';
import LoadingBar from './components/loader.jsx';

var picWidth = 200;

// Render a single picture
var Picture = React.createClass({
  render: function(){
    var liClasses  = cx({
      'ig-picture-li': true,
      'visibile': false
    });    return (
      <li className={liClasses + this.props.rowClasses}>
        <ReactCSSTransitionGroup component="span"transitionName='fade-in' transitionAppear={true}>
          <img className='ig-picture'
            src={this.props.src}
            width='200'
            title={this.props.title}
          />
        </ ReactCSSTransitionGroup>
      </li>
    );
  }
});

var PictureList = React.createClass({
  getInitialState: function(){
    // The pictures array to be populated via ajax api call
    return {
      pictures: [],
      row: 1
    };
  },

  handleResize: function(event) {
    var viewportWidth = document.documentElement.clientWidth;
    this.setState({
      rowCount: ~~(viewportWidth / picWidth)
    });
  },

  handleWaypointEnter: function(currentRow) {
    // console.log('rowNumber = ' + currentRow);
      // set the row state to the currentRow
      // this.setState({ row: currentRow });
    // var ref = 'row' + currentRow;
    // console.log('ref = ' + ref);
    // React.findDOMNode(this.refs.ref).focus();
    return { visibile: true };
    console.log('visibile = ' + visibile);
  },

  showMe: function(currentRow){
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  componentDidMount: function(){
    var self = this;
    var viewportWidth = document.documentElement.clientWidth;

    // Initial rowCount
    this.setState({
      rowCount: ~~(viewportWidth / picWidth)
    });

    // Update rowCount on resize
    window.addEventListener('resize', this.handleResize);

    // Setup the ajax url
    var apiUrl = 'https://api.instagram.com/v1/users/5335790/media/recent/';
    var token = '5335790.ab103e5.bcdfe72e51244666a63a238b13eb902c';
    var count = '30'
    var url = apiUrl +'?access_token=' + token + '&count=' + count + '&callback=?';

    // Make the initial Ajax call
    $.getJSON(url, function(result){
      if(!result || !result.data || !result.data.length){
        return;
      }
      // console.log('result = ' + result);
      var pictures = result.data.map(function(p){
        return {
          id: p.id,
          url: p.link,
          src: p.images.low_resolution.url,
          title: p.caption ? p.caption.text : ''
        };
      });
      self.setState({ pictures: pictures});
    });
  },

  render: function() {
    var rowCount = this.state.rowCount;
    var self = this;
    var pictures = [];
    var rowNumber = 1;

    var rowClasses = this.state.row ? 'active' : '';

    // run through the array
    this.state.pictures.forEach(function(p, index) {
      // If index is greater than 1 and has no remainder when divided by rowcount
      if (index > 1 && index % rowCount === 0) {
        // that means its the last one in a row, so add the extra thing to the array
        rowNumber++;
        // console.log('rowNumber = ' + rowNumber);
        pictures.push(
          <li className="waypoint" key={index}>
            <Waypoint
              onEnter={this.handleWaypointEnter.bind(this, rowNumber)}
              threshold={0}
            />
          </li>
        );
      }
      // add all the things
      pictures.push(
        <Picture ref={'row-' + rowNumber} key={'pic' + p.id} src={p.src} title={p.title} rowClasses={' row-' + rowNumber} />
      );
    }.bind(this));
    // and we want an extra element after the array too.
    pictures.push(<Waypoint
                    onEnter={this.handleWaypointEnter.bind(this, rowNumber)}
                    threshold={0}
                    />);

    return (
      <div className="ig-page">
        <MediaQuery query='(min-width: 768px)'>
          <h1 className="intro">ig: joshrr</h1>
        </MediaQuery>
        <div className="ig-pictures">
          <ul className="picture-list">
            {pictures}
          </ul>
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
