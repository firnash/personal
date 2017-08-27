import Ember from 'ember';
import contentService from './content-services';

export default (function () {


    //
    // Company Profile specific response
    //
    var processCityProfileResponse = function (dataObj, cityID) {
        var success = true;
        try {
            if (dataObj.status === 'success') {

              var cpObj = contentService.cityDS.getStoredObjectByCityId(cityID);

              if (dataObj.data) {
                cpObj.setData({
                  name: dataObj.data.name,
                  description: dataObj.data.description,
                  imageURL: dataObj.data.iconic_photo,
                  noOfPeopleRated: dataObj.data.no_of_people_rated,
                  longitude: dataObj.data.longitude,
                  latitude: dataObj.data.latitude
                });
              }
            }

        } catch (x) {
            success = false;
            utils.logger.logError('Error in City Profile Data : ' + x);
        }

        return success;
    };


    return {
        processCityProfileResponse: processCityProfileResponse,
    };
})();

