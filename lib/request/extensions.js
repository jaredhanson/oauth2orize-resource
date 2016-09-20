module.exports = function() {
  
  // https://tools.ietf.org/html/draft-campbell-oauth-resource-indicators-01
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    if (q.resource) {
      ext.resource = q.resource;
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = '*';
  mod.request = request;
  return mod;
}
