
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/new"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JPMXC65V.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/edit"
  },
  {
    "renderMode": 2,
    "route": "/feature"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 611, hash: 'dde3e607521d5dbad520079e12284fbfccaeda7fa251ec1d2c70d4a57018ce79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: 'c27adc9974f9cc76f49be207787230ec15d03e3e4c53b9cff33aa5851d9fd46b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'new/index.html': {size: 3569, hash: '5e2a921658c3f44a87be8f0fe2b04b58a13f755978c57dbf25bef683487f07ba', text: () => import('./assets-chunks/new_index_html.mjs').then(m => m.default)},
    'edit/index.html': {size: 5233, hash: 'd8ca24b6c964709d7405b439a7304d9b48e8d3aebd0bc7a1c0eb1386b1b2acf8', text: () => import('./assets-chunks/edit_index_html.mjs').then(m => m.default)},
    'feature/index.html': {size: 3569, hash: '5e2a921658c3f44a87be8f0fe2b04b58a13f755978c57dbf25bef683487f07ba', text: () => import('./assets-chunks/feature_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5212, hash: '7b9f8f9c994ee99d0ca06e1e29dc9acbafc6579047ae454fb9dcd578905fbc78', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8885, hash: '45784dcca7ff7b7185ea93033a5a72da08b108223ce7efa51d7359afcb7b154a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
