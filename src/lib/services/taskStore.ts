import type { Task } from '../models/task'

class TaskStore {
    tasks: Task[];

    constructor() {
        this.tasks = [
            { 
                id: '0', 
                title: 'Feed The Dogs!', 
                description: 'Remember to feed phairo and phaira!', 
                status: 'Pending', 
                comments: [
                    'very nice',
                    'wow so good'
                ]
            },
            { 
                id: '1', 
                title: 'Study UI/UX Design Best Practices', 
                description: 'Catch up on saved ui/ux videos on coursera', 
                status: 'Pending', 
                comments:[]
            }
        ];
    }

    add(t:Task) : Task {
        t.id = '' + this.tasks.length + 1;
        t.status = 'Pending';
        t.comments = [];

        console.log(t)
        this.tasks.push(t)
        return t;
        /*
        this.tasks.push(t);
        return t;*/
    };

    getAll() : Task[] {
        return this.tasks;
    }
}

export const taskStore = new TaskStore();

