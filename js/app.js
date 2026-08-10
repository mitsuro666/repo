
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
    const usageGuideButton = document.getElementById("usageGuideButton");
    const mobileUsageGuideButton = document.getElementById("mobileUsageGuideButton");
    const usageGuideModal = document.getElementById("usageGuideModal");
    const usageGuideCloseButton = document.getElementById("usageGuideCloseButton");
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
    const grid9Card = document.getElementById("grid9Card");
    const grid9TitleText = document.getElementById("grid9TitleText");
    const grid9SubtitleText = document.getElementById("grid9SubtitleText");
    const grid9TitlePlaceholder = document.querySelector(".grid9-title-placeholder");

    function focusGrid9Field(node) {
      node.focus();
      const range = document.createRange();
      range.selectNodeContents(node);
      range.collapse(true);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
    grid9TitlePlaceholder.addEventListener("click", () => focusGrid9Field(grid9TitleText));

    function updateGrid9EmptyClass() {
      grid9TitleText.classList.toggle("is-empty", grid9TitleText.textContent.trim() === "");
      grid9SubtitleText.classList.toggle("is-empty", grid9SubtitleText.textContent.trim() === "");
    }
    updateGrid9EmptyClass();
    [grid9TitleText, grid9SubtitleText].forEach((node) => {
      node.addEventListener("blur", updateGrid9EmptyClass);
    });
    const grid9ShowNumbers = document.getElementById("grid9ShowNumbers");
    const grid9ShowRj = document.getElementById("grid9ShowRj");
    const grid9Cells = document.getElementById("grid9Cells");
    const grid9ExternalTools = document.getElementById("grid9ExternalTools");
    const grid9ImportAllButton = document.getElementById("grid9ImportAllButton");
    const grid9ClearBkButton = document.getElementById("grid9ClearBkButton");
    const grid9PresetButton = document.getElementById("grid9PresetButton");
    const grid9PresetMenu = document.getElementById("grid9PresetMenu");
    const grid9ClearRepoButton = document.getElementById("grid9ClearRepoButton");
    let grid9CellEditors = [];
    let activeGrid9Index = -1;
    const quickCard = document.getElementById("quickCard");
    const quickCells = document.getElementById("quickCells");
    const quickExternalTools = document.getElementById("quickExternalTools");
    const quickShowRjButton = document.getElementById("quickShowRjButton");
    const quickImportAllButton = document.getElementById("quickImportAllButton");
    const quickClearRepoButton = document.getElementById("quickClearRepoButton");
    let quickCellEditors = [];
    let activeQuickIndex = -1;
    let quickShowRj = true;
    const trioCard = document.getElementById("trioCard");
    const trioCells = document.getElementById("trioCells");
    const trioExternalTools = document.getElementById("trioExternalTools");
    const trioImportAllButton = document.getElementById("trioImportAllButton");
    const trioClearRepoButton = document.getElementById("trioClearRepoButton");
    let trioCellEditors = [];
    let activeTrioIndex = -1;
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
    const UI_STORAGE_FULL = String.fromCharCode(0x672c, 0x5730, 0x5b58, 0x50a8, 0x7a7a, 0x95f4, 0x4e0d, 0x8db3, 0xff0c, 0x5185, 0x5bb9, 0x53ef, 0x80fd, 0x65e0, 0x6cd5, 0x5b8c, 0x6574, 0x4fdd, 0x5b58, 0xff0c, 0x8bf7, 0x5c1d, 0x8bd5, 0x538b, 0x7f29, 0x56fe, 0x7247, 0x6216, 0x5bfc, 0x51fa, 0x5907, 0x4efd, 0x3002);
    let storageFullWarned = false;
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
      if (card.classList.contains("grid9")) return "grid9";
      if (card.classList.contains("quick")) return "quick";
      if (card.classList.contains("trio")) return "trio";
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

    function syncTemplatePages(nextPage) {
      const page = nextPage || "template";
      const templatePage = page === "template";
      const grid9Active = templatePage && currentTemplate() === "grid9";
      const quickActive = templatePage && currentTemplate() === "quick";
      const trioActive = templatePage && currentTemplate() === "trio";
      if (stage) stage.hidden = !templatePage;
      if (card) card.hidden = !templatePage || grid9Active || quickActive || trioActive;
      if (grid9Card) grid9Card.hidden = !grid9Active;
      if (grid9ExternalTools) grid9ExternalTools.hidden = !grid9Active;
      if (quickCard) quickCard.hidden = !quickActive;
      if (quickExternalTools) quickExternalTools.hidden = !quickActive;
      if (trioCard) trioCard.hidden = !trioActive;
      if (trioExternalTools) trioExternalTools.hidden = !trioActive;
      if (imageToolPage) imageToolPage.hidden = page !== "image-tool";
      if (collectionPage) collectionPage.hidden = page !== "collection";
    }

    function setMainPage(pageName, persist = true) {
      const allowedPages = new Set(["template", "image-tool", "collection"]);
      const nextPage = allowedPages.has(pageName) ? pageName : "template";
      mainNavButtons.forEach((button) => button.classList.toggle("active", button.dataset.page === nextPage));
      if (workspaceTitle) workspaceTitle.textContent = PAGE_TITLES[nextPage] || PAGE_TITLES.template;
      if (templateToolbar) templateToolbar.hidden = nextPage !== "template";
      templateToolBlocks.forEach((block) => { block.hidden = nextPage !== "template"; });
      syncTemplatePages(nextPage);
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
      if (currentTemplate() === "compact") return { width: 600, height: 800 };
      return { width: 1080, height: 1440 };
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
      if (grid9Card) grid9Card.dataset.theme = nextId;
      if (quickCard) quickCard.dataset.theme = nextId;
      if (trioCard) trioCard.dataset.theme = nextId;
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

    function activeCardElement() {
      if (currentTemplate() === "grid9") return grid9Card;
      if (currentTemplate() === "quick") return quickCard;
      if (currentTemplate() === "trio") return trioCard;
      return card;
    }

    function fitStage() {
      if (!stage || stage.hidden) return;
      const size = templateSize();
      const activeCard = activeCardElement();
      const toolbarHeight = document.querySelector(".menu-toolbar")?.offsetHeight || 0;
      const themeBarHeight = 0;
      const availableWidth = Math.max(1, stage.clientWidth - 16);
      const availableHeight = isMobileView()
        ? Math.max(360, mobileViewportHeight() - toolbarHeight - themeBarHeight - 38)
        : Number.POSITIVE_INFINITY;
      const fullScale = Math.min(1, availableWidth / size.width, availableHeight / size.height);

      stage.classList.toggle("is-focused", isMobileView() && Boolean(mobileFocusTarget) && currentTemplate() !== "compact");

      if (isMobileView() && mobileFocusTarget && currentTemplate() !== "compact") {
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
        activeCard.style.transform = "translate(" + tx + "px, " + ty + "px) scale(" + scale + ")";
        stage.style.height = availableHeight + "px";
        mobileFocusBack.classList.remove("hidden");
        return;
      }

      stage.classList.remove("is-focused");
      const centerX = Math.max(0, (availableWidth - size.width * fullScale) / 2);
      activeCard.style.transform = "translateX(" + Math.round(centerX) + "px) scale(" + fullScale + ")";
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
      if (!isMobileView() || currentTemplate() === "compact") return;
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
      const nextTemplate = template === "grid9" ? "grid9" : (template === "quick" ? "quick" : (template === "trio" ? "trio" : (template === "compact" ? "compact" : "full")));
      card.classList.toggle("compact", nextTemplate === "compact");
      card.classList.toggle("grid9", nextTemplate === "grid9");
      card.classList.toggle("quick", nextTemplate === "quick");
      card.classList.toggle("trio", nextTemplate === "trio");
      templateButtons.forEach((button) => button.classList.toggle("active", button.dataset.template === nextTemplate));
      mobileFocusTarget = null;
      mobileFocusBack?.classList.add("hidden");
      if (stage) stage.classList.remove("is-focused");
      syncTemplatePages();
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
        star.className = `star${index <= value ? " active" : ""}`;
        star.type = "button";
        star.textContent = "★";
        star.setAttribute("aria-label", `${index} 星`);
        star.addEventListener("click", () => {
          wrap.querySelectorAll(".star").forEach((item, itemIndex) => {
            item.classList.toggle("active", itemIndex < index);
          });
        });
        wrap.appendChild(star);
      }
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
        const isEmpty = target.textContent.trim() === "";
        target.classList.toggle("is-empty", isEmpty);
        if (isEmpty) {
          target.textContent = "";
          const range = document.createRange();
          range.selectNodeContents(target);
          range.collapse(true);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
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

    function grid9EditorGlobals(index) {
      const cell = grid9CellEditors[index];
      const src = cell ? (cell.querySelector(".grid9-cover-image").getAttribute("src") || "") : "";
      return {
        coverOriginalSrc: src || "",
        coverEditedSrc: "",
        coverMosaicMaskSrc: "",
        coverBlurMaskSrc: "",
        coverEditorUndoStack: [],
        coverEditorRedoStack: [],
        coverStickers: [],
        stickerSources: JSON.parse(JSON.stringify(stickerSources || [])),
        selectedStickerId: null,
        editorTool: "mosaic",
        coverSrc: src,
        coverFit: "cover"
      };
    }

    async function openGrid9ImageEditor(index) {
      const cell = grid9CellEditors[index];
      if (!cell) return;
      const src = cell.querySelector(".grid9-cover-image").getAttribute("src") || "";
      if (!src) {
        cell.querySelector(".grid9-cover-input")?.click();
        return;
      }
      if (imageEditorMode === "standalone") leaveStandaloneImageTool();
      if (imageEditorMode !== "grid9") templateEditorGlobalsBackup = editorGlobals();
      imageEditorMode = "grid9";
      activeGrid9Index = index;
      placeImageEditorForTemplate();
      applyEditorGlobals(grid9EditorGlobals(index));
      await loadEditorFromCurrentGlobals(src);
    }

    function quickEditorGlobals(index) {
      const cell = quickCellEditors[index];
      const src = cell ? (cell.querySelector(".quick-cover img").getAttribute("src") || "") : "";
      return {
        coverOriginalSrc: src || "",
        coverEditedSrc: "",
        coverMosaicMaskSrc: "",
        coverBlurMaskSrc: "",
        coverEditorUndoStack: [],
        coverEditorRedoStack: [],
        coverStickers: [],
        stickerSources: JSON.parse(JSON.stringify(stickerSources || [])),
        selectedStickerId: null,
        editorTool: "mosaic",
        coverSrc: src,
        coverFit: "cover"
      };
    }

    async function openQuickImageEditor(index) {
      const cell = quickCellEditors[index];
      if (!cell) return;
      const src = cell.querySelector(".quick-cover img").getAttribute("src") || "";
      if (!src) {
        cell.querySelector(".quick-file")?.click();
        return;
      }
      if (imageEditorMode === "standalone") leaveStandaloneImageTool();
      if (imageEditorMode !== "quick") templateEditorGlobalsBackup = editorGlobals();
      imageEditorMode = "quick";
      activeQuickIndex = index;
      placeImageEditorForTemplate();
      applyEditorGlobals(quickEditorGlobals(index));
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
      if (imageEditorMode === "grid9") {
        let shouldClose = true;
        try {
          if (editorImage) {
            if (apply) {
              const nextEditedSrc = await updateEditedCoverFromEditor();
              if (!nextEditedSrc) throw new Error("Edited cover is empty");
              applyGrid9Cover(activeGrid9Index, await grid9CoverStorageDataUrl(nextEditedSrc));
              saveState();
              requestAnimationFrame(() => fitStage());
            } else {
              restoreEditorSessionSnapshot();
            }
          }
        } catch (error) {
          console.error("Grid9 image editor close failed", error);
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
            imageEditorMode = "template";
            restoreTemplateEditorGlobals();
            placeImageEditorForTemplate();
            requestAnimationFrame(() => fitStage());
          }
        }
        return;
      }
      if (imageEditorMode === "quick") {
        let shouldClose = true;
        try {
          if (editorImage) {
            if (apply) {
              const nextEditedSrc = await updateEditedCoverFromEditor();
              if (!nextEditedSrc) throw new Error("Edited cover is empty");
              applyQuickCover(activeQuickIndex, await grid9CoverStorageDataUrl(nextEditedSrc));
              saveState();
              requestAnimationFrame(() => fitStage());
            } else {
              restoreEditorSessionSnapshot();
            }
          }
        } catch (error) {
          console.error("Quick image editor close failed", error);
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
            imageEditorMode = "template";
            restoreTemplateEditorGlobals();
            placeImageEditorForTemplate();
            requestAnimationFrame(() => fitStage());
          }
        }
        return;
      }
      if (imageEditorMode === "trio") {
        let shouldClose = true;
        try {
          if (editorImage) {
            if (apply) {
              const nextEditedSrc = await updateEditedCoverFromEditor();
              if (!nextEditedSrc) throw new Error("Edited cover is empty");
              applyTrioCover(activeTrioIndex, await grid9CoverStorageDataUrl(nextEditedSrc));
              saveState();
              requestAnimationFrame(() => fitStage());
            } else {
              restoreEditorSessionSnapshot();
            }
          }
        } catch (error) {
          console.error("Trio image editor close failed", error);
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
            imageEditorMode = "template";
            restoreTemplateEditorGlobals();
            placeImageEditorForTemplate();
            requestAnimationFrame(() => fitStage());
          }
        }
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
      row.querySelectorAll(".star").forEach((star, index) => {
        star.classList.toggle("active", index < value);
      });
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
        grid9: collectGrid9State(),
        quick: collectQuickState(),
        trio: collectTrioState(),
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
        if (!storageFullWarned && error && (error.name === "QuotaExceededError" || /quota/i.test(String((error && error.message) || error)))) {
          storageFullWarned = true;
          alert(UI_STORAGE_FULL);
        }
      }
    }

    function renderTags(savedTags) {
      const nextTags = Array.isArray(savedTags) ? savedTags.filter(Boolean).slice(0, 8) : [];
      tags.querySelectorAll(".tag-chip").forEach((chip) => chip.remove());
      nextTags.forEach((text) => tags.insertBefore(createTag(text), addTagButton));
    }

    function applyState(state, persist = false) {
      if (!state || typeof state !== "object") return false;
      setTemplate(state.template || "full", false);
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
      if (state.grid9 && typeof state.grid9 === "object") applyGrid9State(state.grid9);
      if (state.quick && typeof state.quick === "object") applyQuickState(state.quick);
      if (state.trio && typeof state.trio === "object") applyTrioState(state.trio);
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
      if (currentTemplate() === "quick") {
        resetQuickState();
        return;
      }
      if (currentTemplate() === "trio") {
        resetTrioState();
        return;
      }
      if (currentTemplate() === "grid9") {
        resetGrid9State();
        return;
      }
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
      return row.querySelectorAll(".star.active").length;
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
      fillRound(ctx, x, y, w, h, 18, "rgba(255,255,255,.66)");
      strokeRound(ctx, x, y, w, h, 18, themeAlpha("mint", .28), 2);
      ctx.fillStyle = currentCardTheme().mint;
      ctx.font = canvasFont('800', 18);
      ctx.fillText(label, x + 10 + textOffsetX, y + 24);
      ctx.fillStyle = options.highDiscount ? "#d7192f" : currentCardTheme().ink;
      ctx.font = canvasFont('900', 26);
      const text = value ? value + suffix : "";
      ctx.fillText(text, x + 10 + textOffsetX, y + 56);
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

    function drawStars(ctx, label, count, x, y) {
      ctx.fillStyle = currentCardTheme().accentDeep;
      ctx.font = canvasFont('900', 24);
      ctx.fillText(label, x, y + 27);
      for (let i = 0; i < 5; i += 1) {
        const sx = x + 92 + i * 48;
        fillRound(ctx, sx, y, 34, 34, 17, i < count ? (currentCardTheme().starFill || currentCardTheme().accent) : "rgba(255,255,255,.7)");
        strokeRound(ctx, sx, y, 34, 34, 17, themeAlpha("line", .32), 2);
        ctx.fillStyle = i < count ? "#fff" : themeAlpha("accent", .32);
        ctx.font = canvasFont('900', 24);
        ctx.textAlign = "center";
        ctx.fillText(STAR_CHAR, sx + 17, y + 26);
        ctx.textAlign = "left";
      }
    }

    async function drawCover(ctx, x = 90, y = 110, w = 420, h = 315, r = 24, frame = true, fitMode = null, shadow = frame) {
      if (shadow) {
        ctx.save();
        ctx.shadowColor = "rgba(128, 76, 95, 0.16)";
        ctx.shadowBlur = 24;
        ctx.shadowOffsetY = 14;
        roundRect(ctx, x, y, w, h, r);
        ctx.fillStyle = currentCardTheme().coverBg;
        ctx.fill();
        ctx.restore();
      }
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
      if (frame) strokeRound(ctx, x, y, w, h, r, "#fff", 4);
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
        if (currentTemplate() === "grid9") {
          await downloadGrid9Card();
          return;
        }
        if (currentTemplate() === "quick") {
          await downloadQuickCard();
          return;
        }
        if (currentTemplate() === "trio") {
          await downloadTrioCard();
          return;
        }
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
        const ty = 628;
        ctx.font = canvasFont('900', 21);
        tagTexts.forEach((tag) => {
          const tw = ctx.measureText(tag).width + 26;
          if (tx + tw > 984) return;
          fillRound(ctx, tx, ty, tw, 39, 20, theme.chipBg);
          strokeRound(ctx, tx, ty, tw, 39, 20, themeAlpha("accent", .24), 1);
          ctx.fillStyle = currentThemeId === "matcha-berry-cheese" ? theme.ink : theme.accentDeep;
          ctx.fillText(tag, tx + 13, ty + 27);
          tx += tw + 9;
        });

        fillRound(ctx, 62, 737, 468, 220, 26, theme.panelBg);
        strokeRound(ctx, 62, 737, 468, 220, 26, themeAlpha("line", .54), 2);
        drawStickerLabel(ctx, LABEL_PURCHASE, 80, 720);
        drawMetric(ctx, LABEL_ORIGINAL, valueOf("#originalPrice"), 80, 779, 210, 64, "", exportTextOffsetX);
        drawMetric(ctx, LABEL_PAID, valueOf("#currentPrice"), 302, 779, 210, 64, "", exportTextOffsetX);
        drawMetric(ctx, LABEL_DISCOUNT, valueOf("#currentDiscount"), 80, 862, 210, 64, "%off", exportTextOffsetX, { highDiscount: isHighDiscountValue(valueOf("#currentDiscount")) });
        drawMetric(ctx, LABEL_LOWEST, valueOf("#lowestPrice"), 302, 862, 210, 64, "%off", exportTextOffsetX, { highDiscount: isHighDiscountValue(valueOf("#lowestPrice")) });

        fillRound(ctx, 546, 737, 468, 220, 26, theme.panelBg);
        strokeRound(ctx, 546, 737, 468, 220, 26, themeAlpha("line", .54), 2);
        drawStickerLabel(ctx, LABEL_RATING, 564, 720);
        const rows = Array.from(document.querySelectorAll(".rating-row"));
        drawStars(ctx, LABEL_OVERALL, ratingValue(rows[0]), 564, 776);
        drawStars(ctx, "CV", ratingValue(rows[1]), 564, 818);
        drawStars(ctx, LABEL_STORY, ratingValue(rows[2]), 564, 860);
        drawStars(ctx, "SE", ratingValue(rows[3]), 564, 902);

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

    const UI_GRID9_UPLOAD = String.fromCharCode(0x70b9, 0x51fb, 0x4e0a, 0x4f20, 0x20, 0x42, 0x4b);
    const UI_GRID9_TAG_PLACEHOLDER = String.fromCharCode(0x77ed, 0x6807, 0x9898);
    const UI_GRID9_REVIEW_PLACEHOLDER = String.fromCharCode(0x77ed, 0x8bc4, 0xff0c, 0x6700, 0x591a, 0x4e09, 0x884c);
    const UI_GRID9_RJ_PLACEHOLDER = String.fromCharCode(0x52, 0x4a, 0x53f7);
    const UI_GRID9_UPLOAD_FAILED = String.fromCharCode(0x56fe, 0x7247, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x9009, 0x62e9, 0x56fe, 0x7247, 0x3002);
    const UI_GRID9_WATERMARK = "OTOME SITUATION VOICE";
    const UI_GRID9_IMPORTED = String.fromCharCode(0x5df2, 0x5bfc, 0x5165);
    const UI_GRID9_FAILED = String.fromCharCode(0x5931, 0x8d25);
    const UI_GRID9_SKIPPED = String.fromCharCode(0x8df3, 0x8fc7);
    const UI_GRID9_EMPTY = String.fromCharCode(0x672a, 0x586b);
    const UI_GRID9_NOTHING = String.fromCharCode(0x6ca1, 0x6709, 0x53ef, 0x5bfc, 0x5165, 0x7684, 0x683c, 0x5b50, 0x3002);
    const UI_GRID9_CONTAIN = String.fromCharCode(0x5b8c, 0x6574);
    const UI_GRID9_COVER = String.fromCharCode(0x88c1, 0x5207);
    const UI_GRID9_EDIT = String.fromCharCode(0x7f16, 0x8f91);
    const UI_GRID9_REMOVE = String.fromCharCode(0x79fb, 0x9664);
    const UI_GRID9_IMPORTING = String.fromCharCode(0x6b63, 0x5728, 0x5bfc, 0x5165, 0x4fe1, 0x606f);
    const UI_GRID9_KICKER = "SITUATION \u2726 VOICE";
    const UI_GRID9_SPARKLES = "\u2726 \u00b7 \u2661 \u00b7 \u2726";
    const UI_GRID9_IMPORT_DONE_TITLE = String.fromCharCode(0x5df2, 0x6839, 0x636e, 0x52, 0x4a, 0x53f7, 0x5bfc, 0x5165, 0x4fe1, 0x606f);
    const UI_GRID9_NO_COVER = String.fromCharCode(0x6ca1, 0x6709, 0x62ff, 0x5230, 0x5c01, 0x9762);
    const UI_GRID9_NO_DATA = String.fromCharCode(0x6ca1, 0x6709, 0x8bfb, 0x53d6, 0x5230, 0x8d44, 0x6599);
    const UI_GRID9_UNKNOWN = String.fromCharCode(0x672a, 0x77e5, 0x539f, 0x56e0);
    const grid9ImportModal = document.getElementById("grid9ImportModal");
    const grid9ImportTitle = document.getElementById("grid9ImportTitle");
    const grid9ImportBody = document.getElementById("grid9ImportBody");
    const grid9ImportDoneButton = document.getElementById("grid9ImportDoneButton");
    const GRID9_PRESET_SUMMARY = [
      String.fromCharCode(0x6700, 0x559c, 0x6b22),
      String.fromCharCode(0x6700, 0x60ca, 0x559c),
      String.fromCharCode(0x6700, 0x50ac, 0x7720),
      String.fromCharCode(0x6700, 0x9002, 0x5408, 0x7761, 0x524d),
      String.fromCharCode(0x6700, 0x60f3, 0x4e8c, 0x5237),
      String.fromCharCode(0x6700, 0x4e0a, 0x5934),
      String.fromCharCode(0x6700, 0x4f1a, 0x64a9),
      String.fromCharCode(0x6700, 0x6233, 0x58, 0x50),
      String.fromCharCode(0x6700, 0x60f3, 0x5b89, 0x5229)
    ];
    const GRID9_PRESET_VOICE = [
      String.fromCharCode(0x6700, 0x559c, 0x6b22),
      String.fromCharCode(0x6700, 0x6e29, 0x67d4),
      String.fromCharCode(0x6700, 0x50ac, 0x7720),
      String.fromCharCode(0x6700, 0x53cd, 0x5dee),
      String.fromCharCode(0x6700, 0x8010, 0x542c),
      String.fromCharCode(0x6700, 0x4e0a, 0x5934),
      String.fromCharCode(0x6700, 0x4f1a, 0x64a9),
      String.fromCharCode(0x6700, 0x6709, 0x8bb0, 0x5fc6, 0x70b9),
      String.fromCharCode(0x6700, 0x63a8, 0x8350)
    ];

    function buildGrid9Cells() {
      grid9CellEditors = [];
      for (let index = 0; index < 9; index += 1) {
        const cell = document.createElement("article");
        cell.className = "grid9-cell";
        cell.dataset.grid9Index = String(index);

        const tagInput = document.createElement("input");
        tagInput.className = "grid9-tag-input";
        tagInput.type = "text";
        tagInput.maxLength = 8;
        tagInput.placeholder = UI_GRID9_TAG_PLACEHOLDER;

        const box = document.createElement("label");
        box.className = "grid9-cover-box";
        const input = document.createElement("input");
        input.className = "grid9-cover-input";
        input.type = "file";
        input.accept = "image/*";
        const img = document.createElement("img");
        img.className = "grid9-cover-image";
        img.alt = "";
        const placeholder = document.createElement("span");
        placeholder.className = "grid9-cover-placeholder";
        placeholder.textContent = UI_GRID9_UPLOAD;
        const number = document.createElement("span");
        number.className = "grid9-number";
        number.textContent = String(index + 1);
        const rjInput = document.createElement("input");
        rjInput.className = "grid9-cell-rj-input";
        rjInput.type = "text";
        rjInput.maxLength = 12;
        rjInput.placeholder = UI_GRID9_RJ_PLACEHOLDER;
        rjInput.addEventListener("pointerdown", (event) => event.stopPropagation());
        rjInput.addEventListener("input", () => fitGrid9RjWidth(rjInput));
        fitGrid9RjWidth(rjInput);
        const tools = document.createElement("div");
        tools.className = "grid9-cover-tools";
        const toolDefs = [
          { action: "contain", label: UI_GRID9_CONTAIN },
          { action: "cover", label: UI_GRID9_COVER },
          { action: "edit", label: UI_GRID9_EDIT },
          { action: "remove", label: UI_GRID9_REMOVE }
        ];
        toolDefs.forEach((def) => {
          const tool = document.createElement("button");
          tool.type = "button";
          tool.className = "grid9-cover-tool";
          tool.dataset.grid9Tool = def.action;
          tool.textContent = def.label;
          tools.appendChild(tool);
        });
        box.append(input, img, placeholder, number, rjInput, tools);

        const reviewWrap = document.createElement("div");
        reviewWrap.className = "grid9-review-wrap";
        const reviewArea = document.createElement("textarea");
        reviewArea.className = "grid9-review-input";
        reviewArea.rows = 3;
        reviewArea.maxLength = 72;
        reviewArea.placeholder = UI_GRID9_REVIEW_PLACEHOLDER;
        reviewWrap.appendChild(reviewArea);

        cell.append(tagInput, box, reviewWrap);
        grid9Cells.appendChild(cell);
        grid9CellEditors.push(cell);
      }
    }

    function updateGrid9Toggles() {
      if (!grid9Card) return;
      grid9Card.classList.toggle("hide-numbers", !grid9ShowNumbers.checked);
      grid9Card.classList.toggle("hide-rj", !grid9ShowRj.checked);
    }

    function applyGrid9Cover(index, src) {
      const cell = grid9CellEditors[index];
      if (!cell) return;
      const img = cell.querySelector(".grid9-cover-image");
      const box = cell.querySelector(".grid9-cover-box");
      if (src) {
        img.setAttribute("src", src);
        box.classList.add("has-image");
      } else {
        img.removeAttribute("src");
        box.classList.remove("has-image");
      }
    }

    function setGrid9Cover(index, src) {
      applyGrid9Cover(index, src);
      saveState();
    }

    const grid9RjMeasureCanvas = document.createElement("canvas");

    function fitGrid9RjWidth(input) {
      if (!input) return;
      const ctx = grid9RjMeasureCanvas.getContext("2d");
      ctx.font = canvasFont('800', 11);
      const baseWidth = Math.ceil(ctx.measureText("RJ00000000").width);
      const text = input.value || "";
      const textWidth = text ? Math.ceil(ctx.measureText(text).width) : 0;
      input.style.width = Math.max(baseWidth + 16, textWidth + 16) + "px";
    }

    function setGrid9Fit(index, fit) {
      const cell = grid9CellEditors[index];
      if (!cell) return;
      const img = cell.querySelector(".grid9-cover-image");
      img.style.objectFit = fit === "contain" ? "contain" : "cover";
      saveState();
    }

    function grid9HasCover(index) {
      const cell = grid9CellEditors[index];
      if (!cell) return false;
      return Boolean(cell.querySelector(".grid9-cover-image").getAttribute("src"));
    }

    function readGrid9Cell(index) {
      const cell = grid9CellEditors[index];
      if (!cell) return null;
      return {
        cover: cell.querySelector(".grid9-cover-image").getAttribute("src") || "",
        tag: cell.querySelector(".grid9-tag-input").value.trim(),
        review: cell.querySelector(".grid9-review-input").value.trim(),
        rj: cell.querySelector(".grid9-cell-rj-input").value.trim(),
        fit: cell.querySelector(".grid9-cover-image").style.objectFit || "cover"
      };
    }

    function writeGrid9Cell(index, data) {
      const cell = grid9CellEditors[index];
      if (!cell) return;
      const next = data || {};
      applyGrid9Cover(index, next.cover || "");
      cell.querySelector(".grid9-cover-image").style.objectFit = next.fit === "contain" ? "contain" : "cover";
      cell.querySelector(".grid9-tag-input").value = next.tag || "";
      cell.querySelector(".grid9-review-input").value = next.review || "";
      const rjInput = cell.querySelector(".grid9-cell-rj-input");
      rjInput.value = next.rj || "";
      fitGrid9RjWidth(rjInput);
    }

    function collectGrid9State() {
      return {
        title: grid9TitleText.textContent.trim(),
        subtitle: grid9SubtitleText.textContent.trim(),
        showNumbers: grid9ShowNumbers.checked,
        showRj: grid9ShowRj.checked,
        cells: Array.from({ length: 9 }, (_, index) => readGrid9Cell(index))
      };
    }

    function applyGrid9State(state) {
      if (!state || typeof state !== "object") return;
      grid9TitleText.textContent = state.title || "";
      grid9SubtitleText.textContent = state.subtitle || "";
      grid9ShowNumbers.checked = state.showNumbers !== false;
      grid9ShowRj.checked = state.showRj !== false;
      for (let index = 0; index < 9; index += 1) {
        writeGrid9Cell(index, (state.cells && state.cells[index]) || {});
      }
      updateGrid9EmptyClass();
      updateGrid9Toggles();
    }

    function resetGrid9State() {
      grid9TitleText.textContent = "";
      grid9SubtitleText.textContent = "";
      grid9ShowNumbers.checked = true;
      grid9ShowRj.checked = true;
      grid9CellEditors.forEach((cell, index) => {
        applyGrid9Cover(index, "");
        cell.querySelector(".grid9-tag-input").value = "";
        cell.querySelector(".grid9-review-input").value = "";
        cell.querySelector(".grid9-cell-rj-input").value = "";
      });
      updateGrid9EmptyClass();
      updateGrid9Toggles();
      saveState();
    }

    async function waitGrid9ImagesReady() {
      const pending = [];
      grid9CellEditors.forEach((cell) => {
        const img = cell.querySelector(".grid9-cover-image");
        if (img.getAttribute("src") && !img.complete) {
          pending.push(img.decode().catch(() => {}));
        }
      });
      await Promise.all(pending);
    }

    async function grid9CoverStorageDataUrl(dataUrl) {
      if (!dataUrl) return dataUrl;
      const img = await loadImage(dataUrl).catch(() => null);
      if (!img || !img.naturalWidth || !img.naturalHeight) return dataUrl;
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const scale = Math.min(1, 480 / Math.max(width, height));
      const outWidth = Math.max(1, Math.round(width * scale));
      const outHeight = Math.max(1, Math.round(height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = outWidth;
      canvas.height = outHeight;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, outWidth, outHeight);
      ctx.drawImage(img, 0, 0, outWidth, outHeight);
      return canvas.toDataURL("image/jpeg", 0.85);
    }

    async function migrateGrid9CoversToCompact() {
      const tasks = [];
      grid9CellEditors.forEach((cell, index) => {
        const img = cell.querySelector(".grid9-cover-image");
        const src = img.getAttribute("src");
        if (src && !src.startsWith("data:image/jpeg")) {
          tasks.push(grid9CoverStorageDataUrl(src).then((compact) => {
            if (compact && compact !== src) img.setAttribute("src", compact);
          }).catch(() => {}));
        }
      });
      if (tasks.length) {
        await Promise.all(tasks);
        saveState();
      }
    }

    async function fetchImageAsPngDataUrl(url) {
      const normalizedUrl = normalizeImageUrl(url);
      if (!normalizedUrl) throw new Error("empty image url");
      const response = await fetchWithTimeout(normalizedUrl, { mode: "cors", credentials: "omit" }, isMobileView() ? 10000 : 15000);
      if (!response.ok) throw new Error("HTTP " + response.status);
      const blob = await response.blob();
      if (!blob.type || !blob.type.startsWith("image/")) throw new Error("Not an image response");
      return rasterizeImageToPngDataUrl(await blobToDataUrl(blob));
    }

    function grid9ImportMessage(imported, failed, skipped, empty) {
      const parts = [];
      parts.push(UI_GRID9_IMPORTED + " " + imported + String.fromCharCode(0x5f20));
      if (failed > 0) parts.push(UI_GRID9_FAILED + " " + failed);
      if (skipped > 0) parts.push(UI_GRID9_SKIPPED + " " + skipped);
      if (empty > 0) parts.push(UI_GRID9_EMPTY + " " + empty);
      return parts.join(String.fromCharCode(0xff0c));
    }

    function grid9FailureReason(error) {
      const message = String((error && error.message) || "");
      if (message === "no cover url") return UI_GRID9_NO_COVER;
      if (message === "empty product") return UI_GRID9_NO_DATA;
      if (message) return message;
      return UI_GRID9_UNKNOWN;
    }

    function showGrid9ImportLoading() {
      grid9ImportTitle.textContent = UI_GRID9_IMPORTING + String.fromCharCode(0x2026);
      grid9ImportBody.textContent = "";
      grid9ImportDoneButton.hidden = true;
      grid9ImportModal.hidden = false;
    }

    function showGrid9ImportResult(imported, failed, skipped, empty, failures) {
      grid9ImportTitle.textContent = UI_GRID9_IMPORT_DONE_TITLE;
      grid9ImportBody.textContent = "";
      const summary = document.createElement("p");
      summary.style.margin = "0 0 6px";
      summary.textContent = grid9ImportMessage(imported, failed, skipped, empty);
      grid9ImportBody.appendChild(summary);
      (Array.isArray(failures) ? failures : []).forEach((failure) => {
        const line = document.createElement("p");
        line.style.margin = "2px 0";
        line.style.color = "var(--rose-deep)";
        line.textContent = failure.rj + String.fromCharCode(0xff1a) + failure.reason;
        grid9ImportBody.appendChild(line);
      });
      grid9ImportDoneButton.hidden = false;
      grid9ImportModal.hidden = false;
    }

    async function importAllGrid9Covers() {
      const jobs = [];
      let emptyCount = 0;
      let skipCount = 0;
      grid9CellEditors.forEach((cell, index) => {
        const rj = normalizeWorkno(cell.querySelector(".grid9-cell-rj-input").value);
        if (!rj) {
          emptyCount += 1;
          return;
        }
        if (grid9HasCover(index)) {
          skipCount += 1;
          return;
        }
        jobs.push({ index, rj });
      });
      if (!jobs.length) {
        grid9ImportTitle.textContent = UI_GRID9_IMPORT_DONE_TITLE;
        grid9ImportBody.textContent = UI_GRID9_NOTHING;
        grid9ImportDoneButton.hidden = false;
        grid9ImportModal.hidden = false;
        return;
      }
      showGrid9ImportLoading();
      let imported = 0;
      let failed = 0;
      const failures = [];
      let cursor = 0;
      const concurrency = 2;
      const worker = async () => {
        while (cursor < jobs.length) {
          const job = jobs[cursor];
          cursor += 1;
          try {
            const product = parseDlsiteProduct(await fetchProductJson(job.rj));
            const coverUrl = product && product.coverUrl;
            if (!coverUrl) throw new Error("no cover url");
            const pngDataUrl = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(coverUrl));
            applyGrid9Cover(job.index, pngDataUrl);
            const rjInput = grid9CellEditors[job.index].querySelector(".grid9-cell-rj-input");
            rjInput.value = job.rj;
            fitGrid9RjWidth(rjInput);
            imported += 1;
          } catch (error) {
            console.warn("Grid9 batch import failed", job.rj, error);
            failed += 1;
            failures.push({ rj: job.rj, reason: grid9FailureReason(error) });
          }
        }
      };
      const workers = [];
      for (let i = 0; i < Math.min(concurrency, jobs.length); i += 1) workers.push(worker());
      await Promise.all(workers);
      saveState();
      showGrid9ImportResult(imported, failed, skipCount, emptyCount, failures);
    }

    function applyGrid9Preset(key) {
      const preset = key === "voice" ? GRID9_PRESET_VOICE : (key === "summary" ? GRID9_PRESET_SUMMARY : null);
      grid9CellEditors.forEach((cell, index) => {
        const tagInput = cell.querySelector(".grid9-tag-input");
        if (!tagInput) return;
        tagInput.value = preset ? (preset[index] || "") : "";
      });
      saveState();
    }

    function grid9ExportFileName() {
      return ["otome", "grid9", safeFilePart(currentThemeId, DEFAULT_THEME_ID)].join("_") + ".png";
    }

    async function downloadGrid9Card() {
      await ensureCanvasFontReady();
      try {
        await waitGrid9ImagesReady();
      } catch (imageError) {
        console.warn("Grid9 export image wait failed", imageError);
      }
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      drawGrid9Card(canvas.getContext("2d"));
      handleExportBlob(await canvasToBlob(canvas), grid9ExportFileName());
    }

    function grid9MeasureLines(ctx, text, maxWidth) {
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      let lines = 0;
      for (const sourceLine of sourceLines) {
        let line = "";
        for (const char of Array.from(sourceLine)) {
          const test = line + char;
          if (ctx.measureText(test).width > maxWidth && line) {
            lines += 1;
            line = char;
          } else {
            line = test;
          }
        }
        if (line) lines += 1;
        if (lines >= 2) return 2;
      }
      return Math.max(1, lines);
    }

    function drawLetterspacedCentered(ctx, text, cx, y, spacing) {
      const chars = Array.from(text);
      const widths = chars.map((char) => ctx.measureText(char).width);
      let total = 0;
      widths.forEach((w) => { total += w; });
      total += spacing * Math.max(0, chars.length - 1);
      let x = cx - total / 2;
      chars.forEach((char, index) => {
        ctx.fillText(char, x + widths[index] / 2, y);
        x += widths[index] + spacing;
      });
    }

    function grid9MaxLineWidth(ctx, text, maxWidth) {
      let max = 0;
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      for (const sourceLine of sourceLines) {
        let line = "";
        for (const char of Array.from(sourceLine)) {
          const test = line + char;
          if (ctx.measureText(test).width > maxWidth && line) {
            max = Math.max(max, ctx.measureText(line).width);
            line = char;
          } else {
            line = test;
          }
        }
        if (line) max = Math.max(max, ctx.measureText(line).width);
      }
      return Math.max(1, max);
    }

    function drawGrid9TitleMarker(ctx, text, headerBottom) {
      const theme = currentCardTheme();
      const width = Math.min(840, grid9MaxLineWidth(ctx, text, 840)) + 48;
      const height = 16;
      const top = headerBottom - 16;
      ctx.save();
      ctx.translate(540, top + height / 2);
      ctx.rotate(-1 * Math.PI / 180);
      const grad = ctx.createLinearGradient(-width / 2, 0, width / 2, 0);
      grad.addColorStop(0, themeAlpha("accent", .24));
      grad.addColorStop(0.58, themeAlpha("accent", .18));
      grad.addColorStop(1, themeAlpha("mint", .16));
      ctx.fillStyle = grad;
      roundRect(ctx, -width / 2, -height / 2, width, height, height / 2);
      ctx.fill();
      ctx.restore();
    }

    function drawGrid9Card(ctx) {
      const width = 1080;
      const height = 1440;
      const state = collectGrid9State();
      const theme = currentCardTheme();
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, theme.bgStops[0]);
      bg.addColorStop(0.48, theme.bgStops[1]);
      bg.addColorStop(1, theme.bgStops[2]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,.3)";
      for (let x = 0; x <= width; x += 36) ctx.fillRect(x, 0, 1, height);
      for (let y = 0; y <= height; y += 36) ctx.fillRect(0, y, width, 1);
      strokeRound(ctx, 16, 16, width - 32, height - 32, 30, themeAlpha("line", .78), 3);
      strokeRound(ctx, 30, 30, width - 60, height - 60, 22, themeAlpha("dash", .42), 2, true);

      ctx.save();
      ctx.textAlign = "center";
      ctx.fillStyle = themeAlpha("accent", .9);
      ctx.font = canvasFont('900', 13);
      drawLetterspacedCentered(ctx, UI_GRID9_KICKER, 540, 58, 4);
      let headerBottom = 108;
      if (state.title) {
        ctx.fillStyle = theme.ink;
        ctx.font = canvasFont('900', 49);
        const lineCount = grid9MeasureLines(ctx, state.title, 840);
        headerBottom = 108 + (lineCount - 1) * 60;
        drawCenteredWrappedText(ctx, state.title, 120, 108, 840, 60, 2);
        drawGrid9TitleMarker(ctx, state.title, headerBottom);
      }
      const subtitleY = headerBottom + 58;
      if (state.subtitle) {
        ctx.fillStyle = theme.muted;
        ctx.font = canvasFont('800', 20);
        const subWidth = Math.min(760, ctx.measureText(state.subtitle).width);
        drawCenteredWrappedText(ctx, state.subtitle, 160, subtitleY, 760, 28, 1);
        ctx.fillStyle = themeAlpha("accent", .62);
        ctx.font = canvasFont('900', 15);
        ctx.fillText(String.fromCharCode(0x2661), 540 - subWidth / 2 - 28, subtitleY);
        ctx.fillText(String.fromCharCode(0x2661), 540 + subWidth / 2 + 28, subtitleY);
      }
      ctx.fillStyle = themeAlpha("accent", .6);
      ctx.font = canvasFont('800', 13);
      drawLetterspacedCentered(ctx, UI_GRID9_SPARKLES, 540, subtitleY + 24, 13);
      ctx.restore();

      const gridLeft = 58;
      const gridTop = subtitleY + 50;
      const gapX = 18;
      const gapY = 20;
      const cellWidth = (width - gridLeft * 2 - gapX * 2) / 3;
      const gridBottom = 1388;
      const cellHeight = (gridBottom - gridTop - gapY * 2) / 3;
      for (let row = 0; row < 3; row += 1) {
        for (let col = 0; col < 3; col += 1) {
          const index = row * 3 + col;
          const x = gridLeft + col * (cellWidth + gapX);
          const y = gridTop + row * (cellHeight + gapY);
          drawGrid9Cell(ctx, state, index, x, y, cellWidth, cellHeight);
        }
      }

      ctx.save();
      ctx.fillStyle = themeAlpha("ink", .09);
      ctx.font = canvasFont('800', 13);
      ctx.textAlign = "right";
      ctx.fillText(UI_GRID9_WATERMARK, width - 54, height - 38);
      ctx.restore();
    }

    function drawGrid9Cell(ctx, state, index, x, y, w, h) {
      const theme = currentCardTheme();
      const cell = state.cells[index] || {};
      const gap = 14;
      const tagRowHeight = 48;
      const reviewRowHeight = 102;
      const coverSlotY = y + tagRowHeight + gap;
      const coverSlotHeight = h - tagRowHeight - reviewRowHeight - gap * 2;
      const coverBoxScale = 0.9;
      const targetCoverWidth = w * coverBoxScale;
      const targetCoverHeight = targetCoverWidth * 3 / 4;
      const coverFitScale = Math.min(1, coverSlotHeight / targetCoverHeight);
      const coverWidth = targetCoverWidth * coverFitScale;
      const coverHeight = targetCoverHeight * coverFitScale;
      const coverX = x + (w - coverWidth) / 2;
      const coverY = coverSlotY + (coverSlotHeight - coverHeight) / 2;
      const radius = 16;

      const tagText = cell.tag || "";
      if (tagText) {
        const tagHeight = 46;
        const tagWidth = coverWidth;
        const tagX = coverX;
        const ty = y + (tagRowHeight - tagHeight) / 2;
        const grad = ctx.createLinearGradient(tagX, ty, tagX + tagWidth, ty + tagHeight);
        grad.addColorStop(0, theme.accent);
        grad.addColorStop(1, theme.accentDeep);
        fillRound(ctx, tagX, ty, tagWidth, tagHeight, tagHeight / 2, grad);
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.font = canvasFont('900', 21);
        ctx.fillText(tagText, tagX + tagWidth / 2, ty + tagHeight / 2 + 7);
        ctx.textAlign = "left";
      }

      if (cell.cover) {
        fillRound(ctx, coverX, coverY, coverWidth, coverHeight, radius, theme.coverBg);
        const imgElement = grid9CellEditors[index] ? grid9CellEditors[index].querySelector(".grid9-cover-image") : null;
        if (imgElement && imgElement.complete && imgElement.naturalWidth) {
          ctx.save();
          roundRect(ctx, coverX, coverY, coverWidth, coverHeight, radius);
          ctx.clip();
          const iw = imgElement.naturalWidth;
          const ih = imgElement.naturalHeight;
          const fitMode = cell.fit === "contain" ? "contain" : "cover";
          const scale = fitMode === "contain" ? Math.min(coverWidth / iw, coverHeight / ih) : Math.max(coverWidth / iw, coverHeight / ih);
          const dw = iw * scale;
          const dh = ih * scale;
          ctx.drawImage(imgElement, coverX + (coverWidth - dw) / 2, coverY + (coverHeight - dh) / 2, dw, dh);
          ctx.restore();
        }
        ctx.save();
        ctx.shadowColor = "rgba(104,73,87,.13)";
        ctx.shadowBlur = 18;
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, radius, "rgba(255,255,255,.96)", 3);
        ctx.restore();
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, radius, themeAlpha("line", .78), 1);
      } else {
        fillRound(ctx, coverX, coverY, coverWidth, coverHeight, radius, themeAlpha("coverBg", .52));
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, radius, themeAlpha("accent", .44), 2, true);
        ctx.save();
        ctx.fillStyle = theme.muted;
        ctx.font = canvasFont('900', 18);
        ctx.textAlign = "center";
        ctx.fillText(UI_GRID9_UPLOAD, coverX + coverWidth / 2, coverY + coverHeight / 2 + 6);
        ctx.textAlign = "left";
        ctx.restore();
      }

      if (state.showNumbers) {
        const cx = coverX + 26;
        const cy = coverY + 26;
        ctx.beginPath();
        ctx.arc(cx, cy, 17, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,.94)";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = themeAlpha("accent", .72);
        ctx.stroke();
        ctx.fillStyle = theme.accentDeep;
        ctx.font = canvasFont('900', 16);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(index + 1), cx, cy + 1);
        ctx.textBaseline = "alphabetic";
        ctx.textAlign = "left";
      }

      const rjText = (state.showRj && cell.rj) ? cell.rj : "";
      if (rjText) {
        ctx.font = canvasFont('800', 11);
        const baseBadgeTextWidth = Math.ceil(ctx.measureText("RJ00000000").width);
        const badgeTextWidth = Math.ceil(ctx.measureText(rjText).width);
        const badgeWidth = Math.max(baseBadgeTextWidth, badgeTextWidth) + 14;
        const badgeHeight = 24;
        const bx = coverX + coverWidth - badgeWidth - 9;
        const by = coverY + coverHeight - badgeHeight - 9;
        fillRound(ctx, bx, by, badgeWidth, badgeHeight, 7, "rgba(255,255,255,.82)");
        ctx.fillStyle = theme.accentDeep;
        ctx.textAlign = "center";
        ctx.fillText(rjText, bx + badgeWidth / 2, by + badgeHeight / 2 + 4);
        ctx.textAlign = "left";
      }

      const reviewTop = coverSlotY + coverSlotHeight + gap;
      fillRound(ctx, x + 1, reviewTop + 9, 3, reviewRowHeight - 10, 1.5, themeAlpha("accent", .5));
      ctx.save();
      ctx.fillStyle = themeAlpha("accentDeep", .5);
      ctx.font = canvasFont('900', 18);
      ctx.textAlign = "center";
      ctx.fillText(String.fromCharCode(0x275d), x + 14, reviewTop + 21);
      ctx.restore();
      ctx.fillStyle = themeAlpha("ink", .9);
      ctx.font = canvasFont('400', 18);
      drawWrappedText(ctx, cell.review || "", x + 20, reviewTop + 23, w - 30, 22, 4);
      ctx.strokeStyle = themeAlpha("accent", .35);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x + 20, reviewTop + reviewRowHeight - 6);
      ctx.lineTo(x + w - 10, reviewTop + reviewRowHeight - 6);
      ctx.stroke();
      ctx.fillStyle = themeAlpha("accent", .55);
      ctx.font = canvasFont('800', 12);
      ctx.textAlign = "center";
      ctx.fillText(String.fromCharCode(0x2726), x + w - 14, reviewTop + reviewRowHeight - 10);
      ctx.textAlign = "left";
    }

    grid9ImportAllButton.addEventListener("click", importAllGrid9Covers);
    grid9ClearBkButton.addEventListener("click", () => {
      grid9CellEditors.forEach((cell, index) => {
        applyGrid9Cover(index, "");
      });
      saveState();
    });
    grid9PresetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      grid9PresetMenu.hidden = !grid9PresetMenu.hidden;
    });
    grid9PresetMenu.addEventListener("click", (event) => {
      const item = event.target.closest("[data-preset]");
      if (!item) return;
      applyGrid9Preset(item.dataset.preset);
      grid9PresetMenu.hidden = true;
    });
    document.addEventListener("click", (event) => {
      if (!grid9PresetMenu || grid9PresetMenu.hidden) return;
      if (grid9PresetMenu.contains(event.target) || grid9PresetButton.contains(event.target)) return;
      grid9PresetMenu.hidden = true;
    });
    grid9ClearRepoButton.addEventListener("click", () => {
      grid9CellEditors.forEach((cell) => {
        cell.querySelector(".grid9-review-input").value = "";
      });
      saveState();
    });
    [grid9ShowNumbers, grid9ShowRj].forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        updateGrid9Toggles();
        saveState();
      });
    });
    grid9Cells.addEventListener("click", (event) => {
      const cell = event.target.closest(".grid9-cell");
      if (!cell) return;
      const tool = event.target.closest(".grid9-cover-tool");
      if (tool) {
        event.preventDefault();
        event.stopPropagation();
        const index = Number(cell.dataset.grid9Index);
        const action = tool.dataset.grid9Tool;
        if (action === "contain") setGrid9Fit(index, "contain");
        else if (action === "cover") setGrid9Fit(index, "cover");
        else if (action === "edit") openGrid9ImageEditor(index);
        else if (action === "remove") setGrid9Cover(index, "");
        return;
      }
      if (event.target.closest(".grid9-cell-rj-input")) return;
    });
    grid9ImportDoneButton.addEventListener("click", () => { grid9ImportModal.hidden = true; });
    grid9ImportModal.addEventListener("click", (event) => {
      if (event.target === grid9ImportModal && !grid9ImportDoneButton.hidden) grid9ImportModal.hidden = true;
    });
    grid9Cells.addEventListener("change", (event) => {
      const input = event.target.closest(".grid9-cover-input");
      if (!input) return;
      const cell = input.closest(".grid9-cell");
      if (!cell) return;
      const index = Number(cell.dataset.grid9Index);
      const file = input.files && input.files[0];
      input.value = "";
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const pngDataUrl = await grid9CoverStorageDataUrl(await rasterizeImageToPngDataUrl(reader.result));
          setGrid9Cover(index, pngDataUrl);
        } catch (error) {
          console.error("Grid9 cover normalize failed", error);
          alert(UI_GRID9_UPLOAD_FAILED);
        }
      };

      reader.readAsDataURL(file);
    });
/* ---- quick review template v1 (2x6) ---- */
    const UI_QUICK_UPLOAD = String.fromCharCode(0x70b9, 0x51fb, 0x4e0a, 0x4f20, 0x20, 0x42, 0x4b);
    const UI_QUICK_UPLOAD_MINI = String.fromCharCode(0x4e0a, 0x4f20);
    const UI_QUICK_CV_PLACEHOLDER = String.fromCharCode(0x586b, 0x5199, 0x58f0, 0x4f18);
    const UI_QUICK_REVIEW_PLACEHOLDER = String.fromCharCode(0x4e00, 0x53e5, 0x8bdd, 0x20) + "Repo";
    const UI_QUICK_CONTAIN = String.fromCharCode(0x5b8c, 0x6574);
    const UI_QUICK_COVER = String.fromCharCode(0x88c1, 0x5207);
    const UI_QUICK_EDIT = String.fromCharCode(0x7f16, 0x8f91);
    const UI_QUICK_REMOVE = String.fromCharCode(0x79fb, 0x9664);
    const UI_QUICK_UPLOAD_FAILED = String.fromCharCode(0x56fe, 0x7247, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x9009, 0x62e9, 0x56fe, 0x7247, 0x3002);
    const UI_QUICK_WATERMARK = String.fromCharCode(0x4e59, 0x6293, 0x8bb0, 0x5f55) + " \u00b7 QUICK VOICE NOTES";

    function quickIsCoarse() {
      return window.matchMedia("(hover: none), (pointer: coarse), (max-width: 780px)").matches;
    }

    function buildQuickCells() {
      if (!quickCells) return;
      quickCellEditors = [];
      for (let index = 0; index < 12; index += 1) {
        const item = document.createElement("article");
        item.className = "quick-item";
        item.dataset.quickIndex = String(index);

        const decoTop = document.createElement("span");
        decoTop.className = "quick-deco-top";
        const decoBottom = document.createElement("span");
        decoBottom.className = "quick-deco-bottom";

        const body = document.createElement("div");
        body.className = "quick-body";

        const cover = document.createElement("div");
        cover.className = "quick-cover";
        const file = document.createElement("input");
        file.className = "quick-file";
        file.type = "file";
        file.accept = "image/*";
        const img = document.createElement("img");
        img.alt = "";
        const placeholder = document.createElement("span");
        placeholder.className = "quick-cover-placeholder";
        placeholder.textContent = UI_QUICK_UPLOAD;

        const toolbar = document.createElement("div");
        toolbar.className = "quick-cover-toolbar";
        const toolDefs = [
          { action: "contain", label: UI_QUICK_CONTAIN },
          { action: "cover", label: UI_QUICK_COVER },
          { action: "edit", label: UI_QUICK_EDIT },
          { action: "remove", label: UI_QUICK_REMOVE }
        ];
        toolDefs.forEach((def) => {
          const tool = document.createElement("button");
          tool.type = "button";
          tool.className = "quick-cover-tool";
          tool.dataset.quickTool = def.action;
          tool.textContent = def.label;
          toolbar.appendChild(tool);
        });

        const bottom = document.createElement("div");
        bottom.className = "quick-cover-bottom";
        const uploadMini = document.createElement("button");
        uploadMini.type = "button";
        uploadMini.className = "quick-upload-mini";
        uploadMini.textContent = UI_QUICK_UPLOAD_MINI;
        const rjInput = document.createElement("input");
        rjInput.className = "quick-rj";
        rjInput.type = "text";
        rjInput.maxLength = 12;
        rjInput.placeholder = "RJ00000000";
        rjInput.addEventListener("pointerdown", (event) => event.stopPropagation());
        rjInput.addEventListener("click", (event) => event.stopPropagation());
        rjInput.addEventListener("input", () => fitQuickRjWidth(rjInput));
        fitQuickRjWidth(rjInput);
        bottom.append(uploadMini, rjInput);

        cover.append(file, img, placeholder, toolbar, bottom);

        const content = document.createElement("div");
        content.className = "quick-content";
        const cvRow = document.createElement("div");
        cvRow.className = "quick-cv-row";
        const cvLabel = document.createElement("span");
        cvLabel.className = "quick-cv-label";
        cvLabel.textContent = "CV";
        const cvInput = document.createElement("input");
        cvInput.className = "quick-cv";
        cvInput.type = "text";
        cvInput.maxLength = 24;
        cvInput.placeholder = UI_QUICK_CV_PLACEHOLDER;
        cvRow.append(cvLabel, cvInput);
        const divider = document.createElement("div");
        divider.className = "quick-cv-divider";
        const reviewWrap = document.createElement("div");
        reviewWrap.className = "quick-review-wrap";
        const reviewArea = document.createElement("textarea");
        reviewArea.className = "quick-review";
        reviewArea.maxLength = 78;
        reviewArea.placeholder = UI_QUICK_REVIEW_PLACEHOLDER;
        reviewWrap.appendChild(reviewArea);
        content.append(cvRow, divider, reviewWrap);

        body.append(cover, content);
        item.append(decoTop, decoBottom, body);
        quickCells.appendChild(item);
        quickCellEditors.push(item);

        file.addEventListener("change", () => {
          const f = file.files && file.files[0];
          file.value = "";
          if (!f) return;
          const reader = new FileReader();
          reader.onload = async () => {
            try {
              const pngDataUrl = await grid9CoverStorageDataUrl(await rasterizeImageToPngDataUrl(reader.result));
              setQuickCover(index, pngDataUrl);
            } catch (error) {
              console.error("Quick cover normalize failed", error);
              alert(UI_QUICK_UPLOAD_FAILED);
            }
          };
          reader.readAsDataURL(f);
        });

        cover.addEventListener("click", (event) => {
          if (event.target.closest(".quick-cover-toolbar, .quick-upload-mini, .quick-rj")) return;
          if (quickIsCoarse()) {
            if (!cover.classList.contains("has-image")) file.click();
            else cover.classList.toggle("tools-open");
          } else {
            file.click();
          }
        });

        uploadMini.addEventListener("click", (event) => {
          event.stopPropagation();
          file.click();
        });

        toolbar.addEventListener("click", (event) => {
          event.stopPropagation();
          const btn = event.target.closest("[data-quick-tool]");
          if (!btn) return;
          const action = btn.dataset.quickTool;
          if (action === "contain") setQuickFit(index, "contain");
          else if (action === "cover") setQuickFit(index, "cover");
          else if (action === "edit") openQuickImageEditor(index);
          else if (action === "remove") setQuickCover(index, "");
        });
      }
    }

    function updateQuickShowRjButton() {
      if (!quickShowRjButton || !quickCard) return;
      quickShowRjButton.textContent = (quickShowRj ? "\u2611" : "\u2610") + " " + String.fromCharCode(0x663e, 0x793a) + "RJ" + String.fromCharCode(0x53f7);
      quickCard.classList.toggle("hide-rj", !quickShowRj);
    }

    function applyQuickCover(index, src) {
      const cell = quickCellEditors[index];
      if (!cell) return;
      const img = cell.querySelector(".quick-cover img");
      const cover = cell.querySelector(".quick-cover");
      if (src) {
        img.setAttribute("src", src);
        cover.classList.add("has-image");
      } else {
        img.removeAttribute("src");
        cover.classList.remove("has-image", "tools-open");
      }
    }

    function setQuickCover(index, src) {
      applyQuickCover(index, src);
      saveState();
    }

    function setQuickFit(index, fit) {
      const cell = quickCellEditors[index];
      if (!cell) return;
      cell.querySelector(".quick-cover img").style.objectFit = fit === "contain" ? "contain" : "cover";
      saveState();
    }

    function quickHasCover(index) {
      const cell = quickCellEditors[index];
      if (!cell) return false;
      return Boolean(cell.querySelector(".quick-cover img").getAttribute("src"));
    }

    function readQuickCell(index) {
      const cell = quickCellEditors[index];
      if (!cell) return null;
      return {
        cover: cell.querySelector(".quick-cover img").getAttribute("src") || "",
        coverFit: cell.querySelector(".quick-cover img").style.objectFit || "cover",
        cv: cell.querySelector(".quick-cv").value.trim(),
        rj: cell.querySelector(".quick-rj").value.trim(),
        review: cell.querySelector(".quick-review").value.trim()
      };
    }

    function writeQuickCell(index, data) {
      const cell = quickCellEditors[index];
      if (!cell) return;
      const next = data || {};
      applyQuickCover(index, next.cover || "");
      cell.querySelector(".quick-cover img").style.objectFit = next.coverFit === "contain" ? "contain" : "cover";
      cell.querySelector(".quick-cv").value = next.cv || "";
      cell.querySelector(".quick-review").value = next.review || "";
      const rjInput = cell.querySelector(".quick-rj");
      rjInput.value = next.rj || "";
      fitQuickRjWidth(rjInput);
    }

    function collectQuickState() {
      return {
        showRj: quickShowRj,
        cells: Array.from({ length: 12 }, (_, index) => readQuickCell(index))
      };
    }

    function applyQuickState(state) {
      if (!state || typeof state !== "object") return;
      quickShowRj = state.showRj !== false;
      for (let index = 0; index < 12; index += 1) {
        writeQuickCell(index, (state.cells && state.cells[index]) || {});
      }
      updateQuickShowRjButton();
    }

    function resetQuickState() {
      quickShowRj = true;
      quickCellEditors.forEach((cell, index) => {
        applyQuickCover(index, "");
        cell.querySelector(".quick-cover img").style.objectFit = "cover";
        cell.querySelector(".quick-cv").value = "";
        cell.querySelector(".quick-rj").value = "";
        cell.querySelector(".quick-review").value = "";
      });
      updateQuickShowRjButton();
      saveState();
    }

    const quickRjMeasureCanvas = document.createElement("canvas");

    function fitQuickRjWidth(input) {
      if (!input) return;
      const ctx = quickRjMeasureCanvas.getContext("2d");
      ctx.font = canvasFont('800', 10.5);
      const baseWidth = Math.ceil(ctx.measureText("RJ00000000").width);
      const text = input.value || "";
      const textWidth = text ? Math.ceil(ctx.measureText(text).width) : 0;
      input.style.width = Math.max(baseWidth + 16, textWidth + 16) + "px";
    }

    async function waitQuickImagesReady() {
      const pending = [];
      quickCellEditors.forEach((cell) => {
        const img = cell.querySelector(".quick-cover img");
        if (img.getAttribute("src") && !img.complete) {
          pending.push(img.decode().catch(() => {}));
        }
      });
      await Promise.all(pending);
    }

    async function migrateQuickCoversToCompact() {
      const tasks = [];
      quickCellEditors.forEach((cell) => {
        const img = cell.querySelector(".quick-cover img");
        const src = img.getAttribute("src");
        if (src && !src.startsWith("data:image/jpeg")) {
          tasks.push(grid9CoverStorageDataUrl(src).then((compact) => {
            if (compact && compact !== src) img.setAttribute("src", compact);
          }).catch(() => {}));
        }
      });
      if (tasks.length) {
        await Promise.all(tasks);
        saveState();
      }
    }

    async function importAllQuickCovers() {
      const jobs = [];
      let emptyCount = 0;
      let skipCount = 0;
      quickCellEditors.forEach((cell, index) => {
        const rj = normalizeWorkno(cell.querySelector(".quick-rj").value);
        if (!rj) {
          emptyCount += 1;
          return;
        }
        if (quickHasCover(index)) {
          skipCount += 1;
          return;
        }
        jobs.push({ index, rj });
      });
      if (!jobs.length) {
        grid9ImportTitle.textContent = UI_GRID9_IMPORT_DONE_TITLE;
        grid9ImportBody.textContent = UI_GRID9_NOTHING;
        grid9ImportDoneButton.hidden = false;
        grid9ImportModal.hidden = false;
        return;
      }
      showGrid9ImportLoading();
      let imported = 0;
      let failed = 0;
      const failures = [];
      let cursor = 0;
      const concurrency = 2;
      const worker = async () => {
        while (cursor < jobs.length) {
          const job = jobs[cursor];
          cursor += 1;
          try {
            const product = parseDlsiteProduct(await fetchProductJson(job.rj));
            const coverUrl = product && product.coverUrl;
            if (!coverUrl) throw new Error("no cover url");
            const pngDataUrl = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(coverUrl));
            applyQuickCover(job.index, pngDataUrl);
            const rjInput = quickCellEditors[job.index].querySelector(".quick-rj");
            rjInput.value = job.rj;
            fitQuickRjWidth(rjInput);
            const cvInput = quickCellEditors[job.index].querySelector(".quick-cv");
            if (!cvInput.value.trim() && product.cv) cvInput.value = product.cv;
            imported += 1;
          } catch (error) {
            console.warn("Quick batch import failed", job.rj, error);
            failed += 1;
            failures.push({ rj: job.rj, reason: grid9FailureReason(error) });
          }
        }
      };
      const workers = [];
      for (let i = 0; i < Math.min(concurrency, jobs.length); i += 1) workers.push(worker());
      await Promise.all(workers);
      saveState();
      showGrid9ImportResult(imported, failed, skipCount, emptyCount, failures);
    }

    function quickExportFileName() {
      return ["otome", "quick", safeFilePart(currentThemeId, DEFAULT_THEME_ID)].join("_") + ".png";
    }

    async function downloadQuickCard() {
      await ensureCanvasFontReady();
      try {
        await waitQuickImagesReady();
      } catch (imageError) {
        console.warn("Quick export image wait failed", imageError);
      }
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      drawQuickCard(canvas.getContext("2d"));
      handleExportBlob(await canvasToBlob(canvas), quickExportFileName());
    }

    function drawQuickStar(ctx, cx, cy, outerR, fill) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      for (let i = 0; i < 10; i += 1) {
        const r = i % 2 === 0 ? outerR : outerR * 0.42;
        const angle = -Math.PI / 2 + i * Math.PI / 5;
        const px = r * Math.cos(angle);
        const py = r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.restore();
    }

    function drawQuickDecoLine(ctx, x1, x2, y, color) {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 5]);
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    function drawQuickCard(ctx) {
      const width = 1080;
      const height = 1440;
      const state = collectQuickState();
      const theme = currentCardTheme();
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, theme.bgStops[0]);
      bg.addColorStop(0.48, theme.bgStops[1]);
      bg.addColorStop(1, theme.bgStops[2]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,.34)";
      for (let x = 0; x <= width; x += 36) ctx.fillRect(x, 0, 1, height);
      for (let y = 0; y <= height; y += 36) ctx.fillRect(0, y, width, 1);
      strokeRound(ctx, 16, 16, width - 32, height - 32, 30, themeAlpha("line", .78), 3);
      strokeRound(ctx, 30, 30, width - 60, height - 60, 22, themeAlpha("dash", .42), 2, true);

      const gridLeft = 54;
      const gridTop = 48;
      const gapX = 18;
      const gapY = 14;
      const cellWidth = (width - gridLeft * 2 - gapX) / 2;
      const gridBottom = height - 54;
      const cellHeight = (gridBottom - gridTop - gapY * 5) / 6;
      for (let row = 0; row < 6; row += 1) {
        for (let col = 0; col < 2; col += 1) {
          const index = row * 2 + col;
          const x = gridLeft + col * (cellWidth + gapX);
          const y = gridTop + row * (cellHeight + gapY);
          drawQuickCell(ctx, state, index, x, y, cellWidth, cellHeight);
        }
      }

      ctx.save();
      ctx.fillStyle = themeAlpha("ink", .09);
      ctx.font = canvasFont('800', 12);
      ctx.textAlign = "right";
      ctx.fillText(UI_QUICK_WATERMARK, width - 54, height - 38);
      ctx.restore();
    }

    function drawQuickCell(ctx, state, index, x, y, w, h) {
      const theme = currentCardTheme();
      const cell = state.cells[index] || {};
      const radius = 23;

      fillRound(ctx, x, y, w, h, radius, "rgba(255,255,255,.9)");
      strokeRound(ctx, x, y, w, h, radius, themeAlpha("line", .5), 1);

      const cx = x + w / 2;
      const decoY = y + 16;
      drawQuickDecoLine(ctx, x + 23, cx - 18, decoY, themeAlpha("accent", .4));
      drawQuickDecoLine(ctx, cx + 18, x + w - 23, decoY, themeAlpha("mint", .45));
      drawQuickStar(ctx, cx, decoY, 7.5, themeAlpha("accent", .68));

      const decoBottomY = y + h - 15;
      drawQuickDecoLine(ctx, x + 23, cx - 18, decoBottomY, themeAlpha("accent", .4));
      drawQuickDecoLine(ctx, cx + 18, x + w - 23, decoBottomY, themeAlpha("mint", .45));
      drawQuickStar(ctx, cx, decoBottomY, 7.5, themeAlpha("mint", .68));

      const bodyTop = y + 17;
      const bodyHeight = h - 33;
      const coverWidth = 194;
      const coverHeight = 154;
      const coverX = x + 15;
      const coverY = bodyTop + 12.2;

      if (cell.cover) {
        fillRound(ctx, coverX, coverY, coverWidth, coverHeight, 17, theme.coverBg);
        const imgElement = quickCellEditors[index] ? quickCellEditors[index].querySelector(".quick-cover img") : null;
        if (imgElement && imgElement.complete && imgElement.naturalWidth) {
          ctx.save();
          roundRect(ctx, coverX, coverY, coverWidth, coverHeight, 17);
          ctx.clip();
          const iw = imgElement.naturalWidth;
          const ih = imgElement.naturalHeight;
          const fitMode = cell.coverFit === "contain" ? "contain" : "cover";
          const scale = fitMode === "contain" ? Math.min(coverWidth / iw, coverHeight / ih) : Math.max(coverWidth / iw, coverHeight / ih);
          const dw = iw * scale;
          const dh = ih * scale;
          ctx.drawImage(imgElement, coverX + (coverWidth - dw) / 2, coverY + (coverHeight - dh) / 2, dw, dh);
          ctx.restore();
        }
        ctx.save();
        ctx.shadowColor = "rgba(104,73,87,.13)";
        ctx.shadowBlur = 12;
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, 17, "rgba(255,255,255,.98)", 3);
        ctx.restore();
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, 17, themeAlpha("line", .78), 1);
      } else {
        fillRound(ctx, coverX, coverY, coverWidth, coverHeight, 17, themeAlpha("coverBg", .52));
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, 17, themeAlpha("accent", .44), 2, true);
        ctx.save();
        ctx.fillStyle = theme.muted;
        ctx.font = canvasFont('900', 14);
        ctx.textAlign = "center";
        ctx.fillText(UI_QUICK_UPLOAD, coverX + coverWidth / 2, coverY + coverHeight / 2 + 5);
        ctx.textAlign = "left";
        ctx.restore();
      }

      const rjText = (state.showRj && cell.rj) ? cell.rj : "";
      if (rjText) {
        ctx.font = canvasFont('800', 10.5);
        const badgeWidth = Math.ceil(ctx.measureText(rjText).width) + 14;
        const badgeHeight = 24;
        const bx = coverX + coverWidth - badgeWidth - 7;
        const by = coverY + coverHeight - badgeHeight - 7;
        fillRound(ctx, bx, by, badgeWidth, badgeHeight, 8, "rgba(255,255,255,.86)");
        ctx.fillStyle = theme.accentDeep;
        ctx.textAlign = "left";
        ctx.fillText(rjText, bx + 7, by + badgeHeight / 2 + 3.5);
        ctx.textAlign = "left";
      }

      const contentX = x + 15 + coverWidth + 16;
      const contentWidth = w - 15 - coverWidth - 16 - 15;
      const cvBaseline = bodyTop + 21.2;
      ctx.textAlign = "left";
      ctx.fillStyle = theme.accent;
      ctx.font = canvasFont('900', 18);
      ctx.fillText("CV", contentX, cvBaseline + 7);
      const cvLabelWidth = Math.ceil(ctx.measureText("CV").width);
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('900', 18);
      ctx.fillText(cell.cv || "", contentX + cvLabelWidth + 8, cvBaseline + 7);

      const dividerY = bodyTop + 45.9;
      ctx.save();
      ctx.strokeStyle = themeAlpha("accent", .33);
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.moveTo(contentX, dividerY + 0.5);
      ctx.lineTo(contentX + contentWidth, dividerY + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      const wrapTop = bodyTop + 46.2;
      const wrapHeight = bodyTop + bodyHeight - wrapTop;
      ctx.fillStyle = themeAlpha("accent", .22);
      ctx.fillRect(contentX, wrapTop + 14.4, 3, 105);
      ctx.fillStyle = themeAlpha("accentDeep", .48);
      ctx.font = canvasFont('900', 13);
      ctx.fillText(String.fromCharCode(0x2661), contentX + 5, wrapTop + 26.4);
      ctx.fillStyle = themeAlpha("ink", .9);
      ctx.font = canvasFont('700', 14);
      drawWrappedText(ctx, cell.review || "", contentX + 18, wrapTop + 29.4, contentWidth - 25, 21, 5);
    }

    quickShowRjButton.addEventListener("click", () => {
      quickShowRj = !quickShowRj;
      updateQuickShowRjButton();
      saveState();
    });
    quickImportAllButton.addEventListener("click", importAllQuickCovers);
    quickClearRepoButton.addEventListener("click", () => {
      quickCellEditors.forEach((cell) => {
        cell.querySelector(".quick-review").value = "";
      });
      saveState();
    });

    function bindQuickMobileFocus() {
      if (!quickCard) return;
      const areas = Array.from(quickCard.querySelectorAll(".quick-item"));
      areas.forEach((area) => {
        area.addEventListener("click", (event) => {
          if (!isMobileView() || currentTemplate() !== "quick") return;
          if (event.target.closest("button, input, textarea, select, .quick-cover")) return;
          if (mobileFocusTarget !== area) {
            event.preventDefault();
            event.stopPropagation();
            focusMobileArea(area);
          }
        }, true);
        area.addEventListener("focusin", () => {
          if (currentTemplate() !== "quick") return;
          focusMobileArea(area);
        });
      });
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
/* ---- trio template v1 (3 rows x 1080x1440) ---- */
    const UI_TRIO_UPLOAD = String.fromCharCode(0x70b9, 0x51fb, 0x4e0a, 0x4f20, 0x20, 0x42, 0x4b);
    const UI_TRIO_CV_PLACEHOLDER = String.fromCharCode(0x586b, 0x5199, 0x58f0, 0x4f18);
    const UI_TRIO_REPO_PLACEHOLDER = String.fromCharCode(0x5199, 0x4e0b, 0x8fd9, 0x90e8, 0x4f5c, 0x54c1, 0x7684, 0x20) + "Repo" + String.fromCharCode(0x2026);
    const UI_TRIO_CONTAIN = String.fromCharCode(0x5b8c, 0x6574);
    const UI_TRIO_COVER = String.fromCharCode(0x88c1, 0x5207);
    const UI_TRIO_EDIT = String.fromCharCode(0x7f16, 0x8f91);
    const UI_TRIO_REMOVE = String.fromCharCode(0x79fb, 0x9664);
    const UI_TRIO_UPLOAD_FAILED = String.fromCharCode(0x56fe, 0x7247, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x9009, 0x62e9, 0x56fe, 0x7247, 0x3002);
    const UI_TRIO_WATERMARK = String.fromCharCode(0x4e59, 0x6293, 0x8bb0, 0x5f55) + " \u00b7 THREE VOICE NOTES";
    const UI_TRIO_PRICE = String.fromCharCode(0x73b0, 0x4ef7);
    const UI_TRIO_RATING = String.fromCharCode(0x8bc4, 0x5206);
    const UI_TRIO_REPO_LABEL = "REPO";

    function trioIsCoarse() {
      return window.matchMedia("(hover: none), (pointer: coarse), (max-width: 780px)").matches;
    }

    function buildTrioCells() {
      if (!trioCells) return;
      trioCellEditors = [];
      for (let index = 0; index < 3; index += 1) {
        const item = document.createElement("article");
        item.className = "trio-item";
        item.dataset.trioIndex = String(index);

        const decoTop = document.createElement("span");
        decoTop.className = "trio-frame-deco top";
        const decoBottom = document.createElement("span");
        decoBottom.className = "trio-frame-deco bottom";

        const cover = document.createElement("div");
        cover.className = "trio-cover";
        const file = document.createElement("input");
        file.className = "trio-file";
        file.type = "file";
        file.accept = "image/*";
        const img = document.createElement("img");
        img.alt = "";
        const placeholder = document.createElement("span");
        placeholder.className = "trio-cover-placeholder";
        placeholder.textContent = UI_TRIO_UPLOAD;
        const toolbar = document.createElement("div");
        toolbar.className = "trio-cover-tools";
        const toolDefs = [
          { action: "contain", label: UI_TRIO_CONTAIN },
          { action: "cover", label: UI_TRIO_COVER },
          { action: "edit", label: UI_TRIO_EDIT },
          { action: "remove", label: UI_TRIO_REMOVE }
        ];
        toolDefs.forEach((def) => {
          const tool = document.createElement("button");
          tool.type = "button";
          tool.className = "trio-cover-tool";
          tool.dataset.trioTool = def.action;
          tool.textContent = def.label;
          toolbar.appendChild(tool);
        });
        cover.append(file, img, placeholder, toolbar);

        const info = document.createElement("div");
        info.className = "trio-info";

        const infoRow = document.createElement("div");
        infoRow.className = "trio-info-row";
        const cvField = document.createElement("label");
        cvField.className = "trio-inline-field";
        const cvLabel = document.createElement("span");
        cvLabel.className = "trio-field-label";
        cvLabel.textContent = "CV";
        const cvInput = document.createElement("input");
        cvInput.className = "trio-field-input trio-cv";
        cvInput.type = "text";
        cvInput.maxLength = 30;
        cvInput.placeholder = UI_TRIO_CV_PLACEHOLDER;
        cvField.append(cvLabel, cvInput);
        const rjField = document.createElement("label");
        rjField.className = "trio-inline-field";
        const rjLabel = document.createElement("span");
        rjLabel.className = "trio-rj-label";
        rjLabel.textContent = String.fromCharCode(0x52, 0x4a, 0x53f7);
        const rjInput = document.createElement("input");
        rjInput.className = "trio-rj-input";
        rjInput.type = "text";
        rjInput.maxLength = 12;
        rjInput.placeholder = "RJ00000000";
        rjInput.addEventListener("pointerdown", (event) => event.stopPropagation());
        rjField.append(rjLabel, rjInput);
        const topDivider = document.createElement("div");
        topDivider.className = "trio-top-divider";
        infoRow.append(cvField, rjField, topDivider);

        const summary = document.createElement("div");
        summary.className = "trio-summary-strip";
        const priceBlock = document.createElement("label");
        priceBlock.className = "trio-price-block";
        const priceLabel = document.createElement("span");
        priceLabel.className = "trio-small-label";
        priceLabel.textContent = UI_TRIO_PRICE;
        const pricePrefix = document.createElement("span");
        pricePrefix.className = "trio-price-prefix";
        pricePrefix.textContent = "\u00a5";
        const priceInput = document.createElement("input");
        priceInput.className = "trio-price-input";
        priceInput.type = "text";
        priceInput.inputmode = "numeric";
        priceInput.maxLength = 8;
        priceInput.placeholder = "0";
        priceBlock.append(priceLabel, pricePrefix, priceInput);

        const ratingBlock = document.createElement("div");
        ratingBlock.className = "trio-rating-block";
        const ratingLabel = document.createElement("span");
        ratingLabel.className = "trio-small-label";
        ratingLabel.textContent = UI_TRIO_RATING;
        const stars = document.createElement("div");
        stars.className = "trio-stars";
        for (let n = 1; n <= 5; n += 1) {
          const star = document.createElement("button");
          star.type = "button";
          star.className = "trio-star off";
          star.dataset.trioScore = String(n);
          star.textContent = "\u2605";
          stars.appendChild(star);
        }
        const score = document.createElement("span");
        score.className = "trio-score";
        score.textContent = "0.0";
        ratingBlock.append(ratingLabel, stars, score);
        summary.append(priceBlock, ratingBlock);

        const repo = document.createElement("div");
        repo.className = "trio-repo";
        const reviewArea = document.createElement("textarea");
        reviewArea.className = "trio-repo-input";
        reviewArea.maxLength = 240;
        reviewArea.placeholder = UI_TRIO_REPO_PLACEHOLDER;
        repo.append(reviewArea);

        info.append(infoRow, summary, repo);
        item.append(decoTop, decoBottom, cover, info);
        trioCells.appendChild(item);
        trioCellEditors.push(item);

        file.addEventListener("change", () => {
          const f = file.files && file.files[0];
          file.value = "";
          if (!f) return;
          const reader = new FileReader();
          reader.onload = async () => {
            try {
              const pngDataUrl = await grid9CoverStorageDataUrl(await rasterizeImageToPngDataUrl(reader.result));
              setTrioCover(index, pngDataUrl);
            } catch (error) {
              console.error("Trio cover normalize failed", error);
              alert(UI_TRIO_UPLOAD_FAILED);
            }
          };
          reader.readAsDataURL(f);
        });

        cover.addEventListener("click", (event) => {
          if (event.target.closest(".trio-cover-tools")) return;
          if (trioIsCoarse()) {
            if (!cover.classList.contains("has-image")) file.click();
            else cover.classList.toggle("tools-open");
          } else {
            file.click();
          }
        });

        toolbar.addEventListener("click", (event) => {
          event.stopPropagation();
          const btn = event.target.closest("[data-trio-tool]");
          if (!btn) return;
          const action = btn.dataset.trioTool;
          if (action === "contain") setTrioFit(index, "contain");
          else if (action === "cover") setTrioFit(index, "cover");
          else if (action === "edit") openTrioImageEditor(index);
          else if (action === "remove") setTrioCover(index, "");
        });

        stars.addEventListener("click", (event) => {
          const btn = event.target.closest(".trio-star");
          if (!btn) return;
          const rect = btn.getBoundingClientRect();
          const half = event.clientX - rect.left < rect.width / 2;
          const score = Number(btn.dataset.trioScore) - (half ? 0.5 : 0);
          setTrioRating(index, score);
        });
      }
    }

    function applyTrioCover(index, src) {
      const cell = trioCellEditors[index];
      if (!cell) return;
      const img = cell.querySelector(".trio-cover img");
      const cover = cell.querySelector(".trio-cover");
      if (src) {
        img.setAttribute("src", src);
        cover.classList.add("has-image");
      } else {
        img.removeAttribute("src");
        cover.classList.remove("has-image", "tools-open");
      }
    }

    function setTrioCover(index, src) {
      applyTrioCover(index, src);
      saveState();
    }

    function setTrioFit(index, fit) {
      const cell = trioCellEditors[index];
      if (!cell) return;
      cell.querySelector(".trio-cover img").style.objectFit = fit === "contain" ? "contain" : "cover";
      saveState();
    }

    function trioHasCover(index) {
      const cell = trioCellEditors[index];
      if (!cell) return false;
      return Boolean(cell.querySelector(".trio-cover img").getAttribute("src"));
    }

    function setTrioRating(index, value) {
      const cell = trioCellEditors[index];
      if (!cell) return;
      const rating = Math.max(0, Math.min(5, Math.round((Number(value) || 0) * 2) / 2));
      cell.querySelectorAll(".trio-star").forEach((star, idx) => {
        const starValue = idx + 1;
        star.classList.toggle("half", rating === starValue - 0.5);
        star.classList.toggle("off", rating < starValue - 0.5);
      });
      cell.querySelector(".trio-score").textContent = rating.toFixed(1);
      saveState();
    }

    function readTrioCell(index) {
      const cell = trioCellEditors[index];
      if (!cell) return null;
      const rating = Array.from(cell.querySelectorAll(".trio-star")).reduce((sum, star) => {
        if (star.classList.contains("half")) return sum + 0.5;
        return sum + (star.classList.contains("off") ? 0 : 1);
      }, 0);
      return {
        cover: cell.querySelector(".trio-cover img").getAttribute("src") || "",
        coverFit: cell.querySelector(".trio-cover img").style.objectFit || "cover",
        cv: cell.querySelector(".trio-cv").value.trim(),
        rj: cell.querySelector(".trio-rj-input").value.trim(),
        price: cell.querySelector(".trio-price-input").value.trim(),
        rating,
        repo: cell.querySelector(".trio-repo-input").value.trim()
      };
    }

    function writeTrioCell(index, data) {
      const cell = trioCellEditors[index];
      if (!cell) return;
      const next = data || {};
      applyTrioCover(index, next.cover || "");
      cell.querySelector(".trio-cover img").style.objectFit = next.coverFit === "contain" ? "contain" : "cover";
      cell.querySelector(".trio-cv").value = next.cv || "";
      cell.querySelector(".trio-rj-input").value = next.rj || "";
      cell.querySelector(".trio-price-input").value = next.price || "";
      const rating = Math.max(0, Math.min(5, Math.round((Number(next.rating) || 0) * 2) / 2));
      cell.querySelectorAll(".trio-star").forEach((star, idx) => {
        const starValue = idx + 1;
        star.classList.toggle("half", rating === starValue - 0.5);
        star.classList.toggle("off", rating < starValue - 0.5);
      });
      cell.querySelector(".trio-score").textContent = rating.toFixed(1);
      cell.querySelector(".trio-repo-input").value = next.repo || "";
    }

    function collectTrioState() {
      return {
        cells: Array.from({ length: 3 }, (_, index) => readTrioCell(index))
      };
    }

    function applyTrioState(state) {
      if (!state || typeof state !== "object") return;
      for (let index = 0; index < 3; index += 1) {
        writeTrioCell(index, (state.cells && state.cells[index]) || {});
      }
    }

    function resetTrioState() {
      trioCellEditors.forEach((cell, index) => {
        applyTrioCover(index, "");
        cell.querySelector(".trio-cover img").style.objectFit = "cover";
        cell.querySelector(".trio-cv").value = "";
        cell.querySelector(".trio-rj-input").value = "";
        cell.querySelector(".trio-price-input").value = "";
        cell.querySelectorAll(".trio-star").forEach((star) => {
          star.classList.add("off");
          star.classList.remove("half");
        });
        cell.querySelector(".trio-score").textContent = "0.0";
        cell.querySelector(".trio-repo-input").value = "";
      });
      saveState();
    }

    async function waitTrioImagesReady() {
      const pending = [];
      trioCellEditors.forEach((cell) => {
        const img = cell.querySelector(".trio-cover img");
        if (img.getAttribute("src") && !img.complete) {
          pending.push(img.decode().catch(() => {}));
        }
      });
      await Promise.all(pending);
    }

    async function migrateTrioCoversToCompact() {
      const tasks = [];
      trioCellEditors.forEach((cell) => {
        const img = cell.querySelector(".trio-cover img");
        const src = img.getAttribute("src");
        if (src && !src.startsWith("data:image/jpeg")) {
          tasks.push(grid9CoverStorageDataUrl(src).then((compact) => {
            if (compact && compact !== src) img.setAttribute("src", compact);
          }).catch(() => {}));
        }
      });
      if (tasks.length) {
        await Promise.all(tasks);
        saveState();
      }
    }

    async function importAllTrioCells() {
      const jobs = [];
      let emptyCount = 0;
      trioCellEditors.forEach((cell, index) => {
        const rj = normalizeWorkno(cell.querySelector(".trio-rj-input").value);
        if (!rj) {
          emptyCount += 1;
          return;
        }
        jobs.push({ index, rj });
      });
      if (!jobs.length) {
        grid9ImportTitle.textContent = UI_GRID9_IMPORT_DONE_TITLE;
        grid9ImportBody.textContent = UI_GRID9_NOTHING;
        grid9ImportDoneButton.hidden = false;
        grid9ImportModal.hidden = false;
        return;
      }
      showGrid9ImportLoading();
      let imported = 0;
      let failed = 0;
      const failures = [];
      let cursor = 0;
      const concurrency = 2;
      const worker = async () => {
        while (cursor < jobs.length) {
          const job = jobs[cursor];
          cursor += 1;
          try {
            const product = parseDlsiteProduct(await fetchProductJson(job.rj));
            if (!product) throw new Error("empty product");
            const cell = trioCellEditors[job.index];
            if (!trioHasCover(job.index) && product.coverUrl) {
              const pngDataUrl = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(product.coverUrl));
              applyTrioCover(job.index, pngDataUrl);
            }
            const cvInput = cell.querySelector(".trio-cv");
            if (!cvInput.value.trim() && product.cv) cvInput.value = product.cv;
            const priceInput = cell.querySelector(".trio-price-input");
            if (!priceInput.value.trim() && product.originalPrice) priceInput.value = product.originalPrice;
            const rjInput = cell.querySelector(".trio-rj-input");
            rjInput.value = job.rj;
            imported += 1;
          } catch (error) {
            console.warn("Trio batch import failed", job.rj, error);
            failed += 1;
            failures.push({ rj: job.rj, reason: grid9FailureReason(error) });
          }
        }
      };
      const workers = [];
      for (let i = 0; i < Math.min(concurrency, jobs.length); i += 1) workers.push(worker());
      await Promise.all(workers);
      saveState();
      showGrid9ImportResult(imported, failed, 0, emptyCount, failures);
    }

    function trioEditorGlobals(index) {
      const cell = trioCellEditors[index];
      const src = cell ? (cell.querySelector(".trio-cover img").getAttribute("src") || "") : "";
      return {
        coverOriginalSrc: src || "",
        coverEditedSrc: "",
        coverMosaicMaskSrc: "",
        coverBlurMaskSrc: "",
        coverEditorUndoStack: [],
        coverEditorRedoStack: [],
        coverStickers: [],
        stickerSources: JSON.parse(JSON.stringify(stickerSources || [])),
        selectedStickerId: null,
        editorTool: "mosaic",
        coverSrc: src,
        coverFit: "cover"
      };
    }

    async function openTrioImageEditor(index) {
      const cell = trioCellEditors[index];
      if (!cell) return;
      const src = cell.querySelector(".trio-cover img").getAttribute("src") || "";
      if (!src) {
        cell.querySelector(".trio-file")?.click();
        return;
      }
      if (imageEditorMode === "standalone") leaveStandaloneImageTool();
      if (imageEditorMode !== "trio") templateEditorGlobalsBackup = editorGlobals();
      imageEditorMode = "trio";
      activeTrioIndex = index;
      placeImageEditorForTemplate();
      applyEditorGlobals(trioEditorGlobals(index));
      await loadEditorFromCurrentGlobals(src);
    }

    function trioExportFileName() {
      return ["otome", "trio", safeFilePart(currentThemeId, DEFAULT_THEME_ID)].join("_") + ".png";
    }

    async function downloadTrioCard() {
      await ensureCanvasFontReady();
      try {
        await waitTrioImagesReady();
      } catch (imageError) {
        console.warn("Trio export image wait failed", imageError);
      }
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      drawTrioCard(canvas.getContext("2d"));
      handleExportBlob(await canvasToBlob(canvas), trioExportFileName());
    }

    function drawTrioStar(ctx, cx, cy, outerR, fill) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      for (let i = 0; i < 10; i += 1) {
        const r = i % 2 === 0 ? outerR : outerR * 0.42;
        const angle = -Math.PI / 2 + i * Math.PI / 5;
        const px = r * Math.cos(angle);
        const py = r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.restore();
    }

    function drawTrioDashedLine(ctx, x1, x2, y, color) {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 6]);
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    function drawTrioFrameDeco(ctx, x, y, w) {
      const cx = x + w / 2;
      drawTrioDashedLine(ctx, x + 92, cx - 13, y, themeAlpha("accent", .3));
      drawTrioDashedLine(ctx, cx + 13, x + w - 92, y, themeAlpha("mint", .34));
      drawTrioStar(ctx, cx, y, 6, themeAlpha("accent", .52));
    }

    function drawTrioCard(ctx) {
      const width = 1080;
      const height = 1440;
      const state = collectTrioState();
      const theme = currentCardTheme();
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, theme.bgStops[0]);
      bg.addColorStop(0.48, theme.bgStops[1]);
      bg.addColorStop(1, theme.bgStops[2]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,.3)";
      for (let x = 0; x <= width; x += 36) ctx.fillRect(x, 0, 1, height);
      for (let y = 0; y <= height; y += 36) ctx.fillRect(0, y, width, 1);
      strokeRound(ctx, 16, 16, width - 32, height - 32, 30, themeAlpha("line", .78), 3);
      strokeRound(ctx, 30, 30, width - 60, height - 60, 22, themeAlpha("dash", .42), 2, true);

      const listLeft = 62;
      const listTop = 58;
      const listRight = width - 62;
      const listBottom = height - 58;
      const gap = 30;
      const cellWidth = listRight - listLeft;
      const cellHeight = (listBottom - listTop - gap * 2) / 3;
      for (let index = 0; index < 3; index += 1) {
        const x = listLeft;
        const y = listTop + index * (cellHeight + gap);
        drawTrioCell(ctx, state, index, x, y, cellWidth, cellHeight);
      }

      ctx.save();
      ctx.fillStyle = themeAlpha("ink", .09);
      ctx.font = canvasFont('800', 12);
      ctx.textAlign = "right";
      ctx.fillText(UI_TRIO_WATERMARK, width - 54, height - 38);
      ctx.restore();
    }

    function drawTrioCell(ctx, state, index, x, y, w, h) {
      const theme = currentCardTheme();
      const cell = state.cells[index] || {};
      const radius = 26;

      const bgGrad = ctx.createLinearGradient(x, y, x + w, y + h);
      bgGrad.addColorStop(0, "rgba(255,255,255,.62)");
      bgGrad.addColorStop(1, "rgba(255,255,255,.28)");
      fillRound(ctx, x, y, w, h, radius, bgGrad);
      const washAccent = ctx.createRadialGradient(x + w * 0.07, y + h * 0.1, 0, x + w * 0.07, y + h * 0.1, h * 0.55);
      washAccent.addColorStop(0, themeAlpha("accent", .07));
      washAccent.addColorStop(1, "rgba(255,255,255,0)");
      fillRound(ctx, x, y, w, h, radius, washAccent);
      const washMint = ctx.createRadialGradient(x + w * 0.93, y + h * 0.9, 0, x + w * 0.93, y + h * 0.9, h * 0.5);
      washMint.addColorStop(0, themeAlpha("mint", .07));
      washMint.addColorStop(1, "rgba(255,255,255,0)");
      fillRound(ctx, x, y, w, h, radius, washMint);
      strokeRound(ctx, x, y, w, h, radius, themeAlpha("line", .6), 1);

      drawTrioFrameDeco(ctx, x, y + 13, w);
      drawTrioFrameDeco(ctx, x, y + h - 13, w);

      const coverX = x + 20;
      const coverW = 420;
      const coverH = 315;
      const coverY = y + (h - coverH) / 2;
      const coverRadius = 20;

      if (cell.cover) {
        fillRound(ctx, coverX, coverY, coverW, coverH, coverRadius, theme.coverBg);
        const imgElement = trioCellEditors[index] ? trioCellEditors[index].querySelector(".trio-cover img") : null;
        if (imgElement && imgElement.complete && imgElement.naturalWidth) {
          ctx.save();
          roundRect(ctx, coverX, coverY, coverW, coverH, coverRadius);
          ctx.clip();
          const iw = imgElement.naturalWidth;
          const ih = imgElement.naturalHeight;
          const fitMode = cell.coverFit === "contain" ? "contain" : "cover";
          const scale = fitMode === "contain" ? Math.min(coverW / iw, coverH / ih) : Math.max(coverW / iw, coverH / ih);
          const dw = iw * scale;
          const dh = ih * scale;
          ctx.drawImage(imgElement, coverX + (coverW - dw) / 2, coverY + (coverH - dh) / 2, dw, dh);
          ctx.restore();
        }
        ctx.save();
        ctx.shadowColor = "rgba(104,73,87,.13)";
        ctx.shadowBlur = 22;
        strokeRound(ctx, coverX, coverY, coverW, coverH, coverRadius, "rgba(255,255,255,.98)", 3);
        ctx.restore();
        strokeRound(ctx, coverX, coverY, coverW, coverH, coverRadius, themeAlpha("line", .78), 1);
      } else {
        fillRound(ctx, coverX, coverY, coverW, coverH, coverRadius, themeAlpha("coverBg", .52));
        strokeRound(ctx, coverX, coverY, coverW, coverH, coverRadius, themeAlpha("accent", .44), 2, true);
        ctx.save();
        ctx.fillStyle = theme.muted;
        ctx.font = canvasFont('900', 18);
        ctx.textAlign = "center";
        ctx.fillText(UI_TRIO_UPLOAD, coverX + coverW / 2, coverY + coverH / 2 + 6);
        ctx.textAlign = "left";
        ctx.restore();
      }

      const infoX = x + 20 + coverW + 24;
      const infoW = w - 20 - coverW - 24 - 20;
      const infoTop = coverY;
      const infoBottom = y + h - 13 - 30;
      const row1Baseline = infoTop + 22;
      const dividerY = infoTop + 36;
      const summaryTop = dividerY + 30;
      const summaryH = 46;
      const repoTop = summaryTop + summaryH + 30;
      const repoBottom = infoBottom;

      ctx.textAlign = "left";
      ctx.font = canvasFont('900', 24);
      const cvX = infoX + 22;
      const cvLabelW = ctx.measureText("CV").width;
      ctx.fillStyle = theme.accent;
      ctx.fillText("CV", cvX, row1Baseline);
      ctx.fillStyle = theme.ink;
      ctx.fillText(cell.cv || "", cvX + cvLabelW + 9, row1Baseline);

      const rjText = cell.rj || "";
      ctx.font = canvasFont('900', 22);
      ctx.textAlign = "right";
      ctx.fillStyle = theme.ink;
      ctx.fillText(rjText, infoX + infoW - 30, row1Baseline);
      ctx.textAlign = "left";

      ctx.save();
      ctx.strokeStyle = themeAlpha("accent", .3);
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.moveTo(infoX, dividerY + 0.5);
      ctx.lineTo(infoX + infoW - 20, dividerY + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      const summaryX = infoX;
      const summaryW = infoW - 20;
      const summaryGrad = ctx.createLinearGradient(summaryX, summaryTop, summaryX + summaryW, summaryTop);
      summaryGrad.addColorStop(0, themeAlpha("accent", .07));
      summaryGrad.addColorStop(1, themeAlpha("mint", .07));
      fillRound(ctx, summaryX, summaryTop, summaryW, summaryH, 14, summaryGrad);
      const summaryPadX = 22;
      const innerW = summaryW - summaryPadX * 2;
      const priceColW = innerW / 2.4;
      const ratingColX = summaryX + summaryPadX + priceColW + 16 - 1;
      const summaryBaseline = summaryTop + 30;

      ctx.font = canvasFont('900', 14);
      ctx.fillStyle = theme.muted;
      ctx.textAlign = "left";
      ctx.fillText(UI_TRIO_PRICE, summaryX + summaryPadX, summaryBaseline);
      const priceLabelW = ctx.measureText(UI_TRIO_PRICE).width;
      ctx.fillStyle = theme.accentDeep;
      ctx.font = canvasFont('900', 23);
      ctx.fillText("\u00a5", summaryX + summaryPadX + priceLabelW + 9, summaryBaseline + 1);
      const yenW = ctx.measureText("\u00a5").width;
      ctx.fillText(cell.price || "", summaryX + summaryPadX + priceLabelW + 9 + yenW + 5, summaryBaseline + 1);

      ctx.font = canvasFont('900', 14);
      ctx.fillStyle = theme.muted;
      ctx.fillText(UI_TRIO_RATING, ratingColX, summaryBaseline);
      const ratingLabelW = ctx.measureText(UI_TRIO_RATING).width;
      const starX = ratingColX + ratingLabelW + 9;
      const rating = Math.max(0, Math.min(5, Number(cell.rating) || 0));
      ctx.font = canvasFont('900', 25);
      for (let i = 0; i < 5; i += 1) {
        const starLeft = starX + i * 29;
        const starValue = i + 1;
        ctx.fillStyle = themeAlpha("accent", .26);
        ctx.fillText(STAR_CHAR, starLeft, summaryBaseline + 4);
        if (rating >= starValue - 0.5) {
          ctx.save();
          if (rating < starValue) {
            ctx.beginPath();
            ctx.rect(starLeft, summaryBaseline - 22, 14, 32);
            ctx.clip();
          }
          ctx.fillStyle = theme.accent;
          ctx.fillText(STAR_CHAR, starLeft, summaryBaseline + 4);
          ctx.restore();
        }
      }
      ctx.fillStyle = theme.accentDeep;
      ctx.font = canvasFont('900', 16);
      ctx.textAlign = "left";
      ctx.fillText(rating.toFixed(1), starX + 5 * 29 + 8, summaryBaseline + 2);
      ctx.textAlign = "left";

      const repoLeftX = infoX;
      const repoTextX = infoX + 22;
      ctx.fillStyle = themeAlpha("accent", .22);
      ctx.fillRect(repoLeftX, repoTop, 3, repoBottom - repoTop);
      ctx.fillStyle = themeAlpha("accentDeep", .5);
      ctx.font = canvasFont('900', 16);
      ctx.fillText("\u2661", repoLeftX + 6, repoTop + 18);
      ctx.fillStyle = themeAlpha("ink", .9);
      ctx.font = canvasFont('600', 20);
      drawWrappedText(ctx, cell.repo || "", repoTextX, repoTop + 18, infoW - 22 - 20, 31, 6);
    }

    trioImportAllButton?.addEventListener("click", importAllTrioCells);
    trioClearRepoButton?.addEventListener("click", () => {
      trioCellEditors.forEach((cell) => {
        cell.querySelector(".trio-repo-input").value = "";
      });
      saveState();
    });

    function bindTrioMobileFocus() {
      if (!trioCard) return;
      const areas = Array.from(trioCard.querySelectorAll(".trio-item"));
      areas.forEach((area) => {
        area.addEventListener("click", (event) => {
          if (!isMobileView() || currentTemplate() !== "trio") return;
          if (event.target.closest("button, input, textarea, select, .trio-cover")) return;
          if (mobileFocusTarget !== area) {
            event.preventDefault();
            event.stopPropagation();
            focusMobileArea(area);
          }
        }, true);
        area.addEventListener("focusin", () => {
          if (currentTemplate() !== "trio") return;
          focusMobileArea(area);
        });
      });
    }
    function bindGrid9MobileFocus() {
      const areas = Array.from(grid9Card.querySelectorAll(".grid9-header, .grid9-cell"));
      areas.forEach((area) => {
        area.addEventListener("click", (event) => {
          if (!isMobileView() || currentTemplate() !== "grid9") return;
          if (event.target.closest("button, input, textarea, select")) return;
          if (mobileFocusTarget !== area) {
            event.preventDefault();
            event.stopPropagation();
            focusMobileArea(area);
          }
        }, true);
        area.addEventListener("focusin", () => {
          if (currentTemplate() !== "grid9") return;
          focusMobileArea(area);
        });
      });
    }
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
    usageGuideButton?.addEventListener("click", () => { if (usageGuideModal) usageGuideModal.hidden = false; });
    mobileUsageGuideButton?.addEventListener("click", () => {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      if (usageGuideModal) usageGuideModal.hidden = false;
    });
    usageGuideCloseButton?.addEventListener("click", () => { if (usageGuideModal) usageGuideModal.hidden = true; });
    usageGuideModal?.addEventListener("click", (event) => {
      if (event.target === usageGuideModal) usageGuideModal.hidden = true;
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
    buildGrid9Cells();
    bindGrid9MobileFocus();
    buildQuickCells();
    bindQuickMobileFocus();
    buildTrioCells();
    bindTrioMobileFocus();
    restoreState();
    void migrateGrid9CoversToCompact();
    void migrateQuickCoversToCompact();
    void migrateTrioCoversToCompact();
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
