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
    _createElementVNode("path", { d: "m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829 1.172-1.172-.094-4.338-2.828-7.071-2.733-2.734-5.9-4-7.07-2.829-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1" }),
    _createElementVNode("path", { d: "M12.975 21.425c3.905-3.906 4.855-9.288 2.121-12.021-2.733-2.734-8.115-1.784-12.02 2.121" })
  ]))
}