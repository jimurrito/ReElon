var new_pfp = 'https://pbs.twimg.com/profile_images/1831143048719597568/k5yM2fKQ_400x400.jpg';
var old_pfps_all = [
    /[A-Za-z]+:\/\/pbs\.twimg\.com\/profile_images\/[A-Za-z0-9]+\/[A-Za-z0-9]+_200x200\.jpg/g,
    /[A-Za-z]+:\/\/pbs\.twimg\.com\/profile_images\/[A-Za-z0-9]+\/[A-Za-z0-9]+_400x400\.jpg/g,
    /[A-Za-z]+:\/\/pbs\.twimg\.com\/profile_images\/[A-Za-z0-9]+\/[A-Za-z0-9]+_normal\.jpg/g
];
var old_pfps_je = [
    /[A-Za-z]+:\/\/pbs\.twimg\.com\/profile_images\/1815749056821346304+\/jS8I28PL+_200x200\.jpg/g,
    /[A-Za-z]+:\/\/pbs\.twimg\.com\/profile_images\/1815749056821346304+\/jS8I28PL+_400x400\.jpg/g,
    /[A-Za-z]+:\/\/pbs\.twimg\.com\/profile_images\/1815749056821346304+\/jS8I28PL+_normal\.jpg/g
];
const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
//
async function replaceElon(new_pfp, old_pfps) {
    //
    await sleep(2000);
    //
    for (var i in old_pfps) {
        document.body.innerHTML = document.body.innerHTML.replace(old_pfps[i], new_pfp);
        document.body.outerHTML = document.body.outerHTML.replace(old_pfps[i], new_pfp);
    }
//
}
//
replaceElon(new_pfp, old_pfps_je);
