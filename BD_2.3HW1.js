const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let employees = [
  { name: 'Rahul Gupta', department: 'HR', salary: 50000 },
  { name: 'Sneha Sharma', department: 'Finance', salary: 60000 },
  { name: 'Priya Singh', department: 'Marketing', salary: 55000 },
  { name: 'Amit Kumar', department: 'IT', salary: 65000 },
];

let bikes = [
  { make: 'Hero', model: 'Splendor', mileage: 80 },
  { make: 'Bajaj', model: 'Pulsar', mileage: 60 },
  { make: 'TVS', model: 'Apache', mileage: 70 },
];

let songs = [
  { title: 'Tum Hi Ho', genre: 'Romantic', rating: 4 },
  { title: 'Senorita', genre: 'Pop', rating: 5 },
  { title: 'Dil Chahta Hai', genre: 'Bollywood', rating: 3 },
];

let tasks = [
  { taskId: 1, taskName: 'Prepare Presentation', status: 'pending' },
  { taskId: 2, taskName: 'Attend Meeting', status: 'in-progress' },
  { taskId: 3, taskName: 'Submit Report', status: 'completed' },
];

//1
function filterByDepartment(employee, department) {
  return employee.department === department;
}

app.get('/employees/department/:department', (req, res) => {
  let department = req.params.department;
  let results = employees.filter((employee) =>
    filterByDepartment(employee, department)
  );
  res.json(results);
});

//2
function filterByMileage(bike, minMileage) {
  return bike.mileage > minMileage;
}

app.get('/bikes/mileage/:minMileage', (req, res) => {
  let minMileage = parseInt(req.params.minMileage);
  let result = bikes.filter((bike) => filterByMileage(bike, minMileage));
  res.json(result);
});

//3

function filterByMake(bike, make) {
  return bike.make.toLowerCase() === make.toLowerCase();
}

app.get('/bikes/make/:make', (req, res) => {
  let make = req.params.make;
  let result = bikes.filter((bike) => filterByMake(bike, make));
  res.json(result);
});

//4
function filterByRating(song, minRating) {
  return song.rating > minRating;
}

app.get('/songs/rating/:minRating', (req, res) => {
  let minRating = parseFloat(req.params.minRating);
  let results = songs.filter((song) => filterByRating(song, minRating));
  res.json(results);
});

//5
function filterByGenre(song, genre) {
  return song.genre.toLowerCase() === genre.toLowerCase();
}

app.get('/songs/genre/:genre', (req, res) => {
  let genre = req.params.genre;
  let results = songs.filter((song) => filterByGenre(song, genre));
  res.json(results);
});

//6

function filterByStatus(task, status) {
  return task.status.toLowerCase() === status.toLowerCase();
}

app.get('/tasks/status/:status', (req, res) => {
  let status = req.params.status;
  let results = tasks.filter((task) => filterByStatus(task, status));
  res.json(results);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
