var store = window.store = {
    _watchers: [],

    // Squishy Logo
    _isSquished: true,
    get isSquished() { return this._isSquished; },
    set isSquished(squished) { this._isSquished = squished; this.notify(); },

    // Dev Mode
    _isDevMode: false,
    get isDevMode() { return this._isDevMode; },
    set isDevMode(visible) { console.log(visible); this._isDevMode = visible; this.notify(); },

    // Watch
    register(watcher) { this._watchers.push(watcher); },
    notify() { this._watchers.forEach(w => w()) }
};

export default store;