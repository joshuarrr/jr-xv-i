var store = window.store = {
  _watchers: [],

  // Squishy Logo
  _isSquished: true,
  get isSquished() { return this._isSquished; },
  set isSquished(squished) { this._isSquished = squished; this.notify(); },

  // Loaded
  _isLoaded: false,
  get isLoaded() { return this._isLoaded; },
  set isLoaded(loaded) { this._isLoaded = loaded; this.notify(); },

  // Is the infinigrammer loading pics?
  _isInfinigramming: false,
  get isInfinigramming() { return this._isInfinigramming; },
  set isInfinigramming(yes) { this._isInfinigramming = yes; this.notify(); },

  // Nav
  _isNavShowing: false,
  get isNavShowing() { return this._isNavShowing; },
  set isNavShowing(showing) { this._isNavShowing = showing; this.notify(); },

  // Dev Mode
  _isDevMode: false,
  get isDevMode() { return this._isDevMode; },
  set isDevMode(visible) { this._isDevMode = visible; this.notify(); },

  // Watch
  register(watcher) { this._watchers.push(watcher); },
  notify() { this._watchers.forEach(w => w()) }
};

  export default store;