(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=()=>{const t=JSON.parse(localStorage.getItem("user"))||{username:"",email:"",bio:""},s=document.createElement("div");s.className="bg-gray-100 min-h-screen flex justify-center";const a=document.createElement("div");a.className="max-w-md w-full";const l=document.createElement("main");l.className="p-4",l.innerHTML=`
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
        내 프로필
      </h2>
      <form id="profile-form">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
            사용자 이름
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value="${t.username}"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value="${t.email}"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-6">
          <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">
            자기소개
          </label>
          <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${t.bio}</textarea>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">
          프로필 업데이트
        </button>
      </form>
    </div>
  `;const e=l.querySelector("#profile-form");return e==null||e.addEventListener("submit",r=>{var o,i,c;r.preventDefault();const n={username:((o=l.querySelector("#username"))==null?void 0:o.value)??"",email:((i=l.querySelector("#email"))==null?void 0:i.value)??"",bio:((c=l.querySelector("#bio"))==null?void 0:c.value)??""};localStorage.setItem("user",JSON.stringify(n)),alert("프로필이 업데이트되었습니다.")}),a.appendChild(l),s.appendChild(a),s},u=({state:t,navigate:s})=>{const a=document.createElement("div");a.innerHTML=`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
          항해플러스
        </h1>
        <form id="login-form">
          <div class="mb-4">
            <input
              type="text"
              id="username"
              placeholder="사용자 이름"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              id="pass"
              placeholder="비밀번호"
              class="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            id="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            로그인
          </button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6" />
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
            새 계정 만들기
          </button>
        </div>
      </div>
    </main>
  `;const l=a.querySelector("#login-form"),e=a.querySelector("#username");return l==null||l.addEventListener("submit",r=>{r.preventDefault();const n=e.value.trim();if(!n)return;const o={username:n,email:"",bio:""};localStorage.setItem("user",JSON.stringify(o)),t.loggedIn=!0,t.user=o,s("/")}),a},m=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div
      class="bg-white p-8 rounded-lg shadow-md w-full text-center"
      style="max-width: 480px"
    >
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,b=()=>{const t=document.createElement("div");return t.className="bg-gray-100 min-h-screen flex justify-center",t.innerHTML=`
    <div class="max-w-md w-full">
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea
            class="w-full p-2 border rounded"
            placeholder="무슨 생각을 하고 계신가요?"
          ></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            게시
          </button>
        </div>

        <div class="space-y-4">
          ${[{name:"홍길동",time:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{name:"김철수",time:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{name:"이영희",time:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{name:"박민수",time:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{name:"정수연",time:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}].map(s=>`
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2" />
                <div>
                  <p class="font-bold">${s.name}</p>
                  <p class="text-sm text-gray-500">${s.time}</p>
                </div>
              </div>
              <p>${s.content}</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          `).join("")}
        </div>
      </main>
    </div>
  `,t},p=({loggedIn:t})=>{const s=document.createElement("div");return s.innerHTML=`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
          <a href="/" class="${location.pathname==="/"?"text-blue-600":"text-gray-600"}">홈</a>
        </li>
        ${t?`
            <li><a href="/profile" class="${location.pathname==="/profile"?"text-blue-600":"text-gray-600"}">프로필</a></li>
            <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
          `:'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
      </ul>
    </nav>
  `,s},f=()=>{const t=document.createElement("footer");return t.className="bg-gray-200 p-4 text-center",t.innerHTML=`
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  `,t};export{m as E,f as F,p as H,u as L,b as M,d as P};
