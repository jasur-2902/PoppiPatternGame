import { AppRegistry, Platform } from "react-native";

import App from "./App";

if (Platform.OS === "android") {
  require("babel-polyfill");
}

if (Platform.OS === "IOS") {
  require("babel-polyfill");
}

AppRegistry.registerComponent("poppiPattern", () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication("poppiPattern", {
    rootTag: document.getElementById("root"),
  });
}
