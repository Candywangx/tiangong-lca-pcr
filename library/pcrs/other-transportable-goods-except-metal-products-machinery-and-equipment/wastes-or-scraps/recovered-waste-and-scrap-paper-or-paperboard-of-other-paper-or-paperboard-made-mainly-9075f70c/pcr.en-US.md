---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.recovered-waste-and-scrap-paper-or-paperboard-of-other-paper-or-paperboard-made-mainly-9075f70c
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Dry-sorted baled white unprinted uncoated woodfree paper cuttings

## 1. Scope and Applicability

This PCR covers segregated industrial shavings and sheet cuttings of white, unprinted, uncoated woodfree printing/writing paper made mainly from bleached chemical pulp, with no body coloration. It follows their actual generation at cutting, collection and transfer, inspection, dry sorting and removal of foreign matter, optional size reduction, mechanical compression, wire binding, first quality release and attributable storage/handling/dispatch. The selected recovery route uses electric drives and no repulping, deinking, bleaching, washing of the paper or thermal drying. Cleaning of equipment is a separate conditional operation.

Exclude unbleached kraft and corrugated-board waste; predominantly mechanical-pulp newsprint/journals; mixed white grades of unknown furnish; mass-coloured paper; printed or coated shavings; adhesive-bound, wet-strength, laminated, carbonless, thermal, waxed or contaminated paper; white board, tissue and pulp. A white surface alone proves neither bleaching nor chemical-pulp predominance. UN CPC 39242 describes furnish and absence of mass colouring; it does not make “unprinted” and “uncoated” synonyms of that condition. These are additional, narrower grade restrictions here. Record body colour, surface printing and surface coating independently.

UN CPC provides the classification boundary. ReMA HWS identifies a market form of unprinted untreated white groundwood-free shavings; APV documents an uncoated white paper based on bleached hardwood/softwood sulphate pulp. Kongskilde documents trim generation and collection, HSM compression and wire binding, and Bollegraaf dry separation followed by baling. These sources establish compatible units of operation and a representative supply form; they do not demonstrate the current site’s recipe or permit mixing neighbouring grades.

This is a technical synthesis of independent primary sources, not a measured factory inventory or a claim that their products belong to one order. Supplier records must establish the actual source paper and route. No default recovery yield, bale density, moisture target, electricity consumption or credit is supplied.

JRC BREF §6.1.1 corroborates industrial cuttings, grade sorting, foreign-material removal and dry bale handover; §§7.1.1–7.1.2 distinguish furnish additions from later surface treatment and support upstream tracing of source-sheet formation, pressing, drying and finishing. Adjacent wet repulping/deinking, the Testliner flowsheet and paper-machine steam/heat-recovery examples are countercontext, not operations or numeric defaults for this dry recovery foreground.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.recovered-waste-and-scrap-paper-or-paperboard-of-other-paper-or-paperboard-made-mainly-9075f70c |
| classification_refs | CPC 3.0:39242; narrower product scope. Current mapping relation and acceptance: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its `acceptance.decision_ref` ADRs |
| covered_products | Dry-sorted baled white unprinted uncoated woodfree industrial paper cuttings from mainly bleached chemical pulp |
| excluded_products | Exclude unbleached kraft and corrugated-board waste; predominantly mechanical-pulp newsprint/journals; mixed white grades of unknown furnish; mass-coloured paper; printed or coated shavings; adhesive-bound, wet-strength, laminated, carbonless, thermal, waxed or contaminated paper; white board, tissue and pulp. A white surface alone proves neither bleaching nor chemical-pulp predominance. UN CPC 39242 describes furnish and absence of mass colouring; it does not make “unprinted” and “uncoated” synonyms of that condition. These are additional, narrower grade restrictions here. Record body colour, surface printing and surface coating independently. |
| representative_product | Dry-sorted baled white unprinted uncoated woodfree paper cuttings |
| production_route | Source paper genealogy → actual cut generation → segregated capture/collection → receiving/inspection → dry sorting/removal → actual size reduction → compression/wire binding → first grade release → cohort storage/dispatch services |
| market_state | Grade-released net paper feedstock, baled, at actual moisture; wire and container tare excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared white recovered-paper grade for downstream fibre recovery |
| How much | 1 kg reference flow |
| How well | Agreed unprinted uncoated non-mass-coloured woodfree grade, primarily bleached chemical pulp; measured moisture/ash/foreign material and buyer acceptance |
| How long or cycle | One traceable reporting-period first-release cohort; no assumed downstream yield or service life |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Recovered (waste and scrap) paper or paperboard, of other paper or paperboard made mainly of bleached chemical pulp, not coloured in the mass `0f992863-9483-470c-b0af-69e3d5e6e592` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | source mill/converter and lot genealogy; bleached chemical-pulp furnish evidence and actual mechanical-fibre content; body colour separately from printing and coating; no glue/wet-strength/lamination and actual contaminants; agreed grade tests and rejection criteria; net as-released mass and measured wet-basis moisture/ash; site/period and first-release cohort identifiers; actual collection/sorting/compaction and electric handling route; wire tare and six-leg packaging ledger; upstream burden transfer and allocation convention; electricity voltage/grid/geography and provider identity; WIP/FG quantities and inherited exchange vectors; returns/rework/release reversals and actual receivers |

Declare every qualifier in dataset metadata, process notes, reference-flow comment or equivalent fields. The official Chinese basename is preserved verbatim; its wording “未大量着色” means no body/mass coloration for this scoped use, not a licence for light body dyeing. The generic UUID is qualified by the complete finished card and scope.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference amount is 1 kg net paper at first grade release; paper moisture is included at measured release state, wire and container tare excluded. Use cp_release. |
| raw_units | all inventory rows | actual reference property | declared row unit | Collect unnormalized raw values. Convert actual units before allocation and apply normalize_exchange once: electricity kWh ×3.6 gives MJ; litre ×0.001 gives m3; measured tonnes ×1000 gives kg. Integrated gas/liquid volume is already a quantity; integrate time only for a true rate. Any count-to-mass conversion requires independent actual tare/weight measurement for the same configuration. |
| physical_states | moisture and physical reconciliation | Mass / Volume | kg / m3 | Keep wet-basis moisture, dry paper solids, free water and each foreign material separate. Convert volume to mass only with independently measured material-specific density at declared temperature/pressure. No secondary-property density inference, fixed water density for oil or invented reaction/structural water. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Source-identified industrial unprinted white uncoated paper at actual cutting/offcut generation before graded recovery; compatible upstream source-paper burden is linked |
| starting_condition_role | Documented physical and burden handover, not a universal zero-burden cut-off |
| product_classification_scope | Narrow dry-sorted white woodfree cuttings within CPC 3.0:39242; not every material in that subclass |
| recursive_input_rule | Record external same-category cuttings once at their actual handover state with source, moisture, grade, composition and inherited upstream vector. Do not recurse into a copy of this PCR or assume zero upstream burden because a flow is called waste. Distinguish genuine waste transfer from valued cutting coproduct; apply the declared attributional convention consistently on both sides. No avoided-paper, avoided-landfill or future recycling credit is automatic. |
| upstream_dataset_requirement | Trace each lot back to an actual bleached-chemical-pulp paper supply and cutting operation. Upstream coverage includes the actual pulp formation/bleaching, furnish preparation, sheet forming, pressing, drying and finishing route through a compatible supplier dataset or separately collected upstream process. This is not a purchase-and-repack model for already graded bales. Do not invent a pulp recipe or run virgin papermaking again when its burden is already included. |
| disclosure | Source formation and allocation; actual recovery/transport/utility route; first release Q and gross physical V; WIP/FG vectors; post-release services; waste receivers and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_origin | source origin | Trace each lot back to an actual bleached-chemical-pulp paper supply and cutting operation. Upstream coverage includes the actual pulp formation/bleaching, furnish preparation, sheet forming, pressing, drying and finishing route through a compatible supplier dataset or separately collected upstream process. This is not a purchase-and-repack model for already graded bales. Do not invent a pulp recipe or run virgin papermaking again when its burden is already included. | `apv-white-uncoated`; `kongskilde-trim-handling`; `jrc-ilcd-2010`; `jrc-pulp-paper-bref-2015` |
| b_complete | recovery and services | Include source capture, containers, actual inbound transport, receiving/weighing, sorting foreign materials, size reduction if used, conveying, extraction/filtering, compression, binding, testing, rejects and cleanup. Retain start/stop, idle, failure and zero-output loads. After-release storage, packaging, handling and dispatch stay in a separate cohort service ledger; attach them once to the serviced cohort, including old FG, without producing another Q. Outsourced operations need their actual service/provider inventory and no double counting of embodied utilities. | `kongskilde-trim-handling`; `hsm-cutting-scrap-baling`; `bollegraaf-paper-sorting`; `jrc-ilcd-2010`; `jrc-pulp-paper-bref-2015` |
| b_gate | reference cohort | Q is net paper mass newly passing the first grade-release gate in the period, excluding wire, container tare and all earlier released mass. A repeat test or dispatch is not production. Closing FG from the same cohort already belongs to Q. If a release is reversed, reverse that lot once with its entire inherited vector; subsequent repeat release restores only the reversed eligible quantity. Record incremental rework separately; returns of previously supplied goods retain the original delivery/reversal link. | `rema-hws-2022`; `jrc-ilcd-2010` |
| b_recursive | same-category input | Record external same-category cuttings once at their actual handover state with source, moisture, grade, composition and inherited upstream vector. Do not recurse into a copy of this PCR or assume zero upstream burden because a flow is called waste. Distinguish genuine waste transfer from valued cutting coproduct; apply the declared attributional convention consistently on both sides. No avoided-paper, avoided-landfill or future recycling credit is automatic. | `jrc-ilcd-2010` |
| b_extend | route completeness | The minimum cards do not authorize omissions. Add a separate atomic row for every actual extra material, formulation, packaging component, fuel, refrigerant, service and pollutant species with its receiver and basis. Confirm absence rather than assign zero to an unknown. Steam, boilers, paper wet treatment, intentional chemical modification or drying change the selected route and require additional evidence and reviewed methodology. Do not copy condensate or boiler returns into an electric dry line. | `kongskilde-trim-handling`; `hsm-cutting-scrap-baling`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery | Source generation to first graded recovery and linked services | required | Actual source-segregated cuttings meeting this scope | foreground | New first-grade-release net paper Q; separate cohort service ledger after release |

Within recovery retain separate operational records for source cutting/capture, transfer/transport, receiving/sorting, actual size reduction, pressing/binding/grade release and post-release cohort services. The consolidated consumer process cancels internal transfers; the map does not prescribe fictitious equipment. At each source/receiver boundary use the actual provider once. All conditional cards require an actual presence/absence decision.

### Process: Recovery and linked services (`recovery`)

#### Inputs

##### Product flows

###### Source-segregated white paper cuttings (`raw_cuttings`)

One incoming paper material: the unprinted uncoated white woodfree cuttings already identified by source furnish, before recovery grading. The native Product flow describes bleached-chemical-pulp recovered paper at plant with unspecified treatment and no fixed moisture or CAS; it does not identify a commercial grade. Qualify the actual batch and preserve the parent-paper upstream vector. Do not use Waste Paper Pulp or assume bleaching occurs here. F counts newly arising external cuttings only; internal recirculation and previously released returns are separate lot movements. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of other paper or paperboard made mainly of bleached chemical pulp, not coloured in the mass `0f992863-9483-470c-b0af-69e3d5e6e592`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_origin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_origin`
- Sources: `un-cpc-2025`; `apv-white-uncoated`; `rema-hws-2022`; `kongskilde-trim-handling`

###### Metered electricity for recovery and services (`electricity`)

Electricity for actual cutting capture, conveyors, fans, separators, compressor if present, press, electric handling and attributable storage/dispatch. The native Product flow is grid-average AC below 1 kV, consumption mix to user, CN; the reference property is named Net calorific value with reference unit MJ. It is electrical energy, not fuel heating value. Meter kWh then convert by 3.6 MJ/kWh before allocation. Use only compatible Chinese low-voltage grid supply; other voltage/geography, direct generation or contractual supply needs a separately verified identity/provider. Retain idle, failed and cleaning electricity and avoid both motor-nameplate estimates and duplicated supplier power. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: q per reference flow; raw records under cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `kongskilde-trim-handling`; `hsm-cutting-scrap-baling`; `jrc-ilcd-2010`

###### New purchased bale-binding wire (`wire_new`)

One supplied iron or non-alloy steel baling wire for the actual paper bale; record metal, grade, diameter, coating, strength and provider. Current native Product/Mass identity at plant is CPC41263 iron or non-alloy steel wire for baling and material binding, with exact grade, surface finish, diameter, strength, supplier and geography unspecified; former fencing/barbed-wire classification observations are historical, not the current classification or permission to supply incompatible wire. Confirm smooth binding wire from supplier records. Record the whole purchased wire once, including any supplied coating; do not buy its metal/coating again in a component subledger. Reused or externally returned wire is not a new purchase. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `hsm-cutting-scrap-baling`; `rema-hws-2022`

###### Purchased mineral hydraulic oil formulation (`hydraulic_oil`)

Conditional on actual hydraulic equipment servicing. The native Product is an engineered hydraulic formulation consisting of mineral or synthetic base oil plus additives, with no fixed grade, CAS, route or geography. Here use one documented mineral-base supplied formulation only after viscosity/additive/provider compatibility review; not generic lubricant, fuel or water. Measure full received/top-up/drained stock in m3 (litres ×0.001); constituents are analytical subaccounts, not additional purchases. Use independently measured formulation density at stated temperature for physical mass reconciliation, never a water density or an inferred secondary property coefficient. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: q per reference flow; raw records under cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `hsm-cutting-scrap-baling`; `jrc-ilcd-2010`

###### Municipal water for actual equipment cleaning (`cleaning_water`)

Conditional equipment/yard cleaning only, not paper washing or a yield-improving addition. Native Product: treated potable municipal supply, production mix at plant, no fixed geography/CAS. Select the actual water provider; raw, deionized or recirculated water is not this supply. Reference is Mass/kg; a secondary volume coefficient in the record is not a measured density. Weigh water or convert metered volume using independently measured water density at recorded state; retain wastewater, evaporation, carried moisture and stock changes independently. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-ilcd-2010`

###### External binding-wire return received (`wire_return_in`)

The same individually identified smooth iron or non-alloy steel wire described in wire_new, received back from an external holder for actual reuse; current native material-binding Product identity and all actual grade, coating, diameter, strength and provider qualifications apply. Record condition, holder, tare and inherited burden without a second purchase. Internal reuse is a cancelling movement rather than this external input. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `hsm-cutting-scrap-baling`; `jrc-ilcd-2010`

###### Road freight of loose paper cuttings (`road_transfer`)

Conditional actual road leg from cutting/collection to the recovery site, recorded as one freight service for this identified paper load. Select actual vehicle/fuel class, route, geography, payload and provider; include attributable empty legs and volume-limited loading. Electric on-site conveying is already in electricity and is not this road service. The provider inventory includes its real fuel and atomic emissions; do not buy those again when the complete service is used. If own-operated transport is disaggregated, replace the service with its actual individual fuel/electricity/emission exchanges and collect full operation evidence. No generic transport match is adopted as an exact provider or vehicle identity. q references the single §8 calculation result; collect undivided raw tkm.

- Selected flow: Road freight transport of loose white paper cuttings
- Flow property / unit: Freight transport performance / tkm
- Amount rule: q per reference flow; raw records under cp_transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer`
- Sources: `jrc-ilcd-2010`; `jrc-pulp-paper-bref-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Newly grade-released paper feedstock (`finished`)

One recovered-paper Product, not pulp: white unprinted uncoated woodfree shavings from bleached chemical-pulp paper with no mass colouring, dry sorted and compressed for actual re-pulping use downstream. The native generic at-plant record has unspecified treatment and no fixed moisture, grade, CAS or geography. Every batch therefore declares source furnish, independent body/print/coating status, agreed grade, contaminants, as-released moisture/ash and net mass. It supplies no deinking/bleaching route or universal yield. Q counts first release once and excludes wire/containers. Closing FG already released is included in Q and is not another production output. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of other paper or paperboard made mainly of bleached chemical pulp, not coloured in the mass `0f992863-9483-470c-b0af-69e3d5e6e592`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `un-cpc-2025`; `rema-hws-2022`; `apv-white-uncoated`; `hsm-cutting-scrap-baling`

###### Binding wire attached to gross outward bales (`wire_outbound`)

The same qualified single iron or non-alloy steel paper-binding wire, with current CPC41263 identity and actual specification/provider limits described in wire_new. Report actual wire attached to all gross physical bale shipments, including shipments from opening FG and returned shipments; it is not a coproduct or paper Q. This is the physical packaging exit linked to the wire stock ledger, not a second wire production inventory or negative input credit. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `hsm-cutting-scrap-baling`; `rema-hws-2022`

###### External unused-wire return sent (`wire_return_out`)

The same qualified smooth iron or non-alloy steel Product wire, returned to the actual external owner/provider; preserve current CPC41263 material-binding scope and actual specification/provider limits. Measure external returns separately from attachment on shipment and waste; reverse only the corresponding actual supply burden where contract and records establish it. No credit from a hypothetical future reuse. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `hsm-cutting-scrap-baling`

##### Waste flows

###### Removed coated paper contaminant (`reject_coated`)

Conditional identified coated-paper contamination from the source stream. Keep it separate from white uncoated output, coloured paper and newsprint. Weigh actual rejected material and identify receiver/status; do not model its coating minerals as separate purchased chemicals. No adopted UUID; generic waste paper/pulp matches do not establish this exact waste identity. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Rejected coated paper cuttings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_exits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_exits`
- Sources: `rema-hws-2022`; `bollegraaf-paper-sorting`

###### Removed body-coloured paper contaminant (`reject_coloured`)

Conditional mass-coloured paper removed as a distinct rejected paper stream. Describe actual dye/print/coating information available without inventing a chemical species or source composition. Record actual destination and burden; unresolved UUID remains a specific material, never a combined contaminant bucket. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Rejected mass-coloured paper cuttings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_exits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_exits`
- Sources: `un-cpc-2025`; `bollegraaf-paper-sorting`

###### Removed mechanical-pulp newsprint (`reject_newsprint`)

Conditional paper contaminant mainly made from mechanical pulp; exclude it from this product Q and distinguish its stock/receiver from other rejected grades. White or bleached appearance does not make mechanical pulp a chemical-pulp stream. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Rejected newsprint paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_exits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_exits`
- Sources: `un-cpc-2025`; `bollegraaf-paper-sorting`

###### Removed polyethylene film (`reject_pe`)

Conditional actual polyethylene film removed from collection/transport packaging or sorting. Verify polymer and contamination, weigh once at the actual outlet, distinguish supplier packaging from newly purchased bale packaging, and retain receiver/treatment. The generic Plastic Film product candidate is not adopted as this waste. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_exits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_exits`
- Sources: `bollegraaf-paper-sorting`

###### Discarded smooth steel binding wire (`wire_waste`)

Actual steel-wire offcuts, damaged binding or end-of-use wire, with alloy/coating and receiver stated. Keep one wire material separate from removed film/paper. A product wire UUID is not automatically a waste-flow UUID. Preserve this specific name pending a compatible native waste identity. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Waste smooth steel baling wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `hsm-cutting-scrap-baling`; `jrc-ilcd-2010`

###### Collected paper-fibre dust (`captured_dust`)

Paper-fibre dust actually caught in separators/filters or cleanup, with moisture/ash and destination recorded. Distinguish retained dust, internal paper return, exported waste and stack emission. The same mass cannot appear both in a collected-waste exit and an atmospheric emission. The native Waste flow covers collected industrial dust with no fixed composition, size, CAS or geography; its airborne-particle synonyms do not change the Waste type. Here it identifies only captured dry paper-fibre dust, not an atmospheric emission, mineral dust or sold product; measurements establish composition and receiving treatment. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_exits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_exits`
- Sources: `kongskilde-trim-handling`; `jrc-ilcd-2010`

###### Spent mineral hydraulic formulation (`spent_oil`)

Conditional actual drained/spilled mineral hydraulic formulation from the same oil inventory. Weigh the full formulation and record contamination, absorbent separately if used, remaining equipment stock and licensed receiver. It is not the virgin Product oil flow; do not strip additives into invented additional purchases or environmental species. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Spent mineral hydraulic oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_exits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_exits`
- Sources: `jrc-ilcd-2010`

###### Equipment-cleaning effluent (`cleaning_effluent`)

Conditional water-based equipment-cleaning discharge to the actual external treatment provider. Measure the complete effluent once and retain volume/density, suspended solids, actual analyses and fate; analytical fibre/COD subaccounts are not extra effluent exchanges. Untreated paper-mill process wastewater is a different route and is not adopted. Actual direct environmental discharge needs separate water/species rows and evidence. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Equipment-cleaning wastewater containing paper fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_exits.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_exits`
- Sources: `jrc-ilcd-2010`

##### Elementary flows

###### Residual airborne paper dust after control (`pm_air`)

Actual particulate mass crossing to air, unspecified subcompartment and particle size. Native Elementary flow assigns no composition, size distribution, stack height or LCIA factor. Its retained clinker example is expressly non-binding and supplies no paper-dust emission factor. Use actual concentration × matched integrated gas volume, or integrate a true mass rate once, with stated dry/wet, temperature, pressure and control conditions. Do not assign total PM simultaneously to PM10 and PM2.5 or infer chemical species from particle mass. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-ilcd-2010`; `kongskilde-trim-handling`

###### Actual moisture evaporated to air (`water_vapour`)

Conditional measured free-water phase transfer during handling/storage/cleaning; not reaction water, steam purchase or a default drying step. Determine moisture inflows/outflows and evaporation independently enough to avoid solving two unknowns from one balance. Query/direct reads found a freshwater-emission candidate and an air-emission candidate; although the latter has CAS 7732-18-5 and the matching air medium, its synonyms mix heavy/tritiated/structurally bound water. This card remains unbound rather than inferring full identity compatibility from name, medium or CAS alone. If humidification/condensation or other water exits actually occur, add their individual direction and material explicitly. This card’s q only references the existing result of the single normalize_exchange calculation in §8; collection retains undivided raw amounts.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: q per reference flow; raw records under cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | each exchange | Use attributional accounting. First collect dedicated operations separately; use virtual subdivision to assign identifiable materials, cutting loads, grade-specific cleaning, binding and service operations exclusively to the function they support. A mixed outlet may contain several separately identified grades, but the measured total and its source partitions are non-additive views of one stream with one actual provider per exchange. | `jrc-ilcd-2010` |
| a_causality | remaining shared exchanges | For each remaining shared exchange establish a determining physical causal relationship from actual equipment/operation evidence. Material embodiment, handling time/load, storage area-time or volume-time may be relevant only where they determine that particular exchange. Do not impose one mass share on every flow and do not choose between physical and economic allocation freely. Include losses and failed work in the complete unallocated inventory. | `jrc-ilcd-2010` |
| a_residual | unresolved common process | Only for the residual after those steps, use contemporaneous market values of the actual coproducts/functions at the same true joint process gate and physical condition. Derive gate values by removing subsequent grade-specific transport, conditioning and packaging. Document quantities, prices, period, currency, derivation, zero/negative values, sensitivity and conservation of 100% of every original exchange. Unknown values remain unresolved; no fixed percentage, invented positive price or automatic credit. | `jrc-ilcd-2010` |
| a_return | internal cycles and external recovery | Internal sorting returns and internal wire reuse cancel in consolidation and create neither new purchases nor coproduct credits. Exported paper rejects, wire and collected dust keep actual waste/product status, receiver and treatment burden. Never credit a residue merely because it may be recyclable. Preserve parent-paper/cuttings and external waste handover burden decisions and uncertainty explicitly. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Define F as newly arising external raw cuttings, never rehandled stock; X is only a proven exact duplicate on the same side already represented in another declared term, with matching lot, mass and vector. X is not a balancing residual, loss, return or allocation key. Gross V records all real physical movements before those exact duplicates are cancelled.

Q and A must belong to the same first-release cohort. The current production inventory uses only the production vector associated with that cohort’s first release. Post-release services are a separately reported service inventory by serviced cohort and attach once to that cohort only. Services for old FG retain the original first-release cohort reference mass; they cannot divide by current new Q, create production again or repurchase old material. When the original cohort basis cannot be verified, retain undivided service burdens and disclose the gap without a fictitious unit result. Production loads from failure/start-stop/idle/cleanup in a Q=0 period retain raw quantities and causal attribution; they cannot disappear or be shifted to unrelated old cohorts.

### Data Collection Protocols

The aggregation_rule field below labels the final reporting basis only and performs no calculation. Every raw record remains undivided by Q; each card’s q is the same existing result of normalize_exchange below. Reading q does not divide again.
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | recovery | raw_cuttings and upstream trace | source/lot and unnormalized mass records | lot; source mill/converter; furnish/bleach declaration; body colour; print; coat; cutting operation; gross/net/tare; F; opening/closing WIP; moisture; ash; inherited vector per exchange; provider; upstream dataset reference; X duplicate evidence | Link actual source-paper records and upstream process coverage to weighed cuttings; record source capture and transfer operations, shared parent-paper/cuttings burdens and all internal movements separately. Sampling/test records verify contaminants and dry matter, not appearance alone. | kg; actual raw source units retained | each lot and shift; each exception | complete representative period including start/stop, idle, failure, cleanup and zero output | actual source/stage/receiver and cohort | per 1 kg reference flow | source-paper declaration; calibrated scale; batch genealogy; compatible upstream inventory and allocation record |
| cp_release | recovery | finished and stock gates | first release and mass stock ledger | lot/cohort; grade specification; test; first-release time; Q; gross V; opening/closing WIP/FG; D gross shipment; external return received/sent; release reversal; rework increment; paper moisture; wire/container tare; inherited vector for each exchange | Weigh net paper and link tests to first release, never shipping date alone. Reconcile each cohort across WIP, first release and FG movement with matched raw physical gates. Preserve all failed/rejected work and Q=0 lots. A returned/retested old lot is not new production. | kg | each lot and shift; each exception | complete representative period including start/stop, idle, failure, cleanup and zero output | actual source/stage/receiver and cohort | per 1 kg reference flow | grade test; buyer specification; scale/tare records; stock counts; reversal and delivery links |
| cp_utilities | recovery | electricity; hydraulic_oil; cleaning_water | separate raw meters and full-formulation stocks | exchange id; provider; raw unit; start/end meter; integrated quantity or true rate/time; operating stage; idle/failure/cleanup; invoice; opening/closing material and machine charge; supply/top-up/drain; density/state; upstream vector; service cohort | Read actual separate meters or justified submeter allocation; retain raw kWh, litres, kg or m3 and independently measured densities before conversions. Reconcile entire bought formulation once; component assays are not purchases. Inventory shifts and post-release service loads remain distinguishable. | kWh; MJ; litre; m3; kg; actual source unit | each lot and shift; each exception | complete representative period including start/stop, idle, failure, cleanup and zero output | actual source/stage/receiver and cohort | per 1 kg reference flow | meter calibration; bills; formulation/SDS; measured density and temperature; equipment service logs |
| cp_packaging | recovery | every actual wire movement and first non-purchase receipt; each actual extra packaging interface | complete physical component receipt and stock ledger | component; supplier; composition; tare; opening empty/attached WIP/attached FG/reusable; purchases; external return received; closing same states; attached gross outbound; external return sent; waste; internal reuse; cohort; inherited vector; P actual component procurement; N_ext first non-purchase non-return external physical receipt kg by source; ER linked prior external dispatch; receipt event ID/time/direction and actual material/form/type/condition; measured gross/tare/component kg and uncertainty; ownership/custody before/after and entrustment/loan/lease terms; linked supplied consignment; actual burden owner and provider-included scope; non-additive whole/component bridge; specific atomic external receipt row/interface | Weigh each actual wire or additional packaging component independently of paper and retain one raw external-input event per concrete material/form/type, direction and original cohort. Reconcile the complete packaging_stock equation opening + P + N_ext + ER = closing + S + EO + W, including all empty/attached-WIP/attached-FG/reusable states. Record first supplier-attached, entrusted, borrowed or leased non-purchase receipts as N_ext, not fictitious purchases or returns. Each actual N_ext must have a specifically identified atomic physical receipt row/interface and measured quantity; add that interface where existing purchase/true-return rows do not cover the event before claiming concrete-inventory completeness. Do not add only a prose symbol or copy the procurement inventory. Keep physical receipts separate from inherited and actual supply/incremental-service burden, owned once under the recorded provider boundary. Whole-consignment/component views are non-additive; internal transfers/reuse cancel without new purchase, paper Q or credit. | kg | each lot and shift; each exception | complete representative period including start/stop, idle, failure, cleanup and zero output | actual source/stage/receiver and cohort | per 1 kg reference flow | component scale; stock and gross dispatch tare; purchase/delivery/entrustment/loan/lease/return records; prior external dispatch; waste receiver; ownership and provider/vector bridge |
| cp_exits | recovery | each rejected material and waste exit | atomic exit and treatment records | row/material; actual type; lot; weight; moisture/ash; origin; receiver; destination; treatment; internal return; outgoing total; source partition; one provider; inherited burden; sampling/density state | Weigh each material separately; identify waste/product status and actual receiver/treatment. Keep total outlet and source partitions as reconciled non-additive views. Obtain actual effluent quantity and analyses; keep pollutant indicators distinct from species. Do not duplicate retained dust as an emission. | kg; raw volume and measured density when used | each lot and shift; each exception | complete representative period including start/stop, idle, failure, cleanup and zero output | actual source/stage/receiver and cohort | per 1 kg reference flow | scale; waste ticket; licensed receiver; sampling/analysis; treatment contract; source partitions |
| cp_emissions | recovery | pm_air; water_vapour | separate actual air/phase-transfer measurements | species/particle fraction; medium; control; concentration; matched integrated gas volume; true rate/time if any; temperature; pressure; dry/wet basis; moisture inflow/outflow; uncertainty; retained dust separately | Use actual monitored concentration and corresponding integrated volume, or integrate a true rate once; measure water phase-transfer independently. Do not multiply integrated volume by time again. Document actual species and exhaust/control; no assumed combustion or generic VOC-to-species conversion. | kg; raw mg/m3; integrated m3; true rate/time if used | each lot and shift; each exception | complete representative period including start/stop, idle, failure, cleanup and zero output | actual source/stage/receiver and cohort | per 1 kg reference flow | monitor report; sampling/time/state alignment; moisture tests; calibration; uncertainty |
| cp_transfer | recovery | road_transfer | raw freight service activity | paper lot; origin/destination; actual distance; net load kg; vehicle/fuel; volume constraint; empty legs; provider; raw unit; cohort; supplier inventory boundary | Derive raw tkm from actual weighbridge net load and route distance (kg × km / 1000); this is unit/activity conversion, not division by Q. Attribute empty legs by the actual determining time/load/volume relation. Complete contracted service and own-fleet fuel/emission decomposition are exclusive alternatives, preventing duplicates. | tkm; kg; km | each actual trip | complete reporting period and actual returns | actual route/provider/cohort | per 1 kg reference flow | weighbridge; route/distance; freight slip; vehicle/provider and inventory boundary |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| stock_physical | all inventory rows | For each physical material and gate: opening WIP + opening FG where that gate includes FG + F + external returns received + actual other inflows = closing WIP + closing FG where applicable + gross external deliveries/returns sent + actual rejects/waste + actual emissions; cancel only proven same-side duplicates X and internal transfers. At the release gate use Q in place of the FG/delivery side, never Q plus its closing FG. For the combined gate use actual external mass movements and stock changes, not Q as an additional physical exit. V preserves the gross weighed movement history. | opening stocks; closing stocks; F; external movements; X; cp_origin; cp_release; cp_exits; cp_emissions | reconciled gross V and each material gate | jrc-ilcd-2010 |
| burden_vector | all inventory rows | For every exchange j separately, retain opening-WIP vector plus attributable current raw burden plus eligible externally inherited burden, less closing-WIP inherited vector, with internal transfers cancelled, to obtain the first-release cohort vector. Preserve a separate old/new FG cohort service vector and return/reversal links. Do not erase failed/idle/cleanup loads or charge historical old-FG production to current Q; do not pool electricity, oil and other units into one scalar. | exchange j; raw quantities; allocation records; opening vectors; closing vectors; external inherited vectors; cp_origin; cp_release; cp_utilities; cp_transfer | attributable raw A for each exchange and cohort | jrc-ilcd-2010 |
| packaging_stock | each actual packaging component and atomic receipt/shipment/return/waste interface | For each wire or other actual packaging component: opening empty + opening attached WIP + opening attached FG + opening reusable + purchases P + first non-purchase external physical receipts N_ext + actual external returns received ER = closing empty + closing attached WIP + closing attached FG + closing reusable + component on gross physical outward shipments S + external returns sent EO + waste W. P is genuine component procurement, including a component actually purchased within a whole consignment only as a non-additive share. N_ext is the actual first non-return external physical receipt without component procurement, including supplier-attached, first entrusted, borrowed or leased components. ER requires a linked prior external dispatch and true return. P/N_ext/ER are mutually exclusive event partitions; opening is physically present at period start, not a current receipt. Match N_ext once to actual other inflows at the same stock_physical gate, retaining non-additive whole/component bridges. Physical receipt is independent of burden ownership: retain eligible inherited vectors and actual new supply/incremental service once; upstream-included or already owned manufacture is not purchased again and no zero burden is presumed. Internal transfers/reuse cancel; paper net Q excludes all components. | component stock by state; P; N_ext; ER; S; EO; W; actual receipt and ownership records; whole/component bridge; cp_packaging | reconciled component physical stock and separately attributed once-owned supply/service burden | hsm-cutting-scrap-baling; jrc-ilcd-2010 |
| normalize_exchange | all inventory rows | q = A / Q; A = attributable raw exchange amount after unit conversion and allocation; Q = newly first-grade-released net paper mass in kg. For Q=0 retain A without a unit result. | A; Q; cp_release | q per 1 kg reference flow | jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each source and product lot | Demonstrate pulp/body-colour/print/coating compatibility and actual grade; maintain chain of custody and no blending with unknown white grades. | mill furnish record; grade test; lot genealogy |
| dq_measurement | all inventory rows | Calibration, raw-unit preservation, actual density/state, uncertainty, source-specific timing and physical mass/solids/water closure; quantities are future collection requirements, not invented values. | scale/meter/test and balance evidence |
| dq_inheritance | all inventory rows | Preserve every opening/closing WIP/FG exchange vector, actual services, Q=0 loads, reversal and incremental rework. Do not cherry-pick successful batches or substitute shipping mass for Q. | raw lot ledgers; cohort vector bridge; return and stock counts |
| dq_scope | all inventory rows | State geographical/temporal/technological representativeness, upstream allocation, single provider, receiving treatment and missing identities. No numeric source extrapolation from another grade, factory or deinking route. | supplier/treatment contracts; coverage review; source applicability |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | product and flow | Check all required qualifiers and every adopted native Flow restriction against actual supply. Product/waste/elementary type, all name facets, synonyms, comments, CAS if present, route, grade, form, geography, medium and complete properties must agree. Generic UUID identity never establishes supplier compatibility, emission factors or scientific approval. Use the exact reference property and actual reference unit; missing auxiliary UUIDs require precise names and tracked review. | `un-cpc-2025`; `rema-hws-2022` |
| v_mass | each physical gate | Close independent as-is total-mass, dry-solids and water ledgers at source capture, recovery release, FG and consolidated gates, using the same material scope and inventories. Track paper fibre, filler/ash and actual foreign material independently when relevant. Investigate residuals and uncertainty; never infer two unknown exits from one residual, impose a yield, use COD/VOC as species mass or treat humidity change as chemical reaction. | `jrc-ilcd-2010` |
| v_quantity | Q and normalization | Reconcile gross V, first-release Q, WIP/FG inheritance, failures, services and all reversals before normalization. Apply normalize_exchange once to each attributable raw A only when Q is positive. For Q=0 retain actual amounts, exchange vectors and cause with no unit result. Cards and aggregation refer to that same calculation; a second denominator or dividing an already normalized input is an error. | `jrc-ilcd-2010` |
| v_pack | each packaging component | Apply packaging_stock over the same physical gate: full opening + P + N_ext + ER = full closing + S + EO + W for each component, with empty/attached-WIP/attached-FG/reusable stocks intact. Verify actual first non-purchase receipts, disjoint source partitions, prior-dispatch evidence for ER, measured component quantity and its atomic external-input interface, ownership/history and non-additive whole/component links. Missing actual receipt quantity/interface is a completeness gap, never zero or an invented purchase/return. Match gross shipment/tare and actual destinations; internal reuse/transfers cancel. Retain inherited and actual supply/incremental-service burden once without recharging included manufacture; no paper Q or credit is created. | `hsm-cutting-scrap-baling`; `rema-hws-2022` |
| v_completeness | whole period | Verify every actual atomic exchange, raw unit, source, treatment receiver, formula input/output and collection record including zero-output shifts. Reconcile meters, bills, scales, lot genealogy and independent quality tests; disclose excluded capital/infrastructure, truncations, uncertainty and unresolved coverage. A check passing does not approve methodology, translation, mapping or publication. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after the dataset’s own review |
| downstream_use | Input grade-qualified dry recovered paper into explicitly modelled downstream fibre recovery; keep downstream pulping separate |
| allowed_use | Compatible dry white unprinted uncoated woodfree cuttings with actual inherited burdens and moisture; attributional inventory |
| excluded_use | All-CPC-leaf average; OCC/newsprint/coloured/printed/coated/tissue/board blends; deinked pulp; universal virgin displacement or recovery credit |
| required_metadata | All §3 qualifiers; actual lot/route/provider and first-release Q; dataset system boundary; physical stock and per-exchange inheritance; post-release services; receivers; uncertainty |
| required_quality_disclosure | Measured coverage and exclusions; raw-to-q audit; upstream and allocation decisions; unresolved UUIDs; native restrictions; review status |
| update_trigger | Changed source furnish/grade, body colour/print/coating, recovery equipment, utility supply, handover/allocation, grade acceptance or stock/return model |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD, CPC Ver.3.0 Explanatory Notes, 30 June 2025, pp.145–147 and 201–202. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Furnish/body-colour classification and neighbouring recovered-paper/pulp boundaries; not grade yield or recipe. |
| rema-hws-2022 | standard | ReMA ISRI Specifications, Hard White Shavings (HWS), item 30, effective 14 July 2022; full terms and definitions context. https://www.isrispecs.org/orpheus_resource/hard-white-shavings-hws/ | Representative unprinted untreated white groundwood-free recovery grade, agreed grade and packing/quantity records; numerical limits only when the actual transaction adopts that edition. |
| apv-white-uncoated | extension_guidance | APV Germany, WFU wood-free uncoated white, publisher page. https://www.apv.de/en/PaperCatalog/WFU | Concrete white uncoated paper based on bleached hardwood/softwood sulphate pulp; qualitative source-paper supply form only, not a current-source or recipe claim. |
| kongskilde-trim-handling | extension_guidance | Kongskilde Industries, Trim Handling System. https://kongskilde-industries.com/industrial/usa/applications/trim-handling-systems/ | Cut generation, pneumatic capture/conveying, actual cutter/separator inclusion; no universal energy or dust factor. |
| hsm-cutting-scrap-baling | extension_guidance | HSM, Efficient solutions for disposal and recycling in the printing and packaging industry. https://uk.hsm.eu/en/compressing/industry/packaging-industry | Cutting scrap collection, channel compression, wire binding and actual loading choices; no fixed wire count, density or yield imposed. |
| bollegraaf-paper-sorting | extension_guidance | Bollegraaf, Paper and cardboard waste. https://www.bollegraaf.com/solutions/paper-and-cardboard-waste/ | Separate unwanted material/grades before baled supply; mixed paper and OCC examples are countercontext, not authorisation to blend this grade. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 (pp.255–272). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality, residual same-gate/condition market values and conservation; no industrial recipe, fixed share or automatic recycling credit. |
| jrc-pulp-paper-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), §§6.1.1–6.1.2 and 7.1.1–7.1.2, printed pp.550–552 and 660–663. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Source-paper formation and dry sorting/bale handover; wet pulping, paper-machine drying, steam and heat recovery as adjacent countercontext; no default recipe/amount. |
