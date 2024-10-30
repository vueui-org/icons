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
    _createElementVNode("path", { d: "M20.84 12c0 2.05.985 3.225-.04 5-1.026 1.775-2.537 1.51-4.314 2.534C14.71 20.56 14.184 22 12.133 22s-2.576-1.441-4.353-2.466C6.004 18.51 4.492 18.775 3.466 17c-1.025-1.775-.04-2.95-.04-5s-.985-3.225.04-5C4.492 5.225 6.003 5.49 7.78 4.466 9.556 3.44 10.082 2 12.133 2s2.577 1.441 4.353 2.466c1.776 1.024 3.288.759 4.313 2.534 1.026 1.775.04 2.95.04 5z" })
  ]))
}