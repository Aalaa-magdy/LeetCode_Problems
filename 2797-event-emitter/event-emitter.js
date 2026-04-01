class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    const listener = { cb };

    this.events[event].push(listener);

    return {
      unsubscribe: () => {
        listener.cb = null; 
      }
    };
  }

  emit(event, args = []) {
    if (!this.events[event]) return [];

    const results = [];

    for (const listener of this.events[event]) {
      if (listener.cb) {
        results.push(listener.cb(...args));
      }
    }

    return results;
  }
}