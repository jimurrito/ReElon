Sure, James! Let's walk through the steps to create a simple Manifest V2 extension for your app, ReElon, that replaces a static URL on a page with another.

### Step 1: Create the Manifest File
First, create a new directory for your extension and inside it, create a file named `manifest.json`. This file will contain the basic information about your extension.

```json
{
  "manifest_version": 2,
  "name": "ReElon",
  "version": "1.0",
  "description": "Replaces a static URL with another.",
  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "<all_urls>"
  ],
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  }
}
```

### Step 2: Create the Background Script
Next, create a file named `background.js` in the same directory. This script will handle the URL replacement.

```javascript
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: "https://new-url.com"};
  },
  {urls: ["*://old-url.com/*"]},
  ["blocking"]
);
```

### Step 3: Load the Extension
Now, you need to load your extension into Chrome.

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by clicking the toggle switch in the top right corner.
3. Click the "Load unpacked" button and select the directory where your extension files are located.

### Step 4: Test the Extension
Once the extension is loaded, navigate to a page that contains the old URL (`https://old-url.com`). The extension should automatically replace it with the new URL (`https://new-url.com`).

### Additional Notes
- Make sure to replace `"https://new-url.com"` and `"*://old-url.com/*"` with the actual URLs you want to use.
- If you need to replace multiple URLs, you can add more entries to the `urls` array in the `background.js` file.

That's it! Your Manifest V2 extension should now be working. If you have any questions or need further assistance, feel free to ask.