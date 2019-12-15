const characters = [
    {
        name: 'Мечник', health: 10
    },
    {
        name: 'Маг', health: 100
    },
    {
        name: 'Маг', health: 0
    },
    {
        name: 'Лучник', health: 0
    },
];

const alive = characters.filter(item => item.health > 0);