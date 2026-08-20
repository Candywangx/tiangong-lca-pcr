---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of ducks, frozen

## 1. Scope and Applicability

This PCR covers one factory-gate route for packaged frozen duck cuts: live Pekin ducks are received, slaughtered and dressed, chilled in an immersion-water system, mechanically cut into skin-on, bone-in parts, packaged, air-blast frozen, and held in frozen storage for dispatch. The reference product is the combined saleable cut-up batch; individual breasts, legs, wings, whole carcasses, offal, and by-products are not interchangeable reference products.

The foreground starts with live ducks at the slaughterhouse gate and ends when the packaged frozen cuts leave the producer's frozen store. Duck farming, feed production, packaging manufacture, energy and chemical supply, off-site treatment, distribution, retail, cooking, and consumption are linked upstream or downstream processes, not foreground operations. This PCR excludes fresh or chilled duck meat, frozen whole ducks, boneless or skinless-only routes, mechanically separated meat, edible offal, fatty liver, cooked or seasoned products, and routes using plate, immersion, or cryogenic freezing as the principal freezing technology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-frozen` |
| classification_refs | CPC 3.0 `21142`, Meat of ducks, frozen |
| covered_products | Packaged, frozen, skin-on and bone-in cut-up meat from domesticated Pekin ducks, produced by the declared route |
| excluded_products | Fresh or chilled duck meat; frozen whole ducks; boneless-only or skinless-only cuts; mechanically separated meat; edible offal and fatty liver; cooked, seasoned, smoked, or otherwise prepared duck; products whose principal freezing technology is not air-blast freezing |
| representative_product | One commingled saleable production batch of skin-on, bone-in frozen duck cuts; the batch composition by named cut is reported and is not averaged with whole ducks or offal |
| production_route | Live-duck receiving → stunning and bleeding → scalding and defeathering → evisceration and washing → immersion-water chilling and draining → mechanical cut-up → packaging → R717 ammonia air-blast freezing → frozen storage → factory-gate dispatch; screened dissolved-air-flotation wastewater pretreatment is included |
| market_state | Packaged frozen food at the producer's frozen-store dispatch point |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Packaged, frozen, skin-on and bone-in cut-up meat from Pekin ducks, with the mass share of each named cut disclosed |
| How much | 1,000 kg net product mass, excluding packaging |
| How well | Wholesome saleable cuts from the locked route; product thermal centre at or below -18 °C after thermal stabilisation; package and cut composition conform to the declared specification |
| How long or cycle | One reporting-period production batch through frozen-store dispatch; frozen-storage residence time is separately reported in tonne-days |
| reference_flow_link | Factory-gate output of `air_blast_freeze_store` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Meat of ducks, frozen `658e0f63-44f8-4e3e-aeef-ccf1ab20a13f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/strain: Pekin duck; form: cut-up parts; skin: on; bone: in; freezing technology: air-blast; refrigerant: R717 ammonia; net product mass; named-cut mass composition; package format; product thermal-centre temperature; frozen-storage duration; plant geography; reporting year |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all material product outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated scales; report net frozen product mass without packaging and normalize to 1,000 kg. |
| `live_and_output_mass` | Live ducks, carcasses, cuts, offal, blood, feathers, trimmings, rejects, and treatment solids | Mass | kg | Record wet mass at the point each flow crosses its process boundary; do not infer duck-specific yields from generic poultry percentages. |
| `water_and_wastewater` | Process water and wastewater | Volume and, where available, mass | m3 and kg | Meter volume; use measured density for mass conversion, or disclose the water-density assumption and keep concentration records on the same volume basis. |
| `energy` | Purchased electricity and steam | Energy; steam mass and state | kWh; MJ; kg | Use submetered consumption where possible. For steam, record delivered mass, pressure/temperature or enthalpy, condensate return, and calculate net energy consistently. |
| `temperature` | Chilling, air-blast freezing, and frozen storage | Temperature and time | °C; h | Use calibrated product-core and room sensors. Demonstrate that quick freezing is completed only after the thermal centre reaches no warmer than -18 °C after stabilisation. |
| `storage_service` | Frozen storage | Mass × time | tonne-day | Calculate daily average stored net product mass multiplied by residence days; report storage electricity separately from freezing electricity. |
| `packaging_mass` | Polymer bags and corrugated cartons | Mass | kg | Record packaging issued less verified unused returns; report product-contact film and corrugated board separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live, farm-raised Pekin ducks delivered at the slaughterhouse receiving point |
| starting_condition_role | Purchased product input to the foreground system |
| product_classification_scope | CPC 3.0 `21142` only for the reference output; live ducks and other purchased products retain their own classifications |
| recursive_input_rule | A frozen-duck-meat input of the same category is prohibited in this route. If rework from the same batch occurs, record it as an internal loop without duplicating upstream burden; externally purchased frozen duck is outside applicability. |
| upstream_dataset_requirement | Link live ducks, packaging, electricity, steam, water, ferric chloride, refrigerant replacement, and off-site treatment to independently documented upstream datasets; do not replace them with another CPC 21142 process. |
| disclosure | Report strain, live-weight basis, cut specification and mass shares, freezing equipment, refrigerant, storage temperature and tonne-days, wastewater destination, geography, year, allocation results, and all departures from this route. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_lock` | Declared route | Model only the declared Pekin-duck, immersion-chilled, skin-on bone-in cut-up, air-blast-frozen route; do not average whole ducks, individual cuts, offal, or other freezing technologies into the reference product. | `unsd-cpc-3-2025`; `fao-slaughterhouses-poultry` |
| `sb_foreground_extent` | Foreground system | Include receiving through frozen-store dispatch plus on-site screening and dissolved-air-flotation pretreatment; treat farming, supplied materials and energy, off-site treatment, distribution, retail, and use as linked processes. | `fao-slaughterhouses-poultry`; `ec-pef-2021` |
| `sb_upstream_link` | Purchased inputs | Every purchased product input shall link to a non-recursive upstream dataset with geography, technology, and time representativeness disclosed. | `ec-pef-2021` |
| `sb_atomic_utilities` | All foreground exchanges | Record electricity, steam, process water, packaging materials, treatment chemical, wastewater, individual solid residues, and refrigerant emission as separate atomic flows; aggregated utility, waste, or emission placeholders are forbidden. | `fao-slaughterhouses-poultry`; `ec-pef-2021` |
| `sb_temperature` | Chilling, freezing and storage | Separate immersion chilling, air-blast freezing, and frozen storage and retain their respective water, energy, temperature, and time evidence. | `fao-who-cxc-8-1976` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_dress_chill` | Slaughter, dressing, washing, and immersion chilling | `required` | Always | Converts received live ducks to drained chilled dressed carcasses and segregated residuals | kg drained chilled dressed carcass |
| `cut_pack` | Mechanical cut-up and packaging | `required` | Always | Produces the declared saleable cut mix and package | kg packed unfrozen cut-up parts |
| `air_blast_freeze_store` | Air-blast freezing and frozen storage | `required` | Always | Freezes the packaged cut mix, stores it, and supplies the reference flow | 1,000 kg net frozen duck cuts |
| `wastewater_pretreatment` | Screening and dissolved-air-flotation pretreatment | `required` | Always for this route | Pretreats combined route wastewater before off-site treatment or permitted discharge | m3 raw wastewater treated |

### Process: Slaughter, dressing, washing, and immersion chilling (`slaughter_dress_chill`)

#### Inputs

##### Product flows

###### Live Pekin ducks (`live_ducks`)

Received live Pekin ducks are the sole animal input to the locked route.

- Requirement: Required (`required`)
- Selected flow: Live Pekin ducks ``
- Flow property / unit: Mass / kg live weight
- Amount rule: Weigh accepted birds at plant receiving, net of transport crates and dead-on-arrival birds
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_mass`
- Sources: `fao-slaughterhouses-poultry`
- Range: Provisional live-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1500
  - Upper: 2200
  - Unit: kg live weight
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity for slaughter and chilling (`slaughter_electricity`)

Electricity used by receiving, slaughter, defeathering, evisceration, pumps, washing, and chilling is recorded separately.

- Requirement: Required (`required`)
- Selected flow: Purchased grid electricity ``
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use for this process, with justified allocation of shared loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources:

###### Purchased steam for scalding and sanitation (`slaughter_steam`)

Purchased steam crossing the plant boundary for scalding and process sanitation is recorded as its own energy carrier.

- Requirement: Required (`required`)
- Selected flow: Purchased steam ``
- Flow property / unit: Mass and energy / kg and MJ
- Amount rule: Meter delivered steam and calculate net energy from measured state and condensate return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_steam`
- Sources:

###### Potable process water for scalding, washing, and chilling (`slaughter_process_water`)

Potable process water supplied to scalding, carcass washing, equipment cleaning, and immersion chilling is measured as a product input.

- Requirement: Required (`required`)
- Selected flow: Potable process water ``
- Flow property / unit: Volume / m3
- Amount rule: Meter net process-water withdrawal assigned to this process; exclude sanitary and office water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam`
- Sources: `fao-slaughterhouses-poultry`
- Range: Provisional process-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: m3
  - Basis: per 1,000 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Drained chilled dressed duck carcasses (`chilled_dressed_carcasses`)

Drained chilled dressed carcasses transferred to cut-up are weighed before cutting and are not the reference product.

- Requirement: Required (`required`)
- Selected flow: Chilled dressed Pekin duck carcasses ``
- Flow property / unit: Mass / kg
- Amount rule: Weigh after immersion chilling and standardized drain time, before cut-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `fao-slaughterhouses-poultry`

###### Segregated edible duck offal (`edible_offal`)

Edible hearts, livers, gizzards, or other declared edible organs recovered for sale are recorded as a separate co-product and never included in frozen-cut mass.

- Requirement: Required (`required`)
- Selected flow: Edible duck offal ``
- Flow property / unit: Mass / kg
- Amount rule: Weigh each marketed edible-offal stream; record zero only with production evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `fao-slaughterhouses-poultry`

###### Segregated duck blood for recovery (`recovered_blood`)

Blood deliberately collected for rendering or another beneficial use is an individual co-product; blood sent to treatment is not relabelled as this flow.

- Requirement: Required (`required`)
- Selected flow: Recovered duck blood ``
- Flow property / unit: Mass / kg
- Amount rule: Weigh or calculate from tank level and measured density at collection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_mass`
- Sources: `mozhiarasi-natarajan-2022`

###### Segregated duck feathers for recovery (`recovered_feathers`)

Feathers segregated for rendering or material recovery are recorded apart from other slaughter solids.

- Requirement: Required (`required`)
- Selected flow: Recovered duck feathers ``
- Flow property / unit: Mass / kg wet feathers
- Amount rule: Weigh wet feathers at dispatch and record moisture basis if available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `mozhiarasi-natarajan-2022`

##### Waste flows

###### Inedible slaughter solids (`inedible_slaughter_solids`)

Heads, feet, inedible viscera, condemned material, and other non-recovered slaughter solids are measured as one specifically defined waste stream, excluding blood and feathers already segregated.

- Requirement: Required (`required`)
- Selected flow: Inedible duck slaughter solids ``
- Flow property / unit: Mass / kg wet waste
- Amount rule: Weigh waste dispatched by destination, net of container tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `fao-slaughterhouses-poultry`; `mozhiarasi-natarajan-2022`

###### Raw slaughter and chilling wastewater (`slaughter_wastewater`)

Combined effluent from scalding, carcass washing, equipment cleaning, and immersion chilling is measured before mixing with cut-up or freezing wastewater.

- Requirement: Required (`required`)
- Selected flow: Raw slaughter and chilling wastewater ``
- Flow property / unit: Volume / m3
- Amount rule: Meter transfer volume to wastewater pretreatment and retain flow-proportional samples
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg drained chilled dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `fao-slaughterhouses-poultry`; `mozhiarasi-natarajan-2022`

### Process: Mechanical cut-up and packaging (`cut_pack`)

#### Inputs

##### Product flows

###### Chilled dressed duck carcasses for cut-up (`cutting_carcasses`)

The measured carcass output from slaughter is the only animal-material input to cut-up.

- Requirement: Required (`required`)
- Selected flow: Chilled dressed Pekin duck carcasses ``
- Flow property / unit: Mass / kg
- Amount rule: Equal the transferred `chilled_dressed_carcasses` mass after documented transfer loss or gain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

###### Polymer product-contact bags (`polymer_bags`)

Primary polymer bags or liners touching the duck cuts are measured separately from corrugated cartons.

- Requirement: Required (`required`)
- Selected flow: Polymer packaging film ``
- Flow property / unit: Mass / kg
- Amount rule: Packaging issued less verified unused returns, reconciled to packed units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated transport cartons (`corrugated_cartons`)

Corrugated cartons used to dispatch the frozen product are recorded as a distinct packaging input.

- Requirement: Required (`required`)
- Selected flow: Corrugated board cartons ``
- Flow property / unit: Mass / kg
- Amount rule: Cartons issued less verified unused returns multiplied by measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Purchased electricity for cutting and packaging (`cut_pack_electricity`)

Electricity for conveyors, saws, cutters, scales, sealers, and local refrigeration is measured for cut-up and packaging.

- Requirement: Required (`required`)
- Selected flow: Purchased grid electricity ``
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use for this process, with justified allocation of shared loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources:

###### Potable water for cut-up and freezer-area sanitation (`cut_pack_process_water`)

Potable water used to wash cut-up equipment, food-contact surfaces, and the adjacent freezer loading area is measured separately from slaughter and chilling water.

- Requirement: Required (`required`)
- Selected flow: Potable process water ``
- Flow property / unit: Volume / m3
- Amount rule: Meter net sanitation-water withdrawal assigned to cut-up, packaging, and freezer loading; exclude sanitary and office water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam`
- Sources:

#### Outputs

##### Product flows

###### Packed unfrozen skin-on bone-in duck cuts (`packed_unfrozen_cuts`)

The full declared saleable cut mix is weighed after packaging and before freezing; each named cut's mass share remains in batch records.

- Requirement: Required (`required`)
- Selected flow: Packed unfrozen skin-on bone-in duck cuts ``
- Flow property / unit: Mass / kg net product
- Amount rule: Sum net packed-unit product masses and reconcile to named-cut batch totals
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_mass`
- Sources:

###### Recovered duck cut trimmings and bones (`recovered_cut_trimmings`)

Trimmings and bones intentionally recovered for food, feed, or rendering are a separate co-product and are not counted in saleable cut mass.

- Requirement: Required (`required`)
- Selected flow: Recovered duck cut trimmings and bones ``
- Flow property / unit: Mass / kg
- Amount rule: Weigh each recovered stream at transfer or dispatch and record intended destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Waste flows

###### Cut-up packaging scrap (`packaging_scrap`)

Rejected film, bags, liners, and cartons generated during packaging are weighed by material and destination.

- Requirement: Required (`required`)
- Selected flow: Duck-meat packaging scrap ``
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately as polymer and corrugated fractions; aggregate only after retaining material fields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### Raw cut-up and sanitation wastewater (`cut_pack_wastewater`)

Effluent from cut-up equipment, food-contact surfaces, packaging-area cleaning, and freezer loading-area washdown is measured before joining slaughter wastewater.

- Requirement: Required (`required`)
- Selected flow: Raw cut-up and sanitation wastewater ``
- Flow property / unit: Volume / m3
- Amount rule: Meter transfer volume to combined wastewater pretreatment and retain flow-proportional samples
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packed unfrozen cut-up parts output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources:

### Process: Air-blast freezing and frozen storage (`air_blast_freeze_store`)

#### Inputs

##### Product flows

###### Packed unfrozen duck cuts for freezing (`freezing_feed`)

Packed unfrozen cuts from the declared cut-up batch are the sole product feed to the air-blast freezer.

- Requirement: Required (`required`)
- Selected flow: Packed unfrozen skin-on bone-in duck cuts ``
- Flow property / unit: Mass / kg net product
- Amount rule: Equal transferred `packed_unfrozen_cuts` net mass after documented transfer discrepancy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

###### Purchased electricity for air-blast freezing (`freezing_electricity`)

Electricity for the air-blast freezer, evaporator fans, pumps, and attributable compressors is isolated from storage electricity.

- Requirement: Required (`required`)
- Selected flow: Purchased grid electricity ``
- Flow property / unit: Energy / kWh
- Amount rule: Submeter the freezing campaign from loaded start through product thermal stabilisation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `fao-who-cxc-8-1976`

###### Purchased electricity for frozen storage (`storage_electricity`)

Frozen-store electricity is recorded separately and related to the actual mass-time storage service.

- Requirement: Required (`required`)
- Selected flow: Purchased grid electricity ``
- Flow property / unit: Energy / kWh
- Amount rule: Submeter frozen storage and allocate by daily tonne-days when multiple products share the room
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tonne-day of reference product storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `fao-who-cxc-8-1976`

#### Outputs

##### Product flows

###### Frozen duck cuts at factory gate (`frozen_duck_cuts`)

This is the reference product: the declared packaged cut mix after air-blast freezing and frozen storage.

- Requirement: Required (`required`)
- Selected flow: Meat of ducks, frozen `658e0f63-44f8-4e3e-aeef-ccf1ab20a13f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed reference amount of 1,000 kg net frozen product, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_output_mass`
- Sources: `unsd-cpc-3-2025`; `fao-who-cxc-8-1976`

##### Waste flows

###### Rejected frozen duck product (`rejected_frozen_product`)

Frozen packages rejected after freezing or storage are measured separately from saleable output and assigned their actual destination.

- Requirement: Required (`required`)
- Selected flow: Rejected frozen duck product ``
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected net product by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

##### Elementary flows

###### R717 ammonia refrigerant emitted to air (`refrigerant_to_air`)

Fugitive loss of R717 anhydrous ammonia from the freezer and cold store is reported as an emission to air; a zero value requires a reconciled charge record.

- Requirement: Required (`required`)
- Selected flow: Ammonia, anhydrous, to air ``
- Flow property / unit: Mass / kg NH3
- Amount rule: Opening charge plus additions minus closing charge and documented recovery, allocated between freezing and storage by equipment charge or leak evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources:

### Process: Screening and dissolved-air-flotation pretreatment (`wastewater_pretreatment`)

#### Inputs

##### Waste flows

###### Combined raw route wastewater (`combined_raw_wastewater`)

Metered slaughter, chilling, cut-up, cleaning, and freezing-area wastewater entering on-site pretreatment is the treatment feed.

- Requirement: Required (`required`)
- Selected flow: Combined raw duck-processing wastewater ``
- Flow property / unit: Volume / m3
- Amount rule: Meter total influent and reconcile it to source-process wastewater volumes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 pretreated wastewater output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `mozhiarasi-natarajan-2022`

##### Product flows

###### Purchased electricity for wastewater pretreatment (`pretreatment_electricity`)

Electricity for screens, pumps, air saturation, flotation, and sludge handling is recorded independently from production electricity.

- Requirement: Required (`required`)
- Selected flow: Purchased grid electricity ``
- Flow property / unit: Energy / kWh
- Amount rule: Submeter pretreatment equipment or allocate from panel data using operating hours and verified loads
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 pretreated wastewater output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources:

###### Ferric chloride coagulant (`ferric_chloride`)

Ferric chloride dosed to the declared dissolved-air-flotation system is recorded as a named chemical input; substitute coagulants require a route revision.

- Requirement: Required (`required`)
- Selected flow: Ferric chloride ``
- Flow property / unit: Mass / kg as supplied and kg active substance
- Amount rule: Tank or purchase reconciliation, with solution concentration and active mass reported
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 pretreated wastewater output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_chemical`
- Sources:

#### Outputs

##### Waste flows

###### Pretreated wastewater to off-site treatment (`pretreated_wastewater`)

The liquid effluent leaving dissolved-air flotation is measured at the transfer to off-site treatment or the declared permitted discharge point.

- Requirement: Required (`required`)
- Selected flow: Pretreated duck-processing wastewater ``
- Flow property / unit: Volume / m3
- Amount rule: Meter effluent volume and report flow-weighted COD, BOD5, total suspended solids, total nitrogen, and total phosphorus concentrations and loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 pretreated wastewater output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `mozhiarasi-natarajan-2022`

###### Screened wastewater solids (`screened_solids`)

Coarse feathers, tissue, fat, and other solids removed by screening are weighed as a distinct wet waste stream.

- Requirement: Required (`required`)
- Selected flow: Screened duck-processing solids ``
- Flow property / unit: Mass / kg wet waste
- Amount rule: Weigh containerized screened solids net of tare by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 pretreated wastewater output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `mozhiarasi-natarajan-2022`

###### Dissolved-air-flotation sludge (`daf_sludge`)

Float sludge removed from dissolved-air flotation is recorded separately from screened solids and liquid effluent.

- Requirement: Required (`required`)
- Selected flow: Duck-processing dissolved-air-flotation sludge ``
- Flow property / unit: Mass / kg wet sludge and kg dry matter
- Amount rule: Weigh wet sludge, measure representative solids content, and calculate dry matter by reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 pretreated wastewater output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources: `mozhiarasi-natarajan-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid` | All foreground processes | Avoid allocation first by separating metered process stages, destination-specific residue handling, freezing from storage, and product-specific cut-up batches. | `ec-pef-2021` |
| `al_subdivide` | Separable outputs and operations | Attribute operations that exclusively produce or handle edible offal, recovered blood, feathers, trimmings, packaging scrap, rejects, or wastewater directly to those flows before allocating shared burdens. | `ec-pef-2021` |
| `al_residual_economic` | Indivisible shared slaughter and cut-up burdens | Allocate remaining indivisible slaughter and cut-up burdens among the reference cut batch and co-products with positive revenue and intended beneficial use by contemporaneous plant-gate economic value; price source, currency, averaging period, and factors are mandatory. Do not transfer the PEF mammal default factors to ducks. | `ec-pef-2021` |
| `al_mass_sensitivity` | Co-products receiving shared burden | For every co-product receiving residual shared burden, also report a wet-mass allocation sensitivity using measured split-point mass and disclosed moisture basis. | `ec-pef-2021` |
| `al_waste` | Waste outputs | A residual with no intended beneficial use or positive revenue is waste, receives no co-product allocation, and carries its collection, on-site treatment, transport, and off-site treatment burdens from the point of generation. | `ec-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_mass` | `slaughter_dress_chill` | live ducks | weighbridge/slaughter log | gross mass, crate tare, accepted birds, dead-on-arrival mass, time | calibrated receiving scale | kg | each lot | representative 12 consecutive months | route plant | accepted net live mass summed | calibration and lot reconciliation |
| `cp_utility_meters` | all processes | electricity | meter/energy log | meter id, opening/closing reading, interval, downtime, shared load | dedicated meter or verified engineering allocation | kWh | shift or batch | representative 12 consecutive months | route equipment | sum by process; storage by tonne-day | meter calibration and panel map |
| `cp_water_steam` | `slaughter_dress_chill` | water and steam | meter log | water volume, steam mass, state, condensate return, interval | calibrated flow meter | m3; kg; MJ | shift or batch | representative 12 consecutive months | route process | net use by batch | calibration and mass/energy reconciliation |
| `cp_output_mass` | production processes | products and co-products | scale/production log | flow identity, gross, tare, net, cut name, moisture basis, destination | calibrated scales and batch reconciliation | kg | each batch/dispatch | representative 12 consecutive months | route plant | sum net mass by atomic flow | scale calibration and signed batch record |
| `cp_packaging` | `cut_pack` | packaging inputs | issue/return and specification record | material, units issued, returns, unit mass, supplier spec | inventory reconciliation plus sample weighing | kg | batch | representative 12 consecutive months | packed route | issued minus returned mass | purchase and sample-weight records |
| `cp_waste_mass` | all processes | solid wastes and rejects | waste manifest/scale log | waste identity, gross, tare, wet mass, dry matter if relevant, destination | calibrated scale | kg | each dispatch | representative 12 consecutive months | route plant | sum by atomic waste and destination | manifests, tickets, sampling record |
| `cp_wastewater` | `slaughter_dress_chill`; `wastewater_pretreatment` | wastewater | flow meter and laboratory record | volume, sample time, COD, BOD5, TSS, TN, TP, sampling basis | continuous flow meter and flow-proportional composite sample | m3; mg/L; kg | continuous flow; at least monthly composite | representative 12 consecutive months | route drains and pretreatment | volume sum; concentration × matched volume | meter calibration, laboratory method and chain of custody |
| `cp_temperature` | `slaughter_dress_chill`; `air_blast_freeze_store` | product and room temperature | logger record | sensor id, location, time, product-core temperature, room temperature, batch | calibrated continuous logger plus representative core probes | °C; h | continuous per batch/store | all reported batches | chill tank, freezer and store | retain extrema and time-temperature profile | calibration and alarm/deviation log |
| `cp_refrigerant` | `air_blast_freeze_store` | refrigerant emission | service/charge log | refrigerant identity, opening charge, additions, closing charge, recovered mass, equipment | annual charge reconciliation | kg | each service and annual close | same 12-month period | freezer and frozen store | mass balance by named refrigerant | invoices, service sheets and recovery records |
| `cp_treatment_chemical` | `wastewater_pretreatment` | ferric chloride | tank/purchase log | delivered solution mass, inventory change, concentration, active mass, treated volume | inventory reconciliation | kg solution; kg active | batch/month | representative 12 consecutive months | DAF unit | consumption divided by matched influent | invoices, tank readings and concentration certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize` | all inventory rows | reporting-period flow ÷ saleable reference-product mass × 1,000 kg | matched-period flow and `frozen_duck_cuts` net mass | flow per reference amount |  |
| `cr_mass_balance` | slaughter and cut-up | inputs − outputs − inventory change; report absolute and percentage closure without forcing balance | all atomic wet-mass flows and inventory change | unexplained mass and closure percentage |  |
| `cr_storage_energy` | frozen storage | matched storage kWh × product tonne-days ÷ total room tonne-days | daily inventory, residence time, room electricity | kWh per reference-product tonne-day | `fao-who-cxc-8-1976` |
| `cr_refrigerant` | refrigerant emission | opening charge + additions − closing charge − recovered mass | charge and service records | kg named refrigerant to air, floored at zero only after investigation |  |
| `cr_allocation` | shared slaughter/cut burdens | shared burden × recipient plant-gate revenue ÷ total eligible revenue; repeat by split-point wet mass for sensitivity | eligible product masses, prices, revenues, shared burden | economic allocation result and wet-mass sensitivity | `ec-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Prove species/strain, skin-on bone-in form, named-cut shares, air-blast technology, and package specification for every represented product family | product specification, labels, batch and equipment records |
| `dq_time` | foreground data | Use one representative continuous 12-month period; disclose shutdowns, seasonal gaps, and any shorter period | dated raw records and coverage calculation |
| `dq_measurement` | measured flows | Use calibrated meters/scales and retain meter-to-process maps; engineering allocation is allowed only when a dedicated meter is unavailable and uncertainty is disclosed | calibration certificates, meter maps, allocation workbook |
| `dq_completeness` | all atomic flows | Account for at least 95% of measured input mass and 95% of metered energy by included rows; list and justify exclusions individually | mass/energy completeness reconciliation |
| `dq_sources` | external datasets | Document geography, year, technology, provider, version, and transformation for each linked dataset | dataset provenance register |
| `dq_estimates` | provisional ranges | Do not publish a foreground amount taken from a `reasoned_estimate` range; replace it with collected/calculated evidence or disclose the dataset as incomplete | estimate replacement log and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | Reference flow and product identity | Reference flow UUID, Mass property UUID, 1,000 kg amount, CPC identity, Pekin-duck qualifier, skin-on bone-in cut form, air-blast technology, and R717 ammonia refrigerant must match this PCR. | `unsd-cpc-3-2025` |
| `val_route` | Required process route | All four required processes must be present in order; whole-duck, other cut-form, offal-reference, and non-air-blast routes may not be averaged into the dataset. | `unsd-cpc-3-2025`; `fao-slaughterhouses-poultry` |
| `val_mass_balance` | Slaughter and cut-up mass balances | Slaughter and cut-up wet-mass balances must be reported; unexplained difference above 5% of input requires correction or a reviewed, flow-specific explanation. | `fao-slaughterhouses-poultry` |
| `val_atomic` | All foreground exchanges | Electricity, steam, water, polymer film, cartons, ferric chloride, each product/co-product, each waste, wastewater, and named refrigerant emission must remain separate atomic rows. | `fao-slaughterhouses-poultry`; `ec-pef-2021` |
| `val_temperature` | Freezing and frozen storage | Batch evidence must show product thermal centre no warmer than -18 °C after freezing stabilisation and frozen storage maintained at -18 °C or colder, with deviations disclosed. | `fao-who-cxc-8-1976` |
| `val_allocation` | Shared burdens and co-products | Subdivision, eligible co-product status, plant-gate economic factors, and wet-mass sensitivity must all be present; waste may not receive co-product allocation. | `ec-pef-2021` |
| `val_completeness` | Completed foreground package | Foreground records must cover the declared period and meet the 95% mass and energy completeness tests; provisional reasoned ranges cannot substitute for measured amounts. | `ec-pef-2021` |
| `val_uuid` | All UUID-bearing fields | Blank non-reference flow UUIDs and the blank Mass unit-group UUID must remain explicitly unresolved and must never be populated by semantic guesswork. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground unit-process package and aggregated factory-gate result for the locked frozen cut-up duck route |
| downstream_use | `secondary_dataset`; may be used as a `background_dataset` only where the receiving study matches the declared route and qualifiers |
| allowed_use | Comparative or attributional LCA of packaged frozen skin-on bone-in Pekin duck cuts when geography, time, technology, cut mix, and allocation are compatible |
| excluded_use | Representation of frozen whole ducks, a single cut without composition adjustment, fresh/chilled meat, boneless/skinless products, offal, prepared duck, other freezing technologies, duck farming, distribution, retail, cooking, or consumption |
| required_metadata | Plant geography and year; species/strain; cut names and mass shares; skin/bone state; slaughter and chilling configuration; freezer technology and refrigerant; package bill; storage temperature and tonne-days; wastewater route; upstream dataset versions; allocation factors |
| required_quality_disclosure | Coverage period; missing or allocated meters; calibration status; mass and energy completeness; mass-balance closure; wastewater sampling; temperature deviations; refrigerant reconciliation; data-source representativeness; reasoned estimates; unresolved UUIDs |
| update_trigger | Change in species/strain, cut composition, skin/bone form, slaughter/chilling line, principal freezing technology, refrigerant, packaging, wastewater treatment, storage regime, allocation status, plant geography, or data older than three years |

## 11. Data Sources

OpenAlex discovery was completed centrally with one duck-processing route query and one exact-title query. Eighteen result records were screened. No duck-specific processing LCI source was found. The exact-title query confirmed `mozhiarasi-natarajan-2022`; it was retained only after independent verification of the PMC original full text. Broad poultry-production, nutrition, cooking, microbiology and metadata-only results were rejected, and no abstract or search snippet supports a rule or value.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, *CPC Version 3.0 Explanatory Notes* (2025), [official PDF](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | CPC 21142 inclusion and exclusions for frozen duck meat versus fresh/chilled meat and edible offal |
| `fao-slaughterhouses-poultry` | official_guidance | FAO, *Slaughterhouses—Poultry slaughter* (accessed 2026-08-20), [official page](https://www.fao.org/4/X6114E/x6114e04.htm) | Verified poultry process sequence, immersion chilling, process-water use points, and separate blood, feathers, offal, wastewater, and solid-residue categories; generic poultry percentages are not used as duck-specific amounts |
| `fao-who-cxc-8-1976` | standard | Codex Alimentarius, *Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976* (accessed 2026-08-20), [official PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/zh/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf) | Quick-freezing completion, -18 °C thermal-centre and storage conditions, and temperature records |
| `ec-pef-2021` | official_guidance | European Commission, *Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods* (accessed 2026-08-20), [EUR-Lex official PDF](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32021H2279) | Full-text-verified slaughterhouse rule to subdivide directly attributable flows and economically allocate remaining flows, plus company-specific data requirements; mammal default factors are not transferred to ducks |
| `mozhiarasi-natarajan-2022` | literature | Mozhiarasi V., Natarajan T.S., “Slaughterhouse and poultry wastes: management practices, feedstocks for renewable energy production, and recovery of value added products,” *Biomass Conversion and Biorefinery* (2022), [doi:10.1007/s13399-022-02352-0](https://doi.org/10.1007/s13399-022-02352-0), [PMC full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC8830992/) | Full-text-verified categorisation and source segregation of blood, feathers, offal, wastewater, screened solids, and treatment sludge; no chicken-specific percentage is transferred to duck |
