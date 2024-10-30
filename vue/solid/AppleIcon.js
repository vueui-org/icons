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
    _createElementVNode("path", { d: "M15 2a1 1 0 0 1 .117 1.993L15 4c-.693 0-1.33.694-1.691 1.552a5.1 5.1 0 0 1 1.982-.544L15.556 5C18.538 5 21 8.053 21 11.32c0 3.547-.606 5.862-2.423 8.578-1.692 2.251-4.092 2.753-6.41 1.234a.31.31 0 0 0-.317-.01c-2.335 1.528-4.735 1.027-6.46-1.27C3.607 17.184 3 14.868 3 11.32l.004-.222C3.112 7.917 5.53 5 8.444 5c.94 0 1.852.291 2.688.792C11.551 3.842 12.95 2 15 2M7.966 8.154C6.606 9.012 6 10.214 6 12a1 1 0 0 0 2 0c0-1.125.28-1.678 1.034-2.154a1 1 0 1 0-1.068-1.692" })
  ]))
}