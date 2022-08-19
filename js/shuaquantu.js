var obj = JSON.parse($response.body);
var obj = {
  "status": 1,
  "info": {
    "nickName": "6",
    "group": "终身会员",
    "is_agent": "0",
    "end_time": "无限期",
    "is_timeout": false,
    "isGF": 0,
    "m3_num": "0",
    "inviteCode": "",
    "inviteCode_state": 0,
    "alipayName": "",
    "alipayId": "",
    "inviteMoney": 0,
    "inviteBili": 0,
    "inviteUserNum": 0,
    "inviteUserBuyNum": 0,
  }
}
$done({body: JSON.stringify(obj)});
