import usersPage from "./views/users.js";
import postsPage from "./views/posts.js";
import { listener } from "./dom/utils.js";
import settingsPage from "./views/settings.js";
import notFoundPage from "./views/not-found.js";
import dashboardPage from "./views/dashboard.js";

listener(window, "popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });

  router();
});

function navigateTo(url) {
  if (location.href !== url) {
    history.pushState(null, null, url);
    router();
  }
}

function renderContent(containerApp, currentRoute) {
  containerApp.innerHTML = "";

  if (currentRoute === "/") {
    dashboardPage(containerApp);
  }

  if (currentRoute === "/posts") {
    postsPage(containerApp);
  }

  if (currentRoute === "/settings") {
    settingsPage(containerApp);
  }

  if (currentRoute === "/users") {
    usersPage(containerApp);
  }

  if (currentRoute === "/404") {
    notFoundPage(containerApp);
  }
}

function router() {
  const routes = [
    { path: "/" },
    { path: "/posts" },
    { path: "/users" },
    { path: "/settings" },
    { path: "/404" },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });

  const match = potentialMatches.find(
    (potentialMatch) => potentialMatch.isMatch
  );

  const containerApp = document.getElementById("app");
  renderContent(containerApp, match.route.path);
}
