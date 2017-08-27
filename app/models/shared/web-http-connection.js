import Ember from 'ember';

export default (function () {
    var sendAjaxRequest = function (param) {
        try {
            var req = {
                type: param.type ? param.type : 'GET',
                dataType: param.dataType ? param.dataType : 'json',
                contentType: param.contentType ? param.contentType : 'application/json; charset=utf-8',
                url: param.url,

                success: function (e) {
                    if (Ember.$.isFunction(param.onSuccess)) {
                        param.onSuccess(e);
                    }
                },

                error: function (e) {
                    if (Ember.$.isFunction(param.onError)) {
                        param.onError(e);
                    }
                },

                timeout: param.timeout ? param.timeout : 25000
            };

            if (param.async) {
                req.async = param.async;
            }

            if (param.cache) {
                req.cache = param.cache;
            }

            if (param.data) {
                req.data = param.data;
            }

            Ember.$.ajax(req);
        } catch (ex) {
            console.log('Error in send ajax request : ' + param.url);

            if (Ember.$.isFunction(param.onError)) {
                param.onError({});
            }
        }
    };

    return {
        sendAjaxRequest: sendAjaxRequest
    };
})();
