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
    _createElementVNode("path", { d: "m6.885 7-2.536 4.907C2.328 15.752 1.85 20.682 8.17 21h6.808c4.86-.207 7.989-2.975 4.607-9.093L16.597 7" }),
    _createElementVNode("path", { d: "M15.078 4H9.942l3.678 8.768c.547 1.14.847 1.822.162 2.676-.053.093-1.332 1.907-3.053 1.495-.825-.187-1.384-.926-1.32-1.74.04-.91.62-1.717 1.488-2.074a4.46 4.46 0 0 1 2.723-.358" })
  ]))
}