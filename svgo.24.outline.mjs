export default {
  plugins: [
    'preset-default',
    'removeDimensions',
    'sortAttrs',
    'cleanupListOfValues',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['stroke', 'stroke-width', 'path:stroke-width'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            'stroke-width': '1.5',
            stroke: 'currentColor',
            'aria-hidden': 'true',
            'data-slot': 'icon',
            height: '16px',
            width: '16px',
          },
        ],
      },
    },
  ],
}
