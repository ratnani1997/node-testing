

if(!navigator.geolocation){
    alert('unable to fetch location');
}
else{
    navigator.geolocation.getCurrentPosition(function (position){
        console.log(position)
        var location = {
            latitude : position.coords.latitude,
            longitude : position.coords.longitude,
            timeStamp : position.timestamp

        }
        $.ajax({
            url : '/sending',
            data : location,
            type : 'POST',
            dataType : 'json',
            success : function(){console.log(`Data Send`)}
        })
    }, function(error){
        alert('unable to fetch location');
    }, {timeout: 10000});
}

