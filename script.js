const no = document.getElementById("no");
const yes = document.getElementById("yes");

no.addEventListener("mouseover", () => {

const x = Math.random() * (window.innerWidth - 120);
const y = Math.random() * (window.innerHeight - 60);

no.style.left = x + "px";
no.style.top = y + "px";

});

yes.addEventListener("click", () => {

document.body.innerHTML = `
<div style="text-align:center;margin-top:100px;">

<h1 style="font-size:60px;color:#ff1493;">
Yay!! ❤️
</h1>

<h2>You've made me the happiest person! 🥰</h2>

<img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="300">

</div>
`;

});