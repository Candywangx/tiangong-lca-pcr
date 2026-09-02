---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.corrugated-paper-and-paperboard
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Corrugated paper and paperboard

## 1. Scope and Applicability

This PCR governs foreground data packages for corrugated paper and paperboard made by assembling liner papers and fluting medium on a corrugator. It covers single-face, single-wall, double-wall, and triple-wall board sold in reels or sheets when the product remains corrugated paper or paperboard at the plant gate.

The PCR covers steam or heat conditioning, fluting, starch application, joining liners and fluting, drying or setting on the corrugator, slitting, cutting to sheet or reel form, stacking, and directly associated site utilities and waste handling. It does not cover pulp production, recovered-paper preparation, or corrugated base-paper manufacture as foreground operations; those inputs require upstream datasets. It also excludes conversion of board into cartons, boxes, cases, sacks, bags, displays, or other finished containers, including printing, slotting, die-cutting, folding, stitching, and box gluing.

Coating or laminating is included only when it occurs at the reporting site and the saleable product remains within CPC 32151. The dataset must identify the liner grades, fluting grade, wall construction, flute profile, basis weight, moisture basis, recycled-fibre status, and any coating or lamination.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.corrugated-paper-and-paperboard |
| classification_refs | CPC 3.0: 32151, Corrugated paper and paperboard, exact |
| covered_products | Corrugated paper and paperboard in reels or sheets; single-face, single-wall, double-wall, and triple-wall corrugated board; coated or laminated corrugated board only when it remains an intermediate board product |
| excluded_products | Linerboard and fluting medium before corrugation; pulp and base-paper manufacture; sacks and bags; cartons, boxes, cases, displays, and other converted containers; manufacturing services performed on materials owned by others |
| representative_product | Single-wall double-faced corrugated paperboard sheet comprising two liners and one fluted medium bonded with starch adhesive |
| production_route | Liner and fluting reels are conditioned, fluted, bonded on a corrugator, set or dried, slit, cut or reeled, and prepared as net saleable corrugated board |
| market_state | Net saleable corrugated board at the corrugator plant gate, before conversion into boxes or other containers |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net saleable corrugated paper or paperboard produced by corrugator conversion |
| How much | 1,000 kg |
| How well | Conforming saleable board with declared liner and fluting grades, wall construction, flute profile, grammage, thickness, moisture content, recycled-fibre status, and surface treatment |
| How long or cycle | One reporting-period production output normalized to 1,000 kg net saleable product |
| reference_flow_link | `corrugated_board_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable product |
| Reference product flow | Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | liner grades and supplier routes; fluting grade and supplier route; wall construction; flute profile; product grammage in g/m2; thickness in mm; moisture content and measurement basis; recycled-fibre content claim basis; coating or lamination; product form; site; geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net saleable product and material inputs or outputs in kg; convert tonnes using 1 t = 1,000 kg. |
| `saleable_mass_basis` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the weighed net saleable board leaving the corrugator boundary, excluding separately reported transport packaging and excluding shavings or rejects. |
| `grammage_measurement` | product grammage qualifier | Mass per area | g/m2 | Determine and report grammage using ISO 536:2019 or a demonstrably equivalent method; identify whether the value is measured on the assembled board or calculated from component papers. |
| `moisture_measurement` | product moisture qualifier and moisture corrections | Mass fraction | % by mass | Determine lot moisture using ISO 287:2017 or a demonstrably equivalent oven-drying method. Report whether inventory mass is as sold or moisture-corrected; do not mix bases. |
| `thickness_measurement` | product thickness qualifier | Length | mm | Determine single-sheet thickness using ISO 3034:2011 or a demonstrably equivalent method applicable to corrugated fibreboard. |
| `energy_measurement` | electricity and purchased steam or heat | Net or gross calorific value, consistent with the selected Tiangong flow | kWh for electricity; MJ for heat | Preserve metered units and the selected flow-property basis. Document conversions and do not convert steam mass to energy without measured enthalpy or documented operating conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Liner and fluting reels, starch or prepared adhesive, purchased utilities, and ancillary materials are received at the corrugator site boundary. |
| starting_condition_role | Foreground gate-to-gate corrugator conversion start; upstream fibre, pulp, recovered-paper preparation, and base-paper production remain represented by supplier or secondary datasets. |
| product_classification_scope | CPC 3.0 subclass 32151 only; the boundary ends before conversion into CPC 32152 or 32153 sacks, bags, cartons, boxes, cases, or related containers. |
| recursive_input_rule | Corrugated board returned internally for rework remains an internal loop. Purchased or externally recovered corrugated material crossing the boundary is recorded as a separate input with origin, treatment state, and upstream dataset; it is not silently netted against output. |
| upstream_dataset_requirement | Use grade- and route-specific upstream datasets for each liner, fluting medium, adhesive, electricity mix, heat or steam supply, water supply, and external waste treatment. |
| disclosure | Declare site, geography, reporting period, wall and flute construction, product mix, integrated or non-integrated operations, included finishing, upstream dataset substitutions, onsite utility generation, wastewater treatment, and all cut-offs. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_corrugator_conversion` | foreground corrugator conversion | Include liner and fluting unwinding, heat or steam conditioning, corrugating rolls, starch application, single-facing and double-backing, setting or drying, slitting, cutting or reeling, stacking, and directly associated internal handling. | fefco-corrugated-board-production; fefco-corrugated-board-boundaries |
| `boundary_supporting_operations` | site support operations | Include onsite heat or steam generation, electricity generation, water treatment, wastewater treatment, and solid-waste handling when they occur inside the reporting site boundary; otherwise represent purchased utilities or external treatment as product or waste exchanges. | fefco-corrugated-board-boundaries |
| `boundary_upstream_base_paper` | upstream liner and fluting production | Exclude pulp and corrugated base-paper manufacture from the foreground corrugator process, but require upstream datasets and actual grade masses for all liners and fluting media. | fefco-corrugated-board-boundaries |
| `boundary_container_conversion` | downstream container manufacture | Exclude printing, slotting, die-cutting, folding, stitching, and gluing that convert corrugated board into boxes or other containers; create a separate downstream process if these operations are needed. | unstats-cpc-32151; fefco-corrugated-board-production |
| `boundary_cutoff_disclosure` | inventory completeness | Do not omit known liner, fluting, adhesive, electricity, heat or steam, water, shavings, rejects, or treatment flows. Any other omission must be quantified where feasible and disclosed with its rationale and estimated significance. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corrugator_conversion` | Corrugator conversion to net saleable board | `required` | Always included for products within this PCR | Foreground board forming and finishing before container conversion | 1,000 kg net saleable corrugated board |

### Process: Corrugator conversion to net saleable board (`corrugator_conversion`)

#### Inputs

##### Product flows

###### Liner and fluting base papers (`base_paper_input`)

All liner and fluting grades crossing the site boundary are collected by grade and supplier route. The selected aggregate flow provides one stable inventory role; the foreground package should preserve separate exchanges for materially different upstream grades where possible.

- Selected flow: Base paper or paperboard web `51b5350f-bd87-4d08-9f00-f9ae3c6e1767`
- Flow property / unit: Mass / kg
- Amount rule: Sum weighed mass of all liner and fluting reels consumed, adjusted for documented inventory changes; retain grade-level masses and upstream dataset identities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable corrugated board
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_base_paper_receipts`
- Sources: fefco-corrugated-board-data-2024; fefco-corrugated-board-material-inputs
- Range: European average base-paper input authoring prior, not a conformity limit
  - Range role: Typical range (`typical_range`)
  - Lower: 1120
  - Upper: 1120
  - Unit: kg
  - Basis: per 1,000 kg average corrugated board product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: fefco-corrugated-board-data-2024

###### Starch-based corrugating adhesive (`starch_adhesive_input`)

Record the prepared starch adhesive or its dry starch and formulation constituents without double counting. The formulation basis and water content must be retained.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass / kg
- Amount rule: Measured adhesive consumption from batch preparation, issue records, or tank balance, reported on the declared wet or dry basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable corrugated board
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_adhesive_records`
- Sources: fefco-corrugated-board-production; fefco-corrugated-board-material-inputs
- Range: Provisional adhesive-use screening estimate to be replaced by reviewed evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 100
  - Unit: kg
  - Basis: broad first-pass estimate per 1,000 kg net saleable corrugated board
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water (`process_water_input`)

Record water entering adhesive preparation, steam or humidification systems when not included in purchased steam, cleaning, and other corrugator operations. Avoid double counting recirculated water.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass / kg
- Amount rule: Metered or allocated site water supplied to the corrugator boundary, net of documented internal recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable corrugated board
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: fefco-corrugated-board-boundaries
- Range: Provisional water-use screening estimate to be replaced by reviewed evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: broad first-pass estimate per 1,000 kg net saleable corrugated board
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Medium-voltage electricity (`electricity_input`)

Record corrugator drives, fans, pumps, cutting and stacking equipment, and allocated supporting electricity. Use the actual site electricity mix or supplier-specific dataset.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered corrugator electricity plus a documented allocation of shared site electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable corrugated board
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: fefco-corrugated-board-boundaries
- Range: Provisional electricity-use screening estimate to be replaced by reviewed evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: broad first-pass estimate per 1,000 kg net saleable corrugated board
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam or process heat (`steam_heat_input`)

Record purchased steam or heat used for paper conditioning and adhesive setting. If heat is generated onsite, replace this exchange with fuel and direct-emission rows under the same site boundary.

- Selected flow: heat, steam `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered heat or steam enthalpy delivered to the corrugator; document pressure, temperature, condensate return, and conversion assumptions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable corrugated board
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: fefco-corrugated-board-production; fefco-corrugated-board-boundaries
- Range: Provisional process-heat screening estimate to be replaced by reviewed evidence
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: MJ
  - Basis: broad first-pass estimate per 1,000 kg net saleable corrugated board
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable corrugated board (`corrugated_board_output`)

The reference product is weighed after corrugating, setting or drying, slitting, cutting or reeling, and normal internal quality rejection, but before box conversion.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Normalize the reporting-period net saleable product mass to exactly 1,000 kg while retaining the measured unnormalized mass and moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable corrugated board
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_saleable_product`
- Sources: fefco-corrugated-board-boundaries
- Range: Reference-flow normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: fefco-corrugated-board-boundaries

##### Waste flows

###### Corrugated paperboard shavings and rejects (`paper_shavings_output`)

Record corrugator trim, cuttings, and quality rejects leaving the process boundary. Internal rework is not an output; offsite recycling or treatment destinations must be disclosed.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Weighed shavings and rejected board leaving the boundary, classified by destination; do not subtract the amount from paper input without retaining the explicit output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable corrugated board
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shavings_records`
- Sources: fefco-corrugated-board-data-2024; fefco-corrugated-board-closed-loop
- Range: European typical corrugator production-shavings authoring prior, not a conformity limit
  - Range role: Typical range (`typical_range`)
  - Lower: 100
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg corrugated product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: fefco-corrugated-board-closed-loop

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | corrugator conversion producing corrugated board | Treat corrugated board as the reference product and shavings, rejects, wastewater, and other treatment outputs as explicit waste or residual flows; do not assign them a share of foreground burdens merely because they may have recovery value. | fefco-corrugated-board-closed-loop |
| `allocation_subdivision_first` | multiple board grades or lines sharing utilities | Subdivide metered data by line, grade, campaign, or machine time wherever technically feasible. Allocate only the unresolved shared remainder, using net saleable mass as the default driver and disclosing the allocation share for every product group. | eu-pef-2021-2279 |
| `allocation_recycling_separate` | paper shavings and downstream recycling | In this gate-to-gate foreground dataset, report shavings and their destination without an avoided-production credit. If a downstream lifecycle model applies a closed-loop or circular-footprint method, identify the method, geography, period, recycled-content inputs, recovery outputs, and allocation factors separately. | fefco-corrugated-board-closed-loop; eu-pef-2021-2279 |
| `allocation_no_silent_netting` | internal rework and inventory changes | Internal rework may remain inside the boundary, but purchased or externally recovered board, external waste outputs, and opening or closing inventories must not be silently netted. Preserve gross records and show the normalization calculation. | fefco-corrugated-board-data-2024 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_saleable_product` | `corrugator_conversion` | net saleable corrugated board | calibrated scale record and product-quality record | timestamp; product code; wall construction; flute profile; liner and fluting grades; gross mass; transport-packaging mass; reject mass; moisture sample; grammage; thickness | Export scale or production scale linked to product batch; ISO 536 grammage; ISO 287 moisture; ISO 3034 thickness or demonstrably equivalent methods | kg; g/m2; % by mass; mm | Each batch or production order, aggregated monthly | At least 12 consecutive representative months, or the full campaign for seasonal or short-run production | All lines and products represented by the dataset | Sum net saleable mass after subtracting separately reported transport packaging; retain product-level totals before normalization | Scale calibration; sampling plan; test records; reconciliation to sales or dispatch totals |
| `cp_base_paper_receipts` | `corrugator_conversion` | liner and fluting base papers | receiving, issue, and inventory record | supplier; mill; grade; liner or fluting role; primary or recovered fibre status; flow UUID; upstream dataset; reel mass; issue mass; opening inventory; closing inventory; moisture basis | Calibrated receiving or process scales and inventory ledger | kg | Each delivery and issue, reconciled monthly | Same reporting period as product output | All base-paper inputs to included corrugator lines | Consumption = opening inventory + receipts - closing inventory - documented transfers; preserve grade-level values | Scale calibration; supplier specification; invoice or goods receipt; inventory reconciliation |
| `cp_adhesive_records` | `corrugator_conversion` | starch adhesive and formulation constituents | batch sheet, purchase issue, and tank balance | batch id; dry starch; water; caustic soda; borax or alternatives; wet-strength agent; prepared adhesive mass; return or loss; solids content | Batch weighing or flowmeter plus stock reconciliation | kg | Each batch, aggregated monthly | Same reporting period as product output | All adhesive preparation serving included lines | Report prepared adhesive and dry constituents on explicitly declared bases; prevent double counting water and formulation components | Calibrated scales or meters; formulation sheet; stock reconciliation |
| `cp_utility_meters` | `corrugator_conversion` | electricity, heat or steam, and process water | utility meter and allocation record | meter id; start and end readings; unit; pressure; temperature; condensate return; shared-load driver; downtime | Dedicated meters where available; otherwise documented engineering allocation from site meters | kWh; MJ; kg | Continuous or per shift, aggregated monthly | Same reporting period as product output | Corrugator and included supporting operations | Subtract documented non-production loads; allocate shared utilities by measured machine time, throughput, or engineering heat balance before normalization | Meter calibration; invoices; allocation worksheet; completeness reconciliation |
| `cp_shavings_records` | `corrugator_conversion` | shavings and rejected board | waste dispatch and production-reject record | weight ticket; container id; product grade; internal rework; external destination; recycler or treatment route; moisture basis | Dedicated waste scale, baler scale, or verified collector weight ticket | kg | Each dispatch or production shift, aggregated monthly | Same reporting period as product output | All trim and rejects from included lines | Exclude internal rework from external output; sum gross external shavings and rejects by destination | Scale calibration; recycler receipt; waste manifest; reconciliation to paper mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory exchange | normalized amount = reporting-period exchange amount / reporting-period net saleable board mass × 1,000 kg | exchange amount; net saleable board mass | amount per 1,000 kg reference flow | fefco-corrugated-board-boundaries |
| `calc_base_paper_consumption` | liner and fluting input | consumed base paper = opening inventory + receipts - closing inventory - transfers out; retain separate liner and fluting grade totals before summing | inventory and receipt records by grade | kg base paper consumed by grade and in total | fefco-corrugated-board-material-inputs |
| `calc_board_mass_balance` | corrugator conversion | reconcile base papers + dry adhesive constituents + other retained materials against net saleable board + external shavings and rejects + documented inventory or moisture change; investigate and disclose the residual | base-paper records; adhesive records; output mass; shavings; moisture; inventories | mass-balance residual and explanation | fefco-corrugated-board-data-2024 |
| `calc_energy_conversion` | heat or steam | convert steam to MJ only from metered energy or documented mass, pressure, temperature, condensate return, and enthalpy difference; record the property basis used by the selected flow | steam or heat records; operating conditions | MJ delivered heat on declared gross or net basis | eu-pef-2021-2279 |
| `calc_moisture_disclosure` | product and paper masses | preserve as-sold mass as the reference basis; if dry-mass comparison is also reported, calculate it from measured moisture and keep both values with the formula | as-sold mass; ISO 287 moisture result | as-sold mass and optional dry mass | iso-287-2017; fefco-corrugated-board-outputs |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and process identity | Product code, wall construction, flute profile, liner and fluting grades, product form, surface treatment, site, geography, and reporting period must be unambiguous and consistent with CPC 32151. | Product specification, production order, and classification review |
| `dq_temporal` | foreground activity data | Use at least 12 consecutive representative months unless a shorter complete campaign is justified; identify shutdowns, abnormal periods, and the reference year. | Meter extracts, production ledger, and reporting-period reconciliation |
| `dq_completeness` | all required inventory roles | Reconcile base papers, adhesive, utilities, saleable output, shavings, and other known outputs. Record zero only after confirming that the flow does not occur; distinguish unavailable data from zero. | Mass balance, utility reconciliation, waste records, and omission log |
| `dq_measurement` | mass, grammage, moisture, thickness, and utilities | Retain instrument identity, calibration status, sampling frequency, test method, unit conversion, and aggregation worksheet. | Calibration certificates, ISO or equivalent test records, and calculation workbook |
| `dq_representativeness` | site dataset and secondary datasets | Assess technological, geographical, time-related, and precision representativeness; justify any proxy upstream dataset and identify differences in fibre route, energy mix, mill technology, and product grade. | EU PEF data-quality assessment and supplier dataset metadata |
| `dq_supplier_coverage` | liner, fluting, adhesive, energy, and treatment datasets | Every material upstream input and external treatment route must have a named dataset or a documented gap; average FEFCO values may support QA but do not replace supplier- or route-specific foreground quantities. | Supplier declarations, secondary dataset references, and gap register |
| `dq_industry_prior` | comparison with industry evidence | Treat FEFCO weighted averages as external screening priors. Do not claim they are site-specific or universally representative outside the reported European geography, technology, and reference year. | FEFCO questionnaire coverage and peer-review statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity_scope` | product category | Confirm that the output is corrugated paper or paperboard and not base paper, a box, carton, sack, bag, display, or manufacturing service; reject ambiguous product identities. | unstats-cpc-32151; environdec-pcr-2010-14-v4-2026 |
| `validation_reference_flow` | reference flow | Require exactly 1,000 kg normalized net saleable corrugated board with the mass property and units-of-mass UUIDs, plus every required product qualifier. | fefco-corrugated-board-boundaries; iso-536-2019; iso-287-2017; iso-3034-2011 |
| `validation_process_coverage` | corrugator boundary | Require documented coverage of paper conditioning, fluting, starch application, liner joining, setting or drying, slitting, cutting or reeling, stacking, and included supporting utilities; separately disclose every excluded onsite operation. | fefco-corrugated-board-production; fefco-corrugated-board-boundaries |
| `validation_mass_balance` | material inventory | Check gross base-paper input, adhesive constituents, net saleable output, shavings and rejects, moisture basis, and inventory changes as one mass balance; a non-zero unexplained residual is a finding, not an automatic adjustment. | fefco-corrugated-board-data-2024 |
| `validation_energy_water` | utilities | Require measured or transparently allocated electricity, heat or steam, and process water; require unit and property conversions to be reproducible from retained records. | eu-pef-2021-2279 |
| `validation_recycling` | shavings and recycling | Require gross shavings or reject output and destination. Reject silent netting or an avoided-production credit inside the gate-to-gate process unless a separately declared downstream recycling method is in scope. | fefco-corrugated-board-closed-loop |
| `validation_data_quality` | published foreground data package | Require temporal, technological, geographical, completeness, precision, calibration, proxy, and uncertainty disclosures sufficient for downstream secondary or background use. | eu-pef-2021-2279; fefco-corrugated-board-questionnaire-2024 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site- and technology-specific foreground dataset for corrugator conversion to corrugated paper or paperboard |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Foreground process construction, supply-chain modelling, product environmental footprint studies, EPD preparation under an applicable current PCR, scenario comparison, and lifecyclemodel assembly when product qualifiers and geography match |
| excluded_use | Direct representation of pulp or base-paper production; direct representation of box or container conversion; unsupported geography or technology claims; use of provisional reasoned-estimate ranges as measured site data; product-to-product comparative assertions without applicable programme rules |
| required_metadata | canonical PCR id; CPC reference; site and geography; reporting period; technology; liner and fluting grades and routes; wall and flute construction; grammage; thickness; moisture basis; recycled-fibre claim basis; surface treatment; reference flow UUIDs; upstream dataset identities; allocation; cut-offs |
| required_quality_disclosure | Primary-data share; meter and sampling coverage; calibration; mass-balance residual; proxy datasets; temporal, technological, geographical, and precision representativeness; provisional estimates; uncertainty; treatment destinations; review status |
| update_trigger | Material change in corrugator technology, product mix, fibre route, adhesive formulation, energy or heat supply, allocation, system boundary, site, data source, or more than five years since the foreground reference year |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-pcr-2010-14-v4-2026` | Standard (`standard`) | EPD International, PCR 2010:14 Processed paper and paperboard, version 4.0.0, published 2026-03-03, valid until 2030-03-03, https://www.environdec.com/pcr-library/pcr_487bc5e7-8e58-474b-f2f6-08de791141fe, retrieved 2026-07-27 | Current official PCR scope confirming inclusion of UN CPC 32151 |
| `unstats-cpc-32151` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC subclass 32151 and class 3215 classification details, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/32151, retrieved 2026-07-27 | Product identity and exclusion of separate container subclasses |
| `fefco-corrugated-board-production` | Extension guidance (`extension_guidance`) | FEFCO, European Database for Corrugated Board Life Cycle Studies, Corrugated board production, https://www.fefco.org/lca/dscription-of-production-system/corrugated-board-production, retrieved 2026-07-27 | Product construction and corrugator process decomposition |
| `fefco-corrugated-board-boundaries` | Official guidance (`official_guidance`) | FEFCO, European Database for Corrugated Board Life Cycle Studies, Boundaries and declared unit, https://www.fefco.org/lca/methodology-questions/boundaries, retrieved 2026-07-27 | Gate-to-gate boundary, supporting processes, and 1 tonne net saleable product basis |
| `fefco-corrugated-board-data-2024` | Dataset (`dataset`) | FEFCO, European Database for Corrugated Board Life Cycle Studies, calculated inputs and outputs for 1 tonne corrugated product, https://www.fefco.org/lca/data, retrieved 2026-07-27 | European average paper input of 1.12 t/t product and 0.12 t/t paper-for-recycling output; mass-balance QA prior |
| `fefco-corrugated-board-material-inputs` | Dataset (`dataset`) | FEFCO, European Database for Corrugated Board Life Cycle Studies, Material inputs, https://www.fefco.org/lca/data-description/material/inputs, retrieved 2026-07-27 | Liner, fluting, starch glue, and formulation constituent inventory roles |
| `fefco-corrugated-board-outputs` | Dataset (`dataset`) | FEFCO, European Database for Corrugated Board Life Cycle Studies, Material outputs, https://www.fefco.org/lca/data-description/material/outputs, retrieved 2026-07-27 | Product moisture evidence and residue-boundary interpretation |
| `fefco-corrugated-board-questionnaire-2024` | Dataset (`dataset`) | FEFCO, European Database for Corrugated Board Life Cycle Studies, 2024 data-collection questionnaire and coverage, https://www.fefco.org/lca/data-description/questionnaire, retrieved 2026-07-27 | Foreground data roles, reporting-period design, industry coverage, and representativeness caveats |
| `fefco-corrugated-board-closed-loop` | Method factor (`method_factor`) | FEFCO, European Database for Corrugated Board Life Cycle Studies, Closed-loop approach, https://www.fefco.org/lca/methodology-questions/closed-loop-approach, retrieved 2026-07-27 | Recycling allocation method and typical corrugator production shavings of about 100 kg/t corrugated product |
| `iso-536-2019` | Standard (`standard`) | ISO 536:2019, Paper and board — Determination of grammage, https://www.iso.org/standard/77583.html, retrieved 2026-07-27 | Product grammage measurement |
| `iso-287-2017` | Standard (`standard`) | ISO 287:2017, Paper and board — Determination of moisture content of a lot — Oven-drying method, https://www.iso.org/standard/69063.html, retrieved 2026-07-27 | Moisture measurement applicable to corrugated board |
| `iso-3034-2011` | Standard (`standard`) | ISO 3034:2011, Corrugated fibreboard — Determination of single sheet thickness, https://www.iso.org/standard/51266.html, retrieved 2026-07-27 | Product thickness measurement |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on Product Environmental Footprint and Organisation Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02021H2279-20211230, retrieved 2026-07-27 | Allocation hierarchy, company-specific activity data, cut-off disclosure, and data-quality dimensions |
