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
    _createElementVNode("path", { d: "m11.852 3.011.058-.007L12 3l.075.003.126.017.111.03.111.044.098.052.104.074.082.073 3 3a1 1 0 1 1-1.414 1.414L13 6.415l.001 4.685A5.002 5.002 0 0 1 12 21a5 5 0 0 1-5-5l.005-.217A5 5 0 0 1 11 11.1V6.415L9.707 7.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414l3-3q.053-.054.112-.097l.11-.071.114-.054.105-.035z" })
  ]))
}