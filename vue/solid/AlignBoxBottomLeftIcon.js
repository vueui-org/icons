const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM6 15a1 1 0 0 0-1 1v2l.007.117A1 1 0 0 0 7 18v-2l-.007-.117A1 1 0 0 0 6 15m3-4a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 10 18v-6l-.007-.117A1 1 0 0 0 9 11m3 2a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 13 18v-4l-.007-.117A1 1 0 0 0 12 13" })
  ]))
}