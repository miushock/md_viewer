define(['domReady!', 'jquery', 'freelog_api', 'markdown'], function(doc, $, freelog_api, markdown){
  var md_viewer = {};

  md_viewer.default_md_content = "Hello.\n\n *markdown placeholder.\n * there's no markdown file for the node to display if you see this.";
  md_viewer.current_md = 0; //track the local sequence number of the md to be displayed
  md_viewer.html_content = '';
  md_viewer.resource_index = [];


  md_viewer.update_content = function () {
    freelog_api.getResource(md_viewer.resource_index[md_viewer.current_md].resource_id, function(data){
      md_viewer.html_content = markdown.toHTML(data);
      $('#doc-display').html(md_viewer.html_content);
    });
  }

  $('#md_viewer .button.prev').click(function(){
    if (md_viewer.current_md > 0) {
      md_viewer.current_md --;
      md_viewer.update_content();
    }
  });

  $('#md_viewer .button.next').click(function(){
    if (md_viewer.current_md < md_viewer.resource_index.length-1) {
      md_viewer.current_md ++;
      md_viewer.update_content();
    }
  });

  md_viewer.init = function () {
    freelog_api.getResources('markdown', function(resources){
      md_viewer.resource_index = resources;
      if (resources.length > 0) {
        md_viewer.update_content();
      }
      else {
        $('#doc-display').html(md_viewer.html_content);
      }
    });
  }

  md_viewer.init();

  return md_viewer;
});
