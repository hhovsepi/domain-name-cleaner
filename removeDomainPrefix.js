function cleanUrl(rawURL) {
//    const splitThese = /\//;
    const replaceThese = /www(\.)?(2)?(\.)?| www| http(s)?(:)?(\/)?(\/)?|www2|http(s)?(:)?(\/)?(\/)?|/;
//    let splitThese2 = new RegExp(splitThese, "gi");
    let replaceThese2 = new RegExp(replaceThese, "gi", "");
    let urlTest = rawURL
//    .split(splitThese2)[0]
    .replace(replaceThese2, "")
    .toLowerCase();
    return urlTest;

}

testURLs = [
    "http://hyperspect.ai",
    "https://hyperspect.ai",
    "http://www.hyperspect.ai",
    "www2.hyperspect.ai",
    " http://hyperspect.ai",
    "www.hyperspect.ai"
]
testURLs.forEach(testURL => {
    clean = cleanUrl(testURL);
     console.log(`[${testURL}]: [${clean}]`)
});