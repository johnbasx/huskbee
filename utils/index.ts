export default function Index() {}

export const FormatDate = (date: string) => {
	const date_obj = new Date(date);
	return date_obj.toDateString();

	// return date_obj.toDateString().slice(4);
};

// converting Date to dd-mm-yyyy format
export const ConvertDateToYMD = (str: Date) => {
	const date = new Date(str);
	const month = `0${date.getMonth()}${1}`.slice(-2);
	const day = `0${date.getDate()}`.slice(-2);
	return [date.getFullYear(), month, day].join("-");
};

export const GetPercentage = (value: number, total: number) => {
	const percentage = (value / total) * 100;
	return `${percentage.toString()}%`;
};

export const GetDaysLeft = (end_date: string) => {
	console.log("end_date: ",end_date);
	
	const today = new Date();
	const month = today.getMonth();
	const year = today.getFullYear();
	const date = today.getDate();
	const currentDate = `${month}/${date}/${year}`;
	console.log("today: ",today);
	console.log("month: ",month);

	console.log("currentDate: ",currentDate);
	console.log("end_date_time: ",new Date(end_date).getTime());

	console.log("currentDate_time: ",new Date(currentDate).getTime());


	// To calculate the time difference of two dates
	const Difference_In_Time =
		new Date(end_date).getTime() - new Date(currentDate).getTime();
		console.log("Difference_In_Time: ",Difference_In_Time)
	// To calculate the no. of days between two dates
	const days_left = Math.round(Difference_In_Time / (1000 * 3600 * 24));

	console.log("days_left: ",days_left);

	return days_left;
};

// Number to Indian currency converter
export const toIndianCurrency = (num: number) => {
	const curr = num.toLocaleString("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0,
	});
	return curr;
};
