*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
height:100vh;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#ffd6e8,#fff0f6);
}

.page{
position:absolute;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
opacity:0;
pointer-events:none;
transition:.6s;
}

.page.active{
opacity:1;
pointer-events:auto;
}

.card{
position:relative;
width:90%;
max-width:650px;
padding:40px;
text-align:center;
background:rgba(255,255,255,.45);
backdrop-filter:blur(18px);
border-radius:25px;
box-shadow:0 15px 40px rgba(255,105,180,.2);
overflow:hidden;
}

h1{
font-family:'Pacifico',cursive;
font-size:2.8rem;
color:#ff3d81;
margin-bottom:20px;
}

p{
font-size:18px;
color:#555;
line-height:1.7;
margin-bottom:20px;
}

button{
padding:15px 35px;
border:none;
border-radius:35px;
background:#ff4f92;
color:#fff;
font-size:16px;
cursor:pointer;
transition:.3s;
}

button:hover{
transform:scale(1.08);
background:#ff2f73;
}

#heart{
position:absolute;
left:100px;
top:220px;
font-size:70px;
cursor:pointer;
user-select:none;
transition:left .35s ease, top .35s ease, transform .2s;
animation:beat 1s infinite;
}

#gift{
font-size:100px;
cursor:pointer;
transition:.4s;
}

#gift:hover{
transform:scale(1.15) rotate(10deg);
}

#cake{
position:relative;
width:170px;
height:140px;
margin:25px auto;
}

.cake-body{
position:absolute;
bottom:0;
width:170px;
height:90px;
background:#ff5d96;
border-radius:20px;
}

#flame{
position:absolute;
top:-15px;
left:76px;
width:18px;
height:28px;
background:gold;
border-radius:50%;
box-shadow:0 0 20px orange;
animation:flicker .2s infinite alternate;
}

.gallery img{
width:240px;
height:320px;
object-fit:cover;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.2);
transition:.4s;
}

.gallery img:hover{
transform:scale(1.05);
}

#hearts,
#confetti{
position:fixed;
inset:0;
pointer-events:none;
overflow:hidden;
}

.floating-heart{
position:absolute;
font-size:20px;
animation:float 8s linear forwards;
opacity:.7;
}

.confetti{
position:absolute;
width:10px;
height:16px;
animation:fall 3s linear forwards;
}

@keyframes beat{
0%,100%{transform:scale(1);}
50%{transform:scale(1.15);}
}

@keyframes flicker{
from{transform:scale(.9);}
to{transform:scale(1.1);}
}

@keyframes float{
0%{
transform:translateY(110vh);
}
100%{
transform:translateY(-100px);
}
}

@keyframes fall{
0%{
transform:translateY(-50px) rotate(0);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}
}

@media(max-width:768px){

.card{
padding:25px;
}

h1{
font-size:2rem;
}

#heart{
font-size:60px;
}

.gallery img{
width:180px;
height:240px;
}

}
