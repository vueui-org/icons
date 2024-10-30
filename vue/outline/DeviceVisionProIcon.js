const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 7q1.715 0 3.275.104 1.526.101 2.798.42 1.22.304 2.119.909a3.9 3.9 0 0 1 1.328 1.531c.326.657.48 1.48.48 2.466q.002 1.51-.574 2.707-.562 1.17-1.537 1.848a3.7 3.7 0 0 1-2.16.66q-.764.002-1.382-.21a6 6 0 0 1-1.17-.548 19 19 0 0 1-1.045-.695 9 9 0 0 0-1.001-.63 2.4 2.4 0 0 0-1.13-.301c-.373 0-.75.097-1.132.3q-.475.255-1 .63-.482.345-1.047.695a5.8 5.8 0 0 1-1.168.548q-.62.212-1.378.21a3.7 3.7 0 0 1-2.165-.659q-.976-.68-1.537-1.848-.576-1.196-.574-2.709c-.004-.98.15-1.802.477-2.46a3.9 3.9 0 0 1 1.33-1.531q.9-.604 2.12-.907a16 16 0 0 1 2.8-.423Q10.287 7 12 7" })
  ]))
}