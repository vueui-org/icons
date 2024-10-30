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
    _createElementVNode("path", { d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-1.445 4.168a1 1 0 0 0-1.387.277L15 10.196V9a1 1 0 0 0-.883-.993L14 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-1.196l1.168 1.75a1 1 0 0 0 1.286.337l.1-.059.094-.07a1 1 0 0 0 .184-1.317L16.202 12l1.63-2.445a1 1 0 0 0-.277-1.387M9 8H8a2 2 0 0 0-2 2v1l.005.15c.022.295.108.573.245.819l.019.031-.02.031A2 2 0 0 0 6 13v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1l-.005-.15a2 2 0 0 0-.245-.819L10.731 12l.02-.031c.158-.287.249-.618.249-.969v-1a2 2 0 0 0-2-2m0 5v1H8v-1zm0-3v1H8v-1z" })
  ]))
}