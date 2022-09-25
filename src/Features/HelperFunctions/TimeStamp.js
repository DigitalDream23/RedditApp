import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";

export const formatTimeStamp=(timeStamp)=>{
const date = fromUnixTime(timeStamp);
const longAgo = formatDistanceToNowStrict(date);
return longAgo;
}