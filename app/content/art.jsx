var React = require('react');
import styles from '../styles/art.css';

var Art = React.createClass({
  render: function() {
    return (
      <div className="art text-measure">
        <h1 className="intro">art</h1>
        <p className=''>
          Sometimes I draw things, and I wonder if what I’ve drawn is art, or something else. Doodles? Scribbles? Drawings? There must be  something else I can call it besides <em>art</em>. I don’t know why I’m so adverse to that term when referencing my own work — I use it generously when referring to other people’s efforts. But, when it comes up, I don’t call myself an artist. I just say, <em>“I like to draw”</em>.
          </p>
          <p>
            Once or twice in my life, I’ve created a thing I would consider  art. For instance, I was once inspired to drip colored ink onto  planks of fine Costa Rican hardwood, and then put them on my wall. It was wood with color on it, and it was on my wall. For whatever reason, that combination made it unquestionably art. Another time, I drew my mother’s favorite dog who had died of cancer a year or two before – it made her cry, and she said I’d saved a part of her best friend.
          </p>
          <p>
            But most of the time when I make drawings, I reflect upon them perplexedly. “Hmmm. Is this art? It must not be <em>art</em>. What <em>is</em> this thing I have just created?” I think it happens because the word <em>art</em> has such lofty connotations and expectations. <em>Art</em> belongs in galleries. <em>Art</em> is expensive. It’s perfect. <em>Art</em> is made by <em>artists</em>, who are geniuses — glorious shooting stars who can barely keep their amazing visions in. That’s not me. I just like to draw. This is just some paper with some scratchy lines placed on it imperfectly. Some of the lines cross unintentionally. It’s definitely imperfect. It’s definitely not <em>art</em>.
          </p>
          <p>
            Quite honestly, I hate that aspect of art. I hate the exclusivity and the preclusion it generates. Art that is revered in galleries is wonderful for what it is: expressive creations, typically fashioned by master craftspeople. And there’s nothing wrong with idolizing the pinnacle of our talents. Amazing works should be shared and studied.
          </p>

          <p>In my world, art is simply an expression of creativity. Creativity is the implementation of imagination. And imagination thrives only  when free of social constructs such as value.
          </p>
      </div>
    );
  }
});

module.exports = Art;