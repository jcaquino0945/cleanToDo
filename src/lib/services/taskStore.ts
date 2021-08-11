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
                status: 'Completed', 
                comments:[]
            }
        ];
    }

    add(t) {
        let newTask = {
            id: (this.tasks.length + 1).toString(),
            status: 'Pending',
            comments: [],
            title: t.title,
            description: t.description
        }

        this.tasks.push(newTask)
        this.tasks = this.tasks
        
        console.log(this.tasks)
        return t;
        /*
        this.tasks.push(t);
        return t;*/
    };

    getAll() : Task[] {
        return this.tasks;
    }

    checkTask(t:Task) : Task {
        t.id = t.id;
        t.status = 'Completed';
        t.comments = t.comments;
        t.title = t.title
        t.description = t.description
        console.log(t)
        this.tasks.splice(this.tasks.indexOf(t),1)
        this.tasks.push(t)
        this.tasks = this.tasks

        console.log(this.tasks)
        return t;
    }

    unCheckTask(t:Task) : Task {
        t.id = t.id;
        t.status = 'Pending';
        t.comments = t.comments;
        t.title = t.title
        t.description = t.description
        console.log(t)
        this.tasks.splice(this.tasks.indexOf(t),1)
        this.tasks.push(t)
        this.tasks = this.tasks

        console.log(this.tasks)
        return t;
    }

    deleteTask(t:Task) : Task {
        this.tasks.splice(this.tasks.indexOf(t), 1)
        this.tasks = this.tasks

        return t;
    }
    
}

export const taskStore = new TaskStore();

