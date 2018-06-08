‘use strict’;
importScripts(‘sw-toolbox.js’);
toolbox.precache([“index.html”,”css/grayscale.css”]);
toolbox.router.get(‘/icon/*’, toolbox.cacheFirst);
toolbox.router.get(‘/*’, toolbox.networkFirst, {
networkTimeoutSeconds: 5});