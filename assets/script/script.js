//cover text //
// set up text to print, each item in array is new line
var aText = new Array(
"welcome."
);
var iSpeed = 150; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("cover-text");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 800);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();

// carousel //
let carouselWidth = 300;
let prevButton = document.getElementById("previous-button");
let nextButton = document.getElementById("next-button");
let imageRow = document.getElementById("carousel-img-row");

let imageNum = 0;

function showNextImage() {
    imageNum = imageNum + 1;
    if (imageNum == 4) {
        imageNum = 0;
    }
	let shiftleft = -carouselWidth * imageNum;
    imageRow.style.left = shiftleft + "px";
}
nextButton.onclick = showNextImage;

function showPrevImage() {
	imageNum = imageNum - 1;
    if (imageNum == -1) {
        imageNum = 3;
    }
    let shiftleft = -carouselWidth * imageNum;
	imageRow.style.left = shiftleft + "px";
}

prevButton.onclick = showPrevImage;

//pop up//
/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
    document.getElementById('lightbox-overlay').classList.remove('hidden');
    document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
    unhideLightbox("popup-container");
}
document.getElementsByClassName("button story")[0].onclick = unhideLightbox1;

function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}
function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;

//scroll//
function scrollDown() {
    document.querySelector('#blog').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
document.getElementsByClassName("button read")[0].onclick = scrollDown;

function scrollUp() {
    document.querySelector('.heading').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
document.getElementById("top-button").onclick = scrollUp;