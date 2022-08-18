/*
[mitm] 
hostname = qf.52jietu.com

***********************************

var obj = JSON.parse($response.body);
var obj = {
  "status": 1,
  "info": {
  "is_timeout": false,
  }
};
$done({body: JSON.stringify(obj)});
