import { types } from "mobx-state-tree";

export const Bin = types
  .model("Bin", {
    constants: [ 1, 2, 4, 8 ],
    actVals: [ 0, 0, 0, 0 ],
  })
  .views(self => ({
    get binVal() {
      return ;
    }
  }))
  .actions(self => ({
    toggle() {
      self.finished = !self.finished;
    }
  }));