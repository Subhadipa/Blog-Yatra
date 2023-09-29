const DateFormatter = ({date}) => {
    const date_parts = date.split("-");
    const day = date_parts[2].split("T")[0];
    return day
 
}

export default DateFormatter
