import moment from 'moment';
import 'moment-timezone';

const isToday = async ( date, hour, zone ) => {
  let dateTime = date + ' ' + hour;
  const zoneTz = moment.tz.guess();
  dateTime = moment(dateTime).tz(zoneTz).format('L');
  dateTime = moment(dateTime, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm');
  dateTime = moment.tz(dateTime, zone);
  let dateToday = moment().format('L');
  
  if( dateToday === dateTime) {
    return true;
  }
  return false;
}

export default isToday;