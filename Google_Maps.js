// 获取文本元素
const Guidance = document.getElementById('Guidance');
const Post = document.getElementById('Post');


document.getElementById('Post').addEventListener('click', function() {
  // 显示 "PlusIcon"
  PlusIcon.style.display = 'block';

  // 移除下划线类
  Post.classList.remove('underline');
  // 添加下划线类到第二个文本
  Post.classList.add('underline');
  // 移除下划线类从第一个文本
  Guidance.classList.remove('underline');

  var Post_page = document.getElementById('Post_page');
  var Guidance_page = document.getElementById('Guidance_page');
  Post_page.style.display = Post_page.style.display === 'none' ? 'block' : 'none';
  Guidance_page.style.display = 'none';
});

document.getElementById('Guidance').addEventListener('click', function() {
  // 隐藏 "PlusIcon"
  PlusIcon.style.display = 'none';

  // 移除下划线类
  Guidance.classList.remove('underline');
  // 添加下划线类到第一个文本
  Guidance.classList.add('underline');
  // 移除下划线类从第二个文本
  Post.classList.remove('underline');

  var Guidance_page = document.getElementById('Guidance_page');
  var Post_page = document.getElementById('Post_page');
  Guidance_page.style.display = Guidance_page.style.display === 'none' ? 'block' : 'none';
  Post_page.style.display = 'none';
});







// 获取卡片中各个元素的引用
const userName = document.getElementById("userName");
const questionContent = document.getElementById("questionContent");
const likeCount = document.getElementById("likeCount");
const commentCount = document.getElementById("commentCount");
const viewCount = document.getElementById("viewCount");



// 模拟获取新数据（假设这是从服务器获取的数据）
const newData = {
  name: "John",
  content: "First, find the mall icon on the main interface...",
  likes: 22,
  comments: 11,
  views: 151,
};

// 更新卡片内容
userName.textContent = newData.name;
questionContent.textContent = newData.content;
likeCount.textContent = newData.likes;
commentCount.textContent = newData.comments;
viewCount.textContent = newData.views;



// 获取卡片中的元素引用
const likeIcon = document.getElementById("likeIcon");
// const likeCount = document.getElementById("likeCount");

// 初始化收藏状态
let isLiked = false;


// 点击图标时触发的事件
likeIcon.addEventListener("click", function () {
  var icon = document.getElementById('likeIcon');
  if (!isLiked) {
    // 如果尚未收藏，执行收藏操作
    if (icon.style.color === 'red') {
      icon.style.color = ''; // 如果是，移除颜色设置，回到默认颜色
    } else {
      icon.style.color = 'red'; // 如果不是，设置为红色
    }
    likeCount.textContent = parseInt(likeCount.textContent) + 1; // 更新收藏数量
    isLiked = true; // 设置为已收藏状态
  } else {
    // 如果已经收藏，执行取消收藏操作
    if (icon.style.color === 'red') {
      icon.style.color = ''; // 如果是，移除颜色设置，回到默认颜色
    } else {
      icon.style.color = 'red'; // 如果不是，设置为红色
    }
    likeCount.textContent = parseInt(likeCount.textContent) - 1; // 更新收藏数量
    isLiked = false; // 设置为未收藏状态
  }
});







