/* =========================================================
   显示逻辑文件 —— 负责把 content.js 里的内容显示到页面上。
   这个文件你不用动,看不懂也没关系。
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const c = siteContent;

  // 顶部名字 + 一句话
  setText("js-name", c.name);
  setText("js-tagline", c.tagline);

  // 关于我
  setText("js-about", c.about);

  // 作品列表:循环生成一张张卡片
  const worksBox = document.getElementById("js-works");
  if (worksBox) {
    worksBox.innerHTML = c.works.map(function (item) {
      return (
        '<div class="card">' +
        "<h3>" + escapeHtml(item.标题) + "</h3>" +
        "<p>" + escapeHtml(item.介绍) + "</p>" +
        "</div>"
      );
    }).join("");
  }

  // 联系我
  const contactBox = document.getElementById("js-contact");
  if (contactBox) {
    contactBox.innerHTML =
      "<p>微信:" + escapeHtml(c.contact.微信) + "</p>" +
      "<p>邮箱:" + escapeHtml(c.contact.邮箱) + "</p>" +
      "<p>" + escapeHtml(c.contact.结尾的话) + "</p>";
  }

  // 页脚
  setText("js-footer", c.footer);
});

// —— 下面是两个小工具函数 ——

// 把文字填进指定位置
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// 安全处理文字,防止特殊符号把页面弄乱
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
