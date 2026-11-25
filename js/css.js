
const body = $response.body;

if (!body) {
  $done({});
}

try {
  let obj = JSON.parse(body);

  if (obj.data && obj.data.userinfo) {
    const user = obj.data.userinfo;

    user.vip = "1";
    user.vip_type = "1";
    user.vip_et = "永久会员";
    user.vip_et_t = "4102444800";

    obj.data.userinfo = user;
  }

  $done({
    body: JSON.stringify(obj)
  });

} catch (e) {
  $done({});
}
