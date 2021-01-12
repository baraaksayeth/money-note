import dayjs from "dayjs";
import "dayjs/locale/id";

export default (format = null, date = undefined) =>
  dayjs(date).locale("id").format(format);
