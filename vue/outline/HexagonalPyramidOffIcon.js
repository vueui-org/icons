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
    _createElementVNode("path", { d: "m7.877 7.88-4.56 7.53a1.99 1.99 0 0 0 .266 2.484l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l1.264-1.263m1.792-2.205a1.99 1.99 0 0 0-.262-1.538L12.838 2.457a.996.996 0 0 0-1.676 0L9.39 5.383M12 2l-1.254 4.742m-.841 3.177L7 20.9M12 2l2.153 8.14m1.444 5.457L17 20.9M3 3l18 18" })
  ]))
}