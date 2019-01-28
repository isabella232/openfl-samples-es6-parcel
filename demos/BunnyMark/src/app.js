import { Stage } from "openfl";
import Main from "./Main";

if (module.hot) {
  module.hot.dispose(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
}

var stage = new Stage(550, 400);
document.body.appendChild(stage.element);
stage.addChild(new Main());
