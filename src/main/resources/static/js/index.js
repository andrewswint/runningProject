
function dateDiff() {
    let date1 = new Date(document.getElementById("startDate").value);
    let date2 = new Date(document.getElementById("endDate").value);
console.log("date1 " + date1);
    const start = new Date(date1);
    const end = new Date(date2);
    console.log("start " + start);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    document.getElementById("output").innerHTML=diffDays;
}