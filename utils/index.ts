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
