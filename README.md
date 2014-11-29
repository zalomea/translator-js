Translator.js
=============

**A JavaScript library for HTML internationalization and localization.**

Internationalize your HTML App with JavaScript easily. Perfect for your 
PhoneGap App or Angular.js App.

## How to use it

Translator.js is a native JS plugin that don't need any special plugin, you 
only have to include the library and add the tags and attributes.

- Translation tags

Use the tag `<translatag>` and the attribute `data-translate` with the index 
from your dictionary.
```
<button><translatag data-translate="Word"></translatag></button>
```

If you active the HTML friendly you must write
```
<button data-translate="Word"></button>
```

- Code example to add plugin to your HTML document:

```
Translator({
	language : 'en',
	dictionary : dictionary,
	autostart : true,
});
```
- Sample of dictionary variable:

```
var dictionary = {
	'en' : {
		'Jugar' : 'Play',
		'Traducir a' : 'Translate to',
	},
	'es' : {
		'Jugar' : 'Jugar',
		'Traducir a' : 'Traducir a',
	},
}
```

## Options

The supported options are:

*`language` : Set the active language.

*`dictionary` : Set the dictionary variable.

*`autostart` : Run translation on document load (`false` by default).

*`htmlfriendly` : Make your code HTML friendly, if true don't use the tag `translatag` (`false` by default).

## Examples

See the examples folder for an example of the usage.