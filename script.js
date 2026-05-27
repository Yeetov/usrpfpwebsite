const modData = {
    equicord: {
        logo: "https://equicord.org/assets/favicon.png",
        desc: "Equicord includes UserPFP as a built-in plugin. Go to <b>Settings &rarr; Plugins</b>, search for <b>UserPFP</b>, and enable it.",
        code: null
    },
    vencord: {
        logo: "https://equicord.org/assets/icons/vencord/icon.png",
        desc: "Vencord uses a theme-based implementation. Copy the link and paste it into <b>Settings &rarr; Themes &rarr; Online Themes</b>.",
        code: "https://raw.githubusercontent.com/UserPFP/UserPFP/main/userpfp.theme.css"
    },
    betterdiscord: {
        logo: "https://equicord.org/assets/icons/archive/betterdiscord/icon.png",
        title: "Web-Based / BetterDiscord",
        desc: "Add the import line to the top of your <b>Custom CSS / QuickCSS</b> file. The CSS implementation is not recommended when a plugin option is available.",
        code: "@import url('https://raw.githubusercontent.com/UserPFP/UserPFP/main/userpfp.theme.css');"
    },
    replugged: {
        logo: "https://equicord.org/assets/icons/archive/replugged/icon-background.png",
        desc: "Install UserPFP directly from the official Replugged plugin store.",
        link: "https://replugged.dev/store/dev.WolfPlugs.UserPFP"
    },
    aliucord: {
        logo: "https://equicord.org/assets/icons/archive/aliucord/icon.png",
        desc: "Download the plugin file from the link below and place it in your Aliucord plugins folder.",
        link: "https://github.com/OmegaSunkey/awesomeplugins/raw/builds/UserPFP.zip"
    },
    vendetta: {
        logo: "https://equicord.org/assets/icons/archive/vendetta/icon.png",
        desc: "Copy the plugin URL and add it to your plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    },
    shelter: {
        logo: "https://equicord.org/assets/icons/archive/shelter/icon.png",
        desc: "Add this URL to your Shelter plugins.",
        link: "https://spikehd.dev/shelter-plugins/userpfp/"
    },
    bunny: {
        logo: "https://equicord.org/assets/icons/archive/bunny/icon.png",
        desc: "Copy the plugin URL and add it to your Bunny plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    },
    revenge: {
        logo: "https://equicord.org/assets/icons/archive/revenge/icon.png",
        desc: "Copy the plugin URL and add it to your Revenge plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    },
    kettu: {
        logo: "https://equicord.org/assets/icons/archive/kettu/icon.png",
        desc: "Copy the plugin URL and add it to your Kettu plugins list.",
        link: "https://revenge.nexpid.xyz/userpfp"
    }
};

const staffIds = [
    "406084422308331522","789872551731527690","853550207039832084",
    "848339671629299742","500212086765518858","250322741406859265",
    "929208515883569182","258731845267619840","1180778779682033715",
    "1124647765075566662","613725399263739926","422319200095436800"
];

const manualBanners = {
    "406084422308331522": "https://i.imgur.com/vzyxjz8.gif",
    "789872551731527690": "https://i.imgur.com/U3xaMjR.gif",
    "853550207039832084": "https://i.ibb.co/MBY0qxx/nexpid.gif",
    "848339671629299742": "https://i.imgur.com/FiRr8Lj.png",
    "500212086765518858": "https://i.imgur.com/bAuCtgB.png",
    "250322741406859265": "https://i.imgur.com/mkTL1S8.png",
    "929208515883569182": "https://i.imgur.com/ZflpQQ3.png",
    "258731845267619840": "https://i.imgur.com/2mitqtb.png"
};

const customPfps = {};
let usrbgData = null;
let wizardSteps = [];
let currentStep = 0;
let mobileOpen = false;

// --- INIT ---

function init() {
    renderMods();
    renderDropdown();
    handleRoute();

    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    window.addEventListener('click', () => {
        const m = document.getElementById('clientDropdown');
        if (m?.classList.contains('show')) m.classList.remove('show');
    });
    document.getElementById('infoModal').addEventListener('click', e => {
        if (e.target.id === 'infoModal') closeModal();
    });

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    if (window.innerWidth > 768) loadBackgroundPfps();
    loadPageData();
}

// --- ROUTING ---

function handleRoute() {
    let view = window.location.hash.replace('#', '') || 'home';
    if (!['home', 'staff'].includes(view)) view = 'home';

    if (view !== 'home') window.scrollTo({ top: 0, behavior: 'instant' });

    document.querySelectorAll('.nav-link[data-view]').forEach(l => {
        l.classList.toggle('active', l.dataset.view === view);
    });
    document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
    document.getElementById(`${view}-view`).classList.add('active');

    document.getElementById('bgAnim').style.display = view === 'home' ? '' : 'none';
    if (view === 'staff' && !window.staffLoaded) loadStaff();

    setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        });
    }, 60);
}

// --- MOBILE MENU ---

function toggleMobileMenu() {
    mobileOpen = !mobileOpen;
    document.getElementById('mobileMenu').classList.toggle('open', mobileOpen);
    document.getElementById('hamburger').classList.toggle('open', mobileOpen);
}

function closeMobileMenu() {
    mobileOpen = false;
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

// --- DATA LOADING ---

async function loadPageData() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/Yeetov/usrpfpwebsite/main/source/data.json');
        const data = await res.json();
        const avatars = data.avatars || {};
        animateCount('statProfiles', Object.keys(avatars).length);

        const urls = Object.values(avatars).filter(u => u.startsWith('http') && !u.includes('profileBadges'));
        if (urls.length) {
            document.getElementById('demoAvatar').src = urls[Math.floor(Math.random() * Math.min(urls.length, 30))];
        }
    } catch {}
}

function animateCount(id, target) {
    const el = document.getElementById(id);
    if (!el) return;
    const dur = 1400, start = performance.now();
    const tick = now => {
        const t = Math.min((now - start) / dur, 1);
        const val = Math.round((1 - Math.pow(1 - t, 3)) * target);
        el.textContent = val >= 1000 ? (val / 1000).toFixed(1) + 'K+' : val + '+';
        if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

// --- TOAST ---

function showToast(msg) {
    const c = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => {
        t.classList.add('out');
        setTimeout(() => t.remove(), 280);
    }, 2400);
}

// --- MOD GRID ---

function renderMods() {
    const g = document.getElementById('modGrid');
    Object.entries(modData).forEach(([key, data]) => {
        const b = document.createElement('div');
        b.className = 'mod-btn';
        b.innerHTML = `<img src="${data.logo}" alt="${key}"><span class="mod-label">${key[0].toUpperCase() + key.slice(1)}</span>`;
        b.onclick = () => openModal(key, data);
        g.appendChild(b);
    });
}

// --- DROPDOWN ---

function renderDropdown() {
    const menu = document.getElementById('clientDropdown');
    if (!menu) return;
    menu.innerHTML = `
        <div class="dropdown-header">Select Client</div>
        <div class="dropdown-search-wrapper">
            <input type="text" id="clientSearch" class="dropdown-search" placeholder="Search clients..." oninput="filterDropdown()">
        </div>
        <div id="dropdownList" class="dropdown-list-container"></div>`;
    const list = document.getElementById('dropdownList');
    Object.entries(modData).forEach(([key, data]) => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.setAttribute('data-name', key);
        item.innerHTML = `<img src="${data.logo}" alt="${key}"> ${key[0].toUpperCase() + key.slice(1)}`;
        item.onclick = () => {
            document.getElementById('clientDropdown').classList.remove('show');
            setTimeout(() => openModal(key, data), 150);
        };
        list.appendChild(item);
    });
}

function filterDropdown() {
    const q = document.getElementById('clientSearch').value.toLowerCase();
    document.querySelectorAll('.dropdown-item').forEach(i => {
        i.style.display = i.getAttribute('data-name').toLowerCase().includes(q) ? 'flex' : 'none';
    });
}

function toggleDropdown(e) {
    e?.stopPropagation();
    const m = document.getElementById('clientDropdown');
    m.classList.toggle('show');
    if (m.classList.contains('show')) setTimeout(() => document.getElementById('clientSearch')?.focus(), 100);
}

// --- STAFF ---

async function loadStaff() {
    window.staffLoaded = true;
    const grid = document.getElementById('staffGrid');
    const loader = document.getElementById('staffLoader');
    grid.innerHTML = '';
    loader.style.display = 'block';
    try {
        await Promise.all([fetchCustomPfps(), fetchUsrbg()]);
        const myId = "789872551731527690";
        const order = [myId, ...staffIds.filter(id => id !== myId).sort(() => 0.5 - Math.random())];
        const results = await Promise.all(order.map(async id => {
            try {
                const [lr, br, dr] = await Promise.all([
                    fetch(`https://lanyard.equicord.org/v1/users/${id}`).then(r => r.json()),
                    fetch(`https://badges.equicord.org/${id}`).then(r => r.json()).catch(() => null),
                    fetch(`https://decor.fieryflames.dev/api/users/${id}`).then(r => r.json()).catch(() => null)
                ]);
                return lr.success ? { id, data: lr.data, badges: br || [], decor: dr } : null;
            } catch { return null; }
        }));
        loader.style.display = 'none';
        grid.innerHTML = results.filter(Boolean).map(r => buildCard(r.data, r.id, r.badges, r.decor)).join('');
    } catch {
        loader.style.display = 'none';
        grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;width:100%">Unable to load staff. Please try again later.</p>';
    }
}

async function fetchCustomPfps() {
    try {
        let res = await fetch('https://raw.githubusercontent.com/Yeetov/usrpfpwebsite/main/import.css');
        if (!res.ok) res = await fetch('https://raw.githubusercontent.com/UserPFP/UserPFP/main/import.css');
        if (!res.ok) return;
        const css = await res.text();
        const rx = /src\^="https:\/\/cdn\.discordapp\.com\/avatars\/(\d+)\/".*?url\(([^)]+)\)/g;
        let m;
        while ((m = rx.exec(css)) !== null) customPfps[m[1]] = m[2].replace(/['"]/g, '');
    } catch {}
}

async function fetchUsrbg() {
    try {
        const res = await fetch("https://usrbg.is-hardly.online/users");
        if (res.ok) usrbgData = await res.json();
    } catch {}
}

function getUsrbgUrl(id) {
    if (!usrbgData?.users?.[id]) return null;
    const { endpoint, bucket, prefix, users: { [id]: etag } } = usrbgData;
    return `${endpoint}/${bucket}/${prefix}${id}?${etag}`;
}

function buildCard(data, id, badgeData, decorData) {
    const u = data.discord_user;
    const avatar = customPfps[id] || (u.avatar
        ? `https://cdn.discordapp.com/avatars/${id}/${u.avatar}.${u.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=128`
        : 'https://cdn.discordapp.com/embed/avatars/0.png');
    const banner = getUsrbgUrl(id) || manualBanners[id] || '';

    let badges = '<div class="badge-chip">Staff</div>';
    if (badgeData?.badges?.length) {
        badgeData.badges.forEach(b => {
            const img = b.badge || b.image;
            const name = b.tooltip || b.name || 'Badge';
            if (img) badges += `<img src="${img}" alt="${name}" class="badge-icon" title="${name}">`;
        });
    }

    let decor = '';
    if (decorData?.decorationHash) {
        const h = decorData.decorationHash;
        decor = `<img class="profile-decoration" src="https://decorcdn.fieryflames.dev/${h}.gif" onerror="this.onerror=null;this.src='https://decorcdn.fieryflames.dev/${h}.png'" alt="">`;
    }

    let activity = '';
    const rich = data.activities?.find(a => a.type !== 4);
    const custom = data.activities?.find(a => a.type === 4);
    if (rich) {
        let icon = null;
        if (rich.assets?.large_image) {
            const img = rich.assets.large_image;
            if (img.startsWith('mp:')) icon = `https://media.discordapp.net/${img.replace('mp:', '')}`;
            else if (img.startsWith('spotify:')) icon = `https://i.scdn.co/image/${img.replace('spotify:', '')}`;
            else icon = `https://cdn.discordapp.com/app-assets/${rich.application_id}/${img}.png`;
        } else if (rich.application_id) {
            icon = `https://dcdn.dstn.to/app-icons/${rich.application_id}`;
        }
        activity = `<div class="activity-card">
            <div class="activity-header">Playing</div>
            <div class="activity-row">
                ${icon ? `<img src="${icon}" class="activity-icon" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/512px-Xbox_one_logo.svg.png'">` : ''}
                <div class="activity-info">
                    <div class="activity-title">${rich.name}</div>
                    <div class="activity-subtitle">${rich.details || rich.state || ''}</div>
                </div>
            </div>
        </div>`;
    } else if (custom?.state) {
        let emoji = '';
        if (custom.emoji?.id) emoji = `<img src="https://cdn.discordapp.com/emojis/${custom.emoji.id}.webp?size=44" class="emoji-inline" alt="">`;
        else if (custom.emoji?.name) emoji = `<span>${custom.emoji.name}</span>`;
        activity = `<div class="activity-card">
            <div class="activity-header">Custom Status</div>
            <div class="activity-row">
                <div class="activity-info">
                    <div class="activity-subtitle">${emoji} ${custom.state}</div>
                </div>
            </div>
        </div>`;
    }

    return `<div class="profile-card">
        <div class="profile-banner" ${banner ? `style="background-image:url('${banner}')"` : ''}></div>
        <div class="badge-container">${badges}</div>
        <div class="profile-avatar-container">
            <div class="profile-avatar">
                <img class="avatar-img" src="${avatar}" alt="${u.username}">
                ${decor}
            </div>
        </div>
        <div class="profile-body">
            <div class="profile-name-container">
                <div class="profile-displayname">${u.global_name || u.username}</div>
                <div class="profile-username">@${u.username}</div>
            </div>
            ${activity}
        </div>
    </div>`;
}

// --- MODAL / WIZARD ---

function openModal(title, data) {
    const name = data.title || (title[0].toUpperCase() + title.slice(1));
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalClientIcon').src = data.logo;

    wizardSteps = [{ html: `<div class="wizard-text">${data.desc}</div>` }];

    if (data.code) {
        const escapedCode = data.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        wizardSteps.push({ html: `
            <div class="wizard-text">Copy the code below:</div>
            <div class="code-window">
                <div class="code-header">
                    <span class="code-lang">CSS / Link</span>
                    <button class="copy-code-btn" data-copy="${escapedCode}" onclick="copyCode(this)">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        COPY
                    </button>
                </div>
                <div class="code-content">${escapedCode}</div>
            </div>`,
            code: data.code
        });
    } else if (data.link) {
        wizardSteps.push({ html: `
            <div class="wizard-text">Click below to open the installation page:</div>
            <a href="${data.link}" target="_blank" class="btn-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Open Installation Page
            </a>`
        });
    }

    currentStep = 0;
    renderStep();
    document.getElementById('infoModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderStep() {
    const dots = document.getElementById('wizardDots');
    if (wizardSteps.length > 1) {
        dots.innerHTML = wizardSteps.map((_, i) => `<div class="wdot ${i === currentStep ? 'on' : ''}"></div>`).join('');
        dots.style.display = 'flex';
    } else {
        dots.style.display = 'none';
    }

    const isLast = currentStep === wizardSteps.length - 1;
    document.getElementById('modalBody').innerHTML = `
        <div class="wizard-step active">
            ${wizardSteps[currentStep].html}
            <div class="wizard-nav">
                ${currentStep > 0 ? `<button class="btn-wizard btn-prev" onclick="changeStep(-1)">Back</button>` : ''}
                <button class="btn-wizard btn-next" onclick="${isLast ? 'closeModal()' : 'changeStep(1)'}">${isLast ? 'Done' : 'Next &rarr;'}</button>
            </div>
        </div>`;
}

function changeStep(dir) { currentStep += dir; renderStep(); }

function closeModal() {
    document.getElementById('infoModal').classList.remove('open');
    document.body.style.overflow = '';
}

function copyCode(btnOrText) {
    const text = typeof btnOrText === 'string' ? btnOrText : btnOrText.dataset.copy;
    navigator.clipboard.writeText(text).then(() => showToast('✓ Copied to clipboard!'));
}

// --- BACKGROUND ---

async function loadBackgroundPfps() {
    try {
        const res = await fetch('https://raw.githubusercontent.com/Yeetov/usrpfpwebsite/main/source/data.json');
        const data = await res.json();
        const urls = Object.values(data.avatars || {})
            .filter(u => u.startsWith('http') && !u.includes('profileBadges'))
            .sort(() => 0.5 - Math.random()).slice(0, 40);
        const fill = (id, items) => {
            const el = document.getElementById(id);
            if (!el) return;
            [...items, ...items].forEach(url => {
                const img = document.createElement('img');
                img.src = url; img.className = 'bg-pfp'; img.loading = 'lazy';
                img.onerror = () => img.remove();
                el.appendChild(img);
            });
        };
        fill('track1', urls.slice(0, 20));
        fill('track2', urls.slice(20, 40));
    } catch {}
}

init();
