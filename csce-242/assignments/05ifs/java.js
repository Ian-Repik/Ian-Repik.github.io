//this is the toggle for the nav when you click on it it changes the arows 
document.getElementById("toggle-nav").onclick =() => {
    const navList = document.querySelector("#main-nav ul");
    const toggleNav = document.getElementById("toggle-nav");
    navList.classList.toggle("hidden");
    if(navList.classList.contains("hidden")){
        toggleNav.innerHTML ="▼";
    }else{
        toggleNav.innerHTML ="▲ ";
    }
};
document.getElementById("exercise-one").onclick = (e) =>{
    e.preventDefault();
document.getElementById("missing-class").classList.remove("hidden");
document.getElementById("semester-section").classList.add("hidden");
}
//When you input a number into the text box it does a calucation of how many days you missed and tells you 
//the percent you would lose for missing that many days, and it prints out a message depnding on the amount of days missed

document.getElementById("txt-days").onkeyup = (e) => {
    const daysMissed = parseInt(e.target.value);
    const deductionMessage = document.getElementById("deduction-message");
    const attendanceMessage = document.getElementById("attendance-message");

    if(isNaN(daysMissed)) {
        deductionMessage.innerHTML = "";
        attendanceMessage.innerHTML = "";
    } else {
        const percentLost = daysMissed / 25 * 7;

        deductionMessage.innerHTML =
            `You will lose ${percentLost.toFixed(1)}% for skipping ${daysMissed} days.`;

        if(daysMissed === 0) {
            attendanceMessage.innerHTML =
                "Perfect! You are not missing any class time.";
        } else if(daysMissed <= 2) {
            attendanceMessage.innerHTML =
                "That is not too bad, but try to keep up with your work.";
        } else if(daysMissed <= 5) {
            attendanceMessage.innerHTML =
                "You may miss important information in class.";
        } else if(daysMissed <= 8) {
            attendanceMessage.innerHTML =
                "This is not an online class, you are missing valuable learning opportunities.";
        } else {
            attendanceMessage.innerHTML =
                "That is a lot of missed class. Try to attend more often!";
        }
    }
}
//When you click the exercise 2 buttton it hides the other section and finds the days you have left 
document.getElementById("exercise-two").onclick = (e) => {
    e.preventDefault();

    document.getElementById("missing-class").classList.add("hidden");
    document.getElementById("semester-section").classList.remove("hidden");

    const today = new Date();
    const lastDay = new Date(today.getFullYear(), 11, 4);

    const millisecondsLeft = lastDay.getTime() - today.getTime();
    const daysLeft = Math.ceil(millisecondsLeft / (1000 * 60 * 60 * 24));

    const daysLeftMessage = document.getElementById("days-laft-message");
    const semesterMessage = document.getElementById("semester-message");

    daysLeftMessage.innerHTML = `You have ${daysLeft} days left in the semester.`;

    if(daysLeft > 100) {
        semesterMessage.innerHTML = "Not time to start counting down yet.";
    } else if(daysLeft > 50) {
        semesterMessage.innerHTML = "The semester is moving along!";
    } else if(daysLeft > 20) {
        semesterMessage.innerHTML = "You are getting close to the finish line!";
    } else if(daysLeft > 0) {
        semesterMessage.innerHTML = "Finish strong! The semester is almost over!";
    } else {
        semesterMessage.innerHTML = "The semester is over. Enjoy your break!";
    }
};