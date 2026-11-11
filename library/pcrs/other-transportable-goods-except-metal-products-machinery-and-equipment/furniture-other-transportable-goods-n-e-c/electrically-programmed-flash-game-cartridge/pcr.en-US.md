---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.electrically-programmed-flash-game-cartridge
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Physical software cartridges for video game consoles

## 1. Scope and Applicability

This PCR covers complete physical console cartridges carrying an identified executable game. The evidenced route uses electrically programmable flash-memory boards and supplied shells through first quality release of the complete net cartridge. Onsite bare-board placement and solder-paste reflow and programming and readback plus actual-console functional tests are collected only where performed; purchased complete populated modules and the parts embodied within them are mutually exclusive inputs. Do not reduce manufacture to buying a completed recorded cartridge and putting it in a box. Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`.

The classification note distinguishes cartridges from CDs/DVDs and other carriers. Optical or magnetic media and downloads and blank storage cards and separate chips and bare PCBs and host consoles and licence-only transactions are excluded as reference products. Mask-ROM production cannot be represented by electrical flashing; a download-triggering key card without the complete recorded executable cannot directly use this route. Another memory technology needs evidence and process review within this identity rather than a parallel category identity. A mass reference does not imply equal gameplay function or duration between different games. Source: `unsd-cpc38582`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.electrically-programmed-flash-game-cartridge |
| classification_refs | CPC 3.0 38582; narrower product and route boundary |
| covered_products | Complete physical recorded game cartridges; each package declares flash-memory and console interface |
| excluded_products | Downloads; optical or magnetic software media; blank storage cards; chips; bare PCB; console; licence alone |
| representative_product | Complete flash-ROM game cartridge of one declared configuration at first release |
| production_route | Disjoint supplied populated module or actual onsite board assembly → programming and readback → supplied shell and label assembly → functional test and first release |
| market_state | Complete physical cartridge carrying the accepted program at first quality release; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide complete recorded physical game cartridges compatible with the declared console and release |
| How much | 1 kg net complete cartridges first quality released; all packaging excluded |
| How well | Meet actual declared program integrity and readback and functional/visual release criteria; no default performance |
| How long or cycle | One complete declared production interval H; later actual services belong to original release cohort Qc; no assumed service life |
| reference_flow_link | `finished_cartridge` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Software cartridges for video game consoles `20e072d2-c6c0-4a85-9dcc-4a9cf9716047` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence |

All qualifiers must remain in consumable metadata or reference-flow context. Q is the sum of measured net masses of unique complete cartridges first released in H. Actual integral articles and their true constituent content count once; packaging and detached liner are outside Q. Retain measured count and configuration-specific net mass without inventing kg/item or capacity or code size or yield or lifetime.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass | kg | Use calibrated weighing and unique release records in cp_release for Q; the sole finished reference output is 1 kg. Zero Q retains raw loads without a unit result. |
| `actual_unit_conversion` | atomic exchanges | Actual physical quantity | actual unit | cp_energy or the corresponding protocol collects raw records only. Convert kWh × 3.6 to MJ once; integrated volume is not multiplied by time. Integrate only genuine rates; mass/volume conversion needs independent density for that substance at the actual phase and T/P. |
| `normalization_once` | all inventory rows | Native numerator and net product mass | native unit/kg | cp_* aggregates raw numerators only. calc_normalize applies manufacture A/Q or gross physical V/Q once; original-cohort services use calc_service and divide by Qc once. Cards do not divide again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied bare PCB and packaged flash/support components and whole solder paste or disjoint purchased complete populated flash-memory module; supplied shell/label and existing accepted game original version |
| starting_condition_role | Foreground manufacture starting condition rather than upstream cut-off; carry manufacture once for each actual supplied state |
| product_classification_scope | Physical recorded console game cartridges; not blank storage or software on other carriers |
| recursive_input_rule | Retain a same-category purchased cartridge/intermediate once as an actual upstream input; do not rebuild it in this system or count it as new Q; internal transfers cancel |
| upstream_dataset_requirement | Match component and shell and software-original and utility and packaging and actual service/waste-treatment datasets by actual supply state and route and geography and time and unit; disclose gaps |
| disclosure | Route; H; all sites; outsourcing boundaries; original reuse; release Q and later Qc; all opening/closing pools; physical and burden gates; failures/rework; packaging; upstream gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | reference product | Only a complete physical cartridge carrying the identified executable game is eligible. Apply the demonstrated flash-memory route. Mask-ROM fabrication and a download-only key card require their own evidenced route within this identity before reuse; do not silently replace them by blank flash media. | `unsd-cpc38582`; `drludos-snes-manufacture-2020` |
| `boundary_manufacture` | included foreground | Include receiving and raw storage; actual bare-board component placement and solder reflow or disjoint purchased populated-module receipt; ROM preparation/transfer and programming; readback/integrity and functional tests; shell/closure and label assembly; first quality release; actual packing and internal handling plus storage/dispatch in separate service accounts. Primary sources are a historical manufacturing case and manufacturer service capability; no same-SKU or same-factory synthesis is claimed. | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_supplied_state` | component upstream coverage | Purchased populated flash-ROM modules carry board fabrication and packaged chips and assembly once. Purchased bare PCB and packaged IC inputs retain their compatible upstream manufacture. Foreground semiconductor wafer fabrication and shell injection moulding are not inferred from disassembly or the word cartridge. If actually operated add evidenced site processes and every atomic input/output before use. | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_original` | software and rights | Include the attributable original-development burden through its linked reusable original account and actual licence/replication boundary disclosure. Physical program copying does not redevelop the original each time. Meter attributable build/transfer/programming/test services actually operated. Preserve a licence-only payment as rights metadata; if a supplier performs copying use a verified service unit or expanded disjoint activity data. Never derive development energy from cartridge kg or code size or royalty price. | `drludos-snes-manufacture-2020`; `jrc-ilcd-attributional-2010` |
| `boundary_time` | stocks failures and service cohort | H covers the complete declared batch/campaign including zero-output starts and stops and idle time and cleaning and rework. Reconcile opening/closing raw material and WIP and every other non-WIP physical pool with an inherited exchange vector for every flow. Manufacturing burden A includes attributable opening WIP and actual H work less traced closing WIP and genuinely unconsumed stock burdens. Newly first-released closing FG is already in Q and is not subtracted from manufacturing A. Later work on released goods belongs to original Qc; reverse original delivery and preserve historic burden rather than invent production or omit returns. | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_physical` | physical system and extensions | Keep manufacturing and FG and combined physical gates separately closed. Count a whole supplied article/formulation once; assayed constituent content is non-additive. Either disjoint component receipt or a reconciled whole-article bridge is used and internal transfers cancel. Add one named atomic card for every actually used but unlisted cleaning chemical and fuel and cooling water and inert gas and waste and actual molecular emission. Do not set unknowns to zero or hide them in a residual selector. Actual nitrogen and oxygen and argon and water are separate substances; VOC/COD/NOx/PM indicators are not invented molecular masses. No boiler or steam circuit is assumed. Actual externally returned thermal carrier Product needs its gross mass and phase/T/P/enthalpy plus a single water/energy supplier convention. | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `boundary_downstream` | use and completeness | Default product gate is first quality release of the complete cartridge; actual services in H are retained and separately assigned to released cohorts. Future unperformed warehousing or testing is unknown rather than imputed. Consumer gameplay and host manufacture for gameplay and network downloads and post-use end-of-life are separate downstream models. This is not a complete cradle-to-gate dataset until upstream component and original/utility/service gaps are resolved and linked. | `unsd-cpc38582`; `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |

Each gate also retains actual natural water adsorption/desorption separately; it is not an invented repair material. Do not replace measured whole-wet stock by an assumed dry-basis factor. Reaction water and free water and phase/structural water require independent species/reaction evidence; one residual cannot fit two unknowns.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt` | Receiving and component storage | required | Match supplied state and inventory before irreversible processing. | actual manufacture or original-cohort service account | per 1 kg reference flow |
| `board` | Board assembly and reflow | conditional | Only actual onsite component assembly; purchased populated modules bypass it. | actual manufacture or original-cohort service account | per 1 kg reference flow |
| `program` | ROM programming and verification | required | Include actual file transfer and programming attempts plus test equipment. | actual manufacture or original-cohort service account | per 1 kg reference flow |
| `housing` | Housing and integral label assembly | required | Use supplied shells; no assumed onsite injection moulding. | actual manufacture or original-cohort service account | per 1 kg reference flow |
| `release` | Functional testing and first release | required | Only complete cartridges first passing declared release criteria enter Q. | actual manufacture or original-cohort service account | per 1 kg reference flow |
| `services` | Packing storage and dispatch service account | conditional | Actual services in H follow the original released cohort Qc. | actual manufacture or original-cohort service account | per 1 kg reference flow |

Every physical card uses only the single V/Q or original-cohort V/Qc result for its full actual physical V; A or economic/service fractions cannot replace physical quantities. Attributable supplier burden A is accounted once in a separate burden dimension according to actual original/manufacture scope; physical disclosure alone does not generate another purchase/provider demand/credit. Units for original reuse and actual copying services describe their actual delivery object and do not turn cartridge kg into software units.

Each card below is one atomic exchange. Applicability requires actual material and route records; missing measurement is not absence. Add a specific card and verify provider and unit for every actual unlisted exchange. Each process preamble applies together with the ancestor boundary and calculation rules.

### Process: Receiving and component storage (`receipt`)

Match supplied state and inventory before irreversible processing. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Inputs

##### Product flows

###### Populated flash-ROM game-cartridge circuit module (`pcba`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. Applies only to a fully populated supplied flash-memory board; no separate purchase of the enclosed chips or solder. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Game-cartridge flash-ROM PCBA
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Bare cartridge printed circuit board (`pcb`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native finished manufactured printed-circuit Product at plant. Use only the actual patterned unpopulated supplied board; no laminate-panel intermediate or populated module substitution. No area-to-mass/density or package weight factor is supplied; collect actual mass.
- Selected flow: Printed circuits `b230e7cd-7afd-4398-84bd-71beab1f6626`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Packaged flash memory integrated circuit (`flash`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant production-mix Product is packaged and ready for SMT; synonyms include packaged IC/QFP/BGA/CSP/SMT IC. Its comment requires the upstream intermediate identity to match the PCBA-chain exchange. Use one actual packaged chip of the declared function and package; no bare die/wafer or complete storage module. No CAS/node/capacity or fixed geography beyond global scope is specified. If a package performs more than one support function count that physical package once and retain function subledgers as non-additive.
- Selected flow: Packaged integrated circuits `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Packaged cartridge boot-authentication integrated circuit (`cic`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant production-mix Product is packaged and ready for SMT; synonyms include packaged IC/QFP/BGA/CSP/SMT IC. Its comment requires the upstream intermediate identity to match the PCBA-chain exchange. Use one actual packaged chip of the declared function and package; no bare die/wafer or complete storage module. No CAS/node/capacity or fixed geography beyond global scope is specified. If a package performs more than one support function count that physical package once and retain function subledgers as non-additive.
- Selected flow: Packaged integrated circuits `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Packaged cartridge memory mapper integrated circuit (`mapper`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant production-mix Product is packaged and ready for SMT; synonyms include packaged IC/QFP/BGA/CSP/SMT IC. Its comment requires the upstream intermediate identity to match the PCBA-chain exchange. Use one actual packaged chip of the declared function and package; no bare die/wafer or complete storage module. No CAS/node/capacity or fixed geography beyond global scope is specified. If a package performs more than one support function count that physical package once and retain function subledgers as non-additive.
- Selected flow: Packaged integrated circuits `b6eb5862-9b77-4f3a-8e0d-1eea7f0ac8bb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Individual supplied cartridge capacitor (`capacitor`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native capacitor is an industrial electronic passive-component input at plant; inspected synonyms span electrolytic/ceramic/film/tantalum/super/variable/fixed capacitors without prescribing one of them. General lifecycle/route/quality text does not provide a numerical recipe or an acceptance certification. Declare the actual single capacitor type and grade; different parts are separate rows.
- Selected flow: capacitor `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Individual supplied cartridge resistor (`resistor`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native manufactured finished Product at-plant production mix excludes heating resistors explicitly. Use only a genuine electronic resistor; do not substitute heating elements or resistive raw material. No electrical rating or resistance value is assumed.
- Selected flow: Electrical resistors (except heating resistors) `9bee079d-ab55-44db-b1a4-72d61a856d61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Supplied solder-paste formulation (`paste`)

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. Count the whole supplied formulation once. Alloy and flux composition require its actual specification; neither alloy nor solvent recipe is prescribed. Assay is a non-additive subledger. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Solder paste supplied formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Receiving and component storage CN medium-voltage electricity (`receipt_electricity_mv_cn`)

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result described above; raw electricity remains undivided.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Receiving and component storage CN low-voltage electricity (`receipt_electricity_lv_cn`)

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 result described above; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Receiving and component storage electricity (`receipt_electricity`)

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### Process: Board assembly and reflow (`board`)

Only actual onsite component assembly; purchased populated modules bypass it. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Inputs

##### Product flows

###### Board assembly and reflow CN medium-voltage electricity (`board_electricity_mv_cn`)

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result described above; raw electricity remains undivided.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_board`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Board assembly and reflow CN low-voltage electricity (`board_electricity_lv_cn`)

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 result described above; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_board`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Board assembly and reflow electricity (`board_electricity`)

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_board`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### Outputs

##### Waste flows

###### Separately collected failed populated circuit board (`board_reject`)

Only actual separately collected populated cartridge boards rejected during SMT/reflow; programming/function-test damage is recorded separately. Native global at-plant Waste is specifically rejected PCBA from SMT and reflow; PWB/PCBA/electronic-scrap synonyms do not broaden that route. No quantity is supplied. This bound card covers only actual SMT/reflow rejects; programming-test board rejects use program_board_reject separately and physical rework transfers are not waste.
- Selected flow: Scrap, printed wiring board `fe1d2a9b-bdb0-498a-9b5f-4836ec35f883`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_board`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### Process: ROM programming and verification (`program`)

Include actual file transfer and programming attempts plus test equipment. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Inputs

##### Product flows

###### ROM programming and verification CN medium-voltage electricity (`program_electricity_mv_cn`)

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result described above; raw electricity remains undivided.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_program`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### ROM programming and verification CN low-voltage electricity (`program_electricity_lv_cn`)

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 result described above; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_program`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### ROM programming and verification electricity (`program_electricity`)

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_program`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Cartridge programmer acquisition (`programmer`)

Only the actual physical programmer acquired across the asset boundary. Preserve full gross article mass and its external return movements; do not buy an entire programmer for each programming attempt. Keep the physical V ledger separate from attributable manufacture/service burden and supported lifetime-use share; no assumed lifetime or allocation fraction. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Cartridge ROM programmer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Allocated software-original reuse input (`original`)

One identified accepted original version reused for physical copies and any other actual channels. Keep its complete creation inventory and actual reuse population in the upstream original account; assign the supported reuse share once without treating every cartridge as a newly developed original. Native item is a count of this original only and never kg of code or cartridges. An invoice for a licence is not energy or an emission factor. The item display and native Item(s) are the same physical count unit with factor 1 for an original; this never determines cartridge kg/item. Unknown reuse population leaves this linked burden unresolved. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Completed game software original
- Flow property / unit: Number of items / item
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_original`
- Sources: `drludos-snes-manufacture-2020`; `jrc-ilcd-attributional-2010`

###### Externally supplied ROM copying service (`replication_service`)

Applies only to one actual contracted copying activity with a verified delivery unit and declared input/output coverage. Distinguish attempted and accepted copies. Use either its specific service dataset or expanded supplier atomic activity records for the same operation; never both. A mere right to copy is not a physical copying service. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Game-cartridge ROM programming service
- Flow property / unit: Number of items / item
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### Outputs

##### Waste flows

###### Programming and test failed circuit board (`program_board_reject`)

Only an actual separately collected populated game-cartridge board rejected after programming or functional test; preserve full failed loads and measured net mass. It is not an automatic extension of the SMT/reflow waste identity. If physically placed in the one real mixed waste container retain non-additive originW only and do not export this component again. Collect raw numerators through cp_waste and use the one result of calc_normalize.

- Selected flow: Waste game-cartridge circuit board from programming and test
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single normalization result specified in this description; raw records remain undivided.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste_program`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### Process: Housing and integral label assembly (`housing`)

Use supplied shells; no assumed onsite injection moulding. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Inputs

##### Product flows

###### Moulded plastic game-cartridge shell (`shell`)

One supplied moulded shell article set for one cartridge; record each housing half and actual polymer/additive specification within the article BOM. No polymer identity or onsite moulding recipe is assumed. Shell manufacture remains upstream. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native unspecified plastic enclosure Product has enclosure/casing/chassis/shell synonyms and an industry-average-estimate mix descriptor. It does not prescribe polymer/grade/additives or moulding conditions and does not verify a supplier inventory. Use only one supplied cartridge shell article matching actual composition and provider; no resin and shell double purchase.
- Selected flow: Plastic housing `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_housing`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Cartridge closure screw (`screw`)

Only if separate screws are actually fitted; record actual material and coating and measured supplied mass. Screws already included in the supplied shell article are not purchased again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Cartridge closure screw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_housing`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Printed self-adhesive cartridge identification label (`label`)

One supplied finished label including its adhesive and printed substrate once; detachable liner is excluded from Q and separately tracked. The label retained on the accepted cartridge belongs to net cartridge mass. Do not repurchase its ink or adhesive. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed self-adhesive cartridge identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_housing`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Housing and integral label assembly CN medium-voltage electricity (`housing_electricity_mv_cn`)

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result described above; raw electricity remains undivided.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_housing`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Housing and integral label assembly CN low-voltage electricity (`housing_electricity_lv_cn`)

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 result described above; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_housing`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Housing and integral label assembly electricity (`housing_electricity`)

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_housing`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### Outputs

##### Waste flows

###### Detached label release liner (`label_liner`)

One actual detached liner waste stream; its paper or film and release coating require actual supply evidence. Exclude it from cartridge net mass. Do not infer paper or polyethylene from the label name. Mixed disposal follows the one-container rule. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Discarded label release liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_housing`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### Process: Functional testing and first release (`release`)

Only complete cartridges first passing declared release criteria enter Q. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Inputs

##### Product flows

###### Functional testing and first release CN medium-voltage electricity (`release_electricity_mv_cn`)

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result described above; raw electricity remains undivided.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_release`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Functional testing and first release CN low-voltage electricity (`release_electricity_lv_cn`)

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 result described above; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_release`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Functional testing and first release electricity (`release_electricity`)

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_release`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Physical test console acquisition (`test_console`)

The actual test host is supporting equipment rather than cartridge output. Preserve gross physical acquisition and external returns separately from attributed asset burden. Meter console display and programmer electricity without counting a USB supply twice. Add actual separate monitor or computer cards if outside an already covered service boundary. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native finished manufactured console Product includes TV-receiver-type consoles and handheld consoles. Use the actual complete test host with its own measured net mass and asset history; no console is contained in the cartridge Q and no fixed hardware life is implied.
- Selected flow: Video game consoles `d51ebfa9-1bbb-4f3d-a487-75c690f9e0f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_release`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### Outputs

##### Product flows

###### First-released complete recorded cartridge (`finished_cartridge`)

The one finished reference article includes its populated PCB and programmed flash memory plus actual support components and supplied shell and integral label once. It is not a blank storage device or chip or bare PCB or console or download. Preserve console compatibility and memory technology plus release hash and all section 3 qualifiers. Q is first release net cartridge mass only; retain every failure and zero-output load upstream. Packaging is excluded; a released cartridge held in finished stock has already entered Q. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native whole Product at-plant production mix in a manufactured finished state. No fixed capacity or chip type or lifetime or grade/geography is supplied. Its scope is software for game cartridges and excludes CD/DVD; it is not blank flash storage or a die or PCB or console or download. Apply only to the complete executable-bearing cartridge of the declared flash configuration. Returned/dispatched articles must remain physically complete recorded cartridges; genuinely waste/different-state articles use their actual specific flow. Complete required qualifiers: game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence.
- Selected flow: Software cartridges for video game consoles `20e072d2-c6c0-4a85-9dcc-4a9cf9716047`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `unsd-cpc38582`; `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

##### Waste flows

###### Separately discarded complete game cartridge (`cartridge_reject`)

Only a whole rejected or destroyed cartridge actually exported as waste. Retain shell and PCB within this whole article once; use separate constituent streams only after actual disassembly with reconciled transfers. Unauthorised or rejected goods keep their actual burdens and disposition; release permission does not erase physical manufacture. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Waste complete game cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_release`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Actual collected mixed manufacturing waste (`mixed_waste`)

Only one actual co-collected mixed waste with measured gross/tare and actual destination. Keep an independent measured originW subledger for board and shell and label and each packaging origin; these are non-additive contents rather than extra exported waste. Its composition and hazardous status govern provider compatibility; do not substitute a Product or a landfill operation for this Waste. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant mixed manufacturing Waste is limited to final assembly and factory testing and supplies no quantified amount. Use one actual mixed outlet from those operations with its true composition and destination; no automatic split by origins or additional paper/board exports.
- Selected flow: Manufacturing waste, mixed `8a42279e-b14c-408f-98de-e52e0ea3ef3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_release`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

### Process: Packing storage and dispatch service account (`services`)

Actual services in H follow the original released cohort Qc. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Inputs

##### Product flows

###### Packing storage and dispatch service account CN medium-voltage electricity (`services_electricity_mv_cn`)

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result described above; raw electricity remains undivided.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_services`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Packing storage and dispatch service account CN low-voltage electricity (`services_electricity_lv_cn`)

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 result described above; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy_services`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Packing storage and dispatch service account electricity (`services_electricity`)

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_services`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Purchased Printed folding paperboard cartridge box (`retail_box_purchase`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed folding paperboard cartridge box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Supplier-bundled ingress of Printed folding paperboard cartridge box (`retail_box_ingress`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

- Selected flow: Printed folding paperboard cartridge box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 result specified in this description; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### Externally returned Printed folding paperboard cartridge box (`retail_box_er`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed folding paperboard cartridge box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Purchased Printed paper instruction booklet (`manual_purchase`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed paper instruction booklet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Supplier-bundled ingress of Printed paper instruction booklet (`manual_ingress`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

- Selected flow: Printed paper instruction booklet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 result specified in this description; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### Externally returned Printed paper instruction booklet (`manual_er`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed paper instruction booklet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Purchased Cartridge dust sleeve supplied article (`dust_sleeve_purchase`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Cartridge dust sleeve supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Supplier-bundled ingress of Cartridge dust sleeve supplied article (`dust_sleeve_ingress`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

- Selected flow: Cartridge dust sleeve supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 result specified in this description; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### Externally returned Cartridge dust sleeve supplied article (`dust_sleeve_er`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Cartridge dust sleeve supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Corrugated shipping carton (`carton_purchase`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.
- Selected flow: Complete corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Corrugated shipping carton (`carton_ingress`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.
- Selected flow: Complete corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 result specified in this description; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### Corrugated shipping carton (`carton_er`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.
- Selected flow: Complete corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Purchased Corrugated paperboard packing insert (`insert_purchase`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Corrugated paperboard packing insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Supplier-bundled ingress of Corrugated paperboard packing insert (`insert_ingress`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

- Selected flow: Corrugated paperboard packing insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 result specified in this description; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### Externally returned Corrugated paperboard packing insert (`insert_er`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Corrugated paperboard packing insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Purchased Heat-shrink wrapping film supplied article (`shrink_film_purchase`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Heat-shrink wrapping film supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Supplier-bundled ingress of Heat-shrink wrapping film supplied article (`shrink_film_ingress`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

- Selected flow: Heat-shrink wrapping film supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 result specified in this description; collect raw numerators.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `hoskbrew-cartridge-services`; `drludos-snes-manufacture-2020`

###### Externally returned Heat-shrink wrapping film supplied article (`shrink_film_er`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Heat-shrink wrapping film supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Gross returned released cartridge (`cartridge_return_in`)

Preserve actual full physical V by configuration and original cohort; quantities are not reduced by allocation shares or stock changes. Record actual legal/acceptance state separately. Returns and reinspection do not create new Q. Original delivery reversal and inherited manufacture burden remain with the original released cohort. This logistical record is not another reference output or an automatically credited coproduct. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native whole Product at-plant production mix in a manufactured finished state. No fixed capacity or chip type or lifetime or grade/geography is supplied. Its scope is software for game cartridges and excludes CD/DVD; it is not blank flash storage or a die or PCB or console or download. Apply only to the complete executable-bearing cartridge of the declared flash configuration. Returned/dispatched articles must remain physically complete recorded cartridges; genuinely waste/different-state articles use their actual specific flow. Complete required qualifiers: game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence.
- Selected flow: Software cartridges for video game consoles `20e072d2-c6c0-4a85-9dcc-4a9cf9716047`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_services`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

#### Outputs

##### Product flows

###### Printed folding paperboard cartridge box accompanying gross dispatch (`retail_box_shipment`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed folding paperboard cartridge box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### External return of Printed folding paperboard cartridge box (`retail_box_eo`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed folding paperboard cartridge box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Printed paper instruction booklet accompanying gross dispatch (`manual_shipment`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed paper instruction booklet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### External return of Printed paper instruction booklet (`manual_eo`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Printed paper instruction booklet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Cartridge dust sleeve supplied article accompanying gross dispatch (`dust_sleeve_shipment`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Cartridge dust sleeve supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### External return of Cartridge dust sleeve supplied article (`dust_sleeve_eo`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Cartridge dust sleeve supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Corrugated shipping carton (`carton_shipment`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.
- Selected flow: Complete corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Corrugated shipping carton (`carton_eo`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.
- Selected flow: Complete corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Corrugated paperboard packing insert accompanying gross dispatch (`insert_shipment`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Corrugated paperboard packing insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### External return of Corrugated paperboard packing insert (`insert_eo`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Corrugated paperboard packing insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Heat-shrink wrapping film supplied article accompanying gross dispatch (`shrink_film_shipment`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Heat-shrink wrapping film supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### External return of Heat-shrink wrapping film supplied article (`shrink_film_eo`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Heat-shrink wrapping film supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Returned ROM programmer (`asset_external_return`)

Preserve actual full physical V by configuration and original cohort; quantities are not reduced by allocation shares or stock changes. Record actual legal/acceptance state separately. Returns and reinspection do not create new Q. Original delivery reversal and inherited manufacture burden remain with the original released cohort. This logistical record is not another reference output or an automatically credited coproduct. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Cartridge ROM programmer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset_services`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Gross physical cartridge dispatch (`cartridge_dispatch`)

Preserve actual full physical V by configuration and original cohort; quantities are not reduced by allocation shares or stock changes. Record actual legal/acceptance state separately. Returns and reinspection do not create new Q. Original delivery reversal and inherited manufacture burden remain with the original released cohort. This logistical record is not another reference output or an automatically credited coproduct. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native whole Product at-plant production mix in a manufactured finished state. No fixed capacity or chip type or lifetime or grade/geography is supplied. Its scope is software for game cartridges and excludes CD/DVD; it is not blank flash storage or a die or PCB or console or download. Apply only to the complete executable-bearing cartridge of the declared flash configuration. Returned/dispatched articles must remain physically complete recorded cartridges; genuinely waste/different-state articles use their actual specific flow. Complete required qualifiers: game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence.
- Selected flow: Software cartridges for video game consoles `20e072d2-c6c0-4a85-9dcc-4a9cf9716047`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_services`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

##### Waste flows

###### Discarded Printed folding paperboard cartridge box (`retail_box_waste`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.
- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Discarded Printed paper instruction booklet (`manual_waste`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.
- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Discarded Cartridge dust sleeve supplied article (`dust_sleeve_waste`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Discarded Cartridge dust sleeve supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Discarded Corrugated shipping carton (`carton_waste`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.
- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Discarded Corrugated paperboard packing insert (`insert_waste`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.
- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

###### Discarded Heat-shrink wrapping film supplied article (`shrink_film_waste`)

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

- Selected flow: Discarded Heat-shrink wrapping film supplied article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use only the single section 8 normalization result specified in this card description; raw records remain undivided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`

## 7. Allocation and Co-product Handling

This method applies only to attributional cases requiring allocation. Manufacturing originals support product and route and do not support an allocation ratio. The hierarchy below follows ILCD §7.9.2–7.9.3; the QFD example for comparing functions of complex products is not a cartridge-production allocation factor.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_dedicated` | each exchange | Use dedicated collection then actual or virtual subdivision to assign exclusive materials and operations first. Keep separate board routes and versions and orders wherever they have separate data. Programme-memory capacity and code size are descriptors; neither automatically causes the same share of reflow or test energy. | `jrc-ilcd-attributional-2010` |
| `allocate_physical` | unavoidable shared exchanges | After subdivision identify the determining physical causal relationship separately for each remaining exchange and document numerator/denominator and included co-functions. Metered equipment load and occupied time may support an energy share only with actual causal evidence and full zero-output coverage. A physical metric is not automatically causal and the same key must not be imposed on all exchanges. | `jrc-ilcd-attributional-2010` |
| `allocate_residual` | truly inseparable residual | Only an evidenced residual that cannot be assigned by determining physical causality may use contemporaneous market values of actual co-products/functions at the same common-process gate and actual condition. Remove values added by later transport/packing or treatment. Document time and quantity and price evidence and sensitivity. Do not choose freely between mass and economic allocation; no fixed ratio or automated substitution/recycling credit. | `jrc-ilcd-attributional-2010` |
| `allocate_original` | reused game original | Collect one complete accepted original creation system and identify all actual versions and channels drawing on it. Use an evidenced attributional reuse model consistent with its upstream dataset; document allocated share and observed population and uncertainty. Do not charge a complete original to every copied cartridge or convert licence money to energy. Unresolved population and upstream completeness remain data gaps. | `jrc-ilcd-attributional-2010` |
| `allocate_logistics` | physical exchanges and losses | Allocation acts on burden accounts and cannot shrink gross physical movements of articles or packaging or returned assets or carrier water or wastes. Keep V and burden A separate. Failures and unauthorised/rejected production retain their material and service loads; no right or acceptance decision cancels them. Rework adds only actual incremental work to the original inherited vector and does not regenerate Q. | `jrc-ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule column declares the target basis of the one calculation and performs no division during collection. collection_method retains the actual undivided raw aggregation; calculation occurs once in the following table. A service-account reference always belongs to its original released cohort Qc rather than new current-period Q.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | release | finished_cartridge | calibrated weighing and release log | lot; configuration; serial or unique batch member; first release time; net cartridge mass kg; count; release hash; tested functions; reject state; packaging tare; Q; H | Weigh accepted complete cartridges by configuration on a calibrated scale excluding all packaging; deduplicate first release identifiers; record measured samples and count expansion with actual sampling uncertainty. Raw aggregation instruction: Sum undivided first-released net masses into calc_release; reference only calc_normalize afterwards. | kg; item | each release | complete H | all manufacturing and outsourced release sites | per 1 kg reference flow | scale calibration; release signature; test/readback log; BOM and mass reconciliation |
| `cp_material` | receipt | each physical article or formulation | receipts issues and stock | article; actual supply state; BOM route; grade; chemical composition or CAS where applicable; lot; unit; measured receipt; opening and closing raw/WIP/non-WIP; internal issue and return; external return; loss; inherited vector per exchange | Trace each individual supplied article/formulation by lot; reconcile count and independently measured mass; treat embedded content/assay as non-additive; preserve disjoint module/component quantities. Raw aggregation instruction: Aggregate undivided raw movements and inherited vectors; reconcile with calc_stock and calc_physical; reference calc_normalize only. | actual native unit; kg; item | each movement | H plus linked opening history | all storage and assembly sites | per 1 kg reference flow | supplier specification; SDS if applicable; invoices; traveller; scale and stock records |
| `cp_energy` | receipt | each electricity meter | meter interval and equipment record | meter; operation; start/end reading; raw kWh; voltage; geography; supplier boundary; operating load/time; starts; idle; cleaning; failed attempts; rework; H; original Qc if services | Read interval meters including no-output periods; reconcile host/USB and facility overhead without double counting; use a documented physical causal model only when metering cannot separate shared work. Raw aggregation instruction: Sum raw undivided energy; convert once by calc_units; attribute by section 7; use calc_normalize or original-cohort calc_service once. | kWh; MJ; h | each interval and campaign reconciliation | whole H including Q=0 | every actual facility and supplier service scope | per 1 kg reference flow | meter calibration; bills; equipment logs; shared-load model and closure |
| `cp_original` | program | original | version and reuse burden account | original id/hash; complete creation inventory; accepted version; actual reproduction channels and population; reuse share; upstream unit; copied title; licence scope; provider boundaries; uncertainty | Retain one complete upstream original account; reconcile its actual reuse population and copied release identities; distinguish licence-only rights from delivered copying work. Raw aggregation instruction: Retain undivided original and copy-population records; apply allocate_original and then calc_normalize only once for this cohort. | item; upstream native exchange units | per version and actual population update | original creation history plus actual cohort use | developers and original owner plus actual providers | per 1 kg reference flow | development dataset; version provenance; rights record; actual reproduction register; uncertainty |
| `cp_asset` | program | programmer; test_console; asset_external_return | physical asset and service burden register |asset id; actual configuration; measured net article kg; gross external acquisition V; external return V; opening/closing asset pool; actual occupied service; upstream manufacture boundary; supported reuse model; inherited vector; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Record full physical acquisition and returns with independent asset stock closure; derive burden share separately from actual usage and upstream boundary; no default lifetime or purchase per copy. Raw aggregation instruction: Preserve undivided gross V and separate attributable burden; physical movements use calc_physical before calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; item; h | each acquisition/return and use interval | H and original asset history | all actual equipment locations | per 1 kg reference flow | asset register; scale/supplier mass; equipment-use log; upstream asset data and model |
| `cp_service` | program | replication_service; cartridge_return_in; cartridge_dispatch | supplier activity and release-cohort ledger | provider; exact service unit; attempted and accepted copy count; complete coverage; actual performed H work; original release cohort; Qc; opening/closing FG; gross shipment and return V; original-delivery reversal; incremental rework; inherited vector | Verify service delivery unit and supply-state coverage; preserve every gross movement including rejected/unauthorised returns; pair internal first-release transfers and maintain original-cohort historical burden. Raw aggregation instruction: Keep raw service and full V undivided; no future service projection; use calc_service with original Qc once; cancel internal release movements. | item; kg; actual service unit | each service or gross movement | actual H only plus original release history | all providers storage and dispatch sites | per 1 kg reference flow | supplier records; dispatch/return documents; original release register; acceptance/refusal and history |
| `cp_pack` | services | each named packaging card | separate article and cohort pool |packaging identity; actual material; original cohort; Qc; Iopening empty; Iopening attached WIP; Iopening attached FG; Iopening reusable; P; I; ER; S; EO; W; Iclosing empty; Iclosing attached WIP; Iclosing attached FG; Iclosing reusable; internal reuse; originW; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Weigh/record every actual packaging article separately; verify matched count-to-mass by actual configuration; retain full gross shipment/return and independent waste records; track all packaging pools. Raw aggregation instruction: Keep each P/I/ER/S/EO/W raw total undivided; apply calc_packaging closure and calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; item | each movement and closing reconciliation | actual H and original cohort history | all stores and packing/dispatch sites | per 1 kg reference flow | packing BOM; calibrated scales; stock ledger; gross dispatch/return receipts; waste manifests |
| `cp_waste` | receipt | each waste card | actual waste manifest and measured origin |container; actual Waste type; composition; hazardous status; physical origin; gross/tare; net kg; opening/closing waste pool; destination; actual treatment; independent originW; liquid state and species if applicable; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Weigh actual segregated or genuinely co-collected waste once; preserve actual mixed total and non-additive measured originW; record internal rework before final export separately. Raw aggregation instruction: Sum raw undivided physical V by one actual container/destination; avoid total-plus-component double count; reference calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; actual native unit | each collection/export | whole H including failures | all sites and actual treatment providers | per 1 kg reference flow | weighbridge/scale; waste manifest; analysis; treatment receipt; independent origin tracing |
| cp_energy_board | board | each electricity meter | meter interval and equipment record | meter; operation; start/end reading; raw kWh; voltage; geography; supplier boundary; operating load/time; starts; idle; cleaning; failed attempts; rework; H; original Qc if services | Read interval meters including no-output periods; reconcile host/USB and facility overhead without double counting; use a documented physical causal model only when metering cannot separate shared work. Raw aggregation instruction: Sum raw undivided energy; convert once by calc_units; attribute by section 7; use calc_normalize or original-cohort calc_service once. | kWh; MJ; h | each interval and campaign reconciliation | whole H including Q=0 | every actual facility and supplier service scope | per 1 kg reference flow | meter calibration; bills; equipment logs; shared-load model and closure |
| cp_waste_board | board | each waste card | actual waste manifest and measured origin |container; actual Waste type; composition; hazardous status; physical origin; gross/tare; net kg; opening/closing waste pool; destination; actual treatment; independent originW; liquid state and species if applicable; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Weigh actual segregated or genuinely co-collected waste once; preserve actual mixed total and non-additive measured originW; record internal rework before final export separately. Raw aggregation instruction: Sum raw undivided physical V by one actual container/destination; avoid total-plus-component double count; reference calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; actual native unit | each collection/export | whole H including failures | all sites and actual treatment providers | per 1 kg reference flow | weighbridge/scale; waste manifest; analysis; treatment receipt; independent origin tracing |
| cp_energy_program | program | each electricity meter | meter interval and equipment record | meter; operation; start/end reading; raw kWh; voltage; geography; supplier boundary; operating load/time; starts; idle; cleaning; failed attempts; rework; H; original Qc if services | Read interval meters including no-output periods; reconcile host/USB and facility overhead without double counting; use a documented physical causal model only when metering cannot separate shared work. Raw aggregation instruction: Sum raw undivided energy; convert once by calc_units; attribute by section 7; use calc_normalize or original-cohort calc_service once. | kWh; MJ; h | each interval and campaign reconciliation | whole H including Q=0 | every actual facility and supplier service scope | per 1 kg reference flow | meter calibration; bills; equipment logs; shared-load model and closure |
| cp_waste_program | program | each waste card | actual waste manifest and measured origin |container; actual Waste type; composition; hazardous status; physical origin; gross/tare; net kg; opening/closing waste pool; destination; actual treatment; independent originW; liquid state and species if applicable; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Weigh actual segregated or genuinely co-collected waste once; preserve actual mixed total and non-additive measured originW; record internal rework before final export separately. Raw aggregation instruction: Sum raw undivided physical V by one actual container/destination; avoid total-plus-component double count; reference calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; actual native unit | each collection/export | whole H including failures | all sites and actual treatment providers | per 1 kg reference flow | weighbridge/scale; waste manifest; analysis; treatment receipt; independent origin tracing |
| cp_material_housing | housing | each physical article or formulation | receipts issues and stock | article; actual supply state; BOM route; grade; chemical composition or CAS where applicable; lot; unit; measured receipt; opening and closing raw/WIP/non-WIP; internal issue and return; external return; loss; inherited vector per exchange | Trace each individual supplied article/formulation by lot; reconcile count and independently measured mass; treat embedded content/assay as non-additive; preserve disjoint module/component quantities. Raw aggregation instruction: Aggregate undivided raw movements and inherited vectors; reconcile with calc_stock and calc_physical; reference calc_normalize only. | actual native unit; kg; item | each movement | H plus linked opening history | all storage and assembly sites | per 1 kg reference flow | supplier specification; SDS if applicable; invoices; traveller; scale and stock records |
| cp_energy_housing | housing | each electricity meter | meter interval and equipment record | meter; operation; start/end reading; raw kWh; voltage; geography; supplier boundary; operating load/time; starts; idle; cleaning; failed attempts; rework; H; original Qc if services | Read interval meters including no-output periods; reconcile host/USB and facility overhead without double counting; use a documented physical causal model only when metering cannot separate shared work. Raw aggregation instruction: Sum raw undivided energy; convert once by calc_units; attribute by section 7; use calc_normalize or original-cohort calc_service once. | kWh; MJ; h | each interval and campaign reconciliation | whole H including Q=0 | every actual facility and supplier service scope | per 1 kg reference flow | meter calibration; bills; equipment logs; shared-load model and closure |
| cp_waste_housing | housing | each waste card | actual waste manifest and measured origin |container; actual Waste type; composition; hazardous status; physical origin; gross/tare; net kg; opening/closing waste pool; destination; actual treatment; independent originW; liquid state and species if applicable; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Weigh actual segregated or genuinely co-collected waste once; preserve actual mixed total and non-additive measured originW; record internal rework before final export separately. Raw aggregation instruction: Sum raw undivided physical V by one actual container/destination; avoid total-plus-component double count; reference calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; actual native unit | each collection/export | whole H including failures | all sites and actual treatment providers | per 1 kg reference flow | weighbridge/scale; waste manifest; analysis; treatment receipt; independent origin tracing |
| cp_energy_release | release | each electricity meter | meter interval and equipment record | meter; operation; start/end reading; raw kWh; voltage; geography; supplier boundary; operating load/time; starts; idle; cleaning; failed attempts; rework; H; original Qc if services | Read interval meters including no-output periods; reconcile host/USB and facility overhead without double counting; use a documented physical causal model only when metering cannot separate shared work. Raw aggregation instruction: Sum raw undivided energy; convert once by calc_units; attribute by section 7; use calc_normalize or original-cohort calc_service once. | kWh; MJ; h | each interval and campaign reconciliation | whole H including Q=0 | every actual facility and supplier service scope | per 1 kg reference flow | meter calibration; bills; equipment logs; shared-load model and closure |
| cp_asset_release | release | programmer; test_console; asset_external_return | physical asset and service burden register |asset id; actual configuration; measured net article kg; gross external acquisition V; external return V; opening/closing asset pool; actual occupied service; upstream manufacture boundary; supported reuse model; inherited vector; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Record full physical acquisition and returns with independent asset stock closure; derive burden share separately from actual usage and upstream boundary; no default lifetime or purchase per copy. Raw aggregation instruction: Preserve undivided gross V and separate attributable burden; physical movements use calc_physical before calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; item; h | each acquisition/return and use interval | H and original asset history | all actual equipment locations | per 1 kg reference flow | asset register; scale/supplier mass; equipment-use log; upstream asset data and model |
| cp_waste_release | release | each waste card | actual waste manifest and measured origin |container; actual Waste type; composition; hazardous status; physical origin; gross/tare; net kg; opening/closing waste pool; destination; actual treatment; independent originW; liquid state and species if applicable; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Weigh actual segregated or genuinely co-collected waste once; preserve actual mixed total and non-additive measured originW; record internal rework before final export separately. Raw aggregation instruction: Sum raw undivided physical V by one actual container/destination; avoid total-plus-component double count; reference calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; actual native unit | each collection/export | whole H including failures | all sites and actual treatment providers | per 1 kg reference flow | weighbridge/scale; waste manifest; analysis; treatment receipt; independent origin tracing |
| cp_energy_services | services | each electricity meter | meter interval and equipment record | meter; operation; start/end reading; raw kWh; voltage; geography; supplier boundary; operating load/time; starts; idle; cleaning; failed attempts; rework; H; original Qc if services | Read interval meters including no-output periods; reconcile host/USB and facility overhead without double counting; use a documented physical causal model only when metering cannot separate shared work. Raw aggregation instruction: Sum raw undivided energy; convert once by calc_units; attribute by section 7; use calc_normalize or original-cohort calc_service once. | kWh; MJ; h | each interval and campaign reconciliation | whole H including Q=0 | every actual facility and supplier service scope | per 1 kg reference flow | meter calibration; bills; equipment logs; shared-load model and closure |
| cp_service_services | services | replication_service; cartridge_return_in; cartridge_dispatch | supplier activity and release-cohort ledger | provider; exact service unit; attempted and accepted copy count; complete coverage; actual performed H work; original release cohort; Qc; opening/closing FG; gross shipment and return V; original-delivery reversal; incremental rework; inherited vector | Verify service delivery unit and supply-state coverage; preserve every gross movement including rejected/unauthorised returns; pair internal first-release transfers and maintain original-cohort historical burden. Raw aggregation instruction: Keep raw service and full V undivided; no future service projection; use calc_service with original Qc once; cancel internal release movements. | item; kg; actual service unit | each service or gross movement | actual H only plus original release history | all providers storage and dispatch sites | per 1 kg reference flow | supplier records; dispatch/return documents; original release register; acceptance/refusal and history |
| cp_asset_services | services | programmer; test_console; asset_external_return | physical asset and service burden register |asset id; actual configuration; measured net article kg; gross external acquisition V; external return V; opening/closing asset pool; actual occupied service; upstream manufacture boundary; supported reuse model; inherited vector; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components |Record full physical acquisition and returns with independent asset stock closure; derive burden share separately from actual usage and upstream boundary; no default lifetime or purchase per copy. Raw aggregation instruction: Preserve undivided gross V and separate attributable burden; physical movements use calc_physical before calc_normalize or calc_service once. Independently observe non-water J_in/J_out for actual packaging-pool transfers and preserve the existing measured water in/out, including no-repair natural humidity. Retain complete wet states, disjoint six legs, same-side OTHER duplicate-event proof and matched internal pool handoffs; every actual new material/stream gets its own atomic card. | kg; item; h | each acquisition/return and use interval | H and original asset history | all actual equipment locations | per 1 kg reference flow | asset register; scale/supplier mass; equipment-use log; upstream asset data and model |

### Calculation Rules

Ordinary wastes and rejects and samples and their sales are not other functions to which manufacturing burden may be removed; production loads remain in the target cohort or zero-output account. A waste constituent-origin vector is traceability and does not establish coproduct allocation that removes those loads.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_release` | finished_cartridge | Q = sum of unique first-release net complete-cartridge masses in H. Exclude packaging and rejects; closing newly released FG remains in Q. | cp_release | Q |  |
| `calc_units` | all inventory rows | Convert each raw record to its actual numerator unit before attribution. Electricity MJ = raw kWh × 3.6. Integrate a genuine rate over its measured interval once; use independently measured substance/state density only where needed. Do not invent factors. |raw_native; cp_energy; cp_energy_board; cp_energy_program; cp_energy_housing; cp_energy_release; cp_energy_services | raw_converted |  |
| `calc_stock` | all inventory rows | For each exchange maintain opening inherited vector + actual acquired/incurred vector = genuinely unconsumed closing inherited vector + target first-release-cohort attributed vector + evidenced transfers to genuinely other functions. Ordinary waste/reject/sample burdens are not deducted as other functions; related zero-output loads remain visible. Released closing FG and already-performed services are not unconsumed closing vectors. Internal transfers cancel. Do not use a mass fraction to guess a chemical or energy vector. Separate unconsumed raw stock and WIP from released FG. |cp_material; cp_service; cp_waste; cp_waste_board; cp_waste_program; cp_material_housing; cp_waste_housing; cp_waste_release; cp_service_services | burden_vectors | `jrc-ilcd-attributional-2010` |
| `calc_physical` | all inventory rows |V is the actual full gross physical exchange in its own native unit. Reconcile each article and constituent independently: opening physical pool + external receipt = closing pool + gross outward movement + actual physical consumption/loss as appropriate. Whole-article and separately supplied constituent ledgers are disjoint or explicitly bridged; cancel internal handovers. X only removes same-side duplicate actual OTHER flows and never stock or opposite-side movements. Each actual packaging pool includes disjoint non-water J_in/J_out as well as its existing measured_external_water_in / measured_external_water_out under calc_packaging; X cannot cancel true increments or closing stock. |cp_material; cp_asset; cp_pack; cp_waste; cp_service; cp_waste_board; cp_waste_program; cp_material_housing; cp_waste_housing; cp_asset_release; cp_waste_release; cp_service_services; cp_asset_services | V |  |
| `calc_packaging` | all inventory rows |For each packaging article separately: Iopening_empty + Iopening_WIP + Iopening_FG + Iopening_reusable + P + I + ER + J_in + measured_external_water_in = Iclosing_empty + Iclosing_WIP + Iclosing_FG + Iclosing_reusable + S + EO + W + J_out + measured_external_water_out. Water already embodied in a supplied article is non-additive content rather than another receipt. Record real natural adsorption/desorption from independent measurements; do not fit water to a residual. Internal reuse cancels. When W is in the one mixed waste total retain originW but do not export its mass again. The opening and closing states and all six article legs are complete actual wet quantities in kg. ER is external return received, EO external return sent, S full gross shipment, W full wet discard. J_in/J_out are independently measured non-water repair, replacement, deposit, residue or other material transfers across this specific packaging-pool boundary not already included in the whole article legs; no repair or material event is presumed. Existing measured_external_water_in / measured_external_water_out remain independently measured actual water transfers, including natural adsorption/desorption with no repair. Split actual wet added/removed material into disjoint non-water J and measured water using actual composition evidence, no default ratio or density. Material/water already inside opening, closing or a whole P/I/ER/S/EO/W is non-additive content, not another increment. Full W contains substrate, retained residue and water once; its nested children are not additional J_out or measured_external_water_out unless genuinely separated before crossing. Matched internal pool transfers cancel on consolidation without another purchase, provider service or Q. |cp_pack; cp_waste; cp_waste_board; cp_waste_program; cp_waste_housing; cp_waste_release; J_in; J_out; measured_external_water_in; measured_external_water_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_material_composition; nested_whole_W_components | packaging_closure |  |
| `calc_normalize` | all inventory rows | For Q > 0 apply A/Q once for attributable manufacturing burden and V/Q once for full physical movements. A is the actual converted and section-7-attributed burden transferred to first release after inherited-vector reconciliation. Cards and protocol aggregation only reference this result. For Q = 0 retain raw loads and unresolved balances without unit results. | Q; V; burden_vectors; raw_converted | unit_manufacture |  |
| `calc_service` | all inventory rows | For each original released cohort Qc > 0 normalize only actual H incremental service burden by Qc once and its full gross physical V by Qc once. Retain original delivery reversal and original inherited vector; do not subtract historical manufacture from new Q. Reinspection/rework/redelivery creates no new Q. Qc = 0 or unknown leaves raw services without unit result. Pair/cancel internal Q handover and do not count a logistical dispatch as another product output. |cp_service; cp_pack; cp_energy; cp_asset; Qc; V; cp_energy_board; cp_energy_program; cp_energy_housing; cp_energy_release; cp_asset_release; cp_energy_services; cp_service_services; cp_asset_services | unit_service |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all cards and reference | Preserve full native flow context and actual supplier compatibility including every basename/synonym/comment and CAS and grade and route and form and geography and media and type and all properties. Require the exact referenced property/unit-group version chain before UUID adoption; no latest-version inference. A query candidate is not a direct public-state verification. | supplier BOM; complete identity and unit evidence |
| `dq_quantity` | all numerator records | Use real calibrated measurements and actual composition; never prescribe capacity or unit mass or yield or programming power or recipe or temperature/time or lifespan. Unmeasured core stages remain explicit completeness holds. Ordinary unresolved auxiliary provider identity remains distinct from core methodology evidence. | calibration; sampling; raw and calculated records |
| `dq_context` | source applicability | Retain source-specific scope and adjoining contrary examples. The historical SNES case supports flash assembly and an actual failure rather than contemporary factory yields; HoskBrew supports services rather than a measured SMT recipe. Manufacturing originals do not establish allocation. | complete originals and source-specific applicability assessment |
| `dq_temporal` | manufacture and released cohorts | Cover the whole declared H and every actual site; keep each exchange inherited vector and opening/closing physical pool. Include starts and stops and idle and clean-up and unsuccessful batches and rework. Document unobserved future services as unknown. | lot travellers; stock and cohort ledgers |
| `dq_software` | original and service suppliers | Report original creation coverage and actual reuse-population uncertainty plus rights and copying boundaries and double-count protection. Price and code size and cartridge kg do not substitute for actual activity. | original dataset; rights/provenance; provider coverage |
| `dq_reconciliation` | all physical and burden systems | Report independent mass and relevant element/species balances with actual water states and sinks. Keep real mixture totals and origin subledgers non-additive. No fitted density or invented repair/material to force closure; unexplained residuals stay visible. | mass/species balances; independent measurements |

## 9. Validation Rules

### Original acceptance cohort and complete physical history

Q0 denotes the locked positive original first-acceptance cohort mass; Q=0 denotes a zero-output observation. They are different accounts. Original-cohort service uses the same original Q0=Qc and observed H, not a new mass or a second normalization.

Lock original cohort c and original Q0=Qc=sum(M_e) at unique first conforming whole-cartridge acceptance events e. Each M_e is calibrated complete net wet cartridge kg at that event with the actual integral supplied components once, packaging and test assets excluded. Manufacturing Q is the original Qc of the declared manufacturing cohort. Do not recompute Qc from present surviving mass, net shipment, later reinspection or wet/dry changes. Failed/no-release Q=0 retains all raw loads and no normalized result. Opening raw/WIP carries its measured physical stock and inherited exchange vector once; an opening accepted cartridge retains its original Qc and manufacture history, not a new purchase or acceptance.

For every original accepted event partition its original-acceptance basis into disjoint net external possession, on-site released FG, quarantine, repair/rework WIP, internal use, irreversible destroyed/lost portions and other documented terminal dispositions. Their current/terminal sum equals original Qc independently of present wet physical mass. Gross dispatch and returns remain complete physical events; a return reverses the corresponding external possession before later redispatch moves the same surviving entitlement. Split partial loss and survival on a documented original basis; do not restore lost water/parts to the survivor and also export the loss. Present wet stocks, evaporation, removed/new parts and all physical exits have their own conservation bridge. Unknown genealogy or cohort assignment stays unresolved with complete raw totals; loops, postacceptance destruction, retest and failed work create no new Q.

### Whole contaminated exits and nonoverlapping provider demand

Record actual receiver-transfer t and full wet whole outlet Qt once: discarded hardware, packaging, wipe, swab, cloth, filter or equipment substrate plus actually retained solvent, dust, formulation residues and water. Dry substrate, contained chemical and water ledgers are reconciled non-additive children. They become separate external waste exits only after real physical separation before the boundary with separate transfer IDs. Package W or removed-part origins within one mixed outlet are traced children, never a second export or second treatment demand. Actual receiver receipts and total treatment demand remain Qt, independent of environmental attribution.

Assign environmental/service vectors A_tc to nonoverlapping original cohorts from demonstrated causal demand and the allocation hierarchy. Reconcile sum_c(A_tc) plus actual other-function/unassigned vectors to the one actual total provider demand. Physical Qt remains in one event register; reports link to it rather than charge the full event again to each cohort or shrink the physical export by an allocation fraction. Physical V/D context disclosures are non-additive across overlapping reports. Treatment and service inventory is independently assigned A_tc/D, using manufacturing Q or original Qc with observed H; it is not an extra full Qt/D for every cohort. Keep genuinely unknown allocation unresolved. Supplier-embedded history/treatment and fully expanded corresponding direct inventories are mutually exclusive representations, not additive purchases.


### Actual programming, formulation and producer boundaries

The first-party manufacturing account establishes an actual new flash-based game cartridge, not merely blank storage or a PCB. Its ROM writing, working-cartridge/console testing, shell integration and labelled physical release support this product gate. It does not state that a particular readback/hash algorithm or programming fixture settings were used. Record the actual accepted release image, file hash/provenance, target mapping, supported board/programmer/interface and write/verification logs. Readback comparison is an explicit technical verification requirement only with actual supported reads and defined comparison coverage; it is not a retrospectively asserted observation from the source. Otherwise retain the actual supported integrity/functional acceptance method and its evidence; unresolved essential programming/verification applicability keeps that concrete route on hold. Do not waive it by future collection wording or a finite check.

The account informally calls solder paste glue and reflow drying. This does not establish solder alloy, flux/solvent chemistry, temperature profile, loss or molecular reaction. Use actual supplied whole paste formulation once with disjoint metal/flux/solvent/water child ledgers, actual reflow energy and measured species/phase destinations. Do not assume reacting species are conserved, all solvent evaporates, missing mass is water or all input solder becomes joint metal. Captured residue on a board, cloth, filter or container stays in that whole contaminated article until real separation. Each actual separately supplied cleaning preparation, inert gas, utility, waste and molecular species needs its own atomic card before completeness is claimed; a source photograph supplies no recipe or factor.

Every actual supplied bare board, packaged IC, capacitor, resistor, populated module, shell, label and packaging article requires a genuine complete upstream producer or an expanded mutually exclusive actual inventory. Include real semiconductor fabrication/packaging, bare-board manufacture, SMT when supplied, shell forming, finishes, utilities, maintenance and waste as applicable. Actual owned assembly/reflow/programming/testing and shell forming cannot be hidden behind a paper supplier gate. HoskBrew describes both onsite ROM flashing and shell/manufacturing services; the first-party case sources professional bare boards and US shell/printing suppliers. Keep actual provider boundaries distinct, without requiring the same supplier/SKU across independent evidence. A purchased complete recorded cartridge cannot replace this required manufacturing route.

### Original software account and maintained production fleet

Retain the actual reusable original game-version account, including original development/build/test resources and any inherited earlier-version work once, separate from present copying/programming. Record the actual eligible reuse population and allocation period, versions/releases/media and original-account balance in compatible delivery units; the portions assigned to real uses plus remaining/unassigned/other-use portions must equal the one original account. No fixed copies, licence price, code size, cartridge mass or an assumed lifetime defines that population. A supplier's complete original/replication service and its expanded constituent activities are mutually exclusive. Actual incomplete/failed prototypes and builds retain their original loads; every physical copy does not repeat full redevelopment. If original allocation or service unit is unknown retain totals and unresolved attribution.

Preserve physical receipt/opening/closing/external-transfer/retirement of the actual programmer, test console, reflow oven, stencil and production/test fixtures independently from their observed service demand, maintenance and original cohorts. Compatible provider units and actual use/history/remaining capacity govern attribution, not an invented asset lifetime or whole machine per cartridge kg. Keep actual integral components and installed fluids once, and whole wet contaminated discards separately from non-additive constituent accounts. Postacceptance services retain original Qc/H; no rewriting or returned/retested/reworked cartridge earns a second first-acceptance event.


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference and qualifiers | Require one complete recorded physical cartridge and all ordered qualifiers. Reject a blank flash device or bare IC/PCB or console or download or merely a licence as the reference article. Enforce actual storage technology and interface and supply-state/provider limits on every adopted identity. | `unsd-cpc38582`; `drludos-snes-manufacture-2020` |
| `validate_release` | first release Q | Q sums unique complete-cartridge net masses at their first successful release only. Remove all packaging/liner and reject mass; retain actual integral components once. Record count and measured mass without an assumed piece-to-kg factor. Q=0 keeps every raw load and emits no unit result. Reinspection or redelivery is not new Q. | `drludos-snes-manufacture-2020` |
| `validate_balance` | physical and inherited burden ledgers | Require opening/closing raw and WIP and non-WIP/FG pools and actual gross inputs/outputs at manufacturing and service and combined gates. Preserve a separate inherited vector for each exchange and the original release-cohort link for returns and later work. Do not subtract first-released closing FG from manufacture burden. One residual cannot solve two unknown quantities. | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services` |
| `validate_packaging` | each actual packaging article |Reconcile P/I/ER/S/EO/W for every actual type and cohort. External returns are not purchases; internal reuse cancels. Gross outward movement includes unsuccessful/rejected shipments. Maintain all actual stock including packaging attached to WIP/FG. Mixed-container originW remains a non-additive subledger and one provider handles its actual total once. Each actual packaging pool includes disjoint non-water J_in/J_out as well as its existing measured_external_water_in / measured_external_water_out under calc_packaging; X cannot cancel true increments or closing stock. | `hoskbrew-cartridge-services` |
| `validate_calculation` | all numeric exchange results | Collect raw numerator records without division. Convert actual units or integrate genuine rates once before causal attribution; normalize manufacturing A/Q once or physical V/Q once and services on original Qc once. Cards and protocol aggregation only reference that calculation. Distinguish integrated volumes from rates; material-specific density at measured state is required for volume-to-mass. Unknown relationships are review-required. |  |
| `validate_completeness` | actual operations and source limitations | Require full actual programming/verification and function tests and upstream links; preserve all failed or zero-output loads and omitted-flow gaps. Source industry capability is not a factory measurement and manufacturing sources do not justify allocation. Apply the attributional hierarchy with its original context; sources alone grant neither methodological approval nor a claim about all production technologies. | `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`; `jrc-ilcd-attributional-2010` |



### Packaging-pool wet mass and observation bridge

Iopening_empty + Iopening_WIP + Iopening_FG + Iopening_reusable + P + I + ER + J_in + measured_external_water_in = Iclosing_empty + Iclosing_WIP + Iclosing_FG + Iclosing_reusable + S + EO + W + J_out + measured_external_water_out. The opening and closing states and all six article legs are complete actual wet quantities in kg. ER is external return received, EO external return sent, S full gross shipment, W full wet discard. J_in/J_out are independently measured non-water repair, replacement, deposit, residue or other material transfers across this specific packaging-pool boundary not already included in the whole article legs; no repair or material event is presumed. Existing measured_external_water_in / measured_external_water_out remain independently measured actual water transfers, including natural adsorption/desorption with no repair. Split actual wet added/removed material into disjoint non-water J and measured water using actual composition evidence, no default ratio or density. Material/water already inside opening, closing or a whole P/I/ER/S/EO/W is non-additive content, not another increment. Full W contains substrate, retained residue and water once; its nested children are not additional J_out or measured_external_water_out unless genuinely separated before crossing. Matched internal pool transfers cancel on consolidation without another purchase, provider service or Q.

The raw-observation bridges are L_in_observed - X_in = P + I + ER + J_in + measured_external_water_in and L_out_observed - X_out = S + EO + W + J_out + measured_external_water_out. L sums are observation-side totals, not extra provider demand or physical inventory. Map every X to an exact duplicate OTHER observation on the same event/component/unit/side already represented once by the canonical side. After reconciliation every real non-water/water increment remains once; X never cancels true retained ingress, closing/opening stock, opposite-side movements or nested W merely because it remains in stock. With disjoint raw observations X=0. Internal attachment/reuse alone is no pool-boundary crossing; real material transfers from another internal pool have matched source/destination entries and cancel at the combined boundary. Actual provider totals, full wet W and physical inventories remain independent of original Q0=Qc/H and nonoverlapping A/Q attribution. Unknown observations remain unresolved; no residual-fit or future permission closes an unknown.


### Complete consumed applicability paragraphs

#### Source chapter 1 / 1

This PCR covers complete physical console cartridges carrying an identified executable game. The evidenced route uses electrically programmable flash-memory boards and supplied shells through first quality release of the complete net cartridge. Onsite bare-board placement and solder-paste reflow and programming and readback plus actual-console functional tests are collected only where performed; purchased complete populated modules and the parts embodied within them are mutually exclusive inputs. Do not reduce manufacture to buying a completed recorded cartridge and putting it in a box. Sources: `drludos-snes-manufacture-2020`; `hoskbrew-cartridge-services`.

#### Source chapter 1 / 2

The classification note distinguishes cartridges from CDs/DVDs and other carriers. Optical or magnetic media and downloads and blank storage cards and separate chips and bare PCBs and host consoles and licence-only transactions are excluded as reference products. Mask-ROM production cannot be represented by electrical flashing; a download-triggering key card without the complete recorded executable cannot directly use this route. Another memory technology needs evidence and process review within this identity rather than a parallel category identity. A mass reference does not imply equal gameplay function or duration between different games. Source: `unsd-cpc38582`.

#### Source chapter 3 / 1

All qualifiers must remain in consumable metadata or reference-flow context. Q is the sum of measured net masses of unique complete cartridges first released in H. Actual integral articles and their true constituent content count once; packaging and detached liner are outside Q. Retain measured count and configuration-specific net mass without inventing kg/item or capacity or code size or yield or lifetime.

#### Source chapter 6 / 1

Every physical card uses only the single V/Q or original-cohort V/Qc result for its full actual physical V; A or economic/service fractions cannot replace physical quantities. Attributable supplier burden A is accounted once in a separate burden dimension according to actual original/manufacture scope; physical disclosure alone does not generate another purchase/provider demand/credit. Units for original reuse and actual copying services describe their actual delivery object and do not turn cartridge kg into software units.

#### Source chapter 6 / 2

Each card below is one atomic exchange. Applicability requires actual material and route records; missing measurement is not absence. Add a specific card and verify provider and unit for every actual unlisted exchange. Each process preamble applies together with the ancestor boundary and calculation rules.

#### Source chapter 6 / 3

Match supplied state and inventory before irreversible processing. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Source chapter 6 / 4

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. Applies only to a fully populated supplied flash-memory board; no separate purchase of the enclosed chips or solder. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 5

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native finished manufactured printed-circuit Product at plant. Use only the actual patterned unpopulated supplied board; no laminate-panel intermediate or populated module substitution. No area-to-mass/density or package weight factor is supplied; collect actual mass.

#### Source chapter 6 / 6

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant production-mix Product is packaged and ready for SMT; synonyms include packaged IC/QFP/BGA/CSP/SMT IC. Its comment requires the upstream intermediate identity to match the PCBA-chain exchange. Use one actual packaged chip of the declared function and package; no bare die/wafer or complete storage module. No CAS/node/capacity or fixed geography beyond global scope is specified. If a package performs more than one support function count that physical package once and retain function subledgers as non-additive.

#### Source chapter 6 / 7

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant production-mix Product is packaged and ready for SMT; synonyms include packaged IC/QFP/BGA/CSP/SMT IC. Its comment requires the upstream intermediate identity to match the PCBA-chain exchange. Use one actual packaged chip of the declared function and package; no bare die/wafer or complete storage module. No CAS/node/capacity or fixed geography beyond global scope is specified. If a package performs more than one support function count that physical package once and retain function subledgers as non-additive.

#### Source chapter 6 / 8

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant production-mix Product is packaged and ready for SMT; synonyms include packaged IC/QFP/BGA/CSP/SMT IC. Its comment requires the upstream intermediate identity to match the PCBA-chain exchange. Use one actual packaged chip of the declared function and package; no bare die/wafer or complete storage module. No CAS/node/capacity or fixed geography beyond global scope is specified. If a package performs more than one support function count that physical package once and retain function subledgers as non-additive.

#### Source chapter 6 / 9

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native capacitor is an industrial electronic passive-component input at plant; inspected synonyms span electrolytic/ceramic/film/tantalum/super/variable/fixed capacitors without prescribing one of them. General lifecycle/route/quality text does not provide a numerical recipe or an acceptance certification. Declare the actual single capacitor type and grade; different parts are separate rows.

#### Source chapter 6 / 10

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. For individually supplied parts on the actual BOM only; create separate cards for different actual grades or support-chip functions. No package mass or chip capacity is assumed. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native manufactured finished Product at-plant production mix excludes heating resistors explicitly. Use only a genuine electronic resistor; do not substitute heating elements or resistive raw material. No electrical rating or resistance value is assumed.

#### Source chapter 6 / 11

One actual supplied article only. Record lot and delivery state plus measured gross receipts and movements. Use a disjoint BOM route: a purchased populated module includes its PCB and chips once; separately supplied parts belong only to the site-assembled quantity. An unresolved UUID is not an omitted exchange. Count the whole supplied formulation once. Alloy and flux composition require its actual specification; neither alloy nor solvent recipe is prescribed. Assay is a non-additive subledger. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 12

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

#### Source chapter 6 / 13

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

#### Source chapter 6 / 14

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 15

Only actual onsite component assembly; purchased populated modules bypass it. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Source chapter 6 / 16

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

#### Source chapter 6 / 17

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

#### Source chapter 6 / 18

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 19

Only actual separately collected populated cartridge boards rejected during SMT/reflow; programming/function-test damage is recorded separately. Native global at-plant Waste is specifically rejected PCBA from SMT and reflow; PWB/PCBA/electronic-scrap synonyms do not broaden that route. No quantity is supplied. This bound card covers only actual SMT/reflow rejects; programming-test board rejects use program_board_reject separately and physical rework transfers are not waste.

#### Source chapter 6 / 20

Include actual file transfer and programming attempts plus test equipment. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Source chapter 6 / 21

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

#### Source chapter 6 / 22

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

#### Source chapter 6 / 23

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 24

Only the actual physical programmer acquired across the asset boundary. Preserve full gross article mass and its external return movements; do not buy an entire programmer for each programming attempt. Keep the physical V ledger separate from attributable manufacture/service burden and supported lifetime-use share; no assumed lifetime or allocation fraction. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 25

One identified accepted original version reused for physical copies and any other actual channels. Keep its complete creation inventory and actual reuse population in the upstream original account; assign the supported reuse share once without treating every cartridge as a newly developed original. Native item is a count of this original only and never kg of code or cartridges. An invoice for a licence is not energy or an emission factor. The item display and native Item(s) are the same physical count unit with factor 1 for an original; this never determines cartridge kg/item. Unknown reuse population leaves this linked burden unresolved. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 26

Applies only to one actual contracted copying activity with a verified delivery unit and declared input/output coverage. Distinguish attempted and accepted copies. Use either its specific service dataset or expanded supplier atomic activity records for the same operation; never both. A mere right to copy is not a physical copying service. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 27

Only an actual separately collected populated game-cartridge board rejected after programming or functional test; preserve full failed loads and measured net mass. It is not an automatic extension of the SMT/reflow waste identity. If physically placed in the one real mixed waste container retain non-additive originW only and do not export this component again. Collect raw numerators through cp_waste and use the one result of calc_normalize.

#### Source chapter 6 / 28

Use supplied shells; no assumed onsite injection moulding. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Source chapter 6 / 29

One supplied moulded shell article set for one cartridge; record each housing half and actual polymer/additive specification within the article BOM. No polymer identity or onsite moulding recipe is assumed. Shell manufacture remains upstream. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native unspecified plastic enclosure Product has enclosure/casing/chassis/shell synonyms and an industry-average-estimate mix descriptor. It does not prescribe polymer/grade/additives or moulding conditions and does not verify a supplier inventory. Use only one supplied cartridge shell article matching actual composition and provider; no resin and shell double purchase.

#### Source chapter 6 / 30

Only if separate screws are actually fitted; record actual material and coating and measured supplied mass. Screws already included in the supplied shell article are not purchased again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 31

One supplied finished label including its adhesive and printed substrate once; detachable liner is excluded from Q and separately tracked. The label retained on the accepted cartridge belongs to net cartridge mass. Do not repurchase its ink or adhesive. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 32

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

#### Source chapter 6 / 33

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

#### Source chapter 6 / 34

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 35

One actual detached liner waste stream; its paper or film and release coating require actual supply evidence. Exclude it from cartridge net mass. Do not infer paper or polyethylene from the label name. Mixed disposal follows the one-container rule. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 36

Only complete cartridges first passing declared release criteria enter Q. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Source chapter 6 / 37

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

#### Source chapter 6 / 38

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

#### Source chapter 6 / 39

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 40

The actual test host is supporting equipment rather than cartridge output. Preserve gross physical acquisition and external returns separately from attributed asset burden. Meter console display and programmer electricity without counting a USB supply twice. Add actual separate monitor or computer cards if outside an already covered service boundary. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native finished manufactured console Product includes TV-receiver-type consoles and handheld consoles. Use the actual complete test host with its own measured net mass and asset history; no console is contained in the cartridge Q and no fixed hardware life is implied.

#### Source chapter 6 / 41

The one finished reference article includes its populated PCB and programmed flash memory plus actual support components and supplied shell and integral label once. It is not a blank storage device or chip or bare PCB or console or download. Preserve console compatibility and memory technology plus release hash and all section 3 qualifiers. Q is first release net cartridge mass only; retain every failure and zero-output load upstream. Packaging is excluded; a released cartridge held in finished stock has already entered Q. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native whole Product at-plant production mix in a manufactured finished state. No fixed capacity or chip type or lifetime or grade/geography is supplied. Its scope is software for game cartridges and excludes CD/DVD; it is not blank flash storage or a die or PCB or console or download. Apply only to the complete executable-bearing cartridge of the declared flash configuration. Returned/dispatched articles must remain physically complete recorded cartridges; genuinely waste/different-state articles use their actual specific flow. Complete required qualifiers: game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence.

#### Source chapter 6 / 42

Only a whole rejected or destroyed cartridge actually exported as waste. Retain shell and PCB within this whole article once; use separate constituent streams only after actual disassembly with reconciled transfers. Unauthorised or rejected goods keep their actual burdens and disposition; release permission does not erase physical manufacture. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 43

Only one actual co-collected mixed waste with measured gross/tare and actual destination. Keep an independent measured originW subledger for board and shell and label and each packaging origin; these are non-additive contents rather than extra exported waste. Its composition and hazardous status govern provider compatibility; do not substitute a Product or a landfill operation for this Waste. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native global at-plant mixed manufacturing Waste is limited to final assembly and factory testing and supplies no quantified amount. Use one actual mixed outlet from those operations with its true composition and destination; no automatic split by origins or additional paper/board exports.

#### Source chapter 6 / 44

Actual services in H follow the original released cohort Qc. Preserve actual batch inputs/outputs and start/idle/failure loads. Physical quantities and inherited burden vectors are separate; pair and cancel internal transfers between adjacent processes.

#### Source chapter 6 / 45

Use this Product only for actual CN user-side 1–35 kV medium-voltage grid-average consumption mix. The complete native identity is Alternating current with synonym AC and grid-average supply and consumption mix to user and CN geography; no separate CAS or fuel recipe or specific power station is declared. Its sole reference property is Net calorific value linked to the exact energy unit group and reference MJ rather than a mass group. Do not use for low voltage or another country or dedicated incineration generation. Partition meters disjointly with the other-supply card below and avoid duplicate transformer/USB supplies. V preserves full actual delivered electricity for the process; attributable burden A is separate and economic shares do not shrink physical logistics. Normalize once within the disjoint manufacturing calc_normalize or original-cohort service calc_service scope; preserve starts/idle/clean-up/failures/rework.

#### Source chapter 6 / 46

Only actual CN user-side <1 kV grid-average consumption mix uses this Product. Official basename is Alternating current with synonym AC and delivery to user in CN. Sole reference property Net calorific value links to the exact energy unit group with MJ reference, not Mass. Do not use for medium voltage or another country or specific generation. Partition meters from medium-voltage and other-supply cards; retain starts/idle/clean-up/failure/rework without duplicated USB/transformer power. Collect cp_energy raw numerators and normalize once within the disjoint manufacture/original-cohort service scope in section 8.

#### Source chapter 6 / 47

Applies only to actual voltage/geography not covered by either CN medium-voltage or low-voltage card; never duplicate their meters. Meter actual user-side electricity by voltage and geography for this operation. Include starts and stops plus idle time and failed attempts and clean-up and incremental rework. Convert raw kWh once to MJ before attribution. Unknown supply is unresolved; no default grid or programming kWh/cartridge factor. For services use the original released cohort account. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 48

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 49

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

#### Source chapter 6 / 50

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 51

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 52

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

#### Source chapter 6 / 53

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 54

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 55

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

#### Source chapter 6 / 56

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 57

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.

#### Source chapter 6 / 58

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.

#### Source chapter 6 / 59

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.

#### Source chapter 6 / 60

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 61

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

#### Source chapter 6 / 62

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 63

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. P is separately purchased packaging only; supplier-bundled ingress I and external returns ER are separate disjoint legs. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 64

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. I is this actual packaging article entering with upstream goods and excluded from P and whole-article mass, including supplier-bundled packaging with no separate price. Bundled price does not remove the physical input. Do not repurchase packaging already included in a whole-article exchange. Retain full gross V and original cohort and opening/closing empty/attached-WIP/attached-FG/reusable stocks. Collect raw numerators through cp_pack and use the original Qc result of calc_service once.

#### Source chapter 6 / 65

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. ER is actual external return received; preserve prior ownership and burden and do not purchase it again. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 66

Preserve actual full physical V by configuration and original cohort; quantities are not reduced by allocation shares or stock changes. Record actual legal/acceptance state separately. Returns and reinspection do not create new Q. Original delivery reversal and inherited manufacture burden remain with the original released cohort. This logistical record is not another reference output or an automatically credited coproduct. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native whole Product at-plant production mix in a manufactured finished state. No fixed capacity or chip type or lifetime or grade/geography is supplied. Its scope is software for game cartridges and excludes CD/DVD; it is not blank flash storage or a die or PCB or console or download. Apply only to the complete executable-bearing cartridge of the declared flash configuration. Returned/dispatched articles must remain physically complete recorded cartridges; genuinely waste/different-state articles use their actual specific flow. Complete required qualifiers: game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence.

#### Source chapter 6 / 67

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 68

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 69

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 70

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 71

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 72

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 73

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.

#### Source chapter 6 / 74

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. This concrete whole corrugated carton identity remains unresolved. Preserve actual corrugated construction, furnish, coating, measured whole-carton mass and supplier. A generic packaging basket cannot bind this specific article; no fixed fibre composition is imposed. Whole-carton procurement includes embodied paper and adhesive once. Product return legs require an actual usable carton; discarded cartons use the actual Waste identity.

#### Source chapter 6 / 75

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 76

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 77

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. S is actual outward packaging accompanying all gross shipments including replacements and rejected deliveries; it is not new cartridge output. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 78

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. EO is actual return to an external owner or supplier; no automatic recovery credit. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 79

Preserve actual full physical V by configuration and original cohort; quantities are not reduced by allocation shares or stock changes. Record actual legal/acceptance state separately. Returns and reinspection do not create new Q. Original delivery reversal and inherited manufacture burden remain with the original released cohort. This logistical record is not another reference output or an automatically credited coproduct. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 80

Preserve actual full physical V by configuration and original cohort; quantities are not reduced by allocation shares or stock changes. Record actual legal/acceptance state separately. Returns and reinspection do not create new Q. Original delivery reversal and inherited manufacture burden remain with the original released cohort. This logistical record is not another reference output or an automatically credited coproduct. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native whole Product at-plant production mix in a manufactured finished state. No fixed capacity or chip type or lifetime or grade/geography is supplied. Its scope is software for game cartridges and excludes CD/DVD; it is not blank flash storage or a die or PCB or console or download. Apply only to the complete executable-bearing cartridge of the declared flash configuration. Returned/dispatched articles must remain physically complete recorded cartridges; genuinely waste/different-state articles use their actual specific flow. Complete required qualifiers: game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence.

#### Source chapter 6 / 81

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.

#### Source chapter 6 / 82

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.

#### Source chapter 6 / 83

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 6 / 84

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.

#### Source chapter 6 / 85

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only. Native Waste at plant GLO covers separately collected paper/cardboard packaging waste including its listed cardboard synonym. Use only this card physical origin and actual container; no polymer sleeve/film or mixed nonpaper substitution. No destination or treatment or numerical waste ratio is specified.

#### Source chapter 6 / 86

For this actual packaging pool use calc_packaging with disjoint J_in/J_out non-water material transfers and the existing measured_external_water_in / measured_external_water_out, alongside complete wet stocks and six full legs. Keep real retained material and natural humidity even without repair; no material amount or recipe is prescribed. Water/material embodied in this whole article is non-additive. X removes only exact duplicate OTHER observations on the same side, never genuine increments, closing stock or whole wet waste. Any actual separately supplied/transferred material or species requires its own atomic measured card and compatible identity; do not hide it in this article or invent an extra purchase. Conditional on this exact supplied packaging article actually being present. Record its actual composition and supply state; no default polymer or fibre recipe. Q excludes it. Maintain its own P/I/ER/S/EO/W ledger including empty stock and packaging attached to WIP or finished goods plus reusable stock. Internal reuse cancels and is not another purchase or coproduct. Use gross physical V in the actual unit and calc_service once with the original cohort Qc; never reduce logistics by an energy or economic share. W is this separately collected real waste only. If placed in one real mixed container use mixed_waste once and retain non-additive measured originW; do not also export this constituent mass. The single result is determined by the disjoint manufacture scope of calc_normalize and original-cohort service scope of calc_service in section 8; the collection protocol records raw numerators only.

#### Source chapter 8 / 1

The aggregation_rule column declares the target basis of the one calculation and performs no division during collection. collection_method retains the actual undivided raw aggregation; calculation occurs once in the following table. A service-account reference always belongs to its original released cohort Qc rather than new current-period Q.

#### Source chapter 8 / 2

Ordinary wastes and rejects and samples and their sales are not other functions to which manufacturing burden may be removed; production loads remain in the target cohort or zero-output account. A waste constituent-origin vector is traceability and does not establish coproduct allocation that removes those loads.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing candidate per 1 kg first-released net cartridge; linked upstream and original-cohort services have explicit boundaries |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Physical cartridge supply-chain modelling where title/console/memory/route/supplied state/geography/time/release gate match and gaps are resolved |
| excluded_use | Blank memory/chip/console/download substitution; equivalent-gameplay-service claims; universal numbers from a historical case; complete cradle-to-gate claim with unresolved gaps |
| required_metadata | game title and release hash; rights and accepted ROM provenance; target console and regional interface; actual flash memory technology and capacity; mapper and CIC or other actual support-chip configuration; supplied module versus onsite board-assembly route; BOM and shell construction; measured configuration-specific cartridge net mass and count; first release criteria and unique release identifiers; failed and rejected physical disposition; period H and every site; opening and closing stock and inherited burdens; programming and test coverage; software-original and licence accounting boundary; packaging configuration and exclusion from Q; actual utility state and supplier boundaries; upstream dataset coverage and allocation evidence |
| required_quality_disclosure | All protocol coverage; UUID/provider limits; metrology and stock vectors; Q/Qc; gross logistics; failure/rework; software-original/upstream gaps; real allocation and source applicability |
| update_trigger | Material change in program/memory/console interface/supplied boundary/assembly-programming-test route/shell/site energy/Q gate/original reuse population/provider identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc38582` | official_guidance | UN Statistics Division. CPC Version 3.0: 38582 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38582 | Physical cartridge scope and exclusion of other media; no manufacturing quantities |
| `drludos-snes-manufacture-2020` | literature | Dr. Ludos. Making a SNES game in 2020 — Yo-Yo Shuriken developer postmortem. https://drludos.itch.io/yo-yo-shuriken/devlog/147478/making-a-snes-game-in-2020 | First-party historical developer/manufacturing-partner case: sourced bare boards; placement; solder reflow; flash programming; boot chip; sourced shell/label and printed box/manual; reversed-board failure counterexample; no code-size/batch/power/yield transfer |
| `hoskbrew-cartridge-services` | handbook | HoskBrew. Services. https://services.hoskbrew.com/services | Complete manufacturer service description: PCB sourcing; onsite ROM flashing; testing; cartridge shells; packing/storage/dispatch; capability scope rather than factory measurements or recipes |
| `jrc-ilcd-attributional-2010` | official_guidance | European Commission JRC. ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010. Sections 7.9.2–7.9.3 pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation cases: actual/virtual subdivision; exchange-specific determining physical causality; common-gate actual-state contemporaneous market value only for genuine residuals; no numeric shares or transfer of QFD functional-comparison figure |