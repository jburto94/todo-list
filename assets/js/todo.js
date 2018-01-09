// Mark todo as done by clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

// Click X to remove todo
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// Stops marking as done when clicking on remove
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
	if(event.which === 13) {
		// Add new todo item when the user presses enter
		var newTodo = $(this).val();
		$(this).val('');
		$('ul').append('<li><span>X</span> ' +  newTodo + '</li>');
	}
});