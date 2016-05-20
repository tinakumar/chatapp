app.controller('messageController', function($scope) {
	$scope.messages = [];

	$scope.addMessage = function() {
		$scope.messages.push({text: $scope.messageItem, date: new Date()});
		$scope.messageText = '';
	};
});

