export default function Index() {}

export const FormatDate = (date: string) => {
  var date_obj = new Date(date);
  return date_obj.toDateString();

  // return date_obj.toDateString().slice(4);
};

// converting Date to dd-mm-yyyy format
export const ConvertDatetoYMD = (str: Date) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};

export const GetPercentage = (value: number, total: number) => {
  const percentage = (value / total) * 100;
  return percentage.toString() + "%";
};


export const GetDaysLeft = (end_date:string)=>{
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate = month + "/" + date + "/" + year;

  // To calculate the time difference of two dates
  let Difference_In_Time = new Date(end_date).getTime() - new Date(currentDate).getTime();
  
  // To calculate the no. of days between two dates
  let days_left = Math.round(Difference_In_Time / (1000 * 3600 * 24));

  return days_left

}

