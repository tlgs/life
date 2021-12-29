export default function getColors() {
  const date = new Date();
  const [month, day] = [date.getMonth() + 1, date.getDate()];

  if (month === 12 && day === 25) {
    return ['mediumseagreen', 'orangered'];
  }
  if (month === 10 && day === 31) {
    return ['rebeccapurple', 'darkorange'];
  }
  return ['steelblue', 'lightsteelblue'];
}
