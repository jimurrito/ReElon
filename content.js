//document.body.innerHTML = document.body.innerHTML.replace('https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_200x200.jpg', 'https://pbs.twimg.com/profile_images/1831143048719597568/k5yM2fKQ_400x400.jpg');
//setTimeout(15000)


var new_pfp = 'https://pbs.twimg.com/profile_images/1831143048719597568/k5yM2fKQ_400x400.jpg';
var replace_pfp = [
    'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_200x200.jpg',
    'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg',
    'https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_normal.jpg',
];

for (var i in replace_pfp) {
    document.body.innerHTML = document.body.innerHTML.replace(replace_pfp[i], new_pfp);
    document.body.outerHTML = document.body.outerHTML.replace(replace_pfp[i], new_pfp);
    console.log(replace_pfp[i])
}



