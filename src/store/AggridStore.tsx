import { makeAutoObservable, runInAction } from "mobx";


class AggridStore {
    viewList = [];

    constructor() {
        makeAutoObservable(this);
    }

    changeViewList = () => {
        runInAction(() => {
            this.viewList.push("one");
        })
    }
}

export default AggridStore;