---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.wire-rods-tubes-plates-electrodes-and-similar-products-of-base-metal-or-of-metal-carbid-98df0624
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wire, rods, tubes, plates, electrodes and similar products, of base metal or of metal carbides, coated or cored with flux material, of a kind used for soldering, brazing, welding or deposition of metal or of metal carbides; wire and rods, of agglomerated base metal powder, used for metal spraying

## 1. Scope and Applicability

This PCR covers supplier-gate production of finished flux-coated or flux-cored base-metal or metal-carbide consumables for soldering, brazing, welding, hardfacing, or deposition, together with wire and rod made from agglomerated base-metal powder for metal spraying. Covered forms include coated electrodes, coated rods, cored wire, cored rod, and analogous tubes or plates whose coating or core is an integral flux material. The production route and every formulation ingredient are declared for the product represented.

The PCR excludes uncoated solid welding wire, separately marketed granular welding flux, welding or thermal-spraying services, welding and spraying machinery, graphite or carbon electrodes for electrical applications, and manufacture, use, repair, or end-of-life of the joined or coated article. Upstream production of purchased metals, powders, binders, energy, water, and packaging is represented by linked supplier datasets rather than re-created inside the foreground manufacturing processes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.wire-rods-tubes-plates-electrodes-and-similar-products-of-base-metal-or-of-metal-carbid-98df0624 |
| classification_refs | CPC 3.0: 42950 (exact classification context; no accepted mapping is created by this PCR) |
| covered_products | Flux-coated or flux-cored base-metal or metal-carbide wire, rods, tubes, plates, electrodes and similar soldering, brazing, welding, hardfacing or deposition consumables; wire and rods made from agglomerated base-metal powder for metal spraying |
| excluded_products | Plain uncoated solid wire; separately marketed granular flux; welding or spraying services and equipment; graphite or carbon electrical electrodes; downstream joined or coated articles |
| representative_product | Flux-cored welding wire with a declared metallic sheath, flux or metal-powder core, finished diameter, winding format and application |
| production_route | Purchased feedstock preparation and formulation; route-specific coating or strip/tube forming and filling; optional seam welding, drawing and heat treatment; finishing, testing and packaging |
| market_state | Dry, quality-released consumable at the manufacturing gate, supplied as declared spools, coils, drums, bundles or boxes with formulation, dimensions, moisture condition and packaging stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a quality-released welding, brazing, soldering, deposition or metal-spraying consumable within the covered product boundary |
| How much | 1 kg net mass of finished consumable, excluding separable packaging |
| How well | Meets the declared product specification for composition, coating or fill ratio, dimensions, moisture condition, winding or piece format, and intended process/application |
| How long or cycle | One as-delivered quantity at the manufacturing gate; no service-life or use-cycle normalization |
| reference_flow_link | The single reference product output `reference_product_output`, normalized to 1 kg net saleable product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact covered product form; welding, brazing, soldering, deposition or spraying application; applicable product standard and classification; sheath/core/coating composition; declared hazardous constituents; coating or fill ratio; diameter and dimensional tolerance; moisture condition; seam type and heat treatment where applicable; spool, coil, drum, bundle or box format; net mass; manufacturing site and geography; production period; supplier-gate state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The selected TianGong flow is the exact representative flux-cored-wire identity, not a claim that every covered coated electrode, rod, tube or plate has the same product identity; a different covered form requires its own exact product flow before publication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all mass exchanges to 1 kg quality-released consumable. Exclude separable packaging from net product mass and record it as separate product inputs. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered kWh record and convert to MJ using exactly 3.6 MJ per kWh before normalization; disclose grid, voltage and meter boundary. |
| `gas_reference_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the temperature, pressure and dry/wet reference condition of every gas-volume record; convert only from documented meter or supplier conditions. |
| `water_mass_basis` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass records. When volume is metered, retain the volume and measured or justified density used for conversion to kg. |

## 5. System Boundary

The foreground boundary begins when purchased metal feedstock, flux or agglomerated-powder ingredients, binders, energy, water and packaging cross the manufacturing-site gate. It ends with quality release and packaging of the finished consumable at that gate. It includes receiving and inspection; wire redrawing, straightening, cutting or pickling when performed; powder sieving, weighing, blending or agglomeration; wet mixing and briquetting where applicable; coating extrusion or metallic-strip forming, filling and closing; optional seam welding; drawing, annealing, drying or baking; surface treatment; winding or cutting; testing; and packaging. Use of the consumable in soldering, brazing, welding, deposition or metal spraying is outside this foreground boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased wire, rod or metallic strip; individually identified mineral, metal, alloy or carbide powders; binder solution; process water; purchased energy; and individual packaging components at the manufacturing-site gate |
| starting_condition_role | Supplier-gate inputs to the foreground consumable-manufacturing system |
| product_classification_scope | The semantic covered-product boundary in section 2, using CPC 3.0 code 42950 only as classification context |
| recursive_input_rule | If a purchased input is itself a covered CPC 42950 consumable or semi-finished covered product, record it once as an atomic product input and link a supplier-gate dataset; do not recursively decompose its manufacture inside the same foreground package |
| upstream_dataset_requirement | Link geographically and technologically appropriate upstream datasets for every purchased metal, powder, binder, energy, water and packaging input; state unresolved supplier-data gaps |
| disclosure | Declare product route, every formulation ingredient and concentration or mass, starting feedstock state, internal versus purchased intermediates, scrap recycling route, emission controls, packaging configuration, geography, technology and production period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_supplier_gate` | foreground system | Include all on-site processes from receipt of purchased feedstocks through quality release and packaging; represent upstream supply with linked datasets and exclude use and downstream treatment. | `voestalpine-seamless-cored-wire-epd-2023` |
| `boundary_route_disclosure` | route and formulation | Select the actual coated-electrode, cored-wire, cored-rod, agglomerated-powder wire/rod or other covered route and enumerate every physically present formulation ingredient as an atomic exchange. | `unido-welding-consumables-1984`, `us-patent-10124444-flux-cored-wire`, `us-patent-20080093350-thermal-spray-cored-wire` |
| `boundary_completeness` | material, energy, waste and emission inventory | Do not omit a flow solely because its mass is small, confidential, hazardous, recycled or shared. Confidential formulations may mask public composition values, but the review package must retain auditable masses and identities. | `voestalpine-seamless-cored-wire-epd-2023` |

## 6. Process Inventory Structure

The cards below are a minimum atomic inventory for the covered routes evidenced by the sources. A concrete data package must add a separate atomic row for each additional metal, alloy, carbide, mineral, binder, lubricant, surface-treatment chemical, packaging component, waste or elementary emission in the declared product and site; it must not replace them with an umbrella “powder mixture”, “chemicals”, “packaging”, “waste” or “emissions” row.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | Feedstock inspection, wire preparation and formulation | required | Apply the actual route: wire preparation for coated products; powder weighing/blending or agglomeration for coated, cored or thermal-spray products | foreground material preparation | All inputs and preparation losses normalized to saleable output mass |
| `product_forming` | Coating, filling, closing, drawing and thermal treatment | required | Apply only the operations actually used: extrusion coating; strip/tube forming and filling; seam welding; drawing; annealing; drying, baking or curing | foreground product conversion | Route-specific metered inputs, wastes and direct emissions per saleable output mass |
| `finishing_packaging` | Finishing, quality release and packaging | required | Include the actual surface treatment, sizing, cutting or winding, testing and individual packaging components | foreground finishing and dispatch preparation | Net released product and packaging per saleable output mass |

### Process: Feedstock inspection, wire preparation and formulation (`feedstock_preparation`)

#### Inputs

##### Product flows

###### Low-carbon steel sheath strip (`low_carbon_steel_strip`)

Record purchased low-carbon hot-rolled or cold-rolled strip when it is formed into a cored-wire sheath. The declared grade, dimensions, coating and supplier-gate state determine the upstream dataset.

- Selected flow: Hot rolled strip steel `984781e6-5296-48d7-a630-553209cd51c5`
- Flow property / unit: Mass / kg
- Amount rule: weigh strip issued to the applicable cored-wire batch, net of documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `voestalpine-seamless-cored-wire-epd-2023`, `us-patent-10124444-flux-cored-wire`

###### Low-carbon steel core wire (`low_carbon_steel_wire`)

Record purchased or internally redrawn low-carbon steel wire used as the core of a covered electrode or rod. Include only for products with this ferrous core.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: weigh core wire issued to the covered-electrode or coated-rod batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `unido-welding-consumables-1984`, `us-patent-3468999-coated-electrode`

###### Rutile powder (`rutile_powder`)

Record rutile (titanium dioxide mineral) powder only when it is an ingredient in the declared coating or core formulation. Other minerals require separate rows.

- Selected flow: Rutile powder
- Flow property / unit: Mass / kg
- Amount rule: weigh dry rutile charged to the formulation batch, adjusted for measured carryover returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `unido-welding-consumables-1984`

###### Ferromanganese powder (`ferromanganese_powder`)

Record ferromanganese powder only when it is a deoxidizer or alloying ingredient in the declared coating or core formulation.

- Selected flow: Manganese Iron Powder `ce4f3904-8c7f-4dd6-94f8-2a738ad09ab7`
- Flow property / unit: Mass / kg
- Amount rule: weigh ferromanganese charged to the formulation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `unido-welding-consumables-1984`

###### Sodium silicate binder solution (`sodium_silicate_solution`)

Record the sodium silicate solution added as binder only for wet-mixed coatings or agglomerates using that binder. Declare solution concentration and separately account for its water in the mass balance.

- Selected flow: Sodium silicate solution
- Flow property / unit: Mass / kg
- Amount rule: weigh solution charged to the wet-mix or agglomeration batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `unido-welding-consumables-1984`, `us-patent-3468999-coated-electrode`

###### Tungsten-carbide/cobalt agglomerates (`tungsten_carbide_cobalt_agglomerates`)

Record purchased WC/Co agglomerates only for the declared thermal-spray cored-wire or rod formulation. Declare carbide-to-cobalt composition, agglomeration route and particle-size specification.

- Selected flow: WC-Co powder blend, granules `ef6167d9-dcce-4497-a117-a208a9c4247c`
- Flow property / unit: Mass / kg
- Amount rule: weigh WC/Co agglomerates charged to the thermal-spray cored-product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `us-patent-20080093350-thermal-spray-cored-wire`

###### Nickel-chromium-molybdenum alloy sheath strip (`nickel_chromium_molybdenum_alloy_strip`)

Record Ni-Cr-Mo alloy strip only when it forms the sheath of the declared thermal-spray cored wire. Declare grade and alloy composition; do not apply this row to carbon-steel sheaths.

- Selected flow: Nickel-chromium-molybdenum alloy strip
- Flow property / unit: Mass / kg
- Amount rule: weigh alloy strip issued to the thermal-spray cored-wire batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `us-patent-20080093350-thermal-spray-cored-wire`

###### Process water (`preparation_process_water`)

Record water crossing the site boundary for wet mixing, binder dilution, wire cleaning or pickling rinses. Recycled internal water is not counted again as an external input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: use calibrated submeter or reconciled batch make-up and rinse-water records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `unido-welding-consumables-1984`

###### Preparation electricity (`preparation_electricity`)

Record purchased electricity used for wire drawing and cutting, powder sieving, mixing, agglomeration, extraction and preparation auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: meter preparation equipment or allocate a reconciled line meter using documented operating records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `voestalpine-seamless-cored-wire-epd-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Off-spec rutile-based flux powder (`offspec_rutile_flux_powder_waste`)

Record the chemically identified off-spec rutile-based formulation that leaves the foreground system for treatment or recovery. Returned clean formulation remains an internal stock transfer.

- Selected flow: Off-spec rutile-based welding flux powder waste
- Flow property / unit: Mass / kg
- Amount rule: weigh quarantined formulation dispatched as waste and state its management route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `unido-welding-consumables-1984`

##### Elementary flows

###### Powder-handling particulate matter to air (`powder_particulate_to_air`)

Record particulate matter released across the site boundary from weighing, sieving, mixing, filling or dust collection. State size fraction, compartment and whether the value is measured before or after control.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: use stack or exhaust measurements and control-device operating records; do not include captured dust dispatched as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

### Process: Coating, filling, closing, drawing and thermal treatment (`product_forming`)

#### Inputs

##### Product flows

###### Forming electricity (`forming_electricity`)

Record purchased electricity used by extrusion, forming rolls, powder filling, seam welding, drawing, heat-treatment auxiliaries and emission controls.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: use line or equipment meters reconciled to production and downtime records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `voestalpine-seamless-cored-wire-epd-2023`, `us-patent-10124444-flux-cored-wire`

###### Natural gas for drying or heat treatment (`forming_natural_gas`)

Record gaseous natural gas only when burned within the foreground for drying, baking, annealing or other route-specific heat treatment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: use supplier or submeter volume at declared reference conditions, reconciled to the applicable line and period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `voestalpine-seamless-cored-wire-epd-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Low-carbon steel scrap (`low_carbon_steel_scrap`)

Record separately collected low-carbon steel edge trim, wire ends and rejected unfilled sheath leaving for recycling or treatment. Alloy strip scrap requires its own row.

- Selected flow: Steel scrap `980a386b-f76b-4348-bb6b-3aa992538ba1`
- Flow property / unit: Mass / kg
- Amount rule: weigh dispatched low-carbon steel scrap by production route and batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `us-patent-10124444-flux-cored-wire`

###### Acid pickling wastewater (`acid_pickling_wastewater`)

Record acid pickling wastewater only when pickling and rinsing are within the foreground boundary. State acid identity, dissolved-metal content, treatment and discharge or off-site destination.

- Selected flow: Acid pickling wastewater
- Flow property / unit: Mass / kg
- Amount rule: use effluent meter, tank dispatch mass or a reconciled water balance for the pickling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `unido-welding-consumables-1984`

##### Elementary flows

###### Direct fossil carbon dioxide (`forming_fossil_carbon_dioxide`)

Record only direct foreground fossil carbon dioxide released to air from on-site natural-gas combustion or another documented fossil-carbon process. Upstream electricity emissions remain in the electricity supply dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: use site emissions measurements or an audited fuel-carbon record allocated to the forming process; disclose method and oxidation treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

### Process: Finishing, quality release and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Finishing and packaging electricity (`packaging_electricity`)

Record purchased electricity for final sizing, surface finishing, winding or cutting, testing, packing and associated extraction.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: use equipment or line meter records reconciled to released production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metered_energy`
- Sources: `voestalpine-seamless-cored-wire-epd-2023`

###### Corrugated fibreboard box (`corrugated_fibreboard_box`)

Record corrugated fibreboard boxes only when they cross the system boundary with the released product. Steel or plastic spools, drums, pallets, films and other packaging require separate atomic rows when used.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: derive box mass from verified packaging specifications and packed-unit counts, checked against purchase records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg quality-released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `voestalpine-seamless-cored-wire-epd-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released representative product (`reference_product_output`)

Record the net mass of quality-released flux-cored wire. Other covered product forms must use an exact, audited TianGong product flow rather than silently reusing this representative identity.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: measured net released product mass, normalized to exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg quality-released representative product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `voestalpine-seamless-cored-wire-epd-2023`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multiple product grades, routes or lines | Subdivide by formulation, route, line and production period and use direct material issues, meters and waste records before applying allocation. | |
| `allocation_shared_operations` | unavoidable shared preparation, utilities, finishing and packaging | Allocate remaining shared burdens using a documented physical driver that causes the burden, such as equipment time, metered energy, processed mass or packed-unit count; do not default to revenue when a causal physical driver exists. | |
| `allocation_scrap_no_credit` | steel, alloy, flux or powder waste | Report the waste mass and destination at the point it leaves the foreground boundary. Do not apply an avoided-production or recycling credit inside this supplier-gate inventory; any substitution credit belongs to a separately declared downstream model. | |
| `allocation_no_recipe_co_products` | coating and core formulation | Treat formulation ingredients as consumed inputs and the released consumable as the reference product. A returned in-process material is an internal stock transfer, not a co-product. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `feedstock_preparation`, `finishing_packaging` | material issues, packaging and released product | batch issue, recipe, purchase and quality-release records | product code; batch id; flow identity; supplier; lot; gross issue; return to stock; concentration; package specification; released net mass; rejected mass | calibrated scales and controlled recipe/ERP records reconciled to physical inventory | kg | each batch, summarized monthly | representative continuous 12-month period or documented campaign | all foreground lines and storage transfers at the declared site | sum net issues and released masses by product and route; normalize each to released product mass | scale calibration, lot traceability, inventory reconciliation and release certificate |
| `cp_metered_energy` | `feedstock_preparation`, `product_forming`, `finishing_packaging` | electricity and natural gas | submeter, supplier invoice and equipment operating log | meter id; opening and closing reading; unit; reference conditions for gas; line; product; operating and downtime hours; allocation driver | calibrated meters with invoice reconciliation | kWh and m3 | continuous or each billing period, reconciled monthly | same representative period as production | all in-boundary preparation, forming, treatment, finishing and control equipment | subtract excluded loads; allocate only residual shared use by documented causal driver; normalize to released mass | meter calibration, invoice reconciliation and operating log |
| `cp_water_balance` | `feedstock_preparation`, `product_forming` | process water and pickling wastewater | water meter, bath make-up, discharge meter and tank dispatch record | meter id; water source; bath id; acid identity; make-up; rinse use; reuse; discharge; density; dissolved-metal analysis; destination | calibrated meters or weighed tanks reconciled through a site water balance | kg and retained m3 | each batch or continuous, reconciled monthly | same representative period as production | all wet mixing, cleaning, pickling, rinsing and treatment within the site boundary | count external make-up once; separate reuse; reconcile input, evaporation, product moisture, wastewater and stock change | meter calibration, laboratory analysis and treatment/dispatch record |
| `cp_waste_and_emissions` | `feedstock_preparation`, `product_forming` | solid waste and direct air emissions | waste weigh ticket, stack test, continuous monitor, control-device and emissions record | flow identity; composition; mass; size fraction; compartment; measurement point; control efficiency; destination; reporting period | calibrated waste scales and legally or technically accepted emission measurements or audited site emissions records | kg | each dispatch and each required monitoring period | same representative period as production | all declared foreground emission points and waste dispatches | exclude internal returns; aggregate by atomic flow, route and destination; normalize to released mass | weigh ticket, chain of custody, sampling plan, laboratory report and monitor QA/QC |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = exchange quantity assigned to the product / net quality-released product mass | assigned exchange quantity; released product mass | exchange per 1 kg reference product | |
| `calc_electricity_conversion` | electricity rows | MJ = metered kWh × 3.6; retain the original kWh record and then normalize | metered kWh; released product mass | MJ per 1 kg reference product | |
| `calc_packaging_mass` | corrugated fibreboard box | packaging mass = verified unit mass × number of boxes assigned to the released product | package specification; packed-unit count; released product mass | kg box per 1 kg reference product | `voestalpine-seamless-cored-wire-epd-2023` |
| `calc_batch_mass_reconciliation` | product, material, waste and direct-emission mass | reconcile opening stock + purchased input with closing stock + released product + returned stock + dispatched waste + measured direct releases; explain moisture, evaporation and any residual | batch and inventory records from all four protocols | reconciled mass-balance statement and residual | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and formulation | Trace each result to product code, applicable standard/classification, sheath or core metal, every coating/core ingredient, concentration, dimensions, moisture condition and packaging configuration. | approved specification, recipe revision, batch record and release certificate |
| `dq_measurement` | mass, energy, gas and water records | Use calibrated instruments with units and boundaries recorded; preserve gas reference conditions and every conversion. | calibration certificates, meter map, raw readings and conversion worksheet |
| `dq_temporal` | foreground inventory | Use a continuous representative 12-month period where available; otherwise document campaign dates, production volume, shutdowns and why the period represents the declared product. | production calendar, monthly reconciliation and representativeness note |
| `dq_completeness` | inventory | Account for every physically present recipe ingredient and packaging component and every material, energy, waste and elementary flow crossing the boundary; quantify and explain mass-balance residuals. | signed completeness checklist, purchasing reconciliation, waste register and emissions inventory |
| `dq_supplier_links` | upstream inputs | Match upstream datasets to material grade, composition, product state, geography and supply technology, and disclose proxy or missing supplier data. | supplier declarations, certificates of analysis and dataset-link register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm exactly 1 kg net quality-released product, exclude separable packaging, and verify every required qualifier and exact product-flow identity. | |
| `validate_route_and_recipe` | product route and inputs | Confirm that the declared route matches the process map and that every formulation ingredient and packaging component is represented by one atomic flow with route applicability. | `unido-welding-consumables-1984`, `us-patent-10124444-flux-cored-wire`, `us-patent-20080093350-thermal-spray-cored-wire` |
| `validate_mass_balance` | mass exchanges | Reconcile material inputs, stock change, released product, returned material, waste and direct releases; investigate and disclose every non-trivial residual rather than forcing closure. | |
| `validate_energy_and_emissions` | electricity, natural gas and direct fossil carbon dioxide | Reconcile meters to the production period; verify gas reference conditions; prevent upstream electricity emissions from being counted as direct foreground emissions. | `voestalpine-seamless-cored-wire-epd-2023` |
| `validate_water_and_waste` | water, wastewater and solid waste | Prevent double counting of internal reuse or returned formulation and retain composition, destination and treatment evidence for each dispatched waste stream. | |
| `validate_uuid_and_localization` | all UUID-bearing flows | Require public state-100 identity, compatible flow type, property and unit group; use the exact TianGong Chinese baseName in the aligned Chinese rendering. Keep unresolved rows UUID-empty. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-manufacturing dataset for one declared covered consumable at one site and representative period |
| downstream_use | `secondary_dataset`; may serve as `background_dataset` only for a compatible product route, formulation, product state, geography and technology |
| allowed_use | Supplier-gate inventories of welding, brazing, soldering, hardfacing, deposition and metal-spraying consumables; linkage into downstream joining or coating models that separately model use |
| excluded_use | Welding or thermal-spraying operation impacts; plain solid wire; separately marketed flux; welding equipment; graphite electrodes; substitution among materially different recipes or product forms without documented review |
| required_metadata | canonical PCR id; product standard/classification; product form and use; full formulation disclosure in the review package; sheath/core/coating composition; dimensions; fill or coating ratio; moisture condition; seam and heat-treatment route; packaging; site; geography; technology; production period; allocation; upstream dataset links |
| required_quality_disclosure | unresolved UUIDs and source gaps; foreground coverage; instrument calibration; temporal representativeness; mass-balance residual; shared-burden allocation; supplier proxies; waste destinations; emission-control and measurement basis |
| update_trigger | Change in product identity, standard, formulation, metal or carbide grade, fill/coating ratio, route, major equipment, heat or surface treatment, packaging, energy supply, emission control, site, allocation method, upstream dataset or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved and hash-verified 2026-09-05) | Official CPC 42950 classification identity |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, Explanatory Notes of the Central Product Classification Version 3.0. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf (retrieved 2026-09-05) | Official product-boundary verification |
| `china-hs-8311-terminology-2019` | official_guidance | Zhongshan Municipal People's Government-hosted customs commodity-code table, HS 8311 rows. https://www.zs.gov.cn/UserFiles/attachfiles/2019-7/9/2976f10c-f75f-46a9-b4a9-4f0eec9dc638_532697.pdf (retrieved 2026-09-05) | Verification of professional Chinese terms for flux-coated electrodes, flux-cored wire, coated or cored rods/wire, and metal-spraying wire/rod made from base-metal powder |
| `unido-welding-consumables-1984` | literature | “Welding Consumables — An Overview.” UNIDO ID/WG.420/3, 16 March 1984. https://downloads.unido.org/ot/48/56/4856670/10001-15000_13559.pdf (retrieved 2026-09-05) | Covered-electrode ingredients, wire preparation, dry/wet mixing, extrusion, drying and baking; agglomeration concepts |
| `voestalpine-seamless-cored-wire-epd-2023` | dataset | Institut Bauen und Umwelt e.V., EPD-VOE-20230215-IAC1-EN, “Seamless Cored Welding Wires,” issued 29 August 2023. https://cdnstoreapp.blob.core.windows.net/image-container/1085779/original/EPD_Seamless_Cored_Welding_Wires.pdf (retrieved 2026-09-05) | Supplier-gate process decomposition, electricity and natural-gas roles, declared mass unit and packaging forms; no empirical inventory range inferred from this single EPD |
| `us-patent-10124444-flux-cored-wire` | literature | US10124444B2, “Flux cored wire and manufacturing method thereof and manufacturing device thereof.” https://patents.google.com/patent/US10124444B2 (retrieved 2026-09-05) | Strip forming, flux filling, closing, optional seam welding and drawing route |
| `us-patent-3468999-coated-electrode` | literature | US3468999A, “Method of making coated arc welding electrodes.” https://patents.google.com/patent/US3468999A/en (retrieved 2026-09-05) | Powdered flux coating, binder, extrusion and drying route |
| `us-patent-20080093350-thermal-spray-cored-wire` | literature | US20080093350A1, “Superfine/nanostructured cored wires for thermal spray applications and methods of making.” https://patents.google.com/patent/US20080093350A1/en (retrieved 2026-09-05) | Agglomerated-powder thermal-spray cored-wire feedstock, strip forming, powder filling, closing and drawing route |
