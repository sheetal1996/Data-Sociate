window.fbAsyncInit = function() {
        FB.init({
          appId      : '110261149823767',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.8'
        });

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

       function statusChangeCallback(response){
         if(response.status === 'connected'){
           console.log('FACEBOOK -> Logged in and authenticated');
           setElements(true);
           testAPI();
         } else {
           console.log('FACEBOOK -> Not authenticated');
           setElements(false);
         }
       }

      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }

      function testAPI(){
        FB.api('/me?fields=name,email,birthday,location,friends', function(response){
          if(response && !response.error){
			displayFB(response);
            //buildProfile(response);
          }

          FB.api('/me/feed', function(response){
            if(response && !response.error){
				
             // buildFeed(response);
            }
          });
        })
      }
		
	function displayFB(response) {
			var id_ = response.id
			var email = response.email
            var dob = response.birthday
            var loc = response.location.name
			var friends = response.friends.summary.total_count
            console.log("FACEBOOK -> \nid: "+id_+"\nname: "+response.name+"\nemail: "+email+"\nlocation: "+loc+"\nFriends count: "+friends);
	}
      function setElements(isLoggedIn){
        if(isLoggedIn){
          document.getElementById('logout').style.display = 'block';
         
          
          document.getElementById('fb-btn').style.display = 'none';
          
        } else {
          document.getElementById('logout').style.display = 'none';
         
          document.getElementById('fb-btn').style.display = 'block';
         
        }
      }

      function logout(){
        FB.logout(function(response){
          setElements(false);
        });
      }