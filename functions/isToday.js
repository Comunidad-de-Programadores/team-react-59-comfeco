import moment from 'moment';
import 'moment-timezone';

const isToday = ( date, hour, zone ) => {
  let dateByZone = moment.tz(date + " " + hour, 'DD/MM/YYYY HH:mm a', zone).format('YYYY-MM-DDTHH:mm:ssZ');
  let dateByLocal = moment(dateByZone).clone().tz(moment.tz.guess());
  return ( dateByLocal.format('L') === moment().format('L') );
}

export default isToday;