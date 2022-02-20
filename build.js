require('esbuild').build({
  entryPoints: ['src/index.js', 'src/index2.js'],
  outdir: 'build',
  bundle: true,
  minify: true,
  sourcemap: true,
  target: [
    'chrome90',
    'firefox95',
    'safari15'
  ],
  banner: {
    js: '// copyright 2022 by Riki Fridrich'
  },
  legalComments: 'linked'
}).catch(() => process.exit(1))
