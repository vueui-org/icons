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
    _createElementVNode("path", { d: "M4 18v-5.5q0-1 .5-2" }),
    _createElementVNode("path", { d: "M12 7.5c0-1-.01-4.07-4-3.5-3.5.5-4 2.5-4 3.5 0 1.5 0 4 3 4 4 0 5-2.5 5-4M4 12q-2 1-2 2c0 1 0 3 1.5 4 3 2 6.5 3 8.5 3s5.499-1 8.5-3c1.5-1 1.5-3 1.5-4q0-1-2-2" }),
    _createElementVNode("path", { d: "M20 18v-5.5q0-1-.5-2" }),
    _createElementVNode("path", { d: "M12 7.5v-.297l.01-.269.027-.298.013-.105.033-.215q.02-.11.046-.22l.06-.223c.336-1.118 1.262-2.237 3.808-1.873 2.838.405 3.703 1.797 3.93 2.842l.036.204c0 .033.01.066.013.098l.016.185v.661l-.015.394-.02.271c-.122 1.366-.655 2.845-2.962 2.845-3.256 0-4.524-1.656-4.883-3.081l-.053-.242a4 4 0 0 1-.036-.235l-.021-.227a4 4 0 0 1-.007-.215zM10 15v2M14 15v2" })
  ]))
}