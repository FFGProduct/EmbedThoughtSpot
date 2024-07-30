import {
  init,
  LiveboardEmbed,
  EmbedEvent,
  AuthType
} from "https://cdn.jsdelivr.net/npm/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js";

// Function to fetch the authentication token
function getTokenService() {
  // Fetch the token from a server endpoint or any other method
  return fetch('/get-token').then(response => response.text());
}

// Initialize ThoughtSpot Embed SDK
init({
  thoughtSpotHost: "https://team3.thoughtspot.cloud",
  authType: AuthType.TrustedAuthTokenCookieless,
  getAuthToken: getTokenService,
  disableTokenVerification: true,
});

// Embed the Liveboard
const embed = new LiveboardEmbed("#ts-embed", {
  frameParams: {
    width: "100%",
    height: "100%"
  },
  liveboardId: "b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
  vizId: "d4b5a4a1-506e-46f8-907e-f39b658b4d11",
});

hideNoDataImage();

embed
  .on(EmbedEvent.Init, showLoader)
  .on(EmbedEvent.Load, hideLoader)
  .on(EmbedEvent.Error, () => {
    showNoDataImage();
    hideLoader();
  })
  .render();

function setDisplayStyle(el, style) {
  if (document.getElementById(el)) {
    document.getElementById(el).style.display = style;
  }
}

function showLoader() {
  setDisplayStyle("loader", "block");
}

function hideLoader() {
  setDisplayStyle("loader", "none");
}

function showNoDataImage() {
  setDisplayStyle("no-data", "block");
}

function hideNoDataImage() {
  setDisplayStyle("no-data", "none");
}
