const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 1 1 0-20m3.707 12.293a1 1 0 0 0-1.262-.125l-.945.63-.945-.63-.116-.066a1 1 0 0 0-.994.066l-.945.63-.945-.63a1 1 0 0 0-1.262.125l-1 1a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083l.42-.42.818.545.116.066a1 1 0 0 0 .994-.066l.945-.63.945.63.116.066a1 1 0 0 0 .994-.066l.817-.545.42.42a1 1 0 0 0 1.415-1.414zm-6.5-6.5a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32l.792.793-.792.793a1 1 0 0 0 1.414 1.414l1.5-1.5a1 1 0 0 0 0-1.414zm7 0a1 1 0 0 0-1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l1.5 1.5a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L15.415 10l.792-.793a1 1 0 0 0 0-1.414" })
  ]))
}