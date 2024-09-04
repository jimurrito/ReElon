chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { redirectUrl: "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_200x200.jpg" };
    },
    { urls: [
        "https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg",
        "https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_200x200.jpg",
        "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg",
        "https://x.com/elonmusk/photo"
    ] },
    ["blocking"]
);
//    "background": {
//    "scripts": [
//        "background.js"
//    ]
//},