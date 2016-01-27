var PersonalProjectCityJob;
(function (PersonalProjectCityJob) {
    angular.module('PersonalProjectCityJob', ['ngRoute'])
        .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/Presentation/ngApp/views/homeView.html',
            controller: PersonalProjectCityJob.Controllers.HomeController,
            controllerAs: 'controller'
        });
    });
})(PersonalProjectCityJob || (PersonalProjectCityJob = {}));
//# sourceMappingURL=app.js.map