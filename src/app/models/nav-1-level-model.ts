import {Nav2LevelModel} from "./nav-2-level-model";

export class Nav1LevelModel {
  menu_item: string;
  link: string;
  sorted: number
  level: Nav2LevelModel[];
  hasInnerMenu: boolean = false;


  constructor(menu_item: string, link: string, sorted: number, level: Nav2LevelModel[]) {
    this.menu_item = menu_item;
    this.link = link;
    this.sorted = sorted;
    this.level = level;
    if (level.length > 0) {
      this.hasInnerMenu = true;
    } else {
      this.hasInnerMenu = false;
    }
  }
}
