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

app.factory('Octocatfight', ['$http', function($http, GITHUB_API, GITHUB_OWNER, GITHUB_REPO) {
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
    var getMarkdownRaw = function(path) {
        return $http({
            method: 'GET',
            url: GITHUB_API + '/repos/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/contents' + path
        });
    };
    return {
        makeHtml: function(markdown) { return markdownRaw(markdown); },
        getMakeHtml: function(path) {
            var markdown = window.atob(getMarkdownRaw(path).data.content);
            return markdownRaw(markdown);
        }
    };
}]);
