const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-1.445 3.828a1 1 0 0 0-1.387.277L12 10.696l-2.168-3.25a1 1 0 0 0-1.286-.337l-.1.059a1 1 0 0 0-.278 1.387L9.798 11H9a1 1 0 0 0-.993.883L8 12a1 1 0 0 0 1 1h2v1H9a1 1 0 0 0-.993.883L8 15a1 1 0 0 0 1 1h2v1a1 1 0 0 0 .883.993L12 18l.117-.007A1 1 0 0 0 13 17v-1h2a1 1 0 0 0 .993-.883L16 15a1 1 0 0 0-1-1h-2v-1h2a1 1 0 0 0 .993-.883L16 12a1 1 0 0 0-1-1h-.799l1.631-2.445a1 1 0 0 0-.184-1.317z" })
  ]))
}