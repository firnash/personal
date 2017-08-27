import Ember from 'ember';
import cityProfile from '../content-objects/city-profile';
import contentService from '../content/content-services';

export default Ember.Object.extend({
  dataStore: {},

    createStoreCacheObj: function (CityID) {
        var key;

        key = CityID;
        var storeCacheObj = cityProfile.create({
          CityID: CityID,
        });

        this.dataStore[key] = storeCacheObj;
        return storeCacheObj;
    },

  getStoredObjectByCityId: function(cityID, sFn, eFn){


    var cachedObj = this.dataStore[cityID];

    var postSuccess = function () {
      if (Ember.$.isFunction(sFn)) {
        sFn(cachedObj);
      }
    };

    var error = function () {
      if (Ember.$.isFunction(eFn)) {
        sFn(cachedObj);
      }
    };

    if (!cachedObj) {
        cachedObj = this.createStoreCacheObj(cityID);

        if (!cachedObj.isRequested) {
          // data not available and already NO earlier request is processing
          cachedObj.isRequested = true;
          contentService.sendCityRequest(cityID, postSuccess, error);

        }
    }

        return cachedObj;
    }

}).create();
