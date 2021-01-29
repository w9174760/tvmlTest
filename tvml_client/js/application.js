var resourceLoader;

App.onLaunch = function (options) {
  // options : launchOptions from swift
  console.log(options);
  var errorDoc;
  var baseUrl = options.BASEURL;
  var javascriptFiles = [
    `${baseUrl}js/ResourceLoader.js`,
    `${baseUrl}js/Presenter.js`,
    `${baseUrl}js/tvOS.js`,
  ];

  var myList = [];

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/alertView.jpg",
    title: "AlertView",
    subtitle: "a example of AlertView",
    action: "openAlertView",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/compilationView.jpg",
    title: "compilationView",
    subtitle: "a example of compilationView",
    action: "opencompilationView",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/listView.jpg",
    title: "listView",
    subtitle: "a example of listView",
    action: "openlistView",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/loadingView.jpg",
    title: "loadingView",
    subtitle: "a example of loadingView",
    action: "openloadingView",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/ratingView.jpg",
    title: "ratingView",
    subtitle: "a example of ratingView",
    action: "openratingView",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/searchView.jpg",
    title: "searchView",
    subtitle: "a example of searchView",
    action: "opensearchView",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/exampleApp.jpg",
    title: "Example App",
    subtitle: "The App Team!",
    description:
      "if you've got a problem and no-one else can help, then you should call The App Team!",
    action: "openExampleApp",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/exampleApp2.png",
    title: "Example App",
    subtitle: "NU.nl News",
    description: "NU.nl © 2015 Sanoma Digital The Netherlands B.V.",
    action: "openExampleApp2",
  });

  myList.push({
    image:
      "http://www.hipmarketing.nl/wp-content/uploads/2015/08/instagram-logo-transparent.png",
    title: "Instagram",
    subtitle: "my Instagram feed @wesdegroot",
    description: "Super cool!",
    action: "openInstagram",
  });

  myList.push({
    image:
      "http://www.environmentamerica.org/sites/environment/files/new-twitter-bird-square.png",
    title: "Twitter",
    subtitle: "my Twitter feed @wesdegroot",
    description: "Super cool!",
    action: "openTwitter",
  });

  myList.push({
    image: "https://antjtw.files.wordpress.com/2013/09/imdb.png",
    title: "IMDB",
    subtitle: "IMDB Top movies",
    description: "So cool!",
    action: "openIMDB",
  });

  myList.push({
    image: "https://wdg.github.io/tvOS.js/images/exampleApp.jpg",
    title: "YouTube Video!",
    subtitle: "YouTube Video!",
    description: "a Quick parser",
    action: "openYoutubeVideo",
  });

  myList.push({
    image: "https://www.wdgwv.com/logo.png",
    title: "Reload",
    subtitle: "Reload this app",
    action: "list_reload",
  });

  myList.push({
    image: "https://www.wdgwv.com/logo.png",
    title: "Resize Live Screen",
    subtitle: "Resize Live Screen",
    action: "list_modifyScreenSize",
  });

  // javascript 파일 로드
  evaluateScripts(javascriptFiles, function (success) {
    if (success) {
      tvOS.screenSize("20-20-400-400");
      tvOS.customView(
        "STOA TVML",
        "Subtitles for the deaf and Hard of Hearing (SDH) refer to subtitles in the original lanuage with the addition of relevant non-dialog information.",
        `${baseUrl}images/frame.png`,
        `${baseUrl}images/gradient.jpg`,
        `<text><badge src="resource://tomato-fresh"/> 99% </text>
        <text>1hr 54min </text>
        <text>Comedy </text>
        <text>2015 </text>
        <badge src="resource://mpaa-pg" class="badge" />
        <badge src="resource://cc" class="badge" />`,
        () => {}
      );

      setTimeout(() => {
        tvOS.alert("Modify Size?", "", ["Yes", "No"], function (c) {
          if (c === "Yes") {
            tvOS.screenSize("30-30-500-500");
            tvOS.customView(
              "STOA TVML 2",
              "test",
              `${baseUrl}images/frame.png`,
              `${baseUrl}images/gradient2.jpg`,
              `<text><badge src="resource://tomato-fresh"/> 99% </text>
              <text>1hr 54min </text>
              <text>Comedy </text>
              <text>2015 </text>
              <badge src="resource://mpaa-pg" class="badge" />
              <badge src="resource://cc" class="badge" />`,
              () => {}
            );
          } else {
            tvOS.showLoadingIndicator("Reloading");
            setTimeout(() => {
              tvOS.listView("TV Demo", myList);
            }, 3000);
          }
        });
      }, 5000);

      //   resourceLoader = new ResourceLoader(options.BASEURL);
      //   resourceLoader.loadResource(
      //     `${options.BASEURL}templates/StoaTemplate.xml.js`,
      //     function (resource) {
      //       var doc = Presenter.makeDocument(resource);
      //       // doc.addEventListener("select", Presenter.load.bind(Presenter));
      //       Presenter.pushDocument(doc);
      //     }
      //   );

      //   let xhr = new XMLHttpRequest();
      //   xhr.open("GET", `${options.BASEURL}templates/StoaTemplate.xml`);
      //   xhr.onload = () => {
      //     let text = xhr.responseText;
      //     var doc = Presenter.makeDocument(text);
      //     // doc.addEventListener("select", Presenter.load.bind(Presenter));
      //     Presenter.pushDocument(doc);
      //   };
      //   xhr.onerror = () => {
      //     errorDoc = createAlert("XML load Error", "");
      //     // The navigationDocument is analogous to a UINavigationController in iOS; It serves as the stack that can push, pop, and present TVML documents.
      //     navigationDocument.presentModal(errorDoc);
      //   };
      //   xhr.send();
    } else {
      errorDoc = createAlert(
        "Evaluate Scripts Error",
        "Error attempting to evaluate external JavaScript files."
      );
      // The navigationDocument is analogous to a UINavigationController in iOS; It serves as the stack that can push, pop, and present TVML documents.
      navigationDocument.presentModal(errorDoc);
    }
  });
};

function createAlert(title, description) {
  var alertString2 = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <alertTemplate>
      <title>${title}</title>
      <description>${description}</description>
      <button>
        <text>OK</text>
      </button>
    </alertTemplate>
  </document>`;
  var parser = new DOMParser();
  var alertDoc = parser.parseFromString(alertString2, "application/xml");
  return alertDoc;
}

function openAlertView(e) {
  tvOS.alert("Open alertView?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_alert.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function opencompilationView(e) {
  tvOS.alert("Open compilationView?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_compilation.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function openlistView(e) {
  tvOS.alert("Open listView?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_list.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function openloadingView(e) {
  tvOS.alert("Open loadingView?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_loading.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function openratingView(e) {
  tvOS.alert("Open ratingView?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_rating.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function opensearchView(e) {
  tvOS.alert(
    "Open searchView?",
    "(there is no go back!)",
    ["Yes", "No"],
    function (c) {
      if (c === "Yes") {
        tvOS.location("https://wdg.github.io/tvOS.js/example_search.js");
      } else {
        tvOS.dismiss();
      }
    }
  );
}

function openExampleApp(e) {
  tvOS.alert(
    "Open Example App?",
    "© The-App-Team",
    ["Yes", "No"],
    function (c) {
      if (c === "Yes") {
        tvOS.location("https://wdg.github.io/tvOS.js/example_app.js");
      } else {
        tvOS.dismiss();
      }
    }
  );
}

function openExampleApp2(e) {
  tvOS.alert("Open NU.nl App?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_app2.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function openInstagram(e) {
  tvOS.alert("Open Instagram App?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_instagram.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function openTwitter(e) {
  tvOS.alert("Open Twitter App?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_twitter.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function openIMDB(e) {
  tvOS.alert("Open IMDB?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/example_IMDB.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function openYoutubeVideo(e) {
  tvOS.alert(
    "Open YouTube Video?",
    "(there is no go back!)",
    ["Yes", "No"],
    function (c) {
      if (c === "Yes") {
        tvOS.location("https://wdg.github.io/tvOS.js/example_youtube.js");
      } else {
        tvOS.dismiss();
      }
    }
  );
}

function list_reload(e) {
  tvOS.alert("Reload?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.location("https://wdg.github.io/tvOS.js/index.js");
    } else {
      tvOS.dismiss();
    }
  });
}

function list_modifyScreenSize(e) {
  tvOS.alert("Modify Size?", "", ["Yes", "No"], function (c) {
    if (c === "Yes") {
      tvOS.screenSize("20-20-400-400");
    } else {
      tvOS.dismiss();
    }
  });
}
