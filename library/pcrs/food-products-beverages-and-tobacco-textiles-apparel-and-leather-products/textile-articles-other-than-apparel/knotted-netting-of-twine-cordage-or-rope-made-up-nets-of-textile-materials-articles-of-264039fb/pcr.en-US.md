---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.knotted-netting-of-twine-cordage-or-rope-made-up-nets-of-textile-materials-articles-of-264039fb
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Knotted netting of twine, cordage or rope; made up nets of textile materials; articles of yarn, strip, twine, cordage, rope or cables n.e.c.

## 1. Scope and Applicability

This PCR governs gate-to-gate foreground data packages for products demonstrably within CPC 27320: knotted netting made from twine, cordage or rope; made-up nets of textile materials; and other articles of yarn, strip, twine, cordage, rope or cables not elsewhere classified. Covered routes convert received yarn, monofilament, strip, twine, cordage, rope, cable or preformed netting into a finished net or other made-up textile article by knotting, netting, cutting, tapering, joining, sewing, splicing, mounting, heat-setting, washing, dyeing, coating, finishing and packing, but only for the operations actually performed by the reporting facility.

Model polyamide, polyester, polypropylene, polyethylene and natural-fibre routes separately. Do not average across polymer or fibre families, knotted and knotless constructions, monofilament and multifilament products, or netting and non-net articles unless foreground evidence demonstrates that the aggregated dataset remains representative. Every auxiliary chemical, coating, dye, pigment, stabilizer, adhesive, lubricant, packaging component, waste and direct emission used by the actual route must be added as its own atomic exchange.

Production of polymers, fibres, yarn, strip, twine, cordage, rope, cable or purchased netting before receipt is outside the foreground gate and requires an upstream dataset. Fishing or aquaculture operations, use and maintenance of nets, installation at the user site, lost fishing gear, collection after use, and end-of-life treatment are outside this gate-to-gate PCR. Apparel, ordinary woven or knitted fabric, metal wire mesh, and textile articles classified outside CPC 27320 are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.knotted-netting-of-twine-cordage-or-rope-made-up-nets-of-textile-materials-articles-of-264039fb |
| classification_refs | CPC 3.0: 27320 - Knotted netting of twine, cordage or rope; made up nets of textile materials; articles of yarn, strip, twine, cordage, rope or cables n.e.c. |
| covered_products | Knotted textile netting; made-up fishing, aquaculture, sports, safety, cargo, agricultural or other textile nets; and other made-up articles of yarn, strip, twine, cordage, rope or cable demonstrably classified as CPC 27320 |
| excluded_products | Unconverted twine, cordage, rope or cable classified as CPC 27310; ordinary woven, knitted, nonwoven or lace fabric; apparel; metal wire mesh; polymer resin, fibre and yarn manufacture; products classified elsewhere by a more specific function |
| representative_product | A finished made-up textile net or related article at the manufacturing-facility gate, with material family, construction, dimensions, performance specification and finish declared |
| production_route | Route-specific knotting or net formation and/or conversion of purchased netting or cordage by cutting, tapering, joining, sewing, splicing or mounting, with only the actual wet, thermal, coating, accessory and packing operations included |
| market_state | Conforming finished product at the factory gate, reported on net product mass excluding removable packaging and at a declared moisture or conditioning state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished textile net or other made-up article that meets the declared CPC 27320 product specification |
| How much | 1,000 kg net mass of conforming finished product, excluding removable packaging |
| How well | Meets the declared material, construction, mesh or article geometry, dimensions, dry or wet strength, finish, accessory and acceptance-test specification |
| How long or cycle | One production lot at the manufacturing-facility gate; service life is not part of this gate-to-gate unit |
| reference_flow_link | The functional unit is realized by exactly 1,000 kg net reference product at the declared conditioning state |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net finished product |
| Reference product flow | Knotted netting of twine, cordage or rope, made up nets of textile materials, articles of yarn, strip, twine, cordage, rope or cables n.e.c. `e3759580-0bc6-4410-a0fe-f8b239ba715d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article form and intended application; CPC 27320 scope confirmation; polymer or fibre family and mass fractions; virgin or recovered content basis; monofilament, multifilament, twisted, braided or other yarn construction; linear density or diameter; knotted or knotless construction; knot type; mesh geometry and opening or non-net article dimensions; dry or wet test condition; breaking-force requirement; colour; coating, dyeing and other finish; accessories and their materials; net product mass basis; moisture or conditioning state; production geography; technology route; reporting period |

The Tiangong reference identity was discovered by hybrid search and then confirmed by direct state-code-100 reads as a public Product flow classified to CPC 27320 with Mass as its quantitative reference. The reference unit is kg in the verified Units of mass group. Category scope and required technical qualifiers are supported by `un-cpc-v3-2025`, `fao-fisheries-assessment-2013`, `iso-1107-2017`, `iso-858-1973`, `iso-1805-2006`, `iso-1806-2002` and `iso-16663-1-2009`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1,000 kg net conforming product. Exclude boxes, film, straps, pallets and other removable packaging. |
| `conditioned_mass_basis` | Textile inputs, product and textile wastes | Mass | kg | Record the conditioning or moisture state for each weighed textile stream. Do not combine dry and as-received masses without a measured conversion. |
| `material_composition` | Product and material inputs | Mass fraction | kg/kg | Record each polymer, natural fibre, coating and permanently attached accessory material separately; disclosed mass fractions must reconcile to the product specification. |
| `linear_density_or_diameter` | Yarn, twine, monofilament and multifilament inputs | Linear density or diameter | tex, denier or mm | Preserve the supplier/test basis and conversion. Do not treat denier, tex and diameter as interchangeable without a documented material-specific relation. |
| `mesh_dimension` | Netting products | Length | mm | State the mesh definition and test method. For fishing-net mesh opening measured under ISO 16663-1, retain the gauge method and test condition. |
| `breaking_force_condition` | Netting yarn and netting | Force | N | Report whether the ISO 1805 or ISO 1806 result is for dry or wet conditioning and identify whether yarn, knotted yarn or mesh breaking force is measured. |
| `energy_carrier_separation` | Electricity and purchased steam | Energy or delivered mass | kWh, MJ or kg | Keep electricity and steam separate. Preserve voltage, geography, steam condition, condensate-return assumption and any conversion factor. |
| `water_balance` | Wet finishing | Volume or Mass | m3 or kg | Reconcile intake, reuse, evaporation, product carry-over and wastewater on one declared basis; state density for mass-volume conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received yarn, monofilament, strip, twine, cordage, rope, cable or preformed textile netting with supplier, material family, composition, construction, dimensions, finish, moisture basis and delivery form declared |
| starting_condition_role | Purchased or interfacility product input whose upstream fibre, polymer and intermediate manufacturing burdens are represented by route-specific upstream datasets |
| product_classification_scope | CPC 27320 only; ambiguous fabric, apparel, unconverted cordage, metal mesh or function-specific articles require classification review before this PCR is used |
| recursive_input_rule | When purchased netting or another input already falls within CPC 27320, use its supplier dataset as an upstream product input and inventory only the incremental conversion at the reporting facility; do not recreate upstream operations already represented |
| upstream_dataset_requirement | Use material-, construction-, geography- and route-specific datasets for every received product input; do not substitute an unconditional average across PA, PES, PP, PE, natural fibre, virgin, recovered, monofilament, multifilament or preformed-netting routes |
| disclosure | Declare the input gate, actual unit operations, material and construction route, wet and thermal operations, each chemical and accessory, packaging treatment, output test condition, excluded operations, upstream data gaps and any same-category purchased input |

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground facility | Include receipt and internal handling, actual knotting or net formation, cutting, tapering, joining, sewing, splicing, mounting, heat-setting, wet finishing, coating, drying, inspection, repair of manufacturing defects and packing through the factory gate. | `un-cpc-v3-2025`; `fao-fisheries-assessment-2013`; `eu-pef-2021` |
| `boundary_route_specificity` | Product routes | Include only operations performed for the declared product lot and keep materially different polymers, constructions, finishes and product forms separate. | `fao-fisheries-assessment-2013`; `iso-1107-2017`; `eu-pef-2021` |
| `boundary_upstream_inputs` | Received products | Link every received yarn, twine, rope, netting or accessory to an upstream dataset; a supplier-free material label is insufficient for cradle-to-gate use. | `eu-pef-2021` |
| `boundary_inventory_completeness` | Inputs and outputs | Add every actual chemical, coating, dye, pigment, stabilizer, adhesive, lubricant, packaging component, waste and direct emission as a separate atomic exchange; no grouped carrier, chemical, packaging or waste row is allowed. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `net_article_manufacture` | Net or textile-article formation, finishing and packing | required |  | Gate-to-gate foreground process covering only the declared unit operations | 1,000 kg net conforming CPC 27320 product |

### Process: Net or textile-article formation, finishing and packing (`net_article_manufacture`)

#### Inputs

##### Product flows

###### Polyamide netting yarn (`polyamide_netting_yarn`)

Polyamide netting yarn is recorded only for lots that consume this exact polymer and received yarn form.

- Selected flow: Polyamide netting yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-fisheries-assessment-2013`

###### Polyester netting yarn (`polyester_netting_yarn`)

Polyester netting yarn is recorded separately from every other polymer.

- Selected flow: Polyester netting yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-fisheries-assessment-2013`

###### Polypropylene netting yarn (`polypropylene_netting_yarn`)

Polypropylene netting yarn is recorded only when it physically crosses the facility boundary.

- Selected flow: Polypropylene netting yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-fisheries-assessment-2013`

###### Polyethylene netting yarn (`polyethylene_netting_yarn`)

Polyethylene netting yarn is recorded separately from polyethylene rope and purchased netting.

- Selected flow: Polyethylene netting yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-fisheries-assessment-2013`

###### Cotton netting twine (`cotton_netting_twine`)

Cotton netting twine represents only cotton; another natural fibre requires its own card in the produced dataset.

- Selected flow: Cotton netting twine
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `un-cpc-v3-2025`

###### Preformed polyamide netting (`preformed_polyamide_netting`)

Purchased unfinished polyamide netting is recorded for made-up-net conversion routes and not combined with yarn.

- Selected flow: Preformed polyamide netting
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `un-cpc-v3-2025`

###### Preformed polyethylene netting (`preformed_polyethylene_netting`)

Purchased unfinished polyethylene netting is recorded as a distinct received intermediate.

- Selected flow: Preformed polyethylene netting
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `un-cpc-v3-2025`

###### Polyethylene rope (`polyethylene_rope`)

Polyethylene rope is recorded when used as an edge, headline, footrope, mounting member or article component.

- Selected flow: Polyethylene rope
- Flow property / unit: Mass / kg
- Amount rule: Weighed issue to the production lot minus documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-fisheries-assessment-2013`

###### Polypropylene rope (`polypropylene_rope`)

Polypropylene rope is recorded separately from polyethylene rope and polypropylene yarn.

- Selected flow: Polypropylene rope
- Flow property / unit: Mass / kg
- Amount rule: Weighed issue to the production lot minus documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-fisheries-assessment-2013`

###### Polyamide sewing thread (`polyamide_sewing_thread`)

Polyamide sewing or joining thread is recorded when used to assemble panels or attach components.

- Selected flow: Polyamide sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Weighed or stock-controlled issue to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fao-fisheries-assessment-2013`

###### Low-voltage electricity at facility meter (`forming_electricity`)

Electricity for netting machines, cutters, sewing, splicing, heat-setting, ventilation, drying and packing is metered as one facility supply only when the voltage and supply mix are the same.

- Selected flow: Electricity, low voltage, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021`

###### Supplied freshwater for wet finishing (`process_water`)

Freshwater supplied to washing, dyeing, coating preparation or other wet finishing is recorded when that route occurs.

- Selected flow: Freshwater, supplied process water
- Flow property / unit: Volume / m3
- Amount rule: Metered intake allocated to the declared product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam_records`
- Sources: `eu-pef-2021`

###### Purchased saturated steam (`purchased_steam`)

Purchased saturated steam is recorded only when delivered across the facility boundary for heat-setting, washing, dyeing, drying or coating.

- Selected flow: Steam, saturated, purchased
- Flow property / unit: Mass / kg
- Amount rule: Supplier meter or reconciled boiler-house delivery record at declared pressure and condensate-return condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam_records`
- Sources: `eu-pef-2021`

###### Corrugated board box (`corrugated_board_box`)

Corrugated board boxes supplied with the product are recorded by actual issued mass and excluded from reference product mass.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: Weighed or specification-based box mass multiplied by boxes used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming CPC 27320 reference product (`reference_product_output`)

The output is weighed after final conditioning and inspection; removable packaging is excluded.

- Selected flow: Knotted netting of twine, cordage or rope, made up nets of textile materials, articles of yarn, strip, twine, cordage, rope or cables n.e.c. `e3759580-0bc6-4410-a0fe-f8b239ba715d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Conforming net output normalized to exactly 1,000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-v3-2025`

##### Waste flows

###### Polyamide netting offcuts (`polyamide_offcuts`)

Clean or contaminated polyamide offcuts are weighed separately and their destination is declared.

- Selected flow: Polyamide netting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste containers adjusted for stock and verified same-line reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `zlaugotne-fishing-net-waste-2025`

###### Polyester netting offcuts (`polyester_offcuts`)

Polyester offcuts are not combined with polyamide or polyolefin offcuts.

- Selected flow: Polyester netting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste containers adjusted for stock and verified same-line reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `zlaugotne-fishing-net-waste-2025`

###### Polypropylene netting offcuts (`polypropylene_offcuts`)

Polypropylene offcuts are recorded as one polymer-specific waste exchange.

- Selected flow: Polypropylene netting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste containers adjusted for stock and verified same-line reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `zlaugotne-fishing-net-waste-2025`

###### Polyethylene netting offcuts (`polyethylene_offcuts`)

Polyethylene offcuts are recorded separately from polypropylene and mixed waste.

- Selected flow: Polyethylene netting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste containers adjusted for stock and verified same-line reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `zlaugotne-fishing-net-waste-2025`

###### Wastewater from textile-net finishing (`finishing_wastewater`)

Wastewater transferred to on-site or external treatment is recorded separately from freshwater intake and direct water emissions.

- Selected flow: Wastewater from textile-net finishing
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or reconciled wet-process water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

###### Discarded corrugated board boxes (`waste_corrugated_board`)

Corrugated boxes discarded within the foreground boundary are weighed as a distinct waste flow.

- Selected flow: Waste corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded boxes net of documented return or reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared lines and utilities | Prefer submetering, lot records, time records and physical separation so allocation is avoided. | `eu-pef-2021` |
| `allocation_physical_relation` | Unavoidable shared inputs and outputs | When separation is impossible, use a documented causal physical relation such as machine time, metered energy, wet-process batch load or net product mass; do not default to revenue. | `eu-pef-2021` |
| `allocation_multi_output_disclosure` | Saleable offcuts or co-products | Keep gross output and waste records visible, state whether the secondary output remains a waste or becomes a co-product, and disclose the allocation basis and sensitivity. | `eu-pef-2021`; `zlaugotne-fishing-net-waste-2025` |
| `allocation_recycling_boundary` | Internal reuse and exported recycling | Subtract same-line reuse only when its return is measured and does not double count upstream burden. Report exported recycling destination separately and do not claim an avoided burden inside this gate-to-gate dataset without an explicitly declared downstream model. | `eu-pef-2021`; `zlaugotne-fishing-net-waste-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `net_article_manufacture` | Textile and assembly material inputs | Purchase, goods-receipt, issue and stock records | supplier; material identity; grade; construction; lot; opening stock; receipts; issues; returns; closing stock; mass; moisture basis | Reconcile lot issues and stock change to production records | kg | Each lot with monthly reconciliation | Same representative period as output | Reporting facility and declared outsourced operations | Sum by exact material identity and product lot; no cross-polymer grouping | Supplier specification, weighbridge or calibrated scale record, stock reconciliation |
| `cp_energy_records` | `net_article_manufacture` | Electricity input | Meter and equipment runtime records | meter id; voltage; supply contract; start/end reading; machine power; runtime; lot | Prefer submeter; otherwise documented power-time calculation | kWh | Per batch, shift or meter interval | At least one representative production period | In-scope equipment and shared services | Allocate shared use by a documented causal driver | Meter calibration, invoice reconciliation, runtime log |
| `cp_water_steam_records` | `net_article_manufacture` | Freshwater and purchased steam | Meter and supplier records | water meter; steam meter; pressure; temperature; condensate return; batch; start/end reading | Meter each carrier separately and reconcile water balance | m3 or kg | Per batch or meter interval | Same period as wet/thermal production | In-scope wet and thermal operations | Normalize only after carrier-specific reconciliation | Calibration, supplier invoice, water balance |
| `cp_packaging_records` | `net_article_manufacture` | Packaging input | Packing bill and material specification | component id; material; unit mass; units used; returns; recycled content | Weigh representative component or use verified specification | kg | Each packaging specification and lot | Current packaging design during reporting period | Product dispatched from reporting facility | Sum each atomic packaging component separately | Supplier specification and packing record |
| `cp_product_output` | `net_article_manufacture` | Reference product output | Batch, scale and quality-release records | product id; lot; gross mass; packaging tare; net mass; conditioning state; rejected mass; test result | Calibrated weighing after declared conditioning and quality release | kg | Every lot | Complete reporting period | All conforming output in scope | Sum net conforming output only | Scale calibration, test report, release record |
| `cp_waste_records` | `net_article_manufacture` | Polymer-specific offcuts, wastewater and packaging waste | Waste container, meter, transfer and destination records | waste identity; polymer; contamination; mass or volume; same-line return; destination; receiver; date | Weigh each waste stream or meter wastewater; verify transfers | kg or m3 | Each container, transfer or discharge interval | Complete reporting period | All in-scope waste leaving or recirculating within facility | Keep waste identities and destinations separate; subtract only verified same-line return | Scale or meter calibration, transfer note, receiver evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = period row amount / period net conforming output × 1,000 kg | Reconciled row amount; net conforming output | Amount per 1,000 kg reference product | `eu-pef-2021` |
| `calc_material_balance` | Textile materials | input mass + opening WIP = conforming product + exported waste + verified emissions + closing WIP; explain measured differences | Material receipts/issues; product mass; waste; WIP | Polymer- and lot-specific mass-balance residual | `eu-pef-2021` |
| `calc_mesh_test_link` | Net products | Link reported mesh dimension and breaking force to the declared specimen conditioning and ISO test method; no conversion may erase dry/wet or yarn/mesh distinction | Test report; conditioning record; product lot | Qualified product performance record | `iso-1805-2006`; `iso-1806-2002`; `iso-16663-1-2009` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and materials | Retain CPC scope determination, product drawing/specification, polymer or fibre identity, construction, dimensions, finish and supplier lot links. | Classification record, bill of materials, supplier specification, test report |
| `dq_temporal` | All foreground data | Use a common representative period and disclose shutdowns, product-change trials, abnormal scrap and changes in route or packaging. | Production calendar, meter coverage, exception log |
| `dq_measurement` | Mass, energy, water, steam and tests | Use calibrated instruments or documented supplier records; retain units, conversions, conditioning state and uncertainty or resolution. | Calibration certificate, invoice reconciliation, laboratory record |
| `dq_completeness` | Process inventory | Reconcile all material and energy inputs, product, wastes, wastewater and measured direct emissions; document every exclusion and its basis. | Mass balance, water balance, energy reconciliation, exclusion register |
| `dq_traceability` | Allocation and waste destination | Preserve the causal allocation driver, same-line reuse evidence, waste receiver and treatment route; do not infer recycling from a collection label alone. | Allocation worksheet, transfer note, recycler acceptance record |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Dataset identity | Fail if CPC 27320 scope, article form, material family, construction, product dimensions or conditioning state is absent or contradicts the reference flow. | `un-cpc-v3-2025`; `fao-fisheries-assessment-2013` |
| `validation_reference_mass` | Quantitative reference | Fail unless net conforming product equals exactly 1,000 kg after normalization and removable packaging is excluded. | `eu-pef-2021` |
| `validation_atomic_inventory` | Inventory rows | Fail if a row groups multiple polymers, energy carriers, chemicals, packaging components, waste streams or emissions, or if a UUID is used without exact hybrid and state-code-100 direct verification. | `eu-pef-2021` |
| `validation_route_and_tests` | Production and quality | Fail if the actual unit operations are undisclosed or a mesh/breaking result lacks the applicable definition, test method and dry/wet condition. | `iso-1107-2017`; `iso-1805-2006`; `iso-1806-2002`; `iso-16663-1-2009` |
| `validation_mass_balance` | Textile materials | Fail if material inputs, output, waste and WIP do not reconcile within a declared measured tolerance or if the residual is hidden by allocation. | `eu-pef-2021` |
| `validation_waste_destination` | Offcuts and wastewater | Fail if polymer-specific manufacturing scraps or wastewater are omitted when generated, or if reuse, recycling, treatment and disposal destinations are not distinguished. | `zlaugotne-fishing-net-waste-2025`; `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-, product- and facility-specific foreground dataset for manufacturing CPC 27320 textile nets and related made-up articles |
| downstream_use | `secondary_dataset`; `background_dataset` when upstream product inputs are complete and data quality is adequate |
| allowed_use | Product-specific cradle-to-gate models, supplier comparisons and hotspot studies for the declared material, construction, finish, geography and period |
| excluded_use | Unqualified cross-polymer averages; use-stage fishing or aquaculture modelling; lost-gear impacts; end-of-life claims; products outside CPC 27320; comparative assertions where required test, allocation or data-quality disclosures differ materially |
| required_metadata | CPC scope; article form and application; bill of materials; polymer/fibre and recovered-content basis; yarn and net construction; dimensions and mesh definition; dry/wet test condition; breaking-force method; actual process route; finish and accessories; net mass and moisture basis; geography; period; upstream datasets; allocation; packaging; waste destinations |
| required_quality_disclosure | Primary-data share; meter and scale coverage; test methods; mass-, water- and energy-balance residuals; allocation drivers; supplier-data substitutions; unresolved UUIDs; exclusions; waste receiver evidence; representativeness limitations |
| update_trigger | Change in material family or recovered content, yarn/net construction, product form, mesh or strength specification, process technology, finish chemistry, supplier route, packaging, allocation, waste destination, geography, or a material shift in foreground performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 27320, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category scope and exclusions |
| `fao-fisheries-assessment-2013` | official_guidance | FAO, Guidelines for the fisheries and aquaculture sector on damage and needs assessments in emergencies, Appendix A2.2.2, 2013. https://www.fao.org/docrep/019/i3433e/i3433e.pdf | Net material families, yarn construction, linear density/diameter, mesh and specification fields |
| `iso-1107-2017` | standard | ISO 1107:2017, Fishing nets — Netting — Basic terms and definitions. https://www.iso.org/standard/72227.html | Netting terminology and dimensional definitions |
| `iso-858-1973` | standard | ISO 858:1973, Fishing nets — Designation of netting yarns in the Tex System. https://www.iso.org/standard/5237.html | Netting-yarn designation and linear-density disclosure |
| `iso-1805-2006` | standard | ISO 1805:2006, Fishing nets — Determination of breaking force and knot breaking force of netting yarns. https://www.iso.org/standard/30041.html | Yarn and knot breaking-force test condition |
| `iso-1806-2002` | standard | ISO 1806:2002, Fishing nets — Determination of mesh breaking force of netting. https://www.iso.org/standard/28360.html | Mesh breaking-force test condition |
| `iso-16663-1-2009` | standard | ISO 16663-1:2009, Fishing nets — Method of test for the determination of mesh size — Part 1: Opening of mesh. https://www.iso.org/standard/45350.html | Objective mesh-opening measurement |
| `eu-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Functional unit, boundary, foreground data, completeness, allocation, packaging, waste and data quality rules |
| `zlaugotne-fishing-net-waste-2025` | literature | Zlaugotne, B., Pubule, J., and Gusca, J. (2025), Fishing net waste management: quantification and valorization, Frontiers in Marine Science 12:1607436. https://doi.org/10.3389/fmars.2025.1607436 | Separate measurement of manufacturing scraps and explicit recycling or treatment scenarios |
