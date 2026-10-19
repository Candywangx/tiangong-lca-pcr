---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shingles-and-shakes-made-out-of-wood
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Untreated western redcedar sawn shingles, at mill gate

## 1. Scope and Applicability

This PCR covers untreated western redcedar (Thuja plicata) shingles sawn on both faces from shingle roundwood or prepared bolts, graded and packaged at the mill gate without intentional drying. It applies to an electrically powered dry mechanical route, including electric material handling; no onsite combustion, log pond, wet processing, gluing, coating or preservation is included. Actual dispatch moisture is a measured qualifier, not a fixed definition of green wood. Intentional air/kiln drying and treated products require separately supported methodology. Sources: usda-shingle-roofs-2011; usda-wood-handbook-2021.

Sawn shingles, straight/taper-split shakes and handsplit-resawn shakes can share moisture measurement and balance principles, but not a pooled production inventory. Shingle sawing generates kerf sawdust and trim; splitting has split rejects and grain-dependent yield, and resawing adds another kerf. Tapersawn shakes also differ in geometry and grade. Measure these streams rather than assuming one route has a fixed lower loss or energy demand. Split/resawn/tapersawn shakes are excluded here; no ordinary lumber UUID may identify the finished shingle. Source: usda-shingle-roofs-2011.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shingles-and-shakes-made-out-of-wood |
| classification_refs | CPC 3.0 31624; narrower |
| covered_products | Untreated Thuja plicata sawn shingles of a declared grade, as-sawn mill-gate state |
| excluded_products | Split/resawn/tapersawn shakes; other species; intentionally dried, impregnated, fire-retardant, coated, glued or composite products; lumber; installed roof or wall |
| representative_product | A measured lot of sawn western redcedar shingles; grade and tapered dimensions declared |
| production_route | Receive roundwood or prepared bolts; conditional buck/debark; sawing/tapering/edging; grade; incidental holding; package; segregate residues |
| market_state | Untreated finished shingles at mill gate, not installed; packaging separately accounted |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply manufactured shingles for subsequent roof/wall cladding selection |
| How much | 1 kg accepted net finished shingles at measured dispatch moisture |
| How well | Declared species, grade, grain/heartwood class, tapered dimensions and untreated state; no universal code suitability |
| How long or cycle | One manufacturing delivery; service life requires a separate installation, exposure and maintenance scenario |
| reference_flow_link | shingle_out |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Shingles and shakes made out of wood `10eb6989-64ab-406a-9ce6-8d9e97da896e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Thuja plicata; sawn-shingle route; dimensions/taper; grade and grain/heartwood; untreated/no intentional drying; dispatch moisture dry basis; net mass excludes packaging; source location/year; roundwood versus purchased-bolt start; gross piece area versus declared coverage/overlap layout; kg/m2 measured conversion; residue outlets |

Required qualifiers must be declared in dataset metadata or equivalent fields. The broad verified finished-product flow contains this narrower shingle subset, but supplies no measured quantity or usable background dataset. Its Chinese database display is retained literally; the physical product definition remains sawn shingles. Missing qualifiers make a dataset reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_basis | shingle_out | Mass | kg | Weigh net accepted wood at dispatch with cp_output; keep dry-basis moisture, gross shipment and packaging mass distinct. Every inventory row is per 1 kg reference flow. |
| moisture_basis | roundwood_in; bolt_in; shingle_out; chip_out; sawdust_out; bark_out | Mass | kg | Use cp_wood and cp_output matched samples; dry-basis u = water mass / oven-dry wood mass. Do not use a wet-basis percentage in the same equation. Source: usda-wood-handbook-2021. |
| area_basis | shingle_out | Mass and area | kg; m2 | Measure kg/m2 for the same grade, moisture and layout using cp_area. Separate summed full piece-face area, overlapped material area and unique installed coverage. Manufacturing mass is not an installed-service functional unit. |
| chip_volume | chip_out | Volume | m3 | Use cp_residue; explicitly match measured solid or bulk volume, moisture, packing and receiving dataset reference; unknown convention blocks linkage. |
| pm_bins | pm_fine; pm_middle; pm_coarse | Mass | kg | One method/time/control boundary; disjoint bins only. Total PM and PM10 are verification totals, not extra additive rows. Source: epa-sawmill-pte-2014. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated western redcedar roundwood at mill receipt, or prepared debarked bolts replacing it |
| starting_condition_role | Purchased precursor; not a finished-shingle recursive input |
| product_classification_scope | CPC 3.0 31624; narrower |
| recursive_input_rule | In-house returned shingles/rework circulate inside mill; count net external exchanges once. Purchased finished shingles are excluded from this manufacturing route |
| upstream_dataset_requirement | Compatible wood procurement/forestry, any bolt preparation, transport and electricity/material datasets required; disclose species, geography, moisture and allocation. UUID is not dataset evidence |
| disclosure | Foreground gate-to-gate; upstream links expand to cradle-to-gate. External treatment tracked without importing combustion into foreground. Installation, use, maintenance and end-of-life excluded |

One aggregated mill process covers preparation, sawing, grading, handling and packaging. Keep separate stage meters and physical transfer records: each internal link has identical quantity and state at both ends, and cancels from the external inventory. No second finished-shingle output is created for a packaging handoff. Include residue chipping when actually performed, auxiliary electricity, maintenance consumables, packaging losses and actual releases. Missing applicable chemical/waste/emission species require another atomic card and compatible identity before dataset completion.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mill | Sawn shingle mill | required | Declared untreated electric dry mechanical route | Aggregated foreground process; stages remain separately measured | shingle_out: 1 kg |

### Process: Sawn shingle mill (`mill`)

#### Inputs

##### Product flows

###### Roundwood of coniferous wood, other (`roundwood_in`)

Untreated Thuja plicata roundwood intended for shingles, received with bark. Include roadside-to-mill transport in its upstream link; do not substitute ordinary sawlogs excluded by this flow definition. Purchased bolts replace the relevant incoming wood; never count the same wood twice.

- Selected flow: Roundwood of coniferous wood, other `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: `usda-wood-handbook-2021`

###### Shingle bolts (`bolt_in`)

Conditional purchased debarked and cut shingle bolts. Use the verified prepared-bolt state, with upstream preparation and delivery included. In-house bolts are internal stage transfers within this aggregated mill process, not a second external input.

- Selected flow: Shingle bolts `35615328-322c-4a39-98c9-254d980275ef`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: `usda-wood-handbook-2021`; `usda-shingle-roofs-2011`

###### Alternating current (`electricity_in`)

Meter grid-average low-voltage AC below 1 kV, including bucking, sawing, extraction fans, electric handling and packaging. Match supply voltage, region, year and losses. Preserve the reference Net calorific value property in MJ; measured kWh converts by 3.6, not by combustion efficiency.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `corrim-northern-lumber-2025`

###### Lubricating oil (`oil_in`)

Conditional petroleum-fraction machinery lubricant matching the selected record, including its 40.5 MJ/kg calorific qualifier. Supplier compatibility remains a dataset prerequisite; that metadata is not a PCR amount or conversion default. Synthetic oils require a separate compatible identity.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`

###### Polyethylene film (`film_in`)

Conditional polyethylene wrapping film; measure net consumption by inventory reconciliation and identify grade. Exclude PET and other polymers.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `corrim-northern-lumber-2025`

###### Kraft wrapping paper (`paper_in`)

Conditional kraft wrapping paper or paper label stock; record coating and adhesive separately if present. Finished paper bags are not this paper-stock input.

- Selected flow: Kraft wrapping paper
- Flow property / unit: Mass / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `corrim-northern-lumber-2025`

###### Polypropylene packaging strap (`strap_in`)

Conditional finished polypropylene packaging strap, with measured composition and mass. Polymer resin, textile twine and steel band are not substitutes.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `corrim-northern-lumber-2025`

#### Outputs

##### Product flows

###### Shingles and shakes made out of wood (`shingle_out`)

Accepted sawn western redcedar shingles leaving the mill, untreated and without intentional drying; net wood mass includes the measured dispatch moisture but excludes packaging. This is the only quantitative reference output.

- Selected flow: Shingles and shakes made out of wood `10eb6989-64ab-406a-9ce6-8d9e97da896e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `usda-shingle-roofs-2011`; `usda-wood-handbook-2021`

###### Wood Chip (`chip_out`)

Conditional separately chipped untreated western redcedar offcuts sold as a coproduct. Keep actual chip mass and moisture for balances. The flow reference is Volume/m3: measure volume state, packing and density against the receiving background reference; unspecified solid/bulk convention makes the link pending. Do not convert using species-table density.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`; `cssb-cedar-lca-2007`

###### Untreated western redcedar sawdust, coproduct (`sawdust_out`)

Conditional segregated untreated western redcedar sawdust sold as a coproduct, including recovered saw dust. Exclude chips, planer shavings, mixed hog fuel and discarded sawdust.

- Selected flow: Untreated western redcedar sawdust, coproduct
- Flow property / unit: Mass / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`; `cssb-cedar-lca-2007`

###### Western redcedar bark, coproduct (`bark_out`)

Conditional segregated western redcedar bark sold as a coproduct; do not identify it by a waste-only bark flow.

- Selected flow: Western redcedar bark, coproduct
- Flow property / unit: Mass / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`

##### Waste flows

###### Offcut (`offcut_waste`)

Untreated western redcedar solid trim and rejected shingles discarded off site; excludes separately inventoried bark, sawdust and saleable chips. Link actual waste treatment, and disclose contamination.

Only actual non-agglomerated, untreated and unglued coarse wood offcuts belong to this row; keep moisture and recipient records, and verify their physical state and receiver/provider compatibility before treatment linkage. Do not substitute agglomerated fuel or captured powder.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`

###### Bark (`bark_waste`)

Debarking residue disposed of as waste rather than sold. This is mutually exclusive with bark_out for the same physical mass; purchased debarked bolts do not generate fictitious in-house bark.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`

###### sawdust waste (`sawdust_waste`)

Discarded untreated sawdust sent to the combustion/recovery route specified by this waste identity; confirm actual receiver. Landfill or incompatible treatments require a different exact identity. The same mass cannot also be sawdust_out or emitted particulate.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `corrim-northern-lumber-2025`; `epa-sawmill-pte-2014`

###### Used lubricating oil (`oil_waste`)

Used lubricant leaving the mill. Reconcile addition, retained machinery stock, recovered oil and documented loss; specify actual downstream treatment without assuming regeneration.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `corrim-northern-lumber-2025`

###### Unwashed waste polyethylene wrapping film (`film_waste`)

Polyethylene wrapping-film scraps generated at the mill, if present. This is unwashed waste at generation, not cleaned recycling-plant material; downstream packaging waste after sale is outside this gate.

- Selected flow: Unwashed waste polyethylene wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `corrim-northern-lumber-2025`

###### waste paper (unspecified) (`paper_waste`)

Conditional kraft-paper packaging scraps. The broad waste-paper identity contains this subset only when free of incompatible coatings and contamination; require receiver-specific treatment.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `corrim-northern-lumber-2025`

###### Polypropylene packaging strap cuttings (`strap_waste`)

Conditional polypropylene strap cuttings at generation; do not use a mechanical-recycling-route identity before proving that route.

- Selected flow: Polypropylene packaging strap cuttings
- Flow property / unit: Mass / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `corrim-northern-lumber-2025`

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Actual particles at or below PM2.5 emitted to outdoor air, unspecified subcompartment, from mechanical operations and residue handling. Measure after controls, include fugitives, and use mutually exclusive size bins; recovered dust is a residue, not an emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### particles (PM2.5 - PM10) (`pm_middle`)

Actual particles above PM2.5 and at or below PM10 emitted to outdoor air, unspecified subcompartment, from mechanical operations and residue handling. Measure after controls, include fugitives, and use mutually exclusive size bins; recovered dust is a residue, not an emission.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### particles (> PM10) (`pm_coarse`)

Actual particles above PM10 emitted to outdoor air, unspecified subcompartment, from mechanical operations and residue handling. Measure after controls, include fugitives, and use mutually exclusive size bins; recovered dust is a residue, not an emission.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-2014`

###### water vapour (`water_vapour`)

Actual moisture evaporated during incidental mill residence, emitted to outdoor air, unspecified. Reconcile wood-water stock; no intentional drying energy or universal moisture target is assumed.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources: `usda-wood-handbook-2021`

###### carbon dioxide (biogenic) (`biogenic_co2`)

Conditional biogenic carbon dioxide emitted to outdoor air, unspecified, if measured biological storage losses occur. No onsite combustion is in scope. Retain actual LCI biogenic emissions regardless of a GWP convention; no carbon storage credit or automatic positive amount.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `corrim-northern-lumber-2025`

###### methane (biogenic) (`biogenic_ch4`)

Conditional biogenic methane from demonstrated anaerobic storage degradation, emitted to outdoor air, unspecified. Document absence or quantify it; do not infer methane from normal green wood or transfer a combustion factor.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon`
- Sources: `corrim-northern-lumber-2025`

###### methanol (`methanol_air`)

Conditional methanol specifically identified by sampling/speciation in mechanical processing or incidental storage, emitted to outdoor air, unspecified. Screening is required; the lumber survey supplies no cedar default. Unmeasured is unknown, not zero; add each additional identified chemical as a separate exact row.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-northern-lumber-2025`

###### formaldehyde (`formaldehyde_air`)

Conditional formaldehyde specifically identified by sampling/speciation in mechanical processing or incidental storage, emitted to outdoor air, unspecified. Screening is required; the lumber survey supplies no cedar default. Unmeasured is unknown, not zero; add each additional identified chemical as a separate exact row.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-northern-lumber-2025`

###### pin-2(3)-ene (`pinene_air`)

Conditional pin-2(3)-ene (alpha-pinene) specifically identified by sampling/speciation in mechanical processing or incidental storage, emitted to outdoor air, unspecified. Screening is required; the lumber survey supplies no cedar default. Unmeasured is unknown, not zero; add each additional identified chemical as a separate exact row.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure this external exchange for the matched lot; divide its recorded total by P, the accepted net dispatched shingle mass in kg. Apply the allocation rule only to the environmental burden ledger.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-northern-lumber-2025`

## 7. Allocation and Co-product Handling

The CSSB preliminary summary reports cedar wood-chip and sawdust coproduct outlets, alongside mixed hog fuel, for its named shake/shingle products. This supports looking for separate saleable residues, not a universal waste percentage or interchangeable shake/shingle yield. Keep any actual mixed hog fuel separate from the pure bark/chip/sawdust rows. Source: cssb-cedar-lca-2007.

First assign separable operations directly: dedicated packaging belongs to shingles; dedicated chip processing belongs to chips. Partition genuinely shared burdens by measured oven-dry mass of saleable outputs at that stage; disclose the decision and test economic allocation sensitivity if prices or function indicate a materially different result. This adapts a documented lumber-study mass-allocation method, not its surveyed shares. Waste is not made a coproduct merely to reduce shingle burdens. Source: corrim-northern-lumber-2025.

Keep two ledgers. The physical process graph and mass/water/carbon balance retain full actual inputs, products, coproducts, wastes and releases. The allocated environmental burden ledger partitions eligible shared upstream burdens, energy and emissions. Do not multiply coproduct physical outputs or internal transfers by an allocation fraction. An allocated single-product dataset must bind the unallocated balance and its partition reconciliation; inventory cards describe the unallocated exchanges before that projection. No avoided-burden credit is automatic.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | mill | shingle_out | Matched records and measurements | lot; species; grade; grain; lengths; widths; taper; rejected mass; net accepted mass P; dispatch moisture; packaging tare | Calibrated scale with tare; immediate representative wood sampling for oven-dry mass stability, preserving volatile-extractive bias and species-calibrated meter limits. | kg | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_wood | mill | roundwood_in; bolt_in | Matched records and measurements | wood origin; species; starting state; delivery mass; bark; moisture samples; stock changes; transport; bolt preparation | Weigh receipts and reconcile opening/closing stock to the same accepted lot; do not double count internally prepared bolts. Sample wood and bark separately. | kg | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_energy | mill | electricity_in | Matched records and measurements | meter readings; stage hours; voltage; region/year; extraction and handling; supply reference | Submeter stages; reconcile main meter and shared service attribution. Convert metered kWh to MJ; retain meter and supplier definitions. | kWh; MJ | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_material | mill | oil_in; oil_waste | Matched records and measurements | product certificate; petroleum route; calorific qualifier; receipts; machinery stock; used-oil waste; loss; receiver | Reconcile weighed material additions and stock; weigh each waste separately; verify supplier/background compatibility without adopting calorific metadata as a default. | kg | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_pack | mill | film_in; paper_in; strap_in; film_waste; paper_waste; strap_waste | Matched records and measurements | component polymer/paper grade; coating/adhesive; receipts; stocks; shipped packaging; each scrap mass | Weigh each component and each scrap separately; reconcile consumed material = shipped packaging + on-site scraps + stock correction. | kg | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_residue | mill | chip_out; sawdust_out; bark_out; offcut_waste; bark_waste; sawdust_waste | Matched records and measurements | stream; source stage; sale/waste destination; wet and dry mass; moisture; chip volume; packing; measured density; receiver reference | Separate and weigh each outlet; track collected dust once. Measure chip volume and mass in the same state, document solid/bulk convention with supplier, and weigh dry samples for allocation. | kg; m3 | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_air | mill | pm_fine; pm_middle; pm_coarse; methanol_air; formaldehyde_air; pinene_air | Matched records and measurements | species/CAS; outlet and fugitives; control state; test method; size cut; air flow; concentration; operating hours; detection limit; uncertainty | Use matched outlet sampling and validated fugitive estimates for actual operations; speciate VOCs. Integrate each species separately. Absent or below-detection results retain method and limit; unmeasured is unknown. | kg | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_balance | mill | water_vapour | Matched records and measurements | incoming/outgoing wood and bark water; residues; moisture; inventory; residence; volatile losses | Reconcile measured moisture and stocks over the matched lot; investigate closure before attributing unexplained mass loss to water. | kg | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_carbon | mill | biogenic_co2; biogenic_ch4 | Matched records and measurements | dry stream masses; measured carbon fractions; biological loss evidence; residence; CO2 and CH4 species; stocks | Maintain a dry-wood carbon balance and measure/document actual biological releases or demonstrated absence; no combustion or carbon-neutrality assumption. | kg | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |
| cp_area | mill | shingle_out | Matched records and measurements | matched lot mass; moisture; grade; per-piece face dimensions; exposure; gaps; courses; starter/ridge cuts; installed coverage; overlap; layout | Weigh and measure matched pieces and a documented test/specification layout; measure unique roof/wall plane coverage separately from summed full faces. Retain raw measurements and uncertainty. | kg; m2 | Each lot; emission tests cover each operating mode | Declared production period with all grade lots, stocks and shutdowns | Same mill, species and route; no pooled shake route | per 1 kg reference flow | Calibration; traceability; sampling plan; balance and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | x = X / P; X is the measured external exchange for the matched lot, P is its accepted net dispatched shingle mass in kg; shingle_out = 1 kg. Physical outputs remain unallocated. | X; P; matched protocol; cp_output | x | usda-wood-handbook-2021 |
| dry_wood | all wood streams | m_dry = m_wet / (1 + u); u = (m_wet - m_dry) / m_dry. Use matched state and a fraction, not percent. | m_wet; u; cp_wood; cp_output; cp_residue | m_dry | usda-wood-handbook-2021 |
| meter_mj | electricity_in | MJ = kWh * 3.6 for metered electrical delivery; no calorific fuel factor or boiler efficiency. | kWh; cp_energy | MJ | corrim-northern-lumber-2025 |
| coverage_conversion | shingle_out | r_cover = m_layout / A_cover; r_face = m_layout / A_face; A_face is the sum of full piece faces, A_cover is unique covered plane area after overlap. A_overlap is reported separately; gaps and starter/ridge/cut allowances stay in the layout ledger. For a downstream declared coverage A, required shingle mass = r_cover * A, at the matched moisture and grade. Measure, never assume r_cover from density or nominal exposure alone. | m_layout; A_cover; A_face; A_overlap; cp_area | r_cover; r_face | usda-shingle-roofs-2011 |
| pm_partition | pm_fine; pm_middle; pm_coarse | fine = PM2.5; middle = PM10 - PM2.5; coarse = PM_total - PM10, only for matched nested measurements. Each result must be nonnegative; do not add PM_total or PM10 again. | PM_total; PM10; PM2.5; cp_air | fine; middle; coarse | epa-sawmill-pte-2014 |
| shared_burdens | shared environmental burdens only | a_j = D_j / sum(D_j); D_j is measured oven-dry mass of eligible saleable output j of the shared stage. B_j = a_j * B_shared + B_direct,j. Apply to burdens, never physical coproduct flows. | D_j; stage ledger; cp_residue; cp_output | a_j; B_j | corrim-northern-lumber-2025 |
| balance_closure | mill | Dry wood input + opening stock = dry products + dry coproducts + dry wastes + wood-derived airborne matter + closing stock + documented degradation; reconcile water and measured carbon fractions separately. Captured dust stays in residue outlets. Carbon in CO2/CH4 uses species stoichiometry, not gas mass as carbon mass. Report residual and uncertainty; do not silently balance by adding a default emission. | cp_wood; cp_output; cp_residue; cp_balance; cp_air; cp_carbon | dry mass; water; carbon closure | corrim-northern-lumber-2025; usda-wood-handbook-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | Verify full material/route, flow type, medium, reference property and unit; blank identities remain pending. A UUID alone does not establish a compatible background dataset. | Supplier/test definitions and identity records |
| representativity | mill | Declare geographic/year and period coverage, species and grade mix; weight lots by accepted net mass. Never transfer northern lumber survey yields/emissions to cedar shingles. | corrim-northern-lumber-2025 |
| missing_data | all rows | Record absent, measured zero, below detection, estimated and missing distinctly; no implicit zero. Actual additional exchanges need atomic cards and matched identities. | Collection package and limits |
| balance | mill | Keep physical and allocated ledgers separate and investigate unmatched closure beyond stated measurement uncertainty; show residue sale/waste split without duplication. | Mass/water/carbon ledgers |

## 9. Validation Rules

Require exactly one finished reference output and 1 kg net basis; all external amounts and collection aggregation use the same P and lot scope. Verify species, route, grade, moisture, area layout and treatment qualifiers. Reject lumber substituted for shingles, duplicate external internal transfers, duplicate residue sales/wastes, nested additive PM, assumed generic density and unverified chip-volume/background conventions. Validate the unallocated physical balance and the separate partitioned burden sum. Each applicable blank identity, missing amount, unsupported background basis or unspeciated release is a data-package incompleteness, not scientific approval.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground sawn-shingle production process; compatible upstream-expanded dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified matching untreated Thuja plicata manufacturing and explicitly measured mass-to-coverage conversion |
| excluded_use | Whole CPC equivalence; treated/dried or split shake proxy; installed weatherproof-service claims; automatic carbon credits |
| required_metadata | All reference qualifiers; upstream boundary; stage/lot balance; coproduct/waste decision; allocation and area basis; measured quantities; compatible datasets |
| required_quality_disclosure | Actual data period, sampling/uncertainty, blank identities, conditional absences, volume/property compatibility and missing emissions |
| update_trigger | Species/grade, moisture or delivery state, route, treatment, electricity, residue outlets, allocation or installed layout changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cssb-cedar-lca-2007 | literature | [CSSB preliminary cedar-shake/shingle LCA summary (03/07)](https://www.cedarbureau.org/cms-assets/documents/41211-337868.life-cycle.pdf) | Page 1: named 2007 study products and cedar coproduct categories only; preliminary promotional summary, no case quantitative or superiority claims adopted |
| usda-shingle-roofs-2011 | official_guidance | [USDA FPL-GTR-201 (2011)](https://research.fs.usda.gov/download/treesearch/39747.pdf) | Printed pp. 1-5, Table 1: sawn/split product distinction, grade/species and coverage/exposure context; no universal dimensions, installation or lifetime adopted |
| usda-wood-handbook-2021 | handbook | [USDA Wood Handbook, FPL-GTR-282 (2021)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | Ch. 4 pp. 4-1, 4-11; Ch. 13 p. 13-2: dry-basis moisture, density state and oven method; no species density or moisture default |
| epa-sawmill-pte-2014 | official_guidance | [EPA Region 10 sawmill particulate PTE memorandum (2014)](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | Memo p. 1, attachment p. 1: non-boiler mechanical activity and nested filterable PM definitions; PNW Indian Country PTE factors are not actual shingle emissions |
| corrim-northern-lumber-2025 | literature | [CORRIM Northern softwood lumber LCA, July 22 2025](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf) | Sections 3.2.4, 3.2.6, 3.3, 4.6-4.7: balance, direct/shared allocation and emission screening method analogy only; northern-US lumber survey parameters are not cedar-shingle defaults |
