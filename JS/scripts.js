
$( document ).ready(function() {

	// Explicit Mailto Action (for mobile compatibility)
	$('.contact-form').on('submit', function(e) {
	  console.log("Submit event")

	  var messageBody = '';
	  $.each($('.contact-form').serializeArray(), function(i, field) {
	    messageBody += field.name + ": " + field.value + '%0D%0A';
	  });

	  console.log(messageBody)

	  var hreflink = "mailto:mkornyev@gmail.com?Subject=Contact%20Form&body=" + messageBody;
	  $('.mail').attr("href", hreflink);
	  e.preventDefault();
	  $('.mail')[0].click()
	});

});

// 	// Modal listeners:
// 	document.getElementById('docmodal1a').addEventListener('click', 
// 		function () {
// 			document.getElementById('docmodal1').style.display = 'flex';
// 		});
// });

// // MDB Lightbox Init
// $(function () {
// 	$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
// });

/* 
Deprecated: Here for later development 

//Projects descriptions
function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

//Phone and DOB validation
function validate(){
	var txtDob = $("#txtDate").val();
	var dob = new Date(txtDob);
	if(dob >= new Date()){
		alert("Date of Birth is not valid (must be before today)");
		return false; 
	}	

	var phoneStr = $("");
	if(isNaN(phoneStr)){
		alert("Phone number is not in a valid format");
		return false;
	}
}

*/