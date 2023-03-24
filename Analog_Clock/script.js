setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);

let a;
let date;
let time;
let seconds;
let minutes;
let hours;
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date();
    seconds = a.getSeconds();
    minutes = a.getMinutes();
    hours = a.getHours();
    hours = hours <= 12 ? hours : hours-12;
    // console.log(hours)
    // hours = hours <= 9 ? '0' + hours : hours;

    seconds = seconds <= 9 ? '0' + seconds : seconds
    minutes = minutes <= 9 ? '0' + minutes : minutes
    hours = hours <= 9 ? '0' + hours : hours
    time = hours + ':' + minutes + ':' + seconds
    // date = a.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML = time;

}, 1000);