
    const mainNavButtons = Array.from(document.querySelectorAll(".main-nav-button"));
    const templateToolbar = document.getElementById("templateToolbar");
    const workspaceTitle = document.getElementById("workspaceTitle");
    const templateToolBlocks = Array.from(document.querySelectorAll("[data-template-tool]"));
    const mobileDataMenuButton = document.getElementById("mobileDataMenuButton");
    const mobileDataDropdown = document.getElementById("mobileDataDropdown");
    const mobileImportDataButton = document.getElementById("mobileImportDataButton");
    const mobileExportDataButton = document.getElementById("mobileExportDataButton");
    const mobileStorageManageButton = document.getElementById("mobileStorageManageButton");
    const stage = document.getElementById("stage");
    const imageToolPage = document.getElementById("imageToolPage");
    const collectionPage = document.getElementById("collectionPage");
    const collectionDetailPage = document.getElementById("collectionDetailPage");
    let confirmCollectionDetailLeave = null;
    const collectionMobileNewRecordButton = document.getElementById("collectionMobileNewRecordButton");
    const collectionMobileDataMenuButton = document.getElementById("collectionMobileDataMenuButton");
    const collectionMobileDataDropdown = document.getElementById("collectionMobileDataDropdown");
    const collectionMobileRjImportButton = document.getElementById("collectionMobileRjImportButton");
    const collectionMobileImportButton = document.getElementById("collectionMobileImportButton");
    const collectionMobileExportButton = document.getElementById("collectionMobileExportButton");
    const collectionMobileBatchAddButton = document.getElementById("collectionMobileBatchAddButton");
    const collectionMobileBatchManageButton = document.getElementById("collectionMobileBatchManageButton");
    const standaloneImageInput = document.getElementById("standaloneImageInput");
    const standaloneImageUploadButton = document.getElementById("standaloneImageUploadButton");
    const imageToolEmpty = document.getElementById("imageToolEmpty");
    const menuTabs = Array.from(document.querySelectorAll(".menu-tab"));
    const menuPanels = Array.from(document.querySelectorAll("[data-menu-panel]"));
    const card = document.getElementById("recordCard");
    const cvText = document.getElementById("cvText");
    const circleText = document.getElementById("circleText");
    const rjText = document.getElementById("rjText");
    const durationText = document.getElementById("durationText");
    const purchaseDateText = document.getElementById("purchaseDateText");
    const listenedDateText = document.getElementById("listenedDateText");
    const cardInfoField = document.getElementById("cardInfoField");
    const cardInfoType = document.getElementById("cardInfoType");
    const recordTitle = document.getElementById("recordTitle");
    const reviewText = document.getElementById("reviewText");
    const reviewCharacterCount = document.getElementById("reviewCharacterCount");
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
    const storageManageButton = document.getElementById("storageManageButton");
    const importDataInput = document.getElementById("importDataInput");
    const importButton = document.getElementById("importButton");
    const resetButton = document.getElementById("resetButton");
    const saveToCollectionButton = document.getElementById("saveToCollectionButton");
    const mobileSaveToCollectionButton = document.getElementById("mobileSaveToCollectionButton");
    const templateButtons = Array.from(document.querySelectorAll(".template-button"));
    const templateSwitch = document.querySelector(".template-switch");
    const themeBar = document.getElementById("themeBar");
    const themeButtons = Array.from(document.querySelectorAll(".theme-button"));
    const themePager = document.getElementById("themePager");
    const themePrevButton = document.getElementById("themePrevButton");
    const themeNextButton = document.getElementById("themeNextButton");
    const themePageText = document.getElementById("themePageText");
    const fontBar = document.getElementById("fontBar");
    const fontOptions = document.getElementById("fontOptions");
    const fontButtons = Array.from(document.querySelectorAll(".font-button"));
    const pickerNextArrow = document.getElementById("pickerNextArrow");
    const mobileFocusBack = document.getElementById("mobileFocusBack");
    const exportModal = document.getElementById("exportModal");
    const exportPreviewImage = document.getElementById("exportPreviewImage");
    const exportHint = document.getElementById("exportHint");
    const modalDownloadButton = document.getElementById("modalDownloadButton");
    const modalCloseButton = document.getElementById("modalCloseButton");
    const exportPagePager = document.getElementById("exportPagePager");
    const exportPrevPage = document.getElementById("exportPrevPage");
    const exportNextPage = document.getElementById("exportNextPage");
    const exportPageCount = document.getElementById("exportPageCount");
    const fullContinuationCard = document.getElementById("fullContinuationCard");
    const fullContinuationCover = document.getElementById("fullContinuationCover");
    const fullContinuationTitle = document.getElementById("fullContinuationTitle");
    const fullContinuationCv = document.getElementById("fullContinuationCv");
    const fullContinuationRj = document.getElementById("fullContinuationRj");
    const fullContinuationReview = document.getElementById("fullContinuationReview");
    const fullContinuationReviewCharacterCount = document.getElementById("fullContinuationReviewCharacterCount");
    const fullContinuationPageNumber = document.getElementById("fullContinuationPageNumber");
    const compactContinuationCard = document.getElementById("compactContinuationCard");
    const compactContinuationTitle = document.getElementById("compactContinuationTitle");
    const compactContinuationCv = document.getElementById("compactContinuationCv");
    const compactContinuationRj = document.getElementById("compactContinuationRj");
    const compactContinuationReview = document.getElementById("compactContinuationReview");
    const compactContinuationReviewCharacterCount = document.getElementById("compactContinuationReviewCharacterCount");
    const compactContinuationPageNumber = document.getElementById("compactContinuationPageNumber");
    const templatePageControls = document.getElementById("templatePageControls");
    const templatePrevPage = document.getElementById("templatePrevPage");
    const templateNextPage = document.getElementById("templateNextPage");
    const templatePageCount = document.getElementById("templatePageCount");
    const templatePageCountText = document.getElementById("templatePageCountText");
    const templatePageMenu = document.getElementById("templatePageMenu");
    const templateAddPage = document.getElementById("templateAddPage");
    const templateDeletePage = document.getElementById("templateDeletePage");
    const reviewEditModal = document.getElementById("reviewEditModal");
    const reviewEditTitle = document.getElementById("reviewEditTitle");
    const reviewEditLineStatus = document.getElementById("reviewEditLineStatus");
    const reviewEditArea = document.getElementById("reviewEditArea");
    const reviewEditPreview = document.getElementById("reviewEditPreview");
    const reviewEditConfirm = document.getElementById("reviewEditConfirm");
    const reviewPreviewToolbar = document.getElementById("reviewPreviewToolbar");
    const reviewPreviewContinue = document.getElementById("reviewPreviewContinue");
    const reviewPreviewDone = document.getElementById("reviewPreviewDone");
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
    const updateLogButton = document.getElementById("updateLogButton");
    const mobileUpdateLogButton = document.getElementById("mobileUpdateLogButton");
    const updateLogModal = document.getElementById("updateLogModal");
    const updateLogCloseButton = document.getElementById("updateLogCloseButton");
    const appDialogModal = document.getElementById("appDialogModal");
    const appDialogTitle = document.getElementById("appDialogTitle");
    const appDialogMessage = document.getElementById("appDialogMessage");
    const appDialogScrollHint = document.getElementById("appDialogScrollHint");
    const appDialogLinkButton = document.getElementById("appDialogLinkButton");
    const appDialogCancelButton = document.getElementById("appDialogCancelButton");
    const appDialogConfirmButton = document.getElementById("appDialogConfirmButton");

    const imageEditCanvas = document.getElementById("imageEditCanvas");
    const imageToolMosaic = document.getElementById("imageToolMosaic");
    const imageToolBlur = document.getElementById("imageToolBlur");
    const imageToolWhiteFog = document.getElementById("imageToolWhiteFog");
    const imageToolErase = document.getElementById("imageToolErase");
    const imageToolSelect = document.getElementById("imageToolSelect");
    const brushSize = document.getElementById("brushSize");
    const imageUndoButton = document.getElementById("imageUndoButton");
    const imageRedoButton = document.getElementById("imageRedoButton");
    const imageClearButton = document.getElementById("imageClearButton");
    const imageDoneButton = document.getElementById("imageDoneButton");
    const imageCancelButton = document.getElementById("imageCancelButton");
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
    const grid9TitlePlaceholder = document.querySelector(".grid9-title-placeholder");

    const templateGraphemeSegmenter = typeof Intl !== "undefined" && typeof Intl.Segmenter === "function"
      ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
      : null;

    const measuredTextCanvas = document.createElement("canvas");

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
    }
    function limitGrid9Text(node, maxLength) {
      const singleLineText = String(node.innerText || node.textContent || "").replace(/\r\n?|\n/g, " ");
      const chars = wrappingCharacters(singleLineText);
      const lengthLimited = chars.slice(0, maxLength).join("");
      const limited = limitedByMeasuredLines(lengthLimited, node, 900, 1);
      const plainTextOnly = node.childNodes.length <= 1 && (!node.firstChild || node.firstChild.nodeType === Node.TEXT_NODE);
      if (limited === node.textContent && plainTextOnly) return;
      node.textContent = limited;
    }
    updateGrid9EmptyClass();
    const GRID9_TITLE_STYLE_STORAGE_KEY = "otome-record-card-grid9-title-style-v1";
    const GRID9_TITLE_TEXT_STORAGE_KEY = "otome-record-card-grid9-title-v1";
    const grid9Composing = new WeakSet();
    function saveGrid9Text(node, storageKey) {
      localStorage.setItem(storageKey, node.textContent.trim());
    }
    function bindGrid9TextInput(node, maxLength, storageKey) {
      node.addEventListener("compositionstart", () => grid9Composing.add(node));
      node.addEventListener("compositionend", () => {
        grid9Composing.delete(node);
        limitGrid9Text(node, maxLength);
        saveGrid9Text(node, storageKey);
      });
      node.addEventListener("input", () => {
        if (!grid9Composing.has(node)) limitGrid9Text(node, maxLength);
        saveGrid9Text(node, storageKey);
      });
    }
    bindGrid9TextInput(grid9TitleText, 15, GRID9_TITLE_TEXT_STORAGE_KEY);
    grid9TitleText.addEventListener("keydown", (event) => {
      if (event.key === "Enter") event.preventDefault();
    });
    grid9TitleText.addEventListener("blur", updateGrid9EmptyClass);
    const grid9ShowNumbers = document.getElementById("grid9ShowNumbers");
    const grid9ShowRj = document.getElementById("grid9ShowRj");
    const grid9TitleStyleButtons = Array.from(document.querySelectorAll("[data-title-style]"));
    const grid9Cells = document.getElementById("grid9Cells");
    const grid9ExternalTools = document.getElementById("grid9ExternalTools");
    const grid9ImportAllButton = document.getElementById("grid9ImportAllButton");
    const grid9BatchRjButton = document.getElementById("grid9BatchRjButton");
    const grid9PresetButton = document.getElementById("grid9PresetButton");
    const grid9PresetMenu = document.getElementById("grid9PresetMenu");
    const grid9ClearRepoButton = document.getElementById("grid9ClearRepoButton");
    let grid9CellEditors = [];
    let activeGrid9Index = -1;
    let grid9TitleStyle = "cream";

    function updateGrid9TitleStyle() {
      const isOffset = grid9TitleStyle === "offset";
      const isChip = grid9TitleStyle === "chip";
      const isSplit = grid9TitleStyle === "split";
      const isFrost = grid9TitleStyle === "frost";
      grid9Card.classList.toggle("grid9-title-offset", isOffset);
      grid9Card.classList.toggle("grid9-title-chip", isChip);
      grid9Card.classList.toggle("grid9-title-split", isSplit);
      grid9Card.classList.toggle("grid9-title-frost", isFrost);
      limitGrid9Text(grid9TitleText, 15);
      grid9TitleStyleButtons.forEach((button) => {
        const selected = button.dataset.titleStyle === grid9TitleStyle;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
    }
    grid9TitleStyleButtons.forEach((button) => button.addEventListener("click", () => {
      grid9TitleStyle = ["offset", "chip", "split", "frost"].includes(button.dataset.titleStyle) ? button.dataset.titleStyle : "cream";
      updateGrid9TitleStyle();
      localStorage.setItem(GRID9_TITLE_STYLE_STORAGE_KEY, grid9TitleStyle);
      saveState();
    }));
    updateGrid9TitleStyle();
    const quickCard = document.getElementById("quickCard");
    const quickCells = document.getElementById("quickCells");
    const quickExternalTools = document.getElementById("quickExternalTools");
    const quickShowRjButton = document.getElementById("quickShowRjButton");
    const quickImportAllButton = document.getElementById("quickImportAllButton");
    const quickBatchRjButton = document.getElementById("quickBatchRjButton");
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
    const STATE_STORAGE_MODE_KEY = "otome-record-card-storage-mode-v1";
    const STATE_STORAGE_MODE_INDEXED_DB = "indexeddb";
    const STATE_DB_NAME = "otome-record-card-state-v1";
    const STATE_DB_VERSION = 3;
    const STATE_DB_STORE = "state";
    const STATE_DB_KEY = "current";
    const STATE_DB_SETTINGS_STORE = "settings";
    const STATE_DB_EDITOR_STORE = "editor-projects";
    const STORAGE_SCHEMA_VERSION = 2;
    const IMAGE_DB_NAME = "otome-record-card-images-v1";
    const IMAGE_DB_VERSION = 3;
    const IMAGE_DB_STORE = "images";
    const IMAGE_DB_META_STORE = "image-meta";
    const STATE_IMAGE_REFERENCE_PREFIX = "idb-image-v1:";
    const STORED_IMAGE_GC_GRACE_MS = 24 * 60 * 60 * 1000;
    const SINGLE_COVER_MAX_SIDE = 1200;
    const COVER_JPEG_QUALITY = 0.85;
    const AUTO_SAVE_FAILURE_SESSION_KEY = "otome-record-card-auto-save-failure-warned-v1";
    const MENU_STORAGE_KEY = "otome-record-card-active-menu";
    const MAIN_PAGE_STORAGE_KEY = "otome-record-card-main-page";
    const COMPACT_CONTINUATION_STORAGE_KEY = "otome-record-card-compact-continuation-v1";
    const DLSITE_PROXY_URL = "https://dlsite-rj-import.shuiyingsheng.workers.dev/";
    const DLSITE_PROXY_CACHE_VERSION = "20260816-bj2";
    const DEFAULT_THEME_ID = "matcha-berry-cheese";
    const TEMPLATE_FONT_PREFERENCES_KEY = "otome-record-card-template-fonts-v1";
    const DEFAULT_TEMPLATE_FONT_ID = "default";
    const TEMPLATE_IDS = Object.freeze(["full", "compact", "grid9", "quick", "trio"]);
    const TEMPLATE_FONT_TEST_TEXT = String.fromCharCode(
      0x4e59, 0x97f3, 0x8bb0, 0x5f55, 0x4e2d, 0x6587, 0x6d4b, 0x8bd5,
      0x3053, 0x306e, 0x4f5c, 0x54c1, 0x304c, 0x597d, 0x304d, 0x3067, 0x3059
    );
    const TEMPLATE_FONTS = Object.freeze({
      default: Object.freeze({
        family: "BlackSugarPlumCandy",
        url: "./font/black-sugar-plum-candy.woff2",
        format: "woff2",
        weight: "400 950"
      }),
      "yomeng-script": Object.freeze({
        family: "OtomeTemplateYomengScript",
        url: "./font/yomeng-script.woff2",
        format: "woff2",
        weight: "400"
      }),
      "keinan-pop": Object.freeze({
        family: "OtomeTemplateKeinanPop",
        url: "./font/keinan-pop.woff2",
        format: "woff2",
        weight: "400 950"
      }),
      "moon-stars-kai": Object.freeze({
        family: "OtomeTemplateMoonStarsKai",
        url: "./font/moon-stars-kai-bold.woff2",
        format: "woff2",
        weight: "400 950"
      }),
      "chill-round": Object.freeze({
        family: "OtomeTemplateChillRound",
        url: "./font/chill-round-m.woff2",
        format: "woff2",
        weight: "400 950"
      })
    });
    const TEMPLATE_FONT_FALLBACK = '"BlackSugarPlumCandy", "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", Arial, sans-serif';
    const templateFontLoadPromises = new Map();
    let templateFontPreferences = loadTemplateFontPreferences();
    let pendingTemplateFontId = "";
    const IS_USAGE_TRACKING_PRODUCTION = window.location.hostname === "mitsuro666.github.io"
      && window.location.pathname.startsWith("/repo/");
    const TEMPLATE_USAGE_LABELS = Object.freeze({
      full: String.fromCharCode(0x5b8c, 0x6574, 0x7248),
      compact: String.fromCharCode(0x7b80, 0x7565, 0x7248),
      grid9: String.fromCharCode(0x4e5d, 0x5bab, 0x683c),
      quick: String.fromCharCode(0x901f, 0x8bc4, 0x7248),
      trio: String.fromCharCode(0x4e09, 0x5bab, 0x683c)
    });
    const FONT_USAGE_LABELS = Object.freeze({
      default: String.fromCharCode(0x9ed1, 0x7cd6, 0x8bdd, 0x6885),
      "yomeng-script": "Yomeng Script",
      "keinan-pop": String.fromCharCode(0x8346, 0x5357, 0x5706, 0x4f53),
      "moon-stars-kai": "Moon Stars Kai Bold",
      "chill-round": "Chill Round M"
    });
    const THEME_USAGE_LABELS = Object.freeze({
      "matcha-berry-cheese": String.fromCharCode(0x62b9, 0x8336, 0x8393, 0x916a),
      "sakura-ice": String.fromCharCode(0x6a31, 0x82b1, 0x661f, 0x51b0),
      "dirty-berry-coffee": String.fromCharCode(0x810f, 0x810f, 0x8393, 0x5496),
      "afternoon-jewel": String.fromCharCode(0x5348, 0x540e, 0x5b9d, 0x77f3),
      "moon-shards": String.fromCharCode(0x6708, 0x5149, 0x788e, 0x7247),
      "mint-bubble": String.fromCharCode(0x8584, 0x8377, 0x6c14, 0x6ce1),
      "glass-glimmer": String.fromCharCode(0x73bb, 0x7483, 0x5fae, 0x5149),
      "madder-melt": String.fromCharCode(0x6eb6, 0x4e8e, 0x831c, 0x8272),
      "ultramarine-sleep": String.fromCharCode(0x7fa4, 0x9752, 0x6c89, 0x7720),
      "apricot-souffle": String.fromCharCode(0x674f, 0x6843, 0x8212, 0x8299),
      "rui-dream-weave": String.fromCharCode(0x82ae, 0x82ae, 0x7ec7, 0x68a6),
      "willow-bank-spring-breeze": String.fromCharCode(0x67f3, 0x5cb8, 0x6625, 0x98ce),
      "bamboo-shadow-breeze": String.fromCharCode(0x7af9, 0x5f71, 0x6e05, 0x98ce),
      "dream-rainbow": String.fromCharCode(0x68a6, 0x5883, 0x5f69, 0x8679),
      "cherry-fall-peach-crisp": String.fromCharCode(0x6a31, 0x843d, 0x6843, 0x9165),
      "berry-whisper-purple": String.fromCharCode(0x8393, 0x8bed, 0x8f7b, 0x7d2b),
      "apple-fragrance-green": String.fromCharCode(0x679c, 0x9999, 0x9752, 0x82f9),
      "sweet-peach-hazelnut": String.fromCharCode(0x751c, 0x6843, 0x699b, 0x679c),
      "deep-red-tranquility": String.fromCharCode(0x6df1, 0x7ea2, 0x9759, 0x8c27),
      "sea-breeze-tuning": String.fromCharCode(0x6f6e, 0x98ce, 0x8c03, 0x97f3)
    });
    const USAGE_EVENT_TITLES = (() => {
      const titles = Object.create(null);
      const exportTemplatePrefix = String.fromCharCode(0x5bfc, 0x51fa, 0x6a21, 0x677f, 0xff5c);
      const exportThemePrefix = String.fromCharCode(0x5bfc, 0x51fa, 0x8272, 0x5361, 0xff5c);
      const exportFontPrefix = String.fromCharCode(0x5bfc, 0x51fa, 0x5b57, 0x4f53, 0xff5c);
      const featureUsagePrefix = String.fromCharCode(0x529f, 0x80fd, 0x4f7f, 0x7528, 0xff5c);
      Object.entries(TEMPLATE_USAGE_LABELS).forEach(([templateId, templateLabel]) => {
        titles["export-template-" + templateId] = exportTemplatePrefix + templateLabel;
      });
      Object.entries(THEME_USAGE_LABELS).forEach(([themeId, themeLabel]) => {
        titles["export-theme-" + themeId] = exportThemePrefix + themeLabel;
      });
      Object.entries(FONT_USAGE_LABELS).forEach(([fontId, fontLabel]) => {
        titles["export-font-" + fontId] = exportFontPrefix + fontLabel;
      });
      titles["feature-rj-import-success"] = String.fromCharCode(0x529f, 0x80fd, 0x4f7f, 0x7528, 0xff5c, 0x52, 0x4a, 0x5bfc, 0x5165, 0x6210, 0x529f);
      titles["feature-open-collection"] = String.fromCharCode(0x529f, 0x80fd, 0x4f7f, 0x7528, 0xff5c, 0x6211, 0x7684, 0x6536, 0x85cf);
      titles["feature-open-feedback"] = String.fromCharCode(0x529f, 0x80fd, 0x4f7f, 0x7528, 0xff5c, 0x53cd, 0x9988, 0x5efa, 0x8bae);
      titles["feature-batch-rj-add-success"] = featureUsagePrefix + String.fromCharCode(0x6536, 0x85cf, 0x6279, 0x91cf, 0x65b0, 0x589e, 0x6210, 0x529f);
      titles["feature-template-batch-rj-fill-grid9-success"] = featureUsagePrefix + String.fromCharCode(0x4e5d, 0x5bab, 0x683c, 0x6279, 0x91cf, 0x586b, 0x5199, 0x52, 0x4a, 0x6210, 0x529f);
      titles["feature-template-batch-rj-fill-quick-success"] = featureUsagePrefix + String.fromCharCode(0x901f, 0x8bc4, 0x7248, 0x6279, 0x91cf, 0x586b, 0x5199, 0x52, 0x4a, 0x6210, 0x529f);
      titles["feature-import-from-collection-success"] = featureUsagePrefix + String.fromCharCode(0x4ece, 0x6536, 0x85cf, 0x5bfc, 0x5165, 0x6a21, 0x677f, 0x6210, 0x529f);
      titles["feature-save-to-collection-success"] = featureUsagePrefix + String.fromCharCode(0x5b58, 0x5165, 0x6536, 0x85cf, 0x6210, 0x529f);
      titles["feature-collection-batch-tag-add-success"] = featureUsagePrefix + String.fromCharCode(0x6536, 0x85cf, 0x6279, 0x91cf, 0x589e, 0x52a0, 0x6807, 0x7b7e, 0x6210, 0x529f);
      titles["feature-collection-batch-tag-remove-success"] = featureUsagePrefix + String.fromCharCode(0x6536, 0x85cf, 0x6279, 0x91cf, 0x79fb, 0x9664, 0x6807, 0x7b7e, 0x6210, 0x529f);
      titles["feature-collection-batch-delete-success"] = featureUsagePrefix + String.fromCharCode(0x6536, 0x85cf, 0x6279, 0x91cf, 0x5220, 0x9664, 0x6210, 0x529f);
      titles["feature-open-dlsite"] = featureUsagePrefix + String.fromCharCode(0x6253, 0x5f00, 0x44, 0x4c, 0x73, 0x69, 0x74, 0x65, 0x9875, 0x9762);
      titles["feature-collection-backup-export-success"] = featureUsagePrefix + String.fromCharCode(0x5bfc, 0x51fa, 0x6536, 0x85cf, 0x5907, 0x4efd, 0x6210, 0x529f);
      titles["feature-collection-backup-import-success"] = featureUsagePrefix + String.fromCharCode(0x5bfc, 0x5165, 0x6536, 0x85cf, 0x5907, 0x4efd, 0x6210, 0x529f);
      titles["feature-template-data-export-success"] = featureUsagePrefix + String.fromCharCode(0x5bfc, 0x51fa, 0x6a21, 0x677f, 0x6570, 0x636e, 0x6210, 0x529f);
      titles["feature-template-data-import-success"] = featureUsagePrefix + String.fromCharCode(0x5bfc, 0x5165, 0x6a21, 0x677f, 0x6570, 0x636e, 0x6210, 0x529f);
      titles["feature-open-storage-management"] = featureUsagePrefix + String.fromCharCode(0x6253, 0x5f00, 0x5b58, 0x50a8, 0x7ba1, 0x7406);
      titles["feature-image-editor-done"] = featureUsagePrefix + String.fromCharCode(0x5b8c, 0x6210, 0x56fe, 0x7247, 0x7f16, 0x8f91);
      titles["feature-image-editor-standalone-done"] = featureUsagePrefix + String.fromCharCode(0x5b8c, 0x6210, 0x72ec, 0x7acb, 0x4fee, 0x56fe, 0x5bfc, 0x51fa);
      titles["feature-open-update-log"] = featureUsagePrefix + String.fromCharCode(0x6253, 0x5f00, 0x66f4, 0x65b0, 0x516c, 0x544a);
      titles["feature-mobile-review-focus-editor"] = featureUsagePrefix + String.fromCharCode(0x4f7f, 0x7528, 0x624b, 0x673a, 0x8bc4, 0x4ef7, 0x4e13, 0x6ce8, 0x7f16, 0x8f91);
      titles["feature-continuation-page-added"] = featureUsagePrefix + String.fromCharCode(0x6dfb, 0x52a0, 0x7eed, 0x9875);
      titles["feature-open-image-tool"] = featureUsagePrefix + String.fromCharCode(0x6253, 0x5f00, 0x4fee, 0x56fe, 0x5de5, 0x5177);
      titles["feature-open-usage-guide"] = featureUsagePrefix + String.fromCharCode(0x6253, 0x5f00, 0x4f7f, 0x7528, 0x8bf4, 0x660e);
      titles["feature-open-about"] = featureUsagePrefix + String.fromCharCode(0x6253, 0x5f00, 0x5173, 0x4e8e, 0x672c, 0x7ad9);
      return Object.freeze(titles);
    })();

    function trackUsageEvent(eventName, title) {
      if (!IS_USAGE_TRACKING_PRODUCTION || !Object.prototype.hasOwnProperty.call(USAGE_EVENT_TITLES, eventName) || USAGE_EVENT_TITLES[eventName] !== title) return;
      if (typeof window.goatcounter?.count !== "function") return;
      try {
        window.goatcounter.count({ path: eventName, title, event: true, no_session: true, referrer: "" });
      } catch (_) {
        // Usage statistics must never affect the local-first application flow.
      }
    }

    function trackFixedUsageEvent(eventName) {
      trackUsageEvent(eventName, USAGE_EVENT_TITLES[eventName]);
    }

    function trackSuccessfulExport(templateId, themeId) {
      if (!Object.prototype.hasOwnProperty.call(TEMPLATE_USAGE_LABELS, templateId)
        || !Object.prototype.hasOwnProperty.call(THEME_USAGE_LABELS, themeId)) return;
      const fontId = templateFontId(templateId);
      trackFixedUsageEvent("export-template-" + templateId);
      trackFixedUsageEvent("export-theme-" + themeId);
      if (Object.prototype.hasOwnProperty.call(FONT_USAGE_LABELS, fontId)) {
        trackFixedUsageEvent("export-font-" + fontId);
      }
    }
    const FULL_CV_LINE_WIDTH = 8;
    const FULL_CIRCLE_LINE_WIDTH = 8;
    const COMPACT_CV_CIRCLE_LINE_WIDTH = 7;
    const TWO_LINE_FIELD_MAX_LINES = 2;
    const CARD_INFO_TYPES = new Set(["duration", "purchaseDate", "listenedDate", "hidden"]);
    function normalizeCardInfoType(value) {
      return CARD_INFO_TYPES.has(value) ? value : "duration";
    }
    function normalizeCardDateValue(value) {
      const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
      if (digits.length <= 4) return digits;
      if (digits.length <= 6) return digits.slice(0, 4) + "-" + digits.slice(4);
      return digits.slice(0, 4) + "-" + digits.slice(4, 6) + "-" + digits.slice(6);
    }
    function syncCardInfoField() {
      const nextType = normalizeCardInfoType(cardInfoType.value);
      cardInfoType.value = nextType;
      cardInfoField.dataset.infoType = nextType;
      durationText.hidden = nextType !== "duration";
      purchaseDateText.hidden = nextType !== "purchaseDate";
      listenedDateText.hidden = nextType !== "listenedDate";
    }
    const FULL_FIELD_MAX_WIDTHS = new Map([
      [cvText, FULL_CV_LINE_WIDTH * TWO_LINE_FIELD_MAX_LINES],
      [circleText, FULL_CIRCLE_LINE_WIDTH * TWO_LINE_FIELD_MAX_LINES],
      [rjText, 6],
      [durationText, 8],
      [recordTitle, 68]
    ]);
    const COMPACT_FIELD_MAX_LENGTHS = new Map([
      [recordTitle, 78],
      [rjText, 12]
    ]);
    const FULL_REVIEW_MAX_WIDTH = 407;
    const FULL_REVIEW_LINE_WIDTH = 904;
    const FULL_REVIEW_MAX_LINES = 11;
    const FULL_CONTINUATION_REVIEW_WIDTH = 904;
    const FULL_CONTINUATION_REVIEW_MAX_LINES = 34;
    const COMPACT_CONTINUATION_COLUMN_WIDTH = 237;
    const COMPACT_CONTINUATION_LINES_PER_COLUMN = 20;
    const REVIEW_CHARACTER_LIMIT_SAMPLE_LENGTH = 4096;
    const GRID9_REVIEW_LINE_WIDTH = (1080 - 58 * 2 - 18 * 2) / 3 - 19;
    const GRID9_REVIEW_MAX_LINES = 4;
    let stateRestoreComplete = false;
    let stateUsesIndexedDb = localStorage.getItem(STATE_STORAGE_MODE_KEY) === STATE_STORAGE_MODE_INDEXED_DB;
    let stateSaveQueue = Promise.resolve(true);
    const storedImageReferenceByDataUrl = new Map();
    const storedImageDataUrlByReference = new Map();
    const storedImageReferencePromiseByDataUrl = new Map();
    const storedImageDataUrlPromiseByReference = new Map();
    let storedImageRestoreWarned = false;
    let lastPersistedStoredState = null;
    let storedImageGcTimer = 0;
    let collectionStorageReadyForGc = false;
    let collectionStoredImageReferencesReader = async () => [];
    const CARD_THEMES = {
      "matcha-berry-cheese": {
        id: "matcha-berry-cheese",
        accent: "#f4abb9",
        accentDeep: "#b84f78",
        line: "#fec9d4",
        lineSoftAlpha: .56,
        dash: "#9bc4b2",
        dashAlpha: .62,
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
        lineSoftAlpha: .58,
        dash: "#b0ddfe",
        dashAlpha: .6,
        mint: "#b0ddfe",
        ink: "#55415c",
        muted: "#91758a",
        coverBg: "#ffe5f9",
        chipBg: "rgba(255,229,249,.78)",
        panelBg: "#ffffff",
        reviewBg: "#ffffff",
        bgStops: ["#fff7fb", "#fffdfd", "#f4fbff"],
        playDeep: "#8f78df",
        starFill: "#8f78df",
        compactProgress: ["rgba(176, 221, 254, 0.95)", "rgba(183, 182, 255, 0.92)"],
        compactProgressDot: "rgba(176, 221, 254, 0.95)"
      },
      "dirty-berry-coffee": {
        id: "dirty-berry-coffee",
        accent: "#e59a9b",
        accentDeep: "#6d6975",
        line: "#ffb4a1",
        lineSoftAlpha: .5,
        dash: "#6d6975",
        dashAlpha: .38,
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
        lineSoftAlpha: .64,
        dash: "#e5e0cd",
        dashAlpha: .78,
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
        lineSoftAlpha: .66,
        dash: "#f1d77f",
        dashAlpha: .64,
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
        lineSoftAlpha: .66,
        dash: "#bcf1e0",
        dashAlpha: .82,
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
        lineSoftAlpha: .68,
        dash: "#a6b7dd",
        dashAlpha: .62,
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
        lineSoftAlpha: .68,
        dash: "#b3beaf",
        dashAlpha: .72,
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
        lineSoftAlpha: .56,
        dash: "#005185",
        dashAlpha: .34,
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
        lineSoftAlpha: .64,
        dash: "#ffdd8f",
        dashAlpha: .78,
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
      },
      "rui-dream-weave": {
        id: "rui-dream-weave",
        accent: "#fbafaf",
        accentDeep: "#cb777d",
        line: "#f2c6b4",
        lineSoftAlpha: .68,
        dash: "#99e1e5",
        dashAlpha: .72,
        mint: "#99e1e5",
        ink: "#6d5258",
        muted: "#94777a",
        coverBg: "#f3e8cb",
        chipBg: "rgba(243,232,203,.78)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fff7f7", "#fffdf8", "#f4fcfc"],
        playDeep: "#cb777d",
        starFill: "#cb777d"
      },
      "willow-bank-spring-breeze": {
        id: "willow-bank-spring-breeze",
        accent: "#b3e55e",
        accentDeep: "#51af5b",
        line: "#b3e55e",
        lineSoftAlpha: .66,
        dash: "#fae76c",
        dashAlpha: .76,
        mint: "#51af5b",
        ink: "#356b3d",
        muted: "#648266",
        coverBg: "#f7ffa3",
        chipBg: "rgba(247,255,163,.72)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fbfff1", "#fefff8", "#f4fbe9"],
        playDeep: "#51af5b",
        starFill: "#51af5b"
      },
      "bamboo-shadow-breeze": {
        id: "bamboo-shadow-breeze",
        accent: "#79bd8f",
        accentDeep: "#00a388",
        line: "#beeb9f",
        lineSoftAlpha: .68,
        dash: "#00a388",
        dashAlpha: .58,
        mint: "#00a388",
        ink: "#285f55",
        muted: "#5d8375",
        coverBg: "#beeb9f",
        chipBg: "rgba(255,255,157,.68)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#f4fcf5", "#fbfff8", "#eefaf6"],
        playDeep: "#00a388",
        starFill: "#00a388"
      },
      "dream-rainbow": {
        id: "dream-rainbow",
        accent: "#ffa8a8",
        accentDeep: "#aa78cb",
        line: "#ffc4a3",
        lineSoftAlpha: .68,
        dash: "#ffe5a1",
        dashAlpha: .8,
        mint: "#d8c2f9",
        ink: "#69546f",
        muted: "#8b758f",
        coverBg: "#d8c2f9",
        chipBg: "rgba(255,229,161,.7)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fff7f7", "#fffaf4", "#faf6ff"],
        playDeep: "#aa78cb",
        starFill: "#aa78cb"
      },
      "cherry-fall-peach-crisp": {
        id: "cherry-fall-peach-crisp",
        accent: "#ff78ae",
        accentDeep: "#f54291",
        line: "#ffa0d2",
        lineSoftAlpha: 0.66,
        dash: "#ffdbf2",
        dashAlpha: 0.8,
        mint: "#ffa0d2",
        ink: "#704257",
        muted: "#987081",
        coverBg: "#ffdbf2",
        chipBg: "rgba(255,160,210,.68)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fff5fb", "#fffafd", "#fff2f7"],
        playDeep: "#f54291",
        starFill: "#f54291"
      },
      "berry-whisper-purple": {
        id: "berry-whisper-purple",
        accent: "#b94e8a",
        accentDeep: "#7d156d",
        line: "#d87ca1",
        lineSoftAlpha: 0.66,
        dash: "#ffd7f1",
        dashAlpha: 0.78,
        mint: "#d87ca1",
        ink: "#572749",
        muted: "#815a72",
        coverBg: "#ffd7f1",
        chipBg: "rgba(216,124,161,.52)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fff5fb", "#fdf8fb", "#faf2f7"],
        playDeep: "#7d156d",
        starFill: "#7d156d"
      },
      "apple-fragrance-green": {
        id: "apple-fragrance-green",
        accent: "#f46060",
        accentDeep: "#c84549",
        line: "#ffa781",
        lineSoftAlpha: 0.68,
        dash: "#bbdc2f",
        dashAlpha: 0.65,
        mint: "#bbdc2f",
        ink: "#6a3f3b",
        muted: "#956a5c",
        coverBg: "#ffecbb",
        chipBg: "rgba(187,220,47,.55)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fff7f3", "#fffdf5", "#f9fce9"],
        playDeep: "#c84549",
        starFill: "#c84549"
      },
      "sweet-peach-hazelnut": {
        id: "sweet-peach-hazelnut",
        accent: "#dda4b4",
        accentDeep: "#7c5549",
        line: "#78a5ce",
        lineSoftAlpha: 0.68,
        dash: "#7c5549",
        dashAlpha: 0.5,
        mint: "#fff0d9",
        ink: "#7c5549",
        muted: "#96756f",
        coverBg: "#fff0d9",
        chipBg: "rgba(221,164,180,.58)",
        panelBg: "rgba(255,255,255,.64)",
        reviewBg: "rgba(255,255,255,.64)",
        bgStops: ["#fff7f4", "#fffaf1", "#f7f9fc"],
        playDeep: "#7c5549",
        starFill: "#7c5549"
      },
      "deep-red-tranquility": {
        id: "deep-red-tranquility",
        accent: "#971c1e",
        accentDeep: "#561918",
        line: "#ada194",
        lineSoftAlpha: 0.7,
        dash: "#561918",
        dashAlpha: 0.64,
        mint: "#dcd9d4",
        ink: "#161718",
        muted: "#561918",
        coverBg: "#dcd9d4",
        chipBg: "rgba(173,161,148,.62)",
        panelBg: "rgba(255,255,255,.68)",
        reviewBg: "rgba(255,255,255,.68)",
        bgStops: ["#f8f6f5", "#fcfbfa", "#f2efed"],
        playDeep: "#561918",
        starFill: "#971c1e"
      },
      "sea-breeze-tuning": {
        id: "sea-breeze-tuning",
        accent: "#599db5",
        accentDeep: "#396b8d",
        line: "#b0b57f",
        lineSoftAlpha: 0.68,
        dash: "#5e6b49",
        dashAlpha: 0.62,
        mint: "#c6d1cd",
        ink: "#396b8d",
        muted: "#5e6b49",
        coverBg: "#c6d1cd",
        chipBg: "rgba(176,181,127,.56)",
        panelBg: "rgba(255,255,255,.66)",
        reviewBg: "rgba(255,255,255,.66)",
        bgStops: ["#f3f8f9", "#f7f8f1", "#edf3f2"],
        playDeep: "#396b8d",
        starFill: "#396b8d"
      }
    };
    let currentThemeId = DEFAULT_THEME_ID;
    let themePageIndex = 0;
    let mobileFocusTarget = null;
    let reviewFocusSessionActive = false;
    let reviewEditorSelectionStart = 0;
    let reviewEditorSelectionEnd = 0;
    let reviewEditorScrollTop = 0;
    let reviewEditorAppScrollTop = 0;
    let reviewViewportFrame = 0;
    let lastExportUrl = "";
    let lastExportFileName = "record-card.png";
    let lastExportPages = [];
    let exportPageIndex = 0;
    const continuationState = {
      full: { current: 0, pages: [] },
      compact: { current: 0, pages: [] }
    };
    let currentDiscountManual = false;
    let reviewChineseCharacterLimits = null;
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
    let coverWhiteFogMaskSrc = "";
    let coverEditorUndoStack = [];
    let coverEditorRedoStack = [];
    let coverEditorHistoryCheckpoint = null;
    let coverEditorOperations = [];
    let coverEditorRedoOperations = [];
    let coverEditorHistoryFormat = "operations-v1";
    let coverStickers = [];
    let stickerSources = [];
    let imageEditorMode = "template";
    let templateEditorGlobalsBackup = null;
    let standaloneOriginalSrc = "";
    let standaloneEditedSrc = "";
    let standaloneMosaicMaskSrc = "";
    let standaloneBlurMaskSrc = "";
    let standaloneWhiteFogMaskSrc = "";
    let standaloneEditorUndoStack = [];
    let standaloneEditorRedoStack = [];
    let standaloneEditorHistoryCheckpoint = null;
    let standaloneEditorOperations = [];
    let standaloneEditorRedoOperations = [];
    let standaloneEditorHistoryFormat = "operations-v1";
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
    let editorUndoOperations = [];
    let editorRedoOperations = [];
    let editorHistoryFormat = "operations-v1";
    let pendingEditorBrushOperation = null;
    let editorDrawing = false;
    let editorLastPoint = null;
    const editorTouchPointers = new Set();
    let editorPinching = false;
    let editorSessionSnapshot = null;
    let editorRenderFrame = 0;
    let imageEditorOpening = false;
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
    const editWhiteFogMaskCanvas = document.createElement("canvas");
    const editWhiteFogMaskCtx = editWhiteFogMaskCanvas.getContext("2d");
    const editEffectCompositeCanvas = document.createElement("canvas");
    const editEffectCompositeCtx = editEffectCompositeCanvas.getContext("2d");
    const UI_BACK_FULL = String.fromCharCode(0x8fd4, 0x56de, 0x5168, 0x56fe);
    const UI_EXPORT_SHORT = String.fromCharCode(0x5bfc, 0x51fa);
    const UI_EXPORT_DOWNLOAD_PAGE = String.fromCharCode(0x4e0b, 0x8f7d, 0x5f53, 0x524d, 0x9875);
    const UI_EXPORT_DOWNLOAD_IMAGE = String.fromCharCode(0x4e0b, 0x8f7d, 0x56fe, 0x7247);
    const UI_REMOVE_SHORT = String.fromCharCode(0x79fb, 0x9664);
    const UI_CLOSE = String.fromCharCode(0x5173, 0x95ed);
    const UI_LONG_PRESS_SAVE = String.fromCharCode(0x53ef, 0x4ee5, 0x957f, 0x6309, 0x56fe, 0x7247, 0x4fdd, 0x5b58, 0xff0c, 0x4e5f, 0x53ef, 0x4ee5, 0x70b9, 0x51fb, 0x4e0b, 0x8f7d, 0x3002, 0x4e0b, 0x8f7d, 0x4fdd, 0x5b58, 0x66f4, 0x6e05, 0x6670, 0x3002);
    const UI_IMPORT_INFO = String.fromCharCode(0x5bfc, 0x5165, 0x4fe1, 0x606f);
    const UI_IMPORT_HELP = [
      String.fromCharCode(0x5bfc, 0x5165, 0x4fe1, 0x606f, 0x4f1a, 0x5c1d, 0x8bd5, 0x586b, 0x5165, 0xff1a),
      String.fromCharCode(0x42, 0x4b, 0x3001, 0x6807, 0x9898, 0x3001, 0x43, 0x56, 0x3001, 0x793e, 0x56e2, 0x3001, 0x4e2d, 0x6587, 0x7248, 0x672c, 0x3001, 0x5173, 0x952e, 0x8bcd, 0x3001, 0x539f, 0x4ef7, 0x3001, 0x73b0, 0x4ef7, 0x3001, 0x73b0, 0x6298, 0x6263, 0x3001, 0x53f2, 0x4f4e, 0x7b49, 0x4fe1, 0x606f, 0x3002),
      "",
      String.fromCharCode(0x90e8, 0x5206, 0x4fe1, 0x606f, 0x53ef, 0x80fd, 0x4f1a, 0x5bfc, 0x5165, 0x5931, 0x8d25, 0xff0c, 0x5bfc, 0x5165, 0x7ed3, 0x679c, 0x4ecd, 0x5efa, 0x8bae, 0x624b, 0x52a8, 0x68c0, 0x67e5, 0x3002),
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
    const UI_IMPORT_RESULT_DONE = String.fromCharCode(0x5bfc, 0x5165, 0x5b8c, 0x6210, 0x3002);
    const UI_IMPORT_RESULT_PARTIAL = String.fromCharCode(0x5bfc, 0x5165, 0x5b8c, 0x6210, 0xff0c, 0x4f46, 0x4ee5, 0x4e0b, 0x5185, 0x5bb9, 0x5bfc, 0x5165, 0x5931, 0x8d25, 0xff1a);
    const UI_IMPORT_RESULT_FAILED = String.fromCharCode(0x5bfc, 0x5165, 0x5931, 0x8d25);
    const UI_IMPORT_COMPLETE_COUNT = String.fromCharCode(0x5b8c, 0x6574, 0x5bfc, 0x5165);
    const UI_IMPORT_PARTIAL_COUNT = String.fromCharCode(0x90e8, 0x5206, 0x5bfc, 0x5165);
    const UI_IMPORT_MISSING_FIELDS = String.fromCharCode(0x672a, 0x80fd, 0x5bfc, 0x5165);
    const UI_IMPORT_API_MISSING = String.fromCharCode(0x63a5, 0x53e3, 0x672a, 0x8fd4, 0x56de);
    const UI_IMPORT_IMAGE_FAILED = String.fromCharCode(0x56fe, 0x7247, 0x8bfb, 0x53d6, 0x5931, 0x8d25);
    const UI_IMPORT_UNCHANGED_MANUAL = String.fromCharCode(0x5bf9, 0x5e94, 0x4f4d, 0x7f6e, 0x672a, 0x66f4, 0x6539, 0xff0c, 0x8bf7, 0x624b, 0x52a8, 0x68c0, 0x67e5, 0x6216, 0x8865, 0x5145, 0x3002);
    const UI_IMPORT_LOWEST_LABEL = String.fromCharCode(0x53f2, 0x4f4e);
    const UI_IMPORT_CHINESE_LABEL = String.fromCharCode(0x4e2d, 0x6587, 0x60c5, 0x51b5);
    const UI_IMPORT_DLSITE_NO_DATA = "DLsite " + String.fromCharCode(0x6ca1, 0x6709, 0x8fd4, 0x56de, 0x53ef, 0x5bfc, 0x5165, 0x7684, 0x8d44, 0x6599, 0x3002);
    const UI_IMPORT_DLWATCHER_NO_DATA = "dlwatcher " + String.fromCharCode(0x672a, 0x8fd4, 0x56de, 0x8be5, 0x4f5c, 0x54c1, 0x7684, 0x53f2, 0x4f4e, 0x6298, 0x6263, 0x3002);
    const UI_IMPORT_REQUEST_TIMEOUT = String.fromCharCode(0x8bf7, 0x6c42, 0x8d85, 0x65f6, 0x3002);
    const UI_IMPORT_REQUEST_NETWORK = String.fromCharCode(0x65e0, 0x6cd5, 0x8fde, 0x63a5, 0x63a5, 0x53e3, 0xff0c, 0x8bf7, 0x68c0, 0x67e5, 0x20, 0x57, 0x6f, 0x72, 0x6b, 0x65, 0x72, 0x20, 0x662f, 0x5426, 0x5df2, 0x90e8, 0x7f72, 0x5e76, 0x53ef, 0x8bbf, 0x95ee, 0x3002);
    const UI_IMPORT_HTTP_PREFIX = String.fromCharCode(0x63a5, 0x53e3, 0x8fd4, 0x56de, 0x20);
    const UI_REVIEW_EDIT_TITLE = String.fromCharCode(0x8bc4, 0x4ef7, 0x4e13, 0x6ce8, 0x7f16, 0x8f91);
    const UI_REVIEW_PREVIEW = String.fromCharCode(0x5168, 0x56fe, 0x9884, 0x89c8);
    const UI_REVIEW_CONTINUE = String.fromCharCode(0x7ee7, 0x7eed, 0x7f16, 0x8f91);
    const UI_REVIEW_DONE = String.fromCharCode(0x5b8c, 0x6210);
    const UI_REVIEW_CANCEL = String.fromCharCode(0x53d6, 0x6d88);
    const UI_IMPORT_DATA_FAILED = String.fromCharCode(0x5bfc, 0x5165, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x786e, 0x8ba4, 0x6587, 0x4ef6, 0x662f, 0x672c, 0x9879, 0x76ee, 0x5bfc, 0x51fa, 0x7684, 0x20, 0x4a, 0x53, 0x4f, 0x4e, 0x3002);
    const UI_RESET_CONFIRM = String.fromCharCode(0x786e, 0x5b9a, 0x8981, 0x6e05, 0x7a7a, 0x5f53, 0x524d, 0x586b, 0x5199, 0x7684, 0x5168, 0x90e8, 0x5185, 0x5bb9, 0x5417, 0xff1f, 0x8fd9, 0x4e2a, 0x64cd, 0x4f5c, 0x4e0d, 0x80fd, 0x64a4, 0x9500, 0x3002);
    const UI_DELETE_CONTINUATION_CONFIRM = String.fromCharCode(0x786e, 0x5b9a, 0x5220, 0x9664, 0x5f53, 0x524d, 0x7eed, 0x9875, 0x5417, 0xff1f, 0x5220, 0x9664, 0x540e, 0x65e0, 0x6cd5, 0x6062, 0x590d, 0x3002);
    const UI_AUTO_SAVE_FAILURE_TITLE = String.fromCharCode(0x81ea, 0x52a8, 0x4fdd, 0x5b58, 0x672a, 0x5b8c, 0x6210);
    const UI_AUTO_SAVE_QUOTA_REASON = String.fromCharCode(0x672c, 0x5730, 0x5b58, 0x50a8, 0x7a7a, 0x95f4, 0x4e0d, 0x8db3, 0x3002);
    const UI_AUTO_SAVE_UNAVAILABLE_REASON = String.fromCharCode(0x6d4f, 0x89c8, 0x5668, 0x672c, 0x5730, 0x5b58, 0x50a8, 0x4e0d, 0x53ef, 0x7528, 0x3002);
    const UI_AUTO_SAVE_RISK = String.fromCharCode(0x5f53, 0x524d, 0x9875, 0x9762, 0x5185, 0x5bb9, 0x4ecd, 0x53ef, 0x7ee7, 0x7eed, 0x7f16, 0x8f91, 0xff0c, 0x4f46, 0x5237, 0x65b0, 0x6216, 0x5173, 0x95ed, 0x9875, 0x9762, 0x540e, 0xff0c, 0x672c, 0x6b21, 0x4fee, 0x6539, 0x53ef, 0x80fd, 0x65e0, 0x6cd5, 0x6062, 0x590d, 0x3002, 0x5efa, 0x8bae, 0x5148, 0x5bfc, 0x51fa, 0x5907, 0x4efd, 0x3002);
    const UI_AUTO_SAVE_ERROR_PREFIX = String.fromCharCode(0x539f, 0x56e0, 0xff1a);
    const UI_STORAGE_ESTIMATE_PREFIX = String.fromCharCode(0x6d4f, 0x89c8, 0x5668, 0x4f30, 0x7b97, 0xff1a, 0x5df2, 0x4f7f, 0x7528, 0x20);
    const UI_STORAGE_ESTIMATE_QUOTA = String.fromCharCode(0x20, 0x2f, 0x20, 0x914d, 0x989d, 0x7ea6, 0x20);
    const UI_STORAGE_MANAGE_TITLE = String.fromCharCode(0x5b58, 0x50a8, 0x7ba1, 0x7406);
    const UI_STORAGE_MANAGE_BODY = String.fromCharCode(0x53ea, 0x4f1a, 0x6e05, 0x7406, 0x6ca1, 0x6709, 0x88ab, 0x8349, 0x7a3f, 0x3001, 0x4fee, 0x56fe, 0x6216, 0x6536, 0x85cf, 0x4f7f, 0x7528, 0x7684, 0x56fe, 0x7247, 0x3002);
    const UI_STORAGE_CLEAN_ACTION = String.fromCharCode(0x6e05, 0x7406, 0x65e0, 0x6548, 0x56fe, 0x7247);
    const UI_STORAGE_CLEAN_CONFIRM = String.fromCharCode(0x786e, 0x5b9a, 0x6e05, 0x7406, 0x6240, 0x6709, 0x672a, 0x88ab, 0x4f7f, 0x7528, 0x7684, 0x56fe, 0x7247, 0x5417, 0xff1f);
    const UI_STORAGE_CLEAN_RESULT_PREFIX = String.fromCharCode(0x6e05, 0x7406, 0x5b8c, 0x6210, 0xff0c, 0x5df2, 0x5220, 0x9664, 0x20);
    const UI_STORAGE_CLEAN_RESULT_SUFFIX = String.fromCharCode(0x20, 0x5f20, 0x65e0, 0x6548, 0x56fe, 0x7247, 0x3002);
    const UI_STORAGE_CLEAN_FAILED = String.fromCharCode(0x6e05, 0x7406, 0x5931, 0x8d25, 0xff1a);
    const UI_STORAGE_PERSISTED = String.fromCharCode(0x6301, 0x4e45, 0x5b58, 0x50a8, 0x4fdd, 0x62a4, 0xff1a, 0x5df2, 0x542f, 0x7528);
    const UI_STORAGE_NOT_PERSISTED = String.fromCharCode(0x6301, 0x4e45, 0x5b58, 0x50a8, 0x4fdd, 0x62a4, 0xff1a, 0x672a, 0x542f, 0x7528);
    const UI_STORAGE_PERSIST_UNSUPPORTED = String.fromCharCode(0x6301, 0x4e45, 0x5b58, 0x50a8, 0x4fdd, 0x62a4, 0xff1a, 0x6d4f, 0x89c8, 0x5668, 0x4e0d, 0x652f, 0x6301);
    const UI_CUSTOM_STICKER_DELETE_CONFIRM = String.fromCharCode(0x786e, 0x5b9a, 0x5220, 0x9664, 0x8fd9, 0x4e2a, 0x81ea, 0x5b9a, 0x4e49, 0x8d34, 0x7eb8, 0x5417, 0xff1f);
    const UI_IMAGE_EDITOR_OPEN_FAILED = String.fromCharCode(0x56fe, 0x7247, 0x7f16, 0x8f91, 0x5668, 0x6253, 0x5f00, 0x5931, 0x8d25, 0xff1a);
    const UI_EXPORT_BACKUP = String.fromCharCode(0x5bfc, 0x51fa, 0x5907, 0x4efd);
    const UI_DEFER_ACTION = String.fromCharCode(0x6682, 0x4e0d, 0x5904, 0x7406);
    const UI_DIALOG_NOTICE = String.fromCharCode(0x5c0f, 0x63d0, 0x793a);
    const UI_DIALOG_CONFIRM = String.fromCharCode(0x8bf7, 0x786e, 0x8ba4);
    const UI_DIALOG_CANCEL = String.fromCharCode(0x53d6, 0x6d88);
    const UI_DIALOG_OK = String.fromCharCode(0x786e, 0x5b9a);
    const UI_DIALOG_GOT_IT = String.fromCharCode(0x77e5, 0x9053, 0x5566);
    const UI_DIALOG_LINK = String.fromCharCode(0x5728, 0x6d4f, 0x89c8, 0x5668, 0x4e2d, 0x6253, 0x5f00);
    const UI_FONT_FALLBACK_TITLE = String.fromCharCode(0x5bfc, 0x51fa, 0x63d0, 0x793a);
    const UI_FONT_FALLBACK_CONTINUE = String.fromCharCode(0x7528, 0x7cfb, 0x7edf, 0x5b57, 0x4f53, 0x7ee7, 0x7eed, 0x5bfc, 0x51fa);
    const UI_FONT_FALLBACK_UNKNOWN = String.fromCharCode(0x672a, 0x77e5, 0x539f, 0x56e0);
    const UI_TEMPLATE_FONT_TITLE = String.fromCharCode(0x6a21, 0x677f, 0x5b57, 0x4f53);
    const UI_TEMPLATE_FONT_EXPORT_OVERFLOW = String.fromCharCode(0x5f53, 0x524d, 0x5b57, 0x4f53, 0x4e0b, 0x6709, 0x5185, 0x5bb9, 0x53ef, 0x80fd, 0x8d85, 0x51fa, 0x6392, 0x7248, 0x8303, 0x56f4, 0x3002, 0x662f, 0x5426, 0x4ecd, 0x7136, 0x5bfc, 0x51fa, 0xff1f);
    const UI_TEMPLATE_FONT_LOAD_FAILED = String.fromCharCode(0x5b57, 0x4f53, 0x52a0, 0x8f7d, 0x5931, 0x8d25, 0xff1a);
    const UI_FONT_FALLBACK_BODY_PREFIX = String.fromCharCode(0x5361, 0x7247, 0x4e13, 0x7528, 0x5b57, 0x4f53, 0x52a0, 0x8f7d, 0x5931, 0x8d25, 0xff08);
    const UI_FONT_FALLBACK_BODY_SUFFIX = String.fromCharCode(
      0xff09, 0xff0c, 0x6682, 0x65f6, 0x65e0, 0x6cd5, 0x7528, 0x539f, 0x5b57, 0x4f53, 0x751f, 0x6210, 0x5bfc, 0x51fa, 0x56fe, 0x3002,
      0x0a, 0x0a,
      0x5efa, 0x8bae, 0x5148, 0x5c1d, 0x8bd5, 0xff1a,
      0x0a,
      0x31, 0x2e, 0x20, 0x5982, 0x679c, 0x662f, 0x5728, 0x5176, 0x4ed6, 0x20, 0x41, 0x70, 0x70, 0x20, 0x7684, 0x5185, 0x7f6e, 0x6d4f, 0x89c8, 0x5668, 0x91cc, 0x6253, 0x5f00, 0x7684, 0x672c, 0x7ad9, 0xff0c, 0x8bf7, 0x6539, 0x7528, 0x624b, 0x673a, 0x81ea, 0x5e26, 0x7684, 0x20, 0x53, 0x61, 0x66, 0x61, 0x72, 0x69, 0x20, 0x6d4f, 0x89c8, 0x5668, 0x6253, 0x5f00, 0xff1b,
      0x0a,
      0x32, 0x2e, 0x20, 0x5207, 0x6362, 0x5230, 0x7a33, 0x5b9a, 0x7684, 0x20, 0x57, 0x69, 0x2d, 0x46, 0x69, 0xff0c, 0x5237, 0x65b0, 0x9875, 0x9762, 0x540e, 0x518d, 0x8bd5, 0x3002,
      0x0a, 0x0a,
      0x5982, 0x679c, 0x4ecd, 0x60f3, 0x7ee7, 0x7eed, 0xff0c, 0x4e5f, 0x53ef, 0x4ee5, 0x9009, 0x62e9, 0x6539, 0x7528, 0x624b, 0x673a, 0x81ea, 0x5e26, 0x5b57, 0x4f53, 0x5bfc, 0x51fa, 0xff0c, 0x5361, 0x7247, 0x6587, 0x5b57, 0x6837, 0x5f0f, 0x4f1a, 0x548c, 0x9884, 0x89c8, 0x7565, 0x6709, 0x5dee, 0x5f02, 0x3002, 0x662f, 0x5426, 0x7ee7, 0x7eed, 0xff1f
    );
    const UPDATE_NOTICE_STORAGE_KEY = "otome-record-card-update-notice-20260829-v1";
    const UPDATE_NOTICE_START_AT = Date.parse("2026-08-29T08:00:00+08:00");
    const UPDATE_NOTICE_TITLE = String.fromCharCode(0x38, 0x6708, 0x32, 0x39, 0x65e5, 0x66f4, 0x65b0, 0xff5c, 0x76, 0x31, 0x2e, 0x30, 0x2e, 0x30);
    const UPDATE_NOTICE_MESSAGE = [
      String.fromCharCode(0x672c, 0x6b21, 0x66f4, 0x65b0, 0x5e26, 0x6765, 0x4e86, 0x66f4, 0x591a, 0x914d, 0x8272, 0x4e0e, 0x5b57, 0x4f53, 0x9009, 0x62e9, 0xff0c, 0x5e76, 0x5b8c, 0x5584, 0x4e86, 0x6a21, 0x677f, 0x586b, 0x5199, 0x548c, 0x6536, 0x85cf, 0x7ba1, 0x7406, 0x529f, 0x80fd, 0x3002, 0x7f51, 0x7ad9, 0x4e5f, 0x6b63, 0x5f0f, 0x66f4, 0x540d, 0x4e3a, 0x3010, 0x4e59, 0x97f3, 0x8bb0, 0x5f55, 0x6a21, 0x677f, 0x3011, 0xff0c, 0x8bf7, 0x4e0b, 0x6ed1, 0x67e5, 0x770b, 0x5168, 0x90e8, 0x3002),
      String.fromCharCode(0x2022, 0x20, 0x7f51, 0x7ad9, 0x540d, 0x79f0, 0x4e0e, 0x7248, 0x672c, 0xa, 0x7f51, 0x7ad9, 0x6b63, 0x5f0f, 0x66f4, 0x540d, 0x4e3a, 0x3010, 0x4e59, 0x97f3, 0x8bb0, 0x5f55, 0x6a21, 0x677f, 0x3011, 0x3002, 0xa, 0x4ece, 0x672c, 0x6b21, 0x66f4, 0x65b0, 0x5f00, 0x59cb, 0x542f, 0x7528, 0x7248, 0x672c, 0x53f7, 0xff0c, 0x5f53, 0x524d, 0x7248, 0x672c, 0x4e3a, 0x20, 0x76, 0x31, 0x2e, 0x30, 0x2e, 0x30, 0x3002),
      String.fromCharCode(0x2022, 0x20, 0x8272, 0x5361, 0x4e0e, 0x5b57, 0x4f53, 0xa, 0x65b0, 0x589e, 0x20, 0x31, 0x30, 0x20, 0x4e2a, 0x8272, 0x5361, 0x548c, 0x20, 0x34, 0x20, 0x6b3e, 0x53ef, 0x9009, 0x5b57, 0x4f53, 0xff0c, 0x53ef, 0x4ee5, 0x81ea, 0x7531, 0x642d, 0x914d, 0x559c, 0x6b22, 0x7684, 0x6a21, 0x677f, 0x98ce, 0x683c, 0x3002),
      String.fromCharCode(0x2022, 0x20, 0x52, 0x65, 0x70, 0x6f, 0x20, 0x586b, 0x5199, 0x4f18, 0x5316, 0xa, 0x5b8c, 0x6574, 0x7248, 0x548c, 0x7b80, 0x7565, 0x7248, 0x7684, 0x20, 0x72, 0x65, 0x70, 0x6f, 0x20, 0x586b, 0x5199, 0x754c, 0x9762, 0x65b0, 0x589e, 0x5b57, 0x6570, 0x63d0, 0x793a, 0xff0c, 0x586b, 0x5199, 0x957f, 0x8bc4, 0x65f6, 0x53ef, 0x4ee5, 0x66f4, 0x76f4, 0x89c2, 0x5730, 0x67e5, 0x770b, 0x5f53, 0x524d, 0x5185, 0x5bb9, 0x957f, 0x5ea6, 0x3002),
      String.fromCharCode(0x2022, 0x20, 0x4e5d, 0x5bab, 0x683c, 0x4e0e, 0x901f, 0x8bc4, 0x7248, 0xa, 0x4e5d, 0x5bab, 0x683c, 0x548c, 0x901f, 0x8bc4, 0x7248, 0x65b0, 0x589e, 0x6279, 0x91cf, 0x586b, 0x5199, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x529f, 0x80fd, 0xff0c, 0x6574, 0x7406, 0x591a, 0x90e8, 0x4f5c, 0x54c1, 0x65f6, 0x66f4, 0x52a0, 0x65b9, 0x4fbf, 0x3002),
      String.fromCharCode(0x2022, 0x20, 0x6a21, 0x677f, 0x5bfc, 0x5165, 0x6536, 0x85cf, 0xa, 0x6a21, 0x677f, 0x7f16, 0x8f91, 0x6a21, 0x5f0f, 0x65b0, 0x589e, 0x3010, 0x5bfc, 0x5165, 0x6536, 0x85cf, 0x3011, 0x529f, 0x80fd, 0xff0c, 0x53ef, 0x4ee5, 0x76f4, 0x63a5, 0x9009, 0x62e9, 0x6536, 0x85cf, 0x4e2d, 0x7684, 0x6761, 0x76ee, 0x5e76, 0x5bfc, 0x5165, 0x6a21, 0x677f, 0xff0c, 0x51cf, 0x5c11, 0x91cd, 0x590d, 0x586b, 0x5199, 0x3002),
      String.fromCharCode(0x2022, 0x20, 0x6536, 0x85cf, 0x6279, 0x91cf, 0x7ba1, 0x7406, 0xa, 0x3010, 0x6211, 0x7684, 0x6536, 0x85cf, 0x3011, 0x65b0, 0x589e, 0x6279, 0x91cf, 0x7ba1, 0x7406, 0x529f, 0x80fd, 0xff0c, 0x53ef, 0x4ee5, 0x4e00, 0x6b21, 0x9009, 0x62e9, 0x591a, 0x6761, 0x8bb0, 0x5f55, 0xff0c, 0x8fdb, 0x884c, 0x6279, 0x91cf, 0x5220, 0x9664, 0x3001, 0x6279, 0x91cf, 0x6dfb, 0x52a0, 0x6807, 0x7b7e, 0x6216, 0x6279, 0x91cf, 0x79fb, 0x9664, 0x6807, 0x7b7e, 0x3002),
      String.fromCharCode(0x2022, 0x20, 0x6536, 0x85cf, 0x8be6, 0x60c5, 0x9875, 0xa, 0x65b0, 0x589e, 0x201c, 0x753b, 0x5e08, 0x201d, 0x548c, 0x201c, 0x5267, 0x672c, 0x4f5c, 0x8005, 0x201d, 0x5b57, 0x6bb5, 0x3002, 0xa, 0x8be6, 0x60c5, 0x9875, 0x65b0, 0x589e, 0x6253, 0x5f00, 0x5bf9, 0x5e94, 0x20, 0x44, 0x4c, 0x73, 0x69, 0x74, 0x65, 0x20, 0x9875, 0x9762, 0x7684, 0x6309, 0x94ae, 0xff0c, 0x53ef, 0x4ee5, 0x76f4, 0x63a5, 0x524d, 0x5f80, 0x4f5c, 0x54c1, 0x9875, 0x9762, 0x67e5, 0x770b, 0x8be6, 0x60c5, 0x3002),
      String.fromCharCode(0x611f, 0x8c22, 0x5927, 0x5bb6, 0x7684, 0x53cd, 0x9988, 0x4e0e, 0x4f7f, 0x7528, 0xff01, 0x5982, 0x679c, 0x66f4, 0x65b0, 0x540e, 0x4ecd, 0x9047, 0x5230, 0x95ee, 0x9898, 0xff0c, 0x6216, 0x662f, 0x6709, 0x5176, 0x4ed6, 0x5efa, 0x8bae, 0x548c, 0x60f3, 0x8981, 0x7684, 0x529f, 0x80fd, 0xff0c, 0x6b22, 0x8fce, 0x901a, 0x8fc7, 0x7f51, 0x7ad9, 0x5185, 0x7684, 0x53cd, 0x9988, 0x5165, 0x53e3, 0x544a, 0x8bc9, 0x6211, 0xff5e)
    ].join("\n\n");
    let storageFullWarned = false;
    let appDialogQueue = Promise.resolve();
    mobileFocusBack.textContent = UI_BACK_FULL;
    modalDownloadButton.textContent = UI_EXPORT_DOWNLOAD_PAGE;
    modalCloseButton.textContent = UI_CLOSE;
    exportHint.textContent = UI_LONG_PRESS_SAVE;
    importButton.textContent = UI_IMPORT_INFO;
    importHelpButton.title = UI_IMPORT_HELP;
    if (importHelpPopover) importHelpPopover.textContent = UI_IMPORT_HELP;
    reviewEditTitle.textContent = UI_REVIEW_EDIT_TITLE;
    reviewEditPreview.textContent = UI_REVIEW_PREVIEW;
    reviewEditConfirm.textContent = UI_REVIEW_DONE;
    reviewPreviewContinue.textContent = UI_REVIEW_CONTINUE;
    reviewPreviewDone.textContent = UI_REVIEW_DONE;

    function openAppDialog(message, confirmMode, title = "", options = null) {
      const previousFocus = document.activeElement;
      const isUpdateNotice = title === UPDATE_NOTICE_TITLE;
      const linkLabel = options && options.linkLabel ? options.linkLabel : "";
      appDialogTitle.textContent = title || (confirmMode ? UI_DIALOG_CONFIRM : UI_DIALOG_NOTICE);
      appDialogMessage.textContent = String(message || "");
      appDialogScrollHint.hidden = !isUpdateNotice;
      appDialogCancelButton.textContent = options && options.cancelLabel ? options.cancelLabel : UI_DIALOG_CANCEL;
      appDialogConfirmButton.textContent = options && options.confirmLabel ? options.confirmLabel : (confirmMode ? UI_DIALOG_OK : UI_DIALOG_GOT_IT);
      appDialogLinkButton.hidden = !linkLabel;
      appDialogLinkButton.textContent = linkLabel;
      appDialogCancelButton.hidden = !confirmMode;
      appDialogModal.hidden = false;
      const syncScrollHint = () => {
        if (!isUpdateNotice) return;
        const hasMore = appDialogMessage.scrollHeight > appDialogMessage.clientHeight + 1
          && appDialogMessage.scrollTop + appDialogMessage.clientHeight < appDialogMessage.scrollHeight - 2;
        appDialogScrollHint.hidden = !hasMore;
      };
      appDialogMessage.addEventListener("scroll", syncScrollHint);

      return new Promise((resolve) => {
        let settled = false;
        const finish = (value) => {
          if (settled) return;
          settled = true;
          document.removeEventListener("keydown", handleKeydown);
          appDialogMessage.removeEventListener("scroll", syncScrollHint);
          appDialogModal.hidden = true;
          appDialogCancelButton.onclick = null;
          appDialogConfirmButton.onclick = null;
          appDialogLinkButton.onclick = null;
          appDialogModal.onclick = null;
          if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
          resolve(value);
        };
        const handleKeydown = (event) => {
          if (event.key !== "Escape") return;
          event.preventDefault();
          finish(false);
        };
        appDialogCancelButton.onclick = () => finish(false);
        appDialogConfirmButton.onclick = () => finish(true);
        appDialogLinkButton.onclick = () => finish("browser");
        appDialogModal.onclick = (event) => {
          if (event.target === appDialogModal) finish(confirmMode ? false : true);
        };
        document.addEventListener("keydown", handleKeydown);
        requestAnimationFrame(syncScrollHint);
        requestAnimationFrame(() => appDialogConfirmButton.focus());
      });
    }

    function queueAppDialog(message, confirmMode, title = "", options = null) {
      const result = appDialogQueue.then(() => openAppDialog(message, confirmMode, title, options));
      appDialogQueue = result.catch(() => false);
      return result;
    }

    function showAppAlert(message, title = "") {
      return queueAppDialog(message, false, title);
    }

    function showAppConfirm(message) {
      return queueAppDialog(message, true);
    }

    function autoSaveFailureWasWarnedThisSession() {
      if (storageFullWarned) return true;
      try {
        if (sessionStorage.getItem(AUTO_SAVE_FAILURE_SESSION_KEY) === "1") {
          storageFullWarned = true;
          return true;
        }
      } catch (error) {
        console.warn("Auto-save warning session check failed", error);
      }
      return false;
    }

    function markAutoSaveFailureWarnedThisSession() {
      storageFullWarned = true;
      try {
        sessionStorage.setItem(AUTO_SAVE_FAILURE_SESSION_KEY, "1");
      } catch (error) {
        console.warn("Auto-save warning session marker failed", error);
      }
    }

    async function browserStorageEstimateText() {
      if (typeof navigator === "undefined" || typeof navigator.storage?.estimate !== "function") return "";
      try {
        const estimate = await navigator.storage.estimate();
        const usage = Number(estimate?.usage);
        const quota = Number(estimate?.quota);
        if (!Number.isFinite(usage) || !Number.isFinite(quota)) return "";
        const megabytes = (bytes) => (bytes / (1024 * 1024)).toFixed(1);
        return UI_STORAGE_ESTIMATE_PREFIX + megabytes(usage) + " MB" + UI_STORAGE_ESTIMATE_QUOTA + megabytes(quota) + " MB";
      } catch (estimateError) {
        console.warn("Storage estimate unavailable", estimateError);
        return "";
      }
    }

    async function requestPersistentStorage() {
      if (typeof navigator === "undefined" || typeof navigator.storage?.persist !== "function") return null;
      try {
        return Boolean(await navigator.storage.persist());
      } catch (error) {
        console.warn("Persistent storage request failed", error);
        return false;
      }
    }

    async function persistentStorageStatusText(request = false) {
      if (typeof navigator === "undefined" || typeof navigator.storage?.persisted !== "function") return UI_STORAGE_PERSIST_UNSUPPORTED;
      try {
        const persisted = request ? await requestPersistentStorage() : await navigator.storage.persisted();
        if (persisted == null) return UI_STORAGE_PERSIST_UNSUPPORTED;
        return persisted ? UI_STORAGE_PERSISTED : UI_STORAGE_NOT_PERSISTED;
      } catch (error) {
        console.warn("Persistent storage status check failed", error);
        return UI_STORAGE_NOT_PERSISTED;
      }
    }

    function showAutoSaveFailure(error) {
      if (autoSaveFailureWasWarnedThisSession()) return;
      markAutoSaveFailureWarnedThisSession();
      const reason = isStorageQuotaError(error) ? UI_AUTO_SAVE_QUOTA_REASON : UI_AUTO_SAVE_UNAVAILABLE_REASON;
      const detail = error && (error.name || error.message)
        ? Array.from(new Set([error.name, error.message].filter(Boolean))).join(": ")
        : "";
      void browserStorageEstimateText().then((estimateText) => {
        const message = reason
          + (estimateText ? "\n\n" + estimateText : "")
          + "\n\n" + UI_AUTO_SAVE_RISK
          + (detail ? "\n\n" + UI_AUTO_SAVE_ERROR_PREFIX + detail : "");
        return queueAppDialog(message, true, UI_AUTO_SAVE_FAILURE_TITLE, {
          confirmLabel: UI_EXPORT_BACKUP,
          cancelLabel: UI_DEFER_ACTION
        });
      }).then((shouldExport) => {
        if (shouldExport) exportRecordData();
      });
    }

    async function openStorageManagement() {
      const persistenceRequest = persistentStorageStatusText(true);
      const [estimateText, persistenceText] = await Promise.all([browserStorageEstimateText(), persistenceRequest]);
      trackFixedUsageEvent("feature-open-storage-management");
      const shouldClean = await queueAppDialog(
        (estimateText ? estimateText + "\n" : "") + persistenceText + "\n\n" + UI_STORAGE_MANAGE_BODY,
        true,
        UI_STORAGE_MANAGE_TITLE,
        { confirmLabel: UI_STORAGE_CLEAN_ACTION, cancelLabel: UI_CLOSE }
      );
      if (!shouldClean || !await showAppConfirm(UI_STORAGE_CLEAN_CONFIRM)) return;
      try {
        if (!await saveState()) throw new Error("Current state could not be saved before cleanup");
        const result = await garbageCollectStoredImages(lastPersistedStoredState, true);
        const nextEstimateText = await browserStorageEstimateText();
        await showAppAlert(
          UI_STORAGE_CLEAN_RESULT_PREFIX + result.deleted + UI_STORAGE_CLEAN_RESULT_SUFFIX
          + (nextEstimateText ? "\n\n" + nextEstimateText : ""),
          UI_STORAGE_MANAGE_TITLE
        );
      } catch (error) {
        console.error("Manual storage cleanup failed", error);
        const detail = error && (error.name || error.message)
          ? [error.name, error.message].filter(Boolean).join(": ")
          : UI_AUTO_SAVE_UNAVAILABLE_REASON;
        await showAppAlert(UI_STORAGE_CLEAN_FAILED + detail, UI_STORAGE_MANAGE_TITLE);
      }
    }

    function showAppFontFallbackPrompt(errorMessage) {
      const detail = String(errorMessage || "").trim() || UI_FONT_FALLBACK_UNKNOWN;
      const message = UI_FONT_FALLBACK_BODY_PREFIX + detail + UI_FONT_FALLBACK_BODY_SUFFIX;
      const result = appDialogQueue.then(() => openAppDialog(message, true, UI_FONT_FALLBACK_TITLE, {
        confirmLabel: UI_FONT_FALLBACK_CONTINUE,
        linkLabel: UI_DIALOG_LINK
      }));
      appDialogQueue = result.catch(() => false);
      return result;
    }

    async function maybeShowUpdateNotice() {
      if (Date.now() < UPDATE_NOTICE_START_AT) return;
      if (localStorage.getItem(UPDATE_NOTICE_STORAGE_KEY)) return;
      await showAppAlert(UPDATE_NOTICE_MESSAGE, UPDATE_NOTICE_TITLE);
      localStorage.setItem(UPDATE_NOTICE_STORAGE_KEY, "seen");
    }

    function currentTemplate() {
      if (card.classList.contains("grid9")) return "grid9";
      if (card.classList.contains("quick")) return "quick";
      if (card.classList.contains("trio")) return "trio";
      return card.classList.contains("compact") ? "compact" : "full";
    }

    function normalizeTemplateId(template) {
      return TEMPLATE_IDS.includes(template) ? template : "full";
    }

    function normalizeTemplateFontId(fontId) {
      return TEMPLATE_FONTS[fontId] ? fontId : DEFAULT_TEMPLATE_FONT_ID;
    }

    function loadTemplateFontPreferences() {
      let saved = null;
      try {
        saved = JSON.parse(localStorage.getItem(TEMPLATE_FONT_PREFERENCES_KEY) || "null");
      } catch {
        saved = null;
      }
      return Object.fromEntries(TEMPLATE_IDS.map((template) => [
        template,
        normalizeTemplateFontId(saved && typeof saved === "object" ? saved[template] : DEFAULT_TEMPLATE_FONT_ID)
      ]));
    }

    function saveTemplateFontPreferences() {
      try {
        localStorage.setItem(TEMPLATE_FONT_PREFERENCES_KEY, JSON.stringify(templateFontPreferences));
      } catch (error) {
        console.warn("Template font preference save failed", error);
      }
    }

    function templateFontId(template = currentTemplate()) {
      return normalizeTemplateFontId(templateFontPreferences[normalizeTemplateId(template)]);
    }

    function templateFontStack(fontId = templateFontId()) {
      const config = TEMPLATE_FONTS[normalizeTemplateFontId(fontId)];
      if (config.family === TEMPLATE_FONTS.default.family) return '"' + config.family + '", ' + TEMPLATE_FONT_FALLBACK.replace(/^"BlackSugarPlumCandy",\s*/, "");
      return '"' + config.family + '", ' + TEMPLATE_FONT_FALLBACK;
    }

    function templateFontRoots(template) {
      const normalizedTemplate = normalizeTemplateId(template);
      if (normalizedTemplate === "grid9") return [grid9Card];
      if (normalizedTemplate === "quick") return [quickCard];
      if (normalizedTemplate === "trio") return [trioCard];
      if (normalizedTemplate === "compact") return [compactContinuationCard, currentTemplate() === "compact" ? card : null];
      return [fullContinuationCard, currentTemplate() === "full" ? card : null];
    }

    function applyTemplateFont(template, fontId = templateFontId(template)) {
      const normalizedTemplate = normalizeTemplateId(template);
      const normalizedFontId = normalizeTemplateFontId(fontId);
      const stack = templateFontStack(normalizedFontId);
      templateFontRoots(normalizedTemplate).filter(Boolean).forEach((root) => {
        root.dataset.font = normalizedFontId;
        root.style.setProperty("--template-font-family", stack);
      });
    }

    async function ensureTemplateFontLoaded(fontId) {
      const normalizedFontId = normalizeTemplateFontId(fontId);
      if (templateFontLoadPromises.has(normalizedFontId)) return templateFontLoadPromises.get(normalizedFontId);
      const task = (async () => {
        if (!document.fonts || !window.FontFace) {
          if (normalizedFontId === DEFAULT_TEMPLATE_FONT_ID) return true;
          throw new Error("Font Loading API is unavailable");
        }
        if (normalizedFontId !== DEFAULT_TEMPLATE_FONT_ID) await ensureTemplateFontLoaded(DEFAULT_TEMPLATE_FONT_ID);
        const config = TEMPLATE_FONTS[normalizedFontId];
        const fontSpec = '900 50px "' + config.family + '"';
        const registeredFaces = Array.from(document.fonts).filter((face) => (
          String(face.family || "").replace(/^["']|["']$/g, "") === config.family
        ));
        if (!registeredFaces.length) {
          const sourceUrl = new URL(config.url, document.baseURI).href;
          const face = new FontFace(config.family, 'url("' + sourceUrl + '") format("' + config.format + '")', {
            style: "normal",
            weight: config.weight
          });
          await face.load();
          document.fonts.add(face);
        } else {
          await Promise.all(registeredFaces.map((face) => face.load()));
        }
        await document.fonts.load(fontSpec, TEMPLATE_FONT_TEST_TEXT);
        await document.fonts.ready;
        return true;
      })();
      templateFontLoadPromises.set(normalizedFontId, task);
      try {
        return await task;
      } catch (error) {
        templateFontLoadPromises.delete(normalizedFontId);
        throw error;
      }
    }

    function templateFontHasOverflow() {
      const root = activeCardElement();
      if (!root || root.hidden) return false;
      return Array.from(root.querySelectorAll('textarea, input[type="text"], [contenteditable="true"]')).some((node) => {
        if (node.closest("[data-editor-only]") || node.hidden) return false;
        return node.scrollWidth > node.clientWidth + 1 || node.scrollHeight > node.clientHeight + 1;
      });
    }

    function syncTemplateFontMenu() {
      const activeFontId = templateFontId();
      fontButtons.forEach((button) => {
        const selected = button.dataset.font === activeFontId;
        button.classList.toggle("active", selected);
        button.classList.toggle("is-loading", button.dataset.font === pendingTemplateFontId);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });
      if (fontBar && !fontBar.hidden) window.requestAnimationFrame(scrollActivePickerIntoView);
    }

    async function chooseTemplateFont(fontId) {
      const normalizedFontId = normalizeTemplateFontId(fontId);
      const targetTemplate = currentTemplate();
      if (normalizedFontId === templateFontId(targetTemplate) || pendingTemplateFontId) return;
      pendingTemplateFontId = normalizedFontId;
      syncTemplateFontMenu();
      try {
        await ensureTemplateFontLoaded(normalizedFontId);
        templateFontPreferences = { ...templateFontPreferences, [targetTemplate]: normalizedFontId };
        saveTemplateFontPreferences();
        applyTemplateFont(targetTemplate, normalizedFontId);
        reviewChineseCharacterLimits = null;
        updateReviewCharacterCounts();
        fitStage();
      } catch (error) {
        console.warn("Template font load failed", error);
        const detail = error && error.message ? error.message : UI_FONT_FALLBACK_UNKNOWN;
        await showAppAlert(UI_TEMPLATE_FONT_LOAD_FAILED + detail, UI_TEMPLATE_FONT_TITLE);
      } finally {
        pendingTemplateFontId = "";
        syncTemplateFontMenu();
      }
    }

    function isPagedTemplate(template = currentTemplate()) {
      return template === "full" || template === "compact";
    }

    function currentContinuationState(template = currentTemplate()) {
      return continuationState[template] || null;
    }

    function templatePageTotal(template = currentTemplate()) {
      const pageState = currentContinuationState(template);
      return pageState ? pageState.pages.length + 1 : 1;
    }

    function paddedPageNumber(value) {
      return String(Math.max(0, Number(value) || 0)).padStart(2, "0");
    }

    function normalizeContinuationPageState(value) {
      const pages = Array.isArray(value?.pages)
        ? value.pages.map((page) => typeof page === "string" ? page : String(page?.text || ""))
        : [];
      const current = Math.max(0, Math.min(pages.length, Number(value?.current) || 0));
      return { current, pages };
    }

    function readCompactContinuationSnapshot() {
      try {
        const value = JSON.parse(localStorage.getItem(COMPACT_CONTINUATION_STORAGE_KEY) || "null");
        return value && typeof value === "object" ? normalizeContinuationPageState(value) : null;
      } catch {
        return null;
      }
    }

    function compactContinuationReviewText() {
      return String(compactContinuationReview.innerText || compactContinuationReview.textContent || "").replace(/\r\n?/g, "\n");
    }

    function reviewCharacterCountText(value, limit) {
      return Array.from(String(value || "")).length + " / " + limit + " " + String.fromCharCode(0x5b57);
    }

    function currentReviewChineseCharacterLimits() {
      if (reviewChineseCharacterLimits) return reviewChineseCharacterLimits;
      const sample = String.fromCharCode(0x6c49).repeat(REVIEW_CHARACTER_LIMIT_SAMPLE_LENGTH);
      reviewChineseCharacterLimits = {
        fullHome: wrappingCharacters(limitedFullReviewText(sample)).length,
        fullContinuation: wrappingCharacters(limitedFullContinuationReviewText(sample)).length,
        compactContinuation: wrappingCharacters(limitedCompactContinuationReviewText(sample)).length
      };
      return reviewChineseCharacterLimits;
    }

    function updateReviewCharacterCounts() {
      const limits = currentReviewChineseCharacterLimits();
      reviewCharacterCount.textContent = reviewCharacterCountText(reviewText.value, limits.fullHome);
      fullContinuationReviewCharacterCount.textContent = reviewCharacterCountText(fullContinuationReview.value, limits.fullContinuation);
      compactContinuationReviewCharacterCount.textContent = reviewCharacterCountText(compactContinuationReviewText(), limits.compactContinuation);
    }

    function limitedCompactContinuationReviewText(value) {
      return limitedByMeasuredLines(
        value,
        compactContinuationReview,
        COMPACT_CONTINUATION_COLUMN_WIDTH,
        COMPACT_CONTINUATION_LINES_PER_COLUMN * 2
      );
    }

    function renderCompactContinuationReview(value) {
      compactContinuationReview.textContent = String(value || "");
    }

    function limitCompactContinuationReviewInput() {
      const current = compactContinuationReviewText();
      const limited = limitedCompactContinuationReviewText(current);
      if (limited === current) return false;
      compactContinuationReview.textContent = limited;
      placeCaretAtFullFieldEnd(compactContinuationReview);
      return true;
    }

    function updateCompactContinuationPageText(value) {
      const pageState = continuationState.compact;
      if (pageState.current <= 0) return;
      pageState.pages[pageState.current - 1] = value;
    }

    function commitCompactContinuationReviewText() {
      const pageState = continuationState.compact;
      if (compactContinuationCard.hidden || pageState.current <= 0) return false;
      const pageText = compactContinuationReviewText();
      const changed = pageState.pages[pageState.current - 1] !== pageText;
      updateCompactContinuationPageText(pageText);
      return changed;
    }

    function syncContinuationSharedInfo() {
      const title = editableText("recordTitle");
      const cv = editableText("cvText");
      const rj = editableText("rjText");
      fullContinuationTitle.textContent = title;
      fullContinuationCv.textContent = cv;
      fullContinuationRj.textContent = rj;
      compactContinuationTitle.textContent = title;
      compactContinuationCv.textContent = cv;
      compactContinuationRj.textContent = rj;
      const hasCover = Boolean(coverImage.getAttribute("src") && coverBox.classList.contains("has-image"));
      fullContinuationCover.parentElement.classList.toggle("has-image", hasCover);
      if (hasCover) {
        fullContinuationCover.src = coverImage.src;
        fullContinuationCover.style.objectFit = coverImage.style.objectFit === "cover" ? "cover" : "contain";
      } else {
        fullContinuationCover.removeAttribute("src");
      }
    }

    function renderTemplatePageMenu() {
      const template = currentTemplate();
      const pageState = currentContinuationState(template);
      templatePageMenu.innerHTML = "";
      if (!pageState) return;
      const total = templatePageTotal(template);
      for (let index = 0; index < total; index += 1) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "template-page-jump" + (index === pageState.current ? " active" : "");
        const number = document.createTextNode(
          String.fromCharCode(0x3010) + paddedPageNumber(index + 1) + String.fromCharCode(0x3011)
        );
        button.appendChild(number);
        button.addEventListener("click", () => {
          commitCompactContinuationReviewText();
          pageState.current = index;
          closeTemplatePageMenu();
          renderTemplatePage();
          saveState();
        });
        templatePageMenu.appendChild(button);
      }
    }

    function closeTemplatePageMenu() {
      templatePageMenu.hidden = true;
      templatePageCount.setAttribute("aria-expanded", "false");
    }

    function renderTemplatePage(fit = true) {
      const template = currentTemplate();
      const pageState = currentContinuationState(template);
      if (!pageState) {
        templatePageControls.hidden = true;
        fullContinuationCard.hidden = true;
        compactContinuationCard.hidden = true;
        if (fit) fitStage();
        return;
      }
      templatePageControls.classList.toggle("compact", template === "compact");
      pageState.current = Math.max(0, Math.min(pageState.pages.length, pageState.current));
      const total = templatePageTotal(template);
      const continuation = pageState.current > 0;
      card.hidden = continuation;
      fullContinuationCard.hidden = !(template === "full" && continuation);
      compactContinuationCard.hidden = !(template === "compact" && continuation);
      templatePageControls.hidden = false;
      templatePageCountText.textContent = paddedPageNumber(pageState.current + 1) + " / " + paddedPageNumber(total);
      templatePrevPage.disabled = pageState.current === 0;
      templateNextPage.disabled = pageState.current >= total - 1;
      templateDeletePage.hidden = !continuation;
      if (continuation) {
        syncContinuationSharedInfo();
        const pageText = pageState.pages[pageState.current - 1] || "";
        if (template === "full") {
          fullContinuationReview.value = pageText;
          fullContinuationPageNumber.textContent = paddedPageNumber(pageState.current + 1) + " / " + paddedPageNumber(total);
        } else {
          renderCompactContinuationReview(pageText);
          compactContinuationPageNumber.textContent = paddedPageNumber(pageState.current + 1) + " / " + paddedPageNumber(total);
        }
      }
      updateReviewCharacterCounts();
      renderTemplatePageMenu();
      if (fit) fitStage();
    }

    function changeTemplatePage(delta) {
      const pageState = currentContinuationState();
      if (!pageState) return;
      const next = Math.max(0, Math.min(pageState.pages.length, pageState.current + delta));
      if (next === pageState.current) return;
      commitCompactContinuationReviewText();
      pageState.current = next;
      closeTemplatePageMenu();
      renderTemplatePage();
      saveState();
    }

    function addTemplateContinuationPage() {
      const pageState = currentContinuationState();
      if (!pageState) return;
      commitCompactContinuationReviewText();
      pageState.pages.push("");
      pageState.current = pageState.pages.length;
      closeTemplatePageMenu();
      renderTemplatePage();
      saveState();
      trackFixedUsageEvent("feature-continuation-page-added");
    }

    async function deleteCurrentTemplateContinuationPage() {
      const pageState = currentContinuationState();
      if (!pageState || pageState.current === 0) return;
      if (!await showAppConfirm(UI_DELETE_CONTINUATION_CONFIRM)) return;
      pageState.pages.splice(pageState.current - 1, 1);
      pageState.current = Math.min(pageState.current, pageState.pages.length);
      closeTemplatePageMenu();
      renderTemplatePage();
      saveState();
    }

    const fullFieldComposing = new WeakSet();

    function wrappingCharacters(value) {
      const text = String(value || "");
      return templateGraphemeSegmenter
        ? Array.from(templateGraphemeSegmenter.segment(text), (part) => part.segment)
        : Array.from(text);
    }

    function fullWidthUnits(character) {
      const codePoint = character.codePointAt(0) || 0;
      if (/^[\u0000-\u007f]$/.test(character)) return 1;
      if ((codePoint >= 0xff61 && codePoint <= 0xffdc) || (codePoint >= 0xffe8 && codePoint <= 0xffee)) return 1;
      return 2;
    }

    function fullWidthClusterUnits(character) {
      return Array.from(character).reduce((sum, codePointCharacter) => sum + fullWidthUnits(codePointCharacter), 0);
    }

    function limitedByFullWidth(value, maxWidth, ellipsis = false) {
      const characters = wrappingCharacters(value);
      const maxUnits = maxWidth * 2;
      const totalUnits = characters.reduce((sum, character) => sum + fullWidthClusterUnits(character), 0);
      if (totalUnits <= maxUnits) return characters.join("");
      const contentUnits = ellipsis ? maxUnits - 2 : maxUnits;
      let usedUnits = 0;
      let limited = "";
      for (const character of characters) {
        const units = fullWidthClusterUnits(character);
        if (usedUnits + units > contentUnits) break;
        limited += character;
        usedUnits += units;
      }
      return limited + (ellipsis ? "\u2026" : "");
    }

    function fullWidthWrappedLines(value, lineWidth, maxLines) {
      const lines = [];
      const maxUnits = lineWidth * 2;
      let line = "";
      let lineUnits = 0;
      for (const character of wrappingCharacters(value)) {
        const units = fullWidthClusterUnits(character);
        if (line && lineUnits + units > maxUnits) {
          lines.push(line);
          if (lines.length >= maxLines) return lines;
          line = "";
          lineUnits = 0;
        }
        line += character;
        lineUnits += units;
      }
      if (line || !lines.length) lines.push(line);
      return lines;
    }

    function editableInputText(node) {
      if (!node) return "";
      const value = node === recordTitle ? node.innerText : node.textContent;
      return String(value || "").replace(/\r\n?/g, "\n");
    }

    function measuredTextContext(node) {
      const ctx = measuredTextCanvas.getContext("2d");
      const style = window.getComputedStyle(node);
      ctx.font = [
        style.fontStyle,
        style.fontVariant,
        style.fontWeight,
        style.fontSize,
        style.fontFamily
      ].filter(Boolean).join(" ");
      if ("letterSpacing" in ctx) ctx.letterSpacing = style.letterSpacing === "normal" ? "0px" : style.letterSpacing;
      return ctx;
    }

    function limitedByMeasuredLines(value, node, maxWidth, maxLines) {
      const text = String(value || "").replace(/\r\n?/g, "\n");
      const ctx = measuredTextContext(node);
      let limited = "";
      let line = "";
      let lineCount = 1;
      for (const character of wrappingCharacters(text)) {
        if (character === "\n") {
          if (lineCount >= maxLines) break;
          limited += character;
          line = "";
          lineCount += 1;
          continue;
        }
        const nextLine = line + character;
        if (line && ctx.measureText(nextLine).width > maxWidth) {
          if (lineCount >= maxLines) break;
          line = character;
          lineCount += 1;
        } else {
          line = nextLine;
        }
        limited += character;
      }
      return limited;
    }

    function measuredWrappedLineCount(value, node, maxWidth) {
      const text = String(value || "").replace(/\r\n?/g, "\n");
      if (!text) return 0;
      const ctx = measuredTextContext(node);
      let line = "";
      let lineCount = 1;
      for (const character of wrappingCharacters(text)) {
        if (character === "\n") {
          line = "";
          lineCount += 1;
          continue;
        }
        const nextLine = line + character;
        if (line && ctx.measureText(nextLine).width > maxWidth) {
          line = character;
          lineCount += 1;
        } else {
          line = nextLine;
        }
      }
      return lineCount;
    }

    function limitedFullFieldText(node, value = editableInputText(node)) {
      const maxWidth = FULL_FIELD_MAX_WIDTHS.get(node);
      if (!maxWidth) return value;
      const normalizedValue = node === cvText || node === circleText ? String(value).replace(/[\r\n]+/g, "") : value;
      const limited = limitedByFullWidth(normalizedValue, maxWidth, node === recordTitle || node === cvText || node === circleText);
      return node === recordTitle ? limitedByMeasuredLines(limited, recordTitle, 904, 2) : limited;
    }

    function limitedCompactFieldText(node, value = editableInputText(node)) {
      if (node === cvText || node === circleText) {
        const normalizedValue = String(value).replace(/[\r\n]+/g, "");
        return limitedByFullWidth(normalizedValue, COMPACT_CV_CIRCLE_LINE_WIDTH * TWO_LINE_FIELD_MAX_LINES, true);
      }
      const maxLength = COMPACT_FIELD_MAX_LENGTHS.get(node);
      if (!maxLength) return value;
      const characters = wrappingCharacters(value);
      if (node === rjText) {
        return limitedWorknoText(characters.join(""));
      }
      const limited = characters.length <= maxLength
        ? characters.join("")
        : characters.slice(0, maxLength - 1).join("") + "\u2026";
      return node === recordTitle ? limitedByMeasuredLines(limited, recordTitle, 560, 3) : limited;
    }

    function limitedCurrentFieldText(node, value = editableInputText(node)) {
      if (currentTemplate() === "compact") return limitedCompactFieldText(node, value);
      if (currentTemplate() === "full") return limitedFullFieldText(node, value);
      return value;
    }

    function placeCaretAtFullFieldEnd(node) {
      if (document.activeElement !== node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      range.collapse(false);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }

    function placeCaretAtFullFieldOffset(node, offset) {
      if (document.activeElement !== node) return;
      const textNode = node.firstChild;
      if (!textNode || textNode.nodeType !== Node.TEXT_NODE) {
        placeCaretAtFullFieldEnd(node);
        return;
      }
      const range = document.createRange();
      range.setStart(textNode, Math.max(0, Math.min(textNode.data.length, offset)));
      range.collapse(true);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }

    function applyLimitedFullFieldText(node, limited) {
      const wrappedLineWidth = currentTemplate() === "full" && (node === cvText || node === circleText)
        ? (node === cvText ? FULL_CV_LINE_WIDTH : FULL_CIRCLE_LINE_WIDTH)
        : (currentTemplate() === "compact" && (node === cvText || node === circleText) ? COMPACT_CV_CIRCLE_LINE_WIDTH : 0);
      const hasUnexpectedMarkup = Array.from(node.childNodes).some((child) => (
        child.nodeType === Node.ELEMENT_NODE && !(wrappedLineWidth && child.nodeName === "BR")
      ));
      if (wrappedLineWidth) {
        const lines = fullWidthWrappedLines(limited, wrappedLineWidth, TWO_LINE_FIELD_MAX_LINES);
        const currentLines = Array.from(node.childNodes).reduce((items, child) => {
          if (child.nodeName === "BR") items.push("");
          else items[items.length - 1] += child.textContent || "";
          return items;
        }, [""]);
        if (!hasUnexpectedMarkup && currentLines.length === lines.length && currentLines.every((line, index) => line === lines[index])) return false;
        node.replaceChildren();
        lines.forEach((line, index) => {
          if (index) node.appendChild(document.createElement("br"));
          node.appendChild(document.createTextNode(line));
        });
        placeCaretAtFullFieldEnd(node);
        return true;
      }
      if ((node === cvText || node === circleText) && node.querySelector("br")) {
        node.textContent = limited;
        placeCaretAtFullFieldEnd(node);
        return true;
      }
      if (!hasUnexpectedMarkup && limited === editableInputText(node)) return false;
      node.textContent = limited;
      placeCaretAtFullFieldEnd(node);
      return true;
    }

    function limitCurrentField(node) {
      if (!node || !["full", "compact"].includes(currentTemplate())) return false;
      return applyLimitedFullFieldText(node, limitedCurrentFieldText(node));
    }

    function fullFieldSelectionOffsets(node) {
      const selection = window.getSelection();
      const textLength = node.textContent.length;
      if (!selection || !selection.rangeCount || !node.contains(selection.anchorNode) || !node.contains(selection.focusNode)) {
        return { start: textLength, end: textLength };
      }
      const offsetFor = (selectionNode, selectionOffset) => {
        const range = document.createRange();
        range.selectNodeContents(node);
        range.setEnd(selectionNode, selectionOffset);
        return range.toString().length;
      };
      const anchor = offsetFor(selection.anchorNode, selection.anchorOffset);
      const focus = offsetFor(selection.focusNode, selection.focusOffset);
      return { start: Math.min(anchor, focus), end: Math.max(anchor, focus) };
    }

    function limitAllCurrentFields() {
      FULL_FIELD_MAX_WIDTHS.forEach((maxWidth, node) => limitCurrentField(node));
      if (currentTemplate() === "full") limitFullReviewInput(reviewText);
    }

    FULL_FIELD_MAX_WIDTHS.forEach((maxWidth, node) => {
      node?.addEventListener("beforeinput", (event) => {
        if (!["full", "compact"].includes(currentTemplate()) || fullFieldComposing.has(node) || event.isComposing) return;
        if (node === recordTitle && ["insertParagraph", "insertLineBreak"].includes(event.inputType)) {
          const current = editableInputText(node);
          const selection = fullFieldSelectionOffsets(node);
          const next = current.slice(0, selection.start) + "\n" + current.slice(selection.end);
          const limited = limitedCurrentFieldText(node, next);
          event.preventDefault();
          node.textContent = limited;
          placeCaretAtFullFieldOffset(node, Math.min(limited.length, selection.start + 1));
          node.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: event.inputType, data: "\n" }));
          return;
        }
        if (!event.inputType.startsWith("insert") || typeof event.data !== "string") return;
        const current = editableInputText(node);
        const selection = fullFieldSelectionOffsets(node);
        const next = current.slice(0, selection.start) + event.data + current.slice(selection.end);
        const limited = limitedCurrentFieldText(node, next);
        if (limited === next) return;
        event.preventDefault();
        applyLimitedFullFieldText(node, limited);
        node.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: event.inputType, data: event.data }));
      });
      node?.addEventListener("compositionstart", () => {
        fullFieldComposing.add(node);
      });
      node?.addEventListener("compositionend", () => {
        fullFieldComposing.delete(node);
        limitCurrentField(node);
        scheduleSave();
      });
      node?.addEventListener("input", () => {
        if (!fullFieldComposing.has(node)) limitCurrentField(node);
      });
    });

    [cvText, circleText, rjText, durationText].forEach((node) => {
      node?.addEventListener("keydown", (event) => {
        if (event.key === "Enter") event.preventDefault();
      });
    });

    const fullReviewComposing = new WeakSet();

    function limitedFullReviewText(value) {
      return limitedByMeasuredLines(
        limitedByFullWidth(value, FULL_REVIEW_MAX_WIDTH),
        reviewText,
        FULL_REVIEW_LINE_WIDTH,
        FULL_REVIEW_MAX_LINES
      );
    }

    function limitFullReviewInput(input) {
      if (!input || currentTemplate() !== "full") return false;
      const limited = limitedFullReviewText(input.value);
      if (limited === input.value) return false;
      const caret = Math.min(limited.length, input.selectionStart ?? limited.length);
      input.value = limited;
      input.setSelectionRange(caret, caret);
      return true;
    }

    function bindFullReviewLimit(input) {
      input?.addEventListener("beforeinput", (event) => {
        if (currentTemplate() !== "full" || fullReviewComposing.has(input) || event.isComposing) return;
        if (!event.inputType.startsWith("insert") || typeof event.data !== "string") return;
        const start = input.selectionStart ?? input.value.length;
        const end = input.selectionEnd ?? input.value.length;
        const next = input.value.slice(0, start) + event.data + input.value.slice(end);
        const limited = limitedFullReviewText(next);
        if (limited === next) return;
        event.preventDefault();
        input.value = limited;
        input.setSelectionRange(limited.length, limited.length);
        input.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: event.inputType, data: event.data }));
      });
      input?.addEventListener("compositionstart", () => fullReviewComposing.add(input));
      input?.addEventListener("compositionend", () => {
        fullReviewComposing.delete(input);
        limitFullReviewInput(input);
        scheduleSave();
      });
      input?.addEventListener("input", () => {
        if (!fullReviewComposing.has(input)) limitFullReviewInput(input);
      });
    }

    bindFullReviewLimit(reviewText);
    bindFullReviewLimit(reviewEditArea);

    function limitedFullContinuationReviewText(value) {
      return limitedByMeasuredLines(
        value,
        fullContinuationReview,
        FULL_CONTINUATION_REVIEW_WIDTH,
        FULL_CONTINUATION_REVIEW_MAX_LINES
      );
    }

    const fullContinuationReviewComposing = new WeakSet();

    function limitFullContinuationReviewInput(input) {
      if (!input) return false;
      const limited = limitedFullContinuationReviewText(input.value);
      if (limited === input.value) return false;
      const caret = Math.min(limited.length, input.selectionStart ?? limited.length);
      input.value = limited;
      input.setSelectionRange(caret, caret);
      return true;
    }

    function bindFullContinuationReviewLimit(input) {
      input?.addEventListener("beforeinput", (event) => {
        if (fullContinuationReviewComposing.has(input) || event.isComposing) return;
        if (!event.inputType.startsWith("insert") || typeof event.data !== "string") return;
        const start = input.selectionStart ?? input.value.length;
        const end = input.selectionEnd ?? input.value.length;
        const next = input.value.slice(0, start) + event.data + input.value.slice(end);
        const limited = limitedFullContinuationReviewText(next);
        if (limited === next) return;
        event.preventDefault();
        input.value = limited;
        const caret = Math.min(limited.length, start + event.data.length);
        input.setSelectionRange(caret, caret);
        input.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: event.inputType, data: event.data }));
      });
      input?.addEventListener("compositionstart", () => fullContinuationReviewComposing.add(input));
      input?.addEventListener("compositionend", () => {
        fullContinuationReviewComposing.delete(input);
        if (limitFullContinuationReviewInput(input)) {
          input.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertCompositionText" }));
        }
        scheduleSave();
      });
      input?.addEventListener("input", () => {
        if (!fullContinuationReviewComposing.has(input)) limitFullContinuationReviewInput(input);
      });
    }

    bindFullContinuationReviewLimit(fullContinuationReview);

    function setActiveMenu(menuName, persist = true) {
      const allowedMenus = new Set(["template", "theme", "font"]);
      const nextMenu = allowedMenus.has(menuName) ? menuName : "template";
      menuTabs.forEach((button) => button.classList.toggle("active", button.dataset.menu === nextMenu));
      menuPanels.forEach((panel) => {
        panel.hidden = panel.dataset.menuPanel !== nextMenu;
      });
      if (nextMenu === "font") syncTemplateFontMenu();
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
      if (fullContinuationCard) fullContinuationCard.hidden = true;
      if (compactContinuationCard) compactContinuationCard.hidden = true;
      if (templatePageControls) templatePageControls.hidden = !templatePage || !isPagedTemplate();
      if (grid9Card) grid9Card.hidden = !grid9Active;
      if (grid9ExternalTools) grid9ExternalTools.hidden = !grid9Active;
      if (quickCard) quickCard.hidden = !quickActive;
      if (quickExternalTools) quickExternalTools.hidden = !quickActive;
      if (trioCard) trioCard.hidden = !trioActive;
      if (trioExternalTools) trioExternalTools.hidden = !trioActive;
      if (imageToolPage) imageToolPage.hidden = page !== "image-tool";
      if (collectionPage) collectionPage.hidden = page !== "collection";
      if (collectionDetailPage) collectionDetailPage.hidden = true;
      if (templatePage && isPagedTemplate()) renderTemplatePage(false);
    }

    function setMainPage(pageName, persist = true) {
      const allowedPages = new Set(["template", "image-tool", "collection"]);
      const nextPage = allowedPages.has(pageName) ? pageName : "template";
      const previousPage = mainNavButtons.find((button) => button.classList.contains("active"))?.dataset.page || "";
      commitCompactContinuationReviewText();
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
      if (persist && nextPage === "collection" && previousPage !== "collection") {
        trackFixedUsageEvent("feature-open-collection");
      }
      if (persist && nextPage === "image-tool" && previousPage !== "image-tool") {
        trackFixedUsageEvent("feature-open-image-tool");
      }
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
      return 10;
    }

    function themePageCount() {
      return Math.max(1, Math.ceil(Math.max(0, themeButtons.length - themePageSize()) / 5) + 1);
    }

    function setThemePage(index) {
      const count = themePageCount();
      themePageIndex = Math.max(0, Math.min(count - 1, index));
      updateThemePager();
    }

    function ensureThemePageForTheme(themeId) {
      const index = themeButtons.findIndex((button) => button.dataset.theme === themeId);
      if (index < 0) return;
      const start = themePageIndex * 5;
      if (index >= start && index < start + themePageSize()) return;
      themePageIndex = Math.max(0, Math.ceil((index - themePageSize() + 1) / 5));
    }

    function updateThemePager() {
      if (isMobileView()) {
        themeButtons.forEach((button) => button.classList.remove("hidden"));
        updatePickerArrow();
        return;
      }
      if (!themePager || !themeBar) return;
      const pageSize = themePageSize();
      const count = themePageCount();
      themePageIndex = Math.max(0, Math.min(count - 1, themePageIndex));
      const start = themePageIndex * 5;
      const end = start + pageSize;
      themeButtons.forEach((button, index) => {
        button.classList.toggle("hidden", index < start || index >= end);
      });
      themePager.classList.toggle("hidden", count <= 1);
      if (themePageText) themePageText.textContent = (themePageIndex + 1) + " / " + count;
      if (themePrevButton) themePrevButton.hidden = themePageIndex <= 0;
      if (themeNextButton) themeNextButton.hidden = themePageIndex >= count - 1;
    }

    function activePicker() {
      if (fontBar && !fontBar.hidden) return fontOptions;
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
      if (el === fontOptions) return;
      if (!el || el.scrollWidth <= el.clientWidth + 2) return;
      const active = el.querySelector(".active");
      if (active) active.scrollIntoView({ block: "nearest", inline: "start" });
    }

    function applyCardTheme(themeId, persist = true) {
      const normalizedThemeId = normalizeThemeId(themeId);
      const nextId = CARD_THEMES[normalizedThemeId] ? normalizedThemeId : DEFAULT_THEME_ID;
      currentThemeId = nextId;
      card.dataset.theme = nextId;
      if (fullContinuationCard) fullContinuationCard.dataset.theme = nextId;
      if (compactContinuationCard) compactContinuationCard.dataset.theme = nextId;
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
      const pageState = currentContinuationState();
      if (pageState?.current > 0) return currentTemplate() === "compact" ? compactContinuationCard : fullContinuationCard;
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
      const mobileDisplayScale = isMobileView() ? 1.03 : 1;
      const fullScale = isMobileView()
        ? Math.min(1, (availableWidth * mobileDisplayScale) / size.width)
        : Math.min(1, availableWidth / size.width, availableHeight / size.height);

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
      stage.style.height = (size.height * fullScale + (isMobileView() ? 24 : 16)) + "px";
      stage.scrollLeft = 0;
      stage.scrollTop = 0;
      mobileFocusBack.classList.add("hidden");
    }

    function updateReviewEditLineStatus() {
      const lineCount = measuredWrappedLineCount(reviewEditArea.value, reviewText, FULL_REVIEW_LINE_WIDTH);
      reviewEditLineStatus.textContent = reviewCharacterCountText(reviewEditArea.value, currentReviewChineseCharacterLimits().fullHome) + " \u00b7 " + String.fromCharCode(0x672c, 0x9875) + " " + lineCount + " / " + FULL_REVIEW_MAX_LINES + " " + String.fromCharCode(0x884c);
      reviewEditLineStatus.classList.toggle("is-full", lineCount >= FULL_REVIEW_MAX_LINES);
    }

    function updateReviewFocusViewport() {
      if (reviewEditModal.hidden) return;
      const viewport = window.visualViewport;
      reviewEditModal.style.setProperty("--review-focus-vv-left", Math.round(viewport?.offsetLeft || 0) + "px");
      reviewEditModal.style.setProperty("--review-focus-vv-top", Math.round(viewport?.offsetTop || 0) + "px");
      reviewEditModal.style.setProperty("--review-focus-vv-width", Math.max(1, Math.round(viewport?.width || window.innerWidth || document.documentElement.clientWidth)) + "px");
      reviewEditModal.style.setProperty("--review-focus-vv-height", Math.max(1, Math.round(viewport?.height || window.innerHeight || document.documentElement.clientHeight)) + "px");
    }

    function scheduleReviewFocusViewportUpdate() {
      window.cancelAnimationFrame(reviewViewportFrame);
      reviewViewportFrame = window.requestAnimationFrame(updateReviewFocusViewport);
    }

    function startReviewFocusViewportTracking() {
      stopReviewFocusViewportTracking();
      updateReviewFocusViewport();
      window.visualViewport?.addEventListener("resize", scheduleReviewFocusViewportUpdate);
      window.visualViewport?.addEventListener("scroll", scheduleReviewFocusViewportUpdate);
    }

    function stopReviewFocusViewportTracking() {
      window.cancelAnimationFrame(reviewViewportFrame);
      reviewViewportFrame = 0;
      window.visualViewport?.removeEventListener("resize", scheduleReviewFocusViewportUpdate);
      window.visualViewport?.removeEventListener("scroll", scheduleReviewFocusViewportUpdate);
    }

    function saveReviewEditorPosition() {
      reviewEditorSelectionStart = reviewEditArea.selectionStart ?? reviewEditArea.value.length;
      reviewEditorSelectionEnd = reviewEditArea.selectionEnd ?? reviewEditorSelectionStart;
      reviewEditorScrollTop = reviewEditArea.scrollTop;
    }

    function focusReviewEditArea() {
      try {
        reviewEditArea.focus({ preventScroll: true });
      } catch (error) {
        reviewEditArea.focus();
      }
      const textLength = reviewEditArea.value.length;
      reviewEditArea.setSelectionRange(
        Math.min(reviewEditorSelectionStart, textLength),
        Math.min(reviewEditorSelectionEnd, textLength)
      );
      window.requestAnimationFrame(() => {
        reviewEditArea.scrollTop = reviewEditorScrollTop;
      });
    }

    function syncReviewEditorToCard() {
      reviewText.value = reviewEditArea.value;
      reviewText.dispatchEvent(new Event("input", { bubbles: true }));
      if (reviewText.value !== reviewEditArea.value) {
        const caret = Math.min(reviewEditArea.selectionStart ?? reviewText.value.length, reviewText.value.length);
        reviewEditArea.value = reviewText.value;
        reviewEditArea.setSelectionRange(caret, caret);
      }
      updateReviewEditLineStatus();
    }

    function openReviewEditor() {
      if (!isMobileView() || currentTemplate() !== "full" || continuationState.full.current !== 0) return;
      const app = document.querySelector(".app");
      reviewFocusSessionActive = true;
      trackFixedUsageEvent("feature-mobile-review-focus-editor");
      reviewEditorAppScrollTop = app?.scrollTop || 0;
      reviewEditArea.value = reviewText.value || "";
      reviewEditorSelectionStart = reviewEditArea.value.length;
      reviewEditorSelectionEnd = reviewEditorSelectionStart;
      reviewEditorScrollTop = 0;
      updateReviewEditLineStatus();
      reviewPreviewToolbar.hidden = true;
      document.body.classList.remove("review-focus-preview");
      document.body.classList.add("review-focus-active");
      reviewEditModal.hidden = false;
      startReviewFocusViewportTracking();
      focusReviewEditArea();
    }

    function openReviewFullPreview() {
      if (!reviewFocusSessionActive) return;
      saveReviewEditorPosition();
      syncReviewEditorToCard();
      reviewEditArea.blur();
      reviewEditModal.hidden = true;
      stopReviewFocusViewportTracking();
      document.body.classList.remove("review-focus-active");
      document.body.classList.add("review-focus-preview");
      reviewPreviewToolbar.hidden = false;
      window.requestAnimationFrame(() => {
        const app = document.querySelector(".app");
        if (app) app.scrollTop = 0;
        fitStage();
      });
    }

    function resumeReviewEditor() {
      if (!reviewFocusSessionActive) return;
      reviewPreviewToolbar.hidden = true;
      document.body.classList.remove("review-focus-preview");
      document.body.classList.add("review-focus-active");
      reviewEditModal.hidden = false;
      startReviewFocusViewportTracking();
      focusReviewEditArea();
    }

    function finishReviewEditor() {
      if (!reviewFocusSessionActive) return;
      if (!reviewEditModal.hidden) {
        saveReviewEditorPosition();
        syncReviewEditorToCard();
      }
      reviewEditArea.blur();
      reviewEditModal.hidden = true;
      reviewPreviewToolbar.hidden = true;
      stopReviewFocusViewportTracking();
      document.body.classList.remove("review-focus-active", "review-focus-preview");
      reviewFocusSessionActive = false;
      scheduleSave();
      window.requestAnimationFrame(() => {
        fitStage();
        const app = document.querySelector(".app");
        if (app) app.scrollTop = reviewEditorAppScrollTop;
      });
    }

    function setTemplate(template, persist = true) {
      const nextTemplate = template === "grid9" ? "grid9" : (template === "quick" ? "quick" : (template === "trio" ? "trio" : (template === "compact" ? "compact" : "full")));
      commitCompactContinuationReviewText();
      card.classList.toggle("compact", nextTemplate === "compact");
      card.classList.toggle("grid9", nextTemplate === "grid9");
      card.classList.toggle("quick", nextTemplate === "quick");
      card.classList.toggle("trio", nextTemplate === "trio");
      if (nextTemplate === "full" || nextTemplate === "compact") {
        card.style.setProperty("--template-font-family", templateFontStack(DEFAULT_TEMPLATE_FONT_ID));
        limitAllCurrentFields();
      }
      applyTemplateFont(nextTemplate);
      templateButtons.forEach((button) => button.classList.toggle("active", button.dataset.template === nextTemplate));
      mobileFocusTarget = null;
      mobileFocusBack?.classList.add("hidden");
      if (stage) stage.classList.remove("is-focused");
      syncTemplatePages();
      if (isPagedTemplate(nextTemplate)) renderTemplatePage(false);
      fitStage();
      syncTemplateFontMenu();
      void ensureTemplateFontLoaded(templateFontId(nextTemplate)).then(() => {
        reviewChineseCharacterLimits = null;
        updateReviewCharacterCounts();
        fitStage();
        syncTemplateFontMenu();
      }).catch((error) => {
        console.warn("Remembered template font load failed", error);
      });
      if (persist) saveState();
    }


    function revokeLastExportUrl() {
      const urls = new Set(lastExportPages.map((page) => page.url).filter(Boolean));
      if (lastExportUrl) urls.add(lastExportUrl);
      urls.forEach((url) => URL.revokeObjectURL(url));
      lastExportUrl = "";
      lastExportPages = [];
      exportPageIndex = 0;
    }

    function safeFilePart(value, fallback = "otome") {
      const clean = String(value || "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9_-]+/g, "")
        .replace(/^-+|-+$/g, "");
      return clean || fallback;
    }

    function rjFilePart(raw) {
      const clean = String(raw || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (!clean) return "otome";
      return clean.startsWith("RJ") || clean.startsWith("BJ") ? clean : "RJ" + clean;
    }

    function firstTemplateRjFilePart(template = currentTemplate()) {
      if (template === "grid9") {
        return rjFilePart(grid9CellEditors.map((cell) => cell.querySelector(".grid9-cell-rj-input").value).find((value) => value.trim()));
      }
      if (template === "quick") {
        return rjFilePart(quickCellEditors.map((cell) => cell.querySelector(".quick-rj").value).find((value) => value.trim()));
      }
      if (template === "trio") {
        return rjFilePart(trioCellEditors.map((cell) => cell.querySelector(".trio-rj-input").value).find((value) => value.trim()));
      }
      return rjFilePart(editableText("rjText"));
    }

    function templateExportFileName(template = currentTemplate()) {
      return [
        safeFilePart(firstTemplateRjFilePart(template)),
        "repo",
        safeFilePart(template),
        safeFilePart(currentThemeId, DEFAULT_THEME_ID)
      ].join("_") + ".png";
    }

    function templatePageExportFileName(template, pageIndex, pageTotal) {
      const base = templateExportFileName(template).replace(/\.png$/i, "");
      return pageTotal > 1 ? base + "_" + paddedPageNumber(pageIndex + 1) + ".png" : base + ".png";
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

    function releaseCanvas(canvas) {
      if (!canvas) return;
      canvas.width = 0;
      canvas.height = 0;
    }

    function renderExportPagePreview() {
      if (!lastExportPages.length) return;
      exportPageIndex = Math.max(0, Math.min(lastExportPages.length - 1, exportPageIndex));
      const page = lastExportPages[exportPageIndex];
      lastExportUrl = page.url;
      lastExportFileName = page.fileName;
      exportPreviewImage.src = page.url;
      exportPageCount.textContent = paddedPageNumber(exportPageIndex + 1) + " / " + paddedPageNumber(lastExportPages.length);
      exportPrevPage.disabled = exportPageIndex === 0;
      exportNextPage.disabled = exportPageIndex >= lastExportPages.length - 1;
      exportPagePager.hidden = lastExportPages.length <= 1;
    }

    function showExportPreviewPages(pages, initialIndex = 0, downloadButtonText = UI_EXPORT_DOWNLOAD_PAGE) {
      revokeLastExportUrl();
      lastExportPages = pages.map((page) => ({
        blob: page.blob,
        fileName: page.fileName || "record-card.png",
        url: URL.createObjectURL(page.blob)
      }));
      exportPageIndex = Math.max(0, Math.min(lastExportPages.length - 1, initialIndex));
      modalDownloadButton.textContent = downloadButtonText;
      renderExportPagePreview();
      exportModal.hidden = false;
    }

    function showExportPreview(blob, fileName = "record-card.png", downloadButtonText = UI_EXPORT_DOWNLOAD_PAGE) {
      showExportPreviewPages([{ blob, fileName }], 0, downloadButtonText);
    }

    function handleExportBlob(blob, fileName = "record-card.png", templateId = "", themeId = currentThemeId, downloadButtonText = UI_EXPORT_DOWNLOAD_PAGE) {
      if (isMobileView()) {
        showExportPreview(blob, fileName, downloadButtonText);
      } else {
        downloadBlob(blob, fileName);
      }
      if (templateId) trackSuccessfulExport(templateId, themeId);
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
      const match = clean.match(/(?:RJ|BJ)?\d+/);
      if (!match) return "";
      return /^(?:RJ|BJ)/.test(match[0]) ? match[0] : "RJ" + match[0];
    }

    function limitedWorknoText(value) {
      const clean = String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (!clean) return "";
      if (/^[RB]$/.test(clean)) return clean;
      const prefixMatch = clean.match(/^(RJ|BJ)/);
      const prefix = prefixMatch ? prefixMatch[1] : "RJ";
      const digits = (prefixMatch ? clean.slice(2) : clean).replace(/\D/g, "").slice(0, 10);
      return prefixMatch || digits ? prefix + digits : "";
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

    function numericText(...values) {
      const text = firstText(...values).replace(/[^0-9]/g, "");
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
      const originalPriceText = numericText(product.official_price, product.regular_price, product.price);
      const currentPriceText = numericText(product.price, product.sales_price, product.price_str, product.work_price);
      const currentDiscountText = numericText(product.discount_rate, product.discount?.discount_rate) || calculateDiscountPercent(originalPriceText, currentPriceText);
      return {
        title: firstText(product.work_name, product.title, product.name, product.work?.work_name),
        cv: firstText(findVoiceText(creators), findVoiceText(product), creatorText(creators, "voice_by"), product.voice_by, product.voice),
        circle: firstText(product.maker_name, product.circle, product.maker?.name, product.brand?.name),
        scenarioWriter: firstText(creatorText(creators, "scenario_by"), creatorText(creators, "scenario"), product.scenario_by, product.scenario),
        illustrator: firstText(creatorText(creators, "illust_by"), creatorText(creators, "illustration_by"), creatorText(creators, "illustrator"), product.illust_by, product.illustration_by, product.illustrator),
        releaseDate: normalizeCardDateValue(firstText(product.regist_date, product.release_date, product.sales_date)),
        originalPrice: originalPriceText,
        currentPrice: currentPriceText,
        currentDiscount: currentDiscountText,
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
        if (endpoint) url.searchParams.set("endpoint", endpoint);
      }
      url.searchParams.set("clientVersion", DLSITE_PROXY_CACHE_VERSION);
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

    function dlsiteProductSites(workno) {
      return String(workno || "").toUpperCase().startsWith("BJ")
        ? ["girls", "comic", "books", "maniax"]
        : ["maniax"];
    }

    async function fetchProductJson(workno) {
      const attempts = dlsiteProductSites(workno).map((site) =>
        "https://www.dlsite.com/" + site + "/api/=/product.json?workno=" + encodeURIComponent(workno)
      );
      const proxyUrl = buildProxyUrl(dlsiteProxyUrl(), workno);
      if (proxyUrl) attempts.push(proxyUrl);
      let lastError;
      for (const url of attempts) {
        try {
          const response = await fetchWithTimeout(url, { mode: "cors", credentials: "omit", cache: "no-store" }, 12000);
          if (!response.ok) throw new Error("HTTP " + response.status);
          const data = await response.json();
          const hasData = Array.isArray(data)
            ? data.length > 0
            : Boolean(data && typeof data === "object" && Object.keys(data).length);
          if (!hasData) throw new Error("empty product");
          return data;
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

    function parseDlwatcherLowestDiscount(raw, workno) {
      const product = raw && typeof raw === "object" ? raw : null;
      if (!product) return "";
      const responseWorkno = normalizeWorkno(firstText(product.productId, product.product_id, product.workno, product.id));
      if (responseWorkno && responseWorkno !== normalizeWorkno(workno)) return "";
      const numberValue = (...values) => {
        const value = values.find(item => item != null && String(item).trim() !== "");
        if (value == null) return NaN;
        const match = String(value).replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
        return match ? Number(match[0]) : NaN;
      };
      const candidates = [
        product.lowestPrice || product.lowest_price || product.lowest,
        product.latestDiscountPrice || product.latest_discount_price || product.latestDiscount
      ].filter(Boolean).map(entry => {
        const priceInfo = entry.priceInfo || entry.price_info || entry;
        return {
          price: numberValue(priceInfo.price, priceInfo.salesPrice, priceInfo.sales_price, entry.price),
          discount: numberValue(priceInfo.discountRate, priceInfo.discount_rate, entry.discountRate, entry.discount_rate)
        };
      }).filter(entry => Number.isFinite(entry.discount) && entry.discount >= 0 && entry.discount <= 100);
      if (!candidates.length) return "";
      candidates.sort((left, right) => {
        if (Number.isFinite(left.price) && Number.isFinite(right.price) && left.price !== right.price) return left.price - right.price;
        return right.discount - left.discount;
      });
      return String(Math.round(candidates[0].discount));
    }

    async function fetchDlwatcherLowestDiscount(workno) {
      const directUrl = "https://dlwatcher.com/product/" + encodeURIComponent(workno) + ".json";
      const proxyUrl = buildProxyUrl(dlsiteProxyUrl(), workno, "dlwatcher");
      const attempts = proxyUrl ? [proxyUrl, directUrl] : [directUrl];
      let lastError;
      let httpError;
      let receivedWithoutDiscount = false;
      for (const url of attempts) {
        try {
          const response = await fetchWithTimeout(url, { mode: "cors", credentials: "omit" }, 12000);
          if (!response.ok) throw new Error("HTTP " + response.status);
          const discount = parseDlwatcherLowestDiscount(await response.json(), workno);
          if (discount !== "") return discount;
          receivedWithoutDiscount = true;
        } catch (error) {
          lastError = error;
          if (!httpError && /^HTTP \d+/.test(String(error && error.message))) httpError = error;
          console.warn("DLwatcher import attempt failed", url, error);
        }
      }
      if (receivedWithoutDiscount) throw new Error("empty lowest discount");
      throw httpError || lastError || new Error("empty lowest discount");
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

    function applyImportedProduct(product, chineseChoice, mode = "overwrite") {
      if (product.title && (mode === "overwrite" || !editableText("recordTitle").trim())) setEditableText("recordTitle", product.title);
      if (product.cv && (mode === "overwrite" || !editableText("cvText").trim())) setEditableText("cvText", product.cv);
      if (product.circle && (mode === "overwrite" || !editableText("circleText").trim())) setEditableText("circleText", product.circle);
      if (product.originalPrice !== "" && (mode === "overwrite" || !originalPrice.value.trim())) originalPrice.value = product.originalPrice;
      if (product.currentPrice !== "" && (mode === "overwrite" || !currentPrice.value.trim())) currentPrice.value = product.currentPrice;
      const importedCurrentDiscount = product.currentDiscount !== "" && (mode === "overwrite" || !currentDiscount.value.trim());
      if (importedCurrentDiscount) {
        currentDiscount.value = product.currentDiscount;
        currentDiscountManual = false;
      }
      if (product.lowestDiscount !== "" && (mode === "overwrite" || !lowestPrice.value.trim())) lowestPrice.value = product.lowestDiscount;
      const currentChineseChoice = document.querySelector(".choice-button.active")?.textContent.trim() || CHOICE_SUBTITLE;
      if (mode === "overwrite" || currentChineseChoice === CHOICE_SUBTITLE) setChineseChoice(chineseChoice);
      if (Array.isArray(product.keywords) && (mode === "overwrite" || !tags.querySelector(".tag"))) renderTags(product.keywords.slice(0, 8));
      if (importedCurrentDiscount) syncDiscountColor();
      else updateDiscount(mode === "overwrite");
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

    function dataUrlToBlob(dataUrl) {
      const match = String(dataUrl || "").match(/^data:([^;,]+)?(;base64)?,(.*)$/s);
      if (!match) throw new Error("Invalid image data URL");
      const mimeType = match[1] || "application/octet-stream";
      const binary = match[2] ? atob(match[3]) : decodeURIComponent(match[3]);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
      return new Blob([bytes], { type: mimeType });
    }

    function nextStoredImageReference() {
      const id = window.crypto?.randomUUID
        ? window.crypto.randomUUID()
        : Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
      return STATE_IMAGE_REFERENCE_PREFIX + id;
    }

    function openImageDatabase() {
      return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
          reject(new Error("IndexedDB is unavailable"));
          return;
        }
        let openRejected = false;
        const request = indexedDB.open(IMAGE_DB_NAME, IMAGE_DB_VERSION);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(IMAGE_DB_STORE)) db.createObjectStore(IMAGE_DB_STORE);
          if (!db.objectStoreNames.contains(IMAGE_DB_META_STORE)) db.createObjectStore(IMAGE_DB_META_STORE);
        };
        request.onsuccess = () => {
          if (openRejected) {
            request.result.close();
            return;
          }
          request.result.onversionchange = () => request.result.close();
          resolve(request.result);
        };
        request.onerror = () => {
          openRejected = true;
          reject(request.error || new Error("Image database open failed"));
        };
        request.onblocked = () => {
          openRejected = true;
          reject(new Error("Image database open blocked"));
        };
      });
    }

    function mergeStoredImageMetadata(current, patch) {
      const existing = current && typeof current === "object" ? current : {};
      const next = patch && typeof patch === "object" ? patch : {};
      const merged = { ...existing, ...next, createdAt: Number(existing.createdAt) || Number(next.createdAt) || Date.now() };
      if (existing.cache === false || next.cache === false) merged.cache = false;
      delete merged.dedupeByContent;
      return merged;
    }

    async function writeStoredImageBlob(reference, blob, metadata = null) {
      const db = await openImageDatabase();
      try {
        await new Promise((resolve, reject) => {
          const transaction = db.transaction([IMAGE_DB_STORE, IMAGE_DB_META_STORE], "readwrite");
          transaction.objectStore(IMAGE_DB_STORE).put(blob, reference);
          const metaStore = transaction.objectStore(IMAGE_DB_META_STORE);
          const metaRequest = metaStore.get(reference);
          metaRequest.onsuccess = () => metaStore.put(mergeStoredImageMetadata(metaRequest.result, metadata), reference);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error || new Error("Image blob write failed"));
          transaction.onabort = () => reject(transaction.error || new Error("Image blob write aborted"));
        });
      } finally {
        db.close();
      }
    }

    async function updateStoredImageMetadata(reference, metadata) {
      if (!reference || !metadata || typeof metadata !== "object") return;
      const db = await openImageDatabase();
      try {
        await new Promise((resolve, reject) => {
          const transaction = db.transaction(IMAGE_DB_META_STORE, "readwrite");
          const store = transaction.objectStore(IMAGE_DB_META_STORE);
          const request = store.get(reference);
          request.onsuccess = () => store.put(mergeStoredImageMetadata(request.result, metadata), reference);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error || new Error("Image metadata update failed"));
          transaction.onabort = () => reject(transaction.error || new Error("Image metadata update aborted"));
        });
      } finally {
        db.close();
      }
    }

    async function readStoredImageBlob(reference) {
      const db = await openImageDatabase();
      try {
        return await new Promise((resolve, reject) => {
          const transaction = db.transaction(IMAGE_DB_STORE, "readonly");
          const request = transaction.objectStore(IMAGE_DB_STORE).get(reference);
          request.onsuccess = () => resolve(request.result || null);
          request.onerror = () => reject(request.error || new Error("Image blob read failed"));
        });
      } finally {
        db.close();
      }
    }

    async function readStoredImageMetadata(reference) {
      const db = await openImageDatabase();
      try {
        return await new Promise((resolve, reject) => {
          const transaction = db.transaction(IMAGE_DB_META_STORE, "readonly");
          const request = transaction.objectStore(IMAGE_DB_META_STORE).get(reference);
          request.onsuccess = () => resolve(request.result || null);
          request.onerror = () => reject(request.error || new Error("Image metadata read failed"));
        });
      } finally {
        db.close();
      }
    }

    async function storedImageContentHash(blob) {
      if (!window.crypto?.subtle || !blob) return "";
      try {
        const digest = await window.crypto.subtle.digest("SHA-256", await blob.arrayBuffer());
        return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
      } catch (error) {
        console.warn("Image content hash unavailable", error);
        return "";
      }
    }

    async function findStoredImageReferenceByContentHash(contentHash) {
      if (!contentHash) return "";
      const { metadata } = await storedImageKeysAndMetadata();
      for (const [reference, entry] of metadata) {
        if (entry?.contentHash === contentHash) return reference;
      }
      return "";
    }

    async function registerNewStoredImage(dataUrl, options = null) {
      if (!String(dataUrl || "").startsWith("data:image/")) return dataUrl;
      try {
        await ensureStoredImageReference(dataUrl, options);
      } catch (error) {
        console.warn("Image blob storage unavailable, keeping inline image", error);
      }
      return dataUrl;
    }

    async function ensureStoredImageReference(value, options = null) {
      const source = String(value || "");
      const metadataOptions = options && typeof options === "object" ? { ...options } : {};
      const dedupeByContent = Boolean(metadataOptions.dedupeByContent);
      delete metadataOptions.dedupeByContent;
      if (!source) return source;
      if (source.startsWith(STATE_IMAGE_REFERENCE_PREFIX)) {
        if (Object.keys(metadataOptions).length) await updateStoredImageMetadata(source, metadataOptions);
        return source;
      }
      if (!source.startsWith("data:image/")) return source;
      const existingReference = storedImageReferenceByDataUrl.get(source);
      if (existingReference) {
        if (dedupeByContent && !metadataOptions.contentHash) metadataOptions.contentHash = await storedImageContentHash(dataUrlToBlob(source));
        if (Object.keys(metadataOptions).length) await updateStoredImageMetadata(existingReference, metadataOptions);
        return existingReference;
      }
      if (storedImageReferencePromiseByDataUrl.has(source)) {
        const pendingReference = await storedImageReferencePromiseByDataUrl.get(source);
        if (Object.keys(metadataOptions).length) await updateStoredImageMetadata(pendingReference, metadataOptions);
        return pendingReference;
      }
      const pending = (async () => {
        const blob = dataUrlToBlob(source);
        if (dedupeByContent && !metadataOptions.contentHash) metadataOptions.contentHash = await storedImageContentHash(blob);
        const duplicateReference = dedupeByContent ? await findStoredImageReferenceByContentHash(metadataOptions.contentHash) : "";
        const reference = duplicateReference || nextStoredImageReference();
        try {
          await writeStoredImageBlob(reference, blob, metadataOptions);
        } catch (error) {
          if (!isStorageQuotaError(error)) throw error;
          await clearRebuildableImageCache();
          await writeStoredImageBlob(reference, blob, metadataOptions);
        }
        storedImageReferenceByDataUrl.set(source, reference);
        storedImageDataUrlByReference.set(reference, source);
        return reference;
      })();
      storedImageReferencePromiseByDataUrl.set(source, pending);
      try {
        return await pending;
      } finally {
        storedImageReferencePromiseByDataUrl.delete(source);
      }
    }

    async function rebuildStoredImageBlob(metadata) {
      let rebuildUrl = normalizeImageUrl(metadata?.rebuildUrl);
      const rebuildWorkno = normalizeWorkno(metadata?.rebuildWorkno);
      if (rebuildWorkno) {
        try {
          const product = parseDlsiteProduct(await fetchProductJson(rebuildWorkno));
          if (product?.coverUrl) rebuildUrl = normalizeImageUrl(product.coverUrl);
        } catch (error) {
          console.warn("Stored image cache RJ rebuild lookup failed", rebuildWorkno, error);
        }
      }
      if (!rebuildUrl) throw new Error("Stored image cache has no rebuild URL");
      const response = await fetchWithTimeout(rebuildUrl, { mode: "cors", credentials: "omit" }, isMobileView() ? 10000 : 15000);
      if (!response.ok) throw new Error("HTTP " + response.status);
      const sourceBlob = await response.blob();
      if (!sourceBlob.type || !sourceBlob.type.startsWith("image/")) throw new Error("Not an image response");
      const image = await loadImage(await blobToDataUrl(sourceBlob));
      const width = image.naturalWidth || image.width || 1;
      const height = image.naturalHeight || image.height || 1;
      const maxSide = Math.max(1, Number(metadata.rebuildMaxSide) || Math.max(width, height));
      const scale = Math.min(1, maxSide / Math.max(width, height));
      const outWidth = Math.max(1, Math.round(width * scale));
      const outHeight = Math.max(1, Math.round(height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = outWidth;
      canvas.height = outHeight;
      const ctx = canvas.getContext("2d");
      if (metadata.rebuildForceJpeg) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, outWidth, outHeight);
      }
      ctx.drawImage(image, 0, 0, outWidth, outHeight);
      const dataUrl = metadata.rebuildForceJpeg || !canvasHasTransparency(ctx, outWidth, outHeight)
        ? canvas.toDataURL("image/jpeg", COVER_JPEG_QUALITY)
        : canvas.toDataURL("image/png");
      releaseCanvas(canvas);
      return dataUrlToBlob(dataUrl);
    }

    async function readOrRebuildStoredImageBlob(reference) {
      let blob = await readStoredImageBlob(reference);
      if (blob) return blob;
      const metadata = await readStoredImageMetadata(reference);
      if (!metadata?.cache || !metadata.rebuildUrl) throw new Error("Stored image is missing: " + reference);
      blob = await rebuildStoredImageBlob(metadata);
      await writeStoredImageBlob(reference, blob, metadata);
      return blob;
    }

    async function resolveStoredImageReference(value) {
      if (!String(value || "").startsWith(STATE_IMAGE_REFERENCE_PREFIX)) return value || "";
      if (storedImageDataUrlByReference.has(value)) return storedImageDataUrlByReference.get(value);
      if (storedImageDataUrlPromiseByReference.has(value)) return storedImageDataUrlPromiseByReference.get(value);
      const pending = (async () => {
        const blob = await readOrRebuildStoredImageBlob(value);
        const dataUrl = await blobToDataUrl(blob);
        storedImageDataUrlByReference.set(value, dataUrl);
        storedImageReferenceByDataUrl.set(dataUrl, value);
        return dataUrl;
      })();
      storedImageDataUrlPromiseByReference.set(value, pending);
      try {
        return await pending;
      } finally {
        storedImageDataUrlPromiseByReference.delete(value);
      }
    }

    async function resolveStoredImageReferenceSafely(value) {
      try {
        return await resolveStoredImageReference(value);
      } catch (error) {
        console.warn("Stored image restore failed", error);
        if (!storedImageRestoreWarned) {
          storedImageRestoreWarned = true;
          const detail = error && (error.name || error.message)
            ? "\n" + [error.name, error.message].filter(Boolean).join(": ")
            : "";
          showAppAlert(String.fromCharCode(0x56fe, 0x7247, 0x8bfb, 0x53d6, 0x5931, 0x8d25, 0xff1a) + detail);
        }
        return "";
      }
    }

    function collectStoredImageReferences(value, references = new Set()) {
      if (typeof value === "string") {
        if (value.startsWith(STATE_IMAGE_REFERENCE_PREFIX)) references.add(value);
        return references;
      }
      if (Array.isArray(value)) {
        value.forEach((item) => collectStoredImageReferences(item, references));
        return references;
      }
      if (value && typeof value === "object") {
        Object.values(value).forEach((item) => collectStoredImageReferences(item, references));
      }
      return references;
    }

    async function storedImageKeysAndMetadata() {
      const db = await openImageDatabase();
      try {
        return await new Promise((resolve, reject) => {
          const transaction = db.transaction([IMAGE_DB_STORE, IMAGE_DB_META_STORE], "readonly");
          const imageKeysRequest = transaction.objectStore(IMAGE_DB_STORE).getAllKeys();
          const metaKeysRequest = transaction.objectStore(IMAGE_DB_META_STORE).getAllKeys();
          const metaValuesRequest = transaction.objectStore(IMAGE_DB_META_STORE).getAll();
          transaction.oncomplete = () => {
            const metadata = new Map((metaKeysRequest.result || []).map((key, index) => [key, metaValuesRequest.result[index]]));
            resolve({ imageKeys: imageKeysRequest.result || [], metaKeys: metaKeysRequest.result || [], metadata });
          };
          transaction.onerror = () => reject(transaction.error || new Error("Image metadata read failed"));
          transaction.onabort = () => reject(transaction.error || new Error("Image metadata read aborted"));
        });
      } finally {
        db.close();
      }
    }

    async function garbageCollectStoredImages(storedState, force = false) {
      if (!storedState || !collectionStorageReadyForGc) return { deleted: 0, kept: 0 };
      const liveReferences = collectStoredImageReferences(storedState);
      const collectionReferences = await collectionStoredImageReferencesReader();
      collectionReferences.forEach((reference) => liveReferences.add(reference));
      const { imageKeys, metaKeys, metadata } = await storedImageKeysAndMetadata();
      const allReferences = Array.from(new Set(imageKeys.concat(metaKeys)));
      const now = Date.now();
      const missingMetadata = [];
      const expiredReferences = [];
      allReferences.forEach((reference) => {
        if (liveReferences.has(reference)) return;
        const createdAt = Number(metadata.get(reference)?.createdAt);
        if (force) expiredReferences.push(reference);
        else if (!Number.isFinite(createdAt)) missingMetadata.push(reference);
        else if (now - createdAt >= STORED_IMAGE_GC_GRACE_MS) expiredReferences.push(reference);
      });
      if (!missingMetadata.length && !expiredReferences.length) return { deleted: 0, kept: allReferences.length };
      const db = await openImageDatabase();
      try {
        await new Promise((resolve, reject) => {
          const transaction = db.transaction([IMAGE_DB_STORE, IMAGE_DB_META_STORE], "readwrite");
          const imageStore = transaction.objectStore(IMAGE_DB_STORE);
          const metaStore = transaction.objectStore(IMAGE_DB_META_STORE);
          missingMetadata.forEach((reference) => metaStore.put({ createdAt: now }, reference));
          expiredReferences.forEach((reference) => {
            imageStore.delete(reference);
            metaStore.delete(reference);
            const dataUrl = storedImageDataUrlByReference.get(reference);
            storedImageDataUrlByReference.delete(reference);
            if (dataUrl) storedImageReferenceByDataUrl.delete(dataUrl);
          });
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error || new Error("Image cleanup failed"));
          transaction.onabort = () => reject(transaction.error || new Error("Image cleanup aborted"));
        });
      } finally {
        db.close();
      }
      return { deleted: expiredReferences.length, kept: allReferences.length - expiredReferences.length };
    }

    async function clearRebuildableImageCache() {
      const { imageKeys, metadata } = await storedImageKeysAndMetadata();
      const cacheReferences = imageKeys.filter((reference) => metadata.get(reference)?.cache === true && metadata.get(reference)?.rebuildUrl);
      if (!cacheReferences.length) return 0;
      const db = await openImageDatabase();
      try {
        await new Promise((resolve, reject) => {
          const transaction = db.transaction(IMAGE_DB_STORE, "readwrite");
          const imageStore = transaction.objectStore(IMAGE_DB_STORE);
          cacheReferences.forEach((reference) => imageStore.delete(reference));
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error || new Error("Rebuildable image cache cleanup failed"));
          transaction.onabort = () => reject(transaction.error || new Error("Rebuildable image cache cleanup aborted"));
        });
      } finally {
        db.close();
      }
      return cacheReferences.length;
    }

    function scheduleStoredImageGarbageCollection(storedState = lastPersistedStoredState) {
      if (storedState) lastPersistedStoredState = storedState;
      window.clearTimeout(storedImageGcTimer);
      storedImageGcTimer = window.setTimeout(() => {
        void garbageCollectStoredImages(lastPersistedStoredState).catch((error) => {
          console.warn("Stored image cleanup skipped", error);
        });
      }, 5000);
    }

    function canvasHasTransparency(ctx, width, height) {
      const pixels = ctx.getImageData(0, 0, width, height).data;
      for (let index = 3; index < pixels.length; index += 4) {
        if (pixels[index] < 255) return true;
      }
      return false;
    }

    function rebuildableRemoteCoverOptions(url, maxSide, forceJpeg, workno = "") {
      return {
        assetType: "remote-cover-cache",
        cache: true,
        rebuildUrl: normalizeImageUrl(url),
        rebuildWorkno: normalizeWorkno(workno),
        rebuildMaxSide: maxSide,
        rebuildForceJpeg: Boolean(forceJpeg)
      };
    }

    async function singleCoverStorageDataUrl(dataUrl, storageOptions = null) {
      if (!dataUrl) return "";
      const image = await loadImage(dataUrl);
      const width = image.naturalWidth || image.width || 1;
      const height = image.naturalHeight || image.height || 1;
      const scale = Math.min(1, SINGLE_COVER_MAX_SIDE / Math.max(width, height));
      const outWidth = Math.max(1, Math.round(width * scale));
      const outHeight = Math.max(1, Math.round(height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = outWidth;
      canvas.height = outHeight;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, outWidth, outHeight);
      ctx.drawImage(image, 0, 0, outWidth, outHeight);
      const output = canvasHasTransparency(ctx, outWidth, outHeight)
        ? canvas.toDataURL("image/png")
        : canvas.toDataURL("image/jpeg", COVER_JPEG_QUALITY);
      releaseCanvas(canvas);
      await registerNewStoredImage(output, storageOptions);
      return output;
    }

    async function importCoverFromUrl(url, workno = "") {
      const normalizedUrl = normalizeImageUrl(url);
      if (!normalizedUrl) return false;
      const response = await fetchWithTimeout(normalizedUrl, { mode: "cors", credentials: "omit" }, isMobileView() ? 10000 : 15000);
      if (!response.ok) throw new Error("HTTP " + response.status);
      const blob = await response.blob();
      if (!blob.type || !blob.type.startsWith("image/")) throw new Error("Not an image response");
      await setCoverFromDataUrl(await blobToDataUrl(blob), rebuildableRemoteCoverOptions(normalizedUrl, SINGLE_COVER_MAX_SIDE, false, workno));
      return true;
    }

    function hasImportOverwriteTarget() {
      return Boolean(
        editableText("recordTitle").trim() ||
        editableText("cvText").trim() ||
        editableText("circleText").trim() ||
        originalPrice.value.trim() ||
        currentPrice.value.trim() ||
        currentDiscount.value.trim() ||
        lowestPrice.value.trim() ||
        (document.querySelector(".choice-button.active")?.textContent.trim() || CHOICE_SUBTITLE) !== CHOICE_SUBTITLE ||
        Array.from(tags.querySelectorAll(".tag")).some((tag) => tag.textContent.trim()) ||
        coverOriginalSrc ||
        coverEditedSrc ||
        coverImage.getAttribute("src")
      );
    }

    function fullImportFailureReason(error, source) {
      const message = String((error && error.message) || "");
      let reason = "";
      if (source === "lowest" && message === "empty lowest discount") reason = UI_IMPORT_DLWATCHER_NO_DATA;
      else if (message === "empty product") reason = UI_IMPORT_DLSITE_NO_DATA;
      else if ((error && error.name === "AbortError") || /abort|timeout/i.test(message)) reason = UI_IMPORT_REQUEST_TIMEOUT;
      const httpMatch = message.match(/^HTTP (\d+)/);
      if (!reason && httpMatch) reason = UI_IMPORT_HTTP_PREFIX + "HTTP " + httpMatch[1] + String.fromCharCode(0x3002);
      if (!reason && /failed to fetch|network|load failed/i.test(message)) reason = UI_IMPORT_REQUEST_NETWORK;
      if (!reason) reason = message || UI_GRID9_UNKNOWN;
      return reason;
    }

    function unavailableImportField(label, reason = UI_IMPORT_API_MISSING) {
      return label + String.fromCharCode(0xff08) + reason + String.fromCharCode(0xff09);
    }

    function importFieldIssueText(fields) {
      return UI_IMPORT_MISSING_FIELDS + String.fromCharCode(0xff1a) + fields.join(String.fromCharCode(0x3001)) + String.fromCharCode(0xff1b) + UI_IMPORT_UNCHANGED_MANUAL;
    }

    function showFullImportResult(success, failures) {
      const failureList = Array.isArray(failures) ? failures : [];
      grid9ImportTitle.textContent = success ? UI_GRID9_IMPORT_DONE_TITLE : UI_IMPORT_RESULT_FAILED;
      grid9ImportBody.textContent = "";
      const summary = document.createElement("p");
      summary.style.margin = failureList.length ? "0 0 6px" : "0";
      summary.textContent = success
        ? (failureList.length ? UI_IMPORT_RESULT_PARTIAL : UI_IMPORT_RESULT_DONE)
        : UI_IMPORT_RESULT_FAILED + String.fromCharCode(0x3002);
      grid9ImportBody.appendChild(summary);
      failureList.forEach((failure) => {
        const line = document.createElement("p");
        line.style.margin = "2px 0";
        line.style.color = "var(--rose-deep)";
        line.textContent = failure.label + String.fromCharCode(0xff1a) + failure.reason;
        grid9ImportBody.appendChild(line);
      });
      grid9ImportOverwriteButton.hidden = true;
      grid9ImportFillButton.hidden = true;
      grid9ImportCancelButton.hidden = true;
      grid9ImportDoneButton.hidden = false;
      grid9ImportModal.hidden = false;
    }

    async function importProductInfo() {
      const workno = normalizeWorkno(editableText("rjText"));
      if (!workno) {
        showAppAlert(UI_IMPORT_NEED_RJ);
        return;
      }
      const importMode = await chooseBatchImportMode(hasImportOverwriteTarget());
      if (!importMode) return;
      importButton.disabled = true;
      showGrid9ImportLoading();
      try {
        const failures = [];
        const shouldImportLowest = importMode === "overwrite" || !lowestPrice.value.trim();
        let lowestDiscountError = null;
        const lowestDiscountPromise = shouldImportLowest
          ? fetchDlwatcherLowestDiscount(workno).catch((error) => {
            lowestDiscountError = error;
            console.warn("DLwatcher lowest discount import failed", error);
            return "";
          })
          : Promise.resolve("");
        const product = parseDlsiteProduct(await fetchProductJson(workno));
        if (!product || (!product.title && !product.cv && !product.circle && !product.originalPrice && !product.currentPrice)) {
          throw new Error("empty product");
        }
        product.lowestDiscount = await lowestDiscountPromise;
        const shouldImportField = (currentValue) => importMode === "overwrite" || !String(currentValue || "").trim();
        [
          [String.fromCharCode(0x6807, 0x9898), product.title, editableText("recordTitle")],
          ["CV", product.cv, editableText("cvText")],
          [String.fromCharCode(0x793e, 0x56e2), product.circle, editableText("circleText")],
          [String.fromCharCode(0x539f, 0x4ef7), product.originalPrice, originalPrice.value],
          [String.fromCharCode(0x73b0, 0x4ef7), product.currentPrice, currentPrice.value],
          [String.fromCharCode(0x73b0, 0x6298, 0x6263), product.currentDiscount, currentDiscount.value]
        ].forEach(([label, value, currentValue]) => {
          if (shouldImportField(currentValue) && (value === "" || value == null)) {
            failures.push({ label, reason: UI_IMPORT_API_MISSING + String.fromCharCode(0xff0c) + UI_IMPORT_UNCHANGED_MANUAL });
          }
        });
        if (lowestDiscountError) {
          failures.push({ label: UI_IMPORT_LOWEST_LABEL, reason: fullImportFailureReason(lowestDiscountError, "lowest") });
        }
        let chineseChoice = product.hasChineseVersion || product.chineseEditionWorkno ? CHOICE_SUBTITLE : CHOICE_NONE;
        if (chineseChoice === CHOICE_NONE) {
          try {
            const translatable = parseTranslatableChinese(await fetchTranslatableProducts(workno), workno);
            if (translatable) chineseChoice = translatable.hasChinese ? CHOICE_SUBTITLE : CHOICE_NONE;
          } catch (translatableError) {
            console.warn("Chinese edition detection failed, keep fallback", translatableError);
            failures.push({ label: UI_IMPORT_CHINESE_LABEL, reason: fullImportFailureReason(translatableError, "translatable") });
          }
        }
        applyImportedProduct(product, chineseChoice, importMode);
        if (importMode === "overwrite" || !coverImage.getAttribute("src")) {
          if (product.coverUrl) {
            try {
              await importCoverFromUrl(product.coverUrl, workno);
            } catch (coverError) {
              console.warn("cover import failed", coverError);
              failures.push({ label: "BK", reason: fullImportFailureReason(coverError, "cover") + String.fromCharCode(0xff0c) + UI_IMPORT_UNCHANGED_MANUAL });
            }
          } else {
            failures.push({ label: "BK", reason: UI_GRID9_NO_COVER + String.fromCharCode(0xff0c) + UI_IMPORT_UNCHANGED_MANUAL });
          }
        }
        showFullImportResult(true, failures);
        trackFixedUsageEvent("feature-rj-import-success");
      } catch (error) {
        console.warn("import failed", error);
        showFullImportResult(false, [{ label: "DLsite", reason: fullImportFailureReason(error, "dlsite") }]);
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
    document.querySelectorAll(".rating-adjust-button").forEach((button) => {
      button.addEventListener("click", () => {
        const row = button.closest(".rating-row");
        if (!row) return;
        const change = button.dataset.ratingAdjust === "up" ? 0.5 : -0.5;
        setRating(row, ratingValue(row) + change);
        scheduleSave();
      });
    });
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
        if (fullFieldComposing.has(target)) return;
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
        if (FULL_FIELD_MAX_WIDTHS.has(target)) target.dispatchEvent(new Event("input", { bubbles: true }));
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
      const output = canvas.toDataURL("image/png");
      releaseCanvas(canvas);
      return output;
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
      promise.catch(() => scriptLoadCache.delete(src));
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
      [imageEditCanvas, editOriginalCanvas, editMosaicCanvas, editBlurCanvas, editMosaicMaskCanvas, editBlurMaskCanvas, editWhiteFogMaskCanvas, editEffectCompositeCanvas].forEach((canvas) => {
        canvas.width = width;
        canvas.height = height;
      });
    }

    function clearEditorMasks() {
      editMosaicMaskCtx.clearRect(0, 0, editMosaicMaskCanvas.width, editMosaicMaskCanvas.height);
      editBlurMaskCtx.clearRect(0, 0, editBlurMaskCanvas.width, editBlurMaskCanvas.height);
      editWhiteFogMaskCtx.clearRect(0, 0, editWhiteFogMaskCanvas.width, editWhiteFogMaskCanvas.height);
    }

    function cloneSticker(sticker) {
      return sticker ? { ...sticker } : sticker;
    }

    function cloneStickerList(list) {
      return Array.isArray(list) ? list.map(cloneSticker).filter(Boolean) : [];
    }

    function cloneEditorOperations(list) {
      return Array.isArray(list) ? list.map((operation) => operation ? {
        ...operation,
        points: Array.isArray(operation.points) ? operation.points.map((point) => ({ x: Number(point.x) || 0, y: Number(point.y) || 0 })) : [],
        stickers: cloneStickerList(operation.stickers)
      } : null).filter(Boolean) : [];
    }

    async function customStickerSourceContentHash(source) {
      if (!source || source.type !== "image") return "";
      if (source.contentHash) return source.contentHash;
      const imageSource = source.localSrc || source.src || "";
      if (!String(imageSource).startsWith("data:image/")) return "";
      const contentHash = await storedImageContentHash(dataUrlToBlob(imageSource));
      if (contentHash) source.contentHash = contentHash;
      return contentHash;
    }

    async function reusableCustomStickerSource(localSrc, contentHash) {
      const pools = [stickerSources, standaloneStickerSources, templateEditorGlobalsBackup?.stickerSources];
      const seenIds = new Set();
      for (const pool of pools) {
        for (const source of (Array.isArray(pool) ? pool : [])) {
          if (!source || source.type !== "image" || seenIds.has(source.id)) continue;
          seenIds.add(source.id);
          const sourceImage = source.localSrc || source.src || "";
          if (sourceImage === localSrc) return source;
          if (contentHash && await customStickerSourceContentHash(source) === contentHash) return source;
        }
      }
      return null;
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
      const filterOperations = (list) => cloneEditorOperations(list).map((item) => ({
        ...item,
        stickers: cloneStickerList((item.stickers || []).filter((sticker) => sticker.sourceId !== sourceId))
      }));
      editorUndoStack = filterSnapshots(editorUndoStack);
      editorRedoStack = filterSnapshots(editorRedoStack);
      coverEditorUndoStack = filterSnapshots(coverEditorUndoStack);
      coverEditorRedoStack = filterSnapshots(coverEditorRedoStack);
      coverEditorHistoryCheckpoint = filterSnapshots([coverEditorHistoryCheckpoint])[0] || null;
      coverEditorOperations = filterOperations(coverEditorOperations);
      coverEditorRedoOperations = filterOperations(coverEditorRedoOperations);
      standaloneEditorHistoryCheckpoint = filterSnapshots([standaloneEditorHistoryCheckpoint])[0] || null;
      standaloneEditorOperations = filterOperations(standaloneEditorOperations);
      standaloneEditorRedoOperations = filterOperations(standaloneEditorRedoOperations);
      editorUndoOperations = filterOperations(editorUndoOperations);
      editorRedoOperations = filterOperations(editorRedoOperations);
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
      commitEditorOperation({ kind: "stickers" });
      renderImageEditor();
      saveEditorProject();
      saveState();
    }

    function currentEditorSnapshot() {
      if (!editMosaicMaskCanvas.width || !editMosaicMaskCanvas.height) return null;
      return {
        mosaic: editMosaicMaskCtx.getImageData(0, 0, editMosaicMaskCanvas.width, editMosaicMaskCanvas.height),
        blur: editBlurMaskCtx.getImageData(0, 0, editBlurMaskCanvas.width, editBlurMaskCanvas.height),
        whiteFog: editWhiteFogMaskCtx.getImageData(0, 0, editWhiteFogMaskCanvas.width, editWhiteFogMaskCanvas.height),
        stickers: cloneStickerList(coverStickers)
      };
    }

    function editorHistoryLimit() {
      if (imageEditorMode === "standalone") return 24;
      if (imageEditorMode === "collection-detail") return 3;
      return 6;
    }

    function persistedEditorHistoryLimit() {
      if (imageEditorMode === "standalone") return 6;
      if (imageEditorMode === "collection-detail") return 3;
      return 6;
    }

    function activeEditorHistoryLimit() {
      return editorHistoryFormat === "operations-v1" ? persistedEditorHistoryLimit() : editorHistoryLimit();
    }

    function snapshotEditorMasks(clearRedo = true) {
      const snapshot = currentEditorSnapshot();
      if (!snapshot) return;
      editorUndoStack.push(snapshot);
      if (editorUndoStack.length > activeEditorHistoryLimit()) editorUndoStack.shift();
      if (clearRedo) {
        editorRedoStack = [];
        if (editorHistoryFormat === "operations-v1") editorRedoOperations = [];
      }
    }

    function commitEditorOperation(operation) {
      if (editorHistoryFormat !== "operations-v1" || !operation) return;
      editorUndoOperations.push({ ...operation, stickers: cloneStickerList(coverStickers) });
      while (editorUndoOperations.length > editorUndoStack.length) editorUndoOperations.shift();
      while (editorUndoOperations.length > persistedEditorHistoryLimit()) {
        editorUndoOperations.shift();
        editorUndoStack.shift();
      }
      editorRedoOperations = [];
    }

    function restoreEditorSnapshotSilently(snapshot) {
      if (!snapshot) return;
      editMosaicMaskCtx.putImageData(snapshot.mosaic, 0, 0);
      editBlurMaskCtx.putImageData(snapshot.blur, 0, 0);
      editWhiteFogMaskCtx.clearRect(0, 0, editWhiteFogMaskCanvas.width, editWhiteFogMaskCanvas.height);
      if (snapshot.whiteFog) editWhiteFogMaskCtx.putImageData(snapshot.whiteFog, 0, 0);
      resetEditorMaskCompositeModes();
      coverStickers = cloneStickerList(snapshot.stickers);
      selectedStickerId = null;
    }

    function restoreEditorSnapshot(snapshot) {
      if (!snapshot) return;
      restoreEditorSnapshotSilently(snapshot);
      renderImageEditor();
    }

    function undoEditorStep() {
      const previous = editorUndoStack.pop();
      if (!previous) return;
      const current = currentEditorSnapshot();
      if (current) editorRedoStack.push(current);
      if (editorRedoStack.length > activeEditorHistoryLimit()) editorRedoStack.shift();
      if (editorHistoryFormat === "operations-v1") {
        const operation = editorUndoOperations.pop();
        if (operation) editorRedoOperations.push(operation);
      }
      restoreEditorSnapshot(previous);
      saveEditorProject();
      saveState();
    }

    function redoEditorStep() {
      const next = editorRedoStack.pop();
      if (!next) return;
      const current = currentEditorSnapshot();
      if (current) editorUndoStack.push(current);
      if (editorUndoStack.length > activeEditorHistoryLimit()) editorUndoStack.shift();
      if (editorHistoryFormat === "operations-v1") {
        const operation = editorRedoOperations.pop();
        if (operation) editorUndoOperations.push(operation);
      }
      restoreEditorSnapshot(next);
      saveEditorProject();
      saveState();
    }

    function maskSnapshotToDataUrls(snapshot) {
      if (!snapshot || !editMosaicMaskCanvas.width || !editMosaicMaskCanvas.height) return null;
      const mosaic = document.createElement("canvas");
      const blur = document.createElement("canvas");
      const whiteFog = document.createElement("canvas");
      mosaic.width = blur.width = whiteFog.width = editMosaicMaskCanvas.width;
      mosaic.height = blur.height = whiteFog.height = editMosaicMaskCanvas.height;
      mosaic.getContext("2d").putImageData(snapshot.mosaic, 0, 0);
      blur.getContext("2d").putImageData(snapshot.blur, 0, 0);
      if (snapshot.whiteFog) whiteFog.getContext("2d").putImageData(snapshot.whiteFog, 0, 0);
      const dataUrls = { mosaic: mosaic.toDataURL("image/png"), blur: blur.toDataURL("image/png"), whiteFog: whiteFog.toDataURL("image/png"), stickers: cloneStickerList(snapshot.stickers) };
      [mosaic, blur, whiteFog].forEach(releaseCanvas);
      return dataUrls;
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
      const imageData = ctx.getImageData(0, 0, width, height);
      releaseCanvas(canvas);
      return imageData;
    }

    async function restoreMaskCanvasFromSrc(ctx, src, width, height) {
      ctx.clearRect(0, 0, width, height);
      if (!src) return;
      const img = await loadImage(src).catch(() => null);
      if (img) ctx.drawImage(img, 0, 0, width, height);
    }

    async function restoreEditorStack(items, width, height) {
      const restored = [];
      for (const item of (Array.isArray(items) ? items.slice(-persistedEditorHistoryLimit()) : [])) {
        const mosaic = await dataUrlToImageData(item?.mosaic, width, height);
        const blur = await dataUrlToImageData(item?.blur, width, height);
        const whiteFog = await dataUrlToImageData(item?.whiteFog, width, height) || editWhiteFogMaskCtx.createImageData(width, height);
        if (mosaic && blur) restored.push({ mosaic, blur, whiteFog, stickers: cloneStickerList(item?.stickers) });
      }
      return restored;
    }

    async function restoreEditorUndoStack(width, height) {
      editorHistoryFormat = coverEditorHistoryFormat === "operations-v1" ? "operations-v1" : "legacy";
      editorUndoOperations = [];
      editorRedoOperations = [];
      if (editorHistoryFormat !== "operations-v1") {
        editorUndoStack = await restoreEditorStack(coverEditorUndoStack, width, height);
        editorRedoStack = await restoreEditorStack(coverEditorRedoStack, width, height);
        return;
      }
      const finalSnapshot = currentEditorSnapshot();
      const restoredCheckpoint = await restoreEditorStack(coverEditorHistoryCheckpoint ? [coverEditorHistoryCheckpoint] : [], width, height);
      const checkpoint = restoredCheckpoint[0] || finalSnapshot;
      editorUndoOperations = cloneEditorOperations(coverEditorOperations).slice(-persistedEditorHistoryLimit());
      editorRedoOperations = cloneEditorOperations(coverEditorRedoOperations).slice(-persistedEditorHistoryLimit());
      editorUndoStack = [];
      editorRedoStack = [];
      if (!checkpoint || !finalSnapshot) return;
      restoreEditorSnapshotSilently(checkpoint);
      editorUndoOperations.forEach((operation) => {
        editorUndoStack.push(currentEditorSnapshot());
        applyEditorOperation(operation);
      });
      restoreEditorSnapshotSilently(finalSnapshot);
      const redoTargets = [];
      editorRedoOperations.slice().reverse().forEach((operation) => {
        applyEditorOperation(operation);
        redoTargets.push(currentEditorSnapshot());
      });
      editorRedoStack = redoTargets.reverse();
      restoreEditorSnapshotSilently(finalSnapshot);
    }

    function saveEditorProject() {
      if (!imageEditCanvas.width || !imageEditCanvas.height) return;
      coverMosaicMaskSrc = editMosaicMaskCanvas.toDataURL("image/png");
      coverBlurMaskSrc = editBlurMaskCanvas.toDataURL("image/png");
      coverWhiteFogMaskSrc = editWhiteFogMaskCanvas.toDataURL("image/png");
      const historyLimit = persistedEditorHistoryLimit();
      if (editorHistoryFormat === "operations-v1") {
        const hasPersistedHistory = editorUndoOperations.length > 0 || editorRedoOperations.length > 0;
        const checkpoint = hasPersistedHistory ? (editorUndoStack[0] || currentEditorSnapshot()) : null;
        coverEditorHistoryCheckpoint = maskSnapshotToDataUrls(checkpoint);
        coverEditorOperations = cloneEditorOperations(editorUndoOperations).slice(-historyLimit);
        coverEditorRedoOperations = cloneEditorOperations(editorRedoOperations).slice(-historyLimit);
        coverEditorHistoryFormat = "operations-v1";
        coverEditorUndoStack = [];
        coverEditorRedoStack = [];
      } else {
        coverEditorUndoStack = editorUndoStack.map(maskSnapshotToDataUrls).filter(Boolean).slice(-historyLimit);
        coverEditorRedoStack = editorRedoStack.map(maskSnapshotToDataUrls).filter(Boolean).slice(-historyLimit);
        coverEditorHistoryCheckpoint = null;
        coverEditorOperations = [];
        coverEditorRedoOperations = [];
        coverEditorHistoryFormat = "legacy";
      }
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
        releaseCanvas(blurSmall);
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
      releaseCanvas(small);

      buildBlurEffectCanvas(width, height);
    }

    function drawMaskedEffect(targetCtx, effectCanvas, maskCanvas) {
      editEffectCompositeCtx.clearRect(0, 0, editEffectCompositeCanvas.width, editEffectCompositeCanvas.height);
      editEffectCompositeCtx.globalCompositeOperation = "source-over";
      editEffectCompositeCtx.drawImage(effectCanvas, 0, 0);
      editEffectCompositeCtx.globalCompositeOperation = "destination-in";
      editEffectCompositeCtx.drawImage(maskCanvas, 0, 0);
      editEffectCompositeCtx.globalCompositeOperation = "source-over";
      targetCtx.drawImage(editEffectCompositeCanvas, 0, 0);
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
      ctx.drawImage(editWhiteFogMaskCanvas, 0, 0);
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
      editWhiteFogMaskCtx.globalCompositeOperation = "source-over";
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

    function paintWhiteFogStroke(from, to, size) {
      const radius = size / 2;
      const distance = Math.hypot(to.x - from.x, to.y - from.y);
      const steps = Math.ceil(distance / Math.max(1, radius * 0.65));
      editWhiteFogMaskCtx.save();
      editWhiteFogMaskCtx.globalCompositeOperation = "source-over";
      for (let index = 0; index <= steps; index += 1) {
        const progress = steps ? index / steps : 0;
        const x = from.x + (to.x - from.x) * progress;
        const y = from.y + (to.y - from.y) * progress;
        const gradient = editWhiteFogMaskCtx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "rgba(255,255,255,0.68)");
        gradient.addColorStop(0.12, "rgba(255,255,255,0.6)");
        gradient.addColorStop(0.35, "rgba(255,255,255,0.3)");
        gradient.addColorStop(0.65, "rgba(255,255,255,0.1)");
        gradient.addColorStop(0.88, "rgba(255,255,255,0.02)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        editWhiteFogMaskCtx.fillStyle = gradient;
        editWhiteFogMaskCtx.beginPath();
        editWhiteFogMaskCtx.arc(x, y, radius, 0, Math.PI * 2);
        editWhiteFogMaskCtx.fill();
      }
      editWhiteFogMaskCtx.restore();
    }

    function drawEditorStroke(from, to, options = null) {
      const size = Number(options?.size ?? brushSize.value) || 42;
      const tool = options?.tool || editorTool;
      resetEditorMaskCompositeModes();
      if (tool === "erase") {
        paintEditorMaskStroke(editMosaicMaskCtx, from, to, size, "destination-out");
        paintEditorMaskStroke(editBlurMaskCtx, from, to, size, "destination-out");
        paintEditorMaskStroke(editWhiteFogMaskCtx, from, to, size, "destination-out");
      } else if (tool === "blur") {
        paintEditorMaskStroke(editBlurMaskCtx, from, to, size, "source-over");
        paintEditorMaskStroke(editMosaicMaskCtx, from, to, size, "destination-out");
        paintEditorMaskStroke(editWhiteFogMaskCtx, from, to, size, "destination-out");
      } else if (tool === "white-fog") {
        paintWhiteFogStroke(from, to, size);
        paintEditorMaskStroke(editMosaicMaskCtx, from, to, size, "destination-out");
        paintEditorMaskStroke(editBlurMaskCtx, from, to, size, "destination-out");
      } else {
        paintEditorMaskStroke(editMosaicMaskCtx, from, to, size, "source-over");
        paintEditorMaskStroke(editBlurMaskCtx, from, to, size, "destination-out");
        paintEditorMaskStroke(editWhiteFogMaskCtx, from, to, size, "destination-out");
      }
      resetEditorMaskCompositeModes();
      if (options?.render !== false) requestEditorRender();
    }

    function applyEditorOperation(operation) {
      if (!operation) return;
      if (operation.kind === "clear") {
        clearEditorMasks();
      } else if (operation.kind === "brush" && operation.didDraw) {
        const scaleX = editMosaicMaskCanvas.width / Math.max(1, Number(operation.canvasWidth) || editMosaicMaskCanvas.width);
        const scaleY = editMosaicMaskCanvas.height / Math.max(1, Number(operation.canvasHeight) || editMosaicMaskCanvas.height);
        const points = (Array.isArray(operation.points) ? operation.points : []).map((point) => ({
          x: (Number(point.x) || 0) * scaleX,
          y: (Number(point.y) || 0) * scaleY
        }));
        const scaledSize = (Number(operation.size) || 42) * Math.min(scaleX, scaleY);
        if (points.length === 1) drawEditorStroke(points[0], points[0], { tool: operation.tool, size: scaledSize, render: false });
        else {
          for (let index = 1; index < points.length; index += 1) {
            drawEditorStroke(points[index - 1], points[index], { tool: operation.tool, size: scaledSize, render: false });
          }
        }
      }
      coverStickers = cloneStickerList(operation.stickers);
      selectedStickerId = null;
    }

    function setEditorTool(tool) {
      resetEditorMaskCompositeModes();
      editorTool = tool;
      imageToolMosaic.classList.toggle("active", tool === "mosaic");
      imageToolBlur.classList.toggle("active", tool === "blur");
      imageToolWhiteFog.classList.toggle("active", tool === "white-fog");
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
        coverWhiteFogMaskSrc,
        coverEditorUndoStack: JSON.parse(JSON.stringify(coverEditorUndoStack || [])),
        coverEditorRedoStack: JSON.parse(JSON.stringify(coverEditorRedoStack || [])),
        coverEditorHistoryCheckpoint: coverEditorHistoryCheckpoint ? JSON.parse(JSON.stringify(coverEditorHistoryCheckpoint)) : null,
        coverEditorOperations: cloneEditorOperations(coverEditorOperations),
        coverEditorRedoOperations: cloneEditorOperations(coverEditorRedoOperations),
        coverEditorHistoryFormat,
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
      coverWhiteFogMaskSrc = next.coverWhiteFogMaskSrc || "";
      coverEditorUndoStack = Array.isArray(next.coverEditorUndoStack) ? next.coverEditorUndoStack : [];
      coverEditorRedoStack = Array.isArray(next.coverEditorRedoStack) ? next.coverEditorRedoStack : [];
      coverEditorHistoryCheckpoint = next.coverEditorHistoryCheckpoint || null;
      coverEditorOperations = cloneEditorOperations(next.coverEditorOperations);
      coverEditorRedoOperations = cloneEditorOperations(next.coverEditorRedoOperations);
      coverEditorHistoryFormat = next.coverEditorHistoryFormat === "operations-v1"
        ? "operations-v1"
        : (coverEditorUndoStack.length || coverEditorRedoStack.length ? "legacy" : "operations-v1");
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
        coverWhiteFogMaskSrc: standaloneWhiteFogMaskSrc || "",
        coverEditorUndoStack: standaloneEditorUndoStack,
        coverEditorRedoStack: standaloneEditorRedoStack,
        coverEditorHistoryCheckpoint: standaloneEditorHistoryCheckpoint,
        coverEditorOperations: cloneEditorOperations(standaloneEditorOperations),
        coverEditorRedoOperations: cloneEditorOperations(standaloneEditorRedoOperations),
        coverEditorHistoryFormat: standaloneEditorHistoryFormat,
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
      standaloneWhiteFogMaskSrc = coverWhiteFogMaskSrc || "";
      standaloneEditorUndoStack = JSON.parse(JSON.stringify(coverEditorUndoStack || []));
      standaloneEditorRedoStack = JSON.parse(JSON.stringify(coverEditorRedoStack || []));
      standaloneEditorHistoryCheckpoint = coverEditorHistoryCheckpoint ? JSON.parse(JSON.stringify(coverEditorHistoryCheckpoint)) : null;
      standaloneEditorOperations = cloneEditorOperations(coverEditorOperations);
      standaloneEditorRedoOperations = cloneEditorOperations(coverEditorRedoOperations);
      standaloneEditorHistoryFormat = coverEditorHistoryFormat;
      standaloneStickers = cloneStickerList(coverStickers);
      standaloneStickerSources = JSON.parse(JSON.stringify(stickerSources || []));
    }

    function restoreTemplateEditorGlobals() {
      if (!templateEditorGlobalsBackup) return;
      applyEditorGlobals(templateEditorGlobalsBackup);
      templateEditorGlobalsBackup = null;
      renderStickerPicker();
    }

    function releaseImageEditorTransientResources() {
      if (editorRenderFrame) {
        window.cancelAnimationFrame(editorRenderFrame);
        editorRenderFrame = 0;
      }
      editorImage = null;
      editorSourceSrc = "";
      editorSessionSnapshot = null;
      editorDrawing = false;
      editorLastPoint = null;
      editorStickerDrag = null;
      pendingEditorBrushOperation = null;
      editorUndoStack = [];
      editorRedoStack = [];
      editorUndoOperations = [];
      editorRedoOperations = [];
      editorTouchPointers.clear();
      editorPinching = false;
      [imageEditCanvas, editOriginalCanvas, editMosaicCanvas, editBlurCanvas, editMosaicMaskCanvas, editBlurMaskCanvas, editWhiteFogMaskCanvas, editEffectCompositeCanvas].forEach(releaseCanvas);
    }

    async function openImageEditorSafely(openEditor) {
      if (imageEditorOpening) return;
      imageEditorOpening = true;
      try {
        await openEditor();
      } catch (error) {
        console.error("Image editor open failed", error);
        imageEditModal.hidden = true;
        if (imageEditorMode !== "template") {
          imageEditorMode = "template";
          restoreTemplateEditorGlobals();
          placeImageEditorForTemplate();
        }
        releaseImageEditorTransientResources();
        const detail = error && (error.name || error.message)
          ? [error.name, error.message].filter(Boolean).join(": ")
          : UI_AUTO_SAVE_UNAVAILABLE_REASON;
        await showAppAlert(UI_IMAGE_EDITOR_OPEN_FAILED + detail);
      } finally {
        imageEditorOpening = false;
      }
    }

    function layoutTemplateImageEditorActions() {
      if (isMobileView()) {
        imageActionRow?.append(imageClearButton, imageDoneButton);
      } else {
        imageActionRow?.append(imageClearButton, imageDoneButton);
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
      imageDoneButton.textContent = UI_EXPORT_SHORT;
      imageCancelButton.textContent = UI_REMOVE_SHORT;
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
      await restoreMaskCanvasFromSrc(editWhiteFogMaskCtx, coverWhiteFogMaskSrc, width, height);
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

    function setCollectionDetailCover(src, fit) {
      const art = document.getElementById("collectionDetailArt");
      if (!art) return;
      const nextSrc = src || "";
      const nextFit = fit === "cover" ? "cover" : "contain";
      art.dataset.coverSrc = nextSrc;
      if (nextSrc && !nextSrc.startsWith("blob:")) art.dataset.coverStoredSrc = nextSrc;
      art.dataset.coverFit = nextFit;
      art.style.backgroundImage = nextSrc ? `url('${nextSrc}')` : "";
      art.style.backgroundSize = nextFit;
      art.style.backgroundPosition = "center";
      art.style.backgroundRepeat = "no-repeat";
      art.classList.toggle("has-image", Boolean(nextSrc));
    }

    function collectionDetailEditorGlobals() {
      const art = document.getElementById("collectionDetailArt");
      const src = art?.dataset.coverSrc || "";
      return { coverOriginalSrc:src, coverEditedSrc:"", coverMosaicMaskSrc:"", coverBlurMaskSrc:"", coverWhiteFogMaskSrc:"", coverEditorUndoStack:[], coverEditorRedoStack:[], coverStickers:[], stickerSources:JSON.parse(JSON.stringify(stickerSources || [])), selectedStickerId:null, editorTool:"mosaic", coverSrc:src, coverFit:art?.dataset.coverFit || "contain" };
    }

    async function openCollectionDetailImageEditor() {
      const art = document.getElementById("collectionDetailArt");
      const src = art?.dataset.coverSrc || "";
      if (!src) {
        document.getElementById("collectionDetailCoverInput")?.click();
        return;
      }
      if (imageEditorMode === "standalone") leaveStandaloneImageTool();
      if (imageEditorMode !== "collection-detail") templateEditorGlobalsBackup = editorGlobals();
      imageEditorMode = "collection-detail";
      placeImageEditorForTemplate();
      applyEditorGlobals(collectionDetailEditorGlobals());
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
        coverWhiteFogMaskSrc: "",
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
        coverWhiteFogMaskSrc: "",
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
        void openImageEditorSafely(() => openStandaloneImageEditor());
        return;
      }
      if (imageEditorMode !== "standalone") templateEditorGlobalsBackup = editorGlobals();
      imageEditorMode = "standalone";
      placeImageEditorForStandalone();
      releaseImageEditorTransientResources();
      if (imageEditCanvas) imageEditCanvas.hidden = true;
      if (imageToolEmpty) imageToolEmpty.hidden = false;
      imageEditModal.hidden = false;
    }

    function removeStandaloneImage() {
      standaloneOriginalSrc = "";
      standaloneEditedSrc = "";
      standaloneMosaicMaskSrc = "";
      standaloneBlurMaskSrc = "";
      standaloneWhiteFogMaskSrc = "";
      standaloneEditorUndoStack = [];
      standaloneEditorRedoStack = [];
      standaloneEditorHistoryCheckpoint = null;
      standaloneEditorOperations = [];
      standaloneEditorRedoOperations = [];
      standaloneEditorHistoryFormat = "operations-v1";
      standaloneStickers = [];
      editorImage = null;
      editorSourceSrc = "";
      editorSessionSnapshot = null;
      editorDrawing = false;
      editorLastPoint = null;
      editorUndoOperations = [];
      editorRedoOperations = [];
      editorHistoryFormat = "operations-v1";
      pendingEditorBrushOperation = null;
      editorStickerDrag = null;
      selectedStickerId = null;
      applyEditorGlobals(standaloneEditorGlobals(""));
      if (imageEditCanvas) {
        imageEditCanvas.hidden = true;
      }
      releaseImageEditorTransientResources();
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
      releaseImageEditorTransientResources();
    }

    async function exportStandaloneImageFromEditor() {
      if (imageEditorMode !== "standalone") return;
      if (!editorImage || !imageEditCanvas.width || !imageEditCanvas.height) {
        showAppAlert(String.fromCharCode(0x8bf7, 0x5148, 0x4e0a, 0x4f20, 0x56fe, 0x7247, 0x3002));
        return;
      }
      imageDoneButton.disabled = true;
      try {
        await ensureUsedStickerImages();
        const canvas = document.createElement("canvas");
        canvas.width = imageEditCanvas.width;
        canvas.height = imageEditCanvas.height;
        try {
          renderImageEditor(canvas, { controls: false });
          const blob = await canvasToBlob(canvas);
          handleExportBlob(blob, standaloneExportFileName(), "", currentThemeId, UI_EXPORT_DOWNLOAD_IMAGE);
          trackFixedUsageEvent("feature-image-editor-standalone-done");
          standaloneOriginalSrc = editorSourceSrc || standaloneOriginalSrc;
          try {
            saveEditorProject();
            standaloneEditedSrc = canvas.toDataURL("image/png");
            saveState();
          } catch (saveError) {
            console.warn("Standalone image state save failed after export", saveError);
          }
        } finally {
          releaseCanvas(canvas);
        }
      } catch (error) {
        console.error(error);
        const exportErrorText = error instanceof Error && error.message ? error.message : String.fromCharCode(0x672a, 0x77e5, 0x539f, 0x56e0);
        showAppAlert(String.fromCharCode(0x5bfc, 0x51fa, 0x5931, 0x8d25, 0xff1a) + exportErrorText);
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
      const output = result.toDataURL("image/png");
      releaseCanvas(result);
      return output;
    }

    function restoreEditorSessionSnapshot() {
      if (!editorSessionSnapshot) return;
      applyEditorGlobals(editorSessionSnapshot);
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
        releaseImageEditorTransientResources();
        if (imageToolEmpty) imageToolEmpty.hidden = false;
        return;
      }
      if (imageEditorMode === "collection-detail") {
        let shouldClose = true;
        try {
          if (editorImage) {
            if (apply) {
              const nextEditedSrc = await updateEditedCoverFromEditor();
              if (!nextEditedSrc) throw new Error("Edited cover is empty");
              const fit = document.getElementById("collectionDetailArt")?.dataset.coverFit || "contain";
              setCollectionDetailCover(await grid9CoverStorageDataUrl(nextEditedSrc, true), fit);
            } else {
              restoreEditorSessionSnapshot();
            }
          }
        } catch (error) {
          console.error("Collection detail image editor close failed", error);
          shouldClose = !apply;
          showAppAlert("图片编辑结果应用失败，请再试一次。");
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
            releaseImageEditorTransientResources();
          }
        }
        return;
      }
      if (imageEditorMode === "grid9") {
        let shouldClose = true;
        try {
          if (editorImage) {
            if (apply) {
              const nextEditedSrc = await updateEditedCoverFromEditor();
              if (!nextEditedSrc) throw new Error("Edited cover is empty");
              applyGrid9Cover(activeGrid9Index, await grid9CoverStorageDataUrl(nextEditedSrc, true));
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
          showAppAlert(String.fromCharCode(0x56fe, 0x7247, 0x2044, 0x7f16, 0x8f91, 0x7ed3, 0x679c, 0x5e94, 0x7528, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x518d, 0x8bd5, 0x4e00, 0x6b21, 0x3002) + detail);
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
            releaseImageEditorTransientResources();
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
              applyQuickCover(activeQuickIndex, await grid9CoverStorageDataUrl(nextEditedSrc, true));
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
          showAppAlert(String.fromCharCode(0x56fe, 0x7247, 0x2044, 0x7f16, 0x8f91, 0x7ed3, 0x679c, 0x5e94, 0x7528, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x518d, 0x8bd5, 0x4e00, 0x6b21, 0x3002) + detail);
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
            releaseImageEditorTransientResources();
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
              applyTrioCover(activeTrioIndex, await grid9CoverStorageDataUrl(nextEditedSrc, true));
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
          showAppAlert(String.fromCharCode(0x56fe, 0x7247, 0x2044, 0x7f16, 0x8f91, 0x7ed3, 0x679c, 0x5e94, 0x7528, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x518d, 0x8bd5, 0x4e00, 0x6b21, 0x3002) + detail);
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
            releaseImageEditorTransientResources();
            requestAnimationFrame(() => fitStage());
          }
        }
        return;
      }
      let shouldClose = true;
      try {
        if (editorImage) {
          if (apply) {
            const renderedEditedSrc = await updateEditedCoverFromEditor();
            if (!renderedEditedSrc) throw new Error("Edited cover is empty");
            const previousOriginalSrc = editorSessionSnapshot?.coverOriginalSrc || "";
            coverOriginalSrc = storedImageReferenceByDataUrl.has(previousOriginalSrc)
              ? previousOriginalSrc
              : await singleCoverStorageDataUrl(editorSourceSrc);
            coverEditedSrc = await singleCoverStorageDataUrl(renderedEditedSrc);
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
        showAppAlert(String.fromCharCode(0x56fe, 0x7247, 0x2044, 0x7f16, 0x8f91, 0x7ed3, 0x679c, 0x5e94, 0x7528, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x518d, 0x8bd5, 0x4e00, 0x6b21, 0x3002) + detail);
      } finally {
        if (shouldClose) {
          editorSessionSnapshot = null;
          editorDrawing = false;
          editorLastPoint = null;
          editorStickerDrag = null;
          selectedStickerId = null;
          imageEditModal.hidden = true;
          releaseImageEditorTransientResources();
          if (imageEditorMode === "template") requestAnimationFrame(() => fitStage());
        }
      }
    }

    function editableText(id) {
      const node = document.getElementById(id);
      return node === recordTitle ? editableInputText(node) : (node?.textContent || "");
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
      if (FULL_FIELD_MAX_WIDTHS.has(node) && !fullFieldComposing.has(node)) limitCurrentField(node);
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
      const valueNode = row.querySelector(".rating-value");
      if (valueNode) valueNode.textContent = String(numeric);
    }

    async function mapStateImageValues(value, mapper) {
      if (typeof value === "string") {
        if (value.startsWith("data:image/") || value.startsWith(STATE_IMAGE_REFERENCE_PREFIX)) return mapper(value);
        return value;
      }
      if (Array.isArray(value)) {
        const mappedItems = [];
        for (const item of value) mappedItems.push(await mapStateImageValues(item, mapper));
        return mappedItems;
      }
      if (value && typeof value === "object") {
        const mappedObject = {};
        for (const [key, item] of Object.entries(value)) mappedObject[key] = await mapStateImageValues(item, mapper);
        return mappedObject;
      }
      return value;
    }

    async function serializeStateImageReferences(state) {
      return mapStateImageValues(state, ensureStoredImageReference);
    }

    async function hydrateStateImageReferences(state) {
      if (!state || typeof state !== "object") return state;
      return mapStateImageValues(state, resolveStoredImageReferenceSafely);
    }

    function collectState() {
      const templateEditorState = templateEditorGlobalsBackup || editorGlobals();
      const originalCoverSrc = templateEditorState.coverOriginalSrc || "";
      const editedCoverSrc = templateEditorState.coverEditedSrc || "";
      const activeCoverSrc = templateEditorState.coverSrc || coverImage.getAttribute("src") || "";
      return {
        template: currentTemplate(),
        theme: currentThemeId,
        recordTitle: editableText("recordTitle"),

        cvText: editableText("cvText"),
        circleText: editableText("circleText"),
        rjText: editableText("rjText"),
        durationText: editableText("durationText"),
        purchaseDate: normalizeCardDateValue(valueOf("#purchaseDateText")),
        listenedDate: normalizeCardDateValue(valueOf("#listenedDateText")),
        cardInfoType: normalizeCardInfoType(cardInfoType.value),
        originalPrice: valueOf("#originalPrice"),
        currentPrice: valueOf("#currentPrice"),
        currentDiscount: valueOf("#currentDiscount"),
        currentDiscountManual,
        lowestPrice: valueOf("#lowestPrice"),
        cnChoice: document.querySelector(".choice-button.active")?.textContent.trim() || "",
        ratings: currentRatings(),
        tags: Array.from(document.querySelectorAll(".tag")).map((tag) => tag.textContent.trim()).filter(Boolean),
        reviewText: reviewText.value,
        coverSrc: activeCoverSrc === originalCoverSrc || activeCoverSrc === editedCoverSrc ? "" : activeCoverSrc,
        coverOriginalSrc: originalCoverSrc,
        coverEditedSrc: editedCoverSrc,
        coverMosaicMaskSrc: templateEditorState.coverMosaicMaskSrc || "",
        coverBlurMaskSrc: templateEditorState.coverBlurMaskSrc || "",
        coverWhiteFogMaskSrc: templateEditorState.coverWhiteFogMaskSrc || "",
        coverEditorUndoStack: templateEditorState.coverEditorUndoStack || [],
        coverEditorRedoStack: templateEditorState.coverEditorRedoStack || [],
        coverEditorHistoryCheckpoint: templateEditorState.coverEditorHistoryCheckpoint || null,
        coverEditorOperations: cloneEditorOperations(templateEditorState.coverEditorOperations),
        coverEditorRedoOperations: cloneEditorOperations(templateEditorState.coverEditorRedoOperations),
        coverEditorHistoryFormat: templateEditorState.coverEditorHistoryFormat || "operations-v1",
        coverStickers: cloneStickerList(templateEditorState.coverStickers),
        stickerSources: templateEditorState.stickerSources || [],
        coverFit: templateEditorState.coverFit || coverImage.style.objectFit || "contain",
        standaloneOriginalSrc,
        standaloneEditedSrc,
        standaloneMosaicMaskSrc,
        standaloneBlurMaskSrc,
        standaloneWhiteFogMaskSrc,
        standaloneEditorUndoStack,
        standaloneEditorRedoStack,
        standaloneEditorHistoryCheckpoint,
        standaloneEditorOperations: cloneEditorOperations(standaloneEditorOperations),
        standaloneEditorRedoOperations: cloneEditorOperations(standaloneEditorRedoOperations),
        standaloneEditorHistoryFormat,
        standaloneStickers: cloneStickerList(standaloneStickers),
        standaloneStickerSources,
        brushSize: Number(brushSize.value) || 42,
        grid9: collectGrid9State(),
        quick: collectQuickState(),
        trio: collectTrioState(),
        continuationPages: {
          full: {
            current: continuationState.full.current,
            pages: continuationState.full.pages.map((page) => limitedFullContinuationReviewText(page))
          },
          compact: { current: continuationState.compact.current, pages: continuationState.compact.pages.slice() }
        },
        playerTotalSeconds,
        playerProgress,
        playerPlaying,
      };
    }

    const STATE_SETTINGS_FIELDS = [
      "template", "theme", "brushSize", "playerTotalSeconds", "playerProgress", "playerPlaying"
    ];
    const STATE_EDITOR_FIELDS = [
      "coverSrc", "coverOriginalSrc", "coverEditedSrc", "coverMosaicMaskSrc", "coverBlurMaskSrc",
      "coverWhiteFogMaskSrc", "coverEditorUndoStack", "coverEditorRedoStack", "coverEditorHistoryCheckpoint",
      "coverEditorOperations", "coverEditorRedoOperations", "coverEditorHistoryFormat", "coverStickers",
      "stickerSources", "coverFit", "standaloneOriginalSrc", "standaloneEditedSrc",
      "standaloneMosaicMaskSrc", "standaloneBlurMaskSrc", "standaloneWhiteFogMaskSrc",
      "standaloneEditorUndoStack", "standaloneEditorRedoStack", "standaloneEditorHistoryCheckpoint",
      "standaloneEditorOperations", "standaloneEditorRedoOperations", "standaloneEditorHistoryFormat", "standaloneStickers",
      "standaloneStickerSources"
    ];

    function splitStoredState(state) {
      const draft = { ...state, storageSchemaVersion: STORAGE_SCHEMA_VERSION };
      const settings = { storageSchemaVersion: STORAGE_SCHEMA_VERSION };
      const editorProject = { storageSchemaVersion: STORAGE_SCHEMA_VERSION };
      STATE_SETTINGS_FIELDS.forEach((field) => {
        if (Object.prototype.hasOwnProperty.call(draft, field)) settings[field] = draft[field];
        delete draft[field];
      });
      STATE_EDITOR_FIELDS.forEach((field) => {
        if (Object.prototype.hasOwnProperty.call(draft, field)) editorProject[field] = draft[field];
        delete draft[field];
      });
      return { draft, settings, editorProject };
    }

    function mergeStoredState(draft, settings, editorProject) {
      if (!draft || typeof draft !== "object") return null;
      if (Number(draft.storageSchemaVersion) < STORAGE_SCHEMA_VERSION) return draft;
      return { ...draft, ...(settings || {}), ...(editorProject || {}), storageSchemaVersion: STORAGE_SCHEMA_VERSION };
    }

    function openStateDatabase() {
      return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
          reject(new Error("IndexedDB is unavailable"));
          return;
        }
        let openRejected = false;
        const request = indexedDB.open(STATE_DB_NAME, STATE_DB_VERSION);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(STATE_DB_STORE)) db.createObjectStore(STATE_DB_STORE);
          if (!db.objectStoreNames.contains(STATE_DB_SETTINGS_STORE)) db.createObjectStore(STATE_DB_SETTINGS_STORE);
          if (!db.objectStoreNames.contains(STATE_DB_EDITOR_STORE)) db.createObjectStore(STATE_DB_EDITOR_STORE);
        };
        request.onsuccess = () => {
          if (openRejected) {
            request.result.close();
            return;
          }
          request.result.onversionchange = () => request.result.close();
          resolve(request.result);
        };
        request.onerror = () => {
          openRejected = true;
          reject(request.error || new Error("IndexedDB open failed"));
        };
        request.onblocked = () => {
          openRejected = true;
          reject(new Error("IndexedDB open blocked"));
        };
      });
    }

    async function writeStateToIndexedDb(state) {
      const db = await openStateDatabase();
      try {
        const { draft, settings, editorProject } = splitStoredState(state);
        await new Promise((resolve, reject) => {
          const transaction = db.transaction([STATE_DB_STORE, STATE_DB_SETTINGS_STORE, STATE_DB_EDITOR_STORE], "readwrite");
          transaction.objectStore(STATE_DB_STORE).put(draft, STATE_DB_KEY);
          transaction.objectStore(STATE_DB_SETTINGS_STORE).put(settings, STATE_DB_KEY);
          transaction.objectStore(STATE_DB_EDITOR_STORE).put(editorProject, STATE_DB_KEY);
          transaction.oncomplete = () => resolve();
          transaction.onerror = () => reject(transaction.error || new Error("IndexedDB write failed"));
          transaction.onabort = () => reject(transaction.error || new Error("IndexedDB write aborted"));
        });
      } finally {
        db.close();
      }
    }

    async function readStateFromIndexedDb() {
      const db = await openStateDatabase();
      try {
        return await new Promise((resolve, reject) => {
          const transaction = db.transaction([STATE_DB_STORE, STATE_DB_SETTINGS_STORE, STATE_DB_EDITOR_STORE], "readonly");
          const draftRequest = transaction.objectStore(STATE_DB_STORE).get(STATE_DB_KEY);
          const settingsRequest = transaction.objectStore(STATE_DB_SETTINGS_STORE).get(STATE_DB_KEY);
          const editorRequest = transaction.objectStore(STATE_DB_EDITOR_STORE).get(STATE_DB_KEY);
          transaction.oncomplete = () => resolve(mergeStoredState(draftRequest.result, settingsRequest.result, editorRequest.result));
          transaction.onerror = () => reject(transaction.error || new Error("IndexedDB read failed"));
          transaction.onabort = () => reject(transaction.error || new Error("IndexedDB read aborted"));
        });
      } finally {
        db.close();
      }
    }

    function isStorageQuotaError(error) {
      return Boolean(error && (error.name === "QuotaExceededError" || /quota/i.test(String((error && error.message) || error))));
    }

    async function persistState(state) {
      let storedState = null;
      try {
        const requiresMigrationVerification = !stateUsesIndexedDb || Boolean(localStorage.getItem(STORAGE_KEY));
        storedState = await serializeStateImageReferences({
          ...state,
          storageSchemaVersion: STORAGE_SCHEMA_VERSION
        });
        const writeAndVerify = async () => {
          await writeStateToIndexedDb(storedState);
          if (requiresMigrationVerification) {
            const verifiedState = await readStateFromIndexedDb();
            if (!verifiedState || Number(verifiedState.storageSchemaVersion) !== STORAGE_SCHEMA_VERSION) {
              throw new Error("IndexedDB state migration verification failed");
            }
          }
        };
        try {
          await writeAndVerify();
        } catch (writeError) {
          if (!isStorageQuotaError(writeError)) throw writeError;
          await garbageCollectStoredImages(storedState);
          const clearedCacheCount = await clearRebuildableImageCache();
          if (clearedCacheCount) console.info("Cleared rebuildable image cache", clearedCacheCount);
          await writeAndVerify();
        }
        stateUsesIndexedDb = true;
        try {
          localStorage.setItem(STATE_STORAGE_MODE_KEY, STATE_STORAGE_MODE_INDEXED_DB);
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(COMPACT_CONTINUATION_STORAGE_KEY);
        } catch (markerError) {
          console.warn("IndexedDB state marker save failed", markerError);
        }
        lastPersistedStoredState = storedState;
        scheduleStoredImageGarbageCollection(storedState);
        return true;
      } catch (error) {
        console.warn("IndexedDB state save failed", error);
        showAutoSaveFailure(error);
        return false;
      }
    }

    function saveState() {
      if (!stateRestoreComplete) return Promise.resolve(false);
      const state = collectState();
      stateSaveQueue = stateSaveQueue.catch(() => false).then(() => persistState(state));
      return stateSaveQueue;
    }

    function renderTags(savedTags) {
      const nextTags = Array.isArray(savedTags) ? savedTags.filter(Boolean).slice(0, 8) : [];
      tags.querySelectorAll(".tag-chip").forEach((chip) => chip.remove());
      nextTags.forEach((text) => tags.insertBefore(createTag(text), addTagButton));
    }

    function applyState(state, persist = false) {
      if (!state || typeof state !== "object") return false;
      continuationState.full = normalizeContinuationPageState(state.continuationPages?.full);
      continuationState.compact = normalizeContinuationPageState(state.continuationPages?.compact);
      setTemplate(state.template || "full", false);
      applyCardTheme(state.theme || DEFAULT_THEME_ID, false);
      setEditableText("recordTitle", state.recordTitle || state.jpTitle || state.cnTitle || "");
      setEditableText("cvText", state.cvText || "");
      setEditableText("circleText", state.circleText || "");
      setEditableText("rjText", state.rjText || "");
      setEditableText("durationText", state.durationText || "");
      purchaseDateText.value = normalizeCardDateValue(state.purchaseDate);
      listenedDateText.value = normalizeCardDateValue(state.listenedDate);
      cardInfoType.value = normalizeCardInfoType(state.cardInfoType);
      syncCardInfoField();
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
      reviewText.value = state.reviewText || "";
      updateReviewCharacterCounts();
      coverOriginalSrc = state.coverOriginalSrc || "";
      coverEditedSrc = state.coverEditedSrc || "";
      coverMosaicMaskSrc = state.coverMosaicMaskSrc || "";
      coverBlurMaskSrc = state.coverBlurMaskSrc || "";
      coverWhiteFogMaskSrc = state.coverWhiteFogMaskSrc || "";
      coverEditorUndoStack = Array.isArray(state.coverEditorUndoStack) ? state.coverEditorUndoStack : [];
      coverEditorRedoStack = Array.isArray(state.coverEditorRedoStack) ? state.coverEditorRedoStack : [];
      coverEditorHistoryCheckpoint = state.coverEditorHistoryCheckpoint || null;
      coverEditorOperations = cloneEditorOperations(state.coverEditorOperations);
      coverEditorRedoOperations = cloneEditorOperations(state.coverEditorRedoOperations);
      coverEditorHistoryFormat = state.coverEditorHistoryFormat === "operations-v1"
        ? "operations-v1"
        : (coverEditorUndoStack.length || coverEditorRedoStack.length ? "legacy" : "operations-v1");
      coverStickers = cloneStickerList(state.coverStickers);
      stickerSources = Array.isArray(state.stickerSources) ? state.stickerSources : [];
      standaloneOriginalSrc = state.standaloneOriginalSrc || "";
      standaloneEditedSrc = state.standaloneEditedSrc || "";
      standaloneMosaicMaskSrc = state.standaloneMosaicMaskSrc || "";
      standaloneBlurMaskSrc = state.standaloneBlurMaskSrc || "";
      standaloneWhiteFogMaskSrc = state.standaloneWhiteFogMaskSrc || "";
      standaloneEditorUndoStack = Array.isArray(state.standaloneEditorUndoStack) ? state.standaloneEditorUndoStack : [];
      standaloneEditorRedoStack = Array.isArray(state.standaloneEditorRedoStack) ? state.standaloneEditorRedoStack : [];
      standaloneEditorHistoryCheckpoint = state.standaloneEditorHistoryCheckpoint || null;
      standaloneEditorOperations = cloneEditorOperations(state.standaloneEditorOperations);
      standaloneEditorRedoOperations = cloneEditorOperations(state.standaloneEditorRedoOperations);
      standaloneEditorHistoryFormat = state.standaloneEditorHistoryFormat === "operations-v1"
        ? "operations-v1"
        : (standaloneEditorUndoStack.length || standaloneEditorRedoStack.length ? "legacy" : "operations-v1");
      standaloneStickers = cloneStickerList(state.standaloneStickers);
      standaloneStickerSources = Array.isArray(state.standaloneStickerSources) ? state.standaloneStickerSources : [];
      const savedBrushSize = Number(state.brushSize);
      brushSize.value = String(Number.isFinite(savedBrushSize) ? clamp(savedBrushSize, Number(brushSize.min), Number(brushSize.max)) : 42);
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
      renderTemplatePage(false);
      fitStage();
      if (persist) saveState();
      return true;
    }

    async function restoreState() {
      let state;
      let loadedFromLegacyLocalStorage = false;
      try {
        state = await readStateFromIndexedDb();
        if (state && typeof state === "object") stateUsesIndexedDb = true;
      } catch (error) {
        console.warn("IndexedDB state restore failed", error);
      }
      if (!state) {
        try {
          state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
          loadedFromLegacyLocalStorage = Boolean(state && typeof state === "object");
        } catch {
          state = null;
        }
      }
      const compactContinuationSnapshot = readCompactContinuationSnapshot();
      if (state && typeof state === "object" && compactContinuationSnapshot) {
        state.continuationPages = {
          ...(state.continuationPages && typeof state.continuationPages === "object" ? state.continuationPages : {}),
          compact: compactContinuationSnapshot
        };
      }
      if (state && typeof state === "object") {
        lastPersistedStoredState = state;
        if (loadedFromLegacyLocalStorage || Number(state.storageSchemaVersion) < STORAGE_SCHEMA_VERSION) {
          await persistState(state);
        }
        state = await hydrateStateImageReferences(state);
      }
      const restoredTemplate = normalizeTemplateId(state && typeof state === "object" ? state.template : "full");
      try {
        await ensureTemplateFontLoaded(templateFontId(restoredTemplate));
      } catch (error) {
        console.warn("Saved template font preload failed", error);
      }
      if (!applyState(state, false)) applyCardTheme(DEFAULT_THEME_ID, false);
      applyTemplateFont(currentTemplate());
      syncTemplateFontMenu();
      stateRestoreComplete = true;
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
      coverWhiteFogMaskSrc = "";
      coverEditorUndoStack = [];
      coverEditorRedoStack = [];
      coverEditorHistoryCheckpoint = null;
      coverEditorOperations = [];
      coverEditorRedoOperations = [];
      coverEditorHistoryFormat = "operations-v1";
      coverStickers = [];
      selectedStickerId = null;
      editorUndoStack = [];
      editorRedoStack = [];
      editorUndoOperations = [];
      editorRedoOperations = [];
      editorHistoryFormat = "operations-v1";
      pendingEditorBrushOperation = null;
      coverImage.style.filter = "";
      coverImage.style.objectFit = "contain";
      coverBox.classList.remove("has-image");
    }

    function removeCoverImage() {
      resetCoverImageState();
      saveState();
    }

    async function setCoverFromDataUrl(dataUrl, storageOptions = null) {
      const storedDataUrl = await singleCoverStorageDataUrl(dataUrl, storageOptions);
      resetCoverImageState();
      coverOriginalSrc = storedDataUrl;
      coverImage.src = storedDataUrl;
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
          showAppAlert(String.fromCharCode(0x56fe, 0x7247, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x9009, 0x62e9, 0x56fe, 0x7247, 0x3002));
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
      void openImageEditorSafely(() => openImageEditor());
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

    cardInfoType.addEventListener("change", () => {
      syncCardInfoField();
      saveState();
    });
    [purchaseDateText, listenedDateText].forEach((input) => {
      input.addEventListener("input", () => {
        input.value = normalizeCardDateValue(input.value);
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

    tags.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && event.target.closest(".tag")) event.preventDefault();
    });

    tags.addEventListener("input", (event) => {
      const tag = event.target.closest(".tag");
      if (!tag) return;
      const singleLineText = String(tag.innerText || tag.textContent || "").replace(/\r\n?|\n/g, " ");
      const plainTextOnly = tag.childNodes.length <= 1 && (!tag.firstChild || tag.firstChild.nodeType === Node.TEXT_NODE);
      if (plainTextOnly && tag.textContent === singleLineText) return;
      tag.textContent = singleLineText;
      placeCaretAtFullFieldEnd(tag);
    });

    addTagButton.addEventListener("click", () => {
      const chip = createTag();
      const tag = chip.querySelector(".tag");
      tags.insertBefore(chip, addTagButton);
      tag.focus();
      focusTagText(tag);
      saveState();
    });

    resetButton.addEventListener("click", async () => {
      if (!await showAppConfirm(UI_RESET_CONFIRM)) return;
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
      cardInfoType.value = "duration";
      syncCardInfoField();
      currentDiscountManual = false;
      playerTotalSeconds = PLAYER_DEFAULT_TOTAL;
      playerProgress = 0;
      playerPlaying = false;
      syncPlayerUi(true);
      updateDiscount(true);
      continuationState.full = { current: 0, pages: [] };
      continuationState.compact = { current: 0, pages: [] };
      renderTemplatePage();
      saveState();
    });

    function canvasFont(weight, size, template = currentTemplate()) {
      return weight + ' ' + size + 'px ' + templateFontStack(templateFontId(template));
    }

    async function ensureCanvasFontReady(promptOnFailure = true, template = currentTemplate()) {
      try {
        await ensureTemplateFontLoaded(templateFontId(template));
        return true;
      } catch (error) {
        console.warn("Export font load failed", error);
        if (!promptOnFailure) return false;
        const choice = await showAppFontFallbackPrompt(error && error.message ? error.message : "");
        if (choice === "browser") {
          window.open(window.location.href, "_blank");
          return false;
        }
        return choice === true;
      }
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

    function strokeRound(ctx, x, y, w, h, r, stroke, width = 2, dashed = false, dashPattern = [10, 10]) {
      ctx.save();
      roundRect(ctx, x, y, w, h, r);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      if (dashed) ctx.setLineDash(dashPattern);
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
    const LABEL_PURCHASE_DATE = String.fromCharCode(0x8d2d, 0x4e70, 0x65e5, 0x671f);
    const LABEL_LISTENED_DATE = String.fromCharCode(0x6536, 0x542c, 0x65e5, 0x671f);
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

    function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3, ellipsis = false) {
      const lines = [];
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      let truncated = false;
      for (const sourceLine of sourceLines) {
        if (lines.length >= maxLines) {
          truncated = true;
          break;
        }
        if (!sourceLine) {
          lines.push("");
          continue;
        }
        let line = "";
        for (const char of wrappingCharacters(sourceLine)) {
          const test = line + char;
          if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = char;
            if (lines.length >= maxLines) {
              truncated = true;
              break;
            }
          } else {
            line = test;
          }
        }
        if (line && lines.length < maxLines) lines.push(line);
      }
      if (truncated && ellipsis && lines.length) {
        let lastLine = lines[lines.length - 1];
        while (lastLine.length > 1 && ctx.measureText(lastLine + "\u2026").width > maxWidth) lastLine = lastLine.slice(0, -1);
        lines[lines.length - 1] = lastLine + "\u2026";
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

    function drawFullWidthWrappedText(ctx, text, x, y, lineWidth = 7, lineHeight = 31, maxLines = 2) {
      const lines = fullWidthWrappedLines(text, lineWidth, maxLines);
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
        for (const char of wrappingCharacters(sourceLine)) {
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

    function drawCenteredWrappedStrokedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
      const lines = [];
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      for (const sourceLine of sourceLines) {
        if (lines.length >= maxLines) break;
        if (!sourceLine) {
          lines.push("");
          continue;
        }
        let line = "";
        for (const char of wrappingCharacters(sourceLine)) {
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
      ctx.lineJoin = "round";
      ctx.miterLimit = 2;
      lines.forEach((item, index) => {
        const tx = x + maxWidth / 2;
        const ty = y + index * lineHeight;
        ctx.shadowColor = "rgba(131,82,113,.16)";
        ctx.shadowBlur = 14;
        ctx.shadowOffsetY = 7;
        ctx.lineWidth = 8;
        ctx.strokeStyle = "rgba(255,248,251,.98)";
        ctx.strokeText(item, tx, ty);
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = "rgba(255,255,255,.95)";
        ctx.fillText(item, tx, ty + 2);
        ctx.fillStyle = currentCardTheme().ink;
        ctx.fillText(item, tx, ty);
      });
      ctx.restore();
      return lines.length * lineHeight;
    }

    function drawCenteredWrappedOffsetText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
      const lines = [];
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      for (const sourceLine of sourceLines) {
        if (lines.length >= maxLines) break;
        let line = "";
        for (const char of wrappingCharacters(sourceLine)) {
          const test = line + char;
          if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = char; }
          else line = test;
          if (lines.length >= maxLines) break;
        }
        if (line && lines.length < maxLines) lines.push(line);
      }
      ctx.save();
      ctx.textAlign = "center";
      lines.forEach((item, index) => {
        const tx = x + maxWidth / 2;
        const ty = y + index * lineHeight;
        ctx.fillStyle = themeAlpha("accentDeep", .2);
        ctx.fillText(item, tx - 4, ty + 7);
        ctx.fillStyle = themeAlpha("accent", .4);
        ctx.fillText(item, tx + 5, ty + 5);
        ctx.fillStyle = currentCardTheme().ink;
        ctx.fillText(item, tx, ty);
      });
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

    function themeTint(key, whiteRatio, alphaValue = 1) {
      const theme = currentCardTheme();
      const hex = (theme[key] || "#000000").replace("#", "");
      const full = hex.length === 3 ? hex.split("").map((ch) => ch + ch).join("") : hex;
      const ratio = Math.max(0, Math.min(1, whiteRatio));
      const mix = (start) => Math.round((parseInt(full.slice(start, start + 2), 16) || 0) * (1 - ratio) + 255 * ratio);
      return "rgba(" + mix(0) + "," + mix(2) + "," + mix(4) + "," + alphaValue + ")";
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
      const h = 39;
      const grad = ctx.createLinearGradient(x, y, x + w, y + h);
      grad.addColorStop(0, currentCardTheme().accent);
      grad.addColorStop(1, currentCardTheme().accentDeep);
      ctx.shadowColor = themeAlpha("accentDeep", .18);
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 6;
      fillRound(ctx, x, y, w, h, h / 2, grad);
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = "#fff";
      ctx.fillText(text, x + 22, y + 28);
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
      if (options.fullWidthTwoLine) {
        ctx.font = canvasFont('900', 23);
        drawFullWidthWrappedText(ctx, value, x + w / 2, top + 61, COMPACT_CV_CIRCLE_LINE_WIDTH, 31, TWO_LINE_FIELD_MAX_LINES);
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
      ctx.font = canvasFont('900', options.fontSize || 26);
      if (options.fullWidthTwoLine) drawFullWidthWrappedText(ctx, value, x, top + 61, options.lineWidth, 31, TWO_LINE_FIELD_MAX_LINES);
      else if (options.twoLine) drawFixedCharWrappedText(ctx, value, x, top + 61, Math.max(1, Math.floor(w / 26)), 31, 2);
      else drawWrappedText(ctx, value, x, top + 61, w, 31, 1);
    }

    function drawPreviewChoiceField(ctx, activeText, x, top, w) {
      const labels = [CHOICE_SUBTITLE, CHOICE_VIDEO, CHOICE_SCRIPT, CHOICE_NONE];
      const gap = 4;
      const bw = (w - gap * (labels.length - 1)) / labels.length;
      labels.forEach((label, index) => {
        const bx = x + index * (bw + gap);
        const by = top;
        const active = label === activeText;
        if (active) {
          ctx.save();
          ctx.shadowColor = themeAlpha("accentDeep", .16);
          ctx.shadowBlur = 13;
          ctx.shadowOffsetY = 6;
          fillRound(ctx, bx, by, bw, 34, 17, themeGradient(ctx, bx, by, bx + bw, by + 34));
          ctx.restore();
        } else {
          fillRound(ctx, bx, by, bw, 34, 17, "rgba(255,255,255,.62)");
        }
        strokeRound(ctx, bx, by, bw, 34, 17, active ? "transparent" : themeAlpha("accent", .26), 1);
        ctx.fillStyle = active ? "#fff" : currentCardTheme().muted;
        ctx.font = canvasFont('900', 15);
        ctx.textAlign = "center";
        ctx.fillText(label, bx + bw / 2, by + 23);
        ctx.textAlign = "left";
      });
    }

    function drawMetric(ctx, label, value, x, y, w, h, suffix = "", options = {}) {
      fillRound(ctx, x, y, w, h, 18, "rgba(255,255,255,.66)");
      strokeRound(ctx, x, y, w, h, 18, themeAlpha("mint", .28), 2);
      ctx.fillStyle = currentCardTheme().mint;
      ctx.font = canvasFont('800', 18);
      ctx.fillText(label, x + 13, y + 24);
      ctx.fillStyle = options.highDiscount ? "#d7192f" : currentCardTheme().ink;
      ctx.font = canvasFont('900', 26);
      if (!value) return;
      ctx.fillText(value, x + 13, y + 64);
      if (suffix) {
        ctx.font = canvasFont('900', 22);
        ctx.fillText(suffix, x + 59, y + 64);
      }
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
      const progressWidth = 484 * progress;
      fillRound(ctx, x, y + 4, 484, 8, 4, themeAlpha("line", .34));
      let progressFill = themeAlpha("accent", .88);
      if (theme.compactProgress) {
        progressFill = ctx.createLinearGradient(x, y + 4, x + Math.max(progressWidth, 1), y + 4);
        progressFill.addColorStop(0, theme.compactProgress[0]);
        progressFill.addColorStop(1, theme.compactProgress[1]);
      }
      fillRound(ctx, x, y + 4, progressWidth, 8, 4, progressFill);
      const dotX = x + (484 - 16) * progress;
      ctx.save();
      ctx.shadowColor = "rgba(184, 69, 112, 0.16)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetY = 4;
      fillRound(ctx, dotX, y, 16, 16, 8, "#fff");
      ctx.restore();
      strokeRound(ctx, dotX, y, 16, 16, 8, theme.compactProgressDot || themeAlpha("accent", .7), 3);

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
      ctx.save();
      ctx.shadowColor = "rgba(184, 69, 112, 0.24)";
      ctx.shadowBlur = 22;
      ctx.shadowOffsetY = 10;
      fillRound(ctx, x + 210, y + 42, 64, 64, 32, grad);
      ctx.restore();
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
      const theme = currentCardTheme();
      const starGradient = (sx) => {
        const gradient = ctx.createLinearGradient(sx, y, sx + 34, y + 34);
        if (currentThemeId === "sakura-ice") {
          gradient.addColorStop(0, "#b7b6ff");
          gradient.addColorStop(1, theme.accentDeep);
        } else {
          gradient.addColorStop(0, themeTint("line", .18));
          gradient.addColorStop(1, theme.accent);
        }
        return gradient;
      };
      ctx.fillStyle = theme.accentDeep;
      ctx.font = canvasFont('900', 24);
      ctx.fillText(label, x, y + 27);
      for (let i = 0; i < 5; i += 1) {
        const sx = x + 78 + i * 48;
        const remaining = count - i;
        const isActive = remaining >= 1;
        const isHalf = remaining > 0 && remaining < 1;
        if (isActive) {
          ctx.save();
          ctx.shadowColor = themeAlpha("accentDeep", currentThemeId === "sakura-ice" ? .2 : .18);
          ctx.shadowBlur = 10;
          ctx.shadowOffsetY = 5;
          fillRound(ctx, sx, y, 34, 34, 17, starGradient(sx));
          ctx.restore();
          ctx.save();
          roundRect(ctx, sx, y, 34, 34, 17);
          ctx.clip();
          ctx.fillStyle = themeAlpha("accentDeep", .16);
          ctx.fillRect(sx, y + 31, 34, 3);
          ctx.restore();
        } else {
          fillRound(ctx, sx, y, 34, 34, 17, "rgba(255,255,255,.7)");
          strokeRound(ctx, sx + 1, y + 1, 32, 32, 16, themeAlpha("line", .32), 2);
        }
        ctx.fillStyle = isActive ? "#fff" : themeAlpha("accent", .32);
        ctx.font = canvasFont('900', 24);
        ctx.textAlign = "center";
        if (isActive) {
          ctx.shadowColor = "rgba(160,59,98,.25)";
          ctx.shadowBlur = 0;
          ctx.shadowOffsetY = 1;
        }
        ctx.fillText(STAR_CHAR, sx + 17, y + 26);
        ctx.shadowColor = "transparent";
        ctx.shadowOffsetY = 0;
        if (isHalf) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(sx, y, 17, 34);
          ctx.clip();
          fillRound(ctx, sx, y, 34, 34, 17, starGradient(sx));
          ctx.fillStyle = "#fff";
          ctx.shadowColor = "rgba(160,59,98,.25)";
          ctx.shadowBlur = 0;
          ctx.shadowOffsetY = 1;
          ctx.fillText(STAR_CHAR, sx + 17, y + 26);
          ctx.restore();
        }
        ctx.textAlign = "left";
      }
      ctx.fillStyle = theme.mint;
      ctx.font = canvasFont('900', 22);
      ctx.textAlign = "center";
      ctx.fillText(String(count), x + 349, y + 27);
      ctx.textAlign = "left";
    }

    async function drawCover(ctx, x = 90, y = 110, w = 420, h = 315, r = 24, frame = true, fitMode = null, shadow = frame, contentInset = 0) {
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
      if (frame) strokeRound(ctx, x + 2, y + 2, w - 4, h - 4, Math.max(0, r - 2), "#fff", 4);
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
      const contentX = x + contentInset;
      const contentY = y + contentInset;
      const contentW = w - contentInset * 2;
      const contentH = h - contentInset * 2;
      ctx.save();
      roundRect(ctx, contentX, contentY, contentW, contentH, Math.max(0, r - contentInset));
      ctx.clip();
      const mode = fitMode || (coverImage.style.objectFit === "cover" ? "cover" : "contain");
      const iw = coverImage.naturalWidth || coverImage.width;
      const ih = coverImage.naturalHeight || coverImage.height;
      const scale = mode === "cover" ? Math.max(contentW / iw, contentH / ih) : Math.min(contentW / iw, contentH / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = contentX + (contentW - dw) / 2;
      const dy = contentY + (contentH - dh) / 2;
      ctx.fillStyle = "rgba(255,255,255,.52)";
      ctx.fillRect(contentX, contentY, contentW, contentH);
      ctx.drawImage(coverImage, dx, dy, dw, dh);
      ctx.restore();
      if (frame) strokeRound(ctx, x + 2, y + 2, w - 4, h - 4, Math.max(0, r - 2), "#fff", 4);
    }

    function dataFileName() {
      const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      return safeFilePart(firstTemplateRjFilePart()) + "_data_" + stamp + ".json";
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
      trackFixedUsageEvent("feature-template-data-export-success");
    }

    function normalizeImportedData(raw) {
      if (!raw || typeof raw !== "object") return null;
      if (raw.data && typeof raw.data === "object") return raw.data;
      return raw;
    }

    function importRecordData(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const data = normalizeImportedData(JSON.parse(String(reader.result || "")));
          if (!data) throw new Error("empty data");
          if (!applyState(data, false)) throw new Error("invalid data");
          if (!await saveState()) throw new Error("state persistence failed");
          trackFixedUsageEvent("feature-template-data-import-success");
        } catch (error) {
          console.error(error);
          showAppAlert(UI_IMPORT_DATA_FAILED);
        } finally {
          importDataInput.value = "";
        }
      };
      reader.onerror = () => {
        showAppAlert(UI_IMPORT_DATA_FAILED);
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

    async function renderCompactHomeCanvas() {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      const ctx = canvas.getContext("2d");
      ctx.scale(1.8, 1.8);

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

      await drawCover(ctx, 20, 20, 560, 420, 0, false);

      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('900', 21);
      drawCenteredWrappedText(ctx, editableText("recordTitle"), 20, 470, 560, 29, 3);

      drawCompactInfoField(ctx, LABEL_RJ, textOf('#rjText'), 32, 552, 162.67);
      drawCompactInfoField(ctx, "CV", textOf('#cvText'), 218.67, 552, 162.66, { fullWidthTwoLine: true });
      drawCompactInfoField(ctx, LABEL_CIRCLE, textOf('#circleText'), 405.33, 552, 162.67, { fullWidthTwoLine: true });

      drawPlayerDecoration(ctx);
      return canvas;
    }

    function drawTemplateCanvasBackground(ctx, width, height, framed = true) {
      const theme = currentCardTheme();
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, theme.bgStops[0]);
      bg.addColorStop(0.48, theme.bgStops[1]);
      bg.addColorStop(1, theme.bgStops[2]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,.36)";
      for (let x = 0; x <= width; x += 36) ctx.fillRect(x, 0, 1, height);
      ctx.fillStyle = "rgba(255,255,255,.32)";
      for (let y = 0; y <= height; y += 36) ctx.fillRect(0, y, width, 1);
      if (!framed) return;
      if (width === 600) {
        strokeRound(ctx, 9, 9, 582, 782, 24, themeAlpha("line", .78), 2);
        strokeRound(ctx, 18, 18, 564, 764, 18, themeAlpha("dash", theme.dashAlpha), 1, true, [5, 5]);
        return;
      }
      strokeRound(ctx, 16, 16, 1048, 1408, 30, themeAlpha("line", .78), 3);
      strokeRound(ctx, 30, 30, 1020, 1380, 22, themeAlpha("dash", theme.dashAlpha), 2, true, [6, 6]);
    }

    function drawSingleLineEllipsizedText(ctx, text, x, y, maxWidth) {
      const chars = wrappingCharacters(text);
      let line = chars.join("");
      if (ctx.measureText(line).width <= maxWidth) {
        ctx.fillText(line, x, y);
        return;
      }
      while (chars.length && ctx.measureText(chars.join("") + "\u2026").width > maxWidth) chars.pop();
      line = chars.join("") + "\u2026";
      ctx.fillText(line, x, y);
    }

    function compactContinuationCanvasLines(ctx, value, maxWidth) {
      const text = String(value || "").replace(/\r\n?/g, "\n");
      const lines = [];
      let line = "";
      let lineStart = 0;
      let offset = 0;
      for (const character of wrappingCharacters(text)) {
        const characterLength = character.length;
        if (character === "\n") {
          lines.push({ text: line, start: lineStart, end: offset });
          offset += characterLength;
          line = "";
          lineStart = offset;
          continue;
        }
        const nextLine = line + character;
        if (line && ctx.measureText(nextLine).width > maxWidth) {
          lines.push({ text: line, start: lineStart, end: offset });
          line = character;
          lineStart = offset;
        } else {
          line = nextLine;
        }
        offset += characterLength;
      }
      if (line || !lines.length || text.endsWith("\n")) lines.push({ text: line, start: lineStart, end: offset });
      return lines;
    }

    function drawCompactContinuationColumn(ctx, lines, x, firstBaseline, lineHeight) {
      lines.forEach((line, lineIndex) => {
        const baseline = firstBaseline + lineIndex * lineHeight;
        ctx.fillText(line.text, x, baseline);
      });
    }

    function drawCompactContinuationSpine(ctx) {
      const top = 81;
      const bottom = 730;
      const motifBoxHeight = 22;
      const gap = 8;
      const motifs = [
        ["\u2726", "accent"],
        ["\u266a", "mint"],
        ["\u2661", "accent"],
        ["\u266a", "mint"]
      ];
      const lineLength = (bottom - top - motifs.length * motifBoxHeight - motifs.length * 2 * gap) / (motifs.length + 1);
      let cursor = top;
      ctx.save();
      ctx.lineWidth = 1;
      ctx.font = canvasFont('800', 14);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let index = 0; index <= motifs.length; index += 1) {
        ctx.strokeStyle = themeAlpha(index === 1 || index === 3 ? "mint" : "accent", index === 1 || index === 3 ? .62 : .56);
        ctx.beginPath();
        ctx.moveTo(300.5, cursor);
        ctx.lineTo(300.5, cursor + lineLength);
        ctx.stroke();
        cursor += lineLength;
        if (index >= motifs.length) continue;
        cursor += gap;
        const [symbol, color] = motifs[index];
        ctx.fillStyle = currentCardTheme().bgStops[1];
        ctx.fillRect(289, cursor, 22, motifBoxHeight);
        ctx.fillStyle = color === "mint" ? currentCardTheme().mint : currentCardTheme().accent;
        ctx.fillText(symbol, 300, cursor + motifBoxHeight / 2);
        cursor += motifBoxHeight + gap;
      }
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";
      ctx.restore();
    }

    async function renderFullHomeCanvas() {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      const ctx = canvas.getContext("2d");
      const theme = currentCardTheme();
      drawTemplateCanvasBackground(ctx, 1080, 1440, true);

      await drawCover(ctx, 64, 83.5, 420, 315, 24, true, null, true, 4);

      fillRound(ctx, 508, 83.5, 508, 315, 26, theme.panelBg);
      strokeRound(ctx, 508, 83.5, 508, 315, 26, themeAlpha("line", theme.lineSoftAlpha), 2);
      drawStickerLabel(ctx, LABEL_BASIC, 526, 62.5);
      drawPreviewInfoField(ctx, "CV", limitedFullFieldText(cvText, textOf('#cvText')), 532, 127.5, 221, { fullWidthTwoLine: true, lineWidth: FULL_CV_LINE_WIDTH });
      drawPreviewInfoField(ctx, LABEL_CIRCLE, limitedFullFieldText(circleText, textOf('#circleText')), 771, 127.5, 221, {
        fullWidthTwoLine: true,
        lineWidth: FULL_CIRCLE_LINE_WIDTH,
        fontSize: templateFontId("full") === "keinan-pop" ? 24 : 26
      });
      drawPreviewInfoField(ctx, LABEL_RJ, limitedFullFieldText(rjText, textOf('#rjText')), 532, 240.5, 221);
      const selectedCardInfoType = normalizeCardInfoType(cardInfoType.value);
      if (selectedCardInfoType !== "hidden") {
        const selectedCardInfoLabel = selectedCardInfoType === "purchaseDate" ? LABEL_PURCHASE_DATE : selectedCardInfoType === "listenedDate" ? LABEL_LISTENED_DATE : LABEL_DURATION;
        const selectedCardInfoText = selectedCardInfoType === "purchaseDate" ? purchaseDateText.value : selectedCardInfoType === "listenedDate" ? listenedDateText.value : limitedFullFieldText(durationText, textOf('#durationText'));
        drawPreviewInfoField(ctx, selectedCardInfoLabel, selectedCardInfoText, 771, 240.5, 221);
      }
      drawPreviewChoiceField(ctx, document.querySelector(".choice-button.active")?.textContent.trim() || CHOICE_SUBTITLE, 534, 340.5, 366);

      fillRound(ctx, 64, 438.5, 952, 112, 26, theme.panelBg);
      strokeRound(ctx, 64, 438.5, 952, 112, 26, themeAlpha("line", theme.lineSoftAlpha), 2);
      drawStickerLabel(ctx, LABEL_TITLE, 82, 417.5);
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('900', 26);
      drawWrappedText(ctx, limitedFullFieldText(recordTitle, editableText("recordTitle")), 88, 490.5, 904, 33, 2);

      fillRound(ctx, 64, 590.5, 952, 105, 26, theme.panelBg);
      strokeRound(ctx, 64, 590.5, 952, 105, 26, themeAlpha("line", theme.lineSoftAlpha), 2);
      drawStickerLabel(ctx, LABEL_TAGS, 82, 569.5);
      const tagTexts = Array.from(document.querySelectorAll(".tag")).map((tag) => tag.textContent.trim()).filter(Boolean);
      let tx = 84;
      const ty = 626.5;
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

      fillRound(ctx, 64, 735.5, 468, 220, 26, theme.panelBg);
      strokeRound(ctx, 64, 735.5, 468, 220, 26, themeAlpha("line", theme.lineSoftAlpha), 2);
      drawStickerLabel(ctx, LABEL_PURCHASE, 82, 714.5);
      drawMetric(ctx, LABEL_ORIGINAL, valueOf("#originalPrice"), 84, 771.5, 208, 77.5);
      drawMetric(ctx, LABEL_PAID, valueOf("#currentPrice"), 304, 771.5, 208, 77.5);
      drawMetric(ctx, LABEL_DISCOUNT, valueOf("#currentDiscount"), 84, 860, 208, 77.5, "%off", { highDiscount: isHighDiscountValue(valueOf("#currentDiscount")) });
      drawMetric(ctx, LABEL_LOWEST, valueOf("#lowestPrice"), 304, 860, 208, 77.5, "%off", { highDiscount: isHighDiscountValue(valueOf("#lowestPrice")) });

      fillRound(ctx, 548, 735.5, 468, 220, 26, theme.panelBg);
      strokeRound(ctx, 548, 735.5, 468, 220, 26, themeAlpha("line", theme.lineSoftAlpha), 2);
      drawStickerLabel(ctx, LABEL_RATING, 566, 714.5);
      const rows = Array.from(document.querySelectorAll(".rating-row"));
      drawStars(ctx, LABEL_OVERALL, ratingValue(rows[0]), 574, 770.5);
      drawStars(ctx, "CV", ratingValue(rows[1]), 574, 813.5);
      drawStars(ctx, LABEL_STORY, ratingValue(rows[2]), 574, 856.5);
      drawStars(ctx, "SE", ratingValue(rows[3]), 574, 899.5);

      fillRound(ctx, 64, 995.5, 952, 382, 28, theme.reviewBg);
      strokeRound(ctx, 64, 995.5, 952, 382, 28, themeAlpha("line", theme.lineSoftAlpha), 2);
      drawStickerLabel(ctx, LABEL_REVIEW, 82, 974.5);
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('400', 24);
      drawWrappedText(ctx, limitedFullReviewText(reviewText.value), 88, 1051.5, FULL_REVIEW_LINE_WIDTH, 31, FULL_REVIEW_MAX_LINES);
      return canvas;
    }

    async function renderFullContinuationCanvas(pageText, pageIndex, pageTotal) {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      const ctx = canvas.getContext("2d");
      const theme = currentCardTheme();
      drawTemplateCanvasBackground(ctx, 1080, 1440, true);
      await drawCover(ctx, 88, 62, 180, 135, 20, true, null, true, 4);
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('900', 26);
      drawWrappedText(ctx, editableText("recordTitle"), 298, 95, 718, 33, 2, true);
      ctx.fillStyle = theme.accent;
      ctx.font = canvasFont('800', 21);
      const cvLabel = "CV";
      const cvValue = textOf('#cvText');
      const rjValue = textOf('#rjText');
      ctx.fillText(cvLabel, 298, 189);
      const cvValueX = 298 + ctx.measureText(cvLabel + " ").width + 8;
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('900', 21);
      ctx.fillText(cvValue, cvValueX, 189);
      ctx.textAlign = "right";
      drawSingleLineEllipsizedText(ctx, rjValue, 1000, 189, 343);
      ctx.textAlign = "left";
      ctx.strokeStyle = themeAlpha("accent", .34);
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(64, 216.5);
      ctx.lineTo(1016, 216.5);
      ctx.stroke();
      ctx.setLineDash([]);
      fillRound(ctx, 64, 250.5, 952, 1127, 28, theme.reviewBg);
      strokeRound(ctx, 64, 250.5, 952, 1127, 28, themeAlpha("line", theme.lineSoftAlpha), 2);
      ctx.save();
      ctx.font = canvasFont('900', 24);
      const reviewLabelWidth = Math.ceil(ctx.measureText(LABEL_REVIEW).width) + 40;
      const reviewLabelGradient = ctx.createLinearGradient(82, 229.5, 82 + reviewLabelWidth, 267.5);
      reviewLabelGradient.addColorStop(0, theme.accent);
      reviewLabelGradient.addColorStop(1, theme.accentDeep);
      ctx.shadowColor = themeAlpha("accentDeep", .18);
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 6;
      fillRound(ctx, 82, 229.5, reviewLabelWidth, 38, 19, reviewLabelGradient);
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = "#fff";
      ctx.fillText(LABEL_REVIEW, 102, 257.5);
      ctx.restore();
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('400', 24);
      drawWrappedText(ctx, limitedFullContinuationReviewText(pageText), 88, 306.5, FULL_CONTINUATION_REVIEW_WIDTH, 31.68, FULL_CONTINUATION_REVIEW_MAX_LINES);
      ctx.fillStyle = theme.muted;
      ctx.font = canvasFont('800', 18);
      ctx.textAlign = "right";
      if ("letterSpacing" in ctx) ctx.letterSpacing = "1.44px";
      ctx.fillText(paddedPageNumber(pageIndex + 1) + " / " + paddedPageNumber(pageTotal), 1031, 1402);
      if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
      ctx.textAlign = "left";
      return canvas;
    }

    async function renderCompactContinuationCanvas(pageText, pageIndex, pageTotal) {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      const ctx = canvas.getContext("2d");
      ctx.scale(1.8, 1.8);
      const theme = currentCardTheme();
      drawTemplateCanvasBackground(ctx, 600, 800, true);
      ctx.fillStyle = theme.muted;
      ctx.font = canvasFont('800', 13);
      if ("letterSpacing" in ctx) ctx.letterSpacing = ".78px";
      const metaLabel = "CV";
      const metaDetail = "  " + textOf('#cvText') + "  \u00b7  " + textOf('#rjText');
      const metaText = metaLabel + metaDetail;
      const metaWidth = ctx.measureText(metaText).width;
      const titleMaxWidth = Math.max(0, 504 - metaWidth - 16);
      ctx.fillStyle = theme.ink;
      ctx.textAlign = "left";
      drawSingleLineEllipsizedText(ctx, editableText("recordTitle").replace(/\s+/g, " ").trim(), 48, 42, titleMaxWidth);
      const metaX = 552 - metaWidth;
      ctx.fillStyle = theme.accentDeep;
      ctx.fillText(metaLabel, metaX, 42);
      ctx.fillStyle = theme.muted;
      ctx.fillText(metaDetail, metaX + ctx.measureText(metaLabel).width, 42);
      if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
      ctx.textAlign = "left";
      ctx.strokeStyle = themeAlpha("accent", .42);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(48, 60);
      ctx.lineTo(278, 60);
      ctx.moveTo(322, 60);
      ctx.lineTo(552, 60);
      ctx.stroke();
      ctx.fillStyle = theme.accent;
      ctx.font = canvasFont('800', 14);
      ctx.textAlign = "center";
      ctx.fillText("\u266b", 300, 65);
      ctx.textAlign = "left";
      drawCompactContinuationSpine(ctx);
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('400', 18);
      if ("letterSpacing" in ctx) ctx.letterSpacing = ".36px";
      const lines = compactContinuationCanvasLines(ctx, pageText, COMPACT_CONTINUATION_COLUMN_WIDTH);
      drawCompactContinuationColumn(ctx, lines.slice(0, COMPACT_CONTINUATION_LINES_PER_COLUMN), 44, 102, 32.4);
      drawCompactContinuationColumn(ctx, lines.slice(COMPACT_CONTINUATION_LINES_PER_COLUMN, COMPACT_CONTINUATION_LINES_PER_COLUMN * 2), 335, 102, 32.4);
      if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
      ctx.strokeStyle = themeAlpha("mint", .44);
      ctx.beginPath();
      ctx.moveTo(48, 744);
      ctx.lineTo(552, 744);
      ctx.stroke();
      ctx.fillStyle = theme.accentDeep;
      ctx.font = canvasFont('800', 13);
      ctx.fillText("SITUATION \u2726 VOICE", 48, 768);
      ctx.textAlign = "right";
      ctx.fillText(paddedPageNumber(pageIndex + 1) + " / " + paddedPageNumber(pageTotal), 552, 768);
      ctx.textAlign = "left";
      return canvas;
    }

    async function downloadPagedTemplateCards(template) {
      const exportThemeId = currentThemeId;
      const pageState = currentContinuationState(template);
      const total = templatePageTotal(template);
      const pages = [];
      for (let index = 0; index < total; index += 1) {
        let canvas;
        try {
          if (index === 0) canvas = template === "compact" ? await renderCompactHomeCanvas() : await renderFullHomeCanvas();
          else if (template === "compact") canvas = await renderCompactContinuationCanvas(pageState.pages[index - 1], index, total);
          else canvas = await renderFullContinuationCanvas(pageState.pages[index - 1], index, total);
          pages.push({ blob: await canvasToBlob(canvas), fileName: templatePageExportFileName(template, index, total) });
        } finally {
          releaseCanvas(canvas);
        }
      }
      if (isMobileView()) showExportPreviewPages(pages, pageState.current);
      else pages.forEach((page) => downloadBlob(page.blob, page.fileName));
      trackSuccessfulExport(template, exportThemeId);
    }

    async function downloadCard() {
      commitActivePlayerTime();
      downloadButton.disabled = true;
      try {
        const template = currentTemplate();
        if (!(await ensureCanvasFontReady(true, template))) return;
        await new Promise((resolve) => window.requestAnimationFrame(resolve));
        if (templateFontHasOverflow() && !(await showAppConfirm(UI_TEMPLATE_FONT_EXPORT_OVERFLOW))) return;
        if (template === "grid9") {
          await downloadGrid9Card();
          return;
        }
        if (template === "quick") {
          await downloadQuickCard();
          return;
        }
        if (template === "trio") {
          await downloadTrioCard();
          return;
        }
        if (!(await ensureCanvasFontReady())) return;
        await downloadPagedTemplateCards(template);
      } catch (error) {
        console.error(error);
        const exportErrorText = error instanceof Error && error.message ? error.message : String.fromCharCode(0x672a, 0x77e5, 0x539f, 0x56e0);
        showAppAlert(String.fromCharCode(0x5bfc, 0x51fa, 0x5931, 0x8d25, 0xff1a) + exportErrorText);
      } finally {
        downloadButton.disabled = false;
      }
    }
    const UI_GRID9_UPLOAD = String.fromCharCode(0x70b9, 0x51fb, 0x4e0a, 0x4f20, 0x20, 0x42, 0x4b);
    const UI_GRID9_TAG_PLACEHOLDER = String.fromCharCode(0x77ed, 0x6807, 0x9898);
    const UI_GRID9_REVIEW_PLACEHOLDER = String.fromCharCode(0x77ed, 0x8bc4);
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
    const UI_GRID9_IMPORT_DONE_TITLE = String.fromCharCode(0x5df2, 0x6839, 0x636e, 0x52, 0x4a, 0x53f7, 0x5bfc, 0x5165, 0x4fe1, 0x606f);
    const UI_GRID9_IMPORT_ACTION = String.fromCharCode(0x6309, 0x52, 0x4a, 0x53f7, 0x5bfc, 0x5165, 0x4fe1, 0x606f);
    const UI_GRID9_IMPORT_CHOOSE_MODE = String.fromCharCode(0x68c0, 0x6d4b, 0x5230, 0x5df2, 0x6709, 0x4fe1, 0x606f, 0xff0c, 0x8bf7, 0x9009, 0x62e9, 0x5bfc, 0x5165, 0x65b9, 0x5f0f, 0x3002);
    const UI_GRID9_NO_COVER = String.fromCharCode(0x6ca1, 0x6709, 0x62ff, 0x5230, 0x5c01, 0x9762);
    const UI_GRID9_NO_DATA = String.fromCharCode(0x6ca1, 0x6709, 0x8bfb, 0x53d6, 0x5230, 0x8d44, 0x6599);
    const UI_GRID9_UNKNOWN = String.fromCharCode(0x672a, 0x77e5, 0x539f, 0x56e0);
    const grid9ImportModal = document.getElementById("grid9ImportModal");
    const grid9ImportTitle = document.getElementById("grid9ImportTitle");
    const grid9ImportBody = document.getElementById("grid9ImportBody");
    const grid9ImportDoneButton = document.getElementById("grid9ImportDoneButton");
    const grid9ImportOverwriteButton = document.getElementById("grid9ImportOverwriteButton");
    const grid9ImportFillButton = document.getElementById("grid9ImportFillButton");
    const grid9ImportCancelButton = document.getElementById("grid9ImportCancelButton");
    const batchTemplateRjModal = document.getElementById("batchTemplateRjModal");
    const batchTemplateRjTitle = document.getElementById("batchTemplateRjTitle");
    const batchTemplateRjHelp = document.getElementById("batchTemplateRjHelp");
    const batchTemplateRjInput = document.getElementById("batchTemplateRjInput");
    const batchTemplateRjModeInputs = Array.from(document.querySelectorAll('input[name="batchTemplateRjMode"]'));
    const batchTemplateRjStatus = document.getElementById("batchTemplateRjStatus");
    const batchTemplateRjPreview = document.getElementById("batchTemplateRjPreview");
    const batchTemplateRjError = document.getElementById("batchTemplateRjError");
    const batchTemplateRjCancel = document.getElementById("batchTemplateRjCancel");
    const batchTemplateRjFillOnly = document.getElementById("batchTemplateRjFillOnly");
    const batchTemplateRjFillImport = document.getElementById("batchTemplateRjFillImport");
    let batchTemplateRjTemplate = "grid9";
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
      String.fromCharCode(0x6700, 0x8fd1, 0x5728, 0x542c),
      String.fromCharCode(0x6700, 0x4f73, 0x9e21, 0x86cb),
      String.fromCharCode(0x6700, 0x4f73, 0x5267, 0x60c5),
      String.fromCharCode(0x6700, 0x751c, 0x871c),
      String.fromCharCode(0x6700, 0x641e, 0x7b11),
      String.fromCharCode(0x6700, 0x6e29, 0x67d4),
      String.fromCharCode(0x6700, 0x9ed1, 0x8f66),
      String.fromCharCode(0x6700, 0x53ef, 0x7231),
      String.fromCharCode(0x6700, 0x7f8e, 0x42, 0x4b)
    ];

    function limitedGrid9ReviewText(value, input) {
      return limitedByMeasuredLines(value, input, GRID9_REVIEW_LINE_WIDTH, GRID9_REVIEW_MAX_LINES);
    }

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
        input.dataset.editorOnly = "";
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
        tools.dataset.editorOnly = "";
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
        reviewArea.rows = 4;
        reviewArea.placeholder = UI_GRID9_REVIEW_PLACEHOLDER;
        bindTextInputLimit(reviewArea, (value) => limitedGrid9ReviewText(value, reviewArea));
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

    const MULTI_TEMPLATE_RJ_FIELD_WIDTH = 95;

    function fitGrid9RjWidth(input) {
      if (!input) return;
      input.style.width = MULTI_TEMPLATE_RJ_FIELD_WIDTH + "px";
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
        review: cell.querySelector(".grid9-review-input").value,
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
      const reviewInput = cell.querySelector(".grid9-review-input");
      reviewInput.value = limitedGrid9ReviewText(next.review || "", reviewInput);
      const rjInput = cell.querySelector(".grid9-cell-rj-input");
      rjInput.value = next.rj || "";
      fitGrid9RjWidth(rjInput);
    }

    function collectGrid9State() {
      return {
        title: grid9TitleText.textContent.trim(),
        showNumbers: grid9ShowNumbers.checked,
        showRj: grid9ShowRj.checked,
        titleStyle: grid9TitleStyle,
        cells: Array.from({ length: 9 }, (_, index) => readGrid9Cell(index))
      };
    }

    function applyGrid9State(state) {
      if (!state || typeof state !== "object") return;
      grid9TitleText.textContent = state.title ?? localStorage.getItem(GRID9_TITLE_TEXT_STORAGE_KEY) ?? "";
      limitGrid9Text(grid9TitleText, 15);
      localStorage.setItem(GRID9_TITLE_TEXT_STORAGE_KEY, grid9TitleText.textContent.trim());
      grid9ShowNumbers.checked = state.showNumbers !== false;
      grid9ShowRj.checked = state.showRj !== false;
      const savedTitleStyle = state.titleStyle || localStorage.getItem(GRID9_TITLE_STYLE_STORAGE_KEY);
      grid9TitleStyle = ["offset", "chip", "split", "frost"].includes(savedTitleStyle) ? savedTitleStyle : "cream";
      localStorage.setItem(GRID9_TITLE_STYLE_STORAGE_KEY, grid9TitleStyle);
      for (let index = 0; index < 9; index += 1) {
        writeGrid9Cell(index, (state.cells && state.cells[index]) || {});
      }
      updateGrid9EmptyClass();
      updateGrid9Toggles();
      updateGrid9TitleStyle();
    }

    function resetGrid9State() {
      grid9TitleText.textContent = "";
      grid9ShowNumbers.checked = true;
      grid9ShowRj.checked = true;
      grid9TitleStyle = "cream";
      grid9CellEditors.forEach((cell, index) => {
        applyGrid9Cover(index, "");
        cell.querySelector(".grid9-tag-input").value = "";
        cell.querySelector(".grid9-review-input").value = "";
        cell.querySelector(".grid9-cell-rj-input").value = "";
      });
      updateGrid9EmptyClass();
      updateGrid9Toggles();
      updateGrid9TitleStyle();
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

    async function grid9CoverStorageDataUrl(dataUrl, storeAsBlob = false, storageOptions = null) {
      if (!dataUrl) return dataUrl;
      const img = await loadImage(dataUrl).catch(() => null);
      if (!img || !img.naturalWidth || !img.naturalHeight) {
        if (storeAsBlob) await registerNewStoredImage(dataUrl, storageOptions);
        return dataUrl;
      }
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
      const output = canvas.toDataURL("image/jpeg", COVER_JPEG_QUALITY);
      releaseCanvas(canvas);
      if (storeAsBlob) await registerNewStoredImage(output, storageOptions);
      return output;
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

    function grid9ImportMessage(imported, failed, skipped, empty, partial = 0) {
      const parts = [];
      parts.push(UI_IMPORT_COMPLETE_COUNT + " " + Math.max(0, imported - partial) + String.fromCharCode(0x5f20));
      if (partial > 0) parts.push(UI_IMPORT_PARTIAL_COUNT + " " + partial + String.fromCharCode(0x5f20));
      if (failed > 0) parts.push(UI_GRID9_FAILED + " " + failed);
      if (skipped > 0) parts.push(UI_GRID9_SKIPPED + " " + skipped);
      if (empty > 0) parts.push(UI_GRID9_EMPTY + " " + empty);
      return parts.join(String.fromCharCode(0xff0c));
    }

    function grid9FailureReason(error) {
      const message = String((error && error.message) || "");
      let reason = "";
      if (message === "no cover url") reason = UI_GRID9_NO_COVER;
      else if (message === "empty product") reason = UI_GRID9_NO_DATA;
      else reason = message || UI_GRID9_UNKNOWN;
      return reason;
    }

    function showGrid9ImportLoading() {
      grid9ImportTitle.textContent = UI_GRID9_IMPORTING + String.fromCharCode(0x2026);
      grid9ImportBody.textContent = "";
      grid9ImportDoneButton.hidden = true;
      grid9ImportModal.hidden = false;
    }

    function chooseBatchImportMode(hasExisting) {
      if (!hasExisting) return Promise.resolve("fill");
      return new Promise((resolve) => {
        grid9ImportTitle.textContent = UI_GRID9_IMPORT_ACTION;
        grid9ImportBody.textContent = UI_GRID9_IMPORT_CHOOSE_MODE;
        grid9ImportDoneButton.hidden = true;
        grid9ImportOverwriteButton.hidden = false;
        grid9ImportFillButton.hidden = false;
        grid9ImportCancelButton.hidden = false;
        grid9ImportModal.hidden = false;
        const finish = (mode) => {
          grid9ImportOverwriteButton.hidden = true;
          grid9ImportFillButton.hidden = true;
          grid9ImportCancelButton.hidden = true;
          grid9ImportModal.hidden = true;
          resolve(mode);
        };
        grid9ImportOverwriteButton.onclick = () => finish("overwrite");
        grid9ImportFillButton.onclick = () => finish("fill");
        grid9ImportCancelButton.onclick = () => finish(null);
      });
    }

    function showGrid9ImportResult(imported, failed, skipped, empty, failures, fieldIssues = []) {
      grid9ImportTitle.textContent = UI_GRID9_IMPORT_DONE_TITLE;
      grid9ImportBody.textContent = "";
      const summary = document.createElement("p");
      summary.style.margin = "0 0 6px";
      summary.textContent = grid9ImportMessage(imported, failed, skipped, empty, fieldIssues.length);
      grid9ImportBody.appendChild(summary);
      fieldIssues.forEach((issue) => {
        const line = document.createElement("p");
        line.style.margin = "2px 0";
        line.style.color = "var(--rose-deep)";
        line.textContent = issue.rj + String.fromCharCode(0xff1a) + importFieldIssueText(issue.fields);
        grid9ImportBody.appendChild(line);
      });
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

    function parseBatchTemplateRjs(value) {
      const tokens = String(value || "").split(/[\s,\uff0c;\uff1b]+/).map((item) => item.trim()).filter(Boolean);
      const rjs = [];
      const invalid = [];
      const duplicates = [];
      const seen = new Set();
      tokens.forEach((token) => {
        const clean = token.toUpperCase();
        if (!/^(?:RJ|BJ)?\d+$/.test(clean)) {
          invalid.push(token);
          return;
        }
        const rj = normalizeWorkno(clean);
        if (!rj) {
          invalid.push(token);
          return;
        }
        if (seen.has(rj)) {
          duplicates.push(rj);
          return;
        }
        seen.add(rj);
        rjs.push(rj);
      });
      return { rjs, invalid, duplicates };
    }

    function batchTemplateRjContext(template = batchTemplateRjTemplate) {
      if (template === "quick") {
        return {
          template,
          label: String.fromCharCode(0x901f, 0x8bc4, 0x7248),
          cells: quickCellEditors,
          selector: ".quick-rj",
          max: 12,
          fit: fitQuickRjWidth
        };
      }
      return {
        template: "grid9",
        label: String.fromCharCode(0x4e5d, 0x5bab, 0x683c),
        cells: grid9CellEditors,
        selector: ".grid9-cell-rj-input",
        max: 9,
        fit: fitGrid9RjWidth
      };
    }

    function batchTemplateRjMode() {
      return batchTemplateRjModeInputs.find((input) => input.checked)?.value === "overwrite" ? "overwrite" : "fill";
    }

    function batchTemplateRjPlan() {
      const context = batchTemplateRjContext();
      const parsed = parseBatchTemplateRjs(batchTemplateRjInput.value);
      const targetIndexes = context.cells.reduce((indexes, cell, index) => {
        const input = cell.querySelector(context.selector);
        if (batchTemplateRjMode() === "overwrite" || !String(input?.value || "").trim()) indexes.push(index);
        return indexes;
      }, []);
      const errors = [];
      if (parsed.invalid.length) {
        errors.push(String.fromCharCode(0x65e0, 0x6548, 0xff1a) + parsed.invalid.join(String.fromCharCode(0x3001)));
      }
      if (parsed.duplicates.length) {
        errors.push(String.fromCharCode(0x91cd, 0x590d, 0xff1a) + parsed.duplicates.join(String.fromCharCode(0x3001)));
      }
      if (parsed.rjs.length > targetIndexes.length) {
        errors.push(
          String.fromCharCode(0x5f53, 0x524d, 0x586b, 0x5199, 0x65b9, 0x5f0f, 0x53ea, 0x80fd, 0x653e, 0x5165) +
          " " + targetIndexes.length + " " +
          String.fromCharCode(0x4e2a, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x3002)
        );
      }
      const assignments = parsed.rjs.slice(0, targetIndexes.length).map((rj, index) => ({ index: targetIndexes[index], rj }));
      return { context, parsed, errors, assignments };
    }

    function renderBatchTemplateRjDialog() {
      const plan = batchTemplateRjPlan();
      batchTemplateRjStatus.textContent = plan.parsed.rjs.length + " / " + plan.context.max;
      batchTemplateRjPreview.textContent = "";
      plan.assignments.forEach((assignment) => {
        const item = document.createElement("span");
        item.textContent = String(assignment.index + 1) + " \u2192 " + assignment.rj;
        batchTemplateRjPreview.appendChild(item);
      });
      const valid = plan.parsed.rjs.length > 0 && plan.errors.length === 0;
      batchTemplateRjError.hidden = plan.errors.length === 0;
      batchTemplateRjError.textContent = plan.errors.join("\n");
      batchTemplateRjFillOnly.disabled = !valid;
      batchTemplateRjFillImport.disabled = !valid;
    }

    function openBatchTemplateRjDialog(template) {
      batchTemplateRjTemplate = template === "quick" ? "quick" : "grid9";
      const context = batchTemplateRjContext();
      batchTemplateRjTitle.textContent = String.fromCharCode(0x6279, 0x91cf, 0x586b, 0x5199, 0x20, 0x52, 0x4a);
      batchTemplateRjHelp.textContent = context.label + " \u00b7 " + String.fromCharCode(0x6309, 0x987a, 0x5e8f, 0x7c98, 0x8d34, 0xff0c, 0x6700, 0x591a) + " " + context.max + " " + String.fromCharCode(0x4e2a, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x3002);
      batchTemplateRjInput.value = "";
      batchTemplateRjModeInputs.forEach((input) => { input.checked = input.value === "fill"; });
      renderBatchTemplateRjDialog();
      batchTemplateRjModal.hidden = false;
      if (!window.matchMedia("(max-width: 780px)").matches) batchTemplateRjInput.focus();
    }

    function closeBatchTemplateRjDialog() {
      batchTemplateRjModal.hidden = true;
    }

    async function applyBatchTemplateRjs(importInfo) {
      const plan = batchTemplateRjPlan();
      if (!plan.parsed.rjs.length || plan.errors.length) {
        renderBatchTemplateRjDialog();
        return;
      }
      plan.assignments.forEach((assignment) => {
        const input = plan.context.cells[assignment.index].querySelector(plan.context.selector);
        input.value = assignment.rj;
        plan.context.fit(input);
      });
      saveState();
      closeBatchTemplateRjDialog();
      trackFixedUsageEvent("feature-template-batch-rj-fill-" + plan.context.template + "-success");
      if (!importInfo) return;
      if (plan.context.template === "quick") await importAllQuickCovers();
      else await importAllGrid9Covers();
    }

    async function importAllGrid9Covers() {
      const mode = await chooseBatchImportMode(grid9CellEditors.some((cell) => grid9HasCover(Number(cell.dataset.grid9Index))));
      if (!mode) return;
      const jobs = [];
      let emptyCount = 0;
      let skipCount = 0;
      grid9CellEditors.forEach((cell, index) => {
        const rj = normalizeWorkno(cell.querySelector(".grid9-cell-rj-input").value);
        if (!rj) {
          emptyCount += 1;
          return;
        }
        if (mode === "fill" && grid9HasCover(index)) {
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
            const pngDataUrl = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(coverUrl), true, rebuildableRemoteCoverOptions(coverUrl, 480, true, job.rj));
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
      if (imported > 0) trackFixedUsageEvent("feature-rj-import-success");
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
      return templateExportFileName("grid9");
    }

    const grid9ExportCssPromises = new Map();
    const grid9ExportFontDataUrlPromises = new Map();

    function collectGrid9ExportCss() {
      const blocks = [];
      Array.from(document.styleSheets).forEach((sheet) => {
        let rules;
        try {
          rules = sheet.cssRules;
        } catch (error) {
          throw new Error("Grid9 export cannot read stylesheet: " + (sheet.href || "inline"));
        }
        Array.from(rules || []).forEach((rule) => {
          if (rule.type === CSSRule.FONT_FACE_RULE) return;
          blocks.push(rule.cssText);
        });
      });
      const cssText = blocks.join("\n");
      if (!cssText.includes(".grid9-card")) throw new Error("Grid9 export stylesheet is missing");
      return cssText;
    }

    async function grid9ExportFontDataUrl(fontId) {
      const normalizedFontId = normalizeTemplateFontId(fontId);
      if (!grid9ExportFontDataUrlPromises.has(normalizedFontId)) {
        grid9ExportFontDataUrlPromises.set(normalizedFontId, (async () => {
          const fontUrl = new URL(TEMPLATE_FONTS[normalizedFontId].url, document.baseURI);
          const response = await fetch(fontUrl.href, { credentials: "same-origin" });
          if (!response.ok) throw new Error("Grid9 export font HTTP " + response.status);
          return blobToDataUrl(await response.blob());
        })());
      }
      return grid9ExportFontDataUrlPromises.get(normalizedFontId);
    }

    async function grid9ExportCss(fontId = templateFontId("grid9")) {
      const normalizedFontId = normalizeTemplateFontId(fontId);
      if (!grid9ExportCssPromises.has(normalizedFontId)) {
        grid9ExportCssPromises.set(normalizedFontId, (async () => {
          const cssText = collectGrid9ExportCss();
          const config = TEMPLATE_FONTS[normalizedFontId];
          const fontDataUrl = await grid9ExportFontDataUrl(normalizedFontId);
          const defaultFontDataUrl = normalizedFontId === DEFAULT_TEMPLATE_FONT_ID
            ? ""
            : await grid9ExportFontDataUrl(DEFAULT_TEMPLATE_FONT_ID);
          return cssText + "\n" +
            '@font-face{font-family:"' + config.family + '";src:url("' + fontDataUrl + '") format("' + config.format + '");font-weight:' + config.weight + ';font-style:normal;font-display:block;}' +
            (defaultFontDataUrl ? '@font-face{font-family:"' + TEMPLATE_FONTS.default.family + '";src:url("' + defaultFontDataUrl + '") format("woff2");font-weight:' + TEMPLATE_FONTS.default.weight + ';font-style:normal;font-display:block;}' : "") +
            '.grid9-export-host,.grid9-export-host *{font-family:' + templateFontStack(normalizedFontId) + ';}';
        })());
      }
      return grid9ExportCssPromises.get(normalizedFontId);
    }

    function replaceGrid9ExportControl(sourceRoot, cloneRoot, selector, exportClass) {
      const sourceNodes = Array.from(sourceRoot.querySelectorAll(selector));
      const cloneNodes = Array.from(cloneRoot.querySelectorAll(selector));
      cloneNodes.forEach((cloneNode, index) => {
        const sourceNode = sourceNodes[index];
        const replacement = document.createElement("div");
        const value = sourceNode && "value" in sourceNode ? String(sourceNode.value || "") : "";
        replacement.className = cloneNode.className + " " + exportClass;
        replacement.style.cssText = cloneNode.style.cssText;
        replacement.textContent = value;
        if (!value) replacement.classList.add("is-empty");
        cloneNode.replaceWith(replacement);
      });
    }

    async function localizeGrid9SnapshotImages(sourceRoot, cloneRoot) {
      const sourceImages = Array.from(sourceRoot.querySelectorAll("img"));
      const cloneImages = Array.from(cloneRoot.querySelectorAll("img"));
      const tasks = cloneImages.map(async (cloneImage, index) => {
        const sourceImage = sourceImages[index];
        const src = sourceImage ? sourceImage.getAttribute("src") : cloneImage.getAttribute("src");
        if (!src) {
          cloneImage.removeAttribute("src");
          return;
        }
        const localSrc = await localizeImageToPngDataUrl(src);
        cloneImage.setAttribute("src", localSrc);
        await loadImage(localSrc);
      });
      await Promise.all(tasks);
    }

    async function createGrid9ExportSnapshot() {
      const host = document.createElement("div");
      host.className = "grid9-export-host";
      host.setAttribute("aria-hidden", "true");
      host.style.cssText = "position:fixed;left:-20000px;top:0;width:1080px;height:1440px;overflow:hidden;pointer-events:none;z-index:-1;";

      const clone = grid9Card.cloneNode(true);
      clone.removeAttribute("hidden");
      clone.classList.add("is-exporting");
      clone.style.setProperty("width", "1080px");
      clone.style.setProperty("height", "1440px");
      clone.style.setProperty("transform", "none", "important");
      clone.style.setProperty("transition", "none", "important");
      clone.querySelectorAll("[data-editor-only]").forEach((node) => node.remove());
      clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
      replaceGrid9ExportControl(grid9Card, clone, ".grid9-tag-input", "grid9-export-static-tag");
      replaceGrid9ExportControl(grid9Card, clone, ".grid9-cell-rj-input", "grid9-export-static-rj");
      replaceGrid9ExportControl(grid9Card, clone, ".grid9-review-input", "grid9-export-static-review");
      await localizeGrid9SnapshotImages(grid9Card, clone);

      host.appendChild(clone);
      document.body.appendChild(host);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      return { host, clone };
    }

    async function grid9SnapshotCanvas(snapshot) {
      const svgNamespace = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNamespace, "svg");
      svg.setAttribute("xmlns", svgNamespace);
      svg.setAttribute("width", "1080");
      svg.setAttribute("height", "1440");
      svg.setAttribute("viewBox", "0 0 1080 1440");

      const foreignObject = document.createElementNS(svgNamespace, "foreignObject");
      foreignObject.setAttribute("x", "0");
      foreignObject.setAttribute("y", "0");
      foreignObject.setAttribute("width", "1080");
      foreignObject.setAttribute("height", "1440");

      const wrapper = document.createElement("div");
      wrapper.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
      wrapper.className = "grid9-export-host";
      wrapper.style.cssText = "width:1080px;height:1440px;margin:0;padding:0;overflow:hidden;";
      const rootStyle = getComputedStyle(document.documentElement);
      ["--ink", "--muted", "--rose", "--rose-deep", "--cream", "--mint", "--gold", "--shadow"].forEach((name) => {
        const value = rootStyle.getPropertyValue(name);
        if (value) wrapper.style.setProperty(name, value.trim());
      });
      const style = document.createElement("style");
      style.textContent = await grid9ExportCss(templateFontId("grid9"));
      wrapper.append(style, snapshot.cloneNode(true));
      foreignObject.appendChild(wrapper);
      svg.appendChild(foreignObject);

      const svgText = new XMLSerializer().serializeToString(svg);
      const svgUrl = await blobToDataUrl(new Blob([svgText], { type: "image/svg+xml;charset=utf-8" }));
      const image = await loadImage(svgUrl);
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Grid9 export canvas context is unavailable");
      ctx.drawImage(image, 0, 0, 1080, 1440);
      if (ctx.getImageData(540, 720, 1, 1).data[3] === 0) {
        throw new Error("Grid9 DOM export rendered a blank image");
      }
      return canvas;
    }

    async function createGrid9DomExportBlob() {
      if (!(await ensureCanvasFontReady())) return null;
      await waitGrid9ImagesReady();
      const snapshot = await createGrid9ExportSnapshot();
      let canvas = null;
      try {
        canvas = await grid9SnapshotCanvas(snapshot.clone);
        const blob = await canvasToBlob(canvas);
        if (!blob || blob.size < 1024) throw new Error("Grid9 DOM export returned an empty image");
        return blob;
      } finally {
        releaseCanvas(canvas);
        snapshot.host.remove();
      }
    }

    async function downloadGrid9CardLegacy() {
      if (!(await ensureCanvasFontReady())) return;
      try {
        await waitGrid9ImagesReady();
      } catch (imageError) {
        console.warn("Grid9 export image wait failed", imageError);
      }
      const exportThemeId = currentThemeId;
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      let blob;
      try {
        drawGrid9Card(canvas.getContext("2d"));
        blob = await canvasToBlob(canvas);
      } finally {
        releaseCanvas(canvas);
      }
      handleExportBlob(blob, grid9ExportFileName(), "grid9", exportThemeId);
    }

    async function downloadGrid9Card() {
      await downloadGrid9CardLegacy();
    }

    function grid9MeasureLines(ctx, text, maxWidth) {
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      let lines = 0;
      for (const sourceLine of sourceLines) {
        let line = "";
        for (const char of wrappingCharacters(sourceLine)) {
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

    function grid9WrapLines(ctx, text, maxWidth, maxLines = 2) {
      const lines = [];
      const sourceLines = String(text || "").replace(/\r\n/g, "\n").split("\n");
      for (const sourceLine of sourceLines) {
        if (lines.length >= maxLines) break;
        let line = "";
        for (const char of wrappingCharacters(sourceLine)) {
          const test = line + char;
          if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = char;
          } else {
            line = test;
          }
          if (lines.length >= maxLines) break;
        }
        if (line && lines.length < maxLines) lines.push(line);
      }
      return lines;
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
        for (const char of wrappingCharacters(sourceLine)) {
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
      const width = Math.min(900, grid9MaxLineWidth(ctx, text, 900)) + 44;
      const height = 18;
      const top = headerBottom - 11;
      ctx.save();
      ctx.translate(540, top + height / 2);
      ctx.rotate(-0.6 * Math.PI / 180);
      const grad = ctx.createLinearGradient(-width / 2, 0, width / 2, 0);
      grad.addColorStop(0, themeAlpha("accent", .24));
      grad.addColorStop(0.52, themeAlpha("accent", .13));
      grad.addColorStop(1, themeAlpha("accentDeep", .14));
      ctx.fillStyle = grad;
      roundRect(ctx, -width / 2, -height / 2, width, height, height / 2);
      ctx.fill();
      ctx.restore();
    }

    function drawGrid9TitleChip(ctx, text, x, y, maxWidth, lineHeight, lineCount = 1) {
      const width = Math.min(930, grid9MaxLineWidth(ctx, text, maxWidth) + 72);
      const height = lineCount * lineHeight + 18;
      const left = x - width / 2;
      const top = y - 58;
      ctx.save();
      ctx.fillStyle = themeAlpha("mint", .18);
      roundRect(ctx, left + width * .08, top + height - 4, width * .84, 11, 6);
      ctx.fill();
      const grad = ctx.createLinearGradient(left, top, left + width, top);
      grad.addColorStop(0, themeAlpha("accent", .24));
      grad.addColorStop(1, themeAlpha("accentDeep", .2));
      ctx.fillStyle = grad;
      ctx.shadowColor = themeAlpha("accentDeep", .4);
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 12;
      ctx.lineWidth = 3;
      ctx.strokeStyle = themeAlpha("accent", .48);
      roundRect(ctx, left - 2, top - 2, width + 4, height + 4, height / 2 + 2);
      ctx.stroke();
      roundRect(ctx, left, top, width, height, height / 2);
      ctx.fill();
      ctx.shadowColor = "transparent";
      ctx.lineWidth = 3;
      ctx.strokeStyle = "rgba(255,255,255,.96)";
      ctx.stroke();
      ctx.restore();
    }

    function drawGrid9TitleSplit(ctx, text, x, y, maxWidth, lineHeight, lineCount = 1) {
      const theme = currentCardTheme();
      ctx.save();
      ctx.textAlign = "center";
      ctx.lineJoin = "round";
      ctx.font = canvasFont("950", 58);
      const lines = grid9WrapLines(ctx, text, maxWidth, lineCount);
      const titleLayer = document.createElement("canvas");
      titleLayer.width = ctx.canvas.width;
      titleLayer.height = ctx.canvas.height;
      const titleCtx = titleLayer.getContext("2d");
      titleCtx.textAlign = "center";
      titleCtx.lineJoin = "round";
      titleCtx.font = canvasFont("950", 58);
      lines.forEach((line, index) => {
        const tx = x + maxWidth / 2;
        const ty = y + 2 + index * lineHeight;
        const grad = titleCtx.createLinearGradient(0, ty - 58, 0, ty + 8);
        grad.addColorStop(0, theme.ink);
        grad.addColorStop(.48, theme.ink);
        grad.addColorStop(.48, theme.accent);
        grad.addColorStop(1, theme.accent);
        titleCtx.fillStyle = grad;
        titleCtx.fillText(line, tx, ty);
        titleCtx.globalCompositeOperation = "source-atop";
        titleCtx.lineWidth = 2;
        titleCtx.strokeStyle = themeTint("accent", .78, .96);
        titleCtx.strokeText(line, tx, ty);
        titleCtx.globalCompositeOperation = "source-over";
      });
      ctx.lineWidth = .5;
      ctx.strokeStyle = themeAlpha("accentDeep", .82);
      ctx.shadowColor = themeAlpha("accentDeep", .08);
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 8;
      lines.forEach((line, index) => {
        ctx.strokeText(line, x + maxWidth / 2, y + 2 + index * lineHeight);
      });
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.drawImage(titleLayer, 0, 0);
      const titleWrapWidth = Math.min(maxWidth + 48, grid9MaxLineWidth(ctx, text, maxWidth) + 48);
      const lineWidth = titleWrapWidth * .88;
      ctx.strokeStyle = themeAlpha("accent", .58);
      ctx.lineWidth = .25;
      const topLineY = y - 54;
      const bottomLineY = y + 22;
      [topLineY, bottomLineY].forEach((lineY) => {
        ctx.beginPath();
        ctx.moveTo(x + maxWidth / 2 - lineWidth / 2, lineY);
        ctx.lineTo(x + maxWidth / 2 + lineWidth / 2, lineY);
        ctx.stroke();
      });
      ctx.fillStyle = themeAlpha("accent", .76);
      ctx.font = canvasFont("900", 16);
      ctx.fillText(String.fromCharCode(0x2726), x + maxWidth / 2, y - 50);
      ctx.fillText(String.fromCharCode(0x2726), x + maxWidth / 2, y + 29);
      ctx.restore();
    }

    function drawGrid9TitleFrost(ctx, text, x, y, maxWidth, lineHeight, lineCount = 1) {
      const theme = currentCardTheme();
      const lines = grid9WrapLines(ctx, text, maxWidth, lineCount);
      ctx.save();
      ctx.textAlign = "center";
      ctx.font = canvasFont("950", 58);
      ctx.lineJoin = "round";
      const titleWrapWidth = Math.min(maxWidth + 40, grid9MaxLineWidth(ctx, text, maxWidth) + 40);
      const waveWidth = Math.min(titleWrapWidth * .9, 760);
      const waveScaleX = waveWidth / 760;
      const waveLeft = x + maxWidth / 2 - waveWidth / 2;
      const waveTop = y - 8;
      const waveX = (value) => waveLeft + value * waveScaleX;
      const waveY = (value) => waveTop + value;

      ctx.lineCap = "round";
      ctx.strokeStyle = themeAlpha("accent", .42);
      ctx.lineWidth = 16;
      ctx.beginPath();
      ctx.moveTo(waveX(8), waveY(22));
      ctx.bezierCurveTo(waveX(72), waveY(4), waveX(142), waveY(31), waveX(212), waveY(18));
      ctx.bezierCurveTo(waveX(282), waveY(5), waveX(354), waveY(2), waveX(425), waveY(18));
      ctx.bezierCurveTo(waveX(496), waveY(34), waveX(568), waveY(31), waveX(648), waveY(16));
      ctx.bezierCurveTo(waveX(728), waveY(1), waveX(726), waveY(10), waveX(752), waveY(18));
      ctx.stroke();

      ctx.strokeStyle = themeAlpha("accentDeep", .16);
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(waveX(40), waveY(19));
      ctx.bezierCurveTo(waveX(97), waveY(10), waveX(156), waveY(28), waveX(220), waveY(18));
      ctx.bezierCurveTo(waveX(284), waveY(8), waveX(362), waveY(8), waveX(437), waveY(20));
      ctx.bezierCurveTo(waveX(512), waveY(32), waveX(568), waveY(28), waveX(649), waveY(18));
      ctx.bezierCurveTo(waveX(730), waveY(8), waveX(723), waveY(11), waveX(748), waveY(16));
      ctx.stroke();

      lines.forEach((line, index) => {
        const tx = x + maxWidth / 2;
        const ty = y + index * lineHeight;
        ctx.lineWidth = 10;
        ctx.strokeStyle = "rgba(255,250,252,.98)";
        ctx.shadowColor = themeAlpha("accentDeep", .08);
        ctx.shadowBlur = 16;
        ctx.shadowOffsetY = 10;
        ctx.strokeText(line, tx, ty);
        ctx.shadowColor = "transparent";
        ctx.lineWidth = 5;
        ctx.strokeStyle = themeAlpha("accent", .5);
        ctx.strokeText(line, tx + 2, ty + 3);
        ctx.fillStyle = theme.ink;
        ctx.fillText(line, tx, ty);
      });
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
      const titleBaselineY = 129;
      const titleLineHeight = 67;
      const titleLineCount = 1;
      if (state.title) {
        ctx.fillStyle = theme.ink;
        const titleFontSize = ["split", "frost"].includes(state.titleStyle) ? 58 : 64;
        ctx.font = canvasFont('950', titleFontSize);
        const markerAnchorY = 136;
        if (state.titleStyle === "offset") {
          drawCenteredWrappedOffsetText(ctx, state.title, 90, titleBaselineY, 900, titleLineHeight, 1);
        } else if (state.titleStyle === "chip") {
          ctx.font = canvasFont('950', 52);
          drawGrid9TitleChip(ctx, state.title, 540, titleBaselineY, 900, 60, titleLineCount);
          drawCenteredWrappedText(ctx, state.title, 90, titleBaselineY, 900, 60, titleLineCount);
        } else if (state.titleStyle === "split") {
          drawGrid9TitleSplit(ctx, state.title, 90, titleBaselineY - 3, 900, 66, titleLineCount);
        } else if (state.titleStyle === "frost") {
          drawGrid9TitleFrost(ctx, state.title, 90, titleBaselineY, 900, 66, titleLineCount);
        } else {
          drawGrid9TitleMarker(ctx, state.title, markerAnchorY);
          drawCenteredWrappedStrokedText(ctx, state.title, 90, titleBaselineY, 900, titleLineHeight, 1);
        }
      }
      ctx.restore();

      const gridLeft = 58;
      const gridTop = (state.titleStyle === "split" ? 168 : 176) + (titleLineCount - 1) * titleLineHeight;
      const gapX = 18;
      const gapY = 14;
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
      const gap = 20;
      const tagRowHeight = 48;
      const reviewRowHeight = 120;
      const coverSlotY = y + tagRowHeight + gap;
      const coverSlotHeight = h - tagRowHeight - reviewRowHeight - gap * 2;
      const coverBoxScale = 0.9;
      const targetCoverWidth = w * coverBoxScale;
      const targetCoverHeight = targetCoverWidth * 3 / 4;
      const coverWidth = targetCoverWidth;
      const coverHeight = targetCoverHeight;
      const coverX = x + (w - coverWidth) / 2;
      const coverY = coverSlotY + (coverSlotHeight - coverHeight) / 2 + 3;
      const radius = 16;

      const tagText = cell.tag || "";
      if (tagText) {
        const tagHeight = 48;
        const tagWidth = coverWidth;
        const tagX = coverX;
        const ty = y + (tagRowHeight - tagHeight) / 2;
        const grad = ctx.createLinearGradient(tagX, ty, tagX + tagWidth, ty + tagHeight);
        grad.addColorStop(0, theme.accent);
        grad.addColorStop(1, theme.accentDeep);
        ctx.save();
        roundRect(ctx, tagX, ty, tagWidth, tagHeight, tagHeight / 2);
        ctx.fillStyle = grad;
        ctx.shadowColor = themeAlpha("accentDeep", .15);
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 5;
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.font = canvasFont('900', 26);
        const tagMetrics = ctx.measureText(tagText);
        const tagAscent = tagMetrics.actualBoundingBoxAscent || 26 * .8;
        const tagDescent = tagMetrics.actualBoundingBoxDescent || 26 * .2;
        const tagBaselineY = ty + (tagHeight - tagAscent - tagDescent) / 2 + tagAscent;
        ctx.fillText(tagText, tagX + tagWidth / 2, tagBaselineY);
        ctx.textAlign = "left";
      }

      if (cell.cover) {
        ctx.save();
        roundRect(ctx, coverX, coverY, coverWidth, coverHeight, radius);
        ctx.fillStyle = theme.coverBg;
        ctx.shadowColor = "rgba(104,73,87,.13)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 8;
        ctx.fill();
        ctx.restore();
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
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, radius, "rgba(255,255,255,.96)", 3);
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
        const badgeWidth = MULTI_TEMPLATE_RJ_FIELD_WIDTH;
        const badgeHeight = 24;
        const bx = coverX + coverWidth - badgeWidth - 9;
        const by = coverY + coverHeight - badgeHeight - 9;
        fillRound(ctx, bx, by, badgeWidth, badgeHeight, 7, "rgba(255,255,255,.82)");
        ctx.fillStyle = theme.accentDeep;
        ctx.textAlign = "left";
        ctx.fillText(rjText, bx + 12, by + badgeHeight / 2 + 4);
        ctx.textAlign = "left";
      }

      const reviewTop = coverSlotY + coverSlotHeight + gap;
      fillRound(ctx, x, reviewTop + 8, 3, reviewRowHeight - 8, 1.5, themeAlpha("accent", .5));
      ctx.save();
      ctx.fillStyle = themeAlpha("accentDeep", .5);
      ctx.font = canvasFont('900', 18);
      ctx.textAlign = "left";
      ctx.fillText(String.fromCharCode(0x275d), x + 8, reviewTop + 21);
      ctx.restore();
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('700', 24);
      drawWrappedText(ctx, cell.review || "", x + 19, reviewTop + 24, GRID9_REVIEW_LINE_WIDTH, 24 * 1.22, GRID9_REVIEW_MAX_LINES);
      ctx.strokeStyle = themeAlpha("accent", .35);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x + 19, reviewTop + reviewRowHeight - .75);
      ctx.lineTo(x + w, reviewTop + reviewRowHeight - .75);
      ctx.stroke();
      ctx.fillStyle = themeAlpha("accent", .55);
      ctx.font = canvasFont('800', 12);
      ctx.textAlign = "right";
      ctx.fillText(String.fromCharCode(0x2726), x + w + 8, reviewTop + reviewRowHeight - 4);
      ctx.textAlign = "left";
    }

    grid9ImportAllButton.addEventListener("click", importAllGrid9Covers);
    grid9BatchRjButton.addEventListener("click", () => openBatchTemplateRjDialog("grid9"));
    batchTemplateRjInput.addEventListener("input", renderBatchTemplateRjDialog);
    batchTemplateRjModeInputs.forEach((input) => input.addEventListener("change", renderBatchTemplateRjDialog));
    batchTemplateRjCancel.addEventListener("click", closeBatchTemplateRjDialog);
    batchTemplateRjFillOnly.addEventListener("click", () => void applyBatchTemplateRjs(false));
    batchTemplateRjFillImport.addEventListener("click", () => void applyBatchTemplateRjs(true));
    batchTemplateRjModal.addEventListener("click", (event) => {
      if (event.target === batchTemplateRjModal) closeBatchTemplateRjDialog();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !batchTemplateRjModal.hidden) closeBatchTemplateRjDialog();
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
        else if (action === "edit") void openImageEditorSafely(() => openGrid9ImageEditor(index));
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
          const pngDataUrl = await grid9CoverStorageDataUrl(await rasterizeImageToPngDataUrl(reader.result), true);
          setGrid9Cover(index, pngDataUrl);
        } catch (error) {
          console.error("Grid9 cover normalize failed", error);
          showAppAlert(UI_GRID9_UPLOAD_FAILED);
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
    const UI_QUICK_WATERMARK = String.fromCharCode(0x4e59, 0x97f3, 0x8bb0, 0x5f55) + " \u00b7 QUICK VOICE NOTES";
    const QUICK_CV_MAX_WIDTH = 12;
    const QUICK_REVIEW_MAX_WIDTH = 44;
    const QUICK_REVIEW_LINE_WIDTH = 22 * 11;
    const QUICK_REVIEW_MAX_LINES = 4;
    const quickFieldComposing = new WeakSet();

    function limitedQuickReviewText(value, input = null) {
      const limited = limitedByFullWidth(value, QUICK_REVIEW_MAX_WIDTH);
      return input
        ? limitedByMeasuredLines(limited, input, QUICK_REVIEW_LINE_WIDTH, QUICK_REVIEW_MAX_LINES)
        : limited;
    }

    function limitedQuickCvText(value) {
      return limitedByFullWidth(value, QUICK_CV_MAX_WIDTH, true);
    }

    function clampTextInput(input, limiter) {
      const limited = limiter(input.value);
      if (limited === input.value) return;
      input.value = limited;
      input.setSelectionRange(limited.length, limited.length);
    }

    function bindTextInputLimit(input, limiter) {
      input.addEventListener("compositionstart", () => {
        quickFieldComposing.add(input);
      });
      input.addEventListener("compositionend", () => {
        quickFieldComposing.delete(input);
        clampTextInput(input, limiter);
        saveState();
      });
      input.addEventListener("input", () => {
        if (!quickFieldComposing.has(input)) clampTextInput(input, limiter);
      });
    }

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
        cvInput.placeholder = UI_QUICK_CV_PLACEHOLDER;
        bindTextInputLimit(cvInput, limitedQuickCvText);
        cvRow.append(cvLabel, cvInput);
        const divider = document.createElement("div");
        divider.className = "quick-cv-divider";
        const reviewWrap = document.createElement("div");
        reviewWrap.className = "quick-review-wrap";
        const reviewArea = document.createElement("textarea");
        reviewArea.className = "quick-review";
        reviewArea.rows = 5;
        reviewArea.placeholder = UI_QUICK_REVIEW_PLACEHOLDER;
        bindTextInputLimit(reviewArea, (value) => limitedQuickReviewText(value, reviewArea));
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
              const pngDataUrl = await grid9CoverStorageDataUrl(await rasterizeImageToPngDataUrl(reader.result), true);
              setQuickCover(index, pngDataUrl);
            } catch (error) {
              console.error("Quick cover normalize failed", error);
              showAppAlert(UI_QUICK_UPLOAD_FAILED);
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
          else if (action === "edit") void openImageEditorSafely(() => openQuickImageEditor(index));
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
        review: cell.querySelector(".quick-review").value
      };
    }

    function writeQuickCell(index, data) {
      const cell = quickCellEditors[index];
      if (!cell) return;
      const next = data || {};
      applyQuickCover(index, next.cover || "");
      cell.querySelector(".quick-cover img").style.objectFit = next.coverFit === "contain" ? "contain" : "cover";
      cell.querySelector(".quick-cv").value = limitedQuickCvText(next.cv);
      const reviewInput = cell.querySelector(".quick-review");
      reviewInput.value = limitedQuickReviewText(next.review, reviewInput);
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

    function fitQuickRjWidth(input) {
      if (!input) return;
      input.style.width = MULTI_TEMPLATE_RJ_FIELD_WIDTH + "px";
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
      const mode = await chooseBatchImportMode(quickCellEditors.some((cell) => quickHasCover(Number(cell.dataset.quickIndex)) || cell.querySelector(".quick-cv").value.trim()));
      if (!mode) return;
      const jobs = [];
      let emptyCount = 0;
      let skipCount = 0;
      quickCellEditors.forEach((cell, index) => {
        const rj = normalizeWorkno(cell.querySelector(".quick-rj").value);
        if (!rj) {
          emptyCount += 1;
          return;
        }
        const hasCover = quickHasCover(index);
        const hasCv = Boolean(cell.querySelector(".quick-cv").value.trim());
        if (mode === "fill" && hasCover && hasCv) {
          skipCount += 1;
          return;
        }
        jobs.push({
          index,
          rj,
          importCover: mode === "overwrite" || !hasCover,
          importCv: mode === "overwrite" || !hasCv
        });
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
      const fieldIssues = [];
      let cursor = 0;
      const concurrency = 2;
      const worker = async () => {
        while (cursor < jobs.length) {
          const job = jobs[cursor];
          cursor += 1;
          try {
            const product = parseDlsiteProduct(await fetchProductJson(job.rj));
            if (!product) throw new Error("empty product");
            let importedField = false;
            const missingFields = [];
            const rjInput = quickCellEditors[job.index].querySelector(".quick-rj");
            rjInput.value = job.rj;
            fitQuickRjWidth(rjInput);
            const cvInput = quickCellEditors[job.index].querySelector(".quick-cv");
            if (job.importCv && product.cv) {
              cvInput.value = limitedQuickCvText(product.cv);
              importedField = true;
            } else if (job.importCv) {
              missingFields.push(unavailableImportField("CV"));
            }
            let coverError = null;
            if (job.importCover) {
              if (product.coverUrl) {
                try {
                  const pngDataUrl = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(product.coverUrl), true, rebuildableRemoteCoverOptions(product.coverUrl, 480, true, job.rj));
                  applyQuickCover(job.index, pngDataUrl);
                  importedField = true;
                } catch (error) {
                  coverError = error;
                  missingFields.push(unavailableImportField("BK", UI_IMPORT_IMAGE_FAILED));
                }
              } else {
                coverError = new Error("no cover url");
                missingFields.push(unavailableImportField("BK"));
              }
            }
            if (!importedField) {
              failed += 1;
              failures.push({ rj: job.rj, reason: missingFields.length ? importFieldIssueText(missingFields) : grid9FailureReason(coverError || new Error("empty product")) });
              continue;
            }
            if (missingFields.length) fieldIssues.push({ rj: job.rj, fields: missingFields });
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
      showGrid9ImportResult(imported, failed, skipCount, emptyCount, failures, fieldIssues);
      if (imported > 0) trackFixedUsageEvent("feature-rj-import-success");
    }

    function quickExportFileName() {
      return [
        safeFilePart(firstTemplateRjFilePart("quick")),
        "repo",
        "quick12",
        safeFilePart(currentThemeId, DEFAULT_THEME_ID)
      ].join("_") + ".png";
    }

    async function downloadQuickCard() {
      if (!(await ensureCanvasFontReady())) return;
      try {
        await waitQuickImagesReady();
      } catch (imageError) {
        console.warn("Quick export image wait failed", imageError);
      }
      const exportThemeId = currentThemeId;
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      let blob;
      try {
        drawQuickCard(canvas.getContext("2d"));
        blob = await canvasToBlob(canvas);
      } finally {
        releaseCanvas(canvas);
      }
      handleExportBlob(blob, quickExportFileName(), "quick", exportThemeId);
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

      ctx.save();
      roundRect(ctx, x, y, w, h, radius);
      ctx.fillStyle = "rgba(255,255,255,.9)";
      ctx.shadowColor = "rgba(104,73,87,.085)";
      ctx.shadowBlur = 17;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 7;
      ctx.fill();
      ctx.restore();
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
        ctx.save();
        roundRect(ctx, coverX, coverY, coverWidth, coverHeight, 17);
        ctx.fillStyle = theme.coverBg;
        ctx.shadowColor = "rgba(104,73,87,.13)";
        ctx.shadowBlur = 16;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 8;
        ctx.fill();
        ctx.restore();
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
        strokeRound(ctx, coverX, coverY, coverWidth, coverHeight, 17, "rgba(255,255,255,.98)", 3);
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
        const badgeWidth = MULTI_TEMPLATE_RJ_FIELD_WIDTH;
        const badgeHeight = 24;
        const bx = coverX + coverWidth - badgeWidth - 7;
        const by = coverY + coverHeight - badgeHeight - 7;
        fillRound(ctx, bx, by, badgeWidth, badgeHeight, 8, "rgba(255,255,255,.86)");
        ctx.fillStyle = theme.accentDeep;
        ctx.textAlign = "left";
        ctx.fillText(rjText, bx + 12, by + badgeHeight / 2 + 3.5);
        ctx.textAlign = "left";
      }

      const contentX = x + 15 + coverWidth + 16;
      const contentWidth = w - 15 - coverWidth - 16 - 15;
      const cvBaseline = bodyTop + 21.2;
      ctx.textAlign = "left";
      ctx.fillStyle = theme.accent;
      ctx.font = canvasFont('900', 18);
      ctx.fillText("CV", contentX - 2, cvBaseline + 7);
      const cvLabelWidth = Math.ceil(ctx.measureText("CV").width);
      ctx.fillStyle = theme.ink;
      ctx.font = canvasFont('900', 18);
      ctx.fillText(limitedQuickCvText(cell.cv), contentX - 2 + cvLabelWidth + 8, cvBaseline + 7);

      const dividerY = bodyTop + 37.9;
      ctx.save();
      ctx.strokeStyle = themeAlpha("accent", .33);
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.moveTo(contentX - 2, dividerY + 0.5);
      ctx.lineTo(contentX + contentWidth - 2, dividerY + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      const wrapTop = bodyTop + 30.2;
      const wrapHeight = bodyTop + bodyHeight - wrapTop;
      ctx.save();
      ctx.beginPath();
      ctx.rect(contentX - 2, wrapTop + 14.4, QUICK_REVIEW_LINE_WIDTH, 126);
      ctx.clip();
      ctx.fillStyle = themeAlpha("ink", .9);
      ctx.font = canvasFont('700', 22);
      ctx.textBaseline = "top";
      drawWrappedText(ctx, limitedQuickReviewText(cell.review), contentX - 2, wrapTop + 14.4, QUICK_REVIEW_LINE_WIDTH, 31, QUICK_REVIEW_MAX_LINES);
      ctx.restore();
    }

    quickShowRjButton.addEventListener("click", () => {
      quickShowRj = !quickShowRj;
      updateQuickShowRjButton();
      saveState();
    });
    quickImportAllButton.addEventListener("click", importAllQuickCovers);
    quickBatchRjButton.addEventListener("click", () => openBatchTemplateRjDialog("quick"));
    quickClearRepoButton.addEventListener("click", () => {
      quickCellEditors.forEach((cell) => {
        cell.querySelector(".quick-review").value = "";
      });
      saveState();
    });

    const mobileFocusAreas = Array.from(card.querySelectorAll(".cover-box, .info-panel, .title-panel, .tags-panel, .price-panel, .ratings, .review-panel"));
    mobileFocusAreas.forEach((area) => {
      area.addEventListener("click", (event) => {
        if (isMobileView() && currentTemplate() === "full" && area.classList.contains("review-panel")) {
          event.preventDefault();
          event.stopPropagation();
          if (reviewFocusSessionActive) resumeReviewEditor();
          else openReviewEditor();
          return;
        }
      }, true);
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
    const UI_TRIO_WATERMARK = String.fromCharCode(0x4e59, 0x97f3, 0x8bb0, 0x5f55) + " \u00b7 THREE VOICE NOTES";
    const UI_TRIO_PRICE = String.fromCharCode(0x73b0, 0x4ef7);
    const UI_TRIO_RATING = String.fromCharCode(0x8bc4, 0x5206);
    const UI_TRIO_REPO_LABEL = "REPO";
    const TRIO_CV_MAX_WIDTH = 7;
    const TRIO_REPO_MAX_WIDTH = 152;
    const TRIO_REPO_MAX_LINES = 8;

    function limitedTrioCvText(value) {
      return limitedByFullWidth(value, TRIO_CV_MAX_WIDTH, true);
    }

    function limitedTrioRjText(value) {
      return limitedWorknoText(value);
    }

    function limitedTrioPriceText(value) {
      return String(value || "").replace(/\D/g, "").slice(0, 6);
    }

    function limitedTrioRepoText(value, input = null) {
      const limited = limitedByFullWidth(value, TRIO_REPO_MAX_WIDTH);
      if (!input || !input.getClientRects().length) return limited;
      const styleWidth = window.getComputedStyle(input).width;
      const maxWidth = styleWidth.endsWith("px") ? Number.parseFloat(styleWidth) : input.getBoundingClientRect().width;
      return limitedByMeasuredLines(limited, input, maxWidth, TRIO_REPO_MAX_LINES);
    }

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
        cvInput.placeholder = UI_TRIO_CV_PLACEHOLDER;
        bindTextInputLimit(cvInput, limitedTrioCvText);
        cvField.append(cvLabel, cvInput);
        const rjField = document.createElement("label");
        rjField.className = "trio-inline-field";
        const rjLabel = document.createElement("span");
        rjLabel.className = "trio-rj-label";
        rjLabel.textContent = String.fromCharCode(0x52, 0x4a, 0x53f7);
        const rjInput = document.createElement("input");
        rjInput.className = "trio-rj-input";
        rjInput.type = "text";
        rjInput.placeholder = "RJ00000000";
        rjInput.addEventListener("pointerdown", (event) => event.stopPropagation());
        bindTextInputLimit(rjInput, limitedTrioRjText);
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
        priceInput.placeholder = "0";
        bindTextInputLimit(priceInput, limitedTrioPriceText);
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
        reviewArea.placeholder = UI_TRIO_REPO_PLACEHOLDER;
        bindTextInputLimit(reviewArea, (value) => limitedTrioRepoText(value, reviewArea));
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
              const pngDataUrl = await grid9CoverStorageDataUrl(await rasterizeImageToPngDataUrl(reader.result), true);
              setTrioCover(index, pngDataUrl);
            } catch (error) {
              console.error("Trio cover normalize failed", error);
              showAppAlert(UI_TRIO_UPLOAD_FAILED);
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
          else if (action === "edit") void openImageEditorSafely(() => openTrioImageEditor(index));
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
        repo: cell.querySelector(".trio-repo-input").value
      };
    }

    function writeTrioCell(index, data) {
      const cell = trioCellEditors[index];
      if (!cell) return;
      const next = data || {};
      applyTrioCover(index, next.cover || "");
      cell.querySelector(".trio-cover img").style.objectFit = next.coverFit === "contain" ? "contain" : "cover";
      cell.querySelector(".trio-cv").value = limitedTrioCvText(next.cv);
      cell.querySelector(".trio-rj-input").value = limitedTrioRjText(next.rj);
      cell.querySelector(".trio-price-input").value = limitedTrioPriceText(next.price);
      const rating = Math.max(0, Math.min(5, Math.round((Number(next.rating) || 0) * 2) / 2));
      cell.querySelectorAll(".trio-star").forEach((star, idx) => {
        const starValue = idx + 1;
        star.classList.toggle("half", rating === starValue - 0.5);
        star.classList.toggle("off", rating < starValue - 0.5);
      });
      cell.querySelector(".trio-score").textContent = rating.toFixed(1);
      const repoInput = cell.querySelector(".trio-repo-input");
      repoInput.value = limitedTrioRepoText(next.repo, repoInput);
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
      const mode = await chooseBatchImportMode(trioCellEditors.some((cell) => trioHasCover(Number(cell.dataset.trioIndex)) || cell.querySelector(".trio-cv").value.trim()));
      if (!mode) return;
      const jobs = [];
      let emptyCount = 0;
      let skipCount = 0;
      trioCellEditors.forEach((cell, index) => {
        const rj = normalizeWorkno(cell.querySelector(".trio-rj-input").value);
        if (!rj) {
          emptyCount += 1;
          return;
        }
        const hasCover = trioHasCover(index);
        const hasCv = Boolean(cell.querySelector(".trio-cv").value.trim());
        if (mode === "fill" && hasCover && hasCv) {
          skipCount += 1;
          return;
        }
        jobs.push({
          index,
          rj,
          importCover: mode === "overwrite" || !hasCover,
          importCv: mode === "overwrite" || !hasCv,
          importPrice: mode === "overwrite" || !cell.querySelector(".trio-price-input").value.trim()
        });
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
      const fieldIssues = [];
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
            let importedField = false;
            const missingFields = [];
            const cvInput = cell.querySelector(".trio-cv");
            if (job.importCv && product.cv) {
              cvInput.value = limitedTrioCvText(product.cv);
              importedField = true;
            } else if (job.importCv) {
              missingFields.push(unavailableImportField("CV"));
            }
            if (job.importPrice && product.currentPrice !== "") {
              cell.querySelector(".trio-price-input").value = limitedTrioPriceText(product.currentPrice);
              importedField = true;
            } else if (job.importPrice) {
              missingFields.push(unavailableImportField(String.fromCharCode(0x73b0, 0x4ef7)));
            }
            const rjInput = cell.querySelector(".trio-rj-input");
            rjInput.value = limitedTrioRjText(job.rj);
            let coverError = null;
            if (job.importCover) {
              if (product.coverUrl) {
                try {
                  const pngDataUrl = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(product.coverUrl), true, rebuildableRemoteCoverOptions(product.coverUrl, 480, true, job.rj));
                  applyTrioCover(job.index, pngDataUrl);
                  importedField = true;
                } catch (error) {
                  coverError = error;
                  missingFields.push(unavailableImportField("BK", UI_IMPORT_IMAGE_FAILED));
                }
              } else {
                coverError = new Error("no cover url");
                missingFields.push(unavailableImportField("BK"));
              }
            }
            if (!importedField) {
              failed += 1;
              failures.push({ rj: job.rj, reason: missingFields.length ? importFieldIssueText(missingFields) : grid9FailureReason(coverError || new Error("empty product")) });
              continue;
            }
            if (missingFields.length) fieldIssues.push({ rj: job.rj, fields: missingFields });
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
      showGrid9ImportResult(imported, failed, skipCount, emptyCount, failures, fieldIssues);
      if (imported > 0) trackFixedUsageEvent("feature-rj-import-success");
    }

    function trioEditorGlobals(index) {
      const cell = trioCellEditors[index];
      const src = cell ? (cell.querySelector(".trio-cover img").getAttribute("src") || "") : "";
      return {
        coverOriginalSrc: src || "",
        coverEditedSrc: "",
        coverMosaicMaskSrc: "",
        coverBlurMaskSrc: "",
        coverWhiteFogMaskSrc: "",
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
      return templateExportFileName("trio");
    }

    function trioMeasuredBox(node, cardRect) {
      const rect = node.getBoundingClientRect();
      return {
        x: rect.left - cardRect.left,
        y: rect.top - cardRect.top,
        width: rect.width,
        height: rect.height
      };
    }

    function trioMeasuredText(node, cardRect) {
      const box = trioMeasuredBox(node, cardRect);
      const style = getComputedStyle(node);
      const fontSize = Number.parseFloat(style.fontSize) || 16;
      const parsedLineHeight = Number.parseFloat(style.lineHeight);
      return {
        ...box,
        fontSize,
        fontWeight: style.fontWeight || "400",
        lineHeight: Number.isFinite(parsedLineHeight) ? parsedLineHeight : fontSize * 1.2,
        textAlign: style.textAlign || "left",
        letterSpacing: style.letterSpacing || "normal"
      };
    }

    async function measureTrioExportLayout() {
      const host = document.createElement("div");
      host.setAttribute("aria-hidden", "true");
      host.style.cssText = "position:fixed;left:-20000px;top:0;width:1080px;height:1440px;overflow:hidden;pointer-events:none;z-index:-1;";
      const clone = trioCard.cloneNode(true);
      clone.removeAttribute("hidden");
      clone.style.setProperty("width", "1080px");
      clone.style.setProperty("height", "1440px");
      clone.style.setProperty("transform", "none", "important");
      clone.style.setProperty("transition", "none", "important");
      host.appendChild(clone);
      document.body.appendChild(host);
      try {
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        const cardRect = clone.getBoundingClientRect();
        const cells = Array.from(clone.querySelectorAll(".trio-item")).map((item) => {
          const query = (selector) => item.querySelector(selector);
          return {
            item: trioMeasuredBox(item, cardRect),
            decoTop: trioMeasuredBox(query(".trio-frame-deco.top"), cardRect),
            decoBottom: trioMeasuredBox(query(".trio-frame-deco.bottom"), cardRect),
            cover: trioMeasuredBox(query(".trio-cover"), cardRect),
            cvLabel: trioMeasuredText(query(".trio-field-label"), cardRect),
            cvInput: trioMeasuredText(query(".trio-cv"), cardRect),
            rjLabel: trioMeasuredText(query(".trio-rj-label"), cardRect),
            rjInput: trioMeasuredText(query(".trio-rj-input"), cardRect),
            divider: trioMeasuredBox(query(".trio-top-divider"), cardRect),
            summary: trioMeasuredBox(query(".trio-summary-strip"), cardRect),
            priceLabel: trioMeasuredText(query(".trio-price-block .trio-small-label"), cardRect),
            pricePrefix: trioMeasuredText(query(".trio-price-prefix"), cardRect),
            priceInput: trioMeasuredText(query(".trio-price-input"), cardRect),
            ratingLabel: trioMeasuredText(query(".trio-rating-block .trio-small-label"), cardRect),
            stars: Array.from(item.querySelectorAll(".trio-star")).map((star) => trioMeasuredText(star, cardRect)),
            score: trioMeasuredText(query(".trio-score"), cardRect),
            repo: trioMeasuredBox(query(".trio-repo"), cardRect),
            repoInput: trioMeasuredText(query(".trio-repo-input"), cardRect)
          };
        });
        return {
          cells,
          watermark: trioMeasuredText(clone.querySelector(".trio-watermark"), cardRect)
        };
      } finally {
        host.remove();
      }
    }

    async function downloadTrioCard() {
      if (!(await ensureCanvasFontReady())) return;
      try {
        await waitTrioImagesReady();
      } catch (imageError) {
        console.warn("Trio export image wait failed", imageError);
      }
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1440;
      let measuredLayout = null;
      try {
        measuredLayout = await measureTrioExportLayout();
      } catch (error) {
        console.warn("Trio DOM layout measurement failed, using legacy coordinates", error);
      }
      const exportThemeId = currentThemeId;
      let blob;
      try {
        drawTrioCard(canvas.getContext("2d"), measuredLayout);
        blob = await canvasToBlob(canvas);
      } finally {
        releaseCanvas(canvas);
      }
      handleExportBlob(blob, trioExportFileName(), "trio", exportThemeId);
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
      ctx.lineWidth = 2;
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
      drawTrioDashedLine(ctx, x + 26, cx - 20, y, themeAlpha("accent", .48));
      drawTrioDashedLine(ctx, cx + 20, x + w - 26, y, themeAlpha("mint", .52));
      drawTrioStar(ctx, cx, y, 10, themeAlpha("accent", .52));
    }

    function trioSetMeasuredFont(ctx, metric) {
      ctx.font = canvasFont(metric.fontWeight, metric.fontSize);
      if ("letterSpacing" in ctx) ctx.letterSpacing = metric.letterSpacing === "normal" ? "0px" : metric.letterSpacing;
    }

    function trioMeasuredBaseline(ctx, metric) {
      const sample = ctx.measureText(String.fromCharCode(0x56fd) + "Ag");
      const ascent = sample.fontBoundingBoxAscent || sample.actualBoundingBoxAscent || metric.fontSize * 0.82;
      const descent = sample.fontBoundingBoxDescent || sample.actualBoundingBoxDescent || metric.fontSize * 0.18;
      return metric.y + (metric.height - ascent - descent) / 2 + ascent;
    }

    function drawTrioMeasuredText(ctx, text, metric, color, align = metric.textAlign) {
      ctx.save();
      trioSetMeasuredFont(ctx, metric);
      ctx.fillStyle = color;
      ctx.textBaseline = "alphabetic";
      const normalizedAlign = align === "center" || align === "right" ? align : "left";
      ctx.textAlign = normalizedAlign;
      const x = normalizedAlign === "center" ? metric.x + metric.width / 2 : (normalizedAlign === "right" ? metric.x + metric.width : metric.x);
      ctx.beginPath();
      ctx.rect(metric.x, metric.y, metric.width, metric.height);
      ctx.clip();
      ctx.fillText(String(text || ""), x, trioMeasuredBaseline(ctx, metric));
      ctx.restore();
    }

    function drawTrioMeasuredRepo(ctx, text, metric, color) {
      ctx.save();
      trioSetMeasuredFont(ctx, metric);
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";
      const sample = ctx.measureText(String.fromCharCode(0x56fd) + "Ag");
      const ascent = sample.fontBoundingBoxAscent || sample.actualBoundingBoxAscent || metric.fontSize * 0.82;
      const descent = sample.fontBoundingBoxDescent || sample.actualBoundingBoxDescent || metric.fontSize * 0.18;
      const firstBaseline = metric.y + Math.max(0, (metric.lineHeight - ascent - descent) / 2) + ascent;
      const maxLines = Math.max(1, Math.floor(metric.height / metric.lineHeight));
      ctx.beginPath();
      ctx.rect(metric.x, metric.y, metric.width, metric.height);
      ctx.clip();
      drawWrappedText(ctx, text, metric.x, firstBaseline, metric.width, metric.lineHeight, maxLines);
      ctx.restore();
    }

    function drawTrioCard(ctx, measuredLayout = null) {
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

      if (measuredLayout && measuredLayout.cells.length === 3) {
        measuredLayout.cells.forEach((layout, index) => drawTrioMeasuredCell(ctx, state, index, layout));
      } else {
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
      }

      if (measuredLayout && measuredLayout.watermark) {
        drawTrioMeasuredText(ctx, UI_TRIO_WATERMARK, measuredLayout.watermark, themeAlpha("ink", .09), "left");
      } else {
        ctx.save();
        ctx.fillStyle = themeAlpha("ink", .09);
        ctx.font = canvasFont('800', 12);
        ctx.textAlign = "right";
        ctx.fillText(UI_TRIO_WATERMARK, width - 54, height - 38);
        ctx.restore();
      }
    }

    function drawTrioMeasuredCell(ctx, state, index, layout) {
      const theme = currentCardTheme();
      const cell = state.cells[index] || {};
      const { item, cover } = layout;
      const radius = 26;

      const bgGrad = ctx.createLinearGradient(item.x, item.y, item.x + item.width, item.y + item.height);
      bgGrad.addColorStop(0, "rgba(255,255,255,.62)");
      bgGrad.addColorStop(1, "rgba(255,255,255,.28)");
      fillRound(ctx, item.x, item.y, item.width, item.height, radius, bgGrad);
      const washAccent = ctx.createRadialGradient(item.x + item.width * 0.07, item.y + item.height * 0.1, 0, item.x + item.width * 0.07, item.y + item.height * 0.1, item.height * 0.55);
      washAccent.addColorStop(0, themeAlpha("accent", .07));
      washAccent.addColorStop(1, "rgba(255,255,255,0)");
      fillRound(ctx, item.x, item.y, item.width, item.height, radius, washAccent);
      const washMint = ctx.createRadialGradient(item.x + item.width * 0.93, item.y + item.height * 0.9, 0, item.x + item.width * 0.93, item.y + item.height * 0.9, item.height * 0.5);
      washMint.addColorStop(0, themeAlpha("mint", .07));
      washMint.addColorStop(1, "rgba(255,255,255,0)");
      fillRound(ctx, item.x, item.y, item.width, item.height, radius, washMint);
      strokeRound(ctx, item.x, item.y, item.width, item.height, radius, themeAlpha("line", .6), 1);

      drawTrioFrameDeco(ctx, item.x, layout.decoTop.y + layout.decoTop.height / 2, item.width);
      drawTrioFrameDeco(ctx, item.x, layout.decoBottom.y + layout.decoBottom.height / 2, item.width);

      const coverRadius = 20;
      if (cell.cover) {
        ctx.save();
        roundRect(ctx, cover.x, cover.y, cover.width, cover.height, coverRadius);
        ctx.fillStyle = theme.coverBg;
        ctx.shadowColor = "rgba(104,73,87,.13)";
        ctx.shadowBlur = 22;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 10;
        ctx.fill();
        ctx.restore();
        const imgElement = trioCellEditors[index] ? trioCellEditors[index].querySelector(".trio-cover img") : null;
        if (imgElement && imgElement.complete && imgElement.naturalWidth) {
          ctx.save();
          roundRect(ctx, cover.x, cover.y, cover.width, cover.height, coverRadius);
          ctx.clip();
          const iw = imgElement.naturalWidth;
          const ih = imgElement.naturalHeight;
          const fitMode = cell.coverFit === "contain" ? "contain" : "cover";
          const scale = fitMode === "contain" ? Math.min(cover.width / iw, cover.height / ih) : Math.max(cover.width / iw, cover.height / ih);
          const dw = iw * scale;
          const dh = ih * scale;
          ctx.drawImage(imgElement, cover.x + (cover.width - dw) / 2, cover.y + (cover.height - dh) / 2, dw, dh);
          ctx.restore();
        }
        strokeRound(ctx, cover.x, cover.y, cover.width, cover.height, coverRadius, "rgba(255,255,255,.98)", 3);
        strokeRound(ctx, cover.x, cover.y, cover.width, cover.height, coverRadius, themeAlpha("line", .78), 1);
      } else {
        fillRound(ctx, cover.x, cover.y, cover.width, cover.height, coverRadius, themeAlpha("coverBg", .52));
        strokeRound(ctx, cover.x, cover.y, cover.width, cover.height, coverRadius, themeAlpha("accent", .44), 2, true);
        const placeholderMetric = { ...cover, fontSize: 18, fontWeight: "900", lineHeight: 22, textAlign: "center", letterSpacing: "normal" };
        drawTrioMeasuredText(ctx, UI_TRIO_UPLOAD, placeholderMetric, theme.muted, "center");
      }

      drawTrioMeasuredText(ctx, "CV", layout.cvLabel, theme.accent);
      drawTrioMeasuredText(ctx, limitedTrioCvText(cell.cv), layout.cvInput, theme.ink);
      drawTrioMeasuredText(ctx, limitedTrioRjText(cell.rj), layout.rjInput, theme.ink);

      ctx.save();
      ctx.strokeStyle = themeAlpha("accent", .3);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(layout.divider.x, layout.divider.y + 0.5);
      ctx.lineTo(layout.divider.x + layout.divider.width, layout.divider.y + 0.5);
      ctx.stroke();
      ctx.restore();

      const summaryGrad = ctx.createLinearGradient(layout.summary.x, layout.summary.y, layout.summary.x + layout.summary.width, layout.summary.y);
      summaryGrad.addColorStop(0, themeAlpha("accent", .07));
      summaryGrad.addColorStop(1, themeAlpha("mint", .07));
      fillRound(ctx, layout.summary.x, layout.summary.y, layout.summary.width, layout.summary.height, 14, summaryGrad);
      drawTrioMeasuredText(ctx, UI_TRIO_PRICE, layout.priceLabel, theme.muted);
      drawTrioMeasuredText(ctx, "\u00a5", layout.pricePrefix, theme.accentDeep);
      drawTrioMeasuredText(ctx, limitedTrioPriceText(cell.price), layout.priceInput, theme.accentDeep);
      drawTrioMeasuredText(ctx, UI_TRIO_RATING, layout.ratingLabel, theme.muted);

      const rating = Math.max(0, Math.min(5, Number(cell.rating) || 0));
      layout.stars.forEach((starMetric, starIndex) => {
        drawTrioMeasuredText(ctx, STAR_CHAR, starMetric, themeAlpha("accent", .26), "center");
        const starValue = starIndex + 1;
        if (rating < starValue - 0.5) return;
        ctx.save();
        if (rating < starValue) {
          ctx.beginPath();
          ctx.rect(starMetric.x, starMetric.y, starMetric.width / 2, starMetric.height);
          ctx.clip();
        }
        drawTrioMeasuredText(ctx, STAR_CHAR, starMetric, theme.accent, "center");
        ctx.restore();
      });
      drawTrioMeasuredText(ctx, rating.toFixed(1), layout.score, theme.accentDeep);

      ctx.fillStyle = themeAlpha("accent", .15);
      ctx.fillRect(layout.repo.x, layout.repo.y, 3, layout.repo.height);
      const heartMetric = {
        x: layout.repo.x + 6,
        y: layout.repo.y,
        width: 18,
        height: 20,
        fontSize: 15,
        fontWeight: "900",
        lineHeight: 18,
        textAlign: "left",
        letterSpacing: "normal"
      };
      drawTrioMeasuredText(ctx, "\u2661", heartMetric, themeAlpha("accentDeep", .5));
      drawTrioMeasuredRepo(ctx, limitedTrioRepoText(cell.repo), layout.repoInput, theme.ink);
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

      drawTrioFrameDeco(ctx, x, y + 23, w);
      drawTrioFrameDeco(ctx, x, y + h - 23, w);

      const coverX = x + 20;
      const coverW = 420;
      const coverH = 315;
      const coverY = y + (h - coverH) / 2;
      const coverRadius = 20;

      if (cell.cover) {
        ctx.save();
        roundRect(ctx, coverX, coverY, coverW, coverH, coverRadius);
        ctx.fillStyle = theme.coverBg;
        ctx.shadowColor = "rgba(104,73,87,.13)";
        ctx.shadowBlur = 22;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 10;
        ctx.fill();
        ctx.restore();
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
        strokeRound(ctx, coverX, coverY, coverW, coverH, coverRadius, "rgba(255,255,255,.98)", 3);
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
      const infoTop = coverY - 10;
      const row1Baseline = infoTop + 22;
      const dividerY = infoTop + 16;
      const summaryTop = dividerY + 39;
      const summaryH = 46;
      const repoTop = infoTop + 140;
      const repoBottom = repoTop + 232;

      ctx.textAlign = "left";
      ctx.font = canvasFont('900', 24);
      const cvX = infoX + 22;
      const cvLabelW = ctx.measureText("CV").width;
      ctx.fillStyle = theme.accent;
      ctx.fillText("CV", cvX, row1Baseline);
      ctx.fillStyle = theme.ink;
      ctx.fillText(limitedTrioCvText(cell.cv), cvX + cvLabelW + 9, row1Baseline);

      const rjText = limitedTrioRjText(cell.rj);
      ctx.font = canvasFont('900', 22);
      ctx.textAlign = "right";
      ctx.fillStyle = theme.ink;
      ctx.fillText(rjText, infoX + infoW - 30, row1Baseline);
      ctx.textAlign = "left";

      ctx.save();
      ctx.strokeStyle = themeAlpha("accent", .3);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(infoX, dividerY + 0.5);
      ctx.lineTo(infoX + infoW - 20, dividerY + 0.5);
      ctx.stroke();
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
      ctx.fillText(limitedTrioPriceText(cell.price), summaryX + summaryPadX + priceLabelW + 9 + yenW + 5, summaryBaseline + 1);

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
      ctx.font = canvasFont('600', 22);
      drawWrappedText(ctx, limitedTrioRepoText(cell.repo), repoTextX, repoTop + 18, infoW - 22 - 20, 29, TRIO_REPO_MAX_LINES);
    }

    trioImportAllButton?.addEventListener("click", importAllTrioCells);
    trioClearRepoButton?.addEventListener("click", () => {
      trioCellEditors.forEach((cell) => {
        cell.querySelector(".trio-repo-input").value = "";
      });
      saveState();
    });

    reviewEditArea.addEventListener("input", () => {
      if (!fullReviewComposing.has(reviewEditArea)) syncReviewEditorToCard();
    });
    reviewEditArea.addEventListener("compositionend", syncReviewEditorToCard);
    reviewEditPreview.addEventListener("click", openReviewFullPreview);
    reviewEditConfirm.addEventListener("click", finishReviewEditor);
    reviewPreviewContinue.addEventListener("click", resumeReviewEditor);
    reviewPreviewDone.addEventListener("click", finishReviewEditor);
    imageToolMosaic.addEventListener("click", () => setEditorTool("mosaic"));
    imageToolBlur.addEventListener("click", () => setEditorTool("blur"));
    imageToolWhiteFog.addEventListener("click", () => setEditorTool("white-fog"));
    imageToolErase.addEventListener("click", () => setEditorTool("erase"));
    imageToolSelect.addEventListener("click", () => setEditorTool("sticker"));
    imageUndoButton.addEventListener("click", undoEditorStep);
    imageRedoButton.addEventListener("click", redoEditorStep);
    imageClearButton.addEventListener("click", () => {
      snapshotEditorMasks();
      clearEditorMasks();
      coverStickers = [];
      selectedStickerId = null;
      commitEditorOperation({ kind: "clear" });
      renderImageEditor();
      saveEditorProject();
      saveState();
    });
    imageDoneButton.addEventListener("click", async () => {
      if (imageEditorMode === "standalone") {
        await exportStandaloneImageFromEditor();
      } else {
        await closeImageEditor(true);
        if (imageEditModal.hidden) trackFixedUsageEvent("feature-image-editor-done");
      }
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
      if (!editorImage) return;
      if (event.pointerType === "touch") {
        editorTouchPointers.add(event.pointerId);
        if (editorTouchPointers.size > 1) {
          editorPinching = true;
          editorDrawing = false;
          editorLastPoint = null;
          pendingEditorBrushOperation = null;
          editorStickerDrag = null;
          return;
        }
      } else {
        event.preventDefault();
      }
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
          commitEditorOperation({ kind: "stickers" });
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
      pendingEditorBrushOperation = {
        kind: "brush",
        tool: editorTool,
        size: Number(brushSize.value) || 42,
        canvasWidth: imageEditCanvas.width,
        canvasHeight: imageEditCanvas.height,
        points: [{ x: point.x, y: point.y }],
        didDraw: false
      };
      if (event.pointerType !== "touch") {
        drawEditorStroke(editorLastPoint, editorLastPoint);
        pendingEditorBrushOperation.didDraw = true;
      }
    });
    imageEditCanvas.addEventListener("pointermove", (event) => {
      if (editorPinching) return;
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
      if (pendingEditorBrushOperation) {
        pendingEditorBrushOperation.points.push({ x: point.x, y: point.y });
        pendingEditorBrushOperation.didDraw = true;
      }
      editorLastPoint = point;
    });
    ["pointerup", "pointercancel"].forEach((name) => {
      imageEditCanvas.addEventListener(name, (event) => {
        if (event.pointerType === "touch") {
          editorTouchPointers.delete(event.pointerId);
          if (editorPinching) {
            if (editorTouchPointers.size < 2) editorPinching = false;
            imageEditCanvas.style.cursor = editorTool === "sticker" ? "default" : editorBrushCursor();
            return;
          }
        }
        if (editorDrawing || editorStickerDrag) {
          if (editorDrawing && pendingEditorBrushOperation) commitEditorOperation(pendingEditorBrushOperation);
          else if (editorStickerDrag) commitEditorOperation({ kind: "stickers" });
          saveEditorProject();
          saveState();
        }
        editorDrawing = false;
        editorLastPoint = null;
        pendingEditorBrushOperation = null;
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
        void showAppConfirm(UI_CUSTOM_STICKER_DELETE_CONFIRM).then((confirmed) => {
          if (confirmed) deleteCustomSticker(deleteButton.dataset.stickerDeleteId);
        });
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
          const contentHash = await storedImageContentHash(dataUrlToBlob(localSrc));
          const reusableSource = await reusableCustomStickerSource(localSrc, contentHash);
          const sourceImage = reusableSource?.localSrc || reusableSource?.src || localSrc;
          await registerNewStoredImage(sourceImage, { assetType: "custom-sticker", cache: false, contentHash, dedupeByContent: true });
          const activeReusableSource = reusableSource && stickerSources.find((item) => item.id === reusableSource.id);
          const sharedImageId = reusableSource?.imageId || contentHash || reusableSource?.contentHash || nextStickerId("custom-image");
          if (reusableSource) reusableSource.imageId = sharedImageId;
          const source = activeReusableSource
            ? { ...activeReusableSource, imageId: sharedImageId, contentHash: contentHash || activeReusableSource.contentHash || "" }
            : { id: nextStickerId("uploaded-sticker"), type: "image", src: sourceImage, localSrc: sourceImage, imageId: sharedImageId, contentHash: contentHash || reusableSource?.contentHash || "" };
          if (activeReusableSource) Object.assign(activeReusableSource, source);
          if (!stickerSources.some((item) => item.id === source.id)) stickerSources.push(source);
          stickerPage = Math.max(0, Math.ceil(allStickerSources().length / STICKERS_PER_PAGE) - 1);
          renderStickerPicker();
          setEditorTool("sticker");
          void addSticker(source.id);
        } catch (error) {
          console.error("Sticker upload normalize failed", error);
          showAppAlert(String.fromCharCode(0x8d34, 0x7eb8, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x4e0a, 0x4f20, 0x3002));
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
    exportPrevPage.addEventListener("click", () => {
      if (exportPageIndex > 0) {
        exportPageIndex -= 1;
        renderExportPagePreview();
      }
    });
    exportNextPage.addEventListener("click", () => {
      if (exportPageIndex < lastExportPages.length - 1) {
        exportPageIndex += 1;
        renderExportPagePreview();
      }
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
      const page = lastExportPages[exportPageIndex];
      if (page?.url || lastExportUrl) {
        const link = document.createElement("a");
        link.download = page?.fileName || lastExportFileName || "record-card.png";
        link.href = page?.url || lastExportUrl;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    });

    importDataButton.addEventListener("click", () => importDataInput.click());
    exportDataButton.addEventListener("click", exportRecordData);
    storageManageButton?.addEventListener("click", () => void openStorageManagement());
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
    mobileStorageManageButton?.addEventListener("click", () => {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      void openStorageManagement();
    });
    usageGuideButton?.addEventListener("click", () => {
      if (usageGuideModal) usageGuideModal.hidden = false;
      trackFixedUsageEvent("feature-open-usage-guide");
    });
    mobileUsageGuideButton?.addEventListener("click", () => {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      if (usageGuideModal) usageGuideModal.hidden = false;
      trackFixedUsageEvent("feature-open-usage-guide");
    });
    usageGuideCloseButton?.addEventListener("click", () => { if (usageGuideModal) usageGuideModal.hidden = true; });
    usageGuideModal?.addEventListener("click", (event) => {
      if (event.target === usageGuideModal) usageGuideModal.hidden = true;
    });
    usageInfoButton?.addEventListener("click", () => {
      if (usageInfoModal) usageInfoModal.hidden = false;
      trackFixedUsageEvent("feature-open-about");
    });
    mobileUsageInfoButton?.addEventListener("click", () => {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      if (usageInfoModal) usageInfoModal.hidden = false;
      trackFixedUsageEvent("feature-open-about");
    });
    usageInfoCloseButton?.addEventListener("click", () => { if (usageInfoModal) usageInfoModal.hidden = true; });
    usageInfoModal?.addEventListener("click", (event) => {
      if (event.target === usageInfoModal) usageInfoModal.hidden = true;
    });
    function openUpdateLogModal() {
      if (mobileDataDropdown) mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
      if (updateLogModal) updateLogModal.hidden = false;
      trackFixedUsageEvent("feature-open-update-log");
    }
    updateLogButton?.addEventListener("click", openUpdateLogModal);
    mobileUpdateLogButton?.addEventListener("click", openUpdateLogModal);
    updateLogCloseButton?.addEventListener("click", () => { if (updateLogModal) updateLogModal.hidden = true; });
    updateLogModal?.addEventListener("click", (event) => {
      if (event.target === updateLogModal) updateLogModal.hidden = true;
    });
    document.addEventListener("click", (event) => {
      if (!mobileDataDropdown || mobileDataDropdown.hidden) return;
      if (event.target.closest(".mobile-data-menu")) return;
      mobileDataDropdown.hidden = true;
      mobileDataMenuButton?.setAttribute("aria-expanded", "false");
    });
    function closeCollectionMobileDataMenu() {
      if (collectionMobileDataDropdown) collectionMobileDataDropdown.hidden = true;
      collectionMobileDataMenuButton?.setAttribute("aria-expanded", "false");
    }
    collectionMobileDataMenuButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      const nextHidden = !collectionMobileDataDropdown?.hidden;
      if (collectionMobileDataDropdown) collectionMobileDataDropdown.hidden = nextHidden;
      collectionMobileDataMenuButton.setAttribute("aria-expanded", String(!nextHidden));
    });
    [
      [collectionMobileNewRecordButton, "collectionNewRecordButton"],
      [collectionMobileRjImportButton, "collectionRjImportButton"],
      [collectionMobileImportButton, "collectionImportButton"],
      [collectionMobileExportButton, "collectionExportButton"],
      [collectionMobileBatchAddButton, "collectionBatchAddButton"],
      [collectionMobileBatchManageButton, "collectionBatchManageButton"]
    ].forEach(([button, targetId]) => {
      button?.addEventListener("click", () => {
        closeCollectionMobileDataMenu();
        document.getElementById(targetId)?.click();
      });
    });
    document.addEventListener("click", (event) => {
      if (!collectionMobileDataDropdown || collectionMobileDataDropdown.hidden) return;
      if (event.target.closest(".collection-mobile-data")) return;
      closeCollectionMobileDataMenu();
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
          standaloneWhiteFogMaskSrc = "";
          standaloneEditorUndoStack = [];
          standaloneEditorRedoStack = [];
          standaloneEditorHistoryCheckpoint = null;
          standaloneEditorOperations = [];
          standaloneEditorRedoOperations = [];
          standaloneEditorHistoryFormat = "operations-v1";
          standaloneStickers = [];
          standaloneStickerSources = [];
          saveState();
          void openImageEditorSafely(() => openStandaloneImageEditor(standaloneOriginalSrc));
        } catch (error) {
          console.error("Standalone image normalize failed", error);
          showAppAlert(String.fromCharCode(0x56fe, 0x7247, 0x5904, 0x7406, 0x5931, 0x8d25, 0xff0c, 0x8bf7, 0x91cd, 0x65b0, 0x4e0a, 0x4f20, 0x3002));
        } finally {
          standaloneImageInput.value = "";
        }
      };
      reader.readAsDataURL(file);
    });
    mainNavButtons.forEach((button) => {
      if (!button.dataset.page) return;
      button.addEventListener("click", async () => {
        if (confirmCollectionDetailLeave && collectionDetailPage && !collectionDetailPage.hidden) {
          if (!await confirmCollectionDetailLeave()) return;
        }
        setMainPage(button.dataset.page || "template");
      });
    });
    document.querySelectorAll(".feedback-link").forEach((link) => {
      link.addEventListener("click", () => trackFixedUsageEvent("feature-open-feedback"));
    });

    templatePrevPage.addEventListener("click", () => changeTemplatePage(-1));
    templateNextPage.addEventListener("click", () => changeTemplatePage(1));
    templateAddPage.addEventListener("click", addTemplateContinuationPage);
    templateDeletePage.addEventListener("click", deleteCurrentTemplateContinuationPage);
    templatePageCount.addEventListener("click", (event) => {
      event.stopPropagation();
      templatePageMenu.hidden = !templatePageMenu.hidden;
      templatePageCount.setAttribute("aria-expanded", String(!templatePageMenu.hidden));
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest("#templatePageControls")) closeTemplatePageMenu();
    });
    fullContinuationReview.addEventListener("input", () => {
      const pageState = continuationState.full;
      if (pageState.current > 0) pageState.pages[pageState.current - 1] = fullContinuationReview.value;
      updateReviewCharacterCounts();
      scheduleSave();
    });
    compactContinuationReview.addEventListener("input", () => {
      commitCompactContinuationReviewText();
      updateReviewCharacterCounts();
      scheduleSave();
    });
    compactContinuationReview.addEventListener("paste", () => {
      window.setTimeout(() => {
        commitCompactContinuationReviewText();
        saveState();
      }, 0);
    });
    compactContinuationReview.addEventListener("blur", () => {
      commitCompactContinuationReviewText();
      saveState();
    });
    const compactContinuationReviewObserver = new MutationObserver(() => {
      if (commitCompactContinuationReviewText()) scheduleSave();
    });
    compactContinuationReviewObserver.observe(compactContinuationReview, {
      childList: true,
      characterData: true,
      subtree: true
    });

    templateButtons.forEach((button) => {
      button.addEventListener("click", () => setTemplate(button.dataset.template || "full"));
    });
    themeButtons.forEach((button) => {
      button.addEventListener("click", () => applyCardTheme(button.dataset.theme || DEFAULT_THEME_ID));
    });
    fontButtons.forEach((button) => {
      button.addEventListener("click", () => void chooseTemplateFont(button.dataset.font || DEFAULT_TEMPLATE_FONT_ID));
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
      if (event.target && ["recordTitle", "cvText", "rjText"].includes(event.target.id)) syncContinuationSharedInfo();
      if (event.target === reviewText) updateReviewCharacterCounts();
      if (fullFieldComposing.has(event.target)) return;
      scheduleSave();
    });
    document.addEventListener("click", (event) => {
      if (event.target.closest(".star, .choice-button")) scheduleSave();
    });
    syncPlayerUi(true);
    buildGrid9Cells();
    buildQuickCells();
    buildTrioCells();
    updateReviewCharacterCounts();
    void ensureCanvasFontReady(false).catch((error) => {
      console.warn("Template font preload failed; using the active fallback metrics", error);
    }).then(() => {
      reviewChineseCharacterLimits = null;
      return restoreState();
    }).then(() => {
      updateReviewCharacterCounts();
      void requestPersistentStorage();
      void migrateGrid9CoversToCompact();
      void migrateQuickCoversToCompact();
      void migrateTrioCoversToCompact();
      restoreMainPage();
      fitStage();
      updateDiscount();
      syncDiscountColor();
    }).catch((error) => {
      stateRestoreComplete = true;
      console.error("State restore failed", error);
      applyCardTheme(DEFAULT_THEME_ID, false);
    });
    restoreActiveMenu();
    restoreMainPage();
    scrollActivePickerIntoView();
    function flushCompactContinuationBeforeLeave() {
      window.clearTimeout(scheduleSave.timer);
      commitCompactContinuationReviewText();
      saveState();
    }
    window.addEventListener("beforeunload", flushCompactContinuationBeforeLeave);
    window.addEventListener("pagehide", flushCompactContinuationBeforeLeave);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") flushCompactContinuationBeforeLeave();
    });
    window.addEventListener("resize", () => {
      const savedMainPage = localStorage.getItem(MAIN_PAGE_STORAGE_KEY) || "template";
      const collectionDetailVisible = savedMainPage === "collection" && collectionDetailPage && !collectionDetailPage.hidden;
      if (!collectionDetailVisible) setMainPage(savedMainPage, false);
      fitStage();
      updateThemePager();
      if (!imageEditModal.hidden && imageEditorMode === "template") layoutTemplateImageEditorActions();
    });
    fitStage();
    updateDiscount();
    syncDiscountColor();
    void maybeShowUpdateNotice();

    (() => {
      const page = document.getElementById("collectionPage");
      if (!page) return;
      let records = [];
      let tag = "all", listMode = false, collectionTagEditMode = false, collectionTagRemoveMode = false, collectionTagDraftActive = false, scrollY = 0, collectionPageIndex = 0, activeCollectionRecordId = null, collectionDetailInitialSnapshot = "";
      let collectionBatchMode = false, collectionBatchTagMode = "", collectionBatchOperationPending = false, collectionFilteredRecords = [], visibleCollectionRecords = [];
      const selectedCollectionIds = new Set();
      const collectionBatchTagSelection = new Set();
      const collectionBatchNewTags = new Set();
      const COLLECTION_GRID_PAGE_SIZE = 8;
      const COLLECTION_LIST_PAGE_SIZE = 4;
      const grid = document.getElementById("collectionGrid");
      const collectionScroller = page.parentElement;
      const collectionCoverObjectUrls = new Map();
      const collectionCoverObjectUrlPromises = new Map();
      let visibleCollectionCoverReferences = new Set();
      let collectionPickerCoverReferences = new Set();
      let collectionCoverRenderToken = 0;
      let collectionDetailStoredCoverValue = "";
      const collectionPickerModal = document.getElementById("collectionPickerModal");
      const collectionPickerSheet = collectionPickerModal?.querySelector(".collection-picker-sheet");
      const collectionPickerTip = document.getElementById("collectionPickerTip");
      const collectionPickerSearch = document.getElementById("collectionPickerSearch");
      const collectionPickerSort = document.getElementById("collectionPickerSort");
      const collectionPickerScroller = document.getElementById("collectionPickerScroller");
      const collectionPickerGrid = document.getElementById("collectionPickerGrid");
      const collectionPickerEmpty = document.getElementById("collectionPickerEmpty");
      const collectionPickerClear = document.getElementById("collectionPickerClear");
      const collectionPickerCancel = document.getElementById("collectionPickerCancel");
      const collectionPickerImport = document.getElementById("collectionPickerImport");
      const collectionPickerClose = document.getElementById("collectionPickerClose");
      const importFromCollectionButton = document.getElementById("importFromCollectionButton");
      const mobileImportFromCollectionButton = document.getElementById("mobileImportFromCollectionButton");
      const COLLECTION_PICKER_CONFIG = Object.freeze({
        full:{ max:1, label:TEMPLATE_USAGE_LABELS.full },
        compact:{ max:1, label:TEMPLATE_USAGE_LABELS.compact },
        grid9:{ max:9, label:TEMPLATE_USAGE_LABELS.grid9 },
        quick:{ max:12, label:TEMPLATE_USAGE_LABELS.quick },
        trio:{ max:3, label:TEMPLATE_USAGE_LABELS.trio }
      });
      let collectionPickerTemplate = "full";
      let collectionPickerSelection = [];
      let collectionPickerRenderToken = 0;
      let collectionPickerCoverObserver = null;
      let collectionPickerReturnFocus = null;
      const collectionSavePrompt = document.getElementById("collectionSavePrompt");
      const collectionSavePromptCancel = document.getElementById("collectionSavePromptCancel");
      const collectionSavePromptConfirm = document.getElementById("collectionSavePromptConfirm");
      const collectionRjImportPrompt = document.getElementById("collectionRjImportPrompt");
      const collectionRjImportPromptTitle = document.getElementById("collectionRjImportPromptTitle");
      const collectionRjImportPromptBody = document.getElementById("collectionRjImportPromptBody");
      const collectionRjImportCancel = document.getElementById("collectionRjImportCancel");
      const collectionRjImportFill = document.getElementById("collectionRjImportFill");
      const collectionRjImportOverwrite = document.getElementById("collectionRjImportOverwrite");
      const collectionRjImportDone = document.getElementById("collectionRjImportDone");
      const collectionBatchAddPrompt = document.getElementById("collectionBatchAddPrompt");
      const collectionBatchAddTitle = document.getElementById("collectionBatchAddTitle");
      const collectionBatchAddForm = document.getElementById("collectionBatchAddForm");
      const collectionBatchAddInput = document.getElementById("collectionBatchAddInput");
      const collectionBatchAddStatus = document.getElementById("collectionBatchAddStatus");
      const collectionBatchAddResult = document.getElementById("collectionBatchAddResult");
      const collectionBatchAddCancel = document.getElementById("collectionBatchAddCancel");
      const collectionBatchAddStart = document.getElementById("collectionBatchAddStart");
      const collectionBatchAddDone = document.getElementById("collectionBatchAddDone");
      const collectionMobileTagSelect = document.getElementById("collectionMobileTagSelect");
      const collectionManageTagsButton = document.getElementById("collectionManageTagsButton");
      const collectionTagManageModal = document.getElementById("collectionTagManageModal");
      const collectionTagManageList = document.getElementById("collectionTagManageList");
      const collectionTagManageCancel = document.getElementById("collectionTagManageCancel");
      const collectionTagManageDone = document.getElementById("collectionTagManageDone");
      const collectionTagManageAdd = document.getElementById("collectionTagManageAdd");
      const collectionMobileGridBtn = document.getElementById("collectionMobileGridBtn");
      const collectionMobileListBtn = document.getElementById("collectionMobileListBtn");
      const collectionSort = document.getElementById("collectionSort");
      const collectionMobileSort = document.getElementById("collectionMobileSort");
      const collectionDetailMobileMenuButton = document.getElementById("collectionDetailMobileMenuButton");
      const collectionDetailMobileDropdown = document.getElementById("collectionDetailMobileDropdown");
      const collectionDetailMobileImportButton = document.getElementById("collectionDetailMobileImportButton");
      const collectionDetailMobileMakeRepoButton = document.getElementById("collectionDetailMobileMakeRepoButton");
      const collectionPageNumbers = document.getElementById("collectionPageNumbers");
      const collectionPageJump = document.getElementById("collectionPageJump");
      const collectionPageJumpInput = document.getElementById("collectionPageJumpInput");
      const collectionSearchInput = document.getElementById("collectionSearch");
      const collectionSearchDesktopPlaceholder = collectionSearchInput.placeholder;
      const collectionBatchManageButton = document.getElementById("collectionBatchManageButton");
      const collectionBatchSelectionBar = document.getElementById("collectionBatchSelectionBar");
      const collectionBatchSelectPage = document.getElementById("collectionBatchSelectPage");
      const collectionBatchSelectResults = document.getElementById("collectionBatchSelectResults");
      const collectionBatchSelectionCount = document.getElementById("collectionBatchSelectionCount");
      const collectionBatchClear = document.getElementById("collectionBatchClear");
      const collectionBatchActionBar = document.getElementById("collectionBatchActionBar");
      const collectionMobileBatchToolbarState = document.getElementById("collectionMobileBatchToolbarState");
      const collectionMobileBatchActionCount = document.getElementById("collectionMobileBatchActionCount");
      const collectionMobileBatchSelectPage = document.getElementById("collectionMobileBatchSelectPage");
      const collectionMobileBatchSelectResults = document.getElementById("collectionMobileBatchSelectResults");
      const collectionMobileBatchClear = document.getElementById("collectionMobileBatchClear");
      const collectionMobileBatchAddTags = document.getElementById("collectionMobileBatchAddTags");
      const collectionMobileBatchRemoveTags = document.getElementById("collectionMobileBatchRemoveTags");
      const collectionMobileBatchDelete = document.getElementById("collectionMobileBatchDelete");
      const collectionMobileBatchExitButton = document.getElementById("collectionMobileBatchExitButton");
      const collectionBatchAddTags = document.getElementById("collectionBatchAddTags");
      const collectionBatchRemoveTags = document.getElementById("collectionBatchRemoveTags");
      const collectionBatchDelete = document.getElementById("collectionBatchDelete");
      const collectionBatchTagModal = document.getElementById("collectionBatchTagModal");
      const collectionBatchTagTitle = document.getElementById("collectionBatchTagTitle");
      const collectionBatchTagSearch = document.getElementById("collectionBatchTagSearch");
      const collectionBatchNewTag = document.getElementById("collectionBatchNewTag");
      const collectionBatchNewTagInput = document.getElementById("collectionBatchNewTagInput");
      const collectionBatchNewTagAdd = document.getElementById("collectionBatchNewTagAdd");
      const collectionBatchTagList = document.getElementById("collectionBatchTagList");
      const collectionBatchTagCancel = document.getElementById("collectionBatchTagCancel");
      const collectionBatchTagConfirm = document.getElementById("collectionBatchTagConfirm");
      const collectionMobileLayoutMedia = window.matchMedia("(max-width: 780px)");
      document.getElementById("collectionDetailTitle").dataset.placeholder = String.fromCharCode(0x6807, 0x9898);
      const COLLECTION_TAGS_KEY = "otome-record-card-collection-tags-v1";
      const COLLECTION_REMOVED_TAGS_KEY = "otome-record-card-collection-removed-tags-v1";
      const COLLECTION_DETAIL_KEY = "otome-record-card-collection-detail-v1";
      const COLLECTION_BACKUP_TYPE = "otome-record-card-works";
      const COLLECTION_BACKUP_VERSION = 3;
      const COLLECTION_NEW_KEYWORD_TEXT = String.fromCharCode(0x65b0, 0x5173, 0x952e, 0x8bcd);
      const COLLECTION_NEW_TAG_TEXT = String.fromCharCode(0x65b0, 0x6807, 0x7b7e);
      const COLLECTION_ALL_TAG_TEXT = String.fromCharCode(0x5168, 0x90e8);
      const COLLECTION_RENAME_TAG_TEXT = String.fromCharCode(0x91cd, 0x547d, 0x540d);
      const COLLECTION_DELETE_TAG_TEXT = String.fromCharCode(0x5220, 0x9664);
      const COLLECTION_TAG_COUNT_SUFFIX = String.fromCharCode(0x6761);
      const COLLECTION_MISSING_TITLE_TEXT = String.fromCharCode(0x672a, 0x586b, 0x5199, 0x6807, 0x9898);
      const COLLECTION_MISSING_CV_TEXT = String.fromCharCode(0x672a, 0x586b, 0x5199, 0x20, 0x43, 0x56);
      const COLLECTION_MISSING_RJ_TEXT = String.fromCharCode(0x65e0, 0x20, 0x52, 0x4a);
      const COLLECTION_PLACEHOLDER_TEXT = String.fromCharCode(0x5360, 0x4f4d);
      const COLLECTION_EMPTY_RECORDS_TEXT = String.fromCharCode(0x6682, 0x65e0, 0x6536, 0x85cf, 0x8bb0, 0x5f55);
      const COLLECTION_BATCH_TEXT = Object.freeze({
        manage:String.fromCharCode(0x6279, 0x91cf, 0x7ba1, 0x7406),
        exit:String.fromCharCode(0x9000, 0x51fa),
        selectPage:String.fromCharCode(0x9009, 0x62e9, 0x672c, 0x9875),
        cancelPage:String.fromCharCode(0x53d6, 0x6d88, 0x672c, 0x9875),
        selectResults:String.fromCharCode(0x5168, 0x9009, 0x5f53, 0x524d, 0x7ed3, 0x679c),
        cancelResults:String.fromCharCode(0x53d6, 0x6d88, 0x5f53, 0x524d, 0x7ed3, 0x679c),
        selected:String.fromCharCode(0x5df2, 0x9009),
        item:String.fromCharCode(0x9879),
        pageSelected:String.fromCharCode(0x672c, 0x9875, 0x5df2, 0x9009),
        forPrefix:String.fromCharCode(0x4e3a),
        addTitle:String.fromCharCode(0x9879, 0x6536, 0x85cf, 0x589e, 0x52a0, 0x6807, 0x7b7e),
        fromPrefix:String.fromCharCode(0x4ece),
        removeTitle:String.fromCharCode(0x9879, 0x6536, 0x85cf, 0x79fb, 0x9664, 0x6807, 0x7b7e),
        add:String.fromCharCode(0x6dfb, 0x52a0),
        remove:String.fromCharCode(0x79fb, 0x9664),
        owned:String.fromCharCode(0x9879, 0x62e5, 0x6709),
        emptyTags:String.fromCharCode(0x6ca1, 0x6709, 0x53ef, 0x9009, 0x62e9, 0x7684, 0x6807, 0x7b7e),
        emptyNewTag:String.fromCharCode(0x65b0, 0x6807, 0x7b7e, 0x540d, 0x79f0, 0x4e0d, 0x80fd, 0x4e3a, 0x7a7a, 0x3002),
        reservedTag:String.fromCharCode(0x4e0d, 0x80fd, 0x4f7f, 0x7528, 0x5168, 0x90e8, 0x4f5c, 0x4e3a, 0x6807, 0x7b7e, 0x540d, 0x79f0, 0x3002),
        duplicateTag:String.fromCharCode(0x8fd9, 0x4e2a, 0x6807, 0x7b7e, 0x5df2, 0x7ecf, 0x5b58, 0x5728, 0x3002),
        chooseTag:String.fromCharCode(0x8bf7, 0x9009, 0x62e9, 0x81f3, 0x5c11, 0x4e00, 0x4e2a, 0x6807, 0x7b7e, 0x3002),
        addFailed:String.fromCharCode(0x6807, 0x7b7e, 0x589e, 0x52a0, 0x5931, 0x8d25, 0xff1a),
        removeFailed:String.fromCharCode(0x6807, 0x7b7e, 0x79fb, 0x9664, 0x5931, 0x8d25, 0xff1a),
        removeConfirmPrefix:String.fromCharCode(0x5c06, 0x4ece, 0x9009, 0x4e2d, 0x7684, 0x6536, 0x85cf, 0x4e2d, 0x79fb, 0x9664),
        tagCountJoin:String.fromCharCode(0x4e2a, 0x6807, 0x7b7e, 0xff0c, 0x6d89, 0x53ca),
        recordCountSuffix:String.fromCharCode(0x6761, 0x6536, 0x85cf, 0x8bb0, 0x5f55, 0x3002),
        confirmRemove:String.fromCharCode(0x786e, 0x8ba4, 0x79fb, 0x9664),
        deletePrefix:String.fromCharCode(0x786e, 0x5b9a, 0x6c38, 0x4e45, 0x5220, 0x9664, 0x8fd9),
        deleteSuffix:String.fromCharCode(0x6761, 0x6536, 0x85cf, 0x8bb0, 0x5f55, 0x5417, 0xff1f, 0x6b64, 0x64cd, 0x4f5c, 0x65e0, 0x6cd5, 0x64a4, 0x9500, 0x3002),
        deleteDetails:String.fromCharCode(0x76f8, 0x5173, 0x6536, 0x85cf, 0x4fe1, 0x606f, 0x548c, 0x4ec5, 0x88ab, 0x8fd9, 0x4e9b, 0x8bb0, 0x5f55, 0x4f7f, 0x7528, 0x7684, 0x5c01, 0x9762, 0x6570, 0x636e, 0x4e4b, 0x540e, 0x4e5f, 0x4f1a, 0x88ab, 0x6e05, 0x7406, 0x3002),
        permanentDelete:String.fromCharCode(0x6c38, 0x4e45, 0x5220, 0x9664),
        deleteFailed:String.fromCharCode(0x5220, 0x9664, 0x6761, 0x76ee, 0x5931, 0x8d25, 0xff1a),
        unknownError:String.fromCharCode(0x672a, 0x63d0, 0x4f9b, 0x9519, 0x8bef, 0x4fe1, 0x606f),
        finishTagEdit:String.fromCharCode(0x8bf7, 0x5148, 0x5b8c, 0x6210, 0x5f53, 0x524d, 0x7684, 0x6807, 0x7b7e, 0x7f16, 0x8f91, 0x3002)
      });
      let customCollectionTags = [];
      let removedCollectionTags = [];
      let collectionTagManageDraft = null;
      try { customCollectionTags = JSON.parse(localStorage.getItem(COLLECTION_TAGS_KEY) || "[]"); } catch { customCollectionTags = []; }
      try { removedCollectionTags = JSON.parse(localStorage.getItem(COLLECTION_REMOVED_TAGS_KEY) || "[]"); } catch { removedCollectionTags = []; }
      const defaultCollectionTags = [];
      function collectionCoverReferenceIsUsed(reference) {
        return visibleCollectionCoverReferences.has(reference) || collectionPickerCoverReferences.has(reference) || collectionDetailStoredCoverValue === reference;
      }
      async function collectionCoverDisplayUrl(value) {
        const source = String(value || "");
        if (!source || !source.startsWith(STATE_IMAGE_REFERENCE_PREFIX)) return source;
        if (collectionCoverObjectUrls.has(source)) return collectionCoverObjectUrls.get(source);
        if (collectionCoverObjectUrlPromises.has(source)) return collectionCoverObjectUrlPromises.get(source);
        const pending = (async () => {
          const blob = await readOrRebuildStoredImageBlob(source);
          const url = URL.createObjectURL(blob);
          if (!collectionCoverReferenceIsUsed(source)) {
            URL.revokeObjectURL(url);
            return "";
          }
          collectionCoverObjectUrls.set(source, url);
          return url;
        })();
        collectionCoverObjectUrlPromises.set(source, pending);
        try {
          return await pending;
        } finally {
          collectionCoverObjectUrlPromises.delete(source);
        }
      }
      function releaseUnusedCollectionCoverUrls() {
        collectionCoverObjectUrls.forEach((url, reference) => {
          if (collectionCoverReferenceIsUsed(reference)) return;
          URL.revokeObjectURL(url);
          collectionCoverObjectUrls.delete(reference);
        });
      }
      async function loadVisibleCollectionCovers(visible, renderToken) {
        const elementsById = new Map(Array.from(grid.querySelectorAll(".collection-record[data-id]")).map((element) => [element.dataset.id, element]));
        for (const work of visible) {
          if (renderToken !== collectionCoverRenderToken) return;
          if (!work.cover) continue;
          try {
            const url = await collectionCoverDisplayUrl(work.cover);
            if (renderToken !== collectionCoverRenderToken) return;
            const cover = elementsById.get(String(work.id))?.querySelector(".collection-cover");
            if (cover && url) cover.style.backgroundImage = `url("${url}")`;
          } catch (error) {
            console.warn("Collection cover lazy load failed", work.id, error);
          }
        }
      }
      function escapeCollectionText(value) { return String(value ?? "").replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[character]); }
      function activeCollectionPickerConfig() {
        return COLLECTION_PICKER_CONFIG[collectionPickerTemplate] || COLLECTION_PICKER_CONFIG.full;
      }
      function collectionPickerSearchText(work) {
        return [work.title, work.rj, work.cv, work.circle, work.keywords, ...(Array.isArray(work.tags) ? work.tags : [])].map(value => String(value || "")).join(" ").toLocaleLowerCase();
      }
      function filteredCollectionPickerRecords() {
        const query = String(collectionPickerSearch?.value || "").trim().toLocaleLowerCase();
        const visible = records.filter(work => !query || collectionPickerSearchText(work).includes(query)).slice();
        const sort = collectionPickerSort?.value || "recent";
        if (sort === "added") visible.sort((left, right) => Number(right.addedAt || 0) - Number(left.addedAt || 0));
        else if (sort === "title") visible.sort((left, right) => String(left.title || "").localeCompare(String(right.title || ""), "zh-CN"));
        else if (sort === "cv") visible.sort((left, right) => String(left.cv || "").localeCompare(String(right.cv || ""), "zh-CN"));
        else if (sort === "rating") visible.sort((left, right) => Number(right.rating || 0) - Number(left.rating || 0));
        else visible.sort((left, right) => Number(right.editedAt || right.addedAt || 0) - Number(left.editedAt || left.addedAt || 0));
        return visible;
      }
      function selectedCollectionPickerWorks() {
        return collectionPickerSelection.map(id => records.find(work => String(work.id) === String(id))).filter(Boolean);
      }
      function updateCollectionPickerCoverReferences(visible) {
        const sources = visible.concat(selectedCollectionPickerWorks()).map(work => String(work.cover || ""));
        collectionPickerCoverReferences = new Set(sources.filter(source => source.startsWith(STATE_IMAGE_REFERENCE_PREFIX)));
        releaseUnusedCollectionCoverUrls();
      }
      function setCollectionPickerCoverBackground(element, source) {
        if (!element || !source) return;
        element.style.backgroundImage = `url("${String(source).replace(/["\\]/g, "\\$&")}")`;
        element.classList.add("has-image");
      }
      async function loadCollectionPickerCover(element, work, renderToken) {
        if (!element || !work?.cover) return;
        try {
          const source = await collectionCoverDisplayUrl(work.cover);
          if (collectionPickerModal.hidden || renderToken !== collectionPickerRenderToken || !element.isConnected) return;
          setCollectionPickerCoverBackground(element, source);
        } catch (error) {
          console.warn("Collection picker cover load failed", work.id, error);
        }
      }
      function observeCollectionPickerCover(element, work, renderToken) {
        const source = String(work.cover || "");
        if (!source) return;
        if (!source.startsWith(STATE_IMAGE_REFERENCE_PREFIX)) {
          setCollectionPickerCoverBackground(element, source);
          return;
        }
        if (!collectionPickerCoverObserver) {
          void loadCollectionPickerCover(element, work, renderToken);
          return;
        }
        element.dataset.collectionPickerId = String(work.id);
        collectionPickerCoverObserver.observe(element);
      }
      function renderCollectionPickerGrid(resetScroll = false) {
        if (!collectionPickerGrid || !collectionPickerScroller) return;
        const previousScrollTop = resetScroll ? 0 : collectionPickerScroller.scrollTop;
        const visible = filteredCollectionPickerRecords();
        const renderToken = ++collectionPickerRenderToken;
        collectionPickerCoverObserver?.disconnect();
        collectionPickerCoverObserver = "IntersectionObserver" in window
          ? new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (!entry.isIntersecting) return;
              collectionPickerCoverObserver?.unobserve(entry.target);
              const work = records.find(item => String(item.id) === String(entry.target.dataset.collectionPickerId));
              if (work) void loadCollectionPickerCover(entry.target, work, renderToken);
            });
          }, { root:collectionPickerScroller, rootMargin:"120px" })
          : null;
        updateCollectionPickerCoverReferences(visible);
        const fragment = document.createDocumentFragment();
        visible.forEach(work => {
          const selectedIndex = collectionPickerSelection.findIndex(id => String(id) === String(work.id));
          const button = document.createElement("button");
          button.type = "button";
          button.className = "collection-picker-card" + (selectedIndex >= 0 ? " is-selected" : "");
          button.dataset.collectionPickerId = String(work.id);
          button.setAttribute("aria-pressed", String(selectedIndex >= 0));
          const cover = document.createElement("div");
          cover.className = "collection-picker-cover";
          if (selectedIndex >= 0) {
            const order = document.createElement("span");
            order.className = "collection-picker-order";
            order.textContent = String(selectedIndex + 1);
            cover.appendChild(order);
          }
          const info = document.createElement("div");
          info.className = "collection-picker-info";
          const title = document.createElement("div");
          title.className = "collection-picker-title";
          title.textContent = work.title || String.fromCharCode(0x672a, 0x586b, 0x5199, 0x6807, 0x9898);
          title.title = title.textContent;
          const cv = document.createElement("div");
          cv.className = "collection-picker-cv";
          cv.textContent = "CV · " + (work.cv || String.fromCharCode(0x672a, 0x586b, 0x5199));
          cv.title = cv.textContent;
          info.append(title, cv);
          button.append(cover, info);
          fragment.appendChild(button);
          observeCollectionPickerCover(cover, work, renderToken);
        });
        collectionPickerGrid.replaceChildren(fragment);
        collectionPickerEmpty.hidden = Boolean(visible.length);
        collectionPickerScroller.scrollTop = previousScrollTop;
      }
      function updateCollectionPickerCardSelection() {
        collectionPickerGrid?.querySelectorAll(".collection-picker-card[data-collection-picker-id]").forEach(button => {
          const selectedIndex = collectionPickerSelection.findIndex(id => String(id) === String(button.dataset.collectionPickerId));
          const selected = selectedIndex >= 0;
          button.classList.toggle("is-selected", selected);
          button.setAttribute("aria-pressed", String(selected));
          const cover = button.querySelector(".collection-picker-cover");
          let order = cover?.querySelector(".collection-picker-order");
          if (!selected) {
            order?.remove();
            return;
          }
          if (!order && cover) {
            order = document.createElement("span");
            order.className = "collection-picker-order";
            cover.appendChild(order);
          }
          if (order) order.textContent = String(selectedIndex + 1);
        });
      }
      function renderCollectionPickerTray() {
        collectionPickerSheet?.classList.toggle("is-single", activeCollectionPickerConfig().max === 1);
        collectionPickerClear.disabled = !collectionPickerSelection.length;
        collectionPickerImport.disabled = !collectionPickerSelection.length;
        collectionPickerImport.textContent = collectionPickerSelection.length
          ? String.fromCharCode(0x5bfc, 0x5165) + " " + collectionPickerSelection.length + " " + String.fromCharCode(0x6761)
          : String.fromCharCode(0x5bfc, 0x5165, 0x6240, 0x9009);
      }
      function renderCollectionPicker(resetScroll = false) {
        renderCollectionPickerGrid(resetScroll);
        renderCollectionPickerTray();
      }
      function closeCollectionPicker() {
        if (!collectionPickerModal || collectionPickerModal.hidden) return;
        collectionPickerModal.hidden = true;
        collectionPickerCoverObserver?.disconnect();
        collectionPickerCoverObserver = null;
        collectionPickerCoverReferences = new Set();
        releaseUnusedCollectionCoverUrls();
        const returnFocus = collectionPickerReturnFocus;
        collectionPickerReturnFocus = null;
        returnFocus?.focus();
      }
      function openCollectionPicker(event) {
        if (!collectionPickerModal) return;
        collectionPickerTemplate = currentTemplate();
        const config = activeCollectionPickerConfig();
        collectionPickerSelection = [];
        collectionPickerReturnFocus = event?.currentTarget || document.activeElement;
        collectionPickerSearch.value = "";
        collectionPickerSort.value = "recent";
        collectionPickerTip.textContent = config.max === 1
          ? config.label + " · " + String.fromCharCode(0x5355, 0x9009, 0x4e00, 0x6761, 0x6536, 0x85cf)
          : config.label + " · " + String.fromCharCode(0x9009, 0x62e9, 0x987a, 0x5e8f, 0x20, 0x3d, 0x20, 0x653e, 0x5165, 0x6a21, 0x677f, 0x7684, 0x987a, 0x5e8f, 0x20, 0xb7, 0x20, 0x6700, 0x591a) + " " + config.max + " " + String.fromCharCode(0x6761);
        collectionPickerModal.hidden = false;
        renderCollectionPicker(true);
      }
      function toggleCollectionPickerSelection(id) {
        const config = activeCollectionPickerConfig();
        const selectedIndex = collectionPickerSelection.findIndex(value => String(value) === String(id));
        if (selectedIndex >= 0) collectionPickerSelection.splice(selectedIndex, 1);
        else if (config.max === 1) {
          collectionPickerSelection = [id];
        }
        else if (collectionPickerSelection.length < config.max) collectionPickerSelection.push(id);
        else {
          showAppAlert(String.fromCharCode(0x5f53, 0x524d, 0x6a21, 0x677f, 0x6700, 0x591a, 0x9009, 0x62e9) + " " + config.max + " " + String.fromCharCode(0x6761, 0x6536, 0x85cf, 0x3002));
          return;
        }
        updateCollectionPickerCardSelection();
        renderCollectionPickerTray();
      }
      function collectionPickerValueHasContent(value) {
        return Array.isArray(value) ? value.some(collectionPickerValueHasContent) : value != null && String(value).trim() !== "";
      }
      function collectionPickerTargetHasContent(template, count) {
        const state = collectState();
        if (template === "full") {
          return [state.recordTitle, state.cvText, state.circleText, state.rjText, state.durationText, state.purchaseDate, state.listenedDate, state.originalPrice, state.currentPrice, state.currentDiscount, state.lowestPrice, state.reviewText, state.tags, state.continuationPages?.full?.pages, state.coverSrc, state.coverOriginalSrc, state.coverEditedSrc].some(collectionPickerValueHasContent)
            || (state.cnChoice && state.cnChoice !== CHOICE_SUBTITLE)
            || (state.ratings || []).some(value => Number(value) !== 4);
        }
        if (template === "compact") {
          return [state.recordTitle, state.cvText, state.circleText, state.rjText, state.continuationPages?.compact?.pages, state.coverSrc, state.coverOriginalSrc, state.coverEditedSrc].some(collectionPickerValueHasContent);
        }
        const cells = template === "grid9" ? state.grid9?.cells : template === "quick" ? state.quick?.cells : state.trio?.cells;
        return (cells || []).slice(0, count).some(cell => {
          if (!cell) return false;
          if (template === "grid9") return [cell.cover, cell.tag, cell.review, cell.rj].some(collectionPickerValueHasContent);
          if (template === "quick") return [cell.cover, cell.cv, cell.rj, cell.review].some(collectionPickerValueHasContent);
          return [cell.cover, cell.cv, cell.rj, cell.price, cell.repo].some(collectionPickerValueHasContent) || Number(cell.rating) > 0;
        });
      }
      function splitCollectionRepoPages(value, limiter) {
        let remaining = String(value || "").replace(/\r\n?/g, "\n");
        const pages = [];
        while (remaining) {
          let pageText = limiter(remaining);
          if (!pageText) pageText = wrappingCharacters(remaining)[0] || "";
          if (!pageText) break;
          pages.push(pageText);
          remaining = remaining.slice(pageText.length);
        }
        return pages;
      }
      function paginateFullCollectionRepo(value) {
        const normalized = String(value || "").replace(/\r\n?/g, "\n");
        const main = limitedFullReviewText(normalized);
        return {
          main,
          pages:splitCollectionRepoPages(normalized.slice(main.length), limitedFullContinuationReviewText)
        };
      }
      function collectionPickerCoverState(cover, fit) {
        return {
          coverSrc:cover || "",
          coverOriginalSrc:cover || "",
          coverEditedSrc:"",
          coverMosaicMaskSrc:"",
          coverBlurMaskSrc:"",
          coverWhiteFogMaskSrc:"",
          coverEditorUndoStack:[],
          coverEditorRedoStack:[],
          coverEditorHistoryCheckpoint:null,
          coverEditorOperations:[],
          coverEditorRedoOperations:[],
          coverEditorHistoryFormat:"operations-v1",
          coverStickers:[],
          stickerSources:[],
          coverFit:fit === "cover" ? "cover" : "contain"
        };
      }
      function collectionPickerOptionalNumber(value) {
        return value === "" || value == null ? "" : Number(value);
      }
      function applySingleCollectionPickerWork(template, prepared) {
        const work = prepared.work;
        const state = collectState();
        const basicState = {
          ...state,
          template,
          recordTitle:work.title || "",
          cvText:work.cv || "",
          circleText:work.circle || "",
          rjText:work.rj || "",
          ...collectionPickerCoverState(prepared.cover, work.coverFit)
        };
        if (template === "compact") {
          const pages = splitCollectionRepoPages(work.review, limitedCompactContinuationReviewText);
          applyState({
            ...basicState,
            reviewText:"",
            continuationPages:{
              full:{ current:0, pages:[] },
              compact:{ current:0, pages }
            }
          }, false);
          return;
        }
        const repo = paginateFullCollectionRepo(work.review);
        const ratings = [work.rating, work.cvRating, work.storyRating, work.seRating].map(value => value === "" || value == null ? 0 : Number(value) || 0);
        applyState({
          ...basicState,
          durationText:work.time || "",
          purchaseDate:normalizeCardDateValue(work.purchaseDate),
          listenedDate:normalizeCardDateValue(work.listenedDate),
          cardInfoType:normalizeCardInfoType(work.cardInfoType || "duration"),
          originalPrice:collectionPickerOptionalNumber(work.originalPrice),
          currentPrice:collectionPickerOptionalNumber(work.price),
          currentDiscount:collectionPickerOptionalNumber(work.currentDiscount),
          currentDiscountManual:false,
          lowestPrice:collectionPickerOptionalNumber(work.lowestPrice),
          cnChoice:work.cn || CHOICE_SUBTITLE,
          ratings,
          tags:String(work.keywords || "").split(" / ").filter(Boolean),
          reviewText:repo.main,
          continuationPages:{
            full:{ current:0, pages:repo.pages },
            compact:{ current:0, pages:[] }
          }
        }, false);
      }
      function applyMultiCollectionPickerWorks(template, preparedWorks) {
        preparedWorks.forEach((prepared, index) => {
          const work = prepared.work;
          if (template === "grid9") {
            writeGrid9Cell(index, {
              cover:prepared.cover || "",
              fit:work.coverFit === "contain" ? "contain" : "cover",
              tag:"",
              review:work.review || "",
              rj:work.rj || ""
            });
          } else if (template === "quick") {
            writeQuickCell(index, {
              cover:prepared.cover || "",
              coverFit:work.coverFit === "contain" ? "contain" : "cover",
              cv:work.cv || "",
              rj:work.rj || "",
              review:work.review || ""
            });
          } else if (template === "trio") {
            writeTrioCell(index, {
              cover:prepared.cover || "",
              coverFit:work.coverFit === "contain" ? "contain" : "cover",
              cv:work.cv || "",
              rj:work.rj || "",
              price:work.price === "" || work.price == null ? "" : String(work.price),
              rating:work.rating === "" || work.rating == null ? 0 : Number(work.rating) || 0,
              repo:work.review || ""
            });
          }
        });
        fitStage();
      }
      async function importSelectedCollectionPickerWorks() {
        const selectedWorks = selectedCollectionPickerWorks();
        if (!selectedWorks.length) return;
        const hasContent = collectionPickerTargetHasContent(collectionPickerTemplate, selectedWorks.length);
        if (hasContent) {
          const message = activeCollectionPickerConfig().max === 1
            ? String.fromCharCode(0x5c06, 0x8986, 0x76d6, 0x5f53, 0x524d, 0x6a21, 0x677f, 0x5185, 0x5bf9, 0x5e94, 0x4f4d, 0x7f6e, 0x7684, 0x73b0, 0x6709, 0x5185, 0x5bb9, 0xff0c, 0x662f, 0x5426, 0x7ee7, 0x7eed, 0xff1f)
            : String.fromCharCode(0x5c06, 0x8986, 0x76d6, 0x524d) + " " + selectedWorks.length + " " + String.fromCharCode(0x4e2a, 0x4f4d, 0x7f6e, 0x7684, 0x73b0, 0x6709, 0x5185, 0x5bb9, 0xff0c, 0x662f, 0x5426, 0x7ee7, 0x7eed, 0xff1f);
          if (!await showAppConfirm(message)) return;
        }
        collectionPickerImport.disabled = true;
        collectionPickerImport.setAttribute("aria-busy", "true");
        try {
          const preparedWorks = await Promise.all(selectedWorks.map(async work => ({
            work,
            cover:work.cover ? await resolveStoredImageReferenceSafely(work.cover) : ""
          })));
          if (collectionPickerTemplate === "full" || collectionPickerTemplate === "compact") applySingleCollectionPickerWork(collectionPickerTemplate, preparedWorks[0]);
          else applyMultiCollectionPickerWorks(collectionPickerTemplate, preparedWorks);
          await saveState();
          trackFixedUsageEvent("feature-import-from-collection-success");
          closeCollectionPicker();
          showAppAlert(String.fromCharCode(0x5df2, 0x4ece, 0x6536, 0x85cf, 0x5bfc, 0x5165, 0x5f53, 0x524d, 0x6a21, 0x677f, 0x3002));
        } catch (error) {
          console.error("Import from collection failed", error);
          const reason = error && (error.name || error.message) ? [error.name, error.message].filter(Boolean).join(": ") : UI_GRID9_UNKNOWN;
          showAppAlert(String.fromCharCode(0x5bfc, 0x5165, 0x6536, 0x85cf, 0x5931, 0x8d25, 0xff1a) + reason);
        } finally {
          collectionPickerImport.removeAttribute("aria-busy");
          if (!collectionPickerModal.hidden) renderCollectionPickerTray();
        }
      }
      function collectionTagNames() { return Array.from(new Set(defaultCollectionTags.concat(customCollectionTags).concat(records.flatMap(work => work.tags || [])))).filter(name => !removedCollectionTags.includes(name)); }
      function renderMobileTagSelect() {
        if (!collectionMobileTagSelect) return;
        const options = [{ name: "all", label: COLLECTION_ALL_TAG_TEXT }].concat(collectionTagNames().map(name => ({ name, label: name })));
        collectionMobileTagSelect.innerHTML = options.map(item => `<option value="${escapeCollectionText(item.name)}">${escapeCollectionText(item.label)}</option>`).join("");
        collectionMobileTagSelect.value = tag;
        if (collectionMobileTagSelect.value !== tag) collectionMobileTagSelect.value = "all";
      }
      function collectionMobileTagsMarkup(tags) {
        const names = Array.from(new Set((Array.isArray(tags) ? tags : []).map(name => String(name || "").trim()).filter(Boolean)));
        if (!names.length) return "";
        return `<div class="collection-mobile-tags">${names.map(name => `<i class="collection-tag-mini" data-mobile-tag-chip>${escapeCollectionText(name)}</i>`).join("")}<i class="collection-tag-mini collection-tag-overflow" data-mobile-tag-overflow hidden></i></div>`;
      }
      function fitCollectionMobileTags() {
        if (!collectionMobileLayoutMedia.matches) return;
        grid.querySelectorAll(".collection-mobile-tags").forEach(wrap => {
          const chips = Array.from(wrap.querySelectorAll("[data-mobile-tag-chip]"));
          const overflow = wrap.querySelector("[data-mobile-tag-overflow]");
          if (!chips.length || !overflow) return;
          chips.forEach(chip => { chip.hidden = false; });
          overflow.hidden = true;
          const available = wrap.clientWidth;
          const gap = 4;
          const chipWidths = chips.map(chip => chip.getBoundingClientRect().width);
          const allWidth = chipWidths.reduce((sum, width) => sum + width, 0) + gap * Math.max(0, chips.length - 1);
          if (!available || allWidth <= available) return;
          let visibleCount = 0;
          let visibleWidth = 0;
          for (let index = 0; index < chips.length; index += 1) {
            const hiddenCount = chips.length - index;
            overflow.textContent = "+" + hiddenCount;
            overflow.hidden = false;
            const overflowWidth = overflow.getBoundingClientRect().width;
            const required = visibleWidth + (index > 0 ? gap : 0) + overflowWidth;
            if (required > available) break;
            visibleCount = index;
            const nextVisibleWidth = visibleWidth + (index > 0 ? gap : 0) + chipWidths[index];
            const nextHiddenCount = chips.length - index - 1;
            if (nextHiddenCount <= 0) {
              if (nextVisibleWidth <= available) visibleCount = chips.length;
              break;
            }
            overflow.textContent = "+" + nextHiddenCount;
            const nextRequired = nextVisibleWidth + gap + overflow.getBoundingClientRect().width;
            if (nextRequired > available) break;
            visibleCount = index + 1;
            visibleWidth = nextVisibleWidth;
          }
          chips.forEach((chip, index) => { chip.hidden = index >= visibleCount; });
          const hiddenCount = chips.length - visibleCount;
          overflow.textContent = "+" + hiddenCount;
          overflow.hidden = hiddenCount <= 0;
        });
      }
      let collectionTagFitFrame = 0;
      function scheduleCollectionMobileTagFit() {
        window.cancelAnimationFrame(collectionTagFitFrame);
        collectionTagFitFrame = window.requestAnimationFrame(fitCollectionMobileTags);
      }
      function syncCollectionSearchPlaceholder() {
        collectionSearchInput.placeholder = collectionMobileLayoutMedia.matches
          ? String.fromCharCode(0x641c, 0x7d22)
          : collectionSearchDesktopPlaceholder;
        scheduleCollectionMobileTagFit();
      }
      collectionMobileLayoutMedia.addEventListener?.("change", syncCollectionSearchPlaceholder);
      window.addEventListener("resize", scheduleCollectionMobileTagFit);
      document.fonts?.ready.then(scheduleCollectionMobileTagFit);
      syncCollectionSearchPlaceholder();
      function collectionPaginationItems(pageCount, currentPage, siblingCount) {
        const range = (start, end) => Array.from({ length:Math.max(0, end - start + 1) }, (_, index) => start + index);
        const windowSize = siblingCount * 2 + 1;
        const maximumNumberCount = windowSize + 2;
        if (pageCount <= maximumNumberCount) return range(1, pageCount);
        if (currentPage <= siblingCount + 2) {
          return range(1, windowSize).concat("ellipsis", pageCount);
        }
        if (currentPage >= pageCount - siblingCount - 1) {
          return [1, "ellipsis"].concat(range(pageCount - windowSize + 1, pageCount));
        }
        return [1, "ellipsis"].concat(range(currentPage - siblingCount, currentPage + siblingCount), "ellipsis", pageCount);
      }
      function collectionPaginationMarkup(pageCount, currentPage, siblingCount, mode) {
        const items = collectionPaginationItems(pageCount, currentPage, siblingCount);
        return `<div class="collection-page-number-set is-${mode}">${items.map(item => {
          if (item === "ellipsis") return `<span class="collection-page-ellipsis" aria-hidden="true">\u2026</span>`;
          const active = item === currentPage;
          return `<button class="collection-page-number${active ? " active" : ""}" type="button" data-collection-page="${item - 1}" aria-label="${item}"${active ? " aria-current=\"page\" disabled" : ""}>${item}</button>`;
        }).join("")}</div>`;
      }
      function collectionBatchSelectedWorks() {
        return records.filter(work => selectedCollectionIds.has(String(work.id)));
      }
      function collectionBatchErrorReason(error) {
        return String(error && (error.message || error.name) || COLLECTION_BATCH_TEXT.unknownError);
      }
      function renderCollectionBatchControls() {
        const selectedCount = selectedCollectionIds.size;
        const pageSelectedCount = visibleCollectionRecords.filter(work => selectedCollectionIds.has(String(work.id))).length;
        const allPageSelected = visibleCollectionRecords.length > 0 && pageSelectedCount === visibleCollectionRecords.length;
        const resultSelectedCount = collectionFilteredRecords.filter(work => selectedCollectionIds.has(String(work.id))).length;
        const allResultsSelected = collectionFilteredRecords.length > 0 && resultSelectedCount === collectionFilteredRecords.length;
        page.classList.toggle("collection-batch-mode", collectionBatchMode);
        collectionBatchSelectionBar.hidden = !collectionBatchMode;
        collectionBatchActionBar.hidden = !collectionBatchMode;
        collectionMobileBatchToolbarState.hidden = !collectionBatchMode;
        collectionBatchManageButton.textContent = collectionBatchMode ? COLLECTION_BATCH_TEXT.exit : COLLECTION_BATCH_TEXT.manage;
        collectionBatchManageButton.disabled = collectionBatchOperationPending || (!collectionBatchMode && records.length === 0);
        collectionBatchSelectPage.textContent = allPageSelected ? COLLECTION_BATCH_TEXT.cancelPage : COLLECTION_BATCH_TEXT.selectPage;
        collectionBatchSelectPage.disabled = collectionBatchOperationPending || visibleCollectionRecords.length === 0;
        collectionMobileBatchSelectPage.textContent = allPageSelected
          ? String.fromCharCode(0x53d6, 0x6d88, 0x672c, 0x9875)
          : String.fromCharCode(0x672c, 0x9875);
        collectionMobileBatchSelectPage.disabled = collectionBatchSelectPage.disabled;
        collectionBatchSelectResults.textContent = (allResultsSelected ? COLLECTION_BATCH_TEXT.cancelResults : COLLECTION_BATCH_TEXT.selectResults) + " (" + collectionFilteredRecords.length + ")";
        collectionBatchSelectResults.disabled = collectionBatchOperationPending || collectionFilteredRecords.length === 0;
        collectionMobileBatchSelectResults.textContent = allResultsSelected
          ? String.fromCharCode(0x53d6, 0x6d88, 0x5168, 0x9009)
          : String.fromCharCode(0x5168, 0x9009);
        collectionMobileBatchSelectResults.disabled = collectionBatchSelectResults.disabled;
        const countText = COLLECTION_BATCH_TEXT.selected + " " + selectedCount + " " + COLLECTION_BATCH_TEXT.item;
        collectionBatchSelectionCount.textContent = countText + " · " + COLLECTION_BATCH_TEXT.pageSelected + " " + pageSelectedCount + " " + COLLECTION_BATCH_TEXT.item;
        collectionMobileBatchActionCount.textContent = collectionBatchSelectionCount.textContent;
        collectionBatchClear.disabled = collectionBatchOperationPending || selectedCount === 0;
        collectionMobileBatchClear.disabled = collectionBatchClear.disabled;
        collectionMobileBatchExitButton.disabled = collectionBatchOperationPending;
        collectionBatchAddTags.disabled = selectedCount === 0 || collectionBatchOperationPending;
        collectionBatchRemoveTags.disabled = selectedCount === 0 || collectionBatchOperationPending;
        collectionBatchDelete.disabled = selectedCount === 0 || collectionBatchOperationPending;
        collectionMobileBatchAddTags.disabled = collectionBatchAddTags.disabled;
        collectionMobileBatchRemoveTags.disabled = collectionBatchRemoveTags.disabled;
        collectionMobileBatchDelete.disabled = collectionBatchDelete.disabled;
      }
      function setCollectionBatchMode(nextMode) {
        if (!nextMode && collectionBatchOperationPending) return;
        collectionBatchMode = Boolean(nextMode);
        if (!collectionBatchMode) {
          selectedCollectionIds.clear();
          closeCollectionBatchTagModal();
        }
        collectionMobileDataDropdown.hidden = true;
        collectionMobileDataMenuButton.setAttribute("aria-expanded", "false");
        render();
      }
      function toggleCollectionBatchSelection(id) {
        if (collectionBatchOperationPending) return;
        const key = String(id || "");
        if (!key) return;
        if (selectedCollectionIds.has(key)) selectedCollectionIds.delete(key);
        else selectedCollectionIds.add(key);
        render();
      }
      function collectionBatchTagCandidates() {
        if (collectionBatchTagMode === "add") {
          return Array.from(new Set(collectionTagNames().concat(Array.from(collectionBatchNewTags)))).map(name => ({ name, count:0 }));
        }
        const counts = new Map();
        collectionBatchSelectedWorks().forEach(work => {
          Array.from(new Set(work.tags || [])).forEach(name => counts.set(name, (counts.get(name) || 0) + 1));
        });
        return Array.from(counts, ([name, count]) => ({ name, count }));
      }
      function renderCollectionBatchTagList() {
        const query = String(collectionBatchTagSearch.value || "").trim().toLocaleLowerCase();
        const candidates = collectionBatchTagCandidates().filter(item => !query || item.name.toLocaleLowerCase().includes(query));
        const selectedTotal = selectedCollectionIds.size;
        collectionBatchTagList.innerHTML = candidates.length ? candidates.map(item => {
          const checked = collectionBatchTagSelection.has(item.name);
          const count = collectionBatchTagMode === "remove" ? `<small>${item.count} / ${selectedTotal} ${COLLECTION_BATCH_TEXT.owned}</small>` : "";
          return `<label class="collection-batch-tag-option"><input type="checkbox" data-collection-batch-tag="${escapeCollectionText(item.name)}"${checked ? " checked" : ""} /><span>${escapeCollectionText(item.name)}</span>${count}</label>`;
        }).join("") : `<p class="collection-batch-tag-empty">${COLLECTION_BATCH_TEXT.emptyTags}</p>`;
        collectionBatchTagConfirm.disabled = collectionBatchTagSelection.size === 0 || collectionBatchOperationPending;
      }
      function closeCollectionBatchTagModal(force = false) {
        if (collectionBatchOperationPending && !force) return;
        collectionBatchTagMode = "";
        collectionBatchTagSelection.clear();
        collectionBatchNewTags.clear();
        collectionBatchTagSearch.value = "";
        collectionBatchNewTagInput.value = "";
        collectionBatchTagModal.hidden = true;
      }
      function openCollectionBatchTagModal(mode) {
        if (!selectedCollectionIds.size) return;
        collectionBatchTagMode = mode;
        collectionBatchTagSelection.clear();
        collectionBatchNewTags.clear();
        collectionBatchTagSearch.value = "";
        collectionBatchNewTagInput.value = "";
        const selectedCount = selectedCollectionIds.size;
        collectionBatchTagTitle.textContent = mode === "add"
          ? COLLECTION_BATCH_TEXT.forPrefix + " " + selectedCount + " " + COLLECTION_BATCH_TEXT.addTitle
          : COLLECTION_BATCH_TEXT.fromPrefix + " " + selectedCount + " " + COLLECTION_BATCH_TEXT.removeTitle;
        collectionBatchTagConfirm.textContent = mode === "add" ? COLLECTION_BATCH_TEXT.add : COLLECTION_BATCH_TEXT.remove;
        collectionBatchNewTag.hidden = mode !== "add";
        renderCollectionBatchTagList();
        collectionBatchTagModal.hidden = false;
        if (!collectionMobileLayoutMedia.matches) collectionBatchTagSearch.focus();
      }
      async function addCollectionBatchNewTag() {
        const name = String(collectionBatchNewTagInput.value || "").trim();
        if (!name) { await showAppAlert(COLLECTION_BATCH_TEXT.emptyNewTag); return; }
        if (name === COLLECTION_ALL_TAG_TEXT) { await showAppAlert(COLLECTION_BATCH_TEXT.reservedTag); return; }
        if (collectionTagNames().includes(name) || collectionBatchNewTags.has(name)) { await showAppAlert(COLLECTION_BATCH_TEXT.duplicateTag); return; }
        collectionBatchNewTags.add(name);
        collectionBatchTagSelection.add(name);
        collectionBatchNewTagInput.value = "";
        collectionBatchTagSearch.value = "";
        renderCollectionBatchTagList();
      }
      async function applyCollectionBatchTags() {
        if (collectionBatchOperationPending) return;
        const names = Array.from(collectionBatchTagSelection);
        if (!names.length) { await showAppAlert(COLLECTION_BATCH_TEXT.chooseTag); return; }
        collectionBatchOperationPending = true;
        collectionBatchTagConfirm.disabled = true;
        const appliedMode = collectionBatchTagMode;
        const selectedIds = new Set(selectedCollectionIds);
        if (collectionBatchTagMode === "remove") {
          const affectedCount = records.filter(work => selectedIds.has(String(work.id)) && (work.tags || []).some(name => names.includes(name))).length;
          const message = COLLECTION_BATCH_TEXT.removeConfirmPrefix + " " + names.length + " " + COLLECTION_BATCH_TEXT.tagCountJoin + " " + affectedCount + " " + COLLECTION_BATCH_TEXT.recordCountSuffix;
          if (!await queueAppDialog(message, true, "", { confirmLabel:COLLECTION_BATCH_TEXT.confirmRemove })) {
            collectionBatchOperationPending = false;
            renderCollectionBatchTagList();
            return;
          }
        }
        const now = Date.now();
        const changedWorks = [];
        const nextRecords = records.map(work => {
          if (!selectedIds.has(String(work.id))) return work;
          const currentTags = Array.from(new Set(work.tags || []));
          const nextTags = collectionBatchTagMode === "add"
            ? Array.from(new Set(currentTags.concat(names)))
            : currentTags.filter(name => !names.includes(name));
          if (nextTags.length === currentTags.length && nextTags.every((name, index) => name === currentTags[index])) return work;
          const nextWork = { ...work, tags:nextTags, editedAt:now };
          changedWorks.push(nextWork);
          return nextWork;
        });
        try {
          if (changedWorks.length) await putWorks(changedWorks);
          records = nextRecords;
          if (collectionBatchTagMode === "add" && collectionBatchNewTags.size) {
            customCollectionTags = Array.from(new Set(customCollectionTags.concat(Array.from(collectionBatchNewTags))));
            removedCollectionTags = removedCollectionTags.filter(name => !collectionBatchNewTags.has(name));
            localStorage.setItem(COLLECTION_TAGS_KEY, JSON.stringify(customCollectionTags));
            localStorage.setItem(COLLECTION_REMOVED_TAGS_KEY, JSON.stringify(removedCollectionTags));
          } else if (collectionBatchTagMode === "remove") {
            customCollectionTags = Array.from(new Set(customCollectionTags.concat(names)));
            removedCollectionTags = removedCollectionTags.filter(name => !names.includes(name));
            localStorage.setItem(COLLECTION_TAGS_KEY, JSON.stringify(customCollectionTags));
            localStorage.setItem(COLLECTION_REMOVED_TAGS_KEY, JSON.stringify(removedCollectionTags));
          }
          if (changedWorks.length) {
            trackFixedUsageEvent("feature-collection-batch-tag-" + appliedMode + "-success");
          }
          closeCollectionBatchTagModal(true);
          render();
        } catch (error) {
          console.error("Batch collection tag update failed", error);
          const prefix = collectionBatchTagMode === "add" ? COLLECTION_BATCH_TEXT.addFailed : COLLECTION_BATCH_TEXT.removeFailed;
          await showAppAlert(prefix + collectionBatchErrorReason(error));
        } finally {
          collectionBatchOperationPending = false;
          if (!collectionBatchTagModal.hidden) renderCollectionBatchTagList();
          else renderCollectionBatchControls();
        }
      }
      async function deleteSelectedCollectionWorks() {
        if (collectionBatchOperationPending) return;
        const selectedWorks = collectionBatchSelectedWorks();
        const ids = selectedWorks.map(work => work.id);
        if (!ids.length) return;
        collectionBatchOperationPending = true;
        renderCollectionBatchControls();
        const message = COLLECTION_BATCH_TEXT.deletePrefix + " " + ids.length + " " + COLLECTION_BATCH_TEXT.deleteSuffix + "\n\n" + COLLECTION_BATCH_TEXT.deleteDetails;
        if (!await queueAppDialog(message, true, "", { confirmLabel:COLLECTION_BATCH_TEXT.permanentDelete })) {
          collectionBatchOperationPending = false;
          renderCollectionBatchControls();
          return;
        }
        try {
          await deleteWorks(ids);
          const deletedIds = new Set(ids.map(id => String(id)));
          records = records.filter(work => !deletedIds.has(String(work.id)));
          selectedCollectionIds.clear();
          render();
          trackFixedUsageEvent("feature-collection-batch-delete-success");
        } catch (error) {
          console.error("Batch collection delete failed", error);
          await showAppAlert(COLLECTION_BATCH_TEXT.deleteFailed + collectionBatchErrorReason(error));
        } finally {
          collectionBatchOperationPending = false;
          renderCollectionBatchControls();
        }
      }
      function renderCollectionTags() {
        const links = document.getElementById("collectionTagLinks");
        links.classList.toggle("remove-mode", collectionTagRemoveMode);
        links.classList.toggle("edit-mode", collectionTagEditMode);
        const names = collectionTagNames();
        const buttons = [{ name:"all", label:"全部", count:records.length }].concat(names.map(name => ({ name, label:name, count:records.filter(work => (work.tags || []).includes(name)).length })));
        links.innerHTML = buttons.map(item => `<div class="collection-tag-row">${collectionTagEditMode && item.name !== "all" ? `<span class="collection-tag-filter ${tag === item.name ? "active" : ""}" contenteditable="true" data-original-collection-tag="${escapeCollectionText(item.name)}">${escapeCollectionText(item.label)}</span>` : `<button type="button" class="collection-tag-filter ${tag === item.name ? "active" : ""}" data-collection-tag="${escapeCollectionText(item.name)}"><span>${escapeCollectionText(item.label)}</span></button>`}<span class="collection-tag-count">${item.count}</span>${item.name === "all" ? "" : `<button type="button" class="collection-tag-remove" data-remove-collection-tag="${escapeCollectionText(item.name)}" aria-label="移除标签 ${escapeCollectionText(item.label)}">×</button>`}</div>`).join("") + (collectionTagDraftActive ? `<div class="collection-tag-row collection-tag-draft"><span class="collection-tag-draft-name" contenteditable="true">新标签</span><button type="button" class="collection-tag-finish" data-finish-collection-tag>完成</button></div>` : "");
      }
      function render() {
        const renderToken = ++collectionCoverRenderToken;
        const recordIds = new Set(records.map(work => String(work.id)));
        Array.from(selectedCollectionIds).forEach(id => { if (!recordIds.has(id)) selectedCollectionIds.delete(id); });
        renderCollectionTags();
        renderMobileTagSelect();
        const q = collectionSearchInput.value.trim().toLowerCase();
        let a = records.filter(r => tag === "all" || (r.tags || []).includes(tag)).filter(r => !q || [r.title,r.cn,r.cv,r.rj,r.circle,r.keywords,...(r.tags || [])].join(" ").toLowerCase().includes(q));
        const s = collectionSort.value;
        if (s === "recent") a.sort((x,y) => (y.editedAt || 0) - (x.editedAt || 0));
        if (s === "added") a.sort((x,y) => (y.addedAt || 0) - (x.addedAt || 0));
        if (s === "rating") a.sort((x,y) => (y.rating || 0) - (x.rating || 0));
        if (["originalPrice","price","lowestPrice"].includes(s)) a.sort((x,y) => (y[s] || 0) - (x[s] || 0));
        if (s === "cv") a.sort((x,y) => (x.cv || "").localeCompare(y.cv || "","ja"));
        if (s === "title") a.sort((x,y) => (x.title || "").localeCompare(y.title || "","ja"));
        collectionFilteredRecords = a;
        const pageSize = listMode ? COLLECTION_LIST_PAGE_SIZE : COLLECTION_GRID_PAGE_SIZE;
        const pageCount = Math.max(1, Math.ceil(a.length / pageSize));
        collectionPageIndex = Math.max(0, Math.min(collectionPageIndex, pageCount - 1));
        const visible = a.slice(collectionPageIndex * pageSize, (collectionPageIndex + 1) * pageSize);
        visibleCollectionRecords = visible;
        visibleCollectionCoverReferences = collectStoredImageReferences(visible.map((work) => work.cover));
        releaseUnusedCollectionCoverUrls();
        const placeholderCount = a.length > pageSize ? pageSize - visible.length : 0;
        const placeholderMarkup = "<article class=\"collection-record collection-record-placeholder\" aria-hidden=\"true\"><div class=\"collection-cover\"></div><div class=\"collection-meta\"><strong class=\"collection-list-title\">&nbsp;</strong><b class=\"collection-list-cv\">&nbsp;</b><div class=\"collection-list-bottom\"><small>&nbsp;</small></div><div class=\"collection-meta-row\"><b>&nbsp;</b><small>&nbsp;</small></div><i class=\"collection-tag-mini\">&nbsp;</i></div></article>".repeat(placeholderCount);
        grid.classList.toggle("list-mode", listMode);
        page.classList.toggle("collection-list-mode", listMode);
        grid.innerHTML = visible.length ? visible.map(r => {
          const selected = selectedCollectionIds.has(String(r.id));
          const batchAttributes = collectionBatchMode ? ` role="button" tabindex="0" aria-pressed="${selected}"` : "";
          const batchCheck = collectionBatchMode ? `<span class="collection-batch-check" aria-hidden="true"></span>` : "";
          return `<article class="collection-record${selected ? " is-selected" : ""}" data-id="${escapeCollectionText(r.id)}"${batchAttributes}><div class="collection-cover">${batchCheck}<span class="collection-cover-title">${escapeCollectionText(r.title || "")}</span></div><div class="collection-meta"><strong class="collection-list-title">${escapeCollectionText(r.title || COLLECTION_MISSING_TITLE_TEXT)}</strong><b class="collection-list-cv">${escapeCollectionText(r.cv || COLLECTION_MISSING_CV_TEXT)}</b><div class="collection-list-bottom"><small>${escapeCollectionText(r.rj || COLLECTION_MISSING_RJ_TEXT)}</small>${r.tags?.[0] ? `<i class="collection-tag-mini">${escapeCollectionText(r.tags[0])}</i>` : ""}</div><div class="collection-meta-row"><b>${escapeCollectionText(r.cv || COLLECTION_MISSING_CV_TEXT)}</b><small>${escapeCollectionText(r.rj || COLLECTION_MISSING_RJ_TEXT)}</small></div><i class="collection-tag-mini${r.tags?.[0] ? "" : " is-empty"}">${escapeCollectionText(r.tags?.[0] || COLLECTION_PLACEHOLDER_TEXT)}</i>${collectionMobileTagsMarkup(r.tags)}</div></article>`;
        }).join("") + placeholderMarkup : `<div class="collection-empty">${COLLECTION_EMPTY_RECORDS_TEXT}</div>`;
        void loadVisibleCollectionCovers(visible, renderToken);
        scheduleCollectionMobileTagFit();
        document.getElementById("collectionCount").textContent = a.length + " 条记录";
        const pager = document.getElementById("collectionPager");
        pager.hidden = a.length <= pageSize;
        collectionPageJump.hidden = pager.hidden;
        collectionPageJumpInput.max = String(pageCount);
        if (Number(collectionPageJumpInput.value) > pageCount) collectionPageJumpInput.value = "";
        collectionPageNumbers.innerHTML = collectionPaginationMarkup(pageCount, collectionPageIndex + 1, 2, "desktop") + collectionPaginationMarkup(pageCount, collectionPageIndex + 1, 1, "mobile");
        document.getElementById("collectionPrevPage").disabled = collectionPageIndex === 0;
        document.getElementById("collectionNextPage").disabled = collectionPageIndex >= pageCount - 1;
        renderCollectionBatchControls();
      }
      function renderCollectionTagManageDraft() {
        if (!collectionTagManageList || !collectionTagManageDraft) return;
        collectionTagManageList.innerHTML = collectionTagManageDraft.filter(item => !item.deleted).map(item => {
          const count = item.isNew ? 0 : records.filter(work => (work.tags || []).includes(item.original)).length;
          return `<div class="collection-tag-manage-row" data-original-tag="${escapeCollectionText(item.original)}"><input value="${escapeCollectionText(item.name)}" aria-label="${escapeCollectionText(item.name)}" ${item.isNew ? "" : "readonly"} /><span>${count}${COLLECTION_TAG_COUNT_SUFFIX}</span><button type="button" data-manage-tag-rename>${COLLECTION_RENAME_TAG_TEXT}</button><button type="button" data-manage-tag-delete>${COLLECTION_DELETE_TAG_TEXT}</button></div>`;
        }).join("") || `<p class="collection-tag-manage-empty">${COLLECTION_ALL_TAG_TEXT}</p>`;
      }
      function closeCollectionTagManage() {
        collectionTagManageDraft = null;
        if (collectionTagManageModal) collectionTagManageModal.hidden = true;
      }
      function openCollectionTagManage() {
        collectionTagManageDraft = collectionTagNames().map(name => ({ original: name, name, deleted: false }));
        renderCollectionTagManageDraft();
        collectionTagManageModal.hidden = false;
      }
      async function saveCollectionTagManage() {
        if (!collectionTagManageDraft) return;
        const active = collectionTagManageDraft.filter(item => !item.deleted && String(item.name || "").trim());
        const names = new Set();
        active.forEach(item => {
          const requested = String(item.name || "").trim();
          item.name = requested && !names.has(requested) ? requested : (item.isNew ? "" : item.original);
          if (item.name) names.add(item.name);
        });
        const deleted = new Set(collectionTagManageDraft.filter(item => item.deleted && !item.isNew).map(item => item.original));
        const renames = new Map(active.map(item => [item.original, item.name]));
        const now = Date.now();
        records = records.map(work => {
          const nextTags = Array.from(new Set((work.tags || []).filter(name => !deleted.has(name)).map(name => renames.get(name) || name)));
          const changed = nextTags.length !== (work.tags || []).length || nextTags.some((name, index) => name !== (work.tags || [])[index]);
          return changed ? { ...work, tags: nextTags, editedAt: now } : work;
        });
        customCollectionTags = Array.from(new Set(customCollectionTags.filter(name => !deleted.has(name)).map(name => renames.get(name) || name).concat(active.filter(item => item.isNew && item.name).map(item => item.name))));
        removedCollectionTags = Array.from(new Set(removedCollectionTags.filter(name => !Array.from(renames.values()).includes(name)).concat(Array.from(deleted))));
        if (deleted.has(tag)) tag = "all";
        else if (renames.has(tag)) tag = renames.get(tag);
        localStorage.setItem(COLLECTION_TAGS_KEY, JSON.stringify(customCollectionTags));
        localStorage.setItem(COLLECTION_REMOVED_TAGS_KEY, JSON.stringify(removedCollectionTags));
        await putWorks(records);
        closeCollectionTagManage();
        collectionPageIndex = 0;
        render();
      }
      function renderDetailChips(id, values) {
        const element = document.getElementById(id);
        const nextValues = (values || []).map(value => String(value || "").trim()).filter(Boolean);
        element.dataset.values = JSON.stringify(nextValues);
        element.innerHTML = nextValues.map(value => `<em><span contenteditable="true">${escapeCollectionText(value)}</span><button type="button" data-remove-detail-chip="${escapeCollectionText(value)}" aria-label="删除">×</button></em>`).join("");
      }
      function detailChipValues(id) {
        const element = document.getElementById(id);
        return Array.from(element.querySelectorAll("em > span")).map(span => span.textContent.trim()).filter(Boolean);
      }
      function addDetailChip(id, value) {
        renderDetailChips(id, detailChipValues(id).concat(value));
        const editors = document.getElementById(id).querySelectorAll("em > span");
        const editor = editors[editors.length - 1];
        if (!editor) return;
        editor.focus();
        selectEditableText(editor);
      }
      function detailText(id) { return document.getElementById(id).textContent.trim(); }
      function requestCollectionDetailSave() {
        return new Promise(resolve => {
          collectionSavePrompt.hidden = false;
          collectionSavePromptConfirm.focus();
          const finish = value => {
            collectionSavePrompt.hidden = true;
            collectionSavePromptCancel.onclick = null;
            collectionSavePromptConfirm.onclick = null;
            resolve(value);
          };
          collectionSavePromptCancel.onclick = () => finish(false);
          collectionSavePromptConfirm.onclick = () => finish(true);
        });
      }
      function requestCollectionRjImportMode() {
        return new Promise(resolve => {
          collectionRjImportPromptTitle.textContent = "按RJ号导入信息";
          collectionRjImportPromptBody.textContent = "";
          collectionRjImportPromptBody.append(
            document.createTextNode(String.fromCharCode(0x586b, 0x5145, 0x7a7a, 0x4f4d, 0xff1a, 0x53ea, 0x8865, 0x5145, 0x5f53, 0x524d, 0x4e3a, 0x7a7a, 0x7684, 0x4fe1, 0x606f, 0x3002)),
            document.createElement("br"),
            document.createTextNode(String.fromCharCode(0x8986, 0x76d6, 0x5168, 0x90e8, 0xff1a, 0x8986, 0x76d6, 0x5df2, 0x6709, 0x7684, 0x6807, 0x9898, 0x3001, 0x43, 0x56, 0x3001, 0x793e, 0x56e2, 0x3001, 0x53d1, 0x552e, 0x65e5, 0x671f, 0x3001, 0x4ef7, 0x683c, 0x3001, 0x6298, 0x6263, 0x3001, 0x4e2d, 0x6587, 0x72b6, 0x6001, 0x3001, 0x4f5c, 0x54c1, 0x5173, 0x952e, 0x8bcd, 0x548c, 0x20, 0x42, 0x4b, 0x3002, 0x5982, 0x679c, 0x83b7, 0x53d6, 0x5931, 0x8d25, 0x5219, 0x7ef4, 0x6301, 0x539f, 0x503c, 0x3002))
          );
          collectionRjImportOverwrite.hidden = false;
          collectionRjImportFill.hidden = false;
          collectionRjImportCancel.hidden = false;
          collectionRjImportDone.hidden = true;
          collectionRjImportPrompt.hidden = false;
          collectionRjImportOverwrite.focus();
          const finish = value => {
            collectionRjImportPrompt.hidden = true;
            collectionRjImportCancel.onclick = null;
            collectionRjImportFill.onclick = null;
            collectionRjImportOverwrite.onclick = null;
            resolve(value);
          };
          collectionRjImportCancel.onclick = () => finish(null);
          collectionRjImportFill.onclick = () => finish("fill");
          collectionRjImportOverwrite.onclick = () => finish("overwrite");
        });
      }
      function showCollectionRjImportLoading(total = 0) {
        collectionRjImportPromptTitle.textContent = "正在导入信息…";
        collectionRjImportPromptBody.textContent = "";
        if (total > 0) {
          const progress = document.createElement("div");
          progress.className = "collection-rj-import-progress";
          const text = document.createElement("p");
          text.className = "collection-rj-import-progress-text";
          text.id = "collectionRjImportProgressText";
          const track = document.createElement("div");
          track.className = "collection-rj-import-progress-track";
          track.id = "collectionRjImportProgressTrack";
          track.setAttribute("role", "progressbar");
          track.setAttribute("aria-valuemin", "0");
          track.setAttribute("aria-valuemax", String(total));
          track.setAttribute("aria-valuenow", "0");
          const fill = document.createElement("div");
          fill.className = "collection-rj-import-progress-fill";
          fill.id = "collectionRjImportProgressFill";
          track.appendChild(fill);
          progress.append(text, track);
          collectionRjImportPromptBody.appendChild(progress);
          updateCollectionRjImportProgress(0, total);
        }
        collectionRjImportOverwrite.hidden = true;
        collectionRjImportFill.hidden = true;
        collectionRjImportCancel.hidden = true;
        collectionRjImportDone.hidden = true;
        collectionRjImportPrompt.hidden = false;
      }
      function updateCollectionRjImportProgress(completed, total) {
        const text = document.getElementById("collectionRjImportProgressText");
        const track = document.getElementById("collectionRjImportProgressTrack");
        const fill = document.getElementById("collectionRjImportProgressFill");
        if (!text || !track || !fill || total <= 0) return;
        const current = Math.max(0, Math.min(total, completed));
        text.textContent = String.fromCharCode(0x5df2, 0x5b8c, 0x6210) + " " + current + " / " + total;
        track.setAttribute("aria-valuenow", String(current));
        fill.style.width = (current / total * 100) + "%";
      }
      function collectionImportFieldIssueText(fields) {
        return UI_IMPORT_MISSING_FIELDS + String.fromCharCode(0xff1a) + fields.join(String.fromCharCode(0x3001));
      }
      function showCollectionRjImportResult(message, failed = false, details = []) {
        collectionRjImportPromptTitle.textContent = failed ? "导入失败" : "已根据RJ号导入信息";
        collectionRjImportPromptBody.textContent = "";
        const summary = document.createElement("p");
        summary.style.margin = details.length ? "0 0 6px" : "0";
        summary.textContent = message;
        collectionRjImportPromptBody.appendChild(summary);
        details.forEach(detail => {
          const line = document.createElement("p");
          line.style.margin = "2px 0";
          line.style.color = "var(--rose-deep)";
          line.textContent = detail.rj + String.fromCharCode(0xff1a) + detail.reason;
          collectionRjImportPromptBody.appendChild(line);
        });
        if (details.length) {
          const note = document.createElement("p");
          note.style.margin = "8px 0 0";
          note.textContent = UI_IMPORT_UNCHANGED_MANUAL;
          collectionRjImportPromptBody.appendChild(note);
        }
        collectionRjImportDone.hidden = false;
        collectionRjImportPrompt.hidden = false;
      }
      collectionRjImportDone.onclick = () => { collectionRjImportPrompt.hidden = true; };
      collectionRjImportPrompt.addEventListener("click", event => {
        if (event.target === collectionRjImportPrompt && !collectionRjImportDone.hidden) collectionRjImportPrompt.hidden = true;
      });
      const collectionDetailTextIds = [
        "collectionDetailTitle",
        "collectionDetailCn",
        "collectionDetailCv",
        "collectionDetailCircle",
        "collectionDetailRj",
        "collectionDetailTime",
        "collectionDetailScenarioWriter",
        "collectionDetailIllustrator",
        "collectionDetailPurchaseDate",
        "collectionDetailListenedDate",
        "collectionDetailReleaseDate",
        "collectionDetailOriginalPrice",
        "collectionDetailCurrentPrice",
        "collectionDetailCurrentDiscount",
        "collectionDetailLowestDiscount",
        "collectionDetailRating",
        "collectionDetailCvRating",
        "collectionDetailStoryRating",
        "collectionDetailSeRating",
        "collectionDetailSummary",
        "collectionDetailCharacter",
        "collectionDetailReview"
      ];
      const collectionDetailRatingFields = [
        ["collectionDetailRating", "collectionDetailRatingStars", "rating"],
        ["collectionDetailCvRating", "collectionDetailCvRatingStars", "cvRating"],
        ["collectionDetailStoryRating", "collectionDetailStoryRatingStars", "storyRating"],
        ["collectionDetailSeRating", "collectionDetailSeRatingStars", "seRating"]
      ];
      function collectionDetailNumberText(value, prefix = "", suffix = "") {
        return value === "" || value == null ? "" : prefix + value + suffix;
      }
      function collectionRatingStars(value) {
        if (value === "" || value == null || !Number.isFinite(Number(value))) return "\u2014";
        const rating = Math.max(0, Math.min(5, Math.round(Number(value))));
        return rating ? "\u2605".repeat(rating) + "\u2606".repeat(5 - rating) : "\u2014";
      }
      function renderCollectionDetailRatings(work) {
        collectionDetailRatingFields.forEach(([valueId, starsId, key]) => {
          const value = work?.[key];
          document.getElementById(valueId).textContent = value === "" || value == null ? "" : Number(value).toFixed(1);
          document.getElementById(starsId).textContent = collectionRatingStars(value);
        });
      }
      collectionDetailRatingFields.forEach(([valueId, starsId]) => {
        document.getElementById(valueId).addEventListener("input", () => {
          document.getElementById(starsId).textContent = collectionRatingStars(detailText(valueId));
        });
      });
      let collectionDetailCoverLoadToken = 0;
      async function setCollectionDetailCoverValue(value, fit) {
        const source = String(value || "");
        const loadToken = ++collectionDetailCoverLoadToken;
        collectionDetailStoredCoverValue = source;
        releaseUnusedCollectionCoverUrls();
        collectionDetailArt.dataset.coverStoredSrc = source;
        if (!source.startsWith(STATE_IMAGE_REFERENCE_PREFIX)) {
          setCollectionDetailCover(source, fit);
          return;
        }
        setCollectionDetailCover("", fit);
        collectionDetailArt.dataset.coverStoredSrc = source;
        try {
          const url = await collectionCoverDisplayUrl(source);
          if (loadToken !== collectionDetailCoverLoadToken || collectionDetailArt.dataset.coverStoredSrc !== source) return;
          setCollectionDetailCover(url, fit);
          collectionDetailArt.dataset.coverStoredSrc = source;
        } catch (error) {
          console.warn("Collection detail cover load failed", error);
        }
      }
      function collectionDetailSnapshot() {
        const art = document.getElementById("collectionDetailArt");
        return JSON.stringify({ text:collectionDetailTextIds.map(detailText), keywords:detailChipValues("collectionDetailKeywords"), tags:detailChipValues("collectionDetailLibraryTags"), cover:art?.dataset.coverStoredSrc || "", coverFit:art?.dataset.coverFit || "contain" });
      }
      function openDetail(id) {
        const r = records.find(x => String(x.id) === String(id));
        if (!r) return;
        activeCollectionRecordId = r.id;
        document.getElementById("collectionDeleteRecordButton").hidden = false;
        localStorage.setItem(COLLECTION_DETAIL_KEY, String(r.id));
        scrollY = collectionScroller ? collectionScroller.scrollTop : window.scrollY;
        document.getElementById("collectionDetailTitle").textContent = r.title || "";
        document.getElementById("collectionDetailCn").textContent = r.cn || "";
        ["Cv","Circle","Rj","Time","ScenarioWriter","Illustrator","PurchaseDate","ListenedDate","ReleaseDate"].forEach((key,index) => { document.getElementById("collectionDetail" + key).textContent = [r.cv,r.circle,r.rj,r.time,r.scenarioWriter,r.illustrator,r.purchaseDate,r.listenedDate,r.releaseDate][index] || ""; });
        document.getElementById("collectionDetailOriginalPrice").textContent = collectionDetailNumberText(r.originalPrice, "¥");
        document.getElementById("collectionDetailCurrentPrice").textContent = collectionDetailNumberText(r.price, "¥");
        document.getElementById("collectionDetailCurrentDiscount").textContent = collectionDetailNumberText(r.currentDiscount, "", "%off");
        document.getElementById("collectionDetailLowestDiscount").textContent = collectionDetailNumberText(r.lowestPrice, "", "%off");
        document.getElementById("collectionDetailSummary").textContent = r.summary || "";
        document.getElementById("collectionDetailCharacter").textContent = r.character || "";
        document.getElementById("collectionDetailReview").textContent = r.review || "";
        renderDetailChips("collectionDetailKeywords", String(r.keywords || "").split(" / ").filter(Boolean));
        renderDetailChips("collectionDetailLibraryTags", r.tags || []);
        renderCollectionDetailRatings(r);
        void setCollectionDetailCoverValue(r.cover || "", r.coverFit || "contain");
        collectionDetailInitialSnapshot = collectionDetailSnapshot();
        page.hidden = true;
        if (collectionDetailPage) collectionDetailPage.hidden = false;
        if (workspaceTitle) workspaceTitle.textContent = "作品档案";
        if (collectionScroller) collectionScroller.scrollTo({ top:0, behavior:"instant" });
        else window.scrollTo(0,0);
      }
      function openNewDetail() {
        activeCollectionRecordId = null;
        document.getElementById("collectionDeleteRecordButton").hidden = true;
        localStorage.removeItem(COLLECTION_DETAIL_KEY);
        scrollY = collectionScroller ? collectionScroller.scrollTop : window.scrollY;
        collectionDetailTextIds.forEach(id => { document.getElementById(id).textContent = ""; });
        renderDetailChips("collectionDetailKeywords", []);
        renderDetailChips("collectionDetailLibraryTags", []);
        renderCollectionDetailRatings(null);
        void setCollectionDetailCoverValue("", "contain");
        collectionDetailInitialSnapshot = collectionDetailSnapshot();
        page.hidden = true;
        if (collectionDetailPage) collectionDetailPage.hidden = false;
        if (workspaceTitle) workspaceTitle.textContent = "作品档案";
        if (collectionScroller) collectionScroller.scrollTo({ top:0, behavior:"instant" });
        else window.scrollTo(0,0);
      }
      grid.addEventListener("click", event => {
        const record = event.target.closest(".collection-record");
        if (!record || !grid.contains(record)) return;
        if (collectionBatchMode) {
          toggleCollectionBatchSelection(record.dataset.id);
          return;
        }
        openDetail(record.dataset.id);
      });
      grid.addEventListener("keydown", event => {
        if (!collectionBatchMode || !["Enter", " "].includes(event.key)) return;
        const record = event.target.closest(".collection-record");
        if (!record || !grid.contains(record)) return;
        event.preventDefault();
        toggleCollectionBatchSelection(record.dataset.id);
      });
      collectionBatchManageButton.onclick = async () => {
        if (collectionBatchMode) {
          setCollectionBatchMode(false);
          return;
        }
        if (collectionTagEditMode || collectionTagDraftActive) {
          await showAppAlert(COLLECTION_BATCH_TEXT.finishTagEdit);
          return;
        }
        collectionTagRemoveMode = false;
        document.getElementById("collectionRemoveTagButton").setAttribute("aria-pressed", "false");
        setCollectionBatchMode(true);
      };
      collectionMobileBatchExitButton.onclick = () => setCollectionBatchMode(false);
      collectionBatchClear.onclick = () => {
        selectedCollectionIds.clear();
        render();
      };
      collectionBatchSelectPage.onclick = () => {
        const allSelected = visibleCollectionRecords.length > 0 && visibleCollectionRecords.every(work => selectedCollectionIds.has(String(work.id)));
        visibleCollectionRecords.forEach(work => {
          const id = String(work.id);
          if (allSelected) selectedCollectionIds.delete(id);
          else selectedCollectionIds.add(id);
        });
        render();
      };
      collectionBatchSelectResults.onclick = () => {
        const allSelected = collectionFilteredRecords.length > 0 && collectionFilteredRecords.every(work => selectedCollectionIds.has(String(work.id)));
        collectionFilteredRecords.forEach(work => {
          const id = String(work.id);
          if (allSelected) selectedCollectionIds.delete(id);
          else selectedCollectionIds.add(id);
        });
        render();
      };
      collectionMobileBatchSelectPage.onclick = () => collectionBatchSelectPage.click();
      collectionMobileBatchSelectResults.onclick = () => collectionBatchSelectResults.click();
      collectionMobileBatchClear.onclick = () => collectionBatchClear.click();
      collectionBatchAddTags.onclick = () => openCollectionBatchTagModal("add");
      collectionBatchRemoveTags.onclick = () => openCollectionBatchTagModal("remove");
      collectionBatchDelete.onclick = () => void deleteSelectedCollectionWorks();
      collectionMobileBatchAddTags.onclick = () => collectionBatchAddTags.click();
      collectionMobileBatchRemoveTags.onclick = () => collectionBatchRemoveTags.click();
      collectionMobileBatchDelete.onclick = () => collectionBatchDelete.click();
      collectionBatchTagSearch.oninput = renderCollectionBatchTagList;
      collectionBatchTagList.onchange = event => {
        const input = event.target.closest("[data-collection-batch-tag]");
        if (!input) return;
        const name = input.dataset.collectionBatchTag;
        if (input.checked) collectionBatchTagSelection.add(name);
        else collectionBatchTagSelection.delete(name);
        collectionBatchTagConfirm.disabled = collectionBatchTagSelection.size === 0 || collectionBatchOperationPending;
      };
      collectionBatchNewTagAdd.onclick = () => void addCollectionBatchNewTag();
      collectionBatchNewTagInput.onkeydown = event => {
        if (event.key !== "Enter") return;
        event.preventDefault();
        void addCollectionBatchNewTag();
      };
      collectionBatchTagCancel.onclick = closeCollectionBatchTagModal;
      collectionBatchTagConfirm.onclick = () => void applyCollectionBatchTags();
      collectionBatchTagModal.onclick = event => {
        if (event.target === collectionBatchTagModal) closeCollectionBatchTagModal();
      };
      collectionSearchInput.oninput = () => { collectionPageIndex = 0; render(); };
      collectionSort.onchange = () => {
        if (collectionMobileSort) collectionMobileSort.value = collectionSort.value;
        collectionPageIndex = 0;
        render();
      };
      collectionMobileSort?.addEventListener("change", () => {
        collectionSort.value = collectionMobileSort.value;
        collectionPageIndex = 0;
        render();
      });
      collectionMobileTagSelect?.addEventListener("change", () => {
        tag = collectionMobileTagSelect.value || "all";
        collectionPageIndex = 0;
        render();
      });
      collectionManageTagsButton?.addEventListener("click", openCollectionTagManage);
      collectionTagManageAdd?.addEventListener("click", () => {
        if (!collectionTagManageDraft) return;
        const original = "new-" + Date.now() + "-" + Math.random().toString(36).slice(2);
        collectionTagManageDraft.unshift({ original, name: "", deleted: false, isNew: true });
        renderCollectionTagManageDraft();
        const input = collectionTagManageList?.querySelector(".collection-tag-manage-row input");
        input?.focus();
      });
      collectionTagManageList?.addEventListener("click", event => {
        const row = event.target.closest(".collection-tag-manage-row");
        if (!row || !collectionTagManageDraft) return;
        const item = collectionTagManageDraft.find(entry => entry.original === row.dataset.originalTag);
        if (!item) return;
        const input = row.querySelector("input");
        if (event.target.closest("[data-manage-tag-rename]")) {
          input.readOnly = false;
          input.focus();
          input.select();
          return;
        }
        if (event.target.closest("[data-manage-tag-delete]")) {
          item.deleted = true;
          renderCollectionTagManageDraft();
        }
      });
      collectionTagManageList?.addEventListener("input", event => {
        const input = event.target.closest(".collection-tag-manage-row input");
        if (!input || !collectionTagManageDraft) return;
        const item = collectionTagManageDraft.find(entry => entry.original === input.closest(".collection-tag-manage-row")?.dataset.originalTag);
        if (item) item.name = input.value;
      });
      collectionTagManageCancel?.addEventListener("click", closeCollectionTagManage);
      collectionTagManageDone?.addEventListener("click", () => { void saveCollectionTagManage(); });
      collectionTagManageModal?.addEventListener("click", event => {
        if (event.target === collectionTagManageModal) closeCollectionTagManage();
      });
      document.getElementById("collectionTagLinks").onclick = async event => {
        const finishButton = event.target.closest("[data-finish-collection-tag]");
        if (finishButton) {
          const draft = document.querySelector(".collection-tag-draft-name");
          const name = String(draft?.textContent || "").trim();
          const exists = name === "全部" || collectionTagNames().includes(name);
          collectionTagDraftActive = false;
          if (name && !exists) {
            customCollectionTags.push(name);
            localStorage.setItem(COLLECTION_TAGS_KEY, JSON.stringify(customCollectionTags));
            tag = name;
            collectionPageIndex = 0;
          }
          render();
          return;
        }
        const removeButton = event.target.closest("[data-remove-collection-tag]");
        if (removeButton) {
          const name = removeButton.dataset.removeCollectionTag;
          if (!name || name === "all" || name === "全部") return;
          const now = Date.now();
          const affected = records.filter(work => (work.tags || []).includes(name));
          records = records.map(work => ({ ...work, tags:(work.tags || []).filter(item => item !== name), editedAt:affected.includes(work) ? now : work.editedAt }));
          customCollectionTags = customCollectionTags.filter(item => item !== name);
          if (!defaultCollectionTags.includes(name)) removedCollectionTags = removedCollectionTags.filter(item => item !== name);
          else if (!removedCollectionTags.includes(name)) removedCollectionTags.push(name);
          localStorage.setItem(COLLECTION_TAGS_KEY, JSON.stringify(customCollectionTags));
          localStorage.setItem(COLLECTION_REMOVED_TAGS_KEY, JSON.stringify(removedCollectionTags));
          await putWorks(records);
          if (tag === name) tag = "all";
          collectionPageIndex = 0;
          render();
          return;
        }
        const button = event.target.closest("[data-collection-tag]");
        if (!button) return;
        tag = button.dataset.collectionTag;
        collectionPageIndex = 0;
        render();
      };
      document.getElementById("collectionAddTagButton").onclick = () => {
        if (!collectionTagDraftActive) {
          collectionTagDraftActive = true;
          renderCollectionTags();
        }
        const draft = document.querySelector(".collection-tag-draft-name");
        if (draft) {
          draft.focus();
          focusTagText(draft);
        }
      };
      document.getElementById("collectionEditTagButton").onclick = async event => {
        if (!collectionTagEditMode) {
          collectionTagEditMode = true;
          collectionTagRemoveMode = false;
          document.getElementById("collectionRemoveTagButton").setAttribute("aria-pressed", "false");
          event.currentTarget.setAttribute("aria-pressed", "true");
          renderCollectionTags();
          document.querySelector("[data-original-collection-tag]")?.focus();
          return;
        }
        const used = new Set(["全部"]);
        const renames = new Map();
        document.querySelectorAll("[data-original-collection-tag]").forEach(element => {
          const original = element.dataset.originalCollectionTag;
          const requested = String(element.textContent || "").trim();
          const next = requested && !used.has(requested) ? requested : original;
          used.add(next);
          renames.set(original, next);
        });
        const now = Date.now();
        records = records.map(work => {
          const nextTags = (work.tags || []).map(name => renames.get(name) || name);
          const changed = nextTags.some((name,index) => name !== (work.tags || [])[index]);
          return changed ? { ...work, tags:Array.from(new Set(nextTags)), editedAt:now } : work;
        });
        customCollectionTags = Array.from(new Set(customCollectionTags.map(name => renames.get(name) || name)));
        if (renames.has(tag)) tag = renames.get(tag);
        localStorage.setItem(COLLECTION_TAGS_KEY, JSON.stringify(customCollectionTags));
        await putWorks(records);
        collectionTagEditMode = false;
        event.currentTarget.setAttribute("aria-pressed", "false");
        render();
      };
      document.getElementById("collectionRemoveTagButton").onclick = event => {
        collectionTagRemoveMode = !collectionTagRemoveMode;
        collectionTagEditMode = false;
        document.getElementById("collectionEditTagButton").setAttribute("aria-pressed", "false");
        event.currentTarget.setAttribute("aria-pressed", String(collectionTagRemoveMode));
        renderCollectionTags();
      };
      function setCollectionListMode(nextListMode) {
        listMode = nextListMode;
        document.getElementById("collectionGridBtn").classList.toggle("active", !listMode);
        document.getElementById("collectionListBtn").classList.toggle("active", listMode);
        collectionMobileGridBtn?.classList.toggle("active", !listMode);
        collectionMobileListBtn?.classList.toggle("active", listMode);
        collectionPageIndex = 0;
        render();
      }
      document.getElementById("collectionGridBtn").onclick = () => setCollectionListMode(false);
      document.getElementById("collectionListBtn").onclick = () => setCollectionListMode(true);
      collectionMobileGridBtn?.addEventListener("click", () => setCollectionListMode(false));
      collectionMobileListBtn?.addEventListener("click", () => setCollectionListMode(true));
      function returnToCollectionList() {
        localStorage.removeItem(COLLECTION_DETAIL_KEY);
        collectionDetailCoverLoadToken += 1;
        collectionDetailStoredCoverValue = "";
        if (collectionDetailPage) collectionDetailPage.hidden = true;
        page.hidden = false;
        if (workspaceTitle) workspaceTitle.textContent = PAGE_TITLES.collection;
        render();
        requestAnimationFrame(() => { if (collectionScroller) collectionScroller.scrollTo({ top:scrollY, behavior:"instant" }); else window.scrollTo(0,scrollY); });
      }
      ["collectionDetailKeywords","collectionDetailLibraryTags"].forEach(id => {
        const element = document.getElementById(id);
        element.onclick = event => {
          const button = event.target.closest("[data-remove-detail-chip]");
          if (!button) return;
          button.closest("em")?.remove();
        };
        element.onkeydown = event => {
          if (event.key !== "Enter" || !event.target.matches("em > span")) return;
          event.preventDefault();
          event.target.blur();
        };
        element.addEventListener("focusout", event => {
          if (!event.target.matches("em > span") || event.target.textContent.trim()) return;
          event.target.closest("em")?.remove();
        });
      });
      document.getElementById("collectionDetailAddKeyword").onclick = () => addDetailChip("collectionDetailKeywords", COLLECTION_NEW_KEYWORD_TEXT);
      document.getElementById("collectionDetailAddTag").onclick = () => addDetailChip("collectionDetailLibraryTags", COLLECTION_NEW_TAG_TEXT);
      const collectionDetailArt = document.getElementById("collectionDetailArt");
      const collectionDetailCoverInput = document.getElementById("collectionDetailCoverInput");
      collectionDetailArt.onclick = () => collectionDetailCoverInput.click();
      collectionDetailCoverInput.onchange = () => {
        const file = collectionDetailCoverInput.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const src = await grid9CoverStorageDataUrl(await rasterizeImageToPngDataUrl(reader.result), true);
            await setCollectionDetailCoverValue(src, collectionDetailArt.dataset.coverFit || "contain");
          } catch (error) {
            console.error("Collection detail cover upload failed", error);
            showAppAlert("图片处理失败，请重新选择图片。");
          } finally {
            collectionDetailCoverInput.value = "";
          }
        };
        reader.readAsDataURL(file);
      };
      document.getElementById("collectionDetailContainButton").onclick = () => void setCollectionDetailCoverValue(collectionDetailArt.dataset.coverStoredSrc || "", "contain");
      document.getElementById("collectionDetailCoverButton").onclick = () => void setCollectionDetailCoverValue(collectionDetailArt.dataset.coverStoredSrc || "", "cover");
      document.getElementById("collectionDetailImageEditButton").onclick = () => void openImageEditorSafely(() => openCollectionDetailImageEditor());
      document.getElementById("collectionDetailRemoveCoverButton").onclick = () => void setCollectionDetailCoverValue("", collectionDetailArt.dataset.coverFit || "contain");
      document.getElementById("collectionDetailOpenDlsiteButton").onclick = () => {
        const workno = normalizeWorkno(detailText("collectionDetailRj"));
        if (!workno) {
          showAppAlert(String.fromCharCode(0x8bf7, 0x5148, 0x586b, 0x5199, 0x6709, 0x6548, 0x7684, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x3002));
          return;
        }
        window.open("https://www.dlsite.com/girls/work/=/product_id/" + encodeURIComponent(workno) + ".html", "_blank", "noopener,noreferrer");
        trackFixedUsageEvent("feature-open-dlsite");
      };
      async function importCollectionDetailByRj() {
        const button = document.getElementById("collectionDetailImportButton");
        const workno = normalizeWorkno(detailText("collectionDetailRj"));
        if (!workno) {
          showAppAlert(String.fromCharCode(0x8bf7, 0x5148, 0x586b, 0x5199, 0x6709, 0x6548, 0x7684, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x3002));
          return;
        }
        const current = {
          title: detailText("collectionDetailTitle"),
          cv: detailText("collectionDetailCv"),
          circle: detailText("collectionDetailCircle"),
          scenarioWriter: detailText("collectionDetailScenarioWriter"),
          illustrator: detailText("collectionDetailIllustrator"),
          releaseDate: detailText("collectionDetailReleaseDate"),
          originalPrice: detailText("collectionDetailOriginalPrice"),
          currentPrice: detailText("collectionDetailCurrentPrice"),
          currentDiscount: detailText("collectionDetailCurrentDiscount"),
          lowestDiscount: detailText("collectionDetailLowestDiscount"),
          chinese: detailText("collectionDetailCn"),
          keywords: detailChipValues("collectionDetailKeywords"),
          cover: collectionDetailArt.dataset.coverSrc || ""
        };
        const isEmpty = value => Array.isArray(value) ? !value.length : value == null || String(value).trim() === "";
        const mode = Object.values(current).every(isEmpty) ? "overwrite" : await requestCollectionRjImportMode();
        if (!mode) return;
        const canWrite = value => mode === "overwrite" || isEmpty(value);
        const targets = {
          title: canWrite(current.title),
          cv: canWrite(current.cv),
          circle: canWrite(current.circle),
          scenarioWriter: canWrite(current.scenarioWriter),
          illustrator: canWrite(current.illustrator),
          releaseDate: canWrite(current.releaseDate),
          originalPrice: canWrite(current.originalPrice),
          currentPrice: canWrite(current.currentPrice),
          currentDiscount: canWrite(current.currentDiscount),
          lowestDiscount: canWrite(current.lowestDiscount),
          chinese: canWrite(current.chinese),
          keywords: canWrite(current.keywords),
          cover: canWrite(current.cover)
        };
        showCollectionRjImportLoading();
        button.disabled = true;
        button.setAttribute("aria-busy", "true");
        try {
          let lowestDiscountError = null;
          const lowestDiscountPromise = targets.lowestDiscount
            ? fetchDlwatcherLowestDiscount(workno).catch(error => {
              lowestDiscountError = error;
              console.warn("Collection detail RJ lowest discount import failed", workno, error);
              return "";
            })
            : Promise.resolve("");
          const product = parseDlsiteProduct(await fetchProductJson(workno));
          if (!product || (!product.title && !product.cv && !product.circle && !product.releaseDate && !product.originalPrice && !product.currentPrice && !product.coverUrl && !product.keywords?.length)) throw new Error("empty product");
          product.lowestDiscount = await lowestDiscountPromise;
          let chineseChoice = "";
          let chineseChoiceError = null;
          if (targets.chinese) {
            if (product.hasChineseVersion || product.chineseEditionWorkno) {
              chineseChoice = CHOICE_SUBTITLE;
            } else {
              try {
                const translatable = parseTranslatableChinese(await fetchTranslatableProducts(workno), workno);
                chineseChoice = translatable?.hasChinese ? CHOICE_SUBTITLE : CHOICE_NONE;
              } catch (error) {
                chineseChoiceError = error;
                console.warn("Collection detail RJ Chinese edition import failed", workno, error);
              }
            }
          }
          let importedField = false;
          const missingFields = [];
          const importText = (target, value, id, label) => {
            if (!target) return;
            if (value !== "" && value != null) {
              document.getElementById(id).textContent = value;
              importedField = true;
            } else missingFields.push(unavailableImportField(label));
          };
          const importOptionalText = (target, value, id) => {
            if (!target || value === "" || value == null) return;
            document.getElementById(id).textContent = value;
            importedField = true;
          };
          importText(targets.title, product.title, "collectionDetailTitle", String.fromCharCode(0x6807, 0x9898));
          importText(targets.cv, product.cv, "collectionDetailCv", "CV");
          importText(targets.circle, product.circle, "collectionDetailCircle", String.fromCharCode(0x793e, 0x56e2));
          importOptionalText(targets.scenarioWriter, product.scenarioWriter, "collectionDetailScenarioWriter");
          importOptionalText(targets.illustrator, product.illustrator, "collectionDetailIllustrator");
          importText(targets.releaseDate, product.releaseDate, "collectionDetailReleaseDate", String.fromCharCode(0x53d1, 0x552e, 0x65e5, 0x671f));
          importText(targets.originalPrice, product.originalPrice === "" ? "" : collectionDetailNumberText(product.originalPrice, "¥"), "collectionDetailOriginalPrice", String.fromCharCode(0x539f, 0x4ef7));
          importText(targets.currentPrice, product.currentPrice === "" ? "" : collectionDetailNumberText(product.currentPrice, "¥"), "collectionDetailCurrentPrice", String.fromCharCode(0x73b0, 0x4ef7));
          importText(targets.currentDiscount, product.currentDiscount === "" ? "" : collectionDetailNumberText(product.currentDiscount, "", "%off"), "collectionDetailCurrentDiscount", String.fromCharCode(0x73b0, 0x6298, 0x6263));
          if (targets.lowestDiscount) {
            if (product.lowestDiscount !== "") {
              document.getElementById("collectionDetailLowestDiscount").textContent = collectionDetailNumberText(product.lowestDiscount, "", "%off");
              importedField = true;
            } else if (lowestDiscountError) {
              missingFields.push(unavailableImportField(String.fromCharCode(0x53f2, 0x4f4e, 0x6298, 0x6263), fullImportFailureReason(lowestDiscountError, "lowest")));
            } else missingFields.push(unavailableImportField(String.fromCharCode(0x53f2, 0x4f4e, 0x6298, 0x6263)));
          }
          if (targets.chinese) {
            if (chineseChoice) {
              document.getElementById("collectionDetailCn").textContent = chineseChoice;
              importedField = true;
            } else if (chineseChoiceError) {
              missingFields.push(unavailableImportField(String.fromCharCode(0x4e2d, 0x6587, 0x72b6, 0x6001), fullImportFailureReason(chineseChoiceError, "translatable")));
            } else missingFields.push(unavailableImportField(String.fromCharCode(0x4e2d, 0x6587, 0x72b6, 0x6001)));
          }
          if (targets.keywords) {
            if (Array.isArray(product.keywords) && product.keywords.length) {
              renderDetailChips("collectionDetailKeywords", product.keywords.slice(0, 8));
              importedField = true;
            } else missingFields.push(unavailableImportField(String.fromCharCode(0x4f5c, 0x54c1, 0x5173, 0x952e, 0x8bcd)));
          }
          if (targets.cover) {
            if (product.coverUrl) {
              try {
                await setCollectionDetailCoverValue(await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(product.coverUrl), true, rebuildableRemoteCoverOptions(product.coverUrl, 480, true, workno)), "cover");
                importedField = true;
              } catch (coverError) {
                missingFields.push(unavailableImportField("BK", UI_IMPORT_IMAGE_FAILED));
                console.warn("Collection detail RJ cover import failed", workno, coverError);
              }
            } else missingFields.push(unavailableImportField("BK"));
          }
          if (!importedField) {
            showCollectionRjImportResult(UI_IMPORT_DLSITE_NO_DATA, true, missingFields.length ? [{ rj:workno, reason:collectionImportFieldIssueText(missingFields) }] : []);
            return;
          }
          const message = missingFields.length
            ? String.fromCharCode(0x5df2, 0x5bfc, 0x5165, 0xff0c, 0x90e8, 0x5206, 0x4fe1, 0x606f, 0x672a, 0x80fd, 0x83b7, 0x53d6, 0x3002)
            : String.fromCharCode(0x5df2, 0x5bfc, 0x5165, 0x8fd9, 0x90e8, 0x4f5c, 0x54c1, 0x7684, 0x4fe1, 0x606f, 0x3002);
          showCollectionRjImportResult(message, false, missingFields.length ? [{ rj:workno, reason:collectionImportFieldIssueText(missingFields) }] : []);
        } catch (error) {
          console.error("Collection detail RJ import failed", error);
          showCollectionRjImportResult(String.fromCharCode(0x5bfc, 0x5165, 0x5931, 0x8d25, 0x3002), true, [{ rj:workno, reason:grid9FailureReason(error) }]);
        } finally {
          button.disabled = false;
          button.removeAttribute("aria-busy");
        }
      }
      document.getElementById("collectionDetailImportButton").onclick = () => void importCollectionDetailByRj();
      async function saveCollectionDetail(showSuccessMessage = true) {
        const work = records.find(item => String(item.id) === String(activeCollectionRecordId));
        const nextRj = normalizeWorkno(detailText("collectionDetailRj"));
        const duplicate = nextRj && records.some(item => item !== work && item.rj === nextRj);
        if (duplicate) { showAppAlert("这个 RJ 号已经存在，不能保存为重复档案。"); return; }
        const numericText = id => detailText(id).replace(/^¥\s*/, "").replace(/\s*%off$/i, "").trim();
        const optionalNumber = value => value === "" ? "" : Number(value);
        const now = Date.now();
        const nextWork = { ...(work || { id:nextRj || "collection-" + now, addedAt:now, cover:"", originalPrice:"", price:"", currentDiscount:"", lowestPrice:"" }), id:nextRj || work?.id || "collection-" + now, rj:nextRj, title:detailText("collectionDetailTitle"), cn:detailText("collectionDetailCn"), cv:detailText("collectionDetailCv"), circle:detailText("collectionDetailCircle"), time:detailText("collectionDetailTime"), scenarioWriter:detailText("collectionDetailScenarioWriter"), illustrator:detailText("collectionDetailIllustrator"), purchaseDate:normalizeCardDateValue(detailText("collectionDetailPurchaseDate")), listenedDate:normalizeCardDateValue(detailText("collectionDetailListenedDate")), releaseDate:normalizeCardDateValue(detailText("collectionDetailReleaseDate")), originalPrice:optionalNumber(numericText("collectionDetailOriginalPrice")), price:optionalNumber(numericText("collectionDetailCurrentPrice")), currentDiscount:optionalNumber(numericText("collectionDetailCurrentDiscount")), lowestPrice:optionalNumber(numericText("collectionDetailLowestDiscount")), rating:optionalNumber(numericText("collectionDetailRating")), cvRating:optionalNumber(numericText("collectionDetailCvRating")), storyRating:optionalNumber(numericText("collectionDetailStoryRating")), seRating:optionalNumber(numericText("collectionDetailSeRating")), summary:detailText("collectionDetailSummary"), character:detailText("collectionDetailCharacter"), review:detailText("collectionDetailReview"), keywords:detailChipValues("collectionDetailKeywords").join(" / "), tags:detailChipValues("collectionDetailLibraryTags"), cover:collectionDetailArt.dataset.coverStoredSrc || "", coverFit:collectionDetailArt.dataset.coverFit || "contain", editedAt:now };
        try {
          if (work && nextWork.id !== work.id) await deleteWork(work.id);
          await putWorks([nextWork]);
          records = records.filter(item => item !== work && item.id !== nextWork.id).concat(nextWork);
          activeCollectionRecordId = nextWork.id;
          render();
          openDetail(nextWork.id);
          if (showSuccessMessage) showAppAlert("档案已保存");
          return true;
        } catch (error) {
          console.error("Save collection detail failed", error);
          showAppAlert("档案保存失败，请稍后重试。");
          return false;
        }
      }
      confirmCollectionDetailLeave = async () => {
        if (collectionDetailSnapshot() !== collectionDetailInitialSnapshot) {
          const shouldSave = await requestCollectionDetailSave();
          if (shouldSave && !await saveCollectionDetail(false)) return false;
        }
        localStorage.removeItem(COLLECTION_DETAIL_KEY);
        return true;
      };
      document.getElementById("collectionBack").onclick = async () => {
        if (!await confirmCollectionDetailLeave()) return;
        returnToCollectionList();
      };
      document.getElementById("collectionDetailSaveButton").onclick = () => saveCollectionDetail(true);
      document.getElementById("collectionDeleteRecordButton").onclick = async () => {
        const work = records.find(item => String(item.id) === String(activeCollectionRecordId));
        if (!work || !await showAppConfirm("确定永久删除这条收藏记录吗？此操作无法撤销。")) return;
        try {
          await deleteWork(work.id);
          records = records.filter(item => item !== work);
          activeCollectionRecordId = null;
          render();
          returnToCollectionList();
        } catch (error) {
          console.error("Delete collection record failed", error);
          showAppAlert("删除条目失败，请稍后重试。");
        }
      };
      document.getElementById("collectionEditRecordButton").onclick = async () => {
        if (!await confirmCollectionDetailLeave()) return;
        const work = records.find(item => String(item.id) === String(activeCollectionRecordId));
        if (!work) return;
        const state = collectState();
        const hasCurrentFullInformation = Boolean(
          [state.recordTitle, state.cvText, state.circleText, state.rjText, state.durationText, state.purchaseDate, state.listenedDate, state.originalPrice, state.currentPrice, state.currentDiscount, state.lowestPrice, state.reviewText]
            .some(value => String(value ?? "").trim()) ||
          (state.cnChoice && state.cnChoice !== CHOICE_SUBTITLE) ||
          (state.ratings || []).some(value => Number(value) !== 4) ||
          (state.tags || []).some(value => String(value || "").trim()) ||
          state.coverSrc || state.coverOriginalSrc || state.coverEditedSrc ||
          (state.coverStickers || []).length
        );
        if (hasCurrentFullInformation && !await showAppConfirm(String.fromCharCode(0x5f53, 0x524d, 0x5b8c, 0x6574, 0x7248, 0x5df2, 0x6709, 0x4fe1, 0x606f, 0xff0c, 0x5236, 0x4f5c, 0x20, 0x72, 0x65, 0x70, 0x6f, 0x20, 0x4f1a, 0x8986, 0x76d6, 0x73b0, 0x6709, 0x5185, 0x5bb9, 0x3002, 0x786e, 0x5b9a, 0x7ee7, 0x7eed, 0x5417, 0xff1f))) return;
        const ratings = [work.rating, work.cvRating, work.storyRating, work.seRating].map(value => value === "" || value == null ? 0 : Number(value) || 0);
        const workCover = await resolveStoredImageReferenceSafely(work.cover);
        applyState({ ...state, template:"full", theme:"matcha-berry-cheese", recordTitle:work.title || "", cvText:work.cv || "", circleText:work.circle || "", rjText:work.rj || "", durationText:work.time || "", purchaseDate:work.purchaseDate || "", listenedDate:work.listenedDate || "", cardInfoType:normalizeCardInfoType(work.cardInfoType), originalPrice:work.originalPrice === "" || work.originalPrice == null ? "" : work.originalPrice, currentPrice:work.price === "" || work.price == null ? "" : work.price, currentDiscount:work.currentDiscount === "" || work.currentDiscount == null ? "" : work.currentDiscount, lowestPrice:work.lowestPrice === "" || work.lowestPrice == null ? "" : work.lowestPrice, cnChoice:work.cn || CHOICE_SUBTITLE, ratings, tags:String(work.keywords || "").split(" / ").filter(Boolean), reviewText:work.review || "", coverSrc:workCover || "", coverOriginalSrc:workCover || "", coverEditedSrc:"", coverMosaicMaskSrc:"", coverBlurMaskSrc:"", coverWhiteFogMaskSrc:"", coverEditorUndoStack:[], coverEditorRedoStack:[], coverEditorHistoryCheckpoint:null, coverEditorOperations:[], coverEditorRedoOperations:[], coverEditorHistoryFormat:"operations-v1", coverStickers:[] }, true);
        setMainPage("template");
      };
      function closeCollectionDetailMobileMenu() {
        collectionDetailMobileDropdown.hidden = true;
        collectionDetailMobileMenuButton.setAttribute("aria-expanded", "false");
      }
      collectionDetailMobileMenuButton.onclick = event => {
        event.stopPropagation();
        const nextHidden = !collectionDetailMobileDropdown.hidden;
        collectionDetailMobileDropdown.hidden = nextHidden;
        collectionDetailMobileMenuButton.setAttribute("aria-expanded", String(!nextHidden));
      };
      [
        [collectionDetailMobileImportButton, "collectionDetailImportButton"],
        [collectionDetailMobileMakeRepoButton, "collectionEditRecordButton"]
      ].forEach(([button, targetId]) => {
        button.onclick = () => {
          closeCollectionDetailMobileMenu();
          document.getElementById(targetId).click();
        };
      });
      document.addEventListener("click", event => {
        if (collectionDetailMobileDropdown.hidden || event.target.closest(".collection-detail-mobile-menu")) return;
        closeCollectionDetailMobileMenu();
      });
      document.getElementById("collectionPrevPage").onclick = () => { if (collectionPageIndex > 0) { collectionPageIndex -= 1; render(); } };
      document.getElementById("collectionNextPage").onclick = () => { collectionPageIndex += 1; render(); };
      collectionPageNumbers.onclick = event => {
        const button = event.target.closest("[data-collection-page]");
        if (!button || button.disabled) return;
        collectionPageIndex = Number(button.dataset.collectionPage);
        render();
      };
      collectionPageJump.onsubmit = event => {
        event.preventDefault();
        const requestedPage = Number(collectionPageJumpInput.value);
        const pageCount = Number(collectionPageJumpInput.max) || 1;
        if (!Number.isInteger(requestedPage) || requestedPage < 1 || requestedPage > pageCount) {
          showAppAlert(String.fromCharCode(0x8bf7, 0x8f93, 0x5165, 0x20) + "1-" + pageCount + String.fromCharCode(0x20, 0x4e4b, 0x95f4, 0x7684, 0x9875, 0x7801, 0x3002));
          return;
        }
        collectionPageIndex = requestedPage - 1;
        collectionPageJumpInput.value = "";
        render();
      };
      render();
      function openWorksDatabase() {
        return new Promise((resolve, reject) => {
          if (!window.indexedDB) {
            reject(new Error("Collection database is unavailable"));
            return;
          }
          let openRejected = false;
          const request = indexedDB.open("otome-record-card-collection", 2);
          request.onupgradeneeded = () => {
            if (!request.result.objectStoreNames.contains("works")) request.result.createObjectStore("works", { keyPath: "id" });
          };
          request.onerror = () => {
            openRejected = true;
            reject(request.error || new Error("Collection database open failed"));
          };
          request.onblocked = () => {
            openRejected = true;
            reject(new Error("Collection database open blocked"));
          };
          request.onsuccess = () => {
            if (openRejected) {
              request.result.close();
              return;
            }
            request.result.onversionchange = () => request.result.close();
            resolve(request.result);
          };
        });
      }
      async function serializeCollectionWorkImage(work) {
        return { ...work, cover: await ensureStoredImageReference(work?.cover) };
      }
      async function loadWorks() {
        const database = await openWorksDatabase();
        let storedWorks;
        try {
          storedWorks = await new Promise((resolve, reject) => {
            const transaction = database.transaction("works", "readonly");
            const request = transaction.objectStore("works").getAll();
            transaction.oncomplete = () => resolve(request.result || []);
            transaction.onerror = () => reject(transaction.error || new Error("Collection records read failed"));
            transaction.onabort = () => reject(transaction.error || new Error("Collection records read aborted"));
          });
        } finally {
          database.close();
        }
        if (storedWorks.some((work) => String(work?.cover || "").startsWith("data:image/"))) {
          await putWorks(storedWorks);
        }
        return storedWorks;
      }
      async function putWorks(works) {
        const storedWorks = [];
        for (const work of works) storedWorks.push(await serializeCollectionWorkImage(work));
        const database = await openWorksDatabase();
        return new Promise((resolve, reject) => {
          const transaction = database.transaction("works", "readwrite");
          const store = transaction.objectStore("works");
          storedWorks.forEach(work => store.put(work));
          transaction.oncomplete = () => {
            database.close();
            storedWorks.forEach((storedWork, index) => {
              if (works[index] && typeof works[index] === "object") works[index].cover = storedWork.cover;
            });
            scheduleStoredImageGarbageCollection();
            resolve();
          };
          transaction.onerror = () => { database.close(); reject(transaction.error || new Error("Collection records write failed")); };
          transaction.onabort = () => { database.close(); reject(transaction.error || new Error("Collection records write aborted")); };
        });
      }
      function deleteWork(id) {
        return new Promise((resolve, reject) => {
          openWorksDatabase().then(database => {
            const transaction = database.transaction("works", "readwrite");
            transaction.objectStore("works").delete(id);
            transaction.oncomplete = () => {
              database.close();
              scheduleStoredImageGarbageCollection();
              resolve();
            };
            transaction.onerror = () => { database.close(); reject(transaction.error || new Error("Collection record delete failed")); };
            transaction.onabort = () => { database.close(); reject(transaction.error || new Error("Collection record delete aborted")); };
          }).catch(reject);
        });
      }
      function deleteWorks(ids) {
        const values = Array.from(new Set(ids || []));
        return new Promise((resolve, reject) => {
          openWorksDatabase().then(database => {
            const transaction = database.transaction("works", "readwrite");
            const store = transaction.objectStore("works");
            values.forEach(id => store.delete(id));
            transaction.oncomplete = () => {
              database.close();
              scheduleStoredImageGarbageCollection();
              resolve();
            };
            transaction.onerror = () => { database.close(); reject(transaction.error || new Error("Collection records delete failed")); };
            transaction.onabort = () => { database.close(); reject(transaction.error || new Error("Collection records delete aborted")); };
          }).catch(reject);
        });
      }
      collectionStoredImageReferencesReader = async () => {
        const database = await openWorksDatabase();
        try {
          const storedWorks = await new Promise((resolve, reject) => {
            const transaction = database.transaction("works", "readonly");
            const request = transaction.objectStore("works").getAll();
            transaction.oncomplete = () => resolve(request.result || []);
            transaction.onerror = () => reject(transaction.error || new Error("Collection image reference read failed"));
            transaction.onabort = () => reject(transaction.error || new Error("Collection image reference read aborted"));
          });
          return Array.from(collectStoredImageReferences(storedWorks));
        } finally {
          database.close();
        }
      };
      collectionStorageReadyForGc = true;
      async function exportCollectionBackup() {
        try {
          const backupWorks = [];
          for (const work of records) backupWorks.push({ ...work, cover: await resolveStoredImageReferenceSafely(work.cover) });
          const payload = { type:COLLECTION_BACKUP_TYPE, version:COLLECTION_BACKUP_VERSION, exportedAt:new Date().toISOString(), works:backupWorks, customTags:customCollectionTags, removedTags:removedCollectionTags };
          const blob = new Blob([JSON.stringify(payload, null, 2)], { type:"application/json" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
          link.download = "my_collection_backup_" + stamp + ".json";
          document.body.appendChild(link);
          link.click();
          link.remove();
          window.setTimeout(() => URL.revokeObjectURL(url), 1000);
          trackFixedUsageEvent("feature-collection-backup-export-success");
        } catch (error) {
          console.error("Collection backup export failed", error);
          const detail = error && (error.name || error.message) ? [error.name, error.message].filter(Boolean).join(": ") : "";
          showAppAlert(String.fromCharCode(0x6536, 0x85cf, 0x5907, 0x4efd, 0x5bfc, 0x51fa, 0x5931, 0x8d25, 0xff1a) + (detail || UI_AUTO_SAVE_UNAVAILABLE_REASON));
        }
      }
      async function importCollectionBackup(file) {
        try {
          const payload = JSON.parse(await file.text());
          const legacyArray = Array.isArray(payload);
          if (!legacyArray && (!payload || typeof payload !== "object" || payload.type !== COLLECTION_BACKUP_TYPE || ![1,2,3].includes(payload.version))) throw new Error("Unsupported collection backup");
          const imported = legacyArray ? payload : payload.works;
          if (!Array.isArray(imported)) throw new Error("Invalid collection records");
          const importedIds = new Set();
          imported.forEach(work => {
            if (!work || typeof work !== "object" || Array.isArray(work) || !String(work.id ?? "").trim()) throw new Error("Invalid collection record");
            const id = String(work.id);
            if (importedIds.has(id)) throw new Error("Duplicate collection record id");
            importedIds.add(id);
            if (work.tags != null && (!Array.isArray(work.tags) || work.tags.some(name => typeof name !== "string"))) throw new Error("Invalid collection record tags");
          });
          const importedCustomTags = legacyArray || payload.version < 2 ? [] : payload.customTags;
          const importedRemovedTags = legacyArray || payload.version < 2 ? [] : payload.removedTags;
          if (!Array.isArray(importedCustomTags) || importedCustomTags.some(name => typeof name !== "string")) throw new Error("Invalid custom tags");
          if (!Array.isArray(importedRemovedTags) || importedRemovedTags.some(name => typeof name !== "string")) throw new Error("Invalid removed tags");
          await putWorks(imported);
          const merged = new Map(records.map(work => [String(work.id), work]));
          imported.forEach(work => merged.set(String(work.id), work));
          records = Array.from(merged.values());
          customCollectionTags = Array.from(new Set(customCollectionTags.concat(importedCustomTags).map(name => name.trim()).filter(name => name && name !== "全部")));
          removedCollectionTags = Array.from(new Set(removedCollectionTags.concat(importedRemovedTags).map(name => name.trim()).filter(Boolean)));
          localStorage.setItem(COLLECTION_TAGS_KEY, JSON.stringify(customCollectionTags));
          localStorage.setItem(COLLECTION_REMOVED_TAGS_KEY, JSON.stringify(removedCollectionTags));
          collectionPageIndex = 0;
          render();
          trackFixedUsageEvent("feature-collection-backup-import-success");
          showAppAlert("已导入 " + imported.length + " 条收藏记录");
        } catch (error) {
          console.error("Import collection failed", error);
          showAppAlert("收藏备份导入失败，请确认文件格式正确。");
        }
      }
      async function importCollectionByRj() {
        const button = document.getElementById("collectionRjImportButton");
        const label = button.querySelector("span");
        const candidates = records.map((work,index) => {
          const legacyRjId = /^(?:RJ|BJ)\d+$/i.test(String(work.id || "")) ? work.id : "";
          return { work, index, rj:normalizeWorkno(work.rj || legacyRjId) };
        }).filter(job => job.rj);
        if (!candidates.length) {
          showCollectionRjImportResult("没有可导入的有效 RJ 号。", true);
          return;
        }
        const isEmpty = value => value == null || String(value).trim() === "";
        const importTargetValues = work => [work.title, work.cv, work.cover, work.circle, work.scenarioWriter, work.illustrator, work.releaseDate, work.originalPrice, work.price, work.currentDiscount, work.lowestPrice, work.cn, work.keywords];
        const allImportTargetsEmpty = candidates.every(({ work }) => importTargetValues(work).every(isEmpty));
        const mode = allImportTargetsEmpty ? "overwrite" : await requestCollectionRjImportMode();
        if (!mode) return;
        const jobs = mode === "fill" ? candidates.filter(({ work }) => importTargetValues(work).some(isEmpty)) : candidates;
        let skipped = records.length - jobs.length;
        if (!jobs.length) {
          showCollectionRjImportResult(String.fromCharCode(0x6ca1, 0x6709, 0x9700, 0x8981, 0x586b, 0x5145, 0x7684, 0x7a7a, 0x4f4d, 0x3002));
          return;
        }
        showCollectionRjImportLoading(jobs.length);
        button.disabled = true;
        button.setAttribute("aria-busy", "true");
        label.textContent = "导入中 0/" + jobs.length;
        const updates = [];
        const fieldIssues = [];
        const failures = [];
        let completed = 0;
        let failed = 0;
        let cursor = 0;
        const worker = async () => {
          while (cursor < jobs.length) {
            const job = jobs[cursor];
            cursor += 1;
            try {
              const canWrite = value => mode === "overwrite" || isEmpty(value);
              const targetTitle = canWrite(job.work.title);
              const targetCv = canWrite(job.work.cv);
              const targetCircle = canWrite(job.work.circle);
              const targetScenarioWriter = canWrite(job.work.scenarioWriter);
              const targetIllustrator = canWrite(job.work.illustrator);
              const targetReleaseDate = canWrite(job.work.releaseDate);
              const targetOriginalPrice = canWrite(job.work.originalPrice);
              const targetCurrentPrice = canWrite(job.work.price);
              const targetCurrentDiscount = canWrite(job.work.currentDiscount);
              const targetLowestDiscount = canWrite(job.work.lowestPrice);
              const targetChinese = canWrite(job.work.cn);
              const targetKeywords = canWrite(job.work.keywords);
              const targetCover = canWrite(job.work.cover);
              if (![targetTitle, targetCv, targetCircle, targetScenarioWriter, targetIllustrator, targetReleaseDate, targetOriginalPrice, targetCurrentPrice, targetCurrentDiscount, targetLowestDiscount, targetChinese, targetKeywords, targetCover].some(Boolean)) {
                skipped += 1;
                continue;
              }
              let lowestDiscountError = null;
              const lowestDiscountPromise = targetLowestDiscount
                ? fetchDlwatcherLowestDiscount(job.rj).catch(error => {
                  lowestDiscountError = error;
                  console.warn("Collection RJ lowest discount import failed", job.rj, error);
                  return "";
                })
                : Promise.resolve("");
              const product = parseDlsiteProduct(await fetchProductJson(job.rj));
              if (!product || (!product.title && !product.cv && !product.circle && !product.originalPrice && !product.currentPrice && !product.coverUrl && !product.keywords?.length)) throw new Error("empty product");
              product.lowestDiscount = await lowestDiscountPromise;
              let chineseChoice = "";
              let chineseChoiceError = null;
              if (targetChinese) {
                if (product.hasChineseVersion || product.chineseEditionWorkno) {
                  chineseChoice = CHOICE_SUBTITLE;
                } else {
                  try {
                    const translatable = parseTranslatableChinese(await fetchTranslatableProducts(job.rj), job.rj);
                    chineseChoice = translatable?.hasChinese ? CHOICE_SUBTITLE : CHOICE_NONE;
                  } catch (error) {
                    chineseChoiceError = error;
                    console.warn("Collection RJ Chinese edition import failed", job.rj, error);
                  }
                }
              }
              const nextWork = { ...job.work };
              let importedField = false;
              const missingFields = [];
              if (targetTitle) {
                if (product.title) {
                  nextWork.title = product.title;
                  importedField = true;
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x6807, 0x9898)));
              }
              if (targetCv) {
                if (product.cv) {
                  nextWork.cv = product.cv;
                  importedField = true;
                } else missingFields.push(unavailableImportField("CV"));
              }
              if (targetCircle) {
                if (product.circle) {
                  nextWork.circle = product.circle;
                  importedField = true;
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x793e, 0x56e2)));
              }
              if (targetScenarioWriter && product.scenarioWriter) {
                nextWork.scenarioWriter = product.scenarioWriter;
                importedField = true;
              }
              if (targetIllustrator && product.illustrator) {
                nextWork.illustrator = product.illustrator;
                importedField = true;
              }
              if (targetReleaseDate) {
                if (product.releaseDate) {
                  nextWork.releaseDate = product.releaseDate;
                  importedField = true;
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x53d1, 0x552e, 0x65e5, 0x671f)));
              }
              if (targetOriginalPrice) {
                const price = Number(product.originalPrice);
                if (product.originalPrice !== "" && product.originalPrice != null && Number.isFinite(price)) {
                  nextWork.originalPrice = price;
                  importedField = true;
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x539f, 0x4ef7)));
              }
              if (targetCurrentPrice) {
                const price = Number(product.currentPrice);
                if (product.currentPrice !== "" && product.currentPrice != null && Number.isFinite(price)) {
                  nextWork.price = price;
                  importedField = true;
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x73b0, 0x4ef7)));
              }
              if (targetCurrentDiscount) {
                const discount = Number(product.currentDiscount);
                if (product.currentDiscount !== "" && product.currentDiscount != null && Number.isFinite(discount)) {
                  nextWork.currentDiscount = discount;
                  importedField = true;
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x73b0, 0x6298, 0x6263)));
              }
              if (targetLowestDiscount) {
                const discount = Number(product.lowestDiscount);
                if (product.lowestDiscount !== "" && product.lowestDiscount != null && Number.isFinite(discount)) {
                  nextWork.lowestPrice = discount;
                  importedField = true;
                } else if (lowestDiscountError) {
                  missingFields.push(unavailableImportField(String.fromCharCode(0x53f2, 0x4f4e, 0x6298, 0x6263), fullImportFailureReason(lowestDiscountError, "lowest")));
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x53f2, 0x4f4e, 0x6298, 0x6263)));
              }
              if (targetChinese) {
                if (chineseChoice) {
                  nextWork.cn = chineseChoice;
                  importedField = true;
                } else if (chineseChoiceError) {
                  missingFields.push(unavailableImportField(String.fromCharCode(0x4e2d, 0x6587, 0x72b6, 0x6001), fullImportFailureReason(chineseChoiceError, "translatable")));
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x4e2d, 0x6587, 0x72b6, 0x6001)));
              }
              if (targetKeywords) {
                if (Array.isArray(product.keywords) && product.keywords.length) {
                  nextWork.keywords = product.keywords.slice(0, 8).join(" / ");
                  importedField = true;
                } else missingFields.push(unavailableImportField(String.fromCharCode(0x4f5c, 0x54c1, 0x5173, 0x952e, 0x8bcd)));
              }
              if (targetCover) {
                if (product.coverUrl) {
                  try {
                    nextWork.cover = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(product.coverUrl), true, rebuildableRemoteCoverOptions(product.coverUrl, 480, true, job.rj));
                    nextWork.coverFit = "cover";
                    importedField = true;
                  } catch (coverError) {
                    missingFields.push(unavailableImportField("BK", UI_IMPORT_IMAGE_FAILED));
                    console.warn("Collection RJ cover import failed", job.rj, coverError);
                  }
                } else missingFields.push(unavailableImportField("BK"));
              }
              if (!importedField) {
                if (!missingFields.length) {
                  skipped += 1;
                  continue;
                }
                failed += 1;
                failures.push({ rj:job.rj, reason:missingFields.length ? collectionImportFieldIssueText(missingFields) : UI_IMPORT_DLSITE_NO_DATA });
                continue;
              }
              nextWork.editedAt = Date.now();
              updates.push(nextWork);
              if (missingFields.length) fieldIssues.push({ rj:job.rj, reason:collectionImportFieldIssueText(missingFields) });
            } catch (error) {
              failed += 1;
              failures.push({ rj:job.rj, reason:grid9FailureReason(error) });
              console.warn("Collection RJ import failed", job.rj, error);
            } finally {
              completed += 1;
              label.textContent = "导入中 " + completed + "/" + jobs.length;
              updateCollectionRjImportProgress(completed, jobs.length);
            }
          }
        };
        try {
          await Promise.all(Array.from({ length:Math.min(2,jobs.length) }, () => worker()));
          if (updates.length) {
            await putWorks(updates);
            const updateMap = new Map(updates.map(work => [String(work.id), work]));
            records = records.map(work => updateMap.get(String(work.id)) || work);
            render();
            trackFixedUsageEvent("feature-rj-import-success");
          }
          const parts = [UI_IMPORT_COMPLETE_COUNT + " " + Math.max(0, updates.length - fieldIssues.length) + " " + String.fromCharCode(0x6761)];
          if (fieldIssues.length) parts.push(UI_IMPORT_PARTIAL_COUNT + " " + fieldIssues.length + " " + String.fromCharCode(0x6761));
          if (failed) parts.push(UI_GRID9_FAILED + " " + failed + " " + String.fromCharCode(0x6761));
          if (skipped) parts.push(UI_GRID9_SKIPPED + " " + skipped + " " + String.fromCharCode(0x6761));
          showCollectionRjImportResult(parts.join(String.fromCharCode(0xff0c)), false, fieldIssues.concat(failures));
        } catch (error) {
          console.error("Save collection RJ import failed", error);
          showCollectionRjImportResult("导入结果保存失败，原收藏记录未被覆盖。", true);
        } finally {
          button.disabled = false;
          button.removeAttribute("aria-busy");
          label.textContent = "按RJ号导入信息";
        }
      }
      const COLLECTION_BATCH_ADD_TEXT = {
        title:String.fromCharCode(0x6279, 0x91cf, 0x65b0, 0x589e),
        loading:String.fromCharCode(0x6b63, 0x5728, 0x6279, 0x91cf, 0x65b0, 0x589e, 0x2026),
        complete:String.fromCharCode(0x6279, 0x91cf, 0x65b0, 0x589e, 0x5b8c, 0x6210),
        failed:String.fromCharCode(0x6279, 0x91cf, 0x65b0, 0x589e, 0x5931, 0x8d25),
        empty:String.fromCharCode(0x8bf7, 0x8f93, 0x5165, 0x81f3, 0x5c11, 0x4e00, 0x4e2a, 0x6709, 0x6548, 0x7684, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x3002),
        maximum:String.fromCharCode(0x4e00, 0x6b21, 0x6700, 0x591a, 0x53ea, 0x80fd, 0x5bfc, 0x5165, 0x20, 0x32, 0x30, 0x20, 0x4e2a, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0x3002),
        invalid:String.fromCharCode(0x4ee5, 0x4e0b, 0x5185, 0x5bb9, 0x4e0d, 0x662f, 0x6709, 0x6548, 0x7684, 0x20, 0x52, 0x4a, 0x20, 0x53f7, 0xff1a),
        importing:String.fromCharCode(0x6b63, 0x5728, 0x5bfc, 0x5165),
        added:String.fromCharCode(0x5df2, 0x65b0, 0x589e),
        partial:String.fromCharCode(0x90e8, 0x5206, 0x6210, 0x529f),
        importFailed:String.fromCharCode(0x5bfc, 0x5165, 0x5931, 0x8d25),
        existing:String.fromCharCode(0x5df2, 0x5b58, 0x5728, 0x8df3, 0x8fc7),
        alreadyExists:String.fromCharCode(0x6536, 0x85cf, 0x4e2d, 0x5df2, 0x5b58, 0x5728),
        storageFailed:String.fromCharCode(0x4fdd, 0x5b58, 0x5931, 0x8d25, 0xff0c, 0x672a, 0x65b0, 0x589e, 0x4efb, 0x4f55, 0x6761, 0x76ee, 0x3002, 0x539f, 0x56e0, 0xff1a),
        item:String.fromCharCode(0x6761)
      };
      function parseCollectionBatchAddInput(value) {
        const tokens = String(value || "").split(/[\s,\uff0c;\uff1b]+/).map(item => item.trim()).filter(Boolean);
        const rjs = [];
        const invalid = [];
        const seen = new Set();
        tokens.forEach(token => {
          const clean = token.toUpperCase();
          if (!/^(?:RJ|BJ)?\d+$/.test(clean)) {
            invalid.push(token);
            return;
          }
          const rj = normalizeWorkno(clean);
          if (rj && !seen.has(rj)) {
            seen.add(rj);
            rjs.push(rj);
          }
        });
        return { rjs, invalid };
      }
      function updateCollectionBatchAddCount() {
        const parsed = parseCollectionBatchAddInput(collectionBatchAddInput.value);
        collectionBatchAddStatus.textContent = parsed.rjs.length + " / 20";
      }
      function openCollectionBatchAdd() {
        collectionBatchAddTitle.textContent = COLLECTION_BATCH_ADD_TEXT.title;
        collectionBatchAddForm.hidden = false;
        collectionBatchAddResult.hidden = true;
        collectionBatchAddResult.textContent = "";
        collectionBatchAddInput.disabled = false;
        collectionBatchAddInput.value = "";
        collectionBatchAddStatus.textContent = "0 / 20";
        collectionBatchAddCancel.hidden = false;
        collectionBatchAddCancel.disabled = false;
        collectionBatchAddStart.hidden = false;
        collectionBatchAddStart.disabled = false;
        collectionBatchAddDone.hidden = true;
        collectionBatchAddPrompt.hidden = false;
        if (!window.matchMedia("(max-width: 780px)").matches) collectionBatchAddInput.focus();
      }
      function showCollectionBatchAddResult(summary, failed, details) {
        collectionBatchAddTitle.textContent = failed ? COLLECTION_BATCH_ADD_TEXT.failed : COLLECTION_BATCH_ADD_TEXT.complete;
        collectionBatchAddForm.hidden = true;
        collectionBatchAddResult.hidden = false;
        collectionBatchAddResult.textContent = "";
        const summaryLine = document.createElement("p");
        summaryLine.style.margin = details.length ? "0 0 7px" : "0";
        summaryLine.textContent = summary;
        collectionBatchAddResult.appendChild(summaryLine);
        details.forEach(detail => {
          const line = document.createElement("p");
          line.style.color = "var(--rose-deep)";
          line.textContent = detail.rj + String.fromCharCode(0xff1a) + detail.reason;
          collectionBatchAddResult.appendChild(line);
        });
        collectionBatchAddCancel.hidden = true;
        collectionBatchAddStart.hidden = true;
        collectionBatchAddDone.hidden = false;
        collectionBatchAddDone.focus();
      }
      async function fetchCollectionBatchAddWork(rj) {
        const missingFields = [];
        let lowestDiscountError = null;
        const lowestDiscountPromise = fetchDlwatcherLowestDiscount(rj).catch(error => {
          lowestDiscountError = error;
          console.warn("Collection batch add lowest discount import failed", rj, error);
          return "";
        });
        const product = parseDlsiteProduct(await fetchProductJson(rj));
        if (!product || (!product.title && !product.cv && !product.circle && !product.releaseDate && !product.originalPrice && !product.currentPrice && !product.coverUrl && !product.keywords?.length)) throw new Error("empty product");
        product.lowestDiscount = await lowestDiscountPromise;
        let chineseChoice = "";
        if (product.hasChineseVersion || product.chineseEditionWorkno) {
          chineseChoice = CHOICE_SUBTITLE;
        } else {
          try {
            const translatable = parseTranslatableChinese(await fetchTranslatableProducts(rj), rj);
            chineseChoice = translatable?.hasChinese ? CHOICE_SUBTITLE : CHOICE_NONE;
          } catch (error) {
            missingFields.push(unavailableImportField(String.fromCharCode(0x4e2d, 0x6587, 0x72b6, 0x6001), fullImportFailureReason(error, "translatable")));
            console.warn("Collection batch add Chinese edition import failed", rj, error);
          }
        }
        const requiredText = (value, label) => {
          if (value !== "" && value != null) return value;
          missingFields.push(unavailableImportField(label));
          return "";
        };
        const requiredNumber = (value, label, reason = "") => {
          const number = Number(value);
          if (value !== "" && value != null && Number.isFinite(number)) return number;
          missingFields.push(unavailableImportField(label, reason || UI_IMPORT_API_MISSING));
          return "";
        };
        const title = requiredText(product.title, String.fromCharCode(0x6807, 0x9898));
        const cv = requiredText(product.cv, "CV");
        const circle = requiredText(product.circle, String.fromCharCode(0x793e, 0x56e2));
        const releaseDate = requiredText(product.releaseDate, String.fromCharCode(0x53d1, 0x552e, 0x65e5, 0x671f));
        const originalPriceValue = requiredNumber(product.originalPrice, String.fromCharCode(0x539f, 0x4ef7));
        const currentPriceValue = requiredNumber(product.currentPrice, String.fromCharCode(0x73b0, 0x4ef7));
        const currentDiscountValue = requiredNumber(product.currentDiscount, String.fromCharCode(0x73b0, 0x6298, 0x6263));
        const lowestDiscountValue = requiredNumber(product.lowestDiscount, String.fromCharCode(0x53f2, 0x4f4e, 0x6298, 0x6263), lowestDiscountError ? fullImportFailureReason(lowestDiscountError, "lowest") : "");
        let keywords = "";
        if (Array.isArray(product.keywords) && product.keywords.length) keywords = product.keywords.slice(0, 8).join(" / ");
        else missingFields.push(unavailableImportField(String.fromCharCode(0x4f5c, 0x54c1, 0x5173, 0x952e, 0x8bcd)));
        let cover = "";
        if (product.coverUrl) {
          try {
            cover = await grid9CoverStorageDataUrl(await fetchImageAsPngDataUrl(product.coverUrl), true, rebuildableRemoteCoverOptions(product.coverUrl, 480, true, rj));
          } catch (error) {
            missingFields.push(unavailableImportField("BK", UI_IMPORT_IMAGE_FAILED));
            console.warn("Collection batch add cover import failed", rj, error);
          }
        } else missingFields.push(unavailableImportField("BK"));
        const now = Date.now();
        return {
          work:{ id:rj, rj, title, cn:chineseChoice, cv, circle, time:"", scenarioWriter:product.scenarioWriter || "", illustrator:product.illustrator || "", purchaseDate:"", listenedDate:"", releaseDate:normalizeCardDateValue(releaseDate), cardInfoType:"", originalPrice:originalPriceValue, price:currentPriceValue, currentDiscount:currentDiscountValue, lowestPrice:lowestDiscountValue, rating:"", cvRating:"", storyRating:"", seRating:"", summary:"", character:"", review:"", keywords, tags:[], cover, coverFit:"cover", addedAt:now, editedAt:now },
          missingFields
        };
      }
      async function importCollectionBatchAdd() {
        const parsed = parseCollectionBatchAddInput(collectionBatchAddInput.value);
        if (parsed.invalid.length) {
          showAppAlert(COLLECTION_BATCH_ADD_TEXT.invalid + parsed.invalid.join(String.fromCharCode(0x3001)));
          return;
        }
        if (!parsed.rjs.length) {
          showAppAlert(COLLECTION_BATCH_ADD_TEXT.empty);
          return;
        }
        if (parsed.rjs.length > 20) {
          showAppAlert(COLLECTION_BATCH_ADD_TEXT.maximum);
          return;
        }
        const existingRjs = new Set(records.map(work => {
          const legacyId = /^(?:RJ|BJ)\d+$/i.test(String(work.id || "")) ? work.id : "";
          return normalizeWorkno(work.rj || legacyId);
        }).filter(Boolean));
        const existing = parsed.rjs.filter(rj => existingRjs.has(rj));
        const jobs = parsed.rjs.filter(rj => !existingRjs.has(rj));
        collectionBatchAddTitle.textContent = COLLECTION_BATCH_ADD_TEXT.loading;
        collectionBatchAddInput.disabled = true;
        collectionBatchAddCancel.hidden = true;
        collectionBatchAddStart.hidden = true;
        collectionBatchAddStatus.textContent = COLLECTION_BATCH_ADD_TEXT.importing + " 0 / " + jobs.length;
        const additions = [];
        const fieldIssues = [];
        const failures = [];
        let completed = 0;
        let cursor = 0;
        const worker = async () => {
          while (cursor < jobs.length) {
            const rj = jobs[cursor];
            cursor += 1;
            try {
              const imported = await fetchCollectionBatchAddWork(rj);
              additions.push(imported.work);
              if (imported.missingFields.length) fieldIssues.push({ rj, reason:collectionImportFieldIssueText(imported.missingFields) });
            } catch (error) {
              failures.push({ rj, reason:grid9FailureReason(error) });
              console.warn("Collection batch add failed", rj, error);
            } finally {
              completed += 1;
              collectionBatchAddStatus.textContent = COLLECTION_BATCH_ADD_TEXT.importing + " " + completed + " / " + jobs.length;
            }
          }
        };
        try {
          await Promise.all(Array.from({ length:Math.min(2, jobs.length) }, () => worker()));
          if (additions.length) {
            await putWorks(additions);
            records = records.concat(additions);
            render();
            trackFixedUsageEvent("feature-batch-rj-add-success");
          }
          const completeCount = Math.max(0, additions.length - fieldIssues.length);
          const parts = [COLLECTION_BATCH_ADD_TEXT.added + " " + completeCount + " " + COLLECTION_BATCH_ADD_TEXT.item];
          if (fieldIssues.length) parts.push(COLLECTION_BATCH_ADD_TEXT.partial + " " + fieldIssues.length + " " + COLLECTION_BATCH_ADD_TEXT.item);
          if (failures.length) parts.push(COLLECTION_BATCH_ADD_TEXT.importFailed + " " + failures.length + " " + COLLECTION_BATCH_ADD_TEXT.item);
          if (existing.length) parts.push(COLLECTION_BATCH_ADD_TEXT.existing + " " + existing.length + " " + COLLECTION_BATCH_ADD_TEXT.item);
          const detailOrder = new Map(parsed.rjs.map((rj, index) => [rj, index]));
          const details = fieldIssues.concat(failures, existing.map(rj => ({ rj, reason:COLLECTION_BATCH_ADD_TEXT.alreadyExists }))).sort((left, right) => detailOrder.get(left.rj) - detailOrder.get(right.rj));
          showCollectionBatchAddResult(parts.join(String.fromCharCode(0xff0c)), !additions.length && Boolean(failures.length), details);
        } catch (error) {
          console.error("Save collection batch add failed", error);
          const reason = String((error && error.message) || UI_GRID9_UNKNOWN);
          showCollectionBatchAddResult(COLLECTION_BATCH_ADD_TEXT.storageFailed + reason, true, []);
        }
      }
      collectionBatchAddInput.addEventListener("input", updateCollectionBatchAddCount);
      collectionBatchAddCancel.onclick = () => { collectionBatchAddPrompt.hidden = true; };
      collectionBatchAddStart.onclick = () => void importCollectionBatchAdd();
      collectionBatchAddDone.onclick = () => { collectionBatchAddPrompt.hidden = true; };
      collectionBatchAddPrompt.addEventListener("click", event => {
        if (event.target === collectionBatchAddPrompt && !collectionBatchAddDone.hidden) collectionBatchAddPrompt.hidden = true;
      });
      function nextTemporaryWorkId() {
        const largest = records.reduce((max, work) => {
          const match = String(work.id || "").match(/^ID(\d{8})$/);
          return match ? Math.max(max, Number(match[1])) : max;
        }, 0);
        nextTemporaryWorkId.value = Math.max(nextTemporaryWorkId.value || 0, largest) + 1;
        return "ID" + String(nextTemporaryWorkId.value).padStart(8, "0");
      }
      function normalizedWork(source, index, data) {
        const rj = normalizeWorkno(data.rj || "");
        const hasContent = Boolean(rj || data.title || data.cv || data.review || data.cover || data.price || data.rating);
        if (!hasContent) return null;
        const sourceSlot = source + ":" + index;
        const existingTemporary = !rj ? records.find(work => !work.rj && work.sourceSlot === sourceSlot) : null;
        const id = rj || existingTemporary?.id || nextTemporaryWorkId();
        const optionalNumber = value => String(value ?? "").trim() === "" ? "" : Number(value);
        return { id, rj, title: data.title || "", cn: data.cn || "", cv: data.cv || "", circle: data.circle || "", time: data.time || "", purchaseDate:normalizeCardDateValue(data.purchaseDate), listenedDate:normalizeCardDateValue(data.listenedDate), releaseDate:normalizeCardDateValue(data.releaseDate), cardInfoType:data.cardInfoType ? normalizeCardInfoType(data.cardInfoType) : "", originalPrice: optionalNumber(data.originalPrice), price: optionalNumber(data.price), currentDiscount: optionalNumber(data.currentDiscount), lowestPrice: optionalNumber(data.lowestPrice), rating: optionalNumber(data.rating), cvRating: optionalNumber(data.cvRating), storyRating: optionalNumber(data.storyRating), seRating: optionalNumber(data.seRating), cover: data.cover || "", coverFit: data.coverFit || "cover", review: data.review || "", keywords: data.keywords || "", tags: data.tags || [], source, sourceSlot };
      }
      function extractCurrentWorks(state) {
        const found = new Map();
        const add = (source, index, data) => {
          const work = normalizedWork(source, index, data);
          if (!work) return;
          const previous = found.get(work.id);
          if (!previous) { found.set(work.id, work); return; }
          Object.keys(work).forEach(key => { if (work[key] !== "" && (!Array.isArray(work[key]) || work[key].length)) previous[key] = work[key]; });
        };
        const mergedReviewParts = [
          state.reviewText,
          ...(state.continuationPages?.full?.pages || []),
          ...(state.continuationPages?.compact?.pages || [])
        ].map(part => String(part || "").replace(/\r\n?/g, "\n")).filter(part => part.trim() !== "");
        add("single", 0, { rj:state.rjText, title:state.recordTitle, cn:state.cnChoice, cv:state.cvText, circle:state.circleText, time:state.durationText, purchaseDate:state.purchaseDate, listenedDate:state.listenedDate, cardInfoType:state.cardInfoType, originalPrice:state.originalPrice, price:state.currentPrice, currentDiscount:state.currentDiscount, lowestPrice:state.lowestPrice, rating:Array.isArray(state.ratings) ? state.ratings[0] : 0, cvRating:Array.isArray(state.ratings) ? state.ratings[1] : "", storyRating:Array.isArray(state.ratings) ? state.ratings[2] : "", seRating:Array.isArray(state.ratings) ? state.ratings[3] : "", cover:state.coverSrc || state.coverEditedSrc || state.coverOriginalSrc, coverFit:state.coverFit, review:mergedReviewParts.join("\n"), keywords:(state.tags || []).join(" / ") });
        (state.grid9?.cells || []).slice(0,9).forEach((cell,index) => add("grid9", index, { rj:cell.rj, cover:cell.cover, coverFit:cell.fit, review:cell.review }));
        (state.quick?.cells || []).slice(0,12).forEach((cell,index) => add("quick", index, { rj:cell.rj, cv:cell.cv, cover:cell.cover, coverFit:cell.coverFit, review:cell.review }));
        (state.trio?.cells || []).slice(0,3).forEach((cell,index) => add("trio", index, { rj:cell.rj, price:cell.price, rating:cell.rating, cover:cell.cover, coverFit:cell.coverFit, review:cell.repo }));
        return Array.from(found.values());
      }
      async function saveCurrentToCollection() {
        [saveToCollectionButton, mobileSaveToCollectionButton].forEach(button => { if (button) { button.disabled = true; button.setAttribute("aria-busy", "true"); } });
        const state = collectState();
        const now = Date.now();
        try {
          const extracted = await Promise.all(extractCurrentWorks(state).map(async (work) => (
            work.cover ? { ...work, cover: await grid9CoverStorageDataUrl(work.cover, true) } : work
          )));
          if (!extracted.length) { showAppAlert("没有可存入收藏的记录。"); return; }
          const existingById = new Map(records.map(work => [work.id, work]));
          let added = 0;
          let updated = 0;
          const nextWorks = extracted.map(work => {
            const previous = existingById.get(work.id);
            if (previous) updated += 1; else added += 1;
            const merged = { ...(previous || {}), ...work, addedAt: previous?.addedAt || now, editedAt: now };
            Object.keys(work).forEach(key => { if (work[key] === "" || (Array.isArray(work[key]) && !work[key].length)) merged[key] = previous?.[key] ?? work[key]; });
            return merged;
          });
          await putWorks(nextWorks);
          records = records.filter(item => !nextWorks.some(work => work.id === item.id)).concat(nextWorks);
          render();
          trackFixedUsageEvent("feature-save-to-collection-success");
          showAppAlert("已存入 " + added + " 条，更新 " + updated + " 条");
        } catch (error) {
          console.error("Save to collection failed", error);
          showAppAlert("存入收藏失败，请检查浏览器是否允许本地存储。");
        } finally {
          [saveToCollectionButton, mobileSaveToCollectionButton].forEach(button => { if (button) { button.disabled = false; button.removeAttribute("aria-busy"); } });
        }
      }
      importFromCollectionButton?.addEventListener("click", openCollectionPicker);
      mobileImportFromCollectionButton?.addEventListener("click", event => {
        if (mobileDataDropdown) mobileDataDropdown.hidden = true;
        mobileDataMenuButton?.setAttribute("aria-expanded", "false");
        openCollectionPicker(event);
      });
      collectionPickerGrid?.addEventListener("click", event => {
        const card = event.target.closest("[data-collection-picker-id]");
        if (card && collectionPickerGrid.contains(card)) toggleCollectionPickerSelection(card.dataset.collectionPickerId);
      });
      collectionPickerSearch?.addEventListener("input", () => renderCollectionPicker(true));
      collectionPickerSort?.addEventListener("change", () => renderCollectionPicker(true));
      collectionPickerClear?.addEventListener("click", () => {
        collectionPickerSelection = [];
        updateCollectionPickerCardSelection();
        renderCollectionPickerTray();
      });
      collectionPickerImport?.addEventListener("click", () => void importSelectedCollectionPickerWorks());
      collectionPickerCancel?.addEventListener("click", closeCollectionPicker);
      collectionPickerClose?.addEventListener("click", closeCollectionPicker);
      collectionPickerModal?.addEventListener("click", event => {
        if (event.target === collectionPickerModal) closeCollectionPicker();
      });
      document.addEventListener("keydown", event => {
        if (event.key === "Escape" && collectionPickerModal && !collectionPickerModal.hidden) closeCollectionPicker();
      });
      document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        if (!appDialogModal.hidden) return;
        if (!collectionBatchTagModal.hidden) {
          closeCollectionBatchTagModal();
          return;
        }
        if (collectionBatchMode) setCollectionBatchMode(false);
      });
      mainNavButtons.forEach(button => button.addEventListener("click", () => {
        closeCollectionPicker();
        if (collectionBatchMode) setCollectionBatchMode(false);
      }));
      [saveToCollectionButton, mobileSaveToCollectionButton].forEach(button => { if (button) button.addEventListener("click", saveCurrentToCollection); });
      const collectionImportInput = document.getElementById("collectionImportInput");
      document.getElementById("collectionRjImportButton").onclick = importCollectionByRj;
      document.getElementById("collectionBatchAddButton").onclick = openCollectionBatchAdd;
      document.getElementById("collectionImportButton").onclick = () => collectionImportInput.click();
      document.getElementById("collectionExportButton").onclick = () => void exportCollectionBackup();
      document.getElementById("collectionNewRecordButton").onclick = openNewDetail;
      collectionImportInput.onchange = () => { const file = collectionImportInput.files?.[0]; if (file) void importCollectionBackup(file); collectionImportInput.value = ""; };
      loadWorks().then(items => {
        records = items;
        render();
        if (collectionPickerModal && !collectionPickerModal.hidden) renderCollectionPicker(true);
        const savedDetailId = localStorage.getItem(COLLECTION_DETAIL_KEY);
        if (savedDetailId && records.some(work => String(work.id) === savedDetailId)) openDetail(savedDetailId);
        else if (savedDetailId) localStorage.removeItem(COLLECTION_DETAIL_KEY);
      }).catch(error => console.error("Load collection failed", error));
    })();
