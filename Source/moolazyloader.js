/*
---

name: MooLazyloader

description: A lazy load script for MooTools Core 1.3.

authors: Stephane P. Pericat (@sppericat)

license: MIT-style license.

requires: [Core]

provides : MooLazyloader

...
*/

var MooLazyloader = new Class({
	Implements: [Options, Events],

	options: {
		container: window,
		items: '.lazyload',
        loader: 'loading.gif'
	},

	images: null,
	containerHeight: null,
	loaded: new Array(),

	initialize: function(options) {
		this.setOptions(options);
		if(this.options.items) {
			this.images = $$(this.options.items);
		} else {
			throw 'no pictures to lazyload';
		}
		this.containerHeight = this.options.container.getSize().y;
		this.images.each(function(item, id) {
			item.setStyle('opacity', 0);
			if(!item.get('src')) item.set('src', this.options.loader);
		}.bind(this));
		this.options.container.addEvent('scroll', function() {
			this.display(this.images, this.options.container.getScroll().y);
		}.bind(this));
        this.options.container.fireEvent("scroll");
	},

	display: function(images, scrollPosition) {
		bottom = scrollPosition + this.containerHeight; 
    	images.each(function(item, id) { 
    		if(this.loaded.contains(id)) return; 
    		if(item.getPosition().y < bottom && item.getPosition().y > scrollPosition) { 
    			this.loaded.push(id); 
    			item.set('src', item.get('rel')); 
    			item.set('morph', {'duration': '200'});
				(function() {
					item.morph({'opacity': 1});
				}).delay(150);
    			
    		} 
       }.bind(this));
	}
});