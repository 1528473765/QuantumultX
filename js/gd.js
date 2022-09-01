/*
果冻app 
下载地址：https://gd.ihunl.com/?code=dgYa

[rewrite_local]

#果冻app
^http[s]?:\/\/。+\.(pgnktni|izivuiw)\.cn\/(.+)\/api\/user\/userInfo url script-response-body gd.js




主机名MITM

*.pgnktni。*


*/


var obj = JSON.parse($response.body);

obj.data =
"IPG0VSU6DsxkZT5BvffOHZgM4pOnPOKZhM7\/HKpB15gHBAYMj9WiEjfD5QG2b0fclqkAFWwoIOmfWQxQonlLqI5gsYvlMXuQjAMp9XxUGKeaSuMI8jyt+L566SP4EuLOTMkBq0xMq7cdGxKAImwDUpGHpUDVak7\/C1RkmGbdb9EeBx\/B\/nU5OTxNvCyMUvcKCV5hvMATQRigcP+XL5nXSCMUN7e2Zo0Uyt4umYzT8mDsXOyI

$done({body: JSON.stringify(obj)});
