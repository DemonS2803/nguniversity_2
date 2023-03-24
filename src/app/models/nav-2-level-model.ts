import {Nav3LevelModel} from "./nav-3-level-model";

export class Nav2LevelModel {
  name: string;
  href: string;
  secondInnerMenu: Nav3LevelModel[];
  hasInnerMenu: boolean = false;


  constructor(name: string, href: string, secondInnerMenu: Nav3LevelModel[], hasInnerMenu: boolean) {
    this.name = name;
    this.href = href;
    this.secondInnerMenu = secondInnerMenu;
    if (secondInnerMenu.length < 1) {
      this.hasInnerMenu = true;
    } else {
      this.hasInnerMenu = false;
    }
  }
}
