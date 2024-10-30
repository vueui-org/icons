const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m3 12.12a1 1 0 0 0-1 1v.015a1 1 0 0 0 2 0v-.015a1 1 0 0 0-1-1m.707-5.752a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M9 8.105a1 1 0 0 0-1 1v.015a1 1 0 1 0 2 0v-.015a1 1 0 0 0-1-1" })
  ]))
}