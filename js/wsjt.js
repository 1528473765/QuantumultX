let ret = JSON.parse($response.body);
ret.data.userinfo.vip = "1";
ret.data.userinfo.vip_type = "1";
ret.data.userinfo.vip_et = "2099-12-31 到期";
ret.data.userinfo.score = "9999";
$done({body: JSON.stringify(ret)});
