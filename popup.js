document.addEventListener('DOMContentLoaded', function() {
    var clearButton = document.getElementById('clearLocalStorage');
    clearButton.addEventListener('click', function() {
      chrome.runtime.sendMessage({action: 'clearLocalStorage'});
    });
  });
  