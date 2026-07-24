const drive = (id) => `https://drive.google.com/file/d/${id}/view`;
const driveFolder = (id) => `https://drive.google.com/drive/folders/${id}`;
const thumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w900`;
const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview`;
const instagramEmbed = (shortcode) => `https://www.instagram.com/reel/${shortcode}/embed`;

/* ------------------------------------------------------------------
   Portfolio data — sourced ONLY from the assets supplied by the client.
   Nothing below is a placeholder or leftover from a prior build.
------------------------------------------------------------------- */
const portfolioItems = [
  // Video Ads
  { title: "White Pants", category: "Video Ads", type: "Video Ad", url: drive("1XMaWr6n6P0vLO7g-aveAKGv7g7NBaAOB"), image: thumb("1XMaWr6n6P0vLO7g-aveAKGv7g7NBaAOB"), desc: "AI-crafted product ad built for scroll-stopping attention." },
  { title: "Shoes", category: "Video Ads", type: "Video Ad", url: drive("118dyUW282I4rUA8cUBE4Ti5FlKZAmdbL"), image: thumb("118dyUW282I4rUA8cUBE4Ti5FlKZAmdbL"), desc: "Footwear campaign video with cinematic product framing." },
  { title: "Renovation 01", category: "Video Ads", type: "Video Ad", url: drive("13-p5ERrSyE8Dh9TAGBL_duPpU94rbWvX"), image: thumb("13-p5ERrSyE8Dh9TAGBL_duPpU94rbWvX"), desc: "Home renovation promo built for local service marketing." },
  { title: "Renovation 02", category: "Video Ads", type: "Video Ad", url: drive("13-p5ERrSyE8Dh9TAGBL_duPpU94rbWvX"), image: thumb("13-p5ERrSyE8Dh9TAGBL_duPpU94rbWvX"), desc: "Second renovation campaign concept and edit." },
  { title: "Lawyer", category: "Video Ads", type: "Video Ad", url: drive("1KW9naPm5z5URXaYaGrrhVqv08XL6UQ1v"), image: thumb("1KW9naPm5z5URXaYaGrrhVqv08XL6UQ1v"), desc: "Professional services ad built for trust and authority." },
  { title: "Jeans", category: "Video Ads", type: "Video Ad", url: drive("1hEgrrdo9NG3dVU5gaUzC1oIEJFv3L_Vk"), image: thumb("1hEgrrdo9NG3dVU5gaUzC1oIEJFv3L_Vk"), desc: "Apparel product ad with fast-paced styling cuts." },
  { title: "Cycling At Home", category: "Video Ads", type: "Video Ad", url: drive("1MnVkoi1lqL_Tp_RzgIn3VKk5RDTZdWbn"), image: thumb("1MnVkoi1lqL_Tp_RzgIn3VKk5RDTZdWbn"), desc: "Fitness lifestyle ad shot around an at-home routine." },
  { title: "Big Guy", category: "Video Ads", type: "Video Ad", url: drive("1m0Wlv6zqBNvRPaV7ir55S_1xnpyFrOBm"), image: thumb("1m0Wlv6zqBNvRPaV7ir55S_1xnpyFrOBm"), desc: "Character-led ad concept with a bold visual hook." },
  { title: "No More Generic Ads", category: "Video Ads", type: "Video Ad", url: drive("1RcwgZnhAUwKr_osM4rNYmfbv7FxB3s93"), image: thumb("1RcwgZnhAUwKr_osM4rNYmfbv7FxB3s93"), desc: "Positioning-led ad built to break generic ad fatigue." },
  { title: "Devify Thought", category: "Video Ads", type: "Video Ad", url: drive("1_XhxuotjIJ_PGRuyfiWzdvmGw2Ew8p5I"), image: thumb("1_XhxuotjIJ_PGRuyfiWzdvmGw2Ew8p5I"), desc: "Tech brand concept video with a modern creative direction." },
  { title: "AI Bundle", category: "Video Ads", type: "Video Ad", url: drive("1GyuasqMyKiRMs1iCpy_f5e8a07rkjoEB"), image: thumb("1GyuasqMyKiRMs1iCpy_f5e8a07rkjoEB"), desc: "AI product bundle promo built for a digital offer launch." },
  { title: "Apex 01", category: "Video Ads", type: "Video Ad", url: drive("1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46"), image: thumb("1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46"), desc: "Apex campaign, first cut — high-energy brand ad." },
  { title: "Apex 02", category: "Video Ads", type: "Video Ad", url: drive("1h7V1K3WdODVsHbDlwZxrLFaA236bOL8j"), image: thumb("1h7V1K3WdODVsHbDlwZxrLFaA236bOL8j"), desc: "Apex campaign, second cut — alternate creative direction." },

  // AI Documentaries / Long Form
  { title: "The Last Reserve", category: "AI Documentaries", type: "AI Documentary", url: drive("1NLWqV7fKN4449-NmM6KVp0DZhxmbljnR"), image: thumb("1NLWqV7fKN4449-NmM6KVp0DZhxmbljnR"), desc: "Long-form AI documentary with cinematic storytelling." },
  { title: "Hezbollah Documentary Research Project", category: "AI Documentaries", type: "Research Project", url: driveFolder("1ckKuANbx8oh1cfHyH32vxrr4jpTayqkc"), folder: true, desc: "Documentary research project folder with source material." },
  { title: "Sense and Sensibility", category: "AI Documentaries", type: "Literary Adaptation", url: drive("1B1UnAXpef4wJlbsyjFcP0eVbnZHiGbtY"), image: thumb("1B1UnAXpef4wJlbsyjFcP0eVbnZHiGbtY"), desc: "AI literary adaptation based on the classic novel." },
  { title: "Wuthering Heights", category: "AI Documentaries", type: "Literary Adaptation", url: drive("1SSxALZgZvJ8-Q8ISlPALjl0_-COv4TA8"), image: thumb("1SSxALZgZvJ8-Q8ISlPALjl0_-COv4TA8"), desc: "AI-narrated adaptation of the literary classic." },
  { title: "Pride and Prejudice", category: "AI Documentaries", type: "Literary Adaptation", url: drive("1lN80IWnO4Sbbpb5fziREHjH370ttUA3x"), image: thumb("1lN80IWnO4Sbbpb5fziREHjH370ttUA3x"), desc: "Cinematic AI adaptation of the classic novel." },

  // Chinese Language Video
  { title: "Chinese Language Educational Video", category: "Language Video", type: "Educational Video", url: drive("1D9xxe2hl7xOVN4snVM6NPwmqd3RQXAu4"), image: thumb("1D9xxe2hl7xOVN4snVM6NPwmqd3RQXAu4"), desc: "Chinese language learning video for educational audiences." },

  // Logo Design
  { title: "Logo Design Concept 01", category: "Logo Design", type: "Logo Concept", url: drive("1g4MwFHm37gU0orB06o-RY3ziGG45_mII"), image: thumb("1g4MwFHm37gU0orB06o-RY3ziGG45_mII"), desc: "Logo design concept for identity exploration." },
  { title: "Logo Design Concept 02", category: "Logo Design", type: "Logo Concept", url: drive("195nqaUSSvfRX27Z7fLxCU3nuXzOiJFnG"), image: thumb("195nqaUSSvfRX27Z7fLxCU3nuXzOiJFnG"), desc: "Second visual identity concept." },
  { title: "Logo Design Concept 03", category: "Logo Design", type: "Logo Concept", url: drive("1u30qGh--D15zv0k0Su0BFNwuvxUwuFu0"), image: thumb("1u30qGh--D15zv0k0Su0BFNwuvxUwuFu0"), desc: "Logo concept with brand-focused composition." },
  { title: "Logo Design Concept 04", category: "Logo Design", type: "Logo Concept", url: drive("16goMwzOYhTjx7Axr-aM76m1vP7OWLdly"), image: thumb("16goMwzOYhTjx7Axr-aM76m1vP7OWLdly"), desc: "Fourth logo design exploration." },
  { title: "Logo Design Concept 05", category: "Logo Design", type: "Logo Concept", url: drive("1XuFtm27m4UNLUYDjMao0_rxFZAjFBFtA"), image: thumb("1XuFtm27m4UNLUYDjMao0_rxFZAjFBFtA"), desc: "Fifth logo design portfolio concept." },

  // Educational Content — AI Tutorials (long form)
  { title: "AI Tutorial Video 01", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/7E1H3yjB_qA?si=C9utwxgZz1Egm-rH", image: "https://img.youtube.com/vi/7E1H3yjB_qA/hqdefault.jpg", desc: "AI tutorial video from the educational series." },
  { title: "AI Tutorial Video 02", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/r0LnqQmOqOM?si=KlfK7UdDAIZzehHs", image: "https://img.youtube.com/vi/r0LnqQmOqOM/hqdefault.jpg", desc: "Second AI tutorial video." },
  { title: "AI Tutorial Video 03", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/gpmIVAWNk80?si=FVw9EJy2wg1_zwVY", image: "https://img.youtube.com/vi/gpmIVAWNk80/hqdefault.jpg", desc: "Third AI tutorial lesson." },
  { title: "AI Tutorial Video 04", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/EUbPEv_Mgug?si=LpYomRweU2clw1_f", image: "https://img.youtube.com/vi/EUbPEv_Mgug/hqdefault.jpg", desc: "Fourth AI tutorial video." },
  { title: "AI Tutorial Video 05", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/JyWOXoma88E?si=VKI3pYaxemYpCvgm", image: "https://img.youtube.com/vi/JyWOXoma88E/hqdefault.jpg", desc: "Fifth AI tutorial video." },

  // Educational Content — AI Tutorials (short form)
  { title: "AI Tutorial Short 01", category: "Educational Content", type: "AI Tutorial Short", url: "https://youtube.com/shorts/kMipARQ-zp8?si=vBpO5moocjHtOgTS", image: "https://img.youtube.com/vi/kMipARQ-zp8/hqdefault.jpg", desc: "Short-form AI tutorial for fast learning." },
  { title: "AI Tutorial Short 02", category: "Educational Content", type: "AI Tutorial Short", url: "https://youtube.com/shorts/kMipARQ-zp8?si=v13H7JbCjxNL0TIS", image: "https://img.youtube.com/vi/kMipARQ-zp8/hqdefault.jpg", desc: "Second short-form AI tutorial." },
  { title: "AI Tutorial Short 03", category: "Educational Content", type: "AI Tutorial Short", url: "https://youtube.com/shorts/gs7A0uXekq0?si=OKKXeO7tPJKhm2Lj", image: "https://img.youtube.com/vi/gs7A0uXekq0/hqdefault.jpg", desc: "Third short-form AI tutorial." },
  { title: "AI Tutorial Short 04", category: "Educational Content", type: "AI Tutorial Short", url: "https://youtube.com/shorts/VhVfDWlRNDo?si=gbfxKEWcAL8I4068", image: "https://img.youtube.com/vi/VhVfDWlRNDo/hqdefault.jpg", desc: "Fourth short-form AI tutorial." },
  { title: "AI Tutorial Short 05", category: "Educational Content", type: "AI Tutorial Short", url: "https://youtube.com/shorts/eT1qFIyyD2w?si=8TcGZYsWdXKe-4Fb", image: "https://img.youtube.com/vi/eT1qFIyyD2w/hqdefault.jpg", desc: "Fifth short-form AI tutorial." },

  // Educational Content — Kids
  { title: "Kids Tutorial Video", category: "Educational Content", type: "Kids Education", url: drive("1aJQk9We5LeL5Jo4ewL6pFkjHWyehxhPp"), image: thumb("1aJQk9We5LeL5Jo4ewL6pFkjHWyehxhPp"), desc: "Kids educational tutorial video." },

  // UGC Advertisement Portfolio
  { title: "UGC Advertisement Video 01", category: "UGC Ads", type: "Instagram Reel", url: "https://www.instagram.com/reel/DTkV2bJDGoY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", desc: "UGC-style advertisement reel embedded from Instagram." },
  { title: "UGC Advertisement Video 02", category: "UGC Ads", type: "Instagram Reel", url: "https://www.instagram.com/reel/DTkUSIPDPCR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", desc: "Second UGC advertisement reel embedded from Instagram." },
  { title: "UGC Advertisement Video 03", category: "UGC Ads", type: "Instagram Reel", url: "https://www.instagram.com/reel/DTcpOR8jGbF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", desc: "Third UGC advertisement reel embedded from Instagram." },
  { title: "UGC Advertisement Video 04", category: "UGC Ads", type: "Video Ad", url: drive("1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46"), image: thumb("1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46"), desc: "UGC advertisement video hosted on Drive." },

  // Client Video Project
  { title: "Custom Video Editing Project", category: "Client Projects", type: "Video Editing", url: drive("1T7sRgnnvJ2F-hyKmwd6ukKUDCYUtPBSs"), image: thumb("1T7sRgnnvJ2F-hyKmwd6ukKUDCYUtPBSs"), desc: "Client video editing project showcase." },

  // YouTube Thumbnail Portfolio
  { title: "Thumbnail Design 01", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1GDby3H3ngNuyS9aVco9Q1ZswJCL0LMbP"), image: thumb("1GDby3H3ngNuyS9aVco9Q1ZswJCL0LMbP"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 02", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1VJ1HKi5f-O_Bje6oDZ6k0WPwCqvRUKJD"), image: thumb("1VJ1HKi5f-O_Bje6oDZ6k0WPwCqvRUKJD"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 03", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1_D9kBZWak2btt0PVkAJI3vjyilUTfWgE"), image: thumb("1_D9kBZWak2btt0PVkAJI3vjyilUTfWgE"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 04", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1tGSdLvCXXjxyBn3j4DwWMrajfToa1P82"), image: thumb("1tGSdLvCXXjxyBn3j4DwWMrajfToa1P82"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 05", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1-woPHTkXxV-piMdjqbk6Cg2CqMOoBKaD"), image: thumb("1-woPHTkXxV-piMdjqbk6Cg2CqMOoBKaD"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 06", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1AhnanVkFgup9_2NK3YTBL3maRQb8oYpk"), image: thumb("1AhnanVkFgup9_2NK3YTBL3maRQb8oYpk"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 07", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1yM_ApIqcJLvo7wiYnZu0njBN_1VRRp6H"), image: thumb("1yM_ApIqcJLvo7wiYnZu0njBN_1VRRp6H"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 08", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1FnETMG5ph1NeD_qQU_9vOYOXy2JSdmOj"), image: thumb("1FnETMG5ph1NeD_qQU_9vOYOXy2JSdmOj"), desc: "YouTube thumbnail design portfolio piece." },
  { title: "Thumbnail Design 09", category: "Thumbnails", type: "YouTube Thumbnail", url: drive("1YMmqRVG5wmQnP2zjnU37cDd3c_ZBTXu-"), image: thumb("1YMmqRVG5wmQnP2zjnU37cDd3c_ZBTXu-"), desc: "YouTube thumbnail design portfolio piece." },
];

/* ------------------------------------------------------------------
   Social / freelance profiles — official links supplied by the client only
------------------------------------------------------------------- */
const socialLinks = [
  ["YouTube", "YT", "Channel", "https://www.youtube.com/@visual_verse_agency"],
  ["Instagram", "IG", "Reels and posts", "https://www.instagram.com/visual_verse_agency/"],
  ["Threads", "TH", "Social profile", "https://www.threads.com/@visual_verse_agency"],
  ["Facebook", "FB", "Agency profile", "https://www.facebook.com/profile.php?id=61590101997513"],
  ["X", "X", "Updates", "https://x.com/Visual_Verse"],
  ["LinkedIn", "IN", "Professional profile", "https://www.linkedin.com/in/shazia-naz-25a519411/"],
  ["Bluesky", "BS", "Social profile", "https://bsky.app/profile/visualverseagency.bsky.social"],
  ["Pinterest", "PI", "Visual boards", "https://pin.it/47fnpD5mU"],
  ["TikTok", "TT", "Short-form content", "https://www.tiktok.com/@visual_verse_agency?lang=en"],
  ["Fiverr Pro", "FP", "Freelance services", "https://pro.fiverr.com/sellers/visualverse_0/edit"],
  ["Upwork", "UW", "Freelance profile", "https://upwork.com/freelancers/~0177a3cb88ee5b25d9"],
];

/* ------------------------------------------------------------------
   Sample testimonials — clearly labeled as demonstration content
   until the client supplies real client reviews.
------------------------------------------------------------------- */
const testimonials = [
  { name: "Ayesha Khan", initials: "AK", position: "Founder", company: "Lifestyle Brand Co.", quote: "VisualVerse transformed our brand visuals and helped us stand out with a premium content direction from day one." },
  { name: "Daniel Reyes", initials: "DR", position: "Marketing Lead", company: "Northbound Startups", quote: "The AI video work felt cinematic, fast, and polished — exactly what our product launch needed to make an impact." },
  { name: "Mina Shah", initials: "MS", position: "Creator & Educator", company: "Self-employed", quote: "Clear strategy, beautiful editing, and strong social-ready presentation from concept to final delivery." },
  { name: "Omar Farooq", initials: "OF", position: "E-commerce Manager", company: "Retail Group", quote: "Our UGC ads finally look native to the platform. Engagement and click-through both improved noticeably." },
  { name: "Sophia Bennett", initials: "SB", position: "Brand Director", company: "Bennett & Co.", quote: "A genuinely global-feeling creative partner — fast communication, premium output, and real strategic thinking." },
  { name: "Hamza Iqbal", initials: "HI", position: "Founder", company: "Tech Launch Studio", quote: "From AI documentaries to thumbnails, every asset felt considered. Exactly the level of polish we were after." },
];

const languages = [
  "English", "Urdu", "Arabic", "French", "German", "Spanish", "Portuguese", "Italian",
  "Turkish", "Russian", "Chinese", "Japanese", "Korean", "Hindi", "Bengali", "Punjabi",
  "Persian", "Pashto", "Dutch", "Swedish", "Norwegian", "Danish", "Polish", "Czech",
  "Greek", "Romanian", "Indonesian", "Malay", "Thai", "Vietnamese", "Filipino",
];

const previewableItems = portfolioItems.filter((item) => canPreview(item));

let activeCategory = "All";

const portfolioGrid = document.querySelector("#portfolioGrid");
const filterRow = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#portfolioSearch");
const projectCount = document.querySelector("#projectCount");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const siteHeader = document.querySelector(".site-header");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");
const landingIntro = document.querySelector("#landingIntro");
const introSkip = document.querySelector("#introSkip");
const portfolioMarquee = document.querySelector("#portfolioMarquee");
const testimonialTrack = document.querySelector("#testimonialTrack");
const languageGrid = document.querySelector("#languageGrid");

function renderFilters() {
  const categories = ["All", ...new Set(previewableItems.map((item) => item.category))];
  filterRow.innerHTML = categories
    .map((category) => `<button type="button" class="${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderPortfolio() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = previewableItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const text = `${item.title} ${item.category} ${item.type} ${item.desc}`.toLowerCase();
    return matchesCategory && text.includes(query);
  });

  portfolioGrid.innerHTML = filtered
    .map((item, index) => `
      <article class="portfolio-card" style="animation-delay: ${Math.min(index, 11) * 0.05}s">
        ${renderMedia(item)}
        <div class="card-body">
          <div class="card-meta">
            <span class="pill">${item.category}</span>
            <span class="pill">${item.type}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <a class="card-link" href="${item.url}" target="_blank" rel="noopener">${item.folder ? "Open Folder" : "View Project"}</a>
        </div>
      </article>
    `)
    .join("");
}

function renderMarquee() {
  const featured = previewableItems.filter((item) => item.image).slice(0, 20);
  const marqueeItems = [...featured, ...featured]
    .map((item) => `
      <a class="marquee-item" href="${item.url}" target="_blank" rel="noopener">
        <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
        <span>${item.title}</span>
      </a>
    `)
    .join("");

  portfolioMarquee.innerHTML = `<div class="marquee-track">${marqueeItems}</div>`;
}

function renderIntroPreviewWall() {
  const introItems = previewableItems.filter((item) => item.image).slice(0, 16);

  document.querySelector("#introPreviewWall").innerHTML = introItems
    .map((item, index) => `
      <span class="intro-preview-tile" style="--delay: ${index * 0.06}s; --tile-aspect: ${getAspect(item)}">
        <img src="${item.image}" alt="" loading="lazy" decoding="async" />
      </span>
    `)
    .join("");
}

function canPreview(item) {
  return Boolean(item.folder || item.image || getDriveId(item.url) || getYouTubeId(item.url) || getInstagramShortcode(item.url));
}

function getDriveId(url) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match ? match[1] : "";
}

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|shorts\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

function getInstagramShortcode(url) {
  const match = url.match(/instagram\.com\/reel\/([^/?#]+)/);
  return match ? match[1] : "";
}

function getAspect(item) {
  if (item.type === "Instagram Reel" || item.type === "AI Tutorial Short") return "9 / 16";
  if (item.category === "Logo Design") return "1 / 1";
  if (item.category === "Thumbnails") return "16 / 9";
  if (item.folder) return "4 / 3";
  return "16 / 10";
}

function shouldEmbed(item) {
  return ["AI Documentaries", "Language Video", "Educational Content", "UGC Ads", "Client Projects", "Video Ads"].includes(item.category);
}

function renderMedia(item) {
  const aspect = getAspect(item);

  if (item.folder) {
    return `
      <a class="card-media card-folder" style="--aspect: ${aspect}" href="${item.url}" target="_blank" rel="noopener" aria-label="Open ${item.title} on Google Drive">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 4 12 7h9v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4.5Z"/></svg>
        <span>Open Drive Folder</span>
      </a>
    `;
  }

  const youtubeId = getYouTubeId(item.url);
  const driveId = getDriveId(item.url);
  const instagramShortcode = getInstagramShortcode(item.url);

  if (youtubeId) {
    return `
      <div class="card-media media-embed" style="--aspect: ${aspect}">
        <iframe src="https://www.youtube.com/embed/${youtubeId}" title="${item.title}" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    `;
  }

  if (driveId && shouldEmbed(item)) {
    return `
      <div class="card-media media-embed" style="--aspect: ${aspect}">
        <iframe src="${drivePreview(driveId)}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    `;
  }

  if (instagramShortcode) {
    return `
      <div class="card-media media-embed" style="--aspect: ${aspect}">
        <iframe src="${instagramEmbed(instagramShortcode)}" title="${item.title}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    `;
  }

  return `
    <a class="card-media" style="--aspect: ${aspect}" href="${item.url}" target="_blank" rel="noopener" aria-label="Open ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
    </a>
  `;
}

function renderSocials() {
  document.querySelector("#socialGrid").innerHTML = socialLinks
    .map(([name, icon, label, url]) => `
      <a class="social-card" href="${url}" target="_blank" rel="noopener">
        <span class="social-icon" aria-hidden="true">${icon}</span>
        <strong>${name}</strong>
        <small>${label}</small>
      </a>
    `)
    .join("");
}

function renderTestimonials() {
  if (!testimonialTrack) return;
  const cards = testimonials
    .map((t) => `
      <article class="testimonial-slide">
        <span class="stars">★★★★★</span>
        <p>"${t.quote}"</p>
        <div class="testimonial-person">
          <span class="avatar" aria-hidden="true">${t.initials}</span>
          <div>
            <strong>${t.name}</strong>
            <small>${t.position}, ${t.company}</small>
          </div>
        </div>
      </article>
    `)
    .join("");
  // duplicated once for a seamless auto-sliding loop
  testimonialTrack.innerHTML = cards + cards;
}

function renderLanguages() {
  if (!languageGrid) return;
  languageGrid.innerHTML = languages.map((lang) => `<span class="language-chip">${lang}</span>`).join("");
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderPortfolio();
});

searchInput.addEventListener("input", renderPortfolio);

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open", !expanded);
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

function closeIntro() {
  landingIntro.classList.add("hide");
  document.body.classList.remove("intro-active");
}

introSkip.addEventListener("click", closeIntro);
window.setTimeout(closeIntro, 4300);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const message = [
    "Hello VisualVerse Agency,",
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Project Type: ${formData.get("project_type")}`,
    "",
    `Message: ${formData.get("message")}`,
  ].join("\n");

  formNote.textContent = "Opening WhatsApp with your inquiry...";
  window.open(`https://wa.me/923088846208?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!("IntersectionObserver" in window)) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.count);
        const duration = 1100;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.floor(progress * target);
          counter.textContent = `${value}+`;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(counter);
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function setupHeaderState() {
  const updateHeader = () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 20);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (projectCount) projectCount.textContent = `${previewableItems.length}+`;
renderFilters();
renderIntroPreviewWall();
renderMarquee();
renderPortfolio();
renderSocials();
renderTestimonials();
renderLanguages();
setupReveal();
setupCounters();
setupHeaderState();
