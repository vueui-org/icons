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
    _createElementVNode("path", { d: "M20 7a2 2 0 0 1 2 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V17a2 2 0 0 1-1.85 1.995L16 19H8a2 2 0 0 1-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 9.5V9a2 2 0 0 1 2-2z" })
  ]))
}