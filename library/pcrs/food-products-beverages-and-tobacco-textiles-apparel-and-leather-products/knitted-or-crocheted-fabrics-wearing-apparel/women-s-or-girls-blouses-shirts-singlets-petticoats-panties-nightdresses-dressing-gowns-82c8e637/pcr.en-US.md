---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-singlets-petticoats-panties-nightdresses-dressing-gowns-82c8e637
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Women's or girls' blouses, shirts, singlets, petticoats, panties, nightdresses, dressing gowns and similar articles, of textile fabric, not knitted or crocheted

## 1. Scope and Applicability

This PCR governs foreground data packages for industrial manufacture of women's or girls' blouses, shirts, singlets, petticoats, panties, nightdresses, dressing gowns, and similar garments made from textile fabric that is not knitted or crocheted. It covers a gate-to-gate garment-making route beginning with finished woven fabric and declared trims at the garment factory gate and ending with a conforming, packed garment at the same factory gate.

The foreground boundary includes marker preparation, spreading and cutting, sewing and trim assembly, route-specific garment wet processing, final finishing, pressing, inspection, folding, and packaging. Upstream manufacture of fibres, yarns, woven fabric, finishes, trims, utilities, chemicals, and packaging is represented by linked upstream datasets rather than repeated inside the foreground processes. Distribution, retail, consumer use, laundering after sale, repair, and end-of-life are outside this gate-to-gate package. Knitted or crocheted garments, protective wear, footwear, fur apparel, brassieres and corsetry, and exceptional handcrafted or unique couture pieces are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-singlets-petticoats-panties-nightdresses-dressing-gowns-82c8e637 |
| classification_refs | CPC 3.0: 28234 (exact scope context) |
| covered_products | Women's or girls' blouses, shirts, singlets, petticoats, panties, nightdresses, dressing gowns, and similar articles made from non-knitted and non-crocheted textile fabric. |
| excluded_products | Knitted or crocheted garments; protective wear; fur apparel; brassieres, girdles, corsets and related articles; footwear; exceptional handcrafted or unique couture pieces; distribution, use and end-of-life services. |
| representative_product | A factory-produced women's woven-fabric blouse with declared fibre composition, size, trims, finishing route, and packaging. |
| production_route | Receipt of finished woven fabric and trims; marker making, spreading and cutting; sewing and trim assembly; optional garment wet processing; final finishing, pressing and inspection; folding and packaging. |
| market_state | Conforming finished garment, packed for dispatch at the garment factory gate; net garment mass and detachable packaging mass reported separately. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a conforming, ready-to-sell women's or girls' non-knitted and non-crocheted textile garment at the garment factory gate. |
| How much | 1 kg net mass of conforming finished garment, excluding detachable packaging. |
| How well | The declared garment type, fibre composition, size or grade, colour and finish, trim bill, workmanship acceptance criteria, and applicable wet-processing route are met. |
| How long or cycle | One completed foreground manufacturing batch ending at factory gate; consumer service life is not part of this gate-to-gate reference. |
| reference_flow_link | `packaged_garment_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming garment |
| Reference product flow | Women's or girls' blouses, shirts, singlets, petticoats, panties, nightdresses, dressing gowns and similar articles, of textile fabric, not knitted or crocheted `141dafee-dafa-4fef-9d44-e6e23a9fcff2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | garment type; intended wearer group; woven textile composition by mass; size or grade; colour and fabric finish; trim bill; garment wet-processing route; packaging configuration; manufacturing facility and geography; production period; net-mass basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or derive from verified batch records the net dry garment mass after final inspection and before detachable packaging; normalize all inventory to 1 kg net conforming garment. |
| `packaging_mass_separation` | Packaging inputs and outputs | Mass | kg | Record each packaging material separately and exclude detachable packaging from the reference garment mass. |
| `batch_material_balance` | Fabric, trims, garments and solid wastes | Mass | kg | Use one consistent batch moisture and weighing basis; reconcile issued material mass with conforming garments, rejected garments, returned material, saleable remnants and waste. |
| `energy_record_conversion` | Electricity and purchased steam | Energy | kWh for electricity; MJ for steam | Preserve original meter or invoice units and document each conversion factor before normalization; do not combine electricity and steam into one exchange. |
| `water_volume` | Garment wet processing | Volume | m3 | Record metered intake and discharged wastewater separately; identify reuse or recirculation without subtracting it twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished woven textile fabric and declared trims, chemicals, utilities, and packaging arrive at the garment manufacturing boundary with supplier, composition, mass, and upstream dataset references. |
| starting_condition_role | Upstream product inputs to foreground cut-and-sew garment manufacture. |
| product_classification_scope | Finished women's or girls' garments within the semantic scope represented by CPC 3.0 code 28234; classification is context, not canonical PCR identity. |
| recursive_input_rule | If a same-category garment is used as an input for rework or component recovery, record it as a distinct input with its upstream dataset and do not expand the same foreground garment route recursively. |
| upstream_dataset_requirement | Link an upstream dataset for every purchased fabric, trim, chemical, utility, and packaging exchange; disclose geography, technology, recycled content, and known data gaps. |
| disclosure | State factory sites, production period, garment styles, material and trim bills, excluded operations, subcontracted steps, optional wet processing, allocation method, net garment mass, and packaging configuration. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_01_start_at_finished_fabric` | Foreground boundary | Start with finished woven textile fabric and declared trims at the garment factory gate; represent their prior manufacture through upstream datasets. | `ilo-garment-2021`; `afw-pefcr-2025` |
| `sb_02_include_garment_making` | All represented routes | Include cutting, sewing and trim assembly, final finishing, inspection, pressing, folding, packaging, and their attributable utilities, wastes and direct emissions. | `ilo-garment-2021`; `unido-garment-1983`; `afw-pefcr-2025` |
| `sb_03_conditional_wet_processing` | Washed, bleached or otherwise wet-finished garments | Include the site or subcontractor wet-processing process only when it occurs after garment assembly; record its water, energy, each chemical, wastewater and sludge separately. | `afw-pefcr-2025` |
| `sb_04_manufacturing_losses` | Every manufacturing step | Record step-specific cutting, assembly, rejection and packaging losses through the output of manufacturing; do not apply one hidden aggregate loss factor. | `afw-pefcr-2025` |
| `sb_05_factory_gate_end` | Dataset endpoint | End at the packed garment at factory gate and exclude distribution, retail, consumer use and end-of-life from this foreground package; disclose those exclusions. | `afw-pefcr-2025`; `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01_cutting` | Marker preparation, spreading, cutting and bundling | `required` | Always included for industrial manufacture from woven fabric. | Convert finished fabric and interlining into identified cut components. | Per 1 kg net conforming reference garment. |
| `p02_assembly` | Sewing and trim assembly | `required` | Always included. | Join cut components and attach the declared trims. | Per 1 kg net conforming reference garment. |
| `p03_wet_processing` | Garment wet processing | `conditional` | Include when assembled garments are washed, bleached, dyed or wet-finished before sale. | Apply the declared garment-level wet treatment. | Per 1 kg net conforming reference garment routed through wet processing. |
| `p04_final_finishing` | Final finishing, pressing and inspection | `required` | Always included; input route depends on whether `p03_wet_processing` applies. | Press, inspect, repair where allowed, reject nonconforming pieces, and release finished garments. | Per 1 kg net conforming reference garment. |
| `p05_packaging` | Folding and packaging | `required` | Always included. | Fold and pack conforming garments for factory-gate dispatch. | Per 1 kg net conforming reference garment; packaging mass separate. |

### Process: Marker preparation, spreading, cutting and bundling (`p01_cutting`)

#### Inputs

##### Product flows

###### Finished woven fabric issued to cutting (`woven_fabric_input`)

Finished woven fabric crosses the cutting boundary from stores according to the style-specific material issue and marker records.

- Selected flow: Finished woven textile fabric
- Flow property / unit: Mass / kg
- Amount rule: Record actual issued mass net of documented returns to stores.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `afw-pefcr-2025`; `ilo-garment-2021`

###### Fusible interlining issued to cutting (`fusible_interlining_input`)

Fusible interlining is recorded as its own input when pattern pieces require reinforcement; absence must be supported by the style bill of materials.

- Selected flow: Fusible textile interlining
- Flow property / unit: Mass / kg
- Amount rule: Record actual issued mass net of documented returns; record zero only when the bill of materials shows no interlining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `unido-garment-1983`

###### Electricity used by cutting equipment (`cutting_electricity_input`)

Metered or allocated electricity for spreading, cutting, marking and bundling equipment enters this process as one energy exchange.

- Selected flow: Electricity supplied to the garment factory
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered consumption or allocate a reconciled site meter by equipment operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `afw-pefcr-2025`

##### Waste flows

No waste input is expected for the normal cutting route.

##### Elementary flows

No elementary input is expected for the normal cutting route.

#### Outputs

##### Product flows

###### Cut garment components released to assembly (`cut_components_output`)

Style-identified cut components leave cutting as a weighed or mass-balanced intermediate product for sewing.

- Selected flow: Cut woven-fabric garment components
- Flow property / unit: Mass / kg
- Amount rule: Record weighed bundle mass or calculate it from issued fabric less reconciled returns and cutting offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `ilo-garment-2021`

##### Waste flows

###### Woven textile offcuts from cutting (`cutting_textile_offcuts_output`)

Unusable woven-fabric offcuts leave cutting as one weighed waste stream, separate from returned or sold usable remnants.

- Selected flow: Woven textile cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh the offcut container by material family and subtract tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste`
- Sources: `afw-pefcr-2025`

##### Elementary flows

No direct elementary output is expected unless site monitoring demonstrates one; monitored lint is assigned to `p04_final_finishing`.

### Process: Sewing and trim assembly (`p02_assembly`)

#### Inputs

##### Product flows

###### Cut woven-fabric garment components received for sewing (`cut_components_input`)

The identified cut-component bundles cross from cutting into sewing and are reconciled by batch and style.

- Selected flow: Cut woven-fabric garment components
- Flow property / unit: Mass / kg
- Amount rule: Record received bundle mass or the reconciled transfer quantity from `cut_components_output`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_material_balance`
- Sources: `ilo-garment-2021`

###### Sewing thread consumed in assembly (`sewing_thread_input`)

Sewing thread enters assembly according to issued and returned spool mass for the represented garment styles.

- Selected flow: Sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Record issued spool mass minus returned usable thread and spool tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trim_issues`
- Sources: `afw-pefcr-2025`; `unido-garment-1983`

###### Buttons attached during assembly (`buttons_input`)

Buttons are recorded separately when present in the declared style bill; their material and count-to-mass conversion must be documented.

- Selected flow: Garment buttons
- Flow property / unit: Mass / kg
- Amount rule: Record issued count and measured representative button mass, less documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trim_issues`
- Sources: `ilo-garment-2021`

###### Zippers attached during assembly (`zipper_input`)

Each zipper type used by the represented styles enters as a separately weighed trim input; this card is zero only when no zipper is specified.

- Selected flow: Garment zipper
- Flow property / unit: Mass / kg
- Amount rule: Record issued count multiplied by verified unit mass, less documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trim_issues`
- Sources: `ilo-garment-2021`

###### Elastic tape attached during assembly (`elastic_tape_input`)

Elastic tape enters assembly only for styles that specify it and is recorded independently from fabric and thread.

- Selected flow: Textile elastic tape
- Flow property / unit: Mass / kg
- Amount rule: Record issued roll mass minus returned usable tape and core tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trim_issues`
- Sources: `ilo-garment-2021`

###### Textile labels attached during assembly (`textile_label_input`)

Care, size and brand labels made of textile material are recorded as one label-material exchange by verified mass.

- Selected flow: Textile garment label
- Flow property / unit: Mass / kg
- Amount rule: Record issued count multiplied by verified unit mass, less documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trim_issues`
- Sources: `afw-pefcr-2025`

###### Electricity used by sewing and assembly equipment (`assembly_electricity_input`)

Electricity for sewing, overlocking, buttoning, fusing and local material handling enters as one metered electricity exchange.

- Selected flow: Electricity supplied to the garment factory
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered consumption or allocate a reconciled site meter by machine operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `afw-pefcr-2025`

##### Waste flows

No waste input is expected for the normal assembly route.

##### Elementary flows

No elementary input is expected for the normal assembly route.

#### Outputs

##### Product flows

###### Assembled garment released from sewing (`assembled_garment_output`)

The complete but unfinished garment leaves sewing after component and trim reconciliation and before optional wet processing or final finishing.

- Selected flow: Assembled unfinished woven-fabric garment
- Flow property / unit: Mass / kg
- Amount rule: Record actual transferred mass by batch and style.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_mass`
- Sources: `ilo-garment-2021`; `unido-garment-1983`

##### Waste flows

###### Textile sewing scrap from assembly (`sewing_textile_scrap_output`)

Thread ends and unusable textile pieces generated during sewing leave as one weighed textile sewing-scrap stream.

- Selected flow: Textile sewing scrap
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected sewing scrap by batch or allocate a reconciled container by processed garment mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste`
- Sources: `afw-pefcr-2025`

##### Elementary flows

No direct elementary output is expected for the normal assembly route.

### Process: Garment wet processing (`p03_wet_processing`)

#### Inputs

##### Product flows

###### Assembled garment entering wet processing (`assembled_garment_wet_input`)

Assembled garments cross into wet processing only when the declared route includes garment washing, bleaching, dyeing or another wet finish.

- Selected flow: Assembled unfinished woven-fabric garment
- Flow property / unit: Mass / kg
- Amount rule: Record actual batch mass loaded into wet-processing equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `afw-pefcr-2025`

###### Electricity used by garment wet-processing equipment (`wet_process_electricity_input`)

Electricity for washers, pumps, extractors and dryers enters as a distinct metered energy exchange when wet processing applies.

- Selected flow: Electricity supplied to the garment factory
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered consumption or allocate a reconciled meter by equipment operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `afw-pefcr-2025`

###### Process water supplied to garment wet processing (`wet_process_water_input`)

Fresh or supplied process water enters the wet-processing equipment and is recorded separately from recirculated internal water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered intake for the represented batches and identify measured internal reuse separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `afw-pefcr-2025`

###### Purchased steam supplied to garment wet processing (`wet_process_steam_input`)

Purchased steam crosses the wet-processing boundary as one utility exchange when heating is supplied externally.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record supplier meter or invoice energy attributable to the represented batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_steam`
- Sources: `afw-pefcr-2025`

###### Laundry detergent used in garment washing (`laundry_detergent_input`)

The formulated laundry detergent dosed to garment washing enters as one product exchange and is not combined with other chemicals.

- Selected flow: Laundry detergent
- Flow property / unit: Mass / kg
- Amount rule: Record batch dosing mass from calibrated dispensing or stock issue records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_chemicals`
- Sources: `afw-pefcr-2025`

###### Sodium carbonate used in the declared wet recipe (`sodium_carbonate_input`)

Sodium carbonate is recorded independently when the site recipe uses it; a zero value requires a recipe showing it is absent.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Record actual batch dosing mass from calibrated dispensing or stock issue records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_chemicals`
- Sources: `afw-pefcr-2025`

##### Waste flows

No waste input is expected for the normal wet-processing route.

##### Elementary flows

No elementary input is expected for the normal wet-processing route.

#### Outputs

##### Product flows

###### Wet-finished garment released to final finishing (`wet_finished_garment_output`)

The treated and extracted garment leaves wet processing as a weighed intermediate product for drying, pressing and inspection.

- Selected flow: Wet-finished woven-fabric garment
- Flow property / unit: Mass / kg
- Amount rule: Record actual released batch mass on the declared moisture basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `afw-pefcr-2025`

##### Waste flows

###### Wastewater from garment wet processing (`garment_wastewater_output`)

Wastewater discharged from the represented garment wet-processing batches leaves as one measured waste flow to the declared treatment route.

- Selected flow: Garment wet-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered discharge or a documented water-balance calculation when no discharge meter exists.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `afw-pefcr-2025`

###### Sludge from onsite garment wastewater treatment (`wastewater_sludge_output`)

Dewatered sludge leaves as a separate waste stream only when onsite treatment serves the represented wet-processing batches.

- Selected flow: Sludge from garment wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Record wet sludge mass and dry-solids content, then allocate by treated batch wastewater volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment routed through wet processing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste`
- Sources: `afw-pefcr-2025`

##### Elementary flows

Any monitored substance discharged directly to air, water or soil must be added as its own elementary-flow card; wastewater and sludge transfer do not by themselves authorize invented direct emissions.

### Process: Final finishing, pressing and inspection (`p04_final_finishing`)

#### Inputs

##### Product flows

###### Assembled garment entering final finishing without wet processing (`assembled_garment_finishing_input`)

An assembled garment enters final finishing directly only when the declared route omits garment wet processing.

- Selected flow: Assembled unfinished woven-fabric garment
- Flow property / unit: Mass / kg
- Amount rule: Record actual transferred mass for batches that bypass `p03_wet_processing`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_mass`
- Sources: `ilo-garment-2021`; `unido-garment-1983`

###### Wet-finished garment entering final finishing (`wet_finished_garment_finishing_input`)

A wet-finished garment crosses into final finishing only for batches that completed `p03_wet_processing`.

- Selected flow: Wet-finished woven-fabric garment
- Flow property / unit: Mass / kg
- Amount rule: Record actual transferred mass for wet-processed batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_batch`
- Sources: `afw-pefcr-2025`

###### Electricity used for final finishing and inspection (`finishing_electricity_input`)

Electricity for pressing controls, lighting, inspection, repair and folding equipment enters as one metered exchange.

- Selected flow: Electricity supplied to the garment factory
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered consumption or allocate a reconciled site meter by equipment operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `afw-pefcr-2025`

###### Purchased steam used for pressing (`finishing_steam_input`)

Purchased steam enters pressing as a separate utility exchange when steam is supplied across the process boundary.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record supplier meter or invoice energy attributable to pressing the represented batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_steam`
- Sources: `unido-garment-1983`

##### Waste flows

No waste input is expected for the normal final-finishing route.

##### Elementary flows

No elementary input is expected for the normal final-finishing route.

#### Outputs

##### Product flows

###### Pressed and inspected conforming garment (`pressed_inspected_garment_output`)

The garment leaves final finishing after documented acceptance and transfers to packaging on a net-mass basis.

- Selected flow: Pressed and inspected woven-fabric garment
- Flow property / unit: Mass / kg
- Amount rule: Record net mass of garments accepted by the final inspection record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_mass`
- Sources: `unido-garment-1983`

##### Waste flows

###### Rejected garment sent to waste treatment (`rejected_garment_output`)

An irreparable garment rejected at final inspection leaves as a separately weighed garment-waste stream rather than being hidden in yield.

- Selected flow: Rejected woven-fabric garment waste
- Flow property / unit: Mass / kg
- Amount rule: Record net rejected mass by disposition route after excluding repaired and recovered pieces.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste`
- Sources: `afw-pefcr-2025`

##### Elementary flows

###### Textile lint particulate emitted to air (`lint_to_air_output`)

Textile lint particulate is reported only when a monitored uncontrolled release crosses the site-to-air boundary; captured lint remains a solid waste.

- Selected flow: Particulate matter from textile lint, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured emission mass from the applicable monitoring period; otherwise document the check and omit the amount as not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ifc-textiles-apparel-2014`

### Process: Folding and packaging (`p05_packaging`)

#### Inputs

##### Product flows

###### Conforming garment received for packaging (`garment_packaging_input`)

The pressed and inspected garment enters packaging with its acceptance and net-mass records intact.

- Selected flow: Pressed and inspected woven-fabric garment
- Flow property / unit: Mass / kg
- Amount rule: Record the transferred accepted garment mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_mass`
- Sources: `afw-pefcr-2025`

###### Electricity used for folding and packaging (`packaging_electricity_input`)

Electricity for folding, sealing, labelling and packaging equipment enters as one metered exchange.

- Selected flow: Electricity supplied to the garment factory
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered consumption or allocate a reconciled site meter by equipment operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `afw-pefcr-2025`

###### Polyethylene garment bag used as primary packaging (`polyethylene_bag_input`)

The low-density polyethylene bag that immediately covers the garment enters as a distinct primary-packaging material.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: Record issued bag count multiplied by verified unit mass, less unused returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-2025`

###### Paper garment hangtag used as primary packaging (`paper_hangtag_input`)

The paper hangtag attached for sale enters separately from textile labels and other packaging.

- Selected flow: Paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: Record issued hangtag count multiplied by verified unit mass, less unused returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-2025`

###### Corrugated cardboard shipping box used as secondary packaging (`corrugated_box_input`)

Corrugated cardboard boxes cross into packaging as a separate secondary-packaging input allocated by the garments enclosed.

- Selected flow: Corrugated cardboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Record used box mass divided by the net garment mass packed in those boxes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-2025`

###### Wooden pallet used for dispatch (`wooden_pallet_input`)

A wooden transport pallet enters as a separate tertiary-packaging input when the dispatch configuration uses pallets.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Record pallet mass allocated by garments carried and divide by verified reuse count when reusable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-2025`

###### Polyethylene shrink film used for pallet stabilization (`polyethylene_shrink_film_input`)

Polyethylene shrink film enters independently when it is applied to stabilize tertiary packaging.

- Selected flow: Polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: Record roll mass consumed net of unused returns and core tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-2025`

##### Waste flows

No waste input is expected for the normal packaging route.

##### Elementary flows

No elementary input is expected for the normal packaging route.

#### Outputs

##### Product flows

###### Packed reference garment released at factory gate (`packaged_garment_output`)

The conforming packed garment leaves the foreground system at factory gate; the exchange amount uses net garment mass and excludes detachable packaging.

- Selected flow: Women's or girls' blouses, shirts, singlets, petticoats, panties, nightdresses, dressing gowns and similar articles, of textile fabric, not knitted or crocheted `141dafee-dafa-4fef-9d44-e6e23a9fcff2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Normalize the verified net conforming garment mass to exactly 1 kg; report detachable packaging in its own input rows.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_output_mass`
- Sources: `unsd-cpc-v3-2025`

##### Waste flows

###### Polyethylene packaging scrap generated during packing (`polyethylene_packaging_scrap_output`)

Damaged bags and shrink-film trimmings leave as one polyethylene packaging-scrap stream, separate from cardboard waste.

- Selected flow: Polyethylene packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected polyethylene scrap net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste`
- Sources: `afw-pefcr-2025`

###### Corrugated cardboard scrap generated during packing (`corrugated_cardboard_scrap_output`)

Damaged or trimmed corrugated cardboard leaves as one separately weighed packaging-waste stream.

- Selected flow: Corrugated cardboard packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected corrugated cardboard scrap net of container tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference garment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste`
- Sources: `afw-pefcr-2025`

##### Elementary flows

No direct elementary output is expected for the normal packaging route.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_01_subdivide_first` | Shared garment-manufacturing operations | Subdivide by site, process, style and batch where records permit; allocate only the residual shared input or output. | `eu-pef-method-2021` |
| `alloc_02_cutting_mass` | Shared cutting and material preparation | Allocate shared cutting inputs and losses by measured mass of cut components attributable to each represented style. | `afw-pefcr-2025` |
| `alloc_03_assembly_units` | Shared sewing and assembly | Allocate shared assembly inputs by accepted production units when unit records drive the process, then convert each style result to the 1 kg reference using its measured net garment mass. | `afw-pefcr-2025` |
| `alloc_04_finishing_mass` | Shared wet processing and finishing | Allocate shared finishing inputs and outputs by measured processed garment mass unless direct batch metering provides subdivision. | `afw-pefcr-2025` |
| `alloc_05_waste_and_remnants` | Offcuts, leftovers and rejected garments | Keep wastes and usable returned or sold remnants distinct. Record the chosen treatment or co-product treatment and do not credit avoided production inside this foreground inventory without an explicitly declared downstream method. | `afw-pefcr-2025`; `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issues` | `p01_cutting` | Fabric and interlining inputs | Stores issues, returns, marker and BOM records | material_id; composition; batch_id; issued_mass; returned_mass; tare; marker_id | Reconcile stores issues and returns to marker batches. | kg | Each issue and batch | Representative production period, normally 12 consecutive months or a documented campaign | Every included cutting site and subcontractor | Sum net issued mass by material and batch, then normalize by net conforming output mass. | Signed issue/return records, calibrated scales, BOM and marker trace. |
| `cp_trim_issues` | `p02_assembly` | Thread and individual trim inputs | Stores issues, returns, counts and unit-mass tests | trim_id; material; batch_id; issued_count_or_mass; returned_count_or_mass; sampled_unit_mass; tare | Weigh bulk material or convert count using documented representative unit mass. | kg and count | Each issue and batch | Same period as represented output | Every included sewing site and subcontractor | Calculate net mass separately for each trim type and normalize by output mass. | BOM, issue/return records, scale calibration and unit-mass sample record. |
| `cp_electricity` | all processes | Electricity input | Submeter, utility meter and machine-hour records | meter_id; start_reading; end_reading; period; process; operating_hours; allocation_driver | Prefer process submeters; otherwise reconcile site meter and allocate only residual shared use. | kWh | Meter interval or monthly | Same period as represented output | Every included site | Sum process electricity, apply disclosed residual allocation, normalize by output mass. | Meter calibration, invoice reconciliation and allocation worksheet. |
| `cp_purchased_steam` | `p03_wet_processing`; `p04_final_finishing` | Purchased steam input | Supplier meter and invoice records | meter_id; steam_quantity; pressure_or_energy; period; process; allocation_driver | Reconcile supplier quantity to process meter or operating record. | MJ or supplier unit | Meter interval or monthly | Same period as represented output | Every included site using purchased steam | Convert with documented supplier factor, allocate residual shared steam, normalize by output mass. | Supplier invoice, meter record and conversion worksheet. |
| `cp_batch_material_balance` | `p01_cutting`; `p02_assembly` | Intermediate products and material balance | Batch transfer, weighing and waste records | batch_id; input_mass; returned_mass; intermediate_output_mass; offcut_mass; scrap_mass; moisture_basis | Weigh transfers and reconcile each manufacturing step. | kg | Each batch | Same period as represented output | Every included production line | Sum by batch and style; retain unexplained imbalance as a quality finding. | Calibrated scale, signed transfer record and balance worksheet. |
| `cp_batch_output_mass` | `p02_assembly`; `p04_final_finishing`; `p05_packaging` | Garment intermediate and reference outputs | Batch completion and final inspection records | batch_id; style; accepted_count; rejected_count; net_accepted_mass; moisture_condition; packaging_mass | Weigh accepted output after inspection and before detachable packaging. | kg and count | Each batch | Same period as represented output | Every included finishing and packaging site | Sum accepted net garment mass by style; normalize all exchanges to 1 kg. | Scale calibration, inspection release and packaging separation record. |
| `cp_wet_batch` | `p03_wet_processing`; `p04_final_finishing` | Wet-processing batch and intermediate garment | Batch card and equipment log | batch_id; recipe_id; input_mass; output_mass; moisture_basis; start_time; end_time; route | Reconcile equipment batch card with input and output weighing. | kg | Each wet batch | Same period as represented output | Every included wet-processing site or subcontractor | Aggregate only batches with the same declared route, then normalize by conforming output. | Signed batch card, recipe reference and scale calibration. |
| `cp_water_wastewater` | `p03_wet_processing` | Process water and wastewater | Intake meter, discharge meter and water-balance records | meter_id; intake_volume; reuse_volume; discharge_volume; period; batch_ids | Read calibrated meters; use a documented balance only when a discharge meter is unavailable. | m3 | Meter interval or batch | Same period as represented wet route | Every included wet-processing site | Sum fresh intake and discharge separately; do not net internal recirculation twice. | Meter calibration and water-balance closure. |
| `cp_wet_chemicals` | `p03_wet_processing` | Each wet-process chemical input | Recipe, dispensing and stores records | chemical_id; CAS_or_formula; recipe_id; batch_id; concentration; formulation_mass; active_content | Record each purchased formulation or pure chemical from calibrated dosing or reconciled stock use. | kg | Each batch | Same period as represented wet route | Every included wet-processing site | Aggregate each chemical separately by route and normalize by conforming output mass. | Approved recipe, SDS, dosing calibration and stock reconciliation. |
| `cp_packaging_materials` | `p05_packaging` | Each packaging input | Packaging issue, count, mass and reuse records | material_id; packaging_level; issued_count; returned_count; unit_mass; products_enclosed; reuse_count | Weigh packaging or convert count with verified unit mass; retain each material separately. | kg and count | Each packaging batch | Same period as represented output | Every included packaging site | Divide shared packaging by enclosed net garment mass; divide reusable packaging by verified reuse count. | Packaging specification, issue record, unit-mass test and reuse log. |
| `cp_solid_waste` | all processes | Each solid waste output | Container weighing and disposition records | waste_id; process; gross_mass; tare; destination; recovery_status; batch_or_period | Weigh each chemically or physically distinct waste stream and reconcile disposal or recovery records. | kg | Each container or shipment | Same period as represented output | Every included site | Sum net mass by process and waste identity, then normalize by output mass. | Calibrated scale, waste transfer note and receiver record. |
| `cp_direct_emissions` | `p04_final_finishing` | Direct particulate emission | Stack or workplace exhaust monitoring record | source_id; pollutant; sampling_period; flow_rate; concentration; capture_status; production_mass | Use measured concentration and flow for the represented operating period; captured material is waste, not an air emission. | kg | Applicable monitoring event | Period representative of included equipment and controls | Every included emitting source | Calculate emitted mass for operating time and normalize by output mass. | Laboratory report, calibration, sampling plan and control-status log. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01_reference_normalization` | Every inventory exchange | normalized amount = attributable batch amount / net conforming garment output mass. | Attributable exchange quantity; `net_accepted_mass`. | Exchange quantity per 1 kg reference garment. | `eu-pef-method-2021` |
| `calc_02_material_balance` | Cutting and assembly | net material input = issued mass - returned mass; unexplained difference = net inputs - intermediate outputs - separately recorded wastes - documented usable remnants. | Material issues, returns, outputs, wastes and remnants. | Step balance and unexplained difference. | `afw-pefcr-2025` |
| `calc_03_count_to_mass` | Buttons, zippers, labels and packaging | mass = net count × verified representative unit mass; retain sampling method and variation. | Issued and returned count; unit-mass sample. | Material mass by atomic exchange. | `afw-pefcr-2025` |
| `calc_04_shared_utility` | Shared electricity and steam | attributable utility = metered process quantity + residual shared quantity × disclosed allocation factor. | Process meter, site meter, operating driver and allocation factor. | Process-specific utility quantity. | `afw-pefcr-2025` |
| `calc_05_wastewater_balance` | Garment wet processing | discharged wastewater = measured discharge; if unavailable, calculate intake - measured evaporation - measured retained water - measured internal inventory change, without subtracting recirculated water twice. | Intake, discharge, evaporation, retained water, recirculation and inventory change. | Wastewater volume and closure result. | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01_identity_traceability` | Reference product and all materials | Trace every record to facility, period, style, batch, garment specification, material composition and supplier or upstream dataset. | BOM, batch traveller, supplier record and dataset linkage. |
| `dq_02_measurement` | Mass, energy and water | Use calibrated instruments or reconciled invoices; retain raw readings, tare, conversion and uncertainty or resolution. | Calibration certificates, meter readings, invoices and conversion worksheet. |
| `dq_03_completeness` | All processes and flows | Include all applicable processes and all atomic inputs, wastes and direct emissions; explain every material-balance gap and every not-applicable card. | Process map, balance report, waste register and applicability checklist. |
| `dq_04_temporal` | Foreground period | Prefer 12 consecutive months; a shorter campaign is allowed only when seasonality, style mix and operating conditions are documented. | Production calendar and representativeness justification. |
| `dq_05_geography_technology` | Sites and subcontractors | Represent every included manufacturing site and actual technology; production-weight multi-site data and disclose missing subcontractor primary data. | Site list, process description, production weights and data-gap register. |
| `dq_06_external_dataset_quality` | Upstream datasets | Record technological, geographical, temporal and precision/quality information for each material, utility, chemical and packaging dataset. | Dataset metadata and DQR record. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_01_reference_identity` | Reference flow | Require UUID `141dafee-dafa-4fef-9d44-e6e23a9fcff2`, Product flow type, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `unsd-cpc-v3-2025` |
| `val_02_scope` | Product identity | Confirm the garment is made from textile fabric that is not knitted or crocheted and fits the covered women's or girls' article types; reject excluded categories. | `unsd-cpc-v3-2025` |
| `val_03_reference_amount` | Dataset quantitative reference | Require exactly 1 kg net conforming garment and separately reported detachable packaging mass. | `eu-pef-method-2021` |
| `val_04_qualifiers` | Dataset metadata | Require every item listed under `Required qualifiers`; missing qualifiers make validation inconclusive. | `afw-pefcr-2025` |
| `val_05_process_coverage` | Process inventory | Require all four required processes and require `p03_wet_processing` when batch records or product claims show garment-level wet processing. | `afw-pefcr-2025`; `ilo-garment-2021` |
| `val_06_atomic_exchanges` | Inventory rows | Require one physically or chemically specific exchange per card; prohibit combined energy, trim, chemical, packaging, waste or emission labels. | `afw-pefcr-2025` |
| `val_07_collection_linkage` | Foreground amounts | Require every `foreground_record` or `calculated_value` row to link to a defined collection protocol and retained raw evidence. | `eu-pef-method-2021` |
| `val_08_material_balance` | Cutting, assembly and final output | Reconcile fabric and trim inputs, intermediate transfers, conforming output, rejected garments, returns, remnants and wastes; report rather than conceal unexplained differences. | `afw-pefcr-2025` |
| `val_09_no_upstream_double_count` | System boundary | Confirm that fabric, trims, chemicals, utilities and packaging enter once as product inputs with upstream datasets and that their upstream manufacture is not duplicated as foreground activity. | `eu-pef-method-2021` |
| `val_10_wet_route` | Wet-processing flows | When wet processing applies, require separate water, electricity, steam when used, each chemical, wastewater and sludge when generated; otherwise require documented not-applicable evidence. | `afw-pefcr-2025` |
| `val_11_allocation` | Shared operations | Require subdivision where feasible and retain the selected mass or unit allocation driver, production weights and normalization conversion. | `afw-pefcr-2025` |
| `val_12_uuid_status` | Non-reference flow identities | Reject any inventory UUID that has not passed both hybrid-search and state100 confirmation; unresolved semantic candidates remain UUID-free and listed by `row_id` in manifest review metadata. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset that may be published as a `secondary_dataset` and used as a `background_dataset` after review. |
| downstream_use | Supports downstream `process` and `lifecyclemodel` projections for garment supply chains that require a factory-gate cut-and-sew dataset. |
| allowed_use | Modelling the declared non-knitted/non-crocheted garment styles, sites, period, material composition, process route and packaging configuration within the stated representativeness. |
| excluded_use | Full cradle-to-grave apparel claims; knitted garments; protective wear; undisclosed wet-processing routes; comparison between products with materially different functions or qualifiers; use outside represented geography or technology without justification. |
| required_metadata | PCR id and version; reference-flow UUID and mass basis; garment qualifiers; site and period; style mix; BOM and trim identities; wet-processing applicability; process coverage; allocation; upstream datasets; packaging; data owner and review status. |
| required_quality_disclosure | Primary-data share; meter and scale quality; temporal, geographical and technological representativeness; material-balance gaps; subcontractor data gaps; unresolved UUIDs; allocation; omitted direct emissions; upstream dataset DQR. |
| update_trigger | Change in garment scope, fabric or trim bill, process route, wet treatment, site, technology, energy source, packaging, allocation, reference UUID, evidence source, or a material data-quality finding. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ | Product scope and CPC 28234 identity context. |
| `afw-pefcr-2025` | `standard` | Technical Secretariat, Product Environmental Footprint Category Rules (PEFCR): Apparel and Footwear, Version 3.1, 29 April 2025, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf; European Commission announcement: https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | Manufacturing boundary, process decomposition, step-specific losses, packaging, primary data, DQR and allocation rules. |
| `eu-pef-method-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, CELEX:32021H2279, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32021H2279 | Functional unit, reference flow, system boundary, data collection, quality, allocation and validation principles. |
| `ilo-garment-2021` | `official_guidance` | International Labour Organization, Improving Safety and Health in the Global Garment Industry, Vision Zero Fund, 2021, https://vzf.ilo.org/wp-content/uploads/2021/09/OSH_improvement-Garment-_04Web.pdf | Independent garment supply-chain and cut-and-sew process decomposition. |
| `unido-garment-1983` | `handbook` | United Nations Industrial Development Organization, Technical Recommendations for All Operations in the Garment Factory, report 13494.en, 1983, https://downloads.unido.org/ot/48/39/4839366/10001-15000_13494.pdf | Woven-shirt cutting, sewing, finishing, pressing and folding operations. |
| `ifc-textiles-apparel-2014` | `official_guidance` | International Finance Corporation, Environmental and Social Management System Implementation Handbook: Textiles & Apparel, Revision 2.2, 1 June 2014, https://www.ifc.org/content/dam/ifc/doc/mgrt/esms-handbook-textiles-apparel-v8.pdf | Textile lint and dust relevance and site monitoring context. |
