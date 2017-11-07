var tasks = [
  "Go fishing",
  "Take a trip",
  "Relax for the Day",
  "Hangout with Friends"
];

var randomTasks = tasks[Math.floor((Math.random() * tasks.length))];

module.exports.randomTasks = randomTasks;
