define([], function () {
    'use strict';

    function userService($q, Restangular) {
        return {
            getdummies:function () {
                return Restangular.all('users').getList()
                    .then(function (response) {
                        return response.plain();
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
            },
            getdummy:function (id) {
                return Restangular.one('users', id).get()
                    .then(function (response) {
                        return response.plain();
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
            },
            removedummy:function (id) {
                return Restangular.one('users', id).remove()
                    .then(function (response) {
                        return response;
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
            },
            createdummy:function (obj) {
              return Restangular.all('users').post(obj)
                     .then(function (response) {
                        console.log(response);
                        return response;
                     }, function (response) {
                        return $q.reject(fallback);
                     });
            },
            updatedummy:function (obj) {
             return Restangular.one('users').customPUT(obj,obj.id)
                     .then(function (response) {
                     return response;
                     }, function (response) {
                        return $q.reject(fallback);
                     });
            }
        }
    }
    return userService;
});