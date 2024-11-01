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
    _createElementVNode("path", { d: "M18 4a1 1 0 0 1 .783.378l.074.108 3 5a1 1 0 0 1-.032 1.078l-.08.103-8.53 9.533a1.7 1.7 0 0 1-1.215.51c-.4 0-.785-.14-1.11-.417l-.135-.126-8.5-9.5A1 1 0 0 1 2.083 9.6l.06-.115 3.013-5.022.064-.09a1 1 0 0 1 .155-.154l.089-.064.088-.05.05-.023.06-.025.109-.032.112-.02L6 4zM9.114 7.943a1 1 0 0 0-1.371.343l-.6 1-.06.116a1 1 0 0 0 .177 1.07l2 2.2.09.088a1 1 0 0 0 1.323-.02l.087-.09a1 1 0 0 0-.02-1.323l-1.501-1.65.218-.363.055-.103a1 1 0 0 0-.398-1.268" })
  ]))
}