const KEYS = {
  BLUEPRINTS: "cm_blueprints",
  CONTRACTS: "cm_contracts",
};

export function loadBlueprints() {
  return JSON.parse(localStorage.getItem(KEYS.BLUEPRINTS) || "[]");
}

export function saveBlueprints(data) {
  localStorage.setItem(KEYS.BLUEPRINTS, JSON.stringify(data));
}

export function loadContracts() {
  return JSON.parse(localStorage.getItem(KEYS.CONTRACTS) || "[]");
}

export function saveContracts(data) {
  localStorage.setItem(KEYS.CONTRACTS, JSON.stringify(data));
}
