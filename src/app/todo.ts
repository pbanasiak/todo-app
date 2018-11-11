export class Todo {
  id: number;
  title: string;
  dateAdded: Date;
  isDone: boolean;

  constructor(title: string) {
    this.title = title;
    this.id = Math.random();
    this.isDone = false;
    this.dateAdded = new Date();
  }
}
