/* global Queue */

import RequestHandler from './content-request-handler'

// Data stores
import cityDS from '../content-data-stores/city-profile-data-store';

export default Ember.Object.extend({

    // API for accessing the data stores
    cityDS: cityDS,

    init: function () {

    },


    sendCityRequest: function (cityID, postSuccess, Error) {
        RequestHandler.loadCityProfileData(cityID, postSuccess, Error);
    },

}).create();
