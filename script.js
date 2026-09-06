```javascript
/* =========================================================
   VISUAL VERSE AGENCY
   script.js
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     CONFIG
     ========================================================= */

  const CONFIG = {
    whatsapp: "https://wa.me/923088846208",
    email: "visualverseagencyofficial@gmail.com",

    youtubeThumbnail: (id, fallback = false) =>
      `https://img.youtube.com/vi/${id}/${fallback ? "hqdefault" : "maxresdefault"}.jpg`,

    youtubeEmbed: (id) =>
      `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`
  };


  /* =========================================================
     PORTFOLIO — SINGLE SOURCE OF TRUTH
     ========================================================= */

  const portfolioItems = [
    /* -------------------------------------------------------
       AI DOCUMENTARIES
       ------------------------------------------------------- */

    {
      id: "treasure-island",
      title: "Treasure Island",
      category: "AI DOCUMENTARIES",
      description:
        "A cinematic AI-powered long-form adaptation of Treasure Island, combining narrative storytelling, visual direction, editing, and documentary-style pacing.",
      url: "https://youtu.be/osL4gAH8xNc?si=zaSPD3UmRiOOHJU7",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: true,
      tags: ["AI Documentary", "Long-Form", "Storytelling", "Cinematic"]
    },

    {
      id: "wuthering-heights",
      title: "Wuthering Heights",
      category: "AI DOCUMENTARIES",
      description:
        "A cinematic long-form AI storytelling project inspired by Emily Brontë's Wuthering Heights.",
      url: "https://youtu.be/RE7sevzFhF4?si=DB9jP_LHQyhBRw0D",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: true,
      tags: ["AI Documentary", "Literature", "Long-Form", "Cinematic"]
    },

    {
      id: "pride-and-prejudice",
      title: "Pride and Prejudice",
      category: "AI DOCUMENTARIES",
      description:
        "An AI-powered cinematic interpretation of Jane Austen's classic novel, designed around visual storytelling and long-form retention.",
      url: "https://youtu.be/sKMJp0c9AeY?si=FXjSaFriBRkWy7CU",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Documentary", "Literature", "Storytelling"]
    },

    {
      id: "sense-and-sensibility",
      title: "Sense and Sensibility",
      category: "AI DOCUMENTARIES",
      description:
        "A long-form AI visual storytelling project based on Jane Austen's Sense and Sensibility.",
      url: "https://youtu.be/GWNu1tyTH-Y?si=SJln0XXe1KsmfkFd",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Documentary", "Literature", "Long-Form"]
    },

    {
      id: "hezbollah",
      title: "Hezbollah",
      category: "AI DOCUMENTARIES",
      description:
        "A neutral informational and historical documentary-style project examining Hezbollah within its broader historical and geopolitical context.",
      url: "https://youtu.be/D25HJhqNLCU?si=UrStDBUJ-Q5YkNOV",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Documentary", "History", "Informational", "Geopolitics"]
    },

    {
      id: "the-last-reserve",
      title: "The Last Reserve",
      category: "AI DOCUMENTARIES",
      description:
        "A cinematic long-form storytelling project built around atmosphere, narrative tension, and visual pacing.",
      url: "https://youtu.be/kQf6pYlY8O4?si=OUymPUtDgikx3bX-",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Documentary", "Long-Form", "Cinematic", "Storytelling"]
    },


    /* -------------------------------------------------------
       AI TUTORIALS
       ------------------------------------------------------- */

    {
      id: "windows-11-24h2",
      title: "Upgrade to Windows 11 24H2 Without USB | No Data Loss",
      category: "AI TUTORIALS",
      description:
        "A practical technology tutorial presented through structured visual explanation, screen content, and retention-focused editing.",
      url: "https://youtu.be/brJxtY_phAE?si=2QGk-FxvioFBVo8D",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Tutorials", "Technology", "Windows", "Education"]
    },

    {
      id: "atlas-os-vs-windows",
      title: "Atlas OS vs Windows 10 🔥 Make Your Old PC Faster! | AI COMPASS",
      category: "AI TUTORIALS",
      description:
        "A technology-focused comparison and tutorial using structured visual storytelling and engaging editing.",
      url: "https://youtu.be/yF0uzh9j7KI?si=UxCClr_Fmxi9VyHO",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Tutorials", "Technology", "Windows", "PC"]
    },

    {
      id: "google-drive-tutorial",
      title: "Google Drive Complete Tutorial in Urdu/Hindi | Beginner to Advanced 2026",
      category: "AI TUTORIALS",
      description:
        "A comprehensive educational tutorial designed to guide viewers from beginner concepts through advanced Google Drive workflows.",
      url: "https://www.youtube.com/watch?v=2s8OCpBZj1E",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Tutorials", "Education", "Google Drive", "Urdu", "Hindi"]
    },

    {
      id: "free-ai-voice-tools",
      title: "Finally a FREE Alternative to Expensive AI Voice Tools",
      category: "AI TUTORIALS",
      description:
        "An educational technology project exploring accessible AI voice-production alternatives.",
      url: "https://www.youtube.com/watch?v=gpmIVAWNk80",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["AI Tutorials", "AI", "Voice", "Technology"]
    },


    /* -------------------------------------------------------
       VIDEO EDITING
       ------------------------------------------------------- */

    {
      id: "retention-project-01",
      title: "High-Retention Video Editing Project 01",
      category: "VIDEO EDITING",
      description:
        "A retention-focused editing showcase combining pacing, visual hierarchy, motion, cuts, and narrative rhythm.",
      url: "https://www.youtube.com/watch?v=7Ex6DrQc_M4",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: true,
      tags: ["Video Editing", "Retention", "Editing Showcase"]
    },

    {
      id: "city-308k",
      title: "This City Was Costing Him $308K | Client Video Editing Showcase",
      category: "VIDEO EDITING",
      description:
        "A client-style editing showcase built around strong hooks, pacing, visual transitions, and narrative clarity.",
      url: "https://www.youtube.com/watch?v=h8vNoJM64B8",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: true,
      tags: ["Video Editing", "Client Work", "Retention", "Editing Showcase"]
    },

    {
      id: "cold-streets-1983",
      title: "Surviving the Cold Streets of 1983",
      category: "VIDEO EDITING",
      description:
        "A cinematic editing project using atmosphere, pacing, historical visual language, and narrative progression.",
      url: "https://www.youtube.com/watch?v=bNT5yYhj0FQ",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["Video Editing", "Cinematic", "Storytelling", "History"]
    },

    {
      id: "retention-drops",
      title: "Why Your Retention Drops Every Single Time",
      category: "VIDEO EDITING",
      description:
        "A retention-focused editing project examining pacing, viewer attention, hooks, and content structure.",
      url: "https://www.youtube.com/watch?v=myKL6i9SG34",
      type: "youtube",
      platform: "YouTube",
      format: "16:9",
      year: "2026",
      featured: false,
      tags: ["Video Editing", "Retention", "YouTube", "Education"]
    },


    /* -------------------------------------------------------
       SHORT-FORM VIDEOS
       ------------------------------------------------------- */

    {
      id: "wall-design",
      title: "Is This The Best Wall Design?",
      category: "SHORT-FORM VIDEOS",
      description: "A visually driven short-form design project.",
      url: "https://www.youtube.com/shorts/Mb0jxa4XETk",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Design", "Visual Storytelling"]
    },

    {
      id: "indoor-bike",
      title: "This Indoor Bike Turns Your Home Into a Gym 🚴‍♂️",
      category: "SHORT-FORM VIDEOS",
      description: "A product-focused short-form visual story.",
      url: "https://www.youtube.com/shorts/YF5r70xlRH8",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Product", "Lifestyle"]
    },

    {
      id: "big-guy-bike",
      title: "Big Guy Takes on the Exercise Bike 🚴‍♂️🔥",
      category: "SHORT-FORM VIDEOS",
      description: "An engaging short-form fitness and lifestyle concept.",
      url: "https://www.youtube.com/shorts/XdHscHXX22o",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Fitness", "Lifestyle"]
    },

    {
      id: "wall-renovation",
      title: "This Wall Renovation Changed the Whole Room 👀 | Home Makeover",
      category: "SHORT-FORM VIDEOS",
      description: "A before-and-after home transformation presented as short-form visual content.",
      url: "https://www.youtube.com/shorts/oArvZDkCWEA",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Home", "Renovation", "Makeover"]
    },

    {
      id: "landlord-problem",
      title: "Landlord Ignoring a Serious Problem? Do This First ⚖️",
      category: "SHORT-FORM VIDEOS",
      description: "An informational short-form project structured for fast comprehension.",
      url: "https://www.youtube.com/shorts/bRS3BTrFZ_0",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Educational", "Legal Information"]
    },

    {
      id: "website-first-impression",
      title: "Your Website Is Your Digital First Impression 🌐 | Devify Thought",
      category: "SHORT-FORM VIDEOS",
      description: "A social-first technology and branding concept.",
      url: "https://www.youtube.com/shorts/97FQo9kjFsk",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Technology", "Web Design", "Social Media"]
    },

    {
      id: "midnight-hour",
      title: "The Midnight Hour Collection | Why Red is the Ultimate Color of Confidence 💃",
      category: "SHORT-FORM VIDEOS",
      description: "A fashion-oriented short-form visual campaign.",
      url: "https://www.youtube.com/shorts/rr2VoQ2Trn4",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Fashion", "Campaign", "Social Media"]
    },

    {
      id: "city-collection",
      title: "The City Is Loud. Your Style Doesn't Have to Be. | The City Collection",
      category: "SHORT-FORM VIDEOS",
      description: "An editorial fashion-focused short-form story.",
      url: "https://www.youtube.com/shorts/alWZqnZJKnM",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Fashion", "Editorial", "Social Media"]
    },

    {
      id: "workday-chic",
      title: "Why Are We Still Dressing Like It's 1950? | Workday Chic",
      category: "SHORT-FORM VIDEOS",
      description: "A fashion and culture concept designed for vertical social video.",
      url: "https://www.youtube.com/shorts/P1nkIlbt2jk",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Fashion", "Culture", "Social Media"]
    },

    {
      id: "foamy-urine",
      title: "Foamy Urine Means Your Kidney Filters Are Clogged?",
      category: "SHORT-FORM VIDEOS",
      description: "An educational health-information short-form concept.",
      url: "https://www.youtube.com/shorts/_78WMP9jrs0",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Education", "Health"]
    },

    {
      id: "l-dopa",
      title: 'Does L-Dopa Really "Just Replace Dopamine"? | Parkinson\'s Explained',
      category: "SHORT-FORM VIDEOS",
      description: "A science and health education short-form project.",
      url: "https://www.youtube.com/shorts/m6A37ulCQ90",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Education", "Science", "Health"]
    },

    {
      id: "smart-commute",
      title: "What if Your Everyday Commute Could Be Easier, Smarter, and More Enjoyable? 🛴⚡",
      category: "SHORT-FORM VIDEOS",
      description: "A mobility and lifestyle concept designed for vertical video.",
      url: "https://www.youtube.com/shorts/rm3U9ByPLFI",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Mobility", "Lifestyle", "Technology"]
    },

    {
      id: "lahore-solar",
      title: "Why Lahore Is Going Solar ⚡☀️ | Reduce Your Electricity Bills with Solar Energy",
      category: "SHORT-FORM VIDEOS",
      description: "An informational energy and sustainability short-form project.",
      url: "https://www.youtube.com/shorts/kYEjMnadFW0",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Short-Form", "Solar", "Energy", "Education"]
    },

    {
      id: "glowing-forest",
      title: "Building a glowing forest in a jar 🍄",
      category: "SHORT-FORM VIDEOS",
      description:
        "A visually engaging short-form creative project showcasing the making of a glowing forest in a jar.",
      url: "https://youtube.com/shorts/28EcPP609ZA?feature=share",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: [
        "Short-Form",
        "Creative Video",
        "Visual Storytelling",
        "Nature",
        "Craft"
      ]
    },


    /* -------------------------------------------------------
       ANIMATED VIDEOS — FINAL CREATIVE SECTION
       ------------------------------------------------------- */

    {
      id: "animated-project-01",
      title: "Animated Video Project 01",
      category: "ANIMATED VIDEOS",
      description:
        "A motion-led vertical animation project combining typography, graphic movement, visual rhythm, and storytelling.",
      url: "https://www.youtube.com/shorts/sphREbElaGE",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Animated Videos", "Motion Graphics", "Animation"]
    },

    {
      id: "five-platforms",
      title: "One Video → 5 Platforms Without Extra Shoots",
      category: "ANIMATED VIDEOS",
      description:
        "An animated content strategy concept demonstrating multi-format thinking through motion-led storytelling.",
      url: "https://www.youtube.com/shorts/UIRYh6dnxxw",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Animated Videos", "Content Strategy", "Motion Graphics"]
    },

    {
      id: "algorithm-hiding",
      title: "What the Algorithm Is Actually Hiding From You",
      category: "ANIMATED VIDEOS",
      description:
        "A bold animated explainer concept focused on digital platforms, algorithms, and audience attention.",
      url: "https://www.youtube.com/shorts/76_AjqY9wvI",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Animated Videos", "Social Media", "Algorithms", "Explainer"]
    },

    {
      id: "brands-2026",
      title: "The Brands That Win in 2026 Will Do This",
      category: "ANIMATED VIDEOS",
      description:
        "A motion-led strategic content piece exploring modern brand communication.",
      url: "https://www.youtube.com/shorts/PXACIBWPqXo",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Animated Videos", "Brand Strategy", "Motion Graphics"]
    },

    {
      id: "no-engagement",
      title: "If Your Content Gets NO Engagement, Here's Probably Why",
      category: "ANIMATED VIDEOS",
      description:
        "An animated educational concept examining common content engagement problems.",
      url: "https://www.youtube.com/shorts/RLTr8Ou02bI",
      type: "youtube",
      platform: "YouTube",
      format: "9:16",
      year: "2026",
      featured: false,
      tags: ["Animated Videos", "Content Strategy", "Engagement", "Education"]
    }
  ];


  /* =========================================================
     SERVICES
     ========================================================= */

  const services = [
    "AI-POWERED VIDEO PRODUCTION",
    "LONG-FORM AI DOCUMENTARY PRODUCTION",
    "AI STORYTELLING",
    "VIDEO EDITING",
    "HIGH-RETENTION VIDEO EDITING",
    "ANIMATED VIDEO PRODUCTION",
    "MOTION GRAPHICS",
    "ANIMATED SOCIAL MEDIA CONTENT",
    "SHORT-FORM VIDEO PRODUCTION",
    "YOUTUBE CONTENT PRODUCTION",
    "SOCIAL MEDIA CONTENT",
    "EDUCATIONAL VIDEO PRODUCTION",
    "AI & TECHNOLOGY TUTORIALS",
    "SCRIPTWRITING & STORY DEVELOPMENT"
  ];


  /* =========================================================
     SOCIAL LINKS
     ========================================================= */

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@visual_verse_agency",
      icon: "youtube"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/visual_verse_agency/",
      icon: "instagram"
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@visual_verse_agency",
      icon: "threads"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61590101997513",
      icon: "facebook"
    },
    {
      name: "X",
      url: "https://x.com/Visual_Verse",
      icon: "x"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shazia-naz-25a519411/",
      icon: "linkedin"
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/visualverseagency.bsky.social",
      icon: "bluesky"
    },
    {
      name: "Pinterest",
      url: "https://pin.it/47fnpD5mU",
      icon: "pinterest"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@visual_verse_agency0",
      icon: "tiktok"
    }
  ];


  /* =========================================================
     CATEGORY ORDER
     ========================================================= */

  const categoryOrder = [
    "AI DOCUMENTARIES",
    "AI TUTORIALS",
    "VIDEO EDITING",
    "SHORT-FORM VIDEOS",
    "EDUCATIONAL CONTENT",
    "SOCIAL MEDIA",
    "ANIMATED VIDEOS"
  ];


  /* =========================================================
     DOM HELPERS
     ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const escapeHTML = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");


  /* =========================================================
     YOUTUBE HELPERS
     ========================================================= */

  function extractYouTubeId(url = "") {
    try {
      const parsed = new URL(url);

      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.replace("/", "").split("/")[0];
      }

      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v");
      }

      const shortMatch = parsed.pathname.match(/\/shorts\/([^/?]+)/);

      if (shortMatch) {
        return shortMatch[1];
      }

      const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);

      if (embedMatch) {
        return embedMatch[1];
      }
    } catch {
      const fallback =
        url.match(/youtu\.be\/([^?&/]+)/) ||
        url.match(/youtube\.com\/shorts\/([^?&/]+)/) ||
        url.match(/[?&]v=([^?&/]+)/);

      return fallback ? fallback[1] : "";
    }

    return "";
  }


  function getThumbnail(item) {
    const videoId = extractYouTubeId(item.url);
    return videoId ? CONFIG.youtubeThumbnail(videoId) : "";
  }


  /* =========================================================
     SERVICE RENDERING
     ========================================================= */

  function renderServices() {
    const container = $("#serviceList");

    if (!container) return;

    container.innerHTML = services
      .map(
        (service, index) => `
          <article class="service-item reveal-item">
            <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHTML(service)}</h3>
            <span class="service-arrow" aria-hidden="true">↗</span>
          </article>
        `
      )
      .join("");
  }


  /* =========================================================
     PORTFOLIO CARD
     ========================================================= */

  function createPortfolioCard(item, index = 0, variant = "") {
    const thumbnail = getThumbnail(item);
    const videoId = extractYouTubeId(item.url);

    return `
      <article
        class="portfolio-card ${variant}"
        data-project-id="${escapeHTML(item.id)}"
        data-category="${escapeHTML(item.category)}"
        data-format="${escapeHTML(item.format)}"
        style="--card-index:${index}"
      >
        <div class="portfolio-media ${item.format === "9:16" ? "portrait" : "landscape"}">
          ${
            thumbnail
              ? `
                <img
                  src="${thumbnail}"
                  alt="${escapeHTML(item.title)}"
                  loading="lazy"
                  decoding="async"
                  data-fallback="${CONFIG.youtubeThumbnail(videoId, true)}"
                  class="portfolio-thumbnail"
                >
              `
              : ""
          }

          <div class="portfolio-media-fallback" aria-hidden="true">
            <span>VISUAL VERSE</span>
            <strong>${escapeHTML(item.category)}</strong>
          </div>

          <div class="portfolio-media-overlay"></div>

          <button
            class="portfolio-play"
            type="button"
            aria-label="Play ${escapeHTML(item.title)}"
            data-play-video="${escapeHTML(item.id)}"
          >
            <span class="play-icon" aria-hidden="true">▶</span>
          </button>

          <span class="portfolio-format">${escapeHTML(item.format)}</span>
        </div>

        <div class="portfolio-card-content">
          <div class="portfolio-meta">
            <span>${escapeHTML(item.category)}</span>
            <span>${escapeHTML(item.year)}</span>
          </div>

          <h3>${escapeHTML(item.title)}</h3>

          <p>${escapeHTML(item.description)}</p>

          <div class="portfolio-footer">
            <span>${escapeHTML(item.platform)}</span>

            <button
              type="button"
              class="watch-project"
              data-play-video="${escapeHTML(item.id)}"
            >
              WATCH PROJECT
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }


  /* =========================================================
     PORTFOLIO RENDERING
     ========================================================= */

  let activeFilter = "ALL";
  let searchTerm = "";


  function getFilteredItems() {
    let items = [...portfolioItems];

    if (activeFilter !== "ALL") {
      items = items.filter(
        (item) =>
          item.category === activeFilter ||
          item.tags.includes(activeFilter)
      );
    }

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase().trim();

      items = items.filter((item) => {
        const searchable = [
          item.title,
          item.category,
          item.description,
          item.platform,
          item.format,
          item.year,
          ...item.tags
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);
      });
    }

    return items;
  }


  function renderPortfolio() {
    const container = $("#portfolioChapters");

    if (!container) return;

    const items = getFilteredItems();

    if (!items.length) {
      container.innerHTML = `
        <div class="portfolio-empty">
          <span>NO MATCHES</span>
          <h3>No projects match your search.</h3>
          <button type="button" class="clear-search" id="clearPortfolioSearch">
            CLEAR SEARCH
          </button>
        </div>
      `;

      return;
    }

    const grouped = new Map();

    items.forEach((item) => {
      if (!grouped.has(item.category)) {
        grouped.set(item.category, []);
      }

      grouped.get(item.category).push(item);
    });

    const orderedCategories = [
      ...categoryOrder,
      ...[...grouped.keys()].filter(
        (category) => !categoryOrder.includes(category)
      )
    ];

    container.innerHTML = orderedCategories
      .filter((category) => grouped.has(category))
      .map((category) => {
        const categoryItems = grouped.get(category);

        return `
          <section
            class="portfolio-chapter ${
              category === "ANIMATED VIDEOS" ? "animated-chapter" : ""
            }"
            data-portfolio-category="${escapeHTML(category)}"
          >
            <div class="chapter-heading reveal-item">
              <div>
                <span class="section-kicker">SELECTED WORK</span>
                <h3>${escapeHTML(category)}</h3>
              </div>

              <span class="chapter-count">
                ${String(categoryItems.length).padStart(2, "0")} PROJECTS
              </span>
            </div>

            <div class="portfolio-grid ${
              category === "ANIMATED VIDEOS" ? "animated-grid" : ""
            }">
              ${categoryItems
                .map((item, index) =>
                  createPortfolioCard(item, index)
                )
                .join("")}
            </div>
          </section>
        `;
      })
      .join("");

    initializeImageFallbacks(container);
    initializeAnimations(container);
  }


  /* =========================================================
     FILTERS
     ========================================================= */

  function renderFilters() {
    const container = $("#portfolioFilters");

    if (!container) return;

    const filters = [
      "ALL",
      "AI DOCUMENTARIES",
      "AI TUTORIALS",
      "VIDEO EDITING",
      "SHORT-FORM VIDEOS",
      "EDUCATIONAL CONTENT",
      "SOCIAL MEDIA",
      "ANIMATED VIDEOS"
    ];

    container.innerHTML = filters
      .map(
        (filter) => `
          <button
            type="button"
            class="portfolio-filter ${
              activeFilter === filter ? "is-active" : ""
            }"
            data-filter="${escapeHTML(filter)}"
            aria-pressed="${activeFilter === filter}"
          >
            ${escapeHTML(filter)}
          </button>
        `
      )
      .join("");
  }


  function filterPortfolio(filter) {
    activeFilter = filter || "ALL";

    renderFilters();
    renderPortfolio();

    const search = $("#portfolioSearch");

    if (search) {
      search.value = searchTerm;
    }
  }


  function searchPortfolio(value) {
    searchTerm = value || "";
    renderPortfolio();
  }


  /* =========================================================
     FEATURED PORTFOLIO
     ========================================================= */

  function renderFeatured() {
    const container = $("#featuredTrack");

    if (!container) return;

    const featured = portfolioItems.filter((item) => item.featured);

    if (!featured.length) {
      container.innerHTML = "";
      return;
    }

    container.innerHTML = `
      <div class="featured-primary">
        ${createPortfolioCard(featured[0], 0, "featured-large")}
      </div>

      <div class="featured-supporting">
        ${featured
          .slice(1, 3)
          .map((item, index) =>
            createPortfolioCard(item, index + 1, "featured-small")
          )
          .join("")}
      </div>
    `;

    initializeImageFallbacks(container);
    initializeAnimations(container);
  }


  /* =========================================================
     ANIMATED VIDEO MARQUEE
     ========================================================= */

  function initializeAnimatedMarquee() {
    const chapter = $(
      '[data-portfolio-category="ANIMATED VIDEOS"]'
    );

    if (!chapter) return;

    const grid = $(".animated-grid", chapter);

    if (!grid) return;

    if (document.documentElement.classList.contains("reduced-motion")) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    grid.classList.add("animated-grid-ready");

    let direction = 1;
    let position = 0;
    let rafId = null;
    let paused = false;

    const speed = 0.18;

    const animate = () => {
      if (!paused) {
        position += speed * direction;

        const maxScroll = Math.max(
          0,
          grid.scrollWidth - grid.clientWidth
        );

        if (position >= maxScroll) {
          position = maxScroll;
          direction = -1;
        }

        if (position <= 0) {
          position = 0;
          direction = 1;
        }

        grid.scrollLeft = position;
      }

      rafId = requestAnimationFrame(animate);
    };

    grid.addEventListener("mouseenter", () => {
      paused = true;
    });

    grid.addEventListener("mouseleave", () => {
      paused = false;
    });

    grid.addEventListener("focusin", () => {
      paused = true;
    });

    grid.addEventListener("focusout", () => {
      paused = false;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!rafId) {
            rafId = requestAnimationFrame(animate);
          }
        } else if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(grid);
  }


  /* =========================================================
     SOCIAL SVG ICONS
     ========================================================= */

  function socialIcon(name) {
    const icons = {
      youtube: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.7 3.9-6.7 3.9Z"/>
        </svg>
      `,

      instagram: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1"/>
        </svg>
      `,

      threads: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16.7 11.2c-.2-4-2.3-6.2-6.1-6.2-4.1 0-6.5 2.5-6.5 6.9 0 4.7 2.5 7.2 7 7.2 3.9 0 6.3-2 6.3-5.1 0-2.6-1.8-4.2-4.7-4.2-2.6 0-4.3 1.3-4.3 3.2 0 1.5 1.1 2.5 2.8 2.5 1.5 0 2.6-.7 2.9-2.1.1-.4.1-.8.1-1.2 1.2.4 1.8 1.1 1.8 2.1 0 1.7-1.6 2.7-4.3 2.7-3.4 0-5.2-1.7-5.2-5.1 0-3.3 1.7-5 4.9-5 2.5 0 3.8 1.1 4.2 3.3-3.6-.8-6.2.6-6.2 3 0 2.1 1.7 3.5 4 3.5 3.1 0 5.2-2 5.2-5.4 0-.5 0-1-.1-1.4.8.3 1.5.7 2.1 1.2v-2.1c-.5-.4-1.1-.7-1.9-.9ZM12 14.4c-.7 0-1.1-.3-1.1-.8 0-.7.8-1.1 2.2-1.1.3 0 .7 0 1 .1-.1 1.2-.8 1.8-2.1 1.8Z"/>
        </svg>
      `,

      facebook: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8h3V4.1c-.5-.1-1.9-.2-3.6-.2-3.6 0-6 2.2-6 6.1v3.4H3.5V18H7v6h4.3v-6h3.6l.6-4.6h-4.2V10.4c0-1.3.4-2.4 2.7-2.4Z"/>
        </svg>
      `,

      x: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.5L6.1 22H3l7.3-8.4L2.8 2h6.6l4.5 5.9L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z"/>
        </svg>
      `,

      linkedin: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.1 3.3A2.4 2.4 0 1 1 5 8a2.4 2.4 0 0 1 .1-4.7ZM3 9.8h4.2V22H3V9.8Zm6.8 0h4v1.7h.1c.6-1.1 2-2.2 4.1-2.2 4.3 0 5.1 2.8 5.1 6.4V22h-4.2v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V22H9.8V9.8Z"/>
        </svg>
      `,

      bluesky: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 10.5C10.8 8.2 7.5 3.9 4.6 2.2 2 0.7 1.1 1 1.1 2.3c0 1.1.6 9.1.9 10.1.9 3 4.2 4 7.6 3.5-5.8 1-10.5 3.5-5.5 7.2 5.5 4.1 7.9-1.2 7.9-3.6 0 2.4 2.4 7.7 7.9 3.6 5-3.7.3-6.2-5.5-7.2 3.4.5 6.7-.5 7.6-3.5.3-1 .9-9 .9-10.1C22.9 1 22 0.7 19.4 2.2 16.5 3.9 13.2 8.2 12 10.5Z"/>
        </svg>
      `,

      pinterest: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.6 0-3.5.4-5l1-4.2s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-4.9 0-2.5-1.8-4.3-4.5-4.3-3.1 0-4.9 2.3-4.9 4.7 0 .9.3 1.8.8 2.4.1.1.1.2.1.4l-.3 1.2c-.1.4-.4.5-.8.3-1.4-.6-2.3-2.6-2.3-4.2 0-3.4 2.5-6.5 7.2-6.5 3.8 0 6.7 2.7 6.7 6.2 0 3.7-2.3 6.7-5.5 6.7-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1.1-1 2.5-1.5 3.3.8.2 1.7.4 2.6.4A10 10 0 0 0 12 2Z"/>
        </svg>
      `,

      tiktok: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16.6 2c.2 1.8 1.2 3.2 3 4v3.2c-1.5 0-2.8-.4-4-1.1v7.3c0 4.2-3 6.6-6.5 6.6-3.4 0-5.8-2.2-5.8-5.3 0-3.5 2.9-5.7 6.8-5.3v3.4c-1.9-.3-3.2.5-3.2 1.9 0 1.1.9 1.8 2.2 1.8 1.5 0 2.9-1 2.9-3.4V2h4.6Z"/>
        </svg>
      `
    };

    return icons[name] || "";
  }


  /* =========================================================
     SOCIAL RENDERING
     ========================================================= */

  function renderSocials() {
    const containers = [
      $("#socialList"),
      $("#footerSocials")
    ].filter(Boolean);

    if (!containers.length) return;

    const markup = socialLinks
      .map(
        (social) => `
          <a
            class="social-link"
            href="${social.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visual Verse Agency on ${escapeHTML(social.name)}"
          >
            ${socialIcon(social.icon)}
            <span class="sr-only">${escapeHTML(social.name)}</span>
          </a>
        `
      )
      .join("");

    containers.forEach((container) => {
      container.innerHTML = markup;
    });
  }


  /* =========================================================
     PROJECT COUNT + CALCULATED STATS
     ========================================================= */

  function updateProjectCount() {
    const count = portfolioItems.length;

    $$("[data-project-count]").forEach((element) => {
      element.textContent = count;
    });

    const explicitCount = $("#projectCount");

    if (explicitCount) {
      explicitCount.textContent = count;
    }
  }


  function getStats() {
    const categories = new Set(
      portfolioItems.map((item) => item.category)
    );

    const platforms = new Set(
      portfolioItems.map((item) => item.platform)
    );

    const formats = new Set(
      portfolioItems.map((item) => item.format)
    );

    return {
      projects: portfolioItems.length,
      categories: categories.size,
      platforms: platforms.size,
      formats: formats.size
    };
  }


  function initializeStats() {
    const container = $("#statsGrid");

    if (!container) return;

    const stats = getStats();

    const values = [
      {
        value: stats.projects,
        label: "PORTFOLIO PROJECTS"
      },
      {
        value: stats.categories,
        label: "CREATIVE CATEGORIES"
      },
      {
        value: stats.platforms,
        label: "PLATFORMS"
      },
      {
        value: stats.formats,
        label: "FORMATS"
      }
    ];

    container.innerHTML = values
      .map(
        (stat) => `
          <div class="stat-item reveal-item">
            <strong
              class="stat-value"
              data-counter="${stat.value}"
            >0</strong>
            <span>${stat.label}</span>
          </div>
        `
      )
      .join("");

    initializeCounters(container);
  }


  function initializeCounters(parent = document) {
    const counters = $$("[data-counter]", parent);

    if (!counters.length) return;

    const reducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateCounter = (element) => {
      const target = Number(element.dataset.counter) || 0;

      if (reducedMotion) {
        element.textContent = target;
        return;
      }

      const duration = 900;
      const start = performance.now();

      const update = (now) => {
        const progress = Math.min(
          (now - start) / duration,
          1
        );

        const eased =
          1 - Math.pow(1 - progress, 3);

        element.textContent = Math.round(
          target * eased
        );

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animateCounter(entry.target);
          observerInstance.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }


  /* =========================================================
     WHY VISUAL VERSE
     ========================================================= */

  function initializeWhyBlocks() {
    const container = $("#processGrid");

    if (!container) return;

    const blocks = [
      {
        number: "01",
        title: "STORY-FIRST THINKING",
        text:
          "Every production begins with the idea, audience, narrative, and intended emotional response—not the software."
      },
      {
        number: "02",
        title: "AI-POWERED PRODUCTION",
        text:
          "AI-assisted workflows help turn concepts into cinematic visuals, explainers, documentaries, and platform-ready content."
      },
      {
        number: "03",
        title: "HIGH-RETENTION EDITING",
        text:
          "Editing is structured around hooks, pacing, visual rhythm, information hierarchy, and sustained viewer attention."
      },
      {
        number: "04",
        title: "MULTI-FORMAT CONTENT",
        text:
          "One creative direction can be adapted across long-form, vertical, social, educational, and animated formats."
      },
      {
        number: "05",
        title: "PLATFORM-READY DELIVERY",
        text:
          "Projects are prepared around the format, aspect ratio, pacing, and presentation requirements of the intended platform."
      }
    ];

    container.innerHTML = blocks
      .map(
        (block) => `
          <article class="process-block reveal-item">
            <span class="process-number">${block.number}</span>
            <div>
              <h3>${escapeHTML(block.title)}</h3>
              <p>${escapeHTML(block.text)}</p>
            </div>
          </article>
        `
      )
      .join("");
  }


  /* =========================================================
     IMAGE FALLBACKS
     ========================================================= */

  function initializeImageFallbacks(parent = document) {
    $$(".portfolio-thumbnail", parent).forEach((image) => {
      if (image.dataset.fallbackBound === "true") return;

      image.dataset.fallbackBound = "true";

      image.addEventListener(
        "error",
        () => {
          if (
            image.dataset.fallback &&
            image.src !== image.dataset.fallback
          ) {
            image.src = image.dataset.fallback;
            return;
          }

          image.style.display = "none";

          const media = image.closest(".portfolio-media");

          if (media) {
            media.classList.add("thumbnail-failed");
          }
        },
        { once: false }
      );
    });
  }


  /* =========================================================
     VIDEO MODAL
     ========================================================= */

  let currentVideoId = null;


  function openVideo(item) {
    const dialog = $("#videoPlayer");
    const frame = $("#videoFrame");
    const title = $("#videoPlayerTitle");
    const format = $("#videoPlayerFormat");
    const loading = $("#videoLoading");

    if (!dialog || !frame || !item) return;

    const videoId = extractYouTubeId(item.url);

    if (!videoId) {
      window.open(
        item.url,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    currentVideoId = videoId;

    if (title) {
      title.textContent = item.title;
    }

    if (format) {
      format.textContent =
        `${item.format} · ${item.platform}`;
    }

    if (loading) {
      loading.hidden = false;
    }

    frame.innerHTML = "";

    const iframe = document.createElement("iframe");

    iframe.src = CONFIG.youtubeEmbed(videoId);

    iframe.title = item.title;
    iframe.loading = "eager";
    iframe.allow =
      "autoplay; encrypted-media; picture-in-picture";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute(
      "referrerpolicy",
      "strict-origin-when-cross-origin"
    );

    iframe.addEventListener("load", () => {
      if (loading) {
        loading.hidden = true;
      }
    });

    frame.appendChild(iframe);

    if (typeof dialog.showModal === "function") {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      dialog.setAttribute("open", "");
      document.body.classList.add("modal-open");
    }
  }


  function closeVideo() {
    const dialog = $("#videoPlayer");
    const frame = $("#videoFrame");

    currentVideoId = null;

    if (frame) {
      frame.innerHTML = "";
    }

    if (!dialog) return;

    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      document.body.classList.remove("modal-open");
    }
  }


  function initializeVideoPlayers() {
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest(
        "[data-play-video]"
      );

      if (!trigger) return;

      const projectId =
        trigger.dataset.playVideo;

      const item = portfolioItems.find(
        (project) => project.id === projectId
      );

      if (item) {
        openVideo(item);
      }
    });

    const dialog = $("#videoPlayer");

    if (!dialog) return;

    dialog.addEventListener("click", (event) => {
      if (
        event.target === dialog ||
        event.target.closest("[data-close-video]")
      ) {
        closeVideo();
      }
    });

    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeVideo();
    });
  }


  /* =========================================================
     ABOUT VIDEO — VISIBLE-ONLY MUTED AUTOPLAY
     ========================================================= */

  function initializeAboutVideo() {
    const video = $("[data-video-id]");

    if (!video) return;

    const videoId = video.dataset.videoId;

    if (!videoId) return;

    const reducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const loadPlayer = () => {
      if (video.dataset.loaded === "true") return;

      video.dataset.loaded = "true";

      const iframe = document.createElement("iframe");

      iframe.src =
        `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}` +
        "?autoplay=1&mute=1&playsinline=1&loop=1" +
        `&playlist=${encodeURIComponent(videoId)}` +
        "&rel=0&modestbranding=1&enablejsapi=1";

      iframe.title =
        "Visual Verse Agency — About Our Studio";

      iframe.loading = "lazy";

      iframe.allow =
        "autoplay; encrypted-media; picture-in-picture";

      iframe.setAttribute("allowfullscreen", "");

      iframe.setAttribute(
        "referrerpolicy",
        "strict-origin-when-cross-origin"
      );

      video.innerHTML = "";
      video.appendChild(iframe);
    };

    /*
      Reduced motion:
      do not continuously autoplay the About video.
      User can still activate it through the existing video control.
    */
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadPlayer();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "200px 0px"
      }
    );

    observer.observe(video);
  }


  /* =========================================================
     LAZY VIDEO PLAYER FOR DATA-LAZY-VIDEO ELEMENTS
     ========================================================= */

  function initializeLazyVideoElements() {
    const elements = $$("[data-lazy-video]");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;

          const videoId =
            element.dataset.lazyVideo;

          if (!videoId) {
            observerInstance.unobserve(element);
            return;
          }

          if (element.dataset.loaded === "true") {
            observerInstance.unobserve(element);
            return;
          }

          const iframe =
            document.createElement("iframe");

          iframe.src =
            `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}` +
            "?autoplay=1&mute=1&playsinline=1" +
            "&rel=0&modestbranding=1";

          iframe.title =
            element.dataset.videoTitle ||
            "Visual Verse Agency video";

          iframe.loading = "lazy";

          iframe.allow =
            "autoplay; encrypted-media; picture-in-picture";

          iframe.setAttribute("allowfullscreen", "");

          element.innerHTML = "";
          element.appendChild(iframe);
          element.dataset.loaded = "true";

          observerInstance.unobserve(element);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "250px 0px"
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );
  }


  /* =========================================================
     ANIMATIONS
     ========================================================= */

  function initializeAnimations(parent = document) {
    const elements = $$(".reveal-item", parent);

    if (!elements.length) return;

    const reducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observerInstance.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px"
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );
  }


  /* =========================================================
     NAVIGATION
     ========================================================= */

  function initializeNavigation() {
    const header = $("header");
    const menuToggle = $("[data-menu-toggle]");
    const mobileMenu = $("[data-mobile-menu]");

    const updateHeader = () => {
      if (!header) return;

      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 40
      );
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );


    /* Mobile menu */

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        const isOpen =
          document.body.classList.toggle(
            "menu-open"
          );

        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

        mobileMenu.setAttribute(
          "aria-hidden",
          String(!isOpen)
        );
      });

      $$("a", mobileMenu).forEach((link) => {
        link.addEventListener("click", () => {
          document.body.classList.remove(
            "menu-open"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          mobileMenu.setAttribute(
            "aria-hidden",
            "true"
          );
        });
      });
    }


    /* Smooth scrolling */

    document.addEventListener("click", (event) => {
      const link = event.target.closest(
        'a[href^="#"]'
      );

      if (!link) return;

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerHeight =
        header?.offsetHeight || 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior:
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth"
      });
    });


    /* Active navigation section */

    const navLinks = $$(
      'header a[href^="#"]'
    );

    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute("href");

        return id
          ? document.querySelector(id)
          : null;
      })
      .filter(Boolean);

    if (sections.length && navLinks.length) {
      const sectionObserver =
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              const id =
                `#${entry.target.id}`;

              navLinks.forEach((link) => {
                link.classList.toggle(
                  "is-active",
                  link.getAttribute("href") === id
                );
              });
            });
          },
          {
            threshold: 0,
            rootMargin:
              "-35% 0px -55% 0px"
          }
        );

      sections.forEach((section) =>
        sectionObserver.observe(section)
      );
    }
  }


  /* =========================================================
     INTRO
     ========================================================= */

  function initializeIntro() {
    const intro = $("#intro");

    if (!intro) return;

    const enterButton =
      $("#enterPortfolio");

    const skipButton =
      $("#skipIntro");

    const hasSeenIntro =
      sessionStorage.getItem(
        "visualVerseIntroSeen"
      );

    const finishIntro = () => {
      intro.classList.add("intro-complete");

      document.body.classList.remove(
        "intro-active"
      );

      sessionStorage.setItem(
        "visualVerseIntroSeen",
        "true"
      );

      window.setTimeout(() => {
        intro.setAttribute(
          "aria-hidden",
          "true"
        );
      }, 900);
    };

    if (hasSeenIntro === "true") {
      intro.classList.add(
        "intro-complete",
        "intro-skip-immediate"
      );

      document.body.classList.remove(
        "intro-active"
      );

      intro.setAttribute(
        "aria-hidden",
        "true"
      );

      return;
    }

    document.body.classList.add(
      "intro-active"
    );

    const duration = 3000;

    const timer =
      window.setTimeout(
        finishIntro,
        duration
      );

    [enterButton, skipButton]
      .filter(Boolean)
      .forEach((button) => {
        button.addEventListener("click", () => {
          clearTimeout(timer);
          finishIntro();
        });
      });
  }


  /* =========================================================
     CONTACT FORM
     ========================================================= */

  function initializeContactForm() {
    const form = $("#contactForm");

    if (!form) return;

    const message =
      $("#formMessage");

    const nameField =
      form.querySelector('[name="name"]');

    const emailField =
      form.querySelector('[name="email"]');

    const projectField =
      form.querySelector('[name="project"]');

    const messageField =
      form.querySelector('[name="message"]');


    const setMessage = (
      text,
      type = "info"
    ) => {
      if (!message) return;

      message.textContent = text;
      message.dataset.type = type;
      message.hidden = false;
    };


    const validateEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      );


    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        const name =
          nameField?.value.trim() || "";

        const email =
          emailField?.value.trim() || "";

        const project =
          projectField?.value.trim() || "";

        const projectMessage =
          messageField?.value.trim() || "";


        if (!name) {
          nameField?.focus();
          setMessage(
            "Please enter your name.",
            "error"
          );
          return;
        }


        if (!email || !validateEmail(email)) {
          emailField?.focus();
          setMessage(
            "Please enter a valid email address.",
            "error"
          );
          return;
        }


        if (!project) {
          projectField?.focus();
          setMessage(
            "Please select a project type.",
            "error"
          );
          return;
        }


        if (!projectMessage) {
          messageField?.focus();
          setMessage(
            "Please tell us a little about your project.",
            "error"
          );
          return;
        }


        const subject =
          `Visual Verse Agency Project Inquiry — ${project}`;

        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project Type: ${project}`,
          "",
          "Project Details:",
          projectMessage
        ].join("\n");


        /*
          No backend is assumed.
          The form therefore opens the user's
          default email client rather than claiming
          that an email was successfully sent.
        */

        const mailto =
          `mailto:${CONFIG.email}` +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;

        setMessage(
          "Opening your email application…",
          "success"
        );

        window.location.href = mailto;
      }
    );
  }


  /* =========================================================
     WHATSAPP LINKS
     ========================================================= */

  function initializeWhatsApp() {
    $$(
      'a[href*="wa.me"]'
    ).forEach((link) => {
      link.setAttribute(
        "target",
        "_blank"
      );

      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );
    });
  }


  /* =========================================================
     SEARCH + FILTER EVENT DELEGATION
     ========================================================= */

  function initializePortfolioControls() {
    const filterContainer =
      $("#portfolioFilters");

    if (filterContainer) {
      filterContainer.addEventListener(
        "click",
        (event) => {
          const button =
            event.target.closest(
              "[data-filter]"
            );

          if (!button) return;

          filterPortfolio(
            button.dataset.filter
          );
        }
      );
    }


    const search =
      $("#portfolioSearch");

    if (search) {
      let timeout;

      search.addEventListener(
        "input",
        (event) => {
          clearTimeout(timeout);

          timeout = setTimeout(() => {
            searchPortfolio(
              event.target.value
            );
          }, 80);
        }
      );
    }


    document.addEventListener(
      "click",
      (event) => {
        const clear =
          event.target.closest(
            "#clearPortfolioSearch"
          );

        if (!clear) return;

        searchTerm = "";

        if (search) {
          search.value = "";
          search.focus();
        }

        renderPortfolio();
      }
    );
  }


  /* =========================================================
     EXTERNAL LINK SECURITY
     ========================================================= */

  function initializeExternalLinks() {
    $$('a[target="_blank"]').forEach((link) => {
      link.setAttribute(
        "rel",
        "noopener noreferrer"
      );
    });
  }


  /* =========================================================
     PARALLAX — SUBTLE ONLY
     ========================================================= */

  function initializeParallax() {
    const elements =
      $$("[data-parallax]");

    if (!elements.length) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    let ticking = false;

    const update = () => {
      const scrollY =
        window.scrollY;

      elements.forEach((element) => {
        const speed =
          Number(
            element.dataset.parallax
          ) || 0.08;

        const rect =
          element.getBoundingClientRect();

        const center =
          rect.top +
          rect.height / 2;

        const viewportCenter =
          window.innerHeight / 2;

        const offset =
          (center - viewportCenter) *
          speed;

        element.style.transform =
          `translate3d(0, ${offset}px, 0)`;
      });

      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;

        ticking = true;

        requestAnimationFrame(update);
      },
      { passive: true }
    );

    update();
  }


  /* =========================================================
     VIDEO HEADING / CONTINUOUS MOVEMENT
     ========================================================= */

  function initializeContinuousTracks() {
    const tracks =
      $$("[data-continuous-track]");

    if (!tracks.length) return;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    tracks.forEach((track) => {
      if (reducedMotion) {
        track.classList.add(
          "continuous-motion-disabled"
        );

        return;
      }

      track.classList.add(
        "continuous-motion-active"
      );

      let offset = 0;
      let lastTime = performance.now();
      let paused = false;

      const speed =
        Number(
          track.dataset.speed
        ) || 0.025;

      track.addEventListener(
        "mouseenter",
        () => {
          paused = true;
        }
      );

      track.addEventListener(
        "mouseleave",
        () => {
          paused = false;
        }
      );

      const tick = (time) => {
        const delta =
          time - lastTime;

        lastTime = time;

        if (!paused) {
          offset +=
            delta * speed;

          if (
            Math.abs(offset) >
            track.scrollWidth / 2
          ) {
            offset = 0;
          }

          track.style.transform =
            `translate3d(${-offset}px,0,0)`;
        }

        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  }


  /* =========================================================
     KEYBOARD ACCESSIBILITY
     ========================================================= */

  function initializeKeyboardControls() {
    document.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key === "Escape"
        ) {
          const dialog =
            $("#videoPlayer");

          if (
            dialog &&
            dialog.open
          ) {
            closeVideo();
          }

          document.body.classList.remove(
            "menu-open"
          );
        }
      }
    );
  }


  /* =========================================================
     VIDEO HOVER PREVIEW
     ========================================================= */

  function initializeVideoHoverEffects() {
    const cards =
      $$(".portfolio-card");

    if (!cards.length) return;

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
