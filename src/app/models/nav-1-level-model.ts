import {Nav2LevelModel} from "./nav-2-level-model";

export class Nav1LevelModel {
  name: string;
  href: string;
  firstInnerMenu: Nav2LevelModel[];
  hasInnerMenu: boolean = false;


  constructor(name: string, href: string, innerMenu: Nav2LevelModel[]) {
    this.name = name;
    this.href = href;
    this.firstInnerMenu = innerMenu;
    if (innerMenu.length < 1) {
      this.hasInnerMenu = true;
    } else {
      this.hasInnerMenu = false;
    }
  }
}
