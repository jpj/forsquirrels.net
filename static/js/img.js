	// <[CDATA[
	/* == Display the full-size images ==
	 * I know that this seems like a very round-about way of doing this,
	 * but I want the images to be accessible by a 'name' (not just a
	 * number). This way I can very easily drop pictures into the
	 * mix anywhere I want (which I will end up doing) without disturbing
	 * links that come to this page and they still have an 'order'
	 * so that you can browse the pics with the 'next' and 'prev' buttons.
	 */
	var imageOrder = new Array(
		'flagboylive',
		'example'
	);
	var imageName = new Array();
	for (var i = 0;i<imageOrder.length;i++)
		imageName[imageOrder[i]] = i;
	var imageFile = new Array();
		imageFile["flagboylive"] = "flagboylive.gif";
		imageFile["example"] = "example.gif";

	var currentImage = 'null';
	function showImage(imageId) {
		imageSrc = imageFile[imageId];
         	document.getElementById('theimage').src=imageSrc;
		var hello = 0;
         	carpVar = setTimeout('hello = 10',1000);
		document.getElementById('imgDisplay').style.display='inline';
		for (var i = 0; i < imageOrder.length; i++)
			document.getElementById('thumb_' 
				+ imageOrder[i]).style.border =
				'solid #000000 2px';
		document.getElementById('thumb_'+imageId).style.border='solid red 2px';
		// Resize image if over div width
		// After I figure out how.
		//alert('image width: ' + document.getElementById('theimage').width);
		/*
		This is getting there. The problem is that after the image
		is resized once, it retains that width. So from that point on
		all images are stretched or compressed to 490px. I need a way
		to get the actual image-width in pixels. */
		/*
		//document.getElementById('theimage').style.width = '';
		currImgWidth = document.getElementById('theimage').width;
		divWidth = document.getElementById('imgDisplay').style.width;
		divWidth = divWidth.replace(/px$/g,'');
		alert('img width: ' + currImgWidth + ', ' +
			'div width: ' + divWidth);

		if (currImgWidth > divWidth) {
			alert('wider');
			betterWidth = '490px';
			document.getElementById('theimage').style.width = betterWidth;
		} else {
			alert('not wider');
			//document.getElementById('theimage').width = currImgWidth;
		}
		*/
		currentImage = imageId;
		/* Preload the next image.
		 * We want to be able to cycle seamlessly through the images.
		 * But we don't want to load *all* images. That wouldn't be
		 * very nice. So if I was to preload one image, then
		 * a pretty good guess would be that its probably the
		 * next image in line
		 */
		pppic = new Image();
		nextImageForPreload = imageName[currentImage] + 1;
		if (nextImageForPreload > imageOrder.length - 1) {
			nextImageForPreload = 0;
		}
		pppic.src = '/images/tst/'+imageFile[imageOrder[nextImageForPreload]];
	}
	function imgNext() {
		var nextImage = imageName[currentImage] + 1;
		if (nextImage > imageOrder.length - 1) {
			nextImage = 0;
		}
		showImage(imageOrder[nextImage]);
	}
	function imgPrev() {
		var previousImage = imageName[currentImage] - 1;
		if (previousImage < 0) {
			previousImage = imageOrder.length - 1;
		}
		showImage(imageOrder[previousImage]);
	}
	function imgClose() {
		document.getElementById('imgDisplay').style.display='none';
	}
	function imgLink() {
		document.location = document.getElementById('theimage').src;
		//document.location = imageFile[element];
	}

	// ]]>
