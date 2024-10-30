const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.887 6.748c-.163 0-.337.016-.506.057-.172.041-.582.165-.838.562l-.014.02-.607 1.05c-.307.205-.534.46-.693.717l-.014.02-2.572 4.65a4 4 0 0 0-.274.494l-.006.01A4 4 0 0 0 3 16a4 4 0 0 0 8 0v-1h2v1a4 4 0 1 0 7.635-1.67l-.004-.012a4 4 0 0 0-.274-.494l-2.572-4.65-.014-.02a2.3 2.3 0 0 0-.693-.716l-.607-1.051-.014-.02c-.256-.397-.667-.52-.838-.562a2.2 2.2 0 0 0-.664-.051 2 2 0 0 0-.68.156c-.184.081-.638.327-.754.889l-.007.037-.14 1.1c-.22.283-.374.64-.374 1.064v1h-2v-1c0-.424-.154-.781-.373-1.064l-.14-1.1-.008-.037c-.116-.562-.57-.808-.754-.889a2 2 0 0 0-.68-.156 2 2 0 0 0-.158-.006M7 14a2 2 0 1 1-1.838 1.209l.19-.342C5.712 14.344 6.316 14 7 14m10 0c.684 0 1.288.344 1.648.867l.19.342A2 2 0 1 1 17 14" })
  ]))
}