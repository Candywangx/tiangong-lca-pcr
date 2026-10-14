---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-coniferous-lumber-core-blockboard
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical

---

# Five-layer coniferous lumber-core blockboard with PVAc core gluing and UF skin bonding

## 1. Scope and Applicability

Applies only to unfinished interior five-layer panels with a solid edge-glued coniferous sawn-strip core, two coniferous crossband veneers perpendicular to the core, and coniferous face/back veneers parallel to the core. The core is bonded with aqueous PVAc; the four veneer interfaces use hot-cured UF mixed on site from dry resin, NH4Cl, water and separately declared wood-flour filler when used. Purchased lumber and veneers arrive dried and ready for conditioning. Factory utilities are grid electricity and externally delivered hot-water heat; this route has no on-site fuel combustion. This is a declared route, not a universal blockboard process. Sources: `fao-farm-structures-1986`, `unido-panel-adhesives-1977`.

Exclude all-veneer plywood, veneer strips laminated on edge (laminboard), unglued nylon-bound strip ribbons, MDF/particleboard/cellular cores, LVL, glulam, reconstituted decorative wood, bamboo, tropical/non-coniferous exterior plies, PF/MUF/pMDI skin adhesives, preservatives, coatings and integrated log-to-veneer or green-lumber drying. Different cores and adhesive routes require a separate applicability assessment. Do not transfer coniferous sawmill or all-veneer plywood survey coefficients.

The physical strip-core boundary is supported by FAO, and distinct core/skin adhesives by UNIDO. UN CPC 3.0 titles distinguish all-sheet 3141 from other/veneered 3142, but their explanatory inclusions conflict (pp. 139–140). Use 31421 only as coniferous-face applicability context; the code alone cannot establish strip-core versus all-veneer construction. No shared coverage of 31422/31423 is established by the present recipe or evidence. Source: `un-cpc-notes-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-coniferous-lumber-core-blockboard |
| classification_refs | CPC 3.0 31421; coniferous strip-core applicability context |
| covered_products | Five-layer solid coniferous strip-core interior blockboard of the declared route |
| excluded_products | All-veneer, particle/fibre/cellular cores, structural parallel-laminated lumber and other routes in section 1 |
| representative_product | Uncoated five-layer coniferous blockboard, accepted net mass at measured final moisture |
| production_route | PVAc edge gluing; UF hot skin bonding; purchased dry inputs and hot-water heat |
| market_state | Conditioned, trimmed, sanded panel at factory gate; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an unfinished interior lumber-core panel of the stated construction |
| How much | 1 kg accepted net panel mass at declared measured moisture |
| How well | Declared geometry, layer species/grades and grain axes, adhesive recipes, bond acceptance and formaldehyde performance; no inferred structural rating |
| How long or cycle | One factory production and acceptance cycle; service lifetime excluded |
| reference_flow_link | `finished_panel` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Lumber core plywood `f7f7ecd7-5389-40e3-8900-6b543b416086` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Solid sawn-strip core; five layers; species/grade/dimensions/moisture of every layer; face/core parallel and crossband/core perpendicular axes; strip width and orientation; PVAc core-glue and UF skin-glue formulations/solids; pressure-temperature-time and assembly delays; bond/defect/formaldehyde acceptance; uncoated interior condition; plant, period, supplier boundaries, electricity voltage and net hot-water heat basis; packaging excluded; steel-band supplier composition and recycled/reprocessed route when selected |

Declare all qualifiers in the data package. kg is a declared production reference, not a claim of equivalent panel area, stiffness, durability or service between species and thicknesses.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | B = total accepted net panel mass in kg over the same lot/site/period, excluding all packaging; collect using cp_output. Normalize each external exchange by B. Retain measured final moisture; do not replace B with oven-dry wood mass. |
| wood_moisture | wood material ledger | Mass | kg | u = (m_wet - m_od) / m_od; m_od = m_wet / (1 + u). Determine oven-dry moisture by representative sealed samples and oven weighing, cp_materials; keep dry-basis u distinct from wet-basis fraction. Source: usda-wood-handbook-2021. |
| adhesive_solids | PVAc/UF glue ledgers | Mass | kg | m_s = m_supplied * s; m_ns = m_supplied * (1 - s). Measure s and actual H2O content separately for PVAc glue and UF powder, cp_recipe; m_ns is the non-solids remainder, not automatically water. Separate resin, hardener, filler and added water; report test conditions and non-water volatiles. Supplied solids are not conserved cured-resin mass; no universal solids fraction or cure yield. |
| utilities | electricity and purchased heat | Energy | MJ | E_MJ = 3.6 * E_kWh. H_net = sum(m_hotwater * (h_supply - h_return)) with m_hotwater in kg, h_supply and h_return in MJ/kg and H_net in MJ; if supplier h is in kJ/kg, divide that sum by 1000. Preserve the same actual supplier enthalpy reference basis and net-delivery boundary, using each supply/return stream's measured temperature/pressure state, cp_heat. Do not multiply MJ heat by fuel LHV/HHV or assume steam mass equals useful heat. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received dried coniferous sawnwood, unbonded dry veneers, dry UF resin, PVAc glue and other listed supplied inputs |
| starting_condition_role | Purchased input gate for foreground conversion |
| product_classification_scope | Physical five-layer strip-core subset; 31421 contextual proposal only |
| recursive_input_rule | Purchased already bonded blockboard is outside this route; internal rework remains same physical ledger and cannot create another reference output |
| upstream_dataset_requirement | Supplier datasets cover forestry, sawmilling/veneer manufacture and drying, resin manufacture, all incoming delivery, electricity and hot-water generation to matched input boundaries. Foreground gate is not cradle-to-gate by itself. |
| disclosure | Actual supplier starting states, routes, species, geography/year, utility metering, upstream exclusions and waste destinations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | `blockboard_manufacture` | Include receipt/conditioning, core ripping and PVAc edge gluing, UF preparation, five-layer layup, both hot-press skin-bonding passes where used, cooling/conditioning, trimming, sanding, grading, packaging and pollution controls. Maintain stage meters within one foreground unit. | fao-farm-structures-1986; unido-panel-adhesives-1977 |
| b_upstream | `blockboard_manufacture` | Attach upstream delivered-input datasets or explicitly disclose missing coverage. No on-site fuel boiler, raw-log conversion or green-lumber kiln drying is inferred; a site with these operations needs expanded atomic inventories and source assessment. | usda-wood-handbook-2021 |
| b_emissions | `blockboard_manufacture` | Treat exported waste as technosphere transfer and residual outdoor emissions as elementary exchanges. Include evidenced biogenic CO2 in LCI regardless of LCIA accounting; imported heat/electricity emissions stay upstream. Direct wastewater discharge is outside this waste-to-treatment route and needs explicit species/medium rows. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blockboard_manufacture | Receipt through finished packed panel | required | Declared route only | foreground_production | 1 kg `finished_panel` |

The same panel crosses core/skin finishing/packaging stages inside one foreground unit. Stage intake/output, reject/rework, time, energy and moisture ledgers remain separate. Do not emit intermediate same-product exchanges with the reference UUID. Internal transfers have equal quantities at both stage endpoints before allocation. Core-strip axes define 0°; face/back axes 0° and crossband axes 90°. For each of four planar veneer bond interfaces record coated side(s), effective glue area, wet/dry spread, layup delay, press pressure, platen/glueline temperature and cure time. Record core edge-glue area, clamping and moisture loss separately. Sources: `fao-farm-structures-1986`, `unido-panel-adhesives-1977`.

### Process: Receipt through finished panel (`blockboard_manufacture`)

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`core_lumber`)

Receive kiln-dried pine/fir sawnwood; weigh net mass and measure dry-basis moisture before ripping and defect removal. Record individual species and incoming supplier boundary.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_materials; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fao-farm-structures-1986`; `usda-wood-handbook-2021`

###### Dried unbonded coniferous veneer sheets for face and back (`face_veneer`)

One incoming veneer-sheet exchange of the same declared coniferous species/specification for the two exterior layers; retain separate face/back uptake, thickness, moisture and grade records. Exclude already bonded decorative panels.

- Selected flow: Dried unbonded coniferous veneer sheets for face and back
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_materials; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fao-farm-structures-1986`; `usda-wood-handbook-2021`

###### Dried unbonded coniferous veneer sheets for crossbands (`cross_veneer`)

Two crossband layers of one declared coniferous species/specification. Record their own net intake and dimensions, not a combined face/core material stream.

- Selected flow: Dried unbonded coniferous veneer sheets for crossbands
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_materials; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `fao-farm-structures-1986`; `usda-wood-handbook-2021`

###### Supplied aqueous polyvinyl acetate (PVAc) wood adhesive (`pvac_glue`)

PVAc glue is one whole supplied aqueous wood-adhesive exchange, including its carrier water and formulation ingredients; record actual solids fraction s_P, water content and supplier formulation. Apply to strip edges, clamp and condition at room temperature. Do not count carrier water again as purchased water or substitute pure polymer for the whole glue. A whole-adhesive identity and supplier formulation must be verified before binding a UUID.

- Selected flow: Supplied aqueous polyvinyl acetate (PVAc) wood adhesive
- Flow property / unit: Mass / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_recipe; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `unido-panel-adhesives-1977`

###### Urea-formaldehyde resin (`uf_resin`)

Chosen skin-bonding route uses dry UF resin powder reconstituted on site. Record powder dry-solids fraction s_U from supplier certificate and received mass; water, hardener and filler are separate inputs. A purchased premixed aqueous UF adhesive requires its own verified identity/basis and is outside this recipe.

- Selected flow: Urea-formaldehyde resin `23e41b7b-0991-4cf7-8625-7a30d23bbb27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_recipe; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `unido-panel-adhesives-1977`

###### Dry ammonium chloride hardener (`hardener`)

Weigh dry NH4Cl, record purity and supplier instructions, then dissolve in separately metered mixing water. Do not infer dosage from a generic curing time.

- Selected flow: Dry ammonium chloride hardener
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_recipe; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `unido-panel-adhesives-1977`

###### Untreated coniferous wood flour filler (`wood_flour`)

Conditional UF filler input only when the declared formula actually uses this wood flour; weigh separately and record moisture. A wheat-flour or mineral filler is a different flow requiring its own identity and recipe; never substitute chips.

- Selected flow: Untreated coniferous wood flour filler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_recipe; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recipe`
- Sources: `unido-panel-adhesives-1977`

###### Tap water (`water`)

Record mixing and wash-water meters separately, aggregate external makeup only. Recycled wash water is an internal transfer, not another fresh-water input. Convert volume readings with measured/utility density; do not borrow the database screening density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_water; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `unido-panel-adhesives-1977`

###### Alternating current (`electricity`)

Route requires 1–35 kV grid delivery at the plant meter. Include ripping, dust extraction, core clamping, mixing, presses, trimming, sanding and packing auxiliaries. Sum distinct meter circuits and reconcile with site billing; multiply metered kWh by 3.6 for MJ.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_energy; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Purchased net hot-water heat delivered to press circuit (`heat`)

Use supplier-defined net delivered heat across the plant supply/return boundary. Record mass-flow, supply/return temperature, pressure, enthalpy method and losses. Background definition must equal that boundary; an MJ property alone does not establish compatibility. No on-site boiler in this route.

- Selected flow: Purchased net hot-water heat delivered to press circuit
- Flow property / unit: Net delivered thermal energy; unit group unresolved / MJ
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_heat; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`pe_film`)

When film is used, weigh the delivered LDPE film per saleable lot; exclude it from reference panel mass. Record scrap and reuse without counting reused film twice.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_pack; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

###### Steel baling band (`steel_strap`)

When strapping is used, weigh steel bands per lot, including fasteners only if integral to the same supplied band; separate other packaging identities. This selected UUID applies only when supplier composition matches 99% Fe and 1% C and the supply route is recycling and reprocessing using mechanical decomposition and melting. Retain supplier composition certificates and route records; if composition or route is different or unknown, keep that actual exchange unresolved and verify a different identity before use. It is not a generic UUID for all steel straps. Exclude packaging from B.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_pack; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Lumber core plywood (`finished_panel`)

One accepted finished panel output at the factory gate, after conditioning, trimming, sanding and packing. Panel itself is uncoated. Net panel mass excludes all packaging; record same-product work in progress only in internal stage ledgers.

- Selected flow: Lumber core plywood `f7f7ecd7-5389-40e3-8900-6b543b416086`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `fao-farm-structures-1986`; `unido-panel-adhesives-1977`

##### Waste flows

###### sawdust waste (`clean_sawdust`)

Collect and weigh pre-gluing sawdust crossing to waste treatment, with measured moisture and destination; collected dust is not an air emission. Do not use this flow for resin-contaminated sanding dust.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_waste; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Offcut (`clean_offcut`)

Weigh solid offcuts from core-strip defect removal before gluing. Track material moisture and destination separately from powder.

Only actual non-agglomerated, untreated and unglued coarse wood offcuts belong to this row; keep moisture and recipient records, and verify their physical state and receiver/provider compatibility before treatment linkage. Do not substitute agglomerated fuel or captured powder.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_waste; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### UF/PVAc-bonded blockboard trimming waste (`bonded_trim`)

Weigh bonded panel trimmings and rejected panels sent to the same declared waste route; retain reason/condition records. Keep resin content, moisture and destination. No combustion within the foreground.

- Selected flow: UF/PVAc-bonded blockboard trimming waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_waste; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### UF/PVAc-contaminated blockboard sanding dust waste (`sanding_dust`)

Weigh captured sanding dust after bonding and record resin content, containment and waste destination. It is distinct from clean sawdust and emitted PM.

- Selected flow: UF/PVAc-contaminated blockboard sanding dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_waste; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### UF adhesive equipment-wash wastewater to off-site treatment (`glue_wastewater`)

Measure UF wash wastewater discharged to treatment; record water and solids separately, COD, formaldehyde concentration and destination. This row is a technosphere waste transfer, not direct discharge to water.

- Selected flow: UF adhesive equipment-wash wastewater to off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_water; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Uncured UF resin-mix residue waste (`glue_residue`)

Separately weigh uncured UF glue leftovers after subtracting internal return to the same recipe; record solids and treatment destination. PVAc leftovers are a different stream; core-glue tools use dedicated dry collection, with no PVAc rinse discharged in this route.

- Selected flow: Uncured UF resin-mix residue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_waste; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `unido-panel-adhesives-1977`

###### PVAc edge-gluing adhesive residue waste (`pvac_residue`)

Separately weigh PVAc leftovers and squeeze-out sent to waste treatment, distinguish from UF residue and wash water; retain actual solids fraction.

- Selected flow: PVAc edge-gluing adhesive residue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_waste; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `unido-panel-adhesives-1977`

##### Elementary flows

###### formaldehyde (`formaldehyde`)

Measure formaldehyde at press/conditioning exhausts and fugitive boundaries; use mass emission, never a finished-panel chamber concentration as kg emission.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### methanol (`methanol`)

Include methanol when resin certificate or screening identifies it; use speciated outlet measurement. Missing tests are unknown, not zero.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### particles (PM2.5) (`pm25`)

Measure residual emitted PM2.5 after dust controls at cutting/sanding outlets and fugitives; exclude captured dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### particles (PM2.5 - PM10) (`pm_between`)

Use the non-overlapping 2.5–10 micrometre fraction; when cumulative PM10 and PM2.5 are measured on the same basis, subtract PM2.5 from PM10.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### particles (> PM10) (`pm_over10`)

Use the above-10 micrometre fraction only; derive from same-basis total PM minus cumulative PM10 if supported. Never sum cumulative PM10 with the two fine fractions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### water vapour (`water_vapour`)

Determine net water-vapour release during core conditioning, UF hot curing and panel conditioning by exhaust measurements and a reaction-aware H2O ledger. Separate incoming air humidity, wood moisture, glue carrier water, added water, retained/exported H2O and actual chemical H2O formation/consumption; reaction water is not another purchased-water input. Use cp_recipe and cp_emissions for measured or source-supported same-lot reaction extent; do not infer a water yield from resin mass or force a balance residual into vapour. Source: `frihart-wood-joining-2023`.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `frihart-wood-joining-2023`

###### carbon dioxide (biogenic) (`co2_bio`)

Include any evidenced direct wood-carbon oxidation/degradation as biogenic CO2; this non-combustion route does not assume a boiler. Absence requires a carbon/operation record, not a carbon-neutral LCIA convention.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### carbon dioxide (fossil) (`co2_fossil`)

Record any evidenced direct resin/fossil-carbon oxidation separately from wood carbon. Purchased electricity/heat supply emissions belong to their background, not this direct exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: x_norm = sum(q_lot) / B; collect actual exchange using cp_emissions; B is accepted net panel mass from cp_output.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_physical | `blockboard_manufacture` | Keep unallocated total-mass and elemental C/H/O ledgers for all stages, with fossil/biogenic carbon origin retained; reactions have zero net elemental generation. Track H2O, dry wood and adhesive species separately with measured or supported formation/consumption terms, not assumed conserved species. Internal transfers cancel only at aggregated boundary. Physical panel/waste quantities are never multiplied by environmental allocation shares. | usda-wood-handbook-2021; frihart-wood-joining-2023 |
| a_waste | `blockboard_manufacture` | Base route has one saleable panel product and exported treatment wastes: assign production burdens to accepted panels and include waste-treatment burdens without avoided-product credit. Internal rework remains within the same ledger. If residues become saleable co-products, their product identities and measured physical outputs must be added before choosing a documented causal allocation or an explicitly justified alternative; keep that burden ledger separate from mass balance. Do not relabel waste UUIDs as products. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | blockboard_manufacture | finished_panel | foreground_record | lot; species/layer construction; final moisture; net accepted mass B; rejected mass; package tare | Calibrated weighing after conditioning; reconcile grading/acceptance and packing records for same lot. | kg | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_materials | blockboard_manufacture | core_lumber; face_veneer; cross_veneer | foreground_record | lot/species/grade; wet mass; sample wet/oven-dry mass; layer dimensions; axis; scrap; supplier start state | Weigh received inputs and stage usage; seal representative moisture samples, oven-dry/weigh to constant mass under documented method, reconcile stock and stage transfers. | kg | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_recipe | blockboard_manufacture | pvac_glue; uf_resin; hardener; wood_flour | foreground_record | component identity; weighed charge; batch number; solids/purity and test conditions; measured H2O/non-water volatiles; supplier formulation; same-lot pre/post-cure composition and reaction extent; G_H2O; C_H2O; uncertainty; glue area; wet/dry spread; core clamp; layup delay; platen/glueline temperature; pressure; dwell; bond test | Calibrated batch scales, supplier formulation/certificates and sampled solids/H2O tests; separate core edge glue from each of four veneer interfaces. Quantify actual foreground UF water formation/consumption by validated matched-lot chemical analysis or documented supplier-supported reaction stoichiometry applied to measured same-lot reaction extent under the recorded cure conditions. Separate upstream resin synthesis from foreground cure and evaporation; a generic reaction diagram, solids-loss test or total exhaust water alone does not establish reaction extent. Keep missing terms unknown; no default amount, complete-cure assumption or residual-derived yield. Record press cycles and accepted glue bond. | kg | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_water | blockboard_manufacture | water; glue_wastewater | foreground_record | fresh/returned water mass; meter volume; density; wastewater quantity; water/solids; COD; formaldehyde; destination | Meter fresh mixing/washing branches; collect wastewater discharge and analysis, reconcile tank stocks and internal recycling. | kg | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_energy | blockboard_manufacture | electricity | foreground_record | circuit; kWh/MJ; voltage; bill; hours; stage; shared-meter apportionment | Read calibrated meters by non-overlapping circuit and reconcile total electricity with supplier bill. | MJ | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_heat | blockboard_manufacture | heat | foreground_record | hot-water mass; supply/return temperature/pressure; enthalpy reference/state and h units (MJ/kg or kJ/kg); net MJ; supplier losses; background boundary | Calibrated heat meter or mass-flow/enthalpy integration at supply/return; preserve actual supplier h units/reference/state, convert kJ to MJ explicitly and verify supplier/background net-delivery compatibility before use. | MJ | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_pack | blockboard_manufacture | pe_film; steel_strap | foreground_record | material; lot; packaging mass; reuse; scrap; package tare; steel-band supplier composition (99% Fe, 1% C); mechanical decomposition/melting recycling route | Weigh each packaging material separately, reconcile issue/return records with accepted panel lots; verify the selected steel-band composition/route with supplier certificates; unmatched or unknown supply requires unresolved/alternative identity. | kg | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_waste | blockboard_manufacture | clean_sawdust; clean_offcut; bonded_trim; sanding_dust; glue_residue; pvac_residue | foreground_record | stream; wet/dry mass; moisture/solids; resin content; recovered versus emitted; stock; sales status; treatment destination | Dedicated bins and scales per atomic stream; waste consignment and analysis records; subtract same-period internal returns only, never off-site treatment. | kg | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |
| cp_emissions | blockboard_manufacture | formaldehyde; methanol; pm25; pm_between; pm_over10; water_vapour; co2_bio; co2_fossil | foreground_record | species/source; outlet; normal flow; concentration; humidity; sampling conditions; hours; control device; fugitives; PM cut fractions; non-detect limit; carbon origin; inlet/outlet air humidity and flow; condensate; retained/exported H2O; matched-lot G_H2O/C_H2O from cp_recipe; water-specific method and uncertainty | Representative outlet/fugitive sampling and time integration after controls; preserve species and disjoint particle cuts. Quantify net process vapour with matched inlet/outlet humidity-flow and condensate records, then reconcile the reaction-aware H2O ledger including actual UF water formation/consumption from cp_recipe; avoid duplicate carrier water or reaction water. Total mass loss includes non-water volatiles and is not an H2O assay. Record missing terms/species as unknown rather than forcing closure. Demonstrated absent oxidation requires operating/carbon evidence. | kg | Every lot; continuous utility logs; representative emission campaign | Same declared representative production period | One declared plant and matched route/lot | per 1 kg reference flow | Calibration; primary records; sampling/analysis; supplier definitions; stock/acceptance reconciliation |

For every protocol, sum the actual external exchange q_lot over the same period and divide by accepted net panel mass B from cp_output. cp_output collects and sums B itself; stage intake/output records remain separate and unallocated. This is the aggregation underlying every per-1-kg field above.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all external exchanges | x_norm = sum(q_lot) / B; B = sum(accepted net panel mass); B > 0 | q_lot; B; cp_output | x_norm |  |
| dry_wood | wood mass ledger | m_od = m_wet / (1 + u); m_water = m_wet - m_od | m_wet; u; cp_materials | m_od; m_water | usda-wood-handbook-2021 |
| glue_solids | adhesive ledger | m_s = m_supplied * s; m_ns = m_supplied * (1 - s); m_H2O = m_supplied * w_H2O, where w_H2O is measured or verified supplier water mass fraction, not automatically 1 - s. Record method/conditions and non-water volatile fraction; m_s is supplied tested solids, not cured-resin mass. | m_supplied; s; w_H2O; cp_recipe | m_s; m_ns; m_H2O |  |
| electricity_units | electricity | E_MJ = 3.6 * E_kWh | E_kWh; cp_energy | E_MJ |  |
| net_heat | heat | H_net = sum(m_hotwater * (h_supply - h_return)); m_hotwater in kg, both h in MJ/kg, H_net in MJ. For supplier h in kJ/kg use H_net = sum(m_hotwater * (h_supply - h_return)) / 1000. Supply/return use the same actual supplier enthalpy reference basis and net-delivery boundary, with each stream's measured temperature/pressure state. | m_hotwater; h_supply; h_return; cp_heat | H_net |  |
| emission_mass | individual emitted species | m_i = sum(c_i * V_normal * dt) + m_fugitive_i; convert reported concentration and time units explicitly | c_i; V_normal; dt; m_fugitive_i; cp_emissions | m_i |  |
| pm_fractions | pm25; pm_between; pm_over10 | m_pm_between = m_PM10 - m_PM2.5; m_pm_over10 = m_totalPM - m_PM10; same-basis cumulative measurements only; negative differences require review | m_PM2.5; m_PM10; m_totalPM; cp_emissions | m_pm_between; m_pm_over10 |  |
| physical_balances | unaltered process ledgers | For total mass and elemental C/H/O separately: opening stock + all material boundary intake = closing stock + panel + exported residues + material emissions; include evidenced atmospheric uptake and packaging transfers, retain fossil/biogenic C origin, and set net chemical generation of conserved elements to zero. Report signed residuals and uncertainty; never adjust measured quantities or invent a closure tolerance. | cp_materials; cp_recipe; cp_water; cp_pack; cp_waste; cp_emissions; cp_output | total-mass/elemental-C/H/O residuals | frihart-wood-joining-2023 |
| reactive_species | H2O and dry-material species ledgers | For each species X: opening X + external X intake + G_X = closing X + panel X + exported X + emitted X + C_X; G_X/C_X are actual foreground formation/consumption in kg, measured or supported by same-lot reaction extent, cp_recipe. For H2O include actual UF cure reaction water, wood moisture, glue carrier water, added water, air humidity and retained/liquid/vapour outputs on the same boundary. For dry wood/adhesive species track chemical conversion and non-water volatile losses separately from H2O. Elemental C/H/O redistribution is not net elemental generation; upstream resin-production water is not foreground generation. Report residual/uncertainty without default G_X/C_X, yield or assumed complete cure; missing reaction terms make closure inconclusive. | cp_materials; cp_recipe; cp_water; cp_waste; cp_emissions; cp_output | reaction-aware H2O/dry-species residuals | frihart-wood-joining-2023 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Verify material/species/state/route/property/unit/medium; blank UUID is an unresolved identity, not permission to substitute an adjacent product. | Supplier specification and verified direct record |
| dq_recipe | core and skin glue | Current supplier-defined whole-adhesive formulation, actual solids/H2O/purity and bond acceptance; historical literature supports route only. Verify foreground UF G_H2O/C_H2O and dry-species conversion using matched-lot measurements or supported stoichiometry with measured same-lot reaction extent; no inferred universal yield. | unido-panel-adhesives-1977; frihart-wood-joining-2023; supplier/analytical records |
| dq_scope | period/site/basis | All raw quantities share period and accepted B; report missing meters/tests, non-detect limits, seasonal/species/configuration changes and survey exclusions. No empirical range is imposed from another manufacturing route. | Primary records and boundary disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | `finished_panel` | Exactly one product output matches the reference row/UUID; 1 kg net panel output, all required qualifiers and measured moisture are present. Intermediate same-product transfers stay inside the aggregate. | fao-farm-structures-1986 |
| v_route | `blockboard_manufacture` | Reject incompatible core, grain directions, glue route or integrated combustion/drying boundary. Confirm four veneer interfaces, core edge glue and actual press sequence, recipe/solids and acceptance records. Classification label alone cannot establish applicability. | fao-farm-structures-1986; unido-panel-adhesives-1977 |
| v_measurement | `blockboard_manufacture` | Normalize actual external quantities by the same B; retain unallocated total-mass/elemental C/H/O and reaction-aware species ledgers separately from burdens. Verify actual UF H2O formation/consumption and dry-species conversion evidence; never treat water or supplied dry solids as independently conserved through cure. Missing reaction extent/analytical evidence is inconclusive, not zero water generation or a forced vapour residual. Confirm supplier/background net-delivery heat basis, h units/reference/state and any kJ-to-MJ conversion; unsupported relationships and unresolved identities remain inconclusive. | usda-wood-handbook-2021; frihart-wood-joining-2023 |
| v_emissions | `blockboard_manufacture` | Verify individual species, outdoor-air medium and disjoint PM fractions; do not sum cumulative cuts or count collected dust as air emissions. Reconcile net water vapour against inlet/outlet humidity, condensate, retained/exported H2O and supported foreground reaction water, without double counting. Retain evidenced biogenic CO2; absence/test gaps and cut-offs must be supported explicitly. | frihart-wood-joining-2023 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared interior five-layer coniferous strip-core PVAc/UF route with matched upstream inputs and all unresolved identities/measurements closed |
| excluded_use | Full CPC3142 coverage, mixed cores/adhesives, structural/lifetime comparisons, marine/exterior use, all-veneer datasets or numerical defaults from other sectors |
| required_metadata | Plant/time/route/species/layers/recipe, net B/moisture, suppliers, utility definitions with h units/reference/state, actual UF reaction extent and G_H2O/C_H2O evidence, reference flow, allocation and all exclusions |
| required_quality_disclosure | Sampling/meter calibration, identity gaps, unsupported net heat, total-mass/elemental and reactive-species balance residuals, missing reaction measurements, co-product status, emission coverage and limits; foreground-only versus linked upstream completeness |
| update_trigger | Core/species, adhesive formulation/solids, press/conditioning, utility source/basis, waste destination, supplier or emission measurement changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-notes-2025 | official_guidance | UN CPC Version 3.0 Explanatory Notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-10-12 | pp139–140: title versus explanation conflict; classification context only, no process coefficients |
| fao-farm-structures-1986 | official_guidance | FAO Farm structures in tropical climates, 1986; chapter 3, Other Manufactured Boards; https://www.fao.org/4/s1250e/s1250e04.htm; retrieved 2026-10-12 | Strip core, paired veneers and cross-grain construction; use for geometry only, no universal dimensions or strength values adopted |
| unido-panel-adhesives-1977 | literature | J. Reinhardt, Industrial application and formulation of synthetic resin adhesives in the wood based panel industry, UNIDO ID/WG.248/9, 10 October 1977; https://downloads.unido.org/ot/47/90/4790807/00001-10000_07656.pdf; retrieved 2026-10-12 | §2.2 printed p15; §3.1 printed pp24–30: PVAc strip bonding, separate thermoset skin adhesives and mix components; historical route evidence, no modern recipe/durability/emission default |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282, 2021; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; retrieved 2026-10-12 | Chapter4 dry-basis moisture and chapter13 oven-drying method, printed pp4–1 and13–2; no species moisture, density or kiln-energy default transferred |
| frihart-wood-joining-2023 | handbook | C. R. Frihart, J. Konnerth, A. Frangi, C. Gottlöber, R. Jockwer and F. Pichelin, Joining and Reassembling of Wood, chapter 14 in Springer Handbook of Wood Science and Technology, 2023; DOI 10.1007/978-3-030-81315-4_14; USDA-hosted original https://research.fs.usda.gov/download/treesearch/66341.pdf; retrieved 2026-10-14 | §14.2.1 Amino-Type Adhesives, printed pp720–723 (PDF pp14–17), Fig14.13 and Chemistry of Cure with Conditions and Interaction with Wood: UF condensation/cure and water loss; qualitative chemistry only, no supplier recipe, reaction extent or numerical water yield adopted |
