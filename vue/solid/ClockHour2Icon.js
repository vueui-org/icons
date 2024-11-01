const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M11 7v5.022l.003.054.02.135.005.025a1 1 0 0 0 .056.165l.04.082.062.099.07.087.075.074.094.075.08.052.07.035.132.051.135.031.082.01.124.002.113-.012.108-.024.106-.036.108-.051.065-.04 3.007-2.004a1 1 0 1 0-1.11-1.664L13 10.13V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1" })
  ]))
}