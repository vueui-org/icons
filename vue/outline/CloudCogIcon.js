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
    _createElementVNode("path", { d: "M12 18.004H6.657C4.085 18 2 15.993 2 13.517s2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773 1.88-.572 3.956-.193 5.444 1 1.488 1.19 2.162 3.007 1.77 4.769h.99c.956 0 1.822.39 2.449 1.02M17.001 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M19.001 15.5V17M19.001 21v1.5M22.032 17.25l-1.299.75M17.27 20l-1.3.75M15.97 17.25l1.3.75M20.733 20l1.3.75" })
  ]))
}