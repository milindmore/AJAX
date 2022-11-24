   $("#submit").click(function(){
            user=$("#user").val();
            pass=$("#password").val();
             $.ajax({
                       "async": true,
	                     "crossDomain": true,
                       "url":'http://127.0.0.1:8000/products',
                       "method": "POST",
                        "headers": {"content-type": "application/json",	"cache-control": "no-cache"  },
                        "processData": false,
	                       "data": '{"user":"'+user+'","password":"'+pass+'","apikey":"sfsasaghdhdhdfhd"}',
                        success: function (data) {
                            var x = JSON.stringify(data);
                           // jobj = JSON.parse(data);
                           // var apik = jobj.OtpData[0]['apiKye'];
                       // alert( x );
                            
                        },

                        // Error handling
                        error: function (error) {
                            console.log(`Error ${error}`);
                        }
                    });
      });
    });
