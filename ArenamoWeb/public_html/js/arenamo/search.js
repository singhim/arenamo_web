//(function( $ ){
//   $.fn.getActivities = function() {
//      alert('hello world');
//      return this;
//   }; 
//})( jQuery );
var activities = {};
var locations = {};
function populateActivities() {
    // $.get('static/activities.json', function (data) {
    //    activities = data;
    var options = {
        url: 'static/activities.json',
        placeholder: "Search Sport",
        getValue: function (element) {
          return matcher(element);           
        },
        list:{
            match:{enabled:false},
            maxNumberOfElements: 10,
            onLoadEvent:function(){
                
            }
        },
        minCharNumber: 4
    };

    $("#activitySuggest").easyAutocomplete(options);
    //});
}
function matcher(element) {
    console.log(element);
    var sport = ''+element.sport,searchString = ''+$("#activitySuggest").val(),alias = ''+element.alias;
    if (sport.toLowerCase().indexOf(searchString.toLowerCase()) > -1 || alias.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {        
        return element.alias;
    }
    return alias;
}
function populateLocations() {
    $.get('static/location.json', function (data) {
        locations = data;
        var options = {
            data: locations,
            placeholder: "Search Location",
            getValue: "area",
            list: {
                match: {
                    enabled: true
                }
            }
        };

        $("#locationSuggest").easyAutocomplete(options);
    });
}
$(document).ready(function () {
    populateActivities();
    populateLocations();
});

