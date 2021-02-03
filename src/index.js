import "./unizef-ui/styles/main.css";
import Tooltip from "./unizef-ui/tooltip";
import Dropdown from "./unizef-ui/dropdown";
import Tabs from "./unizef-ui/tabs";
import Snackbar from "./unizef-ui/snackbar";

// Create Tooltip instance
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// Create (two) Dropdown Instances
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const dropInstance = new Dropdown(dropdown);
  dropInstance.init();
});

// Create Tabs Instance
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// Create Snackbar Instance
const snackbar = new Snackbar(document.querySelector(".form-container"));
snackbar.init();
snackbar.enterSnack();
snackbar.showDefault();
