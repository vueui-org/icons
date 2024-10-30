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
    _createElementVNode("path", { d: "M14.468 10a4 4 0 1 0-5.466 5.46M2 12h1M11 3v1M11 20v1M4.6 5.6l.7.7M17.4 5.6l-.7.7M5.3 17.7l-.7.7M15 13h5a2 2 0 1 0 0-4M12 16h5.9670000000000005A2 2 0 0 1 20 18a2 2 0 0 1-2 2h-.286" })
  ]))
}