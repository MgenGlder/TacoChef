angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.tacoRecipes', {
    url: '/my_recipes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tacoRecipes.html',
        controller: 'tacoRecipesCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.cevicheTaco', {
    url: '/my_tacos/1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cevicheTaco.html',
        controller: 'cevicheTacoCtrl'
      }
    }
  })

  .state('menu.limeChickenTaco', {
    url: '/my_tacos/2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/limeChickenTaco.html',
        controller: 'limeChickenTacoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/my_recipes')

  

});