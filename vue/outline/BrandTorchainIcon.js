const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M15.588 15.537 12.035 12l-7.742 8.18c-.791.85.153 2.18 1.238 1.73l9.616-4.096a1.398 1.398 0 0 0 .44-2.277zM8.412 8.464 11.965 12l7.742-8.18c.791-.85-.153-2.18-1.238-1.73L8.853 6.188a1.398 1.398 0 0 0-.44 2.277z" })
  ]))
}