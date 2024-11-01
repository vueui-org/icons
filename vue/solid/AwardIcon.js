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
    _createElementVNode("path", { d: "m19.496 13.983 1.966 3.406a1 1 0 0 1-.705 1.488l-.113.011-.112-.001-2.933-.19-1.303 2.636a1 1 0 0 1-1.608.26l-.082-.094-.072-.11-1.968-3.407a9 9 0 0 0 6.93-3.999M11.43 17.982 9.464 21.39a1 1 0 0 1-1.622.157l-.076-.1-.064-.114-1.304-2.635-2.931.19a1 1 0 0 1-1.022-1.29l.04-.107.05-.1 1.968-3.409a9 9 0 0 0 6.927 4.001zM12 2l.24.004A7 7 0 0 1 19 9l-.003.193-.007.192-.018.245-.026.242-.024.178a7 7 0 0 1-.317 1.268l-.116.308-.153.348a7.001 7.001 0 0 1-12.688-.028l-.13-.297-.052-.133-.08-.217-.095-.294a7 7 0 0 1-.093-.344l-.06-.271-.049-.271-.02-.139-.039-.323-.024-.365L5 9a7 7 0 0 1 6.76-6.996z" })
  ]))
}