import Ember from 'ember';
import WebConnection from '../shared/web-http-connection';
import ResponseHandler from './content-response-handler';
import RequestGenerator from './content-request-generator';

export default (function () {



    //
    // Company Profile specific requests

    var loadCityProfileData = function (cityID, postSuccess, Error) {
        WebConnection.sendAjaxRequest({
            url: RequestGenerator.generateCityContentUrl(cityID),
            onSuccess: function (dataObj) {
                ResponseHandler.processCityProfileResponse(dataObj, cityID);
             if (Ember.$.isFunction(postSuccess)) {
                    postSuccess();
                }
            },
            onError: function () {
                if (Ember.$.isFunction(Error)) {
                    Error();
                }
            }
        });
    };


    return {
      loadCityProfileData: loadCityProfileData
        };

})();
