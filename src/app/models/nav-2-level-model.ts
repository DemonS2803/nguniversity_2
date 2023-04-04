import {Nav3LevelModel} from "./nav-3-level-model";

export class Nav2LevelModel {
  menu_item: string;
  link: string;
  sorted: number
  level: Nav3LevelModel[];
  hasInnerMenu: boolean = false;


  constructor(menu_item: string, link: string, sorted: number, level: Nav3LevelModel[]) {
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
