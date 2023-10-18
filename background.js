chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "HideReadArticles",
    title: "Hide Read Articles",
    type: "normal",
    contexts: ["all"],
  })
})

chrome.contextMenus.onClicked.addListener((info) => {
  chrome.tabs.create({
    url: "https://www.freecodecamp.org/news/building-chrome-extension/",
  })
})
