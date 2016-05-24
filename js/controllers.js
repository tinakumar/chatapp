app.controller('messageController', function($scope) {
	$scope.messages = [];

	$scope.addMessage = function() {
		$scope.messageItem = $('#message').val();
		$scope.messages.push({text: $scope.messageItem, date: new Date()});
		$scope.messageText = '';
		
		// Reset textarea
    	$('#message').html('');
	};
});

