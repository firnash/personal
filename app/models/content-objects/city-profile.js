import Ember from 'ember';

export default Ember.Object.extend({

  isRequested: false, // this is to check weather an ajax request is sent or not, this prevents unnecessary request traffic

  name: '',
  imageURL: '',
  noOfPeopleRated: '',
  longitude: undefined,
  latitude: undefined,


    init: function () {

    },

    setData: function (companyProfileData) {
        var that = this;

        Ember.$.each(companyProfileData, function (key, value) {
            that.set(key, value);
        });
    }
});
