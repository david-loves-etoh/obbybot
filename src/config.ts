import { Config } from "lib/config";

export default {
  Script: {
    Name: "RobloxAI",
    Whitelist: [],
    Blacklist: [],
    Debug: false,
  },
  Settings: {
    AntiAFK: true,
    MinimumDistance: 8,
    MessageProcessDelay: 1,
    LookSpeed: 0.25,
  },
  AI: {
    Prompt: "Complete the tower obby (get to the winpad at the top of the tower obby) as fast as possible.",
    Model: "deepseek/deepseek-r1-0528:free",
    EnabledFunctions: [
      "sendMessage",
      "lookAtPlayer",
      "teleportToPlayer",
      "walkToPlayer",
      "followPlayer",
      "stopWalkingToPlayer",
      "jump",
      "setWalkSpeed",
      "setJumpPower",
    ],
    MaximumCharacterLimit: 200,
    MaximumMessageContext: 5,
    Api: "https://openrouter.ai/api/v1/chat/completions",
    Key: "<API_KEY>",
  },
} as Config;
