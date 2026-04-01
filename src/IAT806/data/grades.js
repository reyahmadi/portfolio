let classAverageGrade =[
    {x: "Assignment 1", y: 67},
    {x: "Assignment 2", y: 73},
    {x: "Assignment 3", y: 54},
    {x: "Assignment 4", y: 70},
]

let yourAverageGrade =[
    {x: "Assignment 1", y: 72},
    {x: "Assignment 2", y: 63},
    {x: "Assignment 3", y: 58},
    {x: "Assignment 4", y: 56},
]

let currentAverage = [
  { x: "you",    grade: 62.3, time: 25.6, highlight: true },
  { x: "Peer 1", grade: 63.8, time: 21.3 },
  { x: "Peer 2", grade: 58.8, time: 22.4 },
  { x: "Peer 3", grade: 66.8, time: 25.3 },
  { x: "Peer 4", grade: 69.3, time: 25.8 },
  { x: "Peer 5", grade: 73.8, time: 22.2 },
  { x: "Peer 6", grade: 76.0, time: 21.1 },
  { x: "Peer 7", grade: 60.3, time: 23.9 },
  { x: "Peer 8", grade: 59.3, time: 19.6 },
  { x: "Peer 9", grade: 67.0, time: 22.7 },
];

let grades = {
    "Assignment 1": [
        {x: "you", y: 72}, 
        {x: "Peer 1", y: 74}, 
        {x: "Peer 2", y: 61}, 
        {x: "Peer 3", y: 54}, 
        {x: "Peer 4", y: 69}, 
        {x: "Peer 5", y: 76}, 
        {x: "Peer 6", y: 81}, 
        {x: "Peer 7", y: 62}, 
        {x: "Peer 8", y: 51}, 
        {x: "Peer 9", y: 61}, 
    ],
    "Assignment 2": [
        {x: "you", y: 63}, 
        {x: "Peer 1", y: 65}, 
        {x: "Peer 2", y: 50}, 
        {x: "Peer 3", y: 71}, 
        {x: "Peer 4", y: 56}, 
        {x: "Peer 5", y: 77}, 
        {x: "Peer 6", y: 83}, 
        {x: "Peer 7", y: 59}, 
        {x: "Peer 8", y: 60}, 
        {x: "Peer 9", y: 64}, 
    ],
    "Assignment 3": [
        {x: "you", y: 58}, 
        {x: "Peer 1", y: 52}, 
        {x: "Peer 2", y: 66}, 
        {x: "Peer 3", y: 81}, 
        {x: "Peer 4", y: 75}, 
        {x: "Peer 5", y: 53}, 
        {x: "Peer 6", y: 68}, 
        {x: "Peer 7", y: 57}, 
        {x: "Peer 8", y: 69}, 
        {x: "Peer 9", y: 80}, 
    ],
    "Assignment 4": [
        {x: "you", y: 56}, 
        {x: "Peer 1", y: 64}, 
        {x: "Peer 2", y: 58}, 
        {x: "Peer 3", y: 61}, 
        {x: "Peer 4", y: 77}, 
        {x: "Peer 5", y: 89}, 
        {x: "Peer 6", y: 72}, 
        {x: "Peer 7", y: 63}, 
        {x: "Peer 8", y: 57}, 
        {x: "Peer 9", y: 63}, 
    ],
}

let times = {
    "Assignment 1": [
        {x: "you", y: 5.5}, 
        {x: "Peer 1", y: 4.5}, 
        {x: "Peer 2", y: 6.1}, 
        {x: "Peer 3", y: 3.4}, 
        {x: "Peer 4", y: 5.7}, 
        {x: "Peer 5", y: 5.3}, 
        {x: "Peer 6", y: 4.8}, 
        {x: "Peer 7", y: 7.2}, 
        {x: "Peer 8", y: 4.0}, 
        {x: "Peer 9", y: 3.9}, 
    ],
    "Assignment 2": [
        {x: "you", y: 6.2}, 
        {x: "Peer 1", y: 5.8}, 
        {x: "Peer 2", y: 6.5}, 
        {x: "Peer 3", y: 7.0}, 
        {x: "Peer 4", y: 5.5}, 
        {x: "Peer 5", y: 4.3}, 
        {x: "Peer 6", y: 6.6}, 
        {x: "Peer 7", y: 6.3}, 
        {x: "Peer 8", y: 5.2}, 
        {x: "Peer 9", y: 5.9}, 
    ],
    "Assignment 3": [
        {x: "you", y: 7.5}, 
        {x: "Peer 1", y: 5.5}, 
        {x: "Peer 2", y: 6.3}, 
        {x: "Peer 3", y: 8.1}, 
        {x: "Peer 4", y: 7.3}, 
        {x: "Peer 5", y: 7.4}, 
        {x: "Peer 6", y: 3.6}, 
        {x: "Peer 7", y: 5.9}, 
        {x: "Peer 8", y: 6.6}, 
        {x: "Peer 9", y: 4.8}, 
    ],
    "Assignment 4": [
        {x: "you", y: 6.4}, 
        {x: "Peer 1", y: 5.5}, 
        {x: "Peer 2", y: 3.5}, 
        {x: "Peer 3", y: 6.8}, 
        {x: "Peer 4", y: 7.3}, 
        {x: "Peer 5", y: 5.2}, 
        {x: "Peer 6", y: 6.1}, 
        {x: "Peer 7", y: 4.5}, 
        {x: "Peer 8", y: 3.8}, 
        {x: "Peer 9", y: 8.1}, 
    ],
}


let classAverageTime =[
    {x: "Assignment 1", y: 5.0},
    {x: "Assignment 2", y: 6.5},
    {x: "Assignment 3", y: 8},
    {x: "Assignment 4", y: 6.1},
]

let yourAverageTime =[
    {x: "Assignment 1", y: 5.5},
    {x: "Assignment 2", y: 6.2},
    {x: "Assignment 3", y: 7.5},
    {x: "Assignment 4", y: 6.4},
]


export {
    classAverageGrade, 
    yourAverageGrade, 
    grades, 
    times, 
    yourAverageTime, 
    classAverageTime,
    currentAverage,
    };