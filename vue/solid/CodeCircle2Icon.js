const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-3.658 5.22a1 1 0 0 0-1.282.598l-2 5.5a1 1 0 0 0 1.88.684l2-5.5a1 1 0 0 0-.598-1.282M9.207 9.793a1 1 0 0 0-1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l1.5 1.5a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L8.415 12l.792-.793a1 1 0 0 0 0-1.414m7 0a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32l.792.793-.792.793a1 1 0 0 0 1.414 1.414l1.5-1.5a1 1 0 0 0 0-1.414z" })
  ]))
}