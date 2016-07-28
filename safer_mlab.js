jq = jQuery.noConflict(true);

jq(document).ready(function() {
  console.log('Hiding mLab delete buttons');
  jq('.delete').remove();
  jq('.actionBtns').remove();
});
