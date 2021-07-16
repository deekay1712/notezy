var contextMenuItems = {
  "title": 'Add to "notezy" ',
  "contexts": ["selection"],
  "id": "myContextMenuId"
};
chrome.contextMenus.create(contextMenuItems);
chrome.contextMenus.onClicked.addListener(function(clickData){
  if(clickData.menuItemId == "myContextMenuId" && clickData.selectionText){
    var index=1;
    if(localStorage.getItem("ind"))
    {
      index=parseInt(localStorage.getItem("ind"))+1;
      localStorage.setItem("ind", index)
    }
    else
      localStorage.setItem("ind", index)
    localStorage.setItem(index, clickData.selectionText)
  }
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({ url: "options.html" })
});