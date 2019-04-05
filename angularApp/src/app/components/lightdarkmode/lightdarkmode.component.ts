import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-lightdarkmode",
  templateUrl: "./lightdarkmode.component.html",
  styleUrls: ["./lightdarkmode.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LightdarkmodeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var checkbox = document.querySelector("input[name=theme]");

    checkbox.addEventListener("change", function() {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
      }
    });

    let trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };
  }
}
