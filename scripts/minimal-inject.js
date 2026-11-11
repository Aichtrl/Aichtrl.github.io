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

// Keep the theme switch available outside the collapsed mobile menu.
hexo.extend.filter.register('after_render:html', (html) => {
  const toggle = /<li class="nav-item" id="color-toggle-btn">[\s\S]*?<\/li>/;
  if (!toggle.test(html)) return html;
  const button = '<button id="color-toggle-btn" type="button" aria-label="切换日间或夜间模式" title="切换日间 / 夜间模式"><i class="iconfont icon-dark" id="color-toggle-icon" aria-hidden="true"></i></button>';
  return html.replace(toggle, '').replace('<button id="navbar-toggler-btn"', button + '<button id="navbar-toggler-btn"');
});
