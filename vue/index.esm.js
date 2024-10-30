// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

export default new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `Importing from \`@vueui-org/icons\` directly is not supported. Please import from either \`@vueui-org/icons/solid\` or \`@vueui-org/icons/outline\` instead.`
      )
    },
  }
)
