var mil_day = 86400000;

$( "#submit" ).click(function () {

  var birthday_string = $( "#datepicker" ).val();

  var birthday = Date.parse( birthday_string );

	var today_date = Date();
  
	var today_days = Date.parse(today_date);

	var days_old = Math.floor((today_days - birthday)/mil_day);

	days_old_output.innerHTML = days_old;

  $('#amazing').text("Amazing!");

for (var counter = 10000; ; counter += 10000) {
  if (days_old < counter) {
    big_milestone = counter;
    break;
    };
};

big_milestone_output.innerHTML = big_milestone;

big_milestone_date = new Date(birthday + mil_day*big_milestone);

big_milestone_date_output.innerHTML = big_milestone_date.toUTCString().substring(0, 16);

  var small_milestone_array = [
  7000,
  7777,
  8000,
  8888,
  9000,
  11111,
  12000,
  12345,
  15000,
  19000,
  22222,
  25000,
  29000,
  35000,
  45000,
  ]


  for (var counter = 0; counter <= 14; counter++) {
    if (days_old < small_milestone_array[counter]) {
      small_milestone = small_milestone_array[counter];
      break;
    };
  };


small_milestone_output.innerHTML = small_milestone;

small_milestone_date = new Date(birthday + mil_day*small_milestone);

small_milestone_date_trunacted = small_milestone_date.toUTCString().substring(0, 16);

small_milestone_date_output.innerHTML = small_milestone_date_trunacted;

document.getElementById( 'facebook_share_button' ).onclick = function() {
  
  FB.ui({
    display: 'popup',
    method: 'share',
    quote: 'I am ' + days_old + ' days old today!',
    title: 'I am ' + days_old + ' days old today!',
    description: 'And I will be ' + small_milestone + ' days old on ' + small_milestone_date_trunacted + '. How about you? Find out now!',
    link: 'http://marbiru.com/days',
    picture: 'http://marbiru.github.io/days/days_fb.jpg',
    href: 'http://marbiru.com/days',
  }, function(response){});

};

twitter_share_output.innerHTML = 

'<input type="button" value="Share On Twitter" class="button" onclick="window.open(&quot;https://twitter.com/share?url=http://www.marbiru.com/days&text=I am '
  + days_old
  + ' days old today! How about you?'
  + '&quot;)" />';

});