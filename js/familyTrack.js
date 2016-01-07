$(document).ready(function(){

	var $memberNameInput = $('.memberNameInput');
	var $memberCityInput = $('.memberCityInput');
	var $addMembers = $('.addMembers');
	var $addCity = $('.addCity');
	var $membersList = $('.members');
	var $membersListItems = $('.memberItem');

	var listLen = $membersListItems.length;

	$memberNameInput.focus();
	window.onload = sizeRows(listLen);

	var memberName;

	var members = 0;



	$memberNameInput.keydown(function(event){
		if (event.which == 13) {
			var i = members.length;
			memberName = $memberNameInput.val().trim();
			$addMembers.toggle();
			$addCity.toggle();
			$memberCityInput.focus();
			return memberName;
		}
	})

	$memberCityInput.keydown(function(event){
		if (event.which == 13) {
			var cityName = $memberCityInput.val().trim();
			$addCity.toggle();



			var memberNo = $membersListItems.length;
			console.log("listLen before " + memberNo)
			var contentUl = '<ul class="memberItem member' + memberNo + '">';
			var contentLi1 = '<li class="col-xs-3">' + memberName + '</li>';
			var contentLi2 = '<li class="col-xs-4">' + cityName + '</li>';
			var contentLi3 = '<li class="col-xs-5">21:00:00</li></ul>';

			var content = contentUl + contentLi1 + contentLi2 + contentLi3;
			$membersList.append(content);
			var listLen = memberNo + 1;

			sizeRows(listLen);
		}
	})

	
	

	function sizeRows(listLen){
		
		console.log("listLen after " + listLen)
		if (listLen > 2){

			var newHeight = (100/listLen).toString() + 'vh';
			
			var i;
			var shade = 1
			for (i = 0; i < listLen; i++){
				var memberNo = ('.member' + i).toString(); 
				var $item = $(memberNo);
				var rgbVal = 'rgba(0,0,0,' + shade + ')';
				$item.css({'backgroundColor': rgbVal,
							'height': newHeight});
				console.log($item)
				shade -= 0.15
			}
		}
	}

})