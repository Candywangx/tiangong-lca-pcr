---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.uncooked-pasta-not-stuffed-or-otherwise-prepared
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Uncooked pasta, not stuffed or otherwise prepared

## 1. Scope and Applicability

This PCR covers factory production of uncooked, unfilled pasta and noodle products that are not otherwise prepared and fall within CPC 3.0 code 23710. Covered products may be dry, semi-dried, or another declared uncooked moisture state and may use wheat, rice, other cereals, pulses, or mixtures as the principal farinaceous material. The foreground data package shall describe the actual formulation, forming route, conditioning state, packaging state, and reporting gate.

Filled pasta, cooked or pre-cooked pasta, seasoned or otherwise prepared products, complete dishes, sauces, and products whose principal delivered function is not an uncooked pasta product are excluded. Ingredient production, consumer cooking, distribution, and end-of-life are not part of the default foreground manufacturing dataset, but may be connected as upstream or downstream datasets in a lifecycle model.

The Tiangong flow `540fef24-1038-48b8-8ee1-8cc415df780a` is a verified product flow for **semi-dried noodles** and is used only as the representative product form for this category. It is not a generic UUID for every CPC 23710 product. A data author shall declare the actual product form and shall replace the representative UUID when a more specific real Tiangong flow matches that product. The representative UUID must never be silently assigned to dry pasta, fresh uncooked pasta, egg pasta, rice noodles, or another materially different form.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.uncooked-pasta-not-stuffed-or-otherwise-prepared |
| classification_refs | CPC 3.0: 23710 — Uncooked pasta, not stuffed or otherwise prepared |
| covered_products | Uncooked and unfilled pasta or noodles delivered without other preparation; dry, semi-dried, fresh-uncooked, or another explicitly declared moisture state; wheat-, rice-, other cereal-, pulse-, or mixed-material formulations |
| excluded_products | Filled pasta; cooked or pre-cooked pasta; seasoned or otherwise prepared pasta; complete dishes; sauces; couscous or another product classified outside CPC 23710 |
| representative_product | Semi-dried noodles are the representative product/physical form because the verified Tiangong reference flow is specific to that form; the category remains broader than the representative flow |
| production_route | Ingredient receipt and preparation; dough or batter preparation; forming by extrusion, sheeting, cutting, or another declared method; product-specific conditioning or drying; inspection; and packaging or bulk release |
| market_state | Uncooked product at the declared factory-gate release condition, with moisture/conditioning and packaging state explicitly reported |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Uncooked, unfilled, and not otherwise prepared pasta or noodles at the declared factory-gate release condition |
| How much | 1 kg net product mass, excluding packaging |
| How well | Conforming to the producer's release specification and applicable legal or customer requirements for the declared product form, formulation, moisture/conditioning state, and packaging state |
| How long or cycle | One production campaign or reporting period sufficient to represent the declared product until the factory-gate hand-off; shelf life is reported as metadata and does not change the 1 kg reference amount |
| reference_flow_link | One kilogram of the declared saleable uncooked pasta output; use the representative semi-dried-noodles UUID only when that identity is accurate, otherwise select a more specific real product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net uncooked pasta product |
| Reference product flow | semi-dried noodles `540fef24-1038-48b8-8ee1-8cc415df780a` — representative only; replace for a more specific actual product form |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual product form and Tiangong product-flow identity; principal farinaceous material; formulation and egg/non-egg status; forming technology; moisture or conditioning state at release; packaging or bulk state; production geography and facility/route; factory-gate reporting point |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete. If the declared form is not semi-dried noodles, retaining UUID `540fef24-1038-48b8-8ee1-8cc415df780a` without an explicit documented identity match is a validation error.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized product/intermediate rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product as net product mass. Packaging mass is inventoried separately and is never included in the 1 kg reference amount. |
| `mass_conversion` | Ingredient, intermediate, product, waste, and moisture-balance mass records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert source records to kg using documented unit conversions before normalization; retain original units and conversion evidence. |
| `conditioning_state` | Product and intermediate mass values | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the measurement point and product moisture/conditioning state. Do not compare or combine masses measured at materially different conditioning states without a documented moisture correction. |
| `energy_units` | Electricity and thermal-energy inputs | Energy appropriate to the selected flow | kWh for electricity; MJ for fuel or delivered thermal energy | Keep electricity and thermal energy as separate records and document any calorific-value or steam/heat conversion used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted farinaceous ingredients, water, other formulation ingredients, utilities, and packaging materials at the manufacturing-site receipt point, together with the declared formulation, product form, and initial moisture state |
| starting_condition_role | Foreground manufacturing input gate; upstream production burdens are supplied by separate traceable datasets rather than recreated inside the pasta manufacturing process |
| product_classification_scope | CPC 3.0 code 23710 across declared uncooked and unfilled product forms; the semi-dried-noodles flow is representative, not category-wide identity authority |
| recursive_input_rule | Purchased uncooked pasta or noodle material from the same category that enters reprocessing shall be recorded once as a technosphere product input with its own upstream dataset and declared state; do not recursively reconstruct its manufacturing inside this foreground dataset |
| upstream_dataset_requirement | Each material ingredient, utility, and packaging input shall link to a geographically, technologically, and temporally representative upstream dataset or be disclosed as a data gap |
| disclosure | Declare product form, formulation, moisture/conditioning state, forming and conditioning technologies, packaging state, reporting gate, included sites, allocation method, data period, and any omitted or unresolved flows |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_manufacturing` | All foreground datasets | Include ingredient receipt/preparation, dough or batter preparation, forming, product-specific conditioning, inspection/rework accounting, and packaging or bulk release when performed within the reporting organization. | `unafpa-dry-pasta-pefcr-2020` |
| `boundary_dry_route` | Dry or semi-dried routes | Include the actual conditioning/drying operation, electricity, thermal energy or fuel, water or moisture removal, losses, and the declared released moisture state. Apply dry-pasta source rules only to a route that is demonstrably within their dry-pasta scope. | `unafpa-dry-pasta-pefcr-2020` |
| `boundary_upstream_connections` | Ingredient, utility, and packaging production | Represent upstream production and inbound services through separate datasets linked to the collected foreground bill of materials; do not treat an unverified generic proxy as product-specific data. | `unafpa-dry-pasta-pefcr-2020` |
| `boundary_downstream_exclusion` | Default foreground product dataset | Exclude distribution, consumer storage/cooking, packaging end-of-life, and food end-of-life from this factory-gate foreground dataset. Add them only in an explicitly declared downstream lifecycle model. |  |
| `boundary_recursive_category_input` | Same-category purchased pasta or noodle input | Record the purchased product at its actual entry state with a distinct upstream dataset and do not expand the same category recursively within the foreground process. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `dough_forming` | Ingredient preparation, dough/batter preparation, and forming | required |  | Converts the declared formulation into a shaped uncooked intermediate while preserving product-specific formulation and forming records | kg formed uncooked intermediate |
| `conditioning_release` | Conditioning, inspection, packaging, and factory-gate release | required |  | Brings the shaped intermediate to the declared moisture/conditioning and packaging state and releases the reference product | 1 kg net saleable uncooked pasta product |

### Process: Ingredient preparation, dough/batter preparation, and forming (`dough_forming`)

#### Inputs

##### Product flows

###### Principal farinaceous ingredient (`principal_farinaceous_input`)

Record every principal flour, semolina, meal, starch-bearing material, or equivalent farinaceous ingredient separately by material identity, supplier/origin when known, lot, moisture basis where relevant, and measured mass.

- Selected flow: Product-specific farinaceous ingredient flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured accepted ingredient mass charged to the declared product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formed uncooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_bom`
- Sources: `unafpa-dry-pasta-pefcr-2020`

###### Process water (`process_water_input`)

Record water intentionally incorporated into dough/batter or used as a direct formulation input. Cleaning water that does not become part of the product shall be recorded separately when it crosses the selected process boundary.

- Selected flow: Site-specific water supply flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-recipe water charged to the declared product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formed uncooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `unafpa-dry-pasta-pefcr-2020`

###### Other formulation ingredients (`other_recipe_inputs`)

Record eggs or egg products, salt, vegetables, spices, processing aids, and other deliberately added ingredients as separate product-specific rows whenever present. Do not infer absent ingredients from the representative semi-dried-noodles flow.

- Selected flow: Product-specific formulation ingredient flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass of each ingredient charged to the declared product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formed uncooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_bom`
- Sources: `unafpa-dry-pasta-pefcr-2020`

###### Dough preparation and forming electricity (`dough_forming_electricity`)

Record electricity for dosing, mixing/kneading, extrusion, sheeting, cutting, and directly assigned auxiliary equipment. Shared electricity is allocated only through the declared allocation rule.

- Selected flow: Site- and period-specific electricity supply flow; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation of facility-meter electricity to the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg formed uncooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dough_forming_energy`
- Sources: `unafpa-dry-pasta-pefcr-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed uncooked pasta intermediate (`formed_pasta_intermediate`)

Record the measured mass and conditioning state of shaped product transferred to conditioning/release. This is an internal intermediate and shall not be substituted for the final reference product.

- Selected flow: Product-specific formed uncooked pasta intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured accepted intermediate mass transferred from forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formed uncooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output`
- Sources:

##### Waste flows

###### Preparation and forming losses (`dough_forming_losses`)

Record spills, rejected dough, trimmings, and other material leaving the process as waste by actual treatment route. Material returned internally before the process output measurement is documented as an internal loop and is not double-counted as waste.

- Selected flow: Treatment-specific food manufacturing waste flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by treatment route, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg formed uncooked intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_waste`
- Sources: `unafpa-dry-pasta-pefcr-2020`

##### Elementary flows

### Process: Conditioning, inspection, packaging, and factory-gate release (`conditioning_release`)

#### Inputs

##### Product flows

###### Formed uncooked pasta input (`formed_pasta_input`)

Transfer the preceding process output without changing its measured mass or declared conditioning state at the transfer point.

- Selected flow: Product-specific formed uncooked pasta intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured accepted intermediate mass received by conditioning/release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable uncooked pasta output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output`
- Sources:

###### Conditioning and release electricity (`conditioning_electricity`)

Record electricity for drying or moisture conditioning when present, conveying, cooling, inspection, and packaging/release equipment. Declare which operations are included.

- Selected flow: Site- and period-specific electricity supply flow; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented allocation of facility-meter electricity to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable uncooked pasta output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy`
- Sources: `unafpa-dry-pasta-pefcr-2020`

###### Thermal energy or fuel (`conditioning_thermal_energy`)

Record each fuel, steam, or delivered-heat input used for drying or conditioning. This row is not applicable when the declared route uses no thermal-energy input; that absence shall be documented rather than assumed.

- Selected flow: Site- and technology-specific fuel, steam, or heat flow; Tiangong UUID unresolved
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel or delivered thermal energy, with documented conversion from source meter units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable uncooked pasta output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy`
- Sources: `unafpa-dry-pasta-pefcr-2020`

###### Primary and grouped packaging materials (`packaging_materials`)

Record each packaging material and component by material, mass, and packaging configuration. For unpackaged bulk release, declare that state and record reusable transport packaging only when it crosses the reporting gate.

- Selected flow: Material-specific packaging product flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-and-stock-reconciled packaging material consumed for the declared output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable uncooked pasta output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `unafpa-dry-pasta-pefcr-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Declared uncooked pasta reference product (`reference_uncooked_pasta`)

Record saleable output at the declared moisture/conditioning and packaging state. Select `semi-dried noodles` only when that is the actual product identity; otherwise replace the representative flow with a more specific verified Tiangong flow and preserve the Mass/kg support chain.

- Selected flow: semi-dried noodles `540fef24-1038-48b8-8ee1-8cc415df780a` — representative only and conditional on an actual identity match
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net saleable declared uncooked pasta output, excluding packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net declared uncooked pasta reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_identity_output`
- Sources:

##### Waste flows

###### Conditioning and product losses (`conditioning_product_losses`)

Record rejected, broken, off-specification, or otherwise lost pasta leaving the foreground system by actual treatment route. Do not apply a generic dry-pasta loss default to semi-dried, fresh, or other forms.

- Selected flow: Treatment-specific food manufacturing waste flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by declared treatment route, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable uncooked pasta output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_waste`
- Sources: `unafpa-dry-pasta-pefcr-2020`

###### Packaging losses (`packaging_losses`)

Record packaging offcuts, rejected packs, and damaged components that leave the foreground system, separated by material and actual treatment route.

- Selected flow: Material- and treatment-specific packaging waste flows; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste mass by material and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable uncooked pasta output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources: `unafpa-dry-pasta-pefcr-2020`

##### Elementary flows

###### Moisture released to air (`moisture_to_air`)

For drying or moisture-conditioning routes, calculate water released to air from measured mass and moisture records after accounting for other measured losses. Select and verify the appropriate elementary-flow UUID before activation.

- Selected flow: Water-to-air elementary flow appropriate to the inventory context; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated by `calculate_conditioning_moisture_release`; not applicable when no measurable moisture-conditioning step occurs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable uncooked pasta output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_mass_moisture`
- Sources: `unafpa-dry-pasta-pefcr-2020`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Shared or multi-output foreground operations | First avoid allocation by submetering or subdividing ingredient preparation, forming, conditioning, and packaging operations and collecting product-specific inputs and outputs. | `unafpa-dry-pasta-pefcr-2020` |
| `allocation_physical_mass` | Shared manufacturing burdens that cannot be subdivided | Allocate shared manufacturing inputs and outputs by the mass of conforming product outputs only when mass represents the underlying physical relationship; disclose the products, period, denominator, and calculation. | `unafpa-dry-pasta-pefcr-2020` |
| `allocation_scrap_as_waste` | Pasta scraps and off-specification product leaving the site | Treat material leaving as waste by its actual treatment route unless auditable records establish it as a valuable co-product. Do not credit undocumented internal rework or avoided production. | `unafpa-dry-pasta-pefcr-2020` |
| `allocation_nonphysical_exception` | Valuable co-products for which mass is not physically representative | Do not apply mass allocation by default. Document the physical relationship assessment and use a reviewed alternative only with product-specific evidence and an explicit sensitivity disclosure. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_bom` | `dough_forming` | Principal and other formulation ingredients | Batch issue, recipe, supplier, and stock records | ingredient identity; supplier and origin when known; lot; accepted mass; source unit; moisture basis when relevant; product code; campaign | Reconcile approved formulation and batch issues with receiving and inventory records | kg and original source unit | Each batch with reporting-period reconciliation | Full declared reporting period; use 12 consecutive months for an annual dry-pasta dataset, or justify a representative campaign/season for other forms | Every included manufacturing site and line | Sum accepted mass by ingredient and product; exclude unrelated products; normalize with `normalize_dough_forming_totals` | Calibrated scales; lot traceability; recipe approval; inventory reconciliation; documented conversions |
| `cp_process_water` | `dough_forming` | Formulation and direct process water | Batch dosing, flowmeter, or recipe records | meter start/end or dose; water source; operation; product code; batch; timestamp; source unit | Read dedicated meters or validated dosing systems; otherwise reconcile recipe dose to campaign counts | kg or L with documented density conversion | Each batch or continuous meter interval | Same period as product output | Every included line; shared meters require declared allocation | Sum water assigned to the declared product and normalize with `normalize_dough_forming_totals` | Meter calibration; dosing-system checks; conversion record; shared-meter reconciliation |
| `cp_dough_forming_energy` | `dough_forming` | Mixing, kneading, extrusion/sheeting/cutting electricity | Submeter or facility-meter records and equipment runtime | meter readings; equipment/line; timestamp; product code; runtime; allocation driver; kWh | Prefer line submetering; otherwise allocate reconciled facility electricity under section 7 | kWh | Meter interval and each reporting period | Same period as product output | Every included line and directly supporting equipment | Sum direct electricity plus documented allocated share; normalize with `normalize_dough_forming_totals` | Meter calibration; utility invoice reconciliation; allocation worksheet; downtime and unrelated-load exclusions |
| `cp_intermediate_output` | `dough_forming` | Formed uncooked intermediate transfer | Production and transfer records | product code; batch; mass; measurement point; moisture/conditioning state; destination; timestamp | Weigh accepted intermediate at transfer or reconcile validated continuous mass measurement | kg | Each batch or shift | Same period as input and energy records | Every included line | Sum accepted transferred mass by product and state | Scale calibration; batch reconciliation; state definition; rejected-mass segregation |
| `cp_conditioning_energy` | `conditioning_release` | Electricity, fuel, steam, or delivered heat | Utility meters, fuel invoices, boiler/steam meters, and equipment logs | energy carrier; meter readings or quantity; source unit; calorific value or conversion; equipment/line; product code; timestamp; allocation driver | Prefer line meters; reconcile energy-carrier totals to invoices and document every conversion | kWh for electricity; MJ for fuel or heat after conversion | Meter interval with reporting-period reconciliation | Same period as released product; 12 consecutive months for an annual dry-pasta dataset unless justified otherwise | Every included conditioning, inspection, and release line | Sum by carrier and operation; allocate shared use under section 7; normalize with `normalize_conditioning_totals` | Meter calibration; invoice reconciliation; conversion source; allocation worksheet; equipment scope |
| `cp_packaging_bom` | `conditioning_release` | Packaging inputs and packaging losses | Packaging specification, purchase/stock, line issue, and waste records | component identity; material; unit mass; units consumed; returned stock; waste mass; treatment route; product code; packaging configuration | Reconcile packaging specifications and line issues to packed output and material-specific waste | kg and component count | Each packaging campaign with period reconciliation | Same period as packed output | Every included packaging line; declare bulk release separately | Packaging consumed equals opening stock plus receipts minus closing/returned stock; separate product packaging from waste | Verified component weights; stock reconciliation; packaging specification; waste tickets |
| `cp_manufacturing_waste` | `dough_forming` | Pasta and ingredient losses by route | Waste scale, production rejection, rework, and treatment records | material/product; mass; cause; process; internal return flag; treatment route; hauler/record; timestamp | Weigh or mass-balance each waste stream; reconcile internal return so it is not counted as waste output | kg | Each batch/shift and waste shipment | Same period as product output | Every included process and site | Sum material that leaves the foreground system by treatment route; exclude documented internal return | Scale calibration; rejection log; waste transfer record; treatment evidence; mass-balance reconciliation |
| `cp_conditioning_waste` | `conditioning_release` | Conditioned-product losses by route | Finished-product rejection, rework, waste scale, and treatment records | product; released moisture/conditioning state; mass; cause; internal return flag; treatment route; hauler/record; timestamp | Weigh each conditioning/release loss stream and reconcile internal return against finished-product records | kg | Each batch/shift and waste shipment | Same period as released product output | Every included conditioning/release line and site | Sum product that leaves the foreground system by treatment route; exclude documented internal return | Scale calibration; release/rejection log; waste transfer record; treatment evidence; finished-product mass-balance reconciliation |
| `cp_conditioning_mass_moisture` | `conditioning_release` | Intermediate input, released output, moisture state, and moisture loss | Transfer weights, finished-product weights, moisture tests, and other loss records | input mass and moisture; output mass and moisture; sampling method; batch; other measured waste/loss; timestamp | Pair mass measurements and representative moisture tests for the same campaign; calculate only after reconciling other losses | kg and moisture fraction on a declared basis | Each product/campaign; moisture sampling at the declared control frequency | Same campaign and reporting period as output | Every included conditioning line and product form | Apply `calculate_conditioning_moisture_release`; aggregate only like products and conditioning states | Scale and moisture-method calibration; sample traceability; paired batch records; documented moisture basis |
| `cp_product_identity_output` | `conditioning_release` | Declared reference product identity and net saleable output | Product master, release specification, batch release, and finished-goods records | actual product name/form; Tiangong flow UUID; CPC; formulation; egg status; forming route; moisture/conditioning state; packaging state; net mass; site; reporting gate; release status | Verify product identity against the product master and a full Tiangong flow readback; weigh only released conforming net product | kg | Each released batch with period reconciliation | Full declared reporting period | Every included site, line, and product variant | Sum conforming net output only after grouping identical required qualifiers; do not aggregate a mismatched flow identity | Approved product master; release certificate; scale calibration; Tiangong identity evidence; qualifier completeness review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_dough_forming_totals` | Dough/forming input and output rows | Divide each reconciled campaign or period total by the accepted formed-intermediate mass for the same product, line, and conditioning state. | reconciled row total; accepted formed-intermediate mass; product/line/state keys | row amount per kg formed uncooked intermediate | `unafpa-dry-pasta-pefcr-2020` |
| `normalize_conditioning_totals` | Conditioning, packaging, loss, and release rows | Divide each reconciled product-specific total by net conforming released product mass, excluding packaging mass. | reconciled row total; net conforming released product mass; qualifier keys | row amount per 1 kg reference product | `unafpa-dry-pasta-pefcr-2020` |
| `calculate_conditioning_moisture_release` | Drying or moisture-conditioning water release | Moisture released to air = formed-intermediate input mass minus net released product mass minus measured product/waste outputs and any other documented mass leaving the conditioning process; a negative or unexplained result is invalid. | paired intermediate input mass; released product mass; measured waste/loss mass; other documented mass outputs; moisture-state records | kg calculated water-to-air candidate per reference flow | `unafpa-dry-pasta-pefcr-2020` |
| `allocate_shared_manufacturing` | Unavoidable shared manufacturing data | Allocated amount = reconciled shared total multiplied by declared conforming product mass divided by total conforming mass of all products sharing the operation during the same period, only after subdivision is shown impracticable and mass is physically representative. | shared total; declared product mass; total shared-operation product mass; period; product list | allocated foreground amount with allocation disclosure | `unafpa-dry-pasta-pefcr-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all product-specific rows | Required qualifiers shall be complete and internally consistent. The semi-dried-noodles UUID may remain only for an actual identity match; otherwise a more specific verified flow shall replace it. | Product master, release specification, CPC check, and full Tiangong flow readback |
| `dq_temporal_representativeness` | Foreground activity data | Use one consistent reporting period. An annual dry-pasta dataset shall cover 12 consecutive months; another product form may use a representative campaign or seasonal period only with justification and production-volume coverage disclosure. | Dated meter, batch, production, inventory, and waste records; coverage calculation; justification |
| `dq_measurement_traceability` | Mass, moisture, water, electricity, and thermal-energy records | Preserve original readings, units, meter/scale identity, calibration or verification status, conversions, and responsible record source. | Calibration certificates, meter logs, laboratory method records, invoices, and conversion worksheet |
| `dq_mass_balance` | Both foreground processes | Reconcile material inputs with intermediate/product outputs, measured waste, moisture release where relevant, inventory change, and documented internal return. Investigate and disclose unexplained imbalance; do not force closure with an undocumented default. | Campaign mass-balance worksheet and variance investigation |
| `dq_completeness` | Foreground inventory | Include all material ingredient, water, energy, packaging, product, and waste flows that cross the declared foreground boundary. Record not-applicable decisions and unresolved UUIDs explicitly. | Completeness checklist tied to process map, BoM, utilities, waste register, and packaging records |
| `dq_background_linkage` | Upstream datasets | Match upstream datasets to actual ingredient, energy, water, packaging, and waste-treatment identities and disclose geographic, temporal, or technological proxies. | Dataset references, supplier/origin records, proxy rationale, and data-gap register |
| `dq_source_scope` | Use of external dry-pasta evidence | Apply `unafpa-dry-pasta-pefcr-2020` only to dry-pasta rules that fit the declared route. Use it as process/data-collection guidance, not as proof that a semi-dried, fresh, rice-, pulse-, or other broader CPC 23710 product conforms to that PEFCR. | Product-scope comparison and methodology limitation statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_and_form` | Product identity | Confirm CPC 3.0 code 23710, uncooked state, absence of filling, and absence of other preparation; reject out-of-scope cooked, filled, seasoned/prepared, or complete-dish products. | `international-epd-pcr-2010-01` |
| `validate_representative_flow_use` | Reference product flow | Confirm actual product form against the full Tiangong flow record. If the product is not semi-dried noodles or a more specific matching real flow exists, UUID `540fef24-1038-48b8-8ee1-8cc415df780a` shall be replaced; silent reuse is an error. |  |
| `validate_reference_support_chain` | Reference amount and unit | Confirm reference amount 1 kg net product, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and reference unit kg; packaging mass shall remain separate. |  |
| `validate_process_coverage` | Foreground process map | Confirm that actual formulation, forming, conditioning/drying, inspection/rework accounting, and packaging or bulk release are represented and that non-applicable route steps are explicitly justified. | `unafpa-dry-pasta-pefcr-2020` |
| `validate_inventory_and_mass_balance` | Foreground inventory | Confirm collected ingredient/packaging BoM, energy, water, output, loss, and waste records; reconcile mass by process and product state without undocumented default values. | `unafpa-dry-pasta-pefcr-2020` |
| `validate_allocation` | Shared operations and multi-output processes | Confirm subdivision was attempted first and any remaining allocation has a physically representative driver, complete denominator, same-period records, and disclosure. | `unafpa-dry-pasta-pefcr-2020` |
| `validate_period_and_traceability` | Dataset quality | Confirm period alignment, site/line scope, calibration/conversion evidence, source traceability, upstream dataset linkage, and explicit data gaps. | `unafpa-dry-pasta-pefcr-2020` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-production dataset for one declared uncooked pasta form and factory-gate release condition |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after methodology review, UUID completion, validation, and release controls |
| allowed_use | Product systems whose product form, formulation, forming/conditioning route, moisture state, packaging state, geography, technology, and reporting gate are compatible with the declared dataset |
| excluded_use | Silent use of the semi-dried-noodles UUID for another product form; cooked, filled, seasoned/prepared, or complete-dish products; use as a cradle-to-grave result without explicit downstream stages; unsupported cross-form or cross-route averages |
| required_metadata | Canonical PCR id; CPC; actual Tiangong product-flow UUID; all required qualifiers; site/geography; technology and process map; reporting period and gate; net product and packaging basis; allocation; source and proxy disclosures; unresolved-flow status |
| required_quality_disclosure | Record coverage, calibration/conversion evidence, mass-balance result, allocation rationale, temporal/geographic/technological representativeness, dry-pasta-source applicability, missing UUIDs, proxy datasets, and validation findings |
| update_trigger | Change in product form or flow identity, formulation, egg status, principal material, forming or conditioning technology, released moisture state, packaging configuration, site/energy supply, allocation basis, reporting gate, material supplier mix, legal specification, or evidence source |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unafpa-dry-pasta-pefcr-2020` | Official guidance (`official_guidance`) | UN.A.F.P.A. and Life Cycle Engineering, *Product Environmental Footprint Category Rules for Dry Pasta*, version 3.1, February 2020, hosted by the Slovak Environment Agency, https://www.sazp.sk/dokument/f/cestoviny.pdf (retrieved 2026-08-10) | Dry-pasta process decomposition; company-specific ingredient/packaging BoM and energy data; manufacturing water, auxiliary material, transport and waste records; 12-month plant activity period; subdivision-first and physical-mass allocation. Applied only where the declared product route fits the source's dry-pasta scope; no default quantitative loss or recipe values are adopted. |
| `international-epd-pcr-2010-01` | Standard (`standard`) | International EPD System, PCR 2010:01, *Uncooked pasta, not stuffed or otherwise prepared*, version 4.0.5, https://www.environdec.com/pcr-library/pcr2010-01 (retrieved 2026-08-10; programme page reports status expired and validity ended 2026-05-24) | Independent category-title and UN CPC 2371 scope corroboration only; not used as a current normative or quantitative requirement. |
