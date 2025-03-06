import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

window.HTMLElement.prototype.scrollIntoView = jest.fn();

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
