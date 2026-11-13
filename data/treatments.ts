export interface TreatmentItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  overview: string[];
  clinicalHighlights: string[];
  indications: string[];
  recoveryGoals: string[];
  protocolSteps: { step: string; title: string; desc: string }[];
}

export const treatmentsData: TreatmentItem[] = [
  {
    id: "stroke-rehab",
    category: "Neurological Care",
    title: "Stroke & Neuro Rehabilitation",
    tagline: "Holistic, multidisciplinary motor relearning and neuroplasticity restoration.",
    description:
      "A comprehensive inpatient and outpatient recovery programme tailored for survivors of ischemic stroke, hemorrhagic stroke, traumatic brain injury, and spinal cord injuries.",
    image: "/categories/Neural Pathways in Focus.png",
    features: [
      "Motor relearning & neuroplasticity stimulation",
      "Functional upper & lower limb training",
      "Balance, coordination & transfer training",
      "Spasticity management protocols",
    ],
    overview: [
      "Stroke recovery demands intensive, timely intervention while the brain exhibits maximum neuroplastic recovery potential.",
      "At Kumar Hospital, our physiatrists, neuro-physiotherapists, and occupational therapists create a calibrated daily protocol balancing motor retraining, limb function, balance, and cognitive reconditioning.",
      "Both inpatient suites and day-care rehabilitation protocols are supported with 24/7 dedicated nursing.",
    ],
    clinicalHighlights: [
      "Early verticalization and posture restoration",
      "Constraint-induced movement therapy (CIMT) protocols",
      "Spasticity reduction with therapeutic positioning & bracing",
      "Dysphagia screening and safe swallowing re-education",
    ],
    indications: [
      "Ischemic and hemorrhagic stroke survivors",
      "Hemiparesis (one-sided weakness or paralysis)",
      "Post-stroke gait dysfunction & drop foot",
      "Aphasia and speech-motor coordination challenges",
    ],
    recoveryGoals: [
      "Restore independent walking and transfer capability",
      "Maximise upper extremity grasping and self-care skills",
      "Mitigate secondary complications like joint contractures & shoulder subluxation",
    ],
    protocolSteps: [
      { step: "01", title: "Comprehensive Baseline Physiatric Assessment", desc: "Detailed motor score, Barthel Index, tone assessment, and functional goal mapping." },
      { step: "02", title: "High-Repetition Neuro-Motor Relearning", desc: "Task-oriented exercises stimulating neural pathways and bilateral limb integration." },
      { step: "03", title: "Robotic & Sensor-Assisted Gait Retraining", desc: "Body-weight supported treadmill locomotion ensuring physiological walking mechanics." },
      { step: "04", title: "Activities of Daily Living (ADL) Autonomy", desc: "Functional occupational therapy simulating domestic, hygiene, and feeding tasks." },
    ],
  },
  {
    id: "robotic-gait",
    category: "Advanced Technology",
    title: "Robotic Gait Training & Biofeedback",
    tagline: "Computer-assisted walking retraining with dynamic body-weight suspension.",
    description:
      "Advanced robotic exoskeleton locomotion therapy that allows stroke and neurological patients to perform thousands of physiological walking cycles safely.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Dynamic body-weight suspension",
      "High-repetition physiological gait patterns",
      "Real-time sensorised biomechanical feedback",
      "Reduced therapist fatigue with heightened precision",
    ],
    overview: [
      "Robotic gait retraining enables high-dosage, repetitive stepping exercises that are physically impossible to replicate solely through manual assistance.",
      "The dynamic harness relieves patient weight, reducing anxiety of falling while sensors adjust guidance forces to match the patient’s active recovery effort.",
    ],
    clinicalHighlights: [
      "Dynamic body-weight unweighting harness",
      "Physiological symmetric step kinematic guidance",
      "Real-time visual biofeedback motivates active participation",
      "Quantifiable step symmetry and weight-bearing telemetry",
    ],
    indications: [
      "Post-stroke gait rehabilitation",
      "Incomplete spinal cord injury",
      "Traumatic brain injury gait re-education",
      "Parkinson’s disease freezing and festinating gait",
    ],
    recoveryGoals: [
      "Rebuild symmetrical reciprocal leg movements",
      "Improve cardiovascular endurance and upright tolerance",
      "Foster independent, safe ambulatory status",
    ],
    protocolSteps: [
      { step: "01", title: "Harness Calibration & Suspension", desc: "Precise ergonomic harness fitting with target weight offloading (e.g., 30–50%)." },
      { step: "02", title: "Exoskeleton Kinetic Alignment", desc: "Robotic cuffs match patient hip, knee, and ankle joint centers." },
      { step: "03", title: "Progressive Locomotor Sessions", desc: "High-repetition treadmill steps with sensory biofeedback gaming cues." },
      { step: "04", title: "Overground Gait Translation", desc: "Immediate overground practice transferring relearned kinematics to open floor." },
    ],
  },
  {
    id: "idd-therapy",
    category: "Non-Surgical Spine",
    title: "IDD Spinal Decompression Therapy",
    tagline: "Computer-targeted distraction forces to decompress injured lumbar and cervical discs.",
    description:
      "Intervertebral Differential Dynamics (IDD) therapy delivers computer-controlled distraction forces to open collapsed disc spaces and retract herniations without surgery.",
    image: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
    features: [
      "Precision negative intradiscal pressure generation",
      "Relief for herniated, bulging or degenerated discs",
      "Targeted sciatica and trapped nerve decompression",
      "Safe alternative to spinal fusion or laminectomy",
    ],
    overview: [
      "IDD Therapy is an internationally validated, non-surgical decompression treatment that generates negative intradiscal pressure at specifically isolated spinal segments (e.g. L4-L5, L5-S1, or C5-C6).",
      "This negative pressure creates an osmotic vacuum effect, promoting disc rehydration, nutrient absorption, and retracting bulging disc material away from compressed nerves.",
    ],
    clinicalHighlights: [
      "Isolated angle-specific distraction forces",
      "Computerized oscillation waves promoting fluid diffusion",
      "Comfortable ergonomic pelvic/cervical harnesses",
      "Documented reduction in disc herniation size on follow-up imaging",
    ],
    indications: [
      "Lumbar disc herniation / prolapse with sciatica",
      "Cervical disc bulge causing arm pain & tingling",
      "Degenerative disc disease with reduced disc height",
      "Failed back syndrome post previous surgery",
    ],
    recoveryGoals: [
      "Relieve pressure on exiting spinal nerve roots",
      "Rehydrate desiccated, degenerated intervertebral discs",
      "Restore lumbar and cervical flexibility",
    ],
    protocolSteps: [
      { step: "01", title: "Vector & Angle Programming", desc: "Setting exact distraction angle corresponding to the affected vertebral level." },
      { step: "02", title: "Decompression Cycle (25-30 Mins)", desc: "Controlled cyclic distraction and relaxation phases." },
      { step: "03", title: "Post-Treatment Laser Therapy", desc: "Applying Class IV laser to reduce local myofascial spasm." },
      { step: "04", title: "Progressive Strengthening", desc: "Graduated rehabilitation following the 15-20 session course." },
    ],
  },
  {
    id: "physiotherapy",
    category: "Physical Medicine",
    title: "Specialised Musculoskeletal Physiotherapy",
    tagline: "Targeted joint mobilisation, manual therapy, and movement restoration.",
    description:
      "Evidence-based physical therapy combining joint mobilization, myofascial release, therapeutic exercise regimens, and biomechanical posture retraining.",
    image: "/categories/3d-skeleton-neck-pain.jpg",
    features: [
      "Pre & post-operative orthopaedic rehabilitation",
      "Spinal core strengthening & ergonomic correction",
      "Chronic lower back & neck stiffness relief",
      "Joint range-of-motion enhancement",
    ],
    overview: [
      "Restoring basic mobility and stability forms the cornerstone of musculoskeletal wellness. Our specialized gymnasiums are equipped with parallel bars, balance boards, and specialized resistance equipment.",
    ],
    clinicalHighlights: [
      "Mat activities & trunk control facilitation",
      "Parallel bar walking and weight shift drills",
      "Functional electrical stimulation (FES) paired movements",
      "Endurance building using recumbent steppers",
    ],
    indications: [
      "Impaired postural control & tech neck",
      "Muscle weakness following injury or surgery",
      "Joint range restrictions & chronic stiffness",
    ],
    recoveryGoals: [
      "Independent, pain-free joint articulation",
      "Core stability preventing chronic re-injury",
      "Safe return to daily and athletic activities",
    ],
    protocolSteps: [
      { step: "01", title: "Biomechanical Evaluation", desc: "Assessing joint range, muscle imbalances, and kinetic chain restrictions." },
      { step: "02", title: "Manual Therapy & Release", desc: "Soft-tissue mobilization and joint gliding techniques." },
      { step: "03", title: "Therapeutic Exercise", desc: "Progressive resistance and stabilization training." },
      { step: "04", title: "Functional Conditioning", desc: "Ergonomic education and tailored home regimens." },
    ],
  },
  {
    id: "laser-therapy",
    category: "Interventional Pain",
    title: "Class IV High-Intensity Laser Therapy",
    tagline: "Deep tissue photobiomodulation for rapid cellular repair and pain dampening.",
    description:
      "Deep-penetrating multi-wavelength laser therapy delivering concentrated photons deep into damaged nerves, ligaments, and tendons to trigger rapid cellular repair.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    features: [
      "Accelerated anti-inflammatory cascade",
      "Instant analgesic pain-dampening action",
      "Soft tissue and tendon injury repair",
      "Completely painless and non-invasive procedure",
    ],
    overview: [
      "Class IV Laser Therapy delivers concentrated therapeutic photons deep into muscles, ligaments, and nerves (up to 8-10 cm deep).",
      "The biological photobiomodulation cascade enhances microcirculation, promotes lymphatic drainage, and blocks pain signals at C-fiber nerve endings.",
    ],
    clinicalHighlights: [
      "High power density penetrating deep spinal and joint tissues",
      "Rapid reduction in acute and chronic muscular edema",
      "100% non-invasive, painless, and gentle warming sensation",
      "Sessions completed in 10-15 minutes",
    ],
    indications: [
      "Acute lumbar muscle spasm & sprain",
      "Cervical whiplash & tension headaches",
      "Frozen shoulder & rotator cuff tendinitis",
      "Plantar fasciitis & Achilles tendinopathy",
    ],
    recoveryGoals: [
      "Instant analgesic pain-dampening action",
      "Accelerated soft-tissue repair and collagen synthesis",
      "Restore joint mobility without pharmacological side effects",
    ],
    protocolSteps: [
      { step: "01", title: "Target Mapping", desc: "Palpating trigger points and determining optimal joule dosage." },
      { step: "02", title: "Contact / Non-Contact Laser Scanning", desc: "Systematic scanning across the painful segment." },
      { step: "03", title: "Trigger Point Deactivation", desc: "Focused high-fluence dwell on primary pain foci." },
      { step: "04", title: "Active Range Movement", desc: "Gentle active stretching while tissue is warm and hyperemic." },
    ],
  },
  {
    id: "prp-therapy",
    category: "Regenerative Medicine",
    title: "Prolotherapy & PRP Regenerative Injections",
    tagline: "Autologous cellular regenerative medicine for joint and ligament longevity.",
    description:
      "Autologous platelet-rich plasma and prolotherapy solutions injected directly under clinical guidance into degenerated joints, ligaments, and chronic pain foci.",
    image: "/categories/brain-spine-design.jpg",
    features: [
      "Knee osteoarthritis joint preservation",
      "Chronic tendinitis and ligamentous laxity repair",
      "Biologic stimulus for collagen synthesis",
      "Outpatient minimally invasive protocol",
    ],
    overview: [
      "Degenerated cartilage and lax ligaments often fail to heal due to poor native blood supply. Regenerative medicine injects concentrated autologous healing factors directly to stimulate collagen synthesis.",
      "Ideal for patients with knee osteoarthritis, chronic sacroiliac joint instability, and resistant tendinopathies.",
    ],
    clinicalHighlights: [
      "Autologous growth factor concentration from patient’s own blood",
      "Strengthens lax ligaments stabilising hypermobile joints",
      "Joint preservation delaying or avoiding joint replacement",
      "Long-lasting biological structural reinforcement",
    ],
    indications: [
      "Knee osteoarthritis (Grade I - III)",
      "Sacroiliac joint dysfunction & ligament laxity",
      "Chronic tennis elbow / golfer's elbow",
      "Persistent rotator cuff partial tears",
    ],
    recoveryGoals: [
      "Reinforce joint stability and load-bearing tolerance",
      "Reduce persistent inflammatory synovitis",
      "Prolong natural joint lifespan",
    ],
    protocolSteps: [
      { step: "01", title: "Blood Draw & Centrifugation", desc: "Harvesting platelet-rich buffy coat through sterile centrifugation." },
      { step: "02", title: "Precision Intra-Articular Delivery", desc: "Administering PRP or prolotherapy solution into target joint/ligament." },
      { step: "03", title: "Initial Proliferative Phase", desc: "Mild natural inflammatory response triggering healing cascades (24-48 hrs)." },
      { step: "04", title: "Eccentric Strengthening", desc: "Graduated rehabilitation strengthening the repaired structural collagen." },
    ],
  },
];

