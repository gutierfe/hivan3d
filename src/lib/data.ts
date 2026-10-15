export const profile = {
  name: "Ivan F. Gutierrez Borjon",
  shortName: "Ivan Gutierrez Borjon",
  role: "Character Rigging Artist",
  location: "Monterrey, MX",
  timezone: "GMT-6",
  email: "hivanfeh@gmail.com",
  linkedin: "https://linkedin.com/in/hivanwiilad",
  linkedinLabel: "linkedin.com/in/hivanwiilad",
  reelUrl: "https://www.youtube.com/watch?v=Y8XnChfdUpM",
  reelId: "Y8XnChfdUpM",
  screenerUrl: "https://www.youtube.com/watch?v=ae9jcPdywE8&t=1345s",
  resumeUrl: "/resume/ivan-gutierrez-borjon-resume.pdf",
  availability: "Available Dec 2026",
  citizenship: "US + MX citizen",
  tagline:
    "Animator-friendly biped, facial and prop rigs for film, hand-built in Maya. Python tools that cut a rig from days to hours.",
  summary:
    "Rigging artist with one year of student-production experience as the sole rigger for five film teams at Vancouver Film School. Hand-built, animator-friendly biped, facial, and prop rigs; fixed rig issues during active production for ten animators. Author of a modular biped rig builder and IK/FK, ribbon, and stretchy-limb tools in Python for Maya. Also competent in modeling and animation, which keeps rigs grounded in how they are used.",
  stack: "Maya · Python (maya.cmds) · Git · ShotGrid · Substance · Photoshop",
  status: "Open to studio + freelance · US/MX citizen · CUSMA eligible",
};

export type Project = {
  slug: string;
  title: string;
  /** Short caption used inside the placeholder frame. */
  caption: string;
  /** Mono spec line shown next to the title in the grid. */
  spec: string;
  tags: string[];
  year: string;
  context: string;
  /** One-line summary used on cards. */
  summary: string;
  /** Long-form paragraphs for the detail page. */
  body: string[];
  /** Spec table on the detail page. */
  specs: { label: string; value: string }[];
  /** What was rigged. */
  features: string[];
  videoId?: string;
  featured?: boolean;
  aspect: "video" | "square";
};

export const projects: Project[] = [
  {
    slug: "one-song",
    title: "One Song",
    caption: "turntable · One Song biped",
    spec: "BIPED · FACIAL · VFS 2025",
    tags: ["Biped", "Facial", "VFS 2025"],
    year: "2025",
    context: "VFS short film",
    summary:
      "Realistic biped with IK/FK limbs, ribbon spine, space switching and a joint + blendshape facial rig for dialogue.",
    body: [
      "One Song is a Vancouver Film School short film built around a single sustained performance. The hero character carries almost every shot, so the rig had to hold up under close dialogue and full-body acting at the same time.",
      "The body is a realistic biped with IK/FK limbs that switch seamlessly, stretchy limbs for the few cartoon-leaning beats, a ribbon spine for smooth bends, and world/local space switching on the hands and head. Each control set was spec'd against the film's shot list and the animators' notes from the first blocking pass.",
      "The face combines joint-based controls with helper joints and blendshapes, tuned for dialogue. Corrective shapes keep the shoulders, elbows and hips clean at extreme poses so the silhouette reads from any camera.",
    ],
    specs: [
      { label: "Role", value: "Sole rigger" },
      { label: "Production", value: "VFS short film · 2025" },
      { label: "Rig type", value: "Realistic biped + facial" },
      { label: "Animators", value: "Film team of 2" },
      { label: "Tools", value: "Maya · Python · ShotGrid" },
    ],
    features: ["IK/FK limbs", "Ribbon spine", "Space switching", "Facial · joints + blendshapes", "Correctives", "Stretchy limbs"],
    featured: true,
    aspect: "video",
  },
  {
    slug: "delirium",
    title: "Delirium",
    caption: "Delirium · facial close-up",
    spec: "FACIAL · 2025",
    tags: ["Facial", "Correctives", "VFS 2025"],
    year: "2025",
    context: "VFS short film",
    summary:
      "Facial rig with helper joints and corrective blendshapes for expression-heavy shots.",
    body: [
      "Delirium lives in close-up. The film leans on exaggerated expressions and fast changes of mood, so the facial rig was built for range first and subtlety second, then dialed back where the animators needed finer control.",
      "The rig uses joint-based controls for the big shapes (jaw, brows, cheeks) with helper joints driving secondary motion, and a layer of blendshapes on top for the shapes joints can't reach. Correctives fix the combinations that break, like a wide open jaw with a full smile.",
      "Notes came in through dailies and ShotGrid; several shapes were reworked after the first expression tests with the animation team.",
    ],
    specs: [
      { label: "Role", value: "Sole rigger" },
      { label: "Production", value: "VFS short film · 2025" },
      { label: "Rig type", value: "Facial rig on biped" },
      { label: "Approach", value: "Joints + helper joints + blendshapes" },
      { label: "Tools", value: "Maya · ShotGrid" },
    ],
    features: ["Facial rig", "Helper joints", "Correctives", "Dialogue shots", "Expression range"],
    aspect: "square",
  },
  {
    slug: "stray-blade",
    title: "Stray Blade",
    caption: "Stray Blade · prop space-switch",
    spec: "PROPS · 2025",
    tags: ["Props", "Space switch", "VFS 2025"],
    year: "2025",
    context: "VFS short film",
    summary:
      "Weapon props with space-switch attachment to character hands.",
    body: [
      "Stray Blade is an action short where the weapon changes hands, gets dropped, and gets picked back up. The prop rigs had to make those handoffs painless for the animators instead of a constraint-baking chore.",
      "Each weapon has its own control hierarchy with a space switch that can follow either hand, the world, or a parent locator, with matching built in so the blade doesn't pop when the space changes mid-shot.",
      "The character bipeds for the film were built on the same modular base as the other VFS rigs, with hand controls tuned for gripping and releasing props.",
    ],
    specs: [
      { label: "Role", value: "Sole rigger" },
      { label: "Production", value: "VFS short film · 2025" },
      { label: "Rig type", value: "Props + biped" },
      { label: "Key feature", value: "Hand space-switch with matching" },
      { label: "Tools", value: "Maya · Python" },
    ],
    features: ["Prop rigs", "Hand space-switch", "Space matching", "Biped base"],
    aspect: "square",
  },
  {
    slug: "how-do-you-swim",
    title: "How Do You Swim",
    caption: "How Do You Swim · stretchy limbs",
    spec: "BIPED · 2025",
    tags: ["Biped", "Stretchy limbs", "VFS 2025"],
    year: "2025",
    context: "VFS short film",
    summary:
      "Biped with stretchy limbs and ribbon setups for pushed, water-bound poses.",
    body: [
      "How Do You Swim puts its character underwater for most of its runtime, which means long, floating poses and plenty of squash and stretch. The rig was built to let the animators push the body past realistic limits without breaking deformation.",
      "Stretchy IK limbs with volume preservation, a ribbon spine and neck, and soft IK on the arms and legs give the animators room to exaggerate. Skinning and corrective shapes were tested at the most extreme poses from the animatic before the rig shipped.",
      "The rig was profiled during production after it started to slow down in heavy scenes; the fix landed without delaying animation.",
    ],
    specs: [
      { label: "Role", value: "Sole rigger" },
      { label: "Production", value: "VFS short film · 2025" },
      { label: "Rig type", value: "Stylized biped" },
      { label: "Key feature", value: "Stretchy limbs + ribbons" },
      { label: "Tools", value: "Maya · Python · ShotGrid" },
    ],
    features: ["Stretchy limbs", "Ribbon spine + neck", "Soft IK", "Volume preservation", "Performance profiling"],
    aspect: "square",
  },
  {
    slug: "tankhead-heikegani",
    title: "Tankhead",
    caption: "Tankhead Heikegani · mech",
    spec: "MECH · MODEL+RIG",
    tags: ["Mech", "Model + texture", "Personal"],
    year: "2024",
    context: "Personal · Tec de Monterrey",
    summary:
      "Mech modeled, textured and rigged from an Emerson Tung concept: IK legs, body detail controls, world-space options.",
    body: [
      "Tankhead Heikegani, Type A is a personal project built from Emerson Tung's 2D concept. The goal was to take a mech from concept sheet to a fully rigged, animation-ready asset end to end.",
      "The model was built in Maya and textured in Substance Painter, keeping the mechanical parts as separate pieces so the rig could drive them without deformation. The rig uses IK legs with foot roll, detail controls across the body panels, and world-space options for the body so it can be animated in place or driven from a path.",
      "A turntable and rig demo is on YouTube.",
    ],
    specs: [
      { label: "Role", value: "Model · texture · rig" },
      { label: "Context", value: "Personal · Tec de Monterrey" },
      { label: "Concept", value: "Emerson Tung" },
      { label: "Rig type", value: "Mechanical" },
      { label: "Tools", value: "Maya · Substance Painter" },
    ],
    features: ["Model + texture", "IK legs", "Detail controls", "World-space body", "Foot roll"],
    videoId: "5AwRPm3ac60",
    aspect: "square",
  },
  {
    slug: "showcase-biped",
    title: "Showcase Biped",
    caption: "showcase biped · range of motion",
    spec: "BIPED · REEL",
    tags: ["Biped", "Facial", "Reel"],
    year: "2025",
    context: "Personal · included in reel",
    summary:
      "Biped built to demonstrate range of motion, deformation and facial setup.",
    body: [
      "A personal biped built specifically to show the full rigging kit in one place: range of motion, deformation under stress, and a complete facial setup.",
      "It's the test bed for the Python tools. The limbs, spine and controls come from the modular biped builder, with hand-tuned skinning and correctives layered on top.",
      "It appears throughout the rigging reel.",
    ],
    specs: [
      { label: "Role", value: "Rigger" },
      { label: "Context", value: "Personal · reel" },
      { label: "Rig type", value: "Full biped + facial" },
      { label: "Built with", value: "Modular biped builder (Python)" },
      { label: "Tools", value: "Maya · Python" },
    ],
    features: ["Range of motion", "Deformation", "Facial setup", "Modular build"],
    videoId: "Y8XnChfdUpM",
    aspect: "square",
  },
];

export const tools = [
  { name: "Modular biped builder", note: "guide skeleton → full rig" },
  { name: "IK/FK limb", note: "seamless switching" },
  { name: "Ribbon builder", note: "spines · necks · limbs" },
  { name: "Stretchy limb", note: "code on request" },
];

export const toolsBlurb =
  "A modular builder generates a full biped (limbs, spine, controls) from a guide skeleton, so a new character is rigged in a fraction of the manual time. Smaller tools: IK/FK with seamless switching, ribbon builder, stretchy limbs. Code on request.";

export const codeSample = `from rigtools import biped

rig = biped.build(guides="char_guides")
rig.add_limb("L_arm", ik_fk=True, stretch=True)
rig.add_ribbon("spine", spans=5)
rig.finalize()   # 0:02:14 → done`;

export const skills = [
  {
    label: "Rigging",
    value:
      "Maya, joint placement and anatomy, skinning, helper joints, blendshapes and correctives, facial rigging, IK/FK, ribbons, space switching, mechanical rigs",
  },
  { label: "Scripting", value: "Python (maya.cmds), Git, VS Code" },
  { label: "Pipeline", value: "ShotGrid / Flow Production Tracking, dailies and review workflow" },
  {
    label: "Other 3D",
    value: "Substance Painter, Photoshop (intermediate); ZBrush, Blender, Unreal Engine, Nuke (basic)",
  },
  { label: "Languages", value: "English (native), Spanish (native)" },
];

export const experience = [
  {
    title: "Lead Rigging Artist",
    org: "VFS student productions",
    where: "Vancouver",
    when: "Jan – Dec 2025",
    points: [
      "Sole rigger for five short films: One Song, Delirium, How Do You Swim, Stray Blade, and others. Rigs used by 10 animators across 5 teams.",
      "Hand-built 5+ realistic biped rigs with IK/FK limbs, stretchy limbs, ribbon spines, and world/local space switching, each spec'd to the film's shots.",
      "Built 3 facial rigs using joint-based controls, helper joints, and blendshapes for dialogue and expression shots.",
      "Rigged props for several films, including space-switch attachment to character hands.",
      "Troubleshot rigs during production: skinning errors, broken controllers, and one slow rig, profiled and fixed without delaying animation.",
    ],
  },
  {
    title: "Freelance Rigging Artist",
    org: "Volunteer",
    where: "Remote",
    when: "2025 – present",
    points: ["Rigs for other artists' character models on personal and student projects."],
  },
];

export const education = [
  { school: "Tecnológico de Monterrey", degree: "BA, Digital Art", when: "Expected Dec 2026" },
  { school: "Vancouver Film School", degree: "Diploma, 3D Animation & Visual Effects", when: "2025" },
];

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Tools", href: "/#tools" },
  { label: "Reel", href: "/#reel" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
