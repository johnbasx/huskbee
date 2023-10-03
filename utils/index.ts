export default function Index() {}

export const FormatDate = (date: string) => {
  var date_obj = new Date(date);
  return date_obj.toDateString().slice(4);
};
