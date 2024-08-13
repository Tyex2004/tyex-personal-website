document.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var maxScroll = 300;
  var opacity = Math.max(0, 1 - scrollTop / maxScroll);
  
  navbar.style.opacity = opacity;
  
  if (opacity < 0.1) {
    navbar.style.pointerEvents = 'none';
  } else {
    navbar.style.pointerEvents = 'auto';
  }
});
document.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollTop > 50) {
    scrollIndicator.style.display = 'none';
  } else {
    scrollIndicator.style.display = 'block';
  }
});
// script.js
document.addEventListener('DOMContentLoaded', (event) => {
  const textElement = document.getElementById('typing-text'); // 文本元素
  const cursorElement = document.getElementById('cursor'); // 光标元素
  const text = "在这里，我会以GIS学者的身份记录我的学习心得，并分享一些GIS相关的资源。用电脑访问更佳。";
  let index = 0; // 字符索引

  function type() {
      if (index < text.length) {
          textElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100); // 调整打字速度
      } else {
          cursorElement.style.display = 'none'; // 隐藏光标
      }
  }

  type();
});
