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
    _createElementVNode("path", { d: "M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1s2.077-1.017 3.5-1c1.423-.017 2.67.358 3.5 1M8 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2M12 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" }),
    _createElementVNode("path", { d: "M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" }),
    _createElementVNode("path", { d: "M16.746 16.726a3 3 0 1 0 .252-5.555" })
  ]))
}