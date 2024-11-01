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
    _createElementVNode("path", { d: "m5 16 1.465 1.638a2 2 0 1 1-3.015.099zM13.737 9.737c2.299-2.3 3.23-5.095 2.081-6.245s-3.945-.217-6.244 2.082-3.231 5.095-2.082 6.244 3.946.218 6.245-2.081" }),
    _createElementVNode("path", { d: "M7.492 11.818c.362.362.768.676 1.208.934l6.895 4.047c1.078.557 2.255-.075 3.692-1.512s2.07-2.614 1.512-3.692q-.557-1.077-4.047-6.895a6 6 0 0 0-.934-1.208" })
  ]))
}