import { makeAutoObservable, runInAction } from "mobx";


class AggridStore {
    viewList: Array<Object> = [];

    constructor() {
        makeAutoObservable(this);
    }

    changeViewList = () => {
        runInAction(() => {
            this.viewList.push({name: "one"});
        })
    }
}

export default AggridStore;