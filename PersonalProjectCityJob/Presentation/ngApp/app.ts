namespace PersonalProjectCityJob {

    angular.module('PersonalProjectCityJob', ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider: ng.route.IRouteProvider) {

            $routeProvider.when('/', {
                templateUrl: '/Presentation/ngApp/views/newsFeed.html',
                controller: PersonalProjectCityJob.Controllers.HomeController,
                controllerAs: 'controller'
            });
        });
}
