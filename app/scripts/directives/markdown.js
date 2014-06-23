

'use strict';

// Render GitHub flavored markdown in the HTML page
app.directive('markdown', function ($compile, $http, Octocatfight) {
    return {
        restrict: 'E',
        replace: true,
        link: function (scope, element, attrs) {
            if ('src' in attrs) {
                element.html(Octocatfight.getMakeHtml(attrs.src));
            } else if (element.text().trim().length) {
                element.html(Octocatfight.makeHtml(element.text()));
            }
        }
    };
});
