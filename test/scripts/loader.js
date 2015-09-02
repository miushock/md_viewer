requirejs.config({
  "baseUrl": 'scripts/lib',
  "paths": {
    "app": "../app",
    "jquery" : "jquery-2.1.4.min",
    "external" : "../external"
  }
});

requirejs(['app/md_viewer']);
