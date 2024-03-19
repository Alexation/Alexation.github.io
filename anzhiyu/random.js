var posts=["trans/how-we-lost-54k-github-stars/","blog/1/","competition/nuedc_3/","ee/PowerOutage/","competition/ICM/","competition/MCM/","project/AirWifi/","competition/nuedc_2/","python/some-demo/","python/data-base/","web/mysql/","web/fastapi/","web/Yiqing/","javascript/JsCoder/","python/Coder/","web/Ajax/","javascript/JavaScript-Base/","web/Vue/","python/pythonwebcatch-pyside2/","competition/nuedc_1/","web/Permeate/","web/CSS/","web/HTML/","python/pythonwebcatch-scrapy/","python/Pyside2/","python/Python-catch-base/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"UNOHE","link":"https://www.unohe.com","avatar":"../favicon.png","descr":"你要不要看看我","recommend":true},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"CTGU","link":"https://www.ctgu.edu.cn/","avatar":"../media/ivipc.png","descr":"三峡大学官方网址","recommend":false},{"name":"Blinkfox","link":"https://blinkfox.github.io","avatar":"https://blinkfox.github.io/medias/avatar.jpg","descr":"闪烁之狐大佬做的hexo主题很棒，人也比较好！","recommend":false},{"name":"WTY@blog","link":"https://wty2002.github.io/","avatar":"https://cdn.jsdelivr.net/gh/WTY2002/img-host@main/imgtouxiang.jpg","descr":"关于他的一点点……","recommend":false},{"name":"ZheWana`s","link":"https://zhewana.cn/","avatar":"https://zhewana.cn/wp-content/uploads/2022/12/ZheWanaLogo.png","descr":"初心未泯","recommend":false},{"name":"洪卫の博客","link":"https://sunhwee.com/","avatar":"https://sunhwee.com/favicon.jpg","descr":"深度驿站","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };