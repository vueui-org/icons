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
    _createElementVNode("path", { d: "m12 1.999.041.002.208.003a8 8 0 0 1 7.747 7.747l.003.248.177.006a3 3 0 0 1 2.819 2.819L23 13a3 3 0 0 1-3 3l-.001 1.696 1.833 2.75a1 1 0 0 1-.72 1.548L21 22H11c-3.445.002-6.327-2.49-6.901-5.824l-.028-.178-.071.001a3 3 0 0 1-2.995-2.824L1 13a3 3 0 0 1 3-3l.004-.25A8 8 0 0 1 12 2zM12 12a2 2 0 0 0-2 2 1 1 0 0 0 1 1h2a1 1 0 0 0 1-1 2 2 0 0 0-2-2m-1.99-4-.127.007A1 1 0 0 0 10 10l.127-.007A1 1 0 0 0 10.01 8m4 0-.127.007A1 1 0 0 0 14 10l.127-.007A1 1 0 0 0 14.01 8" })
  ]))
}