const MonthFormatter = ({date}) => {
    const date_parts = date.split("-");
    const monthIndex = parseInt(date_parts[1])-1
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
      ];
    const month=monthNames[monthIndex]
    return month
}

export default MonthFormatter