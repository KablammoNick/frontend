export interface CoverOpenCloseTileExtraConfig {
  type: "cover-open-close";
}

export interface CoverTiltTileExtraConfig {
  type: "cover-tilt";
}

export const VACUUM_COMMANDS = [
  "start_pause",
  "stop",
  "locate",
  "clean_spot",
  "return_home",
] as const;

export type VacuumCommand = typeof VACUUM_COMMANDS[number];

export interface VacuumCommandsTileExtraConfig {
  type: "vacuum-commands";
  commands?: VacuumCommand[];
}

export type LovelaceTileExtraConfig =
  | CoverOpenCloseTileExtraConfig
  | CoverTiltTileExtraConfig
  | VacuumCommandsTileExtraConfig;
