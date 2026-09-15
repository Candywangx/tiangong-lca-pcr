---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.barbed-wire-of-iron-or-steel-twisted-hoop-or-single-flat-wire-and-loosely-twisted-doubl-e3371c78
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Barbed wire of iron or steel; twisted hoop or single flat wire, and loosely twisted double wire, of a kind used for fencing, of iron or steel

## 1. Scope and Applicability

This PCR covers factory-gate production of iron or steel barbed fencing wire and the closely defined twisted hoop, single flat wire, and loosely twisted double fencing-wire forms in the product category. It applies to uncoated and zinc-coated products supplied as coils when construction, steel grade, wire diameter, barb geometry, coating state, coating sequence, and sale-unit packaging are declared.

The foreground boundary starts with received steel wire and ends with net saleable barbed-wire coils at the factory gate. It includes forming, twisting, barb application, winding, conditional in-house continuous hot-dip galvanising, and conditional steel strapping. It excludes upstream steelmaking and wire drawing embodied in purchased steel wire, fence mesh, posts, gates, insulated electrical wire, installation, use, maintenance, transport after the factory gate, and end-of-life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.barbed-wire-of-iron-or-steel-twisted-hoop-or-single-flat-wire-and-loosely-twisted-doubl-e3371c78 |
| classification_refs | CPC 3.0: 42946 (exact classification context) |
| covered_products | Iron or steel barbed wire; twisted hoop or single flat wire and loosely twisted double wire made for fencing; uncoated or zinc-coated saleable coils |
| excluded_products | Baling wire; wire mesh, cloth, grill and netting; fence posts and gates; stranded cable; insulated electrical wire; non-ferrous or plastic fencing wire |
| representative_product | Two-strand low-carbon steel barbed fencing wire supplied as a factory-gate coil; coating state is declared and does not define a separate PCR identity |
| production_route | Received steel wire is formed, twisted, barbed and wound; continuous hot-dip galvanising is included only when performed inside the foreground boundary |
| market_state | Dry, saleable factory-gate coil, with net product mass separated from packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide iron or steel wire configured as a barbed or specified twisted fencing barrier component |
| How much | 1,000 kg net barbed-wire product |
| How well | Meets the declared wire construction, steel grade, diameter, tensile or strength class, barb geometry and spacing, coating specification, and applicable purchaser specification |
| How long or cycle | One production reporting period covering at least 12 consecutive months or a documented representative campaign when annual data are unavailable |
| reference_flow_link | `barbed_wire_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net product |
| Reference product flow | Barbed wire of iron or steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wire construction; iron or steel grade and carbon class; line-wire and barb-wire diameters; tensile or strength class; barb geometry and spacing; coating material and coating mass or thickness; coating sequence and whether coating is purchased or in-house; coil mass; packaging components; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and mass-normalized material rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure dry saleable barbed wire net of pallets and strapping; normalize all inventory rows to 1,000 kg net product. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity by source and voltage; convert kWh to MJ using 1 kWh = 3.6 MJ and do not include upstream electricity emissions as direct foreground emissions. |
| `gas_reference_conditions` | natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State billing or standard temperature and pressure and convert measured volume to the declared reference conditions before normalization. |
| `water_mass_conversion` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass measurement; when water is metered by volume, retain the volume record and use a documented density at the metering conditions to calculate mass. |
| `chemical_solution_basis` | hydrochloric acid and flux chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report delivered solution or product mass and separately declare concentration and recycled content; do not mix active-substance mass with solution mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Steel wire coils received at the reporting site with steel grade, wire diameter, coating state, supplier, and delivered mass documented |
| starting_condition_role | Foreground gate input whose upstream dataset carries steelmaking, rolling, drawing, and any coating completed before receipt |
| product_classification_scope | The specific iron-or-steel barbed and twisted fencing-wire forms defined by CPC 42946; nearby mesh, cable, baling-wire, post, and gate products are outside scope |
| recursive_input_rule | Externally sourced barbed wire used as rework or feed is recorded as a separately disclosed secondary product input with its own upstream dataset; do not recurse into this PCR or merge it with the steel-wire row |
| upstream_dataset_requirement | Use a supplier-specific or representative steel-wire dataset consistent with declared grade, diameter, coating state, geography, technology, and delivery boundary; purchased coated wire must already include its coating burdens |
| disclosure | Declare forming route, number and form of strands, barb geometry and spacing, coating route and sequence, in-house versus purchased coating, product yield, scrap destination, packaging, site geography, technology, and reporting period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground product system | Include all on-site operations from receipt of steel wire through forming, twisting, barb application, winding, conditional coating, inspection, and sale-unit strapping; stop at the factory gate. | `un-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022` |
| `boundary_coating_route` | coated products | Include continuous hot-dip galvanising only when it occurs on-site; when pre-coated wire is purchased, place coating upstream and prohibit double counting. | `eu-jrc-fmp-bref-2022` |
| `boundary_exclusions` | downstream life cycle | Exclude fence posts, mesh, gates, installation, use, maintenance, downstream transport, and end-of-life unless a study explicitly adds them outside this factory-gate dataset. | `un-cpc-3-0-structure-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `barbed_wire_manufacturing` | Barbed-wire forming, conditional galvanising, winding and dispatch preparation | required | Always include forming, twisting/barbing and winding; instantiate coating and strapping rows only when their declared conditions apply | foreground production | 1,000 kg net saleable barbed wire at factory gate |

### Process: Barbed-wire forming, conditional galvanising, winding and dispatch preparation (`barbed_wire_manufacturing`)

#### Inputs

##### Product flows

###### Received steel wire (`steel_wire`)

Steel wire crosses the foreground gate as the metal feed for line strands and barbs. Pool line-wire and barb-wire mass only when they share the same TianGong identity, grade and coating state; otherwise instantiate the row separately in the dataset.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Net steel-wire mass issued to the production route, reconciled from receipt, inventory and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Purchased electricity (`electricity`)

Record electricity metered or defensibly allocated to forming, twisting, winding, ventilation, and in-house galvanising auxiliaries. Keep upstream generation emissions in the electricity supply dataset.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered purchased electricity converted to MJ and allocated to the declared product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_water`
- Sources: `eu-jrc-fmp-bref-2022`

###### Process water (`process_water`)

Include process water crossing the site boundary for galvanising rinses, bath makeup and cooling only when these operations are inside the foreground route. Exclude closed-loop recirculation from gross input but record makeup and purge.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered process-water makeup attributable to the declared production route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_water`
- Sources: `eu-jrc-fmp-bref-2022`

###### Hydrochloric acid for in-house pickling (`hydrochloric_acid`)

Include hydrochloric acid only when an in-house continuous galvanising line pickles wire. Declare delivered concentration and subtract returned or recovered solution without converting solution mass to pure HCl mass.

- Selected flow: Hydrochloric Acid `964d524a-87f5-4b63-a856-2e31a8f21b67`
- Flow property / unit: Mass / kg
- Amount rule: Net delivered hydrochloric-acid solution consumed by the applicable pickling step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Zinc metal for in-house galvanising (`zinc_metal`)

Include metallic zinc added to the molten bath only for in-house zinc coating. Record alloy grade and distinguish gross additions from recovered zinc returned to the bath.

- Selected flow: Zinc metal
- Flow property / unit: Mass / kg
- Amount rule: Net zinc-metal additions attributable to the declared coated product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Zinc chloride for the flux bath (`zinc_chloride`)

Include zinc chloride only when it is added to the in-house aqueous galvanising flux bath. Record product purity and net additions rather than the circulating bath inventory.

- Selected flow: Zinc chloride `e5d10a05-c796-4974-9871-fad1bfb5ddb8`
- Flow property / unit: Mass / kg
- Amount rule: Net zinc-chloride product added to the applicable flux bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Ammonium chloride for the flux bath (`ammonium_chloride`)

Include ammonium chloride only when it is added to the in-house zinc-chloride/ammonium-chloride flux bath. Record product purity and net additions separately from zinc chloride.

- Selected flow: Ammonium Chloride `0d0e3c27-1f93-4dc1-80d0-392a3226cd4f`
- Flow property / unit: Mass / kg
- Amount rule: Net ammonium-chloride product added to the applicable flux bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Natural gas for the zinc bath (`natural_gas`)

Include gaseous natural gas only when it directly heats the in-house zinc bath or associated dryer. State volume reference conditions and exclude gas used by unrelated site operations.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or sub-meter-allocated natural gas consumed by applicable galvanising equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_water`
- Sources: `eu-jrc-fmp-bref-2022`

###### Steel strapping (`steel_strapping`)

Include steel strapping only when it leaves the factory with the saleable coil. Do not include reusable handling straps or pallets in the net reference-product mass.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass / kg
- Amount rule: Issued mass of non-returnable steel strapping shipped with the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable barbed wire (`barbed_wire_product`)

This is the reference product leaving the foreground system. Measure only conforming dry product and declare construction, dimensions, strength class, coating and coil mass.

- Selected flow: Barbed wire of iron or steel
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of conforming saleable barbed-wire coils
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net barbed-wire product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Steel wire scrap (`steel_wire_scrap`)

Record offcuts, start-up wire, rejected barb sections and other steel-wire scrap leaving the foreground route. Retain destination and recovery status without subtracting scrap from gross steel-wire input.

- Selected flow: Waste steel wire `89e89b90-d82e-4631-b2ab-cd3c5986ca0e`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of steel-wire scrap leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste`
- Sources:

###### Zinc dross (`zinc_dross`)

Include zinc dross removed from the coating bath only for in-house galvanising. Record recycled quantities as a waste output with destination; do not credit recycling inside this factory-gate inventory.

- Selected flow: Zinc dross
- Flow property / unit: Mass / kg
- Amount rule: Measured zinc-dross mass removed from the applicable bath and leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste`
- Sources: `eu-jrc-fmp-bref-2022`

###### Acidic iron-bearing rinse wastewater (`acidic_rinse_wastewater`)

Include the acidic aqueous waste stream discharged to on-site or off-site treatment from in-house pickling and rinsing. Report it before treatment and do not combine it with unrelated sanitary or cooling-water discharges.

- Selected flow: Acidic iron-bearing rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-mass-balanced wastewater sent from applicable pickling and rinsing to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil`)

Record only direct fossil carbon dioxide from natural-gas combustion in foreground galvanising equipment. Exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Facility-recorded direct fossil carbon-dioxide emission attributable to applicable foreground natural-gas combustion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house galvanising
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources:

###### Hydrogen chloride to air (`hydrogen_chloride_to_air`)

Include hydrogen chloride emitted from in-house hydrochloric-acid pickling after the declared abatement system. Use stack measurement or a documented site mass balance and do not combine it with other acid gases.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or facility-recorded post-abatement hydrogen-chloride emission from applicable pickling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net barbed-wire product requiring in-house hydrochloric-acid pickling
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared site operations | Prefer subdivision, sub-metering, production orders, and material issues that assign forming and galvanising exchanges directly to the declared product route. | |
| `allocation_shared_operations` | remaining shared exchanges | When subdivision is not feasible, allocate shared exchanges by net mass of conforming wire products only after documenting why mass reflects the physical relationship; disclose the allocation fraction and sensitivity. | |
| `allocation_scrap_and_dross` | steel-wire scrap and zinc dross | Report each residue at measured mass and destination without subtracting it from gross inputs or applying an avoided-burden credit inside this factory-gate dataset. | `eu-jrc-fmp-bref-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | `barbed_wire_manufacturing` | steel wire, acids, zinc, flux salts and steel strapping inputs | purchase, goods receipt, issue, return and stock records | material identity; supplier; batch; delivered state; concentration or grade; opening stock; receipts; issues; returns; closing stock; mass; applicable route | Reconcile net consumption as opening stock plus receipts minus returns and closing stock; link issues to production orders | kg | monthly with annual reconciliation | at least 12 consecutive months or documented representative campaign | all lines and stores serving the declared product at the reporting site | Sum route-attributable net consumption and normalize to net conforming product mass | calibrated scales; inventory reconciliation; supplier certificates; batch and production-order linkage |
| `cp_energy_and_water` | `barbed_wire_manufacturing` | electricity, natural gas and process water | utility meter, sub-meter and invoice records | meter id; opening and closing readings; unit; reference conditions for gas; allocation driver; downtime; product route; output mass | Prefer dedicated meters; otherwise reconcile site totals and allocate only documented route consumption | MJ, m3, kg | monthly | at least 12 consecutive months or documented representative campaign | equipment and utilities inside the declared foreground boundary | Convert units under Section 4, sum eligible consumption, and normalize to net conforming product mass | meter calibration; invoices; site reconciliation; allocation worksheet |
| `cp_product_and_waste` | `barbed_wire_manufacturing` | reference product, steel-wire scrap, zinc dross and acidic rinse wastewater | production, scale, weighbridge, tank and waste-transfer records | product code; construction; coating state; gross mass; tare; net mass; reject mass; waste identity; destination; recovery status; wastewater volume or mass; density | Weigh products and solid residues; meter or tank-balance wastewater before treatment; reconcile output and reject records | kg | per batch or shipment, aggregated monthly | same period as inputs | all forming, galvanising and dispatch operations in scope | Sum each atomic output separately and normalize to 1,000 kg net conforming product | calibrated scales; tare records; waste manifests; tank calibration; production reconciliation |
| `cp_air_emissions` | `barbed_wire_manufacturing` | direct fossil carbon dioxide and hydrogen chloride | emissions inventory, fuel record and stack-test record | emission identity; source equipment; measurement period; measured concentration and flow where applicable; reported mass; abatement status; allocation basis | Use facility-verified direct-emission records; for HCl prefer representative post-abatement stack measurement linked to operating hours | kg | per test and monthly or annual emissions reconciliation | representative tests plus the same production period as the inventory | only foreground combustion and pickling emission points | Sum direct emissions attributable to the route and normalize to net conforming product mass | stack-test report; instrument calibration; fuel and operating-hour reconciliation; emissions approval record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_consumption` | product and packaging inputs | opening stock + receipts - returns - closing stock; assign only documented production-order issues | stock, receipt, return and issue records | net kg of each atomic material input per reporting period | |
| `calc_reference_normalization` | every inventory row | row reporting-period amount / net conforming product mass × 1,000 kg | reconciled row amount; net conforming barbed-wire output | row amount per 1,000 kg reference product | |
| `calc_route_exclusion` | conditional coating and packaging rows | set the row to not applicable only when route records demonstrate the operation or shipped component is absent; do not enter an arbitrary zero | route declaration; coating sequence; purchase specification; packaging bill of materials | documented applicability status for each conditional row | `eu-jrc-fmp-bref-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Match production records to declared construction, material, diameters, barb geometry, strength class, coating and coil mass; segregate nonconforming products. | product specification; inspection record; production order; supplier or customer certificate |
| `dq_completeness` | all inventory rows | Cover at least 95% of production days in the reporting period and reconcile omitted days, stock changes, rework and abnormal operations. | coverage calculation; exception log; inventory reconciliation |
| `dq_route_consistency` | coating-related rows | Demonstrate whether coating was purchased upstream or performed in-house and apply all applicable acid, flux, zinc, water, fuel, residue and emission rows consistently. | route diagram; purchase specification; bath log; meter and waste records |
| `dq_measurement` | meters and scales | Use calibrated or verified instruments and document any allocation from shared meters, including sensitivity for material shared loads. | calibration certificates; meter map; allocation worksheet |
| `dq_temporal_geographic` | published dataset | Report site geography, technology, data year, capacity utilisation and representativeness; do not combine sites without retaining site-level records and weighting. | site metadata; annual production report; site-level aggregation file |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Reject a data package that lacks any required qualifier or mixes barbed wire with baling wire, mesh, posts, gates, cable, or non-metal fencing products. | `un-cpc-3-0-structure-2025` |
| `validate_mass_reconciliation` | steel and zinc material balance | Confirm that issued steel and zinc are reconciled against conforming product, stock change, scrap, dross and documented process losses; investigate unexplained imbalance. | |
| `validate_coating_consistency` | coated product route | Require one declared coating sequence and verify that pre-coated purchased wire does not also receive upstream coating burdens in the foreground galvanising rows. | `eu-jrc-fmp-bref-2022` |
| `validate_direct_emissions` | elementary outputs | Confirm direct fossil carbon dioxide includes foreground combustion only and hydrogen chloride is specific to applicable post-abatement pickling emissions. | `eu-jrc-fmp-bref-2022` |
| `validate_inventory_completeness` | reporting period | Reconcile product output, materials, utilities, wastes and direct emissions to the same site, route and time period; disclose exclusions and data gaps. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` |
| downstream_use | Factory-gate background input for `process` and `lifecyclemodel` models that consume a declared barbed-wire coil |
| allowed_use | Studies requiring iron or steel barbed or specified twisted fencing wire when construction, grade, dimensions, strength, coating, geography, technology and time period are compatible |
| excluded_use | Baling wire, wire mesh or netting, fence posts or gates, stranded cable, insulated wire, non-ferrous or plastic fencing products, installed fence systems, or cradle-to-grave claims without additional life-cycle stages |
| required_metadata | canonical PCR id; product construction; steel grade; line-wire and barb-wire diameters; strength class; barb geometry and spacing; coating material and mass or thickness; coating sequence; net coil mass; packaging; site geography; technology; reporting period; upstream steel-wire dataset |
| required_quality_disclosure | foreground coverage; meter and scale quality; route applicability; allocation fractions; material and product reconciliation; direct-emission method; unresolved data and UUID identities; representativeness limitations |
| update_trigger | Change in steel grade or wire construction, forming technology, coating material or sequence, energy source, abatement, packaging, site geography, allocation method, or data older than five years |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, CPC 42946. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official product identity, classification boundary, covered fencing-wire forms and exclusions from adjacent product categories |
| `un-cpc-v1-1-zh-2008` | official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, Series M No. 77/Ver.1.1, entry 42946. https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Verified professional Chinese terminology for the unchanged barbed- and twisted-fencing-wire product identity |
| `eu-jrc-fmp-bref-2022` | official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, 2022. DOI: 10.2760/196475; https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 (retrieved 2026-09-05) | Wire-to-finished-product boundary, wire drawing context, continuous wire galvanising sequence, hydrochloric-acid pickling, zinc-chloride/ammonium-chloride flux, zinc bath heating, water use, hydrogen-chloride control, wastewater and zinc-dross process decomposition |
