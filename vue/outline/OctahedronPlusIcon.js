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
    _createElementVNode("path", { d: "m21.498 12.911.206-.208a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0l-8.845 8.949a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001l.08-.081" }),
    _createElementVNode("path", { d: "M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l2.634-.784m5.41-1.61.801-.238c.195-.07.294-.156.296-.243M12 2.12v19.76M16 19h6M19 16v6" })
  ]))
}