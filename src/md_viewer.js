define(['domReady!', 'jquery', 'freelog_api', 'markdown'], function(doc, $, freelog_api, markdown){
  var md_viewer = {};

  md_viewer.default_md_content = "Hello.\n\n* markdown placeholder.\n* there's no markdown file for the node to display if you see this.";
  md_viewer.current_md = md_viewer.default_md_content;
  md_viewer.html_content = '';


  md_viewer.update_content = function () {
    this.html_content = markdown.parse(this.current_md);
    $('#doc-display').html(this.html_content);
  }

  md_viewer.update_content();

  return md_viewer;
});
