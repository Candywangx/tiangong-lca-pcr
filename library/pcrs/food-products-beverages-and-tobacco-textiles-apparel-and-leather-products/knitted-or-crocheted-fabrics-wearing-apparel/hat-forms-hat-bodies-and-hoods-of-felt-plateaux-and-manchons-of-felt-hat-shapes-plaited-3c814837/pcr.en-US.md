---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hat-forms-hat-bodies-and-hoods-of-felt-plateaux-and-manchons-of-felt-hat-shapes-plaited-3c814837
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Hat-forms, hat bodies and hoods of felt; plateaux and manchons of felt; hat-shapes, plaited or made by assembling strips of any material

## 1. Scope and Applicability

This PCR governs foreground data packages for the manufacture of unfinished felt hat-forms, hat bodies, hoods, plateaux and manchons, and for unfinished hat-shapes plaited or made by assembling strips of any material. It covers the felt route from received prepared wool or fur fibre and the plaited/strip route from received splints, plait, or specific strips through the declared CPC 28261 factory-gate state.

The reference product shall be neither blocked to a final hat shape nor supplied with a made brim. A plaited or strip-assembled hat-shape shall also be unlined and untrimmed. Finished hats, final style blocking, made-brim formation, lining, bands, decorative trimming, retail packing, distribution, use, and end-of-life are outside this PCR. Raw animal rearing, pelt curing, fur separation, wool scouring, crop cultivation, paper or polymer production, and purchased material manufacture are upstream processes represented by linked supplier or secondary datasets.

Two route families are permitted and shall not be averaged without a disclosed representative mix: (a) felt fibre preparation, web/cone formation, hardening/fulling, conditional dyeing/rinsing, and drying; and (b) plait preparation when onsite, continuous-coil sewing or specific strip assembly, and delivery before final blocking. A concrete dataset shall contain only applicable atomic exchanges. If an actual chemical, strip material, fuel, refrigerant, packaging component, waste, or emission is not named by a card below, the foreground package shall add a separate chemically or physically specific exchange; it shall not substitute a collection label.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hat-forms-hat-bodies-and-hoods-of-felt-plateaux-and-manchons-of-felt-hat-shapes-plaited-3c814837` |
| classification_refs | CPC Ver. 3.0: `28261` (exact) |
| covered_products | Unfinished felt hat-forms, hat bodies, hoods, plateaux, and manchons; unfinished hat-shapes plaited or assembled from strips of a declared material |
| excluded_products | Finished hats and other headgear; products blocked to final shape; products with made brims; plaited/strip shapes that are lined or trimmed; hat foundations, frames, peaks, chinstraps, and non-headgear felt sheet |
| representative_product | One declared-route unfinished hat body or hat-shape meeting the CPC 28261 state restrictions |
| production_route | `felt_wool`, `felt_fur`, `plaited_straw`, or `assembled_specific_strip`; declare any route combination and its mass shares |
| market_state | Factory-gate intermediate for downstream hat making; unblocked to final shape, without made brim, and for plaited/strip shapes unlined and untrimmed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of a conforming unfinished hat-form, body, hood, plateau, manchon, or unblocked plaited/strip-assembled hat-shape for downstream hat manufacture |
| How much | 1 kg net reference product |
| How well | The material, route, product form, moisture state, colour/finish state, and CPC 28261 unfinished market state are declared and verified |
| How long or cycle | One production lot at the factory gate; no service duration is assigned to this intermediate product |
| reference_flow_link | `reference_hat_form_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net reference product |
| Reference product flow | Hat-forms, hat bodies and hoods of felt, plateaux and manchons of felt, hat-shapes, plaited or made by assembling strips of any material `ef72f4d7-8f9e-401f-bcff-8dc295e94396` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route; fibre species or strip material and composition; product form; unblocked/no-made-brim state; lining and trimming absence where applicable; moisture content at weighing; dyeing/fulling status; geography; technology; reference year; packaging inclusion |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Packaging is reported as an input but excluded from the 1 kg net product mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the dataset to exactly 1 kg net conforming CPC 28261 product at the factory gate. |
| `net_product_mass` | reference product and packaging | Mass | kg | Exclude transport packaging, pallets, reusable racks, and rejected product from reference-product mass; report them as separate exchanges when applicable. |
| `moisture_declaration` | felt fibre, wet felt body, and dry felt body | Mass | kg | Record the moisture content or dry-matter basis associated with every hand-off mass so wet-to-dry mass changes remain auditable. |
| `item_to_mass_conversion` | item-count production records | Mass | kg | Convert counts or dozens to mass using lot-specific sampled net mass and retain the sample size, date, and variability. |
| `energy_preservation` | electricity, steam, and natural gas | Energy | kWh or MJ | Preserve the measured energy unit; when conversion is required, record the factor and source and do not combine electricity, steam, or fuel into one exchange. |
| `volume_to_mass_conversion` | water and wastewater | Mass | kg | Convert measured volume using the contemporaneous measured density or a documented water-density assumption and retain the original volume record. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_materials` | all routes | Start at receipt of prepared/scoured felt fibre, straw splints or plait, or a declared specific strip material; upstream fibre, crop, pulp, polymer, and animal-skin processing shall be linked, not silently absorbed. | `historic-england-luton-hat-industry-2013`; `eu-ef-method-2021` |
| `boundary_required_operations` | applicable route | Include all directly controlled material preparation, felt formation/fulling, wet finishing, drying, plaiting, assembly, inspection, and packaging operations that occur before the declared factory gate. | `historic-england-luton-hat-industry-2013`; `us-epa-textile-mills-1982` |
| `boundary_product_state` | reference product | Stop before final style blocking or made-brim formation and, for plaited or strip-assembled shapes, before lining or trimming. | `eurlex-cn-headgear-2010`; `un-cpc-ver3-structure-2025` |
| `boundary_upstream_inputs` | purchased products and services | Link every purchased fibre, strip, chemical, utility, and packaging input to a geographically and technologically appropriate upstream dataset; keep its foreground amount visible. | `eu-ef-method-2021` |
| `boundary_exclusions` | downstream life cycle | Exclude finished-hat blocking, stiffening performed only after final blocking, made brims, lining, bands, decorative trimming, distribution, use, and end-of-life from this factory-gate dataset. | `eurlex-cn-headgear-2010`; `historic-england-luton-hat-industry-2013` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared felt-forming fibre, wheat-straw splints or plait, or each declared specific strip material received at the foreground facility |
| starting_condition_role | The point at which category-specific hat-body or hat-shape manufacture begins; upstream material production remains linked |
| product_classification_scope | CPC Ver. 3.0 `28261`, constrained by the unfinished market-state tests in this PCR |
| recursive_input_rule | A purchased input already within CPC 28261 is recorded as one visible product input with an upstream dataset and declared mass; do not recursively re-create its manufacture, and include only the receiving facility's additional operations |
| upstream_dataset_requirement | Supplier-specific data are preferred; otherwise use a temporally, geographically, and technologically representative secondary dataset and disclose the substitution |
| disclosure | Declare route, material/species, purchased-versus-onsite intermediate status, included wet processes, excluded finishing operations, net moisture basis, geography, technology, reference year, and packaging scope |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `felt_fibre_preparation` | Felt fibre preparation and web formation | `conditional` | Required for the felt route when prepared wool or prepared fur fibres are opened, blended, carded, or deposited into a web within the foreground facility. | Foreground material preparation | Per kg net CPC 28261 reference product |
| `felt_body_formation_fulling` | Felt body formation, hardening, and fulling | `conditional` | Required for the felt route; include only the fulling chemistry actually used and keep every chemical as a separate exchange. | Foreground felt body manufacture | Per kg net CPC 28261 reference product |
| `felt_body_conditioning` | Conditional felt-body dyeing, rinsing, and drying | `conditional` | Include when dyeing, additional rinsing, generic hood opening, or drying occurs before the CPC 28261 factory gate; final style blocking, made-brim formation, lining, and trimming remain excluded. | Foreground wet finishing and conditioning | Per kg net CPC 28261 reference product |
| `straw_plait_preparation` | Onsite wheat-straw splint preparation and plaiting | `conditional` | Include only when wheat-straw splints are softened, flattened, clipped, and plaited inside the foreground boundary; purchased plait enters the next process directly. | Foreground plait manufacture | Per kg net CPC 28261 reference product |
| `strip_hat_shape_assembly` | Plaited or strip-assembled unfinished hat-shape assembly | `conditional` | Required for the plaited or strip-assembled route. Record only actual materials; any material not listed below requires a new dedicated atomic foreground exchange rather than a generic strip-material row. | Foreground hat-shape assembly | Per kg net CPC 28261 reference product |
| `final_inspection_packaging` | Final inspection, net-mass determination, and packaging | `required` | Always include for the declared factory-gate product; one and only one route-specific unfinished product input is applicable. | Foreground finalization and reference-product delivery | 1 kg net CPC 28261 reference product |

### Process: Felt fibre preparation and web formation (`felt_fibre_preparation`)

#### Inputs

##### Product flows

###### Scoured wool fibre input (`scoured_wool_fibre_input`)

Scoured wool fibre crosses the foreground boundary when wool is the declared felt-forming fibre.

- Selected flow: Scoured wool fibre
- Flow property / unit: Mass / kg
- Amount rule: Record the accepted mass from calibrated receiving or batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fibre_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Prepared rabbit fur fibre input (`prepared_rabbit_fur_fibre_input`)

Prepared rabbit fur fibre crosses the foreground boundary only for the declared fur-felt route; raw pelt curing and fur separation remain upstream.

- Selected flow: Prepared rabbit fur fibre
- Flow property / unit: Mass / kg
- Amount rule: Record the accepted dry mass from receiving and batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fibre_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Electricity for opening, carding, and web formation (`electricity_fibre_preparation_input`)

Electricity is recorded for foreground fibre opening, blending, carding, air handling, and web-forming equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered electricity or calculate it from equipment-level meter readings allocated to conforming batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fibre_records`
- Sources: `eu-ef-method-2021`

#### Outputs

##### Product flows

###### Prepared felt web output (`prepared_felt_web_output`)

The prepared web is the measured intermediate transferred to the felt-forming and fulling process.

- Selected flow: Prepared felt fibre web
- Flow property / unit: Mass / kg
- Amount rule: Record the transferred mass at the process hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fibre_records`
- Sources: `us-epa-textile-mills-1982`

##### Waste flows

###### Coarse fibre rejects (`coarse_fibre_rejects_output`)

Coarse hairs, contaminated fibre, and carding rejects leaving the process are recorded as one specific solid-waste exchange.

- Selected flow: Coarse animal fibre rejects
- Flow property / unit: Mass / kg
- Amount rule: Weigh each separately managed reject lot leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fibre_records`
- Sources: `historic-england-luton-hat-industry-2013`

##### Elementary flows

###### Airborne fibre dust to air (`airborne_fibre_dust_output`)

Uncaptured animal-fibre particulate released across the environment boundary is recorded separately from collected solid rejects.

- Selected flow: Animal fibre dust to air
- Flow property / unit: Mass / kg
- Amount rule: Measure the emission or calculate it from inlet fibre, product, collected reject, and captured-dust records using `calc_fibre_dust_release`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fibre_dust_records`
- Sources: `us-epa-textile-bmp-1996`


### Process: Felt body formation, hardening, and fulling (`felt_body_formation_fulling`)

#### Inputs

##### Product flows

###### Prepared felt web input (`prepared_felt_web_input`)

The measured prepared web enters cone deposition, hardening, rolling, pressing, and fulling.

- Selected flow: Prepared felt fibre web
- Flow property / unit: Mass / kg
- Amount rule: Record the transferred mass entering the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `historic-england-luton-hat-industry-2013`; `us-epa-textile-mills-1982`

###### Process water for felt formation and rinsing (`process_water_fulling_input`)

Water entering hot-water formation, fulling, washing, or rinsing is recorded as a distinct product input.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record metered water delivered to the process; do not infer it from a generic industry average.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `us-epa-textile-mills-1982`; `us-epa-textile-bmp-1996`

###### Electricity for felt formation and fulling (`electricity_fulling_input`)

Electricity used by cone-forming, pumps, rollers, presses, and fulling equipment is recorded separately from thermal energy.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered electricity or calculate it from calibrated equipment meters and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `eu-ef-method-2021`

###### Purchased steam for felt formation and fulling (`purchased_steam_fulling_input`)

Purchased steam crossing the facility boundary for heating, boiling, or steaming is recorded separately from onsite fuel.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record supplier-metered delivered steam energy or calculate it from measured steam mass and documented enthalpy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Sodium carbonate for alkaline fulling or neutralization (`sodium_carbonate_fulling_input`)

Sodium carbonate is recorded only when the declared alkaline-fulling or neutralization recipe uses it.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from batch recipe and chemical inventory records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `us-epa-textile-mills-1982`

###### Sulfuric acid for acid fulling (`sulfuric_acid_fulling_input`)

Sulfuric acid is recorded only for a declared acid-fulling recipe and never combined with other bath chemicals.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of formulated acid issued to conforming batches, with concentration retained in metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `us-epa-textile-mills-1982`

###### Hydrogen peroxide for acid fulling (`hydrogen_peroxide_fulling_input`)

Hydrogen peroxide is recorded separately when it is used in the declared acid-fulling recipe.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of formulated peroxide issued to conforming batches, with concentration retained in metadata.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `us-epa-textile-mills-1982`

#### Outputs

##### Product flows

###### Wet felt body output (`wet_felt_body_output`)

The compacted wet form or body is weighed or calculated at the process hand-off before conditional wet finishing and drying.

- Selected flow: Wet felt hat body
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass and moisture content at the process hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `historic-england-luton-hat-industry-2013`

##### Waste flows

###### Spent fulling bath wastewater (`fulling_bath_wastewater_output`)

The discharged fulling bath is recorded as one specific wastewater exchange, separate from subsequent rinse water and solid fibre waste.

- Selected flow: Spent fulling bath wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record effluent-meter mass or volume converted using measured or documented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `us-epa-textile-mills-1982`

###### Felt fulling rinse wastewater (`fulling_rinse_wastewater_output`)

Wastewater from post-fulling washing and rinsing is recorded independently from the spent fulling bath.

- Selected flow: Felt fulling rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record effluent-meter mass or volume converted using measured or documented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_fulling_records`
- Sources: `us-epa-textile-mills-1982`


### Process: Conditional felt-body dyeing, rinsing, and drying (`felt_body_conditioning`)

#### Inputs

##### Product flows

###### Wet felt body input (`wet_felt_body_input`)

The wet felt body enters only the conditioning operations performed before the declared factory-gate state.

- Selected flow: Wet felt hat body
- Flow property / unit: Mass / kg
- Amount rule: Record the transferred wet mass and moisture content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Process water for dyeing and rinsing (`process_water_conditioning_input`)

Water supplied to in-house dyeing and post-dye rinsing is recorded separately from steam and electricity.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record metered process water for the included batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `us-epa-textile-mills-1982`; `us-epa-textile-bmp-1996`

###### Electricity for conditioning and drying (`electricity_conditioning_input`)

Electricity used by dye vessels, pumps, centrifuges, fans, and dryers is recorded as one electricity exchange for this process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered electricity or calculate it from calibrated equipment meters and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `eu-ef-method-2021`

###### Purchased steam for conditioning and drying (`purchased_steam_conditioning_input`)

Purchased steam is recorded when delivered across the facility boundary for dye-bath heating, steaming, or drying.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record delivered steam energy or calculate it from measured steam mass and documented enthalpy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Natural gas for onsite conditioning heat (`natural_gas_conditioning_input`)

Natural gas is recorded only when it is combusted onsite for steam generation, direct heating, or drying within this process.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record metered lower-heating-value energy assigned to conforming batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `historic-england-luton-hat-industry-2013`

#### Outputs

##### Product flows

###### Dry unfinished felt hat body output (`dry_felt_hat_body_output`)

The dried form, body, hood, plateau, or manchon is the route-specific intermediate sent to final inspection without final style blocking or trimming.

- Selected flow: Dry unfinished felt hat body
- Flow property / unit: Mass / kg
- Amount rule: Record net dry product mass and declared moisture content at the process hand-off.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `eurlex-cn-headgear-2010`; `historic-england-luton-hat-industry-2013`

##### Waste flows

###### Spent dye bath wastewater (`dye_bath_wastewater_output`)

The discharged dye bath is recorded as one specific wastewater exchange, separate from rinse wastewater and fulling effluent.

- Selected flow: Spent felt dye bath wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record effluent-meter mass or volume converted using measured or documented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `us-epa-textile-mills-1982`

###### Felt dyeing rinse wastewater (`dye_rinse_wastewater_output`)

Wastewater from rinsing after felt dyeing is recorded independently from the spent dye bath.

- Selected flow: Felt dyeing rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record effluent-meter mass or volume converted using measured or documented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `us-epa-textile-mills-1982`

###### Felt edge-trimming offcuts (`felt_trimming_offcuts_output`)

Felt removed only to establish the unfinished CPC 28261 body or hood edge is recorded as a separate solid waste.

- Selected flow: Felt edge-trimming offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected offcuts from included batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_felt_conditioning_records`
- Sources: `historic-england-luton-hat-industry-2013`

##### Elementary flows

###### Fossil carbon dioxide from onsite natural-gas combustion (`fossil_carbon_dioxide_conditioning_output`)

Direct fossil carbon dioxide is reported only when natural gas is combusted within the foreground boundary.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered natural-gas energy and the disclosed approved factor using `calc_natural_gas_emissions`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Sources: `eu-ef-method-2021`

###### Nitrogen oxides from onsite natural-gas combustion (`nitrogen_oxides_conditioning_output`)

Direct nitrogen oxides are reported separately from carbon dioxide when natural gas is combusted onsite.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered natural-gas energy and the disclosed approved factor or use stack-test records via `calc_natural_gas_emissions`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Sources: `eu-ef-method-2021`


### Process: Onsite wheat-straw splint preparation and plaiting (`straw_plait_preparation`)

#### Inputs

##### Product flows

###### Wheat-straw splints input (`wheat_straw_splints_input`)

Wheat-straw splints cross the process boundary when the facility makes its own straw plait.

- Selected flow: Wheat-straw splints
- Flow property / unit: Mass / kg
- Amount rule: Record accepted splint mass from receiving and batch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_straw_plaiting_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Electricity for straw preparation and plaiting (`electricity_straw_plaiting_input`)

Electricity used by rollers, cutters, and plaiting machinery is recorded separately from later sewing electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered electricity or calculate it from equipment meters and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_straw_plaiting_records`
- Sources: `eu-ef-method-2021`

#### Outputs

##### Product flows

###### Wheat-straw plait output (`wheat_straw_plait_output`)

The flattened and plaited wheat-straw intermediate is measured at transfer to hat-shape assembly.

- Selected flow: Wheat-straw plait
- Flow property / unit: Mass / kg
- Amount rule: Record transferred plait mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_straw_plaiting_records`
- Sources: `historic-england-luton-hat-industry-2013`

##### Waste flows

###### Wheat-straw end clippings (`straw_clippings_output`)

Ends clipped while splints are fed into the plait are recorded as a specific solid-waste exchange.

- Selected flow: Wheat-straw clippings
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected straw clippings.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_straw_plaiting_records`
- Sources: `historic-england-luton-hat-industry-2013`

##### Elementary flows

###### Wheat-straw dust to air (`straw_dust_to_air_output`)

Uncaptured particulate from rolling and clipping wheat-straw splints is recorded separately from collected clippings.

- Selected flow: Wheat-straw dust to air
- Flow property / unit: Mass / kg
- Amount rule: Measure particulate release or calculate it from a documented process mass balance using `calc_straw_dust_release`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_straw_dust_records`
- Sources: `us-epa-textile-bmp-1996`


### Process: Plaited or strip-assembled unfinished hat-shape assembly (`strip_hat_shape_assembly`)

#### Inputs

##### Product flows

###### Wheat-straw plait for hat-shape assembly (`wheat_straw_plait_assembly_input`)

Wheat-straw plait, whether purchased or transferred from onsite plaiting, enters continuous-coil assembly as its own material exchange.

- Selected flow: Wheat-straw plait
- Flow property / unit: Mass / kg
- Amount rule: Record issued plait mass assigned to conforming batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Paper strip for hat-shape assembly (`paper_strip_assembly_input`)

Paper strip is recorded only when it is the declared assembled-strip material.

- Selected flow: Paper strip
- Flow property / unit: Mass / kg
- Amount rule: Record issued paper-strip mass assigned to conforming batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `un-cpc-ver3-structure-2025`

###### Polypropylene strip for hat-shape assembly (`polypropylene_strip_assembly_input`)

Polypropylene strip is recorded separately when it is the declared assembled-strip material.

- Selected flow: Polypropylene strip
- Flow property / unit: Mass / kg
- Amount rule: Record issued polypropylene-strip mass assigned to conforming batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `un-cpc-ver3-structure-2025`

###### Cotton textile strip for hat-shape assembly (`cotton_textile_strip_assembly_input`)

Cotton textile strip is recorded separately when it is the declared assembled-strip material.

- Selected flow: Cotton textile strip
- Flow property / unit: Mass / kg
- Amount rule: Record issued cotton-strip mass assigned to conforming batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `un-cpc-ver3-structure-2025`

###### Cotton sewing thread for coil assembly (`cotton_sewing_thread_input`)

Cotton sewing thread joining the continuous coil is recorded independently from the plait or strip substrate.

- Selected flow: Cotton sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Record issued thread mass less documented returned unused thread.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Electricity for strip hat-shape assembly (`electricity_strip_assembly_input`)

Electricity used by plait-milling and sewing equipment is recorded for the assembly process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered electricity or calculate it from machine meters and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `eu-ef-method-2021`

#### Outputs

##### Product flows

###### Unblocked plaited or strip-assembled hat-shape output (`unblocked_plaited_hat_shape_output`)

The sewn or assembled rough hat shape is transferred before final blocking, made-brim formation, lining, or trimming.

- Selected flow: Unblocked plaited hat shape
- Flow property / unit: Mass / kg
- Amount rule: Record net transferred mass and confirm the excluded finishing states are absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `eurlex-cn-headgear-2010`; `historic-england-luton-hat-industry-2013`

##### Waste flows

###### Wheat-straw plait offcuts (`straw_plait_offcuts_output`)

Wheat-straw plait pieces removed during assembly are recorded independently from other material offcuts.

- Selected flow: Wheat-straw plait offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected straw-plait offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources: `historic-england-luton-hat-industry-2013`

###### Paper strip offcuts (`paper_strip_offcuts_output`)

Paper strip pieces removed during assembly are recorded as a separate waste only for the paper route.

- Selected flow: Paper strip offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected paper-strip offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources:

###### Polypropylene strip offcuts (`polypropylene_strip_offcuts_output`)

Polypropylene strip pieces removed during assembly are recorded as a separate waste only for the polypropylene route.

- Selected flow: Polypropylene strip offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected polypropylene-strip offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources:

###### Cotton textile strip offcuts (`cotton_textile_strip_offcuts_output`)

Cotton textile strip pieces removed during assembly are recorded as a separate waste only for the cotton-strip route.

- Selected flow: Cotton textile strip offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected cotton-strip offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_strip_assembly_records`
- Sources:


### Process: Final inspection, net-mass determination, and packaging (`final_inspection_packaging`)

#### Inputs

##### Product flows

###### Dry unfinished felt hat body for finalization (`dry_felt_hat_body_final_input`)

The felt-route intermediate enters final inspection without model-specific blocking, made-brim formation, lining, or trimming.

- Selected flow: Dry unfinished felt hat body
- Flow property / unit: Mass / kg
- Amount rule: Record accepted route input mass and moisture content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eurlex-cn-headgear-2010`

###### Unblocked plaited hat shape for finalization (`unblocked_plaited_hat_shape_final_input`)

The strip-route intermediate enters final inspection before excluded finishing operations.

- Selected flow: Unblocked plaited hat shape
- Flow property / unit: Mass / kg
- Amount rule: Record accepted route input mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eurlex-cn-headgear-2010`

###### Electricity for inspection and packaging (`electricity_finalization_input`)

Electricity for inspection equipment, scales, conveyors, and packaging equipment is recorded separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered electricity or calculate it from equipment meters and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-ef-method-2021`

###### Kraft paper wrapping input (`kraft_paper_wrap_input`)

Kraft paper used to wrap the unfinished product crosses the packaging boundary as a separate material.

- Selected flow: Kraft paper wrapping
- Flow property / unit: Mass / kg
- Amount rule: Record issued packaging mass attributable to delivered reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources:

###### Corrugated fibreboard box input (`corrugated_fibreboard_box_input`)

Corrugated fibreboard used for shipping cases is recorded separately from paper wrap and polymer film.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record issued box mass attributable to delivered reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources:

###### Low-density polyethylene film bag input (`ldpe_film_bag_input`)

Low-density polyethylene film used as a protective bag is recorded as its own packaging exchange.

- Selected flow: Low-density polyethylene film bag
- Flow property / unit: Mass / kg
- Amount rule: Record issued film-bag mass attributable to delivered reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources:

#### Outputs

##### Product flows

###### CPC 28261 reference product output (`reference_hat_form_product_output`)

This is the sole reference exchange: conforming unfinished hat-forms, bodies, hoods, plateaux, manchons, or unblocked plaited or strip-assembled hat-shapes at the factory gate.

- Selected flow: Hat-forms, hat bodies and hoods of felt, plateaux and manchons of felt, hat-shapes, plaited or made by assembling strips of any material `ef72f4d7-8f9e-401f-bcff-8dc295e94396`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net reference product; transport packaging mass is excluded.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `un-cpc-ver3-structure-2025`; `eurlex-cn-headgear-2010`

##### Waste flows

###### Rejected unfinished felt hat bodies (`rejected_felt_hat_bodies_output`)

Rejected felt forms, bodies, hoods, plateaux, or manchons leaving final inspection are recorded separately from strip-route rejects.

- Selected flow: Rejected unfinished felt hat bodies
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected felt-route product sent to its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources:

###### Rejected unblocked plaited hat shapes (`rejected_plaited_hat_shapes_output`)

Rejected plaited or strip-assembled hat shapes leaving final inspection are recorded separately from felt-route rejects.

- Selected flow: Rejected unblocked plaited hat shapes
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected strip-route product sent to its documented destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi-route, multi-material, or multi-product operations | Subdivide batches, machines, meters, and recipe records by route and product wherever physical records permit before applying allocation. | `eu-ef-method-2021` |
| `allocation_reuse_internal` | internally reused fibre, water, plait, and offcuts | Keep internal reuse as an internal transfer without an avoided-product credit; record only residual waste crossing the foreground boundary. | `us-epa-textile-bmp-1996` |
| `allocation_mass_fallback` | inseparable shared operations | If subdivision is impossible and products have comparable functions, allocate shared burdens by net output mass and disclose the affected processes, denominator, period, and sensitivity. | `eu-ef-method-2021` |
| `allocation_economic_exception` | materially different co-products | Use economic allocation only when physical subdivision and a defensible physical relation are unavailable; disclose prices, period, currency, shares, and a mass-allocation sensitivity. | `eu-ef-method-2021` |
| `allocation_no_reject_credit` | wastes and rejects | Do not treat rejects, wastewater, dust, or offcuts as burden-free co-products merely because they are sold or recovered; model the documented waste or recovered-material destination separately. | `eu-ef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_felt_fibre_records` | `felt_fibre_preparation` | fibre, electricity, intermediate, and reject quantities | receiving tickets; batch sheets; calibrated scale and electricity-meter records | date; lot; species; supplier; input kg; web kg; reject kg; kWh; moisture | Reconcile receiving, batch, hand-off, reject, and submeter records by conforming batch | kg; kWh | each batch with monthly reconciliation | at least 12 representative months or the full campaign when shorter | all foreground fibre-preparation equipment | Sum conforming batches and normalize to net reference-product mass | calibration certificates; lot traceability; reconciliation sign-off |
| `cp_fibre_dust_records` | `felt_fibre_preparation` | uncaptured animal-fibre dust | stack/room-air test or mass-balance records | test result; sampled hours; inlet fibre; product; collected reject; captured dust | Prefer representative direct measurement; otherwise retain every mass-balance term | kg | representative test plus monthly balance | same period as production data | all relevant opening, carding, and air-handling points | Calculate by `calc_fibre_dust_release` and normalize to reference mass | test report or signed balance; capture-system maintenance record |
| `cp_felt_fulling_records` | `felt_body_formation_fulling` | material, water, utilities, chemicals, intermediate, and wastewater | batch recipes; issue logs; water/steam/electricity meters; scales; effluent meter | batch; input kg; output kg; moisture; water kg; kWh; steam kg or MJ; chemical name; concentration; chemical kg; wastewater kg | Capture every included batch and keep each chemical as a separate ledger line | kg; kWh; MJ | each batch with monthly reconciliation | at least 12 representative months or full campaign | all cone-forming, hardening, fulling, washing, and rinsing equipment | Sum applicable atomic records and normalize to reference mass | meter calibration; recipe approval; chemical SDS/specification; batch reconciliation |
| `cp_felt_conditioning_records` | `felt_body_conditioning` | felt body, water, utilities, packaging-stage hand-off, and wastes | batch sheets; water/energy meters; fuel invoices; scales; effluent meter | batch; wet kg; dry kg; moisture; water kg; kWh; steam MJ; natural gas MJ; wastewater kg; offcut kg | Record only operations occurring before the declared CPC 28261 gate state | kg; kWh; MJ | each batch with monthly reconciliation | at least 12 representative months or full campaign | all included dyeing, rinsing, generic opening, and drying equipment | Sum included batches and normalize to net reference mass | meter calibration; route/state sign-off; mass-balance review |
| `cp_combustion_emission_records` | `felt_body_conditioning` | direct natural-gas combustion emissions | fuel meter; stack test where available; approved factor record | natural gas MJ; factor name; factor unit; factor value; stack result; operating hours | Pair metered fuel with a disclosed current factor or representative stack test | MJ; kg | monthly and after burner/factor changes | same period as conditioning data | all in-boundary gas-fired units | Apply `calc_natural_gas_emissions` separately for each pollutant | fuel-meter calibration; factor citation/version; stack-test report |
| `cp_straw_plaiting_records` | `straw_plait_preparation` | straw, electricity, plait, and clippings | receiving tickets; batch sheets; scales; electricity meter | lot; splint kg; plait kg; clipping kg; kWh | Reconcile each plait batch and retain straw grade and moisture | kg; kWh | each batch with monthly reconciliation | at least 12 representative months or full campaign | all onsite straw-preparation and plaiting equipment | Sum batches and normalize to net reference mass | scale/meter calibration; lot traceability; mass-balance sign-off |
| `cp_straw_dust_records` | `straw_plait_preparation` | uncaptured wheat-straw dust | direct particulate test or documented mass balance | sampled hours; splint kg; plait kg; clippings kg; captured dust kg; emission kg | Prefer direct measurement; otherwise retain all terms in `calc_straw_dust_release` | kg | representative test plus monthly balance | same period as plait production | all rolling, clipping, and collection points | Normalize calculated or measured release to reference mass | test report or signed balance; collector maintenance record |
| `cp_strip_assembly_records` | `strip_hat_shape_assembly` | plait/strip, thread, electricity, intermediate, and material-specific offcuts | material issue/return logs; batch traveler; scales; sewing-machine meter | batch; material identity; issued kg; returned kg; thread kg; kWh; output kg; each offcut kg | Keep each material identity on its own atomic ledger line; no generic strip balance | kg; kWh | each batch with monthly reconciliation | at least 12 representative months or full campaign | all plait milling and sewing/assembly equipment | Sum conforming batches by declared material and normalize to reference mass | material specification; lot traceability; scale/meter calibration |
| `cp_final_packaging_records` | `final_inspection_packaging` | route input, reference output, packaging, and route-specific rejects | inspection log; calibrated scale; packaging issue log; reject log | batch; route; product form; input kg; output kg; moisture; paper kg; box kg; LDPE kg; reject kg; state checks | Verify every lot against the unfinished-state qualifiers and weigh net product separately from packaging | kg; kWh | each shipment lot with monthly reconciliation | same period as production data | all final inspection and packaging stations | Sum conforming net output to 1 kg reference mass; retain packaging separately | scale/meter calibration; inspection checklist; shipment and reject traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | every non-reference inventory amount | normalized amount = period amount attributable to conforming product / period net conforming reference-product mass | atomic period amount; net conforming product kg | amount per 1 kg reference product | `eu-ef-method-2021` |
| `calc_steam_energy` | purchased steam | delivered steam MJ = measured steam mass × (delivered specific enthalpy − condensate return specific enthalpy); disclose both states | steam mass; pressure/temperature or supplier enthalpy; condensate state | MJ purchased steam |  |
| `calc_fibre_dust_release` | animal-fibre dust | uncaptured dust = inlet fibre − prepared web − solid rejects − captured dust − documented moisture change; negative results are invalid | all mass-balance terms | kg animal-fibre dust to air | `us-epa-textile-bmp-1996` |
| `calc_straw_dust_release` | wheat-straw dust | uncaptured dust = splint input − plait output − clippings − captured dust − documented moisture change; negative results are invalid | all mass-balance terms | kg wheat-straw dust to air | `us-epa-textile-bmp-1996` |
| `calc_natural_gas_emissions` | each direct natural-gas pollutant | pollutant mass = metered natural-gas energy × disclosed pollutant-specific factor, unless a representative stack measurement supersedes the calculation | natural gas MJ; one pollutant-specific factor or stack result | kg of one named pollutant | `eu-ef-method-2021` |
| `calc_mass_balance` | each process and route | imbalance = total mass inputs − product outputs − waste outputs − elementary mass outputs − documented evaporation/moisture change; investigate rather than forcing the balance to zero | atomic mass records and moisture data | disclosed process imbalance | `eu-ef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain CPC 28261 product-form and market-state inspection evidence for every represented route. | lot inspection checklist; product specification; photographs where useful |
| `dq_material_identity` | fibres, plaits, strips, thread, chemicals, and packaging | Retain supplier, lot, composition/species, chemical concentration, and product specification; do not substitute a plural material category. | purchase specification; certificate of analysis; SDS; lot record |
| `dq_primary_activity_data` | foreground manufacturing | Use company-specific material and manufacturing activity data for the represented facility and product. | `eu-ef-method-2021`; meters; ledgers; batch records |
| `dq_water_measurement` | wet felt operations | Use process-level calibrated water metering or a documented temporary-meter campaign; manufacturer estimates alone are not final foreground evidence. | `us-epa-textile-bmp-1996`; calibration and meter records |
| `dq_temporal_coverage` | all variable foreground data | Cover at least 12 representative months or the complete production campaign when shorter; disclose seasonality, downtime, and exclusions. | dated raw records and coverage statement |
| `dq_completeness` | all processes | Reconcile material, energy, water, waste, and direct-emission records and explain missing or estimated values. | signed process and annual mass/energy reconciliation |
| `dq_atomic_chemicals` | fulling, dyeing, cleaning, and finishing recipes | Record every actual chemical as a separate named exchange with concentration and amount; the three named fulling chemicals do not authorize omission or aggregation of other recipe chemicals. | approved recipe; issue ledger; SDS |
| `dq_atomic_fuels_refrigerants` | onsite utilities | Record each actual fuel and refrigerant as a separate named exchange; if diesel, LPG, another fuel, or a refrigerant is used inside the boundary, add a dedicated atomic row and its corresponding direct emissions or losses. | fuel/refrigerant ledger; meter; maintenance log |
| `dq_background_links` | purchased inputs | Record the upstream dataset, geography, technology, reference year, and substitution rationale for every material, utility, chemical, and packaging input. | dataset mapping log and quality review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference exchange shall use product flow `ef72f4d7-8f9e-401f-bcff-8dc295e94396`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, normalized to exactly 1 kg net product. |  |
| `validate_route_and_state` | reference product | Reject a package that omits route/material/product-form qualifiers or includes a final blocked shape, made brim, lining, or trimming inconsistent with CPC 28261. | `un-cpc-ver3-structure-2025`; `eurlex-cn-headgear-2010` |
| `validate_mass_balance` | each process and route | Require process mass reconciliation including moisture change, evaporation, product, every specific waste, and mass elementary output; investigate unexplained imbalance. | `eu-ef-method-2021` |
| `validate_atomic_inventory` | all inventory | Reject combined or collection exchanges; electricity, steam, each fuel, each refrigerant, each chemical, each packaging component, each waste, and each elementary emission shall be represented separately when applicable. |  |
| `validate_wet_processing` | felt fulling and conditioning | When fulling, dyeing, washing, or rinsing occurs, require measured water, separately named recipe chemicals, and separately metered wastewater; otherwise require a documented not-applicable statement. | `us-epa-textile-mills-1982`; `us-epa-textile-bmp-1996` |
| `validate_direct_fuel_emissions` | onsite combustion | When an onsite fuel input is present, require separate direct-emission exchanges for every modelled pollutant and disclose factor or stack-test evidence; purchased steam shall not be treated as onsite fuel. | `eu-ef-method-2021` |
| `validate_strip_materials` | plaited/assembled route | Require every actual plait, strip, thread, and material-specific offcut to be separately identified; an unlisted material requires a new atomic row rather than reuse of another material row. | `un-cpc-ver3-structure-2025` |
| `validate_packaging` | factory-gate delivery | Require each actual packaging material as a separate input and confirm that all packaging mass is excluded from the 1 kg net product reference amount. |  |
| `validate_data_quality` | foreground data package | Reject incomplete temporal coverage, missing calibration/traceability evidence, unexplained estimates, or background links without geography, technology, and year disclosure. | `eu-ef-method-2021`; `us-epa-textile-bmp-1996` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for an unfinished CPC 28261 hat-form/body/hood/plateau/manchon or plaited/strip-assembled hat-shape |
| downstream_use | `secondary_dataset`; `background_dataset` for downstream hat manufacture when route, material, market state, geography, technology, and year match |
| allowed_use | Factory-gate LCA modelling of downstream hats and headgear; supplier-specific product footprints; route-specific benchmarking where qualifiers align |
| excluded_use | Finished-hat production without added blocking/lining/trimming processes; substitution across materially different routes without sensitivity; consumer use or end-of-life claims; comparative public assertions without separate critical review |
| required_metadata | PCR id; CPC code; reference-flow UUIDs; route; fibre species or strip composition; product form; moisture; colour/finish state; excluded finishing confirmation; geography; technology; reference year; allocation; packaging; data sources |
| required_quality_disclosure | Primary-data share; temporal coverage; meter and scale calibration; recipe and material traceability; process balances; background dataset choices; unresolved UUID identities; assumptions and limitations |
| update_trigger | Material route or recipe change; new/removed wet process; equipment or energy-source change; direct-emission factor change; packaging redesign; supplier/background dataset change; or data older than the represented technology and market conditions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-ver3-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure and registry, adopted 2025. https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-13) | Exact CPC 28261 category identity and material-neutral coverage of plaited/assembled-strip hat-shapes |
| `eurlex-cn-headgear-2010` | `standard` | European Union, Combined Nomenclature headings 6501 and 6502, Official Journal notice 2010/C 63/05. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52010XC0310(03) (retrieved 2026-08-13) | Unfinished market-state boundary: neither blocked to shape nor with made brims; plaited/strip shapes neither lined nor trimmed |
| `historic-england-luton-hat-industry-2013` | `official_guidance` | Historic England, *The Hat Industry of Luton and its Buildings*, 2013. https://historicengland.org.uk/images-books/publications/hat-industry-luton-buildings/hat-industry-luton-and-buildings/ (retrieved 2026-08-13) | Independent process decomposition for wool- and fur-felt bodies, straw plait preparation, continuous-coil sewing, steam/rolling/pressing, dyeing, and the transition to final blocking |
| `us-epa-textile-mills-1982` | `official_guidance` | U.S. Environmental Protection Agency, *Development Document for Effluent Limitations Guidelines and Standards for the Textile Mills Point Source Category*, EPA 440/1-82/022, September 1982. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004LF3.TXT (retrieved 2026-08-13) | Felted-fabric process map; web formation; hardening/fulling; sodium carbonate, sulfuric acid, and hydrogen peroxide as separate conditional chemicals; rinsing, dyeing, finishing, and wastewater |
| `us-epa-textile-bmp-1996` | `official_guidance` | U.S. Environmental Protection Agency, *Best Management Practices for Pollution Prevention in the Textile Industry*, EPA/625/R-96/004, September 1996. https://www.epa.gov/sites/default/files/2020-04/documents/best-management-practices-textile-industry-manual.pdf (retrieved 2026-08-13) | Site water metering, record quality, direct measurement, process-specific waste characterization, and mass-balance controls |
| `eu-ef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13) | Functional-unit/system-boundary consistency, product-specific bill of materials, company-specific manufacturing data, completeness, allocation, data quality, and background-link disclosure |
