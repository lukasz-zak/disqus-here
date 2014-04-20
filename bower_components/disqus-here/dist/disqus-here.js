'use strict';
/*jshint camelcase: false */
angular.module('disqusHere', []).directive('disqusHere', [
  '$window',
  function ($window) {
    return {
      restrict: 'E',
      scope: {
        'shortname': '@',
        'identifier': '@',
        'title': '@',
        'url': '@',
        'categoryId': '@',
        'disableMobile': '@',
        'onReady': '&',
        displayComments: '='
      },
      template: '<div id="disqus_thread"></div>',
      link: function (scope) {
        var isDisqusLoaded = false;
        var scriptID = 'embedDisqusScript';
        scope.$watch('displayComments', function (displayComments) {
          if (!angular.isDefined(displayComments)) {
            displayComments = 'true';
          }
          $window.disqus_shortname = scope.shortname;
          $window.disqus_identifier = scope.identifier;
          $window.disqus_title = scope.title;
          $window.disqus_url = scope.url;
          $window.disqus_category_id = scope.categoryId;
          $window.disqus_disable_mobile = scope.disableMobile;
          $window.disqus_config = function () {
            this.callbacks.onReady = [scope.onReady];
          };
          var disqusScript = document.getElementById('embedDisqusScript');
          //check first if script is not appended
          if (displayComments && disqusScript === null) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = scriptID;
            script.async = true;
            script.src = '//' + scope.shortname + '.disqus.com/embed.js';
            script.addEventListener('load', function () {
              isDisqusLoaded = true;
            });
            var placeToAppend = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
            placeToAppend.appendChild(script);
          } else if (displayComments && disqusScript !== null) {
            $window.DISQUS.reset({
              reload: true,
              config: function () {
                this.page.identifier = $window.disqus_identifier;
                this.page.url = $window.disqus_url;
              }
            });
          }
        });
      }
    };
  }
]);