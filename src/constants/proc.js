export const PROC_EVENTS = [
  {
    type: 'Ship Failure',
    target: ['fuel'],
    flavour: [
      {
        text: 'Your left engine catches fire, you lose excess fuel',
        negative: true,
        impact: 0
      },
      {
        text: 'A passing repair drone assists in fixing your malfunctioning engine, saving valuable fuel. Your crew is relieved and continues the journey smoothly.',
        negative: false,
        impact: 10
      },
      {
        text: 'Your skilled engineer quickly resolves the engine issue, preventing any fuel loss. The crew celebrates their efficiency in handling the crisis.',
        negative: false,
        impact: 15
      },
      {
        text: 'The malfunctioning engine triggers an emergency shutdown, preventing further damage. However, the abrupt stop leads to a minor fuel leak, causing a moderate loss.',
        negative: true,
        impact: 5
      },
      {
        text: "Your ship's advanced AI system detects the impending failure and initiates a controlled shutdown of the left engine. While you lose some fuel, the damage is minimized.",
        negative: true,
        impact: 8
      },
    ],
  },
  {
    type: 'Hazardous Conditions',
    target: ['fuel', 'health'],
    flavour: [
      {
        text: "Your ship enters a dense asteroid field, and your hull sustains damage. In the chaos, your left engine catches fire, leading to a loss of excess fuel and a hit to your crew\'s health.",
        negative: true,
        impact: 0
      },
      {
        text: "A sudden cosmic radiation surge charges your ship's energy reserves, enhancing fuel efficiency temporarily. However, crew members experience a mild health impact due to prolonged exposure.",
        negative: true,
        impact: 5
      },
      {
        text: 'An unidentified alien entity offers assistance, creating a protective energy barrier around your ship. While the hazardous conditions persist, both fuel and crew health remain unaffected.',
        negative: false,
        impact: 10
      },
      {
        text: "Your ship's advanced shielding system successfully mitigates the asteroid impacts, preventing damage and maintaining fuel reserves. However, crew members experience minor health stress from the tense situation.",
        negative: true,
        impact: 7
      },
      {
        text: 'Your navigational AI skillfully guides the ship through the hazardous conditions, avoiding potential threats. The crew remains unharmed, but a small amount of fuel is used for evasive maneuvers.',
        negative: true,
        impact: 4
      },
    ],
  },
  {
    type: 'Hostile Encounter',
    target: ['health'],
    flavour: [
      {
        text: 'A band of space pirates ambushes your ship. In the ensuing firefight, your crew members are injured, and the medical bay is overwhelmed. Attend to the wounded as you navigate through the hostile encounter.',
        negative: true,
        impact: 0
      },
      {
        text: "The pirates demand a toll but are impressed by your ship's defenses. They offer a truce and a small reward, sparing your crew from harm. Your negotiation skills avert a potential disaster.",
        negative: false,
        impact: 12
      },
      {
        text: 'Your skilled gunnery team retaliates swiftly, repelling the attackers without casualties. The crew celebrates the successful defense, boosting morale despite the initial shock.',
        negative: false,
        impact: 15
      },
      {
        text: 'An intergalactic peacekeeping fleet arrives in the nick of time, driving away the hostile forces. Your ship sustains minor damage, but the crew is grateful for the unexpected rescue.',
        negative: false,
        impact: 10
      },
      {
        text: "Your ship's advanced cloaking technology confuses the pirates, allowing you to escape the encounter without harm. The crew remains vigilant, relieved by the successful evasion.",
        negative: false,
        impact: 8
      },
    ],
  },
  {
    type: 'Piracy',
    target: ['credits'],
    flavour: [
      {
        text: 'Your ship is targeted by intergalactic pirates demanding a hefty toll for safe passage. Reluctantly, you transfer a significant amount of credits to their account, hoping they will honor the agreement and let you continue your journey.',
        negative: true,
        impact: 0
      },
      {
        text: "Your crew successfully negotiates with the pirates, convincing them to lower the toll in exchange for valuable information. You lose some credits, but it's a small price to pay for a peaceful resolution.",
        negative: true,
        impact: 5
      },
      {
        text: 'A passing military patrol intervenes, driving away the pirates and ensuring the safety of your ship. Grateful for the assistance, the crew continues the journey with minimal credit loss.',
        negative: false,
        impact: 10
      },
      {
        text: "Your ship's defensive systems activate, surprising the pirates with a formidable counterattack. The attackers retreat, leaving your crew unharmed and your credits intact.",
        negative: false,
        impact: 12
      },
      {
        text: 'An enigmatic space trader offers to broker a deal with the pirates on your behalf. Through skilled negotiations, the toll is reduced, and you part ways with a fraction of your credits.',
        negative: true,
        impact: 3
      },
    ],
  },
];
