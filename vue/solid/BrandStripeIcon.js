const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 2c2.45 0 4.543.44 5.928 1.096a1 1 0 0 1 .564 1.028l-.5 4a1 1 0 0 1-1.429.776c-1.047-.509-2.618-.823-4.168-.823q-.206.001-.332.026l.028.024.07.047c.314.207.832.437 1.672.746C18.157 10.271 20 12.16 20 15.5c0 2.13-.758 3.732-2.295 4.924C16.412 21.447 14.283 22 12 22c-2.4 0-4.72-.644-6.486-1.626a1 1 0 0 1-.506-.998l.5-4a1 1 0 0 1 1.494-.741C8.294 15.385 10.642 16 12 16c.39 0 .704-.147.87-.295l.035-.035-.09-.035c-.167-.06-1.583-.493-2.153-.694C7.036 13.637 5 11.332 5 8c0-1.887.882-3.563 2.37-4.777C8.59 2.236 9.887 2 12.5 2" })
  ]))
}