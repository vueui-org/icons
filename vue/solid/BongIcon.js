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
    _createElementVNode("path", { d: "M14 2a1 1 0 0 1 0 2v5.587l2.293-2.294a1 1 0 0 1 1.32-.083l.094.083 2 2a1 1 0 0 1 0 1.414l-3.116 3.115.086.233c.311.907.396 1.865.263 2.794l-.062.36-.012.052a6 6 0 0 1-1.121 2.41l-.16.199a6 6 0 0 1-10.396-2.378l-.068-.288-.009-.046a6 6 0 0 1 2.833-6.324L8 10.803V4a1 1 0 1 1 0-2zm-2 2h-2v7.416a1 1 0 0 1-.483.856l-.117.06A4 4 0 0 0 7 16h8a4 4 0 0 0-.486-1.914 1 1 0 0 1 .17-1.185L17.586 10 17 9.414l-2.9 2.902a1 1 0 0 1-1.067.226l-.12-.056a4 4 0 0 0-.316-.155 1 1 0 0 1-.597-.915z" })
  ]))
}