---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-headgear-of-rubber-or-plastics
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Unprinted platinum-addition-cured LSR injection-moulded swimming caps

## 1. Scope and Applicability

This bounded method manufactures complete unprinted single-layer solid LSR silicone swimming caps by metering two purchased compatible whole A/B preparations, mixing, injection into an electrically heated mould, platinum-catalyzed addition cure, demoulding, actual trimming/conditioning and inspection to unique first quality release. Retain actual optional electric postcure and all real storage, packaging, handling and dispatch services. The selected electricity identity is limited to actual compatible Chinese less-than1kV user-side grid supply. [wacker-silicone-processing; jerry-swim-cap-production; ukong-swim-cap-supply]

WACKER supplies the complete material/processing context, Jerry independently describes silicone swim-cap mixing/vulcanization, compression/injection, finishing/QC and packaging, and UKONG independently offers plain/blank moulded silicone caps. This is an explicit technical synthesis, not proof of one common SKU, factory, current order or WACKER grade at either cap producer. Capability/marketing figures, numerical mould settings, A/B ratios, material properties, certification, chlorine/tear performance, cap weight, yield, emissions and lifetime are not adopted as defaults. [wacker-silicone-processing; jerry-swim-cap-production; ukong-swim-cap-supply]

Exclude safety helmets, textile/lycra caps, latex-dipped caps, HCR compression/extrusion, peroxide/condensation cure, foam, bonded inserts/multicomponent construction, printing/coating and purchased-finished-cap repacking. The reviewed platinum-cured VMQ tube-coil method ends at extruded HCR tubing and cannot replace the cap-specific LSR metering/cold-runner/hot-mould/geometry/release method. Shared curing principles alone do not make these product/route boundaries identical. Any actual changed operation requires complete atomic inventory and renewed applicability review. [wacker-silicone-processing; jerry-swim-cap-production; ukong-swim-cap-supply]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.other-headgear-of-rubber-or-plastics |
| classification_refs | CPC3.0 36972; narrower proposed context only |
| covered_products | Complete unprinted single-layer platinum-addition-cured LSR swim caps |
| excluded_products | All exclusions in section1; a cap is neither protective helmet nor tube coil |
| representative_product | One actual declared cap geometry and compatible A/B formulation pair |
| production_route | Purchased whole A/B; metering/mixing; injection/electric hot mould cure; demould/trim/actual conditioning; tests/first release |
| market_state | Newly first-released complete net cap; all removable packaging excluded; actual FG services separate |

The retained UN structure lists other rubber/plastic headgear beside safety headgear and insulating fittings. It defines scope context, not a silicone recipe or accepted PCR mapping. [un-cpc3-2025]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared complete flexible swimming cap |
| How much | 1 kg reference flow |
| How well | Actual dimensional/fit/visual/cure and specified stretch/tear acceptance; no universal performance or safety claim |
| How long or cycle | One unique new first-quality-release event; actual use life is not inferred |
| reference_flow_link | released_cap |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other headgear of rubber or plastics `242b7130-c930-4bbc-b859-0790c44ef2cd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole A/B grade and supplier composition; compatible batch pairing and storage/pot-life history; actual polymer filler catalyst and residual assays; cap shape thickness size and layer configuration; unprinted nonprotective product function; real cure and optional postcure recipe; geometry-specific first-release test methods and limits; conditioning and net cap mass excluding tare; electricity voltage geography and provider boundary; raw WIP water-loop and equipment stock locations; every inherited exchange vector by stock lot; unique first-release lot IDs and Q; FG gross dispatch return and original denominator history; each packaging article complete custody and tare; actual gas species media and measurement conditions; full period failed idle cleanup and rework loads; supplier upstream links uncertainty and missing scope |

Declare all qualifiers in the concrete data package. Native Product flow is finished manufactured rubber/plastic headgear at plant with Mass reference factor1. It supplies no CAS, polymer grade, particular cap geometry, technology, lifetime, certification or supply geography; there are no synonyms or other properties. The Chinese general comment loosely says head protection whereas the English identity and leaf distinguish other headgear from safety headgear: this record establishes no protective function. Use only the independently qualified complete unprinted single-layer platinum-addition-cured LSR swim cap specified here, excluding safety helmets and textile caps. Actual formulation, geometry, cure, fit and first-release tests remain required.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual accepted complete net cap mass at first release after conditioning. Count and dimensional data never imply a fixed kg per cap; any optional count-to-mass conversion needs paired calibrated net weighing by the same grade/geometry/configuration lot and separate measured counts. |
| whole_preparation | lsr_a; lsr_b; release_agent | Mass | kg | Each complete purchased preparation counts once. Actual polymer/filler/catalyst/carrier assays are child balances; onsite formulation beyond compatible A/B dosing requires separate actual purchased ingredients and actual mixing energy/loss with route review. |
| raw_conversion | all inventory rows | Actual numerator property | original unit | Convert raw units before allocation: actual kWh times3.6 gives MJ; integrate actual rates over measured intervals, but never multiply an already integrated gas/liquid volume by time again. Convert volume to mass only with independent density/composition of that actual material at measured state; no water density for oil and no secondary property coefficient treated as density. |
| raw_not_unit_result | all inventory rows | Actual numerator property | original unit | Collect undivided raw numerators. Unit conversion, exclusive attribution and inherited-stock-vector reconciliation precede the sole report_once calculation. Cards and collection aggregation point to that same calculation and never divide a unit result again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased whole uncured compatible LSR A/B and actual auxiliaries; real lot/site/stock supply states |
| starting_condition_role | foreground_gate_to_gate |
| product_classification_scope | Narrow non-textile nonprotective silicone swim-cap subset |
| recursive_input_rule | Already finished caps are not raw LSR. Returned released caps retain original lot histories; internal material transfers are neither purchases nor fresh production. |
| upstream_dataset_requirement | Link actual whole A/B formulations and each actual utility/auxiliary/packaging supply and waste treatment once; retain supplier manufacture upstream |
| disclosure | Separate manufacturing first release, FG service and combined physical gates; disclose missing conditions and incomplete future services |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | Include receipt/storage, paired dosing/mixing, real cold-runner and hot-mould injection/cure, demould, actual flash/sprue trim, cleaning, conditioning/testing and unique first release. Include actual optional electric postcure, cooling, air, vacuum, maintenance, storage/packing/dispatch services and failure/idle loads. No boiler, external steam, fuel firing or peroxide reaction is presumed; changed actual operations require full single-material/species inventory and applicability review. | wacker-silicone-processing; jerry-swim-cap-production |
| boundary_q | released_cap | Q is the sum of uniquely identified NEW first-accepted complete net cap kg. Reinspection, delivery, returns, reopening or redelivery creates no new Q. Closing released FG already belongs to Q once; do not add it as an extra manufacturing output. Q=0 retains all actual loads and yields no unit result. | jerry-swim-cap-production |
| boundary_stock | all inventory rows | Keep separate raw A, raw B, mixed material in feed/mixer/runner, uncured/cured unaccepted WIP and retained tests by actual location/lot/state. Opening stock plus actual receipts/transfers equals closing stock plus actual consumption/exports/losses. For EVERY exchange carry opening inherited burden vector, add real current increments, transfer internal vectors once, retain closing vector and original denominator/history. Preserve all failed/zero-output/start-stop/idle/cleanup/rework burdens. Keep cooling-loop water, hydraulic charge, refrigerant charge and other equipment stocks with their own physical quantity AND inherited exchange vectors wherever outside raw/WIP; name locations and eliminate overlap. |  |
| boundary_fg | fg_in; fg_return; fg_out; fg_power; waste_fg | FG gate: openingFG + newFirstReleaseQ + externalReturnedCaps = closingFG + grossOutwardCapsG + actualFGWaste. Preserve each old FG/return cohort original production numerator, original Q and delivery reversal history. Attribute actual storage/packing/handling/dispatch and incremental rework services to that lot with its own historical denominator, never unrelated current Q. Manufacturing and FG combined gates cancel internal Q transfers; they do not add first release and closing FG twice. Future services not yet observed stay disclosed incomplete. |  |
| boundary_pack | all packaging rows | For EACH separate article: opening empty + opening attachedWIP + opening attachedFG + opening reusable + new external purchase/receipt + externalReturnReceived = closing empty + closing attachedWIP + closing attachedFG + closing reusable + article accompanying gross physical dispatch + externalReturnSent + waste. Distinguish purchase from attached supplier receipts to prevent duplicate entries; track residual contents independently. All five external directions have separate cards. Internal reuse cancels and never reduces gross outward mass, raises net product Q, creates new purchase or earns automatic coproduct/avoided-burden credit. Add each genuinely used different article/material before modelling. |  |
| boundary_water | water_makeup; wash_water; external_cooling_in; external_cooling_out; water_vapour | Close physical total mass and relevant Si/C/H/O balances independently from analytical species/phase evidence at manufacturing, FG and combined gates. Separate free moisture, emulsion carrier, ambient moisture, retained water, actual evaporation/condensate/effluent and independently evidenced reaction/structural water. Addition hydrosilylation does not justify inventing water byproduct; no two unknown masses from one residual, and no species mass from COD/TVOC. External water returns remain real Product outputs with measured state/enthalpy and supplier energy/water convention; internal cooling recirculation is not purchase. | wacker-silicone-processing |
| boundary_species | all elementary rows | Actual ventilation/pneumatic gas carries individually measured nitrogen, oxygen, argon, atmospheric-origin CO2 and water plus each genuine process species. Purchased compressed-air species are child carrier accounts, not duplicate resource intake. Quantify actual D4/D5/D6 and other siloxanes separately only if detected/otherwise evidenced; addition cure is not proof of zero volatile release. Species leaving with wastewater or waste remains in that outlet, not also emitted to air. Add each actual new species/size fraction/compartment and capture-residue destination; no unspecified VOC/PM surrogate mass. | wacker-silicone-processing |
| boundary_quality | lsr_a; lsr_b; released_cap | Independently verify matching A/B formulation, storage/pot life and inhibitor/cross-contamination controls; actual acceptance covers complete cap geometry, surface, cure and declared service tests. Compression/HCR, peroxide, textile or printed cap evidence is not an LSR production recipe. Postcure depends on actual supplier/product qualification; retain genuine postcure electricity, ventilated species and failures, never enforce a universal temperature/time from a thick-sheet chart. | wacker-silicone-processing; jerry-swim-cap-production; ukong-swim-cap-supply |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cap_production | Complete cap manufacture and separately accounted actual FG services | required | declared LSR route | foreground | 1 kg net new first-release cap; lot-specific FG services separately retained |

The integrated process contains manufacturing and FG custody/service subledgers with separate physical gates. Q is an internal first-release reference; all real outside movements remain visible. Conditional cards do not establish presence/absence: verify applicability and add every actual unlisted single input, waste and species before dataset use.

### Process: Complete LSR swimming-cap production (`cap_production`)

#### Inputs

##### Product flows

###### Whole LSR component A preparation (`lsr_a`)

Purchase the complete qualified filled LSR A component in its real supplied state. Catalyst, polymer, silica, inhibitor and residuals already inside that preparation remain child composition accounts. Pair the actual compatible A/B grade and lot; no pure silicone, organic-silicone family or latex UUID is interchangeable.

- Selected flow: Whole LSR component A preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: wacker-silicone-processing

###### Whole LSR component B preparation (`lsr_b`)

Purchase the complete matching B preparation with its actual crosslinker/polymer/filler content. Meter raw A and B separately, retain mixing loss and pot-life failures; take the approved supplier ratio from the real grade, not a universal prescribed fraction.

- Selected flow: Whole LSR component B preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: wacker-silicone-processing

###### Manufacturing electricity (`power_mfg`)

Meter receiving, dosing, mixer, injection drive, electric mould heating, cooling pumps/chiller, compressor, vacuum, ventilation, optional actual electric postcure, trimming, quality tests, all failed starts/idle/cleanup/rework. Separate FG services and shared meters before attribution. Native Product flow is alternating current with fixed CN supply geography, less-than1kV consumption mix delivered to user and grid-average supply. Its only reference property is Net calorific value with factor1 on MJ basis; this is the platform energy convention, not combustion of electricity. AC is the synonym; its comment describes mixed fossil/nuclear/renewable generation and production/transmission to consumer, not a dedicated renewable source or a supplier emission factor. Use this UUID only when actual Chinese low-voltage grid supply, delivery boundary and provider are compatible; other voltage/geography/onsite generation needs a separate verified flow. Avoid double counting grid losses or compressor/chiller electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources: wacker-silicone-processing

###### Cooling-loop makeup water (`water_makeup`)

Only actual external makeup enters the inventory; pump circulation is internal. Record independent loop opening/closing charge and inherited burden, blowdown, evaporation and leaks without overlap with raw/WIP water. Native Process water is Product/Mass with reference factor1 and no CAS, synonyms, composition, purification route, supply geography or other properties. The retained older source classification says other goods; the current water classification does not establish treatment or provider quality. Qualify actual purchased industrial water and its upstream supply. Do not use it for raw environmental abstraction, return heat-transfer water, steam, wastewater or another whole chemical preparation. Volume-to-mass needs this water actual measured state/density, never an assumed secondary property.

- Selected flow: Process water `bedc466a-fd2e-4a6d-9f93-f334f0cd552c`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: wacker-silicone-processing

###### Cleaning water (`wash_water`)

Measure actual external cleaning/rinse water separately from cooling makeup and water already contained in any preparation. Actual cleaning effluent and phase loss are separately measured. Native Process water is Product/Mass with reference factor1 and no CAS, synonyms, composition, purification route, supply geography or other properties. The retained older source classification says other goods; the current water classification does not establish treatment or provider quality. Qualify actual purchased industrial water and its upstream supply. Do not use it for raw environmental abstraction, return heat-transfer water, steam, wastewater or another whole chemical preparation. Volume-to-mass needs this water actual measured state/density, never an assumed secondary property.

- Selected flow: Process water `bedc466a-fd2e-4a6d-9f93-f334f0cd552c`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: wacker-silicone-processing

###### External heat-transfer cooling water supply (`external_cooling_in`)

Conditional on a real external water loop; preserve supplied liquid mass, temperature, pressure and enthalpy with the actual supplier water/energy accounting agreement. It is not fresh makeup nor a presumed steam supply.

- Selected flow: External heat-transfer cooling water supply
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: wacker-silicone-processing

###### Whole emulsified mould-release preparation (`release_agent`)

Conditional actual startup/demould use; record compatibility, application and loss. No automatic routine dose is imposed. Native Release agent is one Product/Mass preparation with factor1, at-plant production mix and the explicit emulsified surface-active-agent-modification route. Synonyms describe mould separation/release coating; the general comment is a descriptive template and supplies no formulation, CAS, active fraction, supplier or fixed geography. Use only one actual compatible emulsified mould-release preparation for this silicone route, confirmed by complete supplier SDS/composition and inhibition tests. Whole emulsion is purchased once; carrier water and active silicone are child assays. Non-emulsified solvent/other chemistry needs another flow and route review.

- Selected flow: Release agent `5fcf34f0-05a0-4892-84cd-be4173fffa48`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: wacker-silicone-processing

###### Hydraulic oil makeup (`hydraulic_oil`)

Conditional on actual hydraulic equipment; meter charge/makeup and drained oil separately. Electric drives do not justify an invented oil consumption. Native Hydraulic Fluid is Product with Volume as its sole reference property and factor1. Hydraulic oil synonyms and comment describe a formulated mineral-or-synthetic base oil with additives for hydraulic power transfer, lubrication and heat transfer. No CAS, grade, supply geography or mass property is declared; lubricant classification alone does not identify the base oil. Use only actual compatible hydraulic oil as one whole preparation, in measured m3 at declared temperature; independently measure that oil density for the physical mass ledger. Charge opening/closing and inherited burdens persist; no assumed kg per litre.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_charge`
- Sources: wacker-silicone-processing

###### Purchased compressed air (`air_service`)

Conditional purchased pneumatic supply; preserve measured gross carrier-gas mass in species subaccounts and actual liquid/oil carryover. Native Compressed air is Product/Volume with reference factor1; synonyms and comment identify above-atmospheric-pressure air for pneumatic power or atomization, with no CAS, supply geography, purity, drying class, pressure/temperature basis or mass property. Use only externally supplied compatible compressed air and declared meter reference conditions. Onsite compression uses actual electricity and atmospheric intake instead; never purchase the same air twice. Derive species mass only from independently measured composition and state; its supply already includes carrier mass, not a second atmospheric-resource input.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Isopropanol cleaning liquid (`ipa`)

Conditional actual IPA cleaning; record whole supplied purity/water and contamination state. Other cleaning formulations require their own complete single-material cards.

- Selected flow: Isopropanol cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: wacker-silicone-processing

###### R134a refrigerant charge (`r134a_in`)

Only for an actual R134a cooling circuit, with identified charge, recovered stock, leak and service records. Another refrigerant is a distinct exchange, not an R134a default.

- Selected flow: R134a refrigerant charge
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_charge`
- Sources: wacker-silicone-processing

###### Polypropylene filter cartridge (`filter_in`)

Conditional actual water-treatment filter; identify the complete supplied cartridge and replace polymer/structure if the real cartridge differs. Track retained water/solids separately from dry cartridge.

- Selected flow: Polypropylene filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: wacker-silicone-processing

###### Road freight transport service (`freight`)

Actual inbound and foreground intersite/return carriage by identified trip and article, including real packaging mass; measure loaded mass and distance. No assumed truck capacity, distance, backhaul or factor. Avoid repeating transport already included by a supply provider.

- Selected flow: Road freight transport service
- Flow property / unit: Transport service / t.km
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_transport`
- Sources: wacker-silicone-processing

###### Newly released cap internal receipt (`fg_in`)

Internal transfer from released_cap into the FG service ledger; cancel this transfer when combining gates. It is neither bought cap nor an additional production burden. Native Product flow is finished manufactured rubber/plastic headgear at plant with Mass reference factor1. It supplies no CAS, polymer grade, particular cap geometry, technology, lifetime, certification or supply geography; there are no synonyms or other properties. The Chinese general comment loosely says head protection whereas the English identity and leaf distinguish other headgear from safety headgear: this record establishes no protective function. Use only the independently qualified complete unprinted single-layer platinum-addition-cured LSR swim cap specified here, excluding safety helmets and textile caps. Actual formulation, geometry, cure, fit and first-release tests remain required.

- Selected flow: Other headgear of rubber or plastics `242b7130-c930-4bbc-b859-0790c44ef2cd`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_fg`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Externally returned released cap (`fg_return`)

Actual external return by original lot, original first-release denominator/history and physical condition. Retest or redelivery adds no production Q; record real extra work in its old cohort service account. Native Product flow is finished manufactured rubber/plastic headgear at plant with Mass reference factor1. It supplies no CAS, polymer grade, particular cap geometry, technology, lifetime, certification or supply geography; there are no synonyms or other properties. The Chinese general comment loosely says head protection whereas the English identity and leaf distinguish other headgear from safety headgear: this record establishes no protective function. Use only the independently qualified complete unprinted single-layer platinum-addition-cured LSR swim cap specified here, excluding safety helmets and textile caps. Actual formulation, geometry, cure, fit and first-release tests remain required.

- Selected flow: Other headgear of rubber or plastics `242b7130-c930-4bbc-b859-0790c44ef2cd`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_fg`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Post-release service electricity (`fg_power`)

Retain real FG warehouse, packing, handling and dispatch electricity and incremental return work by lot and service period. Services of old FG and returned lots retain their own original denominator; do not transfer their burdens to unrelated current Q. Native Product flow is alternating current with fixed CN supply geography, less-than1kV consumption mix delivered to user and grid-average supply. Its only reference property is Net calorific value with factor1 on MJ basis; this is the platform energy convention, not combustion of electricity. AC is the synonym; its comment describes mixed fossil/nuclear/renewable generation and production/transmission to consumer, not a dedicated renewable source or a supplier emission factor. Use this UUID only when actual Chinese low-voltage grid supply, delivery boundary and provider are compatible; other voltage/geography/onsite generation needs a separate verified flow. Avoid double counting grid losses or compressor/chiller electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_fg_energy`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External receipt of Whole steel supply drum (`drum_in`)

One actual whole whole steel supply drum. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual new external purchase or supplier-attached article receipt once; no repeated purchase for internal reuse. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External receipt of Whole steel supply drum
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return received of Whole steel supply drum (`drum_return_received`)

One actual whole whole steel supply drum. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual external returned article by original custody lot; not a new purchase. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return received of Whole steel supply drum
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External receipt of LDPE cap bag (`pe_bag_in`)

One actual whole ldpe cap bag. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual new external purchase or supplier-attached article receipt once; no repeated purchase for internal reuse. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External receipt of LDPE cap bag
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return received of LDPE cap bag (`pe_bag_return_received`)

One actual whole ldpe cap bag. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual external returned article by original custody lot; not a new purchase. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return received of LDPE cap bag
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External receipt of Corrugated shipping carton (`carton_in`)

One actual whole corrugated shipping carton. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual new external purchase or supplier-attached article receipt once; no repeated purchase for internal reuse. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External receipt of Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return received of Corrugated shipping carton (`carton_return_received`)

One actual whole corrugated shipping carton. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual external returned article by original custody lot; not a new purchase. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return received of Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External receipt of Whole polypropylene pressure-sensitive sealing tape (`tape_in`)

One actual whole whole polypropylene pressure-sensitive sealing tape. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual new external purchase or supplier-attached article receipt once; no repeated purchase for internal reuse. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External receipt of Whole polypropylene pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return received of Whole polypropylene pressure-sensitive sealing tape (`tape_return_received`)

One actual whole whole polypropylene pressure-sensitive sealing tape. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual external returned article by original custody lot; not a new purchase. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return received of Whole polypropylene pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External receipt of Softwood shipping pallet (`pallet_in`)

One actual whole softwood shipping pallet. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual new external purchase or supplier-attached article receipt once; no repeated purchase for internal reuse. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External receipt of Softwood shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return received of Softwood shipping pallet (`pallet_return_received`)

One actual whole softwood shipping pallet. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual external returned article by original custody lot; not a new purchase. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return received of Softwood shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External receipt of LLDPE pallet stretch film (`wrap_in`)

One actual whole lldpe pallet stretch film. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual new external purchase or supplier-attached article receipt once; no repeated purchase for internal reuse. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External receipt of LLDPE pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return received of LLDPE pallet stretch film (`wrap_return_received`)

One actual whole lldpe pallet stretch film. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual external returned article by original custody lot; not a new purchase. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return received of LLDPE pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

##### Waste flows

##### Elementary flows

###### Nitrogen from ambient air (`nitrogen_in`)

Only actual onsite compressor/ventilation intake. This species is determined independently from measured gas composition and integrated intake/state. Purchased compressed-air carrier belongs to that product subaccount instead; do not count the same intake twice.

- Selected flow: Nitrogen from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Oxygen from ambient air (`oxygen_in`)

Only actual onsite compressor/ventilation intake. This species is determined independently from measured gas composition and integrated intake/state. Purchased compressed-air carrier belongs to that product subaccount instead; do not count the same intake twice.

- Selected flow: Oxygen from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Argon from ambient air (`argon_in`)

Only actual onsite compressor/ventilation intake. This species is determined independently from measured gas composition and integrated intake/state. Purchased compressed-air carrier belongs to that product subaccount instead; do not count the same intake twice.

- Selected flow: Argon from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Atmospheric-origin carbon dioxide from ambient air (`co2_in`)

Only actual onsite compressor/ventilation intake. This species is determined independently from measured gas composition and integrated intake/state. Purchased compressed-air carrier belongs to that product subaccount instead; do not count the same intake twice.

- Selected flow: Atmospheric-origin carbon dioxide from ambient air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Atmospheric water vapour intake (`air_moisture_in`)

Measure humidity and actual ambient-air intake to account for carrier moisture; it is not new process water nor evidence of reaction water.

- Selected flow: Atmospheric water vapour intake
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

#### Outputs

##### Product flows

###### New first-quality-released cap (`released_cap`)

Q is unique newly accepted complete net cap kg after real finishing/conditioning/inspection, before FG services. Rejects, destructive tests and unaccepted WIP are outside Q. Already released closing FG is included in Q once and is not a second output. Native Product flow is finished manufactured rubber/plastic headgear at plant with Mass reference factor1. It supplies no CAS, polymer grade, particular cap geometry, technology, lifetime, certification or supply geography; there are no synonyms or other properties. The Chinese general comment loosely says head protection whereas the English identity and leaf distinguish other headgear from safety headgear: this record establishes no protective function. Use only the independently qualified complete unprinted single-layer platinum-addition-cured LSR swim cap specified here, excluding safety helmets and textile caps. Actual formulation, geometry, cure, fit and first-release tests remain required.

- Selected flow: Other headgear of rubber or plastics `242b7130-c930-4bbc-b859-0790c44ef2cd`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: source_rule
- Collection protocol: `cp_quality`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Gross outward released-cap carriage (`fg_out`)

Gross physical shipment by actual lot includes old FG and redelivery, separate from new production Q. Maintain return/reversal history and actual packaging separately. Combining the gates cancels internal released_cap/fg_in, not gross outward physical mass. Native Product flow is finished manufactured rubber/plastic headgear at plant with Mass reference factor1. It supplies no CAS, polymer grade, particular cap geometry, technology, lifetime, certification or supply geography; there are no synonyms or other properties. The Chinese general comment loosely says head protection whereas the English identity and leaf distinguish other headgear from safety headgear: this record establishes no protective function. Use only the independently qualified complete unprinted single-layer platinum-addition-cured LSR swim cap specified here, excluding safety helmets and textile caps. Actual formulation, geometry, cure, fit and first-release tests remain required.

- Selected flow: Other headgear of rubber or plastics `242b7130-c930-4bbc-b859-0790c44ef2cd`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_fg`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External heat-transfer water return (`external_cooling_out`)

Actual return to the external supplier remains a Product physical output with measured mass/state/enthalpy and agreed energy-water boundary. It is not a waste effluent or a credit; close supply plus opening loop charge against return, other actual losses and closing charge.

- Selected flow: External heat-transfer water return
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: wacker-silicone-processing

###### Recovered R134a for external return (`r134a_recovered`)

Actual separately recovered refrigerant physically sent to a supplier/reclaimer; identify purity, destination and ownership. Storage remains charge stock, waste disposition uses a separate waste card, and no virgin substitution credit is automatic.

- Selected flow: Recovered R134a for external return
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_charge`
- Sources: wacker-silicone-processing

###### Gross outward carriage of Whole steel supply drum (`drum_out`)

One actual whole whole steel supply drum. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record article mass accompanying every gross outward physical cap shipment, including old FG and redelivery; allocation or reuse never reduces this real outward mass. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Gross outward carriage of Whole steel supply drum
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return sent of Whole steel supply drum (`drum_return`)

One actual whole whole steel supply drum. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual separate return to supplier/pool/customer with destination; do not combine with dispatch or received returns. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return sent of Whole steel supply drum
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Gross outward carriage of LDPE cap bag (`pe_bag_out`)

One actual whole ldpe cap bag. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record article mass accompanying every gross outward physical cap shipment, including old FG and redelivery; allocation or reuse never reduces this real outward mass. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Gross outward carriage of LDPE cap bag
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return sent of LDPE cap bag (`pe_bag_return`)

One actual whole ldpe cap bag. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual separate return to supplier/pool/customer with destination; do not combine with dispatch or received returns. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return sent of LDPE cap bag
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Gross outward carriage of Corrugated shipping carton (`carton_out`)

One actual whole corrugated shipping carton. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record article mass accompanying every gross outward physical cap shipment, including old FG and redelivery; allocation or reuse never reduces this real outward mass. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Gross outward carriage of Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return sent of Corrugated shipping carton (`carton_return`)

One actual whole corrugated shipping carton. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual separate return to supplier/pool/customer with destination; do not combine with dispatch or received returns. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return sent of Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Gross outward carriage of Whole polypropylene pressure-sensitive sealing tape (`tape_out`)

One actual whole whole polypropylene pressure-sensitive sealing tape. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record article mass accompanying every gross outward physical cap shipment, including old FG and redelivery; allocation or reuse never reduces this real outward mass. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Gross outward carriage of Whole polypropylene pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return sent of Whole polypropylene pressure-sensitive sealing tape (`tape_return`)

One actual whole whole polypropylene pressure-sensitive sealing tape. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual separate return to supplier/pool/customer with destination; do not combine with dispatch or received returns. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return sent of Whole polypropylene pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Gross outward carriage of Softwood shipping pallet (`pallet_out`)

One actual whole softwood shipping pallet. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record article mass accompanying every gross outward physical cap shipment, including old FG and redelivery; allocation or reuse never reduces this real outward mass. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Gross outward carriage of Softwood shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return sent of Softwood shipping pallet (`pallet_return`)

One actual whole softwood shipping pallet. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual separate return to supplier/pool/customer with destination; do not combine with dispatch or received returns. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return sent of Softwood shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Gross outward carriage of LLDPE pallet stretch film (`wrap_out`)

One actual whole lldpe pallet stretch film. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record article mass accompanying every gross outward physical cap shipment, including old FG and redelivery; allocation or reuse never reduces this real outward mass. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Gross outward carriage of LLDPE pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### External return sent of LLDPE pallet stretch film (`wrap_return`)

One actual whole lldpe pallet stretch film. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual separate return to supplier/pool/customer with destination; do not combine with dispatch or received returns. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: External return sent of LLDPE pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

##### Waste flows

###### Uncured mixed LSR purge waste (`lsr_purge`)

Actual A/B mixed expired/purged residue; retain whole preparation mass and composition, destination and original burden. It is not cured scrap and never automatically recyclable.

- Selected flow: Uncured mixed LSR purge waste
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Cured silicone cap trim and reject waste (`cured_scrap`)

Measure actual same-material cured sprues, flash, failed caps and destructive-test pieces at separate generation points; combine only verified identical material/destination without hiding other materials. No remelt regrind loop is presumed for crosslinked silicone.

- Selected flow: Cured silicone cap trim and reject waste
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Spent hydraulic oil (`spent_oil`)

Actual drained whole used oil, including assayed contamination; reconcile equipment charge and any true leakage separately.

- Selected flow: Spent hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_charge`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Spent isopropanol cleaning liquid (`spent_ipa`)

Measure actual whole collected IPA cleaning residue with water and contaminants; do not equate residue mass to pure emitted IPA.

- Selected flow: Spent isopropanol cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Silicone-moulding cleaning wastewater (`water_effluent`)

Actual collected liquid wastewater to an identified external treatment system, with separately measured volume/mass and actual dissolved/suspended composition. COD/TVOC are indicators, not named chemical masses.

- Selected flow: Silicone-moulding cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Cooling-loop blowdown wastewater (`water_blowdown`)

Actual separate external blowdown; not circulating flow or supplier return. Preserve dissolved treatment chemicals and independently evidenced contamination; add each real treatment purchase first.

- Selected flow: Cooling-loop blowdown wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Spent polypropylene filter cartridge (`waste_filter`)

The actual complete spent cartridge, including separate measured retained water/residue subaccounts and destination; not generic mixed plastic waste or purchased new filter.

- Selected flow: Spent polypropylene filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Post-release discarded silicone cap (`waste_fg`)

Actual FG loss/returned cap disposal retains original cohort history; it does not erase the historical production event or become new Q.

- Selected flow: Post-release discarded silicone cap
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_fg`
- Sources: wacker-silicone-processing; jerry-swim-cap-production

###### Waste Whole steel supply drum (`drum_waste`)

One actual whole whole steel supply drum. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual whole discarded article and destination, separate from product flow and contents; no automatic coproduct/virgin-material credit. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Waste Whole steel supply drum
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Waste LDPE cap bag (`pe_bag_waste`)

One actual whole ldpe cap bag. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual whole discarded article and destination, separate from product flow and contents; no automatic coproduct/virgin-material credit. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Waste LDPE cap bag
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Waste Corrugated shipping carton (`carton_waste`)

One actual whole corrugated shipping carton. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual whole discarded article and destination, separate from product flow and contents; no automatic coproduct/virgin-material credit. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Waste Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Waste Whole polypropylene pressure-sensitive sealing tape (`tape_waste`)

One actual whole whole polypropylene pressure-sensitive sealing tape. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual whole discarded article and destination, separate from product flow and contents; no automatic coproduct/virgin-material credit. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Waste Whole polypropylene pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Waste Softwood shipping pallet (`pallet_waste`)

One actual whole softwood shipping pallet. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual whole discarded article and destination, separate from product flow and contents; no automatic coproduct/virgin-material credit. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Waste Softwood shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

###### Waste LLDPE pallet stretch film (`wrap_waste`)

One actual whole lldpe pallet stretch film. Identify complete composition, dry tare, any retained contents and provider; this specific material is conditional, not proof that a manufacturer uses it. Record actual whole discarded article and destination, separate from product flow and contents; no automatic coproduct/virgin-material credit. Apply the independent per-article full stock equation in boundary_pack, including empty, attached WIP/FG and reusable stocks; never add packaging to net cap Q. If composition differs, add the actual single article instead.

- Selected flow: Waste LLDPE pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: jerry-swim-cap-production; ukong-swim-cap-supply

##### Elementary flows

###### Gross external water-vapour outlet (`water_vapour`)

Measure the actual gross gaseous ordinary-H2O outlet after controls, including the uncondensed water-vapour fraction of atmospheric or purchased-air carrier moisture and actual cooling/cleaning/emulsion-carrier evaporation. Keep independently measured origin subaccounts within this one outlet; do not report process evaporation again as a second output. Do not assume all intake moisture leaves as vapour: independently reconcile condensation, retained water and stock changes. Liquid droplets, condensate and aqueous aerosols are different physical phases and need their own actual atomic outlet identities and destinations; never include them under this vapour UUID or fit unknown phase masses from one residual. Native Elementary flow is ordinary water vapour CAS7732-18-5 emitted to air unspecified, Mass reference factor1 and no geographic/technology restriction or extra property. Its broad registry synonyms include ice, isotope and bound-water words; those strings do not authorize an isotope, liquid water, structural water or reaction-water substitution. Quantify actual ordinary H2O evaporation by measured phase/species evidence, excluding internally condensed/recycled water and independently separating atmospheric moisture intake from new process-water evaporation. Reclassify actual identified emission compartment when available.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: wacker-silicone-processing

###### D4 emission to air (`d4_air`)

Conditional only when this actual species/outlet is established by chemistry and measurement; preserve detection limits and real control destination. Never infer its mass from total VOC, cap weight loss or total particulate. Missing critical speciation makes the concrete dataset incomplete; not a declared zero. Native Elementary flow identifies D4 CAS556-67-2 and EC209-136-7 with cyclic dimethylsiloxane-tetramer/OMCTS and supplier-name synonyms, ordinary emissions to air unspecified and sole Mass reference factor1. No geography, technology or grade is fixed. Supplier trade aliases do not make a whole silicone formulation equivalent to pure D4. Use only measured D4 species reaching the external atmosphere after real capture; no long-term, indoor, water, total-VOC or aggregate-siloxane substitution, and no default presence or amount.

- Selected flow: octamethylcyclotetrasiloxane `06e8ead2-e79f-4c88-88f4-f6dddf8b6fc8`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: wacker-silicone-processing

###### Decamethylcyclopentasiloxane emission to air (`d5_air`)

Conditional only when this actual species/outlet is established by chemistry and measurement; preserve detection limits and real control destination. Never infer its mass from total VOC, cap weight loss or total particulate. Missing critical speciation makes the concrete dataset incomplete; not a declared zero.

- Selected flow: Decamethylcyclopentasiloxane emission to air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: wacker-silicone-processing

###### D6 emission to air (`d6_air`)

Conditional only when this actual species/outlet is established by chemistry and measurement; preserve detection limits and real control destination. Never infer its mass from total VOC, cap weight loss or total particulate. Missing critical speciation makes the concrete dataset incomplete; not a declared zero. Native Elementary flow identifies D6 CAS540-97-6 and EC208-762-8, ordinary emissions to air unspecified and sole Mass reference factor1; no geography or technology is fixed. Registry organometallic wording and named commercial-fluid synonyms are broad aliases, not metal content, a different particle structure or whole-mixture permission. Use only analytically identified D6 reaching external air after actual controls, not other cyclic siloxanes, total VOC, long-term/indoor/water emissions. Its identity provides no emission rate or recipe fraction.

- Selected flow: dodecamethylcyclohexasiloxane `8d7827eb-ee42-48da-85af-8f22a2b291a8`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: wacker-silicone-processing

###### Isopropanol emission to air (`ipa_air`)

Conditional only when this actual species/outlet is established by chemistry and measurement; preserve detection limits and real control destination. Never infer its mass from total VOC, cap weight loss or total particulate. Missing critical speciation makes the concrete dataset incomplete; not a declared zero. Native Elementary flow is isopropanol CAS67-63-0 and EC200-661-7 to air unspecified with only Mass reference factor1, no geography/technology restriction. Its large synonym registry contains commercial rubbing-alcohol names, strong-acid-manufacturing labels and ambiguous isopropenol wording; these do not supersede the CAS-bound propan-2-ol molecule. Use only independently identified IPA emitted after real cleaning/capture, not purchased whole cleaner, n-propanol, isopropenol, total VOC or an assumed evaporated fraction. Other known compartments require another identity.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: wacker-silicone-processing

###### 1,1,1,2-Tetrafluoroethane emission to air (`r134a_air`)

Conditional only when this actual species/outlet is established by chemistry and measurement; preserve detection limits and real control destination. Never infer its mass from total VOC, cap weight loss or total particulate. Missing critical speciation makes the concrete dataset incomplete; not a declared zero.

- Selected flow: 1,1,1,2-Tetrafluoroethane emission to air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: wacker-silicone-processing

###### Cured silicone rubber particulate to air (`silicone_dust`)

Conditional only when this actual species/outlet is established by chemistry and measurement; preserve detection limits and real control destination. Never infer its mass from total VOC, cap weight loss or total particulate. Missing critical speciation makes the concrete dataset incomplete; not a declared zero.

- Selected flow: Cured silicone rubber particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: wacker-silicone-processing

###### Nitrogen to external air (`nitrogen_out`)

Record actual gross carrier species discharged from ventilation and pneumatic use, distinguishing purchased carrier subaccounts and onsite atmospheric intake. Atmospheric carbon dioxide passing through is not new fossil CO2 generation; independently evidence any reaction or uptake and no automatic credit.

- Selected flow: Nitrogen to external air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Oxygen to external air (`oxygen_out`)

Record actual gross carrier species discharged from ventilation and pneumatic use, distinguishing purchased carrier subaccounts and onsite atmospheric intake. Atmospheric carbon dioxide passing through is not new fossil CO2 generation; independently evidence any reaction or uptake and no automatic credit.

- Selected flow: Oxygen to external air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Argon to external air (`argon_out`)

Record actual gross carrier species discharged from ventilation and pneumatic use, distinguishing purchased carrier subaccounts and onsite atmospheric intake. Atmospheric carbon dioxide passing through is not new fossil CO2 generation; independently evidence any reaction or uptake and no automatic credit.

- Selected flow: Argon to external air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

###### Atmospheric-origin carbon dioxide to external air (`co2_out`)

Record actual gross carrier species discharged from ventilation and pneumatic use, distinguishing purchased carrier subaccounts and onsite atmospheric intake. Atmospheric carbon dioxide passing through is not new fossil CO2 generation; independently evidence any reaction or uptake and no automatic credit.

- Selected flow: Atmospheric-origin carbon dioxide to external air
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after conversion and attribution. Preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_air`
- Sources: wacker-silicone-processing

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | This method uses attributional allocation only where the study situation requires allocation. Establish that scope first; industrial manufacturing sources do not authorize a consequential substitution or automatic recycling credit. Respect applicable ILCD situation/recycling provisions when a different question is asked. | jrc-ilcd-2010 |
| allocation_exclusive | all inventory rows | First subdivide actual distinguishable stages/lines or use evidenced virtual subdivision. Assign each whole formulation, dedicated machine meter, test, failure, cleanup, package and FG service directly to its causing lot/product when possible. Retain burden-bearing stock transfers and shared idle loads; no total-output shortcut before exclusive attribution. | jrc-ilcd-2010 |
| allocation_causality | all inventory rows | For each still-shared exchange independently identify the determining physical cause and actual measured driver, e.g. heater duty with temperature/time/configuration, cooling duty with measured flow/enthalpy, or handling with actual operations. Mass/count alone is not universal causality. Validate each driver and allocation total/uncertainty; different exchanges may need different causal drivers. | jrc-ilcd-2010 |
| allocation_residual | all inventory rows | Only the genuine residual lacking a determining physical assignment uses relative market value of actual cofunctions at the common process exit/entry gate in their real state and period. Derive same-gate values transparently by removing later transport/conditioning/packaging costs where necessary; record quantity, currency, date and sensitivity. Unknown causal/value evidence holds that dataset incomplete; no fixed ratio or free choice between physical/economic keys. | jrc-ilcd-2010 |
| allocation_returns | all packaging rows; fg_out; fg_return; waste_fg | Physical custody remains unchanged by burden allocation. Internal reuse carries inherited burden once; external waste/recovery follows actual treatment/ownership and applicable recycling model. No automatic negative flow, avoided virgin credit or erasure of old cap production from a return, retest or lost lot. | jrc-ilcd-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | cap_production | Whole preparations and actual auxiliaries | purchase/stock/issue | lot; supplied preparation; composition assay; measured receipts; opening/closing raw and WIP; equipment location; losses; upstream links | Reconcile calibrated weighing, invoices, issue/return and actual A/B dosing/mixing logs; assays are child accounts only. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | kg | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Scale calibration and supplier formulation/compatibility documents |
| cp_energy | cap_production | Manufacturing electricity | meter | equipment; meter; raw kWh; interval; warmup idle failure cleanup rework; cause driver; voltage geography provider | Submeter actual mould heaters/drives/cooling/air/vacuum/postcure and shared services; retain raw intervals and exclude duplicate provider services. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | kWh | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Meter calibration and electrical supply-boundary evidence |
| cp_water | cap_production | Water loops cleaning and external returns | meter/sample/stock | water identity; original volume/mass/rate; interval; density; temperature pressure; loop opening/closing; inlet return effluent evaporation; enthalpy | Measure each boundary separately; independently sample composition/phase and loop stock; verify supplier energy/water agreement and calibrations. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | original unit | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Water/state/effluent analyses and supplier agreement |
| cp_charge | cap_production | Hydraulic oil and R134a charges | stock/service | material; equipment; charge location; opening/closing; additions; recovery return; waste; leak; density/state; inherited vector | Measure each actual charge and movement independently; preserve all inherited exchanges; reconcile without double counting raw/WIP. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | original unit | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Service/weighing logs and independent substance density |
| cp_air | cap_production | Actual gas intake and discharge | meter/speciation | intake origin; purchased air; integrated volume or actual rate; interval; P T humidity; nitrogen oxygen argon CO2 composition; outlet; uptake | Use calibrated state-bound gas meters and independent composition/humidity; distinguish onsite resource and purchased carrier child accounts, no repeated time integration. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | original unit | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Gas-meter calibration and actual composition/state records |
| cp_species | cap_production | Each actual emission species | sample/flux | species CAS; compartment; raw concentration; actual integrated flow or rate; interval; detection limit; control; captured mass; uncertainty | Measure actual species after controls with consistent wet/dry and state bases; collect independent input/retained/wastewater/residue chemistry and phase evidence. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | original unit | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Laboratory chain calibration detection limits and destination records |
| cp_waste | cap_production | Each real waste | weigh/manifest | single waste identity; uncured/cured state; gross mass; dry solids; water; contamination; destination; lot vector | Weigh each actual material/outlet separately; reconcile collection/treatment handoff and retained contents; no aggregate waste/species substitution. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | kg | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Waste manifests scale calibration and actual assays |
| cp_quality | cap_production | Unique new first-release cap | weigh/test/release | lot; configuration; cure/postcure logs; test methods/limits; net accepted kg; first-release IDs; reject test and WIP kg | Weigh complete accepted caps with calibrated scale after declared conditioning excluding packaging; reconcile new unique release IDs and measured count if collected; retain all failures and destructive samples. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | kg | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Release authorization geometry/cure test and weighing records |
| cp_fg | cap_production | FG stock and physical custody | lot ledger | lot; original Q and numerator/vector; opening/closingFG; new release; gross outward; external return; reversal; disposal; service period | Trace actual lot custody and original denominator/history; reconcile physical movements and separately attribute incremental return work; no fabricated new production. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | kg | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Warehouse dispatch return and historic burden records |
| cp_fg_energy | cap_production | Actual FG service power | meter/driver | lot; original denominator; service period; raw kWh; shared meter; actual causal driver; idle and return work | Separate service meters and actual lot drivers from manufacturing and from other cohorts; retain old-cohort numerator and denominator. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | kWh | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Meters service driver measurements and stock-cohort history |
| cp_pack | cap_production | Every separate packaging article | article stock/custody | article composition; lot; tare; opening/closing empty attachedWIP attachedFG reusable; new purchase/receipt; return received; gross shipment; return sent; waste; content | Count and independently weigh actual article tare with real composition and complete directional custody; reuse does not alter measured gross outward mass. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | kg | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Supplier packaging declarations tare weighing custody and waste records |
| cp_transport | cap_production | Actual road transport | trip | trip; article and cap lot; actual payload including packaging; distance; loaded/return legs; provider boundary | Measure trip mass and distance and check carrier records/provider boundary; retain distinct actual outbound/return service attribution. Retain undivided raw entries by lot and state; attribution and stock-vector reconciliation precede report_once. | t.km | each lot/event and meter interval | full declared period including zero-output and historical opening lots | actual site equipment and lot | per 1 kg reference flow | Weighbridge trip and carrier records |
| cp_allocation | cap_production | all inventory rows | allocation evidence ledger | exchange; cofunction; exclusive meter; virtual subdivision; determining causal hypothesis; measured driver; residual shared amount; common gate; actual state; contemporaneous quantity price currency date; downstream cost adjustment; uncertainty | Collect independent proof for each hierarchy step and each exchange. Preserve raw undivided allocations and stock/cohort vectors; do not normalize here. Unknown causality/value evidence keeps the actual dataset incomplete. | each exchange original unit | each attribution period and configuration change | same complete operating and value period | actual shared process gate | per 1 kg reference flow | dedicated-meter proof; causal study; same-gate price evidence; full allocated-sum conservation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert calibrated raw values to the declared atomic numerator unit before attribution; integrate only actual rates once. Use independent material state/density/composition, never a screening property coefficient. Preserve original records and uncertainty. | raw_value; raw_unit; interval; measured_state; density; composition | raw_numerator |  |
| quality_quantity | released_cap | Q = sum of unique new first-accepted net complete-cap kg; exclude packaging and previously released lots. No delivery or reinspection count enters Q. | cp_quality; accepted_lot_mass; first_release_id | Q | jerry-swim-cap-production |
| stock_vectors | all inventory rows | By each actual raw/WIP/loop/equipment lot conserve physical amount and every inherited exchange vector: opening plus real increments/transfers equals closing plus actual exits/consumption; preserve source cohort denominator and eliminate overlapping stock accounts. | cp_material; cp_water; cp_charge; opening_vector; current_increment; closing_vector | attributed_lot_vector |  |
| exchange_attribution | all inventory rows | Exclusive/virtual subdivision precedes exchange-specific determining physical causality; only the genuine remaining shared residual uses same-period actual common-gate market values. Preserve Q=0 loads for explicit burden transfer/disclosure, not arbitrary future amortization. | raw_numerator; attributed_lot_vector; causal_driver; residual_gate_value | A_i | jrc-ilcd-2010 |
| fg_cohorts | fg_in; fg_return; fg_out; fg_power; waste_fg | Retain original manufacturing A_i and original Q for old FG/returns; add only measured attributable incremental service numerator to the same cohort. Reconcile physical FG gate and original dispatch reversals independently; do not allocate old-cohort services onto unrelated current Q. | cp_fg; cp_fg_energy; original_numerator; original_Q; actual_service_increment | cohort_A_i; cohort_Q |  |
| pack_balance | all packaging rows | Apply the full boundary_pack equation to each whole physical article independently; keep all actual external directions at measured gross article mass and internal reuse cancelling only inside custody. Burden allocation cannot alter physical movement. | cp_pack; article_stock; article_purchase; return_received; gross_outward; return_sent; article_waste | article_balance |  |
| species_balance | all elementary rows | Close total mass/elements and independently measured actual species/phase balances, including carrier gas and separate external water/equipment stocks. Never fit multiple unknown species to one residual or convert COD/TVOC to a specific chemical. | cp_species; cp_air; cp_water; cp_charge; independent_assays | species_balance | wacker-silicone-processing |
| report_once | all inventory rows | q_i = A_i / Q, once for the identified new first-release cohort after raw conversion, attribution and inherited-vector reconciliation. For old cohorts use their own cohort_A_i and original cohort_Q in this same operation. Q=0 retains loads and produces no unit result. Reference output is 1 kg by definition; cards and aggregation only refer to this operation. | A_i; Q; cohort_A_i; cohort_Q | q_i |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Match whole preparations/grades, complete native names/qualifiers/CAS/geography/type/all properties/reference units and actual provider. Empty auxiliary UUIDs need identity resolution; generic family records never override a hard chemical/form/route contradiction. | Supplier/native originals and compatibility measurements |
| dq_complete | all inventory rows | Retain all three physical gates, whole preparations, raw/WIP/FG and separate loop/charge stocks with every inherited exchange vector; include all failed/idle/rework events, actual species and package directions. | Full stock and operating-period reconciliation |
| dq_basis | all inventory rows | Use unnormalized raw numerator records and only report_once for the matching actual Q; original old-cohort denominators persist. No fabricated weight, density, threshold, emission factor, ratio, life or activity range. | Calibrations original units formulas and cohort history |
| dq_scope | all processes | Primary manufacturer capabilities and supplier guide are independent technical synthesis, not same-SKU factory evidence. No source marketing rates or grade-chart values become cap defaults; qualify actual site/period and uncertainty. | wacker-silicone-processing; jerry-swim-cap-production; ukong-swim-cap-supply |
| dq_missing | all processes | A real missing terminal, route or basis prevents an authored method claim; a critical missing measurement/species/history makes the concrete dataset incomplete. Ordinary auxiliary UUID/provider/future factory-data requirements alone do not imply an invented numeric result or universal scientific approval. | Explicit missing-data and uncertainty register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | released_cap | Require the actual complete unprinted nonprotective LSR cap and every qualifier; 1 kg net new first-release basis must select this sole linked reference row in both languages. Do not infer per-cap weight or let generic native headgear identity replace route evidence. | jerry-swim-cap-production; ukong-swim-cap-supply; un-cpc3-2025 |
| validate_measurement | all inventory rows | Verify raw units/rates and measured state, unique Q, whole formulation count, complete stock vectors and original cohort denominators; report_once executes once only. Q=0, unsupported conversion or missing critical relationships cannot yield a passing concrete dataset. |  |
| validate_physical | all processes | Independently reconcile manufacturing, FG and combined physical mass/elements, actual species/phase data, separate water/equipment charges and every package article/direction; cancel only internal transfers. Do not solve two unknowns from one residual or erase gross dispatch through reuse/allocation. |  |
| validate_native | all inventory rows | Adopted Product/Waste/resource/emission type, CAS, material state, particle structure, supply geography/voltage and actual compartment must agree with original native restrictions. Distinguish ordinary air from long-term/indoor/water outlets; a family name or taxonomic correction is not compatibility proof. |  |
| validate_allocation | all inventory rows | Demonstrate exclusive/virtual subdivision and per-exchange determining physical cause before any genuine residual common-gate market-value allocation. Preserve exact full-period failures, zero-output and historical stock burdens; missing evidence stays explicit. | jrc-ilcd-2010 |
| validate_quality | released_cap | Require actual geometry/visual/fit/cure and declared strength acceptance, A/B storage compatibility and real finishing/postcure evidence. No performance, certification or lifetime can be inferred from a manufacturer page or a supplier example chart. | wacker-silicone-processing; jerry-swim-cap-production; ukong-swim-cap-supply |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual compatible cap supply in a larger LCA with declared geography/period and lot basis |
| allowed_use | Qualified complete unprinted LSR cap production; include only observed attributed FG services and disclose remaining service scope |
| excluded_use | Whole leaf coverage; safety helmets; textile/latex/HCR routes; printed/laminated caps; protective claims; unmeasured product footprints |
| required_metadata | Every reference qualifier; original lot denominators; full unit/source/provider/stock/physical gate history |
| required_quality_disclosure | Actual measured scope uncertainty missing auxiliary identities future services and pending scientific/translation review |
| update_trigger | Changed A/B formulation geometry cure method electricity boundary supplier site period acceptance or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | UN CPC3 structure of30June2025; classification boundary context only |
| wacker-silicone-processing | handbook | https://www.wacker.com/h/medias/6709-EN.pdf | Solid and Liquid Silicone Rubber — Material and Processing Guidelines; complete pp10/12/13/36/37/48-59/66-68; whole preparations and addition-cure/LSR injection/finishing context with peroxide/HCR/2K counterexamples; no numerical cap defaults or LCA allocation |
| jerry-swim-cap-production | literature | https://jerrygoggles.com/swim-caps/ | Independent primary swim-cap manufacturing capability from material/mixing/vulcanization through moulding finishing/QC and packaging; alternative textile/latex/printing claims excluded; no audited quantities or certification adoption |
| ukong-swim-cap-supply | literature | https://www.ukongtech.com/product-detail/customswimcaps/ | Independent primary plain/blank silicone swim-cap supply endpoint and general moulding capability; printing/marketing/use-care instructions not production defaults |
| jrc-ilcd-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | First edition March2010, complete §§7.9.2-7.9.3 pp255-272/PDF275-292 including situation/attributional/recycling limitations; exclusive/virtual subdivision then determining physical causality then genuine residual common-gate actual-state market value, no fixed factors |
