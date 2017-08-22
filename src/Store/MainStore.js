import { observable } from "mobx";
class MainStore {
  @observable scrollPos = 0;
  @observable events = {};
  modifyScroll(newScroll) {
    this.scrollPos = newScroll;
  }
}
export default new MainStore();
