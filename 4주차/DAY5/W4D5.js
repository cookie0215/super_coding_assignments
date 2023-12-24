const bills = [1, 50, 22, 97, 62, 15, 28, 34, 77, 100];
const calculateTip = bills.map((num) => {
  const tips = num >= 30 ? parseInt(num * 0.15) : parseInt(num * 0.2);
  console.log(tips);
})

calculateTip;