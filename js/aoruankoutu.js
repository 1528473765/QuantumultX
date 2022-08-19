var obj = JSON.parse($response.body);
var obj = {
  "status": 200,
  "message": "success",
  "data": {
    "license_type" : "premium",
    "period_type" : "active",
    "is_activated": 1,
    "begin_activated_time" : 1645798296,
    "remain_days" : 99999,
    "is_lifetime": 1,
    "expired_at" : 4045798296,
    "expire_time": "2099-01-01 00:00:00",
    "product_id" : 369,
    "device_id" : 600150864,
    "vip_special" : 1
  }
}
$done({body: JSON.stringify(obj)});
