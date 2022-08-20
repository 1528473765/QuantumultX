var obj = JSON.parse($response.body);
var obj = {
  "status" : 1,
  "info" : {
    "is_timeout" : false,
    "uuids" : "",
    "nickName" : "",
    "alipayName" : "",
    "inviteCode_state" : 0,
    "inviteUserBuyNum" : 0,
    "inviteMoney" : 0,
    "group" : "终身会员",
    "inviteCode" : "",
    "is_agent" : "0",
    "m3_num" : "0",
    "inviteBili" : 0,
    "end_time" : "无限期",
    "inviteUserNum" : 0,
    "alipayId" : "",
    "isGF" : 0,
  }
}
$done({body: JSON.stringify(obj)});
