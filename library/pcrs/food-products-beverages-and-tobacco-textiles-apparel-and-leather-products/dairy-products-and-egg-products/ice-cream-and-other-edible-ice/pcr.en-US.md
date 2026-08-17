---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.ice-cream-and-other-edible-ice
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ice cream and other edible ice

## 1. Scope and Applicability

This PCR applies to factory production of finished frozen edible desserts within the semantic scope of ice cream and other edible ice. It covers dairy ice cream and frozen dairy desserts, plant-based frozen desserts marketed as edible-ice products, and water-based frozen desserts and novelties such as sorbet, flavoured ice, and water ice. Products may be plain or contain cocoa, fruit, nuts, confectionery pieces, sauces, or other declared inclusions.

The foreground boundary starts when ingredients, packaging materials, utilities, and refrigerant make-up enter the manufacturing site and ends with finished product after filling, hardening or equivalent frozen stabilization, and on-site frozen storage ready for dispatch. The applicable route may include formulation and blending, a validated microbiocidal or other hazard-control step, homogenization or conditioning, freezing with or without aeration, inclusion addition, filling, packaging, hardening, frozen storage, cleaning, and wastewater handling.

This PCR excludes ordinary ice produced for cooling rather than consumption, unfrozen dairy beverages, yoghurt and other fermented milk sold unfrozen, restaurant or ice-cream-parlour service activities, and outbound distribution, retail storage, consumer use, and end-of-life unless an explicitly extended system boundary is declared. It does not impose a dairy formulation on water-based or plant-based products. Product-family-specific composition, process, cold-chain, and packaging facts must be declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.ice-cream-and-other-edible-ice |
| classification_refs | CPC 3.0: 22270, Ice cream and other edible ice (exact) |
| covered_products | Dairy ice cream and frozen dairy desserts; plant-based frozen edible desserts; water-based edible ices including sorbet, flavoured ice, water ice, and frozen novelties; products with declared cocoa, fruit, nut, confectionery, sauce, or similar inclusions |
| excluded_products | Ice for cooling or industrial use; unfrozen dairy beverages; unfrozen yoghurt or fermented milk; food-service preparation or sale; products outside the declared frozen edible-dessert function |
| representative_product | Ice cream is the representative dairy form. It is not a silent proxy for every covered formulation: water-based, plant-based, soft-serve, novelty, and other variants must declare their actual identity and use a more specific public Tiangong flow when one exists. |
| production_route | Ingredient receipt and formulation; blending; validated hazard control where required; optional homogenization and conditioning; freezing and optional aeration; optional inclusion addition; filling and packaging; hardening or equivalent frozen stabilization; on-site frozen storage; cleaning and wastewater handling |
| market_state | Finished frozen edible product, packaged or bulk as declared, at the factory gate after hardening or equivalent stabilization and any included on-site storage |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished frozen edible-dessert product of the declared product family and formulation, ready for dispatch from the manufacturing site |
| How much | 1 kg net edible product, excluding primary, secondary, and tertiary packaging mass |
| How well | Meets the declared composition, sensory and microbiological release specification, overrun or density specification where aerated, inclusion specification, and frozen-state release criteria |
| How long or cycle | At the factory gate after the declared hardening or frozen-stabilization step and declared on-site frozen-storage duration; no consumer service life is represented |
| reference_flow_link | `reference_product_ice_cream` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net edible product |
| Reference product flow | Ice cream `00b6b084-f103-4934-9d2a-cf449572cf12` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family: dairy, plant-based, or water-based; recipe and principal ingredient origins; fat and total-solids specification where applicable; aeration or overrun and measured density where applicable; heat-treatment or other hazard-control route; inclusion type and fraction; frozen-drawing and hardening route; release temperature; on-site frozen-storage duration and temperature profile; packaging configuration; production geography; data period |

The selected Tiangong flow is an exact CPC 22270 product flow and is suitable as the representative identity for dairy ice cream. For a covered product whose actual identity is not dairy ice cream, the data producer must search for and select a more specific public product flow when available. If no exact public flow exists, the foreground package must use a product-specific flow identity and state that the representative Ice cream flow was not used as a compositional claim.

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net edible product. Exclude all packaging mass and separately inventory packaging inputs. |
| `volume_to_mass_conversion` | Volume-based production, sales, or meter records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass using batch- or product-specific measured density at a declared temperature and process state. Do not use one default density across different aeration or product families. |
| `overrun_and_density` | Aerated products | Mass and measured volume | kg and declared volume unit | Record unfrozen-mix mass and volume and finished-product mass and volume on a consistent temperature basis; calculate overrun using the declared plant convention and retain the equation. Mass output remains the quantitative reference. |
| `energy_conversion` | Electricity, fuel, steam, and refrigeration energy | Metered energy or fuel quantity | Original meter unit and converted kWh or MJ | Preserve the original meter or invoice unit, conversion factor, and allocation basis. Do not combine electricity, thermal energy, and fuel mass or volume without explicit conversion. |
| `refrigerant_accounting` | Freezing, hardening, and frozen storage | Refrigerant mass | kg | Record refrigerant identity, opening and closing stock where available, purchases, charge additions, recoveries, and transfers. Calculate unaccounted loss by mass balance and do not infer leakage solely from equipment nameplate charge. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients and additives meeting the declared recipe specification, packaging materials, utility supplies, and refrigerant make-up are received at the manufacturing-site boundary; their production is represented by linked upstream datasets. |
| starting_condition_role | Foreground manufacturing-gate input condition for production of the finished frozen edible product |
| product_classification_scope | The complete semantic category of ice cream and other edible ice, including dairy, plant-based, and water-based routes; route-specific steps are applied only when relevant and their applicability is disclosed. |
| recursive_input_rule | Purchased ice cream, edible ice, rework received from another site, or another same-category product is recorded once as a product input with its own upstream dataset. Do not recursively apply this PCR inside the same foreground system or double-count burdens already carried by that input. |
| upstream_dataset_requirement | Link upstream datasets for each material ingredient, packaging material, electricity mix, fuel or thermal utility, water supply, refrigerant make-up, and off-site waste or wastewater treatment input that materially crosses the boundary. |
| disclosure | Declare product family, formulation, site, production route, inapplicable or omitted route steps, hazard-control method, packaging state, hardening and storage conditions, allocation methods, rework treatment, cut-offs, and whether the boundary stops at the factory gate or is explicitly extended. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_01` | Foreground manufacturing | Include ingredient receipt and preparation, formulation and blending, required hazard control, freezing and finishing, filling and packaging, hardening or equivalent stabilization, included on-site frozen storage, cleaning, and on-site waste and wastewater handling. | `uoguelph-ice-cream-manufacture`; `codex-cxc-57-2004`; `konstantas-et-al-2019` |
| `system_boundary_02` | Upstream inputs | Represent ingredient, packaging, energy, water, refrigerant, and off-site treatment burdens through specific upstream datasets; do not treat them as burden-free because only manufacturing is foreground. | `ec-jrc-fdm-bref-2019`; `konstantas-et-al-2019` |
| `system_boundary_03` | Product variants | Apply formulation- and technology-specific steps. A dairy heat-treatment and homogenization sequence must not be silently assigned to a water-based ice, and a dairy or egg input must not be inferred for a plant-based product. Any omitted common step requires a route justification. | `codex-gsfa-category-03`; `uoguelph-ice-cream-manufacture` |
| `system_boundary_04` | Releases and losses | Include rejected mix and product, inclusion and packaging losses, cleaning water, wastewater, direct effluent releases where applicable, and refrigerant losses from freezing and frozen-storage equipment. | `ec-jrc-fdm-bref-2019`; `konstantas-et-al-2019` |
| `system_boundary_05` | Downstream stages | Exclude outbound distribution, retail storage, food service, consumer storage or serving, and end-of-life from the factory-gate dataset unless an extended scenario is explicitly modelled and reported separately. | `ghg-protocol-product-standard-2011`; `konstantas-et-al-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mix_preparation_and_control` | Mix preparation and validated hazard control | `required` | All products require declared formulation, blending, and a validated food-safety control route; the exact control technology is product- and jurisdiction-specific. | Foreground preparation of a safe, declared mix or solution for freezing | kg prepared mix leaving the process |
| `freezing_and_finishing` | Freezing, aeration, and finishing | `required` | Applies to every product; aeration, homogenization, conditioning, and inclusion addition are recorded only when used. | Formation of the frozen edible product and its declared structure | kg unfinished or bulk frozen product leaving the freezer |
| `packaging_hardening_storage` | Filling, packaging, hardening, and on-site frozen storage | `required` | Packaging may be absent for declared bulk transfer; hardening may be replaced by another validated frozen-stabilization route, but the release state and storage duration remain required. | Delivery of the reference product at the factory gate | 1 kg net edible reference product |
| `cleaning_and_wastewater` | Cleaning, sanitation, and wastewater handling | `required` | Apply to all production routes and allocate shared clean-in-place or sanitation systems using measured causal drivers. | Supporting foreground hygiene and environmental-control process | kg reference product supported |

### Process: Mix preparation and validated hazard control (`mix_preparation_and_control`)

#### Inputs

##### Product flows

###### Recipe ingredients and additives (`recipe_ingredients`)

Record each material ingredient separately, including dairy or plant base, water incorporated into product, sugars or sweeteners, fats or oils, cocoa, fruit, stabilizers, emulsifiers, flavours, colours, and egg or other components actually used. Do not collapse materially different ingredients into a generic mix input.

- Selected flow: Product- and supplier-specific Tiangong product flow for each actual ingredient; no universal ingredient UUID is prescribed by this category-wide PCR
- Flow property / unit: Mass / kg
- Amount rule: Measured issued quantity minus documented return to unchanged stock for each ingredient and production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared mix and subsequently per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_recipe_and_mass`
- Sources: `codex-gsfa-category-03`; `uoguelph-ice-cream-manufacture`

###### Mix-treatment utilities (`mix_treatment_utilities`)

Record electricity, fuel, steam, hot water, or other utilities consumed by blending, pasteurization or another validated hazard-control step, homogenization, cooling, and conditioning. Split utility carriers and preserve their original meter units.

- Selected flow: Site- and carrier-specific electricity, fuel, steam, or heat product flow selected for the actual utility supply
- Flow property / unit: Energy or carrier-specific property / original meter unit, converted to kWh or MJ with the factor retained
- Amount rule: Submetered consumption or allocated shared-meter consumption for the declared batch and route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared mix leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_runtime`
- Sources: `codex-cxc-57-2004`; `ec-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared mix or solution (`prepared_mix`)

Record the food-safe prepared mix or solution transferred to freezing. Its identity and composition must match the declared dairy, plant-based, or water-based product route.

- Selected flow: Foreground intermediate product flow specific to the declared formulation; no universal public UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calculated batch mass reconciled with ingredient additions, retained vessel heel, samples, rework, and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch and per kg prepared mix output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_recipe_and_mass`
- Sources: `mass-balance-identity`

##### Waste flows

###### Mix preparation losses (`mix_preparation_losses`)

Record spills, filter residues, off-specification mix not returned as controlled rework, and other food material leaving the process as waste.

- Selected flow: Waste flow matching the actual material state and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass or mass-balance residual after separately identifying retained heel, samples, and controlled rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared mix output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rework`
- Sources: `mass-balance-identity`

##### Elementary flows

### Process: Freezing, aeration, and finishing (`freezing_and_finishing`)

#### Inputs

##### Product flows

###### Prepared mix input (`prepared_mix_input`)

Record the prepared mix transferred from the preceding process without duplicating its upstream ingredient burdens.

- Selected flow: Same foreground intermediate product identity as `prepared_mix`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass into the freezing and finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_recipe_and_mass`
- Sources: `mass-balance-identity`

###### Finishing inclusions (`finishing_inclusions`)

Record fruit, nuts, cocoa preparations, confectionery pieces, sauces, ripples, coatings, or other materials added after mix preparation, each as a separate actual product input.

- Selected flow: Product-specific Tiangong product flow for each actual inclusion; omit the row only when no finishing inclusion is used
- Flow property / unit: Mass / kg
- Amount rule: Measured issued quantity minus documented unchanged returns for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_recipe_and_mass`
- Sources: `uoguelph-ice-cream-manufacture`

###### Freezing and finishing utilities (`freezing_finishing_utilities`)

Record electricity and any other energy carriers used for freezing, aeration, pumping, inclusion feeding, and finishing. Record refrigerant make-up separately from energy.

- Selected flow: Site- and carrier-specific electricity or energy product flow selected for the actual supply
- Flow property / unit: Energy or carrier-specific property / original meter unit, converted to kWh or MJ with the factor retained
- Amount rule: Submetered consumption or documented allocation of shared refrigeration and line energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_runtime`
- Sources: `konstantas-et-al-2019`; `ec-jrc-fdm-bref-2019`

###### Refrigerant make-up for freezing equipment (`freezing_refrigerant_makeup`)

Record each refrigerant added to freezer or shared refrigeration equipment and link it to the equipment boundary and accounting period.

- Selected flow: Refrigerant-specific product flow matching the substance actually charged
- Flow property / unit: Mass / kg
- Amount rule: Purchased or transferred refrigerant mass added to equipment serving this process, allocated only when equipment is shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk frozen product output over the same refrigerant accounting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_and_refrigerant`
- Sources: `konstantas-et-al-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk frozen edible product (`bulk_frozen_product`)

Record the frozen product leaving the freezer before final packaging and hardening, with measured density or overrun where aeration is used.

- Selected flow: Foreground intermediate flow specific to the declared product family and formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass, reconciled with prepared mix, finishing inclusions, retained product, controlled rework, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_recipe_and_mass`
- Sources: `mass-balance-identity`; `uoguelph-ice-cream-manufacture`

##### Waste flows

###### Freezing and finishing rejects (`freezing_finishing_rejects`)

Record off-specification product, start-up and shutdown purge, dropped inclusions, and other food material not returned as controlled rework.

- Selected flow: Waste flow matching the actual food material and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass, separated from controlled rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rework`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Direct refrigerant loss from freezing (`freezing_refrigerant_loss`)

Record direct loss of each refrigerant to air only when supported by equipment-level or allocated refrigerant mass balance; do not equate all make-up automatically with current-period emission when transfers or stock changes exist.

- Selected flow: Refrigerant-specific elementary emission to air matching the substance actually lost
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus purchases and transfers in minus closing stock, recovery, transfers out, and documented non-emission uses, allocated to this process by causal equipment service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk frozen product output over the refrigerant accounting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_chain_and_refrigerant`
- Sources: `konstantas-et-al-2019`

### Process: Filling, packaging, hardening, and on-site frozen storage (`packaging_hardening_storage`)

#### Inputs

##### Product flows

###### Bulk frozen product input (`bulk_frozen_product_input`)

Record the transferred bulk frozen product without duplicating burdens already carried by the intermediate flow.

- Selected flow: Same foreground intermediate identity as `bulk_frozen_product`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering filling or bulk transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_recipe_and_mass`
- Sources: `mass-balance-identity`

###### Packaging materials (`packaging_materials`)

Record each primary, secondary, and tertiary packaging component used within the factory-gate boundary, including containers, wrappers, sticks, lids, seals, labels, cartons, and allocated pallet or film use.

- Selected flow: Material- and format-specific Tiangong product flow for each actual packaging component
- Flow property / unit: Mass / kg; retain item count and measured unit mass where procurement data are count-based
- Amount rule: Issued item count multiplied by verified unit mass, less unchanged returns, plus separately recorded packaging losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `konstantas-et-al-2019`

###### Hardening and frozen-storage utilities (`hardening_storage_utilities`)

Record electricity and other energy carriers for hardening, blast freezing, frozen rooms, conveyors, fans, defrosting, and included on-site storage. Preserve storage duration, temperature profile, occupancy, and throughput.

- Selected flow: Site- and carrier-specific electricity or energy product flow selected for the actual supply
- Flow property / unit: Energy or carrier-specific property / original meter unit, converted to kWh or MJ with the factor retained
- Amount rule: Submetered use or documented allocation by measured equipment runtime, storage occupancy, mass throughput, and storage duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product over the declared on-site storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_chain_and_refrigerant`
- Sources: `konstantas-et-al-2019`; `ec-jrc-fdm-bref-2019`

###### Refrigerant make-up for hardening and storage (`storage_refrigerant_makeup`)

Record each refrigerant added to hardening and frozen-storage systems and retain the equipment served and accounting period.

- Selected flow: Refrigerant-specific product flow matching the substance actually charged
- Flow property / unit: Mass / kg
- Amount rule: Purchased or transferred refrigerant mass added to equipment serving hardening and storage, allocated only when equipment is shared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product over the refrigerant accounting period
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_and_refrigerant`
- Sources: `konstantas-et-al-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product: finished ice cream or other edible ice (`reference_product_ice_cream`)

Record the net edible mass released at the factory gate. The selected public Ice cream flow represents dairy ice cream; replace it with a more specific flow for another covered product when available and always declare the actual product family and formulation.

- Selected flow: Ice cream `00b6b084-f103-4934-9d2a-cf449572cf12`; conditional replacement rule applies for more specific covered products
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net edible product at the declared factory-gate release state
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per declared reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Packaging and final-product losses (`packaging_and_product_losses`)

Record damaged packaging, trim, label and film losses, leaked or damaged product, and off-specification packaged product, separating food and packaging material by treatment route.

- Selected flow: Material- and treatment-specific waste flow for each actual loss stream
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass or item count multiplied by verified unit mass; food and packaging waste must not be combined
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Direct refrigerant loss from hardening and storage (`storage_refrigerant_loss`)

Record direct loss of each refrigerant to air using the refrigerant mass-balance rule and the same accounting period as frozen-storage activity.

- Selected flow: Refrigerant-specific elementary emission to air matching the substance actually lost
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant mass-balance loss allocated to hardening and storage by causal equipment service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product over the refrigerant accounting period
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_chain_and_refrigerant`
- Sources: `konstantas-et-al-2019`

### Process: Cleaning, sanitation, and wastewater handling (`cleaning_and_wastewater`)

#### Inputs

##### Product flows

###### Cleaning water, agents, and utilities (`cleaning_inputs`)

Record water, detergents, sanitizers, electricity, heat, and other materials used for production-related cleaning and sanitation. Split water, each chemical, and each energy carrier in the completed inventory.

- Selected flow: Actual site-specific water-supply, cleaning-agent, and utility product flows; no single combined flow is permitted in the completed dataset
- Flow property / unit: Mass, volume, energy, or carrier-specific property / original meter or purchase unit with documented conversions
- Amount rule: Metered or purchase-and-stock-balanced consumption allocated to product lines using cleaning event, circuit volume, runtime, or another measured causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product supported
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_effluent`
- Sources: `codex-cxc-57-2004`; `ec-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater to treatment (`wastewater_to_treatment`)

Record process and cleaning wastewater sent to on-site or off-site treatment, with route, volume or mass, and monitored load parameters kept distinct from direct elementary releases.

- Selected flow: Wastewater flow matching the actual treatment route and composition class
- Flow property / unit: Volume or mass / original monitored unit with conversion retained
- Amount rule: Metered wastewater quantity or validated water-balance estimate over the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product supported
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_effluent`
- Sources: `ec-jrc-fdm-bref-2019`

###### Food residues and treatment solids (`cleaning_residues`)

Record captured product residues, screenings, sludge, and other treatment solids by actual destination, excluding material already recorded as process reject.

- Selected flow: Waste flow matching the actual residue and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: Measured collected mass or documented treatment-system mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product supported
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_and_effluent`
- Sources: `ec-jrc-fdm-bref-2019`

##### Elementary flows

###### Direct effluent releases (`direct_effluent_releases`)

When treated water is discharged directly to the environment within the foreground boundary, record each monitored substance as a separate elementary flow. Omit this row when all wastewater leaves as a technosphere waste flow.

- Selected flow: Substance- and receiving-compartment-specific elementary flow selected from the actual monitoring parameter
- Flow property / unit: Mass / kg or monitored mass unit converted with the factor retained
- Amount rule: Measured discharge volume multiplied by representative concentration, with sampling and aggregation method retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product supported
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_and_effluent`
- Sources: `ec-jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | Shared production and utility processes | Avoid allocation where practicable by submetering, batch tracing, and subdivision of mix preparation, freezing, packaging, cleaning, and cold-storage operations. | `ghg-protocol-product-standard-2011` |
| `allocation_02` | Unavoidable shared burdens | Use a causal physical driver: measured mass or batch time for formulation and line operations, metered energy or equipment runtime for freezing and hardening, storage occupancy multiplied by duration for frozen rooms, and cleaning event or circuit volume for sanitation. | `ghg-protocol-product-standard-2011` |
| `allocation_03` | Multiple saleable products | If a physical relationship cannot be established, use economic or another justified relationship only after documenting why subdivision and physical allocation are not feasible; disclose prices, period, geography, and sensitivity to the alternative allocation. | `ghg-protocol-product-standard-2011` |
| `allocation_04` | Rework and internal loops | Return controlled rework to the receiving batch without creating a second product output or duplicating upstream burdens. Record cross-period or cross-product transfers and apply the same causal allocation basis used for the receiving production. | `mass-balance-identity` |
| `allocation_05` | Waste and recovered material | Treat outputs with no economic value as waste and include their treatment burdens. If a recovered output is sold or used as a co-product, disclose its quantity, destination, value status, and allocation or substitution method; do not grant an undocumented credit. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_recipe_and_mass` | `mix_preparation_and_control`; `freezing_and_finishing`; `packaging_hardening_storage` | Ingredient, inclusion, intermediate, reference-product, and batch mass flows | Batch production and recipe records | product code; batch id; ingredient and inclusion id; supplier and origin; issued mass; returned mass; prepared-mix transfer mass; freezer output mass; packaged net mass; density; overrun convention; sample and heel mass; timestamps | Calibrated scales, formulation system, filling checks, and batch reconciliation | kg; declared volume unit where used for density | Each batch or production campaign | Representative production period covering declared formulations and seasonal operation | Each manufacturing site and line in scope | Sum valid batch records by product and divide by released net edible mass; keep formulation variants separate until an aggregation rule is justified | Scale calibration; recipe authorization; batch reconciliation; release records; density or fill-weight checks |
| `cp_energy_and_runtime` | `mix_preparation_and_control`; `freezing_and_finishing` | Electricity, fuel, steam, heat, and line runtime | Meter, invoice, and equipment log | meter id; opening and closing reading; carrier; unit; conversion factor; equipment runtime; batch id; throughput; shared users; allocation driver | Submeter preferred; otherwise reconcile invoices to site meters and allocate with measured runtime or throughput | original meter unit; kWh; MJ; carrier mass or volume | Meter interval and each production campaign | Same period as product output, including representative start-up and shutdown operation | Each site, utility system, and production line in scope | Subtract non-production use where evidenced, then allocate shared use by documented causal driver and normalize to output | Meter calibration or verification; invoice reconciliation; runtime logs; conversion-factor source |
| `cp_cold_chain_and_refrigerant` | `freezing_and_finishing`; `packaging_hardening_storage` | Freezing, hardening, frozen-storage energy, duration, temperature, and refrigerant | Meter, warehouse, maintenance, and refrigerant ledger | equipment id; refrigerant substance; nameplate charge; opening and closing stock; purchases; additions; recovery; transfers; meter readings; runtime; storage entry and exit; mass stored; temperature profile; defrost events | Equipment or system meter plus refrigerant mass-balance ledger and warehouse records | kg refrigerant; kWh or MJ; kg product; hour or day; °C | Continuous or per meter interval; refrigerant reconciliation at least for the declared data period | Full declared production and on-site storage period | Each refrigeration system, freezer, hardening unit, and frozen room serving the product | Calculate system loss by mass balance; allocate energy and loss by causal equipment service, occupancy, throughput, and duration; retain uncertainty for shared systems | Maintenance invoices; calibrated scales; leak-test and recovery records; meter checks; warehouse movement and temperature logs |
| `cp_packaging_records` | `packaging_hardening_storage` | Packaging inputs, packaging losses, and packaged-product losses | Purchase, bill-of-materials, count, and waste records | component id; material; supplier; item count; verified unit mass; issued and returned count; damaged count; waste mass; product-loss mass; pallet and film allocation | Procurement reconciliation, representative unit weighing, line counters, and segregated waste weighing | item; kg | Each packaging lot and production campaign | Same period as product output | Each packaging line and pack format in scope | Convert counts to mass using verified unit mass; allocate shared tertiary packaging by shipped units or mass and document reuse cycles | Scale calibration; supplier specification; line-counter checks; waste tickets; bill-of-materials revision |
| `cp_waste_and_rework` | `mix_preparation_and_control`; `freezing_and_finishing` | Food losses, rejects, samples, retained heel, and controlled rework | Batch disposition and waste records | batch id; material state; quantity; reason; destination; rework source and receiving batch; waste ticket; treatment route | Segregated weighing and batch disposition tracking | kg | Each event and batch | Same period as product output | Each site and line in scope | Sum by material state and destination; link rework once to receiving batch and prevent duplicate waste or product output | Scale checks; disposition approval; receiving-batch link; waste contractor record |
| `cp_cleaning_and_effluent` | `cleaning_and_wastewater` | Cleaning water, agents, energy, wastewater, residues, and direct discharges | Cleaning event, utility, stock, flow, and analytical records | cleaning circuit and event; water meter; chemical opening and closing stock; purchases; energy meter; discharge volume; sample time; concentration; parameter; receiving compartment; sludge and residue mass; treatment route | Event logs, meters, stock balance, representative sampling, and laboratory analysis | m3 or kg water; kg agent or residue; kWh or MJ; kg pollutant | Each cleaning event and monitoring interval | Representative period including product changeovers and sanitation cycles | Each relevant circuit, treatment system, and outfall | Allocate shared cleaning by measured event, circuit volume, runtime, or contacted production; calculate direct releases as discharge volume times representative concentration | Meter and dosing calibration; chemical inventory reconciliation; sampling plan; laboratory QA/QC; discharge permit or treatment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Reference product | Net edible mass = gross filled unit mass - packaging tare; aggregate released units only. | Gross filled mass; packaging tare; released unit count | kg net edible reference product | `mass-balance-identity` |
| `calc_volume_to_mass` | Volume-based product records | Product mass = measured volume × batch- or product-specific density at the declared temperature and state. | Volume; measured density; temperature; process state | kg product | `mass-balance-identity` |
| `calc_overrun` | Aerated product | Use the plant-declared overrun equation based on paired unfrozen-mix and finished-product mass-per-volume measurements; retain equation, temperature basis, and replicate results rather than assuming a universal value. | Mix mass and volume; finished-product mass and volume; temperature | Declared overrun value and uncertainty | `uoguelph-ice-cream-manufacture` |
| `calc_process_mass_balance` | Each production process | Inputs = product outputs + controlled rework + measured waste and samples + inventory change + disclosed unexplained difference. | Batch material inputs; outputs; rework; waste; samples; opening and closing work in progress | Reconciled process mass balance and unexplained difference | `mass-balance-identity` |
| `calc_refrigerant_loss` | Refrigeration systems | Loss = opening stock + purchases + transfers in - closing stock - recovered quantity - transfers out - documented non-emission use; allocate only the share serving the product system. | Refrigerant ledger fields; equipment service allocation | kg refrigerant loss by substance and process | `konstantas-et-al-2019` |
| `calc_direct_effluent` | Direct discharge | Release mass = discharge volume × representative concentration, with unit conversion, sampling representativeness, and non-detect treatment documented. | Discharge volume; concentration; sampling metadata; unit factors | kg substance to named receiving compartment | `ec-jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Product and reference flow | Retain product code, product family, complete recipe revision, inclusion and packaging format, dairy or non-dairy status, density or overrun where applicable, hazard-control route, release state, and the reason for any reference-flow replacement. | Approved specification, recipe, label, batch record, and Tiangong flow readback |
| `dq_temporal_representativeness` | All foreground data | Use one common declared period that captures representative product mix, start-up, shutdown, changeover, defrost, cleaning, and seasonal effects; disclose exclusions or shorter campaign data. | Dated production, meter, warehouse, maintenance, and cleaning records |
| `dq_measurement_traceability` | Mass, energy, water, temperature, refrigerant, and analytical data | Identify measuring device, unit, calibration or verification status, reading frequency, data gaps, substitutions, and conversion factors. | Calibration certificates, meter checks, laboratory QA/QC, invoices, and data-gap log |
| `dq_completeness` | Process map and inventory | Account for every required process and every material recipe, packaging, utility, refrigerant, waste, wastewater, and direct-release stream, or explicitly justify its absence or non-applicability. | Completeness checklist cross-referenced to bills of materials, meters, purchase records, waste tickets, and process map |
| `dq_mass_balance` | Batch and period aggregation | Reconcile material inputs, product outputs, rework, waste, samples, and inventory change. Report the absolute and relative unexplained difference rather than forcing it to zero. | Signed batch reconciliation and period-level mass-balance report |
| `dq_shared_systems` | Utilities, cleaning, storage, and refrigeration | Document shared users, causal allocation driver, numerator and denominator, data period, and sensitivity to a plausible alternative allocation. | Meter topology, runtime or occupancy records, allocation workbook, and sensitivity result |
| `dq_source_and_geography` | Upstream datasets | Match ingredient origin, electricity geography, fuel and water supply, packaging material, refrigerant substance, and waste treatment route as closely as available; disclose proxies. | Supplier records, invoices, origin declarations, upstream dataset metadata, and proxy log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | Reference flow | Confirm that the reference amount is exactly 1 kg net edible product, uses Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and excludes packaging mass. | `mass-balance-identity` |
| `validation_02` | Representative product coverage | Confirm that Ice cream `00b6b084-f103-4934-9d2a-cf449572cf12` is not used as an undeclared compositional proxy for water-based, plant-based, or otherwise more specific products; require the actual product family and any flow replacement decision. | `un-cpc-3-0-22270`; `codex-gsfa-category-03` |
| `validation_03` | Required qualifiers | Reject an incomplete package when product family, formulation, density or overrun applicability, hazard-control route, inclusions, release temperature, hardening or stabilization route, storage duration, packaging, geography, or data period is missing. | `codex-cxc-57-2004`; `uoguelph-ice-cream-manufacture` |
| `validation_04` | Process coverage | Confirm that all four required processes are represented. Permit variant-specific operations to be marked not applicable only with a product-route justification. | `uoguelph-ice-cream-manufacture`; `codex-cxc-57-2004` |
| `validation_05` | Mass balance and rework | Verify batch and period mass balances, ensure controlled rework is linked once to a receiving batch, and require disclosure of the unexplained difference. | `mass-balance-identity` |
| `validation_06` | Energy and cold chain | Confirm separate accounting for mix treatment, freezing, hardening, on-site storage, storage duration, temperature profile, and refrigerant identity and loss; reject use of nameplate charge as an emission amount without a mass balance. | `konstantas-et-al-2019`; `ec-jrc-fdm-bref-2019` |
| `validation_07` | Packaging, cleaning, and releases | Confirm packaging mass is separate from edible reference mass and that cleaning inputs, wastewater, food residues, packaging losses, and direct effluent releases are accounted for without double counting. | `ec-jrc-fdm-bref-2019`; `konstantas-et-al-2019` |
| `validation_08` | Allocation | Confirm subdivision or causal physical allocation is attempted before economic or other allocation, and require the shared-system driver and sensitivity disclosure. | `ghg-protocol-product-standard-2011` |
| `validation_09` | Boundary consistency | Reject a factory-gate result that silently includes or omits outbound distribution, retail storage, consumer storage or serving, or end-of-life; extended scenarios must be reported separately. | `ghg-protocol-product-standard-2011`; `konstantas-et-al-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for finished ice cream or another declared edible-ice product at the factory gate |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for food products, catering, retail, cold-chain, packaging, and lifecyclemodel systems when product identity, geography, technology, formulation, packaging, and time period are representative. |
| allowed_use | Attributional modelling of declared factory-gate production; hotspot analysis; scenario analysis with separately modelled downstream cold chain; internal improvement and supply-chain studies consistent with the stated boundary and allocation. |
| excluded_use | Undeclared substitution between dairy, plant-based, and water-based product families; nutritional or sensory equivalence claims; public comparative assertions without a common functional equivalence, boundary, allocation, data-quality, and review framework; use as an unpackaged product when packaging burdens are embedded but not separable. |
| required_metadata | PCR id and version state; product and flow identity; full required qualifiers; recipe and packaging revision; site and geography; production technology; hazard-control route; reference period; cut-offs; allocation; upstream dataset versions; release temperature; hardening and on-site storage conditions; data-quality and uncertainty statements. |
| required_quality_disclosure | Foreground versus secondary-data shares; meter coverage; mass-balance unexplained difference; proxy list; missing data and substitutions; shared-system allocation; refrigerant accounting basis; storage duration; formulation coverage; temporal, geographic, and technological representativeness; review status. |
| update_trigger | Change in product family or recipe, principal ingredient origin, packaging format, hazard-control or freezing technology, refrigerant substance or refrigeration system, hardening or storage conditions, site or energy supply, allocation basis, upstream dataset, regulation, or evidence that materially changes the inventory. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-22270` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 22270, Ice cream and other edible ice, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Classification scope and category identity |
| `codex-gsfa-category-03` | `official_guidance` | FAO/WHO Codex Alimentarius, General Standard for Food Additives Online, Food Category 03.0, Edible ices, including sherbet and sorbet. https://www.fao.org/gsfaonline/foods/details.html?id=52&print=true (retrieved 2026-08-11) | Water-based edible-ice scope and distinction from primarily dairy frozen desserts |
| `codex-cxc-57-2004` | `official_guidance` | FAO/WHO Codex Alimentarius, CXC 57-2004, Code of Hygienic Practice for Milk and Milk Products. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B57-2004%252FCXC_057e.pdf (retrieved 2026-08-11) | Validated microbiocidal controls, hazard control, hygiene, and dairy-route data requirements |
| `uoguelph-ice-cream-manufacture` | `handbook` | University of Guelph, Ice Cream Technology e-Book, Ice Cream Manufacture. https://books.lib.uoguelph.ca/icecreamtechnologyebook/part/ice-cream-manufacture-2/ (retrieved 2026-08-11) | Typical ice-cream process sequence, conditional homogenization and ageing, freezing, packaging, and hardening |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, EUR 29978 EN, JRC118627, 2019, DOI: 10.2760/243911. https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (retrieved 2026-08-11) | Energy and water monitoring, cleaning, wastewater, releases, and environmental performance of food and dairy manufacturing |
| `konstantas-et-al-2019` | `literature` | Konstantas, A.; Stamford, L.; Azapagic, A. (2019), Environmental impacts of ice cream, Journal of Cleaner Production 209: 259-272. DOI: 10.1016/j.jclepro.2018.10.237 | Ice-cream life-cycle process decomposition and importance of ingredients, manufacturing energy, packaging, deep freezing, storage duration, and refrigerant type and losses |
| `ghg-protocol-product-standard-2011` | `standard` | WRI and WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-11) | Boundary disclosure, data quality, and allocation hierarchy |
| `mass-balance-identity` | `method_factor` | Mass conservation identity applied to batch, process, packaging, rework, refrigerant, and wastewater balances | Calculation and QA rules without an empirical default factor |
