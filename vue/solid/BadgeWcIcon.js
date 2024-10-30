const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-7.534 4a1 1 0 0 0-.963.917l-.204 2.445-.405-.81-.063-.11a1 1 0 0 0-1.725.11l-.406.81-.203-2.445A1 1 0 0 0 6.534 8l-.117.003a1 1 0 0 0-.914 1.08l.5 6 .016.117c.175.91 1.441 1.115 1.875.247L9 13.236l1.106 2.211c.452.904 1.807.643 1.89-.364l.5-6a1 1 0 0 0-.913-1.08zM15.5 8a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 1 0 5 0 1 1 0 0 0-2 0 .5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0 1 1 0 0 0 2 0A2.5 2.5 0 0 0 15.5 8" })
  ]))
}