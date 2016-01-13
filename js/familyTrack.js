$(document).ready(function(){

	var $memberNameInput = $('.memberNameInput');
	var $memberCityInput = $('.memberCityInput');
	var $addMembers = $('.addMembers');
	var $addCity = $('.addCity');
	var $membersList = $('#members');
	var membersListItems = $('.memberItem');

	

	$memberNameInput.focus();
	window.onload = sizeRows();

	$addButton = $('.addButton');
	$addButton.on('click', function(){
		$addMembers.toggle();
		$memberNameInput.focus();
	})

	var memberName;

	var objList = {};


	$memberNameInput.keydown(function(event){
		if (event.which == 13) {
			
			memberName = $memberNameInput.val().trim();
			$addMembers.toggle();
			$addCity.toggle();
			$memberCityInput.focus();
			$memberNameInput.val('');
			return memberName;
		} else if (event.which == 27){
			$addMembers.toggle();
			$memberNameInput.val('');
			$memberCityInput.val('');
		}
	})

	$memberCityInput.keydown(function(event){
		if (event.which == 13) {
			var cityName = $memberCityInput.val().trim();
			$addCity.toggle();
			var listLen = $('.memberItem').length;

			objList[memberName] = {'name':memberName,'city':cityName};
			
			var memberNo = listLen;
			var contentUl = '<ul class="memberItem member' + memberNo + ' row">';
			var contentLi1 = '<li class="col-xs-3">' + objList[memberName].name + '</li>';
			var contentLi2 = '<li class="col-xs-4">' + objList[memberName].city + '</li>';
			var contentLi3 = '<li class="col-xs-5">21:00:00</li></ul>';

			var content = contentUl + contentLi1 + contentLi2 + contentLi3;
			$membersList.prepend(content);
			$memberCityInput.val('');

			
			
			

			console.log(objList);

			
			sizeRows();
		} else if (event.which == 27){
			$addCity.toggle();
			$memberNameInput.val('');
			$memberCityInput.val('');
		}
	})

	
	

	function sizeRows() {
		
		var listLen = $('.memberItem').length;
		var newHeight = (100/listLen).toString() + 'vh';
		

		var i;
		var shade = 1
		for (i = 0; i < listLen; i++){
			var memberID = $('.memberItem')[i]; 
			var $item = $(memberID);
			var rgbVal = 'rgba(0,0,0,' + shade + ')';
			$item.css({'backgroundColor': rgbVal,
						'height': newHeight});

			shade -= 0.15
		}

		
	}

})