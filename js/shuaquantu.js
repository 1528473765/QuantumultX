var obj = JSON.parse($response.body);
var obj = {
  "status": 1,
  "info": {
    "group": "终身会员",
    "is_agent": "0",
    "end_time": "无限期",
    "is_timeout": false,
  }
}
$done({body: JSON.stringify(obj)});
