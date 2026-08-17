---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.dairy-products-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dairy products n.e.c.

## 1. Scope and Applicability

This PCR covers only fresh or preserved products consisting of milk constituents, not more specifically covered elsewhere, in liquid or paste form, whether or not sweetened and without other substances, within CPC 3.0 subclass 22290. Covered routes may include liquid or paste milk-protein concentrates, natural milk salts, qualifying whey-derived products containing less than 95% lactose by weight and excluding whey cheese, other qualifying liquid or paste products consisting of natural milk constituents, and reconstituted milk whose quantitative or qualitative composition differs from the natural product.

The Tiangong `Buttermilk` flow is the representative flow only when the particular buttermilk is demonstrably classified in CPC 22290. It does not represent the whole n.e.c. subclass. Cultured, fermented or acidified buttermilk, or any other buttermilk more specifically covered by another dairy category, is outside this PCR unless an authoritative classification determination places that exact product in CPC 22290. A covered non-buttermilk product shall use a product-specific Tiangong product flow; if no matching flow or defensible classification is available, the data package remains `manual_review` and shall not substitute the `Buttermilk` UUID.

The PCR excludes all products more specifically covered by CPC 2221 through 2227, including milk and cream in solid forms; concentrated or sweetened milk and cream covered by 2222; curdled, fermented or acidified milk and cream covered by 2223; butter and other milk fats and oils; cheese; casein; and ice cream or other edible ice. It also excludes lactose and lactose syrup, coloured or flavoured lactose syrup, whey cheese, solid analogues of the included products, and reconstituted milk whose composition corresponds to the named natural-product categories identified by UNSD CPC 3.0.

This PCR produces a gate-to-gate foreground data package from receipt of qualifying dairy feedstock through liquid or paste product manufacture, finishing, sanitation and dispatch at the manufacturing facility gate. Upstream production of milk and other supplied products and downstream distribution, use and end-of-life are represented by linked datasets when required by the study scope, not duplicated in the foreground inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.dairy-products-n-e-c |
| classification_refs | CPC 3.0: 22290, Dairy products n.e.c. |
| covered_products | Qualifying fresh or preserved liquid or paste products consisting of milk constituents, with composition different from the natural product, not more specifically covered elsewhere and without other substances; categories listed by UNSD CPC 3.0 for 22290 |
| excluded_products | Products more specifically covered by CPC 2221-2227; fermented or acidified milk products in 2223; solid analogues; lactose and lactose syrup; coloured or flavoured lactose syrup; whey cheese; composition-equivalent reconstituted milk assigned to named milk or cream categories; products containing non-milk characterising substances |
| representative_product | Buttermilk only when product-specific classification evidence places that buttermilk in CPC 22290; otherwise a product-specific CPC 22290 flow is mandatory |
| production_route | Receipt and qualification of milk or milk-derived feedstock; route-specific separation, concentration, recombination, reconstitution or blending; conditional thermal treatment and cooling; bulk or packaged finishing; sanitation and wastewater routing |
| market_state | Declared liquid or paste dairy product at the manufacturing facility gate, in bulk or packaged form, with temperature, preservation state, composition and batch identity stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared liquid or paste dairy product that is demonstrably within CPC 3.0 subclass 22290 |
| How much | 1 kg net product mass at the manufacturing facility gate |
| How well | Meets the declared product specification and market state; the data package documents why the exact product is not more specifically covered elsewhere |
| How long or cycle | One declared production batch or campaign; no service duration is assigned |
| reference_flow_link | The mass of conforming final product released at the facility gate; the `Buttermilk` flow below is used only for a qualifying CPC 22290 buttermilk, and all other covered products require a product-specific flow or `manual_review` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Buttermilk `a0a5374c-955b-4db5-9520-001165f8ddc0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact product name and CPC 22290 inclusion rationale; milk animal source; liquid or paste state; composition and principal milk constituents; sweetened or unsweetened state; preservation and heat-treatment state; buttermilk production route when applicable; bulk or packaging format; product temperature at dispatch; facility geography; production batch and reference period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete. The verified UUIDs above are stored without dataset versions and shall not be replaced by a classification label, an unverified near match or an invented UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net conforming product mass in kg and normalize foreground amounts to 1 kg. Do not use package count, volume or gross shipping mass without a batch-specific conversion. |
| `volume_to_mass_conversion` | Liquid quantities reported by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass only with density measured or documented for the same product, temperature and batch; retain source volume, density, temperature and calculation. |
| `dry_matter_and_constituent_basis` | Solids, protein, lactose, fat or other constituent records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State wet-mass, dry-matter or constituent basis explicitly. Do not treat a composition limit or quality specification as an inventory amount. |
| `mass_balance_period` | Batch or campaign mass balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use a common batch or campaign boundary for inputs, conforming product, co-products, losses and waste; reconcile opening and closing hold-up when material. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground manufacturing system | Include receipt and qualification, route-specific liquid or paste product manufacture, conditional thermal treatment and cooling, finishing, sanitation, product losses, wastewater routing and facility-gate release. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_route_specificity` | Product and process selection | Include only operations actually used for the declared product. Separation, membrane concentration, recombination, reconstitution, fermentation, drying and packaging are not interchangeable generic stages; absent operations shall be documented as not applicable. | `unsd-cpc-3-22290`; `codex-cxs-206-1999`; `codex-cxs-243-2003` |
| `boundary_upstream_links` | Supplied milk, milk-derived constituents, water, energy, packaging and chemicals | Record supplied products as technosphere inputs and link appropriate upstream datasets; do not duplicate upstream production within the foreground process. | `eu-pef-2021-2279` |
| `boundary_outputs_complete` | Foreground outputs | Identify conforming product, co-products, recovered material, off-spec product, wastewater, other waste and direct elementary flows known to cross the boundary. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `boundary_no_generic_performance_values` | Inventory authoring | Codex composition or quality criteria and BAT-associated performance or emission levels shall not be copied as generic LCI values. Actual site and batch records govern inventory amounts. | `codex-cxs-206-1999`; `codex-cxs-243-2003`; `eu-fdm-bat-2019-2031` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualifying milk or milk-derived feedstock accepted at the manufacturing receiving point, with supplier, product identity, mass, temperature, composition basis and batch or delivery reference declared |
| starting_condition_role | Foreground gate-to-gate starting condition; upstream milk production and manufacture of supplied milk-derived constituents are linked background or secondary datasets |
| product_classification_scope | Only the exact declared product demonstrated to be within CPC 3.0 subclass 22290; the n.e.c. label is not permission to absorb named products from CPC 2221-2227 |
| recursive_input_rule | A supplied input that itself belongs to CPC 22290 is recorded as a technosphere input with an upstream dataset and is not remanufactured conceptually inside the current foreground boundary |
| upstream_dataset_requirement | Use temporally, geographically and technologically representative datasets for milk, milk-derived ingredients, utilities, packaging and treatment services; disclose proxies and data gaps |
| disclosure | State product classification rationale, exact route, included and excluded operations, supplier boundary, co-product treatment, on-site versus off-site treatment, allocation choices, data period and all provisional estimates |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt_and_routing` | Feedstock receipt and classification routing | required | Always | Verify product and feedstock identity, receive and route the batch | kg qualifying feedstock received per 1 kg conforming final product |
| `liquid_or_paste_product_manufacture` | Liquid or paste product manufacture | required | Always; unit operations are route-specific | Perform only the declared separation, concentration, recombination, reconstitution, blending, thermal-treatment and cooling operations | 1 kg bulk qualifying product transferred to finishing |
| `finishing_and_dispatch` | Finishing and facility-gate dispatch | required | Always; packaging is conditional on the declared market state | Release bulk or packaged conforming product and record packaging when used | 1 kg net conforming product at facility gate |
| `sanitation_and_wastewater_routing` | Sanitation and wastewater routing | required | Always; treatment steps depend on site configuration | Record cleaning inputs and all routed wastewater and sanitation residues attributable to the product system | Allocated batch sanitation records per 1 kg conforming product |

### Process: Feedstock receipt and classification routing (`feedstock_receipt_and_routing`)

#### Inputs

##### Product flows

###### Raw whole cow milk received (`raw_cow_milk_received_input`)

This product input records only Raw whole cow milk at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Raw whole cow milk
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Raw whole buffalo milk received (`raw_buffalo_milk_received_input`)

This product input records only Raw whole buffalo milk at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Raw whole buffalo milk
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Raw whole goat milk received (`raw_goat_milk_received_input`)

This product input records only Raw whole goat milk at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Raw whole goat milk
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Raw whole sheep milk received (`raw_sheep_milk_received_input`)

This product input records only Raw whole sheep milk at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Raw whole sheep milk
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Skimmed milk received (`skimmed_milk_received_input`)

This product input records only Skimmed milk at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Skimmed milk
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Cream received (`cream_received_input`)

This product input records only Cream at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Cream
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Sweet-cream buttermilk, non-fermented received (`sweet_cream_buttermilk_received_input`)

This product input records only Sweet-cream buttermilk, non-fermented at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Sweet-cream buttermilk, non-fermented
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Liquid sweet whey received (`liquid_sweet_whey_received_input`)

This product input records only Liquid sweet whey at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Liquid sweet whey
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Milk protein concentrate received (`milk_protein_concentrate_received_input`)

This product input records only Milk protein concentrate at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Milk protein concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Whey protein concentrate received (`whey_protein_concentrate_received_input`)

This product input records only Whey protein concentrate at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Whey protein concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Milk permeate received (`milk_permeate_received_input`)

This product input records only Milk permeate at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Milk permeate
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Whey permeate received (`whey_permeate_received_input`)

This product input records only Whey permeate at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Whey permeate
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Lactose received (`lactose_received_input`)

This product input records only Lactose at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Lactose
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Milk mineral concentrate received (`milk_mineral_concentrate_received_input`)

This product input records only Milk mineral concentrate at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Milk mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Sucrose received (`sucrose_received_input`)

This product input records only Sucrose at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: measured received mass from delivery, tank, vessel, bag, or formulation records; document not applicable when absent from the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted Raw whole cow milk (`accepted_raw_cow_milk_output`)

This product output records only Accepted Raw whole cow milk for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole cow milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Raw whole buffalo milk (`accepted_raw_buffalo_milk_output`)

This product output records only Accepted Raw whole buffalo milk for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole buffalo milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Raw whole goat milk (`accepted_raw_goat_milk_output`)

This product output records only Accepted Raw whole goat milk for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole goat milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Raw whole sheep milk (`accepted_raw_sheep_milk_output`)

This product output records only Accepted Raw whole sheep milk for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole sheep milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Skimmed milk (`accepted_skimmed_milk_output`)

This product output records only Accepted Skimmed milk for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Skimmed milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Cream (`accepted_cream_output`)

This product output records only Accepted Cream for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Cream for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Sweet-cream buttermilk, non-fermented (`accepted_sweet_cream_buttermilk_output`)

This product output records only Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Liquid sweet whey (`accepted_liquid_sweet_whey_output`)

This product output records only Accepted Liquid sweet whey for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Liquid sweet whey for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Milk protein concentrate (`accepted_milk_protein_concentrate_output`)

This product output records only Accepted Milk protein concentrate for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Milk protein concentrate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Whey protein concentrate (`accepted_whey_protein_concentrate_output`)

This product output records only Accepted Whey protein concentrate for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Whey protein concentrate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Milk permeate (`accepted_milk_permeate_output`)

This product output records only Accepted Milk permeate for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Milk permeate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Whey permeate (`accepted_whey_permeate_output`)

This product output records only Accepted Whey permeate for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Whey permeate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Lactose (`accepted_lactose_output`)

This product output records only Accepted Lactose for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Lactose for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Milk mineral concentrate (`accepted_milk_mineral_concentrate_output`)

This product output records only Accepted Milk mineral concentrate for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Milk mineral concentrate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

###### Accepted Sucrose (`accepted_sucrose_output`)

This product output records only Accepted Sucrose for dairy manufacture at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Sucrose for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted and transferred after receipt checks, reconciled to the corresponding received and rejected quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Rejected Raw whole cow milk (`rejected_raw_cow_milk_waste_output`)

This waste output records only Rejected Raw whole cow milk from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Raw whole cow milk from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Raw whole buffalo milk (`rejected_raw_buffalo_milk_waste_output`)

This waste output records only Rejected Raw whole buffalo milk from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Raw whole buffalo milk from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Raw whole goat milk (`rejected_raw_goat_milk_waste_output`)

This waste output records only Rejected Raw whole goat milk from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Raw whole goat milk from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Raw whole sheep milk (`rejected_raw_sheep_milk_waste_output`)

This waste output records only Rejected Raw whole sheep milk from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Raw whole sheep milk from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Skimmed milk (`rejected_skimmed_milk_waste_output`)

This waste output records only Rejected Skimmed milk from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Skimmed milk from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Cream (`rejected_cream_waste_output`)

This waste output records only Rejected Cream from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Cream from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Sweet-cream buttermilk, non-fermented (`rejected_sweet_cream_buttermilk_waste_output`)

This waste output records only Rejected Sweet-cream buttermilk, non-fermented from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Sweet-cream buttermilk, non-fermented from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Liquid sweet whey (`rejected_liquid_sweet_whey_waste_output`)

This waste output records only Rejected Liquid sweet whey from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Liquid sweet whey from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Milk protein concentrate (`rejected_milk_protein_concentrate_waste_output`)

This waste output records only Rejected Milk protein concentrate from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Milk protein concentrate from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Whey protein concentrate (`rejected_whey_protein_concentrate_waste_output`)

This waste output records only Rejected Whey protein concentrate from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Whey protein concentrate from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Milk permeate (`rejected_milk_permeate_waste_output`)

This waste output records only Rejected Milk permeate from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Milk permeate from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Whey permeate (`rejected_whey_permeate_waste_output`)

This waste output records only Rejected Whey permeate from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Whey permeate from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Lactose (`rejected_lactose_waste_output`)

This waste output records only Rejected Lactose from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Lactose from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Milk mineral concentrate (`rejected_milk_mineral_concentrate_waste_output`)

This waste output records only Rejected Milk mineral concentrate from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Milk mineral concentrate from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Rejected Sucrose (`rejected_sucrose_waste_output`)

This waste output records only Rejected Sucrose from dairy feedstock receipt at the feedstock receipt and classification routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Rejected Sucrose from dairy feedstock receipt
- Flow property / unit: Mass / kg
- Amount rule: measured rejected, spilled, sampled, or returned mass by batch and destination, reconciled to receipt records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_receipt`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Liquid or paste product manufacture (`liquid_or_paste_product_manufacture`)

#### Inputs

##### Product flows

###### Accepted Raw whole cow milk input (`accepted_raw_cow_milk_input`)

This product input records only Accepted Raw whole cow milk for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole cow milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Raw whole buffalo milk input (`accepted_raw_buffalo_milk_input`)

This product input records only Accepted Raw whole buffalo milk for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole buffalo milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Raw whole goat milk input (`accepted_raw_goat_milk_input`)

This product input records only Accepted Raw whole goat milk for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole goat milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Raw whole sheep milk input (`accepted_raw_sheep_milk_input`)

This product input records only Accepted Raw whole sheep milk for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Raw whole sheep milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Skimmed milk input (`accepted_skimmed_milk_input`)

This product input records only Accepted Skimmed milk for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Skimmed milk for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Cream input (`accepted_cream_input`)

This product input records only Accepted Cream for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Cream for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Sweet-cream buttermilk, non-fermented input (`accepted_sweet_cream_buttermilk_input`)

This product input records only Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Sweet-cream buttermilk, non-fermented for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Liquid sweet whey input (`accepted_liquid_sweet_whey_input`)

This product input records only Accepted Liquid sweet whey for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Liquid sweet whey for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Milk protein concentrate input (`accepted_milk_protein_concentrate_input`)

This product input records only Accepted Milk protein concentrate for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Milk protein concentrate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Whey protein concentrate input (`accepted_whey_protein_concentrate_input`)

This product input records only Accepted Whey protein concentrate for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Whey protein concentrate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Milk permeate input (`accepted_milk_permeate_input`)

This product input records only Accepted Milk permeate for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Milk permeate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Whey permeate input (`accepted_whey_permeate_input`)

This product input records only Accepted Whey permeate for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Whey permeate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Lactose input (`accepted_lactose_input`)

This product input records only Accepted Lactose for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Lactose for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Milk mineral concentrate input (`accepted_milk_mineral_concentrate_input`)

This product input records only Accepted Milk mineral concentrate for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Milk mineral concentrate for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Accepted Sucrose input (`accepted_sucrose_input`)

This product input records only Accepted Sucrose for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Accepted Sucrose for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from feedstock receipt to the represented manufacturing batch; document not applicable when absent from the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`

###### Manufacturing process water (`manufacturing_process_water_input`)

This product input records only Process water for liquid or paste dairy product manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Process water for liquid or paste dairy product manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured batch water incorporated into product or used directly by manufacturing operations, excluding sanitation water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `codex-cxs-206-1999`; `eu-fdm-bat-2019-2031`

###### Manufacturing electricity (`manufacturing_electricity_input`)

This product input records only Electricity supplied to liquid or paste dairy product manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Electricity supplied to liquid or paste dairy product manufacture
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or calculation from collected equipment demand, run time, and a documented causal allocation driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased steam (`manufacturing_purchased_steam_input`)

This product input records only Purchased steam supplied to liquid or paste dairy product manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Purchased steam supplied to liquid or paste dairy product manufacture
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy from the same batch or campaign, with pressure, enthalpy, condensate return, and heat recovery documented; document not applicable when this carrier is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Purchased hot water (`manufacturing_purchased_hot_water_input`)

This product input records only Purchased hot water supplied to liquid or paste dairy product manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Purchased hot water supplied to liquid or paste dairy product manufacture
- Flow property / unit: Energy / MJ
- Amount rule: metered hot-water energy supplied to manufacturing, with inlet and return temperatures and internal heat recovery documented; document not applicable when this carrier is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Natural gas fuel (`manufacturing_natural_gas_input`)

This product input records only Natural gas combusted for liquid or paste dairy product manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Natural gas combusted for liquid or paste dairy product manufacture
- Flow property / unit: Energy / MJ
- Amount rule: metered natural-gas quantity converted with its documented heating value and allocated only to the represented manufacturing operations; document not applicable when this carrier is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Diesel fuel (`manufacturing_diesel_input`)

This product input records only Diesel combusted for liquid or paste dairy product manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Diesel combusted for liquid or paste dairy product manufacture
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter records converted with the documented diesel heating value and allocated only to the represented manufacturing operations; document not applicable when this carrier is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Liquefied petroleum gas fuel (`manufacturing_lpg_input`)

This product input records only Liquefied petroleum gas combusted for liquid or paste dairy product manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Liquefied petroleum gas combusted for liquid or paste dairy product manufacture
- Flow property / unit: Energy / MJ
- Amount rule: fuel issue or meter records converted with the documented LPG heating value and allocated only to the represented manufacturing operations; document not applicable when this carrier is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-717 refrigerant make-up (`manufacturing_r717_makeup_input`)

This product input records only Ammonia (R-717) refrigerant make-up for dairy process cooling at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Ammonia (R-717) refrigerant make-up for dairy process cooling
- Flow property / unit: Mass / kg
- Amount rule: measured make-up mass from refrigerant service records for equipment serving the represented production; document not applicable when this refrigerant is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a refrigerant make-up (`manufacturing_r134a_makeup_input`)

This product input records only 1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up for dairy process cooling at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up for dairy process cooling
- Flow property / unit: Mass / kg
- Amount rule: measured make-up mass from refrigerant service records for equipment serving the represented production; document not applicable when this refrigerant is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk qualifying dairy product (`bulk_dairy_product_output`)

This product output records only Bulk liquid or paste dairy product n.e.c. before finishing at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Bulk liquid or paste dairy product n.e.c. before finishing
- Flow property / unit: Mass / kg
- Amount rule: measured mass of conforming bulk product transferred to finishing with product identity, composition, and physical state linked to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`

###### Cream co-product from dairy separation (`manufacturing_cream_coproduct_output`)

This product output records only Cream co-product from dairy separation at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Cream co-product from dairy separation
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred as a saleable or internally used co-product, with composition, status, and destination retained; document not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Skimmed milk co-product from dairy separation (`manufacturing_skimmed_milk_coproduct_output`)

This product output records only Skimmed milk co-product from dairy separation at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Skimmed milk co-product from dairy separation
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred as a saleable or internally used co-product, with composition, status, and destination retained; document not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Milk permeate co-product from membrane separation (`manufacturing_milk_permeate_coproduct_output`)

This product output records only Milk permeate co-product from membrane separation at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Milk permeate co-product from membrane separation
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred as a saleable or internally used co-product, with composition, status, and destination retained; document not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Whey permeate co-product from membrane separation (`manufacturing_whey_permeate_coproduct_output`)

This product output records only Whey permeate co-product from membrane separation at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Whey permeate co-product from membrane separation
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred as a saleable or internally used co-product, with composition, status, and destination retained; document not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Milk fat co-product from dairy separation (`manufacturing_milk_fat_coproduct_output`)

This product output records only Milk fat co-product from dairy separation at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Milk fat co-product from dairy separation
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred as a saleable or internally used co-product, with composition, status, and destination retained; document not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

##### Waste flows

###### Off-spec bulk dairy product sent to waste treatment (`manufacturing_off_spec_bulk_dairy_product_output`)

This waste output records only Off-spec bulk dairy product sent to waste treatment at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Off-spec bulk dairy product sent to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated quantity by batch and documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Dairy product purge sent to waste treatment (`manufacturing_dairy_product_purge_output`)

This waste output records only Dairy product purge sent to waste treatment at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Dairy product purge sent to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated quantity by batch and documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Dairy filtration residue sent to waste treatment (`manufacturing_dairy_filtration_residue_output`)

This waste output records only Dairy filtration residue sent to waste treatment at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Dairy filtration residue sent to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated quantity by batch and documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Milk-containing process wastewater from dairy manufacture (`manufacturing_milk_containing_process_wastewater_output`)

This waste output records only Milk-containing process wastewater from dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Milk-containing process wastewater from dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated quantity by batch and documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon dioxide from natural gas (`manufacturing_natural_gas_fossil_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from natural gas combustion for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Carbon dioxide, fossil, to air from natural gas combustion for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: recorded natural gas energy multiplied by a documented site, supplier, or regulatory fossil-carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Fossil carbon dioxide from diesel (`manufacturing_diesel_fossil_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from diesel combustion for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Carbon dioxide, fossil, to air from diesel combustion for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: recorded diesel energy multiplied by a documented site, supplier, or regulatory fossil-carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Fossil carbon dioxide from liquefied petroleum gas (`manufacturing_lpg_fossil_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for dairy manufacture at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: recorded liquefied petroleum gas energy multiplied by a documented site, supplier, or regulatory fossil-carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### R-717 emitted to air (`manufacturing_r717_to_air_output`)

This elementary output records only Ammonia (R-717), to air from dairy process cooling at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Ammonia (R-717), to air from dairy process cooling
- Flow property / unit: Mass / kg
- Amount rule: refrigerant charge balance using opening charge, make-up, recovery, closing charge, and documented transfers for this refrigerant only
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R-134a emitted to air (`manufacturing_r134a_to_air_output`)

This elementary output records only 1,1,1,2-Tetrafluoroethane (R-134a), to air from dairy process cooling at the liquid or paste product manufacture boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a), to air from dairy process cooling
- Flow property / unit: Mass / kg
- Amount rule: refrigerant charge balance using opening charge, make-up, recovery, closing charge, and documented transfers for this refrigerant only
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_utility_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### Process: Finishing and facility-gate dispatch (`finishing_and_dispatch`)

#### Inputs

##### Product flows

###### Bulk product supplied to finishing (`bulk_dairy_product_for_finishing_input`)

This product input records only Bulk liquid or paste dairy product n.e.c. before finishing at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Bulk liquid or paste dairy product n.e.c. before finishing
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from manufacture, reconciled to released product, product waste, retained product, and line hold-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Finishing electricity (`finishing_electricity_input`)

This product input records only Electricity supplied to dairy product finishing and dispatch at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Electricity supplied to dairy product finishing and dispatch
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or calculation from collected filler, packaging, cold-holding, and dispatch equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### High-density polyethylene bottle for dairy product packaging (`dispatch_hdpe_bottle_input`)

This product input records only High-density polyethylene bottle for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: High-density polyethylene bottle for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Polyethylene terephthalate bottle for dairy product packaging (`dispatch_pet_bottle_input`)

This product input records only Polyethylene terephthalate bottle for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Polyethylene terephthalate bottle for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Glass bottle for dairy product packaging (`dispatch_glass_bottle_input`)

This product input records only Glass bottle for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Glass bottle for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Polypropylene cup for dairy product packaging (`dispatch_pp_cup_input`)

This product input records only Polypropylene cup for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Polypropylene cup for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Aluminium foil lid for dairy product packaging (`dispatch_aluminium_foil_lid_input`)

This product input records only Aluminium foil lid for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Aluminium foil lid for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### High-density polyethylene closure for dairy product packaging (`dispatch_hdpe_closure_input`)

This product input records only High-density polyethylene closure for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: High-density polyethylene closure for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Polyethylene-coated paperboard carton for dairy product packaging (`dispatch_pe_coated_paperboard_carton_input`)

This product input records only Polyethylene-coated paperboard carton for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Polyethylene-coated paperboard carton for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Aseptic multilayer carton for dairy product packaging (`dispatch_aseptic_multilayer_carton_input`)

This product input records only Aseptic multilayer carton for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Aseptic multilayer carton for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene film for dairy product packaging (`dispatch_ldpe_film_input`)

This product input records only Low-density polyethylene film for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Low-density polyethylene film for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Paper label for dairy product packaging (`dispatch_paper_label_input`)

This product input records only Paper label for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Paper label for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Corrugated paperboard transport case for dairy product packaging (`dispatch_corrugated_case_input`)

This product input records only Corrugated paperboard transport case for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Corrugated paperboard transport case for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet for dairy product transport (`dispatch_wooden_pallet_input`)

This product input records only Wooden pallet for dairy product transport at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Wooden pallet for dairy product transport
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials reconciled to issued, returned, and unused quantities for this packaging component; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming CPC 22290 dairy product at facility gate (`reference_product_output`)

This product output records only Buttermilk at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Buttermilk `a0a5374c-955b-4db5-9520-001165f8ddc0`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: 1 kg net mass of conforming final product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `unsd-cpc-3-22290`; `codex-cxs-206-1999`; `eu-pef-2021-2279`

- Range: Exact reference-flow conformance interval
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: exact PCR reference amount
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Off-spec packaged dairy product sent to waste treatment (`finishing_off_spec_packaged_dairy_product_output`)

This waste output records only Off-spec packaged dairy product sent to waste treatment at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Off-spec packaged dairy product sent to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or line-balance-calculated mass by batch and documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Dairy product filler purge sent to waste treatment (`finishing_dairy_product_filler_purge_output`)

This waste output records only Dairy product filler purge sent to waste treatment at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Dairy product filler purge sent to waste treatment
- Flow property / unit: Mass / kg
- Amount rule: measured or line-balance-calculated mass by batch and documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031`

###### Waste high-density polyethylene bottle for dairy product packaging (`waste_hdpe_bottle_output`)

This waste output records only Waste high-density polyethylene bottle for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste high-density polyethylene bottle for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste polyethylene terephthalate bottle for dairy product packaging (`waste_pet_bottle_output`)

This waste output records only Waste polyethylene terephthalate bottle for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste polyethylene terephthalate bottle for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste glass bottle for dairy product packaging (`waste_glass_bottle_output`)

This waste output records only Waste glass bottle for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste glass bottle for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste polypropylene cup for dairy product packaging (`waste_pp_cup_output`)

This waste output records only Waste polypropylene cup for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste polypropylene cup for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste aluminium foil lid for dairy product packaging (`waste_aluminium_foil_lid_output`)

This waste output records only Waste aluminium foil lid for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste aluminium foil lid for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste high-density polyethylene closure for dairy product packaging (`waste_hdpe_closure_output`)

This waste output records only Waste high-density polyethylene closure for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste high-density polyethylene closure for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste polyethylene-coated paperboard carton for dairy product packaging (`waste_pe_coated_paperboard_carton_output`)

This waste output records only Waste polyethylene-coated paperboard carton for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste polyethylene-coated paperboard carton for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste aseptic multilayer carton for dairy product packaging (`waste_aseptic_multilayer_carton_output`)

This waste output records only Waste aseptic multilayer carton for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste aseptic multilayer carton for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste low-density polyethylene film for dairy product packaging (`waste_ldpe_film_output`)

This waste output records only Waste low-density polyethylene film for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste low-density polyethylene film for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste paper label for dairy product packaging (`waste_paper_label_output`)

This waste output records only Waste paper label for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste paper label for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste corrugated paperboard transport case for dairy product packaging (`waste_corrugated_case_output`)

This waste output records only Waste corrugated paperboard transport case for dairy product packaging at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste corrugated paperboard transport case for dairy product packaging
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

###### Waste wooden pallet for dairy product transport (`waste_wooden_pallet_output`)

This waste output records only Waste wooden pallet for dairy product transport at the finishing and facility-gate dispatch boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Waste wooden pallet for dairy product transport
- Flow property / unit: Mass / kg
- Amount rule: measured or packaging-balance-calculated discarded mass for this packaging component and its documented treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_dispatch`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

### Process: Sanitation and wastewater routing (`sanitation_and_wastewater_routing`)

#### Inputs

##### Product flows

###### Sanitation process water (`sanitation_process_water_input`)

This product input records only Process water supplied to dairy cleaning and sanitation at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Process water supplied to dairy cleaning and sanitation
- Flow property / unit: Mass / kg
- Amount rule: metered water or calculation from validated CIP cycle volume and cycle count attributable to the represented production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation electricity (`sanitation_electricity_input`)

This product input records only Electricity supplied to dairy cleaning and wastewater routing at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Electricity supplied to dairy cleaning and wastewater routing
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or calculation from collected CIP pump, treatment equipment, run-time, and allocation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation purchased steam (`sanitation_purchased_steam_input`)

This product input records only Purchased steam supplied to dairy cleaning and sanitation at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Purchased steam supplied to dairy cleaning and sanitation
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy allocated to attributable cleaning and sanitation cycles; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sanitation purchased hot water (`sanitation_purchased_hot_water_input`)

This product input records only Purchased hot water supplied to dairy cleaning and sanitation at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Purchased hot water supplied to dairy cleaning and sanitation
- Flow property / unit: Energy / MJ
- Amount rule: metered hot-water energy allocated to attributable cleaning and sanitation cycles; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium hydroxide cleaning solution for dairy equipment (`sanitation_sodium_hydroxide_input`)

This product input records only Sodium hydroxide cleaning solution for dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Sodium hydroxide cleaning solution for dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed solution mass with active concentration and reuse records retained; document not applicable when this chemical is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

###### Nitric acid cleaning solution for dairy equipment (`sanitation_nitric_acid_input`)

This product input records only Nitric acid cleaning solution for dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Nitric acid cleaning solution for dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed solution mass with active concentration and reuse records retained; document not applicable when this chemical is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

###### Phosphoric acid cleaning solution for dairy equipment (`sanitation_phosphoric_acid_input`)

This product input records only Phosphoric acid cleaning solution for dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Phosphoric acid cleaning solution for dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed solution mass with active concentration and reuse records retained; document not applicable when this chemical is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

###### Peracetic acid disinfectant solution for dairy equipment (`sanitation_peracetic_acid_input`)

This product input records only Peracetic acid disinfectant solution for dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Peracetic acid disinfectant solution for dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed solution mass with active concentration and reuse records retained; document not applicable when this chemical is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

###### Sodium hypochlorite disinfectant solution for dairy equipment (`sanitation_sodium_hypochlorite_input`)

This product input records only Sodium hypochlorite disinfectant solution for dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Sodium hypochlorite disinfectant solution for dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: measured issued or dosed solution mass with active concentration and reuse records retained; document not applicable when this chemical is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Milk-containing process wastewater input (`milk_process_wastewater_input`)

This waste input records only Milk-containing process wastewater from dairy manufacture at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Milk-containing process wastewater from dairy manufacture
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or validated water-balance quantity entering the sanitation and wastewater route from manufacture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Alkaline cleaning-in-place wastewater from dairy equipment (`sanitation_alkaline_cip_wastewater_output`)

This waste output records only Alkaline cleaning-in-place wastewater from dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Alkaline cleaning-in-place wastewater from dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or validated cycle water balance for this wastewater stream and its documented on-site or off-site treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Acid cleaning-in-place wastewater from dairy equipment (`sanitation_acid_cip_wastewater_output`)

This waste output records only Acid cleaning-in-place wastewater from dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Acid cleaning-in-place wastewater from dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or validated cycle water balance for this wastewater stream and its documented on-site or off-site treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Peracetic-acid sanitation wastewater from dairy equipment (`sanitation_peracetic_acid_rinse_wastewater_output`)

This waste output records only Peracetic-acid sanitation wastewater from dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Peracetic-acid sanitation wastewater from dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or validated cycle water balance for this wastewater stream and its documented on-site or off-site treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Sodium-hypochlorite sanitation wastewater from dairy equipment (`sanitation_sodium_hypochlorite_rinse_wastewater_output`)

This waste output records only Sodium-hypochlorite sanitation wastewater from dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Sodium-hypochlorite sanitation wastewater from dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or validated cycle water balance for this wastewater stream and its documented on-site or off-site treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Final-rinse wastewater from dairy equipment (`sanitation_final_rinse_wastewater_output`)

This waste output records only Final-rinse wastewater from dairy equipment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Final-rinse wastewater from dairy equipment
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or validated cycle water balance for this wastewater stream and its documented on-site or off-site treatment destination; document not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Screenings from dairy wastewater treatment (`sanitation_wastewater_screenings_output`)

This waste output records only Screenings from dairy wastewater treatment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Screenings from dairy wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured dewatered mass from treatment records and its documented destination; document not applicable when the treatment step is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

###### Dissolved-air-flotation sludge from dairy wastewater treatment (`sanitation_daf_sludge_output`)

This waste output records only Dissolved-air-flotation sludge from dairy wastewater treatment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Dissolved-air-flotation sludge from dairy wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured dewatered mass from treatment records and its documented destination; document not applicable when the treatment step is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

###### Biological sludge from dairy wastewater treatment (`sanitation_biological_sludge_output`)

This waste output records only Biological sludge from dairy wastewater treatment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Biological sludge from dairy wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: measured dewatered mass from treatment records and its documented destination; document not applicable when the treatment step is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Treated effluent water (`treated_effluent_water_output`)

This elementary output records only Water, to surface water from dairy wastewater treatment at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Water, to surface water from dairy wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: metered treated-effluent discharge converted to mass with documented density; document not applicable for off-site treatment or another receiving compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Biochemical oxygen demand (BOD5), to surface water (`treated_effluent_bod5_output`)

This elementary output records only Biochemical oxygen demand (BOD5), to surface water at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Biochemical oxygen demand (BOD5), to surface water
- Flow property / unit: Mass / kg
- Amount rule: matched treated-effluent volume multiplied by the laboratory concentration for this pollutant and converted explicitly to mass; document not applicable when not discharged on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Chemical oxygen demand (COD), to surface water (`treated_effluent_cod_output`)

This elementary output records only Chemical oxygen demand (COD), to surface water at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Chemical oxygen demand (COD), to surface water
- Flow property / unit: Mass / kg
- Amount rule: matched treated-effluent volume multiplied by the laboratory concentration for this pollutant and converted explicitly to mass; document not applicable when not discharged on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Total suspended solids, to surface water (`treated_effluent_tss_output`)

This elementary output records only Total suspended solids, to surface water at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Total suspended solids, to surface water
- Flow property / unit: Mass / kg
- Amount rule: matched treated-effluent volume multiplied by the laboratory concentration for this pollutant and converted explicitly to mass; document not applicable when not discharged on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Nitrogen, total, to surface water (`treated_effluent_total_nitrogen_output`)

This elementary output records only Nitrogen, total, to surface water at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Nitrogen, total, to surface water
- Flow property / unit: Mass / kg
- Amount rule: matched treated-effluent volume multiplied by the laboratory concentration for this pollutant and converted explicitly to mass; document not applicable when not discharged on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Phosphorus, total, to surface water (`treated_effluent_total_phosphorus_output`)

This elementary output records only Phosphorus, total, to surface water at the sanitation and wastewater routing boundary. Its quantity comes from the stated foreground rule; retain evidence when the exchange is not applicable.

- Selected flow: Phosphorus, total, to surface water
- Flow property / unit: Mass / kg
- Amount rule: matched treated-effluent volume multiplied by the laboratory concentration for this pollutant and converted explicitly to mass; document not applicable when not discharged on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming final product at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_records`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Separately measurable unit operations and outputs | Avoid allocation by subdividing processes and assigning directly measured material and utility records to the operation or product that caused them whenever the records support subdivision. | `eu-pef-2021-2279` |
| `allocation_joint_process` | Unavoidable joint production | If subdivision is not feasible, use a documented physical relationship that reflects how inputs and outputs change with the products. If no defensible physical relationship exists, any other relationship requires explicit rationale, sensitivity analysis and `manual_review`; this PCR supplies no fixed allocation factor. | `eu-pef-2021-2279` |
| `allocation_recovered_streams` | Recovered product, whey-derived stream, returned product and waste | Record mass, composition, destination and status before assigning burdens. A saleable or internally used output shall not be relabelled as waste to bypass allocation; treatment burdens and credits follow the declared downstream model. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocation_shared_services` | Shared utilities, cold storage, sanitation and wastewater treatment | Allocate shared services using contemporaneous metering or a documented causal driver such as run time, throughput, CIP cycle count or pollutant load. Production mass alone is permitted only when its causal adequacy is demonstrated. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_identity` | `feedstock_receipt_and_routing` | Product classification and batch identity | Product specification and batch record | exact product name; supplier; animal source; physical state; composition basis; CPC rationale; route; batch id; receipt and dispatch timestamps | Link approved specifications, labels, certificates and production records to each represented batch | descriptive record | Each batch and each specification change | Same batch genealogy and reference period as the represented production | Each producing facility and product | No averaging across products with different CPC classification or production routes | Approved specification, classification rationale, batch genealogy and reviewer sign-off |
| `cp_feedstock_receipt` | `feedstock_receipt_and_routing` | Each received, accepted, and rejected dairy feedstock or ingredient | Delivery, tank, vessel, bag, scale, sampling, spill, return, and transfer records | atomic material identity; supplier; animal source where relevant; received mass; accepted mass; rejected mass; sampled mass; spill; return; transfer; batch id; destination | Measure or reconcile each named feedstock separately on the same receipt boundary | kg | Each delivery and receipt batch | Complete represented production period | Every receiving point and storage vessel serving the product | Sum only the same material identity and compatible batches; keep each atomic material separate and normalize after reconciliation | Calibration, delivery ticket, certificate, receipt inspection, transfer record, rejection record, destination, and signed reconciliation |
| `cp_batch_material_balance` | `liquid_or_paste_product_manufacture` | Each accepted feedstock, process water, bulk product, named co-product, and named waste | Calibrated meter, scale, tank, formulation, transfer, waste, and hold-up records | opening stock; each accepted material; water charged; bulk product; cream; skimmed milk; milk permeate; whey permeate; milk fat; off-spec product; purge; filtration residue; process wastewater; closing stock; calibration id | Collect each named exchange on a common batch or campaign boundary and reconcile mass after hold-up correction | kg | Each batch or campaign | Complete represented production period, including normal start-up and shutdown | Each producing facility and manufacturing route | Sum only matching atomic flow identities across compatible batches; normalize reconciled totals to conforming facility-gate product mass | Calibration records, signed batch sheets, transfer records, waste destinations, reconciliation result, and explanation of material imbalance |
| `cp_batch_utility_records` | `liquid_or_paste_product_manufacture` | Manufacturing electricity, purchased steam, purchased hot water, natural gas, diesel, LPG, and each refrigerant | Meter, fuel, invoice, refrigerant service, and equipment operating records | carrier identity; meter start and end; quantity; heating value; pressure; temperature; enthalpy; run time; heat recovery; allocation driver; refrigerant identity; opening charge; make-up; recovery; closing charge; transfer; emission factor identity | Prefer submetering; otherwise calculate each carrier separately from collected activity records with documented conversion and allocation | kWh; MJ; kg | Each batch or campaign, with monthly reconciliation | Same period as represented production | Each facility and relevant utility or refrigeration system | Reconcile and allocate each carrier and refrigerant separately; avoid double counting recovered heat; normalize to conforming product | Meter calibration, invoices, fuel and service logs, equipment records, conversion or factor source, and allocation worksheet |
| `cp_finishing_and_dispatch` | `finishing_and_dispatch` | Bulk input, finishing electricity, reference product, each packaging component, each packaging waste, and product waste | Filler, bulk-loading, packaging BOM, issue, return, scale, meter, waste, and dispatch records | bulk input; electricity; net released product; each packaging component identity; package count; component mass; issued; returned; unused; off-spec product; filler purge; each packaging waste; destination; batch id | Reconcile line input, electricity, net product, retained product, each packaging item, and each waste for the same batch | kg; kWh; item count with batch conversion | Each batch or campaign | Complete represented production period | Each facility and packaging or bulk-dispatch line | Convert counts using measured component masses, keep every material-specific total separate, and normalize to net conforming product | Scale and meter calibration, approved packaging BOM, issue and return records, waste tickets, dispatch record, and line reconciliation |
| `cp_sanitation_records` | `sanitation_and_wastewater_routing` | Process water, electricity, steam, hot water, each cleaning chemical, each wastewater stream, each residue, and each effluent emission | CIP controller, water and energy meter, dosing, laboratory, discharge, sludge, and treatment records | cycle id; equipment circuit; water; electricity; steam; hot water; chemical identity; concentration; dose; reuse; wastewater identity; discharge; pH; temperature; screenings; DAF sludge; biological sludge; effluent volume; BOD5; COD; TSS; total nitrogen; total phosphorus; destination | Capture cycle and treatment-batch records and match each atomic input or output to the represented equipment and period | kg; kWh; MJ; m3 retained before conversion; mg/L | Each sanitation cycle, discharge event, sampling event, or treatment batch | Same period as represented production, including changeovers and shutdown cleaning | Each facility, CIP circuit, discharge point, and treatment route | Keep each chemical, wastewater, residue, and pollutant separate; convert units explicitly; aggregate attributable cycles and normalize to conforming product | Meter and sensor calibration, controller export, dosing record, laboratory result, discharge log, treatment ticket, and allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground inventory rows | normalized amount = reconciled batch or campaign amount / net kg conforming final product released at the facility gate | reconciled atomic flow amount; net conforming product mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_volume_to_mass` | Volume-based liquid records | mass = measured volume × density for the same material, temperature, and batch; retain unrounded inputs and conversion metadata | measured volume; density; temperature; batch id | kg of one identified material | `eu-pef-2021-2279` |
| `calc_batch_mass_balance` | Receipt, manufacturing, and finishing | imbalance = opening stock + atomic received inputs - closing stock - conforming product - named co-products - named wastes; investigate rather than assigning the residual to an invented exchange | stocks; each input; product; each co-product; each waste | reconciled mass balance and disclosed residual | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_utility_allocation` | Shared electricity, steam, hot water, natural gas, diesel, and LPG | allocated carrier = measured total for that carrier × documented causal driver share; never combine carrier quantities before allocation | one carrier meter or issue total; run time; throughput; equipment demand; causal driver | allocated kWh or MJ for one carrier | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_fuel_co2` | Direct fuel combustion | fossil CO2 = recorded energy for one fuel × documented site, supplier, or regulatory fossil-carbon factor for that same fuel and period | fuel identity; energy; factor; factor source; validity period | kg fossil CO2 for one fuel | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_balance` | Each refrigeration circuit | loss to air = opening charge + make-up - recovery - closing charge - documented transfers, calculated separately for each refrigerant identity | refrigerant identity; opening charge; make-up; recovery; closing charge; transfers | kg of one refrigerant emitted to air | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_sanitation_allocation` | Shared CIP and sanitation cycles | allocate only attributable water, electricity, steam, hot water, each chemical, and each wastewater stream using circuit, cycle count, operating time, or measured load | cycle records; circuit mapping; each atomic input and output; production schedule | allocated sanitation exchange amount | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `calc_effluent_load` | Each on-site effluent pollutant | pollutant mass = matched treated-effluent volume × laboratory concentration for the same sampling period, with explicit unit conversion | effluent volume; one pollutant concentration; sampling period; conversion factor | kg of one pollutant to the receiving compartment | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and feedstock | Demonstrate CPC 22290 inclusion for the exact product and exclusion from the named CPC 2221-2227 categories; a generic n.e.c. label or the `Buttermilk` flow name alone is insufficient. | Product specification, label, composition, route description, official CPC note, and classification review |
| `dq_temporal_alignment` | Foreground records | Use one representative and disclosed production period; align material, utility, finishing, sanitation, and effluent records and explain abnormal or excluded periods. | Batch genealogy, production calendar, meter and laboratory periods, and exclusion log |
| `dq_measurement` | Measured and calculated amounts | Identify instruments, calibration status, units, conversions, factors, and calculation lineage; preserve raw values and avoid premature rounding. | Calibration certificates, controller or meter exports, batch sheets, factor references, laboratory reports, and calculation workbook |
| `dq_atomic_flow_identity` | Every inventory card | Each card shall identify one material, energy carrier, fuel, refrigerant, chemical, packaging component, product, co-product, waste, wastewater, residue, or elementary emission; applicability belongs in the amount rule and never in a collection-label Selected flow. | Atomic inventory review, approved BOM or formulation, utility map, chemical register, waste register, and emission register |
| `dq_completeness` | Foreground boundary | Cover every known atomic input and output or retain evidence that the card is not applicable; add another concrete atomic card when an actual exchange is not represented rather than using an aggregate or selector. | Process flow diagram, BOM, formulation, utility and refrigerant registers, mass and water balances, waste tickets, emission monitoring, and completeness review |
| `dq_representativeness` | Linked upstream and treatment datasets | Match geography, technology, temporal period, material identity, and product state where feasible; identify proxies and their expected influence. | Dataset metadata, selection rationale, data-quality assessment, and sensitivity result |
| `dq_uuid_resolution` | Tiangong identity references | Store only a dual-verified exact public state100 UUID; otherwise leave the UUID blank and retain the row-level candidate and rejection reason in manifest review metadata. | Hybrid-search result, state100 direct read, and manifest unresolved-flow review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_identity` | Product classification | Fail conformance when the exact product is not demonstrated to fall within CPC 22290, is more specifically covered by CPC 2221-2227 or another category, or uses the `Buttermilk` UUID for a different product. Uncertain cases return `manual_review`. | `unsd-cpc-3-22290`; `codex-cxs-206-1999`; `codex-cxs-243-2003` |
| `validate_reference_uuid` | Qualifying buttermilk reference flow | Require product flow `a0a5374c-955b-4db5-9520-001165f8ddc0`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg only when the declared product is the qualifying buttermilk; other products require a product-specific flow or `manual_review`. | `unsd-cpc-3-22290` |
| `validate_required_qualifiers` | Reference-flow metadata | Fail completeness when any required qualifier, production route, or market state is missing. | `codex-cxs-206-1999`; `eu-pef-2021-2279` |
| `validate_process_boundary` | Foreground process map | Require all used operations, sanitation, and known outputs; explain each operation and atomic card marked not applicable. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_atomic_inventory` | Every inventory card | Reject Selected flow values that are collections, selectors, alternatives, or placeholders. Require electricity, steam, hot water, every fuel, each refrigerant, each material and ingredient, every chemical, each packaging component, every product and co-product, each waste and wastewater, and each elementary emission to remain separate. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_uuid_review_closure` | Non-reference inventory rows | Require exactly one manifest unresolved-flow review for every blank inventory UUID and no unresolved review for the verified reference row. Reject any UUID not supported by exact hybrid search and public state100 direct read. | `eu-pef-2021-2279` |
| `validate_mass_balance` | Batch or campaign inventory | Require reconciled material balances on a common period and investigation of material residuals; do not force residuals into unverified waste or product flows. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_site_records` | Material, energy, water, packaging, chemical, waste, and emission amounts | Require site and batch or campaign foreground records for actual LCI values. Codex limits, quality criteria, and BAT performance levels are not acceptable substitutes. | `codex-cxs-206-1999`; `codex-cxs-243-2003`; `eu-fdm-bat-2019-2031` |
| `validate_allocation` | Multi-output and shared processes | Require direct assignment or documented subdivision where feasible; otherwise require a defensible causal allocation method, inputs, outputs, and sensitivity record. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for one declared CPC 22290 liquid or paste dairy product and route |
| downstream_use | `secondary_dataset` or `background_dataset` in a process or lifecyclemodel when scope, geography, technology, temporal period, and product identity are compatible |
| allowed_use | Product-specific modelling with the declared facility-gate boundary; aggregation only across compatible products and routes; use of the verified Buttermilk UUID only for a qualifying CPC 22290 buttermilk |
| excluded_use | Representation of all dairy products n.e.c. with the Buttermilk flow; use for named CPC 2221-2227 products; substitution of Codex composition criteria or BAT performance levels for foreground LCI; use of a collection or selector as one inventory exchange; unsupported comparative claims |
| required_metadata | canonical PCR id; CPC coordinate and inclusion rationale; product-specific flow UUID; all required qualifiers; facility geography; route and process diagram; batch or campaign period; net product mass; atomic BOM, utility, refrigerant, chemical, packaging, waste, and emission records; allocation method; upstream dataset references; treatment destinations; data-quality assessment |
| required_quality_disclosure | Data coverage and gaps; meter and calibration evidence; mass, energy, refrigerant, and water balance results; representativeness; proxies; allocation sensitivity; excluded operations; not-applicable evidence; unresolved UUID reviews; classification or flow decisions under `manual_review` |
| update_trigger | Product formulation, state, classification, route, equipment, energy system, refrigerant, supplier mix, packaging, sanitation chemistry, treatment route, or allocation changes materially; data age exceeds study requirements; an unresolved flow gains an exact public state100 identity; the official CPC, Codex, PEF, or applicable BAT source changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-22290` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, subclass 22290, last updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-12 | Product identity, included liquid or paste milk-constituent products, exclusions and `manual_review` trigger |
| `codex-cxs-206-1999` | Standard (`standard`) | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms, amended 2022, https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf, retrieved 2026-08-12 | Milk-product identity, composition-modification and reconstitution disclosures, and prevention of misleading product naming |
| `codex-cxs-243-2003` | Standard (`standard`) | Codex Alimentarius, CXS 243-2003, Standard for Fermented Milks, amended 2024, https://workspace.fao.org/sites/codex/Standards/CXS%20243-2003/CXS_243e.pdf, retrieved 2026-08-12 | Conditional fermented-product identity and route exclusion; no composition or quality value is used as a generic LCI amount |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, Annex I, ELI http://data.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-12 | Functional unit and reference flow, system-boundary transparency, company-specific data, completeness, data quality, multi-output handling and reporting |
| `eu-fdm-bat-2019-2031` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, ELI http://data.europa.eu/eli/dec_impl/2019/2031/oj, retrieved 2026-08-12 | Process and monitoring decomposition, material-energy-water-waste inventories, CIP records, heat recovery and recovered-stream handling; BAT performance values are not used as generic LCI |
