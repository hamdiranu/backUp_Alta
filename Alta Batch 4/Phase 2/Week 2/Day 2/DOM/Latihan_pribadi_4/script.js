// ================= membentuk div id="content" ==================== //
const divIdContent = document.createElement("div");
divIdContent.id = "content"
document.getElementById("main").appendChild(divIdContent);

// ================= membentuk div class="content-post" ==================== //
const divClassContentPost = document.createElement("div");
divClassContentPost.className = "content-post"
document.getElementById("content").appendChild(divClassContentPost);

const divClassContentPost2 = document.createElement("div");
divClassContentPost2.className = "content-post"
document.getElementById("content").appendChild(divClassContentPost2);

// ================= membentuk isi div class="content-post pertama" ==================== //
// h1
const hJudulPost = document.createElement("h1");
hJudulPost.innerHTML="Judul Post"
divClassContentPost.appendChild(hJudulPost);

// span
const spanPublish = document.createElement("span");
spanPublish.innerHTML="Published on 12 May 2016"
divClassContentPost.appendChild(spanPublish);

// p
const pContentPost1 = document.createElement("p");
pContentPost1.innerHTML="Lorem Ipsum Dolor Sit Amet"
divClassContentPost.appendChild(pContentPost1);

// button
const buttonContentPost1 = document.createElement("button");
buttonContentPost1.className = "share-post-btn"
buttonContentPost1.innerHTML="Share this Post"
divClassContentPost.appendChild(buttonContentPost1);

buttonContentPost1.addEventListener("click", function(){
    alert('You have shared this post');
  });

// ================= membentuk isi div class="content-post kedua" ==================== //
// h1
const hJudulPost2 = document.createElement("h1");
hJudulPost2.innerHTML="Judul Post 2"
divClassContentPost2.appendChild(hJudulPost2);

// span
const spanPublish2 = document.createElement("span");
spanPublish2.innerHTML="Published on 13 May 2016"
divClassContentPost2.appendChild(spanPublish2);

// p
const pContentPost2 = document.createElement("p");
pContentPost2.innerHTML="Lorem Ipsum Dolor Sit Amet"
divClassContentPost2.appendChild(pContentPost2);

// button
const buttonContentPost2 = document.createElement("button");
buttonContentPost2.className = "share-post-btn"
buttonContentPost2.innerHTML="Share this Post"
divClassContentPost2.appendChild(buttonContentPost2);

buttonContentPost2.addEventListener("click", function(){
    alert('You have shared this post');
  });
