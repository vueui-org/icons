const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    height: "16px",
    width: "16px"
  }, [
    _createElementVNode("path", { d: "M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8M12 20a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L11 21a1 1 0 0 1 1-1M3 8a1 1 0 0 1 .993.883L4 9.01a1 1 0 0 1-1.993.117L2 9a1 1 0 0 1 1-1M21 8a1 1 0 0 1 .993.883L22 9.01a1 1 0 0 1-1.993.117L20 9a1 1 0 0 1 1-1M2.89 12.006a1 1 0 0 1 1.104.884 8 8 0 0 0 4.444 6.311A1 1 0 1 1 7.562 21a10 10 0 0 1-5.556-7.89 1 1 0 0 1 .884-1.103zM20.993 12l.117.006a1 1 0 0 1 .884 1.104 10 10 0 0 1-5.556 7.889 1 1 0 1 1-.876-1.798 8 8 0 0 0 4.444-6.31 1 1 0 0 1 .987-.891M5.567 4.226a10 10 0 0 1 12.666 0 1 1 0 1 1-1.266 1.548 8 8 0 0 0-10.134 0 1 1 0 1 1-1.266-1.548" })
  ]))
}