App.onLaunch = function (options) {
  // options : launchOptions from swift
  // local server : ruby -run -ehttpd . -p9001
  var errorDoc;
  var baseUrl = options.BASEURL;
  var javascriptFiles = [
    `${baseUrl}js/tvOS.js`,
    `${baseUrl}js/listviewData.js`,
  ];

  // javascript 파일 로드
  evaluateScripts(javascriptFiles, function (success) {
    if (success) {
      tvOS.screenSize("0-0-1920-1080");
      tvOS.customView(
        `${baseUrl}images/gradient_background.jpeg`,
        `${baseUrl}images/sample-right.png`,
        [`자동주문 080.816.1212`, `상담전화 080.837.1212`],
        () => {}
      );

      setTimeout(() => {
        tvOS.alert(
          "Modify Size?",
          "",
          ["Yes", "No", "Get Pairing List"],
          function (c) {
            if (c === "Yes") {
              tvOS.screenSize("20-20-1400-950");
              tvOS.customView(
                `${baseUrl}images/grey_background.jpeg`,
                `${baseUrl}images/sample-right.png`,
                [`자동주문 080.816.1212`, `상담전화 080.837.1212`],
                () => {}
              );
            } else if (c === "Get Pairing List") {
              tvOS.showLoadingIndicator("Reloading");
              // getSampleData(); // listView 샘플 코드
              getNPSPairingList(); // SKB NPS 페어링 리스트 API
            } else {
              tvOS.showLoadingIndicator("Reloading");
              setTimeout(() => {
                tvOS.listView("TV Demo", ListViewData); //from listviewData.js
              }, 3000);
            }
          }
        );
      }, 5000);
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

function getSampleData() {
  var old_count = "";
  var myArray = [];
  var count = 0;

  // load data
  tvOS.ajax(
    "https://api.themoviedb.org/3/movie/popular?api_key=8d0c4a76ec570b87f4ac76520682e324",
    "GET",
    null,
    function (data) {
      data = JSON.parse(data);
      data = data["results"];
      for (var i in data) {
        console.log("Adding " + data[i]["title"]);

        myArray.push({
          image: "https://image.tmdb.org/t/p/w500" + data[i]["poster_path"],
          title: data[i]["title"],
          description: data[i]["overview"],
          subtitle:
            data[i]["release_date"] + " - " + data[i]["vote_average"] + "/10.0",
          action: "clickedOn",
          accessibilityText: "None",
        });

        count++;
      }
    }
  );

  var publish_checker = function () {
    if (old_count === count && myArray.length > 0) {
      tvOS.listView("IMDB", myArray);
    } else {
      old_count = count;
      setTimeout(publish_checker, 500);
    }
  };
  setTimeout(publish_checker, 500);
}

function getNPSPairingList() {
  var old_count = "";
  var myArray = [];
  var count = 0;

  // load data
  tvOS.ajax(
    "http://nps.hanafostv.com:9090/nps/v5/reqPairingList/",
    "POST",
    {
      body: {
        pairing_device_type: "H",
        retrieve_service_type: "ALL",
        pairing_deviceid: "{C80CAFB3-463F-11EA-91F5-9D29A492214E}",
      },
      if: "IF-NPS-532",
      header: {
        if_no: "IF-NPS-532",
        sender_name: "AppleTv,5.2.2,14.4",
        sender: "STB",
        ver: "5.0",
        response_format: "json",
        receiver: "NPS",
      },
    },
    function (data) {
      data = JSON.parse(data);
      data = data["body"]["pairing_list"];
      for (var i in data) {
        console.log("Adding " + data[i]["user_name"]);

        myArray.push({
          image: "",
          title: data[i]["user_name"],
          description: data[i]["pairing_time"],
          subtitle: data[i]["pairingid"],
          action: "clickedOn",
          accessibilityText: "None",
        });

        count++;
      }
    }
  );

  var publish_checker = function () {
    if (old_count === count && myArray.length > 0) {
      tvOS.listView("Pairing List", myArray);
    } else {
      old_count = count;
      setTimeout(publish_checker, 500);
    }
  };
  setTimeout(publish_checker, 500);
}
