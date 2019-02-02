function keyListenerNew(event) {
  if (document.activeElement.nodeName !== "INPUT") {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "n":
        event.preventDefault();
        window.location.replace(
          "http://www.reddit.com" +
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

window.onscroll = function(ev) {
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 2
  ) {
    var locationToChange = window.location.search;
    var pathArray = window.location.pathname.split("/");

    if (locationToChange == "" && pathArray[3] !== "comments") {
      locationToChange = "?count=25";
      window.location.replace(
        "http://old.reddit.com" + window.location.pathname + locationToChange
      );
    } else {
      var finalResult =
        locationToChange.replace(/[0-9]/g, "") +
        (Number(locationToChange.match(/\d+/g).map(n => parseInt(n))) + 25);

      window.location.replace(
        "http://old.reddit.com" + window.location.pathname + finalResult
      );
    }
  }
};
