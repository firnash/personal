import Ember from 'ember';

export default (function () {



    //
    // City content specific requests
    //
    var generateCityContentUrl = function (params) {
        var url = "http://testingtripsite.000webhostapp.com/public/api/v1/cities/1" ;

        return url;
    };



    return {
      generateCityContentUrl: generateCityContentUrl,
    };
})();
