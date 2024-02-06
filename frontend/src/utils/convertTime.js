const convertTime = time => {
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    let merdiem = "am"
    if (hours >= 12) {
        merdiem="pm";
        if (hours > 12 ) {
            hours-=12
        }
    }
    return hours.toString().padStart(2) +":" + minutes.toString().padStart(2,"0") + " " + merdiem
}

export default convertTime