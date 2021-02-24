import moment from 'moment';
import 'moment-timezone';

const convertTimeZoneLocal = ( date, hour, zone ) => {
  let dateTime = date + ' ' + hour;
  const zoneTz = moment.tz.guess();
  dateTime = moment(dateTime, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm');
  dateTime = moment.tz(dateTime, zone).format();
  dateTime = moment(dateTime).tz(zoneTz);
  return (dateTime.format('LT')).toString();
}

export default convertTimeZoneLocal;