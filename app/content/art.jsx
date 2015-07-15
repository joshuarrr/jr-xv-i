var React = require('react');
import styles from '../styles/art.css';

var Art = React.createClass({
  render: function() {
    return (
      <div className="art text-measure">
        <h1 className="intro">art</h1>
        <p className=''>
          Sometimes I draw things, and I wonder if what I’ve drawn is art, or something else. Doodles? Scribbles? Drawings? There must be  something else I can call it besides <em>art</em>. I don’t know why I’m so adverse to that term when referencing my own work — I use it rather generously when referring to other people’s efforts. But, when it comes up, I don’t call myself an artist. I say, <em>“I like to draw”</em>.
          </p>
          <p>Once or twice in my life, I’ve created a thing I would call art. Once, I dripped ink methodically onto some planks of Costa Rican walnut, and I put them on my wall. It was wood with color on it, and it was on my wall, and that combination made it unquestionably art.
          </p>
          <p>But most of the time, I draw things, and then reflect perplexedly, <em>“Hmm. Is this art? This is not <strong>art</strong>. What is this thing I’ve just created?”</em> I think it happens because the word <em>art</em> has such lofty connotations and expectations. <em>Art</em> belongs in galleries. <em>Art</em> is expensive. Perfect. art is made by <em>artists</em>, who are glorious train-wrecks who can barely keep their amazing inner vision in. Not me. This is just some paper with some lines I’ve drawn on it, imperfectly. Some of the lines even cross in ways I didn’t intend. It’s definitely imperfect. It’s definitely not <em>art</em>.
          </p>
          <p>
            If I think of art not as a quality but as an action, then I have no choice but to consider myself an artist. And if I can strip the action of evaluation and appraisal, then I might get closer to the point.
          </p>
          <p>Art is, in my mind, an act of expression. And yet, that definition is incomplete because not all acts of expression are artistic. Are they?
          </p>
      </div>
    );
  }
});

module.exports = Art;