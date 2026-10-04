---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.nonwoven-needle-punching-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nonwoven flat needle-punching machinery manufacture

## 1. Scope and Applicability

This PCR covers manufacture of new complete motor-driven flat needle-punching machines that mechanically consolidate a fibre web using reciprocating barbed felting needles. Pre-needling and finish/main-needling, single-sided and top/bottom or double-zone machines, and vertical versus elliptical beam drives are separately declared configurations. Manufacture begins with documented stock/parts received at the reporting site and ends with factory acceptance at the declared dispatch gate. This is a foreground receipt-to-dispatch module; complete cradle-to-gate claims require matching upstream links and coverage disclosure.

Exclude fibre opening/carding, crosslapping/web formation, thermal/chemical bonding, hydroentanglement, external drafting/calendering/winding equipment, complete production lines, circular/endless felt machines, special fork/crown-needle velour/structuring machines, tufting/sewing/knitting, separately sold boards/needles and spare parts, used/refurbished machines, customer mill installation/use, fabric production, maintenance and end of life. Integral feed/delivery, dedicated options, drive/control and retained first fills belong only when in the declared machine delivery. Manufacturer examples establish possible configurations, not a universal route, needle pattern, net weight, lifetime or manufacturing intensity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.nonwoven-needle-punching-machinery |
| classification_refs | CPC 3.0 44629, Other machinery for textile and apparel production n.e.c.; narrower flat needle-punching manufacture boundary, classification context only |
| covered_products | New complete flat pre/main needle-punching machines with barbed felting needles and declared reciprocating drive |
| excluded_products | Other bonding/web-forming equipment, structuring/endless felt machines, separate parts and fabric-production services |
| representative_product | One serialized accepted beam/board/drive configuration with measured net M, no assumed per-machine mass |
| production_route | Actual conditional frame/precision preparation and finishing, required needle-zone, drive/control integration and factory acceptance; web trial and packaging when present |
| market_state | Accepted complete needleloom at declared factory dispatch gate, integral modules and first-fill completeness defined |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the configured complete flat nonwoven needle-punching machine |
| How much | 1 kg net accepted complete machine, converted from per-machine records with measured M |
| How well | Document drawing-specific beam/needle/plate alignment, timing, drive and safety acceptance; no equal-mass fabric quality or throughput equivalence |
| How long or cycle | One manufacture and factory acceptance cycle; no imposed machine or needle life |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other machinery for textile and apparel production n.e.c. `5d83540a-6bb1-4bdb-b4b8-b490f6af158e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model; serial and drawing/configuration revision; flat pre/main needling function and intended web; working width; needling direction; zone/beam/board count and arrangement; vertical/elliptical trajectory and guide/drive architecture; barbed needle gauge/type/pattern and installed count; bare versus needled board supplier scope; bed/stripper hole pattern and installed gap/stroke acceptance; integral feed/delivery and drive/control/guards/interlocks; included fan/pneumatic/board-change options; supplier module completeness; retained oil/grease formulation; transport-disassembled integral parts; measured net M, scale calibration and tare; site/period, actual manufacturing route, gate and unlinked upstream stages |

Declare every qualifier in dataset metadata, process notes or reference-flow comments. The public manufactured textile-machinery flow is broader; mandatory qualifiers restrict it to this machine boundary. M includes the complete accepted configuration, installed needles/modules and retained first fills, plus separately weighed integral parts dismantled for transport. Exclude trial web/fabric, operator, shipping packaging, extra spare needles/boards and external utilities. Brochure working width, stroke speed, stitch density, oil-change interval and catalogue shipping mass do not establish net M or manufacturing consumption.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `gas_volume` | curing_gas | Volume | m3 | Retain actual pipeline gas volume and metered composition/reference pressure/temperature. Actual internal reference property 1 is Volume; alternate Mass meanValue 1 is not density. |
| `energy_conversion` | electricity | Net calorific value | MJ | Convert measured kWh using verified unit-group factor 3.6 MJ/kWh; declare supply voltage/geography/provider. Installed motor kW is not consumed energy. |
| `liquid_mass` | liquid exchanges | Mass | kg | Weigh actual liquid formulation or convert volume with measured density at declared composition/concentration/temperature; neat ingredients are not premixed products. |
| `air_volume` | compressed_air | Volume | m3 | Retain actual compressed-air meter pressure/temperature and supplier basis; no substitution of ambient-air resource or kWh without measured compressor records. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased documented stock and finished assemblies received at reporting manufacturing site |
| starting_condition_role | Foreground receipt-to-dispatch manufacture module |
| product_classification_scope | Complete flat barbed-needle mechanical consolidation machine, not nonwoven fabric or full line |
| recursive_input_rule | Do not generate a supplied complete needleloom/module recursively from this same reference output; disclose prior completion and omit its finished internal operations |
| upstream_dataset_requirement | Match stock/components, needle type, module completeness, technology, supply state/geography and property; disclose unlinked upstream before a cradle-to-gate claim |
| disclosure | Function/configuration, gate/site/period, actual make-or-buy route, first fill and M, factory trial, component exclusions and identity/quantity gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | Include actual manufacturing, installation, lubrication, rework and attributable factory acceptance. Exclude mill production/use, installation services, distribution after gate, maintenance and end of life. Customer fabric-production settings and energy intensities cannot substitute for factory machine manufacture. |  |
| `boundary_components` | supplier assemblies | Count configured bare boards plus separately fitted needles or complete needled boards once. Likewise avoid drive/guide, prefilled lubricant and integral control duplication. Central mill air/extraction and external forming/finishing are excluded from machine mass. | `andritz-needlepunch` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Frame and enclosure fabrication | conditional | The specified frame/enclosure is made at the reporting site. | foreground | one accepted configured machine, normalized with M |
| `precision` | Precision drive and perforated-plate preparation | conditional | Drive parts, needleboards, bed or stripper plates are machined in the foreground. | foreground | one accepted configured machine, normalized with M |
| `finishing` | Conditional cleaning and surface finishing | conditional | Declared parts are cleaned or coated in this foreground. | foreground | one accepted configured machine, normalized with M |
| `mechanical` | Needle-zone and reciprocating-drive integration | required | Every complete configured flat needle-punching machine. | foreground | one accepted configured machine, normalized with M |
| `drive_controls` | Electrical drives, controls and installed options | required | Every configured motor-driven needleloom. | foreground | one accepted configured machine, normalized with M |
| `acceptance` | Factory assembly, lubrication and acceptance | required | Every accepted complete machine. | foreground | one accepted configured machine, normalized with M |
| `web_trial` | Conditional factory fibre-web trial | conditional | An actual machine undergoes a fibre-web-fed factory acceptance trial. | foreground | one accepted configured machine, normalized with M |
| `packing` | Dispatch packaging | conditional | Actual packaging crosses the declared dispatch gate. | foreground | one accepted configured machine, normalized with M |

Actual conditional frame/precision preparation and surface finishing feed needle-zone/drive integration and factory acceptance. Web-fed trials and packaging are conditional. Bought-in finished modules bypass constituent operations. Every card applies only when its exact material and supplier boundary occur, including cards in required stages. Reconcile the full configured BOM and add each omitted actual component, reagent, utility and demonstrated waste/emission before dataset completion.

### Process: Frame and enclosure fabrication (`fabrication`)

Cut, form and join drawing-specific sheet/sections for the actual needleloom frame. Cast frames or bought-in complete frames take their actual supplied route; do not assume casting or welding at this site. Self-shielded wire is one conditional weld procedure; other actual wire, each shielding gas, electrode and residue require separate cards.

#### Inputs

##### Product flows

###### Uncoated cold-rolled low-carbon steel sheet (`steel_sheet`)

Only documented frame/enclosure sheet, with grade/thickness and measured issue-return balance.

- Selected flow: Uncoated cold-rolled low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dilo-loom`

###### Flux Cored Wire (`self_shield_wire`)

Only actual self-shielded carbon-steel flux-cored wire matching the weld procedure; other shielding methods need distinct wire/gas rows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dilo-loom`

###### Grid alternating-current electricity at factory intake (`fabrication_electricity`)

Only attributable metered manufacturing/factory trial electricity at declared voltage/geography/provider; no customer fabric-production use.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dilo-loom`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Only clean segregated untreated uncoated steel offcuts exported after internal reuse; record destination.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dilo-loom`

### Process: Precision drive and perforated-plate preparation (`precision`)

Record actual turning/milling/drilling/grinding of eccentric shafts, bearing seats, board holes and plate interfaces, with drawing-specific tolerances and hole patterns. DILO documents needleboard machining at Eberbach; this does not mandate a tool brand or in-house route for other plants. Purchased finished boards, beams and drives bypass their constituent machining. Do not assume felting-needle wire forming, heat treatment or barb cutting inside the machine assembly site.

#### Inputs

##### Product flows

###### Cold-finished carbon-steel eccentric-shaft bar blank (`steel_bar`)

Only actual internal shaft manufacture, grade/state and measured blank mass; omit for bought-in finished drives.

- Selected flow: Cold-finished carbon-steel eccentric-shaft bar blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dilo-loom`

###### Grey-cast-iron needleloom frame casting blank (`cast_blank`)

Only documented grey-iron blank machining, with alloy and accepted part mass; foundry work not included unless performed.

- Selected flow: Grey-cast-iron needleloom frame casting blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dilo-loom`

###### Formulated mineral-oil-in-water machining emulsion (`cutting_emulsion`)

Only supplied premix with actual SDS/concentration and measured additions; separately mixed ingredients need their own rows.

- Selected flow: Formulated mineral-oil-in-water machining emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dilo-loom`

###### Grid alternating-current electricity at factory intake (`precision_electricity`)

Only attributable metered manufacturing/factory trial electricity at declared voltage/geography/provider; no customer fabric-production use.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dilo-loom`

#### Outputs

##### Waste flows

###### Steel scrap, machining chips (`steel_chips`)

Only segregated clean untreated steel machining chips exported after internal recovery; oily or mixed-alloy swarf separate.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dilo-loom`

###### Segregated grey-cast-iron machining chips (`iron_chips`)

Only actual exported grey-iron chips, with contamination and receiving outlet documented.

- Selected flow: Segregated grey-cast-iron machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dilo-loom`

###### Spent coolant (`spent_emulsion`)

Only actual spent mineral-oil-in-water machining emulsion sent to off-site treatment, with composition/concentration/contamination and transfer receipt; no direct environmental water discharge.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dilo-loom`

### Process: Conditional cleaning and surface finishing (`finishing`)

Record actual cleaning/coating route and SDS; powder coating is a conditional formulation requiring foreground confirmation, not a universal needleloom finish. Bought-in finished parts bypass it. Each actual degreaser, abrasive, pretreatment chemical and wet-coating component requires a separate card. Meter actual curing and cleaning resources; captured residues are not automatic air/water emissions.

#### Inputs

##### Product flows

###### Powder Coating (`powder_coating`)

Only documented supplied dry powder coating, exact resin/grade, issue-return balance and cured retention; no universal recipe.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources:

###### Process Water (`cleaning_water`)

Only treated industrial cleaning water actually supplied; internal recirculation is not fresh water or resource withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources:

###### natural gas in the gaseous state (`curing_gas`)

Only actual pipeline gaseous natural gas for a documented curing burner; retain composition and meter reference pressure/temperature.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources:

###### Grid alternating-current electricity at factory intake (`finishing_electricity`)

Only attributable metered manufacturing/factory trial electricity at declared voltage/geography/provider; no customer fabric-production use.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources:

#### Outputs

##### Waste flows

###### Aqueous metal-part cleaning effluent sent to treatment (`cleaning_effluent`)

Only exported actual cleaning effluent, dissolved/entrained composition and treatment outlet documented.

- Selected flow: Aqueous metal-part cleaning effluent sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources:

###### Captured cured thermoset powder-coating residue (`powder_residue`)

Only collected actual cured coating residue; reusable uncured overspray is internal recovery.

- Selected flow: Captured cured thermoset powder-coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources:

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only attributable measured fossil CO2 from actual factory curing combustion emitted to air-unspecified subcompartment; no universal occurrence or invented factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources:

### Process: Needle-zone and reciprocating-drive integration (`mechanical`)

Install the configured frame, needle beam/board, barbed felting needles, bed and stripper plates, beam guidance and actual crank/eccentric linkage, feed and delivery mechanisms. Record one-sided, top/bottom or double-zone arrangement and vertical/elliptical path separately. Single/two beams are alternatives, not a fixed universal count. Match needle patterns to plate holes, verify mounting/alignment and actual clearance, stroke and timing against drawings. Supplied fully needled boards and integrated drive assemblies must not have their needles or constituent parts purchased again.

#### Inputs

##### Product flows

###### Finished needleloom frame assembly (`frame`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers.

- Selected flow: Finished needleloom frame assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Needleloom reciprocating needle-beam assembly (`needle_beam`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Declare actual beam material and guide inclusion; vertical and elliptical paths separate.

- Selected flow: Needleloom reciprocating needle-beam assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Bare perforated needleloom needleboard (`needle_board`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Declare board material, hole pattern and fitted-needle exclusion.

- Selected flow: Bare perforated needleloom needleboard
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Finished barbed steel felting needle (`felting_needle`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only installed barbed felting needles; collect gauge, barb form/count and supplied mass; sewing or fork/crown structuring needles are different.

- Selected flow: Finished barbed steel felting needle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Perforated needleloom bed-plate assembly (`bedplate`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Match actual needle hole pattern and declared board position.

- Selected flow: Perforated needleloom bed-plate assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Perforated needleloom stripper-plate assembly (`stripper_plate`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Declare plate gap/interface and quick-exchange inclusion.

- Selected flow: Perforated needleloom stripper-plate assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Needleloom eccentric-drive shaft assembly (`eccentric_shaft`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual installed eccentric route; no fixed crank/beam count.

- Selected flow: Needleloom eccentric-drive shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Needleloom connecting-rod assembly (`connecting_rod`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual configured link, with guide/bearing inclusion.

- Selected flow: Needleloom connecting-rod assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Needleloom web-feed roller assembly (`feed_roller`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Integral feeder only; separate crosslapper excluded.

- Selected flow: Needleloom web-feed roller assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Needleloom web-delivery roller assembly (`delivery_roller`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Integral delivery only; external calender/winder excluded.

- Selected flow: Needleloom web-delivery roller assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Steel deep-groove ball bearing (`ball_bearing`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Actual deep-groove construction only.

- Selected flow: Steel deep-groove ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Vulcanized-rubber needleloom transmission belt (`drive_belt`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual drive belt; conveyor belt is a different exchange.

- Selected flow: Vulcanized-rubber needleloom transmission belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Steel screw (`steel_screw`)

Only independently issued actual steel screws; nuts, bolts and washers are separate components.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

###### Grid alternating-current electricity at factory intake (`mechanical_electricity`)

Only attributable metered manufacturing/factory trial electricity at declared voltage/geography/provider; no customer fabric-production use.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `dilo-range`

### Process: Electrical drives, controls and installed options (`drive_controls`)

Install declared motor/drive, electrical cabinet, harness, interlocks and sensing. Record eccentric/main-drive synchronization and actual speed/position feedback where fitted. ANDRITZ identifies intermittent air blowing, suction and pneumatic board-centering as optional; these do not impose central mill air/extraction plants in machine M. Dedicated fan/cylinder modules belong only when included in the declared delivery. Add exact independently supplied pneumatic components and actual factory compressed-air exchange if used.

#### Inputs

##### Product flows

###### Three-phase squirrel-cage induction drive motor (`motor`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual independently supplied installed modules; extraction/centering are conditional options.

- Selected flow: Three-phase squirrel-cage induction drive motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Dedicated needleloom controller module (`controller`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual independently supplied installed modules; extraction/centering are conditional options.

- Selected flow: Dedicated needleloom controller module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Insulated copper needleloom wiring harness (`harness`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual independently supplied installed modules; extraction/centering are conditional options.

- Selected flow: Insulated copper needleloom wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Needleloom drive rotary-encoder module (`encoder`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual independently supplied installed modules; extraction/centering are conditional options.

- Selected flow: Needleloom drive rotary-encoder module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Dedicated centrifugal needleloom extraction fan (`extraction_fan`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual independently supplied installed modules; extraction/centering are conditional options.

- Selected flow: Dedicated centrifugal needleloom extraction fan
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Needleboard centering pneumatic cylinder assembly (`pneumatic_cylinder`)

Only the named independently supplied finished assembly; document actual material, drawing revision and measured mass. Omit supplier-included constituents or internal transfers. Only actual independently supplied installed modules; extraction/centering are conditional options.

- Selected flow: Needleboard centering pneumatic cylinder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Variable frequency drive (`drive_inverter`)

Only independently supplied actual variable-frequency drive with power electronics, enclosure and heat sink; verify rating/completeness and avoid drive-cabinet duplication. Public identity is expert-estimated purchased component, not a manufacturing intensity.

- Selected flow: Variable frequency drive `c14b641c-8fbe-40c4-843b-3cc9b0faeff3`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Compressed air supplied for factory pneumatic option testing (`compressed_air`)

Only actually metered factory test air with pressure, temperature and supply scope; not natural air resource or mill operating air.

- Selected flow: Compressed air supplied for factory pneumatic option testing
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

###### Grid alternating-current electricity at factory intake (`drive_controls_electricity`)

Only attributable metered manufacturing/factory trial electricity at declared voltage/geography/provider; no customer fabric-production use.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `andritz-needlepunch`

### Process: Factory assembly, lubrication and acceptance (`acceptance`)

Verify configured BOM, needle/board mounting, reciprocating path, plate alignment and clearance, guide condition, first-fill lubrication, feed/delivery synchronization, guards/interlocks and actual run criteria. Include attributable factory runs and rework. Acceptance does not establish customer fabric quality, productivity, wear life or maintenance interval. Remove trial fibre before weighing accepted net M; retain installed first fills in M.

#### Inputs

##### Product flows

###### Lithium-soap mineral-oil bearing grease (`first_fill_grease`)

Only documented actual first fill; supplier-prelubricated bearings do not receive duplicate grease.

- Selected flow: Lithium-soap mineral-oil bearing grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `andritz-needlepunch`

###### Lubricating oil (`first_fill_oil`)

Only documented actual petroleum-derived mineral lubricating oil formulation first fill for the drive, with grade/additives and retained mass; PAO synthetic oil or fibre finish requires a different identity. Do not duplicate supplier-prefilled drives. The flow heating value is not used to calculate fill mass or factory energy.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `andritz-needlepunch`

###### Grid alternating-current electricity at factory intake (`acceptance_electricity`)

Only attributable metered manufacturing/factory trial electricity at declared voltage/geography/provider; no customer fabric-production use.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `andritz-needlepunch`

#### Outputs

##### Product flows

###### Other machinery for textile and apparel production n.e.c. (`finished_machine`)

Exactly 1 kg net accepted complete configured flat needle-punching machine including installed beam/board/needles, plates, integral drive/controls and retained first fills; test web, packaging and extra spares excluded.

- Selected flow: Other machinery for textile and apparel production n.e.c. `5d83540a-6bb1-4bdb-b4b8-b490f6af158e`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `andritz-needlepunch`

### Process: Conditional factory fibre-web trial (`web_trial`)

Record actual trial web composition, prior consolidation, moisture, measured issue/return balance and attributable power; this is factory machine acceptance only, not fabric-production service. The PET unbonded-web card is conditional, not a universal trial recipe. Other fibres/blends require exact separate cards. Internal recovered web is not repeated fresh issue; externally saleable trial fabric requires a co-product decision.

#### Inputs

##### Product flows

###### Unbonded virgin PET staple-fibre web for factory trial (`pet_web`)

Only actual specified trial web, fibre/origin, finish, basis weight/moisture and prior consolidation recorded; not finished nonwoven fabric.

- Selected flow: Unbonded virgin PET staple-fibre web for factory trial
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_web_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_web_trial`
- Sources: `groz-needles`

###### Grid alternating-current electricity at factory intake (`web_trial_electricity`)

Only attributable metered manufacturing/factory trial electricity at declared voltage/geography/provider; no customer fabric-production use.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_web_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_web_trial`
- Sources: `groz-needles`

#### Outputs

##### Waste flows

###### Waste Polyethylene terephthalate (`pet_trial_waste`)

Only segregated documented PET trial-web/fabric waste exported after internal recovery, with finish/contamination and receiving route recorded; do not substitute mixed-fibre or bonded multi-polymer waste. Waste PET identity includes textiles but provides no treatment process or recycling credit.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_web_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_web_trial`
- Sources: `groz-needles`

### Process: Dispatch packaging (`packing`)

Weigh each actual shipping support and protective film; exclude from machine M. Integral components dismantled for delivery remain in weighed machine completeness. Extra needleboards, spare needles and tooling sold separately are excluded. Additional packaging and returnable supports require material-specific cards and measured reuse records.

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`timber_support`)

Only actual kiln-dried sawn coniferous support, measured mass excluded from M.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Only actual LDPE protective film, thickness and measured mass, excluded from M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_order` | shared operations | Separate model, width, beam/zone, stroke path and fitted options by work order; directly assign issues, returns, meters, acceptance and rework first. For inseparable shared manufacturing resources use measured causal station time/load, share = order driver / sum of all covered order drivers; document causality, period and denominator. No unexplained equal-count allocation between different needling architectures. |  |
| `allocation_reuse` | scrap and trials | Internal recovered stock/web is a transfer, not repeated fresh input. Exported chips, residues and PET trial waste retain measured mass and destination without automatic avoided-product credit. Saleable trial fabric and other co-products require a separate decision and reviewed residual allocation after direct separation. Include rejected/reworked unit burdens in accepted output for the declared period and reconcile unfinished stock. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted net machine mass | weighing_record | model; configuration; serial number; accepted net mass M; scale_id; calibration; zone/beam/needleboard inclusion; installed_needles; retained_oil_grease; detached_integral_parts; trial_web_removed; packaging_tare | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or representative same-configuration batch | same manufacturing period as orders | declared factory/configuration | accepted net mass per machine | calibration, tare, completeness and acceptance receipts |
| `cp_fabrication` | fabrication | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Weigh actual grade/dimension stock issues, returns, frame mass and segregated offcuts; retain drawing revision, weld procedure, rework and station electricity. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Frame and enclosure fabrication | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_precision` | precision | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Record part/blank material and drawing revision, accepted mass, machining time, hole-pattern inspection, actual coolant formulation/concentration, additions/returns, separate chips and spent-fluid outlet, station meters. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Precision drive and perforated-plate preparation | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_finishing` | finishing | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Retain actual formulation, supplier scope, batch issue/return balance, coated mass, water, effluent and residue transfers, curing fuel meter state and attributable measured combustion emissions only if present. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Conditional cleaning and surface finishing | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_mechanical` | mechanical | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Trace width, needling direction, zone/beam/board configuration, guide/drive architecture, needle gauge/barb pattern and fitted count, bare/needled board scope, plate hole pattern and supplier module completeness to weighed BOM and installation inspection. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Needle-zone and reciprocating-drive integration | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_drive_controls` | drive_controls | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Record motor/drive rating, cabinet completeness, controller revision, encoder technology, fan/cylinder inclusion and measured net masses; retain wiring, interlock, synchronization and meter tests. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Electrical drives, controls and installed options | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_acceptance` | acceptance | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Collect serial-linked dimensional, timing, mounting, vibration and safety/functional acceptance records; measure actual first-fill oil/grease, test power and accepted net mass with calibration and tare. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Factory assembly, lubrication and acceptance | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_web_trial` | web_trial | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Weigh declared trial web, reusable returns, residual stock and exported trial waste separately; retain polymer/origin, bonding state, contamination, trial machine log and receiving outlet. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Conditional factory fibre-web trial | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_packing` | packing | each atomic exchange | measured_order_record | order; serial/configuration; drawing/material revision; needle_type_count; board_hole_pattern; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_air_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_web_return; waste_outlet; measured_emission_mass | Weigh material-specific packaging per dispatched configuration, reconcile returns/tare and document actual reusable support cycles. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Dispatch packaging | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For a homogeneous configured order reconcile fresh issues minus returns and stock changes, actual utilities and demonstrated emissions; apply documented shared shares then divide attributable totals by accepted count to obtain q_item. Divide by the same measured net delivery-state M. Keep gas/air m3 per kg at documented meter conditions, electricity MJ per kg and all mass exchanges kg per kg. Actual needle count supports BOM completeness; supplier packaging bundle count or a catalogue needle gauge is not a universal mass factor. Compatible net masses may vary: retain serial records and divide attributable totals by sum of accepted net masses; incompatible configurations stay separate. Unknown quantity is a gap, not zero.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | all components | Reconcile frame, beam/guides, bare or needled boards, needle mass/count, plates, crank/eccentric links, feed/delivery, drive/control and first fill to complete configured BOM and supplier scope. Avoid duplicate module internals and factory web stock in M. | configuration BOM, supplier scope and weighing |
| `quality_balance` | mass and utilities | Reconcile issues/returns, installed M, chip/residue transfers, retained/test lubricant, trial web and rework; retain scale/meter calibration and actual formulation/state conversions. Set site/configuration QA limits from measurements, not assumed yield, needle life or brochure speed/width. | weighing, stock, meter, trial and transfer receipts |
| `quality_coverage` | all processes | Declare period/geography, route and model coverage, actual conditional absence, outsourcing, identity/quantity gaps, uncertainty and upstream links. Manufacturer configuration/capability sources provide neither net M nor manufacturing exchange intensities. | order coverage and evidence register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require positive measured M and complete flat barbed-needle configuration with beam/zone/board, installed needles, plates, drive/control, integral delivery and retained first fill declared. Reject fabric output or machine-throughput service as reference substitution. |  |
| `validate_identity` | inventory rows | Each row must be one physically defined exchange with matching public identity, actual reference property, unit group, route and medium. Sewing needles are not felting needles; bare versus needled board scope cannot overlap; PAO lubricant is not mineral oil; technical compressed air is not ambient air withdrawal. Keep incompatible identities unresolved. |  |
| `validate_conversion` | inventory rows | Verify cp_mass and normalize_mass against the same accepted configuration/period and exact gas/air meter basis and electricity units. Reject duplicate purchased-module constituents, retained lubricant and recovered trial-web issues; no unknown-to-zero defaults. |  |
| `validate_emissions` | elementary rows | Fossil CO2 requires actual attributable factory combustion measurements and air-unspecified subcompartment. Other demonstrated substances/mediums need separate cards; machining, powder coating and trial web alone do not establish mandatory emissions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured flat nonwoven needle-punching machine foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream coverage |
| allowed_use | Manufacturing supply-chain modelling for matching function, beam/board/drive configuration, delivery state, gate, site and period |
| excluded_use | Nonwoven fabric output, lifetime service comparison, equal-mass needling performance, special structuring/endless felt machines and complete cradle-to-gate claims with missing upstream |
| required_metadata | Reference qualifiers, complete configuration BOM, measured M/first fills, supplied board/needle scope, actual operations/trials, site/period/gates, collection/allocation evidence and upstream links |
| required_quality_disclosure | Identity/quantity gaps, uncertainty, conditional absent rows, added BOM exchanges, source-edition limitations and unlinked supplier/upstream stages |
| update_trigger | Width/zone/beam/trajectory, board/needle/plate pattern, drive/control/options, supplier completeness, M/fills, finishing route, factory period/geography or evidence resolution changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `dilo-loom` | literature | [DILO Needlelooms](https://www.dilo.de/en/machines/needlelooms/) | Needlelooms paragraphs on single/double/elliptical beam arrangements and needleboard machining at Eberbach; snapshot 2026-10-04 UTC. Specific manufacturing/configuration example only; no universal board material, needle count, resource efficiency, machine mass or lifetime. |
| `dilo-range` | literature | [DILO Universal and high capacity needlelooms](https://www.dilo.de/en/machines/needlelooms/diloom-range/) | OU/OUG paragraph and specific-feature list: separate drives/plates in OU, rocker-arm guidance, central lubrication and board clamping; snapshot 2026-10-04 UTC. Architecture example only, not all manufacturers; marketed speed, size, longevity and exchange time are not requirements or conversion factors. |
| `andritz-needlepunch` | literature | [ANDRITZ Increase your success with needlepunch, PNT.np.02.eng.07.25](https://www.andritz.com/resource/blob/334550/378a2fd581935553eb728ad6da438e72/brochure-needlepunch-line-solutions-data.pdf) | ©2025 brochure, PDF/printed page 38, Needlelooms and optional-equipment column: oil-lubricated modules, board and bed/stripper configuration; suction, air blowing and pneumatic pinning explicitly optional. Product example only; no compulsory lubricant composition, oil-change/life interval, speed/width or manufacturing quantities. |
| `groz-needles` | literature | [Groz-Beckert Products and services for the Nonwovens industry, EN 02.2026](https://www.groz-beckert.com/mm/media/en/web/pdf/Felting.pdf) | PDF/printed page 11, felting/structuring portfolio: barbed felting needle geometry distinguished from fork/crown structuring tools for already consolidated webs. Tool/boundary evidence only; no exact steel grade, installed count, wear life, trial recipe or machine mass. |
