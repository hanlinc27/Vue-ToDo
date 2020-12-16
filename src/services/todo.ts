class todoService {
  public taskList: ITODO[] = [];
  public doneList: ITODO[] = [];

  public move(id: number, done: boolean) {
    let hold: ITODO;
    if (done) {
      //Completed List
      for (let i in this.doneList) {
        if (this.doneList[+i].id == id) {
          hold = this.doneList[+i];
          this.doneList.splice(+i, 1);
        }
      }

      hold.done = false;
      if (this.taskList.length == 0) hold.id = 0;
      else hold.id = this.taskList[this.taskList.length - 1].id + 1;
      this.taskList.push(hold);
    } else {
      //Task List
      for (let i in this.taskList) {
        if (this.taskList[+i].id == id) {
          hold = this.taskList[+i];
          this.taskList.splice(+i, 1);
        }
      }
      hold.done = true;
      if (this.doneList.length == 0) hold.id = 0;
      else hold.id = this.doneList[this.doneList.length - 1].id + 1;
      this.doneList.push(hold);
    }
  }
}
export interface ITODO {
  text: string;
  id: number;
  done: boolean;
}

export default new todoService();
