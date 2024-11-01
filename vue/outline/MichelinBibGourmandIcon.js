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
    _createElementVNode("path", { d: "M4.97 20c-2.395-1.947-4.763-5.245-1.005-8-.52-4 3.442-7.5 5.524-7.5.347-1 1.499-1.5 2.54-1.5s2.135.5 2.482 1.5c2.082 0 6.044 3.5 5.524 7.5 3.758 2.755 1.39 6.053-1.005 8" }),
    _createElementVNode("path", { d: "M8 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0M14 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0M8 17.085c3.5 2.712 6.5 2.712 9-1.085" }),
    _createElementVNode("path", { d: "M13 18.5c.815-2.337 1.881-1.472 2-.55" })
  ]))
}