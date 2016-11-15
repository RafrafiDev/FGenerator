define([], function () {
    'use strict';

    function postService($q, Restangular) {
        return {
            getdummies:function () {
                return Restangular.all('posts').getList()
                    .then(function (response) {
                        return response.plain();
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
            },
            getdummy:function (id) {
                return Restangular.one('posts', id).get()
                    .then(function (response) {
                        return response.plain();
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
            },
            removedummy:function (id) {
                return Restangular.one('posts', id).remove()
                    .then(function (response) {
                        return response;
                    }, function (fallback) {
                        return $q.reject(fallback);
                    });
            },
            createdummy:function (obj) {
              return Restangular.all('posts').post(obj)
                     .then(function (response) {
                        console.log(response);
                        return response;
                     }, function (response) {
                        return $q.reject(fallback);
                     });
            },
            updatedummy:function (obj) {
             return Restangular.one('posts').customPUT(obj,obj.id)
                     .then(function (response) {
                     return response;
                     }, function (response) {
                        return $q.reject(fallback);
                     });
            }
        }
    }
    return postService;
});