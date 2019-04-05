import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-true-fluid-type",
  templateUrl: "./true-fluid-type.component.html",
  styleUrls: ["./true-fluid-type.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TrueFluidTypeComponent implements OnInit {
  loadAPI: Promise<any>;
  constructor() {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
      resolve(true);
    });
  }
  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute("src") != null &&
        scripts[i].getAttribute("src").includes("loader")
      ) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "https://cdn.jsdelivr.net/gh/scottkellum/typetura.js@master/js/typetura.min.js"
      ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement("script");
        node.src = dynamicScripts[i];
        node.type = "text/javascript";
        node.async = false;
        node.charset = "utf-8";
        document.getElementsByTagName("head")[0].appendChild(node);
      }
    }
  }
  ngOnInit() {}
}
