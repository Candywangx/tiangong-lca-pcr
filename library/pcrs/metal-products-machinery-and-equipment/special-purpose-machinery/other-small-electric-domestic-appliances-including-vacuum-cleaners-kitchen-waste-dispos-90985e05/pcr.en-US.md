---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-small-electric-domestic-appliances-including-vacuum-cleaners-kitchen-waste-dispos-90985e05
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Other small electric domestic appliances

## 1. Scope and Applicability

This methodology covers the full residual family of small domestic electric appliances: vacuum cleaners, kitchen waste disposers, domestic food mixers, shavers, hair dryers, smoothing irons, coffee makers and toasters. Other residual domestic electric appliances require principal-function review. Corded and cordless configurations remain covered when output UUID or battery chemistry is unresolved. Produce one configuration-specific factory foreground package; kilograms do not make the different domestic services functionally equivalent.

Determine principal function and intended domestic market. Adjacent CPC3.0 categories are refrigerators/freezers44811; dishwashers and clothes/linen washing/drying44812; electric blankets44813; sewing machines44814; fans/ventilating or recycling hoods44815; dedicated water/space/soil heaters and ovens/cookers/grillers/roasters44817; and independently supplied electric heating resistors44818. An internal hairdryer fan, toaster heater or vacuum motor does not turn the appliance into that component category. Dedicated room fans/heaters, industrial food machinery, non-electric articles and separately supplied parts are excluded. Review multifunction ambiguity instead of silently selecting the residual class. Sources: `un-cpc-3-0-44816`; reviewed CPC3.0 structure.

Primary examples span different architectures: Dyson V11 supplies motorized tools, PC, ABS and aluminium as distinct construction entries and a battery of unstated chemistry; InSinkErator35ss supplies induction drive, stainless grinding and permanently lubricated bearings; Braun hand mixers supply domestic mixing and motor controls; Philips S7885 adds Li-ion storage/sensing, USB cable and conditional filled cleaning cartridge but no adapter; Philips hairdryer has airflow/heating, iron has soleplate/water circuit; Braun toaster has thermal function and coffee maker controlled water flow/temperature. Source claims describe product architecture, not factory recipes, production factors or generic lifecycle benefits. Independent manufacturers provide counterexamples to a single polymer gadget, universal motor, all-battery, all-wet or all-heater inventory. The actual configuration documents must resolve unshown variants; no source power, unit weight, consumer water, warranty or performance becomes a production default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-small-electric-domestic-appliances-including-vacuum-cleaners-kitchen-waste-dispos-90985e05 |
| classification_refs | CPC3.0:44816 |
| covered_products | Full residual small domestic electric appliance family in section1; corded and cordless |
| excluded_products | Adjacent principal functions and non-domestic/non-electric/separate parts in section1 |
| representative_product | One actual complete accepted domestic appliance configuration; no representative weight across families |
| production_route | Actual make/buy and conditional mechanical/fluid/thermal/electrical architectures |
| market_state | Complete accepted delivered configuration with actual accessories/fills; net mass excludes packaging/rejects |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one actual domestic-function appliance, not its downstream domestic service |
| How much | 1 kg accepted net complete appliance mass of the same configuration |
| How well | Meets declared electrical safety, function, interfaces and actual acceptance plan |
| How long or cycle | One manufacturing/delivery period; no default service lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other small electric domestic appliances |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function; domestic market; model revision; power interface; motor and thermal/fluid architecture; actual battery chemistry or gap; supplied accessories/fills; make/buy; delivered state; actual acceptance tests; calibrated net mass; N; site/period; utility delivery conditions; waste and species; upstream/treatment; allocation uncertainty |

Declare all required qualifiers in the package. Reference product UUID unresolved; never substitute one vacuum or spent battery for the category.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `material_species` | physical material/species records | Mass | kg | Use each term own moisture/metal/chemical assay, stocks and reactions. Gross mass is not contained element; do not apply to electricity/transport. |
| `energy_interface` | electricity, steam, condensate and fuel | Delivered energy or fuel mass and NCV | MJ; kg; MJ/kg | Retain kWh electricity, 1 kWh=3.6 MJ. Steam supply and return each use own kg times own MJ/kg relative to common zero; distinguish gross/already-net, return deducted once. Fuel uses own mass and NCV, not purchased steam. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, drive/heater/electrical assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought motor/heater/battery/board/pump/head includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Factory qualification water/food/fabric/hair substitutes, dust, electricity and battery charging are actual production burdens when consumed; reusable fixtures use stock/reuse records. Downstream consumer electricity, charging, coffee, cleaned floor, shaving, fabric service and waste-processing are not manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown battery chemistry retains coverage and needs a matched actual identity. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual selected inputs supplied grade, completion state and delivery interface |
| starting_condition_role | Factory foreground receipt boundary |
| product_classification_scope | Full residual domestic appliance function category reviewed in section1 |
| recursive_input_rule | Same-category purchased precursor uses upstream once; expand subsequent site work only, cancel paired internal transfers without infinite recursion |
| upstream_dataset_requirement | Match actual grade, recipe, completed treatment, geography/period and supply interface; disclose missing providers/substitution |
| disclosure | Actual configuration, make/buy, coverage/conditional absence, transport/treatment, measured denominator and uncertainty |

### Family and make/buy matrix

| Family | Actual conditional route | Evidence limits |
| --- | --- | --- |
| Vacuum | Suction motor, air path/filter, actual cleaning head and cord/battery interface | Dyson configurations distinct; PC/ABS separate, filter medium and battery chemistry unknown |
| Disposer | Grinding motor/drive and wet-side seals, own or complete bought | Induction example not every motor; permanently lubricated parts not refilled |
| Food mixer | Domestic motor/gear/tool; food contact; actual load tests | Braun domestic mixing; not industrial food manufacturing equipment |
| Shaver | Cutter drive, actual battery/controls/wet structure | Li-ion not subchemistry; cable included/adapter absent; cleaning cartridge separate |
| Hairdryer | Airflow, actual heat/insulation/control; ion module only actual | AC label not universal-motor subtype or heater alloy |
| Iron | Heated soleplate, actual water path/pump if any; separate dry/steam | Ceramic label not aluminium substrate/recipe; test water not delivered net mass |
| Coffee maker | Actual heated fluid path, gravity/pump, controls and carafe | Controlled water not proof of pump; brewed coffee downstream or actual factory test |
| Toaster | Actual heater supports, controls and mechanical ejection | Stainless shell not entire appliance alloy; test bread not appliance output |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Housing and mechanical fabrication | conditional | Only actual site molding, casting, stamping, machining, cleaning and coating; bought finished parts bypass embedded fabrication | foreground | per 1 kg reference flow |
| `drive_thermal` | Motor, drive and thermal element fabrication | conditional | Only actual site winding, lamination, rotor/brush/magnet integration or heater manufacture; preserve actual alternatives | foreground | per 1 kg reference flow |
| `electronics` | Electrical and control assembly | conditional | Only actual wiring, board population, soldering and controls; bought populated boards bypass embedded inputs | foreground | per 1 kg reference flow |
| `integration` | Appliance integration | required | Required for every actual configuration; mechanical/fluid/thermal/electrical architectures as present | foreground | per 1 kg reference flow |
| `test` | Factory tests and rework | required | Actual acceptance plan; only actual loaded, wet, thermal, safety and battery testing | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Required complete selected shipped configuration; packaging excluded from net output mass | foreground | per 1 kg reference flow |
| `services` | Residual shared utilities and actual generation | conditional | Only unassigned residual and actual generation; reconcile all assigned subprocesses | foreground | per 1 kg reference flow |

### Process: Housing and mechanical fabrication (`fabrication`)

Only actual site molding, casting, stamping, machining, cleaning and coating; bought finished parts bypass embedded fabrication。

#### Inputs

##### Product flows

###### Acrylonitrile-butadiene-styrene resin (`abs`)

Only site-molded actual ABS grade; source lists ABS separately from PC, without proving a blend. Only actual CN at-plant ABS granulate with matched grade/additives and supplier; no blend identity or source quantity is imposed.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: dyson-v11-spec

###### Polycarbonate resin (`pc`)

Only site-molded actual PC grade; distinguish additives and compounded/recycled state. Only actual at-plant PC granulate; match actual additives, recycling share and supplier geography before provider use.

- Selected flow: Polycarbonate granulate `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: dyson-v11-spec

###### Polypropylene resin (`pp`)

Conditional actual PP grade in documented housing/reservoir; no universal material assumption. Only actual primary-form PP resin; match grade and supplied polymer/compound state; do not use for a finished reservoir.

- Selected flow: Polypropylene `54802cfb-bd58-4f85-9ebf-9e0616529c1c`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Low-carbon steel sheet (`steel`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Stainless steel sheet (`stainless`)

Only own alloy-certified sheet fabrication; stainless source labels do not establish alloy grade. Only actual further-worked flat-rolled stainless input whose grade/thickness and completion state match supplier; hot/cold-only or other stock requires separate unresolved identity.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: insinkerator-35ss; braun-identity-toaster

###### Aluminium alloy billet (`aluminium`)

Actual alloy feedstock for own machining/casting; bought finished parts are the alternative.

- Selected flow: Aluminium alloy billet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: dyson-v11-spec

###### Water-miscible metalworking-fluid concentrate (`coolant`)

Only actual formulated concentrate; dilution water separately measured; unknown chemistry needs formulation evidence.

- Selected flow: Water-miscible metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Process water (`water`)

Only fresh make-up for site cooling, washing or dilution; paired internal recirculation is not new import. Only actually supplied treated industrial process water, with supplier treatment and quality documented; natural extraction is a different exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropyl alcohol (`ipa`)

Only actual IPA cleaning, with own assay, water fraction, capture/return and stock records. Identity applies only to actual China at-plant isopropanol with measured purity; water-diluted blends need own formulation identity or separated constituents.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Epoxy powder coating (`powder`)

Only actual epoxy coating recipe; ceramic soleplate description does not prove epoxy coating.

- Selected flow: Epoxy powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`fabrication_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. This UUID applies only to actual China customer-side grid consumption at 1–35 kV, with matched site delivery, provider mix and reporting year. Allocate purchased imports to process loads once; internal voltage transformation is not another purchased import. Other voltages, countries, contracted generation or own generation require separate actual flow identities. The flow references the technical Net calorific value property, whose verified unit group is energy (MJ; 1 kWh=3.6 MJ); it represents delivered electrical energy, without a fuel calorific-content calculation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Stainless steel fabrication scrap (`ss_scrap`)

Segregate actual alloy with own moisture/coolant and contained-metal assays; scrap is not negative fresh input.

- Selected flow: Stainless steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### ABS molding reject (`abs_reject`)

Distinguish paired internal regrind returns from external waste and changes in stocks.

- Selected flow: ABS molding reject
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent isopropyl-alcohol cleaning liquor (`spent_solvent`)

Own alcohol/water fraction and actual treatment; captured/recovered solvent is not automatically destroyed.

- Selected flow: Spent isopropyl-alcohol cleaning liquor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Isopropyl alcohol emission to air (`ipa_air`)

Only independently established IPA air release; unclosed residual is not an air emission. Only actual isopropanol release to unspecified air; indoor/urban/high-stack categories need their own matched identity.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Motor, drive and thermal element fabrication (`drive_thermal`)

Only actual site winding, lamination, rotor/brush/magnet integration or heater manufacture; preserve actual alternatives。

#### Inputs

##### Product flows

###### Non-oriented electrical steel strip (`electrical_steel`)

Only own motor laminations; bought motor includes its steel once upstream.

- Selected flow: Non-oriented electrical steel strip
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Enamelled copper winding wire (`copper_wire`)

Only own winding with supplied insulation state; no extra raw copper burden behind bought enamelled wire. Only actual copper enamel-insulated winding wire confirmed by supplier; generic name also permits aluminium, which is not silently substituted.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Neodymium-iron-boron permanent magnet (`magnet`)

Only evidenced permanent-magnet design; induction motor does not imply magnets.

- Selected flow: Neodymium-iron-boron permanent magnet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Graphite carbon brush (`brush`)

Only actual brushed motor; brushless route records absence rather than assumed zero.

- Selected flow: Graphite carbon brush
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Nickel-chromium resistance wire (`nichrome`)

Only actual on-site wire heater; source nominal heat power does not identify resistance alloy.

- Selected flow: Nickel-chromium resistance wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Mica insulation sheet (`mica`)

Only actual heater support; bought complete heater already includes it.

- Selected flow: Mica insulation sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Lubricated rolling bearing (`bearing`)

Only independently bought bearing in own drive; exclude bearing already included in bought motor. Only actual independently purchased finished ball or roller bearing, with supplier-confirmed lubrication state and dimensions; embedded bearing/grease in a bought motor is excluded.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`drive_thermal_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. This UUID applies only to actual China customer-side grid consumption at 1–35 kV, with matched site delivery, provider mix and reporting year. Allocate purchased imports to process loads once; internal voltage transformation is not another purchased import. Other voltages, countries, contracted generation or own generation require separate actual flow identities. The flow references the technical Net calorific value property, whose verified unit group is energy (MJ; 1 kWh=3.6 MJ); it represents delivered electrical energy, without a fuel calorific-content calculation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Electrical and control assembly (`electronics`)

Only actual wiring, board population, soldering and controls; bought populated boards bypass embedded inputs。

#### Inputs

##### Product flows

###### FR-4 copper-clad printed circuit board (`bare_board`)

Only actual unpopulated board receiving site components; no duplication with bought populated board. Only actual bare FR4 glass/epoxy copper board; source explicitly separates PWB from populated PWA.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Tin-silver-copper solder alloy (`solder`)

Only actual alloy and soldering; other alloy or flux formulation requires its own card.

- Selected flow: Tin-silver-copper solder alloy
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Rosin-based solder flux (`flux`)

Only actual formulation; independently assay resin/solvent and water where balance applies.

- Selected flow: Rosin-based solder flux
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Packaged microcontroller (`control_ic`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual separately supplied packaged integrated circuit ready for site SMT; verify the actual microcontroller function, package and supplier, and exclude devices embedded in a bought populated board.

- Selected flow: Packaged integrated circuits `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`electronics_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. This UUID applies only to actual China customer-side grid consumption at 1–35 kV, with matched site delivery, provider mix and reporting year. Allocate purchased imports to process loads once; internal voltage transformation is not another purchased import. Other voltages, countries, contracted generation or own generation require separate actual flow identities. The flow references the technical Net calorific value property, whose verified unit group is energy (MJ; 1 kWh=3.6 MJ); it represents delivered electrical energy, without a fuel calorific-content calculation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rejected populated control circuit board (`pcb_reject`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual defective populated board/components transferred at plant in China; other geographic or treatment interfaces require a matching separate flow.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Appliance integration (`integration`)

Required for every actual configuration; mechanical/fluid/thermal/electrical architectures as present。

#### Inputs

##### Product flows

###### Single-phase induction motor assembly (`induction_motor`)

Conditional bought complete motor; no duplicated winding wire, laminations or bearing grease.

- Selected flow: Single-phase induction motor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: insinkerator-35ss

###### Brushless direct-current motor assembly (`bldc_motor`)

Only actual purchased brushless design; source rotation speed alone does not establish motor subtype.

- Selected flow: Brushless direct-current motor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Universal motor assembly (`universal_motor`)

Only actual purchased universal motor; hairdryer AC label does not prove this subtype.

- Selected flow: Universal motor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Electric resistance heater assembly (`heater`)

Only actual bought complete heater; exclude its embedded resistance wire and support material from own fabrication.

- Selected flow: Electric resistance heater assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-iron; philips-hairdryer; braun-identity-toaster

###### Coated aluminium iron soleplate (`soleplate`)

Only actual aluminium substrate and evidenced coating; Philips ceramic description does not identify substrate or coating recipe.

- Selected flow: Coated aluminium iron soleplate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-iron

###### Stainless steel grinding assembly (`grind`)

Only bought complete disposer grinding assembly with actual alloy and completion state.

- Selected flow: Stainless steel grinding assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Stainless steel mixer beater (`beater`)

Only actual alloy and included attachment; other mixing tool designs require own exchanges.

- Selected flow: Stainless steel mixer beater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: braun-handmixers

###### Steel shaver cutter assembly (`blade`)

Only actual bought cutter; no assumed blade alloy, coating or service lifetime.

- Selected flow: Steel shaver cutter assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-s7885

###### Motorized vacuum cleaner head (`head`)

Only actual supplied complete head; included motor burden once rather than separately again.

- Selected flow: Motorized vacuum cleaner head
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: dyson-v11-spec

###### Polyester vacuum filter element (`filter`)

Only verified actual polyester medium; Dyson washable filter does not identify polymer.

- Selected flow: Polyester vacuum filter element
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Diaphragm water pump assembly (`pump`)

Only actual diaphragm pump; coffee controlled water flow does not prove a pump or this mechanism.

- Selected flow: Diaphragm water pump assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: braun-multiserve

###### Populated control printed circuit board (`board`)

Actual bought populated board includes substrate, components and solder upstream once.

- Selected flow: Populated control printed circuit board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Lithium-ion battery pack (`li_pack`)

Only verified actual Li-ion pack, not an assumed cathode chemistry; include delivered protection board once.

- Selected flow: Lithium-ion battery pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-s7885

###### Nickel-metal-hydride battery pack (`nimh_pack`)

Only actual supplier-verified NiMH configuration; unknown battery chemistry remains a gap, not forced absence.

- Selected flow: Nickel-metal-hydride battery pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Insulated mains power cord (`cord`)

Only actually shipped cord; disposer35ss cord is separately sold in the cited configuration.

- Selected flow: Insulated mains power cord
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### USB-A charging cable (`usb`)

Only actually included USB-A cable; S7885/50 includes cable but no power adapter.

- Selected flow: USB-A charging cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-s7885

###### AC-to-DC power adapter (`adapter`)

Only actually included adapter; do not impute S7885/50 an absent adapter.

- Selected flow: AC-to-DC power adapter
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-s7885

###### Silicone rubber seal (`seal`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Silicone rubber seal
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polypropylene water reservoir (`reservoir`)

Only actual verified PP reservoir; bought finished reservoir excludes upstream PP molding inputs.

- Selected flow: Polypropylene water reservoir
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-iron; braun-multiserve

###### Glass coffee carafe (`carafe`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Glass coffee carafe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: braun-multiserve

###### Filled shaver cleaning cartridge (`clean_cartridge`)

Actual included filled cartridge; identify liquid chemistry/provider; retained contents differ from factory-consumed cleaner.

- Selected flow: Filled shaver cleaning cartridge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: philips-s7885

###### Lithium-soap lubricating grease (`grease`)

Only actual documented initial fill into own drive; permanently lubricated bought bearing/motor already includes grease.

- Selected flow: Lithium-soap lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`integration_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. This UUID applies only to actual China customer-side grid consumption at 1–35 kV, with matched site delivery, provider mix and reporting year. Allocate purchased imports to process loads once; internal voltage transformation is not another purchased import. Other voltages, countries, contracted generation or own generation require separate actual flow identities. The flow references the technical Net calorific value property, whose verified unit group is energy (MJ; 1 kWh=3.6 MJ); it represents delivered electrical energy, without a fuel calorific-content calculation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory tests and rework (`test`)

Actual acceptance plan; only actual loaded, wet, thermal, safety and battery testing。

#### Inputs

##### Product flows

###### Factory-test water (`test_water`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actually supplied treated industrial process water, with supplier treatment and quality documented; natural extraction is a different exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wheat flour test charge (`test_flour`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actual wheat flour factory test charge with measured grade/moisture and actual supplier, not a universal mixer test recipe.

- Selected flow: Wheat flour `f87532de-91ec-4971-8cde-7cb05b236b0f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Roasted ground coffee test charge (`test_coffee`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption.

- Selected flow: Roasted ground coffee test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Bread test charge (`test_bread`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actual bread factory test charge with recipe/moisture and actual supplier, never consumer bread use.

- Selected flow: Bread `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cotton test fabric (`test_fabric`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption.

- Selected flow: Cotton test fabric
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyamide artificial-hair test fibre (`test_hair`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actual PA6 monofilament used as a documented substitute, with matched dimensions and supplier; other real/synthetic hair needs its own card.

- Selected flow: Polyamide 6 monofilament `61fa6be2-e90f-41af-aba5-86209fb72896`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Silica test dust (`test_dust`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actual silicon-dioxide factory-test medium with documented purity, crystalline/amorphous state and particle-size specification; mixtures require separate constituents or their own formulation identity, not this pure-material UUID.

- Selected flow: Silicon dioxide `7a49705c-abee-4573-be50-a01a1e799ab3`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`test_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. This UUID applies only to actual China customer-side grid consumption at 1–35 kV, with matched site delivery, provider mix and reporting year. Allocate purchased imports to process loads once; internal voltage transformation is not another purchased import. Other voltages, countries, contracted generation or own generation require separate actual flow identities. The flow references the technical Net calorific value property, whose verified unit group is energy (MJ; 1 kWh=3.6 MJ); it represents delivered electrical energy, without a fuel calorific-content calculation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Factory-test wastewater (`effluent`)

Measured liquid and own composition/treatment, not inferred consumer-drain use.

- Selected flow: Factory-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent roasted-coffee test residue (`food_residue`)

Only actual coffee-test residue with its own dry solids, water and stock state; other tests need own residues.

- Selected flow: Spent roasted-coffee test residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Rejected small domestic electric appliance (`appliance_reject`)

Only actual irrecoverable whole reject; its burdens stay in accepted numerator, its mass excluded from denominator.

- Selected flow: Rejected small domestic electric appliance
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Water vapour emission to air (`water_vapour`)

Only actual factory evaporation/steam discharge; exclude consumer water defaults. Only actual water vapour to unspecified air; not freshwater, soil or stratosphere release.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Packing and accepted release (`dispatch`)

Required complete selected shipped configuration; packaging excluded from net output mass。

#### Inputs

##### Product flows

###### Corrugated cardboard box (`box`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyethylene packaging bag (`bag`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Polyethylene packaging bag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Moulded paper-pulp packaging insert (`insert`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Moulded paper-pulp packaging insert
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`dispatch_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. This UUID applies only to actual China customer-side grid consumption at 1–35 kV, with matched site delivery, provider mix and reporting year. Allocate purchased imports to process loads once; internal voltage transformation is not another purchased import. Other voltages, countries, contracted generation or own generation require separate actual flow identities. The flow references the technical Net calorific value property, whose verified unit group is energy (MJ; 1 kWh=3.6 MJ); it represents delivered electrical energy, without a fuel calorific-content calculation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Other small electric domestic appliances (`reference_product`)

Selected complete accepted configuration includes actual retained fills/accessories, excluding packaging and rejects.

- Selected flow: Other small electric domestic appliances
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Residual shared utilities and actual generation (`services`)

Only unassigned residual and actual generation; reconcile all assigned subprocesses。

#### Inputs

##### Product flows

###### Purchased alternating-current electricity (`electricity`)

ONLY unassigned shared residual after each process meter; purchased delivery voltage/geography/provider required. This UUID applies only to actual China customer-side grid consumption at 1–35 kV, with matched site delivery, provider mix and reporting year. Allocate purchased imports to process loads once; internal voltage transformation is not another purchased import. Other voltages, countries, contracted generation or own generation require separate actual flow identities. The flow references the technical Net calorific value property, whose verified unit group is energy (MJ; 1 kWh=3.6 MJ); it represents delivered electrical energy, without a fuel calorific-content calculation.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased steam (`steam`)

Only actual supply kg times its own MJ/kg relative to common zero; return condensate separately, net invoice return deducted once.

- Selected flow: Purchased steam
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas (`gas`)

Only actual burner/boiler fuel and own composition/NCV; purchased steam not duplicated with imaginary on-site boiler.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Returned condensate (`condensate`)

Only actual return kg times its own MJ/kg at measured state; do not subtract again from already-net supply.

- Selected flow: Returned condensate
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

###### Carbon dioxide emission to air (`co2`)

Only actual combustion/reaction CO2 with matched own carbon and oxidation evidence. UUID applies only to measured fossil CO2, emissions to air unspecified; biogenic/reaction origins or specific air compartments need own identities.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide emission to air (`co`)

Own CO measurement or verified actual fuel/technology factor; carbon closure alone cannot establish CO. UUID applies only to measured fossil CO, emissions to air unspecified; preserve own species evidence and distinguish NOx.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide emission to air (`no2`)

Only separately established NO2 species mass; NOx as NO2-equivalent is another identity.

- Selected flow: Nitrogen dioxide emission to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated appliance models or use appliance mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per machine | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted machines | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | attributable energy / accepted machines | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | attributable waste / accepted machines | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | For each measured release multiply actual species concentration by matched gas or liquid flow over the same measured interval after actual controls; retain original wet/dry basis, temperature/pressure, units and supported conversions. Measure fugitive releases independently with a declared sampling/area/interval basis. Verified factors must match actual species, technology and control conditions. Investigate closure: capture is not destruction and an unexplained residual is not an air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | attributable emission / accepted machines | sampling/flow/combined uncertainty |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| raw_period_basis | all inventory rows | Retain same-configuration and same-period attributable quantity Q in its actual native unit, including rejects, rework and factory-test burdens. N is accepted appliance count; D is summed calibrated net mass of those accepted complete appliances, excluding packaging, reject mass and consumed factory-test-load mass. M=D/N; q_item=Q/N; q_ref=Q/D=q_item/M. Retained shipped accessories and fills belong to the declared complete appliance configuration. Preserve original meter, inventory, acceptance, allocation and conversion records; do not mix configurations or substitute nominal model mass. | cp_mass; cp_material; cp_energy; cp_waste; cp_emission; raw-period acceptance and exchange records |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, domestic market, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. |  |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. |  |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. |  |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. |  |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. |  |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/drive/electronics/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. |  |
| `steam_close` | steam and condensate | Use supply kg times supply own MJ/kg and return kg times return own MJ/kg at measured pressure/temperature relative to common zero. If gross supply, subtract return once; if already-net invoice, do not subtract again. Keep physical steam/condensate mass balance independent from energy. |  |
| `species_emissions` | air releases | Validate every emitted species and compartment independently. Fuel carbon balance cannot alone establish CO or NOx. NO2 mass is not NOx reported as NO2 equivalent; keep reporting conventions and actual species identities distinct. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual configuration factory foreground production and models with explicit completed upstream links |
| excluded_use | Cross-family functional equivalence, default consumer service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| dyson-v11-spec | handbook | Dyson V11 Technical specification; edition not printed; public PDF snapshot 2026-10-02; https://www.dyson.com/content/dam/dyson/for-business/business-refresh/docs/us/vacuums/v11-cord-free-tech-spec-us.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| braun-multiserve | handbook | Braun MultiServe Plus Coffee Maker KF9250BK; public HTML snapshot2026-10-02; https://www.braunhousehold.com/en-us/p/multiserve-coffee-machines-multiserve-plus-coffee-maker-with-cold-brew/KF9250BK.html | Product architecture/category boundary; not factory recipe or quantitative default |
| philips-iron | handbook | Philips 3000 Series DST3010/30 steam iron; public HTML snapshot2026-10-02; https://www.home-appliances.philips/sg/en/p/DST3010_30 | Product architecture/category boundary; not factory recipe or quantitative default |
| philips-hairdryer | handbook | Philips DryCare Pro BHD176/00 hairdryer; public HTML snapshot2026-10-02; https://www.philips.com.au/c-p/BHD176_00/drycare-pro-hairdryer | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-3-0-44816 | official_guidance | UNSD CPC Version3.0 subclass44816; Version3.0; public snapshot2026-10-02; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/44816 | Product architecture/category boundary; not factory recipe or quantitative default |
| philips-s7885 | handbook | Philips Shaver series 7000 S7885/50; Issue date 2025-07-15; version15.15.1; https://acc.documents.philips.com/assets/20250715/95ab27f73ba94a139b0ab31b009abfbf.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| braun-identity-toaster | handbook | Braun Identity collection; public HTML snapshot2026-10-02; https://www.braunhousehold.com/en-us/e/collections/identity | Product architecture/category boundary; not factory recipe or quantitative default |
| braun-handmixers | handbook | Braun MultiMix Hand mixers; public HTML snapshot2026-10-02; https://www.braunhousehold.com/en-us/e/food-preparation/hand-mixers | Product architecture/category boundary; not factory recipe or quantitative default |
| insinkerator-35ss | handbook | InSinkErator Evolution 35ss Submittal Sheet; H975-23G-83-10; copyright2023; https://www.insinkerator.com/documents/evolution-35ss-specification-sheet-en-us-72626.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
