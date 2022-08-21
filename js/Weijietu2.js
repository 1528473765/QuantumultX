var obj = JSON.parse($response.body);
var obj = {
  "status" : 1,
  "info" : {
    "login" : "0",
    "end_time" : "2030-12-12",
    "is_agent" : "4",
     "agent" : "至尊代理商",
    "nickname" : "芮.b",
    "alipay" : "",
    "istest" : "0",
    "login_mobile" : "3",
    "alipay_level" : "0",
    "end_time_data" : "0",
    "parent_id" : "0",
    "sex" : "2",
    "name" : "",
    "image" : "http://api.jietuwan.com/Uploads/Picture/2022-08-21/1661064689.jpeg",
    "status" : "正常",
    "mobile" : "2022",
    "is_timeout" : false,
    "group" : "永久会员",
    "group_id" : "1",
  }
}
$done({body: JSON.stringify(obj)});
