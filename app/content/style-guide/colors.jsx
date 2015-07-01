var React = require('react');

var Colors = React.createClass({
  render() {
    return(
      <section className="guide-section">
        <h1>Colors</h1>
        <ul className="colors">
          <li className="color-category reds">
            <h2 className="color-category-name">Reds</h2>
            <ul className="color-variants">
              <li className="color-variant">
                <div className="color-swatch red">
                  <h3>Red</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch light-red">
                  <h3>Light-Red</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch dark-red">
                  <h3>Dark-Red</h3>
                </div>
              </li>
            </ul>
          </li>
          <li className="color-category grays">
            <h2 className="color-category-name">Grays</h2>
            <ul className="color-variants">
              <li className="color-variant">
                <div className="color-swatch gray">
                  <h3>Gray</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch light-gray">
                  <h3>Light Gray</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch lighter-gray">
                  <h3>Lighter Gray</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch dark-gray">
                  <h3>Dark Gray</h3>
                </div>
              </li>
            </ul>
          </li>
          <li className="color-category transparent-blacks">
            <h2 className="color-category-name">Transparent Blacks</h2>
            <ul className="color-variants">
              <li className="color-variant">
                <div className="color-swatch b1">
                  <h3>$black-01</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b1">
                  <h3>$black-01</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b2">
                  <h3>$black-02</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b3">
                  <h3>$black-03</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b4">
                  <h3>$black-04</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b5">
                  <h3>$black-05</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b6">
                  <h3>$black-06</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b7">
                  <h3>$black-07</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b8">
                  <h3>$black-08</h3>
                </div>
              </li>
              <li className="color-variant">
                <div className="color-swatch b9">
                  <h3>$black-09</h3>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      );
  }
});

export default Colors;