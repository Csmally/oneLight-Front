import { makeAutoObservable } from "mobx";

class LoadingStore {
    status = false;
    constructor() {
        makeAutoObservable(this);
    }

    updateStatus(status: boolean) {
        this.status = status;
    }
}

export default new LoadingStore();