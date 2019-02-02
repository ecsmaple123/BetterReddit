function keyListenerNew(event) {
  if (document.activeElement.nodeName !== "INPUT") {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "o":
        event.preventDefault();
        window.location.replace(
          "http://old.reddit.com" +
            window.location.pathname +
            window.location.search
        );
        break;
      case "c":
        event.preventDefault();
        window.location.replace(
          "http://www.ceddit.com" +
            window.location.pathname +
            window.location.search
        );
        break;
    }
  }
}

window.addEventListener("keydown", keyListenerNew, true);
