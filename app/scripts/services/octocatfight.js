'use strict';
/*
app.factory('Octocatfight',
  function (GITHUB_API) {
    var Octocatfight = {
      makeHtml: function (markdown) {
        return workshops.$add(workshop);
      }
    };
    return Workshop;
  });
*/

app.factory('Octocatfight', ['$http', function($http, GITHUB_API) {
    var markdownRaw = function(markdown) {
        return $http({
            method: 'POST',
            url: GITHUB_API + '/markdown/raw',
            data: markdown,
            headers: {
              'Content-Type': 'text/x-markdown',
              'Access-Control-Allow-Origin': '*'
            }
        });
    };
    return {
        makeHtml: function(markdown) { return markdownRaw(markdown); },
    };
}]);
