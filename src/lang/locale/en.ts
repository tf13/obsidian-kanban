// English

export default {
  // main.ts
  "Open as kanban board": "Open as kanban board",
  "Create new board": "Create new board",
  "Archive completed cards in active board":
    "Archive completed cards in active board",
  "Error: current file is not a Kanban board":
    "Error: current file is not a Kanban board",
  "Convert empty note to Kanban": "Convert empty note to Kanban",
  "Error: cannot create Kanban, the current note is not empty":
    "Error: cannot create Kanban, the current note is not empty",
  "New kanban board": "New kanban board",
  "Untitled Kanban": "Untitled Kanban",
  "Toggle between Kanban and markdown mode": "Toggle between Kanban and markdown mode",

  // KanbanView.tsx
  "Open as markdown": "Open as markdown",
  "Open board settings": "Open board settings",
  "Archive completed cards": "Archive completed cards",

  // parser.ts
  Complete: "Complete",
  Archive: "Archive",

  // settingHelpers.ts
  "Note: No template plugins are currently enabled.":
    "Note: No template plugins are currently enabled.",
  default: "default",
  "Search...": "Search...",

  // Settings.ts
  "These settings will take precedence over the default Kanban board settings.":
    "These settings will take precedence over the default Kanban board settings.",
  "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.":
    "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.",
  "Note template": "Note template",
  "This template will be used when creating new notes from Kanban cards.":
    "This template will be used when creating new notes from Kanban cards.",
  "No template": "No template",
  "Note folder": "Note folder",
  "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.":
    "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.",
  "Default folder": "Default folder",
  "Lane width": "Lane width",
  "Enter a number to set the lane width in pixels.":
    "Enter a number to set the lane width in pixels.",
  "Maximum number of archived cards": "Maximum number of archived cards",
  "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.":
    "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.",
  "Display card checkbox": "Display card checkbox",
  "When toggled, a checkbox will be displayed with each card":
    "When toggled, a checkbox will be displayed with each card",
  "Reset to default": "Reset to default",
  "Date & Time": "Date & Time",
  "Date trigger": "Date trigger",
  "When this is typed, it will trigger the date selector":
    "When this is typed, it will trigger the date selector",
  "Time trigger": "Time trigger",
  "When this is typed, it will trigger the time selector":
    "When this is typed, it will trigger the time selector",
  "Date format": "Date format",
  "This format will be used when saving dates in markdown.":
    "This format will be used when saving dates in markdown.",
  "For more syntax, refer to": "For more syntax, refer to",
  "format reference": "format reference",
  "Your current syntax looks like this": "Your current syntax looks like this",
  "Time format": "Time format",
  "Date display format": "Date display format",
  "This format will be used when displaying dates in Kanban cards.":
    "This format will be used when displaying dates in Kanban cards.",
  "Show relative date": "Show relative date",
  "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'":
    "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'",
  "Hide card display dates": "Hide card display dates",
  "When toggled, formatted dates will not be displayed on the card. Relative dates will still be displayed if they are enabled.":
    "When toggled, formatted dates will not be displayed on the card. Relative dates will still be displayed if they are enabled.",
  "Hide dates in card titles": "Hide dates in card titles",
  "When toggled, dates will be hidden card titles. This will prevent dates from being included in the title when creating new notes.":
    "When toggled, dates will be hidden card titles. This will prevent dates from being included in the title when creating new notes.",
  "Link dates to daily notes": "Link dates to daily notes",
  "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]":
    "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]",
  "Add date and time to archived cards": "Add date and time to archived cards",
  "When toggled, the current date and time will be added to the beginning of a card when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title":
    "When toggled, the current date and time will be added to the beginning of a card when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title",
  "Archive date/time separator": "Archive date/time separator",
  "This will be used to separate the archived date/time from the title":
    "This will be used to separate the archived date/time from the title",
  "Archive date/time format": "Archive date/time format",
  "Kanban Plugin": "Kanban Plugin",

  // components/Item/Item.tsx
  "Archive item": "Archive item",
  "More options": "More options",
  Cancel: "Cancel",

  // components/Item/ItemContent.tsx
  today: "today",
  yesterday: "yesterday",
  tomorrow: "tomorrow",
  "Change date": "Change date",
  "Change time": "Change time",

  // components/Item/ItemForm.tsx
  "Item title...": "Item title...",
  "Add item": "Add item",
  "Add a card": "Add a card",

  // components/Item/ItemMenu.ts
  "Edit card": "Edit card",
  "New note from card": "New note from card",
  "Archive card": "Archive card",
  "Delete card": "Delete card",
  "Edit date": "Edit date",
  "Add date": "Add date",
  "Remove date": "Remove date",
  "Edit time": "Edit time",
  "Add time": "Add time",
  "Remove time": "Remove time",
  "Duplicate card": "Duplicate card",

  // components/Lane/LaneForm.tsx
  "Enter list title...": "Enter list title...",
  "Mark items in this list as complete": "Mark items in this list as complete",
  "Add list": "Add list",
  "Add a list": "Add a list",

  // components/Lane/LaneHeader.tsx
  "Move list": "Move list",
  Close: "Close",

  // components/Lane/LaneMenu.tsx
  "Are you sure you want to delete this list and all its cards?":
    "Are you sure you want to delete this list and all its cards?",
  "Yes, delete list": "Yes, delete list",
  "Are you sure you want to archive this list and all its cards?":
    "Are you sure you want to archive this list and all its cards?",
  "Yes, archive list": "Yes, archive list",
  "Are you sure you want to archive all cards in this list?":
    "Are you sure you want to archive all cards in this list?",
  "Yes, archive cards": "Yes, archive cards",
  "Edit list": "Edit list",
  "Archive cards": "Archive cards",
  "Archive list": "Archive list",
  "Delete list": "Delete list",
};