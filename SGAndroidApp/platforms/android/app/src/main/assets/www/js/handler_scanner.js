//variables -------------------------------------------------


	var scanner = cordova.require("cordova.plugins.barcodeScanner");
	var target = 'http://www.try2see.com';
	var nonT2STitle = 'This is not a SmallGyfts code!';
	var action = 'What action would you like to perform:';
	var destination = '';


//events ----------------------------------------------------

		function onLoadAttempt(button){
			if(button == 3){
				window.open(destination, 't2sframe', 'location=no');
			}else if(button==2){

			cordova.plugins.barcodeScanner.scan((
      				function (result) {
			
					parseResult(result.text, result.format, result.canceled);
          			
      				}, 
      				function (error) {
         				alertParseError(error);
     				}	
   			);

			
			}else{
			
			}
		}

//functions -------------------------------------------------

		function alertParseError(){
			 navigator.notification.alert(
            		 error,  					 // message
            		'There was a problem parsing the code:',    	 // title
            		'Ok'				                 // buttonName
        		);
    
		}


	        function parseResult(message, format, canceled) {

			if(canceled !== undefined || format==''){

			}else{

				//store first few chars
                //navigator.notification.alert(message);
				alphaChar = message.substring(0,25);
                alert(alphaChar);
			
				if(alphaChar==target){

					//automatically load target location
					navigator.notification.vibrate(300);
					window.open(message, 't2sframe', 'location=no');

				}else{

					destination = message;
                    view.getContext().startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(destination)));
                    //return true;

				}

			}

    		}