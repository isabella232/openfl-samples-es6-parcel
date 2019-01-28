"use strict";
import { AssetLibrary, Sprite, Stage } from "openfl";
import libraryPath from "../assets/library.bundle/";

class App extends Sprite {
  constructor() {
    super();

    AssetLibrary.loadFromFile(libraryPath)
      .onComplete(library => {
        var cat = library.getMovieClip("NyanCatAnimation");
        this.addChild(cat);
      })
      .onError(e => console.error(e));
  }
}

var stage = new Stage(550, 400, 0xffffff, App);
document.body.appendChild(stage.element);
