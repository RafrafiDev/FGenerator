define([], function () {
    function config(Restangular) {

        Restangular.setBaseUrl('http://127.0.0.1:8000/api/');

        Restangular.setRestangularFields({
            id: '@id'
        });
        Restangular.setSelfLinkAbsoluteUrl(false);
        // Hydra collections support
        Restangular.addResponseInterceptor(function (data, operation) {
            // Remove trailing slash to make Restangular working
            function populateHref(data) {
                if (data['@id']) {
                    data.href = data['@id'].substring(1);
                }
            }
            // Populate href property for the collection
            populateHref(data);

            if ('get' == operation)
            {
                var newId = data["@id"].match(/\/([^\/]+)[\/]?$/);
                data['id'] = newId[1];
                //data['id']=newId.substr(newId.lastIndexOf('/')+1)
                populateHref(data);
            }
            ;

            if ('getList' === operation) {
                var collectionResponse = data['hydra:member'];
                collectionResponse.metadata = {};
                angular.forEach(data, function (value, key) {
                    if ('hydra:member' !== key) {
                        collectionResponse.metadata[key] = value;
                    }
                });

                // Populate href property for all elements of the collection
                angular.forEach(collectionResponse, function (value) {
                    var newId = value["@id"].match(/\/([^\/]+)[\/]?$/);
                    value['id'] = newId[1];
                    populateHref(value);
                });

                return collectionResponse;
            }

            return data;
        });
    }
    ;

    return config;
});

