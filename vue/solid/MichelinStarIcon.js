const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.81 2c2.018 0 3.478 1.232 3.874 3.129l.016.089.172-.057c.34-.104.684-.16 1.055-.175l.227-.005c2.09 0 3.925 1.93 3.925 4.094 0 1.095-.51 2.087-1.364 2.835l-.118.098.06.048c.88.737 1.36 1.605 1.416 2.656l.006.213c0 2.24-1.739 4.094-3.925 4.094-.445 0-.923-.084-1.374-.233l-.043.193c-.395 1.736-1.806 2.933-3.662 3.016l-.208.005c-2.018 0-3.477-1.232-3.873-3.13l-.03-.161-.011.006a4.1 4.1 0 0 1-1.26.243l-.226.005c-2.09 0-3.925-1.93-3.925-4.094 0-1.096.51-2.087 1.378-2.84l.073-.062-.03-.023c-.88-.737-1.359-1.605-1.415-2.656l-.006-.213c0-2.239 1.74-4.094 3.925-4.094.44 0 .92.098 1.391.27l.036.013.008-.048c.331-1.84 1.776-3.125 3.7-3.211z" })
  ]))
}