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
    _createElementVNode("path", { d: "M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4 1 1 0 0 1-.117-1.993L18 20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2 1 1 0 0 1 0-2m-8 16a4 4 0 1 1-8 0V6a4 4 0 1 1 8 0v5h4.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l3 3 .097.112.071.11.031.062.034.081.024.076.03.148L18 12l-.004.085-.016.116-.03.111-.044.111-.052.098-.074.104-.073.082-3 3a1 1 0 0 1-1.414-1.414L14.585 13H10z" })
  ]))
}