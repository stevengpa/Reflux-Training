# Reflux-Training
The purpose of this repo is to share a simple example of <strong>React-Reflux</strong> patterm web app, so this is a single page application with node in the backend, I'm using the locallydb library for local database and it contains two modules: People and Skills. Skills is available with the full functionalities already implemented but People is not ready yet, the idea is that you fork this repo and then you create the People functionalities as well as Skills does (or better).

### Prerequisites
- NodeJS v0.10.26
- npm install -g browserify@11.0.1
- npm install -g reactify@1.1.1
- npm install -g babelify@6.3.0
- npm install -g gulp@3.9.0

### Getting started
- Fork --> Clone --> Run:
```quote
$ npm install
$ gulp

Sometimes sudo is required ...

$ sudo npm install
$ sudo gulp
```
- Go to your web browser and check your localhost port 1000
<hr />
If you are able to see the below web app, it means that you are <strong>READY TO START</strong>

<img src="https://github.com/StevenPerez/images/blob/master/react-reflux-1.png?raw=true" />

<img src="https://github.com/StevenPerez/images/blob/master/react-reflux-2.png?raw=true" />

### Check the step by step of the event progress in the console:

<img src="https://github.com/StevenPerez/images/blob/master/react-reflux-3.png?raw=true" />

#### also it is available through alerts, you just need to:
- Go public/js/utils/stepByStep.js
- Change the varible:
```javascript
const stepByStep = false; // change this const value to true
```
- Refresh the browser and go to Skills (BOOM!!)

<img src="https://github.com/StevenPerez/images/blob/master/react-reflux-4.png?raw=true" />

- You can clean the whole alerts running in the Web Browser Console: 
```
PNotify.removeAll()
```
