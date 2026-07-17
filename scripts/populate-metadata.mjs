/**
 * Populates description and aliases for all icon metadata sidecars.
 * Safe to re-run — only updates fields that are empty.
 * Set FORCE=true to overwrite existing values.
 */

import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const FORCE = process.env.FORCE === "true";

const RAW = "raw-icons";

const FOLDER_MAP = {
  "Navigation":              "Navigation",
  "Data actions":            "Data actions",
  "Search & discovery":      "Search & discovery",
  "Calendar & scheduling":   "Calendar & scheduling",
  "Communications":          "Communications",
  "Sharing":                 "Sharing",
  "Documents & content":     "Documents & content",
  "Workflow & productivity":  "Workflow & productivity",
  "User & ID":               "User & ID",
  "Status & feedback":       "Status & feedback",
  "Security & access":       "Security & access",
  "Analytics & reports":     "Analytics & reports",
  "Settings & admin":        "Settings & admin",
  "System & utility":        "System & utility",
  "AI":                      "AI",
  "Layout":                  "Layout",
  "Health":                  "Health",
  "Education":               "Education",
  "Legal":                   "Legal",
  "Finance":                 "Finance",
};

// icon-id → { description, aliases, keywords (merged with existing) }
const META = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  "apps": {
    description: "Grid of application tiles, typically used as an app launcher or home screen",
    aliases: ["app-launcher", "home-screen", "app-grid"],
    keywords: ["apps", "grid", "launcher", "home", "tiles", "start"],
  },
  "arrow-diagonal-down-left": {
    description: "Diagonal arrow pointing down and to the left",
    aliases: ["arrow-down-left", "arrow-sw"],
    keywords: ["arrow", "diagonal", "down", "left", "direction", "south-west"],
  },
  "arrow-diagonal-down-right": {
    description: "Diagonal arrow pointing down and to the right",
    aliases: ["arrow-down-right", "arrow-se"],
    keywords: ["arrow", "diagonal", "down", "right", "direction", "south-east"],
  },
  "arrow-diagonal-up-left": {
    description: "Diagonal arrow pointing up and to the left",
    aliases: ["arrow-up-left", "arrow-nw"],
    keywords: ["arrow", "diagonal", "up", "left", "direction", "north-west"],
  },
  "arrow-diagonal-up-right": {
    description: "Diagonal arrow pointing up and to the right",
    aliases: ["arrow-up-right", "arrow-ne"],
    keywords: ["arrow", "diagonal", "up", "right", "direction", "north-east"],
  },
  "arrow-down": {
    description: "Arrow pointing downward, used to indicate direction, scroll, or collapse",
    aliases: ["arrow-south"],
    keywords: ["arrow", "down", "direction", "south", "scroll", "collapse"],
  },
  "arrow-left": {
    description: "Arrow pointing left, used to go back or indicate previous",
    aliases: ["arrow-back", "arrow-previous", "arrow-west"],
    keywords: ["arrow", "left", "back", "previous", "direction", "west"],
  },
  "arrow-right": {
    description: "Arrow pointing right, used to go forward or indicate next",
    aliases: ["arrow-forward", "arrow-next", "arrow-east"],
    keywords: ["arrow", "right", "forward", "next", "direction", "east"],
  },
  "arrow-up": {
    description: "Arrow pointing upward, used to indicate direction, scroll, or expand",
    aliases: ["arrow-north"],
    keywords: ["arrow", "up", "direction", "north", "scroll", "expand"],
  },
  "chevron-down": {
    description: "Downward-facing chevron, typically used for dropdowns or expandable sections",
    aliases: ["caret-down", "dropdown"],
    keywords: ["chevron", "down", "caret", "dropdown", "expand", "collapse"],
  },
  "chevron-left": {
    description: "Left-facing chevron, used for back navigation or previous item",
    aliases: ["caret-left"],
    keywords: ["chevron", "left", "caret", "back", "previous", "navigate"],
  },
  "chevron-right": {
    description: "Right-facing chevron, used for forward navigation or next item",
    aliases: ["caret-right"],
    keywords: ["chevron", "right", "caret", "forward", "next", "navigate"],
  },
  "chevron-up": {
    description: "Upward-facing chevron, typically used to collapse a section or scroll up",
    aliases: ["caret-up"],
    keywords: ["chevron", "up", "caret", "collapse", "scroll"],
  },
  "close": {
    description: "X mark to close, dismiss, or remove something",
    aliases: ["x", "cancel", "dismiss", "remove"],
    keywords: ["close", "dismiss", "cancel", "remove", "clear", "delete", "x"],
  },
  "dashboard": {
    description: "Dashboard or overview layout with multiple panels",
    aliases: ["overview", "home"],
    keywords: ["dashboard", "overview", "layout", "panels", "home", "widgets"],
  },
  "fullscreen": {
    description: "Expand to fill the full screen or viewport",
    aliases: ["expand", "maximize"],
    keywords: ["fullscreen", "expand", "maximize", "view", "full", "screen"],
  },
  "grid": {
    description: "Grid or tile layout view",
    aliases: ["tiles", "mosaic"],
    keywords: ["grid", "layout", "tiles", "view", "mosaic"],
  },
  "home": {
    description: "Home or main page of an application",
    aliases: ["house", "start", "main"],
    keywords: ["home", "house", "start", "main", "landing"],
  },
  "key-return": {
    description: "Return or enter key on a keyboard",
    aliases: ["enter", "return"],
    keywords: ["return", "enter", "keyboard", "key", "submit", "newline"],
  },
  "layout": {
    description: "Layout panels showing a main content area with a sidebar",
    aliases: ["panels", "template"],
    keywords: ["layout", "panels", "sidebar", "template", "structure"],
  },
  "layout-list": {
    description: "List layout view with rows of content",
    aliases: ["list-view", "rows"],
    keywords: ["list", "layout", "rows", "view", "feed"],
  },
  "marketplace": {
    description: "Marketplace or storefront for browsing and purchasing items",
    aliases: ["store", "shop"],
    keywords: ["marketplace", "store", "shop", "storefront", "browse"],
  },
  "menu": {
    description: "Hamburger menu icon to open a navigation drawer or sidebar",
    aliases: ["hamburger", "nav", "burger"],
    keywords: ["menu", "hamburger", "navigation", "nav", "bars", "sidebar"],
  },
  "minimise": {
    description: "Minimise a window or panel to a smaller state",
    aliases: ["minimize", "collapse", "shrink"],
    keywords: ["minimise", "minimize", "collapse", "shrink", "window"],
  },
  "more-horizontal": {
    description: "Horizontal ellipsis indicating additional options or overflow menu",
    aliases: ["ellipsis", "options", "more", "overflow"],
    keywords: ["more", "options", "ellipsis", "overflow", "menu", "dots", "horizontal"],
  },
  "more-vertical": {
    description: "Vertical ellipsis indicating additional options or overflow menu",
    aliases: ["kebab-menu", "options", "overflow"],
    keywords: ["more", "options", "ellipsis", "overflow", "menu", "dots", "vertical", "kebab"],
  },
  "open-external": {
    description: "Open a link in a new tab or external window",
    aliases: ["external-link", "new-tab", "open-new"],
    keywords: ["external", "link", "new-tab", "open", "outbound", "share"],
  },
  "restoredown": {
    description: "Restore a maximised window back to its previous size",
    aliases: ["restore-down", "restore-window"],
    keywords: ["restore", "window", "resize", "down", "shrink"],
  },
  "sidebar-left": {
    description: "Toggle or show a left-side navigation panel",
    aliases: ["panel-left", "drawer-left"],
    keywords: ["sidebar", "panel", "left", "navigation", "drawer", "layout"],
  },
  "sidebar-right": {
    description: "Toggle or show a right-side contextual panel",
    aliases: ["panel-right", "drawer-right"],
    keywords: ["sidebar", "panel", "right", "contextual", "drawer", "layout"],
  },
  "sign-out": {
    description: "Sign out or log out of an account",
    aliases: ["logout", "log-out"],
    keywords: ["sign-out", "logout", "exit", "leave", "account"],
  },
  "swap": {
    description: "Swap or exchange two items",
    aliases: ["exchange", "switch", "transfer"],
    keywords: ["swap", "exchange", "switch", "transfer", "replace", "arrows"],
  },

  // ── Data Actions ─────────────────────────────────────────────────────────────
  "add": {
    description: "Add or create a new item",
    aliases: ["plus", "create", "new"],
    keywords: ["add", "create", "new", "plus", "insert"],
  },
  "add-round": {
    description: "Add a new item using a circular button",
    aliases: ["plus-circle", "create-circle"],
    keywords: ["add", "create", "new", "plus", "circle", "round"],
  },
  "add-square": {
    description: "Add a new item using a square button",
    aliases: ["plus-square", "create-square"],
    keywords: ["add", "create", "new", "plus", "square"],
  },
  "archive": {
    description: "Archive an item to store it out of the active view",
    aliases: ["store", "box"],
    keywords: ["archive", "store", "box", "storage", "backup", "index"],
  },
  "bin": {
    description: "Delete or move an item to the trash",
    aliases: ["trash", "delete", "remove", "garbage"],
    keywords: ["bin", "trash", "delete", "remove", "garbage", "rubbish", "discard"],
  },
  "briefcase": {
    description: "Briefcase representing work, tasks, or a job",
    aliases: ["work", "job", "portfolio"],
    keywords: ["briefcase", "work", "job", "portfolio", "bag", "business"],
  },
  "copy": {
    description: "Copy selected content to the clipboard",
    aliases: ["duplicate-content", "clipboard-copy"],
    keywords: ["copy", "clone", "duplicate", "clipboard", "multiple"],
  },
  "cut": {
    description: "Cut selected content to the clipboard",
    aliases: ["scissors"],
    keywords: ["cut", "scissors", "remove", "clipboard", "snip"],
  },
  "duplicate": {
    description: "Create an exact copy of an item",
    aliases: ["clone", "copy-item"],
    keywords: ["duplicate", "clone", "copy", "replicate", "repeat"],
  },
  "edit": {
    description: "Edit or modify existing content",
    aliases: ["pencil", "modify", "update", "write"],
    keywords: ["edit", "modify", "update", "pencil", "write", "change"],
  },
  "paste": {
    description: "Paste content from the clipboard",
    aliases: ["clipboard-paste"],
    keywords: ["paste", "clipboard", "insert", "place"],
  },
  "refresh": {
    description: "Refresh or reload content",
    aliases: ["reload", "sync", "update"],
    keywords: ["refresh", "reload", "sync", "update", "repeat", "arrows"],
  },
  "restore": {
    description: "Restore an item from archive or trash",
    aliases: ["unarchive", "recover"],
    keywords: ["restore", "recover", "unarchive", "undo", "back"],
  },
  "save": {
    description: "Save the current state or file",
    aliases: ["floppy-disk", "store"],
    keywords: ["save", "store", "floppy", "disk", "persist", "write"],
  },
  "subtract": {
    description: "Remove or subtract an item",
    aliases: ["minus", "remove", "decrease"],
    keywords: ["subtract", "minus", "remove", "decrease", "reduce"],
  },
  "subtract-round": {
    description: "Remove an item using a circular button",
    aliases: ["minus-circle", "remove-circle"],
    keywords: ["subtract", "minus", "remove", "circle", "round"],
  },
  "subtract-square": {
    description: "Remove an item using a square button",
    aliases: ["minus-square", "remove-square"],
    keywords: ["subtract", "minus", "remove", "square"],
  },

  // ── Search & Discovery ───────────────────────────────────────────────────────
  "bookmark": {
    description: "Bookmark or save an item for later reference",
    aliases: ["save", "favourite", "mark"],
    keywords: ["bookmark", "save", "favourite", "mark", "pin", "tag", "read-later"],
  },
  "favourite": {
    description: "Mark an item as a favourite",
    aliases: ["favorite", "star", "like"],
    keywords: ["favourite", "favorite", "star", "like", "rating", "bookmark"],
  },
  "filter": {
    description: "Filter a list or dataset by specific criteria",
    aliases: ["sort", "refine"],
    keywords: ["filter", "sort", "refine", "search", "narrow", "criteria"],
  },
  "find": {
    description: "Find or search within content",
    aliases: ["search", "lookup"],
    keywords: ["find", "search", "lookup", "scan", "locate"],
  },
  "history": {
    description: "View previously visited items or actions",
    aliases: ["recent", "log", "timeline"],
    keywords: ["history", "recent", "log", "past", "timeline", "clock"],
  },
  "locate": {
    description: "Locate the user's current position on a map",
    aliases: ["my-location", "gps", "position"],
    keywords: ["locate", "gps", "position", "current", "map", "here"],
  },
  "location": {
    description: "A map pin or location marker",
    aliases: ["pin", "map-pin", "place", "marker"],
    keywords: ["location", "pin", "map", "marker", "place", "address", "waypoint"],
  },
  "search": {
    description: "Search or find content using a magnifying glass",
    aliases: ["find", "magnify", "lookup"],
    keywords: ["search", "find", "magnify", "lookup", "lens", "scan", "discover"],
  },
  "sort-ascending": {
    description: "Sort a list in ascending order (A to Z or low to high)",
    aliases: ["sort-asc", "order-ascending"],
    keywords: ["sort", "ascending", "order", "asc", "low-to-high", "a-z"],
  },
  "sort-descending": {
    description: "Sort a list in descending order (Z to A or high to low)",
    aliases: ["sort-desc", "order-descending"],
    keywords: ["sort", "descending", "order", "desc", "high-to-low", "z-a"],
  },
  "tag": {
    description: "Label or tag an item for categorisation",
    aliases: ["label", "badge", "category"],
    keywords: ["tag", "label", "badge", "category", "ticket", "mark"],
  },

  // ── Calendar & Scheduling ───────────────────────────────────────────────────
  "appointment": {
    description: "A scheduled appointment or meeting slot",
    aliases: ["booking", "slot"],
    keywords: ["appointment", "booking", "slot", "schedule", "calendar", "meeting"],
  },
  "appointment-new": {
    description: "Create a new appointment or booking",
    aliases: ["new-appointment", "book"],
    keywords: ["appointment", "new", "create", "booking", "schedule"],
  },
  "boardroom": {
    description: "A boardroom or conference room booking",
    aliases: ["conference-room", "meeting-room"],
    keywords: ["boardroom", "conference", "meeting", "room", "booking"],
  },
  "calendar": {
    description: "Calendar for viewing dates and scheduling events",
    aliases: ["date", "schedule"],
    keywords: ["calendar", "date", "schedule", "month", "year", "events"],
  },
  "clock": {
    description: "Clock showing the current time",
    aliases: ["time", "watch"],
    keywords: ["clock", "time", "watch", "hour", "minute"],
  },
  "deadline": {
    description: "A deadline or due date marker",
    aliases: ["due-date", "expiry"],
    keywords: ["deadline", "due-date", "expiry", "overdue", "time", "urgent"],
  },
  "event": {
    description: "A calendar event or scheduled occurrence",
    aliases: ["occasion", "happening"],
    keywords: ["event", "calendar", "occasion", "happening", "schedule"],
  },
  "holiday": {
    description: "A holiday or time-off period on a calendar",
    aliases: ["vacation", "leave", "time-off"],
    keywords: ["holiday", "vacation", "leave", "time-off", "calendar"],
  },
  "meeting": {
    description: "A scheduled meeting with multiple participants",
    aliases: ["conference", "call"],
    keywords: ["meeting", "conference", "call", "participants", "schedule"],
  },
  "recurring": {
    description: "A recurring or repeating event",
    aliases: ["repeat", "repeating", "series"],
    keywords: ["recurring", "repeat", "series", "repeating", "cycle", "rotation"],
  },
  "reminder": {
    description: "A reminder or alert for an upcoming event",
    aliases: ["alert", "notification"],
    keywords: ["reminder", "alert", "notification", "bell", "upcoming"],
  },
  "stopwatch": {
    description: "A stopwatch for measuring elapsed time",
    aliases: ["timer", "elapsed"],
    keywords: ["stopwatch", "timer", "elapsed", "time", "measure"],
  },

  // ── Communications ───────────────────────────────────────────────────────────
  "ai": {
    description: "AI-powered chat or assistant conversation",
    aliases: ["ai-chat", "assistant", "copilot"],
    keywords: ["ai", "assistant", "chat", "copilot", "artificial intelligence", "bot"],
  },
  "announcement": {
    description: "An announcement or broadcast message to a group",
    aliases: ["broadcast", "megaphone", "alert"],
    keywords: ["announcement", "broadcast", "megaphone", "alert", "notice", "news"],
  },
  "chat-close": {
    description: "Close or end an active chat conversation",
    aliases: ["end-chat", "close-conversation"],
    keywords: ["chat", "close", "end", "dismiss", "conversation"],
  },
  "chat": {
    description: "Chat or instant messaging conversation",
    aliases: ["message", "im", "conversation"],
    keywords: ["chat", "message", "conversation", "im", "bubble", "talk"],
  },
  "chat-history": {
    description: "View previous chat messages and conversation history",
    aliases: ["message-history", "past-conversations"],
    keywords: ["chat", "history", "past", "messages", "conversation", "log"],
  },
  "chat-new": {
    description: "Start a new chat or conversation",
    aliases: ["new-message", "new-chat", "compose"],
    keywords: ["chat", "new", "compose", "start", "message", "conversation"],
  },
  "cloud": {
    description: "Cloud storage or cloud-based service",
    aliases: ["cloud-storage", "online"],
    keywords: ["cloud", "storage", "online", "remote", "server", "saas"],
  },
  "comment": {
    description: "Add a comment or note to an item",
    aliases: ["note", "annotation"],
    keywords: ["comment", "note", "annotation", "reply", "feedback", "chat"],
  },
  "headset": {
    description: "Headset used for support calls or customer service",
    aliases: ["support", "helpdesk", "customer-service"],
    keywords: ["headset", "support", "helpdesk", "customer-service", "call", "audio"],
  },
  "inbox": {
    description: "Email inbox for incoming messages",
    aliases: ["email-inbox", "messages"],
    keywords: ["inbox", "email", "messages", "incoming", "mail", "tray"],
  },
  "mail": {
    description: "Email or mail message",
    aliases: ["email", "letter", "message"],
    keywords: ["mail", "email", "letter", "message", "envelope", "send"],
  },
  "microphone": {
    description: "Microphone for audio recording or voice input",
    aliases: ["mic", "voice", "record"],
    keywords: ["microphone", "mic", "voice", "record", "audio", "speak", "input"],
  },
  "new-conversation": {
    description: "Start a new conversation or thread",
    aliases: ["compose", "new-thread"],
    keywords: ["new", "conversation", "thread", "compose", "start", "chat"],
  },
  "news": {
    description: "News articles or content feed",
    aliases: ["articles", "feed", "blog"],
    keywords: ["news", "articles", "feed", "blog", "content", "rss", "updates"],
  },
  "notifications": {
    description: "Notification bell for alerts and updates",
    aliases: ["bell", "alerts"],
    keywords: ["notifications", "bell", "alerts", "updates", "reminder", "badge"],
  },
  "outbox": {
    description: "Email outbox for sent or pending messages",
    aliases: ["sent", "outgoing"],
    keywords: ["outbox", "sent", "outgoing", "mail", "email", "pending"],
  },
  "phone": {
    description: "Phone or telephone for calling",
    aliases: ["call", "telephone", "ring"],
    keywords: ["phone", "call", "telephone", "ring", "contact", "dial"],
  },
  "send": {
    description: "Send a message or submit a form",
    aliases: ["submit", "send-message", "paper-plane"],
    keywords: ["send", "submit", "message", "email", "paper-plane", "dispatch"],
  },
  "video-call": {
    description: "Start a video call or video conference",
    aliases: ["video-conference", "video-meeting"],
    keywords: ["video", "call", "conference", "meeting", "camera", "virtual"],
  },
  "web": {
    description: "Open a web page or browser",
    aliases: ["browser", "website", "url"],
    keywords: ["web", "browser", "website", "url", "internet", "link", "page"],
  },

  // ── Sharing ──────────────────────────────────────────────────────────────────
  "export": {
    description: "Export data or a file out of the application",
    aliases: ["download", "extract"],
    keywords: ["export", "download", "extract", "output", "save", "share"],
  },
  "import": {
    description: "Import data or a file into the application",
    aliases: ["upload", "ingest"],
    keywords: ["import", "upload", "ingest", "input", "load", "bring-in"],
  },
  "link": {
    description: "A hyperlink or URL connection between items",
    aliases: ["url", "hyperlink", "chain"],
    keywords: ["link", "url", "hyperlink", "chain", "connect", "web"],
  },
  "merge": {
    description: "Merge two or more items into one",
    aliases: ["combine", "join", "consolidate"],
    keywords: ["merge", "combine", "join", "consolidate", "unite", "branches"],
  },
  "share": {
    description: "Share content with others",
    aliases: ["send", "distribute", "share-out"],
    keywords: ["share", "send", "distribute", "social", "network", "post"],
  },
  "sync": {
    description: "Synchronise data across devices or services",
    aliases: ["synchronise", "synchronize", "refresh"],
    keywords: ["sync", "synchronise", "synchronize", "refresh", "update", "arrows"],
  },
  "unlink": {
    description: "Remove a hyperlink or disconnect two items",
    aliases: ["break-link", "disconnect"],
    keywords: ["unlink", "break", "disconnect", "remove", "url", "chain"],
  },

  // ── Documents & Content ──────────────────────────────────────────────────────
  "attach": {
    description: "Attach a file to a message or record",
    aliases: ["attachment", "paperclip", "file-attach"],
    keywords: ["attach", "attachment", "paperclip", "file", "clip", "append"],
  },
  "audio": {
    description: "An audio file or sound recording",
    aliases: ["sound", "music-file"],
    keywords: ["audio", "sound", "music", "file", "recording", "mp3", "wav"],
  },
  "clipboard": {
    description: "Clipboard for copying and pasting content",
    aliases: ["copy-paste"],
    keywords: ["clipboard", "copy", "paste", "board", "notes"],
  },
  "document": {
    description: "A generic document or file",
    aliases: ["file", "doc", "paper"],
    keywords: ["document", "file", "doc", "paper", "text", "record"],
  },
  "document-new": {
    description: "Create a new document or file",
    aliases: ["new-file", "new-document", "create-document"],
    keywords: ["document", "new", "create", "file", "blank", "draft"],
  },
  "download": {
    description: "Download a file to your device",
    aliases: ["save-file", "get"],
    keywords: ["download", "save", "file", "get", "transfer", "arrow"],
  },
  "folder-basic": {
    description: "A basic folder for organising files",
    aliases: ["folder", "directory"],
    keywords: ["folder", "directory", "organise", "files", "basic"],
  },
  "folder": {
    description: "A folder for organising and grouping files",
    aliases: ["directory", "group"],
    keywords: ["folder", "directory", "group", "files", "organise", "storage"],
  },
  "folder-new": {
    description: "Create a new folder or directory",
    aliases: ["new-folder", "create-folder"],
    keywords: ["folder", "new", "create", "directory", "add"],
  },
  "image": {
    description: "An image or photo file",
    aliases: ["photo", "picture", "img"],
    keywords: ["image", "photo", "picture", "img", "media", "graphic"],
  },
  "notes": {
    description: "Notes or freeform text content",
    aliases: ["notepad", "memo"],
    keywords: ["notes", "notepad", "memo", "text", "write", "freeform"],
  },
  "paragraph": {
    description: "A paragraph or block of text content",
    aliases: ["text", "body-text", "prose"],
    keywords: ["paragraph", "text", "body", "prose", "content", "writing"],
  },
  "ticket": {
    description: "A ticket for support, events, or issue tracking",
    aliases: ["issue", "support-ticket", "voucher"],
    keywords: ["ticket", "issue", "support", "voucher", "event", "tracking"],
  },
  "upload": {
    description: "Upload a file from your device",
    aliases: ["send-file"],
    keywords: ["upload", "send", "file", "transfer", "arrow", "push"],
  },
  "video": {
    description: "A video file or recording",
    aliases: ["movie", "film", "clip"],
    keywords: ["video", "movie", "film", "clip", "media", "recording", "mp4"],
  },

  // ── Workflow & Productivity ──────────────────────────────────────────────────
  "approve": {
    description: "Approve or accept an item",
    aliases: ["accept", "confirm", "tick", "check"],
    keywords: ["approve", "accept", "confirm", "tick", "check", "done", "complete"],
  },
  "approve-square": {
    description: "Approve or accept an item using a square checkbox",
    aliases: ["checkbox", "check-square"],
    keywords: ["approve", "accept", "checkbox", "square", "tick", "done"],
  },
  "automation": {
    description: "Automated workflow or scheduled process",
    aliases: ["automated", "bot", "scheduled"],
    keywords: ["automation", "automated", "bot", "scheduled", "workflow", "process", "trigger"],
  },
  "cancel": {
    description: "Cancel or reject an action",
    aliases: ["reject", "deny", "decline"],
    keywords: ["cancel", "reject", "deny", "decline", "stop", "close", "x"],
  },
  "cancel-square": {
    description: "Cancel or reject an action using a square button",
    aliases: ["reject-square"],
    keywords: ["cancel", "reject", "square", "stop", "x"],
  },
  "checklist": {
    description: "A checklist of items to complete",
    aliases: ["todo-list", "task-list"],
    keywords: ["checklist", "todo", "task", "list", "items", "complete", "pending"],
  },
  "in-progress": {
    description: "An item that is currently in progress or being worked on",
    aliases: ["working", "active", "ongoing"],
    keywords: ["in-progress", "working", "active", "ongoing", "loading", "processing"],
  },
  "magic-wand": {
    description: "Magic wand for AI-powered or automatic actions",
    aliases: ["wand", "ai-action", "auto-fix"],
    keywords: ["magic", "wand", "ai", "auto", "fix", "generate", "transform"],
  },
  "palette": {
    description: "Colour palette for theming or design customisation",
    aliases: ["color-palette", "colour-picker", "theme"],
    keywords: ["palette", "colour", "color", "theme", "design", "paint", "customise"],
  },
  "pause": {
    description: "Pause a running process or media playback",
    aliases: ["hold", "stop-temporarily"],
    keywords: ["pause", "hold", "stop", "wait", "playback", "media"],
  },
  "play": {
    description: "Start or resume a process or media playback",
    aliases: ["start", "run", "resume"],
    keywords: ["play", "start", "run", "resume", "playback", "media", "begin"],
  },
  "process": {
    description: "A process or workflow step",
    aliases: ["workflow-step", "procedure"],
    keywords: ["process", "workflow", "step", "procedure", "flow", "cycle"],
  },
  "queue": {
    description: "A queue of items waiting to be processed",
    aliases: ["waiting-list", "backlog"],
    keywords: ["queue", "waiting", "list", "backlog", "order", "sequence"],
  },
  "stop": {
    description: "Stop a running process entirely",
    aliases: ["halt", "end"],
    keywords: ["stop", "halt", "end", "terminate", "finish", "square"],
  },
  "target": {
    description: "A goal, target, or objective to achieve",
    aliases: ["goal", "aim", "objective"],
    keywords: ["target", "goal", "aim", "objective", "bullseye", "focus"],
  },
  "task": {
    description: "A task or work item to complete",
    aliases: ["todo", "work-item", "action"],
    keywords: ["task", "todo", "work", "action", "item", "complete"],
  },
  "task-new": {
    description: "Create a new task or work item",
    aliases: ["new-task", "create-task", "add-todo"],
    keywords: ["task", "new", "create", "todo", "add", "work-item"],
  },
  "timeline": {
    description: "A timeline view of events or tasks in chronological order",
    aliases: ["gantt", "schedule", "roadmap"],
    keywords: ["timeline", "gantt", "schedule", "roadmap", "chronological", "events"],
  },
  "workflow": {
    description: "A multi-step workflow or process diagram",
    aliases: ["flowchart", "pipeline", "process-flow"],
    keywords: ["workflow", "flowchart", "pipeline", "process", "steps", "automation"],
  },

  // ── User & ID ─────────────────────────────────────────────────────────────────
  "address-book": {
    description: "Address book or contact list",
    aliases: ["contacts", "phonebook", "directory"],
    keywords: ["address-book", "contacts", "phonebook", "directory", "people"],
  },
  "idbadge": {
    description: "Identity badge or staff ID card",
    aliases: ["id-badge", "staff-id", "access-card"],
    keywords: ["id", "badge", "identity", "staff", "card", "access", "credential"],
  },
  "organisation": {
    description: "Organisation chart or company hierarchy",
    aliases: ["org-chart", "hierarchy", "organization"],
    keywords: ["organisation", "organization", "chart", "hierarchy", "company", "structure", "team"],
  },
  "permissions": {
    description: "User permissions, access rights, or role settings",
    aliases: ["access", "rights", "roles"],
    keywords: ["permissions", "access", "rights", "roles", "security", "admin"],
  },
  "profile": {
    description: "User profile or account details",
    aliases: ["account", "user-profile", "avatar"],
    keywords: ["profile", "account", "user", "avatar", "details", "personal"],
  },
  "team": {
    description: "A team or group of users",
    aliases: ["group", "users", "squad"],
    keywords: ["team", "group", "users", "squad", "people", "members", "collaboration"],
  },
  "user-add": {
    description: "Add or invite a new user",
    aliases: ["invite", "add-user", "user-plus", "new-user"],
    keywords: ["user", "add", "invite", "new", "plus", "create", "person"],
  },
  "user-circle": {
    description: "User avatar in a circular frame",
    aliases: ["avatar", "user-avatar", "profile-circle"],
    keywords: ["user", "circle", "avatar", "profile", "account", "person"],
  },
  "user": {
    description: "A single user or person",
    aliases: ["person", "account", "individual"],
    keywords: ["user", "person", "account", "individual", "profile", "contact"],
  },
  "user-edit": {
    description: "Edit a user's profile or account details",
    aliases: ["edit-user", "update-profile"],
    keywords: ["user", "edit", "modify", "update", "profile", "account"],
  },
  "user-group": {
    description: "A group of users or people",
    aliases: ["group", "team", "people"],
    keywords: ["user", "group", "team", "people", "multiple", "members"],
  },
  "user-remove": {
    description: "Remove or delete a user",
    aliases: ["remove-user", "delete-user", "user-minus"],
    keywords: ["user", "remove", "delete", "minus", "revoke", "offboard"],
  },

  // ── Status & Feedback ────────────────────────────────────────────────────────
  "circle-dashed": {
    description: "A dashed circle indicating a pending or inactive state",
    aliases: ["pending", "empty-state", "placeholder"],
    keywords: ["circle", "dashed", "pending", "inactive", "empty", "placeholder"],
  },
  "circle-notch": {
    description: "Spinning circle used as a loading or progress indicator",
    aliases: ["spinner", "loading", "loader"],
    keywords: ["loading", "spinner", "progress", "wait", "circle", "busy", "throbber"],
  },
  "error": {
    description: "An error state indicating something went wrong",
    aliases: ["failure", "wrong", "invalid"],
    keywords: ["error", "failure", "wrong", "invalid", "problem", "issue", "x"],
  },
  "help": {
    description: "Help or support information",
    aliases: ["question", "support", "faq", "?"],
    keywords: ["help", "support", "question", "faq", "info", "guide", "?"],
  },
  "hype": {
    description: "Excitement, enthusiasm, or positive energy",
    aliases: ["excited", "boost", "fire"],
    keywords: ["hype", "excited", "boost", "fire", "energy", "positive", "trending"],
  },
  "info": {
    description: "Informational notice or tooltip content",
    aliases: ["information", "about", "notice"],
    keywords: ["info", "information", "about", "notice", "hint", "tooltip", "i"],
  },
  "priority-high": {
    description: "High priority item requiring urgent attention",
    aliases: ["urgent", "critical", "high"],
    keywords: ["priority", "high", "urgent", "critical", "important", "alert"],
  },
  "priority-low": {
    description: "Low priority item that can be addressed later",
    aliases: ["low", "minor", "deferred"],
    keywords: ["priority", "low", "minor", "deferred", "later", "backlog"],
  },
  "priority-medium": {
    description: "Medium priority item for normal workflow",
    aliases: ["medium", "normal", "moderate"],
    keywords: ["priority", "medium", "normal", "moderate", "standard"],
  },
  "signal-high": {
    description: "High signal strength or strong connection",
    aliases: ["signal-full", "strong-signal"],
    keywords: ["signal", "high", "strong", "full", "connection", "bars"],
  },
  "signal-low": {
    description: "Low signal strength or weak connection",
    aliases: ["signal-weak", "weak-signal"],
    keywords: ["signal", "low", "weak", "poor", "connection", "bars"],
  },
  "signal-medium": {
    description: "Medium signal strength or moderate connection",
    aliases: ["signal-fair", "medium-signal"],
    keywords: ["signal", "medium", "fair", "moderate", "connection", "bars"],
  },
  "success-round": {
    description: "A round success indicator showing a completed action",
    aliases: ["check-circle", "done", "complete", "tick-circle"],
    keywords: ["success", "done", "complete", "tick", "check", "circle", "approved"],
  },
  "thumbs-down": {
    description: "Negative feedback or disapproval",
    aliases: ["dislike", "no", "reject"],
    keywords: ["thumbs-down", "dislike", "no", "reject", "negative", "feedback"],
  },
  "thumbs-up": {
    description: "Positive feedback or approval",
    aliases: ["like", "yes", "approve"],
    keywords: ["thumbs-up", "like", "yes", "approve", "positive", "feedback"],
  },
  "warning": {
    description: "A warning or caution alert",
    aliases: ["alert", "caution", "danger", "triangle"],
    keywords: ["warning", "alert", "caution", "danger", "triangle", "exclamation", "!"],
  },

  // ── Security & Access ────────────────────────────────────────────────────────
  "audit": {
    description: "Audit trail or activity log for compliance and review",
    aliases: ["audit-log", "compliance", "trail"],
    keywords: ["audit", "log", "compliance", "trail", "review", "history", "record"],
  },
  "authentication": {
    description: "User authentication or identity verification",
    aliases: ["auth", "verify", "login"],
    keywords: ["authentication", "auth", "verify", "login", "identity", "credential", "mfa"],
  },
  "certificate": {
    description: "Security certificate or digital credential",
    aliases: ["cert", "ssl", "credential"],
    keywords: ["certificate", "cert", "ssl", "credential", "trust", "secure", "digital"],
  },
  "incognito": {
    description: "Incognito or private browsing mode",
    aliases: ["private", "anonymous", "stealth"],
    keywords: ["incognito", "private", "anonymous", "stealth", "browse", "hidden"],
  },
  "key": {
    description: "Encryption key, password, or access credential",
    aliases: ["password", "credential", "access-key"],
    keywords: ["key", "password", "credential", "access", "unlock", "encryption", "api-key"],
  },
  "lock": {
    description: "Locked or secured state, restricted access",
    aliases: ["locked", "secure", "protected"],
    keywords: ["lock", "locked", "secure", "protected", "restricted", "closed"],
  },
  "password": {
    description: "Password or PIN entry",
    aliases: ["pin", "passcode", "secret"],
    keywords: ["password", "pin", "passcode", "secret", "auth", "credential"],
  },
  "privacy": {
    description: "Privacy settings or data protection controls",
    aliases: ["data-privacy", "gdpr", "protection"],
    keywords: ["privacy", "data", "gdpr", "protection", "policy", "personal"],
  },
  "security-alert": {
    description: "Security alert or threat notification",
    aliases: ["threat", "breach", "security-warning"],
    keywords: ["security", "alert", "threat", "breach", "warning", "danger", "incident"],
  },
  "shield": {
    description: "Security shield representing protection or defence",
    aliases: ["protect", "defence", "guard"],
    keywords: ["shield", "protect", "defence", "guard", "security", "safe", "armour"],
  },
  "unlock": {
    description: "Unlocked or open access state",
    aliases: ["unlocked", "open", "accessible"],
    keywords: ["unlock", "unlocked", "open", "accessible", "free", "permitted"],
  },

  // ── Analytics & Reports ──────────────────────────────────────────────────────
  "analytics": {
    description: "Analytics dashboard showing data insights and metrics",
    aliases: ["insights", "metrics", "data"],
    keywords: ["analytics", "insights", "metrics", "data", "statistics", "dashboard", "kpi"],
  },
  "chart-bar": {
    description: "Bar chart for comparing values across categories",
    aliases: ["bar-chart", "bar-graph"],
    keywords: ["chart", "bar", "graph", "statistics", "analytics", "compare", "columns"],
  },
  "chart-donut": {
    description: "Donut chart showing proportional data",
    aliases: ["donut-chart", "ring-chart"],
    keywords: ["chart", "donut", "ring", "proportion", "statistics", "analytics"],
  },
  "chart-line": {
    description: "Line chart showing trends over time",
    aliases: ["line-chart", "line-graph", "trend-chart"],
    keywords: ["chart", "line", "graph", "trend", "time", "statistics", "analytics"],
  },
  "chart-pie": {
    description: "Pie chart showing proportional data",
    aliases: ["pie-chart"],
    keywords: ["chart", "pie", "proportion", "statistics", "analytics", "segments"],
  },
  "datatable": {
    description: "A data table for displaying structured rows and columns",
    aliases: ["table", "grid-data", "spreadsheet"],
    keywords: ["datatable", "table", "grid", "spreadsheet", "rows", "columns", "data"],
  },
  "forecast": {
    description: "Forecast or predictive data projection",
    aliases: ["prediction", "projection", "trend"],
    keywords: ["forecast", "prediction", "projection", "trend", "future", "estimate"],
  },
  "idea": {
    description: "An idea or insight, represented by a lightbulb",
    aliases: ["lightbulb", "insight", "suggestion"],
    keywords: ["idea", "lightbulb", "insight", "suggestion", "creative", "innovation"],
  },
  "receipt": {
    description: "A receipt or invoice for a transaction",
    aliases: ["invoice", "bill", "transaction"],
    keywords: ["receipt", "invoice", "bill", "transaction", "payment", "purchase"],
  },
  "trend-down": {
    description: "Downward trend indicating decline or decrease",
    aliases: ["trending-down", "decrease", "decline"],
    keywords: ["trend", "down", "decrease", "decline", "fall", "negative", "statistics"],
  },
  "trend-up": {
    description: "Upward trend indicating growth or increase",
    aliases: ["trending-up", "increase", "growth"],
    keywords: ["trend", "up", "increase", "growth", "rise", "positive", "statistics"],
  },

  // ── Settings & Admin ─────────────────────────────────────────────────────────
  "admin": {
    description: "Admin panel or administrative controls",
    aliases: ["administration", "control-panel"],
    keywords: ["admin", "administration", "control", "panel", "settings", "manage"],
  },
  "config": {
    description: "Configuration settings for an application or service",
    aliases: ["configuration", "settings", "options"],
    keywords: ["config", "configuration", "settings", "options", "preferences", "parameters"],
  },
  "dark": {
    description: "Dark mode or dark theme toggle",
    aliases: ["dark-mode", "dark-theme", "night-mode"],
    keywords: ["dark", "mode", "theme", "night", "toggle", "appearance"],
  },
  "database": {
    description: "Database or data storage system",
    aliases: ["db", "data-store", "storage"],
    keywords: ["database", "db", "storage", "data", "server", "sql", "tables"],
  },
  "deploy": {
    description: "Deploy or release an application or update",
    aliases: ["release", "publish", "ship"],
    keywords: ["deploy", "release", "publish", "ship", "launch", "push", "devops"],
  },
  "flag": {
    description: "Feature flag or marker for tracking",
    aliases: ["feature-flag", "marker", "milestone"],
    keywords: ["flag", "feature-flag", "marker", "milestone", "toggle", "report"],
  },
  "light": {
    description: "Light mode or light theme toggle",
    aliases: ["light-mode", "light-theme", "day-mode"],
    keywords: ["light", "mode", "theme", "day", "toggle", "appearance"],
  },
  "logs": {
    description: "System logs or activity records",
    aliases: ["log", "activity-log", "audit-log"],
    keywords: ["logs", "log", "activity", "record", "system", "debug", "events"],
  },
  "plugin": {
    description: "Plugin or extension that adds functionality",
    aliases: ["extension", "addon", "module"],
    keywords: ["plugin", "extension", "addon", "module", "integrate", "connect"],
  },
  "policy": {
    description: "Policy document or rule configuration",
    aliases: ["rules", "governance", "compliance"],
    keywords: ["policy", "rules", "governance", "compliance", "document", "terms"],
  },
  "server": {
    description: "Server or backend infrastructure",
    aliases: ["backend", "infrastructure", "host"],
    keywords: ["server", "backend", "infrastructure", "host", "cloud", "machine"],
  },
  "settings": {
    description: "Application settings and preferences",
    aliases: ["preferences", "gear", "cog", "options"],
    keywords: ["settings", "preferences", "gear", "cog", "options", "configure"],
  },
  "tools": {
    description: "Developer or admin tools and utilities",
    aliases: ["utilities", "dev-tools", "wrench"],
    keywords: ["tools", "utilities", "wrench", "spanner", "developer", "build", "fix"],
  },

  // ── System & Utility ─────────────────────────────────────────────────────────
  "accessibility": {
    description: "Accessibility settings and support features",
    aliases: ["a11y", "inclusive", "disability"],
    keywords: ["accessibility", "a11y", "inclusive", "disability", "support", "contrast"],
  },
  "audio-off": {
    description: "Mute or disable audio",
    aliases: ["mute", "sound-off", "silent"],
    keywords: ["audio", "off", "mute", "sound", "silent", "disable"],
  },
  "audio-on": {
    description: "Enable or unmute audio",
    aliases: ["sound-on", "unmute"],
    keywords: ["audio", "on", "sound", "unmute", "enable", "speaker"],
  },
  "calculator": {
    description: "Calculator for performing calculations",
    aliases: ["calc", "math"],
    keywords: ["calculator", "calc", "math", "arithmetic", "numbers", "compute"],
  },
  "globe": {
    description: "Globe representing the internet, language, or global scope",
    aliases: ["world", "internet", "international"],
    keywords: ["globe", "world", "internet", "international", "language", "translate", "web"],
  },
  "map": {
    description: "Map for viewing geographic information",
    aliases: ["geography", "directions"],
    keywords: ["map", "geography", "directions", "navigate", "location", "place"],
  },
  "print": {
    description: "Print a document or page",
    aliases: ["printer"],
    keywords: ["print", "printer", "document", "paper", "output", "fax"],
  },
  "qrcode": {
    description: "QR code for linking to digital content",
    aliases: ["qr", "barcode", "scan-code"],
    keywords: ["qrcode", "qr", "barcode", "scan", "link", "url", "digital"],
  },
  "scan": {
    description: "Scan a document, barcode, or QR code",
    aliases: ["scanner", "capture", "read"],
    keywords: ["scan", "scanner", "barcode", "qr", "capture", "read", "camera"],
  },
  "theme": {
    description: "Theme or appearance customisation",
    aliases: ["appearance", "skin", "style"],
    keywords: ["theme", "appearance", "skin", "style", "colour", "design", "custom"],
  },
  "toolbox": {
    description: "Toolbox containing developer or admin utilities",
    aliases: ["dev-tools", "utilities", "toolkit"],
    keywords: ["toolbox", "tools", "utilities", "toolkit", "developer", "admin"],
  },

  // ── AI ───────────────────────────────────────────────────────────────────────
  "agent": {
    description: "AI agent capable of performing autonomous tasks",
    aliases: ["ai-agent", "bot", "assistant-agent"],
    keywords: ["agent", "ai", "autonomous", "bot", "assistant", "task", "automation"],
  },
  "lightning": {
    description: "Fast AI processing or a high-speed action",
    aliases: ["fast", "instant", "spark"],
    keywords: ["lightning", "fast", "instant", "speed", "ai", "spark", "power", "bolt"],
  },
  "speech": {
    description: "Speech or voice AI capability",
    aliases: ["voice", "speech-to-text", "tts"],
    keywords: ["speech", "voice", "ai", "speech-to-text", "tts", "audio", "speak"],
  },

  // ── Layout ───────────────────────────────────────────────────────────────────
  "align-bottom": {
    description: "Align selected elements to the bottom edge",
    aliases: ["align-base", "bottom-align"],
    keywords: ["align", "bottom", "edge", "layout", "position", "distribute"],
  },
  "align-left": {
    description: "Align selected elements to the left edge",
    aliases: ["left-align", "justify-left"],
    keywords: ["align", "left", "edge", "layout", "text", "justify", "position"],
  },
  "align-right": {
    description: "Align selected elements to the right edge",
    aliases: ["right-align", "justify-right"],
    keywords: ["align", "right", "edge", "layout", "text", "justify", "position"],
  },
  "align-top": {
    description: "Align selected elements to the top edge",
    aliases: ["top-align"],
    keywords: ["align", "top", "edge", "layout", "position", "distribute"],
  },

  // ── Health (sector-specific — Advanced clinical terminology) ─────────────────
  "acbs": {
    description: "ACBS — Advisory Committee on Borderline Substances, used in prescribing workflows",
    aliases: ["borderline-substances", "advisory-committee"],
    keywords: ["acbs", "borderline", "substances", "prescribing", "advisory", "clinical"],
  },
  "ambulance": {
    description: "Ambulance or emergency medical vehicle",
    aliases: ["emergency", "ems", "paramedic"],
    keywords: ["ambulance", "emergency", "ems", "paramedic", "vehicle", "999", "urgent"],
  },
  "consultation": {
    description: "A clinical consultation or patient appointment",
    aliases: ["appointment", "clinical-visit", "patient-meeting"],
    keywords: ["consultation", "clinical", "appointment", "patient", "doctor", "visit"],
  },
  "diagnosis": {
    description: "A clinical diagnosis or medical assessment",
    aliases: ["assessment", "condition", "finding"],
    keywords: ["diagnosis", "assessment", "condition", "finding", "clinical", "medical"],
  },
  "drug-doubling": {
    description: "Drug doubling alert — flags when a patient may be receiving duplicate medication",
    aliases: ["duplicate-medication", "double-prescribing"],
    keywords: ["drug", "doubling", "duplicate", "medication", "alert", "prescribing", "safety"],
  },
  "immunication": {
    description: "Immunisation or vaccination record",
    aliases: ["immunisation", "immunization", "vaccination", "vaccine"],
    keywords: ["immunisation", "immunization", "vaccination", "vaccine", "jab", "prevention"],
  },
  "medication-add": {
    description: "Add a new medication to a patient's record",
    aliases: ["add-medication", "prescribe", "new-prescription"],
    keywords: ["medication", "add", "prescribe", "new", "prescription", "drug"],
  },
  "medication-branded": {
    description: "A branded medication as opposed to a generic drug",
    aliases: ["brand-name-drug", "proprietary-medication"],
    keywords: ["medication", "branded", "brand", "proprietary", "drug", "prescription"],
  },
  "medication-discontinued": {
    description: "A medication that has been discontinued or stopped",
    aliases: ["stopped-medication", "discontinued-drug"],
    keywords: ["medication", "discontinued", "stopped", "ended", "drug", "historical"],
  },
  "medication": {
    description: "General medication or prescription item",
    aliases: ["drug", "medicine", "prescription", "rx"],
    keywords: ["medication", "drug", "medicine", "prescription", "rx", "tablet", "dose"],
  },
  "medication-unlicensed": {
    description: "An unlicensed or off-label medication use",
    aliases: ["off-label", "unlicensed-drug"],
    keywords: ["medication", "unlicensed", "off-label", "special", "drug", "prescribing"],
  },
  "sls": {
    description: "SLS — Selected List Scheme, a prescribing restriction category",
    aliases: ["selected-list-scheme", "prescribing-restriction"],
    keywords: ["sls", "selected", "list", "scheme", "prescribing", "restriction", "clinical"],
  },

  // ── Education (sector-specific) ──────────────────────────────────────────────
  "graduation": {
    description: "Graduation cap representing education, qualifications, or learning",
    aliases: ["graduate", "degree", "cap", "mortar-board"],
    keywords: ["graduation", "graduate", "degree", "cap", "mortar-board", "education", "qualify"],
  },

  // ── Legal (sector-specific) ──────────────────────────────────────────────────
  "scales": {
    description: "Scales of justice representing legal balance and fairness",
    aliases: ["justice", "balance", "legal"],
    keywords: ["scales", "justice", "balance", "legal", "law", "court", "fair"],
  },

  // ── Finance (sector-specific) ────────────────────────────────────────────────
  "piggybank": {
    description: "Piggy bank representing savings, budgeting, or financial goals",
    aliases: ["savings", "save-money", "budget"],
    keywords: ["piggybank", "savings", "save", "money", "budget", "finance", "goal"],
  },
};

// ── Apply to files ────────────────────────────────────────────────────────────
let updated = 0;
let skipped = 0;

for (const [folder] of Object.entries(FOLDER_MAP)) {
  const dir = join(RAW, folder);
  if (!existsSync(dir)) continue;

  const { readdirSync } = await import("fs");
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".json")) continue;
    const id = f.replace(/\.json$/, "");
    const metaPath = join(dir, f);
    const patch = META[id];

    if (!patch) continue;

    let existing;
    try {
      existing = JSON.parse(readFileSync(metaPath, "utf8"));
    } catch {
      continue;
    }

    const needsUpdate =
      FORCE ||
      !existing.description ||
      existing.description === "" ||
      existing.aliases.length === 0;

    if (!needsUpdate) {
      skipped++;
      continue;
    }

    const merged = {
      ...existing,
      description: (FORCE || !existing.description) ? patch.description : existing.description,
      keywords: [...new Set([...(existing.keywords ?? []), ...(patch.keywords ?? [])])],
      aliases: (FORCE || existing.aliases.length === 0) ? patch.aliases : existing.aliases,
    };

    writeFileSync(metaPath, JSON.stringify(merged, null, 2) + "\n");
    updated++;
  }
}

console.log(`Done. Updated: ${updated}  Skipped (already populated): ${skipped}`);
