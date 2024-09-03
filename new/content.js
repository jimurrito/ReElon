chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.txt == "Hello") {
        replace(message.selectedImage, sender, sendResponse);
    }
});
function selectAndReplace(message, sender, sendResponse) {
    let imgs = document.querySelectorAll('img');

    switch (message) {

        case "image1":
            for (imgElt of imgs) {
                let file = 'images/RealElon_200x200.jpg';
                let url = chrome.extension.getURL(file);
                imgElt.src = url;
            }
            break;
    }
}