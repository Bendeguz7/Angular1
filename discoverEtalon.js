/* pg  index.html egyetlen js sora

var pg = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {

      // bind deviceready callback for phonegap devices
      document.addEventListener('deviceready', this.onDeviceReady, true);
      //document.addEventListener("offline", function() { alert('Your offline')}, false);

    },
    // deviceready Event Handler
    onDeviceReady: function() {
        pg.receivedEvent('deviceready');

        if (device.platform == 'iOS') {
            $('body').addClass('platformIOS');
        }
        
        setTimeout(function() {
            navigator.splashscreen.hide();
            console.log('dcs:: splashscreen faded after 1 seconds');
        }, 1000);
    
        var _this = this;

        angular.element(document).ready(function(){
            angular.bootstrap(document, ['imApp']);
            document.body.setAttribute('ng-app', 'imApp');
        });

        pushNotification = window.plugins.pushNotification;

    },
    // Update DOM on a Received Event
*/