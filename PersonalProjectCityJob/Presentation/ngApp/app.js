var PersonalProjectCityJob;
(function (PersonalProjectCityJob) {
    angular.module('PersonalProjectCityJob', ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/Presentation/ngApp/views/newsFeed.html',
            controller: PersonalProjectCityJob.Controllers.HomeController,
            controllerAs: 'controller'
        });
    });
})(PersonalProjectCityJob || (PersonalProjectCityJob = {}));
