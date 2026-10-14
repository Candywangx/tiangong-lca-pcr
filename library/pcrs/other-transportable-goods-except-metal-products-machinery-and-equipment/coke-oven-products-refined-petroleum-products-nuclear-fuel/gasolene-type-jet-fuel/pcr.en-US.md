---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gasolene-type-jet-fuel
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Terminal-blended gasoline-type aviation turbine fuel (Jet B)

## 1. Scope and Applicability

This PCR covers terminal manufacture of petroleum-derived gasoline-type (wide-cut) aviation turbine fuel, using qualified kerosene and naphtha or a documented gasoline component, followed by the stated additive treatment, quality release, storage and bulk loading. Jet B is the representative grade. The boundary starts with receipt of qualified refinery components and ends with net conforming fuel passing the terminal dispatch meter. Component refining remains in linked upstream datasets. A refinery may use this method for its separated blending unit only, with complete upstream refinery links; it may not claim this is a stand-alone integrated-refinery inventory.

The selected route uses electric pumping and blending, without on-site fuel combustion, steam supply, thermal conversion or wastewater treatment. Drainage and residuals go to declared off-site treatment. The explicitly covered additive choices are Stadis 450 and, where specified, neat 2,6-di-tert-butyl-4-methylphenol and Type III diethylene glycol monomethyl ether. Other additive preparations, corrosion/lubricity packages, leak tracers, alternative cartridge media, new utility types or on-site emission-generating treatment need additional source-supported atomic exchanges before this method can establish completeness. Ingredient identity alone cannot establish specification approval.

Exclude kerosene-type Jet A, Jet A-1, JP-5 and JP-8; piston-engine aviation gasoline; road gasoline as a finished reference product; neat synthetic or bio-derived turbine fuels; upstream refinery manufacture represented as unsupported foreground recipes; downstream distribution, airport operations, aircraft use and combustion. Historical JP-4/AVTAG manufacture is not covered by the Jet B additive and certification route. This PCR defines LCA manufacturing records; it does not certify flight use, aircraft approval or safe handling.

UN CPC 3.0 (30 June 2025, printed/PDF p.155) describes 33320 as turbine fuel blended from kerosene and gasoline/naphtha, with the stated 100–250°C distillation interval, at most 25% aromatics by volume, and 13.7–20.6 kPa vapour pressure. These are classification descriptors, not ingredient fractions. Jet B certification follows the selected edition of CAN/CGSB-3.22, not automatic CPC equivalence: the 2012 edition reaffirmed September 2022 has its own test-specific limits. Record actual properties and methods to determine classification separately; do not force values to fit a label. Only CPC-conforming batches within this terminal route support a narrower 33320 mapping. [cpc3-2025; cgsb-jetb-2022]

Shell's civil and military grade pages, both dated 20 November 2025 and read 12 October 2026, describe limited cold-region Jet B availability and the 1990s phase-out of JP-4 from USAF use, with little remaining production reported by that supplier. These are dated supplier statements, not a 2026 market census or proof of a particular plant's operation. The Canadian 2022 reaffirmation establishes a specification, not actual sales. Require producer, country, manufacturing date and actual contract/certificate for every current or historical dataset. Shell's civil page contains older standard references; use the government standard for specification authority. [shell-civil-2025; shell-military-2025]

The government catalogue checked on 13 October 2026 still lists CAN/CGSB-3.22 as September 2012, reaffirmed September 2022, with no amendment listed. It also states that CGSB ceased standards-development and conformity-assessment services on 1 April 2026 while the catalogue remains accessible. This is the identified specification evidence, not a manufacturing census. Historical batches must retain their actual applicable edition and contract; re-check catalogue status and applicable amendments when developing a later dataset. [cgsb-catalogue-2026]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gasolene-type-jet-fuel |
| classification_refs | CPC 3.0:33320 Gasolene-type jet fuel; narrower; acceptance separate |
| covered_products | Petroleum wide-cut Jet B from the terminal route above |
| excluded_products | Kerosene-type jet fuel, aviation gasoline, historical JP-4 route and other exclusions above |
| representative_product | Homogeneous released batch to the declared Jet B specification edition |
| production_route | Qualified refinery component receipt → electric blending and stated additive dosing → testing/release → storage/loading |
| market_state | Bulk liquid fuel at dispatch meter; historical grade does not establish current supply |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming wide-cut aviation turbine fuel dispatched at terminal gate |
| How much | 1 kg net complete conforming fuel, including actual retained additives and carriers |
| How well | Declared Jet B edition, quality certificate, actual composition and release conditions |
| How long or cycle | One declared reporting period or batch |
| reference_flow_link | out_fuel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fuel `7ea177ac-eb74-4551-99ea-d015070bfb50` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Jet B grade and specification edition; producer/geography/manufacturing year; actual recipe and petroleum origin; additive grade/carrier/cumulative dosing; batch certificate; density temperature and calorific-value bases; upstream refinery route/allocation; voltage; dispatch boundary; actual CPC property assessment |

Required qualifiers must appear in dataset metadata, reference exchange or process notes; missing qualifiers make the reference definition incomplete. The broad Fuel identity positively describes energy-releasing materials including petroleum fuels, on a mass basis. Its full name and comment allow this petroleum Jet B subset; route, CAS, formulation, grade and supply location are unspecified, rather than conflicting fixed conditions. The CPC label alone is not confirmation of Jet B identity. The reference uses this broad identity only with the required batch qualifiers and complete fuel mass; it is not an exact Jet B-grade record and establishes no recipe, current supply or background provider.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report all inventory rows per 1 kg reference flow; net dispatch includes all retained components, additives and carriers in the complete conforming fuel; excludes containers, packaging, free separated water and unreleased fuel. |
| density_basis | liquid material | Mass | kg | Convert liquid volume using measured same-batch density rho(T) at the same temperature basis; record sample/state, actual or corrected volume, temperature, pressure where material, correction method and uncertainty. Do not multiply tank volume at one temperature by density at another; no default density. |
| electricity_basis | in_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain meter kWh; 1 kWh = 3.6 MJ; the database property is an electricity quantity convention, not fuel calorific value. |
| gas_measurement | out_benzene_air,out_hexane_air,out_toluene_air,out_ethylbenzene_air,out_oxylene_air,out_mxylene_air,out_pxylene_air | Mass | kg | Record gas sampling point and period, absolute pressure, temperature, compressibility Z, actual/reference volume, dry/wet basis, humidity, species fraction basis and molecular mass. Convert only consistent measured bases; an ideal-gas Z or a reference temperature/pressure requires documented applicability, never an automatic default. |
| calorific_basis | reference product | Mass | kg | Keep net/gross calorific basis, sample composition/water, temperature and test/calculation method with QA. Specification minima are acceptance limits, not measured fuel calorific values or conversion defaults. |
| substance_basis | all elementary outputs | Mass | kg | Retain species, CAS, compartment and monitoring definition; VOC totals and speciated rows are not summed twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Verified refinery components and stated additives at terminal receipt boundary |
| starting_condition_role | Foreground record start; earlier production and transport require complete upstream links |
| product_classification_scope | Only this route with verified CPC properties supports a narrower 33320 suggestion |
| recursive_input_rule | Purchased same-category finished fuel needs its own product-input row and upstream dataset, without recursive expansion; it is not covered automatically by this component-blending inventory |
| upstream_dataset_requirement | Components, additives, carriers, cartridges, water, electricity and off-site waste treatment; refinery providers retain technology and co-product allocation evidence |
| disclosure | Period/batches, component lineage, site diagram, internal rework, losses, water/carbon/hydrogen/sulfur/energy ledgers, all packaging/containers, maintenance, returns, source/native/scaled amounts, upstream boundaries and gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | upstream links | Refinery intermediates may enter several product pools, and actual unit schemes depend on feed and product slate. Obtain distillation, treatment, hydrogen, heat and sulfur-recovery coverage from real component providers; Jet B properties do not prove all units operate. For a same-site preceding unit, retain an actual handoff with producer/receiver, native flow identity, amount, period, composition/state and both-end reconciliation; an internal component is not a burden-free purchase. Link each provider by exact process identity and retained dataset version, reference exchange, technology/geography/year, native property/unit and unscaled amount. Preserve conversion and scaled model amount and detect omitted or duplicated upstream stages. A finished kerosene-type jet-fuel provider is not a wide-cut finished-fuel provider; only verified component supply may link. | ref-bref-2015; ap42-refining-2015 |
| boundary_ledgers | physical system | Retain the unallocated physical map: receipt → blending/dosing → testing → storage → dispatch. Internal rework and recovered vapour returns have equal quantities at both ends and are not extra external emissions. Preserve inventories, external liquid/gas/solid outputs, wastewater and water/carbon/sulfur/energy ledgers. Off-site wastewater transfer is not a local water emission. | ref-bref-2015; ap42-refining-2015 |
| boundary_support | supporting physical exchanges | Preserve a complete ledger of each actual additive drum/bottle/liner/closure, pallet and other packaging, sample container, returnable transport container, cleaning material, maintenance lubricant, replacement seal/cartridge and discarded counterpart. Distinguish contents from whole container tare and dry cartridge construction from retained fuel/water. Track supplier, receiver, external/internal status, reuse cycles, opening/closing stocks, damage, returns and actual quantities. Each external material/waste needs its own physically specific atomic exchange and exact provider/treatment before completeness is claimed; durable equipment and transport assets follow an explicit consistent inclusion policy. Do not invent a packaging material or hide it in additive/fuel mass. | pcr-balance-method |
| boundary_route | foreground | This route has no on-site boiler, steam, combustion vapour destruction or wastewater treatment. If actually present, source-supported units and atomic flows must be added before use; electricity cannot stand in for them or justify zero emissions. Any real extension records biogenic CO2, fossil CO2 and each emitted substance separately. | ap42-refining-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| terminal_manufacture | Terminal manufacture | required | Route above | foreground | out_fuel |

Receipt, blending, dosing, testing, storage and loading form one foreground unit; retain stage meters separately without duplicating the finished reference output.

### Process: Terminal manufacture (`terminal_manufacture`)

#### Inputs

##### Product flows

###### Kerosene (`in_kerosene`)

Qualified petroleum kerosene blending component, with actual mixture composition, CAS identity, treatment route, batch certificate and provider. It is not a single molecular substance or finished kerosene-type jet fuel. Hydrotreating and fixed calorific properties require real supplier evidence rather than a default component recipe.

- Selected flow: Petroleum kerosene blending component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_material and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cpc3-2025`

###### naphtha (`in_naphtha`)

Qualified petroleum naphtha component, only when the actual recipe uses it. Distillation, sulfur and additive carry-over must be recorded; no fixed naphtha fraction.

- Selected flow: naphtha `4f19ca0d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_material and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cpc3-2025`

###### Gasoline (`in_gasoline`)

Only the documented gasoline blend component, when used instead of or alongside naphtha. Verify oxygenates, lead and other constituents against the governing turbine-fuel specification; a road-fuel provider cannot be assumed suitable.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_material and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cpc3-2025`

###### Alternating current (`in_electricity`)

Metered CN grid-average consumption-mix electricity delivered to the user below 1 kV for pumps, blending, testing, storage and loading. This selected identity is limited to supply in China; a terminal elsewhere requires a matching geography identity and provider before use. Retain supplier, year, voltage, reference quantity and loss boundary; higher-voltage supply requires a different identity and explicit transformation link. This condition does not establish that Jet B is actually produced at any Chinese terminal.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual quantity under cp_energy and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ref-bref-2015`

###### de-ionised water (`in_water`)

Only actual de-ionised laboratory or cleaning water. Record water quality and mass; this is purchased product water, not abstraction from the environment.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_material and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ap42-refining-2015`

###### Stadis 450 static dissipator additive formulation (`in_sda`)

One supplied Stadis 450 preparation, with its actual supplier formulation, carrier and dose. Do not treat the whole formulation as neat polymer or infer its confidential composition; include carry-over and cumulative dosing.

- Selected flow: Stadis 450 static dissipator additive formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_additive and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive`
- Sources: `cgsb-jetb-2022`

###### 2,6-di-tert-butyl-4-methylphenol (`in_bht`)

Only if the selected recipe uses this specific neat antioxidant, CAS 128-37-0. Other approved antioxidants and solvent formulations require their own atomic rows and identity review; no default dose.

- Selected flow: 2,6-di-tert-butyl-4-methylphenol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_additive and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive`
- Sources: `cgsb-jetb-2022`; `nist-additive-identity`

###### Diethylene glycol monomethyl ether (`in_diegme`)

Only purchaser-specified Type III icing inhibitor, CAS 111-77-3, with grade and purity certificates. Ethylene glycol dimethyl ether is a different molecule and cannot replace it.

- Selected flow: Diethylene glycol monomethyl ether
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_additive and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive`
- Sources: `cgsb-jetb-2022`; `nist-additive-identity`

###### Polypropylene fuel filter cartridge (`in_filter`)

One actual polypropylene filter cartridge consumed during fuel conditioning. Record model, dry mass of the whole cartridge including media, support/core, housing and seals, and service campaign; avoid re-counting those parts in maintenance rows; if its actual media differ, this row is inapplicable and the true cartridge needs identity review.

- Selected flow: Polypropylene fuel filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_material and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ap42-refining-2015`

#### Outputs

##### Product flows

###### Fuel (`out_fuel`)

The sole reference output is finished petroleum wide-cut turbine fuel released to the dispatch meter. The database display is broad; this PCR restricts it to the declared Jet B batch, specification, recipe and petroleum origin. It does not license any generic fuel provider.

- Selected flow: Fuel `7ea177ac-eb74-4551-99ea-d015070bfb50`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `cpc3-2025`

##### Waste flows

###### Waste oil (`out_offspec`)

Only rejected wide-cut petroleum fuel actually leaving for waste treatment, collected at plant before separately linked transport and treatment. Internal rework is an internal loop; off-spec fuel sold as a real product needs a separate product identity and co-product analysis. Record contamination, waste status and receiver.

- Selected flow: Waste oil `e620bc79-43f0-41a8-9589-9b5fe50ffef2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_waste and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ap42-refining-2015`

###### Petroleum-contaminated tank drainage wastewater (`out_wastewater`)

Actual aqueous tank-bottom drainage or cleaning wastewater transferred to off-site treatment. Record wet mass, water/oil fractions, dissolved constituents and receiving plant; manganese-slag wash water and oil sludge are not substitutes.

- Selected flow: Petroleum-contaminated tank drainage wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_waste and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ap42-refining-2015`

###### Petroleum tank-bottom sludge (`out_sludge`)

Actual solid/semi-solid tank sediment, excluding separately measured aqueous drainage. Record oil, water, dry solids, sulfur, contamination and treatment. A mechanically separated sludge with predefined composition is not assumed equivalent.

- Selected flow: Petroleum tank-bottom sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_waste and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ap42-refining-2015`

###### Spent polypropylene fuel filter cartridge with retained petroleum (`out_filter`)

One discarded whole filter cartridge with measured retained fuel/water, captured solids and dry mass of all media, support/core, housing and seals present in that cartridge. It is not loose polypropylene scrap. Account for captured particulate solids here, separately from particles escaping to the environment.

- Selected flow: Spent polypropylene fuel filter cartridge with retained petroleum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_waste and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ap42-refining-2015`

##### Elementary flows

###### benzene (`out_benzene_air`)

Only measured or evidence-based speciated benzene, CAS 71-43-2, emitted beyond the terminal boundary to outdoor air, unspecified subcompartment. Record storage, transfer, loading and leak sources separately; do not add it again as a VOC total.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_air and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ap42-refining-2015`

###### hexane (`out_hexane_air`)

Only measured or evidence-based speciated hexane, CAS 110-54-3, emitted beyond the terminal boundary to outdoor air, unspecified subcompartment. Record storage, transfer, loading and leak sources separately; do not add it again as a VOC total.

- Selected flow: hexane `08a91e70-3ddc-11dd-947d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_air and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ap42-refining-2015`

###### toluene (`out_toluene_air`)

Only measured or evidence-based speciated toluene, CAS 108-88-3, emitted beyond the terminal boundary to outdoor air, unspecified subcompartment. Record storage, transfer, loading and leak sources separately; do not add it again as a VOC total.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_air and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ap42-refining-2015`

###### ethyl benzene (`out_ethylbenzene_air`)

Only measured or evidence-based speciated ethyl benzene, CAS 100-41-4, emitted beyond the terminal boundary to outdoor air, unspecified subcompartment. Record storage, transfer, loading and leak sources separately; do not add it again as a VOC total.

- Selected flow: ethyl benzene `fe0acd60-3ddc-11dd-a2eb-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_air and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ap42-refining-2015`

###### o-xylene (`out_oxylene_air`)

Only measured or evidence-based speciated o-xylene, CAS 95-47-6, emitted beyond the terminal boundary to outdoor air, unspecified subcompartment. Record storage, transfer, loading and leak sources separately; do not add it again as a VOC total.

- Selected flow: o-xylene `08a91e70-3ddc-11dd-974c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_air and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ap42-refining-2015`

###### m-xylene (`out_mxylene_air`)

Only measured or evidence-based speciated m-xylene, CAS 108-38-3, emitted beyond the terminal boundary to outdoor air, unspecified subcompartment. Record storage, transfer, loading and leak sources separately; do not add it again as a VOC total.

- Selected flow: m-xylene `08a91e70-3ddc-11dd-96c1-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_air and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ap42-refining-2015`

###### p-xylene (`out_pxylene_air`)

Only measured or evidence-based speciated p-xylene, CAS 106-42-3, emitted beyond the terminal boundary to outdoor air, unspecified subcompartment. Record storage, transfer, loading and leak sources separately; do not add it again as a VOC total.

- Selected flow: p-xylene `fe0acd60-3ddc-11dd-ab7b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect actual quantity under cp_air and normalize by net dispatched fuel mass to per 1 kg reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ap42-refining-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | terminal batches | Use measured stage/batch records first. Attribute shared electricity, water and consumables through a site-supported driver such as metered pumping energy or equipment operating time; demonstrate the relation and disclose other serviced loads; no default shares. | ref-bref-2015 |
| allocation_refinery | component providers | Each component provider supplies actual multi-product refinery units, allocation policy, causal evidence, same-period outputs/prices if used and factor reconciliation. Retain all gas/liquid/solid products and water/carbon/sulfur/energy interfaces with the unallocated ledger. An unsupported provider remains a linkage gap; product specifications cannot reconstruct it. | ref-bref-2015; ap42-refining-2015 |
| allocation_physical | all balances | Keep allocated environmental burdens separate from the physical process diagram. Do not multiply actual co-product output, internal transfer or rework quantities by allocation shares. A waste does not become a co-product merely because it has heating value; actual sale and acceptance conditions must support the change. Economic allocation, if justified after considering subdivision and physical causation, retains same-period net quantities, actual prices, currency, price date/basis, transport/tax treatment and sensitivity. Monetary value is not a mass or energy conversion. | ref-bref-2015 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | terminal_manufacture | component/water/cartridge | foreground_record | batch_id; supplier; material; grade; mass; volume; temperature; pressure; density; sample_id; composition; H2O; source_document; provider_process_id; provider_version; native_reference_amount; native_property_unit; conversion; scaled_amount; opening_inventory; closing_inventory; returns | Calibrated mass meter/scale; tank-volume and same-batch density reconciliation; qualified certificates | kg | Each batch/transfer and period closure | Complete declared reporting period | All covered terminal stages | per 1 kg reference flow | calibration; invoices; certificates |
| cp_additive | terminal_manufacture | additive dosing | foreground_record | batch_id; additive SKU; composition; carrier; purity; dose; cumulative carry-over; recipe; meter; whole_formulation_mass; active_mass; carrier_mass; container_tare; volume_temperature; supplier_source; native_and_scaled_amounts | Supplier certificate, issue weighing and matched fuel/additive transfer records; whole supplied formulation enters once, including carrier, while active ingredient is an analytical subledger and not a second exchange | kg | Each batch/transfer and period closure | Complete declared reporting period | All covered terminal stages | per 1 kg reference flow | supplier qualification; batch dose reconciliation |
| cp_energy | terminal_manufacture | electricity | foreground_record | meter_id; kWh; stage; batch; voltage; period; supplier; driver; non-scope use | Calibrated submeter and measured service allocation; retain kWh and 3.6 MJ/kWh conversion | MJ | Each batch/transfer and period closure | Complete declared reporting period | All covered terminal stages | per 1 kg reference flow | calibration; meter map; invoices; driver proof |
| cp_release | terminal_manufacture | reference mass and quality | foreground_record | batch_id; grade; standard edition; release certificate; density; temperature; net dispatch kg; opening/closing stocks; samples; rework; rejected kg; property test results; sample_id; sample_time; preservation; test_method_edition; uncertainty; replicate_and_QA; retained_additive_mass; water; net_gross_calorific_basis; measured_calorific_value | Calibrated dispatch mass meter and certified batch sampling; test methods from governing standard | kg | Each batch/transfer and period closure | Complete declared reporting period | All covered terminal stages | per 1 kg reference flow | sampling chain; laboratory QA; release signature |
| cp_waste | terminal_manufacture | waste transfers | foreground_record | stream_id; receiver; status; wet mass; water; oil; dry solids; retained fuel; sulfur; contamination; date | Calibrated shipment weighing and representative composition testing; receiver manifests | kg | Each batch/transfer and period closure | Complete declared reporting period | All covered terminal stages | per 1 kg reference flow | scale; laboratory QA; receiver acknowledgement |
| cp_air | terminal_manufacture | speciated air emissions | foreground_record | source_id; species; CAS; location; vapour composition; period; gas volume; temperature; absolute pressure; Z; dry_wet_basis; humidity; species_fraction_basis; carrier_inflow; exhaust_outflow; recovery_return; measured load; recovery efficiency; outage; method; sampling_QA; detection_limit; uncertainty | Representative emission/speciation measurement or documented source-specific calculation; reconcile net boundary species release after separately accounting for carrier inflow/background and internal recovery returns; retain total vapour and unidentified species coverage as a subledger, never assign whole fuel evaporation to any one species; record monitoring gaps and non-detect limits, not automatic zero; no automatic AP42 factor | kg | Each batch/transfer and period closure | Complete declared reporting period | All covered terminal stages | per 1 kg reference flow | sampling plan; calibration; source calculation and uncertainty |
| cp_support | terminal_manufacture | packaging, maintenance and returns ledger | foreground_record | item_id; precise_material_or_whole_article; supplier; receiver; source_record; mass; tare; contents; construction; reuse_cycles; period; opening_closing_stocks; internal_external_link; maintenance_service; return_status; disposal; transport; inclusion_policy; native_reference_amount; native_property_unit; conversion; scaled_amount | Reconcile actual purchase/issue/return/maintenance and receiver records with calibrated quantities; add one atomic external exchange per physical item and treatment; no default item or reusable-container lifetime | kg | Each issue, return, service and period closure | Complete declared reporting period | All covered terminal stages and supporting consumables | per 1 kg reference flow | invoices; calibrated weighing; return and service records; provider reference exchange |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | all inventory rows | Actual period amount of each flow / conforming net dispatched mass; attribute shared burdens with evidenced drivers first; physical exchanges are not multiplied by allocation shares. | measured flow; net dispatch; cp_release | per 1 kg reference flow | pcr-balance-method |
| volume_mass | in_kerosene,in_naphtha,in_gasoline,out_fuel | Mass = volume × same-batch density rho(T) on matched temperature/state bases; retain sample id, measured volume/density, corrections and uncertainty. | volume; temperature; density | kg | pcr-balance-method |
| electricity_conversion | in_electricity | Electricity MJ = metered kWh × 3.6. | kWh | MJ | pcr-balance-method |
| physical_reconciliation | all inventory rows | Reconcile each physical material ledger: opening stock + external receipts and returns = net dispatch + closing stock + external waste + net external releases + samples and external returns; distinguish sold products and waste, and avoid overlap. Internal rework/recovery cancel at matched ends; maintain stage inventories and storage/loading/transport evaporation at their actual boundaries. Reconcile water, carbon, hydrogen, sulfur and energy using measured composition, H2O, carrier air/humidity, stock changes and actual transfers. Keep chemical energy of stored/dispatched fuel separate from electrical input and heat rejection; no combustion CO2 is created by volatilisation. Packaging/container and maintenance ledgers remain separate from net fuel mass; disclose unexplained residuals without invented balancing flows. | physical ledgers; batch composition; cp_material; cp_waste; cp_air | unallocated balance; disclosed residual | pcr-balance-method |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all flows | Verify actual material, compartment, route, property and supplier quantity basis; UUID identity is not a complete background dataset. | certificates; provider boundaries; identity records |
| dq_temporal | all rows | Use one real reporting period; declare historical production/cessation, gaps and abnormalities. | dated production and purchase records |
| dq_completeness | all rows | Show measured, demonstrated absent or gap for each item; unsupported zero is invalid. Extend each actual additional ingredient, cleaning agent, carrier and species as a separate row. | site diagram; source ledger; gap register |
| dq_recipe | batch | Actual component fractions and additive grade/composition/dose come from production records; specification limits do not establish recipes or emissions. | batch recipe; certificates |
| dq_upstream | component supply | Upstream completeness covers real refinery multi-product, water/carbon/sulfur/energy interfaces and allocation; do not insert an unverified kerosene finished-fuel route. | provider process inventory and allocation records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | out_fuel | Exactly one product output links the reference row; amount 1 kg and declared mass chain agree. Reject missing qualifiers or contrary kerosene/aviation-gasoline routes. | pcr-balance-method; cpc3-2025 |
| validate_specification | batch | Check all applicable specification, sampling and additive requirements; retain property-specific methods/results. Jet B conformance does not automatically prove 33320 classification. | cgsb-jetb-2022; cpc3-2025 |
| validate_boundaries | site and providers | Verify actual route against section 1 or extend the method before use. Do not duplicate off-site wastewater transfers as local water emissions or internal recycling as external outputs. | ap42-refining-2015 |
| validate_accounting | all inventory | Check physical, water/carbon/sulfur/energy balances separately from allocated burdens; allocation fractions cannot alter physical co-product amounts and product loss cannot replace species emissions. | ref-bref-2015; pcr-balance-method |
| validate_support | supporting ledgers | Verify complete packaging/containers, maintenance, returns and whole-cartridge balances; each external item has an atomic exchange and exact provider/receiver. Retain source, native reference/property/unit, conversion and scaled amount for every linked process. Missing real SKU/site data is a collection requirement; unsupported physical identity or conversion cannot be waived. | pcr-balance-method |
| validate_emissions | all emissions | Use actual species and compartments with monitoring/factor coverage and source years. Avoid total/species and nested-PM double counts; retain CO2 origins; define NOx quantity and exclude N2O. This route authorizes no unsupported general emission factor. | ap42-refining-2015 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Terminal manufacture foreground dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Terminal-gate wide-cut Jet B supply with complete upstream links |
| excluded_use | Unsupported whole-refinery recipe, kerosene/avgas substitution, historical JP-4 market extrapolation, certification or aircraft-combustion claims |
| required_metadata | Jet B grade and specification edition; producer/geography/manufacturing year; actual recipe and petroleum origin; additive grade/carrier/cumulative dosing; batch certificate; density temperature and calorific-value bases; upstream refinery route/allocation; voltage; dispatch boundary; actual CPC property assessment |
| required_quality_disclosure | Measured/calculated/gaps, UUID limitations, provider bases, meter coverage, recipe evidence, balances, allocation and source years |
| update_trigger | Changed specification, route, provider, recipe, additives, voltage, contamination, treatment or production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc3-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, p.155; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundary, not recipe |
| cgsb-jetb-2022 | standard | CAN/CGSB-3.22-2012, reaffirmed September 2022, sections 1, 3–6, PDF pp.8–14; https://publications.gc.ca/collections/collection_2022/ongc-cgsb/P29-003-022-2022-eng.pdf | Jet B scope/additives/sampling; not actual purchase or production evidence |
| ref-bref-2015 | official_guidance | JRC, Refining of Mineral Oil and Gas BREF, 2015, section 2.21 printed p.107/PDF p.141; 4.21.14–16 printed pp.461–462/PDF pp.495–496; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | General handling/multi-product blending interfaces; diesel diagram is not Jet B recipe; no default savings/recovery factors |
| ap42-refining-2015 | official_guidance | US EPA, AP-42 section 5.1 Petroleum Refining, April 2015, sections 5.1.1–5.1.2; https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf | General process/emission-source identification; historical US factors are not universal route amounts |
| shell-civil-2025 | handbook | Shell, Civil Jet Fuel, page updated 20 November 2025, read 12 October 2026; https://www.shell.com/business-customers/aviation/aviation-fuel/civil-jet-fuel-grades.html | Supplier Jet B market context; older standard references not specification authority |
| shell-military-2025 | handbook | Shell, Military Jet Fuel, page updated 20 November 2025, read 12 October 2026; https://www.shell.com/business-customers/aviation/aviation-fuel/military-jet-fuel-grades.html | JP-4 history/distinction; not a 2026 production survey |
| cgsb-catalogue-2026 | official_guidance | Government of Canada, Canadian General Standards Board Catalogue, checked 13 October 2026; https://www.canada.ca/en/public-services-procurement/services/standards-oversight/canadian-general-standards-board/catalogue.html | Listed Jet B edition/amendment status and CGSB service status; no production or flight-approval evidence |
| nist-additive-identity | official_guidance | NIST Chemistry WebBook, SRD 69, Butylated Hydroxytoluene (CAS 128-37-0) and Ethanol, 2-(2-methoxyethoxy)- (CAS 111-77-3), checked 13 October 2026; https://webbook.nist.gov/cgi/cbook.cgi?ID=C128370 and https://webbook.nist.gov/cgi/cbook.cgi?ID=111-77-3 | Molecular/CAS identity only; no additive formulation, dose or fuel approval |
| pcr-balance-method | method_factor | Conservation and unit-conversion rules authored in this PCR; no empirical default amount | Normalization and unallocated physical reconciliation |
