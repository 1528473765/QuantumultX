var obj = JSON.parse($response.body);
var obj = {
  "status": 1,
  "info": {
  "is_timeout": false,
  "group": "终身会员",
  }
};
$done({body: JSON.stringify(obj)});
