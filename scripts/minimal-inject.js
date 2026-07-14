/* global hexo */

'use strict';

const path = require('path');

// Minimal post layout: publish date below title, no banner meta / footer blocks
hexo.extend.filter.register('theme_inject', (injects) => {
  injects.postMetaTop.raws = [];
  injects.postMetaBottom.raws = [];
  injects.postCopyright.raws = [];
  injects.postMarkdownBegin.file(
    'post-header',
    path.join(hexo.source_dir, '_partials/post-header.ejs')
  );
}, 100);