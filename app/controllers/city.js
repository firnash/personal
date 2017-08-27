/**
 * Created by akilam on 8/27/2017.
 */

import Ember from 'ember';
import contentServices from '../models/content/content-services'

export default Ember.Controller.extend({

  tester: 'fine',

  init: function () {
    this._super();
    this.loadData();
  },

  loadData: function () {

    var success = function () {

    };

    var error = function () {

    };

    var cityObj = contentServices.cityDS.getStoredObjectByCityId('1', success, error);
  }
});
