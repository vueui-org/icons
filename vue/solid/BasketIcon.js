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
    _createElementVNode("path", { d: "M15.949 3.684 17.053 7H19a3 3 0 0 1 2.962 3.477l-1.252 7.131A4 4 0 0 1 16.756 21H7.244a3.994 3.994 0 0 1-3.95-3.371l-1.258-7.173A3 3 0 0 1 5 7h1.945L8.05 3.684a1 1 0 0 1 1.898.632L9.053 7h5.893l-.895-2.684a1 1 0 1 1 1.898-.632M12 11a3 3 0 0 0-2.995 2.824L9 14a3 3 0 1 0 3-3" })
  ]))
}