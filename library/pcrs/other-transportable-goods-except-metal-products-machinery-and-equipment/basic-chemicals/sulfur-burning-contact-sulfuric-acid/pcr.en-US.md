---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.sulfur-burning-contact-sulfuric-acid
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Sulfur-burning dry double-contact manufacture of bulk industrial sulfuric acid

## 1. Scope and Applicability

This method covers bulk industrial aqueous H2SO4 manufactured from actual elemental sulfur by a dry double-contact/double-absorption (DCDA) process, with final mist separation, cooling, actual concentration adjustment and factory-gate acceptance. The supplied acid has an individually measured H2SO4 mass fraction within 93–98%; this is the covered commercial/flow-identity interval, not a default concentration. Use source-confirmed lot/SKU/grade and impurity acceptance. Different customer uses do not create different sulfuric-acid identities. BREF sections4.2.1–4.2.4 and4.4.2 distinguish the operations; AP42 section8.10.2.1 independently establishes the elemental-sulfur route. The producer page confirms molten-sulfur manufacture and distinct commercial acid/oleum offerings (`jrc-lvic-aaf-2007`, `epa-ap42-810-1993`, `ecovyst-virgin-acid`).

Exclude phosphoric, nitric and sulphonitric acids, oleum/free-SO3 products, integrated oleum co-production, acid below93% or above98% under this identity, formulated mixed-acid preparations, metallurgical/sulfide-ore SO2 feeds, spent-acid/H2S regeneration, wet-catalysis acid and single-contact manufacture. Integrated chemical tail-gas scrubbing, electricity generation and on-site chemical water-treatment branches require additional reviewed atomic method coverage before this PCR alone can describe that configuration. Imported process-water treatment stays in compatible upstream datasets. Normal physical cooling/blowdown, actual washing and residue handling remain inside. No historical plant recipe, conversion, catalyst composition/lifetime, impurity limit, energy recovery or emission factor is imposed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.sulfur-burning-contact-sulfuric-acid |
| classification_refs | CPC3.0:34231; narrower sulfuric-acid route subset; no positive edge implied |
| covered_products | 93–98 mass-percent aqueous industrial sulfuric acid from elemental-sulfur dry DCDA manufacture |
| excluded_products | Exclude phosphoric, nitric and sulphonitric acids, oleum/free-SO3 products, integrated oleum co-production, acid below93% or above98% under this identity, formulated mixed-acid preparations, metallurgical/sulfide-ore SO2 feeds, spent-acid/H2S regeneration, wet-catalysis acid and single-contact manufacture. Integrated chemical tail-gas scrubbing, electricity generation and on-site chemical water-treatment branches require additional reviewed atomic method coverage before this PCR alone can describe that configuration. Imported process-water treatment stays in compatible upstream datasets. Normal physical cooling/blowdown, actual washing and residue handling remain inside. No historical plant recipe, conversion, catalyst composition/lifetime, impurity limit, energy recovery or emission factor is imposed. |
| representative_product | One accepted bulk acid lot with actual measured assay, carrier water and impurity specification |
| production_route | Sulfur receipt/melting/filtration; air drying; sulfur combustion; catalytic SO2 conversion and intermediate/final absorption; heat recovery; mist control; cooling/actual dilution; storage and bulk loading |
| market_state | Complete bulk aqueous solution at factory gate; tanker/container tare excluded; actual loading included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply declared accepted industrial aqueous sulfuric acid |
| How much | 1 kg reference flow |
| How well | Measured 93–98% H2SO4 mass fraction, water and actual impurity/SKU specification; no assumed assay |
| How long or cycle | Factory-gate supply during the declared complete production campaign/period, including start-up/shutdown and storage losses |
| reference_flow_link | finished_acid |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Elemental-sulfur origin/grade/assay; dry DCDA bed/absorber arrangement; actual lot/SKU; CAS7664-93-9; measured H2SO4 mass fraction/water/impurities and methods; complete net solution mass; no oleum; cooling/dilution/loading state; site/period; every utility provider/native reference basis; start-up/abnormal coverage; mist/SO3 and NO/NO2 speciation; water origin/outlet/receiver; actual waste composition/destination; steam pressure/temperature/dryness/return-condensate/enthalpy; allocation and unresolved interfaces |

Declare every required qualifier in the concrete dataset metadata, process notes or reference-flow comment; missing information makes the data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg complete accepted net supplied solution, excluding tare. Q is accepted solution mass for the same campaign, measured by cp_product; neither pure H2SO4 mass nor total plant acid circulation is Q. |
| solution_basis | sulfur_feed, makeup_acid, demin_water, cooling_water, supported_catalyst, filter_aid, finished_acid, steam_export, sulfur_filtercake, spent_catalyst, acid_effluent, water_sludge | Mass | kg | Record supplied solution/mixture mass and separately measured component fractions. Active H2SO4 mass = solution mass times measured H2SO4 mass fraction; carrier water = separately determined water mass. Do not assume all non-acid mass is water when impurities exist. Preserve physical sulfur/water/component balances before allocation. |
| utility_basis | natural_gas, electricity, steam_export, river_water, groundwater | Verified native property | native unit | Natural gas/abstraction use Volume/m3; electricity uses Net calorific value/MJ with exact kWh conversion. Gas T/P/wet-dry/composition/Z and supplier volume conditions must agree. Steam uses measured physical mass and separately balanced usable heat; an MJ property alone does not prove net delivery. |
| species_media | all elementary outputs | Mass or verified Volume | kg or m3 | Quantities must match chemical species/element basis, phase and receiving medium. Combined acid-equivalent/NOx results require compatible speciation, never duplicate or substitute molecules. Keep resources, process products, off-site wastes and environmental releases distinct. |

Preserve analytical concentration conventions: the covered grade is measured H2SO4 mass fraction of the entire accepted solution, not acidity reported as SO3, an unspecified titration equivalent, or a volume-percent label. Resolve sampling/assay and impurity corrections before converting to this basis. For species reporting conversions use documented formula and molar-mass evidence: elemental S (CAS 7704-34-9; sulfur-atom basis 32.065 g/mol), SO2 (7446-09-5; 64.064 g/mol), SO3 (7446-11-9; 80.063 g/mol), H2SO4 (7664-93-9; 98.078 g/mol), from NIST Chemistry WebBook (`nist-sulfur`, `nist-so2`, `nist-so3`, `nist-h2so4`). These constants support species accounting, not an assumed sulfur allotrope, purchased sulfur purity, mixture mass, conversion or emission. A combined Method8 H2SO4-equivalent result cannot be split using molar masses alone; independently established speciation is required.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual delivered elemental sulfur, auxiliaries and utilities at plant receipt; opening stocks, supplier sources and material/energy bases recorded |
| starting_condition_role | Foreground begins at receipt, with nonzero supplier manufacture/transport linked upstream |
| product_classification_scope | Only the declared acid-route subset of CPC34231; the mixed classification label never defines common chemistry |
| recursive_input_rule | Purchased same-category acid needs supplier origin, concentration and upstream dataset. Internal acid/catalyst/condensate recirculation is a paired physical stage link; external reprocessing crosses an identified boundary |
| upstream_dataset_requirement | Every product/service supply and waste recipient requires compatible route/grade/native quantity basis; unresolved background linkage remains explicit |
| disclosure | Actual process diagram, stage meters, loops, start-up/abnormal losses, stock changes, water/steam states, waste receivers, allocation, exclusions and gaps |

Retain one aggregate foreground unit from receipt through bulk acceptance/loading, with separate stage data: receipt/melting/filtration → air drying and sulfur combustion/waste-heat boiler → first catalytic beds/intermediate absorption → later beds/final absorption/mist removal → acid cooling/actual water dilution/acceptance/storage/loading. Steam/condensate and acid-circulation links preserve identical sending/receiving mass and composition. Internal intermediate/final absorber acid is aggregated into one finished-acid output, avoiding duplicate reference UUID outputs. Retain sulfur/S, water/H/O and actual fossil/biogenic-carbon balances; measured residuals must be explained, never used to fabricate an emission. Sources: `jrc-lvic-aaf-2007`, `epa-ap42-810-1993`.

The cards are an atomic baseline, not permission to omit actual exchanges. Add a separately measured, chemically/physically specific row for every actual additional auxiliary, filter medium, coolant/refrigerant, packaging component, recovered salt/gas, waste, pollutant or outlet. Verify its identity/state/quantity and cite applicable original method evidence. Chemical scrubbing, on-site chemical water treatment, oleum and electricity co-production require expanded reviewed method scope; do not silently select this restricted PCR for them. Off-site acid-waste transfer is not an immediate water release; retained mist and filter dust are not external emissions. BREF wastewater case tables for TiO2/spent acid and smelters do not supply sulfur-burning defaults.

Maintain a complete physical ledger for wet inlet air, dry outlet carrier gas and outlet humidity as well as the listed burden-bearing exchanges. Measure air flow, temperature, absolute pressure, dry/wet convention, O2/N2 and actual other constituents; include dryer water transfer, excess oxygen and inert nitrogen in the total physical mass and H/O/N balances. Do not invent an air recipe or add O2/N2 environmental releases solely to force closure. When an actual air/oxygen supply is represented as an exchange, retain its own concrete atomic row, origin and verified identity; physical carrier-gas ledger coverage is required even where the LCI format omits those uncharacterised carriers.

Reconcile incoming whole streams plus opening stocks against outgoing whole streams plus closing stocks, with measured uncertainty and an explained residual. Nested component ledgers for S, H, O, actual C/N, catalyst V/Si/promoters and other measured elements must reconcile each whole stream without adding its components a second time to total mass. Record H2SO4, SO2, SO3, sulfate and retained water distinctly. The elemental-sulfur reaction sequence is S + O2 to SO2, SO2 + one-half O2 to SO3, then SO3 + H2O to H2SO4 (`epa-ap42-810-1993`); these are species transformations, not a default yield. Absorption consumes water chemically, while wet-air drying transfers water and actual fuel combustion may form water. A water-species formation/consumption term belongs only in the species ledger, never as a new total-mass source. Preserve free carrier water in acid, chemical solutions, wet cake/sludge, external condensate, steam and emissions. Dissolved pollutants already within a whole effluent are nested components, not extra whole-stream mass.

External recipient condensate return crosses the foreground boundary: add a separate actual water-condensate input with measured full mass, composition, temperature/pressure and compatible identity, paired to the exported-steam interface. Internal condensate stays paired within the plant. Record steam-water opening/closing stocks, blowdown, vents and leaks. Keep delivered steam mass separate from useful heat. Derive ordinary-water enthalpy using measured absolute pressure/temperature/phase and a verified implementation of IAPWS-IF97 within its published regions (`iapws-if97-2012`); two-phase delivery also needs measured dryness and compatible saturated-phase properties. Use the same enthalpy datum for steam, returns, other measured boundary streams and stock changes. The useful-heat account must state recipient acceptance and the delivery boundary; subtract actual returns and account for losses only once at the boundary where they occur. No return is a documented boundary condition, never an assumed full or zero return. Imported steam and purchased heat are separate actual exchanges with their own physical or energy basis; do not count an on-site fuel and the heat it generates as two external purchases. Missing site state/quantity does not authorise a universal steam conversion.

Keep actual supported-catalyst charge, screening returns, losses and replacement; sulfur-filter aid and replaceable filter media; acid-mist filter elements; actual water-treatment auxiliaries; cleaning chemicals; container/pipeline/tanker maintenance and cleaning; returned acid and recovered sulfur inside the declared service and transfer ledgers. Add separate chemically/physically specific rows for each actual cross-boundary material, waste or service. Tare exclusion from product Q does not exclude container manufacture/reuse, cleaning or disposal burdens. Attribute long-life consumables and reusable containers using documented actual service intervals, cumulative accepted production/uses and stock/return records; reconcile full physical transactions separately from their attributed environmental loads and do not impose a lifetime or replacement recipe. Chemical product-purification or chemical water/tail-gas-treatment branches require their own reviewed method and atomic chemistry coverage; their actual inputs/products remain recorded when extending the model. Sources: `jrc-lvic-aaf-2007`, `epa-ap42-810-1993`, `jrc-ilcd-2010`, `iapws-if97-2012`.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| acid_manufacture | Sulfur-burning DCDA acid manufacture and bulk delivery | required | Declared actual dry DCDA configuration | foreground production | finished_acid |

Retain one aggregate foreground unit from receipt through bulk acceptance/loading, with separate stage data: receipt/melting/filtration → air drying and sulfur combustion/waste-heat boiler → first catalytic beds/intermediate absorption → later beds/final absorption/mist removal → acid cooling/actual water dilution/acceptance/storage/loading. Steam/condensate and acid-circulation links preserve identical sending/receiving mass and composition. Internal intermediate/final absorber acid is aggregated into one finished-acid output, avoiding duplicate reference UUID outputs. Retain sulfur/S, water/H/O and actual fossil/biogenic-carbon balances; measured residuals must be explained, never used to fabricate an emission. Sources: `jrc-lvic-aaf-2007`, `epa-ap42-810-1993`.

### Process: Sulfur-burning DCDA acid manufacture and bulk delivery (`acid_manufacture`)

#### Inputs

##### Product flows

###### Sulphur, except sublimed sulphur, precipitated sulphur and colloidal sulphur (`sulfur_feed`)

Record actual manufactured elemental sulfur delivered solid or molten, excluding sublimed/precipitated/colloidal and rubber-curative preparations. Require supplier source, assay, ash/water and melting/filtration records. The broad identity does not establish a Claus background or a pure-S denominator.

- Selected flow: Sulphur, except sublimed sulphur, precipitated sulphur and colloidal sulphur `9ba64dfc-e051-4f47-a478-cb1d0bda0c3a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvic-aaf-2007`

###### Sulfuric acid (`makeup_acid`)

Only purchased 93–98% industrial sulfuric acid for initial charging or external make-up. Record full solution mass and measured assay; internal circulating dryer/absorber acid is an equal-quantity stage link, never another external input.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvic-aaf-2007`

###### Deionised water (`demin_water`)

Record purchased deionised water made by the native ion-exchange or reverse-osmosis route for actual absorption/dilution and boiler make-up; verify actual conductivity/impurities and supplier treatment, preserving separate stage meters and acid versus steam-water uses. Retained condensate is internal; direct abstraction is represented separately only when inside the foreground.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-aaf-2007`

###### Tap water (`cooling_water`)

Purchased treated tap-water make-up only. Confirm actual supplier and its native mass basis; volume records require measured density at recorded temperature. Do not use this product input for direct river/groundwater extraction or count internal circulation as consumption.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-aaf-2007`

###### Alternating current (`electricity`)

This identity is user-side grid-average 1–35 kV AC with native locationOfSupply CN. Retain that Chinese supply geography; another geography requires its own verified compatible identity. Meter all actual blowers, pumps, melting, filtration, heat recovery, cooling and loading; verify supplier geography/period and transformer boundary. Other voltages or own generation require separately compatible atomic identities; no national mix is assumed.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvic-aaf-2007`

###### natural gas in the gaseous state (`natural_gas`)

Conditional pipeline gaseous natural gas for actual start-up/support firing. Its reference property is Volume, not the secondary Mass property. Retain temperature, absolute pressure, dry/wet composition and compressibility, reconcile supplier m3 definition, and measure calorific value; no database coefficient is a density or fuel default.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvic-aaf-2007`

###### Silica-supported vanadium oxidation catalyst (`supported_catalyst`)

Record complete purchased catalyst pellets/rings including support and actual promoter, batch composition, bed charge, make-up and screened recovery. Pure V2O5 or a sol-gel catalyst is not the whole supplied catalyst. Apportion long-life replacement using actual cumulative production and stock reconciliation, not a BREF service-life or formula default.

- Selected flow: Silica-supported vanadium oxidation catalyst
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst`
- Sources: `jrc-lvic-aaf-2007`

###### Filter aid, diatomite (`filter_aid`)

Conditional actual diatomite aid for molten sulfur filtration; record the complete purchased grade, moisture, mineral composition and supplier. The broad diatomite clarification-aid identity does not prescribe an oil/fat-only grade or manufacturer. Its source comment describes an oil/fat use and excludes the aid from a balance for lack of quantity: that exclusion is not valid methodology here. Include its full physical mass, retained cake fraction and losses. Verify the actual sulfur-filtration grade and upstream dataset; do not infer compatibility from intended use alone. If another aid is actually used, add its separate measured atomic row.

- Selected flow: Filter aid, diatomite `f9a61da2-6847-438f-8bd2-827a09d23c2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvic-aaf-2007`

##### Elementary flows

###### river water (`river_water`)

Only direct foreground river-water extraction for actual cooling/service use: meter gross abstraction in m3, basin/location and withdrawal time. Purchased water upstream extraction is excluded from this foreground row; a return does not cancel gross abstraction.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-aaf-2007`

###### ground water (`groundwater`)

Only direct foreground groundwater abstraction: retain well/aquifer, basin, meter and gross m3; distinguish purchased water, recirculation and recharge. No water-scarcity characterisation factor or density is supplied by the identity.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-aaf-2007`

#### Outputs

##### Product flows

###### Sulfuric acid (`finished_acid`)

One accepted bulk factory-gate aqueous industrial H2SO4 product, actual assay within 93–98% by mass, excluding packaging/tanker tare. Record the full supplied solution including carrier water; do not replace 1 kg solution with 1 kg pure acid or duplicate internal absorber acid as reference output.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `jrc-lvic-aaf-2007`; `ecovyst-virgin-acid`

###### Steam, in chemical industry (`steam_export`)

Conditional actual recovered water steam from the sulfuric-acid process crossing the plant gate to an identified recipient. The adopted broad chemical-industry steam identity has native Mass/kg and no hard pressure, manufacture-route or geography restriction; it identifies physical steam, not its heat content or a boiler background. Keep physical steam mass, pressure (gauge/absolute), temperature, dryness and return condensate mass/enthalpy; compute net delivered heat from an actual enthalpy balance. Internally used steam and vented water vapour are different interfaces. No 11.0/0.45 MPaG identity, MJ calorific property or BREF export value proves compatibility.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `jrc-lvic-aaf-2007`

##### Waste flows

###### Residue from Filtration (`sulfur_filtercake`)

One actual sulfur filtration cake sent off-site: weigh full as-shipped cake, sample retained sulfur, ash, aid and moisture, hazard class and receiving route. The generic filtration-residue identity carries no default composition or treatment; externally recovered sulfur remains accounted physically.

- Selected flow: Residue from Filtration `f1b6f4e0-72d1-4e9b-afcc-cfca4e75b184`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`

###### Catalyst waste (`spent_catalyst`)

Use this Waste-disposal catalyst identity only for actually discarded silica-supported vanadium catalyst, with measured moisture/V/promoter content and identified disposal receiver. Catalyst sent for material recovery requires a compatible recovery identity, not this disposal restriction. Returned screening fraction stays internal and is not repeated as waste.

- Selected flow: Catalyst waste `9f527622-cc4a-3014-a59e-a0383c602b5d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`

###### Acidic sulfuric-acid-plant washwater transferred for off-site treatment (`acid_effluent`)

Conditional measured whole aqueous waste transferred to a treatment recipient, with H2SO4/sulfate, solids, trace metals, pH and water characterised. Manganese-slag wastewater and degreasing wastewater marked direct water discharge are rejected. No direct freshwater pollutant releases are added at this transfer point.

- Selected flow: Acidic sulfuric-acid-plant washwater transferred for off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`

###### Sulfuric-acid-plant water-treatment sludge (`water_sludge`)

Conditional actual separated treatment sludge; preserve its actual origin, wet mass, dry solids, sulfur species, metals and receiver. A generic row with conflicting water-treatment-chemical wording is not adopted. Do not assume smelter/TiO2 wastewater composition for sulfur burning.

- Selected flow: Sulfuric-acid-plant water-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`

##### Elementary flows

###### Water (`liquid_water`)

Conditional actual liquid-water discharge to freshwater at the environmental outlet, with native Volume/m3 quantity supported by calibrated outlet metering and measured composition/density. Reconcile an independent carrier-water mass ledger, distinguishing full effluent mass and separately inventoried dissolved/suspended constituents. Record temperature/thermal release and receiver. This is not extraction, off-site wastewater or water vapour; never substitute kg for the native m3 reference.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvic-aaf-2007`

###### sulfate (`sulfate_water`)

Only dissolved sulfate ion actually discharged to freshwater, measured as kg SO4, not kg S or kg sodium/calcium sulfate. Species conversions require the analytical reporting basis and molecular mass evidence. Keep internal dissolved sulfate and off-site treatment transfer out of this direct release.

- Selected flow: sulfate `fe0acd60-3ddc-11dd-ac59-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvic-aaf-2007`

###### vanadium (`vanadium_water`)

Only actually measured vanadium discharged to freshwater on elemental-V mass basis; the identity includes ions where no separately specified identity applies. Record dissolved/total analysis and avoid counting both; no assumed positive emission from catalyst presence.

- Selected flow: vanadium `4d9a8790-3ddd-11dd-8dbe-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvic-aaf-2007`

###### sulfur dioxide (`so2_air`)

Measure residual SO2 after final absorber/filter and every actual start-up, shutdown, bypass and vent; retain outlet gas flow and dry/wet, normal-volume and oxygen-correction bases. SOx total or BREF conversion is not measured SO2. This UUID is emissions to air, unspecified; record actual outlet height/urbanity and replace the binding if a verified more specific compatible compartment is required. Lower-stratosphere/upper-troposphere identities do not describe a ground plant stack.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`; `epa-method8-2019`

###### sulphuric acid (`acid_mist`)

Measure H2SO4 molecular/species mass in aerosol separately from SO3. Exclude droplet carrier water from the H2SO4 species amount while retaining it in the complete physical water/aerosol ledger; do not count whole droplets and their nested constituents twice. EPA Method8 combines H2SO4 mist and SO3 as H2SO4; without additional validated speciation the two atomic quantities are pending, not assigned twice or entirely to H2SO4. Preserve interference and referenced-method requirements.

- Selected flow: sulphuric acid `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`; `epa-method8-2019`

###### sulfur trioxide (`so3_air`)

Measure actual residual gaseous SO3 mass; never use sulfite, sulfate or a combined Method8 acid-equivalent amount as this species without validated separation and conversion. Keep mist speciation uncertainty explicit.

- Selected flow: sulfur trioxide `4d9a8790-3ddd-11dd-96ec-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`; `epa-method8-2019`

###### nitrogen monoxide (`no_air`)

Collect actual NO species mass from sulfur/support combustion; document speciation. An aggregate NOx number is not NO, excludes N2O, and cannot be added alongside separately counted NO/NO2.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### nitrogen dioxide (`no2_air`)

Collect actual NO2 species mass. A monitor reporting NOx as NO2 equivalent does not establish NO2 physical mass or a two-species split; unresolved quantity basis blocks the affected dataset calculation.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### carbon dioxide (fossil) (`co2_air`)

Conditional fossil CO2 from actual support fuel/carbon impurity combustion; measure or calculate from measured carbon balance with oxidation and residual carbon documented. Elemental sulfur oxidation creates no default CO2; keep biogenic CO2 as a separate additional actual flow when present, never delete it for GHG-reporting conventions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### carbon monoxide (fossil) (`co_air`)

Conditional actual fossil carbon monoxide from support firing or measured fossil feed impurities, on CO mass basis; reconcile the same carbon ledger as CO2 and CH4. No default combustion factor.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### methane (fossil) (`ch4_air`)

Conditional actual fossil methane leakage/slip from the gas train/support firing. Retain leak survey coverage and compound mass; correction/delayed-emission flows and total hydrocarbon approximations are excluded.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### nitrous oxide (`n2o_air`)

Conditional actual N2O from support combustion or treatment, recorded separately from NOx, with detection limit and coverage. No N2O amount is inferred from BREF NOx data.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### water vapour (`evap_water`)

Measure actual water evaporation/steam vent to outdoor air through mass/condensate balances; product steam export is not an air emission. Keep atmosphere/soil/water media separate.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### particles (PM2.5) (`pm_fine`)

Conditional actual residual non-acid dust at diameter up to 2.5 micrometres, after recovery/control. Do not include acid mist already counted as H2SO4, captured filtercake or nested total-PM amounts.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### particles (PM2.5 - PM10) (`pm_middle`)

Conditional actual residual non-acid dust above 2.5 and up to 10 micrometres. Derive this disjoint bin from compatible simultaneous PM10/PM2.5 measurements only; no BREF aerosol efficiency is a dust factor.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

###### particles (> PM10) (`pm_coarse`)

Conditional actual residual non-acid dust above 10 micrometres. Reconcile all three disjoint bins to measured total dust; captured catalyst/sulfur dust remains waste or internal recycle, not an air release.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the measured attributable exchange through this row protocol and divide by accepted net solution mass Q from cp_product for the same campaign; document conditional absence with evidence, never treat unknown identity/quantity as zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`

## 7. Allocation and Co-product Handling

Before using the allocation sequence, declare the ILCD modelling situation and the multifunctional functions. Sections6.5.4 and7.9.2 make allocation directly applicable to Situation C2 and conditionally applicable to A/B/C1 only under their stated feasibility/hierarchy conditions. Attributional modelling alone does not bypass the required assessment of system expansion/substitution: it can also apply in attributional situations A/C1, not only in consequential modelling. Record the applicable hierarchy, feasibility evidence and reasons for residual allocation; an unspecified decision context leaves the affected dataset incomplete. No automatic steam substitution credit follows from the existence of useful steam. Sources: `jrc-ilcd-2010`.

Keep an unallocated physical process graph and a separately labelled environmental-burden account. First assign separable operations using actual meters/records; disclose and justify any remaining joint-load allocation according to the declared study goal and the attributional multifunctionality conditions in ILCD sections6.5 and7.9.2–7.9.3 (`jrc-ilcd-2010`). A consequential substitution model requires independently justified displaced services and review. Determine physical causality where defensible; use economic allocation only for the residual flows that cannot be assigned by determining physical causality under the declared ILCD modelling situation. Use same-period actual quantities/prices at the point and condition where each co-function leaves this process; remove later conditioning, packaging and transport value, disclose missing price evidence and test sensitivity. No prescribed share applies. Steam export is counted only if useful delivery and recipient/return-condensate evidence exist; no automatic avoided-boiler credit. Conserved shares apply only to the joint environmental loads, not to finished-acid/steam physical mass or raw water/S balances. Record full co-product gas/salt quantities if actually produced; their existence requires separately applicable scope/identity. Waste never becomes a saleable co-product by changing a label; document hazard, value, acceptance and receiver. Sources: `jrc-lvic-aaf-2007` section4.4.15 for useful heat export and `jrc-ilcd-2010` sections6.5/7.9.2–7.9.3 for allocation conditions/conservation; no BREF export or energy-share example is a default.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | acid_manufacture | finished acid | lot acceptance and stock records | lot/SKU; net supplied solution kg Q; sampled H2SO4 fraction; water; impurities; sample method; tare; opening/closing stocks; specification; route | Calibrated scale or traceable tank/mass-flow reconciliation; measured density/temperature for volume conversions; representative assay and water analysis; reconcile same accepted lot Aggregation detail: accepted net solution mass Q; per 1 kg reference flow | kg | each lot and campaign | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_material | acid_manufacture | sulfur; purchased acid; filter aid | receipt meter and assay | supplier; CAS/grade; supplied net mass; assay; ash; water; impurity; opening/closing stocks; internal recovery | Weigh/invoice/meter receipts and reconcile consumption/stock changes, actual formulation and stage destination; preserve complete mixtures and real losses Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | kg | each receipt; continuous/shift totals | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_catalyst | acid_manufacture | whole supported catalyst | charge/replacement and screening ledger | bed; grade; supplier formulation; complete mass; V/promoter/support fractions; charge; return; loss; cumulative acid output; stock changes | Weigh complete catalyst receipts and screen/discard fractions, retain real production over the measured service interval; attribute replacement without imposing lifetime Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | kg | each charge/screen/change | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_energy | acid_manufacture | electricity and natural gas | meter and provider data | native electricity MJ/kWh; voltage; gas m3; T; absolute P; wet/dry composition; Z; heating value; meter/provider basis; support firing hours | Read calibrated stage meters and provider definitions, retain start-up/shutdown and reconcile site totals; do not equate gas secondary mass coefficient to density Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | MJ; m3 | continuous/shift and abnormal events | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_water | acid_manufacture | product water and direct abstraction | water-meter and source ledger | supplier/basin/well; water source; gross m3/kg; temperature/density; cooling; absorption/dilution; boiler make-up; internal recycle; return | Meter each boundary/source/stage, distinguish outside receipts from recycle and abstraction; close actual water/product/steam/discharge balance Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | kg; m3 | continuous/shift and campaign | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_steam | acid_manufacture | exported steam and returned condensate | delivery meter and enthalpy balance | recipient; steam kg; pressure basis; T; dryness; feedwater; return condensate kg/T/P; losses; enthalpy source; useful heat acceptance | Use calibrated mass and state meters at actual delivery/return boundaries with a documented, verified IAPWS-IF97 property implementation/region and common enthalpy datum; reconcile kg and usable heat independently, without assuming a steam flow pressure Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | kg; MJ | continuous delivery and campaign | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_waste | acid_manufacture | cake, spent catalyst, washwater and sludge separately | weighbridge and receiving analysis | one waste row; wet mass; water/dry solids; sulfur/V/promoter/actual chemical fractions; hazard; destination; acceptance; recovery/disposal; transfer timing | Weigh and sample each independent transferred stream; retain manifests and receiver conditions; internal return has no external waste amount Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | kg | each shipment and screen/cleaning event | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_effluent | acid_manufacture | water, sulfate and vanadium separately | outlet flow and representative species analysis | outlet/receiver; liquid flow/density; sulfate SO4 basis; vanadium V basis; other actual constituents; T/thermal release; intervals; pH; detection limits | Sample actual environmental outlets with traceable representative flow-weighted chemistry; distinguish off-site transfer and water/component mass; no unmeasured dilution or discharge assumption Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | kg; m3 | continuous flow; representative campaign samples | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |
| cp_air | acid_manufacture | each emitted molecule or disjoint dust bin | stack/vent test and activity log | inlet combustion/process air flow and T/P; O2/N2; inlet/outlet humidity and dryer water transfer; species; outlet/height/urbanity; concentration; gas flow; dry/wet; normal T/P; oxygen correction; operating time; SO3/H2SO4 split; NO/NO2 basis; PM overlap; detection limits; recovery | Measure representative actual outlets and abnormal intervals with documented applicable sampling/analysis and interferences. Method8 includes referenced methods and combines acid mist/SO3: require validated speciation before assigning atomic quantities; retain uncertainty Aggregation detail: attributable measured exchange / Q from cp_product; per 1 kg reference flow | kg | representative operating regimes, start-up/shutdown and campaign | same complete campaign, including normal and abnormal states | actual acid plant and declared boundary | per 1 kg reference flow | calibration, originals, representativeness, composition/media and provider-basis evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | Normalize each measured attributable exchange amount by Q from cp_product for the same campaign, preserving its native numerator unit. finished_acid is exactly 1 kg reference flow. Internal transfer quantities are recorded at both ends before aggregation, not added as new external rows. | measured exchange; Q; native unit; same campaign | native unit per 1 kg reference flow | jrc-lvic-aaf-2007 |
| component_ledger | all inventory rows | Use measured mixture mass and measured constituent fractions for physical component amounts; reconcile sulfur, water and actual carbon stocks/inputs/outputs/losses without changing Q or assuming a recipe. Record uncertainty and explain closure residuals. | supply mass; measured composition; stage stocks | separate physical component ledger | jrc-lvic-aaf-2007 |
| electricity_conversion | electricity | 1 kWh = 3.6 MJ; apply only to actual metered electricity, preserve the native Net calorific value reference property and the same campaign Q. | meter kWh; cp_energy; Q | MJ per 1 kg reference flow | jrc-lvic-aaf-2007 |
| steam_heat_balance | steam_export | Retain full steam mass and separately compute useful delivered heat from measured delivered steam and actual return-condensate enthalpy/mass, losses and declared boundary. Require compatible pressure/temperature/dryness property method; never use a generic fuel calorific value as net steam delivery. | cp_steam state and mass; documented enthalpy basis; Q | physical kg and separately stated useful MJ per 1 kg reference flow | jrc-lvic-aaf-2007 |
| emission_integration | sulfate_water, vanadium_water, so2_air, acid_mist, so3_air, no_air, no2_air, co2_air, co_air, ch4_air, n2o_air, evap_water, pm_fine, pm_middle, pm_coarse | Integrate measured species concentration times compatible actual outlet flow and covered time, preserving species mass and gas/water measurement bases; normalisation divides by Q. Combined Method8 or NOx-equivalent values stay unresolved until supported speciation/conversion, never duplicated. | cp_air/cp_effluent; species; concentration/flow/time; Q | species kg per 1 kg reference flow | epa-method8-2019; jrc-lvic-aaf-2007 |
| dust_bins | pm_fine, pm_middle, pm_coarse | Use three disjoint size bins; PM2.5–10 equals simultaneous compatible PM10 minus PM2.5; >10 equals compatible total dust minus PM10. Do not subtract across incompatible methods, periods or acid/non-acid fractions; retain collected dust separately. | same-period non-overlapping dust measurement; cp_air; Q | three separate residual dust amounts per 1 kg reference flow | jrc-lvic-aaf-2007 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_provider | all inventory rows | Verify one physical exchange, direct reference property/unit, lot/grade, supplier/receiver and route/media; an adopted identity alone never proves background or quantity compatibility. Blank UUID and missing quantity are not zero. | direct identity; source originals; actual supplier/receiver records |
| complete_period | all inventory rows | Same accepted product campaign with representative normal, start-up/shutdown, cleaning, screening and abnormal loss coverage; report measured uncertainty and detections, never replace missing data with historic source examples. | calibration; sampling plan; coverage; source restrictions |
| physical_closure | all stage links | Equal mass/composition at both internal endpoints; complete solution/steam/cake/sludge physically conserved before allocation; reconcile stock changes and water/S/carbon balances. | stage ledger and allocation account separately |
| source_limits | source-linked rules | Apply each source only to its explicit route/species/method. BREF/AP42 historic cases are not universal recipes, operating performance, numerical defaults or legal-compliance claims. | source sections and site applicability decision |

## 9. Validation Rules

Check finished_acid is the sole reference product output and its whole-solution amount is 1 kg; EN/ZH reference, denominator, protocols, row ids and calculation rules must agree. Require complete actual acid assay/route, supplier/property/quantity compatibility and direct emission media. Failure of mass/water/S balance, unsupported species/NOx or steam-net-enthalpy conversion, missing reference identity, unverified background linkage or uncovered actual branches leaves the affected dataset incomplete. Do not treat a PCR measurement/schema check as actual factory measurement or scientific approval. Document every not-applicable exchange with route evidence; missing values are pending. Check the three particulate bins and acid mist for overlap, the environmental versus off-site-waste boundary, and unallocated physical quantities versus allocated loads.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/campaign-specific foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after actual evidence completion and review |
| allowed_use | Declared matching sulfur-burning DCDA bulk industrial acid with identical solution/assay and boundary bases |
| excluded_use | Other acids or feed routes; oleum; unverified wet-scrubbing/co-production configurations; inferred legal compliance or universal process averages |
| required_metadata | Elemental-sulfur origin/grade/assay; dry DCDA bed/absorber arrangement; actual lot/SKU; CAS7664-93-9; measured H2SO4 mass fraction/water/impurities and methods; complete net solution mass; no oleum; cooling/dilution/loading state; site/period; every utility provider/native reference basis; start-up/abnormal coverage; mist/SO3 and NO/NO2 speciation; water origin/outlet/receiver; actual waste composition/destination; steam pressure/temperature/dryness/return-condensate/enthalpy; allocation and unresolved interfaces |
| required_quality_disclosure | Foreground coverage/uncertainty; unallocated balance; joint-burden allocation; quantity/provider/speciation/steam/UUID gaps; source scope limitations |
| update_trigger | Change of sulfur origin, assay/SKU, bed/absorber arrangement, cooling/water/utility supplier basis, abatement, co-product receiver or monitoring/speciation method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF (August2007), chapter4 sections4.2.1–4.2.4,4.4.2,4.4.15–4.4.18; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf | Route/stage separation, supported catalyst, concentration adjustment, heat recovery, acid mist/NOx and conditional water/waste boundaries; historic examples excluded as numerical defaults |
| epa-ap42-810-1993 | official_guidance | US EPA, AP42 section8.10 (July1993, reformatted January1995),8.10.2.1 and Figure8.10-1; https://www.epa.gov/sites/default/files/2020-09/documents/8.10_sulfuric_acid.pdf | Independent elemental-sulfur dry contact route and dual absorption; excludes historical fractions, conversion rates and emission factors as defaults |
| epa-method8-2019 | official_guidance | US EPA, Method8 (14January2019), sections1,2,4 and12; https://www.epa.gov/sites/default/files/2019-06/documents/method_8.pdf | Stationary-source SO2 versus combined H2SO4/SO3 measurement, referenced-method and interference caveats; not H2SO4/SO3 speciation or NOx method; printed CAS typos not identity authority |
| ecovyst-virgin-acid | literature | Ecovyst/Ecoservices, Virgin Sulfuric Acid, product page (accessed2026-10-13), introduction and commercial-product list; https://www.ecovyst.com/virgin-sulfuric-acid/ | Producer-specific molten-sulfur route and distinct93%/98% acid versus lower-strength acid/oleum offerings; no universal composition/energy/yield defaults |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment — Detailed guidance (First edition March2010), sections6.5 and7.9.2–7.9.3, printed pp80,256–257,264; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/physical causality/economic exit-condition and inventory conservation, restricted by study goal/model conditions; no acid/steam allocation share or consequential substitution default |
| iapws-if97-2012 | official_guidance | IAPWS R7-97(2012), Revised Release on IAPWS-IF97, sections1–2,5–8,12; https://iapws.org/technical-guidance/release/IF97-Rev.download | Ordinary water/steam state-dependent enthalpy within validated regions; no assumed steam state, dryness, heat credit or default conversion |
| nist-sulfur | official_guidance | NIST Chemistry WebBook SRD69, S, formula/molecular weight/CAS identity block; https://webbook.nist.gov/cgi/cbook.cgi?ID=C7704349 | Species/element mass reporting only; no mixture grade, route, process yield or emission default |
| nist-so2 | official_guidance | NIST Chemistry WebBook SRD69, SO2, formula/molecular weight/CAS identity block; https://webbook.nist.gov/cgi/cbook.cgi?ID=C7446095 | Species/element mass reporting only; no mixture grade, route, process yield or emission default |
| nist-so3 | official_guidance | NIST Chemistry WebBook SRD69, SO3, formula/molecular weight/CAS identity block; https://webbook.nist.gov/cgi/cbook.cgi?ID=C7446119 | Species/element mass reporting only; no mixture grade, route, process yield or emission default |
| nist-h2so4 | official_guidance | NIST Chemistry WebBook SRD69, H2SO4, formula/molecular weight/CAS identity block; https://webbook.nist.gov/cgi/cbook.cgi?ID=C7664939 | Species/element mass reporting only; no mixture grade, route, process yield or emission default |
