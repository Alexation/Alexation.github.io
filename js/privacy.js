<script>// 获取ip
function getIpInfo(){
  var fetchUrl = "https://api.qjqq.cn/api/Local"
  fetch(fetchUrl)
    .then(res => res.json())
    .then(json =>{
      var country = json.country;
      var ip = json.ip;
      var province = json.province;
      var city = json.city;
      var isp = json.isp;
      document.getElementById("userAgentIp").innerHTML = ip;
      document.getElementById("userAgentCountry").innerHTML = json.data.country;
      document.getElementById("userAgentRegion").innerHTML = json.data.prov;
      document.getElementById("userAgentCity").innerHTML = json.data.city;
      document.getElementById("userAgentIsp").innerHTML = json.data.isp;
      var uaInfo = navigator.userAgent;
      document.getElementById("userAgentDevice").innerHTML = uaInfo;
    })
}
getIpInfo()
</script>