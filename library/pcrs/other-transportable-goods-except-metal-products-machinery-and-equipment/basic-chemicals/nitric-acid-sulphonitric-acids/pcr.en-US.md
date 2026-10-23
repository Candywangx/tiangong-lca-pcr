---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.nitric-acid-sulphonitric-acids
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Aqueous nitric acid from ammonia oxidation

## 1. Scope and Applicability

This manufacturing method covers aqueous single-species nitric acid made by catalytic ammonia oxidation, NO oxidation, water absorption and bleaching, through bulk plant-gate acceptance. The current native reference supports the 60% industrial-grade solution. Other aqueous delivery grades use the same methodological identity only after verification of their own compatible native reference and assay basis; concentration or end-use labels do not establish separate PCRs. Sulphonitric acid is a HNO3/H2SO4 mixture requiring both component accounts and a different mixing boundary. Excluded are sulphuric mixtures/oleum, concentrated/fuming acid, dehydration/rectification, acid regeneration, purchased-acid-only dilution/blending and downstream nitration, fertiliser production and use. The downstream intended use alone does not exclude otherwise compatible acid manufacture at the plant gate. [ec-lvic-aaf-2007; epa-ap42-nitric-1998; yara-nitric-acid]

The inventory options below are bounded configurations, not a universal bill of materials. Actual abatement hardware, reagents, catalyst formulation, utility source and discharge endpoints must be declared. A different catalyst, hydrogen or peroxide reagent, packaged sale, onsite fired boiler or direct aqueous discharge requires a separately evidenced atomic extension; do not mark a missing configuration as zero. Historical descriptions and single-plant cases establish no default concentration, pressure, conversion yield, purity, recipe, energy quantity or control efficiency.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.nitric-acid-sulphonitric-acids |
| classification_refs | CPC 3.0 34233; narrower |
| covered_products | Bulk aqueous HNO3 from ammonia oxidation; current reference grade 60% |
| excluded_products | Sulphonitric mixtures; concentrated/fuming or regenerated acid; diluted purchased acid without manufacturing |
| representative_product | Industrial-grade aqueous nitric acid at measured composition |
| production_route | Pt-Rh ammonia oxidation, NO oxidation, water absorption and bleaching; actual mono/dual pressure recorded |
| market_state | Net bulk liquid at plant gate, before downstream transport |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide industrial aqueous nitric acid as chemical feedstock |
| How much | 1 kg accepted net supplied solution |
| How well | Declared 60% grade, measured HNO3 mass fraction, water/impurity account and customer acceptance |
| How long or cycle | One plant-gate delivery; inventory covers representative complete catalyst campaign and operating states |
| reference_flow_link | gate_acid |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Nitric acid `bfd3cad4-2d40-4fe1-998c-5ecf1ddd2520` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | HNO3 CAS 7697-37-2; supplied solution mass; declared grade and measured HNO3 mass fraction; carrier water and impurities; oxidation/absorption pressure and temperature; mono/dual pressure; catalyst composition and age; actual NOx/N2O treatment and bypass; bulk delivery; site/time; utility definitions; stock change; receiver/allocation basis |

Declare these qualifiers in the foreground package. The UUID concentration qualifier is a compatibility condition, not evidence that a delivered lot was assayed. Never attach this 60% identity to a 40%, 50%, 70% or anhydrous product. Carrier water is part of the reference solution mass and is separately accounted in composition, not a second reference output.

The native name states “purity 60%” without separately defining that percentage or the wet/dry basis of a background dataset reference. This method defines quantity as whole supplied solution; measure HNO3 and water fractions and obtain provider confirmation of the grade percentage and whole-solution background mass basis before linking. The Mass property alone does not establish the concentration-percentage basis.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | gate_acid | Mass | kg | Reference amount is whole accepted solution net mass; use cp_product. Determine active HNO3 and carrier-water masses from measured mass fractions, retaining impurities separately. |
| common_denominator | all inventory rows | Mass denominator | kg | Use the same accepted solution output and period for every exchange; inventories are per 1 kg reference flow. Sales, production and stock changes must reconcile before normalization. |
| gas_reference | oxygen_supplement; natural_gas_reductant | Volume | m3 | Retain source and provider gas-volume conditions, composition, humidity and compressibility; no assumed normal state or secondary-mass density. Convert only through a documented compatible method. |
| steam_reference | steam_import; steam_export; condensate_return; condensate_received | Mass and measured enthalpy ledger | kg | Record gross steam/water transfers separately; derive net useful heat from actual enthalpy and return reference. Keep identity and pressure compatible; unknown background MJ definitions block linking, not measurement. |
| species_reference | no_air; no2_air; n2o_air | Mass | kg | Use species masses. NOx as NO2-equivalent cannot populate NO or NO2 without measured speciation; exclude N2O from NOx. Keep NOx QA aggregate outside the additive elementary ledger. |
| pressure_basis | nitric_manufacture | Pressure | Pa | Record oxidation and absorption pressure separately with unit, gauge/absolute convention, atmospheric pressure and measuring point, and temperature scale; do not interchange historical bar/psia conditions without verification or infer a default yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered anhydrous ammonia, external utilities and supplied catalyst at the acid train; measured ambient air uptake |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | Aqueous ammonia-oxidation HNO3 subset of CPC34233 |
| recursive_input_rule | Purchased nitric acid is a separate upstream dataset, not generated recursively or assumed burden-free; purchased-acid-only blending is outside this manufacturing route |
| upstream_dataset_requirement | Verified provider identity and reference quantity for ammonia, each utility, reagent and catalyst; external wastewater and spent-catalyst receivers linked once |
| disclosure | State oxidation/absorption regimes, all abatement/bypass configurations, utility delivery boundaries, water treatment and whether export is useful to an identified user |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_train` | foreground boundary | Include actual evaporation, filtration, compression, oxidation, heat recovery, condensation, absorption, bleaching, tailgas treatment, storage and bulk loading within one foreground unit; the stage ledger remains independently measured. | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `boundary_external` | foreground boundary | Purchased utility generation and external waste treatment are linked provider units; do not also import their emissions as direct acid-plant exchanges. A separately expanded onsite boiler or wastewater plant needs its own complete measured inventory. | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `boundary_actual` | foreground boundary | Report actual normal operation, startup, shutdown, bypass and catalyst ageing; assumed BAT installation or efficiency cannot substitute for observation. A missing applicable exchange is unresolved, not zero. | `ec-lvic-aaf-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| nitric_manufacture | Ammonia-oxidation nitric-acid manufacture and bulk delivery | required | Declared bounded route; actual treatment options only | foreground_process | gate_acid |

One aggregated foreground unit prevents the same nitric-acid UUID from creating multiple quantitative-reference outputs between absorption, storage and loading. Keep the following measured physical stage ledger before allocation:

| Stage | Physical links and measurements |
| --- | --- |
| Feed preparation and oxidation | Ammonia feed to vapour; fresh primary air and oxygen; measured gas to cooler, catalyst changes and reaction water |
| Recovery and absorption | Hot gas and recovered steam; cooler gas/condensate to absorber; absorption water; acid to bleaching; secondary air and NO-containing gas recycle |
| Tailgas and utilities | Gas before/after actual treatment; reagent consumption; turbine work; exported steam and condensate at physical endpoints |
| Storage and loading | Acid transfer to tank and accepted delivery; tank opening/closing stock, rejection, drains and separately measured vent emissions |

Every internal transfer has equal sender and receiver quantities for the same time, state and composition. Internal recycle does not cross the aggregated unit and is not added to external inventory. Before allocation, close total physical mass and elemental N, O, H and relevant C balances with measured composition and stock changes. Molecular N2 and H2O may be formed or consumed by reaction; their ledgers include explicit reaction terms, never fabricated external supplies. Preserve unreacted gas, N2 formed in side reactions/abatement and all measured carrier species. Additional actual chemicals, catalyst supports, air-filter waste, lubricants or direct effluent pollutants require their own specific rows and verified identities, never a collection-flow substitute.

For reaction diagnostics, the main steps are 4 NH3 + 5 O2 → 4 NO + 6 H2O; 2 NO + O2 → 2 NO2; and 3 NO2 + H2O → 2 HNO3 + NO. With reoxidation of NO, the net ideal acid reaction is NH3 + 2 O2 → HNO3 + H2O. Side routes include 4 NH3 + 3 O2 → 2 N2 + 6 H2O and 4 NH3 + 4 O2 → 2 N2O + 6 H2O; decomposition gives 2 N2O → 2 N2 + O2. These atom-balanced relations describe possible transformations, not measured yields or default exchange amounts. Actual reduction reactions, leaks and dissolved species require their own evidenced contributions. [ec-lvic-aaf-2007; epa-ap42-nitric-1998]

The whole wet-air intake and whole wet exhaust are physical stream totals. Their O2/N2/H2O and pollutant components are a nested composition ledger, not additional copies of those totals. Count ambient-air O2 only inside air_intake; only separately supplied oxygen enters oxygen_supplement. A whole wastewater transfer includes carrier water, dissolved acid, nitrates/nitrites and other constituents; do not add its constituent masses again as separate waste transfers. Direct discharge requires disjoint whole-effluent and pollutant measurements with separately verified medium/species identities. Convert nitrate-as-N, acid-equivalent or NOx-as-NO2 reporting to actual species only with evidenced speciation and molecular basis; NOx-as-NO2 is not a physical NO + NO2 mass total. Trace other actual carrier gases and dissolved species without forcing them into N2 or a residual invented water input.

For catalysts, packing, filter media and maintenance materials, retain actual gross receipts, installations, removals, unused supplier returns, opening/closing stores, in-service stock and losses in the physical ledger. Any actual return or additional material needs its own specific directional exchange and identity; net consumption does not erase a physical transfer. Lifetime attribution of upstream manufacture, maintenance service or recovery burdens is a separate burden ledger, with evidenced useful-life output and stock carry-over, never a replacement for gross physical kg. Monetary service charges are not catalyst or packing mass. Keep physical transfers and attributed upstream burdens separate when normalizing both to the accepted solution denominator. [ec-lvic-aaf-2007; ec-ilcd-allocation-2010]

### Process: Nitric-acid manufacture (`nitric_manufacture`)

#### Inputs

##### Product flows

###### Ammonia, anhydrous (`ammonia_feed`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter net anhydrous ammonia entering oxidation; assay purity and retain liquid/vapour state and evaporation duty. Do not substitute aqueous ammonia.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Ammonia, anhydrous (`ammonia_reductant`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only for actual anhydrous-ammonia tailgas reduction: meter reagent separately from ammonia_feed, with no duplicated header total. Aqueous reagent requires its own verified solution flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### oxygen (`oxygen_supplement`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Only actual purchased gaseous oxygen enrichment; meter delivered volume, oxygen purity, temperature, absolute pressure, moisture and compressibility. Establish provider m3 compatibility; never count oxygen already contained in air_intake again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### de-ionised water (`absorption_water`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter external de-ionised absorption and boiler-feed makeup water as separately identified stage records aggregated once. Reaction water and internal condensate recycle are not additional external purchases. Other supplied water grades require their own identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Tap water (`cooling_makeup`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only actual treated tap-water makeup to cooling; measure makeup, blowdown, evaporation and storage changes separately. Circulating cooling-water throughput is not fresh-water purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Alternating current (`electricity`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Only for actual CN supply compatible with the selected native geography: meter gross purchased grid-average AC at the 1–35 kV delivery boundary; convert kWh to MJ using 3.6 MJ/kWh. Record stage meters and recovered turbine work separately; do not also charge recovered work as purchased electricity. Other supply geographies, voltages or technologies require their own verified flow; the CN identity cannot stand in for an unknown or different location.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Purchased steam at measured pressure (`steam_import`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Purchased steam at measured pressure
- Flow property / unit: Mass / kg
- Amount rule: Only actual external steam; collect mass, pressure (gauge and absolute identified), temperature, dryness/superheat, return-condensate mass and enthalpy, and provider reference definition. No 11.0 or 0.45 MPaG assumption and no MJ identity inferred from a database energy property.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### natural gas in the gaseous state (`natural_gas_reductant`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Only actual pipeline natural gas used in tailgas abatement; meter m3 with temperature, absolute pressure, dry/wet basis, composition and compressibility. Verify provider volume and fossil-carbon basis; the secondary Mass factor is not a measured density. Hydrogen or another reductant is outside this inventory configuration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Sodium hydroxide (`caustic_scrubber`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Only actual industrial-grade 95–98% NaOH purchased for wet scrubbing or neutralisation; weigh the whole supplied material, assay active fraction and separately meter dissolution water. This identity does not represent an arbitrary caustic solution or prescribe its use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Platinum-rhodium oxidation gauze (`oxidation_gauze`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Platinum-rhodium oxidation gauze
- Flow property / unit: Mass / kg
- Amount rule: Weigh one supplied Pt-Rh gauze formulation; collect supplier composition, precious-metal assay, installed/replaced mass, campaign dates, production over useful life and actual metal recovery. Palladium-containing or other catalyst formulations need separate verified cards.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Cerium-oxide-supported cobalt N2O decomposition catalyst (`n2o_catalyst`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Cerium-oxide-supported cobalt N2O decomposition catalyst
- Flow property / unit: Mass / kg
- Amount rule: Only actual cerium-oxide/cobalt formulation for secondary N2O decomposition: measure delivered composite mass, full composition, life and replaced mass. This historically described configuration is not a default catalyst, recipe or efficiency.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Iron-zeolite tailgas abatement catalyst (`tailgas_catalyst`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Iron-zeolite tailgas abatement catalyst
- Flow property / unit: Mass / kg
- Amount rule: Only an actual iron-zeolite bed: measure the supplied composite, supplier formulation, bed function and lifetime throughput. Different SCR/NSCR formulations require separate atomic inventory and identity checks; equipment labels cannot establish catalyst equivalence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Liquid condensate returned from exported-steam user (`condensate_received`)

This is one independently measured liquid-water return exchange.

- Selected flow: Liquid condensate returned from exported-steam user
- Flow property / unit: Mass / kg
- Amount rule: Only actual condensate received from an identified steam_export user; meter its mass, temperature and enthalpy separately from steam_import returns. Match both physical endpoints and do not call it purchased fresh water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ec-lvic-aaf-2007`

##### Elementary flows

###### air (`air_intake`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: air `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure fresh ambient air admitted across the boundary, including primary oxidation and secondary/bleaching air once each; convert metered volume only with measured conditions/composition and humidity. Retain the air-derived nitrogen/oxygen/water subledger without duplicating an oxygen-resource exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

#### Outputs

##### Product flows

###### Nitric acid (`gate_acid`)

1 kg accepted net aqueous nitric-acid solution at the gate; the selected native flow is industrial-grade 60% nitric acid. Use cp_product to establish actual assay and compatible lot acceptance; 1 kg is whole solution, not 1 kg pure HNO3.

- Selected flow: Nitric acid `bfd3cad4-2d40-4fe1-998c-5ecf1ddd2520`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Recovered steam from nitric-acid reaction heat (`steam_export`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Recovered steam from nitric-acid reaction heat
- Flow property / unit: Mass / kg
- Amount rule: Only measured useful steam crossing to an identified user; keep gross steam mass, quality and pressure, condensate-return linkage and net delivered enthalpy. Internal turbine steam is not this export. No presumed sale, avoided boiler or negative electricity credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Liquid steam condensate returned to external supplier (`condensate_return`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Liquid steam condensate returned to external supplier
- Flow property / unit: Mass / kg
- Amount rule: Only actual imported-steam condensate returned to supplier; measure water mass, temperature and return enthalpy. Do not treat a return as fresh-water export or subtract its mass from the gross steam exchange. Condensate received back from steam_export is an independent opposite-direction exchange when present.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

##### Waste flows

###### Aqueous nitric-acid-bearing wastewater for external treatment (`acidic_wastewater`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Aqueous nitric-acid-bearing wastewater for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Only collected acid-bearing drains/blowdown transferred to treatment: weigh whole liquid, analyse HNO3, nitrate/nitrite, ammoniacal nitrogen, dissolved metals, pH and solids, and identify receiver. Wastewater is not a direct freshwater elementary emission; sulphuric waste acid and manganese-washing water are incompatible identities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Spent platinum-rhodium oxidation gauze for metal recovery (`spent_gauze`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Spent platinum-rhodium oxidation gauze for metal recovery
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual removed gauze; analyse Pt/Rh and contaminants, keep recovery receiver and service charges. No automatic recycled-content or avoided-metal credit; retained gauze in equipment is not an output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Spent cerium-oxide-supported cobalt catalyst (`spent_n2o_catalyst`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Spent cerium-oxide-supported cobalt catalyst
- Flow property / unit: Mass / kg
- Amount rule: Only actually removed matching n2o_catalyst composite; measure mass, metal composition, contamination and recovery/disposal receiver independently of spent_gauze.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### Spent iron-zeolite tailgas catalyst (`spent_tailgas_catalyst`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: Spent iron-zeolite tailgas catalyst
- Flow property / unit: Mass / kg
- Amount rule: Only actual matching iron-zeolite composite sent to a documented receiver; measure composition and mass. A generic power-plant catalyst or spent nickel catalyst is not a confirmed equivalent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

##### Elementary flows

###### nitrogen monoxide (`no_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual NO mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### nitrogen dioxide (`no2_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual NO2 mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### nitrous oxide (`n2o_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual N2O mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### ammonia (`nh3air_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual NH3 mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### nitric acid (`acidair_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: nitric acid `1df287ba-2f10-461e-95ce-7714a3e76ac6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual HNO3 mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### carbon dioxide (fossil) (`co2_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual fossil CO2 mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty. Include only actual fossil-carbon reagent combustion, slip or leaks; upstream fuel emissions stay with the provider dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### carbon monoxide (fossil) (`co_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual fossil CO mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty. Include only actual fossil-carbon reagent combustion, slip or leaks; upstream fuel emissions stay with the provider dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### methane (fossil) (`ch4_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual fossil CH4 mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty. Include only actual fossil-carbon reagent combustion, slip or leaks; upstream fuel emissions stay with the provider dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### water vapour (`waterair_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual water vapour mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty. Reconcile pass-through air and reaction/abatement contributions in the physical gas/water balance; do not infer environmental mass from a GHG-only inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### dinitrogen (`nitrogen_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual N2 mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty. Reconcile pass-through air and reaction/abatement contributions in the physical gas/water balance; do not infer environmental mass from a GHG-only inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

###### oxygen (`oxygenout_air`)

This card represents one boundary exchange. Its applicability and measurement are defined below.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Integrate actual residual O2 mass emitted to outdoor air after installed treatment, with disjoint stack/vent periods and species-specific analysis under cp_emission. No default positive amount or removal efficiency; below-detection results retain censoring and uncertainty. Reconcile pass-through air and reaction/abatement contributions in the physical gas/water balance; do not infer environmental mass from a GHG-only inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998`

The selected air-emission records use outdoor air, unspecified subcompartment. Once the actual stack/ground-level subcompartment is established, verify and use the compatible specific native flow, splitting disjoint releases as needed; do not silently retain an incompatible subcompartment. The air-intake flow is a resource from air, not an emission.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_physical` | foreground boundary | Keep the full physical process graph and conservation ledger separate from the allocated environmental-burden ledger. Allocation never multiplies the actual acid or steam outputs or internal transfer quantities by a burden share. | `ec-ilcd-allocation-2010` |
| `allocation_hierarchy` | foreground boundary | First assign separately metered operations to their functions and document subdivision; for remaining shared burdens justify a determining physical causal relationship per exchange. If that relationship cannot be established, use documented gate economic values with quantity and price for each actual useful co-product over one consistent period. Retain sensitivity, price source, transfer-price treatment and zero/negative-price justification. | `ec-ilcd-allocation-2010` |
| `allocation_exports` | foreground boundary | Exported steam needs a real user, compatible quality and measured net useful delivery; atmospheric venting is an emission, not a co-product. Report gross imports and exports, never presume a substitution credit. A system-expansion study requires separately evidenced displaced function and dataset and must not be combined with allocation for the same credit. Waste handling remains a treatment obligation unless a separately justified co-function exists. | `ec-ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | nitric_manufacture | accepted acid | batch assay/weighing | lot; grade; net solution mass; HNO3 fraction w; carrier-water fraction; impurity fractions; stock; accepted/rejected quantities | Calibrated net weighing or mass flowmeter; representative traceable validated HNO3/water/impurity assay and customer acceptance; reconcile production, loading and inventory | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_material | nitric_manufacture | external material | meter/purchase/assay | row_id; stage; material identity; whole supplied mass; concentration; composition; meter; receipts; stock | Calibrated weighing/metering and receipts; reconcile opening stock plus purchases minus closing stock and returns; keep each material separate | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_volume | nitric_manufacture | gas supply | volume meter and gas assay | row_id; volume; T; absolute P; wet/dry basis; composition; compressibility; provider m3 definition | Record corrected-volume meter calibration and supplier definition; retain an evidenced conversion with original and converted quantities | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_air | nitric_manufacture | ambient air | intake meter/gas balance | primary/secondary air volumes; T; P; humidity; composition; gas analysis; internal recycle | Calibrated intake metering or validated gas balance; distinguish fresh air from recycled gas and include measured humidity | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_energy | nitric_manufacture | purchased electricity | submeter and invoice | kWh; voltage; stage; grid/provider; losses boundary; turbine work; dates | Calibrated purchased-electricity meter and disjoint submeters; reconcile invoice and internal work without netting export credits | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_steam | nitric_manufacture | steam/water transfers | flow and thermodynamic measurements | row_id; sender/receiver; steam mass; T; gauge/absolute P; quality; enthalpy; return mass/enthalpy; provider heat basis | Calibrated flowmeter and state measurements; validated IAPWS-IF97 water/steam thermodynamic method within its applicable domain, with absolute pressure, reference state, h in kJ/kg, unreturned-water endpoints and disjoint losses; match physical endpoints, heat delivered and actual return | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_catalyst | nitric_manufacture | one catalyst formulation | replacement and life record | row_id; supplier grade; composition; metal assay; installed/replaced mass; dates; useful-life acid output; recovery | Weigh each actual supplied formulation and gross return/removal separately; reconcile stored and in-service mass, installation/replacement and metal losses; retain gross physical transfers for the collection period and attribute upstream lifetime burdens separately across evidenced useful-life output | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_waste | nitric_manufacture | one waste stream | transfer note and assay | row_id; wet mass; dry solids; chemical/metal composition; stock; receiver; destination; treatment | Calibrated weighing/metering with representative chemical assay and signed transfer; record whole waste separately from its constituent masses | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_emission | nitric_manufacture | one air species | speciated monitoring and gas-flow record | row_id; CAS/species; source/stack; concentration; actual/standard gas volume; T/P; moisture; duration; detection limit; calibration; bypass; carbon origin | Validated species-specific monitoring with matched gas-flow basis and time integration; include startup/shutdown; separate after-treatment releases from before-treatment diagnostics | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_balance | nitric_manufacture | physical stage transfers | stage and tank balance | time; sender/receiver; whole wet stream mass; component composition; elemental N/O/H/C; N2/H2O reaction terms; stored/in-service stock; air; utilities; disjoint endpoints | Match both ends of each internal link; close total mass and elemental N/O/H and relevant C with stock changes; reconcile N2/H2O species using reaction terms; keep whole streams and nested composition totals distinct from additive exchanges and burden allocation | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |
| cp_allocation | nitric_manufacture | useful coproduct function | submeter, sale and causal study | function; direct burden; shared burden; quantities; useful heat; gate prices; period; physical-causality model; uncertainty | Retain physical ledger plus subdivided burden assignments; demonstrate causal relation or gate values and sensitivity before computing shares | kg; m3; MJ; measured fraction as applicable | Each batch/transfer; continuously for operating meters | Representative complete catalyst campaign including all operating states | One declared train/site and matched upstream/receiver boundary | per 1 kg reference flow | Calibration; originals; assay QA; coverage and uncertainty; reconciled stocks |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_basis | all inventory rows | Divide each measured physical campaign boundary exchange by the same measured accepted net solution output in kg; preserve original quantities, stock adjustments and units. gate_acid is 1 kg. | cp_product; all row protocols | Each exchange per 1 kg reference flow |  |
| solution_components | gate_acid | For each lot: active HNO3 mass = whole solution mass × measured HNO3 mass fraction; carrier water = whole solution mass × measured water fraction; record impurities separately. Sum lot component masses before taking a weighted fraction; do not add components as extra product outputs. | cp_product | Component ledger for the same accepted solution |  |
| mass_concentration | all elementary air output rows | When concentration is mg/m3 on the same gas basis as volume: species kg = sum(concentration × gas volume) / 1000000. For ppmv use a documented molecular/volume conversion at measured T/P/moisture; no unverified normal-volume constant. Normalize only after integration. | cp_emission; cp_product | Species kg per 1 kg reference flow |  |
| steam_enthalpy | steam_import; steam_export; condensate_return; condensate_received | For each matched supply/user pair, delivered useful heat in MJ = [steam kg × supply h − returned-condensate kg × return h − unreturned-water kg × evidenced endpoint h] / 1000 − losses in MJ outside the metered endpoints. h is kJ/kg from measured absolute pressure, temperature and steam quality using a validated IAPWS-IF97 implementation within its water-state domain. Retain all other physical outlets and stock changes, with their energy terms; do not assume equal return mass. Declare each endpoint/reference state and exclude losses already reflected in endpoint measurements. Keep gross physical kg rows, useful heat and compatible provider energy reference separate; unknown state or provider basis blocks that heat/link calculation. | cp_steam; cp_product | Measured net heat ledger; compatible provider linkage | iapws-if97-2012 |
| economic_share | shared environmental burdens | Only residual burdens without demonstrated physical causality: value_i = delivered quantity_i × gate price_i; share_i = value_i / sum(value_j); apply share_i to those burdens only, never physical output. Require positive total value and documented treatment of zero/negative values. | cp_allocation | Allocated burden ledger and sensitivity | ec-ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Resolve actual CAS, mixture composition, route, state, medium and reference property; empty UUID is explicit debt, not proof of absence | Supplier original and exact identity read |
| dq_coverage | all inventory rows | Document applicable/absent/unmeasured separately; add actual omitted atomic exchanges before using a complete dataset claim | cp_balance; equipment and procurement ledger |
| dq_period | all inventory rows | Align mass/energy/emission numerator and solution denominator across production, catalyst replacement, downtime and stocks | Traceable originals; campaign coverage |
| dq_limits | all source-derived statements | Preserve original pressure/concentration/unit/basis and historic/case limits; no universal recipe, yield or emission factor imported | Source locators and foreground protocols |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | foreground boundary | Require one gate_acid quantitative reference, whole-solution kg and compatible measured 60% grade; verify native property/unit chain. No same-UUID intermediate output duplicates. | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_balance` | foreground boundary | Check internal-link equality, total physical mass and elemental N/O/H and relevant C conservation before allocation, including air pass-through, waste and stored/in-service stock. N2/H2O species balances include formation/consumption reaction terms; whole wet streams and nested constituent totals must not be added twice. Investigate residuals within measured uncertainty; no fixed closure tolerance invented. | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_species` | foreground boundary | NO, NO2 and N2O are independent masses; do not add NOx aggregate to NO/NO2 or use assumed NO2-equivalent speciation. Unknown basis remains pending. HNO3 mist is specific HNO3 mass, not automatically PM; nested particulate intervals cannot be cumulatively added. | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_utilities` | foreground boundary | Verify gas m3 conditions and provider reference, actual steam pressure/enthalpy/return and grid voltage; UUID identity alone cannot establish an upstream dataset amount basis. | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_configuration` | foreground boundary | Reject a complete-inventory claim when an actual reagent, catalyst, filter waste, direct liquid emission or packaged component lacks its individual account. Record real abatement, bypass and all waste receivers; successful identity retrieval is not a complete plant dataset. | `ec-lvic-aaf-2007`; `epa-ap42-nitric-1998` |
| `validate_allocation` | foreground boundary | Keep co-product physical quantities unchanged; verify allocated burdens reconcile to the full burden total and exclude duplicate export/substitution credit. Resolve scientific applicability independently before approval. | `ec-ilcd-allocation-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual declared aqueous nitric-acid route and compatible supply grade, utility and treatment configuration |
| excluded_use | CPC-wide methodology claim, mixtures, other production routes, site-factor transfer or assumed BAT performance |
| required_metadata | All reference qualifiers; full physical and allocated ledgers; source locators; provider references; conditional row coverage |
| required_quality_disclosure | Measurement uncertainty, detection limits, campaign coverage, empty identities, provider-basis gaps and independent review status |
| update_trigger | Route, concentration/grade, catalyst, abatement, pressure, utility or receiver changes and new contrary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ec-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007, chapter 3, §§3.2–3.5; printed pp.96–99, 124, 127, 132, 140–141. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf | Route, heat recovery, distinct optional catalysts and treatment; original limits preserved, no plant quantities adopted |
| epa-ap42-nitric-1998 | official_guidance | US EPA, AP-42 §8.8 Nitric Acid, February 1998, §§8.8.2–8.8.3, Figures 8.8-1/2 and table footnotes. https://www.epa.gov/sites/default/files/2020-09/documents/8.8_nitric_acid.pdf | Weak versus high-strength route, stage map and specific air species; historical factors and 100%-acid basis are not defaults |
| yara-nitric-acid | official_guidance | Yara International, Nitric Acid, manufacturer page, section How we produce Nitric Acid. https://www.yara.com/industrial-nitrogen/base-chemicals/nitric-acid/ | Independent producer confirmation of ammonia oxidation/water absorption versus further concentration; no grade certificate or recipe inferred |
| ec-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for LCA—Detailed guidance, first edition March 2010, §7.9.3, PDF pp.277–288 (printed pp.257–268), including §7.9.3 allocation applicability and market-price fallback. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Generic causality/economic-allocation hierarchy only; no nitric-acid or steam allocation factor supplied |
| iapws-if97-2012 | official_guidance | IAPWS R7-97(2012), Revised Release on the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam; §§1–3, 5–8 and 12, including applicable regions, reference convention and uncertainty. https://iapws.org/technical-guidance/release/IF97-Rev.download | Validated pure-water/steam enthalpy method at measured state; no default pressure, steam quantity or plant heat balance |
