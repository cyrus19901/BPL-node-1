var fs = require('fs');
var path = require('path');
var file = path.join(__dirname, '../newconfig.mainnet.json');

try {
  //read newconfig.mainnet.json
  var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  //change port number and seed peers list
  obj["port"] = 9030;
  obj["peers"]["list"] = [
    {"ip": "13.56.163.57","port": 9030},
    {"ip": "54.183.132.15","port": 9030},
    {"ip": "54.183.69.30","port": 9030},
    {"ip": "54.183.152.67","port": 9030},
    {"ip": "54.183.22.145","port": 9030},
    {"ip": "54.183.209.94","port": 9030},
    {"ip": "54.153.89.97","port": 9030},
    {"ip": "54.153.120.24","port": 9030},
    {"ip": "54.67.117.224","port": 9030},
    {"ip": "54.241.156.232","port": 9030},
    {"ip": "54.193.61.26","port": 9030},
    {"ip": "54.67.92.59","port": 9030},
    {"ip": "54.67.7.8","port": 9030},
    {"ip": "54.193.96.185","port": 9030},
    {"ip": "54.193.74.250","port": 9030},
    {"ip": "54.67.93.228","port": 9030},
    {"ip": "54.183.21.26","port": 9030},
    {"ip": "54.153.44.24","port": 9030},
    {"ip": "54.241.140.106","port": 9030},
    {"ip": "54.153.117.209","port": 9030},
    {"ip": "34.212.34.162","port": 9030},
    {"ip": "54.202.206.227","port": 9030},
    {"ip": "54.202.150.236","port": 9030},
    {"ip": "54.203.87.49","port": 9030},
    {"ip": "54.245.150.234","port": 9030},
    {"ip": "54.186.230.45","port": 9030},
    {"ip": "54.191.86.175","port": 9030},
    {"ip": "34.212.31.213","port": 9030},
    {"ip": "54.218.159.117","port": 9030},
    {"ip": "34.212.30.116","port": 9030},
    {"ip": "34.211.228.214","port": 9030},
    {"ip": "34.212.82.55","port": 9030},
    {"ip": "54.186.13.135","port": 9030},
    {"ip": "54.202.194.76","port": 9030},
    {"ip": "34.212.0.73","port": 9030},
    {"ip": "54.202.119.251","port": 9030},
    {"ip": "34.211.228.49","port": 9030},
    {"ip": "34.209.90.25","port": 9030},
    {"ip": "54.202.82.94","port": 9030},
    {"ip": "54.186.154.168","port": 9030},
    {"ip": "13.229.63.39","port": 9030},
    {"ip": "54.251.182.246","port": 9030},
    {"ip": "13.229.74.206","port": 9030},
    {"ip": "52.221.253.179","port": 9030},
    {"ip": "54.255.169.132","port": 9030},
    {"ip": "54.169.255.105","port": 9030},
    {"ip": "54.169.34.115","port": 9030}];

  var json = JSON.stringify(obj);
  //write to newconfig.mainnet.json
  fs.writeFile(file, json);

} catch (e) {
    console.log('Inside Catch block', e);
}