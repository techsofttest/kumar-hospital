export interface ServiceItem {
  slug: string;
  category: "neuro" | "spine-pain";
  categoryLabel: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  overview: string[];
  clinicalHighlights: string[];
  indications: string[];
  recoveryGoals: string[];
  protocolSteps: { step: string; title: string; desc: string }[];
}

export const servicesData: ServiceItem[] = [
  // ================= CATEGORY 1: STROKE & NEURO REHABILITATION =================
  {
    slug: "stroke-recovery-program",
    category: "neuro",
    categoryLabel: "Stroke & Neuro Rehabilitation",
    title: "Stroke Recovery Program",
    tagline: "Comprehensive inpatient and outpatient multidisciplinary neuro-rehabilitation.",
    description:
      "A holistic, goal-oriented recovery program designed for patients recovering from ischemic stroke, hemorrhagic stroke, or subarachnoid hemorrhage. Focused on neuroplasticity stimulation and functional independence.",
    image: "/categories/Neural Pathways in Focus.png",
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
    slug: "neurological-assessment",
    category: "neuro",
    categoryLabel: "Stroke & Neuro Rehabilitation",
    title: "Neurological Clinical Assessment",
    tagline: "Objective biomechanical, sensory, and motor mapping by expert physiatrists.",
    description:
      "In-depth clinical diagnostic evaluation combining physical medicine examination, reflex testing, functional mobility scoring, and neurological mapping.",
    image: "/categories/brain-spine-design.jpg",
    overview: [
      "Precise neurological rehabilitation begins with exact clinical assessment. We quantify impairment across motor, sensory, cerebellar, and autonomic pathways.",
      "Evaluations determine the baseline for therapy prescription, guiding safe dosage, intensity, and device selection.",
    ],
    clinicalHighlights: [
      "Motor power (MRC Scale) and deep tendon reflex evaluation",
      "Modified Ashworth Scale spasticity assessment",
      "Berg Balance Scale & 10-Meter Walk Test",
      "Cranial nerve and vestibular screening",
    ],
    indications: [
      "Patients following neurosurgical procedures",
      "Suspected nerve entrapment or radiculopathy",
      "Chronic degenerative motor disorders (Parkinson's, Neuropathy)",
    ],
    recoveryGoals: [
      "Establish quantifiable rehabilitation benchmarks",
      "Identify biomechanical bottlenecks inhibiting recovery",
      "Formulate patient-centric multidisciplinary timeline",
    ],
    protocolSteps: [
      { step: "01", title: "Neuro-Musculoskeletal Examination", desc: "Sensory testing, reflex integrity, and joint range measurements." },
      { step: "02", title: "Biomechanical Motion Analysis", desc: "Visual and sensor-assisted evaluation of balance and posture dynamics." },
      { step: "03", title: "Diagnostic Review", desc: "Correlation of clinical findings with MRI, CT scans, and EMG records." },
      { step: "04", title: "Customized Protocol Prescription", desc: "Prescribing daily therapy units, goals, and periodic re-evaluation checkpoints." },
    ],
  },
  {
    slug: "robotic-gait-training",
    category: "neuro",
    categoryLabel: "Stroke & Neuro Rehabilitation",
    title: "Robotic Gait Training & Biofeedback",
    tagline: "Computer-assisted walking retraining with dynamic body-weight suspension.",
    description:
      "Advanced robotic exoskeleton locomotion therapy that allows stroke and neurological patients to perform thousands of physiological walking cycles safely.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
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
    slug: "physiotherapy-mobility",
    category: "neuro",
    categoryLabel: "Stroke & Neuro Rehabilitation",
    title: "Physiotherapy & Mobility Training",
    tagline: "Core stabilization, limb strengthening, and assisted transfer conditioning.",
    description:
      "Targeted neuro-physiotherapy focusing on trunk stabilization, balance platforms, transfer transitions (bed-to-chair), and muscle activation regimes.",
    image: "/home-hero/Guided Steps in a Rehab Clinic.png",
    overview: [
      "Restoring basic mobility and stability forms the cornerstone of rehabilitation. Our specialized gymnasiums are designed barrier-free with parallel bars, balance boards, and specialized mats.",
    ],
    clinicalHighlights: [
      "Mat activities & trunk control facilitation",
      "Parallel bar walking and weight shift drills",
      "Functional electrical stimulation (FES) paired movements",
      "Endurance building using recumbent steppers",
    ],
    indications: [
      "Impaired postural control",
      "Muscle weakness following prolonged hospitalization",
      "Balance disorders and fall risks",
    ],
    recoveryGoals: [
      "Independent sitting, standing balance",
      "Safe bed mobility and wheelchair transfer",
      "Community ambulatory capability",
    ],
    protocolSteps: [
      { step: "01", title: "Trunk Stability Foundations", desc: "Strengthening core stabilisers on therapy mats." },
      { step: "02", title: "Weight-Bearing Preparation", desc: "Tilt-table or standing frame verticalization." },
      { step: "03", title: "Parallel Bar Drills", desc: "Guided gait, tandem stance, and directional stepping." },
      { step: "04", title: "Free Floor Mobility", desc: "Progression to canes, quad-sticks, or unassisted walking." },
    ],
  },
  {
    slug: "occupational-therapy",
    category: "neuro",
    categoryLabel: "Stroke & Neuro Rehabilitation",
    title: "Occupational Therapy & ADL Retraining",
    tagline: "Fine motor coordination, hand function, and daily living independence.",
    description:
      "Specialized occupational therapy rebuilding fine motor skills, grasping, hand-eye coordination, and retraining for eating, grooming, and dressing.",
    image: "/categories/hands-helping-rehab.jpg",
    overview: [
      "Occupational therapy bridges clinical healing with practical life independence. We assess the patient's domestic environment and retrain essential functional tasks.",
    ],
    clinicalHighlights: [
      "Upper extremity fine motor pegboards & resistance clay",
      "Adaptive equipment training (special cutlery, grab rails)",
      "Cognitive rehabilitation and task-sequencing exercises",
      "Splinting and resting position orthotics",
    ],
    indications: [
      "Loss of hand dexterity post-stroke",
      "Upper limb apraxia or hemispatial neglect",
      "Difficulty with dressing, feeding, or writing",
    ],
    recoveryGoals: [
      "Regain functional grasp and release",
      "Independent performance of morning routines",
      "Cognitive orientation and problem-solving in daily tasks",
    ],
    protocolSteps: [
      { step: "01", title: "Upper Limb Assessment", desc: "Grip strength, pinch dynamometry, and range testing." },
      { step: "02", title: "Dexterity Conditioning", desc: "Repetitive fine motor drills and finger articulation." },
      { step: "03", title: "Simulated Daily Living Tasks", desc: "Buttoning, writing, kitchen appliance operation." },
      { step: "04", title: "Caregiver Training", desc: "Educating family on minimal-assistance techniques." },
    ],
  },
  {
    slug: "speech-swallowing-therapy",
    category: "neuro",
    categoryLabel: "Stroke & Neuro Rehabilitation",
    title: "Speech & Swallowing (Dysphagia) Therapy",
    tagline: "Safe swallowing maneuvers and oral-motor speech rehabilitation.",
    description:
      "Targeted oral-motor therapy for dysphagia (swallowing impairment) and aphasia/dysarthria post stroke, preventing aspiration and restoring verbal expression.",
    image: "/home-hero/Gentle Neck Stretch in a Sunlit Clinic.png",
    overview: [
      "Dysphagia poses immediate pulmonary risks (aspiration pneumonia). Our speech-language pathologists provide scientific assessment and sensory-motor stimulation for safe feeding.",
    ],
    clinicalHighlights: [
      "Clinical swallowing examination and texture grading",
      "VitalStim neuromuscular electrical stimulation (NMES)",
      "Phonatory and articulation reconditioning exercises",
      "Alternative communication (AAC) strategies",
    ],
    indications: [
      "Post-stroke coughing or choking during intake",
      "Slurred speech (dysarthria)",
      "Difficulty comprehending or formulating words (aphasia)",
      "Facial nerve weakness affecting oral seal",
    ],
    recoveryGoals: [
      "Transition safely from feeding tubes (Ryle's) to oral intake",
      "Protect airway from micro-aspiration",
      "Improve vocal clarity and functional communication",
    ],
    protocolSteps: [
      { step: "01", title: "Swallowing Safety Screening", desc: "Assessing laryngeal elevation and coughing reflexes." },
      { step: "02", title: "Oral-Motor Strengthening", desc: "Tongue, lip, and palatal resistance exercises." },
      { step: "03", title: "Therapeutic Diet Trials", desc: "Gradual progression from thickened fluids to pureed and soft solids." },
      { step: "04", title: "Speech & Articulation Regimen", desc: "Breath support, rhythm, and phoneme repetition." },
    ],
  },

  // ================= CATEGORY 2: BACK & NECK PAIN CARE =================
  {
    slug: "non-surgical-spine-care",
    category: "spine-pain",
    categoryLabel: "Back & Neck Pain Care",
    title: "Non-Surgical Spine Care",
    tagline: "Evidence-based spine medicine avoiding open surgical interventions.",
    description:
      "A comprehensive, non-operative paradigm for chronic low back pain, sciatica, facet arthropathy, and cervical disc disorders.",
    image: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
    overview: [
      "Over 90% of chronic back and neck conditions resolve without invasive surgical instrumentation when managed with multimodal physical medicine.",
      "At Kumar Hospital, our approach combines targeted biomechanical offloading, interventional procedures, deep tissue lasers, and stabilization therapy.",
    ],
    clinicalHighlights: [
      "Detailed postural and spinal curvature assessment",
      "Precision diagnosis of disc vs. facet vs. muscular etiology",
      "Integrated protocols reducing systemic medication dependence",
      "Long-term spinal core conditioning",
    ],
    indications: [
      "Herniated or bulging lumbar/cervical discs",
      "Sciatica & radiating limb numbness",
      "Chronic mechanical low back pain",
      "Spinal canal stenosis without red-flag deficits",
    ],
    recoveryGoals: [
      "Abolish radiating nerve root pain (sciatica/brachialgia)",
      "Restore pain-free spinal range of motion",
      "Eliminate the need for spine fusion or disc replacement",
    ],
    protocolSteps: [
      { step: "01", title: "Clinical & Imaging Correlation", desc: "Pinpointing the exact pain generator via MRI review and physical tests." },
      { step: "02", title: "Acute Pain Control", desc: "Targeted laser, electro-analgesia, or guided interventions." },
      { step: "03", title: "Biomechanical Offloading", desc: "IDD therapy or targeted cervical distraction." },
      { step: "04", title: "Stabilization & Ergonomics", desc: "Deep core multifidus reconditioning and workplace posture guidance." },
    ],
  },
  {
    slug: "idd-spinal-decompression",
    category: "spine-pain",
    categoryLabel: "Back & Neck Pain Care",
    title: "IDD Spinal Decompression Therapy",
    tagline: "Computer-targeted distraction for herniated and degenerated discs.",
    description:
      "Intervertebral Differential Dynamics (IDD) therapy delivers computer-controlled distraction forces to open collapsed disc spaces and retract herniations without surgery.",
    image: "/categories/3d-render-male-figure-leaning-with-spine-highlighted.jpg",
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
    slug: "interventional-pain-procedures",
    category: "spine-pain",
    categoryLabel: "Back & Neck Pain Care",
    title: "Interventional Pain Procedures",
    tagline: "Minimally invasive, targeted pain-relieving clinical procedures.",
    description:
      "Precision guided injections including epidural steroid blocks, facet joint injections, and trigger point interventions that extinguish pain at its origin.",
    image: "/baner/back-pain.jpg",
    overview: [
      "When chronic inflammation traps nerve roots or irritates zygapophyseal (facet) joints, targeted interventional pain procedures provide powerful, immediate relief.",
      "Administered by experienced specialists, these procedures break the pain spasm cycle and enable active physical rehabilitation.",
    ],
    clinicalHighlights: [
      "Targeted transforaminal and caudal epidural injections",
      "Facet joint and medial branch sensory nerve blocks",
      "Myofascial trigger point dry needling and injections",
      "Outpatient day-care procedures with rapid discharge",
    ],
    indications: [
      "Acute severe sciatica refractory to oral medications",
      "Facet-mediated axial back pain exacerbated by extension",
      "Piriformis syndrome and chronic gluteal pain",
    ],
    recoveryGoals: [
      "Immediate reduction in acute inflammation and pain",
      "Facilitate active participation in physiotherapeutic exercise",
      "Reduce dependence on oral opioids and NSAIDs",
    ],
    protocolSteps: [
      { step: "01", title: "Pre-Procedure Assessment", desc: "Confirming pain generator and coagulation safety." },
      { step: "02", title: "Aseptic Precision Delivery", desc: "Minimally invasive injection at the pinpoint anatomical target." },
      { step: "03", title: "Post-Procedure Observation", desc: "Short recovery monitoring with immediate relief verification." },
      { step: "04", title: "Active Rehab Integration", desc: "Initiating progressive strengthening within 48-72 hours." },
    ],
  },
  {
    slug: "laser-pain-therapy",
    category: "spine-pain",
    categoryLabel: "Back & Neck Pain Care",
    title: "Class IV High-Intensity Laser Therapy",
    tagline: "Deep-tissue photobiomodulation for rapid cellular repair.",
    description:
      "Deep-penetrating multi-wavelength laser therapy stimulating cellular ATP synthesis, reducing inflammatory prostaglandins, and accelerating tissue recovery.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
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
    slug: "prp-prolotherapy",
    category: "spine-pain",
    categoryLabel: "Back & Neck Pain Care",
    title: "Prolotherapy & PRP Regenerative Injections",
    tagline: "Autologous cellular regenerative medicine for joint and ligament longevity.",
    description:
      "Platelet-Rich Plasma (PRP) and hypertonic dextrose prolotherapy stimulating the body’s own growth factors to repair degenerated joints, tendons, and ligaments.",
    image: "/categories/3d-skeleton-neck-pain.jpg",
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
  {
    slug: "cervical-lumbar-rehabilitation",
    category: "spine-pain",
    categoryLabel: "Back & Neck Pain Care",
    title: "Cervical & Lumbar Spinal Rehabilitation",
    tagline: "Postural re-education, ergonomic alignment, and deep core conditioning.",
    description:
      "Specialized exercise medicine and dynamic postural training designed to build strong spinal stabilizers, prevent recurrence, and protect spinal discs.",
    image: "/home-hero/Gentle Neck Stretch in a Sunlit Clinic.png",
    overview: [
      "Pain relief is only the first phase; enduring recovery requires rebuilding the muscular corset of the spine. We train the deep transversus abdominis, lumbar multifidus, and deep cervical flexors.",
    ],
    clinicalHighlights: [
      "Biofeedback core activation training",
      "Cervical retraction and forward head posture correction",
      "Ergonomic workplace simulation and lifting guidance",
      "Home exercise regimen with periodic clinical checkups",
    ],
    indications: [
      "Post-acute disc recovery maintenance",
      "Desk workers with forward head posture / tech neck",
      "Recurrent episodes of acute back catching or stiffness",
    ],
    recoveryGoals: [
      "Build resilient spinal muscle endurance",
      "Prevent future disc herniation recurrences",
      "Return confidently to sports, driving, and active lifestyle",
    ],
    protocolSteps: [
      { step: "01", title: "Postural Alignment Screening", desc: "Photographic and kinematic posture baseline." },
      { step: "02", title: "Isometric Deep Stabiliser Activation", desc: "Activating inner unit stabilizers without spinal shear." },
      { step: "03", title: "Dynamic Kinetic Chain Integration", desc: "Squatting, lifting, and rotational movement patterns." },
      { step: "04", title: "Lifetime Ergonomic Strategy", desc: "Customized desk, chair, and sleep posture recommendations." },
    ],
  },
];

