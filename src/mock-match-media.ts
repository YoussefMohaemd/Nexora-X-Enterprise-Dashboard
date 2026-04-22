const ssrMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {}, // legacy
  removeListener: () => {}, // legacy
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
});

const ssrRequestAnimationFrame = (callback: FrameRequestCallback) =>
  setTimeout(() => callback(Date.now()), 16) as unknown as number;

const ssrCancelAnimationFrame = (handle: number) => clearTimeout(handle);

// Ensure window is defined just in case libraries strictly use window APIs directly.
if (typeof globalThis.window === 'undefined') {
  Object.defineProperty(globalThis, 'window', {
    value: globalThis,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

if (typeof globalThis.matchMedia === 'undefined') {
  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    value: ssrMatchMedia,
  });
}

if (typeof globalThis.requestAnimationFrame === 'undefined') {
  Object.defineProperty(globalThis, 'requestAnimationFrame', {
    writable: true,
    value: ssrRequestAnimationFrame,
  });
}

if (typeof globalThis.cancelAnimationFrame === 'undefined') {
  Object.defineProperty(globalThis, 'cancelAnimationFrame', {
    writable: true,
    value: ssrCancelAnimationFrame,
  });
}

if (typeof globalThis.window.matchMedia === 'undefined') {
  globalThis.window.matchMedia = ssrMatchMedia;
}

if (typeof globalThis.window.requestAnimationFrame === 'undefined') {
  globalThis.window.requestAnimationFrame = ssrRequestAnimationFrame;
}

if (typeof globalThis.window.cancelAnimationFrame === 'undefined') {
  globalThis.window.cancelAnimationFrame = ssrCancelAnimationFrame;
}
