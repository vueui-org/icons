export default {
  plugins: [
    'preset-default',
    'removeDimensions',
    'sortAttrs',
    'cleanupListOfValues',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
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
