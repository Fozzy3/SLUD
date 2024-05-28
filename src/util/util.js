export function getHourFormat(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // El "0" debe ser "12"
  minutes = minutes < 10 ? '0' + minutes : minutes;

  let strHora = hours + ':' + minutes + ' ' + ampm;
  return strHora;
}