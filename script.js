(() => {
  "use strict";

  const GOLD = "#F0B000";
  const portfolioItems = [
    // AI DOCUMENTARIES
    {id:"treasure-island",title:"Treasure Island",category:"AI Documentaries",description:"AI-powered long-form literary storytelling.",url:"https://youtu.be/osL4gAH8xNc",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:true,tags:["AI","Documentary","Literature"],thumbnail:"https://img.youtube.com/vi/osL4gAH8xNc/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/osL4gAH8xNc/hqdefault.jpg"},
    {id:"wuthering-heights",title:"Wuthering Heights",category:"AI Documentaries",description:"Cinematic adaptation and visual storytelling inspired by the classic novel.",url:"https://youtu.be/RE7sevzFhF4",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:true,tags:["AI","Documentary","Literature"],thumbnail:"https://img.youtube.com/vi/RE7sevzFhF4/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/RE7sevzFhF4/hqdefault.jpg"},
    {id:"pride-and-prejudice",title:"Pride and Prejudice",category:"AI Documentaries",description:"AI-assisted literary storytelling shaped for long-form viewing.",url:"https://youtu.be/sKMJp0c9AeY",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:true,tags:["AI","Documentary","Literature"],thumbnail:"https://img.youtube.com/vi/sKMJp0c9AeY/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/sKMJp0c9AeY/hqdefault.jpg"},
    {id:"sense-and-sensibility",title:"Sense and Sensibility",category:"AI Documentaries",description:"Visual interpretation of a classic story with AI-powered production.",url:"https://youtu.be/GWNu1tyTH-Y",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["AI","Documentary","Literature"],thumbnail:"https://img.youtube.com/vi/GWNu1tyTH-Y/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/GWNu1tyTH-Y/hqdefault.jpg"},
    {id:"hezbollah",title:"Hezbollah",category:"AI Documentaries",description:"Neutral informational and historical documentary content.",url:"https://youtu.be/D25HJhqNLCU",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["AI","Documentary","History"],thumbnail:"https://img.youtube.com/vi/D25HJhqNLCU/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/D25HJhqNLCU/hqdefault.jpg"},
    {id:"the-last-reserve",title:"The Last Reserve",category:"AI Documentaries",description:"Long-form cinematic storytelling built around a narrative premise.",url:"https://youtu.be/kQf6pYlY8O4",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["AI","Documentary","Storytelling"],thumbnail:"https://img.youtube.com/vi/kQf6pYlY8O4/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/kQf6pYlY8O4/hqdefault.jpg"},

    // VIDEO EDITING
    {id:"editing-01",title:"High-Retention Video Editing Project 01",category:"Video Editing",description:"High-retention editorial showcase focused on pacing and visual rhythm.",url:"https://www.youtube.com/watch?v=7Ex6DrQc_M4",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:true,tags:["Editing","Retention","YouTube"],thumbnail:"https://img.youtube.com/vi/7Ex6DrQc_M4/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/7Ex6DrQc_M4/hqdefault.jpg"},
    {id:"city-308k",title:"This City Was Costing Him $308K | Client Video Editing Showcase",category:"Video Editing",description:"Client video editing showcase built around a strong narrative hook.",url:"https://www.youtube.com/watch?v=h8vNoJM64B8",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:true,tags:["Editing","Client Work","Retention"],thumbnail:"https://img.youtube.com/vi/h8vNoJM64B8/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/h8vNoJM64B8/hqdefault.jpg"},
    {id:"cold-streets",title:"Surviving the Cold Streets of 1983",category:"Video Editing",description:"Narrative documentary-style edit with cinematic pacing.",url:"https://www.youtube.com/watch?v=bNT5yYhj0FQ",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["Editing","Documentary","Storytelling"],thumbnail:"https://img.youtube.com/vi/bNT5yYhj0FQ/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/bNT5yYhj0FQ/hqdefault.jpg"},
    {id:"retention-drops",title:"Why Your Retention Drops Every Single Time",category:"Video Editing",description:"Educational editing showcase centered on audience retention.",url:"https://www.youtube.com/watch?v=myKL6i9SG34",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["Editing","Retention","Education"],thumbnail:"https://img.youtube.com/vi/myKL6i9SG34/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/myKL6i9SG34/hqdefault.jpg"},

    // AI TUTORIALS
    {id:"windows-11",title:"Upgrade to Windows 11 24H2 Without USB | No Data Loss",category:"AI Tutorials",description:"Step-by-step technology tutorial designed for clarity.",url:"https://youtu.be/brJxtY_phAE",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["Tutorial","Technology","AI"],thumbnail:"https://img.youtube.com/vi/brJxtY_phAE/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/brJxtY_phAE/hqdefault.jpg"},
    {id:"atlas-os",title:"Atlas OS vs Windows 10 🔥 Make Your Old PC Faster! | AI COMPASS",category:"AI Tutorials",description:"Technology comparison and optimization tutorial.",url:"https://youtu.be/yF0uzh9j7KI",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["Tutorial","Technology","AI COMPASS"],thumbnail:"https://img.youtube.com/vi/yF0uzh9j7KI/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/yF0uzh9j7KI/hqdefault.jpg"},
    {id:"google-drive",title:"Google Drive Complete Tutorial in Urdu/Hindi | Beginner to Advanced 2026",category:"AI Tutorials",description:"Beginner-to-advanced educational technology tutorial.",url:"https://www.youtube.com/watch?v=2s8OCpBZj1E",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["Tutorial","Google Drive","Urdu","Hindi"],thumbnail:"https://img.youtube.com/vi/2s8OCpBZj1E/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/2s8OCpBZj1E/hqdefault.jpg"},
    {id:"free-ai-voice",title:"Finally a FREE Alternative to Expensive AI Voice Tools",category:"AI Tutorials",description:"Practical AI tool tutorial and alternative workflow.",url:"https://www.youtube.com/watch?v=gpmIVAWNk80",type:"youtube",platform:"YouTube",format:"16:9",year:2026,featured:false,tags:["Tutorial","AI","Voice"],thumbnail:"https://img.youtube.com/vi/gpmIVAWNk80/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/gpmIVAWNk80/hqdefault.jpg"},

    // SHORT FORM
    {id:"wall-design",title:"Is This The Best Wall Design?",category:"Short-Form Videos",description:"Short-form visual showcase for interior design.",url:"https://www.youtube.com/shorts/Mb0jxa4XETk",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Design","Home"],thumbnail:"https://img.youtube.com/vi/Mb0jxa4XETk/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/Mb0jxa4XETk/hqdefault.jpg"},
    {id:"indoor-bike",title:"This Indoor Bike Turns Your Home Into a Gym 🚴‍♂️",category:"Short-Form Videos",description:"Product-led short-form content with a fast visual hook.",url:"https://www.youtube.com/shorts/YF5r70xlRH8",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Fitness","Product"],thumbnail:"https://img.youtube.com/vi/YF5r70xlRH8/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/YF5r70xlRH8/hqdefault.jpg"},
    {id:"big-guy-bike",title:"Big Guy Takes on the Exercise Bike 🚴‍♂️🔥",category:"Short-Form Videos",description:"Fast-paced fitness short designed around visual contrast.",url:"https://www.youtube.com/shorts/XdHscHXX22o",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Fitness"],thumbnail:"https://img.youtube.com/vi/XdHscHXX22o/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/XdHscHXX22o/hqdefault.jpg"},
    {id:"wall-renovation",title:"This Wall Renovation Changed the Whole Room 👀 | Home Makeover",category:"Short-Form Videos",description:"Home transformation short with a visual before-and-after structure.",url:"https://www.youtube.com/shorts/oArvZDkCWEA",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Home","Renovation"],thumbnail:"https://img.youtube.com/vi/oArvZDkCWEA/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/oArvZDkCWEA/hqdefault.jpg"},
    {id:"landlord-problem",title:"Landlord Ignoring a Serious Problem? Do This First ⚖️",category:"Educational Content",description:"Informational short-form content built around a direct hook.",url:"https://www.youtube.com/shorts/bRS3BTrFZ_0",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Educational","Legal"],thumbnail:"https://img.youtube.com/vi/bRS3BTrFZ_0/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/bRS3BTrFZ_0/hqdefault.jpg"},
    {id:"devify",title:"Your Website Is Your Digital First Impression 🌐 | Devify Thought",category:"Social Media",description:"Digital-first social content built around a concise insight.",url:"https://www.youtube.com/shorts/97FQo9kjFsk",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Social Media","Web"],thumbnail:"https://img.youtube.com/vi/97FQo9kjFsk/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/97FQo9kjFsk/hqdefault.jpg"},
    {id:"midnight-hour",title:"The Midnight Hour Collection | Why Red is the Ultimate Color of Confidence 💃",category:"Short-Form Videos",description:"Fashion-led visual storytelling built around color and attitude.",url:"https://www.youtube.com/shorts/rr2VoQ2Trn4",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Fashion","Creative"],thumbnail:"https://img.youtube.com/vi/rr2VoQ2Trn4/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/rr2VoQ2Trn4/hqdefault.jpg"},
    {id:"city-collection",title:"The City Is Loud. Your Style Doesn't Have to Be. | The City Collection",category:"Short-Form Videos",description:"Fashion and lifestyle short-form visual campaign.",url:"https://www.youtube.com/shorts/alWZqnZJKnM",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Fashion","Lifestyle"],thumbnail:"https://img.youtube.com/vi/alWZqnZJKnM/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/alWZqnZJKnM/hqdefault.jpg"},
    {id:"workday-chic",title:"Why Are We Still Dressing Like It's 1950? | Workday Chic",category:"Short-Form Videos",description:"Editorial fashion storytelling for short-form platforms.",url:"https://www.youtube.com/shorts/P1nkIlbt2jk",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Fashion","Editorial"],thumbnail:"https://img.youtube.com/vi/P1nkIlbt2jk/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/P1nkIlbt2jk/hqdefault.jpg"},
    {id:"foamy-urine",title:"Foamy Urine Means Your Kidney Filters Are Clogged?",category:"Educational Content",description:"Health education short presented as an explanatory visual.",url:"https://www.youtube.com/shorts/_78WMP9jrs0",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Educational","Health"],thumbnail:"https://img.youtube.com/vi/_78WMP9jrs0/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/_78WMP9jrs0/hqdefault.jpg"},
    {id:"l-dopa",title:"Does L-Dopa Really “Just Replace Dopamine”? | Parkinson's Explained",category:"Educational Content",description:"Medical education short focused on a concise explanatory question.",url:"https://www.youtube.com/shorts/m6A37ulCQ90",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Educational","Health"],thumbnail:"https://img.youtube.com/vi/m6A37ulCQ90/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/m6A37ulCQ90/hqdefault.jpg"},
    {id:"commute",title:"What if Your Everyday Commute Could Be Easier, Smarter, and More Enjoyable? 🛴⚡",category:"Short-Form Videos",description:"Mobility-focused short-form concept with a product-story structure.",url:"https://www.youtube.com/shorts/rm3U9ByPLFI",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Mobility","Technology"],thumbnail:"https://img.youtube.com/vi/rm3U9ByPLFI/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/rm3U9ByPLFI/hqdefault.jpg"},
    {id:"lahore-solar",title:"Why Lahore Is Going Solar ⚡☀️ | Reduce Your Electricity Bills with Solar Energy",category:"Educational Content",description:"Energy-focused educational short-form storytelling.",url:"https://www.youtube.com/shorts/kYEjMnadFW0",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Short-Form","Educational","Solar"],thumbnail:"https://img.youtube.com/vi/kYEjMnadFW0/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/kYEjMnadFW0/hqdefault.jpg"},
    {id:"glowing-forest",title:"Building a glowing forest in a jar 🍄",category:"Short-Form Videos",description:"A visually engaging short-form creative project showcasing the making of a glowing forest in a jar.",url:"https://youtube.com/shorts/28EcPP609ZA",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:true,tags:["Short-Form","Creative Video","Visual Storytelling","Nature","Craft"],thumbnail:"https://img.youtube.com/vi/28EcPP609ZA/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/28EcPP609ZA/hqdefault.jpg"},

    // ANIMATED VIDEOS
    {id:"animated-01",title:"Animated Video Project 01",category:"Animated Videos",description:"Animated storytelling showcase with editorial motion.",url:"https://www.youtube.com/shorts/sphREbElaGE",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Animation","Motion","Short-Form"],thumbnail:"https://img.youtube.com/vi/sphREbElaGE/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/sphREbElaGE/hqdefault.jpg"},
    {id:"five-platforms",title:"One Video → 5 Platforms Without Extra Shoots",category:"Animated Videos",description:"Motion-led explanation of how one creative asset can travel across platforms.",url:"https://www.youtube.com/shorts/UIRYh6dnxxw",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Animation","Social Media","Strategy"],thumbnail:"https://img.youtube.com/vi/UIRYh6dnxxw/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/UIRYh6dnxxw/hqdefault.jpg"},
    {id:"algorithm-hiding",title:"What the Algorithm Is Actually Hiding From You",category:"Animated Videos",description:"Animated educational storytelling built around a strong conceptual hook.",url:"https://www.youtube.com/shorts/76_AjqY9wvI",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Animation","Algorithm","Education"],thumbnail:"https://img.youtube.com/vi/76_AjqY9wvI/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/76_AjqY9wvI/hqdefault.jpg"},
    {id:"brands-2026",title:"The Brands That Win in 2026 Will Do This",category:"Animated Videos",description:"Motion-led brand and content strategy storytelling.",url:"https://www.youtube.com/shorts/PXACIBWPqXo",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Animation","Brands","Strategy"],thumbnail:"https://img.youtube.com/vi/PXACIBWPqXo/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/PXACIBWPqXo/hqdefault.jpg"},
    {id:"no-engagement",title:"If Your Content Gets NO Engagement, Here's Probably Why",category:"Animated Videos",description:"Animated editorial explanation of common content-performance problems.",url:"https://www.youtube.com/shorts/RLTr8Ou02bI",type:"youtube",platform:"YouTube Shorts",format:"9:16",year:2026,featured:false,tags:["Animation","Content","Engagement"],thumbnail:"https://img.youtube.com/vi/RLTr8Ou02bI/maxresdefault.jpg",fallbackThumbnail:"https://img.youtube.com/vi/RLTr8Ou02bI/hqdefault.jpg"}
  ];

  const filters = ["ALL","AI Documentaries","AI Tutorials","Video Editing","Short-Form Videos","Educational Content","Social Media","Animated Videos"];
  let activeFilter = "ALL";
  let searchTerm = "";
  let aboutPlayer = null;
  let aboutAutoplayAttempted = false;
  let aboutUserMuted = false;
  let aboutReady = false;
  let portfolioObserver = null;
  let motionObserver = null;
  const activePortfolioPlayers = new Map();

  const socialLinks = [
    ["YouTube","https://www.youtube.com/@visual_verse_agency","youtube"],
    ["Instagram","https://www.instagram.com/visual_verse_agency/","instagram"],
    ["Threads","https://www.threads.com/@visual_verse_agency","threads"],
    ["Facebook","https://www.facebook.com/profile.php?id=61590101997513","facebook"],
    ["X","https://x.com/Visual_Verse","x"],
    ["LinkedIn","https://www.linkedin.com/in/shazia-naz-25a519411/","linkedin"],
    ["Bluesky","https://bsky.app/profile/visualverseagency.bsky.social","bluesky"],
    ["Pinterest","https://pin.it/47fnpD5mU","pinterest"],
    ["TikTok","https://www.tiktok.com/@visual_verse_agency0","tiktok"]
  ];

  const icon = (name) => {
    const common = {
      youtube:`<path d="M21 8.2a2.7 2.7 0 0 0-1.9-1.9C17.4 5.8 12 5.8 12 5.8s-5.4 0-7.1.5A2.7 2.7 0 0 0 3 8.2 28 28 0 0 0 2.6 12 28 28 0 0 0 3 15.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.1.5 7.1.5s5.4 0 7.1-.5a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .4-3.8 28 28 0 0 0-.4-3.8Z"/><path d="m10 9 5 3-5 3V9Z"/>`,
      instagram:`<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>`,
      threads:`<path d="M19.2 10.4c-.3-4.1-2.8-6.5-7-6.5-4.4 0-7.2 2.6-7.2 6.7 0 4.4 2.9 7.5 7.5 7.5 3.2 0 5.5-1.6 6.1-4.3.4-1.9-.6-3.4-2.8-4.1-2.3-.8-5.1-.2-5.2 1.8-.1 1.5 1.4 2.2 2.8 2 1.4-.1 2.6-.8 3.1-2.1.6-1.7-.4-4-3.4-5.1"/><path d="M12.2 12.1c3.7-1.1 7.2.1 7.5 3.2"/>`,
      facebook:`<path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7.8v3h2.7v8"/>`,
      x:`<path d="m4 4 16 16M20 4 4 20"/><path d="M5 4h4l10 16h-4L5 4Z"/>`,
      linkedin:`<path d="M6 9v12M6 5.5v.1M10 21V9m0 5c0-3 1.7-5 4.5-5S19 11 19 14v7"/><rect x="3" y="3" width="18" height="18" rx="2"/>`,
      bluesky:`<path d="M5 5c2.2 1.7 4.2 4.7 7 8.1C14.8 9.7 16.8 6.7 19 5c1.1-.8 2.7-.1 2.2 1.3-.9 2.7-2.7 4.9-5.1 6.4 2.5-.1 4.2 1 4.8 2.5.7 1.7-.8 3.1-2.4 3.2-2.4.1-4.5-1.5-6.5-3.9-2 2.4-4.1 4-6.5 3.9-1.6-.1-3.1-1.5-2.4-3.2.6-1.5 2.3-2.6 4.8-2.5C5.5 11.2 3.7 9 2.8 6.3 2.3 4.9 3.9 4.2 5 5Z"/>`,
      pinterest:`<circle cx="12" cy="12" r="9"/><path d="M9.8 18.8c.7-2.1 1.1-3.8 1.4-5.4-.9-1.5-.2-4 1.8-4 1.3 0 1.9 1 1.9 2 0 1.2-.7 3.2-1.1 5-.3 1.5.8 2.7 2.3 2.7 2.8 0 4.7-2.9 4.7-6.3 0-2.6-1.8-5-5.4-5-3.9 0-6.4 2.9-6.4 6 0 1.1.3 2.1.9 2.8"/>`,
      tiktok:`<path d="M15 4v9.2a4.3 4.3 0 1 1-3-4.1"/><path d="M15 4c.5 2 1.9 3.2 4 3.4"/>`
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${common[name] || ""}</svg>`;
  };

  function initIntro() {
    const intro = document.getElementById("siteIntro");
    const enter = document.getElementById("enterPortfolio");
    const skip = document.getElementById("skipIntro");
    const finish = () => {
      intro.classList.add("is-done");
      sessionStorage.setItem("vvaIntroSeen","1");
    };
    if (sessionStorage.getItem("vvaIntroSeen") === "1") intro.classList.add("is-done");
    enter.addEventListener("click", finish);
    skip.addEventListener("click", finish);
    setTimeout(() => { if (!intro.classList.contains("is-done")) finish(); }, 3500);
  }

  function initNavigation() {
    const header = document.getElementById("siteHeader");
    const toggle = document.getElementById("menuToggle");
    const mobile = document.getElementById("mobileNav");
    const links = [...document.querySelectorAll(".desktop-nav a")];
    const sections = ["about","services","portfolio","success","contact"].map(id=>document.getElementById(id));
    const setMenu = (open) => {
      toggle.classList.toggle("open",open);
      mobile.classList.toggle("open",open);
      mobile.setAttribute("aria-hidden",String(!open));
      toggle.setAttribute("aria-expanded",String(open));
      toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
      document.body.classList.toggle("menu-open",open);
    };
    toggle.addEventListener("click",()=>setMenu(!mobile.classList.contains("open")));
    mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
    const onScroll = () => {
      header.classList.toggle("scrolled",window.scrollY > 25);
      let current = "";
      sections.forEach(s=>{if(s && window.scrollY >= s.offsetTop - 180) current=s.id});
      links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
    };
    window.addEventListener("scroll",onScroll,{passive:true});
    onScroll();
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener("click",e=>{
        const target=document.querySelector(a.getAttribute("href"));
        if(target){e.preventDefault();target.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}
      });
    });
  }

  function getFilteredItems() {
    const q = searchTerm.trim().toLowerCase();
    return portfolioItems.filter(item=>{
      const categoryMatch = activeFilter==="ALL" || item.category===activeFilter;
      const haystack = [item.title,item.category,item.description,item.platform,item.year,item.format,...item.tags].join(" ").toLowerCase();
      return categoryMatch && (!q || haystack.includes(q));
    });
  }

  function extractYouTubeId(url) {
    const match = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([^?&/]+)/i);
    return match ? match[1] : "";
  }

  function cardHTML(item,index,context="archive") {
    const portrait = item.format === "9:16";
    const thumb = item.thumbnail || "";
    return `
      <article class="portfolio-card reveal" data-project-id="${item.id}" style="transition-delay:${Math.min(index*70,420)}ms">
        <div class="card-media ${portrait?"portrait":""}" data-video-id="${extractYouTubeId(item.url)}" data-thumbnail="${thumb}" data-fallback="${item.fallbackThumbnail || thumb}">
          <img src="${thumb}" data-fallback-src="${item.fallbackThumbnail || thumb}" alt="${escapeHtml(item.title)} YouTube thumbnail" loading="lazy" decoding="async">
          <span class="media-badge">SILENT PREVIEW / ${item.format}</span>
        </div>
        <div class="card-body">
          <div class="card-meta"><span>${String(index+1).padStart(2,"0")} / ${escapeHtml(item.category)}</span><span>${item.year}</span></div>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-description">${escapeHtml(item.description)}</p>
          <div class="card-bottom"><span>${escapeHtml(item.platform)} · ${escapeHtml(item.format)}</span><a class="card-link" href="${item.url}" target="_blank" rel="noopener noreferrer">WATCH ↗</a></div>
        </div>
      </article>`;
  }

  function renderFilters() {
    const list=document.getElementById("filterList");
    list.innerHTML=filters.map(f=>`<button type="button" class="${activeFilter===f?"active":""}" data-filter="${f}">${f.toUpperCase()}</button>`).join("");
    list.addEventListener("click",e=>{
      const btn=e.target.closest("button[data-filter]");
      if(!btn)return;
      activeFilter=btn.dataset.filter;
      renderFilters();
      renderPortfolio();
    });
  }

  function renderPortfolio() {
    const items=getFilteredItems();
    const featured=items.filter(i=>i.featured);
    document.getElementById("portfolioCount").textContent=portfolioItems.length;
    document.getElementById("featuredGrid").innerHTML=featured.length ? featured.map((i,n)=>cardHTML(i,n,"featured")).join("") : `<div class="empty-state" style="grid-column:1/-1;display:block"><span>NO FEATURED MATCHES</span><h3>Try another filter or search term.</h3></div>`;
    document.getElementById("portfolioGrid").innerHTML=items.map((i,n)=>cardHTML(i,n,"archive")).join("");
    const empty=document.getElementById("emptyState");
    empty.hidden=items.length!==0;
    initImageFallbacks();
    initPortfolioVideos();
    requestAnimationFrame(()=>document.querySelectorAll("#featuredGrid .reveal,#portfolioGrid .reveal").forEach(el=>el.classList.add("is-visible")));
  }

  function initPortfolio() {
    renderFilters();
    renderPortfolio();
    document.getElementById("portfolioSearch").addEventListener("input",e=>{
      searchTerm=e.target.value;
      renderPortfolio();
    });
    document.getElementById("clearSearch").addEventListener("click",()=>{
      searchTerm="";
      activeFilter="ALL";
      document.getElementById("portfolioSearch").value="";
      renderFilters();
      renderPortfolio();
    });
  }

  function renderCollection(id,category) {
    const el=document.getElementById(id);
    if(!el)return;
    const items=portfolioItems.filter(i=>i.category===category);
    el.innerHTML=items.map((i,n)=>cardHTML(i,n,"collection")).join("");
    initImageFallbacks();
    initPortfolioVideos();
    requestAnimationFrame(()=>el.querySelectorAll(".reveal").forEach(x=>x.classList.add("is-visible")));
  }

  function renderSocialLinks() {
    const row=document.getElementById("socialRow");
    row.innerHTML=socialLinks.map(([name,url,key])=>`<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name}" title="${name}">${icon(key)}</a>`).join("");
  }

  function renderAnimated() {
    const items=portfolioItems.filter(i=>i.category==="Animated Videos");
    const el=document.getElementById("animatedGrid");
    el.innerHTML=items.map((i,n)=>cardHTML(i,n,"animated")).join("");
    initImageFallbacks();
    initPortfolioVideos();
    requestAnimationFrame(()=>el.querySelectorAll(".reveal").forEach(x=>x.classList.add("is-visible")));
  }

  function initImageFallbacks() {
    document.querySelectorAll("img[data-fallback-src]").forEach(img=>{
      if(img.dataset.fallbackBound==="1")return;
      img.dataset.fallbackBound="1";
      img.addEventListener("error",()=>{
        const fallback=img.dataset.fallbackSrc;
        if(fallback && img.src!==fallback){img.src=fallback;}
        else{img.style.opacity="0";img.parentElement.classList.add("image-missing");}
      });
    });
  }

  function loadYouTubeApi() {
    if(window.YT && window.YT.Player)return Promise.resolve();
    if(window._vvaYTPromise)return window._vvaYTPromise;
    window._vvaYTPromise=new Promise(resolve=>{
      const tag=document.createElement("script");
      tag.src="https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady=resolve;
      document.head.appendChild(tag);
    });
    return window._vvaYTPromise;
  }

  function portfolioPlayerOptions(videoId) {
    return {
      videoId,
      playerVars:{autoplay:1,controls:0,rel:0,modestbranding:1,playsinline:1,loop:1,playlist:videoId,iv_load_policy:3},
      events:{
        onReady:event=>{
          event.target.mute();
          event.target.setVolume(0);
          event.target.playVideo();
          const host=event.target.getIframe()?.parentElement;
          if(host)host.classList.add("player-active");
        }
      }
    };
  }

  async function createPortfolioPlayer(host) {
    if(host.dataset.loaded==="1")return;
    const id=host.dataset.videoId;
    if(!id)return;
    host.dataset.loaded="1";
    await loadYouTubeApi();
    if(!window.YT || !window.YT.Player)return;
    const player=new YT.Player(host,{...portfolioPlayerOptions(id)});
    activePortfolioPlayers.set(host,player);
  }

  function initPortfolioVideos() {
    if(portfolioObserver)portfolioObserver.disconnect();
    portfolioObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        const host=entry.target;
        if(entry.isIntersecting){
          createPortfolioPlayer(host);
          host.closest(".portfolio-card")?.classList.add("media-visible");
        }else{
          const player=activePortfolioPlayers.get(host);
          if(player){try{player.pauseVideo();}catch(e){}}
          host.closest(".portfolio-card")?.classList.remove("media-visible");
        }
      });
    },{rootMargin:"180px 0px",threshold:.12});
    document.querySelectorAll(".card-media[data-video-id]").forEach(host=>portfolioObserver.observe(host));
  }

  function initIntersectionObserver() {
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target);}
      });
    },{threshold:.12,rootMargin:"0px 0px -40px"});
    document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

    motionObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        const media=entry.target.querySelector(".card-media");
        if(!media)return;
        media.style.setProperty("--motion-play",entry.isIntersecting?"running":"paused");
        if(entry.isIntersecting){
          media.animate([{transform:"translate3d(-1.8%,0,0) scale(1.04)"},{transform:"translate3d(1.8%,0,0) scale(1.04)"}],{duration:18000,iterations:Infinity,direction:"alternate",easing:"ease-in-out"});
        }
      });
    },{threshold:.05});
    document.querySelectorAll(".portfolio-card").forEach(card=>motionObserver.observe(card));
  }

  function initRevealAnimations() {
    // The observer is initialized after all dynamic portfolio sections have rendered.
    initIntersectionObserver();
  }

  function initCounters() {}

  function initAboutVideo() {
    const host=document.getElementById("aboutPlayer");
    const play=document.getElementById("aboutPlay");
    const sound=document.getElementById("aboutSound");
    const volume=document.getElementById("aboutVolume");
    const fullscreen=document.getElementById("aboutFullscreen");
    const notice=document.getElementById("soundNotice");
    let sectionSeen=false;

    const create=async()=>{
      if(aboutPlayer)return;
      await loadYouTubeApi();
      if(!window.YT || !window.YT.Player)return;
      aboutPlayer=new YT.Player(host,{
        videoId:"NN3Qvk4huyE",
        playerVars:{autoplay:0,controls:1,rel:0,modestbranding:1,playsinline:1,loop:1,playlist:"NN3Qvk4huyE",enablejsapi:1},
        events:{
          onReady:async()=>{
            aboutReady=true;
            try{
              aboutPlayer.setVolume(100);
              aboutPlayer.unMute();
              await Promise.resolve(aboutPlayer.playVideo());
              aboutAutoplayAttempted=true;
              setTimeout(()=>{
                if(aboutPlayer && aboutPlayer.isMuted && aboutPlayer.isMuted()){
                  notice.classList.add("show");
                  sound.textContent="ENABLE SOUND";
                }else{
                  notice.classList.remove("show");
                  sound.textContent="MUTE";
                }
              },700);
            }catch(e){
              aboutAutoplayAttempted=true;
              try{aboutPlayer.mute();aboutPlayer.playVideo();}catch(_){}
              notice.classList.add("show");
              sound.textContent="ENABLE SOUND";
            }
          },
          onStateChange:e=>{
            if(window.YT && e.data===YT.PlayerState.PLAYING)play.textContent="PAUSE";
            else if(window.YT && e.data===YT.PlayerState.PAUSED)play.textContent="PLAY";
          }
        }
      });
    };

    const section=document.getElementById("about");
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting && !sectionSeen){
          sectionSeen=true;
          create();
        }
      });
    },{threshold:.22});
    observer.observe(section);

    play.addEventListener("click",()=>{
      if(!aboutPlayer)return;
      const state=aboutPlayer.getPlayerState();
      if(state===YT.PlayerState.PLAYING)aboutPlayer.pauseVideo();else aboutPlayer.playVideo();
    });
    sound.addEventListener("click",()=>{
      if(!aboutPlayer)return;
      aboutUserMuted=false;
      aboutPlayer.unMute();
      aboutPlayer.setVolume(Number(volume.value));
      aboutPlayer.playVideo();
      notice.classList.remove("show");
      sound.textContent="MUTE";
    });
    volume.addEventListener("input",()=>{
      if(!aboutPlayer)return;
      const value=Number(volume.value);
      aboutPlayer.setVolume(value);
      if(value===0){aboutUserMuted=true;aboutPlayer.mute();sound.textContent="UNMUTE";}
      else{aboutUserMuted=false;aboutPlayer.unMute();sound.textContent="MUTE";}
    });
    fullscreen.addEventListener("click",()=>{
      const iframe=host.querySelector("iframe");
      if(iframe?.requestFullscreen)iframe.requestFullscreen();
    });
  }

  function initContactForm() {
    const form=document.getElementById("projectForm");
    const status=document.getElementById("formStatus");
    const fields=[...form.querySelectorAll(".field")];
    const validate=field=>{
      const input=field.querySelector("input,select,textarea");
      const small=field.querySelector("small");
      let message="";
      if(input.required && !input.value.trim())message="This field is required.";
      else if(input.type==="email" && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))message="Enter a valid email address.";
      field.classList.toggle("invalid",Boolean(message));
      small.textContent=message;
      return !message;
    };
    fields.forEach(f=>f.querySelector("input,select,textarea").addEventListener("blur",()=>validate(f)));
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const valid=fields.every(validate);
      if(!valid){status.textContent="Please correct the highlighted fields.";return;}
      const data=new FormData(form);
      const subject=encodeURIComponent(`Visual Verse Agency Project Inquiry — ${data.get("projectType")}`);
      const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject Type: ${data.get("projectType")}\n\nMessage:\n${data.get("message")}`);
      status.textContent="Opening your email client with a prepared draft.";
      window.location.href=`mailto:visualverseagencyofficial@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  function initWhatsApp() {
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>a.setAttribute("rel","noopener noreferrer"));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
  }

  function boot() {
    initIntro();
    initNavigation();
    initSmoothScroll();
    initPortfolio();
    renderCollection("documentaryGrid","AI Documentaries");
    renderCollection("editingGrid","Video Editing");
    renderCollection("tutorialGrid","AI Tutorials");
    renderCollection("shortGrid","Short-Form Videos");
    renderAnimated();
    renderSocialLinks();
    initAboutVideo();
    initContactForm();
    initWhatsApp();
    initRevealAnimations();
    initCounters();
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);
  else boot();
})();


    cards.forEach((card) => {
      const media =
        $(".portfolio-media", card);

      if (!media) return;

      card.addEventListener(
        "mouseenter",
        () => {
          media.classList.add(
            "is-hovered"
          );
        }
      );

      card.addEventListener(
        "mouseleave",
        () => {
          media.classList.remove(
            "is-hovered"
          );
        }
      );
    });
  }


  /* =========================================================
     BODY SCROLL LOCK FOR MODALS
     ========================================================= */

  function initializeModalState() {
    const dialog = $("#videoPlayer");

    if (!dialog) return;

    dialog.addEventListener(
      "show",
      () => {
        document.body.classList.add(
          "modal-open"
        );
      }
    );

    dialog.addEventListener(
      "close",
      () => {
        document.body.classList.remove(
          "modal-open"
        );
      }
    );
  }


  /* =========================================================
     DOM READY
     ========================================================= */

  function init() {
    renderServices();
    renderFilters();
    renderFeatured();
    renderPortfolio();
    renderSocials();

    initializeWhyBlocks();

    updateProjectCount();
    initializeStats();

    initializeIntro();
    initializeNavigation();

    initializePortfolioControls();

    initializeVideoPlayers();
    initializeAboutVideo();
    initializeLazyVideoElements();

    initializeImageFallbacks();
    initializeAnimations();

    initializeAnimatedMarquee();
    initializeContinuousTracks();

    initializeContactForm();
    initializeWhatsApp();

    initializeExternalLinks();
    initializeParallax();

    initializeKeyboardControls();
    initializeModalState();

    /*
      This is intentionally called after portfolio
      rendering so dynamically created cards are ready.
    */
    initializeVideoHoverEffects();

    /*
      Expose read-only data for debugging/integration
      without polluting the global namespace excessively.
    */
    window.VisualVerse = {
      portfolioItems,
      services,
      socialLinks,
      getStats
    };
  }


  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }

})();
```
