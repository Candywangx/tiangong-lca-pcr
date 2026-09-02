---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.watch-straps-except-of-metal
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Watch straps, except of metal
+

## 1. Scope and Applicability

This PCR applies to complete watch straps whose strap body is not metal, including leather, moulded silicone rubber, thermoplastic polyurethane and woven polyamide strap bodies supplied as original-equipment or replacement products. Minor metal components such as buckles, buckle tongues and spring bars remain in scope when incorporated into a non-metal strap.

Metal bracelet straps, watch cases, watches, electronic modules, sensor-bearing smart bands, standalone buckles and upstream production of finished leather, polymer compounds, woven webbing, pigments, adhesives and hardware are excluded as foreground production. Their burdens enter through product inputs and conforming upstream datasets. Distribution, use, maintenance and end-of-life are outside the default factory-gate boundary.

A producer shall declare the exact strap-body material and grade, construction route, compatible watch interface, dimensions, closure and hardware composition, colour and finish, production geography and period, net product mass, packaging configuration, foreground process coverage and any deviation from the representative process map.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.watch-straps-except-of-metal |
| classification_refs | CPC 3.0: 29230, Watch straps, except of metal |
| covered_products | Complete leather, silicone-rubber, thermoplastic-polyurethane, woven-polyamide and comparable non-metal watch straps, including incorporated closures and watch-interface hardware |
| excluded_products | Metal bracelet straps; watches and watch cases; electronic or sensor-bearing bands; standalone hardware; upstream finished-material production |
| representative_product | A factory-gate, non-metal watch strap with declared strap-body material, fitted closure and watch-interface hardware |
| production_route | Receipt of finished materials and hardware → body conversion → hardware fitting and assembly → conditional surface finishing and cleaning → final quality control → packaging |
| market_state | Finished original-equipment or replacement watch strap released at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a non-metal wrist attachment that secures a compatible watch under the declared fit and closure requirements |
| How much | 1 kg net finished watch straps, excluding removable packaging |
| How well | Released against the producer's declared dimensions, compatible interface, closure integrity, appearance and applicable skin-contact specifications |
| How long or cycle | One production batch at the factory gate; service life is not normalized and any durability-test basis shall be disclosed |
| reference_flow_link | `reference_watch_strap` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Watch straps, except of metal `19a79c1e-d7a4-422d-b754-47ea82969f9f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | strap-body material and grade; construction route; compatible watch interface; strap dimensions and size; closure and hardware composition; colour and finish; net mass; packaging configuration; production geography and period |

When constructing a foreground data package, every required qualifier shall be recorded in dataset metadata, process notes, the reference-flow comment, product description or an equivalent package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted strap bodies together with permanent closures, keepers, spring bars, thread, adhesive and coatings; exclude removable bags, cartons, inserts and shipping materials. |
| `component_count_to_mass` | Counted components and packaging | Mass | kg | Convert counts to mass using a measured mean unit mass from the same SKU and production period; retain sample size and weighing records. |
| `utility_units` | Electricity, hot water and natural gas | Energy | kWh or MJ | Preserve meter units and conversion factors. Report natural gas on a declared lower-heating-value basis and do not combine utilities into one exchange. |
| `water_volume` | Cooling, cleaning and wastewater | Volume | m3 | Use calibrated metering or a documented batch balance; count recirculated internal water once and record only boundary-crossing make-up or discharge. |
| `dry_waste_mass` | Material and packaging wastes | Mass | kg | Weigh wastes by named material and disposition after tare correction; reusable internal returns are not waste outputs. |

## 5. System Boundary

The default study is cradle-to-factory-gate. The foreground starts with receipt of finished strap-body materials, joining materials, hardware and packaging and ends with released, packed straps. Product inputs require upstream datasets covering raw-material extraction and their own production. Distribution, consumer use and end-of-life are excluded unless a study explicitly expands the boundary.

For a leather route, tanning and finishing of hides are upstream. Do not insert tannery operations into a strap-assembly site's foreground inventory unless the reporting organization actually controls those operations and separately discloses them.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished leather, polymer compound or woven webbing and separately supplied hardware, joining materials and packaging are received with declared grade, mass, supplier and geography |
| starting_condition_role | Foreground factory-gate conversion input |
| product_classification_scope | Complete non-metal watch straps corresponding to CPC 3.0 subclass 29230 |
| recursive_input_rule | A complete non-metal watch strap received for further processing is recorded once as a product input with its upstream dataset; do not recursively reconstruct the same category inside the receiving process |
| upstream_dataset_requirement | Every finished material, chemical, utility, hardware and packaging input shall link to a geographically and technologically representative upstream dataset; finished leather data shall include tanning and finishing burdens |
| disclosure | Declare material route, suppliers or dataset proxies, controlled processes, excluded operations, packaging, allocation, temporal coverage and unresolved upstream-data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_body_conversion` | Watch-strap body conversion | `required` | Include one declared material route; mark non-used route-specific atomic rows not applicable. | Foreground cutting, skiving, die cutting, heat cutting or moulding of the strap body. | 1 kg accepted converted watch-strap body components |
| `p_hardware_assembly` | Hardware fitting and strap assembly | `required` | Always include; record only the hardware and joining rows present in the declared bill of materials. | Foreground joining, stitching and fitting of closure and watch-interface components. | 1 kg accepted assembled watch straps |
| `p_surface_finishing` | Surface finishing and cleaning | `conditional` | Include when edge coating, solvent cleaning, aqueous cleaning or direct-fired drying occurs at the foreground site. | Foreground edge coating, cleaning and drying after assembly. | 1 kg finished watch straps |
| `p_quality_control` | Final quality control | `required` | Always include; use either the finished-strap input or the uncoated assembled-strap input according to the declared route. | Foreground inspection, dimensional and release testing, and segregation of rejects. | 1 kg accepted watch straps |
| `p_packaging` | Primary and distribution packaging | `required` | Always include packaging actually applied at the foreground site; unused package types are not applicable. | Foreground packing of released straps and recording of removable packaging materials. | 1 kg net finished watch straps |

### Process: Watch-strap body conversion (`p_body_conversion`)

#### Inputs

##### Product flows

###### Finished bovine leather input (`body_finished_bovine_leather`)

Record finished bovine leather entering cutting or skiving for a leather-body route; tanning and leather finishing before receipt remain upstream.

- Selected flow: Finished bovine leather
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net stock issue attributable to the batch after verified returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`; `jrc-tanning-hides-skins-bref-2013`

###### Silicone rubber compound input (`body_silicone_compound`)

Record the single declared silicone rubber compound entering moulding when the strap body uses this route.

- Selected flow: Silicone rubber compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net batch issue from supplier-labelled containers after verified returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Thermoplastic polyurethane input (`body_tpu_granules`)

Record the declared thermoplastic polyurethane grade entering injection moulding when applicable.

- Selected flow: Thermoplastic polyurethane granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Hopper issue corrected for verified unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Polyamide webbing input (`body_polyamide_webbing`)

Record polyamide 6.6 woven webbing entering cutting and end sealing for a textile-body route.

- Selected flow: Polyamide 6.6 woven webbing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Roll issue less verified reusable remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Polyester reinforcement input (`body_polyester_reinforcement`)

Record polyester reinforcement fabric incorporated into a laminated leather or polymer strap body when present in the bill of materials.

- Selected flow: Polyester woven reinforcement fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net issued mass incorporated or scrapped in the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Pigment masterbatch input (`body_pigment_masterbatch`)

Record one supplier-identified pigment masterbatch used in the declared silicone route; each additional masterbatch requires another atomic row.

- Selected flow: Silicone-compatible pigment masterbatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed recipe issue attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Body-conversion electricity (`body_electricity`)

Record electricity consumed by cutting, skiving, moulding, webbing end sealing and directly attributable auxiliaries.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption; otherwise calculated from documented equipment time and load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Mould cooling water input (`body_cooling_water`)

Record make-up cooling water crossing the foreground boundary for a moulding route; do not record recirculated internal water repeatedly.

- Selected flow: Process cooling water
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Converted strap body output (`converted_strap_body`)

Record the accepted, batch-specific non-metal strap body component transferred to hardware assembly; its exact material grade remains a required qualifier.

- Selected flow: Converted non-metal watch-strap body component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per conversion batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

###### Leather cutting offcuts (`body_leather_offcuts`)

Record finished-leather pieces that leave the conversion process as waste after reusable pieces are separated.

- Selected flow: Finished leather cutting offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed waste by documented disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Silicone moulding scrap (`body_silicone_scrap`)

Record cured silicone flash, runners and rejected moulded pieces leaving the process as waste.

- Selected flow: Cured silicone rubber moulding scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed waste by documented disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### TPU moulding scrap (`body_tpu_scrap`)

Record TPU runners, purge and rejected moulded pieces leaving the process as waste.

- Selected flow: Thermoplastic polyurethane moulding scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed waste by documented disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Polyamide webbing offcuts (`body_polyamide_offcuts`)

Record cut ends and rejected polyamide webbing components leaving the process as waste.

- Selected flow: Polyamide 6.6 webbing offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed waste by documented disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Cooling water discharge (`body_cooling_water_discharge`)

Record cooling water only when it is discharged across the process boundary rather than retained in a closed loop.

- Selected flow: Spent mould cooling water
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted converted strap body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body_conversion`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Elementary flows

None.


### Process: Hardware fitting and strap assembly (`p_hardware_assembly`)

#### Inputs

##### Product flows

###### Converted strap body input (`assembly_converted_body`)

Record converted strap-body components issued from the preceding process.

- Selected flow: Converted non-metal watch-strap body component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Stainless steel buckle input (`assembly_stainless_buckle`)

Record the declared buckle mass when a metal buckle is fitted; the strap body remains non-metal.

- Selected flow: Stainless steel watch-strap buckle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean unit mass for the declared SKU
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Spring bar input (`assembly_spring_bar`)

Record each stainless steel spring bar fitted at the watch interface.

- Selected flow: Stainless steel watch spring bar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean unit mass for the declared SKU
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Buckle tongue input (`assembly_stainless_tongue`)

Record the stainless steel tongue fitted to a tang buckle when present.

- Selected flow: Stainless steel buckle tongue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean unit mass for the declared SKU
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Silicone keeper input (`assembly_silicone_keeper`)

Record silicone keepers fitted to the declared strap.

- Selected flow: Silicone rubber watch-strap keeper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean unit mass for the declared SKU
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Sewing thread input (`assembly_polyester_thread`)

Record polyester thread consumed in stitching strap layers or reinforcements.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net spool issue or stitch-length calculation supported by measured thread mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Assembly adhesive input (`assembly_pu_adhesive`)

Record one supplier-identified waterborne polyurethane adhesive used to laminate or secure components.

- Selected flow: Waterborne polyurethane adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or stock-reconciled adhesive issue attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Assembly electricity (`assembly_electricity`)

Record electricity consumed by sewing, pressing, hole punching and directly attributable assembly equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption; otherwise calculated from documented equipment time and load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Assembled watch strap output (`assembled_watch_strap`)

Record accepted assembled straps transferred to finishing or quality control before removable packaging.

- Selected flow: Assembled non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

###### Thread scrap (`assembly_thread_scrap`)

Record cut thread ends and unusable spool remnants leaving assembly as waste.

- Selected flow: Waste polyester sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed batch waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Cured adhesive waste (`assembly_cured_adhesive_waste`)

Record cured excess adhesive and contaminated adhesive residue leaving assembly as waste.

- Selected flow: Cured polyurethane adhesive waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed waste container change corrected for tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Rejected assembly (`assembly_reject`)

Record assemblies rejected before finishing and not reworked within the same batch.

- Selected flow: Rejected non-metal watch-strap assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected assemblies by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted assembled strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardware_assembly`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Elementary flows

None.


### Process: Surface finishing and cleaning (`p_surface_finishing`)

#### Inputs

##### Product flows

###### Assembled strap input (`finish_assembled_strap`)

Record assembled straps entering surface finishing or cleaning.

- Selected flow: Assembled non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Edge coating input (`finish_pu_edge_coating`)

Record one supplier-identified waterborne polyurethane edge coating for a leather route; additional coatings require separate atomic rows.

- Selected flow: Waterborne polyurethane leather edge coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed coating issue less verified return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Cleaning solvent input (`finish_isopropanol`)

Record isopropyl alcohol issued for wipe cleaning when used.

- Selected flow: Isopropyl alcohol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Stock issue less verified return and captured residual
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Finishing water input (`finish_process_water`)

Record water crossing the boundary for aqueous cleaning or coating preparation.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recipe water attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Cleaning cloth input (`finish_cotton_cloth`)

Record cotton cloth issued for surface wiping.

- Selected flow: Cotton cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean dry cloth mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Finishing electricity (`finish_electricity`)

Record electricity used by coating, ventilation, cleaning and electric drying equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption; otherwise calculated from documented equipment time and load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Purchased hot water input (`finish_hot_water`)

Record purchased hot water as a separate utility only when it crosses the site boundary for finishing.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered thermal energy attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Direct-fired drying fuel (`finish_natural_gas`)

Record natural gas consumed by on-site direct-fired drying as a separate fuel input.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel energy on a declared lower-heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Finished strap output (`finished_watch_strap`)

Record accepted finished straps transferred to quality control before removable packaging.

- Selected flow: Finished non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

###### Coating residue waste (`finish_coating_residue`)

Record unused or contaminated edge coating leaving the process as waste.

- Selected flow: Waste waterborne polyurethane edge coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed waste container change corrected for tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Used cleaning cloth waste (`finish_used_cloth`)

Record used cotton wiping cloth leaving the process as waste without combining it with solvent residue.

- Selected flow: Used cotton cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean used-cloth mass or direct weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Finishing wastewater output (`finish_wastewater`)

Record aqueous cleaning or coating wastewater discharged to on-site or external treatment.

- Selected flow: Watch-strap finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or batch water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Elementary flows

###### Isopropanol emission to air (`finish_isopropanol_air`)

Calculate uncaptured isopropanol released directly to air; do not combine it with other volatile organic compounds.

- Selected flow: Isopropyl alcohol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Issued isopropanol minus returned solvent, solvent in collected waste and captured solvent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`

###### Fossil carbon dioxide emission (`finish_fossil_co2_air`)

Calculate direct fossil carbon dioxide from foreground natural-gas combustion when direct-fired drying is used.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Foreground natural-gas record multiplied by the documented site or supplier combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`

###### Nitrogen oxides emission (`finish_nox_air`)

Record or calculate nitrogen oxides from foreground natural-gas combustion as a separate elementary flow.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Site monitoring result or foreground fuel record multiplied by a documented equipment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_finishing`
- Sources: `ec-pef-method-2021-2279`


### Process: Final quality control (`p_quality_control`)

#### Inputs

##### Product flows

###### Finished strap input (`qc_finished_strap`)

Record straps arriving from the conditional finishing process when that process is included.

- Selected flow: Finished non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_control`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Uncoated assembled strap input (`qc_uncoated_assembled_strap`)

Record assembled straps entering quality control directly when no surface-finishing process is included.

- Selected flow: Assembled non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_control`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Quality-control electricity (`qc_electricity`)

Record electricity consumed by product-specific inspection and test equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_control`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Accepted strap output (`accepted_watch_strap`)

Record straps released for packaging after the declared dimensional, closure-integrity and appearance criteria are met.

- Selected flow: Accepted non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated accepted net mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per quality-control batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_control`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

###### Rejected finished strap (`qc_rejected_strap`)

Record failed straps leaving quality control as waste when they are not reworked within the same batch.

- Selected flow: Rejected non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected mass by documented disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_control`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Elementary flows

None.


### Process: Primary and distribution packaging (`p_packaging`)

#### Inputs

##### Product flows

###### Accepted strap input (`pack_accepted_strap`)

Record accepted straps transferred from quality control for packing.

- Selected flow: Accepted non-metal watch strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### LDPE bag input (`pack_ldpe_bag`)

Record one LDPE primary bag applied to the declared product when present.

- Selected flow: Low-density polyethylene watch-strap bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean empty-bag mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Folding carton input (`pack_folding_carton`)

Record one paperboard retail or protective folding carton applied to the declared product when present.

- Selected flow: Paperboard watch-strap folding carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean empty-carton mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Paper insert input (`pack_paper_insert`)

Record the printed paper instruction or identification insert packed with the strap.

- Selected flow: Printed paper watch-strap insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean insert mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Corrugated shipper input (`pack_corrugated_shipper`)

Record the share of corrugated shipping cartons attributable to the packed batch.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Empty-carton mass allocated by packed item count or verified occupied mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Paper tape input (`pack_paper_tape`)

Record water-activated paper tape consumed in closing distribution cartons.

- Selected flow: Water-activated paper packaging tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Issued roll mass less verified remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### Packaging electricity (`pack_electricity`)

Record electricity consumed by product-specific sealing, labelling and packing equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Reference watch-strap output (`reference_watch_strap`)

Record the released product output at the factory gate on a net strap-mass basis; removable packaging mass is excluded.

- Selected flow: Watch straps, except of metal `19a79c1e-d7a4-422d-b754-47ea82969f9f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated net mass normalized to the 1 kg reference amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Waste flows

###### Damaged paperboard packaging waste (`pack_damaged_paperboard`)

Record damaged cartons and inserts leaving packaging as a single paperboard waste exchange.

- Selected flow: Waste paperboard packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed batch waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### LDPE packaging scrap (`pack_ldpe_scrap`)

Record damaged LDPE bags and film trim leaving packaging as waste.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed batch waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net finished strap
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### Elementary flows

None.


## 7. Allocation and Co-product Handling

- `allocation_avoid_by_subdivision`: First avoid allocation through batch separation, direct weighing, sub-metering, equipment-time records and separate waste tickets. Source: `ec-pef-method-2021-2279`.
- `allocation_shared_equipment`: When shared equipment cannot be subdivided, allocate electricity and direct equipment utilities using the closest measured physical driver, normally machine time multiplied by documented load; disclose the driver. Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`.
- `allocation_shared_materials`: Allocate adhesives, coatings, cleaning agents and packaging by batch issue, recipe, item count or measured mass linked to the declared SKU, not by revenue. Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`.
- `allocation_rework`: Keep rework within the originating batch when genealogy and records are preserved. Material leaving the process for external recovery or treatment remains an explicit waste output. Source: `ec-pef-method-2021-2279`.
- `allocation_recycling_credit`: Report gross material input and named waste output without netting an avoided-material credit into the foreground amount. Any downstream recycling substitution belongs to an explicitly declared lifecycle method outside this foreground package. Source: `ec-pef-method-2021-2279`.
- `allocation_multi_product`: If physical relationships cannot represent a genuinely inseparable multi-product process, document the reason, method, affected flows and sensitivity before applying another allocation basis. Source: `ec-pef-method-2021-2279`.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_body_conversion` | `p_body_conversion` | Strap-body materials, utilities, accepted components and route-specific wastes | Batch issue, meter, production and waste records | batch_id; SKU; material grade; issued and returned mass; item count; machine; meter start/end; accepted mass; waste mass and disposition | Calibrated scales, stock reconciliation, sub-meter or documented equipment-time calculation, and batch genealogy | kg; kWh; m3 | Every batch | Representative production period, normally 12 consecutive months or the full shorter campaign | All controlled body-conversion lines | Sum each atomic exchange and normalize by accepted converted-body mass | Calibration records; supplier labels; batch tickets; meters; waste tickets; signed reconciliation |
| `cp_hardware_assembly` | `p_hardware_assembly` | Body components, hardware, joining materials, electricity, assembled output and wastes | Bill of materials, batch issue, count, meter and reject records | batch_id; SKU; component type; count; mean unit mass; adhesive issue; thread issue; meter start/end; accepted and rejected mass | BoM reconciliation, calibrated weighing, verified component counts and sub-metering or equipment-time calculation | kg; count; kWh | Every batch | Same period as reference production | All controlled assembly lines | Convert counts to mass, sum each named flow and normalize by accepted assembly mass | Approved BoM; sample-weighing record; batch traveller; meter and reject records |
| `cp_surface_finishing` | `p_surface_finishing` | Coating, solvent, water, utilities, finished output, wastes and direct emissions | Recipe, stock, meter, waste, capture and emissions records | batch_id; coating issue/return; solvent issue/return; water; electricity; hot water; natural gas; captured solvent; waste mass; discharge; emission factor | Calibrated issue weighing, meters, waste records and documented mass-balance or monitored-emission calculation | kg; kWh; MJ; m3 | Every batch and each relevant emission period | Same period as reference production | All controlled finishing and direct-fired drying equipment | Normalize each atomic input, waste and emission by finished mass | Recipe approval; SDS; calibration; meter; waste manifest; monitoring or factor record |
| `cp_quality_control` | `p_quality_control` | Incoming straps, electricity, accepted output and rejects | Batch transfer, test, inspection, meter and reject records | batch_id; SKU; route; input mass; test plan; result; accepted mass; rejected mass; disposition; electricity | Calibrated weighing, controlled inspection and testing, and sub-meter or equipment-time calculation | kg; kWh | Every batch | Same period as reference production | All final-release stations | Sum accepted and rejected mass by batch; normalize by accepted net mass | Test plan; inspection log; calibration; release and disposition approval |
| `cp_packaging` | `p_packaging` | Accepted straps, individual packaging components, electricity, reference output and packaging waste | Packaging specification, count, issue, weighing, meter and waste records | batch_id; SKU; accepted strap mass; packaging SKU; count; unit mass; electricity; damaged package mass; packed quantity | Approved packaging BoM, component sampling, calibrated scales and meter or equipment-time calculation | kg; count; kWh | Every batch | Same period as reference production | All packing lines for the declared product | Convert each package count to mass and normalize inputs and wastes by net strap mass | Packaging specification; supplier records; sample weights; meter; waste ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Reference output | Sum calibrated mass of accepted straps including permanent hardware and finishes; subtract all removable packaging tare | accepted packed item mass; packaging tare; direct net weights | kg net watch straps | `ec-pef-method-2021-2279` |
| `calc_counted_component_mass` | Hardware and packaging | Component count × measured mean unit mass for the same SKU and period | count; sampled unit masses | kg named component | `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025` |
| `calc_shared_electricity` | Shared equipment | Total metered electricity × declared product equipment-time share; use documented load weighting when equipment loads differ | meter total; equipment time; rated or measured load | kWh attributable to batch | `ec-pef-method-2021-2279` |
| `calc_material_balance` | Each production process | Named material inputs = accepted named product transfers + named wastes + documented stock change within measurement uncertainty | issued and returned masses; accepted output; wastes; stock change | reconciled kg by material | `ec-pef-method-2021-2279` |
| `calc_isopropanol_air` | Finishing solvent | Isopropanol issued − returned isopropanol − isopropanol retained in collected waste − captured isopropanol | stock and waste records; capture record | kg isopropanol to air | `ec-pef-method-2021-2279` |
| `calc_direct_combustion` | Direct-fired drying | Multiply foreground natural-gas energy by the documented site-, supplier- or equipment-specific factor separately for each emission | natural-gas energy; factor identity and unit | kg named elementary emission | `ec-pef-method-2021-2279` |
| `calc_packaging_mass` | Packaging | Sum each packaging SKU count × its measured empty unit mass; allocate shared shippers by documented packed-item or occupied-mass basis | counts; unit masses; allocation driver | kg by packaging material | `ec-apparel-footwear-pefcr-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all batch links | Match CPC 29230 semantic scope and declare body material, construction, compatible interface, dimensions, closure, hardware, colour, finish and packaging. | Product specification, approved BoM, style/SKU sheet and batch genealogy |
| `dq_company_specific_foreground` | Controlled manufacturing | Use company-specific BoM and manufacturing data for controlled processes and cover every known material, energy, product, waste and direct emission. | Batch records, meters, invoices, waste records and `ec-pef-method-2021-2279` |
| `dq_route_completeness` | Process map | Include the actual body-conversion route and all controlled downstream steps; explain every conditional exclusion. | Process flow diagram, equipment list, site walk-through and `ec-apparel-footwear-pefcr-2025` |
| `dq_atomic_inventory` | Inventory exchanges | Keep every material grade, chemical, utility, fuel, packaging component, waste and elementary emission as a separate row. | BoM-to-inventory reconciliation and atomic-flow audit |
| `dq_temporal_geography_technology` | Foreground and upstream data | Report production period, site geography, technology and supplier or proxy geography; justify mismatches. | Dataset metadata and `ec-pef-method-2021-2279` |
| `dq_mass_balance` | Body conversion, assembly, finishing, quality and packaging | Reconcile batch inputs, accepted transfers, wastes and stock changes by named material and disclose residuals. | Signed mass-balance worksheet and `ec-pef-method-2021-2279` |
| `dq_upstream_leather` | Leather route | Use an upstream finished-leather dataset that covers tanning and leather finishing; do not move those operations into a non-tannery foreground site. | Supplier traceability, upstream dataset scope and `jrc-tanning-hides-skins-bref-2013` |
| `dq_chemicals` | Adhesive, coating, pigment and solvent | Record supplier identity, trade name, composition evidence, concentration, issued amount, waste and release route without replacing individual chemicals with a collection flow. | SDS, recipe, stock ledger and waste/emission records |
| `dq_packaging` | Primary and distribution packaging | Record each packaging component separately and keep removable packaging outside the net reference mass. | Packaging BoM, unit-mass sampling and `ec-apparel-footwear-pefcr-2025` |
| `dq_unresolved_uuid` | Non-reference inventory flows | Leave UUID blank until exact hybrid and state-100 direct-read identity checks agree; retain the row-specific gap in manifest review metadata. | Manifest unresolved inventory rows |

## 9. Validation Rules

- `validate_reference_identity`: Confirm Product flow UUID `19a79c1e-d7a4-422d-b754-47ea82969f9f`, exact name "Watch straps, except of metal", public state 100, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` and kg reference unit. Source: `unsd-cpc-3-29230`.
- `validate_scope`: Reject a dataset whose strap body is metal, or whose output is a watch, watch case, electronic band or standalone hardware rather than a complete non-metal watch strap. Source: `unsd-cpc-3-29230`.
- `validate_reference_mass`: Verify that the normalized output equals 1 kg net accepted straps including permanent hardware and excluding removable packaging. Source: `ec-pef-method-2021-2279`.
- `validate_route`: Confirm the declared material route matches body-conversion inputs, wastes, upstream datasets and conditional process inclusions. Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`.
- `validate_inventory_completeness`: Reconcile the product-specific BoM and controlled operations to all known raw materials, energy, products, wastes and air/water/soil emissions. Source: `ec-pef-method-2021-2279`.
- `validate_atomic_flows`: Reject any Selected flow that combines multiple materials, utilities, fuels, packaging components, wastes or emissions.
- `validate_uuid_gate`: Accept a non-reference UUID only after exact hybrid and state-100 direct-read confirmation; otherwise require an empty UUID and a manifest row.
- `validate_mass_balance`: Check named material inputs against accepted transfers, named wastes and stock changes and investigate material residuals. Source: `ec-pef-method-2021-2279`.
- `validate_direct_emissions`: When natural gas or isopropanol is present, require a separate direct-emission record or documented zero-release/capture basis for each applicable elementary flow. Source: `ec-pef-method-2021-2279`.
- `validate_leather_upstream`: For leather straps, require the finished-leather upstream dataset to cover tanning and finishing and keep those processes outside a non-tannery site foreground. Source: `jrc-tanning-hides-skins-bref-2013`.
- `validate_packaging`: Confirm each applied packaging component is separate and that its mass is excluded from reference net mass. Sources: `ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`.
- `validate_bilingual_alignment`: Confirm English and Chinese process ids, row ids, selected-flow names, controlled tokens, UUIDs, rule ids, protocol ids, calculation ids, quality ids and source ids are identical and ordered consistently.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-category foreground data package for factory-gate production of complete non-metal watch straps |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product LCA, product environmental footprint studies, supplier datasets, scenario models and downstream process or lifecyclemodel construction within the declared route and geography |
| excluded_use | Metal bracelet straps; watches and electronics; undisclosed material routes; datasets lacking net-mass, BoM, process-boundary or upstream-data transparency |
| required_metadata | PCR id; CPC reference; reference UUID; strap-body material and grade; construction route; interface and dimensions; closure and hardware; colour and finish; net mass; packaging; site and period; technology; suppliers or proxies; process inclusions; allocation; unresolved identities |
| required_quality_disclosure | Foreground coverage; metering and calculation methods; temporal, geographical and technological representativeness; mass-balance residuals; upstream proxy gaps; chemical and emission data gaps; packaging; rejected batches; review status |
| update_trigger | Material or supplier change; process, equipment, formulation, hardware or packaging change; new site or period; material mass-balance change; new direct-emission evidence; UUID resolution; revised PCR or applicable method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-29230` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 29230 "Watch straps, except of metal", https://unstats.un.org/unsd/classifications/Econ/CPC (official repository source retrieved 2026-08-13) | Product scope, classification hierarchy and reference identity validation |
| `ec-pef-method-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific BoM, company-specific manufacturing data, LCI completeness, boundary, allocation, quality and transparency |
| `jrc-tanning-hides-skins-bref-2013` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Tanning of Hides and Skins, https://eippcb.jrc.ec.europa.eu/reference/tanning-hides-and-skins-0 | Scope and data requirement for upstream finished-leather production; tanning chemicals and emissions remain upstream unless controlled |
| `ec-apparel-footwear-pefcr-2025` | official_guidance | Apparel and Footwear Product Environmental Footprint Category Rules, version 3.1 (2025) | Organisation of product BoM, manufacturing losses, packaging and manufacturing-process data without default quantities |
