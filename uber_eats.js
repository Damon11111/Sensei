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

document.addEventListener('DOMContentLoaded', (event) => {
  // 检查URL查询参数
  
  const urlParams = new URLSearchParams(window.location.search);
  const shouldTriggerPost = urlParams.get('triggerPost');
  const shouldTriggerPostInput = urlParams.get('triggerInput');

  if (shouldTriggerPost) {
    const postButton = document.getElementById('Post');
    if (postButton) {
      postButton.click(); // 如果参数存在，触发点击事件
    }
  }
  if(shouldTriggerPostInput){
    var title = urlParams.get('title');
    var userName = urlParams.get('name');
    var postContent = urlParams.get('content');
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${title}</h5> 
        <p>${userName}</p>
        <p>${postContent}</p>
        <div class="icon-bar">
          <i id = "likeIcon2" class="fa fa-book"></i><span>0</span>
          <i class="far fa-comment"></i><span>0</span>
          <i class="far fa-eye"></i><span>0</span>
        </div>
      </div>
    `;
    
    var postsContainer = document.getElementById('Post_page');
    postsContainer.appendChild(newCard);
    postsContainer.style.display = 'block';

    document.getElementById('user-name').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-form').style.display = 'none';
  }
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
  name: "David",
  content: "The coupon calculation is mainly based on your existing...",
  likes: 42,
  comments: 18,
  views: 1234,
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
likeIcon.addEventListener("click", function() {
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



document.getElementById('PlusIcon').addEventListener('click', function() {

  // document.getElementById('post-form').style.display = 'block';
  window.location.href = 'Input.html';
});


document.getElementById('submit-post-btn').addEventListener('click', function() {
  var userName = document.getElementById('user-name').value;
  var postContent = document.getElementById('post-content').value;


  if (userName.trim() && postContent.trim()) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${postContent}</h5> 
        <p>${userName}</p>
        <div class="icon-bar">
          <i class="fa fa-book"></i><span>0</span>
          <i class="far fa-comment"></i><span>0</span>
          <i class="far fa-eye"></i><span>0</span>
        </div>
      </div>
    `;

    var postsContainer = document.getElementById('Post_page');
    postsContainer.appendChild(newCard);
    postsContainer.style.display = 'block';

    document.getElementById('user-name').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-form').style.display = 'none';
  } else {
    alert('Please enter some text for the post.');
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//   // 获取红色书标图标
//   var bookIcon = document.getElementById('cancelIcon');

//   // 检查是否找到图标
//   if (bookIcon) {
//     // 为图标添加点击事件监听器
//     bookIcon.addEventListener('click', function() {
//       // 找到包含图标的最近的.col元素，即卡片容器
//       var collectContainer = bookIcon.closest('.col');

//       // 检查是否找到卡片容器
//       if (collectContainer) {
//         // 移除卡片容器
//         collectContainer.remove();
//       }
//     });
//   }
// });









