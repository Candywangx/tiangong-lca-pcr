---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.yeasts-active-or-inactive-other-single-cell-micro-organisms-dead-prepared-baking-powders
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Yeasts (active or inactive); other single-cell micro-organisms, dead; prepared baking powders

## 1. Scope and Applicability

This PCR supports foreground data packages for products within CPC 3.0 subclass 23996: active or inactive yeasts, other dead single-cell micro-organisms, and prepared baking powders. Each data package shall represent one declared product family, formulation or organism, biological state, physical form, grade, production route, and factory-gate market state. It shall not combine materially different products into an undocumented category average.

The Tiangong flow `dried yeast` is the representative product and physical form for this PCR. It is not a generic identity for all products in CPC 23996. A data producer shall replace it with a more accurate Tiangong product flow whenever the actual product is fresh or cream yeast, inactive yeast, another dead single-cell micro-organism, prepared baking powder, or another non-matching form. The representative UUID shall never be silently retained for a different product.

The foreground boundary covers operations controlled by the reporting facility from receipt of purchased materials, cultures, ingredients, utilities, and packaging through the declared factory-gate product. Depending on the declared route, this can include microbial cultivation, recovery, inactivation, drying and finishing, or baking-powder ingredient handling, blending, quality control, packaging, and on-site treatment. Upstream production of purchased inputs and downstream use of the product are represented by linked datasets rather than absorbed into the foreground inventory.

Excluded products include baked foods and dough products, fermentation services, separately sold bicarbonates or acid-reacting ingredients that are not prepared baking powder, products classified outside CPC 23996, capital goods unless required by the study goal, and downstream distribution, use, or end-of-life not explicitly brought into scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.yeasts-active-or-inactive-other-single-cell-micro-organisms-dead-prepared-baking-powders |
| classification_refs | CPC 3.0: 23996 |
| covered_products | Active or inactive yeasts; other dead single-cell micro-organisms sold as products; prepared baking powders |
| excluded_products | Products outside CPC 23996; downstream baked foods or fermentation services; separately sold baking-powder ingredients; downstream use and end-of-life unless explicitly included |
| representative_product | Dried yeast, specifically the declared dried-yeast form; the Tiangong record is feed-grade and is representative only when that identity matches |
| production_route | Route-specific microbial cultivation, recovery, inactivation and/or drying; or dry-ingredient receiving, dosing, blending and packing for prepared baking powder |
| market_state | One declared factory-gate product with specified biological state, form, moisture or dry-matter basis, grade, formulation where applicable, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of the declared CPC 23996 yeast, dead single-cell micro-organism, or prepared baking powder at the factory gate |
| How much | 1 kg net mass of conforming declared product |
| How well | Meets the declared product specification for identity, biological activity or dead/inactive state, physical form, moisture or dry matter, grade, formulation where applicable, and packaging state |
| How long or cycle | One production batch or reporting-period output at the factory gate; no use-stage duration is implied |
| reference_flow_link | The reference product output of `packaging_and_dispatch`, normalized to 1 kg net declared product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net declared product at factory gate |
| Reference product flow | dried yeast, feed-grade `3ea5b163-5e50-4f40-bf13-8a6c3f10d1b6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family; organism and strain when applicable; active, inactive, or dead state; product form; moisture or dry-matter basis; grade and intended use; formulation or ingredient classes when applicable; production route; geography; technology and reporting period; packaging state; exact Tiangong flow-match decision |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. The `dried yeast` UUID may be retained only when the declared product actually matches the dried-yeast, feed-grade identity. For every other product or form, the producer shall use a more accurate real flow when available; if none is available, the identity gap shall remain explicit rather than being hidden by the representative UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to 1 kg net mass of conforming declared product at the factory gate. |
| `net_mass_excludes_packaging` | Reference product and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude packaging mass from the 1 kg reference amount and record packaging as separate inventory inputs. |
| `moisture_basis_disclosure` | Wet, cream, compressed, dried, or powdered microbial products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-sold mass and moisture or dry-matter fraction. Convert between wet and dry bases only from product-specific measured values and retain the calculation. |
| `formulation_mass_basis` | Prepared baking powder | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each formulation ingredient on the same as-received mass basis and reconcile ingredient, product, waste, and stock-change masses. |
| `representative_flow_match` | Product-flow identity | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the representative dried-yeast UUID only for a matching dried-yeast, feed-grade product; otherwise replace it with the closest verified real product flow and disclose the decision. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased substrates, cultures, ingredients, processing aids, utilities, and packaging are received at the reporting facility in their documented as-received state. |
| starting_condition_role | Foreground manufacturing gate; upstream production remains in linked supplier or background datasets. |
| product_classification_scope | CPC 3.0 subclass 23996, while each data package represents one specifically declared product and route. |
| recursive_input_rule | A purchased input that is itself in CPC 23996 remains a visible product input linked to a separate upstream dataset; do not recursively absorb it into the same foreground process or relabel it with the representative UUID. |
| upstream_dataset_requirement | Link all material purchased substrates, ingredients, cultures, nutrients, utilities, packaging materials, and externally treated wastes to geographically, temporally, technologically, and product-form appropriate datasets. |
| disclosure | Declare the actual product family, biological state, formulation or organism, physical form, moisture basis, grade, production route, reporting period, facility coverage, packaging state, excluded operations, same-category inputs, and product-flow substitution decision. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_specific_operations` | Foreground manufacturing | Include every applicable controlled operation from input receipt through the declared factory-gate product. For microbial products this may include culture and feed preparation, aerobic cultivation, recovery, inactivation, drying and finishing; for prepared baking powder it includes ingredient receipt, dosing, blending, quality control and packing. | `us-epa-ap42-yeast-1995`; `canada-cfcs-baking-powder` |
| `boundary_upstream_links` | Purchased inputs and services | Keep purchased materials, cultures, ingredients, energy, water supply, packaging, transport services, and external treatment as explicit inputs linked to appropriate upstream datasets; do not omit a material input merely because it is outside direct operational control. | `iso-14044-2006`; `eu-commission-pef-2021` |
| `boundary_direct_releases` | Direct emissions and wastes | Record direct releases and treatment transfers from applicable fermentation, separation, drying, powder handling, cleaning, and wastewater operations using facility records; do not use the absence of a default factor as evidence of zero. | `us-epa-ap42-yeast-1995`; `iso-14044-2006` |
| `boundary_category_not_route_average` | Product and route selection | Include only the process modules that apply to the declared product. Do not apply a dried-yeast process, biological activity assumption, or reference UUID to inactive yeast, other dead single-cell organisms, or prepared baking powder without an explicit match. | `un-cpc-v3-23996` |
| `boundary_packaging_and_dispatch` | Factory-gate market state | Include packaging and dispatch preparation when they are part of the declared market state, keep packaging mass outside net product mass, and disclose any deliberate packaging exclusion. | `eu-commission-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | Raw-material, ingredient, or culture preparation | required | Always; apply the route-specific preparation steps and inputs | Foreground input receiving, storage, dosing, preparation, clarification or sanitation | Mass of prepared feed, ingredient blend, or material transferred to the next applicable process |
| `microbial_biomass_production` | Microbial cultivation or propagation | conditional | Include when the declared yeast or single-cell product is cultivated at the reporting facility | Foreground biological production | Mass of recovered-broth or culture output transferred to recovery |
| `biomass_recovery_and_finishing` | Biomass recovery, inactivation, drying, and finishing | conditional | Include for microbial products when separation, killing/inactivation, concentration, extrusion, drying, milling, or finishing occurs | Foreground recovery and product-form creation | Mass of finished microbial product transferred to packaging |
| `baking_powder_formulation` | Prepared baking-powder formulation | conditional | Include when the declared product is prepared baking powder | Foreground dosing, blending, quality control and bulk finishing | Mass of conforming prepared baking powder transferred to packaging |
| `packaging_and_dispatch` | Packaging and factory-gate dispatch | required | Always; record bulk delivery explicitly when no packaging is used | Foreground creation of declared factory-gate market state | Net mass of conforming declared product dispatched |

### Process: Raw-material, ingredient, or culture preparation (`raw_material_preparation`)

#### Inputs

##### Product flows

###### Declared primary materials (`raw_primary_materials`)

Record all as-received primary materials for the selected route: culture and carbon source, nutrients and processing aids for microbial production, or bicarbonate, acid-reacting material, starch or other neutral carrier for prepared baking powder.

- Selected flow: Route-specific purchased primary materials
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass transferred into the batch or reporting period, corrected for documented returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net declared product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_preparation`
- Sources: `us-epa-ap42-yeast-1995`; `canada-cfcs-baking-powder`

###### Preparation water (`raw_preparation_water`)

Record water entering dilution, cleaning, clarification, sanitation, or other route-specific preparation when it crosses the foreground boundary.

- Selected flow: Process water
- Flow property / unit: Mass or volume / kg or m3 with measured density conversion where needed
- Amount rule: Metered or batch-recorded water attributable to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net declared product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_preparation`
- Sources:

###### Preparation energy (`raw_preparation_energy`)

Record purchased electricity and thermal-energy carriers used for receiving, storage, dosing, dissolution, clarification, sterilization, sanitation, and ingredient handling.

- Selected flow: Purchased electricity and thermal-energy carriers by carrier
- Flow property / unit: Energy / kWh for electricity and MJ for thermal energy or fuel-specific physical units
- Amount rule: Metered or allocated energy use for the applicable preparation operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net declared product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_preparation`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared route feed or ingredient set (`prepared_route_material`)

Record the prepared material transferred to cultivation, recovery, or formulation without treating the intermediate as the reference product.

- Selected flow: Route-specific prepared feed or ingredient intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass by batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per process output transferred to the next applicable process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_preparation`
- Sources:

##### Waste flows

###### Preparation residues and wastewater (`raw_preparation_waste`)

Record rejected ingredients, clarification residues, cleaning wastewater, and other preparation wastes separately by destination and treatment route.

- Selected flow: Route-specific preparation waste or wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Weighed, metered, or transfer-document amount by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net declared product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_preparation`
- Sources:

##### Elementary flows

### Process: Microbial cultivation or propagation (`microbial_biomass_production`)

#### Inputs

##### Product flows

###### Prepared culture feed and inoculum (`cultivation_feed_and_inoculum`)

Record prepared carbon source, inoculum, nutrients, vitamins, pH-control agents, and other product inputs actually used in cultivation.

- Selected flow: Product-specific cultivation feed, inoculum, nutrients, and additives
- Flow property / unit: Mass / kg
- Amount rule: Batch or reporting-period material issue records reconciled with returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg recovered-broth or culture output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_biomass_production`
- Sources: `us-epa-ap42-yeast-1995`

###### Cultivation water (`cultivation_water`)

Record process and cleaning water attributable to cultivation, distinguishing water retained in product from wastewater where measured.

- Selected flow: Process water
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered or batch-recorded cultivation and cleaning water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg recovered-broth or culture output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_biomass_production`
- Sources: `us-epa-ap42-yeast-1995`

###### Aeration and cultivation energy (`cultivation_energy`)

Record electricity for aeration, agitation, pumps and controls and thermal energy for sterilization or temperature control by actual carrier.

- Selected flow: Purchased electricity and thermal-energy carriers by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or justified equipment-level allocation for cultivation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg recovered-broth or culture output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_biomass_production`
- Sources: `us-epa-ap42-yeast-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cultivation broth or wet biomass (`cultivation_biomass_output`)

Record the mass and solids or dry-matter content of broth or wet biomass transferred to recovery.

- Selected flow: Product-specific cultivation broth or wet biomass
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass with measured solids or dry-matter fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per cultivation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_biomass_production`
- Sources: `us-epa-ap42-yeast-1995`

##### Waste flows

###### Cultivation wastewater and discarded broth (`cultivation_wastewater`)

Record discharged or treated broth, cleaning liquid, and other cultivation wastewater by treatment destination.

- Selected flow: Cultivation wastewater or discarded broth
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered discharge or treatment-transfer amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg recovered-broth or culture output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_biomass_production`
- Sources: `us-epa-ap42-yeast-1995`

##### Elementary flows

###### Direct cultivation carbon dioxide (`cultivation_carbon_dioxide`)

Record biogenic or fossil carbon dioxide released directly from cultivation according to the declared carbon accounting method; do not infer zero from missing default data.

- Selected flow: Carbon dioxide to air, with fossil or biogenic identity declared
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or an approved carbon-balance calculation from collected foreground records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg recovered-broth or culture output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_microbial_biomass_production`
- Sources: `us-epa-ap42-yeast-1995`

###### Direct cultivation volatile organic compounds (`cultivation_voc`)

Record facility-specific volatile organic compound releases when applicable. EPA AP-42 factors shall not replace site records without an explicit suitability review because the source reports high variation among facilities and batches.

- Selected flow: Product- and jurisdiction-appropriate VOC elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or facility-approved calculated release by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg recovered-broth or culture output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_biomass_production`
- Sources: `us-epa-ap42-yeast-1995`

### Process: Biomass recovery, inactivation, drying, and finishing (`biomass_recovery_and_finishing`)

#### Inputs

##### Product flows

###### Cultivation broth or wet biomass input (`recovery_biomass_input`)

Record the incoming microbial intermediate with measured mass and solids or dry-matter content.

- Selected flow: Product-specific cultivation broth or wet biomass
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled to the cultivation output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg finished microbial product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biomass_recovery_finishing`
- Sources: `us-epa-ap42-yeast-1995`

###### Recovery and finishing aids (`recovery_finishing_aids`)

Record water, emulsifiers, cutting oils, carriers, anti-caking agents, and other aids only when actually used, with the product-specific function disclosed.

- Selected flow: Product-specific recovery and finishing aids
- Flow property / unit: Mass / kg
- Amount rule: Batch issue or dosing record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg finished microbial product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biomass_recovery_finishing`
- Sources: `us-epa-ap42-yeast-1995`

###### Recovery and drying energy (`recovery_drying_energy`)

Record electricity and thermal energy for centrifugation, filtration, inactivation, extrusion, drying, milling, cooling and other applicable finishing operations by carrier.

- Selected flow: Purchased electricity and thermal-energy carriers by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or justified equipment-level allocation for the applicable operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg finished microbial product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biomass_recovery_finishing`
- Sources: `us-epa-ap42-yeast-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished microbial product (`finished_microbial_product`)

Record the conforming active or inactive yeast or other dead single-cell microbial product in its declared as-sold form, together with moisture or dry-matter and biological-state evidence.

- Selected flow: Product-specific finished microbial product
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming product mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per recovery and finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biomass_recovery_finishing`
- Sources:

##### Waste flows

###### Recovery liquid and rejected biomass (`recovery_waste`)

Record separation liquid, rejected biomass, filter residues, off-specification material, and cleaning wastewater separately by treatment or recovery route.

- Selected flow: Route-specific recovery waste or wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Weighed, metered, or transfer-document amount by waste type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg finished microbial product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biomass_recovery_finishing`
- Sources: `us-epa-ap42-yeast-1995`

##### Elementary flows

###### Recovery and drying air emissions (`recovery_drying_air_emissions`)

Record direct dust, particulate, VOC, combustion, or other releases from applicable recovery and drying equipment using facility-specific measurement or approved calculations.

- Selected flow: Pollutant-specific elementary flows to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or facility-approved calculated releases by pollutant and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg finished microbial product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biomass_recovery_finishing`
- Sources: `us-epa-ap42-yeast-1995`

### Process: Prepared baking-powder formulation (`baking_powder_formulation`)

#### Inputs

##### Product flows

###### Bicarbonate component (`baking_powder_bicarbonate`)

Record the actual sodium or potassium bicarbonate ingredient by supplier, grade, and lot.

- Selected flow: Sodium or potassium bicarbonate used in the declared formulation
- Flow property / unit: Mass / kg
- Amount rule: Weighed batch dose reconciled with inventory issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg conforming prepared baking powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baking_powder_formulation`
- Sources: `canada-cfcs-baking-powder`

###### Acid-reacting component (`baking_powder_acid_component`)

Record each acid-reacting material in the declared formulation by chemical identity, supplier, grade, and lot.

- Selected flow: Declared acid-reacting material
- Flow property / unit: Mass / kg
- Amount rule: Weighed batch dose reconciled with inventory issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg conforming prepared baking powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baking_powder_formulation`
- Sources: `canada-cfcs-baking-powder`

###### Starch or neutral carrier (`baking_powder_carrier`)

Record starch or other neutral material in the declared formulation by material identity, supplier, grade, and lot.

- Selected flow: Declared starch or neutral carrier
- Flow property / unit: Mass / kg
- Amount rule: Weighed batch dose reconciled with inventory issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg conforming prepared baking powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baking_powder_formulation`
- Sources: `canada-cfcs-baking-powder`

###### Formulation energy (`baking_powder_energy`)

Record electricity and other energy used for conveying, sieving, dosing, blending, dust collection, quality control, and bulk transfer.

- Selected flow: Purchased electricity and other energy carriers by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or justified equipment-level allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg conforming prepared baking powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baking_powder_formulation`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming prepared baking powder (`finished_baking_powder`)

Record the conforming bulk blend with formulation identifier and product-quality release evidence before packaging.

- Selected flow: Prepared baking powder matching the declared formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming product mass released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per formulation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baking_powder_formulation`
- Sources: `canada-cfcs-baking-powder`

##### Waste flows

###### Off-specification blend and collected powder (`baking_powder_waste`)

Record off-specification blend, recovered dust, spills, and cleaning residues separately by reuse, rework, treatment, or disposal destination.

- Selected flow: Prepared-baking-powder production waste by destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste, rework, or transfer amount by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg conforming prepared baking powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baking_powder_formulation`
- Sources:

##### Elementary flows

###### Powder-handling air emissions (`baking_powder_air_emissions`)

Record direct particulate or ingredient-specific air releases after control when applicable; a dust-collection record alone is not evidence that the release is zero.

- Selected flow: Pollutant-specific elementary flows to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or facility-approved calculated release by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg conforming prepared baking powder
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baking_powder_formulation`
- Sources:

### Process: Packaging and factory-gate dispatch (`packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Bulk conforming product (`bulk_conforming_product`)

Record the conforming microbial product or prepared baking powder transferred into packaging or bulk dispatch.

- Selected flow: Declared bulk conforming product
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with the applicable upstream process output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg net declared product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources:

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging placed on the market or consumed in dispatch, separately by material and component.

- Selected flow: Packaging components by material and component type
- Flow property / unit: Mass or item count converted with measured component mass / kg
- Amount rule: Purchased or issued packaging reconciled with packaged output, rejects, returns, and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg net declared product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `eu-commission-pef-2021`

###### Packaging and dispatch energy (`packaging_dispatch_energy`)

Record electricity and other energy used for filling, sealing, labelling, palletizing, bulk loading, controlled storage, and factory-gate dispatch preparation.

- Selected flow: Purchased electricity and other energy carriers by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or justified equipment-level allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg net declared product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Factory-gate reference product (`factory_gate_reference_product`)

This is the reference output. The selected Tiangong UUID represents dried yeast, feed-grade only. Replace it for any non-matching product or form and retain the product-flow identity decision with the data package.

- Selected flow: dried yeast, feed-grade `3ea5b163-5e50-4f40-bf13-8a6c3f10d1b6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net conforming declared product at factory gate; packaging mass is excluded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources:

##### Waste flows

###### Packaging rejects and dispatch losses (`packaging_dispatch_waste`)

Record rejected packaging, damaged product, recovered product, spills, and dispatch-preparation waste separately by material and destination.

- Selected flow: Packaging and dispatch waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented waste and recovery amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg net declared product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Separable products, routes, batches, and operations | Avoid allocation by separately measuring and modelling distinct product routes, batches, unit operations, rework loops, and waste-treatment activities whenever practical. | `iso-14044-2006` |
| `allocation_physical_driver` | Unavoidable shared inputs and emissions | When subdivision is not practical, allocate shared burdens using a documented causal physical driver such as metered equipment use, processing time, dry-matter throughput, or another measurable relationship appropriate to the shared operation. | `iso-14044-2006` |
| `allocation_other_relationship` | Shared burdens without a defensible physical relationship | Use another relationship, including economic allocation, only when no defensible causal physical basis exists; disclose the method, data period, prices or other parameters, and a sensitivity check. | `iso-14044-2006` |
| `allocation_co_product_accounting` | Saleable co-products, recovered materials, and rework | Keep co-product quantities and destinations explicit. Do not treat internal rework as a second product, and do not credit exported material or energy without an explicitly declared system-expansion, substitution, or allocation method consistent with the study goal. | `iso-14044-2006`; `eu-commission-pef-2021` |
| `allocation_category_routes` | Mixed production of microbial products and prepared baking powder | Do not allocate category-wide average burdens across materially different organisms, biological states, formulations, or product forms without documented representativeness and product-specific output quantities. | `un-cpc-v3-23996`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_preparation` | `raw_material_preparation` | Primary materials, water, energy, intermediate output, residues, wastewater | Purchase and issue records; scales; meters; batch and cleaning logs; waste transfers | material_id; supplier; lot; opening_stock; receipts; issues; returns; closing_stock; measured_mass; water_volume; energy_by_carrier; intermediate_mass; waste_mass; wastewater_volume; timestamp | Reconcile material and utility records to each batch or stable reporting period and retain route-specific identities | kg; m3; kWh; MJ | Each batch with reporting-period reconciliation | Declared representative production period covering routine and material campaign variation | Every facility included in the dataset | Sum verified inputs and outputs, apply stock-change corrections, then normalize to net conforming factory-gate output | Calibrated scale and meter records; signed batch sheets; invoices; stock reconciliation; waste manifests |
| `cp_microbial_biomass_production` | `microbial_biomass_production` | Cultivation inputs, wet biomass, wastewater, direct CO2 and VOC | Fermentor batch records; dosing systems; utility meters; laboratory solids tests; discharge and emission records | strain; batch_id; feed_mass; inoculum_mass; nutrient_mass; water; electricity; thermal_energy; aeration; broth_mass; solids_fraction; wastewater; measured_emissions; operating_time | Collect per fermentor or campaign and reconcile transfers to recovery; distinguish measured emissions from calculations | kg; m3; kWh; MJ; h | Each cultivation batch or campaign | Declared representative period including material product and seasonal variation | Each cultivation line and facility included | Aggregate only comparable product and operating states; normalize to measured recovered-broth or culture output and then to reference product | Batch release records; calibrated meters; laboratory results; emission-monitoring method and calculation file |
| `cp_biomass_recovery_finishing` | `biomass_recovery_and_finishing` | Recovery inputs, finished microbial product, wastes, wastewater, and direct air releases | Transfer scales; moisture or solids tests; dosing and utility records; dryer and filter logs; waste and emission records | batch_id; incoming_mass; incoming_solids; aids; water; electricity; thermal_energy; product_mass; moisture; biological_state_test; waste_mass; wastewater; pollutant_mass | Reconcile each recovery and finishing batch from incoming intermediate through conforming product and all losses | kg; m3; kWh; MJ | Each batch with reporting-period reconciliation | Declared representative period covering all included product forms and technologies | Each recovery, inactivation, drying, or finishing line included | Normalize to conforming product at the declared moisture basis; keep routes and forms separate unless representativeness is demonstrated | Calibrated scale and meter records; laboratory moisture and state tests; equipment logs; waste manifests; emission records |
| `cp_baking_powder_formulation` | `baking_powder_formulation` | Formulation ingredients, energy, conforming blend, off-specification material, recovered dust, and releases | Supplier and lot records; calibrated dosing scales; batch sheets; utility meters; release tests; dust and waste records | formulation_id; ingredient_identity; supplier; lot; dose_mass; opening_stock; closing_stock; energy; product_mass; release_result; rework_mass; waste_mass; collected_dust; emitted_dust | Collect each ingredient dose and output by batch and reconcile the complete formulation mass balance | kg; kWh; MJ | Each formulation batch | Declared representative period covering all included formulations | Each blending line and facility included | Keep formulations separate unless a weighted average is justified by production volumes and equivalent performance | Approved formulation; supplier certificates; calibrated scale records; signed batch and release records; waste and dust-control records |
| `cp_packaging_and_dispatch` | `packaging_and_dispatch` | Bulk product, packaging, energy, reference output, rejects and dispatch losses | Transfer and dispatch scales; packaging issue records; component weights; utility meters; packing logs; waste records | product_id; batch_id; bulk_mass; package_component; component_mass; component_count; energy; dispatched_net_mass; packaging_mass; reject_mass; recovered_product; timestamp | Reconcile bulk input, net dispatched product, packaging issued, rejects, recovered product, and stock change | kg; item; kWh; MJ | Each packing or bulk-dispatch batch | Same period as upstream foreground production | Every packing line, bulk-loading line, and facility included | Sum net conforming dispatch mass and normalize all inventory to 1 kg net product; exclude packaging mass from reference amount | Calibrated dispatch scale; packaging specifications; issue records; shipment records; waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | Normalized amount = verified reporting-period or batch amount divided by net conforming factory-gate product mass on the declared basis. | row amount; net conforming product mass; moisture basis where applicable | Amount per 1 kg net declared product | `iso-14044-2006` |
| `calc_stock_reconciliation` | Purchased and intermediate materials | Material consumed = opening stock + receipts - closing stock - documented returns; investigate material differences before normalization. | opening stock; receipts; closing stock; returns; issue records | Reconciled material consumption | `iso-14044-2006` |
| `calc_dry_matter_conversion` | Microbial products reported on wet and dry bases | Dry mass = as-sold mass multiplied by measured dry-matter fraction. Do not use a generic moisture factor across product forms or lots. | as-sold mass; measured dry-matter fraction | Dry mass and retained conversion record | `iso-14044-2006` |
| `calc_shared_utility_allocation` | Shared utility meters | Use direct submeters first; otherwise allocate by a measured causal driver such as equipment power multiplied by operating time and document unallocated baseload. | meter total; submeter values; equipment power; operating time; throughput | Product- and process-specific utility amount | `iso-14044-2006` |
| `calc_direct_emissions` | Direct air and water releases | Use validated facility measurement or a documented calculation from collected concentration, flow, operating time, carbon balance, or mass balance. Do not treat AP-42 factors as product defaults. | measured concentration; standardized gas or water flow; operating time; collected material and carbon records | Pollutant-specific direct release | `us-epa-ap42-yeast-1995`; `iso-14044-2006` |
| `calc_packaging_normalization` | Packaging | Packaging per reference flow = reconciled component mass placed on the market divided by net conforming product mass dispatched. | packaging component counts and masses; net dispatched product mass; rejects and returns | kg packaging component per 1 kg net product | `eu-commission-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all product outputs | Demonstrate the specific product family, organism and strain when relevant, biological state, form, moisture basis, grade, formulation when relevant, and exact Tiangong flow-match decision. | Approved product specification; batch release; flow readback or documented unresolved identity gap |
| `dq_route_separation` | Mixed facilities and product portfolios | Keep materially different microbial routes, biological states, drying technologies, formulations, and packaging states separate unless a production-weighted aggregation is justified and disclosed. | Product-route matrix; batch list; production volumes; aggregation rationale |
| `dq_temporal_representativeness` | All foreground data | Use one consistent, declared period that represents routine operation and captures material campaigns, seasonal conditions, downtime, rework, and abnormal exclusions. | Reporting-period statement; production schedule; exclusion log; reconciliation |
| `dq_measurement_control` | Mass, water, energy, moisture, emissions, and waste | Use calibrated or verified instruments and retain units, conversion factors, detection limits where relevant, and responsible records. | Calibration certificates; meter checks; laboratory methods; chain of custody; calculation files |
| `dq_completeness` | Foreground inventory | Reconcile material, product, waste, water, energy, and direct-release records and document every material gap, estimate, exclusion, and cut-off decision. | Mass and utility reconciliation; completeness checklist; variance investigation; exclusion register |
| `dq_upstream_fit` | Linked upstream datasets | Select datasets that match material identity, product form, technology, geography, time, and supplier situation; disclose proxies and substitution choices. | Supplier data; dataset metadata; proxy justification; sensitivity or improvement plan |
| `dq_source_traceability` | All calculated and source-constrained values | Preserve the raw foreground record, formula, allocation driver, source identifier, operator, and revision so every normalized value can be reproduced. | Audit trail; versioned calculation workbook or script; source register; reviewer record |
| `dq_review_and_verification` | Shared or published datasets | Review product identity, boundary, allocation, data quality, and reproducibility before publication; third-party disclosed studies follow the applicable verification requirements. | Review checklist; issue resolution; verification statement where applicable; `eu-commission-pef-2021` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | Product category and dataset metadata | Fail conformance when the concrete product family, biological state, form, moisture or dry-matter basis, grade, formulation when applicable, production route, or packaging state is missing. | `un-cpc-v3-23996` |
| `validate_reference_flow` | Reference flow | Require exactly 1 kg net conforming declared product at factory gate, Mass property, Units of mass unit group, kg reference unit, and all required qualifiers. | `iso-14044-2006` |
| `validate_representative_uuid` | Tiangong product-flow identity | Reject silent use of `3ea5b163-5e50-4f40-bf13-8a6c3f10d1b6` for a product that is not matching dried yeast, feed-grade; require a closer verified flow when available and an explicit identity gap when none is available. | `un-cpc-v3-23996` |
| `validate_route_coverage` | Process map and inventory | Require all and only applicable route modules: preparation and dispatch always, microbial cultivation and recovery/finishing for relevant microbial routes, and baking-powder formulation for prepared baking powder. | `us-epa-ap42-yeast-1995`; `canada-cfcs-baking-powder` |
| `validate_mass_and_units` | Measurement and normalization | Require consistent mass units, stock-change reconciliation, net-product normalization, separate packaging mass, and measured moisture conversion when wet and dry bases are compared. | `iso-14044-2006` |
| `validate_inventory_completeness` | Materials, utilities, wastes, and direct releases | Require material input, water, energy, product, waste, wastewater, packaging, and applicable direct-emission records; a missing default factor does not justify a zero flow. | `us-epa-ap42-yeast-1995`; `eu-commission-pef-2021` |
| `validate_allocation` | Shared processes and co-products | Require subdivision where practical or a documented causal allocation driver; otherwise require the selected relationship, parameters, justification, and sensitivity check. | `iso-14044-2006` |
| `validate_data_quality` | Foreground evidence | Require the collection period, site and line coverage, instruments, raw records, formulas, exclusions, proxies, and quality evidence needed to reproduce every material normalized value. | `iso-14044-2006`; `eu-commission-pef-2021` |
| `validate_source_traceability` | Evidence-backed rules | Require every cited source id to resolve in Data Sources and distinguish source-constrained rules from foreground measurements and author judgment. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one specifically declared CPC 23996 product and route |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, quality review, and publication approval |
| allowed_use | Product carbon-footprint or LCA modelling when product identity, route, geography, technology, time, moisture basis, grade, formulation and packaging state match the study and all upstream links are complete |
| excluded_use | Generic representation of all CPC 23996 products; silent use of the dried-yeast UUID for another form; use-stage performance modelling; biological activity equivalence; cross-form or cross-formulation comparison without functional equivalence; public comparative claims without applicable review and verification |
| required_metadata | Canonical PCR id; CPC reference; product and organism or formulation identity; active, inactive or dead state; form; moisture or dry-matter basis; grade and intended use; production route; geography; technology; reporting period; facility and line coverage; packaging state; product-flow substitution decision; allocation; exclusions; source ids |
| required_quality_disclosure | Foreground-data share; meter and scale coverage; batch and temporal coverage; mass and utility reconciliation; emission method; allocation drivers; proxy datasets; cut-offs and exclusions; uncertainty and representativeness limits; review status |
| update_trigger | Change in product identity, strain or formulation, biological state, product form, moisture basis, process technology, major supplier or energy source, packaging, facility boundary, allocation method, product-flow UUID, regulation or source evidence, or a material shift in measured inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-23996` | Standard (`standard`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 23996, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-10) | Product-category scope and the requirement to distinguish yeasts, other dead single-cell micro-organisms, and prepared baking powders |
| `us-epa-ap42-yeast-1995` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, AP-42 Chapter 9.13.4 Yeast Production, January 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s13-4.pdf (retrieved 2026-08-10) | Baker's-yeast process decomposition, inputs, fermentation, recovery, blending, drying, packaging, wastewater, VOC and CO2 inventory checkpoints; emission factors are not adopted as defaults |
| `canada-cfcs-baking-powder` | Standard (`standard`) | Canadian Food Inspection Agency, Canadian Food Compositional Standards, Volume 3 Baking Powder, section 3.1.1, https://inspection.canada.ca/en/about-cfia/acts-and-regulations/list-acts-and-regulations/documents-incorporated-reference/canadian-food-compositional-standards-0 (retrieved 2026-08-10) | Prepared baking-powder product and formulation identity: bicarbonate, acid-reacting material, and starch or another neutral material |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including current amendments listed by ISO, https://www.iso.org/standard/38498.html (retrieved 2026-08-10) | Goal and scope, inventory completeness, allocation hierarchy, data quality, reporting, review and traceability rules |
| `eu-commission-pef-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, C(2021) 9332 final, https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en?filename=CommissionRecommendationontheuseoftheEnvironmentalFootprintmethods_0.pdf (retrieved 2026-08-10) | Life-cycle scope, modelling and data-quality expectations, packaging and supply-chain completeness, and verification expectations |
