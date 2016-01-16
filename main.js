var mil_day = 86400000;

$( "#submit" ).click(function () {

  var birthday_string = $( "#datepicker" ).val();

  var birthday = Date.parse( birthday_string );

	var today_date = Date();
  
	var today_days = Date.parse(today_date);

	var days_old = Math.floor((today_days - birthday)/mil_day);

for (var counter = 10000; ; counter += 10000) {
  if (days_old < counter) {
    big_milestone = counter;
    break;
    };
};

big_milestone_date = new Date(birthday + mil_day*big_milestone);

bm_date_final = big_milestone_date.toUTCString().substring(0, 16);

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


  small_milestone_date = new Date(birthday + mil_day*small_milestone);

  sm_date_final = small_milestone_date.toUTCString().substring(0, 16);

// new canvas version starts here

var example = document.getElementById('example');
var context = example.getContext('2d');

// clearing canvas in case user presses submit twice
context.clearRect(0,0, example.width, example.height);

context.rect(0,0,example.width,example.height);
context.fillStyle="#fafafa";
context.fill();

context.font = "200 40px raleway";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("Today I am " + days_old + " days old", 700, 60);

context.font = "200 40px raleway";
context.fillStyle= "#4B4B4D";
context.textAlign = 'center';
context.fillText("UPCOMING MILESTONES", 700, 140);

context.font = "200 40px raleway";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("I will be " + small_milestone + " days old on " + sm_date_final , 700, 200);

context.font = "200 40px raleway";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("I will be " + big_milestone + " days old on " + bm_date_final , 700, 260);

context.font = "italic 200 28px raleway";
context.fillStyle= "#4B4B4D";
context.textAlign = 'center';
context.fillText("How about you? Find out at www.marbiru.com/days", 700, 340);

var img = example.toDataURL("image/png;base64;");

anchor = document.getElementById("download");
anchor.href = img;
anchor.innerHTML = "Download your results image";

window.open(example.toDataURL(),"canvasImage","left=0,top=0,width=" +
   example.width + ",height=" + example.height +",toolbar=0,resizable=0");

});