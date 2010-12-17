#MooLazyloader

A lazy load script for MooTools Core 1.3.

##License

The MIT-License

Copyright (c) 2010-2011 Stephane P. Pericat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

##How to Use

1 - in your head script block, place the following code:

	window.addEvent('domready', function() {
		var lazy = new MooLazyloader({
			items: '.lazyload' //pass the class name of the images to lazyload
		});
	});

2 - for each image you want to lazyload, put the source into the rel attribute, and add to it the class you specified above:

	<img rel="img/phm.jpg" height="300" width="300" class="lazyload" />