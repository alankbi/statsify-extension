chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    document.getElementById('frame').setAttribute('src', 'https://www.statsify.us?extensionMode=true&url=' + url);
});
