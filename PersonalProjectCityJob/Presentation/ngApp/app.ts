namespace PersonalProjectCityJob {

    angular.module('PersonalProjectCityJob', ['ngRoute'])
        .config(function ($routeProvider: ng.route.IRouteProvider) {

            $routeProvider.when('/', {
                templateUrl: '/Presentation/ngApp/views/homeView.html',
                controller: PersonalProjectCityJob.Controllers.HomeController,
                controllerAs: 'controller'
            });
        });
}
