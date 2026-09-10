---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-fbbe0da4
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of non-alloy steel, not further worked than hot-rolled, of a width of 600 mm or more

## 1. Scope and Applicability

This PCR applies to unfabricated flat-rolled products of iron or non-alloy steel with a finished width of at least 600 mm, delivered from the steelworks after hot rolling and no further metallurgical working. It covers coil and cut sheet or plate delivery, including as-rolled and pickled delivery states. Temporary oiling may accompany a pickled product when it is only corrosion protection and is declared separately; clad, plated, painted, polymer-coated, or otherwise coated products are outside the category.

The PCR supports foreground data packages for a high-frequency basic material used across electrical equipment, photovoltaic support systems, construction, and general manufacturing. Its canonical need is methodological rather than classification coverage: steelmaking route, slab supply, external recycled input, internal home scrap, hot-rolling yield, coil-versus-plate finishing, and optional pickling can materially change the inventory and must remain visible.

Cold-rolled products, stainless steel, alloy steel, products narrower than 600 mm, coated products, and downstream manufacture of components are excluded. Slitting below 600 mm, profiling, stamping, bending, welding, drilling, galvanizing, painting, assembly, and fabrication of brackets, frames, sections, enclosures, or other components belong to downstream product systems.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-fbbe0da4 |
| classification_refs | CPC 3.0:41211 (exact classification scope; accepted mapping is governed separately) |
| covered_products | Uncoated flat-rolled iron or non-alloy steel, width at least 600 mm, in coil, sheet, or plate form, not further worked than hot-rolled; as-rolled or pickled surface state |
| excluded_products | Cold-rolled steel; stainless or other alloy steel; width below 600 mm; clad, plated, galvanized, painted, polymer-coated, or otherwise coated products; downstream fabricated components |
| representative_product | Production-mix hot-rolled non-alloy steel coil at the steelworks gate; plate or sheet delivery remains in scope when its delivery form is declared and a matching product-flow identity is used |
| production_route | Declare BF-BOF, scrap-EAF, DRI-EAF, another reviewed route, or purchased-slab hot rolling; identify continuous or ingot casting where material and do not aggregate routes without a documented production-weighted basis |
| market_state | Net product ready for dispatch at the steelworks gate, as coil or cut sheet/plate, with grade, thickness, width, surface state, edge condition, and pickling/oiling status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision at the steelworks gate of flat-rolled non-alloy steel, width at least 600 mm, not further worked than hot-rolled |
| How much | 1 metric tonne (1,000 kg) net product mass, excluding packaging |
| How well | Conforms to the declared steel grade and dimensional specification; delivery form, surface state, production route, recycled-input categories, and pickling/coating boundary are declared |
| How long or cycle | One identified production campaign or a production-weighted period normally covering 12 consecutive months |
| reference_flow_link | `ref_hot_rolled_non_alloy_steel` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net product at the steelworks gate |
| Reference product flow | Steel hot rolled coil `2126a80d-1cd0-46e4-8f30-341bd20a1d64` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade or specification; thickness; finished width; coil or sheet/plate delivery; as-rolled or pickled surface state; edge condition; BF-BOF, scrap-EAF, DRI-EAF, other reviewed route, or purchased-slab route; external pre-consumer and post-consumer scrap shares; internally recirculated home scrap; pickling included or excluded; coating absent; geography; production period |

The selected UUID is the default representative identity for production-mix hot-rolled coil because its verified Tiangong row is CPC 41211, uses Mass as its quantitative reference, and does not restrict the steelmaking route to one named technology. A plate or sheet data package shall use a verified plate-specific CPC 41211 product flow when available and shall not reuse the coil UUID merely to fill a required field. The narrower BF-route flow `4f1a1835-7b3b-11dd-ad8b-0800200c9a66` and the metadata-conflicted flow `ce3ac926-5d6f-4558-9edc-67179d93dde4` are candidates only, not defaults.

When constructing a foreground data package, every item in `Required qualifiers` must appear in dataset metadata, the process description, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | final reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured net product mass at the steelworks gate; exclude pallets, straps, wrappers, and other packaging from the reference amount and inventory packaging separately. |
| `product_dimensions` | final reference product | declared dimensions | mm | Record finished thickness and width and verify width is at least 600 mm; retain the applicable specification and measurement basis. |
| `delivery_surface_state` | final reference product | declared attribute | n/a | Record coil or sheet/plate delivery, as-rolled or pickled state, edge condition, and temporary oiling; reject any product whose declared state includes cold rolling or a clad, plated, painted, polymer, metallic, or other coating. |
| `route_and_recycled_input` | steel and slab supply | mass and declared route | kg and % by mass | Report steelmaking route and externally supplied pre-consumer and post-consumer scrap separately from internally recirculated home scrap; state the recycled-content method and denominator. |
| `energy_accounting` | fuels, electricity, steam, and recovered process gases | energy or mass/volume with energy conversion | MJ, kWh, kg, or m3 | Preserve measured billing or meter units and document net-calorific-value and other conversion factors; prevent double counting of internally generated and reused process gases. |
| `water_accounting` | water withdrawal, recirculation, and discharge | volume | m3 | Record withdrawal, make-up, recirculated, evaporated, and discharged water separately; do not treat closed-loop recirculation as a new withdrawal. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare whether the foreground starts with integrated raw-material and steelmaking operations or with purchased continuously cast or ingot-cast non-alloy steel slab; identify slab grade, route, supplier geography, recycled-input basis, and upstream dataset. |
| starting_condition_role | The starting condition prevents an undefined mixture of cradle-to-gate steel production and gate-to-gate hot rolling. |
| product_classification_scope | CPC 3.0:41211, restricted to uncoated non-alloy flat products at least 600 mm wide and not further worked than hot-rolled. |
| recursive_input_rule | A purchased product already in this PCR category remains a visible product input with a separate upstream dataset; do not recursively reapply this PCR or relabel it as unprocessed slab. |
| upstream_dataset_requirement | Every purchased slab, hot metal, DRI, or same-category steel input requires a geographically, temporally, technologically, and recycled-input-representative upstream dataset or an explicit documented proxy. |
| disclosure | State cradle-to-gate or gate-to-gate scope, steelmaking route, casting route, product form, grade, dimensions, surface state, pickling and oiling, coating exclusion, recycled-input categories, co-product treatment, packaging, geography, and production period. |

Normative boundary rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_basis` | declared foreground system | A cradle-to-gate package shall include raw-material and energy supply, steelmaking and casting, hot rolling, on-site ancillary services, wastewater and waste treatment, and dispatch preparation; a gate-to-gate package may start with purchased slab only when the upstream slab dataset and boundary are linked and disclosed. | `worldsteel-lci-methodology-2017` |
| `boundary_hot_rolling_core` | hot-rolling foreground | Include input storage and handling, applicable surface conditioning, reheating, descaling, roughing and width reduction, rolling to final dimensions and properties, cooling, coiling for strip, cutting for sheet or plate, trimming, roll-shop burdens, internal transport, utilities, direct emissions, water circuits, and waste management. | `eu-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_pickling_state` | pickled or oiled delivery | Include pickling, rinsing, acid recovery or neutralisation, associated energy and water, effluent and sludge treatment, direct emissions, and temporary oiling only when the dispatched product is declared pickled or pickled-and-oiled; otherwise exclude these operations. | `eu-jrc-fmp-bref-2022`; `worldsteel-hrc-eco-profile-2022` |
| `boundary_product_exclusions` | product eligibility | Exclude cold rolling, stainless or other alloy steel, width below 600 mm, cladding, plating, galvanizing, painting, polymer or other coating, and downstream slitting below the category width, forming, machining, welding, assembly, or component fabrication. | `unsd-cpc-3-2025`; `unsd-hs-7208`; `aisc-steel-construction-pcr-2025` |
| `boundary_route_separation` | route and product mix | Keep BF-BOF, scrap-EAF, DRI-EAF, and purchased-slab routes separate unless a production-weighted mix is required and the weighting period, product equivalence, geography, and route shares are documented. | `worldsteel-lci-methodology-2017`; `worldsteel-hrc-eco-profile-2022` |
| `boundary_packaging` | dispatch preparation | Include packaging that accompanies the product to the gate as a separate inventory input while keeping it outside the net reference-product mass. | `worldsteel-lci-study-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_slab_supply` | Steelmaking and slab supply | conditional | Include as foreground when steelmaking or casting is controlled by the reporting organization; otherwise link a representative upstream slab dataset. | Establish route, metallic charge, recycled inputs, casting, and slab burden. | kg cast slab supplied to hot rolling |
| `p_hot_rolling` | Slab reheating, descaling, and hot rolling | required | Always included. | Convert slab to hot-rolled strip or plate while recording yield, energy, water, direct emissions, scale, scrap, and wastes. | kg hot-rolled intermediate leaving the rolling line |
| `p_pickling` | Hot-rolled product pickling and temporary oiling | conditional | Include only for a dispatched pickled or pickled-and-oiled surface state. | Remove oxide scale and prepare the declared uncoated surface without cold rolling or coating. | kg pickled hot-rolled product |
| `p_finishing_dispatch` | Finishing and dispatch preparation | required | Always included. | Cool, coil or cut, trim, inspect, package, and release the qualifying product at the steelworks gate. | 1,000 kg net qualifying product dispatched |

### Process: Steelmaking and slab supply (`p_slab_supply`)

#### Inputs

##### Product flows

###### Metallic charge and reductants (`metallic_charge`)

Record ore-based metallics, hot metal, DRI/HBI, purchased scrap, ferro-materials, carbon sources, and fluxes used for the declared route. Keep external pre-consumer and post-consumer scrap separate from home scrap.

- Selected flow: Route-specific metallic charge and reductant flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured receipts and stock-adjusted consumption attributable to slab production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg cast slab supplied to hot rolling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_and_slab_supply`

###### Steelmaking energy and utilities (`steelmaking_energy`)

Record purchased electricity, fuels, oxygen, steam, and other utilities, with internally generated process gases reported separately to prevent double counting.

- Selected flow: Route-specific energy-carrier and utility flows; Tiangong UUIDs unresolved
- Flow property / unit: Energy, mass, or volume / MJ, kWh, kg, or m3
- Amount rule: metered use or reconciled site energy balance attributable to slab production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg cast slab supplied to hot rolling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuels`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cast non-alloy steel slab (`cast_slab_output`)

Record qualifying non-alloy steel slab transferred to the hot-rolling line and retain grade, casting route, and batch or campaign linkage.

- Selected flow: Non-alloy steel slab; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured cast slab transferred to hot rolling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cast slab supplied to hot rolling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_and_slab_supply`

###### Steelmaking co-products and recovered materials (`steelmaking_coproducts`)

Record each exported co-product or recovered material separately with destination, quality, market demand, and allocation treatment; internally reused material remains an internal transfer.

- Selected flow: Co-product-specific product flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: measured net export by co-product after internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast slab supplied to hot rolling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_recovery`

##### Waste flows

###### Steelmaking residues sent to treatment (`steelmaking_residues`)

Record slags, dusts, sludges, spent refractories, and other residues by treatment destination after subtracting verified internal reuse or external recovery.

- Selected flow: Residue-specific waste flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: weighed or reconciled net residue sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast slab supplied to hot rolling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_and_waste`

##### Elementary flows

###### Direct steelmaking emissions (`steelmaking_direct_emissions`)

Record measured or permitted direct releases to air and water at the point they cross the site boundary; do not substitute regulatory limits for measured inventory values.

- Selected flow: Substance- and compartment-specific elementary flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from documented concentration and flow measurements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast slab supplied to hot rolling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

### Process: Slab reheating, descaling, and hot rolling (`p_hot_rolling`)

#### Inputs

##### Product flows

###### Non-alloy steel slab feed (`slab_feed`)

Record the slab mass entering the rolling line with grade, casting route, supplier or internal batch, route, and upstream dataset link.

- Selected flow: Non-alloy steel slab; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured slab charged to the reheating or direct-charging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_and_slab_supply`

###### Reheating fuels and recovered gases (`reheating_energy`)

Record purchased fuels and internally generated process gases consumed by reheating, including measured quantity and net calorific value, with internal gas transfers reconciled once.

- Selected flow: Fuel- and gas-specific product flows; Tiangong UUIDs unresolved
- Flow property / unit: Energy, mass, or volume / MJ, kg, or m3
- Amount rule: metered or reconciled reheating-furnace consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuels`

###### Rolling-line electricity (`rolling_electricity`)

Record electricity for descaling pumps, stands, drives, cooling, coilers, cutting, extraction, water treatment, and attributable ancillary equipment.

- Selected flow: Geography-specific electricity product flow; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented allocation from a reconciled site meter hierarchy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuels`

###### Rolling and descaling water (`rolling_water`)

Record make-up and withdrawn water separately from recirculated water for descaling, roll cooling, strip or plate cooling, and scale transport.

- Selected flow: Source-specific water product or elementary flow; Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered withdrawal and make-up water; report recirculation separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`

###### Rolling consumables (`rolling_consumables`)

Record lubricants, hydraulic fluids, roll consumption, water-treatment chemicals, and other material consumables that cross the system boundary.

- Selected flow: Consumable-specific product flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: stock-adjusted issued quantity attributable to the rolling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_packaging`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-rolled intermediate (`hot_rolled_intermediate`)

Record the on-spec hot-rolled coil or plate intermediate leaving rolling and cooling before optional pickling or dispatch finishing.

- Selected flow: Hot-rolled non-alloy steel intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured on-spec intermediate output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`

###### Recovered rolling scrap and mill scale (`rolling_recovered_material`)

Record crop scrap, cobbles, and mill scale as separate recovered material outputs when they have a verified internal or external recovery route; internal returns do not count as external recycled input.

- Selected flow: Recovery-route-specific steel scrap or mill-scale product flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net quantity transferred to recovery after internal reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_recovery`

##### Waste flows

###### Rolling residues and wastewater to treatment (`rolling_waste`)

Record non-recovered scale, sludge, spent lubricants, refractory or roll-shop wastes, and wastewater sent to on-site or off-site treatment by destination.

- Selected flow: Treatment-route-specific waste and wastewater flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured net transfer to treatment after recovery and recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_and_waste`

##### Elementary flows

###### Direct reheating, rolling, and water emissions (`rolling_direct_emissions`)

Record direct air releases from reheating and mechanical operations and final water releases after treatment using substance- and compartment-specific flows.

- Selected flow: Substance- and compartment-specific elementary flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from documented concentration and flow measurements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot-rolled intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

### Process: Hot-rolled product pickling and temporary oiling (`p_pickling`)

#### Inputs

##### Product flows

###### Hot-rolled product for pickling (`pickling_feed`)

Record the hot-rolled product entering the pickling line and link it to its rolling batch and surface state.

- Selected flow: Hot-rolled non-alloy steel intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering pickling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg pickled hot-rolled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`

###### Pickling materials, water, and energy (`pickling_inputs`)

Record acid by type and concentration, inhibitors, rinse water, neutralisation chemicals, temporary oil, electricity, steam, and fuel used by the pickling line.

- Selected flow: Material-, water-, and energy-specific product flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass, volume, or energy / kg, m3, kWh, or MJ
- Amount rule: metered use and stock-adjusted consumption attributable to pickled output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg pickled hot-rolled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_operation`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pickled hot-rolled product (`pickled_product`)

Record the on-spec pickled or pickled-and-oiled uncoated hot-rolled product leaving the line.

- Selected flow: Pickled hot-rolled non-alloy steel; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured on-spec product leaving pickling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg pickled hot-rolled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`

##### Waste flows

###### Spent acid, sludge, and pickling wastewater (`pickling_waste`)

Record regenerated or exported spent acid, neutralisation sludge, scale, rinse-water purge, and other wastes separately by recovery or treatment route.

- Selected flow: Treatment-route-specific pickling waste flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured net waste and wastewater leaving the pickling system after internal recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled hot-rolled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_operation`

##### Elementary flows

###### Direct pickling emissions (`pickling_direct_emissions`)

Record acid mist and other direct releases to air and final treated releases to water where they cross the site boundary.

- Selected flow: Substance- and compartment-specific elementary flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from documented concentration and flow measurements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg pickled hot-rolled product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

### Process: Finishing and dispatch preparation (`p_finishing_dispatch`)

#### Inputs

##### Product flows

###### Qualifying hot-rolled product before dispatch (`dispatch_feed`)

Record as-rolled or pickled product entering final inspection and dispatch preparation with batch linkage preserved.

- Selected flow: Hot-rolled non-alloy steel intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering dispatch finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dispatched product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`

###### Packaging materials (`dispatch_packaging`)

Record straps, wrappers, edge protectors, pallets, and other packaging that accompanies the product, separately from net product mass.

- Selected flow: Packaging-material-specific product flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured or stock-adjusted packaging issued to qualifying shipments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dispatched product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_packaging`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final qualifying hot-rolled steel (`reference_product_output`)

Record the final net mass released at the steelworks gate and retain all required product and route qualifiers. Coil uses the selected representative UUID; sheet or plate requires a verified state-matching flow.

- Selected flow: Steel hot rolled coil `2126a80d-1cd0-46e4-8f30-341bd20a1d64`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1,000 kg net qualifying product per reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

###### Trimming scrap sent to recovery (`finishing_scrap`)

Record trimming and crop scrap by internal return or external recovery destination without counting internal return as external recycled input.

- Selected flow: Recovery-route-specific steel scrap flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net scrap transferred from finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dispatched product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_recovery`

##### Waste flows

###### Finishing and packaging waste (`finishing_waste`)

Record non-recovered edge material, rejected packaging, and other dispatch waste by treatment destination.

- Selected flow: Treatment-route-specific waste flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net waste sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dispatched product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_and_waste`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | separable routes, lines, and products | Avoid allocation by using route-, line-, process-, and product-specific meters and mass balances and by subdividing independently measured operations before assigning shared burdens. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | home scrap, mill scale, process gases, water, and other internal loops | Model internal transfers once as an output from the producing process and an input to the receiving process; use the net site balance and do not claim an external recycling credit or external recycled-content input for internally recirculated material. | `worldsteel-lci-methodology-2017` |
| `allocation_coproducts` | co-products with a verified external function and market demand | Prefer system expansion or substitution using the documented equivalent external function; if this cannot be applied, use a justified physical relationship and disclose the rationale and sensitivity to alternatives. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_hot_rolling` | shared reheating, rolling, utilities, and finishing | After subdivision, assign directly metered burdens to the relevant product; allocate only the residual shared burden using a documented physical relationship that reflects the process, with product mass used only when products receive equivalent processing and no better relation is available. | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_reporting` | external scrap input and future recycling scenarios | Report external pre-consumer and post-consumer scrap input separately from home scrap; if an end-of-life recycling method is applied downstream, disclose it separately from cradle-to-gate results and prevent double counting. | `worldsteel-lci-methodology-2017`; `aisc-steel-construction-pcr-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_output` | `p_hot_rolling`; `p_pickling`; `p_finishing_dispatch` | product identity and output | production, laboratory, inspection, and dispatch records | grade/specification; heat/batch; width; thickness; coil/plate; surface state; edge condition; pickling; oiling; coating status; gross mass; packaging mass; net product mass | Reconcile certified scales, production execution records, inspection certificates, and dispatch records. | kg; mm | per batch and shipment; monthly reconciliation | normally 12 consecutive months | each included rolling, pickling, and finishing line | Sum conforming net output by declared product state; keep off-grade, rework, and scrap separate. | scale calibration, inspection certificate, batch genealogy, and dispatch reconciliation |
| `cp_route_and_slab_supply` | `p_slab_supply`; `p_hot_rolling` | route, recycled input, and slab supply | purchasing, melt-shop, casting, supplier, and transfer records | steelmaking route; casting route; slab grade; slab mass; supplier; external pre-consumer scrap; external post-consumer scrap; home scrap; DRI/HBI; hot metal; upstream dataset id | Reconcile receipts, stock changes, melt-shop charge sheets, casting records, internal transfers, and supplier declarations. | kg; % by mass | per heat or batch; monthly reconciliation | normally 12 consecutive months | all sites and suppliers feeding included output | Attribute slab and charge records by traceable heat/batch or documented production-weighted route mix. | weighbridge and inventory reconciliation, charge sheets, supplier evidence, and route-share calculation |
| `cp_energy_and_fuels` | `p_slab_supply`; `p_hot_rolling`; `p_pickling` | purchased and internally transferred energy | meters, invoices, fuel analyses, and gas-balance records | electricity; fuel quantity; steam; oxygen; process-gas generation and use; net calorific value; meter hierarchy; allocation driver | Read calibrated meters and invoices and reconcile internal gas and steam transfers to the site energy balance. | kWh; MJ; kg; m3 | continuous or per batch; monthly close | normally 12 consecutive months | each included process and shared utility | Sum measured use; assign direct meters first and allocate residual shared use with the declared physical driver. | calibration records, invoices, fuel certificates, and energy-balance closure |
| `cp_water_balance` | `p_hot_rolling`; `p_pickling` | withdrawal, make-up, recirculation, and discharge | flow meters, water treatment logs, and discharge records | source; withdrawal; make-up; recirculation; evaporation; blowdown; discharge; destination | Reconcile calibrated source, process-loop, and final-discharge meters. | m3 | continuous or daily; monthly close | normally 12 consecutive months | each included water circuit and final discharge point | Report gross withdrawal, make-up, recirculation, and final discharge separately; allocate shared loops by measured make-up or another documented physical driver. | meter calibration, water-balance closure, and treatment/discharge logs |
| `cp_materials_and_packaging` | `p_hot_rolling`; `p_finishing_dispatch` | rolling consumables and dispatch packaging | purchasing, stores, issue, and stock records | material identity; opening stock; receipts; closing stock; issued quantity; return; product assignment | Use stock-adjusted consumption and shipment-specific packaging records where available. | kg | per issue or shipment; monthly close | normally 12 consecutive months | each included process and dispatch operation | Opening stock plus receipts minus closing stock and documented returns, assigned first by direct issue. | inventory reconciliation, issue ticket, and packaging specification |
| `cp_pickling_operation` | `p_pickling` | pickling materials, recovery, energy, water, and wastes | bath analysis, meters, production logs, acid regeneration, waste, and treatment records | acid type/concentration; inhibitor; rinse water; energy; oil; input mass; output mass; spent acid; regenerated acid; sludge; wastewater; emission monitoring | Reconcile bath additions and withdrawals, meters, line production, acid recovery, and waste manifests. | kg; m3; kWh; MJ | per batch or continuous line; monthly close | normally 12 consecutive months | every included pickling and acid-recovery line | Normalize only to pickled output and preserve regenerated acid as an internal loop or verified external recovery. | bath laboratory results, meter calibration, mass balance, and waste manifests |
| `cp_mass_outputs_and_waste` | `p_slab_supply`; `p_hot_rolling`; `p_finishing_dispatch` | product, scrap, scale, sludge, and waste destinations | scales, production logs, transfer tickets, and waste manifests | input mass; product mass; crop scrap; cobbles; mill scale; sludge; off-grade; rework; waste mass; recovery/treatment destination | Reconcile process and site mass balances with calibrated scales and verified transfer records. | kg | per batch where available; monthly close | normally 12 consecutive months | each included process and treatment boundary | Keep internal return, external recovery, treatment, disposal, and stock change separate; investigate unexplained imbalance. | scale calibration, transfer ticket, waste manifest, and signed balance review |
| `cp_coproducts_and_recovery` | `p_slab_supply`; `p_hot_rolling`; `p_finishing_dispatch` | co-products and recovered materials | scales, sales/transfer records, specifications, and destination evidence | material; mass; quality; internal use; external use; destination; market demand; substituted function; allocation method | Verify net export after internal reuse and retain evidence of the receiving function or treatment. | kg; MJ | per transfer; monthly close | normally 12 consecutive months | site boundary and each receiving route | Net internal transfers before reporting export; keep each material and destination separate. | weighbridge record, specification, contract or transfer evidence, and allocation review |
| `cp_direct_emissions` | `p_slab_supply`; `p_hot_rolling`; `p_pickling` | direct releases to air and water | continuous monitors, periodic tests, wastewater analyses, and flow meters | substance; compartment; concentration; flow; operating time; test method; detection limit; treatment status | Use applicable continuous or periodic monitoring and calculate mass release from documented concentration and flow data. | kg; mg/Nm3; mg/L; Nm3; m3 | continuous or permit-defined periodic frequency | same production period as activity data | every included emission point and final discharge point | Integrate or multiply matched concentration and flow over the operating period; retain non-detect treatment and uncertainty. | calibration, accredited test report, laboratory result, and calculation trace |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory amount | normalized amount = attributable amount × 1,000 kg / conforming net dispatched product mass | attributable flow amount; conforming net dispatched product mass | amount per 1,000 kg reference product |  |
| `calc_net_product_mass` | dispatch output | net product mass = certified shipped gross mass minus separately weighed or documented packaging mass | gross shipped mass; packaging mass | kg net qualifying product |  |
| `calc_hot_rolling_yield` | hot rolling and finishing | yield = conforming net product mass / qualifying slab input mass; report crop scrap, cobbles, scale, off-grade, rework, and stock change separately | slab input; conforming product; scrap; scale; off-grade; rework; stock change | mass-balance and yield disclosure | `eu-jrc-fmp-bref-2022` |
| `calc_recycled_input` | steel route disclosure | external recycled-input share = (external pre-consumer scrap + external post-consumer scrap) / total metallic charge × 100; report home scrap separately and state any alternative governing method | external pre-consumer scrap; external post-consumer scrap; total metallic charge; home scrap | % by mass and category disclosure | `worldsteel-lci-methodology-2017` |
| `calc_energy_conversion` | fuels and process gases | energy = measured mass or standard volume × documented net calorific value; reconcile internal generation and consumption once | fuel or gas quantity; net calorific value; internal transfer balance | MJ attributable energy | `worldsteel-lci-methodology-2017` |
| `calc_direct_release` | monitored emissions | mass release = matched concentration × normalized dry or wet gas flow, or concentration × water discharge volume, with unit conversion and operating time documented | concentration; flow or discharge volume; operating time; measurement basis | kg substance released | `eu-jrc-fmp-bref-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | final product and all production lots | Demonstrate non-alloy grade, finished width at least 600 mm, hot-rolled-only state, coil or sheet/plate delivery, surface state, and absence of coating; segregate nonconforming products. | specifications, inspection certificates, and batch genealogy |
| `dq_route` | steel and slab supply | Identify steelmaking and casting route, geography, supplier or site, external pre-consumer and post-consumer scrap, and home scrap; do not use an unexplained production mix. | charge sheets, route records, supplier declarations, and production-weighted calculation |
| `dq_temporal` | foreground activity data | Use a representative period normally covering 12 consecutive months; data older than five years or a shorter period require a documented representativeness justification. | reporting-period register and deviation justification |
| `dq_measurement` | material, energy, water, and emissions | Prefer measured data, then calculated data; identify estimates explicitly and retain meter, scale, laboratory, conversion-factor, and calculation evidence. | calibration, invoices, laboratory reports, and calculation trace |
| `dq_completeness` | all included processes | Cover all required and triggered conditional processes and reconcile input, product, co-product, recovered material, waste, stock change, and direct-emission records; document exclusions and cut-offs. | signed completeness checklist and mass/energy/water balances |
| `dq_upstream` | purchased slab and other significant upstream inputs | Use representative upstream datasets for geography, time, technology, route, and recycled-input basis; document every proxy and sensitivity relevant to the study goal. | dataset metadata, supplier evidence, and proxy register |
| `dq_reproducibility` | complete foreground package | Preserve sufficient raw-field definitions, aggregation logic, allocation decisions, and source links for an independent practitioner with authorized access to reproduce the normalized inventory. | data dictionary, calculation workbook or script, and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | reference product | Fail conformance if the grade is stainless or other alloy steel, width is below 600 mm, the product is cold-rolled or further fabricated, or any cladding, plating, galvanizing, paint, polymer, metallic, or other coating is present. | `unsd-cpc-3-2025`; `unsd-hs-7208` |
| `validate_reference_flow` | reference flow and output | Require exactly 1,000 kg net qualifying product per reference flow, Mass as the quantitative property, packaging outside net product mass, and all required qualifiers; coil may use the selected UUID, while plate or sheet requires a verified state-matching flow. | `worldsteel-hrc-eco-profile-2022` |
| `validate_route_and_scrap` | route disclosure | Require a declared steelmaking and casting route, external pre-consumer and post-consumer scrap values, separately reported home scrap, route shares for a mix, and the recycled-content method and denominator. | `worldsteel-lci-methodology-2017` |
| `validate_process_coverage` | process map | Require `p_hot_rolling` and `p_finishing_dispatch`; require either foreground `p_slab_supply` or a linked representative upstream slab dataset; require `p_pickling` exactly when dispatched product state is pickled or pickled-and-oiled. | `eu-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_surface_boundary` | surface state | Reject a dataset that declares pickled product but omits pickling burdens, or as-rolled product but includes unassigned pickling; reject coating burdens and downstream fabrication within this PCR result. | `unsd-hs-7208`; `eu-jrc-fmp-bref-2022` |
| `validate_balances` | mass, energy, and water | Require reconciled product and process mass balances, one-time accounting of internal energy and material loops, and separate water withdrawal, recirculation, and discharge; investigate and disclose unexplained imbalance. | `worldsteel-lci-methodology-2017` |
| `validate_allocation` | shared burdens, co-products, and recovery | Require subdivision before allocation, a documented physical driver for residual shared burdens, disclosed co-product treatment, net internal-recycling accounting, and no double counting of scrap or future recycling credits. | `worldsteel-lci-methodology-2017`; `aisc-steel-construction-pcr-2025` |
| `validate_data_quality` | foreground package | Require the declared period, site and supplier coverage, calibration and laboratory evidence, upstream dataset metadata, proxy register, and reproducible calculation trail; report deviations rather than silently filling missing values. | `worldsteel-lci-methodology-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for a hot-rolled non-alloy steel mill product; may be published as a `secondary_dataset` or `background_dataset` after review. |
| downstream_use | Supports product, process, and lifecyclemodel construction for electrical equipment, photovoltaic support systems, buildings, and manufacturing where the declared grade, dimensions, delivery form, surface state, geography, period, and route are compatible. |
| allowed_use | Cradle-to-gate steel product modelling or gate-to-gate hot-rolling modelling with a linked upstream slab dataset; product-footprint and EPD work when the governing programme rules and additional life-cycle modules are applied separately. |
| excluded_use | Cold-rolled, stainless, alloy, coated, narrow-width, or fabricated steel products; direct comparison of products with different functions or incompatible boundaries; legal compliance claims; use of a coil identity for plate without verification. |
| required_metadata | PCR id; CPC context; product-flow, flow-property, and unit-group UUIDs; grade/specification; thickness; width; coil or sheet/plate; surface and edge state; pickling and oiling; coating absence; steelmaking and casting route; route shares; recycled-input categories; slab source; geography; sites; production period; boundary; allocation; upstream datasets; packaging. |
| required_quality_disclosure | Foreground versus upstream data; meter and scale coverage; 12-month representativeness or deviation; route and supplier coverage; mass, energy, and water reconciliation; measured/calculated/estimated shares; proxy use; cut-offs; co-product and recycling method; unresolved UUIDs; review status. |
| update_trigger | Change in steel grade boundary, width or delivery state, steelmaking/casting route or route shares, external scrap basis, slab supplier, pickling or oiling, coating status, process technology, energy or water system, allocation or recycling method, geography, production period, or a newly verified reference-flow/unit-group identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, 30 June 2025, p. 207, <https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf> (retrieved 2026-08-07) | Official CPC 41211 identity, hierarchy, width, material, and hot-rolled-only scope |
| `unsd-hs-7208` | Official guidance (`official_guidance`) | United Nations Statistics Division, HS 2012 heading 7208 classification detail, <https://unstats.un.org/unsd/classifications/Econ/Detail/EN/32/7208> (retrieved 2026-08-07) | Coil/non-coil and thickness variants, pickled coil inclusion, and exclusion of clad, plated, or coated products |
| `worldsteel-lci-methodology-2017` | Official guidance (`official_guidance`) | World Steel Association, *Life Cycle Inventory Methodology Report*, 2017, <https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf> (retrieved 2026-08-07) | Cradle-to-gate and gate-to-gate boundaries, route diagrams, primary-data quality, internal recovery, co-products, scrap, allocation, and recycling rules |
| `worldsteel-lci-study-2021` | Dataset (`dataset`) | World Steel Association, *Life Cycle Inventory (LCI) Study: 2021 Data Release*, <https://worldsteel.org/wp-content/uploads/2021-LCA-Study-Report.pdf> (retrieved 2026-08-07) | Product list, plant data context, and separate accounting for packaging such as steel strap |
| `worldsteel-hrc-eco-profile-2022` | Dataset (`dataset`) | World Steel Association, *Global Hot Rolled Coil — Construction Eco-profile*, May 2022, <https://worldsteel.org/wp-content/uploads/worldsteel_eco-profiles_global-HRC-2022_Construction-1.pdf> (retrieved 2026-08-07) | One-metric-tonne declared product, hot-rolled-coil state, cradle-to-gate plus end-of-life scope, BOF/EAF production routes, and separate co-product/recycling reporting context |
| `eu-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Ferrous Metals Processing Industry*, 2022, <https://eippcb.jrc.ec.europa.eu/sites/default/files/2022-12/FMP_BREF_2022.pdf> (retrieved 2026-08-07) | Hot-rolling process decomposition, reheating, descaling, rolling, cooling, coiling/cutting, pickling, water circuits, residues, and emissions monitoring |
| `aisc-steel-construction-pcr-2025` | Standard (`standard`) | American Institute of Steel Construction, *Product Category Rule* overview for Smart EPD Part B PCR 1000-008 v3.0, 3 April 2025, <https://www.aisc.org/sustainability/product-category-rule/> (retrieved 2026-08-07) | Mill-product boundary for unfabricated plate and coil, distinction from manufacturing/fabrication, declared tonne, modules, and recycling disclosure |
