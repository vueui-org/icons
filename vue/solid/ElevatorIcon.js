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
    _createElementVNode("path", { d: "M18 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-7.293 10.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414l-.094-.083a1 1 0 0 0-1.32.083l-1.294 1.292zm2-6a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L12 9.415l1.293 1.292a1 1 0 0 0 1.414-1.414z" })
  ]))
}