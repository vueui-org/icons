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
    _createElementVNode("path", { d: "M12 3a3 3 0 0 1 3 3v4a3 3 0 0 1 3 3v3a.5.5 0 1 0 1 0V9.415l-1-1-.293.292a1 1 0 0 1-1.414-1.414L16.585 7l-.292-.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 21 9v7a2.5 2.5 0 1 1-5 0v-3a1 1 0 0 0-1-1v7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2V6a3 3 0 0 1 3-3zm-2.486 7.643a1 1 0 0 0-1.371.343l-1.5 2.5-.054.1A1 1 0 0 0 7.5 15h1.233l-.59.986a1 1 0 0 0 1.714 1.028l1.5-2.5.054-.1A1 1 0 0 0 10.5 13H9.265l.592-.986a1 1 0 0 0-.343-1.371M12 5H6a1 1 0 0 0-1 1v1h8V6a1 1 0 0 0-1-1" })
  ]))
}