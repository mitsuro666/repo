
    const mainNavButtons = Array.from(document.querySelectorAll(".main-nav-button"));
    const templateToolbar = document.getElementById("templateToolbar");
    const workspaceTitle = document.getElementById("workspaceTitle");
    const templateToolBlocks = Array.from(document.querySelectorAll("[data-template-tool]"));
    const mobileDataMenuButton = document.getElementById("mobileDataMenuButton");
    const mobileDataDropdown = document.getElementById("mobileDataDropdown");
    const mobileImportDataButton = document.getElementById("mobileImportDataButton");
    const mobileExportDataButton = document.getElementById("mobileExportDataButton");
    const stage = document.getElementById("stage");
    const imageToolPage = document.getElementById("imageToolPage");
    const collectionPage = document.getElementById("collectionPage");
    const standaloneImageInput = document.getElementById("standaloneImageInput");
    const standaloneImageUploadButton = document.getElementById("standaloneImageUploadButton");
    const imageToolEmpty = document.getElementById("imageToolEmpty");
    const menuTabs = Array.from(document.querySelectorAll(".menu-tab"));
    const menuPanels = Array.from(document.querySelectorAll("[data-menu-panel]"));
    const card = document.getElementById("recordCard");
    const coverInput = document.getElementById("coverInput");
    const coverBox = document.getElementById("coverBox");
    const coverImage = document.getElementById("coverImage");
    const originalPrice = document.getElementById("originalPrice");
    const currentPrice = document.getElementById("currentPrice");
    const currentDiscount = document.getElementById("currentDiscount");
    const lowestPrice = document.getElementById("lowestPrice");
    const addTagButton = document.getElementById("addTagButton");
    const tags = document.getElementById("tags");
    const downloadButton = document.getElementById("downloadButton");
    const importDataButton = document.getElementById("importDataButton");
    const exportDataButton = document.getElementById("exportDataButton");
    const importDataInput = document.getElementById("importDataInput");
    const importButton = document.getElementById("importButton");
    const resetButton = document.getElementById("resetButton");
    const templateButtons = Array.from(document.querySelectorAll(".template-button"));
    const templateSwitch = document.querySelector(".template-switch");
    const themeBar = document.getElementById("themeBar");
    const themeButtons = Array.from(document.querySelectorAll(".theme-button"));
    const themePager = document.getElementById("themePager");
    const themePrevButton = document.getElementById("themePrevButton");
    const themeNextButton = document.getElementById("themeNextButton");
    const themePageText = document.getElementById("themePageText");
    const pickerNextArrow = document.getElementById("pickerNextArrow");
    const mobileFocusBack = document.getElementById("mobileFocusBack");
    const exportModal = document.getElementById("exportModal");
    const exportPreviewImage = document.getElementById("exportPreviewImage");
    const exportHint = document.getElementById("exportHint");
    const modalDownloadButton = document.getElementById("modalDownloadButton");
    const modalCloseButton = document.getElementById("modalCloseButton");
    const reviewEditModal = document.getElementById("reviewEditModal");
    const reviewEditTitle = document.getElementById("reviewEditTitle");
    const reviewEditArea = document.getElementById("reviewEditArea");
    const reviewEditConfirm = document.getElementById("reviewEditConfirm");
    const reviewEditCancel = document.getElementById("reviewEditCancel");
    const imageEditModal = document.getElementById("imageEditModal");
    const imageEditCloseButton = document.getElementById("imageEditCloseButton");
    const usageInfoButton = document.getElementById("usageInfoButton");
    const mobileUsageInfoButton = document.getElementById("mobileUsageInfoButton");
    const usageInfoModal = document.getElementById("usageInfoModal");
    const usageInfoCloseButton = document.getElementById("usageInfoCloseButton");

    const imageEditCanvas = document.getElementById("imageEditCanvas");
    const imageToolMosaic = document.getElementById("imageToolMosaic");
    const imageToolBlur = document.getElementById("imageToolBlur");
    const imageToolErase = document.getElementById("imageToolErase");
    const imageToolSelect = document.getElementById("imageToolSelect");
    const brushSize = document.getElementById("brushSize");
    const imageUndoButton = document.getElementById("imageUndoButton");
    const imageRedoButton = document.getElementById("imageRedoButton");
    const imageClearButton = document.getElementById("imageClearButton");
    const imageDoneButton = document.getElementById("imageDoneButton");
    const imageCancelButton = document.getElementById("imageCancelButton");
    const imageToolRow = document.querySelector(".image-tool-row");
    const imageActionRow = document.querySelector(".image-action-row");
    const stickerUploadInput = document.getElementById("stickerUploadInput");
    const stickerList = document.getElementById("stickerList");
    const stickerPrevPage = document.getElementById("stickerPrevPage");
    const stickerNextPage = document.getElementById("stickerNextPage");
    const stickerPageText = document.getElementById("stickerPageText");
    const coverTools = document.querySelector(".cover-tools");
    const removeCoverButton = document.getElementById("removeCoverButton");
    const playerBar = document.getElementById("playerBar");
    const playerBarFill = document.getElementById("playerBarFill");
    const playerDot = document.getElementById("playerDot");
    const playerElapsed = document.getElementById("playerElapsed");
    const playerRemaining = document.getElementById("playerRemaining");
    const playerPlay = document.getElementById("playerPlay");
    const importHelpButton = document.getElementById("importHelpButton");
    const importHelpPopover = document.getElementById("importHelpPopover");
    const STORAGE_KEY = "otome-record-card-v1";
    const MENU_STORAGE_KEY = "otome-record-card-active-menu";
    const MAIN_PAGE_STORAGE_KEY = "otome-record-card-main-page";
    const DLSITE_PROXY_URL = "https://dlsite-rj-import.shuiyingsheng.workers.dev/";
    const DEFAULT_THEME_ID = "matcha-berry-cheese";
    const CARD_THEMES = {
      "matcha-berry-cheese": {
        id: "matcha-berry-cheese",
        accent: "#f4abb9",
        accentDeep: "#b84f78",
        line: "#fec9d4",
        dash: "#9bc4b2",
        mint: "#9bc4b2",
        ink: "#684957",
        muted: "#9b6f7d",
        coverBg: "#ffe5d9",
        chipBg: "rgba(255,229,217,.78)",
        panelBg: "rgba(255,255,255,.62)",
        reviewBg: "rgba(255,255,255,.62)",
        bgStops: ["#fff8f4", "#fffdf9", "#f5f8f4"],
        playDeep: "#b84f78"
      },
      "sakura-ice": {
        id: "sakura-ice",
        accent: "#ff9ac6",
        accentDeep: "#8f78df",
        line: "#ffbdd6",
        dash: "#b0ddfe",
        mint: "#b0ddfe",
        ink: "#55415c",
        muted: "#91758a",
        coverBg: "#ffe5f9",
        chipBg: "rgba(255,229,249,.78)",
        panelBg: "#ffffff",
        reviewBg: "#ffffff",
        bgStops: ["#fff7fb", "#fffdfd", "#f4fbff"],
        playDeep: "#8f78df",
        starFill: "#8f78df"
      },
      "dirty-berry-coffee": {
        id: "dirty-berry-coffee",
        accent: "#e59a9b",
        accentDeep: "#6d6975",
        line: "#ffb4a1",
        dash: "#6d6975",
        mint: "#6d6975",
        ink: "#6d6975",
        muted: "#8a7380",
        coverBg: "#ffe0d2",
        chipBg: "rgba(255,235,225,.78)",
        panelBg: "rgba(255,255,255,.6)",
        reviewBg: "rgba(255,255,255,.6)",
        bgStops: ["#fff7f1", "#fffdf9", "#f7f2ee"],
        playDeep: "#6d6975"
      },
      "afternoon-jewel": {
        id: "afternoon-jewel",
        accent: "#b92c2c",
        accentDeep: "#6c1a21",
        line: "#d1bf9a",
        dash: "#e5e0cd",
        mint: "#cea257",
        ink: "#4f3d3b",
        muted: "#8d6f61",
        coverBg: "#e5e0cd",
        chipBg: "rgba(229,224,205,.7)",
        panelBg: "rgba(255,255,255,.62)",
        reviewBg: "rgba(255,255,255,.62)",
        bgStops: ["#fffdf7", "#f7f1e4", "#fbf9f0"],
        playDeep: "#6c1a21"
      },
      "moon-shards": {
        id: "moon-shards",
        accent: "#edaef2",
        accentDeep: "#7b5293",
        line: "#bbedef",
        dash: "#f1d77f",
        mint: "#bbedef",
        ink: "#51475f",
        muted: "#7e7192",
        coverBg: "#fbe3f6",
        chipBg: "rgba(251,227,246,.78)",
        panelBg: "#ffffff",
        reviewBg: "#ffffff",
        bgStops: ["#fff8fd", "#f6fbff", "#fbf7ec"],
        playDeep: "#7b5293",
        starFill: "#7b5293"
      },
      "mint-bubble": {
        id: "mint-bubble",
        accent: "#8ed6de",
        accentDeep: "#4ca8b8",
        line: "#8ed6de",
        dash: "#bcf1e0",
        mint: "#65bdb5",
        ink: "#3f6870",
        muted: "#6a8f92",
        coverBg: "#d7fadf",
        chipBg: "rgba(215,250,223,.78)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#f4fffb", "#efffe0", "#edfaff"],
        playDeep: "#4ca8b8",
        starFill: "#4ca8b8"
      },
      "glass-glimmer": {
        id: "glass-glimmer",
        accent: "#5ebfe0",
        accentDeep: "#0097d0",
        line: "#a4cdd1",
        dash: "#a6b7dd",
        mint: "#4daec1",
        ink: "#41586e",
        muted: "#6f8496",
        coverBg: "#cbdbe1",
        chipBg: "rgba(203,219,225,.76)",
        panelBg: "rgba(255,255,255,.66)",
        reviewBg: "rgba(255,255,255,.66)",
        bgStops: ["#f6fcff", "#eef9fb", "#f6f8ff"],
        playDeep: "#0097d0",
        starFill: "#0097d0"
      },
      "madder-melt": {
        id: "madder-melt",
        accent: "#e4a273",
        accentDeep: "#c08a5c",
        line: "#96b9b9",
        dash: "#b3beaf",
        mint: "#789f9f",
        ink: "#5f6058",
        muted: "#7d8276",
        coverBg: "#dddfdb",
        chipBg: "rgba(221,223,219,.76)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fffaf4", "#f7f7f0", "#eef7f6"],
        playDeep: "#c08a5c",
        starFill: "#c08a5c"
      },
      "ultramarine-sleep": {
        id: "ultramarine-sleep",
        accent: "#5990c0",
        accentDeep: "#102a6b",
        line: "#5990c0",
        dash: "#005185",
        mint: "#005185",
        ink: "#17345a",
        muted: "#5e6f82",
        coverBg: "#fcddbd",
        chipBg: "rgba(252,221,189,.5)",
        panelBg: "rgba(255,255,255,.68)",
        reviewBg: "rgba(255,255,255,.68)",
        bgStops: ["#fff9ef", "#f6fbff", "#eef6fb"],
        playDeep: "#102a6b",
        starFill: "#102a6b"
      },
      "apricot-souffle": {
        id: "apricot-souffle",
        accent: "#ffad76",
        accentDeep: "#e87955",
        line: "#ffbd8a",
        dash: "#ffdd8f",
        mint: "#e7a04f",
        ink: "#704c48",
        muted: "#a46f62",
        coverBg: "#feece0",
        chipBg: "rgba(255,238,224,.78)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fff8ef", "#fffdf8", "#fff5e7"],
        playDeep: "#e87955",
        starFill: "#e87955"
      }
    };
    let currentThemeId = DEFAULT_THEME_ID;
    let themePageIndex = 0;
    let mobileFocusTarget = null;
    let lastExportUrl = "";
    let lastExportFileName = "record-card.png";
    let currentDiscountManual = false;
    const PLAYER_BAR_WIDTH = 484;
    const PLAYER_DOT_SIZE = 16;
    const PLAYER_DEFAULT_TOTAL = 30 * 60;
    let playerTotalSeconds = PLAYER_DEFAULT_TOTAL;
    let playerProgress = 0;
    let playerPlaying = false;
    let coverOriginalSrc = "";
    let coverEditedSrc = "";
    let coverMosaicMaskSrc = "";
    let coverBlurMaskSrc = "";
    let coverEditorUndoStack = [];
    let coverEditorRedoStack = [];
    let coverStickers = [];
    let stickerSources = [];
    let imageEditorMode = "template";
    let templateEditorGlobalsBackup = null;
    let standaloneOriginalSrc = "";
    let standaloneEditedSrc = "";
    let standaloneMosaicMaskSrc = "";
    let standaloneBlurMaskSrc = "";
    let standaloneEditorUndoStack = [];
    let standaloneEditorRedoStack = [];
    let standaloneStickers = [];
    let standaloneStickerSources = [];
    const defaultStickerSources = [
      { id: "stamp-heart-with-arrow-3d-png", type: "image", src: "stamp/heart_with_arrow_3d.png" },
      { id: "stamp-heart-with-ribbon-3d-png", type: "image", src: "stamp/heart_with_ribbon_3d.png" },
      { id: "stamp-sparkling-heart-3d-png", type: "image", src: "stamp/sparkling_heart_3d.png" },
      { id: "stamp-growing-heart-3d-png", type: "image", src: "stamp/growing_heart_3d.png" },
      { id: "stamp-beating-heart-3d-png", type: "image", src: "stamp/beating_heart_3d.png" },
      { id: "stamp-revolving-hearts-3d-png", type: "image", src: "stamp/revolving_hearts_3d.png" },
      { id: "stamp-two-hearts-3d-png", type: "image", src: "stamp/two_hearts_3d.png" },
      { id: "stamp-heart-decoration-3d-png", type: "image", src: "stamp/heart_decoration_3d.png" },
      { id: "stamp-heart-exclamation-3d-png", type: "image", src: "stamp/heart_exclamation_3d.png" },
      { id: "stamp-broken-heart-3d-png", type: "image", src: "stamp/broken_heart_3d.png" },
      { id: "stamp-heart-on-fire-3d-png", type: "image", src: "stamp/heart_on_fire_3d.png" },
      { id: "stamp-anatomical-heart-3d-png", type: "image", src: "stamp/anatomical_heart_3d.png" },
      { id: "stamp-black-heart-3d-png", type: "image", src: "stamp/black_heart_3d.png" },
      { id: "stamp-blue-heart-3d-png", type: "image", src: "stamp/blue_heart_3d.png" },
      { id: "stamp-brown-heart-3d-png", type: "image", src: "stamp/brown_heart_3d.png" },
      { id: "stamp-green-heart-3d-png", type: "image", src: "stamp/green_heart_3d.png" },
      { id: "stamp-grey-heart-3d-png", type: "image", src: "stamp/grey_heart_3d.png" },
      { id: "stamp-heart-hands-3d-png", type: "image", src: "stamp/heart_hands_3d.png" },
      { id: "stamp-heart-suit-3d-png", type: "image", src: "stamp/heart_suit_3d.png" },
      { id: "stamp-light-blue-heart-3d-png", type: "image", src: "stamp/light_blue_heart_3d.png" },
      { id: "stamp-mending-heart-3d-png", type: "image", src: "stamp/mending_heart_3d.png" },
      { id: "stamp-orange-heart-3d-png", type: "image", src: "stamp/orange_heart_3d.png" },
      { id: "stamp-pink-heart-3d-png", type: "image", src: "stamp/pink_heart_3d.png" },
      { id: "stamp-purple-heart-3d-png", type: "image", src: "stamp/purple_heart_3d.png" },
      { id: "stamp-red-heart-3d-png", type: "image", src: "stamp/red_heart_3d.png" },
      { id: "stamp-smiling-cat-with-heart-eyes-3d-png", type: "image", src: "stamp/smiling_cat_with_heart-eyes_3d.png" },
      { id: "stamp-smiling-face-with-heart-eyes-3d-png", type: "image", src: "stamp/smiling_face_with_heart-eyes_3d.png" },
      { id: "stamp-smiling-face-with-hearts-3d-png", type: "image", src: "stamp/smiling_face_with_hearts_3d.png" },
      { id: "stamp-white-heart-3d-png", type: "image", src: "stamp/white_heart_3d.png" },
      { id: "stamp-yellow-heart-3d-png", type: "image", src: "stamp/yellow_heart_3d.png" },
    ];
    const stickerImageCache = new Map();
    const STICKERS_PER_PAGE = 10;
    let stickerPage = 0;
    let selectedStickerId = null;
    let editorStickerDrag = null;
    let editorTool = "mosaic";
    let editorImage = null;
    let editorSourceSrc = "";
    let editorUndoStack = [];
    let editorRedoStack = [];
    let editorDrawing = false;
    let editorLastPoint = null;
    let editorSessionSnapshot = null;
    let editorRenderFrame = 0;
    const editCtx = imageEditCanvas.getContext("2d");
    const editOriginalCanvas = document.createElement("canvas");
    const editOriginalCtx = editOriginalCanvas.getContext("2d");
    const editMosaicCanvas = document.createElement("canvas");
    const editMosaicCtx = editMosaicCanvas.getContext("2d");
    const editBlurCanvas = document.createElement("canvas");
    const editBlurCtx = editBlurCanvas.getContext("2d");
    const editMosaicMaskCanvas = document.createElement("canvas");
    const editMosaicMaskCtx = editMosaicMaskCanvas.getContext("2d");
    const editBlurMaskCanvas = document.createElement("canvas");
    const editBlurMaskCtx = editBlurMaskCanvas.getContext("2d");
    const UI_BACK_FULL = String.fromCharCode(0x8fd4, 0x56de, 0x5168, 0x56fe);
    const UI_DOWNLOAD_IMAGE = String.fromCharCode(0x5bfc, 0x51fa, 0x56fe, 0x7247);
    const UI_REMOVE_IMAGE = String.fromCharCode(0x79fb, 0x9664, 0x56fe, 0x7247);
    const UI_CLOSE = String.fromCharCode(0x5173, 0x95ed);
    const UI_LONG_PRESS_SAVE = String.fromCharCode(0x53ef, 0x4ee5, 0x957f, 0x6309, 0x56fe, 0x7247, 0x4fdd, 0x5b58, 0xff0c, 0x4e5f, 0x53ef, 0x4ee5, 0x70b9, 0x51fb, 0x4e0b, 0x8f7d, 0x3002);
    const UI_IMPORT_INFO = String.fromCharCode(0x5bfc, 0x5165, 0x4fe1, 0x606f);
    const UI_IMPORT_HELP = [
      String.fromCharCode(0x5bfc, 0x5165, 0x4fe1, 0x606f, 0x4f1a, 0x5c1d, 0x8bd5, 0x586b, 0x5165, 0xff1a),
      "BK",
      String.fromCharCode(0x6807, 0x9898),
      "CV",
      String.fromCharCode(0x793e, 0x56e2),
      String.fromCharCode(0x73b0, 0x4ef7),
      String.fromCharCode(0x5173, 0x952e, 0x8bcd),
      String.fromCharCode(0x4e2d, 0x6587, 0x7248, 0x672c),
      "",
      "BK " + String.fromCharCode(0x5efa, 0x8bae, 0x4f7f, 0x7528, 0x3010, 0x7f16, 0x8f91, 0x3011, 0x529f, 0x80fd, 0x624b, 0x52a8, 0x5904, 0x7406, 0x5230, 0x9002, 0x5408, 0x20, 0x53, 0x4e, 0x53, 0x20, 0x5c55, 0x793a, 0x3002),
      String.fromCharCode(0x5173, 0x952e, 0x8bcd, 0x53ea, 0x5c55, 0x793a, 0x20, 0x53, 0x46, 0x57, 0x20, 0x5173, 0x952e, 0x8bcd, 0x3002),
      String.fromCharCode(0x6709, 0x4e2d, 0x6587, 0x7248, 0x672c, 0x65f6, 0xff0c, 0x9ed8, 0x8ba4, 0x9009, 0x4e2d, 0x3010, 0x5b57, 0x5e55, 0x3011, 0x72b6, 0x6001, 0x3002)
    ].join("\n");
    const UI_IMPORT_LOADING = String.fromCharCode(0x8bfb, 0x53d6, 0x4e2d);
    const UI_IMPORT_DONE = String.fromCharCode(0x5df2, 0x5bfc, 0x5165);
    const UI_IMPORT_NEED_RJ = String.fromCharCode(0x8bf7, 0x5148, 0x586b, 0x5199, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x3002);
    const UI_IMPORT_FAILED = String.fromCharCode(0x6ca1, 0x6709, 0x8bfb, 0x53d6, 0x5230, 0x8d44, 0x6599, 0xff0c, 0x53ef, 0x80fd, 0x662f, 0x20, 0x44, 0x4c, 0x73, 0x69, 0x74, 0x65, 0x20, 0x6682, 0x65f6, 0x4e0d, 0x5141, 0x8bb8, 0x8de8, 0x57df, 0x8bfb, 0x53d6, 0x3002, 0x53ef, 0x4ee5, 0x5148, 0x624b, 0x52a8, 0x586b, 0x5199, 0x3002);
    const UI_IMPORT_COVER_FAILED = "BK " + String.fromCharCode(0x81ea, 0x52a8, 0x5bfc, 0x5165, 0x5931, 0x8d25, 0xff0c, 0x53ef, 0x4ee5, 0x624b, 0x52a8, 0x4e0a, 0x4f20, 0x3002);
    const UI_IMPORT_OVERWRITE_CONFIRM = String.fromCharCode(0x5df2, 0x586b, 0x5199, 0x90e8, 0x5206, 0x4fe1, 0x606f, 0xff0c, 0x662f, 0x5426, 0x8986, 0x76d6, 0xff1f);
    const UI_REVIEW_EDIT_TITLE = String.fromCharCode(0x7f16, 0x8f91, 0x8bc4, 0x4ef7);
    const UI_REVIEW_CONFIRM = String.fromCharCode(0x786e, 0x5b9a);
    const UI_REVIEW_CANCEL = String.fromCharCode(0x53d6, 0x6d88);
    const UI_IMPORT_DATA_FAILED = String.fromCharCode(0x5bfc, 0x5165, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x786e, 0x8ba4, 0x6587, 0x4ef6, 0x662f, 0x672c, 0x9879, 0x76ee, 0x5bfc, 0x51fa, 0x7684, 0x20, 0x4a, 0x53, 0x4f, 0x4e, 0x3002);
    const UI_RESET_CONFIRM = String.fromCharCode(0x786e, 0x5b9a, 0x8981, 0x6e05, 0x7a7a, 0x5f53, 0x524d, 0x586b, 0x5199, 0x7684, 0x5168, 0x90e8, 0x5185, 0x5bb9, 0x5417, 0xff1f, 0x8fd9, 0x4e2a, 0x64cd, 0x4f5c, 0x4e0d, 0x80fd, 0x64a4, 0x9500, 0x3002);
    mobileFocusBack.textContent = UI_BACK_FULL;
    modalDownloadButton.textContent = UI_DOWNLOAD_IMAGE;
    modalCloseButton.textContent = UI_CLOSE;
    exportHint.textContent = UI_LONG_PRESS_SAVE;
    importButton.textContent = UI_IMPORT_INFO;
    importHelpButton.title = UI_IMPORT_HELP;
    if (importHelpPopover) importHelpPopover.textContent = UI_IMPORT_HELP;
    reviewEditTitle.textContent = UI_REVIEW_EDIT_TITLE;
    reviewEditConfirm.textContent = UI_REVIEW_CONFIRM;
    reviewEditCancel.textContent = UI_REVIEW_CANCEL;

    function currentTemplate() {
      return card.classList.contains("compact") ? "compact" : "full";
    }

    function setActiveMenu(menuName, persist = true) {
      const allowedMenus = new Set(["template", "theme"]);
      const nextMenu = allowedMenus.has(menuName) ? menuName : "template";
      menuTabs.forEach((button) => button.classList.toggle("active", button.dataset.menu === nextMenu));
      menuPanels.forEach((panel) => {
        panel.hidden = panel.dataset.menuPanel !== nextMenu;
      });
      if (persist) localStorage.setItem(MENU_STORAGE_KEY, nextMenu);
      fitStage();
      updatePickerArrow();
    }

    function restoreActiveMenu() {
      setActiveMenu(localStorage.getItem(MENU_STORAGE_KEY) || "template", false);
    }


    const PAGE_TITLES = {
      template: String.fromCharCode(0x6a21, 0x677f, 0x7f16, 0x8f91),
      "image-tool": String.fromCharCode(0x4fee, 0x56fe, 0x5de5, 0x5177),
      collection: String.fromCharCode(0x6211, 0x7684, 0x6536, 0x85cf)
    };

    function setMainPage(pageName, persist = true) {
      const allowedPages = new Set(["template", "image-tool", "collection"]);
      const nextPage = allowedPages.has(pageName) ? pageName : "template";
      mainNavButtons.forEach((button) => button.classList.toggle("active", button.dataset.page === nextPage));
      if (workspaceTitle) workspaceTitle.textContent = PAGE_TITLES[nextPage] || PAGE_TITLES.template;
      if (templateToolbar) templateToolbar.hidden = nextPage !== "template";
      templateToolBlocks.forEach((block) => { block.hidden = nextPage !== "template"; });
      if (stage) stage.hidden = nextPage !== "template";
      if (imageToolPage) imageToolPage.hidden = nextPage !== "image-tool";
      if (collectionPage) collectionPage.hidden = nextPage !== "collection";
      if (nextPage === "image-tool") {
        prepareStandaloneImageTool();
      } else {
        leaveStandaloneImageTool();
      }
      if (persist) localStorage.setItem(MAIN_PAGE_STORAGE_KEY, nextPage);
      fitStage();
    }

    function restoreMainPage() {
      setMainPage(localStorage.getItem(MAIN_PAGE_STORAGE_KEY) || "template", false);
    }

    function templateSize() {
      return currentTemplate() === "compact" ? { width: 600, height: 800 } : { width: 1080, height: 1440 };
    }

    function normalizeThemeId(themeId) {
      const legacyThemes = {
        "berry-mint": "matcha-berry-cheese",
        "mango-berry-tea": "afternoon-jewel"
      };
      return legacyThemes[themeId] || themeId;
    }

    function currentCardTheme() {
      return CARD_THEMES[currentThemeId] || CARD_THEMES[DEFAULT_THEME_ID];
    }

    function themePageSize() {
      return isMobileView() ? 6 : Math.max(1, themeButtons.length);
    }

    function themePageCount() {
      return Math.max(1, Math.ceil(themeButtons.length / themePageSize()));
    }

    function setThemePage(index) {
      const count = themePageCount();
      themePageIndex = Math.max(0, Math.min(count - 1, index));
      updateThemePager();
    }

    function ensureThemePageForTheme(themeId) {
      const index = themeButtons.findIndex((button) => button.dataset.theme === themeId);
      if (index >= 0) themePageIndex = Math.floor(index / themePageSize());
    }

    function updateThemePager() {
      if (isMobileView()) {
        updatePickerArrow();
        return;
      }
      if (!themePager || !themeBar) return;
      const pageSize = themePageSize();
      const count = themePageCount();
      themePageIndex = Math.max(0, Math.min(count - 1, themePageIndex));
      const start = themePageIndex * pageSize;
      const end = start + pageSize;
      themeButtons.forEach((button, index) => {
        button.classList.toggle("hidden", index < start || index >= end);
      });
      themePager.classList.toggle("hidden", count <= 1);
      if (themePageText) themePageText.textContent = (themePageIndex + 1) + " / " + count;
      if (themePrevButton) themePrevButton.disabled = themePageIndex <= 0;
      if (themeNextButton) themeNextButton.disabled = themePageIndex >= count - 1;
    }

    function activePicker() {
      return themeBar && !themeBar.hidden ? themeBar : templateSwitch;
    }

    function pickerCanScroll() {
      const el = activePicker();
      return !!el && el.scrollWidth > el.clientWidth + 2;
    }

    function updatePickerArrow() {
      if (!pickerNextArrow) return;
      const mobilePicker = window.matchMedia("(max-width: 780px)").matches;
      pickerNextArrow.hidden = !(mobilePicker && pickerCanScroll());
    }

    function nextPickerPage() {
      const el = activePicker();
      if (!el) return;
      const maxLeft = el.scrollWidth - el.clientWidth;
      if (maxLeft <= 1) return;
      const remaining = maxLeft - el.scrollLeft;
      const target = remaining <= 4 ? 0 : Math.min(el.scrollLeft + el.clientWidth, maxLeft);
      el.scrollTo({ left: target, behavior: "smooth" });
    }

    function scrollActivePickerIntoView() {
      if (!window.matchMedia("(max-width: 780px)").matches) return;
      const el = activePicker();
      if (!el || el.scrollWidth <= el.clientWidth + 2) return;
      const active = el.querySelector(".active");
      if (active) active.scrollIntoView({ block: "nearest", inline: "start" });
    }

    function applyCardTheme(themeId, persist = true) {
      const normalizedThemeId = normalizeThemeId(themeId);
      const nextId = CARD_THEMES[normalizedThemeId] ? normalizedThemeId : DEFAULT_THEME_ID;
      currentThemeId = nextId;
      card.dataset.theme = nextId;
      themeButtons.forEach((button) => button.classList.toggle("active", button.dataset.theme === nextId));
      ensureThemePageForTheme(nextId);
      updateThemePager();
      if (persist) saveState();
    }

    function isMobileView() {
      return window.matchMedia("(max-width: 780px), (pointer: coarse)").matches || navigator.maxTouchPoints > 0;
    }

    function mobileViewportHeight() {
      return window.visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 640;
    }

    function focusRectFor(element) {
      const toolPad = element === coverBox ? 64 : 0;
      return {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight + toolPad
      };
    }

    function minimumFocusScale(element, fullScale) {
      if (element.classList.contains("title-panel")) return Math.max(fullScale * 1.75, 0.68);
      if (element.classList.contains("review-panel")) return Math.max(fullScale * 1.65, 0.62);
      if (element.classList.contains("tags-panel")) return Math.max(fullScale * 1.9, 0.78);
      return fullScale;
    }

    function fitStage() {
      if (!stage || stage.hidden) return;
      const size = templateSize();
      const toolbarHeight = document.querySelector(".menu-toolbar")?.offsetHeight || 0;
      const themeBarHeight = 0;
      const availableWidth = Math.max(1, stage.clientWidth - 16);
      const availableHeight = isMobileView()
        ? Math.max(360, mobileViewportHeight() - toolbarHeight - themeBarHeight - 38)
        : Number.POSITIVE_INFINITY;
      const fullScale = Math.min(1, availableWidth / size.width, availableHeight / size.height);

      stage.classList.toggle("is-focused", isMobileView() && Boolean(mobileFocusTarget) && currentTemplate() === "full");

      if (isMobileView() && mobileFocusTarget && currentTemplate() === "full") {
        const rect = focusRectFor(mobileFocusTarget);
        const isTagsFocus = mobileFocusTarget.classList.contains("tags-panel");
        const focusScale = isTagsFocus
          ? Math.min(1, availableWidth / (rect.width + 24), availableHeight / (rect.height + 42))
          : Math.min(1, availableWidth / (rect.width + 96), availableHeight / (rect.height + 110));
        const scale = Math.min(1, Math.max(fullScale, focusScale, minimumFocusScale(mobileFocusTarget, fullScale)));
        const preferLeft = mobileFocusTarget.classList.contains("title-panel") || mobileFocusTarget.classList.contains("tags-panel") || mobileFocusTarget.classList.contains("review-panel");
        const horizontalPad = preferLeft ? 18 : (availableWidth - rect.width * scale) / 2;
        const tx = Math.round(horizontalPad - rect.left * scale);
        const ty = Math.round((availableHeight - rect.height * scale) / 2 - rect.top * scale);
        card.style.transform = "translate(" + tx + "px, " + ty + "px) scale(" + scale + ")";
        stage.style.height = availableHeight + "px";
        mobileFocusBack.classList.remove("hidden");
        return;
      }

      stage.classList.remove("is-focused");
      const centerX = Math.max(0, (availableWidth - size.width * fullScale) / 2);
      card.style.transform = "translateX(" + Math.round(centerX) + "px) scale(" + fullScale + ")";
      stage.style.height = (size.height * fullScale + (isMobileView() ? 0 : 16)) + "px";
      stage.scrollLeft = 0;
      stage.scrollTop = 0;
      mobileFocusBack.classList.add("hidden");
    }

    function clearMobileFocus() {
      mobileFocusTarget = null;
      fitStage();
    }

    function focusMobileArea(area) {
      if (!isMobileView() || currentTemplate() !== "full") return;
      mobileFocusTarget = area;
      fitStage();
    }

    function openReviewEditor() {
      if (!isMobileView()) return;
      reviewEditArea.value = document.getElementById("reviewText").value || "";
      reviewEditModal.hidden = false;
      window.setTimeout(() => reviewEditArea.focus(), 50);
    }

    function closeReviewEditor(save) {
      if (save) {
        document.getElementById("reviewText").value = reviewEditArea.value;
        document.getElementById("reviewText").dispatchEvent(new Event("input", { bubbles: true }));
      }
      reviewEditModal.hidden = true;
    }

    function setTemplate(template, persist = true) {
      card.classList.toggle("compact", template === "compact");
      templateButtons.forEach((button) => button.classList.toggle("active", button.dataset.template === template));
      fitStage();
      if (persist) saveState();
    }


    function revokeLastExportUrl() {
      if (lastExportUrl) URL.revokeObjectURL(lastExportUrl);
      lastExportUrl = "";
    }

    function safeFilePart(value, fallback = "otome") {
      const clean = String(value || "")
        .trim()
        .replace(/s+/g, "-")
        .replace(/[^a-zA-Z0-9_-]+/g, "")
        .replace(/^-+|-+$/g, "");
      return clean || fallback;
    }

    function currentRjFilePart() {
      const raw = editableText("rjText");
      const clean = String(raw || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (!clean) return "otome";
      return clean.startsWith("RJ") ? clean : "RJ" + clean;
    }

    function templateExportFileName(template = currentTemplate()) {
      return [
        safeFilePart(currentRjFilePart()),
        "repo",
        safeFilePart(template),
        safeFilePart(currentThemeId, DEFAULT_THEME_ID)
      ].join("_") + ".png";
    }

    function standaloneExportFileName() {
      const now = new Date();
      const y = String(now.getFullYear());
      const m = String(now.getMonth() + 1).padStart(2, "0");
      const d = String(now.getDate()).padStart(2, "0");
      return "image_" + y + m + d + ".png";
    }

    function canvasToBlob(canvas) {
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("PNG export failed"));
        }, "image/png");
      });
    }

    function showExportPreview(blob, fileName = "record-card.png") {
      revokeLastExportUrl();
      lastExportFileName = fileName;
      lastExportUrl = URL.createObjectURL(blob);
      exportPreviewImage.src = lastExportUrl;
      exportModal.hidden = false;
    }

    function handleExportBlob(blob, fileName = "record-card.png") {
      if (isMobileView()) {
        showExportPreview(blob, fileName);
      } else {
        downloadBlob(blob, fileName);
      }
    }

    function sanitizeNumericInput(input) {
      let clean = input.value.replace(/\D+/g, "");
      if (input === currentDiscount || input === lowestPrice) {
        clean = clean.slice(0, 3);
        if (Number(clean) > 100) clean = "100";
      }
      if (input.value !== clean) input.value = clean;
    }

    function calculateDiscountPercent(original, current) {
      const originalText = String(original || "").replace(/\D+/g, "");
      const currentText = String(current || "").replace(/\D+/g, "");
      const originalNumber = Number(originalText);
      const currentNumber = Number(currentText);
      if (!originalNumber || currentText === "" || currentNumber > originalNumber) return "";
      const percent = Math.round((1 - currentNumber / originalNumber) * 100);
      return String(Math.min(100, Math.max(0, percent)));
    }

    function calculateCurrentPriceFromDiscount(original, discount) {
      const originalText = String(original || "").replace(/\D+/g, "");
      const discountText = String(discount || "").replace(/\D+/g, "");
      const originalNumber = Number(originalText);
      const discountNumber = Number(discountText);
      if (!originalNumber || discountText === "" || discountNumber > 100) return "";
      const next = Math.round(originalNumber * (1 - discountNumber / 100));
      return String(Math.min(originalNumber, Math.max(0, next)));
    }

    function isHighDiscountValue(value) {
      const text = String(value || "").replace(/\D+/g, "");
      return text !== "" && Number(text) >= 80;
    }

    function syncDiscountColor() {
      currentDiscount.closest(".metric-entry")?.classList.toggle("high-discount", isHighDiscountValue(currentDiscount.value));
      lowestPrice.closest(".metric-entry")?.classList.toggle("high-discount", isHighDiscountValue(lowestPrice.value));
    }

    function updateDiscount(force = false) {
      if (currentDiscountManual && !force) {
        syncDiscountColor();
        return;
      }
      const next = calculateDiscountPercent(originalPrice.value, currentPrice.value);
      if (currentDiscount.value !== next) currentDiscount.value = next;
      syncDiscountColor();
    }

    function updateCurrentPriceFromDiscount() {
      const next = calculateCurrentPriceFromDiscount(originalPrice.value, currentDiscount.value);
      if (next !== "" && currentPrice.value !== next) currentPrice.value = next;
      syncDiscountColor();
    }

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function parsePlayerTime(text) {
      const clean = String(text || "").trim().replace(/^[-\u2013\u2014]+/, "");
      if (!clean) return null;
      const parts = clean.split(":").map((part) => part.trim()).filter(Boolean);
      if (!parts.length || parts.length > 3) return null;
      if (parts.some((part) => !/^\d+$/.test(part))) return null;
      const nums = parts.map(Number);
      if (nums.some((num) => !Number.isFinite(num))) return null;
      if (nums.length === 1) return nums[0] * 60;
      if (nums.length === 2) return nums[0] * 60 + nums[1];
      return nums[0] * 3600 + nums[1] * 60 + nums[2];
    }

    function formatPlayerTime(totalSeconds) {
      const seconds = Math.max(0, Math.round(totalSeconds || 0));
      const minutes = Math.floor(seconds / 60);
      const remain = seconds % 60;
      return String(minutes).padStart(2, "0") + ":" + String(remain).padStart(2, "0");
    }

    function currentPlayerSeconds() {
      return Math.round(playerTotalSeconds * playerProgress);
    }

    function syncPlayerUi(syncText = true) {
      playerTotalSeconds = Math.max(1, Math.round(playerTotalSeconds || PLAYER_DEFAULT_TOTAL));
      playerProgress = clamp(Number(playerProgress) || 0, 0, 1);
      const elapsed = currentPlayerSeconds();
      const remaining = Math.max(0, playerTotalSeconds - elapsed);
      playerBarFill.style.width = (playerProgress * 100).toFixed(2) + "%";
      playerDot.style.left = Math.round((PLAYER_BAR_WIDTH - PLAYER_DOT_SIZE) * playerProgress) + "px";
      playerPlay.classList.toggle("is-playing", playerPlaying);
      playerPlay.setAttribute("aria-label", playerPlaying ? "pause" : "play");
      if (syncText) {
        playerElapsed.textContent = formatPlayerTime(elapsed);
        playerRemaining.textContent = playerProgress === 0 ? formatPlayerTime(playerTotalSeconds) : "-" + formatPlayerTime(remaining);
      }
    }

    function setPlayerProgressFromClientX(clientX) {
      const rect = playerBar.getBoundingClientRect();
      playerProgress = clamp((clientX - rect.left) / rect.width, 0, 1);
      syncPlayerUi(true);
      saveState();
    }

    function commitPlayerTimeEdit(target) {
      const parsed = parsePlayerTime(target.textContent);
      const elapsed = currentPlayerSeconds();
      if (parsed == null) {
        syncPlayerUi(true);
        return;
      }
      if (target === playerElapsed) {
        playerTotalSeconds = Math.max(playerTotalSeconds, parsed, 1);
        playerProgress = clamp(parsed / playerTotalSeconds, 0, 1);
      } else {
        const raw = String(target.textContent || "").trim();
        if (/^[-\u2013\u2014]/.test(raw)) {
          playerTotalSeconds = Math.max(1, elapsed + parsed);
          playerProgress = clamp(elapsed / playerTotalSeconds, 0, 1);
        } else {
          playerTotalSeconds = Math.max(1, parsed);
          playerProgress = clamp(elapsed / playerTotalSeconds, 0, 1);
        }
      }
      syncPlayerUi(true);
      saveState();
    }

    function normalizeWorkno(value) {
      const clean = String(value || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
      const match = clean.match(/(?:RJ)?\d+/);
      if (!match) return "";
      return match[0].startsWith("RJ") ? match[0] : "RJ" + match[0];
    }

    function firstText(...values) {
      for (const value of values) {
        if (Array.isArray(value)) {
          const text = value.map((item) => firstText(item?.name, item?.work_name, item?.title, item)).filter(Boolean).join(" / ");
          if (text) return text;
        } else if (value && typeof value === "object") {
          const text = firstText(value.name, value.work_name, value.title, value.value);
          if (text) return text;
        } else if (value != null && String(value).trim()) {
          return String(value).trim();
        }
      }
      return "";
    }

    function creatorText(creators, key) {
      return firstText(creators?.[key], creators?.[key + "s"]);
    }

    function collectVoiceText(value) {
      if (!value) return "";
      if (Array.isArray(value)) {
        return value.map((item) => collectVoiceText(item)).filter(Boolean).join(" / ");
      }
      if (typeof value === "object") {
        return firstText(value.name, value.work_name, value.title, value.value, value.name_ja, value.name_en);
      }
      return String(value).trim();
    }

    function findVoiceText(source, depth = 0) {
      if (!source || depth > 4) return "";
      if (Array.isArray(source)) {
        for (const item of source) {
          const roleText = firstText(item?.type, item?.role, item?.author_type, item?.creator_type, item?.type_name);
          if (/voice|cv|seiyu|cast/i.test(roleText)) {
            const text = collectVoiceText(item?.name || item?.names || item?.creators || item?.value || item);
            if (text) return text;
          }
        }
        for (const item of source) {
          const text = findVoiceText(item, depth + 1);
          if (text) return text;
        }
        return "";
      }
      if (typeof source === "object") {
        for (const key of ["voice_by", "voice_bys", "voice", "voices", "cv", "cvs", "cast", "casts"]) {
          const text = collectVoiceText(source[key]);
          if (text) return text;
        }
        for (const [key, value] of Object.entries(source)) {
          if (/voice|cv|seiyu|cast/i.test(key)) {
            const text = collectVoiceText(value);
            if (text) return text;
          }
        }
        for (const value of Object.values(source)) {
          const text = findVoiceText(value, depth + 1);
          if (text) return text;
        }
      }
      return "";
    }

    function numericText(value) {
      const text = firstText(value).replace(/[^0-9]/g, "");
      return text;
    }

    function normalizeImageUrl(...values) {
      const text = firstText(...values);
      if (!text) return "";
      if (text.startsWith("//")) return "https:" + text;
      return text;
    }

    function productImageMainUrl(product) {
      return normalizeImageUrl(
        product?.image_main?.url,
        product?.image_main,
        product?.work?.image_main?.url,
        product?.work?.image_main,
        product?.images?.main?.url,
        product?.image?.main?.url
      );
    }

    const DLSITE_GENRE_KEYWORDS = {
      "1": "\u5b66\u6821",
      "2": "\u804c\u573a",
      "3": "\u6237\u5916",
      "4": "\u751c\u871c",
      "5": "\u641e\u7b11",
      "6": "\u80cc\u5fb7",
      "7": "\u559c\u5267",
      "8": "\u65e5\u5e38",
      "13": "\u6e29\u99a8",
      "14": "\u604b\u4eba",
      "15": "\u4e25\u8083",
      "16": "\u5947\u5e7b",
      "17": "\u5386\u53f2",
      "19": "\u6050\u6016",
      "22": "\u60ac\u7591",
      "24": "\u66b4\u529b",
      "26": "\u7075\u5f02",
      "27": "Teen's Love",
      "28": "\u5e74\u9f84\u5dee",
      "29": "\u9b54\u6cd5",
      "31": "\u540c\u5c45",
      "32": "\u7eaf\u7231",
      "33": "\u803d\u7f8e",
      "46": "\u540e\u5bab",
      "48": "NTR",
      "51": "\u840c\u7cfb",
      "53": "\u5168\u5e74\u9f84",
      "55": "\u611f\u52a8",
      "56": "\u6cbb\u6108",
      "57": "\u6e05\u6de1",
      "58": "HE",
      "59": "\u50b2\u5a07",
      "60": "\u5973\u6027\u89c6\u89d2",
      "61": "\u81f4\u90c1",
      "64": "\u7656\u597d",
      "74": "\u5236\u670d",
      "81": "\u519b\u88c5",
      "82": "\u5185\u8863",
      "85": "\u54e5\u7279\u841d\u8389",
      "86": "Cosplay",
      "91": "\u548c\u670d",
      "96": "\u4fee\u5973",
      "105": "\u897f\u88c5",
      "116": "\u591a\u4eba",
      "120": "\u9aa8\u79d1",
      "151": "\u76d1\u7981",
      "152": "\u6311\u9017",
      "153": "\u6320\u75d2",
      "157": "\u50ac\u7720",
      "166": "\u77ed\u53d1",
      "167": "\u957f\u53d1",
      "170": "\u91d1\u53d1",
      "171": "\u9ed1\u53d1",
      "173": "\u9a6c\u5c3e",
      "174": "\u53cc\u9a6c\u5c3e",
      "175": "\u732b\u8033",
      "176": "\u517d\u8033",
      "177": "\u9ad8\u4e2a\u5b50",
      "178": "\u7ea4\u7ec6",
      "179": "\u4e30\u6ee1",
      "181": "\u808c\u8089",
      "196": "\u65b9\u8a00",
      "198": "\u9762\u65e0\u8868\u60c5",
      "205": "\u75af\u72c2",
      "209": "\u5e74\u4e0a",
      "210": "\u5c11\u5e74",
      "211": "\u6b63\u592a",
      "218": "\u719f\u5973",
      "219": "\u4eba\u59bb",
      "220": "\u59d0\u59d0\u7cfb",
      "221": "\u5df2\u5a5a",
      "222": "\u9752\u6885\u7af9\u9a6c",
      "223": "\u53cc\u80de\u80ce",
      "227": "\u6559\u5e08",
      "230": "\u4e0a\u73ed\u65cf",
      "231": "\u7537\u516c\u5173",
      "233": "\u6218\u58eb",
      "234": "\u5973\u738b/\u516c\u4e3b",
      "235": "\u7cbe\u7075/\u5996\u7cbe",
      "237": "\u5929\u4f7f/\u6076\u9b54",
      "239": "\u5e7d\u7075",
      "241": "\u9b54\u6cd5\u5e08/\u9b54\u5973",
      "242": "\u5927\u5c0f\u59d0",
      "243": "\u5996\u602a",
      "245": "\u6027\u8f6c",
      "246": "\u5929\u7136",
      "248": "\u77e5\u6027\u6d3e",
      "249": "\u62df\u4eba\u5316",
      "251": "\u517d\u5316",
      "254": "\u673a\u5668\u4eba/\u4eff\u751f\u4eba",
      "255": "\u773c\u955c",
      "260": "\u9970\u54c1",
      "270": "\u4e0b\u514b\u4e0a",
      "272": "\u9ed1\u9053",
      "274": "\u54e5\u54e5",
      "275": "\u5f1f\u5f1f",
      "279": "\u5e74\u4e0b\u653b",
      "281": "\u540c\u5b66/\u540c\u4e8b",
      "283": "\u4ffa\u69d8\u653b",
      "284": "\u8b66\u5bdf",
      "285": "\u524d\u8f88/\u540e\u8f88",
      "287": "\u5e9f\u67f4\u653b",
      "288": "\u4e3b\u4ece",
      "290": "\u51b7\u6de1\u653b",
      "293": "\u6267\u4e8b",
      "296": "\u7cfb\u5217\u4f5c\u54c1",
      "298": "\u63a8\u7406/\u60ac\u7591",
      "302": "NTR",
      "303": "\u4f2a\u5a18",
      "304": "\u5927\u53d4",
      "314": "\u50ac\u7720\u97f3\u58f0",
      "316": "\u75c5\u5a07",
      "317": "\u4eba\u5916\u5a18/\u9b54\u7269\u5a18",
      "318": "\u793e\u957f",
      "319": "\u533b\u751f",
      "325": "\u6076\u5815",
      "326": "\u6d17\u8111",
      "399": "\u9752\u5e74",
      "400": "\u5b66\u751f",
      "401": "\u4f53\u529b\u52b3\u52a8\u7cfb",
      "405": "\u683c\u6597\u5bb6",
      "409": "\u827a\u4eba/\u5076\u50cf/\u6a21\u7279",
      "411": "\u8fd0\u52a8\u5458",
      "412": "\u5916\u56fd\u4eba",
      "413": "\u82b1\u82b1\u516c\u5b50",
      "414": "\u50f5\u5c38",
      "419": "\u4e0d\u826f",
      "420": "\u9006\u540e\u5bab",
      "422": "\u9738\u9053\u7cfb",
      "423": "\u53d4\u7236/\u4e49\u7236",
      "424": "\u4e0a\u53f8",
      "427": "\u738b\u5b50\u7cfb",
      "437": "\u521d\u4f53\u9a8c",
      "438": "\u540c\u5c45\u604b\u7231",
      "440": "\u51fa\u8f68",
      "442": "\u638f\u8033",
      "443": "\u9644\u8eab",
      "462": "\u5f02\u6027\u604b\u76f4\u7537",
      "463": "\u53cc\u6027\u604b",
      "478": "\u77ed\u53d1",
      "486": "\u5be1\u5987",
      "491": "\u5973\u6027\u5411",
      "493": "ABO/Omegaverse",
      "494": "\u6d6a\u6f2b/\u7231\u60c5",
      "496": "\u53cc\u8033\u5f55\u97f3/\u5047\u4eba\u5934\u9ea6",
      "497": "ASMR",
      "498": "DLsite\u7ffb\u8bd1\u4f5c\u54c1",
      "502": "\u7537\u4e3b\u4eba\u516c",
      "503": "\u8033\u8bed",
      "506": "\u9b45\u9b54",
      "519": "\u5f02\u4e16\u754c\u8f6c\u751f",
      "520": "\u6076\u5f79\u5343\u91d1",
      "521": "\u6267\u7740\u653b",
      "529": "\u4e3b\u52a8NTR",
      "530": "\u9006NTR",
      "535": "Dom/Sub Universe",
      "536": "\u5973\u6027\u4e3b\u5bfc",
      "537": "\u7537\u6027\u80f8\u808c",
      "539": "\u4f53\u683c\u5dee",
      "540": "\u5a74\u513fPlay",
      "541": "\u517d\u4eba"
};

    const DLSITE_GENRE_NAME_KEYWORDS = {
      "\u5b66\u6821/\u5b66\u5712": "\u5b66\u6821",
      "\u30aa\u30d5\u30a3\u30b9/\u8077\u5834": "\u804c\u573a",
      "\u5c4b\u5916": "\u6237\u5916",
      "\u30e9\u30d6\u30e9\u30d6/\u3042\u307e\u3042\u307e": "\u751c\u871c",
      "\u30ae\u30e3\u30b0": "\u641e\u7b11",
      "\u9000\u5ec3/\u80cc\u5fb3/\u30a4\u30f3\u30e2\u30e9\u30eb": "\u80cc\u5fb7",
      "\u30b3\u30e1\u30c7\u30a3": "\u559c\u5267",
      "\u65e5\u5e38/\u751f\u6d3b": "\u65e5\u5e38",
      "\u307b\u306e\u307c\u306e": "\u6e29\u99a8",
      "\u604b\u4eba\u540c\u58eb": "\u604b\u4eba",
      "\u4e21\u7247\u601d\u3044": "\u53cc\u5411\u6697\u604b",
      "\u30b7\u30ea\u30a2\u30b9": "\u4e25\u8083",
      "\u30d5\u30a1\u30f3\u30bf\u30b8\u30fc": "\u5947\u5e7b",
      "\u6b74\u53f2/\u6642\u4ee3\u7269": "\u5386\u53f2",
      "\u30db\u30e9\u30fc": "\u6050\u6016",
      "\u30b5\u30b9\u30da\u30f3\u30b9": "\u60ac\u7591",
      "\u30d0\u30a4\u30aa\u30ec\u30f3\u30b9": "\u66b4\u529b",
      "\u30aa\u30ab\u30eb\u30c8": "\u7075\u5f02",
      "\u30c6\u30a3\u30fc\u30f3\u30ba\u30e9\u30d6": "Teen's Love",
      "\u6b73\u306e\u5dee": "\u5e74\u9f84\u5dee",
      "\u9b54\u6cd5": "\u9b54\u6cd5",
      "\u540c\u5c45": "\u540c\u5c45",
      "\u7d14\u611b": "\u7eaf\u7231",
      "\u803d\u7f8e": "\u803d\u7f8e",
      "\u30cf\u30fc\u30ec\u30e0": "\u540e\u5bab",
      "\u5bdd\u53d6\u3089\u308c": "NTR",
      "\u840c\u3048": "\u840c\u7cfb",
      "\u5065\u5168": "\u5168\u5e74\u9f84",
      "\u611f\u52d5": "\u611f\u52a8",
      "\u7652\u3057": "\u6cbb\u6108",
      "\u6de1\u767d/\u3042\u3063\u3055\u308a": "\u6e05\u6de1",
      "\u30aa\u30fc\u30eb\u30cf\u30c3\u30d4\u30fc": "HE",
      "\u30c4\u30f3\u30c7\u30ec": "\u50b2\u5a07",
      "\u5973\u6027\u8996\u70b9": "\u5973\u6027\u89c6\u89d2",
      "\u9b31": "\u81f4\u90c1",
      "\u30d5\u30a7\u30c1": "\u7656\u597d",
      "\u5236\u670d": "\u5236\u670d",
      "\u8ecd\u670d": "\u519b\u88c5",
      "\u30b4\u30b9\u30ed\u30ea": "\u54e5\u7279\u841d\u8389",
      "\u30b3\u30b9\u30d7\u30ec": "Cosplay",
      "\u7740\u7269/\u548c\u670d": "\u548c\u670d",
      "\u30b7\u30b9\u30bf\u30fc": "\u4fee\u5973",
      "\u30b9\u30fc\u30c4": "\u897f\u88c5",
      "\u76e3\u7981": "\u76d1\u7981",
      "\u304f\u3059\u3050\u308a": "\u6320\u75d2",
      "\u50ac\u7720": "\u50ac\u7720",
      "\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8": "\u77ed\u53d1",
      "\u30ed\u30f3\u30b0\u30d8\u30a2": "\u957f\u53d1",
      "\u91d1\u9aea": "\u91d1\u53d1",
      "\u9ed2\u9aea": "\u9ed1\u53d1",
      "\u30dd\u30cb\u30fc\u30c6\u30fc\u30eb": "\u9a6c\u5c3e",
      "\u30c4\u30a4\u30f3\u30c6\u30fc\u30eb": "\u53cc\u9a6c\u5c3e",
      "\u30cd\u30b3\u30df\u30df": "\u732b\u8033",
      "\u7363\u8033": "\u517d\u8033",
      "\u9577\u8eab": "\u9ad8\u4e2a\u5b50",
      "\u30b9\u30ec\u30f3\u30c0\u30fc": "\u7ea4\u7ec6",
      "\u30e0\u30c1\u30e0\u30c1": "\u4e30\u6ee1",
      "\u7b4b\u8089": "\u808c\u8089",
      "\u65b9\u8a00": "\u65b9\u8a00",
      "\u7121\u8868\u60c5": "\u9762\u65e0\u8868\u60c5",
      "\u72c2\u6c17": "\u75af\u72c2",
      "\u5e74\u4e0a": "\u5e74\u4e0a",
      "\u719f\u5973": "\u719f\u5973",
      "\u4eba\u59bb": "\u4eba\u59bb",
      "\u304a\u59c9\u3055\u3093": "\u59d0\u59d0\u7cfb",
      "\u65e2\u5a5a\u8005": "\u5df2\u5a5a",
      "\u5e7c\u306a\u3058\u307f": "\u9752\u6885\u7af9\u9a6c",
      "\u53cc\u5b50": "\u53cc\u80de\u80ce",
      "\u6559\u5e2b": "\u6559\u5e08",
      "\u30b5\u30e9\u30ea\u30fc\u30de\u30f3": "\u4e0a\u73ed\u65cf",
      "\u30db\u30b9\u30c8": "\u7537\u516c\u5173",
      "\u6226\u58eb": "\u6218\u58eb",
      "\u5973\u738b\u69d8/\u304a\u59eb\u69d8": "\u5973\u738b/\u516c\u4e3b",
      "\u30a8\u30eb\u30d5/\u5996\u7cbe": "\u7cbe\u7075/\u5996\u7cbe",
      "\u5929\u4f7f/\u60aa\u9b54": "\u5929\u4f7f/\u6076\u9b54",
      "\u5e7d\u970a": "\u5e7d\u7075",
      "\u9b54\u6cd5\u4f7f\u3044/\u9b54\u5973": "\u9b54\u6cd5\u5e08/\u9b54\u5973",
      "\u304a\u5b22\u69d8": "\u5927\u5c0f\u59d0",
      "\u5996\u602a": "\u5996\u602a",
      "\u6027\u8ee2\u63db(TS)": "\u6027\u8f6c",
      "\u5929\u7136": "\u5929\u7136",
      "\u30a4\u30f3\u30c6\u30ea": "\u77e5\u6027\u6d3e",
      "\u64ec\u4eba\u5316": "\u62df\u4eba\u5316",
      "\u3051\u3082\u306e/\u7363\u5316": "\u517d\u5316",
      "\u30ed\u30dc\u30c3\u30c8/\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9": "\u673a\u5668\u4eba/\u4eff\u751f\u4eba",
      "\u30e1\u30ac\u30cd": "\u773c\u955c",
      "\u30d4\u30a2\u30b9/\u88c5\u98fe\u54c1": "\u9970\u54c1",
      "\u4e0b\u514b\u4e0a": "\u4e0b\u514b\u4e0a",
      "\u30e4\u30af\u30b6/\u88cf\u793e\u4f1a": "\u9ed1\u9053",
      "\u5144": "\u54e5\u54e5",
      "\u5f1f": "\u5f1f\u5f1f",
      "\u5e74\u4e0b\u653b\u3081": "\u5e74\u4e0b\u653b",
      "\u540c\u7d1a\u751f/\u540c\u50da": "\u540c\u5b66/\u540c\u4e8b",
      "\u4ffa\u69d8\u653b\u3081": "\u4ffa\u69d8\u653b",
      "\u8b66\u5bdf/\u5211\u4e8b": "\u8b66\u5bdf",
      "\u5148\u8f29/\u5f8c\u8f29": "\u524d\u8f88/\u540e\u8f88",
      "\u30d8\u30bf\u30ec\u653b\u3081": "\u5e9f\u67f4\u653b",
      "\u4e3b\u5f93": "\u4e3b\u4ece",
      "\u30af\u30fc\u30eb\u653b\u3081": "\u51b7\u6de1\u653b",
      "\u57f7\u4e8b": "\u6267\u4e8b",
      "\u30b7\u30ea\u30fc\u30ba\u3082\u306e": "\u7cfb\u5217\u4f5c\u54c1",
      "\u30df\u30b9\u30c6\u30ea\u30fc": "\u63a8\u7406/\u60ac\u7591",
      "\u5bdd\u53d6\u308a": "NTR",
      "\u7537\u306e\u5a18": "\u4f2a\u5a18",
      "\u304a\u3084\u3058": "\u5927\u53d4",
      "\u50ac\u7720\u97f3\u58f0": "\u50ac\u7720\u97f3\u58f0",
      "\u30e4\u30f3\u30c7\u30ec": "\u75c5\u5a07",
      "\u4eba\u5916\u5a18/\u30e2\u30f3\u30b9\u30bf\u30fc\u5a18": "\u4eba\u5916\u5a18/\u9b54\u7269\u5a18",
      "\u793e\u9577": "\u793e\u957f",
      "\u533b\u8005": "\u533b\u751f",
      "\u60aa\u5815\u3061": "\u6076\u5815",
      "\u6d17\u8133": "\u6d17\u8111",
      "\u9752\u5e74": "\u9752\u5e74",
      "\u5b66\u751f": "\u5b66\u751f",
      "\u30ac\u30c6\u30f3\u7cfb": "\u4f53\u529b\u52b3\u52a8\u7cfb",
      "\u30ec\u30b9\u30e9\u30fc/\u683c\u95d8\u5bb6": "\u683c\u6597\u5bb6",
      "\u82b8\u80fd\u4eba/\u30a2\u30a4\u30c9\u30eb/\u30e2\u30c7\u30eb": "\u827a\u4eba/\u5076\u50cf/\u6a21\u7279",
      "\u4f53\u80b2\u4f1a\u7cfb/\u30b9\u30dd\u30fc\u30c4\u9078\u624b": "\u8fd0\u52a8\u5458",
      "\u5916\u56fd\u4eba": "\u5916\u56fd\u4eba",
      "\u30e4\u30ea\u30c1\u30f3/\u30d7\u30ec\u30a4\u30dc\u30fc\u30a4": "\u82b1\u82b1\u516c\u5b50",
      "\u30be\u30f3\u30d3": "\u50f5\u5c38",
      "\u4e0d\u826f/\u30e4\u30f3\u30ad\u30fc": "\u4e0d\u826f",
      "\u9006\u30cf\u30fc\u30ec\u30e0": "\u9006\u540e\u5bab",
      "\u4ffa\u69d8": "\u9738\u9053\u7cfb",
      "\u53d4\u7236/\u7fa9\u7236": "\u53d4\u7236/\u4e49\u7236",
      "\u4e0a\u53f8": "\u4e0a\u53f8",
      "\u738b\u5b50\u69d8/\u738b\u5b50\u7cfb": "\u738b\u5b50\u7cfb",
      "\u540c\u68f2": "\u540c\u5c45\u604b\u7231",
      "\u6d6e\u6c17": "\u51fa\u8f68",
      "\u8033\u304b\u304d": "\u638f\u8033",
      "\u6191\u4f9d": "\u9644\u8eab",
      "\u30ce\u30f3\u30b1": "\u5f02\u6027\u604b\u76f4\u7537",
      "\u30d0\u30a4": "\u53cc\u6027\u604b",
      "\u77ed\u9aea": "\u77ed\u53d1",
      "\u672a\u4ea1\u4eba": "\u5be1\u5987",
      "\u5973\u6027\u5411\u3051": "\u5973\u6027\u5411",
      "\u30aa\u30e1\u30ac\u30d0\u30fc\u30b9": "ABO/Omegaverse",
      "\u30ed\u30de\u30f3\u30b9": "\u6d6a\u6f2b/\u7231\u60c5",
      "\u30d0\u30a4\u30ce\u30fc\u30e9\u30eb/\u30c0\u30df\u30d8": "\u53cc\u8033\u5f55\u97f3/\u5047\u4eba\u5934\u9ea6",
      "ASMR": "ASMR",
      "DLsite\u7ffb\u8a33\u4f5c\u54c1": "DLsite\u7ffb\u8bd1\u4f5c\u54c1",
      "\u7537\u4e3b\u4eba\u516c": "\u7537\u4e3b\u4eba\u516c",
      "\u3055\u3055\u3084\u304d": "\u8033\u8bed",
      "\u30b5\u30ad\u30e5\u30d0\u30b9/\u6deb\u9b54": "\u9b45\u9b54",
      "\u7570\u4e16\u754c\u8ee2\u751f": "\u5f02\u4e16\u754c\u8f6c\u751f",
      "\u60aa\u5f79\u4ee4\u5b22": "\u6076\u5f79\u5343\u91d1",
      "\u57f7\u7740\u653b\u3081": "\u6267\u7740\u653b",
      "\u5bdd\u53d6\u3089\u305b": "\u4e3b\u52a8NTR",
      "\u9006NTR": "\u9006NTR",
      "Dom/Sub\u30e6\u30cb\u30d0\u30fc\u30b9": "Dom/Sub Universe",
      "\u5973\u6027\u512a\u4f4d": "\u5973\u6027\u4e3b\u5bfc",
      "\u96c4\u3063\u3071\u3044": "\u7537\u6027\u80f8\u808c",
      "\u4f53\u683c\u5dee": "\u4f53\u683c\u5dee",
      "\u7363\u4eba": "\u517d\u4eba",
      "\u4e0b\u7740": "\u5185\u8863",
      "\u8907\u6570\u30d7\u30ec\u30a4/\u4e71\u4ea4": "\u591a\u4eba",
      "\u8fd1\u89aa\u76f8\u59e6": "\u9aa8\u79d1",
      "\u7126\u3089\u3057": "\u6311\u9017",
      "\u5c11\u5e74": "\u5c11\u5e74",
      "\u30b7\u30e7\u30bf": "\u6b63\u592a",
      "\u521d\u4f53\u9a13": "\u521d\u4f53\u9a8c",
      "\u8d64\u3061\u3083\u3093\u30d7\u30ec\u30a4": "\u5a74\u513fPlay"
};

    function normalizeGenreId(value) {
      const text = firstText(value).replace(/[^0-9]/g, "");
      return text ? String(Number(text)) : "";
    }

    function collectGenreEntries(source, depth = 0, inGenre = false, out = []) {
      if (!source || depth > 6) return out;
      if (Array.isArray(source)) {
        source.forEach((item) => collectGenreEntries(item, depth + 1, inGenre, out));
        return out;
      }
      if (typeof source !== "object") {
        if (inGenre) out.push({ id: "", name: String(source).trim() });
        return out;
      }
      if (inGenre) {
        const id = normalizeGenreId(source.id ?? source.genre_id ?? source.genreId ?? source.code ?? source.search_val ?? source.value);
        const name = firstText(source.name, source.genre_name, source.genreName, source.label, source.text, source.value);
        if (id || name) out.push({ id, name });
      }
      for (const [key, value] of Object.entries(source)) {
        const nextInGenre = inGenre || /genre|genres|category|categories|tag|tags/i.test(key);
        if (inGenre && /^\d+$/.test(key)) {
          const name = typeof value === "string" ? value : firstText(value?.name, value?.genre_name, value?.genreName, value?.label, value?.text);
          out.push({ id: key, name });
        }
        collectGenreEntries(value, depth + 1, nextInGenre, out);
      }
      return out;
    }

    function importedGenreKeywords(product) {
      const seen = new Set();
      const result = [];
      collectGenreEntries(product).forEach((entry) => {
        if (result.length >= 8) return;
        const id = normalizeGenreId(entry.id);
        const keyword = (id && DLSITE_GENRE_KEYWORDS[id]) || DLSITE_GENRE_NAME_KEYWORDS[firstText(entry.name)];
        if (!keyword || seen.has(keyword)) return;
        seen.add(keyword);
        result.push(keyword);
      });
      return result;
    }

    const CHINESE_STRICT_PATTERN = /(\u4e2d\u56fd\u8a9e|\u4e2d\u56fd\u8bed|\u4e2d\u6587|\u7c21\u4f53|\u7b80\u4f53|\u7e41\u4f53|\u7e41\u9ad4|chinese|zh[-_ ](?:cn|tw|hans|hant))/i;
    function isChineseLangCode(value) {
      const code = String(value || "").toLowerCase().replace(/[\s_-]/g, "");
      return ["chihans", "chihant", "chi", "zhcn", "zhtw", "zhhans", "zhhant"].includes(code);
    }

    function hasChineseText(source) {
      if (!source) return false;
      if (Array.isArray(source)) return source.some((item) => hasChineseText(item));
      if (typeof source === "object") {
        for (const value of Object.values(source)) {
          if (hasChineseText(value)) return true;
        }
        return false;
      }
      return CHINESE_STRICT_PATTERN.test(String(source));
    }

    function productChineseTextFields(product) {
      if (!product || typeof product !== "object") return [];
      const texts = [
        product.work_name,
        product.title,
        product.name,
        product.maker_name,
        product.circle,
        product.brand_name,
        product.work_language
      ];
      const creators = product.creators || product.creaters || product.maker || {};
      const voiceBy = creators.voice_by || product.voice_by;
      if (Array.isArray(voiceBy)) {
        voiceBy.forEach((voice) => {
          texts.push(typeof voice === "object" && voice ? [voice.name, voice.kana, voice.romaji] : voice);
        });
      }
      if (Array.isArray(product.genres)) {
        product.genres.forEach((genre) => {
          texts.push(typeof genre === "object" && genre ? [genre.name, genre.genre_name] : genre);
        });
      }
      return texts;
    }

    function hasChineseVersionInfo(product) {
      if (!product || typeof product !== "object") return false;
      if (isChineseLangCode(product.translation_info && product.translation_info.lang)) return true;
      return hasChineseText(productChineseTextFields(product));
    }

    function setChineseChoice(choice) {
      const targetText = [CHOICE_SUBTITLE, CHOICE_VIDEO, CHOICE_SCRIPT, CHOICE_NONE].includes(choice) ? choice : CHOICE_SUBTITLE;
      document.querySelectorAll(".choice-button").forEach((item) => {
        item.classList.toggle("active", item.textContent.trim() === targetText);
      });
    }

    function parseDlsiteProduct(raw) {
      let product = Array.isArray(raw) ? raw[0] : raw;
      if (product?.work && typeof product.work === "object") product = product.work;
      else if (product?.product && typeof product.product === "object") product = product.product;
      else if (product && typeof product === "object" && !product.work_name && !product.title) {
        const firstKey = Object.keys(product).find((key) => product[key] && typeof product[key] === "object");
        if (firstKey) product = product[firstKey];
      }
      if (!product || typeof product !== "object") return null;
      const creators = product.creators || product.creaters || product.maker || {};
      const chineseEditionWorkno = Array.isArray(product.language_editions)
        ? (product.language_editions.find((edition) => isChineseLangCode(edition && edition.lang)) || {}).workno || ""
        : "";
      return {
        title: firstText(product.work_name, product.title, product.name, product.work?.work_name),
        cv: firstText(findVoiceText(creators), findVoiceText(product), creatorText(creators, "voice_by"), product.voice_by, product.voice),
        circle: firstText(product.maker_name, product.circle, product.maker?.name, product.brand?.name),
        originalPrice: numericText(product.official_price, product.price, product.price_str, product.work_price),
        coverUrl: productImageMainUrl(product),
        hasChineseVersion: hasChineseVersionInfo(product),
        chineseEditionWorkno: chineseEditionWorkno,
        keywords: importedGenreKeywords(product)
      };
    }

    function dlsiteProxyUrl() {
      const param = new URLSearchParams(window.location.search).get("dlsiteProxy");
      return (param || DLSITE_PROXY_URL).trim();
    }

    function buildProxyUrl(base, workno, endpoint) {
      if (!base) return "";
      if (base.includes("{workno}")) return base.replace("{workno}", encodeURIComponent(workno));
      const url = new URL(base, window.location.href);
      if (endpoint === "translatable") {
        url.searchParams.set("keyword", workno);
        url.searchParams.set("endpoint", "translatable");
      } else {
        url.searchParams.set("workno", workno);
      }
      return url.toString();
    }

    async function fetchWithTimeout(url, options = {}, timeoutMs = 12000) {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), timeoutMs);
      try {
        return await fetch(url, { ...options, signal: controller.signal });
      } finally {
        window.clearTimeout(timer);
      }
    }

    async function fetchProductJson(workno) {
      const directUrl = "https://www.dlsite.com/maniax/api/=/product.json?workno=" + encodeURIComponent(workno);
      const attempts = [directUrl];
      const proxyUrl = buildProxyUrl(dlsiteProxyUrl(), workno);
      if (proxyUrl) attempts.push(proxyUrl);
      let lastError;
      for (const url of attempts) {
        try {
          const response = await fetchWithTimeout(url, { mode: "cors", credentials: "omit" }, 12000);
          if (!response.ok) throw new Error("HTTP " + response.status);
          return await response.json();
        } catch (error) {
          lastError = error;
          console.warn("DLsite import attempt failed", url, error);
        }
      }
      throw lastError || new Error("DLsite import failed");
    }

    async function fetchTranslatableProducts(workno) {
      const directUrl = "https://www.dlsite.com/maniax/api/=/translatableProducts.json?keyword=" + encodeURIComponent(workno);
      const attempts = [directUrl];
      const proxyUrl = buildProxyUrl(dlsiteProxyUrl(), workno, "translatable");
      if (proxyUrl) attempts.push(proxyUrl);
      let lastError;
      for (const url of attempts) {
        try {
          const response = await fetchWithTimeout(url, { mode: "cors", credentials: "omit" }, 12000);
          if (!response.ok) throw new Error("HTTP " + response.status);
          return await response.json();
        } catch (error) {
          lastError = error;
          console.warn("DLsite translatable fetch failed", url, error);
        }
      }
      throw lastError || new Error("DLsite translatable fetch failed");
    }

    function parseTranslatableChinese(raw, workno) {
      const products = raw && raw.data && Array.isArray(raw.data.products) ? raw.data.products : null;
      if (!products) return null;
      const target = String(workno || "").toUpperCase();
      const entry = products.find((item) => item && typeof item === "object" && String(item.id || item.workno || item.product_id || "").toUpperCase() === target);
      const status = entry && entry.translationStatusForTranslator;
      if (!status || typeof status !== "object") return null;
      const hasChinese = Object.keys(status).some((key) => isChineseLangCode(key) && status[key] && typeof status[key] === "object" && (status[key].available === true || status[key].available === 1 || status[key].is_translated === true || status[key].is_translated === 1 || Number(status[key].on_sale_count) > 0 || Number(status[key].on_sale_status) > 0));
      return { hasChinese };
    }

    function applyImportedProduct(product, chineseChoice) {
      if (product.title) setEditableText("recordTitle", product.title);
      if (product.cv) setEditableText("cvText", product.cv);
      if (product.circle) setEditableText("circleText", product.circle);
      if (product.originalPrice) originalPrice.value = product.originalPrice;
      setChineseChoice(chineseChoice);
      if (Array.isArray(product.keywords)) renderTags(product.keywords.slice(0, 8));
      updateDiscount();
      saveState();
    }

    function blobToDataUrl(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error || new Error("FileReader failed"));
        reader.readAsDataURL(blob);
      });
    }

    async function importCoverFromUrl(url) {
      const normalizedUrl = normalizeImageUrl(url);
      if (!normalizedUrl) return false;
      const response = await fetchWithTimeout(normalizedUrl, { mode: "cors", credentials: "omit" }, isMobileView() ? 10000 : 15000);
      if (!response.ok) throw new Error("HTTP " + response.status);
      const blob = await response.blob();
      if (!blob.type || !blob.type.startsWith("image/")) throw new Error("Not an image response");
      await setCoverFromDataUrl(await blobToDataUrl(blob));
      return true;
    }

    function hasImportOverwriteTarget() {
      return Boolean(
        editableText("recordTitle").trim() ||
        editableText("cvText").trim() ||
        editableText("circleText").trim() ||
        originalPrice.value.trim() ||
        Array.from(tags.querySelectorAll(".tag")).some((tag) => tag.textContent.trim()) ||
        coverOriginalSrc ||
        coverEditedSrc ||
        coverImage.getAttribute("src")
      );
    }

    async function importProductInfo() {
      const workno = normalizeWorkno(editableText("rjText"));
      if (!workno) {
        alert(UI_IMPORT_NEED_RJ);
        return;
      }
      if (hasImportOverwriteTarget() && !window.confirm(UI_IMPORT_OVERWRITE_CONFIRM)) return;
      importButton.disabled = true;
      importButton.textContent = UI_IMPORT_LOADING;
      try {
        const product = parseDlsiteProduct(await fetchProductJson(workno));
        if (!product || (!product.title && !product.cv && !product.circle && !product.originalPrice)) {
          throw new Error("empty product");
        }
        let chineseChoice = product.hasChineseVersion || product.chineseEditionWorkno ? CHOICE_SUBTITLE : CHOICE_NONE;
        if (chineseChoice === CHOICE_NONE) {
          try {
            const translatable = parseTranslatableChinese(await fetchTranslatableProducts(workno), workno);
            if (translatable) chineseChoice = translatable.hasChinese ? CHOICE_SUBTITLE : CHOICE_NONE;
          } catch (translatableError) {
            console.warn("Chinese edition detection failed, keep fallback", translatableError);
          }
        }
        applyImportedProduct(product, chineseChoice);
        if (product.coverUrl) {
          try {
            await importCoverFromUrl(product.coverUrl);
          } catch (coverError) {
            console.warn("cover import failed", coverError);
            alert(UI_IMPORT_COVER_FAILED);
          }
        }
        importButton.textContent = UI_IMPORT_DONE;
        window.setTimeout(() => { importButton.textContent = UI_IMPORT_INFO; }, 1200);
      } catch (error) {
        console.warn("import failed", error);
        alert(UI_IMPORT_FAILED);
        importButton.textContent = UI_IMPORT_INFO;
      } finally {
        importButton.disabled = false;
      }
    }

    function makeStars(row, value = 4) {
      const wrap = row.querySelector(".stars");
      for (let index = 1; index <= 5; index += 1) {
        const star = document.createElement("button");
        star.className = "star";
        star.type = "button";
        star.textContent = "★";
        star.setAttribute("aria-label", `${index} 星`);
        star.addEventListener("click", (event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const isHalf = event.clientX - rect.left < rect.width / 2;
          setRating(row, isHalf ? index - 0.5 : index);
        });
        wrap.appendChild(star);
      }
      setRating(row, value);
    }

    document.querySelectorAll(".rating-row").forEach((row) => makeStars(row));
    function insertPlainText(text) {
      const selection = window.getSelection();
      if (!selection || !selection.rangeCount) return;
      selection.deleteFromDocument();
      selection.getRangeAt(0).insertNode(document.createTextNode(text));
      selection.collapseToEnd();
    }


    function normalizeEditableNode(node) {
      if (!node || (!node.isContentEditable && !node.classList?.contains("tag"))) return;
      if (!node.querySelector?.("a, span, font, b, strong, i, em, u")) return;
      const selection = window.getSelection();
      const text = node.textContent;
      node.textContent = text;
      const range = document.createRange();
      range.selectNodeContents(node);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    document.addEventListener("input", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.isContentEditable) {
        normalizeEditableNode(target);
      }
    });

    document.addEventListener("paste", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.isContentEditable && !target.matches("textarea, input")) return;
      const text = event.clipboardData?.getData("text/plain");
      if (text == null) return;
      event.preventDefault();
      if (target.matches("textarea, input")) {
        const start = target.selectionStart ?? target.value.length;
        const end = target.selectionEnd ?? target.value.length;
        target.value = target.value.slice(0, start) + text + target.value.slice(end);
        target.selectionStart = target.selectionEnd = start + text.length;
        target.dispatchEvent(new Event("input", { bubbles: true }));
      } else {
        insertPlainText(text);
      }
    });



    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    }

    async function rasterizeImageToPngDataUrl(src) {
      if (!src) return "";
      const image = await loadImage(src);
      const width = image.naturalWidth || image.width || 1;
      const height = image.naturalHeight || image.height || 1;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, width, height);
      return canvas.toDataURL("image/png");
    }

    const scriptLoadCache = new Map();

    function loadScriptOnce(src) {
      if (scriptLoadCache.has(src)) return scriptLoadCache.get(src);
      const promise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("script load failed: " + src));
        document.head.appendChild(script);
      });
      scriptLoadCache.set(src, promise);
      return promise;
    }

    async function loadEmbeddedStampDataUrl(src) {
      if (!src || String(src).startsWith("data:")) return "";
      if (!String(src).startsWith("stamp/")) return "";
      if (!window.STAMP_DATA_URLS) window.STAMP_DATA_URLS = {};
      if (window.STAMP_DATA_URLS[src]) return window.STAMP_DATA_URLS[src];
      const fileName = src.split("/").pop() || "";
      const baseName = fileName.replace(/\.[^.]+$/, "");
      if (!baseName) return "";
      try {
        await loadScriptOnce("stamp-data/" + baseName + ".js");
      } catch (error) {
        return "";
      }
      return window.STAMP_DATA_URLS[src] || "";
    }

    async function localizeImageToPngDataUrl(src) {
      if (!src) return "";
      if (String(src).startsWith("data:image/png")) return src;
      if (String(src).startsWith("data:")) return rasterizeImageToPngDataUrl(src);
      try {
        const response = await fetchWithTimeout(src, { mode: "cors", credentials: "omit" }, isMobileView() ? 10000 : 15000);
        if (!response.ok) throw new Error("HTTP " + response.status);
        const blob = await response.blob();
        if (!blob.type || !blob.type.startsWith("image/")) throw new Error("Not an image response");
        return rasterizeImageToPngDataUrl(await blobToDataUrl(blob));
      } catch (error) {
        const embedded = await loadEmbeddedStampDataUrl(src);
        if (embedded) return embedded;
        console.warn("Sticker fetch failed, fallback to image rasterize", src, error);
        return rasterizeImageToPngDataUrl(src);
      }
    }

    function resizeEditorCanvases(width, height) {
      [imageEditCanvas, editOriginalCanvas, editMosaicCanvas, editBlurCanvas, editMosaicMaskCanvas, editBlurMaskCanvas].forEach((canvas) => {
        canvas.width = width;
        canvas.height = height;
      });
    }

    function clearEditorMasks() {
      editMosaicMaskCtx.clearRect(0, 0, editMosaicMaskCanvas.width, editMosaicMaskCanvas.height);
      editBlurMaskCtx.clearRect(0, 0, editBlurMaskCanvas.width, editBlurMaskCanvas.height);
    }

    function cloneSticker(sticker) {
      return sticker ? { ...sticker } : sticker;
    }

    function cloneStickerList(list) {
      return Array.isArray(list) ? list.map(cloneSticker).filter(Boolean) : [];
    }

    function allStickerSources() {
      return defaultStickerSources.concat(stickerSources || []);
    }

    function stickerById(id) {
      return allStickerSources().find((item) => item.id === id);
    }

    function nextStickerId(prefix = "sticker") {
      return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
    }

    function clampSticker(sticker) {
      if (!sticker || !imageEditCanvas.width || !imageEditCanvas.height) return;
      const minSize = 36;
      sticker.w = Math.max(minSize, Math.min(sticker.w || 100, imageEditCanvas.width));
      sticker.h = Math.max(minSize, Math.min(sticker.h || 70, imageEditCanvas.height));
      sticker.x = clamp(sticker.x || 0, 0, Math.max(0, imageEditCanvas.width - sticker.w));
      sticker.y = clamp(sticker.y || 0, 0, Math.max(0, imageEditCanvas.height - sticker.h));
    }

    function renderStickerPicker() {
      if (!stickerList) return;
      const sources = allStickerSources();
      const pageCount = Math.max(1, Math.ceil(sources.length / STICKERS_PER_PAGE));
      stickerPage = clamp(Math.round(stickerPage) || 0, 0, pageCount - 1);
      stickerList.innerHTML = "";
      sources.slice(stickerPage * STICKERS_PER_PAGE, (stickerPage + 1) * STICKERS_PER_PAGE).forEach((source) => {
        const button = document.createElement("button");
        button.className = "sticker-option";
        button.type = "button";
        button.dataset.stickerId = source.id;
        if (source.type === "image") {
          const img = document.createElement("img");
          img.src = source.src;
          img.alt = "";
          button.appendChild(img);
        } else {
          button.textContent = source.text || "";
        }
        if (stickerSources.some((item) => item.id === source.id)) {
          const del = document.createElement("span");
          del.className = "sticker-delete";
          del.dataset.stickerDeleteId = source.id;
          del.setAttribute("role", "button");
          del.setAttribute("aria-label", String.fromCharCode(0x5220, 0x9664, 0x8d34, 0x7eb8));
          del.textContent = "\u00d7";
          button.appendChild(del);
        }
        stickerList.appendChild(button);
      });
      if (stickerPageText) stickerPageText.textContent = String(stickerPage + 1) + " / " + String(pageCount);
      if (stickerPrevPage) stickerPrevPage.disabled = stickerPage <= 0;
      if (stickerNextPage) stickerNextPage.disabled = stickerPage >= pageCount - 1;
    }

    function deleteCustomSticker(sourceId) {
      if (!sourceId) return;
      const index = stickerSources.findIndex((source) => source.id === sourceId);
      if (index < 0) return;
      stickerSources.splice(index, 1);
      coverStickers = coverStickers.filter((sticker) => sticker.sourceId !== sourceId);
      standaloneStickers = standaloneStickers.filter((sticker) => sticker.sourceId !== sourceId);
      const filterSnapshots = (list) => (Array.isArray(list) ? list : []).map((item) => (
        item ? { ...item, stickers: cloneStickerList((item.stickers || []).filter((sticker) => sticker.sourceId !== sourceId)) } : item
      ));
      editorUndoStack = filterSnapshots(editorUndoStack);
      editorRedoStack = filterSnapshots(editorRedoStack);
      coverEditorUndoStack = filterSnapshots(coverEditorUndoStack);
      coverEditorRedoStack = filterSnapshots(coverEditorRedoStack);
      stickerImageCache.delete(sourceId);
      if (selectedStickerId && !coverStickers.some((sticker) => sticker.id === selectedStickerId)) selectedStickerId = null;
      renderStickerPicker();
      renderImageEditor();
      saveEditorProject();
      saveState();
    }

    async function ensureStickerImage(source, forceLocal = false) {
      if (!source || source.type !== "image") return null;
      let img = stickerImageCache.get(source.id);
      if (!forceLocal && img && img.complete && img.naturalWidth) return img;
      const src = source.localSrc || source.src;
      try {
        const localSrc = source.localSrc || await localizeImageToPngDataUrl(src);
        source.localSrc = localSrc;
        img = await loadImage(localSrc);
        stickerImageCache.set(source.id, img);
        return img;
      } catch (error) {
        if (forceLocal) {
          console.warn("Sticker localize failed, fallback to original source for export", source.id, error);
          img = stickerImageCache.get(source.id) || await loadImage(source.src).catch(() => null);
          if (img && img.complete && img.naturalWidth) {
            stickerImageCache.set(source.id, img);
            return img;
          }
          stickerImageCache.delete(source.id);
          return null;
        }
        console.warn("Sticker localize failed, fallback to original source", source.id, error);
        img = await loadImage(source.src).catch(() => null);
        if (img) stickerImageCache.set(source.id, img);
        return img;
      }
    }

    async function stickerNaturalSize(source) {
      if (!source || source.type !== "image") return { width: 128, height: 82 };
      const img = await ensureStickerImage(source);
      return img && img.naturalWidth ? { width: img.naturalWidth, height: img.naturalHeight } : { width: 128, height: 128 };
    }

    async function addSticker(sourceId) {
      const source = stickerById(sourceId);
      if (!source || !imageEditCanvas.width || !imageEditCanvas.height) return;
      snapshotEditorMasks();
      const natural = await stickerNaturalSize(source).catch(() => ({ width: 128, height: 128 }));
      const ratio = Math.max(0.1, natural.width / Math.max(1, natural.height));
      const maxW = imageEditCanvas.width * 0.3;
      const maxH = imageEditCanvas.height * 0.3;
      let w = source.type === "image" ? Math.min(natural.width, maxW, maxH * ratio) : Math.min(128, imageEditCanvas.width * 0.28);
      let h = source.type === "image" ? w / ratio : Math.round(w * 0.64);
      if (h > maxH) {
        h = maxH;
        w = h * ratio;
      }
      const sticker = {
        id: nextStickerId(),
        sourceId,
        x: Math.round((imageEditCanvas.width - w) / 2),
        y: Math.round((imageEditCanvas.height - h) / 2),
        w: Math.round(w),
        h: Math.round(h)
      };
      clampSticker(sticker);
      coverStickers.push(sticker);
      selectedStickerId = sticker.id;
      renderImageEditor();
      saveEditorProject();
      saveState();
    }

    function currentEditorSnapshot() {
      if (!editMosaicMaskCanvas.width || !editMosaicMaskCanvas.height) return null;
      return {
        mosaic: editMosaicMaskCtx.getImageData(0, 0, editMosaicMaskCanvas.width, editMosaicMaskCanvas.height),
        blur: editBlurMaskCtx.getImageData(0, 0, editBlurMaskCanvas.width, editBlurMaskCanvas.height),
        stickers: cloneStickerList(coverStickers)
      };
    }

    function snapshotEditorMasks(clearRedo = true) {
      const snapshot = currentEditorSnapshot();
      if (!snapshot) return;
      editorUndoStack.push(snapshot);
      if (editorUndoStack.length > 24) editorUndoStack.shift();
      if (clearRedo) editorRedoStack = [];
    }

    function restoreEditorSnapshot(snapshot) {
      if (!snapshot) return;
      editMosaicMaskCtx.putImageData(snapshot.mosaic, 0, 0);
      editBlurMaskCtx.putImageData(snapshot.blur, 0, 0);
      resetEditorMaskCompositeModes();
      coverStickers = cloneStickerList(snapshot.stickers);
      selectedStickerId = null;
      renderImageEditor();
    }

    function undoEditorStep() {
      const previous = editorUndoStack.pop();
      if (!previous) return;
      const current = currentEditorSnapshot();
      if (current) editorRedoStack.push(current);
      if (editorRedoStack.length > 24) editorRedoStack.shift();
      restoreEditorSnapshot(previous);
      saveEditorProject();
      saveState();
    }

    function redoEditorStep() {
      const next = editorRedoStack.pop();
      if (!next) return;
      const current = currentEditorSnapshot();
      if (current) editorUndoStack.push(current);
      if (editorUndoStack.length > 24) editorUndoStack.shift();
      restoreEditorSnapshot(next);
      saveEditorProject();
      saveState();
    }

    function maskSnapshotToDataUrls(snapshot) {
      if (!snapshot || !editMosaicMaskCanvas.width || !editMosaicMaskCanvas.height) return null;
      const mosaic = document.createElement("canvas");
      const blur = document.createElement("canvas");
      mosaic.width = blur.width = editMosaicMaskCanvas.width;
      mosaic.height = blur.height = editMosaicMaskCanvas.height;
      mosaic.getContext("2d").putImageData(snapshot.mosaic, 0, 0);
      blur.getContext("2d").putImageData(snapshot.blur, 0, 0);
      return { mosaic: mosaic.toDataURL("image/png"), blur: blur.toDataURL("image/png"), stickers: cloneStickerList(snapshot.stickers) };
    }

    async function dataUrlToImageData(src, width, height) {
      if (!src) return null;
      const img = await loadImage(src).catch(() => null);
      if (!img) return null;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      return ctx.getImageData(0, 0, width, height);
    }

    async function restoreMaskCanvasFromSrc(ctx, src, width, height) {
      ctx.clearRect(0, 0, width, height);
      if (!src) return;
      const img = await loadImage(src).catch(() => null);
      if (img) ctx.drawImage(img, 0, 0, width, height);
    }

    async function restoreEditorStack(items, width, height) {
      const restored = [];
      for (const item of (Array.isArray(items) ? items.slice(-12) : [])) {
        const mosaic = await dataUrlToImageData(item?.mosaic, width, height);
        const blur = await dataUrlToImageData(item?.blur, width, height);
        if (mosaic && blur) restored.push({ mosaic, blur, stickers: cloneStickerList(item?.stickers) });
      }
      return restored;
    }

    async function restoreEditorUndoStack(width, height) {
      editorUndoStack = await restoreEditorStack(coverEditorUndoStack, width, height);
      editorRedoStack = await restoreEditorStack(coverEditorRedoStack, width, height);
    }

    function saveEditorProject() {
      if (!imageEditCanvas.width || !imageEditCanvas.height) return;
      coverMosaicMaskSrc = editMosaicMaskCanvas.toDataURL("image/png");
      coverBlurMaskSrc = editBlurMaskCanvas.toDataURL("image/png");
      coverEditorUndoStack = editorUndoStack.map(maskSnapshotToDataUrls).filter(Boolean).slice(-12);
      coverEditorRedoStack = editorRedoStack.map(maskSnapshotToDataUrls).filter(Boolean).slice(-12);
      coverStickers = cloneStickerList(coverStickers);
      if (imageEditorMode === "standalone") syncStandaloneFromEditorGlobals();
    }

    function boxBlurPass(src, dst, width, height, radius, horizontal) {
      const span = radius * 2 + 1;
      if (horizontal) {
        for (let y = 0; y < height; y++) {
          const row = y * width;
          let r = 0, g = 0, b = 0, a = 0;
          for (let x = -radius; x <= radius; x++) {
            const index = (row + clamp(x, 0, width - 1)) * 4;
            r += src[index]; g += src[index + 1]; b += src[index + 2]; a += src[index + 3];
          }
          for (let x = 0; x < width; x++) {
            const out = (row + x) * 4;
            dst[out] = r / span;
            dst[out + 1] = g / span;
            dst[out + 2] = b / span;
            dst[out + 3] = a / span;
            const remove = (row + clamp(x - radius, 0, width - 1)) * 4;
            const add = (row + clamp(x + radius + 1, 0, width - 1)) * 4;
            r += src[add] - src[remove];
            g += src[add + 1] - src[remove + 1];
            b += src[add + 2] - src[remove + 2];
            a += src[add + 3] - src[remove + 3];
          }
        }
        return;
      }
      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0, a = 0;
        for (let y = -radius; y <= radius; y++) {
          const index = (clamp(y, 0, height - 1) * width + x) * 4;
          r += src[index]; g += src[index + 1]; b += src[index + 2]; a += src[index + 3];
        }
        for (let y = 0; y < height; y++) {
          const out = (y * width + x) * 4;
          dst[out] = r / span;
          dst[out + 1] = g / span;
          dst[out + 2] = b / span;
          dst[out + 3] = a / span;
          const remove = (clamp(y - radius, 0, height - 1) * width + x) * 4;
          const add = (clamp(y + radius + 1, 0, height - 1) * width + x) * 4;
          r += src[add] - src[remove];
          g += src[add + 1] - src[remove + 1];
          b += src[add + 2] - src[remove + 2];
          a += src[add + 3] - src[remove + 3];
        }
      }
    }

    function buildBlurEffectCanvas(width, height) {
      editBlurCtx.clearRect(0, 0, width, height);
      try {
        const source = editOriginalCtx.getImageData(0, 0, width, height);
        let current = new Uint8ClampedArray(source.data);
        let temp = new Uint8ClampedArray(source.data.length);
        const radius = Math.max(8, Math.round(Math.min(width, height) / 38));
        for (let pass = 0; pass < 2; pass++) {
          boxBlurPass(current, temp, width, height, radius, true);
          boxBlurPass(temp, current, width, height, radius, false);
        }
        const output = editBlurCtx.createImageData(width, height);
        output.data.set(current);
        editBlurCtx.putImageData(output, 0, 0);
      } catch (error) {
        console.warn("fallback blur used", error);
        const blurSmall = document.createElement("canvas");
        const blurSmallCtx = blurSmall.getContext("2d");
        const blurScale = 12;
        blurSmall.width = Math.max(1, Math.round(width / blurScale));
        blurSmall.height = Math.max(1, Math.round(height / blurScale));
        blurSmallCtx.imageSmoothingEnabled = true;
        blurSmallCtx.drawImage(editOriginalCanvas, 0, 0, blurSmall.width, blurSmall.height);
        editBlurCtx.imageSmoothingEnabled = true;
        editBlurCtx.drawImage(blurSmall, 0, 0, blurSmall.width, blurSmall.height, 0, 0, width, height);
      }
    }

    function buildEffectCanvases() {
      const width = editOriginalCanvas.width;
      const height = editOriginalCanvas.height;
      editMosaicCtx.clearRect(0, 0, width, height);
      const small = document.createElement("canvas");
      const smallCtx = small.getContext("2d");
      const block = 22;
      small.width = Math.max(1, Math.round(width / block));
      small.height = Math.max(1, Math.round(height / block));
      smallCtx.drawImage(editOriginalCanvas, 0, 0, small.width, small.height);
      editMosaicCtx.imageSmoothingEnabled = false;
      editMosaicCtx.drawImage(small, 0, 0, small.width, small.height, 0, 0, width, height);
      editMosaicCtx.imageSmoothingEnabled = true;

      buildBlurEffectCanvas(width, height);
    }

    function drawMaskedEffect(targetCtx, effectCanvas, maskCanvas) {
      const temp = document.createElement("canvas");
      temp.width = effectCanvas.width;
      temp.height = effectCanvas.height;
      const tempCtx = temp.getContext("2d");
      tempCtx.drawImage(effectCanvas, 0, 0);
      tempCtx.globalCompositeOperation = "destination-in";
      tempCtx.drawImage(maskCanvas, 0, 0);
      tempCtx.globalCompositeOperation = "source-over";
      targetCtx.drawImage(temp, 0, 0);
    }

    function drawRoundRectPath(ctx, x, y, w, h, r) {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h - radius);
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      ctx.lineTo(x + radius, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function drawTextSticker(ctx, source, sticker) {
      ctx.save();
      drawRoundRectPath(ctx, sticker.x, sticker.y, sticker.w, sticker.h, Math.min(22, sticker.h / 2));
      ctx.fillStyle = "rgba(255, 247, 250, 0.9)";
      ctx.fill();
      ctx.lineWidth = Math.max(2, sticker.w / 70);
      ctx.strokeStyle = "rgba(217, 95, 140, 0.36)";
      ctx.stroke();
      ctx.fillStyle = currentCardTheme().accent;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = canvasFont("900", Math.max(18, Math.round(sticker.h * 0.52)));
      ctx.fillText(source.text || "", sticker.x + sticker.w / 2, sticker.y + sticker.h / 2 + 1);
      ctx.restore();
    }

    function drawImageSticker(ctx, source, sticker, exportOnly = false) {
      const img = stickerImageCache.get(source.id);
      if (img && img.complete && img.naturalWidth) {
        ctx.drawImage(img, sticker.x, sticker.y, sticker.w, sticker.h);
        return;
      }
      if (!exportOnly) void ensureStickerImage(source).then(() => renderImageEditor());
    }

    function drawStickerControls(ctx, sticker) {
      const handle = Math.max(18, Math.round(Math.min(imageEditCanvas.width, imageEditCanvas.height) * 0.035));
      ctx.save();
      ctx.strokeStyle = "rgba(217, 95, 140, 0.88)";
      ctx.lineWidth = Math.max(2, handle / 8);
      ctx.setLineDash([8, 6]);
      ctx.strokeRect(sticker.x, sticker.y, sticker.w, sticker.h);
      ctx.setLineDash([]);
      const points = [
        [sticker.x, sticker.y],
        [sticker.x + sticker.w, sticker.y],
        [sticker.x, sticker.y + sticker.h],
        [sticker.x + sticker.w, sticker.y + sticker.h]
      ];
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = "rgba(217, 95, 140, 0.8)";
      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, handle / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
      ctx.fillStyle = currentCardTheme().accent;
      ctx.beginPath();
      ctx.arc(sticker.x + sticker.w, sticker.y, handle * 0.58, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = Math.max(2, handle / 9);
      ctx.beginPath();
      ctx.moveTo(sticker.x + sticker.w - handle * 0.22, sticker.y - handle * 0.22);
      ctx.lineTo(sticker.x + sticker.w + handle * 0.22, sticker.y + handle * 0.22);
      ctx.moveTo(sticker.x + sticker.w + handle * 0.22, sticker.y - handle * 0.22);
      ctx.lineTo(sticker.x + sticker.w - handle * 0.22, sticker.y + handle * 0.22);
      ctx.stroke();
      ctx.restore();
    }

    function drawEditorStickers(ctx, showControls = false, exportOnly = false) {
      coverStickers.forEach((sticker) => {
        const source = stickerById(sticker.sourceId);
        if (!source) return;
        clampSticker(sticker);
        if (source.type === "image") drawImageSticker(ctx, source, sticker, exportOnly);
        else drawTextSticker(ctx, source, sticker);
      });
      if (showControls && selectedStickerId) {
        const selected = coverStickers.find((item) => item.id === selectedStickerId);
        if (selected) drawStickerControls(ctx, selected);
      }
    }

    function renderImageEditor(targetCanvas = imageEditCanvas, options = {}) {
      if (!editorImage) return;
      const ctx = targetCanvas.getContext("2d");
      ctx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
      ctx.drawImage(editOriginalCanvas, 0, 0);
      drawMaskedEffect(ctx, editMosaicCanvas, editMosaicMaskCanvas);
      drawMaskedEffect(ctx, editBlurCanvas, editBlurMaskCanvas);
      drawEditorStickers(ctx, options.controls !== false && targetCanvas === imageEditCanvas, options.controls === false);
    }

    function requestEditorRender() {
      if (editorRenderFrame) return;
      editorRenderFrame = requestAnimationFrame(() => {
        editorRenderFrame = 0;
        renderImageEditor();
      });
    }

    function editorPointFromEvent(event) {
      const rect = imageEditCanvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * (imageEditCanvas.width / rect.width),
        y: (event.clientY - rect.top) * (imageEditCanvas.height / rect.height)
      };
    }

    function stickerHandleSize() {
      return Math.max(22, Math.round(Math.min(imageEditCanvas.width, imageEditCanvas.height) * 0.045));
    }

    function pointInCircle(point, x, y, radius) {
      return Math.hypot(point.x - x, point.y - y) <= radius;
    }

    function hitTestSticker(point) {
      const handle = stickerHandleSize();
      for (let i = coverStickers.length - 1; i >= 0; i -= 1) {
        const sticker = coverStickers[i];
        const corners = [
          { corner: "nw", x: sticker.x, y: sticker.y },
          { corner: "ne", x: sticker.x + sticker.w, y: sticker.y },
          { corner: "sw", x: sticker.x, y: sticker.y + sticker.h },
          { corner: "se", x: sticker.x + sticker.w, y: sticker.y + sticker.h }
        ];
        if (pointInCircle(point, sticker.x + sticker.w, sticker.y, handle * 0.7)) return { sticker, action: "delete" };
        const corner = corners.find((item) => pointInCircle(point, item.x, item.y, handle * 0.72));
        if (corner) return { sticker, action: "resize", corner: corner.corner };
        if (point.x >= sticker.x && point.x <= sticker.x + sticker.w && point.y >= sticker.y && point.y <= sticker.y + sticker.h) {
          return { sticker, action: "move" };
        }
      }
      return null;
    }

    function resizeStickerFromCorner(sticker, corner, point, start) {
      const ratio = Math.max(0.1, start.w / Math.max(1, start.h));
      let fixedX = start.x;
      let fixedY = start.y;
      let signX = 1;
      let signY = 1;
      if (corner === "nw") { fixedX = start.x + start.w; fixedY = start.y + start.h; signX = -1; signY = -1; }
      if (corner === "ne") { fixedX = start.x; fixedY = start.y + start.h; signX = 1; signY = -1; }
      if (corner === "sw") { fixedX = start.x + start.w; fixedY = start.y; signX = -1; signY = 1; }
      const rawW = Math.abs(point.x - fixedX);
      const rawH = Math.abs(point.y - fixedY);
      let nextW = Math.max(36, Math.max(rawW, rawH * ratio));
      let nextH = nextW / ratio;
      nextW = Math.min(nextW, imageEditCanvas.width);
      nextH = Math.min(nextH, imageEditCanvas.height);
      let nextX = signX < 0 ? fixedX - nextW : fixedX;
      let nextY = signY < 0 ? fixedY - nextH : fixedY;
      sticker.w = nextW;
      sticker.h = nextH;
      sticker.x = nextX;
      sticker.y = nextY;
      clampSticker(sticker);
    }

    function moveSticker(sticker, point, start) {
      sticker.x = start.x + (point.x - start.pointerX);
      sticker.y = start.y + (point.y - start.pointerY);
      clampSticker(sticker);
    }

    function resizeCursorForCorner(corner) {
      return corner === "nw" || corner === "se" ? "nwse-resize" : "nesw-resize";
    }

    function editorBrushCursor() {
      return editorTool === "erase" ? "cell" : "crosshair";
    }

    function cursorForEditorHit(hit) {
      if (editorTool !== "sticker") return editorBrushCursor();
      if (!hit) return "default";
      if (hit.action === "delete") return "pointer";
      if (hit.action === "resize") return resizeCursorForCorner(hit.corner);
      return "move";
    }

    function updateEditorCursor(event) {
      if (!editorImage) {
        imageEditCanvas.style.cursor = "default";
        return;
      }
      if (editorStickerDrag) {
        imageEditCanvas.style.cursor = editorStickerDrag.action === "resize" ? resizeCursorForCorner(editorStickerDrag.corner) : "move";
        return;
      }
      if (editorDrawing) {
        imageEditCanvas.style.cursor = editorBrushCursor();
        return;
      }
      const point = editorPointFromEvent(event);
      imageEditCanvas.style.cursor = cursorForEditorHit(editorTool === "sticker" ? hitTestSticker(point) : null);
    }

    function resetEditorMaskCompositeModes() {
      editMosaicMaskCtx.globalCompositeOperation = "source-over";
      editBlurMaskCtx.globalCompositeOperation = "source-over";
    }

    function paintEditorMaskStroke(ctx, from, to, size, operation) {
      ctx.save();
      ctx.globalCompositeOperation = operation;
      ctx.strokeStyle = "#fff";
      ctx.fillStyle = "#fff";
      ctx.lineWidth = size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(to.x, to.y, size / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawEditorStroke(from, to) {
      const size = Number(brushSize.value) || 42;
      resetEditorMaskCompositeModes();
      if (editorTool === "erase") {
        paintEditorMaskStroke(editMosaicMaskCtx, from, to, size, "destination-out");
        paintEditorMaskStroke(editBlurMaskCtx, from, to, size, "destination-out");
      } else if (editorTool === "blur") {
        paintEditorMaskStroke(editBlurMaskCtx, from, to, size, "source-over");
        paintEditorMaskStroke(editMosaicMaskCtx, from, to, size, "destination-out");
      } else {
        paintEditorMaskStroke(editMosaicMaskCtx, from, to, size, "source-over");
        paintEditorMaskStroke(editBlurMaskCtx, from, to, size, "destination-out");
      }
      resetEditorMaskCompositeModes();
      requestEditorRender();
    }

    function setEditorTool(tool) {
      resetEditorMaskCompositeModes();
      editorTool = tool;
      imageToolMosaic.classList.toggle("active", tool === "mosaic");
      imageToolBlur.classList.toggle("active", tool === "blur");
      imageToolErase.classList.toggle("active", tool === "erase");
      imageToolSelect?.classList.toggle("active", tool === "sticker");
      imageEditCanvas.style.cursor = tool === "sticker" ? "default" : editorBrushCursor();
    }

    function editorGlobals() {
      return {
        coverOriginalSrc,
        coverEditedSrc,
        coverMosaicMaskSrc,
        coverBlurMaskSrc,
        coverEditorUndoStack: JSON.parse(JSON.stringify(coverEditorUndoStack || [])),
        coverEditorRedoStack: JSON.parse(JSON.stringify(coverEditorRedoStack || [])),
        coverStickers: cloneStickerList(coverStickers),
        stickerSources: JSON.parse(JSON.stringify(stickerSources || [])),
        selectedStickerId,
        editorTool,
        coverSrc: coverImage.getAttribute("src") || "",
        coverFit: coverImage.style.objectFit || "contain"
      };
    }

    function applyEditorGlobals(state) {
      const next = state || {};
      coverOriginalSrc = next.coverOriginalSrc || "";
      coverEditedSrc = next.coverEditedSrc || "";
      coverMosaicMaskSrc = next.coverMosaicMaskSrc || "";
      coverBlurMaskSrc = next.coverBlurMaskSrc || "";
      coverEditorUndoStack = Array.isArray(next.coverEditorUndoStack) ? next.coverEditorUndoStack : [];
      coverEditorRedoStack = Array.isArray(next.coverEditorRedoStack) ? next.coverEditorRedoStack : [];
      coverStickers = cloneStickerList(next.coverStickers);
      stickerSources = Array.isArray(next.stickerSources) ? next.stickerSources : [];
      selectedStickerId = next.selectedStickerId || null;
      editorTool = next.editorTool || "mosaic";
    }

    function standaloneEditorGlobals(src) {
      return {
        coverOriginalSrc: standaloneOriginalSrc || src || "",
        coverEditedSrc: standaloneEditedSrc || "",
        coverMosaicMaskSrc: standaloneMosaicMaskSrc || "",
        coverBlurMaskSrc: standaloneBlurMaskSrc || "",
        coverEditorUndoStack: standaloneEditorUndoStack,
        coverEditorRedoStack: standaloneEditorRedoStack,
        coverStickers: cloneStickerList(standaloneStickers),
        stickerSources: JSON.parse(JSON.stringify(standaloneStickerSources || [])),
        selectedStickerId,
        editorTool
      };
    }

    function syncStandaloneFromEditorGlobals() {
      standaloneOriginalSrc = coverOriginalSrc || editorSourceSrc || standaloneOriginalSrc || "";
      standaloneEditedSrc = coverEditedSrc || standaloneEditedSrc || "";
      standaloneMosaicMaskSrc = coverMosaicMaskSrc || "";
      standaloneBlurMaskSrc = coverBlurMaskSrc || "";
      standaloneEditorUndoStack = JSON.parse(JSON.stringify(coverEditorUndoStack || []));
      standaloneEditorRedoStack = JSON.parse(JSON.stringify(coverEditorRedoStack || []));
      standaloneStickers = cloneStickerList(coverStickers);
      standaloneStickerSources = JSON.parse(JSON.stringify(stickerSources || []));
    }

    function restoreTemplateEditorGlobals() {
      if (!templateEditorGlobalsBackup) return;
      applyEditorGlobals(templateEditorGlobalsBackup);
      templateEditorGlobalsBackup = null;
      renderStickerPicker();
    }

    function layoutTemplateImageEditorActions() {
      if (isMobileView()) {
        imageActionRow?.append(imageClearButton, imageDoneButton);
      } else {
        imageToolRow?.append(imageClearButton);
        imageActionRow?.append(imageDoneButton);
      }
    }

    function placeImageEditorForTemplate() {
      document.querySelector(".app")?.appendChild(imageEditModal);
      imageEditModal.classList.remove("standalone-editor");
      imageDoneButton.textContent = String.fromCharCode(0x5b8c, 0x6210);
      imageCancelButton.textContent = UI_REVIEW_CANCEL;
      layoutTemplateImageEditorActions();
    }

    function placeImageEditorForStandalone() {
      imageToolPage?.appendChild(imageEditModal);
      imageEditModal.classList.add("standalone-editor");
      imageDoneButton.textContent = UI_DOWNLOAD_IMAGE;
      imageCancelButton.textContent = UI_REMOVE_IMAGE;
      imageClearButton.parentElement?.append(imageClearButton, imageCancelButton, imageDoneButton);
    }

    async function loadEditorFromCurrentGlobals(src) {
      const localSrc = await localizeImageToPngDataUrl(src);
      editorSourceSrc = localSrc;
      editorSessionSnapshot = editorGlobals();
      editorImage = await loadImage(localSrc);
      const sourceWidth = editorImage.naturalWidth || editorImage.width;
      const sourceHeight = editorImage.naturalHeight || editorImage.height;
      const maxStandaloneSide = imageEditorMode === "standalone" && isMobileView() ? 1800 : Infinity;
      const editorScale = Math.min(1, maxStandaloneSide / Math.max(sourceWidth, sourceHeight));
      const width = Math.max(1, Math.round(sourceWidth * editorScale));
      const height = Math.max(1, Math.round(sourceHeight * editorScale));
      resizeEditorCanvases(width, height);
      editOriginalCtx.clearRect(0, 0, width, height);
      editOriginalCtx.drawImage(editorImage, 0, 0, width, height);
      buildEffectCanvases();
      clearEditorMasks();
      await restoreMaskCanvasFromSrc(editMosaicMaskCtx, coverMosaicMaskSrc, width, height);
      await restoreMaskCanvasFromSrc(editBlurMaskCtx, coverBlurMaskSrc, width, height);
      await restoreEditorUndoStack(width, height);
      renderStickerPicker();
      setEditorTool(editorTool || "mosaic");
      renderImageEditor();
      if (imageToolEmpty) imageToolEmpty.hidden = true;
      if (imageEditCanvas) imageEditCanvas.hidden = false;
      mobileFocusBack?.classList.add("hidden");
      imageEditModal.hidden = false;
    }

    async function openImageEditor() {
      if (imageEditorMode === "standalone") leaveStandaloneImageTool();
      imageEditorMode = "template";
      placeImageEditorForTemplate();
      const src = coverOriginalSrc || coverImage.getAttribute("src") || coverEditedSrc || "";
      if (!src) {
        coverInput.click();
        return;
      }
      await loadEditorFromCurrentGlobals(src);
    }

    async function openStandaloneImageEditor(src) {
      const nextSrc = src || standaloneOriginalSrc || standaloneEditedSrc || "";
      if (!nextSrc) {
        standaloneImageInput?.click();
        return;
      }
      if (imageEditorMode !== "standalone") templateEditorGlobalsBackup = editorGlobals();
      imageEditorMode = "standalone";
      placeImageEditorForStandalone();
      applyEditorGlobals(standaloneEditorGlobals(nextSrc));
      await loadEditorFromCurrentGlobals(nextSrc);
    }

    function prepareStandaloneImageTool() {
      if (standaloneOriginalSrc || standaloneEditedSrc) {
        void openStandaloneImageEditor();
        return;
      }
      if (imageEditorMode !== "standalone") templateEditorGlobalsBackup = editorGlobals();
      imageEditorMode = "standalone";
      placeImageEditorForStandalone();
      editorImage = null;
      editorSessionSnapshot = null;
      if (imageEditCanvas) imageEditCanvas.hidden = true;
      if (imageToolEmpty) imageToolEmpty.hidden = false;
      imageEditModal.hidden = false;
    }

    function removeStandaloneImage() {
      standaloneOriginalSrc = "";
      standaloneEditedSrc = "";
      standaloneMosaicMaskSrc = "";
      standaloneBlurMaskSrc = "";
      standaloneEditorUndoStack = [];
      standaloneEditorRedoStack = [];
      standaloneStickers = [];
      editorImage = null;
      editorSourceSrc = "";
      editorSessionSnapshot = null;
      editorDrawing = false;
      editorLastPoint = null;
      editorStickerDrag = null;
      selectedStickerId = null;
      applyEditorGlobals(standaloneEditorGlobals(""));
      if (imageEditCanvas) {
        imageEditCanvas.hidden = true;
        imageEditCanvas.width = 0;
        imageEditCanvas.height = 0;
      }
      if (imageToolEmpty) imageToolEmpty.hidden = false;
      imageEditModal.hidden = false;
      renderStickerPicker();
      saveState();
    }

    function leaveStandaloneImageTool() {
      if (imageEditorMode !== "standalone") return;
      if (!imageEditModal.hidden && editorImage) {
        saveEditorProject();
        syncStandaloneFromEditorGlobals();
      }
      imageEditModal.hidden = true;
      editorSessionSnapshot = null;
      editorDrawing = false;
      editorLastPoint = null;
      editorStickerDrag = null;
      selectedStickerId = null;
      imageEditorMode = "template";
      restoreTemplateEditorGlobals();
      placeImageEditorForTemplate();
    }

    async function exportStandaloneImageFromEditor() {
      if (imageEditorMode !== "standalone") return;
      if (!editorImage || !imageEditCanvas.width || !imageEditCanvas.height) {
        alert(String.fromCharCode(0x8bf7, 0x5148, 0x4e0a, 0x4f20, 0x56fe, 0x7247, 0x3002));
        return;
      }
      imageDoneButton.disabled = true;
      try {
        await ensureUsedStickerImages();
        const canvas = document.createElement("canvas");
        canvas.width = imageEditCanvas.width;
        canvas.height = imageEditCanvas.height;
        renderImageEditor(canvas, { controls: false });
        const blob = await canvasToBlob(canvas);
        handleExportBlob(blob, standaloneExportFileName());
        standaloneOriginalSrc = editorSourceSrc || standaloneOriginalSrc;
        try {
          saveEditorProject();
          standaloneEditedSrc = canvas.toDataURL("image/png");
          saveState();
        } catch (saveError) {
          console.warn("Standalone image state save failed after export", saveError);
        }
      } catch (error) {
        console.error(error);
        alert(String.fromCharCode(0x5bfc, 0x51fa, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x6362, 0x4e00, 0x5f20, 0x56fe, 0x7247, 0x6216, 0x91cd, 0x65b0, 0x4e0a, 0x4f20, 0x540e, 0x518d, 0x8bd5, 0x3002));
      } finally {
        imageDoneButton.disabled = false;
      }
    }

    async function ensureUsedStickerImages() {
      const sources = coverStickers
        .map((sticker) => stickerById(sticker.sourceId))
        .filter((source) => source && source.type === "image");
      await Promise.all(sources.map((source) => ensureStickerImage(source, true)));
    }

    async function updateEditedCoverFromEditor() {
      if (!editorImage) return "";
      await ensureUsedStickerImages();
      const result = document.createElement("canvas");
      result.width = imageEditCanvas.width;
      result.height = imageEditCanvas.height;
      renderImageEditor(result, { controls: false });
      return result.toDataURL("image/png");
    }

    function restoreEditorSessionSnapshot() {
      if (!editorSessionSnapshot) return;
      coverOriginalSrc = editorSessionSnapshot.coverOriginalSrc || "";
      coverEditedSrc = editorSessionSnapshot.coverEditedSrc || "";
      coverMosaicMaskSrc = editorSessionSnapshot.coverMosaicMaskSrc || "";
      coverBlurMaskSrc = editorSessionSnapshot.coverBlurMaskSrc || "";
      coverEditorUndoStack = Array.isArray(editorSessionSnapshot.coverEditorUndoStack) ? editorSessionSnapshot.coverEditorUndoStack : [];
      coverEditorRedoStack = Array.isArray(editorSessionSnapshot.coverEditorRedoStack) ? editorSessionSnapshot.coverEditorRedoStack : [];
      coverStickers = cloneStickerList(editorSessionSnapshot.coverStickers);
      stickerSources = Array.isArray(editorSessionSnapshot.stickerSources) ? editorSessionSnapshot.stickerSources : [];
      selectedStickerId = editorSessionSnapshot.selectedStickerId || null;
      editorTool = editorSessionSnapshot.editorTool || "mosaic";
    }

    async function closeImageEditor(apply) {
      if (imageEditorMode === "standalone") {
        if (editorImage) {
          if (apply) {
            void exportStandaloneImageFromEditor();
            return;
          }
          restoreEditorSessionSnapshot();
          syncStandaloneFromEditorGlobals();
        }
        imageEditModal.hidden = true;
        editorSessionSnapshot = null;
        editorDrawing = false;
        editorLastPoint = null;
        editorStickerDrag = null;
        selectedStickerId = null;
        imageEditorMode = "template";
        restoreTemplateEditorGlobals();
        placeImageEditorForTemplate();
        if (imageToolEmpty) imageToolEmpty.hidden = false;
        return;
      }
      let shouldClose = true;
      try {
        if (editorImage) {
          if (apply) {
            const nextEditedSrc = await updateEditedCoverFromEditor();
            if (!nextEditedSrc) throw new Error("Edited cover is empty");
            coverOriginalSrc = editorSourceSrc;
            coverEditedSrc = nextEditedSrc;
            coverImage.removeAttribute("src");
            coverImage.setAttribute("src", coverEditedSrc);
            coverImage.src = coverEditedSrc;
            coverImage.style.filter = "";
            coverBox.classList.add("has-image");
            try {
              saveEditorProject();
              saveState();
            } catch (saveError) {
              console.warn("Image editor state save skipped after applying result", saveError);
            }
            requestAnimationFrame(() => fitStage());
          } else {
            restoreEditorSessionSnapshot();
            saveState();
          }
        }
      } catch (error) {
        console.error("Image editor close failed", error);
        shouldClose = !apply;
        const detail = error && (error.name || error.message) ? "\n" + [error.name, error.message].filter(Boolean).join(": ") : "";
        alert(String.fromCharCode(0x56fe, 0x7247, 0x2044, 0x7f16, 0x8f91, 0x7ed3, 0x679c, 0x5e94, 0x7528, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x518d, 0x8bd5, 0x4e00, 0x6b21, 0x3002) + detail);
      } finally {
        if (shouldClose) {
          editorSessionSnapshot = null;
          editorDrawing = false;
          editorLastPoint = null;
          editorStickerDrag = null;
          selectedStickerId = null;
          imageEditModal.hidden = true;
          if (imageEditorMode === "template") requestAnimationFrame(() => fitStage());
        }
      }
    }

    function editableText(id) {
      return document.getElementById(id)?.textContent || "";
    }

    function syncCircleTextLayout() {
      const node = document.getElementById("circleText");
      if (!node) return;
      const length = Array.from(node.textContent.trim()).length;
      node.classList.toggle("is-long-text", length > 14);
    }

    function setEditableText(id, value) {
      const node = document.getElementById(id);
      if (node) node.textContent = value || "";
      if (id === "circleText") syncCircleTextLayout();
    }

    function currentRatings() {
      return Array.from(document.querySelectorAll(".rating-row")).map((row) => ratingValue(row));
    }

    function setRating(row, value) {
      const numeric = Math.max(0, Math.min(5, Number(value) || 0));
      row.querySelectorAll(".star").forEach((star, index) => {
        const position = index + 1;
        star.classList.toggle("active", numeric >= position);
        star.classList.toggle("half", numeric > index && numeric < position);
      });
      updateRatingValues();
    }

    function collectState() {
      const templateEditorState = templateEditorGlobalsBackup || editorGlobals();
      return {
        template: currentTemplate(),
        theme: currentThemeId,
        recordTitle: editableText("recordTitle"),

        cvText: editableText("cvText"),
        circleText: editableText("circleText"),
        rjText: editableText("rjText"),
        durationText: editableText("durationText"),
        originalPrice: valueOf("#originalPrice"),
        currentPrice: valueOf("#currentPrice"),
        currentDiscount: valueOf("#currentDiscount"),
        currentDiscountManual,
        lowestPrice: valueOf("#lowestPrice"),
        cnChoice: document.querySelector(".choice-button.active")?.textContent.trim() || "",
        ratings: currentRatings(),
        tags: Array.from(document.querySelectorAll(".tag")).map((tag) => tag.textContent.trim()).filter(Boolean),
        reviewText: valueOf("#reviewText"),
        coverSrc: templateEditorState.coverSrc || coverImage.getAttribute("src") || "",
        coverOriginalSrc: templateEditorState.coverOriginalSrc || "",
        coverEditedSrc: templateEditorState.coverEditedSrc || "",
        coverMosaicMaskSrc: templateEditorState.coverMosaicMaskSrc || "",
        coverBlurMaskSrc: templateEditorState.coverBlurMaskSrc || "",
        coverEditorUndoStack: templateEditorState.coverEditorUndoStack || [],
        coverEditorRedoStack: templateEditorState.coverEditorRedoStack || [],
        coverStickers: cloneStickerList(templateEditorState.coverStickers),
        stickerSources: templateEditorState.stickerSources || [],
        coverFit: templateEditorState.coverFit || coverImage.style.objectFit || "contain",
        standaloneOriginalSrc,
        standaloneEditedSrc,
        standaloneMosaicMaskSrc,
        standaloneBlurMaskSrc,
        standaloneEditorUndoStack,
        standaloneEditorRedoStack,
        standaloneStickers: cloneStickerList(standaloneStickers),
        standaloneStickerSources,
        playerTotalSeconds,
        playerProgress,
        playerPlaying,
      };
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(collectState()));
      } catch (error) {
        console.warn("save failed", error);
      }
    }

    function renderTags(savedTags) {
      const nextTags = Array.isArray(savedTags) ? savedTags.filter(Boolean).slice(0, 8) : [];
      tags.querySelectorAll(".tag-chip").forEach((chip) => chip.remove());
      nextTags.forEach((text) => tags.insertBefore(createTag(text), addTagButton));
    }

    function applyState(state, persist = false) {
      if (!state || typeof state !== "object") return false;
      setTemplate(state.template === "compact" ? "compact" : "full", false);
      applyCardTheme(state.theme || DEFAULT_THEME_ID, false);
      setEditableText("recordTitle", state.recordTitle || state.jpTitle || state.cnTitle || "");
      setEditableText("cvText", state.cvText || "");
      setEditableText("circleText", state.circleText || "");
      setEditableText("rjText", state.rjText || "");
      setEditableText("durationText", state.durationText || "");
      originalPrice.value = state.originalPrice || "";
      currentPrice.value = state.currentPrice || state.paidPrice || "";
      currentDiscount.value = state.currentDiscount || "";
      currentDiscountManual = Boolean(state.currentDiscountManual);
      lowestPrice.value = state.lowestPrice || "";
      document.querySelectorAll(".choice-button").forEach((button) => {
        button.classList.toggle("active", button.textContent.trim() === (state.cnChoice || CHOICE_SUBTITLE));
      });
      document.querySelectorAll(".rating-row").forEach((row, index) => setRating(row, state.ratings?.[index] ?? 4));
      renderTags(state.tags);
      document.getElementById("reviewText").value = state.reviewText || "";
      coverOriginalSrc = state.coverOriginalSrc || "";
      coverEditedSrc = state.coverEditedSrc || "";
      coverMosaicMaskSrc = state.coverMosaicMaskSrc || "";
      coverBlurMaskSrc = state.coverBlurMaskSrc || "";
      coverEditorUndoStack = Array.isArray(state.coverEditorUndoStack) ? state.coverEditorUndoStack : [];
      coverEditorRedoStack = Array.isArray(state.coverEditorRedoStack) ? state.coverEditorRedoStack : [];
      coverStickers = cloneStickerList(state.coverStickers);
      stickerSources = Array.isArray(state.stickerSources) ? state.stickerSources : [];
      standaloneOriginalSrc = state.standaloneOriginalSrc || "";
      standaloneEditedSrc = state.standaloneEditedSrc || "";
      standaloneMosaicMaskSrc = state.standaloneMosaicMaskSrc || "";
      standaloneBlurMaskSrc = state.standaloneBlurMaskSrc || "";
      standaloneEditorUndoStack = Array.isArray(state.standaloneEditorUndoStack) ? state.standaloneEditorUndoStack : [];
      standaloneEditorRedoStack = Array.isArray(state.standaloneEditorRedoStack) ? state.standaloneEditorRedoStack : [];
      standaloneStickers = cloneStickerList(state.standaloneStickers);
      standaloneStickerSources = Array.isArray(state.standaloneStickerSources) ? state.standaloneStickerSources : [];
      renderStickerPicker();
      const coverSrc = state.coverSrc || coverEditedSrc || coverOriginalSrc || "";
      if (coverSrc) {
        coverImage.src = coverSrc;
        coverBox.classList.add("has-image");
      } else {
        coverImage.removeAttribute("src");
        coverBox.classList.remove("has-image");
      }
      coverImage.style.objectFit = state.coverFit || "contain";
      coverImage.style.filter = "";
      playerTotalSeconds = Number.isFinite(Number(state.playerTotalSeconds)) ? Number(state.playerTotalSeconds) : PLAYER_DEFAULT_TOTAL;
      playerProgress = Number.isFinite(Number(state.playerProgress)) ? Number(state.playerProgress) : 0;
      playerPlaying = Boolean(state.playerPlaying);
      syncPlayerUi(true);
      updateDiscount();
      fitStage();
      if (persist) saveState();
      return true;
    }

    function restoreState() {
      let state;
      try {
        state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      } catch {
        state = null;
      }
      if (!applyState(state, false)) applyCardTheme(DEFAULT_THEME_ID, false);
    }

    function scheduleSave() {
      window.clearTimeout(scheduleSave.timer);
      scheduleSave.timer = window.setTimeout(saveState, 80);
    }

    function resetCoverImageState() {
      coverImage.removeAttribute("src");
      coverOriginalSrc = "";
      coverEditedSrc = "";
      coverMosaicMaskSrc = "";
      coverBlurMaskSrc = "";
      coverEditorUndoStack = [];
      coverEditorRedoStack = [];
      coverStickers = [];
      selectedStickerId = null;
      editorUndoStack = [];
      editorRedoStack = [];
      coverImage.style.filter = "";
      coverImage.style.objectFit = "contain";
      coverBox.classList.remove("has-image");
    }

    function removeCoverImage() {
      resetCoverImageState();
      saveState();
    }

    async function setCoverFromDataUrl(dataUrl) {
      const pngDataUrl = await rasterizeImageToPngDataUrl(dataUrl);
      resetCoverImageState();
      coverOriginalSrc = pngDataUrl;
      coverImage.src = pngDataUrl;
      coverImage.style.filter = "";
      coverBox.classList.add("has-image");
      saveState();
    }

    coverInput.addEventListener("change", () => {
      const file = coverInput.files && coverInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          await setCoverFromDataUrl(reader.result);
        } catch (error) {
          console.error("Cover image normalize failed", error);
          alert(String.fromCharCode(0x56fe, 0x7247, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x9009, 0x62e9, 0x56fe, 0x7247, 0x3002));
        } finally {
          coverInput.value = "";
        }
      };
      reader.readAsDataURL(file);
    });

    document.getElementById("containButton").addEventListener("click", (event) => {
      event.preventDefault();
      coverImage.style.objectFit = "contain";
      saveState();
    });

    document.getElementById("coverButton").addEventListener("click", (event) => {
      event.preventDefault();
      coverImage.style.objectFit = "cover";
      saveState();
    });

    document.getElementById("imageEditButton").addEventListener("click", (event) => {
      event.preventDefault();
      openImageEditor();
    });

    removeCoverButton.addEventListener("click", (event) => {
      event.preventDefault();
      removeCoverImage();
    });

    document.querySelectorAll(".choice-button").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        saveState();
      });
    });

    originalPrice.addEventListener("input", () => {
      sanitizeNumericInput(originalPrice);
      if (currentDiscountManual) {
        updateCurrentPriceFromDiscount();
      } else {
        updateDiscount();
      }
      scheduleSave();
    });

    currentPrice.addEventListener("input", () => {
      sanitizeNumericInput(currentPrice);
      currentDiscountManual = false;
      updateDiscount(true);
      scheduleSave();
    });

    currentDiscount.addEventListener("input", () => {
      sanitizeNumericInput(currentDiscount);
      currentDiscountManual = true;
      updateCurrentPriceFromDiscount();
      syncDiscountColor();
      scheduleSave();
    });

    lowestPrice.addEventListener("input", () => {
      sanitizeNumericInput(lowestPrice);
      syncDiscountColor();
      scheduleSave();
    });

    function focusTagText(node) {
      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }

    function createTag(text = "新标签") {
      const chip = document.createElement("span");
      chip.className = "tag-chip";
      chip.innerHTML = `<span class="tag" contenteditable="true"></span><button class="tag-remove" type="button" aria-label="删除关键词">×</button>`;
      chip.querySelector(".tag").textContent = text;
      return chip;
    }

    tags.addEventListener("click", (event) => {
      const removeButton = event.target.closest(".tag-remove");
      if (removeButton) {
        removeButton.closest(".tag-chip").remove();
        saveState();
      }
    });

    addTagButton.addEventListener("click", () => {
      const chip = createTag();
      const tag = chip.querySelector(".tag");
      tags.insertBefore(chip, addTagButton);
      tag.focus();
      focusTagText(tag);
      saveState();
    });

    resetButton.addEventListener("click", () => {
      if (!window.confirm(UI_RESET_CONFIRM)) return;
      card.querySelectorAll("[contenteditable='true']").forEach((node) => {
        if (node.classList.contains("tag")) return;
        node.textContent = "";
      });
      card.querySelectorAll("input:not([type='file'])").forEach((node) => {
        node.value = "";
      });
      document.getElementById("reviewText").value = "";
      resetCoverImageState();
      renderTags([]);
      document.querySelectorAll(".choice-button").forEach((item, index) => item.classList.toggle("active", index === 0));
      currentDiscountManual = false;
      playerTotalSeconds = PLAYER_DEFAULT_TOTAL;
      playerProgress = 0;
      playerPlaying = false;
      syncPlayerUi(true);
      updateDiscount(true);
      saveState();
    });

    const CANVAS_FONT = 'BlackSugarPlumCandy';
    const CANVAS_FALLBACK = '"Microsoft YaHei", "PingFang SC", Arial, sans-serif';

    function canvasFont(weight, size) {
      return weight + ' ' + size + 'px "' + CANVAS_FONT + '", ' + CANVAS_FALLBACK;
    }

    async function ensureCanvasFontReady() {
      if (!document.fonts || !window.FontFace) return;
      const alreadyLoaded = Array.from(document.fonts).some((font) => font.family === CANVAS_FONT && font.status === 'loaded');
      if (!alreadyLoaded) {
        const font = new FontFace(CANVAS_FONT, 'url("./font/BlackSugarPlumCandy-Bold.ttf")');
        await font.load();
        document.fonts.add(font);
      }
      await document.fonts.load(canvasFont('900', 50), '乙抓记录中文测试');
      await document.fonts.ready;
    }

    function textOf(selector) {
      const node = document.querySelector(selector);
      return node ? node.textContent.trim() : "";
    }

    function valueOf(selector) {
      const node = document.querySelector(selector);
      return node ? node.value.trim() : "";
    }

    function ratingValue(row) {
      let value = 0;
      row.querySelectorAll(".star").forEach((star, index) => {
        if (star.classList.contains("active")) value = Math.max(value, index + 1);
        else if (star.classList.contains("half")) value = Math.max(value, index + 0.5);
      });
      return value;
    }

    function updateRatingValues() {
      document.querySelectorAll(".rating-row").forEach((row) => {
        const node = row.querySelector(".rating-value");
        if (!node) return;
        const value = ratingValue(row);
        node.textContent = value ? String(value) : "";
        node.setAttribute("aria-label", value ? String(value) + " 星" : "");
      });
    }

    function roundRect(ctx, x, y, w, h, r) {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    }

    function strokeRound(ctx, x, y, w, h, r, stroke, width = 2, dashed = false) {
      ctx.save();
      roundRect(ctx, x, y, w, h, r);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      if (dashed) ctx.setLineDash([10, 10]);
      ctx.stroke();
      ctx.restore();
    }

    function fillRound(ctx, x, y, w, h, r, fill) {
      ctx.save();
      roundRect(ctx, x, y, w, h, r);
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.restore();
    }

    const STAR_CHAR = String.fromCharCode(0x2605);
    const MULTIPLY_CHAR = String.fromCharCode(0x00d7);
    const CHOICE_LABEL = String.fromCharCode(0x4e2d, 0x6587);
    const CHOICE_SUBTITLE = String.fromCharCode(0x5b57, 0x5e55);
    const CHOICE_SCRIPT = String.fromCharCode(0x53f0, 0x672c);
    const CHOICE_VIDEO = String.fromCharCode(0x89c6, 0x9891);
    const CHOICE_NONE = String.fromCharCode(0x65e0, 0x4e2d, 0x6587);
    const COVER_UPLOAD_TEXT = String.fromCharCode(0x70b9, 0x51fb, 0x4e0a, 0x4f20, 0x20, 0x42, 0x4b);
    const LABEL_BASIC = String.fromCharCode(0x57fa, 0x672c, 0x4fe1, 0x606f);
    const LABEL_TITLE = String.fromCharCode(0x6807, 0x9898);
    const LABEL_CIRCLE = String.fromCharCode(0x793e, 0x56e2);
    const LABEL_RJ = String.fromCharCode(0x52, 0x4a, 0x53f7);
    const LABEL_DURATION = String.fromCharCode(0x65f6, 0x957f);
    const LABEL_TAGS = String.fromCharCode(0x5173, 0x952e, 0x8bcd);
    const LABEL_PURCHASE = String.fromCharCode(0x4ef7, 0x683c);
    const LABEL_ORIGINAL = String.fromCharCode(0x539f, 0x4ef7);
    const LABEL_PAID = String.fromCharCode(0x73b0, 0x4ef7);
    const LABEL_DISCOUNT = String.fromCharCode(0x73b0, 0x6298, 0x6263);
    const LABEL_LOWEST = String.fromCharCode(0x53f2, 0x4f4e);
    const LABEL_RATING = String.fromCharCode(0x8bc4, 0x5206);
    const LABEL_OVERALL = String.fromCharCode(0x603b, 0x4f53);
    const LABEL_STORY = String.fromCharCode(0x5267, 0x672c);
    const LABEL_REVIEW = String.fromCharCode(0x8bc4, 0x4ef7);

    function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
      const lines = [];
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      for (const sourceLine of sourceLines) {
        if (lines.length >= maxLines) break;
        if (!sourceLine) {
          lines.push("");
          continue;
        }
        let line = "";
        for (const char of Array.from(sourceLine)) {
          const test = line + char;
          if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = char;
            if (lines.length >= maxLines) break;
          } else {
            line = test;
          }
        }
        if (line && lines.length < maxLines) lines.push(line);
      }
      lines.forEach((item, index) => ctx.fillText(item, x, y + index * lineHeight));
      return lines.length * lineHeight;
    }

    function drawFixedCharWrappedText(ctx, text, x, y, charsPerLine = 7, lineHeight = 31, maxLines = 2) {
      const chars = Array.from(String(text || ""));
      const lines = [];
      for (let index = 0; index < maxLines && index * charsPerLine < chars.length; index += 1) {
        let line = chars.slice(index * charsPerLine, (index + 1) * charsPerLine).join("");
        if (index === maxLines - 1 && chars.length > (index + 1) * charsPerLine) line = chars.slice(index * charsPerLine, index * charsPerLine + Math.max(1, charsPerLine - 1)).join("") + "\u2026";
        lines.push(line);
      }
      lines.forEach((item, index) => ctx.fillText(item, x, y + index * lineHeight));
      return lines.length * lineHeight;
    }

    function drawCenteredWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
      const lines = [];
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      for (const sourceLine of sourceLines) {
        if (lines.length >= maxLines) break;
        if (!sourceLine) {
          lines.push("");
          continue;
        }
        let line = "";
        for (const char of Array.from(sourceLine)) {
          const test = line + char;
          if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = char;
            if (lines.length >= maxLines) break;
          } else {
            line = test;
          }
        }
        if (line && lines.length < maxLines) lines.push(line);
      }
      ctx.save();
      ctx.textAlign = "center";
      lines.forEach((item, index) => ctx.fillText(item, x + maxWidth / 2, y + index * lineHeight));
      ctx.restore();
      return lines.length * lineHeight;
    }

    function themeAlpha(key, alphaValue) {
      const theme = currentCardTheme();
      const hex = (theme[key] || "#000000").replace("#", "");
      const full = hex.length === 3 ? hex.split("").map((ch) => ch + ch).join("") : hex;
      const r = parseInt(full.slice(0, 2), 16) || 0;
      const g = parseInt(full.slice(2, 4), 16) || 0;
      const b = parseInt(full.slice(4, 6), 16) || 0;
      return "rgba(" + r + "," + g + "," + b + "," + alphaValue + ")";
    }

    function themeGradient(ctx, x1, y1, x2, y2, first = "accent", second = "accentDeep") {
      const theme = currentCardTheme();
      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, theme[first]);
      grad.addColorStop(1, theme[second]);
      return grad;
    }

    function drawStickerLabel(ctx, text, x, y) {
      ctx.save();
      ctx.font = canvasFont('900', 24);
      const w = Math.ceil(ctx.measureText(text).width) + 44;
      const grad = ctx.createLinearGradient(x, y, x + w, y + 34);
      grad.addColorStop(0, currentCardTheme().accent);
      grad.addColorStop(1, currentCardTheme().accentDeep);
      fillRound(ctx, x, y, w, 34, 17, grad);
      ctx.fillStyle = "#fff";
      ctx.fillText(text, x + 22, y + 25);
      ctx.restore();
    }

    function drawFieldRule(ctx, x, y, w) {
      ctx.strokeStyle = themeAlpha("accent", .32);
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(x, y + 18);
      ctx.lineTo(x + w, y + 18);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function drawTitleLabel(ctx, label, value, x, y, w) {
      ctx.fillStyle = currentCardTheme().accent;
      ctx.font = canvasFont('800', 18);
      ctx.fillText(label, x, y - 3);
      drawFieldRule(ctx, x, y, w);
      ctx.fillStyle = currentCardTheme().ink;
      ctx.font = canvasFont('900', 22);
      drawWrappedText(ctx, value, x, y + 40, w, 29, 3);
    }

    function drawLabel(ctx, label, value, x, y, w) {
      ctx.fillStyle = currentCardTheme().accent;
      ctx.font = canvasFont('800', 21);
      ctx.fillText(label, x, y - 3);
      drawFieldRule(ctx, x, y, w);
      ctx.fillStyle = currentCardTheme().ink;
      ctx.font = canvasFont('900', 26);
      drawWrappedText(ctx, value, x, y + 48, w, 31, 1);
    }

    function drawCompactInfoField(ctx, label, value, x, top, w, options = {}) {
      ctx.save();
      ctx.textAlign = "center";
      ctx.fillStyle = currentCardTheme().accent;
      ctx.font = canvasFont('800', 21);
      ctx.fillText(label, x + w / 2, top + 19);
      drawFieldRule(ctx, x, top + 11, w);
      ctx.fillStyle = currentCardTheme().ink;
      if (options.longText) {
        ctx.font = canvasFont('900', 23);
        drawFixedCharWrappedText(ctx, value, x + w / 2, top + 61, 7, 31, 2);
      } else {
        ctx.font = canvasFont('900', 26);
        drawCenteredWrappedText(ctx, value, x, top + 61, w, 31, 1);
      }
      ctx.restore();
    }

    function drawPreviewInfoField(ctx, label, value, x, top, w, options = {}) {
      ctx.fillStyle = currentCardTheme().accent;
      ctx.font = canvasFont('800', 21);
      ctx.fillText(label, x, top + 19);
      drawFieldRule(ctx, x, top + 11, w);
      ctx.fillStyle = currentCardTheme().ink;
      ctx.font = canvasFont('900', 26);
      if (options.twoLine) drawFixedCharWrappedText(ctx, value, x, top + 61, Math.max(1, Math.floor(w / 26)), 31, 2);
      else drawWrappedText(ctx, value, x, top + 61, w, 31, 1);
    }

    function drawPreviewChoiceField(ctx, activeText, x, top, w) {
      const labels = [CHOICE_SUBTITLE, CHOICE_VIDEO, CHOICE_SCRIPT, CHOICE_NONE];
      const bw = 74;
      labels.forEach((label, index) => {
        const bx = x + index * (bw + 12);
        const by = top;
        const active = label === activeText;
        fillRound(ctx, bx, by, bw, 34, 17, active ? currentCardTheme().accent : "rgba(255,255,255,.62)");
        strokeRound(ctx, bx, by, bw, 34, 17, active ? "transparent" : themeAlpha("accent", .26), 1);
        ctx.fillStyle = active ? "#fff" : currentCardTheme().muted;
        ctx.font = canvasFont('900', 17);
        ctx.textAlign = "center";
        ctx.fillText(label, bx + bw / 2, by + 23);
        ctx.textAlign = "left";
      });
    }

    function drawMetric(ctx, label, value, x, y, w, h, suffix = "", textOffsetX = 0, options = {}) {
      const theme = currentCardTheme();
      const hero = Boolean(options.hero);
      const secondary = Boolean(options.secondary);
      const compact = Boolean(options.compact);
      if (hero) {
        const grad = ctx.createLinearGradient(x, y, x + w, y + h);
        grad.addColorStop(0, "rgba(255,255,255,.88)");
        grad.addColorStop(1, themeAlpha("line", .46));
        fillRound(ctx, x, y, w, h, 18, grad);
        strokeRound(ctx, x, y, w, h, 18, themeAlpha("accentDeep", .36), 2);
      } else {
        fillRound(ctx, x, y, w, h, 18, "rgba(255,255,255,.66)");
        strokeRound(ctx, x, y, w, h, 18, themeAlpha("mint", .28), 2);
      }
      const labelY = hero ? 24 : (compact ? 25 : 24);
      const valueY = hero ? 62 : (compact ? 52 : 56);
      ctx.fillStyle = hero ? theme.accentDeep : (secondary ? theme.muted : theme.mint);
      ctx.font = canvasFont('800', compact ? 16 : 18);
      ctx.fillText(label, x + 10 + textOffsetX, y + labelY);
      ctx.fillStyle = options.highDiscount ? "#d7192f" : (hero ? theme.accentDeep : (secondary ? theme.muted : theme.ink));
      ctx.font = canvasFont('900', hero ? 36 : 24);
      const text = value ? value + suffix : "";
      ctx.fillText(text, x + 10 + textOffsetX, y + valueY);
    }

    function drawPlayerSvgPaths(ctx, x, y, size, color, paths) {
      ctx.save();
      ctx.translate(x, y);
      const scale = size / 32;
      ctx.scale(scale, scale);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.8;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      paths.forEach((path) => ctx.stroke(new Path2D(path)));
      ctx.restore();
    }

    function drawPlayerSvgFill(ctx, x, y, size, color, paths) {
      ctx.save();
      ctx.translate(x, y);
      const scale = size / 32;
      ctx.scale(scale, scale);
      ctx.fillStyle = color;
      paths.forEach((path) => ctx.fill(new Path2D(path)));
      ctx.restore();
    }

    function drawPlayerShuffle(ctx, x, y, color) {
      drawPlayerSvgPaths(ctx, x, y, 32, color, [
        "M4 9h4.8c4.5 0 6.1 14 11.2 14h4.5",
        "M4 23h4.8c4.5 0 6.1-14 11.2-14h4.5",
        "M22 5l5 4-5 4",
        "M22 19l5 4-5 4"
      ]);
    }

    function drawPlayerLoop(ctx, x, y, color) {
      drawPlayerSvgPaths(ctx, x, y, 32, color, [
        "M8 11c2.2-3.2 5.8-5 9.8-4.4 3 .5 5.5 2.3 7 4.8",
        "M24.8 6.2v5.2h-5.2",
        "M24 21c-2.2 3.2-5.8 5-9.8 4.4-3-.5-5.5-2.3-7-4.8",
        "M7.2 25.8v-5.2h5.2"
      ]);
    }

    function drawPlayerPrev(ctx, x, y, color) {
      drawPlayerSvgFill(ctx, x, y, 32, color, [
        "M6 8h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z",
        "M25.5 8.8c1.4-.9 3.2.1 3.2 1.8v10.8c0 1.7-1.8 2.7-3.2 1.8l-8.2-5.4c-1.2-.8-1.2-2.6 0-3.4l8.2-5.6Z"
      ]);
    }

    function drawPlayerNext(ctx, x, y, color) {
      drawPlayerSvgFill(ctx, x, y, 32, color, [
        "M22 8h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z",
        "M6.5 8.8c-1.4-.9-3.2.1-3.2 1.8v10.8c0 1.7 1.8 2.7 3.2 1.8l8.2-5.4c1.2-.8 1.2-2.6 0-3.4L6.5 8.8Z"
      ]);
    }

    function drawPlayerPlayState(ctx, x, y, playing) {
      if (playing) {
        fillRound(ctx, x + 18, y + 17, 8, 30, 4, "#fff");
        fillRound(ctx, x + 38, y + 17, 8, 30, 4, "#fff");
        return;
      }
      drawPlayerSvgFill(ctx, x + 12, y + 15, 34, "#fff", [
        "M10 7.8c0-2.1 2.4-3.3 4.1-2.1l13 8.2c1.6 1 1.6 3.3 0 4.3l-13 8.2c-1.7 1.1-4.1-.1-4.1-2.1V7.8Z"
      ]);
    }

    function drawPlayerDecoration(ctx) {
      const x = 58;
      const y = 656;
      const theme = currentCardTheme();
      const iconColor = themeAlpha("accentDeep", .78);
      const progress = clamp(Number(playerProgress) || 0, 0, 1);
      const elapsed = currentPlayerSeconds();
      const remaining = Math.max(0, playerTotalSeconds - elapsed);
      const leftTime = formatPlayerTime(elapsed);
      const rightTime = progress === 0 ? formatPlayerTime(playerTotalSeconds) : "-" + formatPlayerTime(remaining);
      fillRound(ctx, x, y + 4, 484, 8, 4, themeAlpha("line", .34));
      fillRound(ctx, x, y + 4, 484 * progress, 8, 4, themeAlpha("accent", .88));
      const dotX = x + (484 - 16) * progress;
      fillRound(ctx, dotX, y, 16, 16, 8, "#fff");
      strokeRound(ctx, dotX, y, 16, 16, 8, themeAlpha("accent", .7), 3);

      ctx.fillStyle = themeAlpha("ink", .68);
      ctx.font = canvasFont('800', 14);
      ctx.fillText(leftTime, x, y + 36);
      ctx.textAlign = "right";
      ctx.fillText(rightTime, x + 484, y + 36);
      ctx.textAlign = "left";

      drawPlayerShuffle(ctx, x + 66, y + 54, iconColor);
      drawPlayerLoop(ctx, x + 396, y + 54, iconColor);
      drawPlayerPrev(ctx, x + 146, y + 54, iconColor);
      drawPlayerNext(ctx, x + 314, y + 54, iconColor);

      const grad = ctx.createLinearGradient(x + 210, y + 42, x + 274, y + 106);
      grad.addColorStop(0, theme.accent);
      grad.addColorStop(1, theme.playDeep);
      fillRound(ctx, x + 210, y + 42, 64, 64, 32, grad);
      drawPlayerPlayState(ctx, x + 210, y + 42, playerPlaying);
    }

    function drawChoiceMetric(ctx, activeText, x, y, w, h) {
      ctx.fillStyle = currentCardTheme().accent;
      ctx.font = canvasFont('800', 21);
      ctx.fillText(CHOICE_LABEL, x, y - 3);
      drawFieldRule(ctx, x, y, w);
      const labels = [CHOICE_SUBTITLE, CHOICE_VIDEO, CHOICE_SCRIPT, CHOICE_NONE];
      const bw = 74;
      labels.forEach((label, index) => {
        const bx = x + index * (bw + 12);
        const active = label === activeText;
        fillRound(ctx, bx, y + 35, bw, 34, 17, active ? currentCardTheme().accent : "rgba(255,255,255,.62)");
        strokeRound(ctx, bx, y + 35, bw, 34, 17, active ? "transparent" : themeAlpha("accent", .26), 1);
        ctx.fillStyle = active ? "#fff" : currentCardTheme().muted;
        ctx.font = canvasFont('900', 17);
        ctx.textAlign = "center";
        ctx.fillText(label, bx + bw / 2, y + 58);
        ctx.textAlign = "left";
      });
    }

    function drawStars(ctx, label, count, x, y, valueText = "") {
      const theme = currentCardTheme();
      const fill = theme.starFill || theme.accent;
      ctx.fillStyle = theme.accentDeep;
      ctx.font = canvasFont('900', 24);
      ctx.fillText(label, x, y + 27);
      for (let i = 0; i < 5; i += 1) {
        const sx = x + 68 + i * 44;
        const remaining = count - i;
        const isActive = remaining >= 1;
        const isHalf = remaining > 0 && remaining < 1;
        fillRound(ctx, sx, y, 36, 36, 18, isActive ? fill : "rgba(255,255,255,.7)");
        strokeRound(ctx, sx, y, 36, 36, 18, themeAlpha("line", .32), 2);
        ctx.fillStyle = isActive ? "#fff" : themeAlpha("accent", .32);
        ctx.font = canvasFont('900', 24);
        ctx.textAlign = "center";
        ctx.fillText(STAR_CHAR, sx + 18, y + 27);
        if (isHalf) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(sx, y, 18, 36);
          ctx.clip();
          fillRound(ctx, sx, y, 36, 36, 18, fill);
          ctx.fillStyle = "#fff";
          ctx.fillText(STAR_CHAR, sx + 18, y + 27);
          ctx.restore();
        }
        ctx.textAlign = "left";
      }
      if (valueText) {
        ctx.fillStyle = theme.accentDeep;
        ctx.font = canvasFont('900', 21);
        ctx.fillText(valueText, x + 290, y + 30);
      }
    }

    async function drawCover(ctx, x = 90, y = 110, w = 420, h = 315, r = 24, frame = true, fitMode = null) {
      fillRound(ctx, x, y, w, h, r, currentCardTheme().coverBg);
      if (frame) strokeRound(ctx, x, y, w, h, r, "#fff", 4);
      if (!coverImage.src || !coverBox.classList.contains("has-image")) {
        ctx.fillStyle = currentCardTheme().accentDeep;
        ctx.font = canvasFont('800', 24);
        ctx.textAlign = "center";
        ctx.fillText(COVER_UPLOAD_TEXT, x + w / 2, y + h / 2 - 10);
        ctx.font = canvasFont('800', Math.max(18, Math.round(w / 20)));
        ctx.fillText(w + " " + MULTIPLY_CHAR + " " + h, x + w / 2, y + h / 2 + 28);
        ctx.textAlign = "left";
        return;
      }
      if (!coverImage.complete) await coverImage.decode().catch(() => {});
      ctx.save();
      roundRect(ctx, x, y, w, h, r);
      ctx.clip();
      const mode = fitMode || (coverImage.style.objectFit === "cover" ? "cover" : "contain");
      const iw = coverImage.naturalWidth || coverImage.width;
      const ih = coverImage.naturalHeight || coverImage.height;
      const scale = mode === "cover" ? Math.max(w / iw, h / ih) : Math.min(w / iw, h / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = x + (w - dw) / 2;
      const dy = y + (h - dh) / 2;
      ctx.fillStyle = "rgba(255,255,255,.52)";
      ctx.fillRect(x, y, w, h);
      ctx.drawImage(coverImage, dx, dy, dw, dh);
      ctx.restore();
    }

    function dataFileName() {
      const rj = editableText("rjText").trim().replace(/[^A-Za-z0-9_-]+/g, "");
      const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      return (rj || "otome-record") + "-data-" + stamp + ".json";
    }

    function exportRecordData() {
      commitActivePlayerTime();
      const payload = {
        app: "otome-record-card",
        version: 1,
        exportedAt: new Date().toISOString(),
        data: collectState()
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = dataFileName();
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 500);
    }

    function normalizeImportedData(raw) {
      if (!raw || typeof raw !== "object") return null;
      if (raw.data && typeof raw.data === "object") return raw.data;
      return raw;
    }

    function importRecordData(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = normalizeImportedData(JSON.parse(String(reader.result || "")));
          if (!data) throw new Error("empty data");
          if (!applyState(data, true)) throw new Error("invalid data");
        } catch (error) {
          console.error(error);
          alert(UI_IMPORT_DATA_FAILED);
        } finally {
          importDataInput.value = "";
        }
      };
      reader.onerror = () => {
        alert(UI_IMPORT_DATA_FAILED);
        importDataInput.value = "";
      };
      reader.readAsText(file, "utf-8");
    }

    function downloadBlob(blob, fileName = "record-card.png") {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = fileName;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30000);
    }


    function commitActivePlayerTime() {
      if (document.activeElement === playerElapsed || document.activeElement === playerRemaining) {
        commitPlayerTimeEdit(document.activeElement);
      }
    }

    async function downloadCompactCard() {
      const canvas = document.createElement("canvas");
      canvas.width = 600;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");

      const theme = currentCardTheme();
      const bg = ctx.createLinearGradient(0, 0, 600, 800);
      bg.addColorStop(0, theme.bgStops[0]);
      bg.addColorStop(0.48, theme.bgStops[1]);
      bg.addColorStop(1, theme.bgStops[2]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 600, 800);
      ctx.fillStyle = "rgba(255,255,255,.26)";
      for (let x = 0; x <= 600; x += 36) ctx.fillRect(x, 0, 1, 800);
      for (let y = 0; y <= 800; y += 36) ctx.fillRect(0, y, 600, 1);

      await drawCover(ctx, 20, 20, 560, 420, 0, false, "contain");

      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('900', 21);
      drawCenteredWrappedText(ctx, textOf('#recordTitle'), 20, 470, 560, 29, 3);

      drawCompactInfoField(ctx, LABEL_RJ, textOf('#rjText'), 32, 542, 162.67);
      drawCompactInfoField(ctx, "CV", textOf('#cvText'), 218.67, 542, 162.66);
      drawCompactInfoField(ctx, LABEL_CIRCLE, textOf('#circleText'), 405.33, 542, 162.67, { longText: true });

      drawPlayerDecoration(ctx);
      handleExportBlob(await canvasToBlob(canvas), templateExportFileName("compact"));
    }

    async function downloadCard() {
      commitActivePlayerTime();
      downloadButton.disabled = true;
      try {
        await ensureCanvasFontReady();
        if (currentTemplate() === "compact") {
          await downloadCompactCard();
          return;
        }
        const exportTextOffsetX = isMobileView() ? 8 : 0;
        const canvas = document.createElement("canvas");
        canvas.width = 1080;
        canvas.height = 1440;
        const ctx = canvas.getContext("2d");

        const theme = currentCardTheme();
        const bg = ctx.createLinearGradient(0, 0, 1080, 1440);
        bg.addColorStop(0, theme.bgStops[0]);
        bg.addColorStop(0.48, theme.bgStops[1]);
        bg.addColorStop(1, theme.bgStops[2]);
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 1080, 1440);
        ctx.fillStyle = "rgba(255,255,255,.36)";
        for (let x = 0; x <= 1080; x += 36) ctx.fillRect(x, 0, 1, 1440);
        for (let y = 0; y <= 1440; y += 36) ctx.fillRect(0, y, 1080, 1);
        strokeRound(ctx, 16, 16, 1048, 1408, 30, themeAlpha("line", .78), 3);
        strokeRound(ctx, 30, 30, 1020, 1380, 22, themeAlpha("dash", .42), 2, true);

        await drawCover(ctx, 62, 87);

        fillRound(ctx, 508, 85, 508, 315, 26, theme.panelBg);
        strokeRound(ctx, 508, 85, 508, 315, 26, themeAlpha("line", .6), 2);
        drawStickerLabel(ctx, LABEL_BASIC, 526, 64);
        drawPreviewInfoField(ctx, "CV", textOf('#cvText'), 532, 134, 221);
        drawPreviewInfoField(ctx, LABEL_CIRCLE, textOf('#circleText'), 771, 134, 221, { twoLine: true });
        drawPreviewInfoField(ctx, LABEL_RJ, textOf('#rjText'), 532, 247, 221);
        drawPreviewInfoField(ctx, LABEL_DURATION, textOf('#durationText'), 771, 247, 221);
        drawPreviewChoiceField(ctx, document.querySelector(".choice-button.active")?.textContent.trim() || CHOICE_SUBTITLE, 532, 347, 424);

        fillRound(ctx, 62, 440, 952, 112, 26, theme.panelBg);
        strokeRound(ctx, 62, 440, 952, 112, 26, themeAlpha("line", .54), 2);
        drawStickerLabel(ctx, LABEL_TITLE, 80, 419);
        ctx.fillStyle = currentCardTheme().ink;
        ctx.font = canvasFont('900', 26);
        drawWrappedText(ctx, textOf('#recordTitle'), 84, 492, 908, 33, 2);

        fillRound(ctx, 62, 592, 952, 105, 26, theme.panelBg);
        strokeRound(ctx, 62, 592, 952, 105, 26, themeAlpha("line", .54), 2);
        drawStickerLabel(ctx, LABEL_TAGS, 80, 571);
        const tagTexts = Array.from(document.querySelectorAll(".tag")).map((tag) => tag.textContent.trim()).filter(Boolean);
        let tx = 84;
        const ty = 622;
        ctx.font = canvasFont('900', 21);
        tagTexts.forEach((tag) => {
          const minTagWidth = /^[A-Za-z0-9]+$/.test(tag) && Array.from(tag).length <= 3 ? 56 : 70;
          const tw = Math.max(minTagWidth, ctx.measureText(tag).width + 24);
          if (tx + tw > 996) return;
          fillRound(ctx, tx, ty, tw, 38, 19, theme.chipBg);
          strokeRound(ctx, tx, ty, tw, 38, 19, themeAlpha("accent", .24), 1);
          ctx.fillStyle = currentCardTheme().accentDeep;
          ctx.fillText(tag, tx + 12, ty + 27);
          tx += tw + 9;
        });

        fillRound(ctx, 62, 737, 546, 220, 26, theme.panelBg);
        strokeRound(ctx, 62, 737, 546, 220, 26, themeAlpha("line", .54), 2);
        drawStickerLabel(ctx, LABEL_PURCHASE, 80, 720);
        drawMetric(ctx, LABEL_PAID, valueOf("#currentPrice"), 80, 771, 250, 96, "", exportTextOffsetX, { hero: true });
        drawMetric(ctx, LABEL_ORIGINAL, valueOf("#originalPrice"), 340, 771, 250, 96, "", exportTextOffsetX, { secondary: true });
        drawMetric(ctx, LABEL_DISCOUNT, valueOf("#currentDiscount"), 80, 877, 250, 60, "%off", exportTextOffsetX, { compact: true, highDiscount: isHighDiscountValue(valueOf("#currentDiscount")) });
        drawMetric(ctx, LABEL_LOWEST, valueOf("#lowestPrice"), 340, 877, 250, 60, "%off", exportTextOffsetX, { compact: true, highDiscount: isHighDiscountValue(valueOf("#lowestPrice")) });

        fillRound(ctx, 624, 737, 390, 220, 26, theme.panelBg);
        strokeRound(ctx, 624, 737, 390, 220, 26, themeAlpha("line", .54), 2);
        drawStickerLabel(ctx, LABEL_RATING, 642, 720);
        const rows = Array.from(document.querySelectorAll(".rating-row"));
        drawStars(ctx, LABEL_OVERALL, ratingValue(rows[0]), 642, 770, String(ratingValue(rows[0]) || ""));
        drawStars(ctx, "CV", ratingValue(rows[1]), 642, 814);
        drawStars(ctx, LABEL_STORY, ratingValue(rows[2]), 642, 858);
        drawStars(ctx, "SE", ratingValue(rows[3]), 642, 902);

        fillRound(ctx, 62, 997, 952, 382, 28, theme.reviewBg);
        strokeRound(ctx, 62, 997, 952, 382, 28, themeAlpha("line", .54), 2);
        drawStickerLabel(ctx, LABEL_REVIEW, 80, 980);
        ctx.fillStyle = currentCardTheme().ink;
        ctx.font = canvasFont('400', 24);
        drawWrappedText(ctx, valueOf("#reviewText"), 84, 1053, 908, 31, 11);

        handleExportBlob(await canvasToBlob(canvas), templateExportFileName("full"));
      } catch (error) {
        console.error(error);
        alert("导出失败：请告诉我你看到这条弹窗，我再继续修。");
      } finally {
        downloadButton.disabled = false;
      }
    }

    const mobileFocusAreas = Array.from(card.querySelectorAll(".cover-box, .info-panel, .title-panel, .tags-panel, .price-panel, .ratings, .review-panel"));
    mobileFocusAreas.forEach((area) => {
      area.addEventListener("click", (event) => {
        if (isMobileView() && currentTemplate() === "full" && area.classList.contains("review-panel")) {
          event.preventDefault();
          event.stopPropagation();
          openReviewEditor();
          return;
        }
        if (isMobileView() && currentTemplate() === "full" && mobileFocusTarget !== area) {
          event.preventDefault();
          event.stopPropagation();
          focusMobileArea(area);
        }
      }, true);
      area.addEventListener("focusin", () => {
        if (area.classList.contains("review-panel") && isMobileView()) return;
        focusMobileArea(area);
      });
    });
    mobileFocusBack.addEventListener("click", clearMobileFocus);
    reviewEditConfirm.addEventListener("click", () => closeReviewEditor(true));
    reviewEditCancel.addEventListener("click", () => closeReviewEditor(false));
    reviewEditModal.addEventListener("click", (event) => {
      if (event.target === reviewEditModal) closeReviewEditor(false);
    });
    imageToolMosaic.addEventListener("click", () => setEditorTool("mosaic"));
    imageToolBlur.addEventListener("click", () => setEditorTool("blur"));
    imageToolErase.addEventListener("click", () => setEditorTool("erase"));
    imageToolSelect.addEventListener("click", () => setEditorTool("sticker"));
    imageUndoButton.addEventListener("click", undoEditorStep);
    imageRedoButton.addEventListener("click", redoEditorStep);
    imageClearButton.addEventListener("click", () => {
      snapshotEditorMasks();
      clearEditorMasks();
      coverStickers = [];
      selectedStickerId = null;
      renderImageEditor();
      saveEditorProject();
      saveState();
    });
    imageDoneButton.addEventListener("click", () => {
      if (imageEditorMode === "standalone") void exportStandaloneImageFromEditor();
      else closeImageEditor(true);
    });
    imageEditCloseButton.addEventListener("click", () => closeImageEditor(false));
    imageCancelButton.addEventListener("click", () => {
      if (imageEditorMode === "standalone") removeStandaloneImage();
      else closeImageEditor(false);
    });
    imageEditModal.addEventListener("click", (event) => {
      if (event.target === imageEditModal && imageEditorMode !== "standalone") closeImageEditor(false);
    });
    imageEditCanvas.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (!editorImage) return;
      imageEditCanvas.setPointerCapture?.(event.pointerId);
      const point = editorPointFromEvent(event);
      const hit = editorTool === "sticker" ? hitTestSticker(point) : null;
      imageEditCanvas.style.cursor = cursorForEditorHit(hit);
      if (hit) {
        snapshotEditorMasks();
        selectedStickerId = hit.sticker.id;
        if (hit.action === "delete") {
          coverStickers = coverStickers.filter((item) => item.id !== hit.sticker.id);
          selectedStickerId = null;
          renderImageEditor();
          saveEditorProject();
          saveState();
          return;
        }
        editorStickerDrag = {
          action: hit.action,
          corner: hit.corner,
          id: hit.sticker.id,
          start: { ...hit.sticker, pointerX: point.x, pointerY: point.y }
        };
        renderImageEditor();
        return;
      }
      selectedStickerId = null;
      if (editorTool === "sticker") {
        renderImageEditor();
        return;
      }
      snapshotEditorMasks();
      editorDrawing = true;
      editorLastPoint = point;
      drawEditorStroke(editorLastPoint, editorLastPoint);
    });
    imageEditCanvas.addEventListener("pointermove", (event) => {
      if (!editorDrawing && !editorStickerDrag) {
        updateEditorCursor(event);
        return;
      }
      event.preventDefault();
      const point = editorPointFromEvent(event);
      if (editorStickerDrag) {
        const sticker = coverStickers.find((item) => item.id === editorStickerDrag.id);
        if (!sticker) return;
        if (editorStickerDrag.action === "resize") resizeStickerFromCorner(sticker, editorStickerDrag.corner, point, editorStickerDrag.start);
        else moveSticker(sticker, point, editorStickerDrag.start);
        requestEditorRender();
        return;
      }
      if (!editorLastPoint) return;
      drawEditorStroke(editorLastPoint, point);
      editorLastPoint = point;
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach((name) => {
      imageEditCanvas.addEventListener(name, () => {
        if (editorDrawing || editorStickerDrag) {
          saveEditorProject();
          saveState();
        }
        editorDrawing = false;
        editorLastPoint = null;
        editorStickerDrag = null;
        imageEditCanvas.style.cursor = editorTool === "sticker" ? "default" : editorBrushCursor();
      });
    });
    imageEditCanvas.addEventListener("pointerleave", () => {
      if (!editorDrawing && !editorStickerDrag) imageEditCanvas.style.cursor = editorTool === "sticker" ? "default" : editorBrushCursor();
    });

    stickerPrevPage.addEventListener("click", () => {
      stickerPage -= 1;
      renderStickerPicker();
    });
    stickerNextPage.addEventListener("click", () => {
      stickerPage += 1;
      renderStickerPicker();
    });

    stickerList.addEventListener("click", (event) => {
      const deleteButton = event.target.closest(".sticker-delete");
      if (deleteButton) {
        deleteCustomSticker(deleteButton.dataset.stickerDeleteId);
        return;
      }
      const button = event.target.closest(".sticker-option");
      if (!button) return;
      setEditorTool("sticker");
      void addSticker(button.dataset.stickerId);
    });

    stickerUploadInput.addEventListener("change", () => {
      const file = stickerUploadInput.files && stickerUploadInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const localSrc = await rasterizeImageToPngDataUrl(reader.result);
          const source = { id: nextStickerId("uploaded-sticker"), type: "image", src: localSrc, localSrc };
          stickerSources.push(source);
          stickerPage = Math.max(0, Math.ceil(allStickerSources().length / STICKERS_PER_PAGE) - 1);
          renderStickerPicker();
          setEditorTool("sticker");
          void addSticker(source.id);
        } catch (error) {
          console.error("Sticker upload normalize failed", error);
          alert(String.fromCharCode(0x8d34, 0x7eb8, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x4e0a, 0x4f20, 0x3002));
        } finally {
          stickerUploadInput.value = "";
        }
      };
      reader.readAsDataURL(file);
    });

    modalCloseButton.addEventListener("click", () => { exportModal.hidden = true; revokeLastExportUrl(); });
    exportModal.addEventListener("click", (event) => {
      if (event.target === exportModal) { exportModal.hidden = true; revokeLastExportUrl(); }
    });
    playerPlay.addEventListener("click", () => {
      playerPlaying = !playerPlaying;
      syncPlayerUi(false);
      saveState();
    });

    [playerElapsed, playerRemaining].forEach((node) => {
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          node.blur();
        }
      });
      node.addEventListener("blur", () => commitPlayerTimeEdit(node));
    });

    [playerBar, playerDot].forEach((node) => {
      node.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        setPlayerProgressFromClientX(event.clientX);
        const move = (moveEvent) => setPlayerProgressFromClientX(moveEvent.clientX);
        const up = () => {
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
          saveState();
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up, { once: true });
      });
    });

    function closeImportHelp() {
      if (!importHelpPopover) return;
      importHelpPopover.hidden = true;
      importHelpButton.setAttribute("aria-expanded", "false");
    }

    function positionImportHelp() {
      if (!importHelpPopover) return;
      const rect = importHelpButton.getBoundingClientRect();
      importHelpPopover.style.width = "max-content";
      const width = importHelpPopover.offsetWidth;
      importHelpPopover.style.left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12)) + "px";
      importHelpPopover.style.top = Math.max(12, rect.bottom + 8) + "px";
    }

    importButton.addEventListener("click", importProductInfo);
    importHelpButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!importHelpPopover) return;
      const nextOpen = importHelpPopover.hidden;
      importHelpPopover.hidden = !nextOpen;
      importHelpButton.setAttribute("aria-expanded", String(nextOpen));
      if (nextOpen) positionImportHelp();
    });
    window.addEventListener("resize", () => { if (importHelpPopover && !importHelpPopover.hidden) positionImportHelp(); });
    window.addEventListener("scroll", () => { if (importHelpPopover && !importHelpPopover.hidden) positionImportHelp(); }, true);
    document.addEventListener("click", (event) => {
      if (!importHelpPopover || importHelpPopover.hidden) return;
      if (importHelpPopover.contains(event.target) || importHelpButton.contains(event.target)) return;
      closeImportHelp();
    });

    modalDownloadButton.addEventListener("click", () => {
      if (lastExportUrl) {
        const link = document.createElement("a");
        link.download = lastExportFileName || "record-card.png";
        link.href = lastExportUrl;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    });

    importDataButton.addEventListener("click", () => importDataInput.click());
    exportDataButton.addEventListener("click", exportRecordData);
    mobileDataMenuButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      const nextHidden = !mobileDataDropdown?.hidden ? true : false;
      if (mobileDataDropdown) mobileDataDropdown.hidden = nextHidden;
      mobileDataMenuButton.setAttribute("aria-expanded", String(!nextHidden));
    });
    mobileImportDataButton?.addEventListener("click", () => {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      importDataInput.click();
    });
    mobileExportDataButton?.addEventListener("click", () => {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      exportRecordData();
    });
    usageInfoButton?.addEventListener("click", () => { if (usageInfoModal) usageInfoModal.hidden = false; });
    mobileUsageInfoButton?.addEventListener("click", () => {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      if (usageInfoModal) usageInfoModal.hidden = false;
    });
    usageInfoCloseButton?.addEventListener("click", () => { if (usageInfoModal) usageInfoModal.hidden = true; });
    usageInfoModal?.addEventListener("click", (event) => {
      if (event.target === usageInfoModal) usageInfoModal.hidden = true;
    });
    document.addEventListener("click", (event) => {
      if (!mobileDataDropdown || mobileDataDropdown.hidden) return;
      if (event.target.closest(".mobile-data-menu")) return;
      mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
    });
    importDataInput.addEventListener("change", () => importRecordData(importDataInput.files?.[0]));
    standaloneImageUploadButton?.addEventListener("click", () => standaloneImageInput?.click());
    standaloneImageInput?.addEventListener("change", () => {
      const file = standaloneImageInput.files && standaloneImageInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          standaloneOriginalSrc = await rasterizeImageToPngDataUrl(reader.result);
          standaloneEditedSrc = "";
          standaloneMosaicMaskSrc = "";
          standaloneBlurMaskSrc = "";
          standaloneEditorUndoStack = [];
          standaloneEditorRedoStack = [];
          standaloneStickers = [];
          standaloneStickerSources = [];
          saveState();
          void openStandaloneImageEditor(standaloneOriginalSrc);
        } catch (error) {
          console.error("Standalone image normalize failed", error);
          alert(String.fromCharCode(0x56fe, 0x7247, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x4e0a, 0x4f20, 0x3002));
        } finally {
          standaloneImageInput.value = "";
        }
      };
      reader.readAsDataURL(file);
    });
    mainNavButtons.forEach((button) => {
      if (!button.dataset.page) return;
      button.addEventListener("click", () => setMainPage(button.dataset.page || "template"));
    });

    templateButtons.forEach((button) => {
      button.addEventListener("click", () => setTemplate(button.dataset.template || "full"));
    });
    themeButtons.forEach((button) => {
      button.addEventListener("click", () => applyCardTheme(button.dataset.theme || DEFAULT_THEME_ID));
    });
    themePrevButton?.addEventListener("click", () => setThemePage(themePageIndex - 1));
    themeNextButton?.addEventListener("click", () => setThemePage(themePageIndex + 1));
    pickerNextArrow?.addEventListener("click", nextPickerPage);
    menuTabs.forEach((button) => {
      button.addEventListener("click", () => setActiveMenu(button.dataset.menu || "template"));
    });

    downloadButton.addEventListener("click", downloadCard);
    document.addEventListener("input", (event) => {
      if (event.target && event.target.id === "circleText") syncCircleTextLayout();
      scheduleSave();
    });
    document.addEventListener("click", (event) => {
      if (event.target.closest(".star, .choice-button")) scheduleSave();
    });
    syncPlayerUi(true);
    restoreState();
    restoreActiveMenu();
    restoreMainPage();
    scrollActivePickerIntoView();
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("resize", () => {
      setMainPage(localStorage.getItem(MAIN_PAGE_STORAGE_KEY) || "template", false);
      fitStage();
      updateThemePager();
      if (!imageEditModal.hidden && imageEditorMode === "template") layoutTemplateImageEditorActions();
    });
    fitStage();
    updateDiscount();
    syncDiscountColor();
  