---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.hand-made-paper-and-paperboard
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Hand-formed cotton-rag paper, pressed and loft-dried

## 1. Scope and Applicability

This method covers unprinted, individually hand-formed cotton-rag paper sheets for drawing and watercolour at the manufacturing gate. The furnish is sorted clean cotton garment cuttings, already cut to suitable size, without blends, inks, coatings or elastic. Sheet formation uses a handheld mould and deckle, followed by couching on wool papermaking felts, hydraulic pressing, loft drying, gelatin tub sizing and redrying. Electric beating and press drives are permitted and must be measured. The defined utility configuration uses purchased low-voltage electricity and tap water; gelatin heating and any auxiliary drying heat are electric, and residual wastewater goes to external treatment.

Khadi's Karnataka producer description supports the cotton-cutting, Hollander, hand-mould, felt, hydraulic-press and loft/gelatin sequence. It does not establish its undisclosed internal-size formula. A supplier-documented ketene-dimer emulsion is a separately declared internal-sizing option, not an assertion about that mill's recipe. Sites must document their actual formulation, moisture and performance. No factory recipe, yield, energy consumption, discharge factor or industry-wide range is supplied here.

Exclude continuous Fourdrinier or cylinder/mould-machine webs (even if marketed as traditional), bamboo/lokta/hemp/linen or wood-pulp furnish, bleached-on-site or dyed products, dry chopping/dust-generating preparation, laminating, mineral-coated sheets, converted notebooks and packaging board. Fuel-fired or steam-heated drying and onsite biological wastewater treatment require a separately reviewed inventory extension; do not silently apply this electric/offsite-treatment route to them. Surface gelatin sizing does not imply mineral coating or a printed finished article. Handmade status never establishes zero electricity, zero purchased heat or zero environmental emissions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.hand-made-paper-and-paperboard |
| classification_refs | CPC 3.0 32122; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted hand-formed pure-cotton-cutting sheets with hydraulic pressing, loft drying and gelatin surface sizing; declared ketene-dimer internal sizing when used |
| excluded_products | Continuous-machine/mould-machine papers; other fibre furnishes; onsite bleaching/dyeing; laminates; packaging board; converted articles; combustion/steam-heated or onsite-biological-treatment routes without reviewed extension |
| representative_product | A conditioned, accepted cotton-rag sheet with declared grammage, dimensions, texture and gelatin sizing |
| production_route | Pre-cut cotton receipts → wetting and electric Hollander beating → individual mould/deckle forming → felt couching and hydraulic press → loft drying → electrically heated gelatin tub sizing → loft redrying/conditioning → acceptance and optional paper wrapping; internal water/fibre recovery and external residual treatment |
| market_state | Net accepted finished sheets at gate, conditioned to declared moisture; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted individually hand-formed cotton-rag paper for the declared drawing/watercolour use |
| How much | 1 kg |
| How well | Declared sheet dimensions, grammage, thickness, surface texture, cotton purity, sizing formulation, moisture, and batch acceptance tests; no unsupported archival or acid-free performance claim |
| How long or cycle | One gate-delivery production cycle; no assumed artwork life or equivalent service to machine-made paper |
| reference_flow_link | `handmade_paper_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hand-made paper and paperboard `7f14ce45-f456-4f95-991d-e4693db18679` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cotton-cutting origin and purity; actual moisture wet-mass fraction and conditioning; dimensions and grammage; acceptance tests and texture; hand-mould route; hydraulic press and drying configuration; internal-size brand/formulation/solids/pH; gelatin powder purity and animal origin; site/geography/period; water supply; electricity voltage/mix; wastewater recipient; packaging; fibre/water recovery |

Declare these qualifiers in the foreground data package. The broad product UUID encompasses this subset without a contrary route restriction. UUID identity does not supply the site's cotton recipe, moisture basis or background dataset. One kilogram is delivered net mass including actual residual moisture and retained sizing, not one kilogram oven-dry fibre, packaging or unfinished wet sheet. A mass reference alone does not prove equivalent drawing service between products.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished conditioned sheets on a calibrated balance using cp_output, excluding packaging, rejects and unfinished stock. Normalize every row to the same accepted net mass. |
| `wet_dry_basis` | cotton_input; gelatin_input; sizing_emulsion_input; handmade_paper_output; sludge_output; cotton_reject_output; spentfelt_output | Mass | kg | Preserve as-received/wet and dry amounts separately. Determine representative moisture/solids with a documented applicable constant-mass drying method, replicate samples, temperature/time and possible volatile-loss bias. No standard moisture fraction is assumed. |
| `electricity_basis` | electricity_input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Record meter kWh and convert using 1 kWh = 3.6 MJ. Do not treat electric bath heat as a second purchased-heat exchange; keep its stage submeter and useful-heat diagnostic separate. |
| `water_basis` | water_input; wastewater_output; evaporation_output | Mass or Volume as specified in the row | kg or m3 as specified in the row | Convert volumes only using documented density/temperature; distinguish fresh withdrawal, internal recirculation, final wastewater, retained moisture and evaporation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sorted pre-cut clean cotton garment cuttings, finished sizing materials and utilities arrive at the paper workshop; upstream sorting/cutting must be included in supply data. |
| starting_condition_role | Gate-to-gate hand papermaking; supplier preparation and transport plus external treatment are linked outside the aggregate foreground unit. |
| product_classification_scope | A cotton-sheet subset of hand-made paper and paperboard, CPC 32122; no full-leaf coverage claim. |
| recursive_input_rule | Internal off-spec sheets and recovered cotton fibres returned to beating are measured internal loops; no new upstream input or avoided virgin-fibre credit. Purchased handmade paper or external recovered paper is not this cotton-cutting route. |
| upstream_dataset_requirement | Match cotton-cutting collection/preparation and supplier allocation, delivered electricity/water, formulated size, gelatin, replacement felt, wrapping and actual external waste treatment. Declare transport legs, mass and distance without adding embedded transport twice. |
| disclosure | Site, reporting period, integrated operations, lots/moisture, exact supplies, stage meters, storage changes, rework/fibre/water returns, wastewater routing, cutoff estimates and background substitutions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_hand_route` | hand_papermaking | Include wet furnish preparation, individual sheet forming, couching, pressing, both drying stages, gelatin bath preparation/heating, acceptance and gate packaging; retain stage records inside one aggregate foreground process. | khadi-cotton-route |
| `boundary_utilities` | hand_papermaking | Include electric motors, hydraulic pump, ventilation, auxiliary drying, sizing heat, cleaning and attributable storage energy. Confirm the site's electric configuration; no zero-energy inference from manual forming or loft drying. | eu-pp-bref-2015; khadi-cotton-route |
| `boundary_water_recovery` | hand_papermaking | Include fibre capture and white-water recirculation records, filter solids, unreused waste and final external wastewater. Actual recovery efficiency must be measured; industrial-machine recovery values are not handmade-paper defaults. | eu-pp-bref-2015 |
| `boundary_route_extension` | inventory completeness | Known refrigerant leaks, extra packaging, cleaning chemicals or direct emissions require their own species/material exchanges and compatible identity/measurement evidence; undisclosed amounts cannot be zero. Combustion, biological treatment or direct water discharge require expanded source-specific inventories before this method is applied. | eu-pp-bref-2015 |
| `boundary_actual_consumables` | inventory completeness | Verify actual press model, hydraulic working-fluid and lubrication specifications, stocks in use/storage, additions, changes, recovery and spills; do not infer mineral oil or consumption from the hydraulic label. Check pre-cut cotton handling, dry-sheet handling/finishing and ventilation for actual cotton/wool lint or sized-paper particles. Record paired actual returns; independently characterize captured dry residues and final outdoor emissions. Every confirmed material, spent fluid, cleaning chemical, captured residue or emission needs a separately collected atomic identity/quantity, and each absence needs evidence; do not substitute wet fibre sludge or paper-machine dust factors. | khadi-cotton-route; eu-pp-bref-2015 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hand_papermaking` | Cotton hand-sheet manufacture, recovery and finishing | `required` | All covered lots | Aggregate foreground manufacturing unit with separately measured stages | 1 kg reference flow |

The aggregate unit prevents counting the same paper once before and once after sizing/packing. Retain separate stage balances: furnish → vat → pressed wet sheets → first-dried sheets → sized wet sheets → redried accepted sheets. Stage transfers are physical quantities with paired equal sender/receiver mass and moisture, not additional reference product outputs. Record white-water and fibre returns by event and dry solids, as well as inventories at period start/end. Do not count returns as new receipts or as avoided-production credits.

### Process: Cotton hand-sheet manufacture, recovery and finishing (`hand_papermaking`)

#### Inputs

##### Product flows

###### Cotton cloth cutting furnish (`cotton_input`)

Use only sorted, pre-cut, clean cotton garment cuttings without synthetic blends, coatings, printing ink, or elastic. This broad rag identity includes that subset; do not model virgin cotton or cotton linters with it. Weigh consumed as-received mass and sample moisture; retain dry cotton mass separately. Verify supplier preparation and upstream burden allocation. Confirm the actual supplied, prepared secondary material is represented by the Product identity and disclose supplier preparation, legal/product-versus-waste status and allocation; an actual incoming waste transfer needs its own applicable waste identity and boundary review. Neither scrap classification nor purchase alone establishes zero upstream burden.

- Selected flow: Rags, scrap twine, cordage, rope and cables and worn out articles of twine, cordage, rope or cables, of textile materials `d7e63c9a-9ebe-4a2a-b2f3-486bd5958a13`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: khadi-cotton-route

###### Purchased tap water (`water_input`)

Meter fresh water supplied for soaking, beating, vat makeup, felt washing, equipment cleaning and sizing dilution. Convert measured volume to mass with documented site density and temperature, not the database secondary coefficient. Exclude internal recirculation from fresh input; water in emulsion is already part of that product mass. Use an actual local water-supply background.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: eu-pp-bref-2015

###### Low-voltage grid electricity (`electricity_input`)

Meter consumed user-side electricity below 1 kV. Include electric Hollander motor, pumps, hydraulic press power pack, ventilation, electric gelatin-bath heater, auxiliary electric drying/conditioning and attributable storage/cleaning power. Convert kWh to MJ using 3.6; the database property name is retained and does not imply electricity is a fuel. Keep stage submeter totals; sum each kWh once and link location/time/voltage-compatible grid background. Raw supply geography is CN: verify actual workshop/provider geography, year, grid mix, voltage and delivery losses before background linkage. No automatic China or generic-world supply is established.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: khadi-cotton-route; eu-pp-bref-2015

###### Ketene-dimer internal sizing emulsion (`sizing_emulsion_input`)

Measure one purchased ketene-dimer sizing emulsion added near the end of beating. Declare brand, current formulation, solids fraction, pH, carrier-water fraction and storage conditions. Supplier instructions establish a possible hand-papermaking option, not Khadi composition or a universal dose. Resolve the neutral-pH instructions versus linked acidic Hercon SDS before claiming pH or background compatibility. The AKD component identity, including its synthesis/emulsification metadata, does not establish the actual supplied mixture, complete composition or supplied-emulsion reference mass; UUID remains blank. No starch, alum, dye or filler is presumed present.

- Selected flow: Ketene-dimer internal sizing emulsion
- Flow property / unit: Mass / kg supplied emulsion
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_additives.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_additives`
- Sources: chp-sizing-directions-2014; solenis-hercon-sds-2018

###### Gelatin surface size (`gelatin_input`)

Use the selected physical powder identity only for concentrate/dry/grind gelatin with supplier-confirmed purity above 99.5%, CAS 9000-70-8. Weigh new powder added to the electrically heated aqueous tub; report animal origin, residual moisture, bath stocks, spills, spent solution and retained dry gelatin. Do not equate wet sizing-bath mass to powder consumption or import a database recipe. Actual supplier composition and powder-state compatibility remain required.

- Selected flow: gelatin `aa9b81c7-64ab-40a2-9419-50fedc25a2c7`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_additives.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_additives`
- Sources: khadi-cotton-route

###### Wool papermaking couching felt (`felt_input`)

Measure the actual finished wool papermaking couching felt used over its documented service interval. The broad finished Felt physical Product identity includes this qualified subset without an opposing material or application route; require actual wool fraction, felted structure, dimensions, grade, reuse/wash history and supplier compatibility. It does not establish a bedding blanket, raw wool, synthetic vacuum-bag breather or matched felt-production background. Retain dry felt, water and in-use/stored inventories with actual purchase/replacement/retirement events. Keep the full physical gate and stock ledger separate from environmental consumption attributed by documented actual service to this reporting period; no assumed lifetime, sheet-count mass factor or duplicate replacement burden.

- Selected flow: Felt `144717eb-3301-402a-89c8-3ba5a969425a`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: khadi-cotton-route

###### Uncoated paper wrapping (`wrapping_input`)

When sheets are wrapped at the gate, weigh one uncoated paper wrapping grade consumed, including documented stock changes and offcuts. The broad uncoated-paper record includes packaging paper without a contrary route restriction; require the actual grade and supplier background. Keep wrapping out of the reference net paper mass. If delivered loose, document absence; never infer other packaging has zero mass. Actual discarded wrapping offcuts and additive containers, if present, need independently weighed and identified waste records; do not merge them with cotton rejects, sludge or spent felt.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: eu-pp-bref-2015

#### Outputs

##### Product flows

###### Accepted finished handmade cotton paper (`handmade_paper_output`)

1 kg net accepted finished paper after both drying passes, conditioning and acceptance; exclude wrapping, rejects and unfinished work. Record actual lot moisture, grammage, sheet area/count and sizing status. The broad handmade-paper-and-board identity is narrowed by these qualifiers; it supplies no cotton recipe or performance default.

- Selected flow: Hand-made paper and paperboard `7f14ce45-f456-4f95-991d-e4693db18679`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: khadi-cotton-route

##### Waste flows

###### Cotton-rag papermaking wastewater to external treatment (`wastewater_output`)

Measure the actual aqueous process wastewater crossing the gate after internal fibre recovery, including vat bleed, wash water and diluted spent sizing bath only where this is the actual separately characterized transfer accepted by its recipient. Preserve event volumes, calibrated transferred bulk mass or volume × measured event density, sampling locations, pH, temperature, COD/TOC, TSS, BOD and additive-specific analytes; identify sewer/tanker and actual external treatment. The selected broad industrial liquid-Waste Mass/kg identity applies only to this liquid physical stream, with no specified disposal or treatment route. Do not assume 1000 kg/m3, apply the sizing-product SDS density to effluent, or treat bulk wastewater kg as water kg: independently determine water and suspended/dissolved solids/additives for the physical balance. Keep volume-based pollutant-load analysis separate from bulk mass normalized to the reference. The linked SDS does not authorize product disposal to drains; require actual recipient acceptance of composition, pH and loading. Concentrated/unused sizing, spill waste or other separately collected liquids require individual characterized exchanges, not automatic mixing into this row. No manganese-slag, silicon or recovered-fluting-specific wastewater substitute, elemental freshwater discharge or matched treatment background is implied.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: eu-pp-bref-2015; solenis-hercon-sds-2018

###### Rejected unblended cotton cloth cuttings (`cotton_reject_output`)

Weigh actual cotton-only sorting rejects removed from the accepted furnish; record moisture, physical reason for rejection, contamination and specific recipient. The broad industrial solid-Waste identity is restricted to this separately collected non-reused cotton-cutting stream. Preserve wet mass, dry cotton/water, stock movements, actual waste/product status, hazard and receiver/provider acceptance; it sets no disposal/recovery route or matched treatment burden. Mixed synthetic, yellow-stained and garment-making-specific records remain incompatible substitutes for this declared stream. Segregate non-cotton contaminants and separately collected dry fine lint as their own actual exchanges; do not merge them with these coarse cuttings or wet sludge.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: khadi-cotton-route

###### Dewatered cotton-fibre papermaking sludge (`sludge_output`)

Weigh unreused dewatered filter/settling cotton-fibre solids transferred offsite; sample dry solids, water and actual sizing/additive contamination and obtain specific receiver acceptance. The broad industrial solid-Waste identity applies only to this separately collected solid or dewatered semisolid stream from physical fibre recovery, not biological-treatment sludge or a liquid effluent. Keep wet/dry mass, composition, hazard, stocks and recipient/treatment compatibility separately traceable; same UUID on other waste rows does not merge streams, prescribe treatment or prove a background. Fibres actually returned to the vat remain internal; water-treatment-chemical-specific sludge is not a substitute.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: eu-pp-bref-2015

###### Spent wool papermaking felt (`spentfelt_output`)

Weigh actual retired wool papermaking felt; disclose dry felt material, retained water, cotton fibres, sizing residues and specific recipient. The broad industrial solid-Waste identity applies only to this separately collected discarded felt, without an assumed disposal/recovery route or treatment burden. Match in-use/stock and retirement records to replacement/service attribution without treating retained water as new wool or sharing a physical waste mass with other rows of the same UUID. Unknown synthetic textile or wool-spinning waste is not substituted; verify actual fibre composition, contamination, waste status, hazard and receiver/provider acceptance.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: khadi-cotton-route

##### Elementary flows

###### Water evaporated to outdoor air (`evaporation_output`)

Calculate actual water evaporated from loft drying, redrying after gelatin sizing and heated baths from stage moisture/mass measurements and the complete water balance. Use CAS 7732-18-5 emissions-to-air/unspecified at the final outdoor release, not indoor air or agricultural evapotranspiration. Never substitute all water withdrawal for evaporation. Unclosed balances require investigation, not a forced positive residual. Record conditioning humidity/temperature and any substantiated atmospheric moisture uptake or condensation as a distinct actual boundary transfer requiring reviewed identity and measurement; net uptake is not a negative vapour output or a forced water-balance residual.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collected physical amount divided by accepted net finished kg for the same reporting period; cp_balance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_balance`
- Sources: eu-pp-bref-2015

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | hand_papermaking | This defined unit has one accepted product. Attribute its observed burdens to that output; wastes and internal returns do not become saleable co-products by assumption. If saleable co-products arise, collect their separate physical outputs and commission an allocation review before using this single-product model. | eu-pp-bref-2015 |
| `allocation_physical_ledgers` | all physical balances | Keep unallocated mass/water/carbon and paired stage transfers separate from any environmental-burden allocation ledger. Never multiply physical co-product outputs or internal returns by allocation shares. No automatic negative credit for cotton cuttings, fibre recovery, rejects or wastewater. | eu-pp-bref-2015 |
| `allocation_shared_utilities` | electricity and water | Prefer lot/stage submetering and segregated batches. For shared motors/baths, document attributable measured power-time, water events and serviced output; justify any remaining shared-service split and preserve total-service reconciliation. Supplier allocation of cotton textile production is a separate disclosed upstream decision. | eu-pp-bref-2015 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collect all applicable events for a representative reporting period covering routine batches, failed sheets, rework, cleaning and seasonal drying conditions. Declare exact dates and production coverage; do not substitute a historical mill case for current site data. The denominator is the sum of accepted conditioned net finished kg for exactly that period and route. Keep measured work-in-progress transfers and stock changes in the separate physical and attribution ledgers when reconciling attributable period exchanges; unfinished stock is not accepted finished paper and does not change this output denominator. Keep stage data despite the single aggregate unit.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | hand_papermaking | accepted reference output | weighing and acceptance | lot; conditioned net kg; tare; moisture; dimensions; area; count; grammage; acceptance; work-in-progress opening/closing | Calibrated scale after redrying and declared conditioning; representative moisture replicates with documented dry-to-constant-mass method; reconcile lot acceptance and period stock movements | kg; fraction; m2; g/m2 | Each lot | Entire declared period | Same site/route/grade | per 1 kg reference flow | Calibration; drying method; acceptance and stock records |
| `cp_materials` | hand_papermaking | cotton cuttings, felt and wrapping | receipts and consumption | supplier; grade; origin; fibre composition; mass; moisture; stores/in-use stocks; returns; felt service interval; packaging status; actual press/fluid/lubricant specification; maintenance additions/change/recovery/spill events | Weigh receipts, consumed masses and remaining stock; supplier composition evidence; allocate felt replacement to recorded service period; no virgin-cotton or raw-wool substitution; verify actual maintenance material exchanges and retain separately named atomic records when confirmed, never assume hydraulic oil chemistry or positive use | kg; fraction | Each lot and replacement | Entire declared period plus felt service interval | Same route and serviced output | per 1 kg reference flow | Scale checks; invoices; supplier composition; felt service and stock ledger |
| `cp_additives` | hand_papermaking | formulated size and gelatin | addition and bath records | brand; batch; current SDS; formula; pH; solids; water fraction; powder purity; animal origin; receipts; additions; bath opening/closing; retention; spent bath; temperature; storage; actual AKD and reaction-product speciation; independently evidenced reaction extent and uncertainty | Weigh formulated emulsion and new gelatin powder separately; determine actual solids and retained sizing; reconcile batch bath/dilution records. Treat SDS hazard list as incomplete composition. Confirm current supplier formulation; no old recommended dose reused. For actual AKD use, independently establish reaction/speciation and extent under the recorded storage and papermaking conditions; distinguish carrier H2O, unreacted AKD and actual products. Unknown reaction terms remain gaps, not assumed zero or complete hydrolysis [yan-akd-hydrolysis-2019] | kg; fraction; pH; temperature | Every addition and bath disposal | Entire declared period | Same lots and bath | per 1 kg reference flow | Supplier lot certificate; scales; solids test; stock reconciliation; formulation-conflict disclosure |
| `cp_energy` | hand_papermaking | electricity and useful-heat diagnostics | meter and operation logs | voltage; grid identity; meter opening/closing; stage kWh; motor/press/pump schedules; bath/auxiliary heaters; bath temperatures; evaporation; power-time attribution | Read calibrated user-side meter and stage submeters; record electricity for both drying passes and gelatin heating; verify configuration. Useful heat is a diagnostic against metered electric input, not a second exchange | kWh; MJ; temperature | Each batch and meter period | Entire declared period including seasonal drying | Workshop plus attributable support | per 1 kg reference flow | Meter checks; bills; stage sum; measured operating logs; no nominal-power-only default |
| `cp_water` | hand_papermaking | fresh water | supply meters and batch water | fresh volume; density; temperature; stage makeup; wash/dilution; supply; stocks; recirculation | Read fresh supply meter, measure density where needed; record all water events separately from internal loops and water already in purchased products | m3; kg; temperature | Every batch and cleaning event | Entire declared period | Same workshop and supply | per 1 kg reference flow | Meter calibration; measured density; water balance |
| `cp_wastewater` | hand_papermaking | externally treated effluent | outlet meters, laboratory and consignment | bulk liquid kg; volume; measured density in kg/m3 and temperature; water fraction; suspended/dissolved solids and additives; sampling point; flow-weighted sample; method/version; pH; temperature; COD or TOC; correlation if substituted; TSS; BOD; additive-specific analytes; recipient; treatment | Weigh each final bulk-liquid transfer or convert its event volume with measured event density; retain bulk liquid mass, actual water fraction and dissolved/suspended material separately. Preserve event m3 for load analysis, with no density or pure-water default. Obtain representative flow-proportional composites and accredited/equivalent documented laboratory tests with detection limits, blanks and replicates; retain recipient acceptance and treatment model. Screening-only physical fibre recovery is inside the site, biological treatment outside | m3; mg/L; kg; pH | Each discharge; representative operational monitoring | Entire declared period including cleaning/sizing discharges | Final external transfer point | per 1 kg reference flow | Outlet meter; lab QA; detection limits; consignment/treatment records; BREF BAT10 is method guidance, not assumed site legal frequency |
| `cp_wastes` | hand_papermaking | cotton rejects, unreused sludge and spent felt | weighing and disposal | separate waste identity; wet mass; dry fraction; cotton/sizing/wool content; actual separately captured dry lint; retired maintenance fluid and spills; period; recipient; treatment | Weigh each segregated waste; representative dry-solids and contamination sampling; disposal records; exclude fibre actually returned to vat; separately identify confirmed dry capture or maintenance wastes rather than mixing them into existing sludge/felt/cotton streams | kg; fraction | Each disposal event | Entire declared period | Same boundary | per 1 kg reference flow | Scales; sample method; consignment and waste-property checks |
| `cp_balance` | hand_papermaking | stage transfers, evaporation and physical balances | stage weighing and moisture tests | paired transfer ids; wet/dry masses; water/sizing; actual captured lint and final outdoor release observations; first/second drying; evaporation; fresh intake; final effluent; sludge water; dry cotton; measured carbon; opening/closing water/solids/carbon stocks; independently evidenced chemical H2O formation and consumption; actual reaction products and extent evidence | Measure representative stage wet and dry mass; keep sender/receiver equal for each internal transfer; reconcile net water, dry-solids and carbon at gate; investigate residuals using measurement uncertainties; no presumed cellulose carbon fraction. Keep whole-mass and elemental conservation separate from the molecular-H2O species balance and dry-component transformations; establish actual chemical H2O formation/consumption independently of the closure residual, with method, applicable chemistry, extent, uncertainty and supporting records [yan-akd-hydrolysis-2019] | kg; fraction | Each batch with period reconciliation | Entire declared period | Aggregate unit and all internal stages | per 1 kg reference flow | Paired transfer ledger; moisture/solids/carbon methods; uncertainty; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | For each non-reference exchange, normalized amount = attributable total physical exchange for the period / accepted net finished paper kg for that period. Preserve the physical totals and their units; only handmade_paper_output is fixed at 1 kg. | period exchange totals; cp_output; applicable row protocol | exchange amount per 1 kg reference flow | eu-pp-bref-2015 |
| `dry_mass` | cotton_input; handmade_paper_output; cotton_reject_output; sludge_output; spentfelt_output | dry solids kg = wet kg × measured dry-solids fraction; water kg = wet kg minus dry solids kg. Retained additive solids are not cotton; report each separately. This diagnostic never replaces the delivered wet reference. | wet mass; tested dry-solids fraction; additive retention | physical dry-solids and water ledger | eu-pp-bref-2015 |
| `physical_water_balance` | evaporation_output | evaporation kg = incoming molecular H2O kg plus chemically formed H2O kg minus chemically consumed H2O kg minus exported liquid-water component and retained water kg minus change in site molecular-H2O stock kg. The simplified incoming-minus-exported/retained/stock equation applies only where relevant H2O reactions are absent or independently evidenced negligible within declared measurement uncertainty. AKD hydrolysis consumes H2O; for the actual optional AKD branch, require independent reaction-extent evidence, with no assumed hydrolysis fraction, rate or complete conversion of the purchased AKD. Include purchased-material water, accepted-sheet moisture, each waste's actual water and offsite effluent water (bulk liquid kg × measured water fraction, not total liquid mass); internal recirculation cancels once at both ends. Confirm with stage drying/bath measurements; report unresolved residual rather than assigning unmeasured evaporation. | cp_water; cp_additives; cp_output; cp_wastewater; cp_wastes; cp_balance | measured/reconciled evaporation kg and closure residual | eu-pp-bref-2015; yan-akd-hydrolysis-2019 |
| `treatment_load` | wastewater_output | pollutant kg = sum over matched discharge intervals of outlet m3 × flow-weighted mg/L × 0.001. Keep COD as oxygen-demand equivalent, TSS as test-defined solids, TOC as carbon; COD is not a chemical species and cannot be added to TSS or converted to CO2. Loads characterize treatment input, not direct river emissions. | measured discharge interval volumes; matched laboratory results | treatment-input loads with uncertainty | eu-pp-bref-2015 |
| `physical_carbon_balance` | all inventory rows | Reconcile measured incoming carbon, outgoing carbon in accepted paper and each waste/effluent, and stock changes; distinguish cotton/gelatin biogenic and sizing/packaging source fractions from supplier or analytical evidence. Do not infer a carbon fraction from flow name. If actual biogenic CO2 occurs, retain a separate LCI exchange with proper media and measured source; a GHG reporting convention cannot delete it. Track independently evidenced AKD reaction products in their actual retained, exported or emitted destinations; any actual CO2 requires separate quantity, species/media and carbon-origin evidence. Hydrolysis alone does not establish an emitted CO2 quantity or origin. | measured composition; supplier carbon origin; cp_balance | physical carbon ledger and residual | eu-pp-bref-2015 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all rows | Match the actual material/species, route, delivery state, medium, reference property and unit. Blank UUIDs remain explicit gaps, with no approximate correction-flow substitution. Identity success is not a complete background dataset. | Supplier/recipient specifications; direct identities; unresolved manifest fields |
| `quality_coverage` | site records | Cover accepted/rejected batches, both drying stages, sizing, cleaning and stock changes in the same period. Quantify omissions where feasible and retain uncertainty; no borrowed factory averages. | cp_output and all applicable protocols |
| `quality_balances` | manufacturing and recovery | Close water/dry-solids/carbon against measured uncertainty without forced closure. Preserve internal fibre recovery and white-water volumes as physical ledgers; no credit or purchased-input double count. | cp_balance and waste/treatment ledgers |
| `quality_source_limits` | methodology and additives | BREF concerns industrial pulp/paper mills: transfer applicable qualitative accounting/monitoring only. Khadi is one producer, and Carriage House directions/SDS are supplier-specific historical evidence; establish current pH/formulation independently for the foreground package. | Source locators and actual supplier certificates |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference product | Exactly one accepted finished output links to the reference; require cotton and hand-mould route, moisture, acceptance and all qualifiers. Stage wet/dry papers are internal transfers, not duplicated product outputs. | khadi-cotton-route |
| `validation_denominator` | all inventory rows | Reference, collection, aggregation and all normalized rows use 1 kg accepted net conditioned finished paper. Do not divide by dry fibre, mould area, number of wet sheets, gross wrapped mass or rejected output without explicit consistent conversion. | eu-pp-bref-2015 |
| `validation_energy` | electricity_input | Electric motor/press and heating records must be complete. Loft or hand labels cannot justify zero; physical heat diagnostics cannot duplicate purchased electricity. Other utility configurations require a reviewed atomic-flow extension. | eu-pp-bref-2015 |
| `validation_water` | water, wastewater, recovery and solids | Reconcile stock-aware fresh/retained/discharged/evaporated molecular H2O, independently evidenced chemical H2O formation/consumption and dry-component transformations; whole-mass or elemental closure does not establish H2O-species closure. Accept the simplified evaporation equation only for absent or independently evidenced negligible H2O reactions at declared uncertainty; unknown reaction terms cannot pass as zero, evaporation or a fitted residual. For actual AKD use, check extent/speciation evidence without assuming complete hydrolysis, a rate or a CO2 amount/origin. Use matched concentrations and volumes; distinguish offsite treatment input from direct emissions and preserve the external treatment burden. | eu-pp-bref-2015; yan-akd-hydrolysis-2019 |
| `validation_additives` | size and gelatin | Confirm supplied formulation, wet/dry quantity basis, purity, bath stocks and retained sizing. Resolve current pH/formulation before acid-free claims; the linked old SDS and generic AKD component cannot establish this emulsion's background compatibility. | chp-sizing-directions-2014; solenis-hercon-sds-2018 |
| `validation_completeness` | data package | Each exchange is atomic and retains unresolved identity or numerical gaps; no invented UUID, default factory quantity or silent zero. If actual emissions include particles, specify disjoint size bins without summing overlapping totals; preserve actual biogenic CO2 regardless of GHG convention. Added emissions require media/species/unit evidence. Review actual maintenance-fluid exchanges, dry-fibre capture and outdoor releases; absence of dry chopping does not prove their absence, and no paper-machine dust quantity is borrowed. | eu-pp-bref-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground hand-papermaking production process |
| downstream_use | secondary_dataset; background_dataset only after declared compatibility and uncertainty assessment |
| allowed_use | The defined clean-cotton-cutting, hand-mould/hydraulic-press, electric/loft-drying and offsite-effluent-treatment route with actual foreground evidence |
| excluded_use | Full CPC 32122 generalization; machine-made/mould-machine paper; other fibre, pulping, combustion or treatment routes; unconditional acid-free/archival claims; functional comparisons based only on mass |
| required_metadata | Reference qualifiers; exact site and period; stage records; stocks; cotton upstream treatment/allocation; utilities; supplied additives; transport; external treatment; background identities; normalization; cutoffs |
| required_quality_disclosure | Record coverage, uncertainty and physical balance residuals; unresolved UUID and formulation/background gaps; supplier-source limits; methodological extensions |
| update_trigger | Furnish/formulation, energy/drying, utility supply, wastewater treatment, product quality/moisture basis or supplier/background change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| khadi-cotton-route | handbook | Khadi Papers, About the paper, South India section: https://www.khadi.com/about-khadi-papers/about-the-paper/ | One producer's cotton garment-cutting furnish, Hollander/hand-mould/couching/hydraulic pressing/loft drying and gelatin sequence; no recipe, site energy or industry quantities imported |
| eu-pp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), §§7.1.1–7.1.2 printed pp.660–662, §7.3.4 pp.728–729, BAT10 p.788: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Industrial-machine distinction and applicable qualitative energy/water/fibre-recovery and monitoring principles; no machine performance values, handmade dose or legal frequency assumed |
| chp-sizing-directions-2014 | handbook | Carriage House Paper, Directions for sizing, revised March 2014, p.1: https://pdfs.carriagehousepaper.com/CarriageHousePaper-Sizing.pdf | A ketene-dimer emulsion internal-sizing option and addition stage; historical dosage, shelf life and concentration not adopted as defaults |
| solenis-hercon-sds-2018 | handbook | Solenis Hercon 100 Sizing Agent SDS R0702621, v1.5, revision 22 May 2018, §§3,9,12–13: https://pdfs.carriagehousepaper.com/Hercon.100-SIZINGAGENT-000000000000414870United-States-English(1).pdf | Supplier-linked mixture identity limitations and pH counterevidence; hazard list is not complete formulation, and SDS disposal guidance does not establish zero effluent impact |
| yan-akd-hydrolysis-2019 | literature | Yan, N., Wan, X.-F., Hu, H.-C. and Chai, X.-S. (2019), Kinetic modelling of alkyl ketene dimer hydrolysis during the storage and papermaking process, Can. J. Chem. Eng. 97:2097–2101, DOI 10.1002/cjce.23440, publisher abstract: https://onlinelibrary.wiley.com/doi/10.1002/cjce.23440 | Primary evidence that diluted aqueous AKD can hydrolyse under storage/papermaking conditions; supports considering chemical H2O consumption, not a workshop-specific extent, formulation, kinetic constant or emission quantity. Abstract only; full kinetic model not adopted |
