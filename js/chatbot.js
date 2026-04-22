(function () {
  // ── Styles ──────────────────────────────────────────────────────────────────
  var css = `
    #zc-widget { position:fixed; bottom:24px; right:24px; z-index:999999; display:flex; flex-direction:column; align-items:flex-end; }
    #zc-label {
      background:#26277A; color:#fff; padding:9px 16px; border-radius:22px;
      font-size:15px; font-weight:700; letter-spacing:.01em; line-height:1.4;
      margin-bottom:12px; white-space:nowrap; box-shadow:0 4px 14px rgba(0,0,0,.25);
      font-family:'Space Grotesk','Inter',system-ui,sans-serif;
      animation:zcFloat 3s ease-in-out infinite; cursor:pointer;
    }
    #zc-btn {
      width:62px; height:62px; border-radius:50%; border:none; cursor:pointer;
      background:linear-gradient(135deg,#26277A 0%,#00DCFC 100%);
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 6px 20px rgba(38,39,122,.45); transition:transform .2s, box-shadow .2s;
      animation:zcPulse 2.8s ease-out infinite;
    }
    #zc-btn:hover { transform:scale(1.08); box-shadow:0 8px 28px rgba(38,39,122,.6); animation:none; }
    #zc-btn svg { width:30px; height:30px; }
    @keyframes zcPulse {
      0%   { box-shadow:0 6px 20px rgba(38,39,122,.45), 0 0 0 0 rgba(0,220,252,.45); }
      60%  { box-shadow:0 6px 20px rgba(38,39,122,.45), 0 0 0 14px rgba(0,220,252,0); }
      100% { box-shadow:0 6px 20px rgba(38,39,122,.45), 0 0 0 0 rgba(0,220,252,0); }
    }
    #zc-win {
      position:fixed; bottom:100px; right:24px; width:360px;
      background:#fff; border-radius:18px; box-shadow:0 12px 40px rgba(0,0,0,.2);
      display:none; flex-direction:column; overflow:hidden; z-index:999999;
      font-family:'Space Grotesk','Inter',system-ui,sans-serif;
    }
    #zc-head {
      background:linear-gradient(135deg,#26277A 0%,#00DCFC 100%);
      color:#fff; padding:16px 18px; display:flex; align-items:center; gap:12px;
    }
    #zc-head-ico {
      width:42px; height:42px; background:rgba(255,255,255,.2); border-radius:50%;
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
    }
    #zc-head-ico svg { width:26px; height:26px; }
    #zc-head-text h3 { margin:0; font-size:16px; font-weight:700; display:flex; align-items:center; gap:7px; }
    #zc-head-text p  { margin:4px 0 0; font-size:12px; opacity:.85; }
    #zc-online { width:9px; height:9px; background:#22d36b; border-radius:50%; display:inline-block; flex-shrink:0; box-shadow:0 0 0 2px rgba(34,211,107,.35); }
    #zc-close { margin-left:auto; background:none; border:none; color:#fff; font-size:22px; cursor:pointer; opacity:.8; line-height:1; padding:0 2px; }
    #zc-close:hover { opacity:1; }
    #zc-msgs {
      flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column;
      gap:10px; max-height:340px; background:#f4f5ff;
    }
    .zc-m { max-width:82%; padding:10px 14px; border-radius:14px; font-size:14px; line-height:1.55; word-wrap:break-word; }
    .zc-bot { background:#fff; border:1px solid #dde0f5; align-self:flex-start; border-radius:4px 14px 14px 14px; color:#1a1a2e; }
    .zc-usr { background:#26277A; color:#fff; align-self:flex-end; border-radius:14px 4px 14px 14px; }
    #zc-input-row { display:flex; padding:12px; gap:8px; background:#fff; border-top:1px solid #eee; }
    #zc-input {
      flex:1; border:1.5px solid #dde0f5; border-radius:24px; padding:10px 16px;
      font-size:14px; outline:none; font-family:inherit; color:#1a1a2e;
      transition:border-color .2s;
    }
    #zc-input:focus { border-color:#26277A; }
    #zc-send {
      width:42px; height:42px; background:#26277A; border:none; border-radius:50%;
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      flex-shrink:0; transition:background .2s;
    }
    #zc-send:hover { background:#00DCFC; }
    #zc-send svg { width:18px; height:18px; fill:#fff; }
    .zc-typing { display:flex; gap:5px; align-items:center; padding:8px 4px; }
    .zc-typing span {
      width:8px; height:8px; background:#26277A; border-radius:50%;
      animation:zcBounce 1.1s infinite; opacity:.7;
    }
    .zc-typing span:nth-child(2) { animation-delay:.18s; }
    .zc-typing span:nth-child(3) { animation-delay:.36s; }
    @keyframes zcBounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-7px)} }
    @keyframes zcFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
    @media(max-width:480px){
      #zc-win { width:calc(100vw - 32px); right:16px; bottom:92px; }
      #zc-widget { right:16px; bottom:16px; }
    }
  `;
  var s = document.createElement('style');
  s.textContent = css;
  document.head.appendChild(s);

  // ── Button icon: chat bubble with AI sparkle inside ──────────────────────────
  var sparkSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">'
    // Chat bubble body with tail bottom-left
    + '<path d="M4 2H20Q22 2 22 4V14Q22 16 20 16H9L4 21V16Q2 16 2 14V4Q2 2 4 2Z" fill="white"/>'
    // AI sparkle inside bubble (dark blue so it reads on white)
    + '<path d="M12 5.5L12.9 8.6L16 9.5L12.9 10.4L12 13.5L11.1 10.4L8 9.5L11.1 8.6Z" fill="#26277A" opacity="0.75"/>'
    // Tiny secondary sparkle top-right
    + '<path d="M18 4.5L18.5 6L20 6.5L18.5 7L18 8.5L17.5 7L16 6.5L17.5 6Z" fill="#26277A" opacity="0.45"/>'
    + '</svg>';

  // ── Header icon: matching chat bubble, white palette ─────────────────────────
  var headSVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">'
    + '<path d="M4 2H20Q22 2 22 4V14Q22 16 20 16H9L4 21V16Q2 16 2 14V4Q2 2 4 2Z" fill="white"/>'
    + '<path d="M12 5.5L12.9 8.6L16 9.5L12.9 10.4L12 13.5L11.1 10.4L8 9.5L11.1 8.6Z" fill="rgba(38,39,122,0.7)"/>'
    + '</svg>';

  // ── Send arrow ───────────────────────────────────────────────────────────────
  var sendSVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>';

  // ── DOM ──────────────────────────────────────────────────────────────────────
  var widget = document.createElement('div');
  widget.id = 'zc-widget';
  widget.innerHTML = '<div id="zc-label">Talk to an advisor</div>'
    + '<button id="zc-btn" aria-label="Open Zerocode AI chat">' + sparkSVG + '</button>';
  document.body.appendChild(widget);

  var win = document.createElement('div');
  win.id = 'zc-win';
  win.setAttribute('role', 'dialog');
  win.setAttribute('aria-label', 'Zerocode AI Chat');
  win.innerHTML = '<div id="zc-head">'
    + '<div id="zc-head-ico">' + headSVG + '</div>'
    + '<div id="zc-head-text"><h3>Nathan <span id="zc-online"></span></h3><p>Senior Advisor · ZEROCODE</p></div>'
    + '<button id="zc-close" aria-label="Close chat">&#x2715;</button>'
    + '</div>'
    + '<div id="zc-msgs">'
    + '<div class="zc-m zc-bot">What\'s currently breaking as your volume increases?</div>'
    + '</div>'
    + '<div id="zc-input-row">'
    + '<input id="zc-input" type="text" placeholder="Type your message…" autocomplete="off" aria-label="Chat message"/>'
    + '<button id="zc-send" aria-label="Send">' + sendSVG + '</button>'
    + '</div>';
  document.body.appendChild(win);

  // ── Logic ────────────────────────────────────────────────────────────────────
  var label   = document.getElementById('zc-label');
  var btn     = document.getElementById('zc-btn');
  var msgs    = document.getElementById('zc-msgs');
  var input   = document.getElementById('zc-input');
  var send    = document.getElementById('zc-send');
  var closeB  = document.getElementById('zc-close');
  var isOpen  = false;
  var history = [];

  function toggle() {
    isOpen = !isOpen;
    win.style.display    = isOpen ? 'flex' : 'none';
    label.style.display  = isOpen ? 'none' : 'block';
    if (isOpen) setTimeout(function(){ input.focus(); }, 50);
  }

  btn.addEventListener('click', toggle);
  label.addEventListener('click', toggle);
  closeB.addEventListener('click', toggle);

  function addMsg(text, role) {
    var d = document.createElement('div');
    d.className = 'zc-m zc-' + (role === 'user' ? 'usr' : 'bot');
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function showTyping() {
    var d = document.createElement('div');
    d.className = 'zc-m zc-bot zc-typing';
    d.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function sendMsg() {
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    input.disabled = true;
    send.disabled  = true;
    addMsg(text, 'user');
    history.push({ role: 'user', content: text });
    var typing = showTyping();

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, history: history.slice(-8) })
    })
    .then(function(r){ return r.json(); })
    .then(function(data) {
      typing.remove();
      var reply = data.reply || 'Sorry, I could not get a response.';
      addMsg(reply, 'bot');
      history.push({ role: 'assistant', content: reply });
    })
    .catch(function() {
      typing.remove();
      addMsg('Sorry, something went wrong. Please try again later.', 'bot');
    })
    .finally(function() {
      input.disabled = false;
      send.disabled  = false;
      input.focus();
    });
  }

  send.addEventListener('click', sendMsg);
  input.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMsg(); });
})();
