(function($){

	var Header = function(){
		this.$trigger = $('#toggle-menu');
		this.$menu = $('nav');
		this.bindEvents();
	};

	Header.prototype = {
		bindEvents: function(){
			var self = this;
			this.$trigger.on('click', function(e){
				e.preventDefault();
				self.$menu.toggleClass('open');
			});
		}
	}

	$(document).ready(function() {
		var header = new Header();
	});

})(jQuery);