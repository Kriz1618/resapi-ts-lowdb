type Task = {
    id: string;
    name: string;
    description: string;
};

type Schema = {
    taks: Task[];
}

export { Task, Schema };