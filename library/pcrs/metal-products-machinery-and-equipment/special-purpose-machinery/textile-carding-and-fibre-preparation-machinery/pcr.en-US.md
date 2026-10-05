---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.textile-carding-and-fibre-preparation-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Textile carding and staple-fibre preparation machinery manufacture

## 1. Scope and Applicability

This PCR covers manufacture of new complete staple-fibre spinning-preparation machines: bale/tuft opening, cleaning, blending, carding into sliver, combing preparation/combing, and sliver drawing/coiling. Each function, machine and delivery configuration is a separate reference product. The foreground begins with documented stock/components received by the reporting manufacturer and ends with factory acceptance and the declared dispatch gate. It is a receipt-to-dispatch manufacturing module; a complete cradle-to-gate claim requires matched upstream coverage.

Exclude fibre extrusion/drawing/texturing, final yarn spinning/twisting/reeling/winding, warping/sizing, weaving/knitting, nonwoven web-forming/bonding lines, stand-alone parts and card clothing, central mill utilities, used/refurbished machines and fibre/yarn production services. Manufacturer examples establish possible configurations and historical capability, not compulsory operations, machine weights, lifetime or exchange quantities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.textile-carding-and-fibre-preparation-machinery |
| classification_refs | CPC 3.0 44611; this staple-fibre preparation manufacturing boundary is narrower than the classification; context only |
| covered_products | Complete new opening, cleaning, blending, carding, combing-preparation/combing and drawing/coiling machinery for staple spinning preparation |
| excluded_products | Fibre extrusion, final yarn manufacture, winding/warping/sizing, weaving/knitting and nonwoven lines; separate parts and mill services |
| representative_product | One serialized accepted functional configuration with measured net M, no assumed per-machine mass |
| production_route | Actual conditional fabrication, precision machining and finishing; configured fibre-working, drive/control integration and factory acceptance; fibre trial and packaging only when present |
| market_state | Accepted complete configured machine at declared dispatch gate, integral modules and retained first fill defined |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the configured complete staple-fibre spinning-preparation machine |
| How much | 1 kg net accepted complete machine, converted from per-machine records using measured M |
| How well | Document drawing-specific mechanical/electrical, clearance/alignment and guarding/interlock acceptance; no equal-mass fibre quality or throughput equivalence |
| How long or cycle | One manufacture and factory acceptance cycle; no imposed service life |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machines for extruding, drawing, texturing or cutting man-made textile materials, machines for preparing textile fibres or producing textile yarns, textile reeling or winding machines and machines for preparing textile yarns for use on machines for weaving, knitting and the like `f87c38cc-b845-46dd-bd91-3619a4444524` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model; serial/configuration and drawing revision; staple-fibre function and intended fibre type; working width; cylinder/roller arrangement and clothing state; feed/chute, combing/drafting/coiling modules included; dedicated drive, control, guards, interlocks and optional sensors/grinding; machine-specific suction/fan inclusion; supplier bare versus complete assembly scope; retained first-fill grease; transport-disassembled integral delivery parts; accepted net mass M, tare and calibration; factory/site/period, actual route, gate and unlinked upstream stages |

Declare all qualifiers in dataset metadata, process notes or reference-flow comments. The selected public product flow is broader; these mandatory qualifiers restrict it to this manufacturing boundary. Weigh the accepted complete configuration, including separately weighed integral transport-disassembled parts and retained first fill. Exclude test fibre/sliver, operator, shipping packaging, extra spares and external mill utilities. Brochure throughput, cylinder width, gap, drive power and catalogue shipping mass do not establish net M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `gas_volume` | curing_gas | Volume | m3 | Retain actual pipeline gas volume and meter reference pressure/temperature/composition; reference internal property 1 is Volume. Alternate Mass meanValue 1 is not a density or mass-conversion factor. |
| `energy_conversion` | electricity | Net calorific value | MJ | Convert measured kWh with verified energy unit group factor 3.6 MJ/kWh; declare intake voltage and supply geography/provider. Installed motor kW is not consumed electricity. |
| `liquid_mass` | liquid exchanges | Mass | kg | Weigh actual formulations or use measured density at documented composition/concentration and temperature for liquid volume conversion; do not substitute pure ingredients for premixes. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented purchased stock and discrete complete components received at the reporting manufacturing site |
| starting_condition_role | Foreground receipt-to-dispatch manufacturing module |
| product_classification_scope | Configured staple-fibre preparation machine, not textile production or downstream final yarn equipment |
| recursive_input_rule | Do not generate purchased complete modules recursively from this same reference output; exclude their completed internal operations and avoid raw-stock duplication |
| upstream_dataset_requirement | Match material/assembly state, technology, supply geography and property; disclose unlinked suppliers and stages before any cradle-to-gate claim |
| disclosure | Site/period, model/function, supplier completeness, in-house/outsourced operations, measured M, factory-only trial, dispatch gate and identity/quantity gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | Include actual manufacture, assembly, first fill, attributable factory trials and rework. Exclude customer mill installation, use, fibre/yarn output, central extraction service, maintenance and end of life. |  |
| `boundary_components` | supplier assemblies | Map each configured mechanism once to purchased assembly or internal manufacture. Bare cylinders, clothing, supplied clothed cylinders and integrated motors/controllers must have nonoverlapping BOM coverage. | `rieter-card` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Frame and enclosure fabrication | conditional | The specified frame/enclosure is manufactured at the reporting site. | foreground | one accepted configured machine, normalized with M |
| `precision` | Precision part machining and rotor preparation | conditional | Shafts, rollers, cylinders or supports are processed within the foreground. | foreground | one accepted configured machine, normalized with M |
| `finishing` | Surface cleaning and finishing | conditional | Declared parts are cleaned or coated at this site. | foreground | one accepted configured machine, normalized with M |
| `mechanical` | Configured fibre-working mechanisms integration | required | Every complete preparation machine, with its actual function-specific mechanism. | foreground | one accepted configured machine, normalized with M |
| `drive_controls` | Drive, electrical and control integration | required | Every configured motor-driven preparation machine. | foreground | one accepted configured machine, normalized with M |
| `acceptance` | Factory mechanical and electrical acceptance | required | Every accepted complete machine. | foreground | one accepted configured machine, normalized with M |
| `fibre_trial` | Conditional factory fibre trial | conditional | An actual configured machine undergoes fibre-fed acceptance before dispatch. | foreground | one accepted configured machine, normalized with M |
| `packing` | Dispatch packaging | conditional | Actual packaging crosses the declared factory dispatch gate. | foreground | one accepted configured machine, normalized with M |

Actual frame/precision preparation and finishing feed configured mechanism integration, drive/control installation and factory acceptance; fibre-fed trials and packaging are conditional. Bought-in complete assemblies bypass their internal operations. All cards are conditional on their precise material and supplier boundary, including cards inside required stages. Reconcile the full configuration BOM and add each omitted actual component, utility, reagent and demonstrated waste/emission separately before completing a dataset.

### Process: Frame and enclosure fabrication (`fabrication`)

Cut, form and join actual drawing-specific sheet/sections or machine received casting blanks for the configured frame. Do not assume every machine has a welded frame or that casting/foundry work occurs here. Bought-in complete frames bypass corresponding raw-stock operations. Add actual solid welding wire, individual shielding gases, electrodes and residues separately when those techniques are performed; the self-shielded wire card is conditional.

#### Inputs

##### Product flows

###### Uncoated cold-rolled low-carbon steel sheet (`steel_sheet`)

Only actual documented sheet for frame/enclosure fabrication; record grade, thickness, state and measured fresh issue-return balance.

- Selected flow: Uncoated cold-rolled low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dmg-factory`

###### Flux Cored Wire (`self_shield_wire`)

Only documented self-shielded carbon-steel flux-cored wire matching the weld procedure; gas-shielded techniques require separate wire and gas identities.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dmg-factory`

###### Grid alternating-current electricity at factory intake (`fabrication_electricity`)

Only metered attributable actual manufacturing or factory trial power at declared voltage/geography/provider; customer mill operation excluded.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dmg-factory`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Only segregated clean untreated uncoated steel offcuts exported after internal reuse; identify actual destination.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `dmg-factory`

### Process: Precision part machining and rotor preparation (`precision`)

Record actual turning/milling/drilling/grinding of shafts and fibre-working cylinders, seating and bearing interfaces, clothing attachment and any rotor balancing. Collect actual tolerance and balance acceptance from drawings/test records; no universal balance grade or carding gap is imposed. Outsourced finished rollers and bearings bypass their constituent machining. DMG MORI documents a historical textile-machinery machining site, not a mandatory machine-tool brand or recipe.

#### Inputs

##### Product flows

###### Cold-finished carbon-steel shaft bar blank (`steel_bar`)

Only documented drawing-specific bar for in-house shafts, with grade and measured mass; do not count raw bar for purchased finished shafts.

- Selected flow: Cold-finished carbon-steel shaft bar blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dmg-factory`

###### Grey-cast-iron textile-machine frame casting blank (`cast_iron_blank`)

Only the actual grey-iron blank machining route; document alloy, casting completeness and measured stock/part masses; casting itself is outside unless performed.

- Selected flow: Grey-cast-iron textile-machine frame casting blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dmg-factory`

###### Formulated mineral-oil-in-water metalworking emulsion (`cutting_emulsion`)

Only actual supplied premixed cutting emulsion with measured concentration/additions and SDS; individually mixed oil, water and additives need separate cards.

- Selected flow: Formulated mineral-oil-in-water metalworking emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dmg-factory`

###### Grid alternating-current electricity at factory intake (`precision_electricity`)

Only metered attributable actual manufacturing or factory trial power at declared voltage/geography/provider; customer mill operation excluded.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dmg-factory`

#### Outputs

##### Waste flows

###### Steel scrap, machining chips (`steel_chips`)

Only separately collected clean untreated steel machining chips; oily swarf and mixed alloys need separately defined wastes.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dmg-factory`

###### Segregated grey-cast-iron machining chips (`iron_chips`)

Only exported grey-iron machining chips after internal reuse; document oil contamination and outlet.

- Selected flow: Segregated grey-cast-iron machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dmg-factory`

###### Spent mineral-oil-in-water cutting emulsion sent to treatment (`spent_emulsion`)

Only actual exported spent emulsion with concentration/contamination and treatment receipt; not direct environmental water emission.

- Selected flow: Spent mineral-oil-in-water cutting emulsion sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_precision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_precision`
- Sources: `dmg-factory`

### Process: Surface cleaning and finishing (`finishing`)

Record the actual cleaning and coating route; powder coating is one conditional formulation, not a requirement for textile equipment. Bought-in finished/coated parts bypass the operation. Add each actually supplied abrasive, degreaser, pretreatment chemical and wet-coating component individually. Meter actual curing energy and segregate captured residues; do not assume solvent or combustion emissions from the word finishing.

#### Inputs

##### Product flows

###### Powder Coating (`powder_coating`)

Only actual supplied dry powder coating formulation; record resin/grade, fresh issues, internal recovery and cured retention. No universal coating recipe.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `dmg-factory`

###### Process Water (`cleaning_water`)

Only treated industrial water supplied for actual cleaning; do not count internal circulation as fresh water or resource withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `dmg-factory`

###### natural gas in the gaseous state (`curing_gas`)

Only actual gaseous pipeline-supplied natural gas for an installed curing burner; record composition and metered reference pressure/temperature, not LNG or unspecified fuel heat.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `dmg-factory`

###### Grid alternating-current electricity at factory intake (`finishing_electricity`)

Only metered attributable actual manufacturing or factory trial power at declared voltage/geography/provider; customer mill operation excluded.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `dmg-factory`

#### Outputs

##### Waste flows

###### Aqueous metal-part cleaning effluent sent to treatment (`cleaning_effluent`)

Only exported cleaning effluent with actual dissolved/entrained composition and treatment destination; separate from water-resource or direct water emissions.

- Selected flow: Aqueous metal-part cleaning effluent sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `dmg-factory`

###### Captured cured thermoset powder-coating residue (`powder_residue`)

Only actually collected cured thermoset coating residue; uncured reusable overspray is an internal recovery, not automatically this waste.

- Selected flow: Captured cured thermoset powder-coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `dmg-factory`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only attributable measured fossil CO2 from actual factory curing combustion emitted to air, unspecified subcompartment; no mandatory occurrence or invented fuel factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `dmg-factory`

### Process: Configured fibre-working mechanisms integration (`mechanical`)

Install the configured opening/cleaning/blending mechanism, carding cylinder/feed/licker-in/doffer/flats, combing mechanism or drafting/coiling unit appropriate to the declared product. These alternatives are separate models, not all components required in every machine. Distinguish bare cylinders from supplied clothed assemblies; mounting card clothing separately must not duplicate supplier-installed clothing. Integral feed chute, suction casing and guards belong to the configured delivery; shared central mill extraction is outside it.

#### Inputs

##### Product flows

###### Finished textile-preparation machine frame (`frame`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module.

- Selected flow: Finished textile-preparation machine frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Bare textile-carding main cylinder assembly (`main_cylinder`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Card configuration only; bare cylinder excludes separately installed clothing.

- Selected flow: Bare textile-carding main cylinder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Finished hardened-steel saw-tooth card-clothing strip (`card_clothing`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Card configuration only; raw steel wire is not finished toothed clothing.

- Selected flow: Finished hardened-steel saw-tooth card-clothing strip
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Finished carding revolving-flat bar assembly (`flat_bar`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Flat-card configuration only; declare clothing inclusion.

- Selected flow: Finished carding revolving-flat bar assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Bare carding doffer-cylinder assembly (`doffer`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Card configuration only; declare installed clothing separately.

- Selected flow: Bare carding doffer-cylinder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Carding licker-in roller assembly (`licker_in`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Card configuration only; declare clothing inclusion.

- Selected flow: Carding licker-in roller assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Textile tuft-opening beater rotor assembly (`opening_rotor`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Opening/cleaning configuration only.

- Selected flow: Textile tuft-opening beater rotor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Textile-preparation feed-roller assembly (`feed_roller`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only an actual installed feed roller.

- Selected flow: Textile-preparation feed-roller assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Integral textile-fibre feed-chute assembly (`feed_chute`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only when included in this machine delivery, not separately counted central feed equipment.

- Selected flow: Integral textile-fibre feed-chute assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Sliver draw-frame drafting-roller assembly (`drafting_roller`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Draw-frame configuration only; supplier-included cot/apron boundaries must be declared.

- Selected flow: Sliver draw-frame drafting-roller assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Textile-sliver coiler assembly (`coiler`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only the installed coiler; standalone can handling equipment excluded.

- Selected flow: Textile-sliver coiler assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Textile-fibre combing-head assembly (`combing_head`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Comber configuration only; record nipper, comb cylinder and detaching-roller inclusion.

- Selected flow: Textile-fibre combing-head assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Steel deep-groove ball bearing (`ball_bearing`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only the actual bearing construction, not a ball-or-roller category.

- Selected flow: Steel deep-groove ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Vulcanized-rubber textile-machine transmission belt (`drive_belt`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only an actual installed drive belt; conveying belt is a different role.

- Selected flow: Vulcanized-rubber textile-machine transmission belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

###### Grid alternating-current electricity at factory intake (`mechanical_electricity`)

Only metered attributable actual manufacturing or factory trial power at declared voltage/geography/provider; customer mill operation excluded.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mechanical.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical`
- Sources: `rieter-card`

### Process: Drive, electrical and control integration (`drive_controls`)

Install documented motor/drive/transmission, electrical cabinet, harness, interlocks and declared sensors. Gap-control and integrated-grinding options are not assumed universal; Rieter marks its gap-control example as optional. Record dedicated fans and pneumatic actuation only when included; centrally shared mill utilities are separate. Avoid counting a motor/controller twice when supplied within a module.

#### Inputs

##### Product flows

###### Three-phase squirrel-cage induction drive motor (`motor`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only independently supplied installed components; the gap sensor is optional.

- Selected flow: Three-phase squirrel-cage induction drive motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Variable frequency drive (`drive_inverter`)

Only an independently supplied actual variable-frequency drive including power electronics, enclosure and heat sink; verify configured voltage/rating and supplied completeness, no duplication inside a complete drive cabinet. The public flow identifies an estimated purchased component, not a measured manufacturing intensity.

- Selected flow: Variable frequency drive `c14b641c-8fbe-40c4-843b-3cc9b0faeff3`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Dedicated textile-preparation controller module (`controller`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only independently supplied installed components; the gap sensor is optional.

- Selected flow: Dedicated textile-preparation controller module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Insulated copper textile-machine wiring harness (`harness`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only independently supplied installed components; the gap sensor is optional.

- Selected flow: Insulated copper textile-machine wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Carding-gap displacement sensor module (`gap_sensor`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only independently supplied installed components; the gap sensor is optional.

- Selected flow: Carding-gap displacement sensor module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Dedicated textile-machine centrifugal extraction fan (`extraction_fan`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only independently supplied installed components; the gap sensor is optional.

- Selected flow: Dedicated textile-machine centrifugal extraction fan
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Galvanized-steel machine extraction duct (`suction_duct`)

Only the named discrete bought-in finished assembly, with drawing/part revision, material and measured net mass. Omit purchase for in-house transfers or constituents already inside a complete supplier module. Only independently supplied installed components; the gap sensor is optional.

- Selected flow: Galvanized-steel machine extraction duct
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Steel screw (`steel_screw`)

Only independently supplied actual steel screws; nuts, bolts and washers need separate exact exchanges when issued independently.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

###### Grid alternating-current electricity at factory intake (`drive_controls_electricity`)

Only metered attributable actual manufacturing or factory trial power at declared voltage/geography/provider; customer mill operation excluded.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drive_controls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drive_controls`
- Sources: `rieter-card`

### Process: Factory mechanical and electrical acceptance (`acceptance`)

Verify delivery BOM, installed mechanisms, rotation direction, speed control, alignment, actual clearance/tolerance, guarding/interlocks and documented vibration/functional criteria. Include only actual factory runs and rework. Factory acceptance does not establish customer-site fibre quality, yarn yield, process productivity or lifetime. Measure net accepted M after removing test fibre and before shipping packaging.

#### Inputs

##### Product flows

###### Lithium-soap mineral-oil bearing grease (`first_fill_grease`)

Only documented first-fill grease actually issued, with grade/soap/base oil and quantity; supplier-prelubricated bearings do not receive duplicate fill.

- Selected flow: Lithium-soap mineral-oil bearing grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `rieter-card`

###### Grid alternating-current electricity at factory intake (`acceptance_electricity`)

Only metered attributable actual manufacturing or factory trial power at declared voltage/geography/provider; customer mill operation excluded.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `rieter-card`

#### Outputs

##### Product flows

###### Machines for extruding, drawing, texturing or cutting man-made textile materials, machines for preparing textile fibres or producing textile yarns, textile reeling or winding machines and machines for preparing textile yarns for use on machines for weaving, knitting and the like (`finished_machine`)

Exactly 1 kg net accepted complete configured spinning-preparation machine, including installed mechanisms, dedicated drive/control and retained first fill; test fibre, shipping packaging and extra spares excluded.

- Selected flow: Machines for extruding, drawing, texturing or cutting man-made textile materials, machines for preparing textile fibres or producing textile yarns, textile reeling or winding machines and machines for preparing textile yarns for use on machines for weaving, knitting and the like `f87c38cc-b845-46dd-bd91-3619a4444524`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `rieter-card`

### Process: Conditional factory fibre trial (`fibre_trial`)

Record the actual factory-only trial material, test method, duration and attributable energy, recovered reusable fibre and exported trial waste. Cotton and virgin PET staple cards are conditional on the documented material; do not substitute cotton linters, fabric, acrylic or recycled PET. Returned internal material is not repeated fresh input. Trial sliver sent to waste is not the reference product; saleable trial output requires a declared co-product decision.

#### Inputs

##### Product flows

###### Ginned uncarded cotton lint for factory trial (`cotton_trial`)

Only actual fresh cotton trial input with fibre/moisture/contamination recorded; no mill production or cotton-linter substitution.

- Selected flow: Ginned uncarded cotton lint for factory trial
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fibre_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fibre_trial`
- Sources: `truetz-preparation`

###### Virgin PET staple fibre for factory trial (`pet_trial`)

Only actual documented virgin PET staple material, with fineness, cut length, finish and moisture; no acrylic or recycled feed substitution.

- Selected flow: Virgin PET staple fibre for factory trial
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fibre_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fibre_trial`
- Sources: `truetz-preparation`

###### Grid alternating-current electricity at factory intake (`fibre_trial_electricity`)

Only metered attributable actual manufacturing or factory trial power at declared voltage/geography/provider; customer mill operation excluded.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fibre_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fibre_trial`
- Sources: `truetz-preparation`

#### Outputs

##### Waste flows

###### Segregated cotton trial-fibre waste sent to recycling (`cotton_trial_waste`)

Only exported segregated cotton fibre/sliver from actual factory trial after internal reuse, with measured mass and receiving route.

- Selected flow: Segregated cotton trial-fibre waste sent to recycling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fibre_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fibre_trial`
- Sources: `truetz-preparation`

###### Segregated PET staple trial-fibre waste sent to recycling (`pet_trial_waste`)

Only exported PET staple fibre from actual trial, segregated from cotton and mixed blends; record polymer, finish and outlet.

- Selected flow: Segregated PET staple trial-fibre waste sent to recycling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fibre_trial.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fibre_trial`
- Sources: `truetz-preparation`

### Process: Dispatch packaging (`packing`)

Record each actual dispatch support and protective film, excluded from machine M. Transport-disassembled parts belonging to the accepted machine remain in its weighed completeness inventory; spare clothing and tooling sold separately are excluded. Additional packaging and returnable supports require their own material-specific cards and measured reuse records.

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`timber_support`)

Only actual kiln-dried sawn coniferous shipping timber with measured mass, excluded from M.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `dmg-factory`

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Only actual LDPE protective film with declared thickness and measured mass, excluded from M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `dmg-factory`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_order` | shared operations | Separate function/model, working width, mechanism, clothing and installed options by work order. Directly assign issues, returns, station meters, trials and rework first. For inseparable shared manufacturing resources, use measured causal station time or load; share = order driver / sum of all covered order drivers, documenting causal justification, period and denominator. No unexplained equal-count allocation across card, draw-frame and opener models. |  |
| `allocation_reuse` | scrap and trials | Internal stock/fibre reuse is a transfer, not repeated fresh input. Exported chips, residues and trial fibres retain measured quantity and destination without automatic avoided-product credit. Identify saleable trial sliver or other co-products separately and obtain reviewed residual allocation after direct separation. Rejected/reworked machine burdens belong to the recorded accepted-output period; reconcile unfinished stock. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted net machine mass | weighing_record | model; function; configuration; serial; accepted net mass M; scale_id; calibration; clothing/module inclusion; retained_fill; detached_integral_parts; test_fibre_removed; packaging_tare | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or representative same-configuration batch | same manufacturing period as orders | declared factory/configuration | accepted net mass per machine | calibration, tare, completeness and acceptance receipts |
| `cp_fabrication` | fabrication | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Weigh grade/dimension-specific stock issues, returns, accepted frame masses and segregated offcuts; collect weld procedure, rework and station electricity. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Frame and enclosure fabrication | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_precision` | precision | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Collect drawing/part revision, supplied blank and accepted part mass, machining time, coolant formulation/concentration, additions/returns, separate chips and spent coolant outlets, balancing records and metered station power. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Precision part machining and rotor preparation | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_finishing` | finishing | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Collect preparation/coating batch and SDS, fresh issues minus recoveries, coated part mass, water and actual effluent, curing fuel/state, electricity and attributable measured combustion emissions only if present. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Surface cleaning and finishing | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_mechanical` | mechanical | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Trace function, working width, cylinder/roller arrangement, clothing type and included modules to BOM; weigh supplied assemblies, record internal transfers separately and verify alignment/clearance and mechanical completeness. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Configured fibre-working mechanisms integration | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_drive_controls` | drive_controls | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Record drive topology, motor part/rating and measured mass, controller/software revision, harness construction/mass, sensor option and enclosure inclusion; retain continuity/interlock and power-meter evidence. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Drive, electrical and control integration | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_acceptance` | acceptance | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Collect serial-linked dimensional/alignment, safety and run acceptance reports; measure attributable test electricity, installed first-fill grease and accepted net M with tare/completeness evidence. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Factory mechanical and electrical acceptance | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_fibre_trial` | fibre_trial | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Weigh fresh trial fibre, reusable returns, exported trial fibre/sliver and residual stock by polymer/origin; retain fibre composition, moisture, contamination, waste receipts and machine-specific trial log. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Conditional factory fibre trial | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |
| `cp_packing` | packing | each atomic exchange | measured_order_record | order; serial/configuration; drawing/part/material revision; supplier_scope; issues; returns; stock_change; exchange_amount; component_mass; meter_unit; voltage; gas_pressure_temperature; formulation_concentration_density; accepted_count; rework; allocation_driver; trial_fibre_return; waste_outlet; measured_emission_mass | Weigh each packaging material per dispatched configuration, reconcile returns and packaging tare; document actual reusable-support cycles. | kg, MJ or m3 as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Dispatch packaging | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, trial and transfer receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For a homogeneous configuration order, reconcile fresh issues minus returns and stock changes, actual metered utilities and demonstrated emissions; assign documented shared shares, then divide attributable totals by accepted count to obtain q_item. Normalize with the same delivery-state M. Gas retains m3 per kg at recorded meter conditions; electricity retains MJ per kg; no volume/mass/energy substitution. If compatible machine masses vary, retain serial records and divide attributable totals by sum of accepted net masses; different functions/configurations stay separate. Unknown quantities are gaps, not zero defaults.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | all components | Reconcile every installed frame, fibre-working surface, roller/cylinder, clothing, drive, controller, guard and first fill against configured BOM and supplier completeness; avoid bare/clothed assembly and internal-transfer duplication. | configuration BOM and supplier scope |
| `quality_balance` | mass and utilities | Reconcile stock, component masses, M, retained grease, exported wastes, trial-fibre returns and rework; retain scale/meter calibration and composition/state conversions. Establish site QA limits from measured records, not brochure machine capacity, fibre yield or assumed material losses. | weighing, meter, stock and trial receipts |
| `quality_coverage` | all processes | Report period/geography, model coverage, actual/absent conditional stages, outsourcing, identity/quantity gaps, uncertainty and upstream links. Historical equipment/factory examples provide no current factory intensities or universal tolerances. | order coverage and evidence register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require positive measured M, complete functional preparation machine, explicit working mechanism, clothing/module and drive/control inclusion, net tare and factory acceptance. Do not substitute fibre/yarn output or throughput services for machine manufacture. |  |
| `validate_identity` | inventory rows | Require one physically defined exchange with matching public identity, reference property, unit group, route and medium. Steel wire is not finished card clothing, PET is not any synthetic staple, process water is not wastewater, and a product scrap flow is not automatically a waste transfer. Keep incompatible UUIDs blank until dataset completion. |  |
| `validate_conversion` | inventory rows | Check cp_mass and normalize_mass against the same accepted configuration and period, exact gas meter conditions and electricity units. Reject duplication of complete-module constituents, fibre returns and first fills. |  |
| `validate_emissions` | elementary rows | Fossil CO2 requires attributable actual factory combustion measurements and air-unspecified subcompartment. Any other demonstrated substance and medium gets its own card; no universal emissions from machining, coating or fibre trials. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured staple-fibre preparation machine foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and explicit upstream coverage |
| allowed_use | Manufacturing supply-chain modelling for matching function/configuration, state, gate, site and period |
| excluded_use | Fibre/yarn production, lifetime service comparison, equal-mass preparation equivalence, other textile functions and complete cradle-to-gate claims with missing upstream stages |
| required_metadata | Reference qualifiers, configuration BOM, measured M, supplier scope, actual operations/trials, site/period/gates, collection/allocation evidence and upstream links |
| required_quality_disclosure | Missing identities/quantities, uncertainty, inactive cards, added BOM exchanges, historical evidence limits and unlinked outsourced/upstream stages |
| update_trigger | Function, working width, mechanism/clothing, module/drive/control options, supplier completeness, M/first fill, finishing route, factory period/geography or resolved evidence gap changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `rieter-card` | literature | [Rieter C 81 Card, 3586-v1 en 2305](https://www.rieter.com/fileadmin/user_upload/products/documents/systems/fiber-preparation/c-81/rieter-c-81-card-brochure-3586-v1-98697-en.pdf) | May 2023 brochure, PDF/printed page 11, Carding Gap Control and Automatic distance adjustment, option footnote: cylinder clothing/flat-wire interfaces and optional control example. Historical configuration only; no universal gap, clothing specification, manufacturing intensity, mass or life adopted. |
| `dmg-factory` | literature | [DMG MORI Technology Excellence 01–2022](https://en.dmgmori.com/resource/blob/626730/cde70e4767e83788dd7d9fd44f6c05b0/j221en-data.pdf) | PDF/printed page 56, Trützschler Textile Machinery Shanghai case: historical manufacture/assembly of blow rooms, cards and draw frames using machining centres. Example of in-house part machining and configured assembly only; no compulsory machine-tool brand, current factory activity, coating recipe, efficiency or machine mass. |
| `truetz-preparation` | literature | [Trützschler Ring spinning applications](https://www.truetzschler.com/en/spinning/applications/ring-spinning/) | Combed cotton, Carded cotton/pure man-made fibres, Material blends and Overview of our solutions sections: opening/blending/card/draw-frame/lap/comber alternatives in staple preparation; retrieved 2026-10-04 UTC. Product-boundary evidence only, not ring-spinning machine manufacture, fibre trial recipe, yields or manufacturing quantities. |
