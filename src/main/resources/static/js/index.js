let date1 = new Date(document.getElementById("startDate").value);
let date2 = new Date(document.getElementById("endDate").value);

function dateDiff(start, end) {
    console.log(date1);
    console.log(date2);
    start = date1
    end = date2
    console.log(start);
    console.log(end);
    let timeDiff = Math.abs(end.getTime() - start.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(start);
    console.log(end);

    document.getElementById("output").innerHTML = diffDays + " days";

}