chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { redirectUrl: "https://dineroensandalias.com/wp-content/uploads/2020/07/paypal-elon-musk.jpg" };
    },
    { urls: [
        "https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg",
        "https://x.com/elonmusk/photo"
    ] },
    ["blocking"]
);