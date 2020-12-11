// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/chjyear/Develop/doc-gen/node_modules/_@umijs_runtime@3.2.28@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/_@umijs_preset-dumi@1.0.37@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"en-US":{"*":[{"path":"/","title":"Hello dumi!","meta":{}}],"/pages":[{"path":"/pages","title":"Index","meta":{}},{"title":"Component","path":"/pages/component","meta":{},"children":[{"path":"/pages/component","title":"Index","meta":{}}]}]},"zh-CN":{"*":[{"path":"/zh-CN","title":"你好 dumi!","meta":{}}],"/zh-CN/pages":[{"path":"/zh-CN/pages","title":"Index","meta":{}},{"title":"Component","path":"/zh-CN/pages/component","meta":{},"children":[{"path":"/zh-CN/pages/component","title":"Index","meta":{}}]}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"中文"}],"navs":{"en-US":[{"path":"/pages","title":"组件"},{"title":"Raxjs","path":"http://rax.alibaba-inc.com/"},{"title":"GitHub","path":"https://github.com/raxjs/universal-api"}],"zh-CN":[{"path":"/zh-CN/pages","title":"组件"},{"title":"Raxjs","path":"http://rax.alibaba-inc.com/"},{"title":"GitHub","path":"https://github.com/raxjs/universal-api"}]},"title":"dumi","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../index.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/index.en-US.md",
          "updatedTime": 1607260960639,
          "slugs": [
            {
              "depth": 1,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            },
            {
              "depth": 2,
              "value": "sabdksa",
              "heading": "sabdksa"
            }
          ],
          "title": "Hello dumi!",
          "locale": "en-US"
        },
        "title": "Hello dumi!"
      },
      {
        "path": "/zh-CN",
        "component": require('../../index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/index.zh-CN.md",
          "updatedTime": 1607260919792,
          "hero": {
            "title": "组件"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "你好 dumi!",
              "heading": "你好-dumi"
            },
            {
              "depth": 2,
              "value": "飒飒吧",
              "heading": "飒飒吧"
            }
          ],
          "title": "你好 dumi!",
          "locale": "zh-CN"
        },
        "title": "你好 dumi!"
      },
      {
        "path": "/pages",
        "component": require('../../pages/index.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/pages/index.en-US.md",
          "updatedTime": 1607259475796,
          "slugs": [],
          "locale": "en-US",
          "title": "Index",
          "nav": {
            "path": "/pages",
            "title": "组件"
          }
        },
        "title": "Index"
      },
      {
        "path": "/pages",
        "component": require('../../pages/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/pages/index.md",
          "updatedTime": 1607260964890,
          "nav": {
            "title": "组件",
            "path": "/pages"
          },
          "slugs": [],
          "title": "Index"
        },
        "title": "Index"
      },
      {
        "path": "/pages/component",
        "component": require('../../pages/component/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/pages/component/index.md",
          "updatedTime": 1607260272239,
          "slugs": [],
          "title": "Index",
          "nav": {
            "path": "/pages",
            "title": "组件"
          },
          "group": {
            "path": "/pages/component",
            "title": "Component"
          }
        },
        "title": "Index"
      },
      {
        "path": "/zh-CN/pages",
        "component": require('../../pages/index.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/pages/index.en-US.md",
          "updatedTime": 1607259475796,
          "slugs": [],
          "locale": "zh-CN",
          "title": "Index",
          "nav": {
            "path": "/zh-CN/pages",
            "title": "组件"
          }
        },
        "title": "Index"
      },
      {
        "path": "/zh-CN/pages",
        "component": require('../../pages/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/pages/index.md",
          "updatedTime": 1607260964890,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/pages"
          },
          "slugs": [],
          "title": "Index",
          "locale": "zh-CN"
        },
        "title": "Index"
      },
      {
        "path": "/zh-CN/pages/component",
        "component": require('../../pages/component/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/pages/component/index.md",
          "updatedTime": 1607260272239,
          "slugs": [],
          "title": "Index",
          "nav": {
            "path": "/zh-CN/pages",
            "title": "组件"
          },
          "group": {
            "path": "/zh-CN/pages/component",
            "title": "Component"
          },
          "locale": "zh-CN"
        },
        "title": "Index"
      }
    ],
    "title": "dumi"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
