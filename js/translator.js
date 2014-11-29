/* Translator-js v1.0.0 | @zalomea | MIT/GPL2 Licensed */
var Translator = function(options){
	var t = {
		lang : null,
		dict : [],
		htmlfriend : false,
	};
	if(typeof options == 'undefined'){
		options = {};
	}

	if(typeof options.language != 'undefined'){
		t.lang = options.language;
	}
	if(typeof options.dictionary != 'undefined'){
		t.dict = options.dictionary;
	}
	if(typeof options.htmlfriendly != 'undefined' && options.htmlfriendly){
		t.htmlfriend = true;
	}

	var translate = function(index){
		if(t.lang == null){
			return index;
		}else if(t.dict[t.lang] != null){
			if(t.dict[t.lang][index] != null){
				return t.dict[t.lang][index];
			}
		}
		return index;
	};

	t.setLanguage = function(language){
		t.lang = language;
	};
	t.setLanguageRun = function(language){
		t.setLanguage(language);
		t.runTranslation();
	};

	t.addTranslation = function(language, index, translation){
		if(typeof translation == 'undefined'){
			t.dict[language] = index;
		}else{
			if(typeof t.dict[language] == 'undefined'){
				t.dict[language] = [];
			}
			t.dict[language][index] = translation;
		}
	};

	t.runTranslation = function() {
		var elements = [];
		if(t.htmlfriend){
			elements = document.getElementsByTagName('*');
			for (var i = 0; i < elements.length; i++) {
				if(elements.item(i).getAttribute('data-translate') != null){
					elements.item(i).innerHTML = translate(elements.item(i).getAttribute('data-translate'));
				}
			}
		}else{
			elements = document.getElementsByTagName('translatag');
			for (var i = 0; i < elements.length; i++) {
				elements.item(i).innerHTML = translate(elements.item(i).getAttribute('data-translate'));
			}
		}

	};

	if(typeof options.autostart != 'undefined' && options.autostart){
		if(window.addEventListener)
			window.addEventListener('load', t.runTranslation, false);
		else if(element.attachEvent)
			element.attachEvent('onload', t.runTranslation);
	}

	return t;
};