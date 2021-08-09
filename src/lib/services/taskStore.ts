import { writable } from 'svelte/store';

export const tasks = writable([
    { id: '0', title: 'Feed The Dogs!', description: 'Remember to feed phairo and phaira!', status: 'Pending', comments: [
        'very nice',
        'wow so good'
    ]},
    { id: '1', title: 'Study UI/UX Design Best Practices', description: 'Catch up on saved ui/ux videos on coursera', status: 'Pending', comments:[]},
    { id: '2', title: 'Meeting With Client', description: 'E-commerce App Test', status: 'Completed', comments: [
        'this is cool',
    ]},
]);

