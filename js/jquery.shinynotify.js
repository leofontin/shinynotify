/**
* SHINYNOTIFY
* plugin de gestion des notifications
**/

(function(){


	$.fn.shinynotify = function(options){
	
		// initialisation de l'objet
		$.shinycheck = function(){};
	
		// initialisation des variables
		var $contener;
		var $title;
		var $content;
		var $icon;
		var $render;
		var $close = true;
		
		var $tpl = '\
			<div class="notify-item hidden {{type}}">\
				<div class="notify-left">\
					<i class="icon-{{icon}}"></i>\
				</div>\
				<div class="notify-right">\
					<h2>{{title}}</h2>\
					<p>{{content}}</p>\
					<div class="close"><i class="icon-remove"></i></div>\
				</div>\
			</div>\
		';
		
		var $settings = {
			title 	: 'Mon titre',
			content : 'Contenu de la notification',
			icon 	: 'warning-sign'
		}
		
		// fusion des opation avec les configuratio nde base
		$settings = $.extend({},$settings,options); 
		
		// on commence, pour tou les éléments appelés, on y va
		return this.each(function(){
			
			// récupération de l'objet
			$contener = $(this);
			
			// création de la notification
			$render = Mustache.render($tpl,$settings);
			$contener.append($render);
			
			// affichage de la notification
			$('.notify-item.hidden').removeClass('hidden')
							 		.css({ opacity : 0 })
							 		.animate({ opacity : 1 });
							 
			// fermeture de la notification
			$('.notify-item').unbind('click').click(function(){
				$(this).fadeTo(300,0,function(){
					$(this).slideUp(200,function(){
						$(this).remove();
					})
				});
			});
			
		});

		
	}

	
})(jQuery);
