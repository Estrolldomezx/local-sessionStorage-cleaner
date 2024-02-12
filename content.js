localStorage.clear();
sessionStorage.clear();
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var tab = tabs[0];
  chrome.tabs.reload(tab.id);
});
