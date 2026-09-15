import React, { useState, useMemo, useEffect } from "react";

// Local fallbacks keep the prototype self-contained in the browser sandbox.
function Icon({ size = 16, color = "currentColor", strokeWidth = 2, style, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {children || <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
const icon = (mark) => (props) => <Icon {...props}><path d={mark} /></Icon>;
const Car = icon("M5 17h14l-1.5-6h-11L5 17Zm2 0v2m10-2v2M7 11l1.5-3h7L17 11M3 17h2m14 0h2");
const Bus = icon("M5 16V6c0-2 3-3 7-3s7 1 7 3v10M5 12h14M8 19v2m8-2v2M7 16h.01m10 0h.01");
const Plane = icon("m3 12 18-5-7 5 7 5-18-5Zm8 0v8");
const Fuel = icon("M6 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M6 8h10M18 7l3 3v6a2 2 0 0 1-2 2h-1");
const Zap = icon("m13 2-9 12h7l-1 8 9-12h-7l1-8Z");
const Flame = icon("M12 22a6 6 0 0 0 6-6c0-4-3-6-4-10-3 2-5 5-4 8-2-1-3-2-3-4-2 2-3 4-3 6a6 6 0 0 0 8 6Z");
const Utensils = icon("M7 3v8m-3-8v5a3 3 0 0 0 6 0V3m-3 8v10M16 3v18m0-18c3 2 3 6 0 8");
const ShoppingBag = icon("M5 8h14l-1 13H6L5 8Zm3 0a4 4 0 0 1 8 0");
const Droplets = icon("M12 3S6 10 6 14a6 6 0 0 0 12 0c0-4-6-11-6-11Z");
const TreePine = icon("M12 21V9m0 0L7 15h3l-4 4h12l-4-4h3l-5-6Zm0-6 4-5h-3l2-4-3-3-3 3 2 4H8l4 5Z");
const Camera = icon("M4 7h4l1-2h6l1 2h4v12H4V7Zm8 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z");
const Upload = icon("M12 16V4m0 0L8 8m4-4 4 4M5 14v5h14v-5");
const Loader2 = icon("M12 3a9 9 0 1 0 9 9");
const Sparkles = icon("m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Zm7 12 .6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6L19 15Z");
const Award = icon("M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-3 0-1 6 4-2 4 2-1-6");
const LayoutDashboard = icon("M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z");
const PenLine = icon("m4 20 4-1 11-11a2 2 0 0 0-3-3L5 16l-1 4Zm10-13 3 3");
const Clock = icon("M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z");
const FileText = icon("M6 3h9l3 3v15H6V3Zm9 0v4h4M9 12h6m-6 4h6");
const TrendingUp = icon("m3 17 6-6 4 4 8-9M16 6h5v5");
const TrendingDown = icon("m3 7 6 6 4-4 8 9M16 18h5v-5");
const Lock = icon("M6 10V7a6 6 0 0 1 12 0v3m-14 0h16v11H4V10Z");
const X = icon("M6 6l12 12M18 6 6 18");
const Globe2 = icon("M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z");
const ShieldCheck = icon("m5 12 4 4L19 6M12 3l8 3v5c0 5-3 8-8 10-5-2-8-5-8-10V6l8-3Z");
const Building2 = icon("M4 21V5l8-3 8 3v16M8 21v-4h8v4M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01");
const CheckCircle2 = icon("m9 12 2 2 4-4m7 2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z");
const LogIn = icon("M10 17l5-5-5-5m5 5H3m11-7V3h7v18h-7v-2");
const LogOut = icon("m14 7-5 5 5 5m-5-5h12M10 3H3v18h7");

const ResponsiveContainer = ({ children, height = 200 }) => <div style={{ width: "100%", height }}>{children}</div>;
const PieChart = ({ children }) => <svg viewBox="0 0 240 180" width="100%" height="100%">{children}</svg>;
const Pie = ({ data = [], dataKey = "value", innerRadius = 50, outerRadius = 78 }) => {
  const total = data.reduce((sum, item) => sum + Number(item[dataKey] || 0), 0) || 1;
  let angle = -Math.PI / 2;
  return <g>{data.map((item, index) => { const next = angle + (Number(item[dataKey] || 0) / total) * Math.PI * 2; const large = next - angle > Math.PI ? 1 : 0; const p = (r, a) => [120 + r * Math.cos(a), 90 + r * Math.sin(a)]; const [x1, y1] = p(outerRadius, angle); const [x2, y2] = p(outerRadius, next); const [x3, y3] = p(innerRadius, next); const [x4, y4] = p(innerRadius, angle); const path = `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${large} 0 ${x4} ${y4} Z`; angle = next; return <path key={index} d={path} fill={item.color || "#3F7350"} />; })}</g>;
};
const Cell = () => null;
const Tooltip = () => null;
const CartesianGrid = () => null;
const XAxis = () => null;
const YAxis = () => null;
const BarChart = ({ children }) => <svg viewBox="0 0 500 180" width="100%" height="100%">{children}</svg>;
const Bar = ({ dataKey = "value" }) => <g />;


// ---------------------------------------------------------------------------
// DATA MODEL
// ---------------------------------------------------------------------------
const ICONS = { Car, Bus, Plane, Fuel, Zap, Flame, Utensils, ShoppingBag };

const ACTIVITY_TYPES = {
  car: { label: "Car travel", unit: "km", factor: 0.2, category: "travel", icon: "Car" },
  bus: { label: "Bus travel", unit: "km", factor: 0.08, category: "travel", icon: "Bus" },
  flight: { label: "Flight", unit: "km", factor: 0.25, category: "travel", icon: "Plane" },
  fuelPetrol: { label: "Petrol purchased", unit: "L", factor: 2.31, category: "travel", icon: "Fuel" },
  fuelDiesel: { label: "Diesel purchased", unit: "L", factor: 2.68, category: "travel", icon: "Fuel" },
  electricity: { label: "Electricity use", unit: "kWh", factor: 0.8, category: "energy", icon: "Zap" },
  gasLPG: { label: "LPG cylinder", unit: "cylinder", factor: 42.5, category: "energy", icon: "Flame" },
  gasPiped: { label: "Piped gas", unit: "m³", factor: 2.0, category: "energy", icon: "Flame" },
  vegMeal: { label: "Veg meal", unit: "meal", factor: 0.5, category: "food", icon: "Utensils" },
  nonVegMeal: { label: "Non-veg meal", unit: "meal", factor: 2.0, category: "food", icon: "Utensils" },
  onlineShopping: { label: "Online order", unit: "$ spent", factor: 0.5, category: "shopping", icon: "ShoppingBag" },
};

// Types measured in km — eligible for the map trip logger
const MAP_TRIP_TYPES = Object.entries(ACTIVITY_TYPES)
  .filter(([, def]) => def.unit === "km")
  .map(([key]) => key);

const CATEGORY_META = {
  travel: { label: "Travel", color: "#3F7350" },
  energy: { label: "Energy", color: "#C08A2E" },
  food: { label: "Food", color: "#B4502F" },
  shopping: { label: "Shopping", color: "#6C4C8C" },
};

const WATER_COLOR = "#2B6E6E";

// Local backend: browser storage provides a persistent, dependency-free API-like store.
const LOCAL_BACKEND_KEY = "planet-plus-local-backend-v1";
const localBackend = {
  read() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_BACKEND_KEY) || "null");
    } catch {
      return null;
    }
  },
  write(data) {
    try {
      localStorage.setItem(LOCAL_BACKEND_KEY, JSON.stringify(data));
    } catch {
      // Storage may be unavailable in private or restricted browser contexts.
    }
  },
};

// DP2 — Absurd input: flagged, never blocked. A number this size is almost
// always a typo, so the app surfaces doubt rather than silently trusting or
// refusing it outright.
const SANITY_CEILING = {
  car: 2000,
  bus: 2000,
  flight: 20000,
  fuelPetrol: 300,
  fuelDiesel: 300,
  electricity: 2000,
  gasLPG: 10,
  gasPiped: 500,
  vegMeal: 20,
  nonVegMeal: 20,
  onlineShopping: 2000,
};
const WATER_CEILING = 20000; // liters, single entry
const TREE_CO2_CREDIT = 21.77; // kg CO₂/year per surviving tree; illustrative prototype factor

let _id = 0;
const nextId = () => `act_${Date.now().toString(36)}_${++_id}_${Math.random().toString(36).slice(2, 7)}`;

function calculateCO2(type, quantity) {
  const q = Number(quantity);
  if (!Number.isFinite(q) || q < 0) return 0;
  return +(q * ACTIVITY_TYPES[type].factor).toFixed(2);
}

function createActivity({ type, quantity, date, route, source }) {
  const def = ACTIVITY_TYPES[type];
  return {
    id: nextId(),
    type,
    category: def.category,
    quantity: Number(quantity),
    unit: def.unit,
    date: date || todayISO(),
    co2: calculateCO2(type, quantity),
    flagged: Number(quantity) > SANITY_CEILING[type],
    route: route || null, // { from, to } — map or flight-scan trips only
    source: source || "manual", // "manual" | "map" | "scan"
  };
}

function createWaterLog({ liters, date, source }) {
  const l = Number(liters);
  return {
    id: nextId(),
    liters: l,
    date: date || todayISO(),
    source: source || "manual",
    flagged: l > WATER_CEILING,
  };
}

function createTree({ species, plantedDate, location, source }) {
  return {
    id: nextId(),
    species: species || "Native tree",
    plantedDate: plantedDate || todayISO(),
    location: location || "My planting site",
    source: source || "manual",
    status: "pending",
    lastVerified: null,
    verificationNote: "Awaiting the first weekly AI check.",
  };
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function aggregateTotal(activities) {
  return +activities.reduce((s, a) => s + a.co2, 0).toFixed(2);
}

function aggregateByCategory(activities) {
  return activities.reduce((acc, a) => {
    acc[a.category] = +((acc[a.category] || 0) + a.co2).toFixed(2);
    return acc;
  }, {});
}

// DP3 — Week: Monday-start ISO week. Mid-week progress is shown against the
// *expected pace* (days elapsed / 7), not just the raw target.
function weekStart(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - day);
  return d.toISOString().slice(0, 10);
}
function dayIndexInWeek(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return (d.getDay() + 6) % 7;
}
function aggregateByWeek(activities, referenceDate) {
  const start = weekStart(referenceDate);
  return aggregateTotal(activities.filter((a) => weekStart(a.date) === start));
}

// ---------------------------------------------------------------------------
// STREAKS & BADGES
// ---------------------------------------------------------------------------
function computeLoggingStreak(activities, waterLogs, today) {
  const dates = new Set([...activities.map((a) => a.date), ...waterLogs.map((w) => w.date)]);
  let streak = 0;
  let cursor = new Date(today + "T00:00:00");
  while (dates.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function computeUnderTargetStreak(activities, weeklyTarget, today) {
  let streak = 0;
  let cursor = today;
  for (let i = 0; i < 52; i++) {
    const wt = aggregateByWeek(activities, cursor);
    if (wt <= weeklyTarget) streak++;
    else break;
    const d = new Date(cursor + "T00:00:00");
    d.setDate(d.getDate() - 7);
    cursor = d.toISOString().slice(0, 10);
  }
  return streak;
}

const BADGES = [
  { id: "first", label: "First stamp", desc: "Log your first activity.", check: (c) => c.activities.length + c.waterLogs.length >= 1 },
  { id: "streak3", label: "3-day streak", desc: "Log something 3 days in a row.", check: (c) => c.loggingStreak >= 3 },
  { id: "streak7", label: "7-day streak", desc: "Log something 7 days in a row.", check: (c) => c.loggingStreak >= 7 },
  { id: "explorer", label: "Category explorer", desc: "Log activities in 3+ categories.", check: (c) => new Set(c.activities.map((a) => a.category)).size >= 3 },
  { id: "trip", label: "Road & sky", desc: "Log a trip using the map.", check: (c) => c.activities.some((a) => a.source === "map") },
  { id: "scanner", label: "Bill scanner", desc: "Log an entry from a scanned bill.", check: (c) => c.activities.some((a) => a.source === "scan") || c.waterLogs.some((w) => w.source === "scan") },
  { id: "under1", label: "Under target", desc: "Finish a week under your target.", check: (c) => c.underTargetStreak >= 1 },
  { id: "under2", label: "Steady fortnight", desc: "Two weeks running under target.", check: (c) => c.underTargetStreak >= 2 },
];

// ---------------------------------------------------------------------------
// MAP MODEL — no live map tiles/API available in this environment, so trips
// are logged on a simplified equirectangular grid. Real haversine distance
// is calculated from the two picked coordinates.
// ---------------------------------------------------------------------------
const MAP_W = 620;
const MAP_H = 300;

const CITIES = [
  { name: "New York", lat: 40.71, lon: -74.01 },
  { name: "Los Angeles", lat: 34.05, lon: -118.24 },
  { name: "Mexico City", lat: 19.43, lon: -99.13 },
  { name: "São Paulo", lat: -23.55, lon: -46.63 },
  { name: "London", lat: 51.51, lon: -0.13 },
  { name: "Paris", lat: 48.85, lon: 2.35 },
  { name: "Berlin", lat: 52.52, lon: 13.4 },
  { name: "Moscow", lat: 55.75, lon: 37.62 },
  { name: "Istanbul", lat: 41.01, lon: 28.98 },
  { name: "Cairo", lat: 30.04, lon: 31.24 },
  { name: "Lagos", lat: 6.52, lon: 3.38 },
  { name: "Nairobi", lat: -1.29, lon: 36.82 },
  { name: "Johannesburg", lat: -26.2, lon: 28.05 },
  { name: "Dubai", lat: 25.2, lon: 55.27 },
  { name: "Delhi", lat: 28.61, lon: 77.21 },
  { name: "Mumbai", lat: 19.08, lon: 72.88 },
  { name: "Bangalore", lat: 12.97, lon: 77.59 },
  { name: "Bangkok", lat: 13.75, lon: 100.5 },
  { name: "Singapore", lat: 1.35, lon: 103.82 },
  { name: "Beijing", lat: 39.9, lon: 116.41 },
  { name: "Shanghai", lat: 31.23, lon: 121.47 },
  { name: "Seoul", lat: 37.57, lon: 126.98 },
  { name: "Tokyo", lat: 35.68, lon: 139.69 },
  { name: "Sydney", lat: -33.87, lon: 151.21 },
  { name: "Toronto", lat: 43.65, lon: -79.38 },
];

function lonLatToXY(lon, lat) {
  return { x: ((lon + 180) / 360) * MAP_W, y: ((90 - lat) / 180) * MAP_H };
}
function xyToLonLat(x, y) {
  return { lon: (x / MAP_W) * 360 - 180, lat: 90 - (y / MAP_H) * 180 };
}
function haversineKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(h));
}

// ---------------------------------------------------------------------------
// BILL / RECEIPT SCANNING — uses the built-in Claude vision endpoint. Every
// extracted value is shown back to the user, editable, before it's ever
// saved: a misread bill should never silently become a wrong footprint.
// ---------------------------------------------------------------------------
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

async function scanImage(base64Data, mediaType, promptText) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: mediaType, data: base64Data } },
            { type: "text", text: promptText },
          ],
        },
      ],
    }),
  });
  const data = await response.json();
  const textBlock = (data.content || []).find((c) => c.type === "text");
  if (!textBlock) throw new Error("No response from scanner");
  const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
  return JSON.parse(cleaned);
}

const BILL_CONFIGS = {
  electricity: {
    label: "Electricity bill",
    icon: "Zap",
    activityType: "electricity",
    prompt:
      'You are reading a photo of a household electricity bill. Find the number of electricity units consumed for the billing period, in kWh (if the bill says "units", treat 1 unit as 1 kWh). Respond with ONLY a raw JSON object, nothing else: {"kwh": <number or null>}',
    resultFields: [{ key: "kwh", label: "Units (kWh)" }],
  },
  gasLPG: {
    label: "LPG cylinder receipt",
    icon: "Flame",
    activityType: "gasLPG",
    prompt:
      'You are reading a photo of an LPG cooking-gas cylinder receipt or delivery slip. Find how many cylinders were delivered or billed. Respond with ONLY a raw JSON object, nothing else: {"cylinders": <number or null>}',
    resultFields: [{ key: "cylinders", label: "Cylinders" }],
  },
  gasPiped: {
    label: "Piped gas bill",
    icon: "Flame",
    activityType: "gasPiped",
    prompt:
      'You are reading a photo of a piped natural-gas bill. Find gas consumption for the billing period in cubic meters (convert if it is shown in another unit). Respond with ONLY a raw JSON object, nothing else: {"cubicMeters": <number or null>}',
    resultFields: [{ key: "cubicMeters", label: "Cubic meters (m³)" }],
  },
  fuelPetrol: {
    label: "Petrol receipt",
    icon: "Fuel",
    activityType: "fuelPetrol",
    prompt:
      'You are reading a photo of a petrol pump receipt. Find how many liters of fuel were purchased. Respond with ONLY a raw JSON object, nothing else: {"liters": <number or null>}',
    resultFields: [{ key: "liters", label: "Liters" }],
  },
  fuelDiesel: {
    label: "Diesel receipt",
    icon: "Fuel",
    activityType: "fuelDiesel",
    prompt:
      'You are reading a photo of a diesel pump receipt. Find how many liters of fuel were purchased. Respond with ONLY a raw JSON object, nothing else: {"liters": <number or null>}',
    resultFields: [{ key: "liters", label: "Liters" }],
  },
  water: {
    label: "Water bill",
    icon: "Droplets",
    isWater: true,
    prompt:
      'You are reading a photo of a water utility bill. Find water consumption for the billing period in liters (1 kiloliter = 1 cubic meter = 1000 liters — convert if needed). Respond with ONLY a raw JSON object, nothing else: {"liters": <number or null>}',
    resultFields: [{ key: "liters", label: "Liters" }],
  },
  flight: {
    label: "Flight ticket / boarding pass",
    icon: "Plane",
    isFlight: true,
    prompt:
      'You are reading a photo of a flight e-ticket or boarding pass. Identify the departure and arrival airports or cities, and give your best approximate latitude and longitude for each (decimal degrees). Respond with ONLY a raw JSON object, nothing else: {"originCity": <string>, "originLat": <number>, "originLon": <number>, "destCity": <string>, "destLat": <number>, "destLon": <number>}',
    resultFields: [
      { key: "originCity", label: "From", type: "text" },
      { key: "originLat", label: "From latitude", type: "number" },
      { key: "originLon", label: "From longitude", type: "number" },
      { key: "destCity", label: "To", type: "text" },
      { key: "destLat", label: "To latitude", type: "number" },
      { key: "destLon", label: "To longitude", type: "number" },
    ],
  },
};

// ---------------------------------------------------------------------------
// APP
// ---------------------------------------------------------------------------
const NAV = [
  { key: "impact", label: "My impact", icon: Sparkles },
  { key: "log", label: "Log activity", icon: PenLine },
  { key: "challenges", label: "Weekly challenges", icon: Award },
  { key: "verify", label: "Verify an action", icon: Camera },
  { key: "mapView", label: "Carbon map", icon: Globe2 },
  { key: "services", label: "Connected services", icon: Building2 },
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "progress", label: "Progress", icon: Award },
  { key: "leaderboard", label: "Leaderboard", icon: Globe2 },
  { key: "trees", label: "Trees planted", icon: TreePine },
  { key: "report", label: "Report", icon: FileText },
  { key: "history", label: "History", icon: Clock },
  { key: "campus", label: "Campus mode", icon: Building2 },
  { key: "coach", label: "AI Carbon Coach", icon: Sparkles },
];

export default function PlanetPlus() {
  const [activities, setActivities] = useState(() => localBackend.read()?.activities || seedData());
  const [waterLogs, setWaterLogs] = useState(() => localBackend.read()?.waterLogs || seedWaterData());
  const [trees, setTrees] = useState(() => localBackend.read()?.trees || seedTreeData());
  const [tab, setTab] = useState("log");
  const [weeklyTarget, setWeeklyTarget] = useState(40);
  const [targetInput, setTargetInput] = useState("40");
  const [citizen, setCitizen] = useState(null);
  const [connectedServices, setConnectedServices] = useState({ electricity: false, transport: false });
  const [verifiedActions, setVerifiedActions] = useState(() => localBackend.read()?.verifiedActions || seedVerifiedActions());
  const [completedChallenges, setCompletedChallenges] = useState(() => localBackend.read()?.completedChallenges || seedCompletedChallenges());
  const [impactMessage, setImpactMessage] = useState("");

  useEffect(() => {
    localBackend.write({ activities, waterLogs, trees, verifiedActions, completedChallenges });
  }, [activities, waterLogs, trees, verifiedActions, completedChallenges]);

  const [filterType, setFilterType] = useState("all");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");

  const today = todayISO();
  const total = useMemo(() => aggregateTotal(activities), [activities]);
  const activeTrees = useMemo(() => trees.filter((tree) => tree.status === "verified").length, [trees]);
  const treeCredit = +(activeTrees * TREE_CO2_CREDIT / 52).toFixed(2);
  const netTotal = Math.max(0, +(total - treeCredit).toFixed(2));
  const byCategory = useMemo(() => aggregateByCategory(activities), [activities]);
  const thisWeek = useMemo(() => aggregateByWeek(activities, today), [activities]);
  const netThisWeek = Math.max(0, +(thisWeek - treeCredit).toFixed(2));
  const weekPct = weeklyTarget > 0 ? (netThisWeek / weeklyTarget) * 100 : 0;
  const expectedPct = ((dayIndexInWeek(today) + 1) / 7) * 100;
  const pace = weekPct <= expectedPct + 5 ? "on-track" : weekPct > 100 ? "over" : "ahead";

  const loggingStreak = useMemo(() => computeLoggingStreak(activities, waterLogs, today), [activities, waterLogs]);
  const underTargetStreak = useMemo(() => computeUnderTargetStreak(activities, weeklyTarget, today), [activities, weeklyTarget]);
  const badgeCtx = { activities, waterLogs, loggingStreak, underTargetStreak };
  const earnedCount = BADGES.filter((b) => b.check(badgeCtx)).length;
  const verifiedCount = verifiedActions.length + activities.filter((a) => ["scan", "utility-api", "transport-api"].includes(a.source)).length;
  const sustainableTrips = activities.filter((a) => a.type === "bus" && ["map", "scan", "transport-api"].includes(a.source)).reduce((sum, a) => sum + a.quantity, 0);
  const avoidedCO2 = +(activeTrees * TREE_CO2_CREDIT + sustainableTrips * (ACTIVITY_TYPES.car.factor - ACTIVITY_TYPES.bus.factor) + verifiedCount * 0.8).toFixed(1);
  const ecoPoints = verifiedCount * 10 + activeTrees * 25 + completedChallenges.length * 30;

  const pieData = Object.entries(byCategory).map(([key, val]) => ({
    name: CATEGORY_META[key].label,
    value: val,
    color: CATEGORY_META[key].color,
  }));

  const filtered = useMemo(() => {
    return activities
      .filter((a) => filterType === "all" || a.type === filterType)
      .filter((a) => !filterFrom || a.date >= filterFrom)
      .filter((a) => !filterTo || a.date <= filterTo)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [activities, filterType, filterFrom, filterTo]);

  function addActivity(entry) {
    setActivities((prev) => [createActivity(entry), ...prev]);
  }
  function removeActivity(id) {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  }
  function addWaterLog(entry) {
    setWaterLogs((prev) => [createWaterLog(entry), ...prev]);
  }
  function removeWaterLog(id) {
    setWaterLogs((prev) => prev.filter((w) => w.id !== id));
  }

  function importConnectedRecord(record) {
    if (record.kind === "water") addWaterLog(record);
    else addActivity(record);
  }

  function toggleService(service, enabled) {
    setConnectedServices((prev) => ({ ...prev, [service]: enabled }));
  }

  return (
    <div style={styles.app}>
      <style>{globalCSS}</style>

      <aside style={styles.sidebar} className="no-print">
        <div style={styles.brand}>
          <div style={styles.brandMark}>🌿</div>
          <div>
            <div style={styles.brandName}>Planet Plus</div>
            <div style={styles.brandSub}>carbon footprint journal</div>
          </div>
        </div>

        <nav style={styles.nav}>
          {NAV.map((n) => {
            const Icon = n.icon;
            return (
              <button
                key={n.key}
                onClick={() => setTab(n.key)}
                style={{ ...styles.navBtn, ...(tab === n.key ? styles.navBtnActive : {}) }}
              >
                <Icon size={15} strokeWidth={2} />
                {n.label}
              </button>
            );
          })}
        </nav>

        <div style={styles.sideStat}>
          <div style={styles.sideStatLabel}>Total logged</div>
          <div style={styles.sideStatValue}>{netTotal} kg</div>
          <div style={styles.sideStatSub}>Net CO₂ after verified tree credit</div>
          <button style={styles.badgeTeaser} onClick={() => setTab("progress")}>
            <Award size={13} /> {earnedCount}/{BADGES.length} badges earned
          </button>
        </div>
      </aside>

      <main style={styles.main}>
        {tab === "impact" && (
          <ImpactView activeTrees={activeTrees} avoidedCO2={avoidedCO2} sustainableTrips={sustainableTrips} verifiedCount={verifiedCount} ecoPoints={ecoPoints} total={netTotal} onNavigate={setTab} />
        )}

        {tab === "challenges" && (
          <ChallengesView completed={completedChallenges} setCompleted={setCompletedChallenges} onNavigate={setTab} />
        )}

        {tab === "verify" && (
          <VerificationView verifiedActions={verifiedActions} setVerifiedActions={setVerifiedActions} />
        )}

        {tab === "mapView" && <CarbonMapView activities={activities} trees={trees} />}
        {tab === "campus" && <CampusView activeTrees={activeTrees} sustainableTrips={sustainableTrips} verifiedCount={verifiedCount} />}
        {tab === "coach" && <CoachView byCategory={byCategory} activities={activities} total={netTotal} />}

        {tab === "log" && (
          <LogView addActivity={addActivity} addWaterLog={addWaterLog} recent={activities.slice(0, 5)} removeActivity={removeActivity} />
        )}

        {tab === "services" && (
          <ConnectedServicesView
            citizen={citizen}
            setCitizen={setCitizen}
            connectedServices={connectedServices}
            toggleService={toggleService}
            importConnectedRecord={importConnectedRecord}
          />
        )}

        {tab === "dashboard" && (
          <DashboardView
            total={netTotal}
            pieData={pieData}
            thisWeek={netThisWeek}
            weeklyTarget={weeklyTarget}
            weekPct={weekPct}
            expectedPct={expectedPct}
            pace={pace}
            targetInput={targetInput}
            setTargetInput={setTargetInput}
            setWeeklyTarget={setWeeklyTarget}
            activities={activities}
            waterLogs={waterLogs}
            removeWaterLog={removeWaterLog}
          />
        )}

        {tab === "progress" && (
          <ProgressView loggingStreak={loggingStreak} underTargetStreak={underTargetStreak} badgeCtx={badgeCtx} />
        )}

        {tab === "leaderboard" && <LeaderboardView activities={activities} waterLogs={waterLogs} avoidedCO2={avoidedCO2} />}

        {tab === "trees" && (
          <TreesView trees={trees} setTrees={setTrees} activeTrees={activeTrees} treeCredit={treeCredit} />
        )}

        {tab === "report" && <ReportView activities={activities} waterLogs={waterLogs} today={today} />}

        {tab === "history" && (
          <HistoryView
            filtered={filtered}
            filterType={filterType}
            setFilterType={setFilterType}
            filterFrom={filterFrom}
            setFilterFrom={setFilterFrom}
            filterTo={filterTo}
            setFilterTo={setFilterTo}
            removeActivity={removeActivity}
            total={aggregateTotal(filtered)}
          />
        )}
      </main>
    </div>
  );
}

// ---------------------------------------------------------------------------
// VIBRANT SUSTAINABILITY HUB
// ---------------------------------------------------------------------------
function ImpactView({ activeTrees, avoidedCO2, sustainableTrips, verifiedCount, ecoPoints, total, onNavigate }) {
  const driveEquivalent = Math.round(avoidedCO2 / ACTIVITY_TYPES.car.factor);
  return <div style={styles.viewWrap}>
    <Header eyebrow="your impact" title="Small actions. Visible change." sub="A living snapshot of the good your choices are creating." icon={Sparkles} accent="#F05D5E" />
    <div style={styles.heroCard}>
      <div><div style={styles.heroKicker}>Planet Plus impact score</div><div style={styles.heroNumber}>{avoidedCO2} <span>kg CO₂ reduced</span></div><div style={styles.heroSub}>That is approximately the emissions from driving {driveEquivalent.toLocaleString()} km.</div></div>
      <div style={styles.heroOrb}>🌍</div>
    </div>
    <div style={styles.impactGrid}>
      <ImpactStat icon="🌳" value={activeTrees} label="verified trees" color="#3F7350" />
      <ImpactStat icon="🚌" value={`${Math.round(sustainableTrips)} km`} label="public transport" color="#2B6E6E" />
      <ImpactStat icon="♻️" value={verifiedCount} label="verified actions" color="#C08A2E" />
      <ImpactStat icon="⭐" value={ecoPoints.toLocaleString()} label="Eco Points" color="#B4502F" />
    </div>
    <div style={styles.grid2}>
      <div style={styles.vibrantCard}><div style={styles.cardLabel}>Your progress</div><div style={styles.bigNumber}>{total} kg</div><div style={styles.cardSub}>Net footprint after verified tree credit.</div><button style={styles.coralBtn} onClick={() => onNavigate("dashboard")}>Explore dashboard</button></div>
      <div style={styles.vibrantCard}><div style={styles.cardLabel}>What should I do today?</div><div style={styles.recommendation}>🚌 Try the bus for one trip</div><div style={styles.cardSub}>Replacing 8 km of car travel could save about 1 kg CO₂.</div><button style={styles.tealBtn} onClick={() => onNavigate("challenges")}>Take the challenge</button></div>
    </div>
  </div>;
}
function ImpactStat({ icon, value, label, color }) { return <div style={{ ...styles.impactStat, borderTop: `4px solid ${color}` }}><div style={styles.statEmoji}>{icon}</div><div style={styles.statValue}>{value}</div><div style={styles.statLabel}>{label}</div></div>; }

const CHALLENGES = [
  { id: "bus2", icon: "🚌", title: "Public Traveler", text: "Take public transport twice", reward: 50 },
  { id: "tree", icon: "🌱", title: "Plant a seed", text: "Register one tree", reward: 75 },
  { id: "walk", icon: "🚶", title: "Move mindfully", text: "Replace one car trip", reward: 50 },
];
function ChallengesView({ completed, setCompleted, onNavigate }) { return <div style={styles.viewWrap}><Header eyebrow="this week's mission" title="Turn intention into action" sub="Complete small, realistic challenges and earn Eco Points." icon={Award} accent="#F0A202" /><div style={styles.challengeBanner}><div><div style={styles.heroKicker}>Weekly challenge</div><strong>Every choice counts</strong><div style={styles.cardSub}>{completed.length} / {CHALLENGES.length} completed</div></div><div style={styles.challengeRing}>{completed.length}/{CHALLENGES.length}</div></div><div style={styles.challengeList}>{CHALLENGES.map((c) => { const done = completed.includes(c.id); return <div key={c.id} style={{ ...styles.challengeCard, ...(done ? styles.challengeDone : {}) }}><div style={styles.challengeIcon}>{c.icon}</div><div style={{ flex: 1 }}><strong>{c.title}</strong><div style={styles.cardSub}>{c.text} · +{c.reward} XP</div></div><button style={done ? styles.doneBtn : styles.coralBtn} onClick={() => done ? setCompleted(completed.filter((id) => id !== c.id)) : setCompleted([...completed, c.id])}>{done ? "Completed ✓" : "I'll do it"}</button></div>; })}</div><button style={styles.linkBtn} onClick={() => onNavigate("verify")}>Have proof? Verify an action →</button></div>; }

function VerificationView({ verifiedActions, setVerifiedActions }) { const [file, setFile] = useState(null); const [kind, setKind] = useState("Public transport"); function submit(e) { e.preventDefault(); if (!file) return; setVerifiedActions([{ id: nextId(), kind, date: todayISO(), status: "verified", fileName: file.name }, ...verifiedActions]); setFile(null); } return <div style={styles.viewWrap}><Header eyebrow="proof studio" title="Verify a sustainable action" sub="Upload evidence so your impact can become trusted and rewardable." icon={Camera} accent="#6C4C8C" /><form onSubmit={submit} style={styles.vibrantCard}><div style={styles.prototypeNotice}><ShieldCheck size={16} /> AI verification aid: this prototype marks submitted evidence as verified.</div><div style={styles.formRow}><Field label="Action"><select value={kind} onChange={(e) => setKind(e.target.value)} style={styles.input}><option>Public transport</option><option>Tree planting</option><option>Walking or cycling</option><option>Reusable purchase</option></select></Field><Field label="Photo or proof"><input type="file" accept="image/*,.pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} style={styles.input} /></Field></div><div style={styles.formFooter}><span style={styles.previewText}>{file ? `${file.name} ready for review` : "Upload a dated photo, ticket, or receipt."}</span><button style={styles.coralBtn} type="submit">Submit for AI review</button></div></form><div style={styles.subheading}>Verified actions</div>{verifiedActions.map((a) => <div key={a.id} style={styles.proofRow}><span style={styles.proofIcon}>✓</span><div><strong>{a.kind}</strong><div style={styles.cardSub}>{a.date} · {a.fileName || "proof-backed activity"}</div></div><span style={styles.verifiedPill}>Verified</span></div>)}</div>; }

function CarbonMapView({ activities, trees }) { const points = [...activities.filter((a) => a.route), ...trees].slice(0, 18); return <div style={styles.viewWrap}><Header eyebrow="carbon map" title="A living map of your impact" sub="Explore trips, verified actions, and trees in one place." icon={Globe2} accent="#2B6E6E" /><div style={styles.mapPanel}><div style={styles.mapLegend}><span>🚌 transport</span><span>🌳 verified tree</span><span>📍 action</span></div><svg viewBox="0 0 620 300" style={styles.impactMap}><rect width="620" height="300" fill="#DDF3F0" />{Array.from({ length: 8 }, (_, i) => <line key={`v${i}`} x1={i * 90} y1="0" x2={i * 90} y2="300" stroke="#B7E0D8" />)}{Array.from({ length: 5 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 75} x2="620" y2={i * 75} stroke="#B7E0D8" />)}{points.map((p, i) => <g key={p.id || i}><circle cx={(i * 137 + 76) % 570 + 25} cy={(i * 83 + 42) % 230 + 25} r="10" fill={p.species ? "#3F7350" : "#F05D5E"} stroke="#FFFDF6" strokeWidth="3" /><text x={(i * 137 + 88) % 570 + 25} y={(i * 83 + 35) % 230 + 25} fontSize="11">{p.species ? "🌳" : "📍"}</text></g>)}</svg></div></div>; }

function CampusView({ activeTrees, sustainableTrips, verifiedCount }) { return <div style={styles.viewWrap}><Header eyebrow="campus mode" title="JKLU Green Campus" sub="A shared sustainability scoreboard for students, teams, and colleges." icon={Building2} accent="#F05D5E" /><div style={styles.campusHero}><strong>Inter-college green season</strong><span>Live prototype scoreboard · 2026</span></div><div style={styles.impactGrid}><ImpactStat icon="🌳" value={activeTrees + 327} label="campus trees" color="#3F7350" /><ImpactStat icon="🚌" value={(Math.round(sustainableTrips) + 1240).toLocaleString()} label="sustainable trips" color="#2B6E6E" /><ImpactStat icon="🌍" value={`${(verifiedCount * .8 + 2481).toFixed(0)} kg`} label="CO₂ avoided" color="#C08A2E" /></div><div style={styles.vibrantCard}><div style={styles.cardLabel}>Campus teams</div>{[{ n: "Team A", v: 184 }, { n: "Team B", v: 161 }, { n: "Team C", v: 143 }].map((r, i) => <div key={r.n} style={styles.teamRow}><span>{i + 1}. {r.n}</span><strong>{r.v} actions</strong></div>)}</div></div>; }

function CoachView({ byCategory, activities, total }) { const top = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0]; const carKm = activities.filter((a) => a.type === "car").reduce((s, a) => s + a.quantity, 0); return <div style={styles.viewWrap}><Header eyebrow="AI carbon coach" title="Advice based on your real data" sub="Not a generic chatbot — practical suggestions from your footprint." icon={Sparkles} accent="#6C4C8C" /><div style={styles.coachBubble}>✨ <strong>Here’s your next best move</strong><p>{top ? `${CATEGORY_META[top[0]].label} is your biggest source at ${top[1]} kg. ` : "Start logging a few activities. "}{carKm > 0 ? `You logged ${Math.round(carKm)} km by car; switching two commutes to bus could save about ${(carKm * .12).toFixed(1)} kg.` : "Try logging one verified sustainable action today."}</p></div><div style={styles.grid2}><div style={styles.vibrantCard}><div style={styles.cardLabel}>Why your footprint changes</div><div style={styles.bigNumber}>{total} kg</div><div style={styles.cardSub}>Your coach updates whenever your activity log changes.</div></div><div style={styles.vibrantCard}><div style={styles.cardLabel}>Track → Understand → Act</div><div style={styles.coachSteps}>📍 Track<br />📊 Understand<br />💡 Act<br />🏆 Verify & reward</div></div></div></div>; }

// ---------------------------------------------------------------------------
// VIEW: Log activity
// ---------------------------------------------------------------------------
function LogView({ addActivity, addWaterLog, recent, removeActivity }) {
  const [mode, setMode] = useState("quick"); // "quick" | "map" | "scan"

  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="log activity" title="Record what you did today" sub="Pick a type, enter the amount, and Planet Plus works out the CO₂." icon={PenLine} accent={CATEGORY_META.travel.color} />

      <div style={styles.segmented}>
        {[
          { key: "quick", label: "Quick entry" },
          { key: "map", label: "Trip on map" },
          { key: "scan", label: "Scan a bill" },
        ].map((m) => (
          <button key={m.key} onClick={() => setMode(m.key)} style={{ ...styles.segBtn, ...(mode === m.key ? styles.segBtnActive : {}) }}>
            {m.label}
          </button>
        ))}
      </div>

      {mode === "quick" && <QuickLogForm addActivity={addActivity} />}
      {mode === "map" && <MapLogForm addActivity={addActivity} />}
      {mode === "scan" && <ScanBillForm addActivity={addActivity} addWaterLog={addWaterLog} />}

      <div style={styles.subheading}>Just logged</div>
      {recent.length === 0 ? (
        <EmptyState text="Nothing logged yet. Your first entry will show up here." />
      ) : (
        <div style={{ display: "grid", gap: 8 }}>
          {recent.map((a) => (
            <ActivityRow key={a.id} a={a} onRemove={removeActivity} />
          ))}
        </div>
      )}
    </div>
  );
}

function QuickLogForm({ addActivity }) {
  const [type, setType] = useState("car");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState(todayISO());
  const preview = quantity ? calculateCO2(type, quantity) : null;
  const overCeiling = quantity && Number(quantity) > SANITY_CEILING[type];
  const Icon = ICONS[ACTIVITY_TYPES[type].icon];

  function handleSubmit(e) {
    e.preventDefault();
    if (!quantity || Number(quantity) <= 0) return;
    addActivity({ type, quantity, date });
    setQuantity("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ ...styles.card, borderTop: `3px solid ${CATEGORY_META[ACTIVITY_TYPES[type].category].color}` }}>
      <div style={styles.formRow}>
        <Field label="Type">
          <div style={styles.selectWithIcon}>
            <Icon size={15} style={{ color: CATEGORY_META[ACTIVITY_TYPES[type].category].color }} />
            <select value={type} onChange={(e) => setType(e.target.value)} style={styles.inputBare}>
              {Object.entries(ACTIVITY_TYPES).map(([key, def]) => (
                <option key={key} value={key}>{def.label}</option>
              ))}
            </select>
          </div>
        </Field>

        <Field label={`Quantity (${ACTIVITY_TYPES[type].unit})`}>
          <input type="number" min="0" step="0.1" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="0" style={styles.input} />
        </Field>

        <Field label="Date">
          <input type="date" value={date} max={todayISO()} onChange={(e) => setDate(e.target.value)} style={styles.input} />
        </Field>
      </div>

      <div style={styles.formFooter}>
        <div style={styles.previewText}>
          {preview !== null ? (
            <>
              <span style={styles.mono}>{preview} kg CO₂</span> for this entry
              {overCeiling && <span style={styles.warnInline}> — that's a lot for one entry. Double-check the number before saving.</span>}
            </>
          ) : (
            "Enter a quantity to see the estimate"
          )}
        </div>
        <button type="submit" style={styles.primaryBtn}>Log activity</button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// VIEW: Trip on map
// ---------------------------------------------------------------------------
function MapLogForm({ addActivity }) {
  const [type, setType] = useState("car");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [active, setActive] = useState("from");
  const [date, setDate] = useState(todayISO());
  const [override, setOverride] = useState("");

  const distance = from && to ? haversineKm(from, to) : null;
  const finalQuantity = override !== "" ? Number(override) : distance ? +distance.toFixed(1) : null;
  const preview = finalQuantity ? calculateCO2(type, finalQuantity) : null;
  const overCeiling = finalQuantity && finalQuantity > SANITY_CEILING[type];

  function nearestCity(lon, lat) {
    let best = null, bestDist = Infinity;
    for (const c of CITIES) {
      const p1 = lonLatToXY(c.lon, c.lat);
      const p2 = lonLatToXY(lon, lat);
      const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      if (d < bestDist) { bestDist = d; best = c; }
    }
    return bestDist <= 14 ? best : null;
  }

  function handleMapClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * MAP_W;
    const y = ((e.clientY - rect.top) / rect.height) * MAP_H;
    const { lon, lat } = xyToLonLat(x, y);
    const snapped = nearestCity(lon, lat);
    const point = snapped || { name: `Custom point (${lat.toFixed(1)}, ${lon.toFixed(1)})`, lat, lon };
    if (active === "from") { setFrom(point); setActive("to"); }
    else { setTo(point); setActive("from"); }
    setOverride("");
  }

  function handlePickCity(which, cityName) {
    const c = CITIES.find((c) => c.name === cityName);
    if (!c) return;
    const point = { name: c.name, lat: c.lat, lon: c.lon };
    if (which === "from") setFrom(point); else setTo(point);
    setOverride("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!from || !to || !finalQuantity || finalQuantity <= 0) return;
    addActivity({ type, quantity: finalQuantity, date, route: { from: from.name, to: to.name }, source: "map" });
    setFrom(null); setTo(null); setOverride(""); setActive("from");
  }

  return (
    <form onSubmit={handleSubmit} style={{ ...styles.card, borderTop: `3px solid ${CATEGORY_META.travel.color}` }}>
      <div style={styles.mapHint}>
        Click the map to place your <strong>{active === "from" ? "start" : "destination"}</strong> point — clicking near a city snaps to it, anywhere else drops a custom pin.
      </div>

      <TripMap from={from} to={to} active={active} onMapClick={handleMapClick} onSetActive={setActive} />

      <div style={styles.formRow}>
        <Field label="From">
          <select value={from?.name && CITIES.some((c) => c.name === from.name) ? from.name : ""} onChange={(e) => handlePickCity("from", e.target.value)} style={styles.input}>
            <option value="">{from ? from.name : "Choose a city…"}</option>
            {CITIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </Field>
        <Field label="To">
          <select value={to?.name && CITIES.some((c) => c.name === to.name) ? to.name : ""} onChange={(e) => handlePickCity("to", e.target.value)} style={styles.input}>
            <option value="">{to ? to.name : "Choose a city…"}</option>
            {CITIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </Field>
        <Field label="Mode of travel">
          <select value={type} onChange={(e) => setType(e.target.value)} style={styles.input}>
            {MAP_TRIP_TYPES.map((key) => <option key={key} value={key}>{ACTIVITY_TYPES[key].label}</option>)}
          </select>
        </Field>
        <Field label="Date">
          <input type="date" value={date} max={todayISO()} onChange={(e) => setDate(e.target.value)} style={styles.input} />
        </Field>
      </div>

      {distance !== null && (
        <div style={styles.formRow}>
          <Field label="Distance override (km, optional)">
            <input type="number" min="0" step="0.1" value={override} onChange={(e) => setOverride(e.target.value)} placeholder={`${distance.toFixed(1)} (calculated)`} style={styles.input} />
          </Field>
        </div>
      )}

      <div style={styles.formFooter}>
        <div style={styles.previewText}>
          {!from || !to ? "Place a start and destination point to see the estimate" : (
            <>
              <span style={styles.mono}>{finalQuantity} km · {preview} kg CO₂</span>
              {overCeiling && <span style={styles.warnInline}> — that's a long trip for one entry. Double-check before saving.</span>}
            </>
          )}
        </div>
        <button type="submit" style={styles.primaryBtn} disabled={!from || !to}>Log trip</button>
      </div>
    </form>
  );
}

function TripMap({ from, to, active, onMapClick, onSetActive }) {
  const fromXY = from ? lonLatToXY(from.lon, from.lat) : null;
  const toXY = to ? lonLatToXY(to.lon, to.lat) : null;
  const meridians = Array.from({ length: 13 }, (_, i) => -180 + i * 30);
  const parallels = Array.from({ length: 7 }, (_, i) => -90 + i * 30);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button type="button" onClick={() => onSetActive("from")} style={{ ...styles.pinToggle, ...(active === "from" ? styles.pinToggleActiveFrom : {}) }}>
          ● Start{from ? `: ${from.name}` : ""}
        </button>
        <button type="button" onClick={() => onSetActive("to")} style={{ ...styles.pinToggle, ...(active === "to" ? styles.pinToggleActiveTo : {}) }}>
          ● Destination{to ? `: ${to.name}` : ""}
        </button>
      </div>

      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} style={styles.mapSvg} onClick={onMapClick}>
        <rect x={0} y={0} width={MAP_W} height={MAP_H} fill="#E9F1EC" />
        {meridians.map((lon) => { const { x } = lonLatToXY(lon, 0); return <line key={lon} x1={x} y1={0} x2={x} y2={MAP_H} stroke="#CFE0D4" strokeWidth={1} />; })}
        {parallels.map((lat) => { const { y } = lonLatToXY(0, lat); return <line key={lat} x1={0} y1={y} x2={MAP_W} y2={y} stroke="#CFE0D4" strokeWidth={1} />; })}
        <line x1={0} y1={MAP_H / 2} x2={MAP_W} y2={MAP_H / 2} stroke="#B7CDBE" strokeWidth={1.5} />

        {CITIES.map((c) => {
          const { x, y } = lonLatToXY(c.lon, c.lat);
          const isFrom = from?.name === c.name, isTo = to?.name === c.name;
          return (
            <g key={c.name}>
              <circle cx={x} cy={y} r={isFrom || isTo ? 5 : 3} fill={isFrom ? "#3F7350" : isTo ? "#B4502F" : "#8A8072"} />
              {(isFrom || isTo) && <text x={x + 7} y={y - 6} fontSize={10} fill="#20261F">{c.name}</text>}
            </g>
          );
        })}

        {from && !CITIES.some((c) => c.name === from.name) && <circle cx={fromXY.x} cy={fromXY.y} r={5} fill="#3F7350" />}
        {to && !CITIES.some((c) => c.name === to.name) && <circle cx={toXY.x} cy={toXY.y} r={5} fill="#B4502F" />}
        {fromXY && toXY && <line x1={fromXY.x} y1={fromXY.y} x2={toXY.x} y2={toXY.y} stroke="#20261F" strokeWidth={1.5} strokeDasharray="5 4" />}
      </svg>
      <div style={styles.cardSub}>Simplified grid, not live map tiles — the route line and CO₂ estimate use real latitude/longitude and great-circle distance.</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// VIEW: Scan a bill
// ---------------------------------------------------------------------------
function ScanBillForm({ addActivity, addWaterLog }) {
  const [billType, setBillType] = useState("electricity");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | scanning | done | error
  const [extracted, setExtracted] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [date, setDate] = useState(todayISO());
  const [scanned, setScanned] = useState(false);

  const cfg = BILL_CONFIGS[billType];
  const Icon = ICONS[cfg.icon] || Zap;

  function reset() {
    setFile(null); setPreviewUrl(null); setStatus("idle"); setExtracted(null); setErrorMsg(""); setScanned(false);
  }
  function handleTypeChange(v) { setBillType(v); reset(); }

  function handleFileChange(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    setStatus("idle");
    setExtracted(null);
  }

  async function handleScan() {
    if (!file) return;
    setStatus("scanning");
    setErrorMsg("");
    try {
      const base64 = await fileToBase64(file);
      const result = await scanImage(base64, file.type || "image/jpeg", cfg.prompt);
      const vals = {};
      cfg.resultFields.forEach((f) => { vals[f.key] = result[f.key] ?? ""; });
      setExtracted(vals);
      setScanned(true);
      setStatus("done");
    } catch (err) {
      setErrorMsg("Couldn't read that automatically — enter the numbers below instead.");
      const vals = {};
      cfg.resultFields.forEach((f) => { vals[f.key] = ""; });
      setExtracted(vals);
      setScanned(false);
      setStatus("error");
    }
  }

  function handleManualEntry() {
    const vals = {};
    cfg.resultFields.forEach((f) => { vals[f.key] = ""; });
    setExtracted(vals);
    setScanned(false);
    setStatus("done");
  }

  function updateField(key, value) {
    setExtracted((prev) => ({ ...prev, [key]: value }));
  }

  function handleConfirm(e) {
    e.preventDefault();
    if (!extracted) return;
    if (cfg.isWater) {
      const liters = Number(extracted.liters);
      if (!liters || liters <= 0) return;
      addWaterLog({ liters, date, source: scanned ? "scan" : "manual" });
    } else if (cfg.isFlight) {
      const a = { lat: Number(extracted.originLat), lon: Number(extracted.originLon) };
      const b = { lat: Number(extracted.destLat), lon: Number(extracted.destLon) };
      if (![a.lat, a.lon, b.lat, b.lon].every(Number.isFinite)) return;
      const dist = haversineKm(a, b);
      addActivity({ type: "flight", quantity: +dist.toFixed(1), date, route: { from: extracted.originCity || "Origin", to: extracted.destCity || "Destination" }, source: scanned ? "scan" : "manual" });
    } else {
      const key = cfg.resultFields[0].key;
      const q = Number(extracted[key]);
      if (!q || q <= 0) return;
      addActivity({ type: cfg.activityType, quantity: q, date, source: scanned ? "scan" : "manual" });
    }
    reset();
  }

  const co2Preview = extracted && !cfg.isWater && !cfg.isFlight ? calculateCO2(cfg.activityType, Number(extracted[cfg.resultFields[0].key]) || 0) : null;
  const flightPreview = extracted && cfg.isFlight && [extracted.originLat, extracted.originLon, extracted.destLat, extracted.destLon].every((v) => v !== "" && Number.isFinite(Number(v)))
    ? haversineKm({ lat: Number(extracted.originLat), lon: Number(extracted.originLon) }, { lat: Number(extracted.destLat), lon: Number(extracted.destLon) })
    : null;

  return (
    <form onSubmit={handleConfirm} style={{ ...styles.card, borderTop: `3px solid ${cfg.isWater ? WATER_COLOR : CATEGORY_META[cfg.activityType ? ACTIVITY_TYPES[cfg.activityType].category : "travel"].color}` }}>
      <Field label="What are you scanning?">
        <div style={styles.selectWithIcon}>
          <Icon size={15} style={{ color: cfg.isWater ? WATER_COLOR : "#3F7350" }} />
          <select value={billType} onChange={(e) => handleTypeChange(e.target.value)} style={styles.inputBare}>
            {Object.entries(BILL_CONFIGS).map(([key, c]) => <option key={key} value={key}>{c.label}</option>)}
          </select>
        </div>
      </Field>

      <div style={styles.dropzone}>
        {previewUrl ? (
          <div style={styles.previewRow}>
            <img src={previewUrl} alt="Bill preview" style={styles.previewThumb} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{file?.name}</div>
              <div style={{ fontSize: 12, color: "#8A8072", marginTop: 2 }}>
                {status === "idle" && "Ready to scan"}
                {status === "scanning" && "Reading the photo…"}
                {status === "done" && scanned && "Extracted — check the numbers below"}
                {status === "error" && errorMsg}
              </div>
            </div>
            <button type="button" onClick={reset} style={styles.iconBtn}><X size={14} /></button>
          </div>
        ) : (
          <label style={styles.dropzoneLabel}>
            <Camera size={20} />
            <span>Upload a photo of your {cfg.label.toLowerCase()}</span>
            <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
          </label>
        )}
      </div>

      {previewUrl && status !== "done" && (
        <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
          <button type="button" onClick={handleScan} disabled={status === "scanning"} style={styles.primaryBtn}>
            {status === "scanning" ? <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Loader2 size={14} className="spin" /> Scanning…</span> : (<span style={{ display: "flex", alignItems: "center", gap: 6 }}><Upload size={14} /> Scan bill</span>)}
          </button>
          <button type="button" onClick={handleManualEntry} style={styles.linkBtn}>Enter values manually instead</button>
        </div>
      )}

      {status === "done" && extracted && (
        <>
          <div style={styles.formRow}>
            {cfg.resultFields.map((f) => (
              <Field key={f.key} label={f.label}>
                <input
                  type={f.type === "text" ? "text" : "number"}
                  step="any"
                  value={extracted[f.key]}
                  onChange={(e) => updateField(f.key, e.target.value)}
                  style={styles.input}
                />
              </Field>
            ))}
            <Field label="Date">
              <input type="date" value={date} max={todayISO()} onChange={(e) => setDate(e.target.value)} style={styles.input} />
            </Field>
          </div>

          <div style={styles.formFooter}>
            <div style={styles.previewText}>
              {cfg.isWater && extracted.liters && <span className="mono" style={styles.mono}>{extracted.liters} L logged as water usage</span>}
              {cfg.isFlight && flightPreview !== null && <span style={styles.mono}>{flightPreview.toFixed(1)} km · {calculateCO2("flight", flightPreview)} kg CO₂</span>}
              {!cfg.isWater && !cfg.isFlight && co2Preview !== null && <span style={styles.mono}>{co2Preview} kg CO₂</span>}
              {!extracted[cfg.resultFields[0].key] && "Fill in the values to see the estimate"}
            </div>
            <button type="submit" style={styles.primaryBtn}>Add to log</button>
          </div>
        </>
      )}
    </form>
  );
}

// ---------------------------------------------------------------------------
// VIEW: Connected services (frontend prototype)
// ---------------------------------------------------------------------------
function ConnectedServicesView({ citizen, setCitizen, connectedServices, toggleService, importConnectedRecord }) {
  const [aadhaar, setAadhaar] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");

  function mockLogin(e) {
    e.preventDefault();
    if (aadhaar.replace(/\D/g, "").length !== 12 || !consent) return;
    setCitizen({ name: "Demo citizen", maskedId: `XXXX-XXXX-${aadhaar.replace(/\D/g, "").slice(-4)}` });
    setMessage("Prototype identity verified. No real identity service was contacted.");
  }

  function importElectricity() {
    importConnectedRecord({ type: "electricity", quantity: 184, date: todayISO(), source: "utility-api" });
    setMessage("Demo electricity bill added: 184 kWh.");
  }

  function importBusTrip() {
    importConnectedRecord({ type: "bus", quantity: 18, date: todayISO(), route: { from: "Home", to: "Civic centre" }, source: "transport-api" });
    setMessage("Demo bus journey added: 18 km.");
  }

  function disconnect() {
    setCitizen(null);
    toggleService("electricity", false);
    toggleService("transport", false);
    setMessage("Demo connections disconnected.");
  }

  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="connected services" title="Government carbon portal" sub="A frontend-only preview of identity verification and automatic record imports." icon={Building2} accent="#2B6E6E" />
      <div style={styles.prototypeNotice}><ShieldCheck size={16} /> Prototype mode: these are mock connections. No Aadhaar or provider data is sent anywhere.</div>

      {!citizen ? (
        <form onSubmit={mockLogin} style={{ ...styles.card, borderTop: "3px solid #2B6E6E" }}>
          <div style={styles.cardLabel}><LogIn size={14} style={{ verticalAlign: -2, marginRight: 5 }} />Sign in with Aadhaar (demo)</div>
          <div style={styles.cardSub}>Enter any 12-digit demo ID. In a real deployment, this would be replaced by an approved identity provider.</div>
          <div style={{ ...styles.formRow, marginTop: 14 }}>
            <Field label="Aadhaar ID (prototype only)"><input value={aadhaar} onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, "").slice(0, 12))} inputMode="numeric" placeholder="12-digit demo ID" style={styles.input} /></Field>
            <label style={styles.consent}><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> I consent to connect my records in this prototype.</label>
          </div>
          <button type="submit" disabled={aadhaar.length !== 12 || !consent} style={styles.primaryBtn}>Verify demo identity</button>
        </form>
      ) : (
        <>
          <div style={{ ...styles.card, borderTop: "3px solid #3F7350" }}>
            <div style={styles.cardLabel}><CheckCircle2 size={14} style={{ verticalAlign: -2, marginRight: 5, color: "#3F7350" }} />Signed in</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}><div><strong>{citizen.name}</strong><div style={styles.cardSub}>Identity: {citizen.maskedId}</div></div><button type="button" onClick={disconnect} style={styles.linkBtn}><LogOut size={13} style={{ verticalAlign: -2 }} /> Disconnect</button></div>
          </div>
          <div style={{ ...styles.grid2, marginTop: 16 }}>
            <ServiceCard icon={Zap} title="Electricity board" description="Import monthly meter units and bills." connected={connectedServices.electricity} onToggle={(v) => toggleService("electricity", v)} onImport={importElectricity} importLabel="Add demo electricity bill" />
            <ServiceCard icon={Bus} title="Public transport" description="Import bus journeys and calculate their footprint." connected={connectedServices.transport} onToggle={(v) => toggleService("transport", v)} onImport={importBusTrip} importLabel="Add demo bus journey" />
          </div>
        </>
      )}
      {message && <div style={styles.serviceMessage}>{message}</div>}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description, connected, onToggle, onImport, importLabel }) {
  return <div style={{ ...styles.card, borderTop: `3px solid ${connected ? "#3F7350" : "#C08A2E"}` }}>
    <div style={styles.cardLabel}><Icon size={14} style={{ verticalAlign: -2, marginRight: 5 }} />{title}</div>
    <div style={styles.cardSub}>{description}</div>
    <button type="button" onClick={() => onToggle(!connected)} style={{ ...styles.serviceToggle, ...(connected ? styles.serviceToggleOn : {}) }}>{connected ? "Connected" : "Connect service"}</button>
    {connected && <button type="button" onClick={onImport} style={styles.secondaryBtn}>{importLabel}</button>}
  </div>;
}

// ---------------------------------------------------------------------------
// VIEW: Dashboard
// ---------------------------------------------------------------------------
function DashboardView({ total, pieData, thisWeek, weeklyTarget, weekPct, expectedPct, pace, targetInput, setTargetInput, setWeeklyTarget, activities, waterLogs, removeWaterLog }) {
  const paceCopy = {
    "on-track": { text: "On track for the week", color: "#3F7350" },
    ahead: { text: "Well under pace — nice week", color: "#3F7350" },
    over: { text: "Over your weekly target", color: "#B4502F" },
  }[pace];

  const userWeeklyAvg = useMemo(() => {
    if (activities.length === 0) return 0;
    const weeks = {};
    activities.forEach((a) => { const ws = weekStart(a.date); weeks[ws] = (weeks[ws] || 0) + a.co2; });
    const vals = Object.values(weeks);
    return +(vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(1);
  }, [activities]);

  const benchmarks = [
    { label: "Your weekly average", value: userWeeklyAvg, color: "#3F7350" },
    { label: "Everyday commuter (reference)", value: 58, color: "#8A8072" },
    { label: "Low-impact target (reference)", value: 25, color: WATER_COLOR },
  ];
  const maxBenchmark = Math.max(...benchmarks.map((b) => b.value), 1);
  const waterTotal = +waterLogs.reduce((s, w) => s + w.liters, 0).toFixed(0);

  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="dashboard" title="Your footprint at a glance" sub="Totals update the moment you log something new." icon={LayoutDashboard} accent="#3F7350" />

      <div style={styles.grid2}>
        <div style={{ ...styles.card, borderTop: "3px solid #3F7350" }}>
          <div style={styles.cardLabel}>Total footprint</div>
          <div style={styles.bigNumber}>{total} <span style={{ fontSize: 16 }}>kg</span></div>
          <div style={styles.cardSub}>CO₂ equivalent, all activities</div>

          {pieData.length > 0 ? (
            <div style={{ height: 200, marginTop: 12 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={78} paddingAngle={2}>
                    {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip formatter={(v) => `${v} kg`} />
                </PieChart>
              </ResponsiveContainer>
              <div style={styles.legendRow}>
                {pieData.map((d) => (
                  <div key={d.name} style={styles.legendItem}><span style={{ ...styles.legendDot, background: d.color }} />{d.name} · {d.value} kg</div>
                ))}
              </div>
            </div>
          ) : (
            <EmptyState text="Log an activity to see the breakdown." />
          )}
        </div>

        <div style={{ ...styles.card, borderTop: "3px solid #C08A2E" }}>
          <div style={styles.cardLabel}>Weekly target</div>
          <div style={styles.formRow}>
            <Field label="Target (kg CO₂ / week)">
              <input type="number" min="1" value={targetInput} onChange={(e) => setTargetInput(e.target.value)} onBlur={() => { const v = Number(targetInput); if (v > 0) setWeeklyTarget(v); }} style={styles.input} />
            </Field>
          </div>

          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
              <span style={styles.mono}>{thisWeek} kg of {weeklyTarget} kg</span>
              <span style={{ color: paceCopy.color, fontWeight: 600 }}>{paceCopy.text}</span>
            </div>
            <div style={styles.progressTrack}>
              <div style={{ ...styles.progressFill, width: `${Math.min(weekPct, 100)}%`, background: pace === "over" ? "#B4502F" : "#3F7350" }} />
              <div style={{ ...styles.paceMarker, left: `${Math.min(expectedPct, 100)}%` }} title="Expected pace for today" />
            </div>
            <div style={styles.cardSub}>The marker shows where you'd be if you spread the target evenly across the week.</div>
          </div>
        </div>
      </div>

      <div style={styles.grid2}>
        {pieData.length > 0 && (
          <div style={{ ...styles.card, marginTop: 16 }}>
            <div style={styles.cardLabel}>Breakdown by category</div>
            <div style={{ height: 180, marginTop: 8 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pieData} layout="vertical" margin={{ left: 10 }}>
                  <CartesianGrid horizontal={false} stroke="#E4DCC8" />
                  <XAxis type="number" tick={{ fontSize: 12 }} stroke="#8A8072" />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} stroke="#8A8072" width={70} />
                  <Tooltip formatter={(v) => `${v} kg`} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {pieData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        <div style={{ ...styles.card, marginTop: 16, borderTop: `3px solid ${WATER_COLOR}` }}>
          <div style={styles.cardLabel}><Droplets size={13} style={{ verticalAlign: -2, marginRight: 4 }} />Water usage</div>
          <div style={styles.bigNumber}>{waterTotal.toLocaleString()} <span style={{ fontSize: 14 }}>L</span></div>
          <div style={styles.cardSub}>Tracked separately — not counted toward CO₂ totals.</div>
          {waterLogs.length > 0 && (
            <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
              {waterLogs.slice(0, 3).map((w) => (
                <div key={w.id} style={styles.waterRow}>
                  <span style={styles.mono}>{w.liters.toLocaleString()} L</span>
                  <span style={{ color: "#8A8072" }}>{w.date}{w.source === "scan" && " · via scan"}</span>
                  <button onClick={() => removeWaterLog(w.id)} style={styles.removeBtn}>remove</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ ...styles.card, marginTop: 16, borderTop: "3px solid #6C4C8C" }}>
        <div style={styles.cardLabel}>How you compare</div>
        <div style={styles.cardSub}>Rough reference points covering travel, energy, and food only — not a full lifestyle footprint.</div>
        <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
          {benchmarks.map((b) => (
            <div key={b.label}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                <span>{b.label}</span>
                <span style={styles.mono}>{b.value} kg/wk</span>
              </div>
              <div style={styles.benchTrack}>
                <div style={{ ...styles.benchFill, width: `${(b.value / maxBenchmark) * 100}%`, background: b.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// VIEW: Progress (streaks + badges)
// ---------------------------------------------------------------------------
function ProgressView({ loggingStreak, underTargetStreak, badgeCtx }) {
  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="progress" title="Streaks & badges" sub="Small consistent habits, tracked." icon={Award} accent="#6C4C8C" />

      <div style={styles.grid2}>
        <div style={{ ...styles.card, borderTop: "3px solid #3F7350" }}>
          <div style={styles.cardLabel}>Logging streak</div>
          <div style={styles.bigNumber}>{loggingStreak} <span style={{ fontSize: 14 }}>{loggingStreak === 1 ? "day" : "days"}</span></div>
          <div style={styles.cardSub}>Consecutive days with at least one entry.</div>
        </div>
        <div style={{ ...styles.card, borderTop: "3px solid #2B6E6E" }}>
          <div style={styles.cardLabel}>Under-target streak</div>
          <div style={styles.bigNumber}>{underTargetStreak} <span style={{ fontSize: 14 }}>{underTargetStreak === 1 ? "week" : "weeks"}</span></div>
          <div style={styles.cardSub}>Weeks in a row finishing at or under your target.</div>
        </div>
      </div>

      <div style={styles.subheading}>Badges</div>
      <div style={styles.badgeGrid}>
        {BADGES.map((b) => {
          const unlocked = b.check(badgeCtx);
          return (
            <div key={b.id} style={{ ...styles.badgeStamp, ...(unlocked ? styles.badgeStampUnlocked : {}) }}>
              {unlocked ? <Sparkles size={20} /> : <Lock size={16} style={{ opacity: 0.4 }} />}
              <div style={styles.badgeLabel}>{b.label}</div>
              <div style={styles.badgeDesc}>{b.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// VIEW: Leaderboard
// ---------------------------------------------------------------------------
const LEADERBOARD_ROWS = {
  global: [
    { name: "Green Horizon", location: "Global", score: 184.6 },
    { name: "Eco Nomad", location: "Global", score: 162.1 },
    { name: "You", location: "Your profile", score: null, isUser: true },
    { name: "Low Carbon Crew", location: "Global", score: 131.7 },
    { name: "Everyday Earth", location: "Global", score: 98.8 },
  ],
  country: [
    { name: "Green Horizon", location: "Your country", score: 148.4 },
    { name: "You", location: "Your profile", score: null, isUser: true },
    { name: "Eco Neighbour", location: "Your country", score: 105.2 },
    { name: "Daily Planet", location: "Your country", score: 78.6 },
  ],
  regional: [
    { name: "Low Carbon Crew", location: "Your region", score: 124.6 },
    { name: "You", location: "Your profile", score: null, isUser: true },
    { name: "Eco Neighbour", location: "Your region", score: 89.8 },
    { name: "Local Steps", location: "Your region", score: 55.1 },
  ],
};

function LeaderboardView({ activities, waterLogs, avoidedCO2 }) {
  const [scope, setScope] = useState("global");
  const verifiedSources = new Set(["scan", "utility-api", "transport-api"]);
  const verifiedActivities = activities.filter((a) => verifiedSources.has(a.source));
  const verifiedWaterLogs = waterLogs.filter((w) => verifiedSources.has(w.source));
  const hasProof = verifiedActivities.length > 0 || verifiedWaterLogs.length > 0;
  const verifiedTotal = aggregateTotal(verifiedActivities);
  const weeklyData = getLastSevenWeeks(verifiedActivities);
  const rows = LEADERBOARD_ROWS[scope].map((row) => ({
    ...row,
    score: row.isUser ? avoidedCO2 : row.score,
  })).filter((row) => !row.isUser || hasProof).sort((a, b) => b.score - a.score).slice(0, 50);

  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="leaderboard" title="Celebrate your climate impact" sub="Ranked by verified CO₂ emissions avoided through sustainable actions, not by having the smallest footprint." icon={Globe2} accent="#2B6E6E" />

      <div style={{ ...styles.card, borderTop: "3px solid #D4AF6A", marginBottom: 14 }}>
                  <div style={styles.cardLabel}>Verified CO₂ savings · Top 50</div>
        <div style={styles.cardSub}>
          Higher verified savings rank better. Sustainable trips, verified actions, and verified trees contribute to your impact score; manual entries and map-only trips remain private until verified.
        </div>
        {!hasProof && <div style={styles.leaderboardNotice}>Verify a sustainable action to become eligible for the leaderboard.</div>}
        {hasProof && <div style={styles.leaderboardVerified}>Your verified impact: <span style={styles.mono}>{avoidedCO2} kg CO₂ avoided</span> · {verifiedActivities.length + verifiedWaterLogs.length} proof-backed entries</div>}
      </div>

      <div style={styles.segmented} role="tablist" aria-label="Leaderboard scope">
        {[
          { key: "global", label: "Global" },
          { key: "country", label: "Country" },
          { key: "regional", label: "Regional" },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={scope === item.key}
            onClick={() => setScope(item.key)}
            style={{ ...styles.segBtn, ...(scope === item.key ? styles.segBtnActive : {}) }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div style={{ ...styles.card, borderTop: "3px solid #2B6E6E" }}>
        <div style={styles.cardLabel}>{scope[0].toUpperCase() + scope.slice(1)} impact ranking</div>
        <div style={styles.cardSub}>Higher verified CO₂ savings is better. Only proof-backed sustainable actions count, and this prototype displays a maximum of 50 ranked profiles.</div>
        <div style={styles.leaderboardList}>
          {rows.map((row, index) => (
            <div key={`${scope}-${row.name}`} style={{ ...styles.leaderboardRow, ...(row.isUser ? styles.leaderboardUser : {}) }}>
              <span style={styles.rank}>{index + 1}</span>
              <div style={{ flex: 1 }}>
                <strong>{row.name}</strong>
                <div style={styles.cardSub}>{row.location}</div>
              </div>
              <span style={styles.mono}>{row.score.toFixed(1)} kg saved</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...styles.card, marginTop: 16, borderTop: "3px solid #3F7350" }}>
        <div style={styles.cardLabel}>Verified footprint by week</div>
        <div style={styles.cardSub}>A seven-week view of CO₂ from scanned bills and receipts only.</div>
        <WeeklyGraph data={weeklyData} />
      </div>
    </div>
  );
}

function getLastSevenWeeks(activities) {
  const current = weekStart(todayISO());
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(current + "T00:00:00");
    date.setDate(date.getDate() - (6 - index) * 7);
    const start = date.toISOString().slice(0, 10);
    return {
      label: new Date(start + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      value: aggregateTotal(activities.filter((a) => weekStart(a.date) === start)),
    };
  });
}

function WeeklyGraph({ data }) {
  const max = Math.max(...data.map((item) => item.value), 1);
  const width = 620;
  const height = 190;
  const padding = { top: 16, right: 16, bottom: 34, left: 36 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const points = data.map((item, index) => ({
    ...item,
    x: padding.left + (index / Math.max(data.length - 1, 1)) * chartWidth,
    y: padding.top + chartHeight - (item.value / max) * chartHeight,
  }));
  const line = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <div style={{ overflowX: "auto", marginTop: 12 }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={styles.weeklyGraph} role="img" aria-label="Verified weekly carbon footprint graph">
        <line x1={padding.left} y1={padding.top + chartHeight} x2={width - padding.right} y2={padding.top + chartHeight} stroke="#DED5C0" />
        <polyline points={line} fill="none" stroke="#3F7350" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        {points.map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="5" fill="#FFFDF6" stroke="#3F7350" strokeWidth="2" />
            <text x={point.x} y={point.y - 10} textAnchor="middle" fontSize="11" fill="#4A4536">{point.value}</text>
            <text x={point.x} y={height - 12} textAnchor="middle" fontSize="11" fill="#8A8072">{point.label}</text>
          </g>
        ))}
        <text x="10" y={padding.top + 5} fontSize="11" fill="#8A8072">kg</text>
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// VIEW: Trees planted
// ---------------------------------------------------------------------------
function TreesView({ trees, setTrees, activeTrees, treeCredit }) {
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [plantedDate, setPlantedDate] = useState(todayISO());

  function addTree(e) {
    e.preventDefault();
    if (!species.trim() || !location.trim()) return;
    setTrees((prev) => [createTree({ species, location, plantedDate }), ...prev]);
    setSpecies("");
    setLocation("");
    setPlantedDate(todayISO());
  }

  function verifyTree(id) {
    setTrees((prev) => prev.map((tree) => tree.id === id ? {
      ...tree,
      status: "verified",
      lastVerified: todayISO(),
      verificationNote: "AI verification passed for this weekly check. Upload a fresh photo during the next check.",
    } : tree));
  }

  function removeTree(id) {
    setTrees((prev) => prev.filter((tree) => tree.id !== id));
  }

  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="trees planted" title="Grow your verified carbon credit" sub="Register a tree and confirm its survival with a weekly AI photo check." icon={TreePine} accent="#3F7350" />

      <div style={styles.prototypeNotice}><ShieldCheck size={16} /> Prototype mode: verification is simulated. A production version would analyze timestamped, geotagged photos and require human review for disputes.</div>

      <div style={styles.grid2}>
        <div style={{ ...styles.card, borderTop: "3px solid #3F7350" }}>
          <div style={styles.cardLabel}>Verified living trees</div>
          <div style={styles.bigNumber}>{activeTrees}</div>
          <div style={styles.cardSub}>Only trees that pass their latest weekly check receive a credit.</div>
        </div>
        <div style={{ ...styles.card, borderTop: "3px solid #2B6E6E" }}>
          <div style={styles.cardLabel}>This week's tree credit</div>
          <div style={styles.bigNumber}>{treeCredit} <span style={{ fontSize: 15 }}>kg CO₂</span></div>
          <div style={styles.cardSub}>Illustrative allocation: {TREE_CO2_CREDIT} kg per surviving tree per year.</div>
        </div>
      </div>

      <form onSubmit={addTree} style={{ ...styles.card, marginTop: 16, borderTop: "3px solid #C08A2E" }}>
        <div style={styles.cardLabel}>Register a planted tree</div>
        <div style={styles.formRow}>
          <Field label="Species"><input value={species} onChange={(e) => setSpecies(e.target.value)} placeholder="Neem, oak, mango…" style={styles.input} /></Field>
          <Field label="Location or ward"><input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Park name or locality" style={styles.input} /></Field>
          <Field label="Planting date"><input type="date" value={plantedDate} max={todayISO()} onChange={(e) => setPlantedDate(e.target.value)} style={styles.input} /></Field>
        </div>
        <div style={styles.formFooter}><div style={styles.previewText}>A weekly verification is required to keep the credit active.</div><button type="submit" style={styles.primaryBtn}>Register tree</button></div>
      </form>

      <div style={styles.subheading}>Tree register</div>
      {trees.length === 0 ? <EmptyState text="Register your first tree to begin verification." /> : (
        <div style={{ display: "grid", gap: 8 }}>
          {trees.map((tree) => (
            <div key={tree.id} style={{ ...styles.row, borderLeft: `4px solid ${tree.status === "verified" ? "#3F7350" : "#C08A2E"}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ ...styles.rowIcon, background: tree.status === "verified" ? "#3F7350" : "#C08A2E" }}><TreePine size={14} color="#F6F1E4" /></div>
                <div><strong>{tree.species}</strong><div style={styles.cardSub}>{tree.location} · planted {tree.plantedDate}</div><div style={styles.cardSub}>{tree.verificationNote}</div></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
                <span style={{ ...styles.pill, color: tree.status === "verified" ? "#3F7350" : "#8A6A2C" }}>{tree.status === "verified" ? `AI verified ${tree.lastVerified}` : "Verification due"}</span>
                {tree.status !== "verified" && <button type="button" onClick={() => verifyTree(tree.id)} style={styles.secondaryBtn}>Run weekly AI check</button>}
                <button type="button" onClick={() => removeTree(tree.id)} style={styles.removeBtn}>remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// VIEW: Monthly report
// ---------------------------------------------------------------------------
function monthKeyOffset(monthKey, offset) {
  const [y, m] = monthKey.split("-").map(Number);
  const d = new Date(y, m - 1 + offset, 1);
  return d.toISOString().slice(0, 7);
}

function ReportView({ activities, waterLogs, today }) {
  const monthKey = today.slice(0, 7);
  const prevMonthKey = monthKeyOffset(monthKey, -1);
  const monthName = new Date(today + "T00:00:00").toLocaleString(undefined, { month: "long", year: "numeric" });

  const monthActivities = activities.filter((a) => a.date.startsWith(monthKey));
  const prevActivities = activities.filter((a) => a.date.startsWith(prevMonthKey));
  const monthWater = waterLogs.filter((w) => w.date.startsWith(monthKey));

  const total = aggregateTotal(monthActivities);
  const prevTotal = aggregateTotal(prevActivities);
  const delta = prevTotal > 0 ? +(((total - prevTotal) / prevTotal) * 100).toFixed(0) : null;
  const byCategory = aggregateByCategory(monthActivities);
  const topEntries = [...monthActivities].sort((a, b) => b.co2 - a.co2).slice(0, 3);
  const waterTotal = +monthWater.reduce((s, w) => s + w.liters, 0).toFixed(0);
  const maxCat = Math.max(...Object.values(byCategory), 1);

  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="report" title="Monthly report" sub={`A summary you can print or save as PDF.`} icon={FileText} accent="#B4502F" />

      <div className="no-print" style={{ marginBottom: 14 }}>
        <button onClick={() => window.print()} style={styles.primaryBtn}>Print / save as PDF</button>
      </div>

      <div style={{ ...styles.card, borderTop: "3px solid #B4502F" }}>
        <div style={styles.cardLabel}>{monthName}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <div style={styles.bigNumber}>{total} <span style={{ fontSize: 16 }}>kg CO₂</span></div>
          {delta !== null && (
            <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: delta <= 0 ? "#3F7350" : "#B4502F" }}>
              {delta <= 0 ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
              {Math.abs(delta)}% vs last month
            </span>
          )}
        </div>
        <div style={styles.cardSub}>{monthActivities.length} {monthActivities.length === 1 ? "entry" : "entries"} logged this month · {waterTotal.toLocaleString()} L water tracked separately.</div>

        {Object.keys(byCategory).length > 0 && (
          <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
            {Object.entries(byCategory).map(([cat, val]) => (
              <div key={cat}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
                  <span>{CATEGORY_META[cat].label}</span>
                  <span style={styles.mono}>{val} kg</span>
                </div>
                <div style={styles.benchTrack}>
                  <div style={{ ...styles.benchFill, width: `${(val / maxCat) * 100}%`, background: CATEGORY_META[cat].color }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {topEntries.length > 0 && (
        <div style={{ ...styles.card, marginTop: 16 }}>
          <div style={styles.cardLabel}>Biggest contributors this month</div>
          <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
            {topEntries.map((a) => <ActivityRow key={a.id} a={a} onRemove={() => {}} hideRemove />)}
          </div>
        </div>
      )}

      <div style={styles.cardSub}>Estimates use standard emission factors — a helpful reference, not a certified audit.</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// VIEW: History & filter
// ---------------------------------------------------------------------------
function HistoryView({ filtered, filterType, setFilterType, filterFrom, setFilterFrom, filterTo, setFilterTo, removeActivity, total }) {
  return (
    <div style={styles.viewWrap}>
      <Header eyebrow="history" title="Everything you've logged" sub="Filter by type or date range to find a specific entry." icon={Clock} accent="#8A8072" />

      <div style={{ ...styles.card, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
        <Field label="Type">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} style={styles.input}>
            <option value="all">All types</option>
            {Object.entries(ACTIVITY_TYPES).map(([key, def]) => <option key={key} value={key}>{def.label}</option>)}
          </select>
        </Field>
        <Field label="From"><input type="date" value={filterFrom} onChange={(e) => setFilterFrom(e.target.value)} style={styles.input} /></Field>
        <Field label="To"><input type="date" value={filterTo} onChange={(e) => setFilterTo(e.target.value)} style={styles.input} /></Field>
        <div style={{ marginLeft: "auto", fontSize: 14, color: "#6B6255" }}>{filtered.length} {filtered.length === 1 ? "entry" : "entries"} · <strong>{total} kg</strong></div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState text="No entries match these filters." />
      ) : (
        <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
          {filtered.map((a) => <ActivityRow key={a.id} a={a} onRemove={removeActivity} />)}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SHARED PIECES
// ---------------------------------------------------------------------------
function Header({ eyebrow, title, sub, icon: Icon, accent }) {
  return (
    <div style={{ marginBottom: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
      {Icon && (
        <div style={{ ...styles.headerIcon, background: accent || "#3F7350" }}>
          <Icon size={18} color="#F6F1E4" />
        </div>
      )}
      <div>
        <div style={styles.eyebrow}>{eyebrow}</div>
        <div style={styles.pageTitle}>{title}</div>
        <div style={styles.pageSub}>{sub}</div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return <label style={{ display: "grid", gap: 4, fontSize: 12, color: "#6B6255" }}>{label}{children}</label>;
}

function ActivityRow({ a, onRemove, hideRemove }) {
  const meta = CATEGORY_META[a.category];
  const Icon = ICONS[ACTIVITY_TYPES[a.type].icon];
  return (
    <div style={{ ...styles.row, borderLeft: `4px solid ${meta.color}` }}>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <div style={{ ...styles.rowIcon, background: meta.color }}><Icon size={13} color="#F6F1E4" /></div>
        <div>
          <strong>{ACTIVITY_TYPES[a.type].label}</strong>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
            {a.route && <span style={styles.pill}>{a.route.from} → {a.route.to}</span>}
            <span style={styles.pill}>{a.quantity} {a.unit}</span>
            <span style={styles.pill}>{a.date}</span>
            {a.source !== "manual" && <span style={{ ...styles.pill, ...styles.pillTag }}>via {a.source}</span>}
            {a.flagged && <span style={styles.flagBadge}>check this entry</span>}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ fontWeight: 600, ...styles.mono }}>{a.co2} kg CO₂</span>
        {!hideRemove && <button onClick={() => onRemove(a.id)} style={styles.removeBtn}>remove</button>}
      </div>
    </div>
  );
}

function EmptyState({ text }) {
  return <div style={styles.empty}>{text}</div>;
}

function seedData() {
  const today = todayISO();
  const y = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return d.toISOString().slice(0, 10); };
  return [
    createActivity({ type: "car", quantity: 12, date: y(1) }),
    createActivity({ type: "nonVegMeal", quantity: 2, date: y(1) }),
    createActivity({ type: "electricity", quantity: 8, date: y(2) }),
    createActivity({ type: "bus", quantity: 20, date: y(3) }),
    createActivity({ type: "vegMeal", quantity: 3, date: today }),
    createActivity({
      type: "flight",
      quantity: +haversineKm({ lat: 28.61, lon: 77.21 }, { lat: 19.08, lon: 72.88 }).toFixed(1),
      date: y(4),
      route: { from: "Delhi", to: "Mumbai" },
      source: "map",
    }),
  ];
}

function seedWaterData() {
  const y = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return d.toISOString().slice(0, 10); };
  return [createWaterLog({ liters: 4200, date: y(2) })];
}

function seedTreeData() {
  const tree = createTree({ species: "Neem", location: "Demo community park", plantedDate: todayISO(), source: "demo" });
  return [{ ...tree, status: "verified", lastVerified: todayISO(), verificationNote: "Demo weekly AI verification passed." }];
}

function seedVerifiedActions() {
  return [
    { id: "proof_1", kind: "Public transport", date: todayISO(), status: "verified", fileName: "bus-ticket-demo.jpg" },
    { id: "proof_2", kind: "Tree planting", date: todayISO(), status: "verified", fileName: "planting-photo-demo.jpg" },
  ];
}
function seedCompletedChallenges() { return ["bus2"]; }

// ---------------------------------------------------------------------------
// STYLE
// ---------------------------------------------------------------------------
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
  * { box-sizing: border-box; }
  button:focus-visible, input:focus-visible, select:focus-visible {
    outline: 2px solid #3F7350;
    outline-offset: 1px;
  }
  select, input, button { font-family: inherit; }
  .spin { animation: pp-spin 1s linear infinite; }
  @keyframes pp-spin { to { transform: rotate(360deg); } }
  @media print {
    .no-print { display: none !important; }
    body { background: #fff; }
  }
`;

const styles = {
  app: { display: "flex", minHeight: "100vh", background: "#F6F1E4", color: "#20261F", fontFamily: "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif" },
  sidebar: { width: 230, flexShrink: 0, background: "linear-gradient(145deg, #426B3B 0%, #668F4A 48%, #9FB65E 100%)", color: "#F4F1D5", padding: "24px 18px", display: "flex", flexDirection: "column", gap: 28, boxShadow: "inset -1px 0 rgba(27,55,25,.28)", position: "relative", overflow: "hidden" },
  brand: { display: "flex", alignItems: "center", gap: 10, position: "relative", zIndex: 1 },
  brandMark: { width: 36, height: 36, borderRadius: "50%", background: "#F4E7A1", border: "2px solid rgba(35,53,31,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, boxShadow: "0 3px 8px rgba(42,74,30,.18)" },
  brandName: { fontWeight: 700, fontSize: 15, fontFamily: "'Fraunces', serif", color: "#23351F" },
  brandSub: { fontSize: 11, opacity: 0.72, color: "#314D2B" },
  nav: { display: "grid", gap: 4, position: "relative", zIndex: 1 },
  navBtn: { display: "flex", alignItems: "center", gap: 9, textAlign: "left", background: "rgba(255,255,255,.12)", border: "1px solid transparent", color: "#314D2B", padding: "9px 10px", borderRadius: 7, fontSize: 14, cursor: "pointer" },
  navBtnActive: { background: "rgba(255,255,255,0.62)", border: "1px solid rgba(49,77,43,.2)", color: "#23351F", fontWeight: 600, boxShadow: "0 2px 7px rgba(54,83,38,.12)" },
  sideStat: { marginTop: "auto", borderTop: "1px dashed rgba(255,255,255,0.2)", paddingTop: 16 },
  sideStatLabel: { fontSize: 11, opacity: 0.65 },
  sideStatValue: { fontSize: 22, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, marginTop: 2 },
  sideStatSub: { fontSize: 11, opacity: 0.55, marginTop: 2 },
  badgeTeaser: { marginTop: 12, display: "flex", alignItems: "center", gap: 6, background: "rgba(212,175,106,0.15)", border: "1px solid rgba(212,175,106,0.4)", color: "#D4AF6A", borderRadius: 6, padding: "6px 8px", fontSize: 11, cursor: "pointer", width: "100%" },

  main: { flex: 1, padding: "32px 40px", overflowY: "auto", background: "linear-gradient(135deg, #F6F1E4 0%, #F9F6FF 48%, #EEF9F5 100%)" },
  viewWrap: { maxWidth: 900 },
  heroCard: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, padding: 28, borderRadius: 18, color: "#FFFDF6", background: "linear-gradient(120deg, #6C4C8C, #F05D5E 55%, #F0A202)", boxShadow: "0 14px 30px rgba(108,76,140,.2)", marginBottom: 16 },
  heroKicker: { textTransform: "uppercase", letterSpacing: 1.5, fontSize: 11, opacity: .8, marginBottom: 6 },
  heroNumber: { fontSize: 38, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 },
  "heroNumber span": { fontSize: 15, fontFamily: "'IBM Plex Sans', sans-serif" },
  heroSub: { fontSize: 13, opacity: .9, marginTop: 6 },
  heroOrb: { fontSize: 70, filter: "drop-shadow(0 8px 6px rgba(0,0,0,.18))" },
  impactGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 16 },
  impactStat: { background: "#FFFDF6", border: "1px solid #DED5C0", borderRadius: 12, padding: 15 },
  statEmoji: { fontSize: 22 }, statValue: { fontSize: 23, fontWeight: 700, marginTop: 7, fontFamily: "'IBM Plex Mono', monospace" }, statLabel: { color: "#6B6255", fontSize: 12, marginTop: 3 },
  vibrantCard: { background: "rgba(255,253,246,.9)", border: "1px solid #DED5C0", borderRadius: 14, padding: 20, marginBottom: 16 },
  recommendation: { fontSize: 21, fontWeight: 700, color: "#2B6E6E", margin: "14px 0 8px" },
  coralBtn: { background: "#F05D5E", color: "white", border: "none", borderRadius: 7, padding: "10px 16px", fontWeight: 700, cursor: "pointer", marginTop: 14 },
  tealBtn: { background: "#2B6E6E", color: "white", border: "none", borderRadius: 7, padding: "10px 16px", fontWeight: 700, cursor: "pointer", marginTop: 14 },
  doneBtn: { background: "#E9F1EC", color: "#3F7350", border: "1px solid #3F7350", borderRadius: 7, padding: "10px 16px", fontWeight: 700, cursor: "pointer" },
  challengeBanner: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: 22, borderRadius: 14, color: "white", background: "linear-gradient(120deg,#F0A202,#F05D5E)", marginBottom: 14 },
  challengeRing: { border: "5px solid rgba(255,255,255,.6)", borderRadius: "50%", width: 78, height: 78, display: "grid", placeItems: "center", fontWeight: 700 },
  challengeList: { display: "grid", gap: 10, marginBottom: 18 }, challengeCard: { display: "flex", alignItems: "center", gap: 14, padding: 14, background: "#FFFDF6", border: "1px solid #DED5C0", borderRadius: 11 }, challengeDone: { background: "#E9F1EC", border: "1px solid #3F7350" }, challengeIcon: { fontSize: 28 },
  mapPanel: { background: "#FFFDF6", padding: 14, borderRadius: 14, border: "1px solid #DED5C0" }, impactMap: { width: "100%", borderRadius: 10 }, mapLegend: { display: "flex", gap: 14, flexWrap: "wrap", fontSize: 12, marginBottom: 10, color: "#4A4536" },
  proofRow: { display: "flex", alignItems: "center", gap: 12, background: "#FFFDF6", border: "1px solid #DED5C0", padding: 12, borderRadius: 8, marginBottom: 8 }, proofIcon: { background: "#3F7350", color: "white", borderRadius: "50%", width: 25, height: 25, display: "grid", placeItems: "center", fontWeight: 700 }, verifiedPill: { marginLeft: "auto", color: "#3F7350", background: "#E9F1EC", borderRadius: 20, padding: "4px 9px", fontSize: 11, fontWeight: 700 },
  campusHero: { padding: 22, borderRadius: 14, background: "linear-gradient(120deg,#16321F,#2B6E6E)", color: "white", display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 17 },
  teamRow: { display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #EDE6D6" },
  coachBubble: { padding: 22, borderRadius: 15, background: "#F1E8FF", border: "1px solid #C9A9F2", color: "#39244F", fontSize: 16, lineHeight: 1.5, marginBottom: 16 }, coachSteps: { lineHeight: 2, fontSize: 16, marginTop: 10 },
  headerIcon: { width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  eyebrow: { fontSize: 12, color: "#6B6255", fontWeight: 500 },
  pageTitle: { fontSize: 25, fontWeight: 600, marginTop: 2, fontFamily: "'Fraunces', serif" },
  pageSub: { fontSize: 14, color: "#6B6255", marginTop: 4, maxWidth: 480 },

  card: { background: "#FFFDF6", border: "1px solid #DED5C0", borderRadius: 10, padding: 18 },
  cardLabel: { fontSize: 13, fontWeight: 600, color: "#6B6255", marginBottom: 6 },
  cardSub: { fontSize: 12, color: "#8A8072", marginTop: 8, lineHeight: 1.5 },
  bigNumber: { fontSize: 32, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 },
  mono: { fontFamily: "'IBM Plex Mono', monospace" },

  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  leaderboardList: { display: "grid", gap: 8, marginTop: 16 },
  leaderboardRow: { display: "flex", alignItems: "center", gap: 12, padding: "11px 12px", border: "1px solid #DED5C0", borderRadius: 7, background: "#FBF9F4" },
  leaderboardUser: { border: "1px solid #2B6E6E", background: "#E9F1EC", boxShadow: "0 0 0 1px rgba(43,110,110,0.12)" },
  leaderboardNotice: { marginTop: 12, padding: "9px 10px", borderRadius: 6, background: "rgba(192,138,46,0.12)", color: "#8A6A2C", fontSize: 13, fontWeight: 600 },
  leaderboardVerified: { marginTop: 12, color: "#3F7350", fontSize: 13, fontWeight: 600 },
  prototypeNotice: { display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", marginBottom: 14, borderRadius: 7, background: "#E9F1EC", color: "#2B6E6E", fontSize: 13, fontWeight: 600 },
  consent: { display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "#4A4536", paddingTop: 18 },
  serviceToggle: { marginTop: 14, border: "1px solid #C08A2E", background: "#FBF9F4", color: "#8A6A2C", borderRadius: 6, padding: "8px 12px", fontSize: 13, fontWeight: 600, cursor: "pointer" },
  serviceToggleOn: { border: "1px solid #3F7350", background: "#E9F1EC", color: "#3F7350" },
  secondaryBtn: { display: "block", marginTop: 8, border: "1px solid #3F7350", background: "#FFFDF6", color: "#3F7350", borderRadius: 6, padding: "8px 12px", fontSize: 13, fontWeight: 600, cursor: "pointer" },
  serviceMessage: { marginTop: 14, padding: "10px 12px", borderRadius: 6, background: "rgba(192,138,46,0.12)", color: "#8A6A2C", fontSize: 13 },
  weeklyGraph: { display: "block", width: "100%", minWidth: 540, height: "auto" },
  rank: { width: 24, color: "#8A8072", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, textAlign: "center" },

  segmented: { display: "inline-flex", background: "#EDE6D6", borderRadius: 8, padding: 3, marginBottom: 14, gap: 2 },
  segBtn: { border: "none", background: "none", padding: "7px 14px", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#6B6255", cursor: "pointer" },
  segBtnActive: { background: "#FFFDF6", color: "#16321F", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" },

  formRow: { display: "flex", gap: 12, flexWrap: "wrap" },
  formFooter: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, flexWrap: "wrap", gap: 10 },
  previewText: { fontSize: 14, color: "#4A4536" },
  warnInline: { color: "#C08A2E" },
  input: { border: "1px solid #DED5C0", borderRadius: 6, padding: "8px 10px", fontSize: 14, height: 38, background: "#FBF9F4", minWidth: 140 },
  inputBare: { border: "none", background: "none", fontSize: 14, height: 36, minWidth: 130, flex: 1 },
  selectWithIcon: { display: "flex", alignItems: "center", gap: 8, border: "1px solid #DED5C0", borderRadius: 6, padding: "0 10px", background: "#FBF9F4", height: 38 },
  primaryBtn: { background: "#16321F", color: "#F6F1E4", border: "none", borderRadius: 6, padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer" },
  linkBtn: { background: "none", border: "none", color: "#6B6255", fontSize: 13, cursor: "pointer", textDecoration: "underline" },
  iconBtn: { background: "none", border: "none", cursor: "pointer", color: "#8A8072", padding: 4 },

  mapHint: { fontSize: 13, color: "#4A4536", marginBottom: 10 },
  mapSvg: { width: "100%", height: "auto", borderRadius: 8, border: "1px solid #DED5C0", cursor: "crosshair", marginBottom: 12 },
  pinToggle: { border: "1px solid #DED5C0", background: "#FBF9F4", borderRadius: 6, padding: "6px 10px", fontSize: 12, cursor: "pointer", color: "#6B6255" },
  pinToggleActiveFrom: { border: "1px solid #3F7350", color: "#3F7350", fontWeight: 600 },
  pinToggleActiveTo: { border: "1px solid #B4502F", color: "#B4502F", fontWeight: 600 },

  dropzone: { border: "1px dashed #C9BC9C", borderRadius: 8, padding: 14, background: "#FBF9F4" },
  dropzoneLabel: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, fontSize: 13, color: "#6B6255", cursor: "pointer", padding: "16px 0" },
  previewRow: { display: "flex", alignItems: "center", gap: 12 },
  previewThumb: { width: 52, height: 52, objectFit: "cover", borderRadius: 6, border: "1px solid #DED5C0" },

  subheading: { fontSize: 13, fontWeight: 600, color: "#6B6255", margin: "22px 0 10px" },

  row: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", background: "#FFFDF6", border: "1px solid #DED5C0", borderRadius: 6, padding: "10px 14px", fontSize: 14 },
  rowIcon: { width: 24, height: 24, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 },
  pill: { fontSize: 11, background: "#EFEADA", color: "#4A4536", borderRadius: 20, padding: "2px 8px" },
  pillTag: { background: "rgba(212,175,106,0.2)", color: "#8A6A2C" },
  flagBadge: { fontSize: 11, color: "#C08A2E", background: "rgba(192,138,46,0.12)", borderRadius: 20, padding: "2px 8px" },
  removeBtn: { background: "none", border: "none", color: "#B4502F", cursor: "pointer", fontSize: 13 },

  waterRow: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, gap: 8 },
  treeStatus: { fontSize: 11, borderRadius: 20, padding: "2px 8px", background: "#E9F1EC", color: "#3F7350" },

  empty: { border: "1px dashed #DED5C0", borderRadius: 8, padding: 24, textAlign: "center", color: "#6B6255", fontSize: 14 },

  progressTrack: { position: "relative", height: 10, background: "#EDE6D6", borderRadius: 6, marginTop: 8, overflow: "visible" },
  progressFill: { height: "100%", borderRadius: 6, transition: "width 0.3s ease" },
  paceMarker: { position: "absolute", top: -3, width: 2, height: 16, background: "#20261F", opacity: 0.4 },

  benchTrack: { height: 8, background: "#EDE6D6", borderRadius: 5 },
  benchFill: { height: "100%", borderRadius: 5, transition: "width 0.3s ease" },

  legendRow: { display: "flex", gap: 14, flexWrap: "wrap", marginTop: 6, justifyContent: "center" },
  legendItem: { fontSize: 12, color: "#4A4536", display: "flex", alignItems: "center", gap: 6 },
  legendDot: { width: 8, height: 8, borderRadius: "50%", display: "inline-block" },

  badgeGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 },
  badgeStamp: { border: "2px dashed #DED5C0", borderRadius: 12, padding: "16px 12px", textAlign: "center", color: "#8A8072", background: "#FBF9F4" },
  badgeStampUnlocked: { border: "2px solid #D4AF6A", background: "#FFFDF6", color: "#16321F" },
  badgeLabel: { fontSize: 13, fontWeight: 600, marginTop: 8 },
  badgeDesc: { fontSize: 11, color: "#8A8072", marginTop: 4, lineHeight: 1.4 },
};



# backend 
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3001;

// Paths
const DATA_FILE = path.join(__dirname, "planet-plus-data.json");
const UPLOAD_DIR = path.join(__dirname, "uploads");

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// Multer storage for verification uploads & receipts
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  },
});
const upload = multer({ storage });

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10mb" }));
app.use("/uploads", express.static(UPLOAD_DIR));

// Initial State Schema
const DEFAULT_STATE = {
  activities: [],
  waterLogs: [],
  trees: [],
  verifiedActions: [],
  completedChallenges: [],
};

// Database Helpers
function readDb() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      writeDb(DEFAULT_STATE);
      return DEFAULT_STATE;
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch (err) {
    console.error("Error reading database:", err);
    return { ...DEFAULT_STATE };
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing database:", err);
  }
}

const generateId = (prefix) =>
  `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;

// ----------------------------------------------------
// ROUTES: Full State Synchronization
// ----------------------------------------------------
app.get("/api/state", (req, res) => {
  res.json(readDb());
});

app.put("/api/state", (req, res) => {
  const incoming = req.body || {};
  const current = readDb();
  const updated = { ...current, ...incoming };
  writeDb(updated);
  res.json(updated);
});

// ----------------------------------------------------
// ROUTES: Activities
// ----------------------------------------------------
app.get("/api/activities", (req, res) => {
  res.json(readDb().activities);
});

app.post("/api/activities", (req, res) => {
  const db = readDb();
  const newActivity = {
    id: req.body.id || generateId("act"),
    type: req.body.type,
    category: req.body.category,
    quantity: Number(req.body.quantity),
    unit: req.body.unit,
    date: req.body.date || new Date().toISOString().slice(0, 10),
    co2: Number(req.body.co2),
    flagged: Boolean(req.body.flagged),
    route: req.body.route || null,
    source: req.body.source || "manual",
  };
  db.activities.unshift(newActivity);
  writeDb(db);
  res.status(201).json(newActivity);
});

app.delete("/api/activities/:id", (req, res) => {
  const db = readDb();
  db.activities = db.activities.filter((a) => a.id !== req.params.id);
  writeDb(db);
  res.status(204).end();
});

// ----------------------------------------------------
// ROUTES: Water Logs
// ----------------------------------------------------
app.post("/api/water-logs", (req, res) => {
  const db = readDb();
  const newLog = {
    id: req.body.id || generateId("water"),
    liters: Number(req.body.liters),
    date: req.body.date || new Date().toISOString().slice(0, 10),
    source: req.body.source || "manual",
    flagged: Boolean(req.body.flagged),
  };
  db.waterLogs.unshift(newLog);
  writeDb(db);
  res.status(201).json(newLog);
});

app.delete("/api/water-logs/:id", (req, res) => {
  const db = readDb();
  db.waterLogs = db.waterLogs.filter((w) => w.id !== req.params.id);
  writeDb(db);
  res.status(204).end();
});

// ----------------------------------------------------
// ROUTES: Tree Register & Verification
// ----------------------------------------------------
app.post("/api/trees", (req, res) => {
  const db = readDb();
  const newTree = {
    id: generateId("tree"),
    species: req.body.species || "Native tree",
    plantedDate: req.body.plantedDate || new Date().toISOString().slice(0, 10),
    location: req.body.location || "My planting site",
    source: req.body.source || "manual",
    status: "pending",
    lastVerified: null,
    verificationNote: "Awaiting weekly check.",
  };
  db.trees.unshift(newTree);
  writeDb(db);
  res.status(201).json(newTree);
});

app.patch("/api/trees/:id/verify", (req, res) => {
  const db = readDb();
  const tree = db.trees.find((t) => t.id === req.params.id);
  if (!tree) return res.status(404).json({ error: "Tree not found" });

  tree.status = "verified";
  tree.lastVerified = new Date().toISOString().slice(0, 10);
  tree.verificationNote = "AI verification passed. Credit active.";
  writeDb(db);
  res.json(tree);
});

app.delete("/api/trees/:id", (req, res) => {
  const db = readDb();
  db.trees = db.trees.filter((t) => t.id !== req.params.id);
  writeDb(db);
  res.status(204).end();
});

// ----------------------------------------------------
// ROUTES: Action Verification & Evidence Upload
// ----------------------------------------------------
app.post("/api/verify-action", upload.single("proof"), (req, res) => {
  const db = readDb();
  const action = {
    id: generateId("proof"),
    kind: req.body.kind || "Sustainable action",
    date: new Date().toISOString().slice(0, 10),
    status: "verified",
    fileName: req.file ? req.file.originalname : "proof-backed activity",
    fileUrl: req.file ? `/uploads/${req.file.filename}` : null,
  };
  db.verifiedActions.unshift(action);
  writeDb(db);
  res.status(201).json(action);
});

// ----------------------------------------------------
// ROUTES: Demo Identity & Connected Services
// ----------------------------------------------------
app.post("/api/auth/mock-identity", (req, res) => {
  const { idNumber, consent } = req.body;
  if (!consent || !idNumber) {
    return res.status(400).json({ error: "Consent and valid ID required" });
  }

  // Generic demo response ensuring sensitive digits remain safe & non-persisted
  res.json({
    verified: true,
    name: "Demo citizen",
    maskedId: `XXXX-XXXX-${String(idNumber).slice(-4)}`,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Planet Plus Backend active at http://localhost:${PORT}`);
});


# ---------------
const API_URL = "http://localhost:3001/api";

// Fetch initial state on mount
useEffect(() => {
  fetch(`${API_URL}/state`)
    .then((res) => res.json())
    .then((data) => {
      if (data.activities?.length) setActivities(data.activities);
      if (data.waterLogs?.length) setWaterLogs(data.waterLogs);
      if (data.trees?.length) setTrees(data.trees);
      if (data.verifiedActions?.length) setVerifiedActions(data.verifiedActions);
      if (data.completedChallenges?.length) setCompletedChallenges(data.completedChallenges);
    })
    .catch((err) => console.warn("Using local fallback:", err));
}, []);

// Persist updates to the server
useEffect(() => {
  fetch(`${API_URL}/state`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ activities, waterLogs, trees, verifiedActions, completedChallenges }),
  }).catch((err) => console.error("Sync failed:", err));
}, [activities, waterLogs, trees, verifiedActions, completedChallenges]);
