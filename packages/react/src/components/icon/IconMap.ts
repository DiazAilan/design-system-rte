import { isValidIconName as isValidIconNameShared } from "@design-system-rte/core/components/icon/icon-utils";

import {
  Add,
  AltRoute,
  Apps,
  ArrowAltDown,
  ArrowAltDownLeft,
  ArrowAltDownRight,
  ArrowAltLeft,
  ArrowAltRight,
  ArrowAltUp,
  ArrowAltUpLeft,
  ArrowAltUpRight,
  ArrowAngleDownLeft,
  ArrowAngleDownRight,
  ArrowAngleUpLeft,
  ArrowAngleUpRight,
  ArrowChevronDown,
  ArrowChevronLeft,
  ArrowChevronRight,
  ArrowChevronUp,
  ArrowCircleChevronDownFilled,
  ArrowCircleChevronDownOutlined,
  ArrowCircleChevronLeftFilled,
  ArrowCircleChevronLeftOutlined,
  ArrowCircleChevronRightFilled,
  ArrowCircleChevronRightOutlined,
  ArrowCircleChevronUpFilled,
  ArrowCircleChevronUpOutlined,
  ArrowCircleDownFilled,
  ArrowCircleDownOutlined,
  ArrowCircleLeftFilled,
  ArrowCircleLeftOutlined,
  ArrowCircleRightFilled,
  ArrowCircleRightOutlined,
  ArrowCircleUpFilled,
  ArrowCircleUpOutlined,
  ArrowDoubleDown,
  ArrowDoubleLeft,
  ArrowDoubleRight,
  ArrowDoubleUp,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  AttachFile,
  Asterisk,
  BatteryAltEmpty,
  BatteryAltFull,
  BatteryCharging,
  BatteryEmpty,
  BatteryFull,
  Bluetooth,
  BluetoothOff,
  ChartBar,
  ChartBarStacked,
  Check,
  CheckIndeterminate,
  CheckSmall,
  CheckboxEmpty,
  Close,
  Compare,
  CopyAll,
  CrisisAlert,
  Cut,
  Download,
  DownloadDone,
  DragHandle,
  DragIndicator,
  Exclamation,
  ExploreTravel,
  ExternalLink,
  Filter,
  FilterAltFilled,
  FilterAltOffFilled,
  FilterAltOffOutlined,
  FilterAltOutlined,
  FilterOff,
  FirstPage,
  FitScreenFilled,
  FitScreenOutlined,
  Forward,
  Fullscreen,
  FullscreenExit,
  History,
  HomeFilled,
  HomeOutlined,
  HourglassEmpty,
  InfoI,
  Language,
  LastPage,
  LeftPanelCloseFilled,
  LeftPanelCloseOutlined,
  LeftPanelOpenFilled,
  LeftPanelOpenOutlined,
  Link,
  LinkOff,
  List,
  LocationDisabled,
  Login,
  Logout,
  Menu,
  MenuOpen,
  Monitoring,
  MoreDown,
  MoreHoriz,
  MoreUp,
  MoreVert,
  Ohm,
  OpenInFull,
  Paste,
  PlayPause,
  PowerInput,
  PowerPlug,
  PowerSettings,
  PriorityHigh,
  Public,
  Publish,
  QuestionMark,
  Radar,
  RadioButtonEmpty,
  Redo,
  Reload,
  Remove,
  Reply,
  ReplyAll,
  RightPanelCloseFilled,
  RightPanelCloseOutlined,
  RightPanelOpenFilled,
  RightPanelOpenOutlined,
  Route,
  Search,
  SettingsFilled,
  SettingsOutlined,
  SideNavigation,
  Sort,
  SupportAgent,
  Timeline,
  TrendingDown,
  TrendingFlat,
  TrendingUp,
  Tune,
  Undo,
  Upload,
  Water,
  WaterAlt,
  Wifi,
  WifiOff,
  Windmill,
  ZoomIn,
  ZoomOut,
  AddCircleFilled,
  AddCircleOutlined,
  AdminPanelSettingsFilled,
  AdminPanelSettingsOutlined,
  AnalyticsFilled,
  AnalyticsOutlined,
  ArchiveFilled,
  ArchiveOutlined,
  ArrowDropDown,
  ArrowDropUp,
  ArticleFilled,
  ArticleOutlined,
  AssignmentCompleteFilled,
  AssignmentCompleteOutlined,
  AssignmentFilled,
  AssignmentOutlined,
  BatteryAlertFilled,
  BatteryAlertOutlined,
  BatteryChargingFullFilled,
  BatteryChargingFullOutlined,
  BoltAltCircleFilled,
  BoltAltCircleOutlined,
  BoltCircleFilled,
  BoltCircleOutlined,
  BoltAltFilled,
  BoltAltOutlined,
  BoltFilled,
  BoltOutlined,
  BookmarkFilled,
  BookmarkOutlined,
  BookmarksFilled,
  BookmarksOutlined,
  BuildFilled,
  BuildOutlined,
  CalendarAvailableFilled,
  CalendarAvailableOutlined,
  CalendarBusyFilled,
  CalendarBusyOutlined,
  CalendarMonthFilled,
  CalendarMonthOutlined,
  CalendarTodayFilled,
  CalendarTodayOutlined,
  CallFilled,
  CallOutlined,
  CategoryFilled,
  CategoryOutlined,
  ChartAddFilled,
  ChartAddOutlined,
  ChartAreaFilled,
  ChartAreaOutlined,
  ChartPieFilled,
  ChartPieOutlined,
  ChartTableFilled,
  ChartTableOutlined,
  ChatAltFilled,
  ChatAltOutlined,
  ChatAltUnreadFilled,
  ChatAltUnreadOutlined,
  ChatFilled,
  ChatOutlined,
  ChatUnreadFilled,
  ChatUnreadOutlined,
  CheckCircleFilled,
  CheckCircleOutlined,
  CheckboxFilled,
  CheckboxIndeterminateFilled,
  CheckboxIndeterminateOutlined,
  CheckboxOutlined,
  ClockFilled,
  ClockOutlined,
  CloudDownloadFilled,
  CloudDownloadOutlined,
  CloudFilled,
  CloudOffFilled,
  CloudOffOutlined,
  CloudOutlined,
  CloudUploadFilled,
  CloudUploadOutlined,
  CommentAddFilled,
  CommentAddOutlined,
  CommentFilled,
  CommentOutlined,
  CopyFilled,
  CopyOutlined,
  DangerousFilled,
  DangerousOutlined,
  DashboardFilled,
  DashboardOutlined,
  DatabaseFilled,
  DatabaseOutlined,
  DeleteFilled,
  DeleteOutlined,
  DesktopFilled,
  DesktopOutlined,
  DevicesFilled,
  DevicesOutlined,
  DraftFilled,
  DraftOutlined,
  EcoFilled,
  EcoOutlined,
  EditFilled,
  EditOutlined,
  ElectricMeterFilled,
  ElectricMeterOutlined,
  ErrorFilled,
  ErrorOutlined,
  ExploreFilled,
  ExploreOffFilled,
  ExploreOffOutlined,
  ExploreOutlined,
  FastForwardFilled,
  FastForwardOutlined,
  FastRewindFilled,
  FastRewindOutlined,
  FeedbackFilled,
  FeedbackOutlined,
  FileCopyFilled,
  FileCopyOutlined,
  FileDownloadFilled,
  FileDownloadOutlined,
  FileUploadFilled,
  FileUploadOutlined,
  FireFilled,
  FireOutlined,
  FlagFilled,
  FlagOutlined,
  FlashFilled,
  FlashOffFilled,
  FlashOffOutlined,
  FlashOutlined,
  FolderAddFilled,
  FolderAddOutlined,
  FolderFilled,
  FolderMoveFilled,
  FolderMoveOutlined,
  FolderOpenFilled,
  FolderOpenOutlined,
  FolderOutlined,
  FolderSharedFilled,
  FolderSharedOutlined,
  ForumFilled,
  ForumOutlined,
  GroupAddFilled,
  GroupAddOutlined,
  GroupFilled,
  GroupOutlined,
  GroupsFilled,
  GroupsOutlined,
  HeadphonesFilled,
  HeadphonesOutlined,
  HeartFilled,
  HeartOutlined,
  HelpFilled,
  HelpOutlined,
  HourglassFilled,
  HourglassOutlined,
  ImageBrokenFilled,
  ImageBrokenOutlined,
  ImageFilled,
  ImageGalleryFilled,
  ImageGalleryOutlined,
  ImageOutlined,
  InboxFilled,
  InboxOutlined,
  InfoFilled,
  InfoOutlined,
  KeepFilled,
  KeepOffFilled,
  KeepOffOutlined,
  KeepOutlined,
  LabelFilled,
  LabelOutlined,
  LaptopFilled,
  LaptopOutlined,
  LightOffFilled,
  LightOffOutlined,
  LightbulbAltFilled,
  LightbulbAltOutlined,
  LightbulbCircleFilled,
  LightbulbCircleOutlined,
  LightbulbFilled,
  LightbulbOutlined,
  ListAltFilled,
  ListAltOutlined,
  LocationMeFilled,
  LocationMeOutlined,
  LocationOffFilled,
  LocationOffOutlined,
  LocationOnFilled,
  LocationOnOutlined,
  LockFilled,
  LockOpenFilled,
  LockOpenOutlined,
  LockOpenRightFilled,
  LockOpenRightOutlined,
  LockOutlined,
  MailFilled,
  MailOutlined,
  MailUnreadFilled,
  MailUnreadOutlined,
  MapFilled,
  MapOutlined,
  MicFilled,
  MicOffFilled,
  MicOffOutlined,
  MicOutlined,
  ModeDarkFilled,
  ModeDarkOutlined,
  ModeLightFilled,
  ModeLightOutlined,
  NotificationFilled,
  NotificationImportantFilled,
  NotificationImportantOutlined,
  NotificationOffFilled,
  NotificationOffOutlined,
  NotificationOutlined,
  NotificationUnreadFilled,
  NotificationUnreadOutlined,
  PaletteFilled,
  PaletteOutlined,
  PauseCircleFilled,
  PauseCircleOutlined,
  PauseFilled,
  PauseOutlined,
  PhotoCameraFilled,
  PhotoCameraOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
  PlayFilled,
  PlayOutlined,
  PowerFilled,
  PowerOffFilled,
  PowerOffOutlined,
  PowerOutlined,
  PowerPlugConnectFilled,
  PowerPlugConnectOutlined,
  PowerSettingsCircleFilled,
  PowerSettingsCircleOutlined,
  PowerSolarFilled,
  PowerSolarOutlined,
  PowerSwitchFilled,
  PowerSwitchOutlined,
  PowerWindFilled,
  PowerWindOutlined,
  PrintFilled,
  PrintOutlined,
  SaveFilled,
  SaveOutlined,
  SendFilled,
  SendOutlined,
  ShareFilled,
  ShareOutlined,
  SkipNextFilled,
  SkipNextOutlined,
  SkipPreviousFilled,
  SkipPreviousOutlined,
  SmartphoneFilled,
  SmartphoneOutlined,
  StarFilled,
  StarOutlined,
  StickyNoteFilled,
  StickyNoteOutlined,
  StopCircleFilled,
  StopCircleOutlined,
  StopFilled,
  StopOutlined,
  SubtitlesFilled,
  SubtitlesOutlined,
  TextSnippetFilled,
  TextSnippetOutlined,
  TrashRestoreFilled,
  TrashRestoreOutlined,
  UnarchiveFilled,
  UnarchiveOutlined,
  UserAddFilled,
  UserAddOutlined,
  UserCircleFilled,
  UserCircleOutlined,
  UserFilled,
  UserOutlined,
  UserSettingsFilled,
  UserSettingsOutlined,
  VerifiedFilled,
  VerifiedOutlined,
  VideoCameraFilled,
  VideoCameraOffFilled,
  VideoCameraOffOutlined,
  VideoCameraOutlined,
  VideoGalleryFilled,
  VideoGalleryOutlined,
  ViewAgendaFilled,
  ViewAgendaOutlined,
  ViewColumnFilled,
  ViewColumnOutlined,
  ViewGridFilled,
  ViewGridOutlined,
  ViewKanbanFilled,
  ViewKanbanOutlined,
  ViewModuleFilled,
  ViewModuleOutlined,
  ViewTimelineFilled,
  ViewTimelineOutlined,
  VisibilityHideFilled,
  VisibilityHideOutlined,
  VisibilityShowFilled,
  VisibilityShowOutlined,
  VolumeDownFilled,
  VolumeDownOutlined,
  VolumeMuteFilled,
  VolumeMuteOutlined,
  VolumeOffFilled,
  VolumeOffOutlined,
  VolumeUpFilled,
  VolumeUpOutlined,
  WarningFilled,
  WarningOutlined,
  WaterdropFilled,
  WaterdropOutlined,
} from "./generated";

export const TogglableIcons = {
  "add-circle": [AddCircleOutlined, AddCircleFilled],
  "admin-panel-settings": [AdminPanelSettingsOutlined, AdminPanelSettingsFilled],
  analytics: [AnalyticsOutlined, AnalyticsFilled],
  archive: [ArchiveOutlined, ArchiveFilled],
  "arrow-circle-chevron-down": [ArrowCircleChevronDownOutlined, ArrowCircleChevronDownFilled],
  "arrow-circle-chevron-left": [ArrowCircleChevronLeftOutlined, ArrowCircleChevronLeftFilled],
  "arrow-circle-chevron-right": [ArrowCircleChevronRightOutlined, ArrowCircleChevronRightFilled],
  "arrow-circle-chevron-up": [ArrowCircleChevronUpOutlined, ArrowCircleChevronUpFilled],
  "arrow-circle-down": [ArrowCircleDownOutlined, ArrowCircleDownFilled],
  "arrow-circle-left": [ArrowCircleLeftOutlined, ArrowCircleLeftFilled],
  "arrow-circle-right": [ArrowCircleRightOutlined, ArrowCircleRightFilled],
  "arrow-circle-up": [ArrowCircleUpOutlined, ArrowCircleUpFilled],
  article: [ArticleOutlined, ArticleFilled],
  "assignment-complete": [AssignmentCompleteOutlined, AssignmentCompleteFilled],
  assignment: [AssignmentOutlined, AssignmentFilled],
  "battery-alert": [BatteryAlertOutlined, BatteryAlertFilled],
  "battery-charging-full": [BatteryChargingFullOutlined, BatteryChargingFullFilled],
  "bolt-alt-circle": [BoltAltCircleOutlined, BoltAltCircleFilled],
  "bolt-alt": [BoltAltOutlined, BoltAltFilled],
  "bolt-circle": [BoltCircleOutlined, BoltCircleFilled],
  bolt: [BoltOutlined, BoltFilled],
  bookmark: [BookmarkOutlined, BookmarkFilled],
  bookmarks: [BookmarksOutlined, BookmarksFilled],
  build: [BuildOutlined, BuildFilled],
  "calendar-available": [CalendarAvailableOutlined, CalendarAvailableFilled],
  "calendar-busy": [CalendarBusyOutlined, CalendarBusyFilled],
  "calendar-month": [CalendarMonthOutlined, CalendarMonthFilled],
  "calendar-today": [CalendarTodayOutlined, CalendarTodayFilled],
  call: [CallOutlined, CallFilled],
  category: [CategoryOutlined, CategoryFilled],
  "chart-add": [ChartAddOutlined, ChartAddFilled],
  "chart-area": [ChartAreaOutlined, ChartAreaFilled],
  "chart-pie": [ChartPieOutlined, ChartPieFilled],
  "chart-table": [ChartTableOutlined, ChartTableFilled],
  "chat-alt": [ChatAltOutlined, ChatAltFilled],
  "chat-alt-unread": [ChatAltUnreadOutlined, ChatAltUnreadFilled],
  chat: [ChatOutlined, ChatFilled],
  "chat-unread": [ChatUnreadOutlined, ChatUnreadFilled],
  "check-circle": [CheckCircleOutlined, CheckCircleFilled],
  checkbox: [CheckboxOutlined, CheckboxFilled],
  "checkbox-indeterminate": [CheckboxIndeterminateOutlined, CheckboxIndeterminateFilled],
  clock: [ClockOutlined, ClockFilled],
  "cloud-download": [CloudDownloadOutlined, CloudDownloadFilled],
  cloud: [CloudOutlined, CloudFilled],
  "cloud-off": [CloudOffOutlined, CloudOffFilled],
  "cloud-upload": [CloudUploadOutlined, CloudUploadFilled],
  "comment-add": [CommentAddOutlined, CommentAddFilled],
  comment: [CommentOutlined, CommentFilled],
  copy: [CopyOutlined, CopyFilled],
  dangerous: [DangerousOutlined, DangerousFilled],
  dashboard: [DashboardOutlined, DashboardFilled],
  database: [DatabaseOutlined, DatabaseFilled],
  delete: [DeleteOutlined, DeleteFilled],
  desktop: [DesktopOutlined, DesktopFilled],
  devices: [DevicesOutlined, DevicesFilled],
  draft: [DraftOutlined, DraftFilled],
  eco: [EcoOutlined, EcoFilled],
  edit: [EditOutlined, EditFilled],
  "electric-meter": [ElectricMeterOutlined, ElectricMeterFilled],
  error: [ErrorOutlined, ErrorFilled],
  explore: [ExploreOutlined, ExploreFilled],
  "explore-off": [ExploreOffOutlined, ExploreOffFilled],
  "fast-forward": [FastForwardOutlined, FastForwardFilled],
  "fast-rewind": [FastRewindOutlined, FastRewindFilled],
  feedback: [FeedbackOutlined, FeedbackFilled],
  "file-copy": [FileCopyOutlined, FileCopyFilled],
  "file-download": [FileDownloadOutlined, FileDownloadFilled],
  "file-upload": [FileUploadOutlined, FileUploadFilled],
  "filter-alt": [FilterAltOutlined, FilterAltFilled],
  "filter-alt-off": [FilterAltOffOutlined, FilterAltOffFilled],
  fire: [FireOutlined, FireFilled],
  "fit-screen": [FitScreenOutlined, FitScreenFilled],
  flag: [FlagOutlined, FlagFilled],
  flash: [FlashOutlined, FlashFilled],
  "flash-off": [FlashOffOutlined, FlashOffFilled],
  "folder-add": [FolderAddOutlined, FolderAddFilled],
  folder: [FolderOutlined, FolderFilled],
  "folder-move": [FolderMoveOutlined, FolderMoveFilled],
  "folder-open": [FolderOpenOutlined, FolderOpenFilled],
  "folder-shared": [FolderSharedOutlined, FolderSharedFilled],
  forum: [ForumOutlined, ForumFilled],
  "group-add": [GroupAddOutlined, GroupAddFilled],
  group: [GroupOutlined, GroupFilled],
  groups: [GroupsOutlined, GroupsFilled],
  headphones: [HeadphonesOutlined, HeadphonesFilled],
  heart: [HeartOutlined, HeartFilled],
  help: [HelpOutlined, HelpFilled],
  home: [HomeOutlined, HomeFilled],
  hourglass: [HourglassOutlined, HourglassFilled],
  "image-broken": [ImageBrokenOutlined, ImageBrokenFilled],
  image: [ImageOutlined, ImageFilled],
  "image-gallery": [ImageGalleryOutlined, ImageGalleryFilled],
  inbox: [InboxOutlined, InboxFilled],
  info: [InfoOutlined, InfoFilled],
  keep: [KeepOutlined, KeepFilled],
  "keep-off": [KeepOffOutlined, KeepOffFilled],
  label: [LabelOutlined, LabelFilled],
  laptop: [LaptopOutlined, LaptopFilled],
  "left-panel-open": [LeftPanelOpenOutlined, LeftPanelOpenFilled],
  "left-panel-close": [LeftPanelCloseOutlined, LeftPanelCloseFilled],
  "light-off": [LightOffOutlined, LightOffFilled],
  "lightbulb-alt": [LightbulbAltOutlined, LightbulbAltFilled],
  "lightbulb-circle": [LightbulbCircleOutlined, LightbulbCircleFilled],
  lightbulb: [LightbulbOutlined, LightbulbFilled],
  "list-alt": [ListAltOutlined, ListAltFilled],
  "location-me": [LocationMeOutlined, LocationMeFilled],
  "location-off": [LocationOffOutlined, LocationOffFilled],
  "location-on": [LocationOnOutlined, LocationOnFilled],
  lock: [LockOutlined, LockFilled],
  "lock-open": [LockOpenOutlined, LockOpenFilled],
  "lock-open-right": [LockOpenRightOutlined, LockOpenRightFilled],
  mail: [MailOutlined, MailFilled],
  "mail-unread": [MailUnreadOutlined, MailUnreadFilled],
  map: [MapOutlined, MapFilled],
  mic: [MicOutlined, MicFilled],
  "mic-off": [MicOffOutlined, MicOffFilled],
  "mode-dark": [ModeDarkOutlined, ModeDarkFilled],
  "mode-light": [ModeLightOutlined, ModeLightFilled],
  notification: [NotificationOutlined, NotificationFilled],
  "notification-important": [NotificationImportantOutlined, NotificationImportantFilled],
  "notification-off": [NotificationOffOutlined, NotificationOffFilled],
  "notification-unread": [NotificationUnreadOutlined, NotificationUnreadFilled],
  palette: [PaletteOutlined, PaletteFilled],
  "pause-circle": [PauseCircleOutlined, PauseCircleFilled],
  pause: [PauseOutlined, PauseFilled],
  "photo-camera": [PhotoCameraOutlined, PhotoCameraFilled],
  "play-circle": [PlayCircleOutlined, PlayCircleFilled],
  play: [PlayOutlined, PlayFilled],
  power: [PowerOutlined, PowerFilled],
  "power-off": [PowerOffOutlined, PowerOffFilled],
  "power-plug-connect": [PowerPlugConnectOutlined, PowerPlugConnectFilled],
  "power-settings-circle": [PowerSettingsCircleOutlined, PowerSettingsCircleFilled],
  "power-solar": [PowerSolarOutlined, PowerSolarFilled],
  "power-switch": [PowerSwitchOutlined, PowerSwitchFilled],
  "power-wind": [PowerWindOutlined, PowerWindFilled],
  print: [PrintOutlined, PrintFilled],
  "right-panel-close": [RightPanelCloseOutlined, RightPanelCloseFilled],
  "right-panel-open": [RightPanelOpenOutlined, RightPanelOpenFilled],
  save: [SaveOutlined, SaveFilled],
  send: [SendOutlined, SendFilled],
  settings: [SettingsOutlined, SettingsFilled],
  share: [ShareOutlined, ShareFilled],
  "skip-next": [SkipNextOutlined, SkipNextFilled],
  "skip-previous": [SkipPreviousOutlined, SkipPreviousFilled],
  smartphone: [SmartphoneOutlined, SmartphoneFilled],
  star: [StarOutlined, StarFilled],
  "sticky-note": [StickyNoteOutlined, StickyNoteFilled],
  "stop-circle": [StopCircleOutlined, StopCircleFilled],
  stop: [StopOutlined, StopFilled],
  subtitles: [SubtitlesOutlined, SubtitlesFilled],
  "text-snippet": [TextSnippetOutlined, TextSnippetFilled],
  "trash-restore": [TrashRestoreOutlined, TrashRestoreFilled],
  unarchive: [UnarchiveOutlined, UnarchiveFilled],
  "user-add": [UserAddOutlined, UserAddFilled],
  "user-circle": [UserCircleOutlined, UserCircleFilled],
  user: [UserOutlined, UserFilled],
  "user-settings": [UserSettingsOutlined, UserSettingsFilled],
  verified: [VerifiedOutlined, VerifiedFilled],
  "video-camera": [VideoCameraOutlined, VideoCameraFilled],
  "video-camera-off": [VideoCameraOffOutlined, VideoCameraOffFilled],
  "video-gallery": [VideoGalleryOutlined, VideoGalleryFilled],
  "view-agenda": [ViewAgendaOutlined, ViewAgendaFilled],
  "view-column": [ViewColumnOutlined, ViewColumnFilled],
  "view-grid": [ViewGridOutlined, ViewGridFilled],
  "view-kanban": [ViewKanbanOutlined, ViewKanbanFilled],
  "view-module": [ViewModuleOutlined, ViewModuleFilled],
  "view-timeline": [ViewTimelineOutlined, ViewTimelineFilled],
  "visibility-hide": [VisibilityHideOutlined, VisibilityHideFilled],
  "visibility-show": [VisibilityShowOutlined, VisibilityShowFilled],
  "volume-down": [VolumeDownOutlined, VolumeDownFilled],
  "volume-mute": [VolumeMuteOutlined, VolumeMuteFilled],
  "volume-off": [VolumeOffOutlined, VolumeOffFilled],
  "volume-up": [VolumeUpOutlined, VolumeUpFilled],
  warning: [WarningOutlined, WarningFilled],
  waterdrop: [WaterdropOutlined, WaterdropFilled],
};

export const IconIds = {
  add: Add,
  "alt-route": AltRoute,
  apps: Apps,
  "arrow-alt-down": ArrowAltDown,
  "arrow-alt-down-left": ArrowAltDownLeft,
  "arrow-alt-down-right": ArrowAltDownRight,
  "arrow-alt-left": ArrowAltLeft,
  "arrow-alt-right": ArrowAltRight,
  "arrow-alt-up": ArrowAltUp,
  "arrow-alt-up-left": ArrowAltUpLeft,
  "arrow-alt-up-right": ArrowAltUpRight,
  "arrow-angle-down-left": ArrowAngleDownLeft,
  "arrow-angle-down-right": ArrowAngleDownRight,
  "arrow-angle-up-left": ArrowAngleUpLeft,
  "arrow-angle-up-right": ArrowAngleUpRight,
  "arrow-chevron-down": ArrowChevronDown,
  "arrow-chevron-left": ArrowChevronLeft,
  "arrow-chevron-right": ArrowChevronRight,
  "arrow-chevron-up": ArrowChevronUp,
  "arrow-double-down": ArrowDoubleDown,
  "arrow-double-left": ArrowDoubleLeft,
  "arrow-double-right": ArrowDoubleRight,
  "arrow-double-up": ArrowDoubleUp,
  "arrow-down": ArrowDown,
  "arrow-down-left": ArrowDownLeft,
  "arrow-down-right": ArrowDownRight,
  "arrow-drop-down": ArrowDropDown,
  "arrow-drop-up": ArrowDropUp,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up": ArrowUp,
  "arrow-up-left": ArrowUpLeft,
  "arrow-up-right": ArrowUpRight,
  asterisk: Asterisk,
  "attach-file": AttachFile,
  "battery-alt-empty": BatteryAltEmpty,
  "battery-alt-full": BatteryAltFull,
  "battery-charging": BatteryCharging,
  "battery-empty": BatteryEmpty,
  "battery-full": BatteryFull,
  bluetooth: Bluetooth,
  "bluetooth-off": BluetoothOff,
  "chart-bar": ChartBar,
  "chart-bar-stacked": ChartBarStacked,
  check: Check,
  "check-indeterminate": CheckIndeterminate,
  "check-small": CheckSmall,
  "checkbox-empty": CheckboxEmpty,
  close: Close,
  compare: Compare,
  "copy-all": CopyAll,
  "crisis-alert": CrisisAlert,
  cut: Cut,
  download: Download,
  "download-done": DownloadDone,
  "drag-handle": DragHandle,
  "drag-indicator": DragIndicator,
  exclamation: Exclamation,
  "explore-travel": ExploreTravel,
  "external-link": ExternalLink,
  filter: Filter,
  "filter-off": FilterOff,
  "first-page": FirstPage,
  forward: Forward,
  fullscreen: Fullscreen,
  "fullscreen-exit": FullscreenExit,
  history: History,
  "hourglass-empty": HourglassEmpty,
  "info-i": InfoI,
  language: Language,
  "last-page": LastPage,
  link: Link,
  "link-off": LinkOff,
  list: List,
  "location-disabled": LocationDisabled,
  login: Login,
  logout: Logout,
  menu: Menu,
  "menu-open": MenuOpen,
  monitoring: Monitoring,
  "more-down": MoreDown,
  "more-horiz": MoreHoriz,
  "more-up": MoreUp,
  "more-vert": MoreVert,
  ohm: Ohm,
  "open-in-full": OpenInFull,
  paste: Paste,
  "play-pause": PlayPause,
  "power-input": PowerInput,
  "power-plug": PowerPlug,
  "power-settings": PowerSettings,
  "priority-high": PriorityHigh,
  public: Public,
  publish: Publish,
  "question-mark": QuestionMark,
  radar: Radar,
  "radio-button-empty": RadioButtonEmpty,
  redo: Redo,
  reload: Reload,
  remove: Remove,
  reply: Reply,
  "reply-all": ReplyAll,
  route: Route,
  search: Search,
  "side-navigation": SideNavigation,
  sort: Sort,
  "support-agent": SupportAgent,
  timeline: Timeline,
  "trending-down": TrendingDown,
  "trending-flat": TrendingFlat,
  "trending-up": TrendingUp,
  tune: Tune,
  undo: Undo,
  upload: Upload,
  water: Water,
  "water-alt": WaterAlt,
  wifi: Wifi,
  "wifi-off": WifiOff,
  windmill: Windmill,
  "zoom-out": ZoomOut,
  "zoom-in": ZoomIn,
};

export const isValidIconName = (name: string): boolean => {
  return isValidIconNameShared(name, IconIds, TogglableIcons);
};
