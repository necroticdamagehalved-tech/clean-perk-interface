
export const PERKS = [

/* === Combat === */

{
  id:"gunslinger",
  name:"Gunslinger",
  category:"Combat",
  ranks:[
    "+2 to Guns with pistols. Pistol attacks cost 1 less AP (min 1)."
  ],
  req:{level:1, skills:{guns:2}}
},

{
  id:"commando",
  name:"Commando",
  category:"Combat",
  ranks:[
    "+2 to Guns with rifles/automatics. Ignore 1 DR."
  ],
  req:{level:3, special:{AGI:5}, skills:{guns:4}}
},

{
  id:"shotgun_surgeon",
  name:"Shotgun Surgeon",
  category:"Combat",
  ranks:[
    "Shotguns ignore 2 DR on every hit."
  ],
  req:{level:6, skills:{guns:5}}
},

{
  id:"laser_commander",
  name:"Laser Commander",
  category:"Combat",
  ranks:[
    "+1 to hit and +1 damage with Energy Weapons."
  ],
  req:{level:6, special:{INT:5}, skills:{energy:5}}
},

{
  id:"demolition_expert",
  name:"Demolition Expert",
  category:"Combat",
  ranks:[
    "Explosives deal +1 damage die on crit. Failed disarms never explode."
  ],
  req:{level:6, skills:{explosives:5}}
},

{
  id:"slayer",
  name:"Slayer",
  category:"Combat",
  ranks:[
    "+1 damage with Melee and Unarmed. +1 AGI to initiative only."
  ],
  req:{level:15, special:{STR:7}, skills:{melee:7}}
},

{
  id:"sniper",
  name:"Sniper",
  category:"Combat",
  ranks:[
    "Ranged attacks ignore penalties from half-cover at Near or Far."
  ],
  req:{level:6, special:{PER:6}, skills:{guns:5}}
},

{
  id:"super_slam",
  name:"Super Slam",
  category:"Combat",
  ranks:[
    "Crits with Melee/Unarmed force END TN 15 or target is knocked prone."
  ],
  req:{level:9, special:{STR:6}, skills:{melee:6}}
},


/* === Stealth === */

{
  id:"ninja",
  name:"Ninja",
  category:"Stealth/Mobility",
  ranks:[
    "+2 Sneak. +1d6 damage when striking from stealth with Melee/Unarmed."
  ],
  req:{level:6, special:{AGI:6}, skills:{sneak:5}}
},

{
  id:"silent_running",
  name:"Silent Running",
  category:"Stealth/Mobility",
  ranks:[
    "Sneak suffers no penalty from movement, sprinting, or using pistols."
  ],
  req:{level:3, skills:{sneak:3}}
},

{
  id:"thief",
  name:"Thief",
  category:"Stealth/Mobility",
  ranks:[
    "+1 Sneak/Lockpick. +2 to steal/pickpocket."
  ],
  req:{level:3, skills:{sneak:3, lockpick:3}}
},

{
  id:"ghostwalker",
  name:"Ghostwalker",
  category:"Stealth/Mobility",
  ranks:[
    "While undetected, gain +2 to all AGI-based rolls."
  ],
  req:{level:6, special:{AGI:5}, skills:{sneak:5}}
},

{
  id:"backstabber",
  name:"Backstabber",
  category:"Stealth/Mobility",
  ranks:[
    "Deal +2 damage when attacking an unaware target (any weapon)."
  ],
  req:{level:9, skills:{sneak:6}}
},


/* === Mobility === */

{
  id:"action_boy",
  name:"Action Boy",
  category:"Stealth/Mobility",
  ranks:[
    "Once per encounter, regain all used AP this turn, to be used immediately."
  ],
  req:{level:9, special:{AGI:6}}
},

{
  id:"tunnel_rat",
  name:"Tunnel Rat",
  category:"Stealth/Mobility",
  ranks:[
    "Ignore cramped/confined penalties. Count as one size smaller for squeezing."
  ],
  req:{level:6, special:{END:5}}
},

{
  id:"chameleon_skin",
  name:"Chameleon Skin",
  category:"Stealth/Mobility",
  ranks:[
    "If you stay still for one round, enemies suffer -2 to detect or attack you."
  ],
  req:{level:12, special:{AGI:6}, skills:{sneak:7}}
}

];
