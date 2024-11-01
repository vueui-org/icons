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
    _createElementVNode("path", { d: "M8 7a5 5 0 0 1 4.9 4h4.685l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l3 3q.054.053.097.112l.071.11.054.114.035.105.03.148L21 12l-.003.075-.017.126-.03.111-.044.111-.052.098-.074.104-.073.082-3 3a1 1 0 0 1-1.414-1.414L17.584 13l-4.684.001A5.002 5.002 0 0 1 3 12a5 5 0 0 1 5-5" })
  ]))
}