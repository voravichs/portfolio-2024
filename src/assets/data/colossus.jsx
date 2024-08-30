import keywordData from "./keywords";
import { GiWingfoot } from "react-icons/gi";

const { statusConditions, rules, combatGlossary } = keywordData;

const { sturdy, defiance, regeneration, bloodied, vigilance_x, flying, divine, weakened, unstoppable, stunned, slashed, trueStrike, vigor} = statusConditions
const { triggered_effect, defeated, rescue, pit } = rules;
const { heroic, bonus_damage, rush_x, dash, exceed, sacrifice_x, immune_to_x, charge, terrain_effect, shove_x, comeback, difficult_terrain, end_turn, collide } = combatGlossary

const ch1Abilities = {
    "name": "Dropkick",
    "actions": 1,
    "desc": "Throwing caution to the wind, you crash your whole body into your foe, sending you both flying.",
    "type": ["sacrifice"],
    "effects": [
        {
            "type": "Effect",
            "desc": "Fly 1.",
        },
        {
            "type": "Effect",
            "desc": "Sacrifice 6. An adjacent foe takes [D] + fray damage."
        },
        {
            "type": "Heroic",
            "desc": "You may rush 2 before or after using this ability."
        }
    ],
    "talent1": "Comeback: Hit your foe so hard that you create 2 spaces of difficult terrain in adjacent spaces after this ability resolves.",
    "talent2": "Shove your foe 1, then shove yourself 1 away from your foe. Charge: Increase shoves to 2.",
    "mastery": {
        "name": "Giant Kicker",
        "desc": "At round 4 or later, dropkick gains true strike and a line 4 area effect that must include your target. The area deals fray damage to all characters other than your target."
    },
    "tags": [flying, sacrifice_x, rush_x, comeback, difficult_terrain, shove_x, charge, trueStrike]
}
const colossus = {
    "jobName": "Colossus",
    "title": "High Flying Grappler",
    "img": "N/A",
    "icon": <GiWingfoot/>,
    "desc": "<p>Ferocious followers of Arenheir, the Wolf Titan, the Colossi are a martial order of berserkers, pankrationists, and warriors that reaches across all of Arden Eld. They travel throughout the land seeking powerful foes, and taking trophies to return to their great lodges to offer in tribute to Arenheir in fierce hope of resurrecting their god. At their lodges they feast and drink to their deeds, companions, and boasts.</p><p>Colossi seek glory and challenge through battle, and will often go for only the absolute strongest warriors and monsters, heedless of their own safety. They fight with wild abandon and unconventional techniques that would make even the dirtiest Knave raise an eyebrow.</p>",
    "traits": [
        {
            "name": "Furious Berserk",
            "desc": "You go into a furious blood rage as you take damage, giving you the following benefits: \nYou start combat with defiance. \nYou have regeneration, and regain regeneration if defeated and rescued.\nWhile you're bloodied, you are sturdy, and gain vigilance +1 at the end of your turn.",
            "chapter": 1,
            "tags": [defiance, regeneration, defeated, rescue, bloodied, sturdy, vigilance_x]
        },
        {
            "name": "Wolfheart",
            "desc": "Once a round, you may sacrifice 25% of your max hp to make an ability Heroic and increase the distance of any flight, rush, or dash as part of that move by +1.",
            "chapter": 1,
            "tags": [heroic, sacrifice_x, flying, rush_x, dash]
        },
        {
            "name": "Pulverize",
            "desc": "When you start an attack ability on higher elevation than your target, it deals bonus damage. If you are two or more levels higher, it also triggers all exceed effects.",
            "chapter": 1,
            "tags": [bonus_damage, exceed, triggered_effect]
        },
        {
            "name": "Great Leap",
            "desc": "When you would end any movement on a lower elevation than you started, you may gain flying for the duration of that movement.",
            "chapter": 1,
            "tags": [flying]
        },
        {
            "name": "Unbreakable",
            "desc": "If defeated, you can rescue yourself and take a turn as normal. This doesn't take an action and takes place at the start of your turn. In addition, after being rescued in any way, including as part of this trait. you can rush 1 and deal 2 damage to all adjacent characters.",
            "chapter": 3,
            "tags": [defeated, rescue, rush_x]
        }
    ],
    "startbattle": {
        "conditions": [
            "defiance",
            "regeneration"
        ]
    },
    "abilities": ch1Abilities,
    "limitbreak": {
        "name": "Gigantas Crusher",
        "resolve": 3,
        "actions": 2,
        "desc": "Wrestle with the gods themselves.",
        "effects": [
            {
                "type": "Effect",
                "desc": "You grab an adjacent character. That character must save. Even if that character saves successfully, you grab them, and you both soar into the air. Remove both of you from the battlefield. At the start of that character's turn, you come spinning back to earth, slamming that character into the battlefield in unoccupied space in range 3 of your original location. You sacrifice 25% of your hp. Your foe takes 50% of their max hp as divine damage, or 25% as divine damage on a successful save. Then place both of you back in or adjacent to that space.",
            },
            {
                "type": "Special",
                "desc": "This ability can be used against Legends, but they may always save, taking divine fray damage and refunding this ability's resolve cost on a successful save, and only 25% hp as divine damage on a failed save.",
            },
            
        ],
        "ultimate": {
            "name": "Atomos Crusher",
            "desc": "If you're at 1 hp or lower, this ability deals 25% more max hp damage to non-legend characters."
        },
        "tags": [divine, sacrifice_x]
    }
}

export default colossus;