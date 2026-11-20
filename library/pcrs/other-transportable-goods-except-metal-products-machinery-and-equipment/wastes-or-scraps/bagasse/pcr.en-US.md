---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bagasse
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bagasse: raw wet industrial-material supply

## 1. Scope and Applicability

This PCR covers raw whole wet sugarcane bagasse supplied for a documented industrial lignocellulosic receiving process, ending before the receiver depiths or converts it. It begins with already separated extraction residue, not a purchased finished board or pulp. It retains the existing bagasse identity and narrows its applicability to untreated, undepithed, unglued, unpelletized and unbriquetted loose material. The wet material performs a feedstock-delivery function, not an assumed net-heat function.

The technical synthesis combines a real industrial procurement original, a mill-authored handling case and independent public methodology. It does not assert that these documents describe one order or factory. Native reference-flow family and its exact property/unit chain must be verified before quantitative use. Actual supplier quantities, assays, recipients and upstream burdens remain collection requirements, with no default factors.

UNSD CPC 3.0 explanatory notes (30 June 2025, p.199) define bagasse as sugarcane juice-extraction fibre and explicitly exclude it from 39149. The wet, undepithed industrial-supply scope below is an author-selected subset, not a classification-wide requirement (`unsd-cpc3-bagasse-2025`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bagasse |
| classification_refs | CPC 3.0:39141 Bagasse; narrower scope under the maintained classification decision |
| covered_products | Whole loose wet bagasse separated after sugarcane juice extraction and supplied as industrial lignocellulosic raw material before depithing |
| excluded_products | CPC 39149 beet pulp and other sugar wastes; cane leaves and tops; molasses and juice; isolated pith; dried or depithed bagasse; chemically treated furnish; pulp; bonded board; pellets and briquettes; boiler ash; generic biomass; fuel supply as reference function |
| representative_product | Undepithed untreated wet sugarcane bagasse |
| production_route | Separated mill-wet residue → collection/conveying → necessary foreign-matter removal → actual holding → first quality release → storage/loading/dispatch to declared industrial receiving gate |
| market_state | Untreated whole wet loose material for a demonstrated industrial recipient; exact site values and receiving specification are collected, not inferred from a paper or boiler example |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a conforming raw whole wet bagasse lot for the named industrial material receiver |
| How much | 1 kg net wet bagasse at first whole-lot quality release; subsequent delivery services are assigned to that original cohort |
| How well | Measured receiver-specific wet-state quality with moisture, dry matter, residual sugar, fibre/pith, foreign matter and storage condition; no universal limits invented |
| How long or cycle | One uniquely first-released lot within the declared complete campaign; storage and delivery dates retained separately |
| reference_flow_link | bagasse_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Untreated undepithed wet sugarcane bagasse |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sugarcane origin and extraction outlet; whole undepithed untreated state; industrial receiver and intended material use; receiver specification and acceptance evidence; first-release gate and cohort identity; net wet mass and tare method; moisture and dry-matter methods; residual-sugar method and result; fibre and pith method and basis; foreign-matter and decay condition; storage duration and actual water management; site and season; delivery endpoint and transport scope; supplier Product or Waste status; inherited burden and allocation boundary; packaging composition and return scheme |

Declare every required qualifier in the dataset metadata, reference comment, product/process description or equivalent accessible field. Missing qualifiers leave the dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_wet_mass | reference product | Mass | kg | Q is net wet mass of this period's first complete conforming release. Exclude packaging, opening already-released FG, internal moves and repeat releases. Include conforming closing FG once. Delivery, dry solids, sugar content and heat are not Q. |
| wet_dry_bridge | bagasse_in; bagasse_release | Mass | kg | Measure moisture with method and sampling basis. Dry matter = wet mass × (1 - measured wet-basis water fraction); retain a non-additive constituent ledger. Do not infer pith, residual sugar, density or yield. |
| raw_conversion | all inventory rows | Exchange-specific property | Original unit then declared row unit | Retain original raw units. Convert actual rate integrals, masses and measured densities first. An integrated volume is not multiplied by time again; density must match the material and state. Convert electricity kWh to MJ using 3.6 only. H is an observation window and is not another denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already separated whole wet bagasse at the named last-extraction outlet, before bagasse-specific collection and conditioning |
| starting_condition_role | Burden-bearing upstream co-product input; not a zero-burden free natural resource |
| product_classification_scope | The narrower raw wet industrial-material state within CPC 39141 only |
| recursive_input_rule | Resolve any externally purchased same-state bagasse once against its upstream inventory. Internal release and return movements carry cohort vectors; do not recreate sugar manufacture recursively |
| upstream_dataset_requirement | Require traceable cane cultivation and transport plus extraction/sugar-mill common-process responsibility through the supplied residue. Verify utility/material/service provider state and boundary before quantitative use |
| disclosure | Name supplier, receiving mill, season, exact gates, common outputs, internal boiler diversion, losses, stocks, attribution, transport and treatment. A foreground starting with cane would require another complete integrated inventory and applicability review |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_state | bagasse_supply | Retain the declared wet whole state through the terminal gate. Do not import downstream depithing, pulping, UF-board recipes, drying or fuel conversion. Industrial suitability is a documented recipient requirement. | mpm-bagasse-1999; tnpl-bagasse-2025 |
| boundary_complete | release; delivery | Include every actual collection, conveyance, cleaning, temporary storage, quality test, loading, return, failed batch, repair, idle/start-stop and cleanup operation through the receiving gate. Add each actual unlisted input, waste, species and medium as an individual row; an unapproved operation still has a physical inventory. | tnpl-bagasse-2025 |
| boundary_supplier | bagasse_in | The upstream sugar mill is not assumed dedicated to bagasse. Retain its original cane/juice/bagasse/water and other common-output ledgers and the explained division between exclusive and joint stages. Inherited allocation is not repeated at receipt. Missing supplier burden provenance blocks a complete quantitative dataset. | epa-sugar-1997; ilcd-allocation-2010 |
| boundary_internal | release; delivery | Cancel first-release transfers only at matched endpoints inside the combined release/delivery boundary. Boiler diversion remains a crossing of this foreground and cancels only in a wider supplying-mill ledger that includes its actual receiving endpoint. Do not count internal bagasse as purchased fuel, saleable Q or avoided electricity/coal/wood. Preserve gross crossings and true external transfers. | epa-sugar-1997 |
| boundary_evidence | delivery | TNPL is a procurement-control example, not proof of executed deliveries. Its title and unloading examples do not override its more specific cover restrictions. Verify the actual signed specification for each ancillary article. Do not transfer commercial shortage tolerances as physical loss factors. | tnpl-bagasse-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| release | Whole-bagasse collection and first release | required | All declared production cohorts | Supply preparation and quality release | bagasse_release |
| delivery | Released-stock and delivery service | required | Actual holding and dispatch through the declared receiving gate | Cohort service without new production | Original release Q; no new output denominator |

### Process: Whole-bagasse collection and first release (`release`)

#### Inputs

##### Product flows

###### Undepithed untreated wet sugarcane bagasse (`bagasse_in`)

Whole freshly separated extraction residue, including its measured pith and retained moisture. Carry the supplier burden vector once; whole wet mass and constituent assays are a non-additive bridge. No dry, depithed, chemically treated or fuel-product substitution. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Untreated undepithed wet sugarcane bagasse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_supplier.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_supplier
- Sources: epa-sugar-1997; mpm-bagasse-1999

###### Purchased electricity (`release_electricity`)

Before first release: meter conveyor, blower, weighing and other actual equipment separately. Preserve voltage, supplier, kWh and conversion to MJ; no assumed boiler or generation. Do not duplicate electricity embodied in a purchased service. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native identity is CN grid-average consumer-side alternating current below 1 kV. Use this UUID only for that actual supply; another voltage, geography, on-site generation or provider requires a compatible separately resolved identity. Its native reference property is named Net calorific value with reference unit MJ; here it carries electrical energy, not delivered thermal heat. Preserve the original kWh × 3.6 conversion and do not add grid losses or service electricity twice.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Collected exchange per reference flow; cp_activity_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_activity_release
- Sources:

###### Supplied liquid water (`release_water`)

Before first release: only actual cleaning, justified dust suppression or moisture management. Meter each supply and record source, composition and temperature; do not import the downstream depithed-bagasse slurry route. Extra water never becomes extra dry material or concealed yield. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Product is treated potable tap-water supply for households/industry, including at-plant/to-consumer use; source and local treatment vary. Bind only actual matching tap water, not raw river water, recycled effluent, steam or an assumed universal supply. Mass is the native reference. The secondary volume coefficient is not a measured density and is not used to replace the original state-specific density requirement.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_water_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_water_release
- Sources:

###### Mineral lubricating oil (`release_oil`)

Before first release: complete purchased lubricant formulation for the actual equipment, including additives. Track replacement, retained equipment stock and leaks. Do not purchase its assay constituents again; another formulation needs its own row. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_activity_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_activity_release
- Sources:

##### Elementary flows

###### Rainwater entering the bagasse holding boundary (`release_rain`)

Only actual precipitation entering the physical stock boundary; measure exposed area and precipitation/retention independently. Water running outside this boundary is not a bagasse input. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Rainwater entering the bagasse holding boundary
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_water_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_water_release
- Sources:

###### Oxygen in ambient air (`release_oxygen_in`)

Conditional actual gas crossing of an evidenced degradation, self-heating or incident ledger. Keep measured gross inlet/outlet and reaction consumption/formation independently; no default composition or reaction extent. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: neutral O2, CAS 7782-44-7; resource taken from ambient air, never an emission object used as an input. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Nitrogen in ambient air (`release_nitrogen_in`)

Conditional actual gas crossing of an evidenced degradation, self-heating or incident ledger. Keep measured gross inlet/outlet and reaction consumption/formation independently; no default composition or reaction extent. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: N2, CAS 7727-37-9; resource taken from ambient air, never an emission object used as an input. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Argon in ambient air (`release_argon_in`)

Conditional actual gas crossing of an evidenced degradation, self-heating or incident ledger. Keep measured gross inlet/outlet and reaction consumption/formation independently; no default composition or reaction extent. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: natural argon, CAS 7440-37-1; resource taken from ambient air, never an emission object used as an input. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Water vapour in ambient air (`release_humidity_in`)

Actual measured inlet humidity in the evidenced degradation or incident ledger; no second water purchase. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Water vapour in ambient air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

#### Outputs

##### Product flows

###### Undepithed untreated wet sugarcane bagasse (`bagasse_release`)

The sole reference output is the first whole-lot quality release for the declared industrial material recipient. This is the paired internal transfer into delivery, not an additional external sale. Closing released stock already contains this production; repeated acceptance, redelivery and old stock never create new production.


- Selected flow: Untreated undepithed wet sugarcane bagasse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_release
- Sources: tnpl-bagasse-2025

###### Undepithed untreated wet sugarcane bagasse (`release_boiler_transfer`)

Conditional diversion to the supplying mill boiler outside this foreground. Record the paired receiving endpoint, physical wet quantity and inherited burden disposition. This internal fuel use is neither external industrial supply Q nor a new purchased fuel; combustion is outside this foreground. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Untreated undepithed wet sugarcane bagasse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_stock_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_stock_release
- Sources: epa-sugar-1997

##### Waste flows

###### Discarded wet sugarcane bagasse (`release_bagasse_waste`)

Before first release: Actual failed, decayed, spilled or cleanup material sent for treatment. Keep lot, wet/dry quantities, composition and destination; collected waste is distinct from environmental particle escape. No default positive loss or zero burden. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Discarded wet sugarcane bagasse
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_release
- Sources:

###### Collected sugarcane bagasse dust (`release_dust_collected`)

Before first release: Captured solid residue with measured moisture and size/composition, weighed at the collection endpoint. Internal recovery cancels only as a matched transfer. Do not also record it as an air emission. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Collected sugarcane bagasse dust
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_release
- Sources:

###### Separated mineral grit (`release_mineral_grit`)

Before first release: Actual physically separated mineral contamination; determine mineral composition and disposal route. It is not pure silica merely because an ash assay reports SiO2. Add other physically separated contaminant streams independently. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Separated mineral grit
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_release
- Sources:

###### Spent mineral lubricating oil (`release_waste_oil`)

Before first release: Actual used oil leaving for treatment; retain contamination and receiving treatment. Separate spills reaching soil or water by actual chemical species and medium, rather than inventing a generic elementary oil loss. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Waste is petroleum-based or synthetic lubricating oil used and contaminated through use, at generation, with treatment unspecified. The narrower actual spent mineral lubricant fits only after use; retain its contamination and actual receiving treatment. Do not copy a recycling, combustion or disposal benefit from the flow identity.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_residue_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_release
- Sources:

###### Bagasse-yard cleaning wastewater (`release_effluent`)

Before first release: actual composite effluent transferred to a named treatment provider, including leachate only where it actually joins this stream. Record mass, water fraction, solids and analytes; COD, TOC and total nitrogen are reporting indicators, not invented molecule masses. Direct discharge requires separate species-and-medium rows. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Bagasse-yard cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_water_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_water_release
- Sources:

###### Separated iron foreign matter (`release_iron_foreign`)

Only the actual separated contaminant with measured mass, material identity, source and destination. Do not infer a metal grade or combine it with mineral grit or bagasse waste. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Separated iron foreign matter
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_release
- Sources:

###### Separated coir-rope foreign matter (`release_coir_foreign`)

Only the actual separated contaminant with measured mass, material identity, source and destination. Do not infer a metal grade or combine it with mineral grit or bagasse waste. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Separated coir-rope foreign matter
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_release
- Sources:

##### Elementary flows

###### Water vapour to outdoor air (`release_water_vapour`)

Before first release: Separate actual evaporation of free moisture, humid inlet air and chemically formed reaction water. Phase change is not reaction. Do not solve evaporation and degradation simultaneously from one residual. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Biogenic carbon dioxide to outdoor air (`release_co2_bio`)

Before first release: Only evidenced degradation, self-heating or an actual incident, with carbon source and species measurement or justified bounded calculation. No assumed positive emission, neutrality, avoided fuel or carbon-storage credit. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: biogenic CO2, CAS 124-38-9; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Biogenic methane to outdoor air (`release_ch4_bio`)

Before first release: Only an evidenced actual anaerobic or incident pathway, kept separate from fossil methane and carbon dioxide. Missing monitoring remains a gap, not a zero or a mandatory default emission. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Biogenic methane to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Bagasse particulate matter below 2.5 micrometres to air (`release_pm_fine`)

Before first release: Actual escaped heterogeneous bagasse particles in this non-overlapping aerodynamic fraction, after collection controls. Not a cellulose molecule or total-dust proxy. Unknown size distribution remains unresolved. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary family is actual particles in the PM2.5 fraction emitted to air, unspecified subcompartment. This card restricts that family to escaped bagasse particles; no molecular CAS or pure-carbon composition is asserted. Preserve the original mutually exclusive measured size bins, collection controls and actual source; another known outdoor subcompartment needs a matching identity.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Bagasse particulate matter from 2.5 to 10 micrometres to air (`release_pm_coarse`)

Before first release: Actual escaped particles in this interval only; never add nested PM10 to PM2.5. Keep bagasse particles and diesel soot origins distinct. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary family is actual particles in the PM2.5–PM10 fraction emitted to air, unspecified subcompartment. This card restricts that family to escaped bagasse particles; no molecular CAS or pure-carbon composition is asserted. Preserve the original mutually exclusive measured size bins, collection controls and actual source; another known outdoor subcompartment needs a matching identity.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Bagasse particulate matter above 10 micrometres to air (`release_pm_large`)

Before first release: Actual escaped coarse particles only. A measured total-particle result must be partitioned without overlap or retained as an unresolved indicator, not silently mapped here. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary family is actual particles in the greater than PM10 fraction emitted to air, unspecified subcompartment. This card restricts that family to escaped bagasse particles; no molecular CAS or pure-carbon composition is asserted. Preserve the original mutually exclusive measured size bins, collection controls and actual source; another known outdoor subcompartment needs a matching identity.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Oxygen to outdoor air (`release_oxygen_out`)

Conditional actual gas crossing of an evidenced degradation, self-heating or incident ledger. Keep measured gross inlet/outlet and reaction consumption/formation independently; no default composition or reaction extent. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: neutral O2, CAS 7782-44-7; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Nitrogen to outdoor air (`release_nitrogen_out`)

Conditional actual gas crossing of an evidenced degradation, self-heating or incident ledger. Keep measured gross inlet/outlet and reaction consumption/formation independently; no default composition or reaction extent. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: N2, CAS 7727-37-9; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

###### Argon to outdoor air (`release_argon_out`)

Conditional actual gas crossing of an evidenced degradation, self-heating or incident ledger. Keep measured gross inlet/outlet and reaction consumption/formation independently; no default composition or reaction extent. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: natural argon, CAS 7440-37-1; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_release
- Sources:

### Process: Released-stock and delivery service (`delivery`)

#### Inputs

##### Product flows

###### Undepithed untreated wet sugarcane bagasse (`released_in`)

Match bagasse_release at both endpoints by lot, wet mass, moisture, time and inherited burden vector. Opening released stock is separately carried by cohort and is not current Q. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Untreated undepithed wet sugarcane bagasse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_stock_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_stock_delivery
- Sources:

###### Undepithed untreated wet sugarcane bagasse (`bagasse_return`)

Actual returned previously delivered material retains its original release identity. Reverse the original delivery attribution and carry its historical burden once; only genuinely new handling/rework adds burden. A return is not a new purchase or new Q. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Untreated undepithed wet sugarcane bagasse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_stock_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_stock_delivery
- Sources:

###### Purchased electricity (`delivery_electricity`)

After first release: meter conveyor, blower, weighing and other actual equipment separately. Preserve voltage, supplier, kWh and conversion to MJ; no assumed boiler or generation. Do not duplicate electricity embodied in a purchased service. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native identity is CN grid-average consumer-side alternating current below 1 kV. Use this UUID only for that actual supply; another voltage, geography, on-site generation or provider requires a compatible separately resolved identity. Its native reference property is named Net calorific value with reference unit MJ; here it carries electrical energy, not delivered thermal heat. Preserve the original kWh × 3.6 conversion and do not add grid losses or service electricity twice.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- Amount rule: Collected exchange per reference flow; cp_activity_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_activity_delivery
- Sources:

###### Supplied liquid water (`delivery_water`)

After first release: only actual cleaning, justified dust suppression or moisture management. Meter each supply and record source, composition and temperature; do not import the downstream depithed-bagasse slurry route. Extra water never becomes extra dry material or concealed yield. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Product is treated potable tap-water supply for households/industry, including at-plant/to-consumer use; source and local treatment vary. Bind only actual matching tap water, not raw river water, recycled effluent, steam or an assumed universal supply. Mass is the native reference. The secondary volume coefficient is not a measured density and is not used to replace the original state-specific density requirement.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_water_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_water_delivery
- Sources:

###### Mineral lubricating oil (`delivery_oil`)

After first release: complete purchased lubricant formulation for the actual equipment, including additives. Track replacement, retained equipment stock and leaks. Do not purchase its assay constituents again; another formulation needs its own row. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_activity_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_activity_delivery
- Sources:

###### Diesel fuel (`diesel`)

Conditional fuel for an actually operated loader or vehicle within this foreground. Record whole delivered fuel blend, stock change and engine activity. A purchased freight leg carries its own fuel and emissions once; never add this fuel again for that same leg. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Product identifies diesel fuel by mass with grade, formulation, density, heating value, refinery route, geography and provider unspecified. Preserve the complete actual blend and original kg basis; this identity supplies no default heating value, density, engine mode or fuel factor.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_activity_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_activity_delivery
- Sources:

###### Bulk-bagasse road freight service (`freight`)

Only a separately supplied road-haul leg to the declared industrial receiving gate. Retain actual wet payload, distance, empty return, load/capacity constraint, loss and provider scope. Use one verified provider result or explicit foreground vehicle inventory, never both. Contract charge is not fuel quantity. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Road freight quantities use actual wet payload and distance. Record t*km with 1 t = 1000 kg; retain empty-return allocation and precise vehicle/provider boundaries. Verify the native service property/unit chain before binding an identity.

- Selected flow: freight transport
- Flow property / unit: mass*distance / t*km

- Amount rule: Collected exchange per reference flow; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_dispatch
- Sources: tnpl-bagasse-2025

###### Transport tarpaulin cover (`tarpaulin_in`)

Conditional: the complete supplied cover with actual textile/coating composition. Track genuine new purchase and external return received as distinct raw movement types; only new purchase receives new production burden. No automatic virgin purchase per reuse cycle. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Transport tarpaulin cover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Debarked wooden load-restraint pole (`wood_pole_in`)

Conditional: one debarked solid-wood pole with declared species and treatment. Track genuine new purchase and external return received as distinct raw movement types; only new purchase receives new production burden. No automatic virgin purchase per reuse cycle. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Debarked wooden load-restraint pole
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Jute transport cloth (`jute_cloth_in`)

Conditional: one supplied jute cloth with actual coating and accepted role. Track genuine new purchase and external return received as distinct raw movement types; only new purchase receives new production burden. No automatic virgin purchase per reuse cycle. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Jute transport cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Steel load-restraint wire (`steel_wire_in`)

Conditional: one supplied steel wire with actual grade and coating. Track genuine new purchase and external return received as distinct raw movement types; only new purchase receives new production burden. No automatic virgin purchase per reuse cycle. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Product is a flexible cylindrical steel wire with steel-production route and no fixed grade, coating, gauge, geography or provider. The single actual restraint wire must retain its declared grade/coating and whole purchased mass; no copper wire, wire mesh, reinforcing frame or assumed fine-wire diameter is substituted.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Jute load-restraint twine (`jute_twine_in`)

Conditional: one supplied jute twine with actual finish. Track genuine new purchase and external return received as distinct raw movement types; only new purchase receives new production burden. No automatic virgin purchase per reuse cycle. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Jute load-restraint twine
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

##### Elementary flows

###### Oxygen in ambient air (`oxygen_in`)

Conditional actual gas crossing of the directly operated engine or evidenced degradation/incident ledger. Record total inlet and outlet mass separately from reaction consumption/formation; unreacted carrier is a non-additive balance partition, not a new emission factor. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: neutral O2, CAS 7782-44-7; resource taken from ambient air, never an emission object used as an input. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Nitrogen in ambient air (`nitrogen_in`)

Conditional actual gas crossing of the directly operated engine or evidenced degradation/incident ledger. Record total inlet and outlet mass separately from reaction consumption/formation; unreacted carrier is a non-additive balance partition, not a new emission factor. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: N2, CAS 7727-37-9; resource taken from ambient air, never an emission object used as an input. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Argon in ambient air (`argon_in`)

Conditional actual gas crossing of the directly operated engine or evidenced degradation/incident ledger. Record total inlet and outlet mass separately from reaction consumption/formation; unreacted carrier is a non-additive balance partition, not a new emission factor. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: natural argon, CAS 7440-37-1; resource taken from ambient air, never an emission object used as an input. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Water vapour in ambient air (`humidity_in`)

Measured inlet humidity for a directly controlled engine or evidenced degradation water ledger; no second purchase of water. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Water vapour in ambient air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Rainwater entering the bagasse holding boundary (`delivery_rain`)

Only actual precipitation entering the physical stock boundary; measure exposed area and precipitation/retention independently. Water running outside this boundary is not a bagasse input. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Rainwater entering the bagasse holding boundary
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_water_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_water_delivery
- Sources:

#### Outputs

##### Product flows

###### Undepithed untreated wet sugarcane bagasse (`bagasse_dispatch`)

Gross physical dispatch to the declared industrial receiving gate before depithing or conversion, measured in the actual wet state. Separate current and historical cohorts, returns, transit losses and rejections. Dispatch is not a second reference output and is not Q. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Untreated undepithed wet sugarcane bagasse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_dispatch
- Sources: tnpl-bagasse-2025

###### Undepithed untreated wet sugarcane bagasse (`delivery_boiler_transfer`)

Conditional diversion to the supplying mill boiler outside this foreground. Record the paired receiving endpoint, physical wet quantity and inherited burden disposition. This internal fuel use is neither external industrial supply Q nor a new purchased fuel; combustion is outside this foreground. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Untreated undepithed wet sugarcane bagasse
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_stock_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_stock_delivery
- Sources: epa-sugar-1997

###### Transport tarpaulin cover (`tarpaulin_out`)

Gross article movements accompanying gross bagasse dispatch and external return-out are separate purpose-tagged entries, never a signed net purchase. Use actual item masses; no assumed item-to-kg conversion. Reusable return is not a co-product credit. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Transport tarpaulin cover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Debarked wooden load-restraint pole (`wood_pole_out`)

Gross article movements accompanying gross bagasse dispatch and external return-out are separate purpose-tagged entries, never a signed net purchase. Use actual item masses; no assumed item-to-kg conversion. Reusable return is not a co-product credit. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Debarked wooden load-restraint pole
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Jute transport cloth (`jute_cloth_out`)

Gross article movements accompanying gross bagasse dispatch and external return-out are separate purpose-tagged entries, never a signed net purchase. Use actual item masses; no assumed item-to-kg conversion. Reusable return is not a co-product credit. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.


- Selected flow: Jute transport cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Steel load-restraint wire (`steel_wire_out`)

Gross article movements accompanying gross bagasse dispatch and external return-out are separate purpose-tagged entries, never a signed net purchase. Use actual item masses; no assumed item-to-kg conversion. Reusable return is not a co-product credit. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Product is a flexible cylindrical steel wire with steel-production route and no fixed grade, coating, gauge, geography or provider. The single actual restraint wire must retain its declared grade/coating and whole purchased mass; no copper wire, wire mesh, reinforcing frame or assumed fine-wire diameter is substituted.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

###### Jute load-restraint twine (`jute_twine_out`)

Gross article movements accompanying gross bagasse dispatch and external return-out are separate purpose-tagged entries, never a signed net purchase. Use actual item masses; no assumed item-to-kg conversion. Reusable return is not a co-product credit. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Jute load-restraint twine
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources: tnpl-bagasse-2025

##### Waste flows

###### Discarded wet sugarcane bagasse (`delivery_bagasse_waste`)

After first release: Actual failed, decayed, spilled or cleanup material sent for treatment. Keep lot, wet/dry quantities, composition and destination; collected waste is distinct from environmental particle escape. No default positive loss or zero burden. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Discarded wet sugarcane bagasse
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_delivery
- Sources:

###### Collected sugarcane bagasse dust (`delivery_dust_collected`)

After first release: Captured solid residue with measured moisture and size/composition, weighed at the collection endpoint. Internal recovery cancels only as a matched transfer. Do not also record it as an air emission. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Collected sugarcane bagasse dust
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_delivery
- Sources:

###### Separated mineral grit (`delivery_mineral_grit`)

After first release: Actual physically separated mineral contamination; determine mineral composition and disposal route. It is not pure silica merely because an ash assay reports SiO2. Add other physically separated contaminant streams independently. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Separated mineral grit
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_delivery
- Sources:

###### Spent mineral lubricating oil (`delivery_waste_oil`)

After first release: Actual used oil leaving for treatment; retain contamination and receiving treatment. Separate spills reaching soil or water by actual chemical species and medium, rather than inventing a generic elementary oil loss. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Waste is petroleum-based or synthetic lubricating oil used and contaminated through use, at generation, with treatment unspecified. The narrower actual spent mineral lubricant fits only after use; retain its contamination and actual receiving treatment. Do not copy a recycling, combustion or disposal benefit from the flow identity.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_residue_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_delivery
- Sources:

###### Bagasse-yard cleaning wastewater (`delivery_effluent`)

After first release: actual composite effluent transferred to a named treatment provider, including leachate only where it actually joins this stream. Record mass, water fraction, solids and analytes; COD, TOC and total nitrogen are reporting indicators, not invented molecule masses. Direct discharge requires separate species-and-medium rows. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Bagasse-yard cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_water_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_water_delivery
- Sources:

###### Discarded transport tarpaulin cover (`tarpaulin_waste`)

Only the worn or discarded article with actual composition and treatment; retain repair additions independently. the complete supplied cover with actual textile/coating composition. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Discarded transport tarpaulin cover
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources:

###### Discarded debarked wooden load-restraint pole (`wood_pole_waste`)

Only the worn or discarded article with actual composition and treatment; retain repair additions independently. one debarked solid-wood pole with declared species and treatment. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Discarded debarked wooden load-restraint pole
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources:

###### Discarded jute transport cloth (`jute_cloth_waste`)

Only the worn or discarded article with actual composition and treatment; retain repair additions independently. one supplied jute cloth with actual coating and accepted role. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Discarded jute transport cloth
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources:

###### Discarded steel load-restraint wire (`steel_wire_waste`)

Only the worn or discarded article with actual composition and treatment; retain repair additions independently. one supplied steel wire with actual grade and coating. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Discarded steel load-restraint wire
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources:

###### Discarded jute load-restraint twine (`jute_twine_waste`)

Only the worn or discarded article with actual composition and treatment; retain repair additions independently. one supplied jute twine with actual finish. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Discarded jute load-restraint twine
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_pack
- Sources:

###### Separated iron foreign matter (`delivery_iron_foreign`)

Only the actual separated contaminant with measured mass, material identity, source and destination. Do not infer a metal grade or combine it with mineral grit or bagasse waste. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Separated iron foreign matter
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_delivery
- Sources:

###### Separated coir-rope foreign matter (`delivery_coir_foreign`)

Only the actual separated contaminant with measured mass, material identity, source and destination. Do not infer a metal grade or combine it with mineral grit or bagasse waste. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Separated coir-rope foreign matter
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_residue_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_residue_delivery
- Sources:

##### Elementary flows

###### Water vapour to outdoor air (`delivery_water_vapour`)

After first release: Separate actual evaporation of free moisture, humid inlet air and chemically formed reaction water. Phase change is not reaction. Do not solve evaporation and degradation simultaneously from one residual. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Biogenic carbon dioxide to outdoor air (`delivery_co2_bio`)

After first release: Only evidenced degradation, self-heating or an actual incident, with carbon source and species measurement or justified bounded calculation. No assumed positive emission, neutrality, avoided fuel or carbon-storage credit. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: biogenic CO2, CAS 124-38-9; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Biogenic methane to outdoor air (`delivery_ch4_bio`)

After first release: Only an evidenced actual anaerobic or incident pathway, kept separate from fossil methane and carbon dioxide. Missing monitoring remains a gap, not a zero or a mandatory default emission. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Biogenic methane to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Bagasse particulate matter below 2.5 micrometres to air (`delivery_pm_fine`)

After first release: Actual escaped heterogeneous bagasse particles in this non-overlapping aerodynamic fraction, after collection controls. Not a cellulose molecule or total-dust proxy. Unknown size distribution remains unresolved. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary family is actual particles in the PM2.5 fraction emitted to air, unspecified subcompartment. This card restricts that family to escaped bagasse particles; no molecular CAS or pure-carbon composition is asserted. Preserve the original mutually exclusive measured size bins, collection controls and actual source; another known outdoor subcompartment needs a matching identity.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Bagasse particulate matter from 2.5 to 10 micrometres to air (`delivery_pm_coarse`)

After first release: Actual escaped particles in this interval only; never add nested PM10 to PM2.5. Keep bagasse particles and diesel soot origins distinct. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary family is actual particles in the PM2.5–PM10 fraction emitted to air, unspecified subcompartment. This card restricts that family to escaped bagasse particles; no molecular CAS or pure-carbon composition is asserted. Preserve the original mutually exclusive measured size bins, collection controls and actual source; another known outdoor subcompartment needs a matching identity.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Bagasse particulate matter above 10 micrometres to air (`delivery_pm_large`)

After first release: Actual escaped coarse particles only. A measured total-particle result must be partitioned without overlap or retained as an unresolved indicator, not silently mapped here. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary family is actual particles in the greater than PM10 fraction emitted to air, unspecified subcompartment. This card restricts that family to escaped bagasse particles; no molecular CAS or pure-carbon composition is asserted. Preserve the original mutually exclusive measured size bins, collection controls and actual source; another known outdoor subcompartment needs a matching identity.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Oxygen to outdoor air (`oxygen_out`)

Conditional actual gas crossing of the directly operated engine or evidenced degradation/incident ledger. Record total inlet and outlet mass separately from reaction consumption/formation; unreacted carrier is a non-additive balance partition, not a new emission factor. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: neutral O2, CAS 7782-44-7; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Nitrogen to outdoor air (`nitrogen_out`)

Conditional actual gas crossing of the directly operated engine or evidenced degradation/incident ledger. Record total inlet and outlet mass separately from reaction consumption/formation; unreacted carrier is a non-additive balance partition, not a new emission factor. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: N2, CAS 7727-37-9; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Argon to outdoor air (`argon_out`)

Conditional actual gas crossing of the directly operated engine or evidenced degradation/incident ledger. Record total inlet and outlet mass separately from reaction consumption/formation; unreacted carrier is a non-additive balance partition, not a new emission factor. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: natural argon, CAS 7440-37-1; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Fossil carbon dioxide to air (`co2_fossil`)

Conditional directly operated combustion or evidenced incident, with no default emission: Fuel-origin carbon only, after measured non-CO2 carbon outputs and stocks; no biogenic substitution. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: fossil CO2, CAS 124-38-9; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Fossil methane to air (`ch4_fossil`)

Conditional directly operated combustion or evidenced incident, with no default emission: Actual fossil methane only; total hydrocarbons do not establish CH4 mass. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Fossil methane to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Carbon monoxide to air (`carbon_monoxide`)

Conditional directly operated combustion or evidenced incident, with no default emission: Actual CO mass with fuel or biomass origin partition; never use CO2 equivalents. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Nitrogen monoxide to air (`nitric_oxide`)

Conditional directly operated combustion or evidenced incident, with no default emission: Actual NO mass; NOx reported as NO2 equivalent is not this species mass. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Conditional directly operated combustion or evidenced incident, with no default emission: Actual NO2 mass with measured speciation; do not enter whole NOx alongside NO. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Nitrous oxide to air (`nitrous_oxide`)

Conditional directly operated combustion or evidenced incident, with no default emission: Actual N2O mass, separate from NO and NO2 and from CO2 equivalents. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: N2O, CAS 10024-97-2; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Sulfur dioxide to air (`sulfur_dioxide`)

Conditional directly operated combustion or evidenced incident, with no default emission: Actual SO2 mass; retain fuel sulfur and other sulfur outlets without assuming total conversion. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

Native Elementary identity: SO2, CAS 7446-09-5; emission to outdoor air, unspecified subcompartment; a known finer compartment needs a matching native identity. Preserve actual gas/species mass and origin; synonym lists containing liquid, ionic, compressed or isotope labels do not authorize those states, medical grades, radioactive Ar-41, other oxides or a generic reporting equivalent. No default ambient composition, reaction extent or positive emission is supplied.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

###### Diesel soot particles to air (`soot`)

Conditional directly operated combustion or evidenced incident, with no default emission: Actual combustion particulate stream with measured size and composition. It is not bagasse dust or a pure elemental-carbon flow by assumption; resolve size-specific native identities before use. Report this card’s gross physical V and separate burden A using the single normalization rule normalize_exchange in §8; each account is divided once.

- Selected flow: Diesel soot particles to air
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow; cp_air_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_air_delivery
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scenario | supplier; release; delivery | Declare an attributional case in which allocation remains necessary. First separate exclusive operations by real or virtual subdivision; then identify determining physical causality for each remaining exchange. Document why each cannot be assigned directly. | ilcd-allocation-2010 |
| allocation_residual | common_process | Only genuinely unresolved common burdens use relative market value at the same common-process exit, actual state and period. Correct prices for later conditioning, packaging and freight. Document status, quantities, prices and sensitivity; no arbitrary physical/economic choice or fixed share. | ilcd-allocation-2010 |
| allocation_status | bagasse_in; residues | Low price, biological origin, residue terminology and the CPC waste parent do not establish zero upstream burden. Require actual recipient use, specification, legal/market status and supplier responsibility. Distinguish valuable Product from discarded Waste; uncertain status requires review. | ilcd-allocation-2010; epa-sugar-1997 |
| allocation_ledgers | all inventory rows | Shares affect environmental burden A only. Gross physical vector V, product/waste/emission masses, water changes, internal transfers and historical stock ownership remain unscaled. No automatic substitution, recycling or carbon credit. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols collect gross physical V, separate burden A and stock vectors without division by Q. Their aggregation field states the final reporting basis only and refers to normalize_exchange; it does not perform another division. Historical batches retain their original release Q, inherited burdens and subsequent service records. A Q0 observation window still records every load and unresolved responsibility.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | release | bagasse_release | Measured primary records | Lot identity; first-release timestamp; measured gross and tare masses; net wet mass; conformity results; opening and closing unreleased/WIP and released FG; repeat-release flag | Calibrated net weighing and receiver-specification sampling; reconcile unique whole-lot first release with stock status. Keep moisture, residual sugar, fibre/pith, foreign matter and decay methods/results with uncertainty. | kg | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_supplier | release | bagasse_in | Measured primary records | Supplier; extraction outlet; receipt wet mass; moisture; whole-state declaration; actual recipient; Product/Waste status; original burden vector; joint-output ledgers; allocation boundary and period | Match supplier primary inventory and receipt measurement. Trace cane cultivation/transport and extraction responsibility once; reject unsupported zero burden or an already allocated input being allocated again. | kg | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_stock_release | release | bagasse cohorts and internal transfers | Measured primary records | Cohort; origin period; opening/closing raw/WIP/FG wet and dry mass; per-flow burden vector; quality status; paired endpoints; actual transfers; dispatch returns and original delivery reversal; new rework | Weigh and sample each stock class and reconcile transaction chronology. Carry historical vectors separately from physical stock. No retrospective creation of production on sale or reinspection. | kg | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_stock_delivery | delivery | bagasse cohorts and internal transfers | Measured primary records | Cohort; origin period; opening/closing raw/WIP/FG wet and dry mass; per-flow burden vector; quality status; paired endpoints; actual transfers; dispatch returns and original delivery reversal; new rework | Weigh and sample each stock class and reconcile transaction chronology. Carry historical vectors separately from physical stock. No retrospective creation of production on sale or reinspection. | kg | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_activity_release | release | atomic utilities and consumables | Measured primary records | Stage; cohort; supplier; actual formulation; meter readings; original units; voltage; fuel/oil opening plus purchase plus return versus closing; operating modes; repair additions; uncertainty | Calibrated stage meters and purchase/stock/activity reconciliation. Preserve whole formulated purchases once; assays and carrier water are component subledgers. Collect idle, trial, failure, startup/shutdown and cleanup loads without pre-dividing. | kg; kWh; MJ; original volume | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_activity_delivery | delivery | atomic utilities and consumables | Measured primary records | Stage; cohort; supplier; actual formulation; meter readings; original units; voltage; fuel/oil opening plus purchase plus return versus closing; operating modes; repair additions; uncertainty | Calibrated stage meters and purchase/stock/activity reconciliation. Preserve whole formulated purchases once; assays and carrier water are component subledgers. Collect idle, trial, failure, startup/shutdown and cleanup loads without pre-dividing. | kg; kWh; MJ; original volume | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_water_release | release | supplied water and effluent | Measured primary records | Stage; stream; original volume or mass; measured material-specific density and temperature; bagasse water; liquid/sorbed water; humidity; evaporation; leachate; rainfall; effluent solids; samples; water formation/consumption evidence | Meter and sample actual external supplies and discharges, precipitation and relevant stock water. Separate environmental rain input in a new specific row when it enters; no assumed sprinkler or default wastewater. Retain independent uncertainty for evaporation and degradation. | kg; original volume | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_water_delivery | delivery | supplied water and effluent | Measured primary records | Stage; stream; original volume or mass; measured material-specific density and temperature; bagasse water; liquid/sorbed water; humidity; evaporation; leachate; rainfall; effluent solids; samples; water formation/consumption evidence | Meter and sample actual external supplies and discharges, precipitation and relevant stock water. Separate environmental rain input in a new specific row when it enters; no assumed sprinkler or default wastewater. Retain independent uncertainty for evaporation and degradation. | kg; original volume | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_residue_release | release | individual collected wastes | Measured primary records | Stage; batch; wet mass; dry fraction; composition; capture point; quality status; recipient; treatment or evidenced useful use; return/recycle links | Weigh each actual discharged bin and retain transfer/treatment receipts. Separate individual foreign matter, bagasse waste, captured dust and oil. Direct environmental release needs its own species/medium entry. | kg | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_residue_delivery | delivery | individual collected wastes | Measured primary records | Stage; batch; wet mass; dry fraction; composition; capture point; quality status; recipient; treatment or evidenced useful use; return/recycle links | Weigh each actual discharged bin and retain transfer/treatment receipts. Separate individual foreign matter, bagasse waste, captured dust and oil. Direct environmental release needs its own species/medium entry. | kg | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_air_release | release | individual gas and particle exchanges | Measured primary records | Stage; actual mode; gas species; carbon origin; medium; inlet/outlet flow; integrated volume or flow rate; sampling time; T/P; wet/dry gas basis; concentration; particle bins; controls; reaction evidence | Matched testing and source logs, including incidents and controls. Use compatible concentration × integrated volume, or integrate an actual rate. Resolve molecular species, carbon origin and non-overlapping particle fractions; no default emissions from the residue name. | kg; original gas units | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_air_delivery | delivery | individual gas and particle exchanges | Measured primary records | Stage; actual mode; gas species; carbon origin; medium; inlet/outlet flow; integrated volume or flow rate; sampling time; T/P; wet/dry gas basis; concentration; particle bins; controls; reaction evidence | Matched testing and source logs, including incidents and controls. Use compatible concentration × integrated volume, or integrate an actual rate. Resolve molecular species, carbon origin and non-overlapping particle fractions; no default emissions from the residue name. | kg; original gas units | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_pack | delivery | each separate transport article | Measured primary records | Article identity and composition; ownership; item mass; opening empty/attached-to-WIP/FG/reusable stocks; new purchases; external returns received; closing classes; gross attached shipment; external returns out; waste; internal reuse | Count and weigh representative actual articles with configuration scope and uncertainty. For each type reconcile opening + purchases + external returns received = closing + gross shipment + returns out + waste; cancel paired internal reuse. No article mass enters bagasse Q or becomes an automatic co-product. | kg; item | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |
| cp_dispatch | delivery | bagasse dispatch and freight | Measured primary records | Cohort; original Q; gross/tare and actual wet dispatch; receiving mass/moisture; distance; empty return; provider boundary; truck payload and volume; returns/rejections; transit loss; historical burden | Match calibrated origin/destination weighing, consignment, receipt and actual quality disposition. Separate physical moisture change from commercial payment weight. Retain transport evidence and disaggregate provider versus directly controlled operation. | kg; km; t*km | Each lot/movement and synchronized meter/stock close | Same complete declared campaign; preserve origin periods | Named supply and receiving gates; stage/cohort scope | per reference flow | Calibration; lot traceability; original records; uncertainty; absence evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | Physical exchange x = V / Q and environmental result e = A / Q are separate outputs of this one rule. V is the cohort gross physical numerator after original-unit conversion, never multiplied by burden shares. A is its independently attributed environmental-burden vector after upstream/stock responsibility and justified allocation. Each account divides its raw numerator once; neither output is fed back as a numerator. For historical delivery services use the original cohort Q, not current-period production. | V; A; Q; cp_release; cp_stock_release; cp_stock_delivery | x physical; e environmental | ilcd-allocation-2010 |
| release_quantity | bagasse_release | Q = sum of uniquely first-released conforming net wet lot masses in the declared period; include closing conforming FG once and exclude opening released FG, repeat release and internal movement. Q=0 retains all actual loads and stock responsibility without a unit result. | cp_release; cp_stock_release; cp_stock_delivery | Q | tnpl-bagasse-2025 |
| gross_physical | release; delivery | For each stage and the combined boundary retain gross V: opening stock + actual external inputs = closing stock + actual external outputs + explicit residual. Keep whole wet material as the main account, with non-additive dry matter/water/C/H/N/S/ash bridges as relevant. Internal Q cancels only at matched endpoints; do not add closing FG again as production. No allocation share scales V. | cp_supplier; cp_stock_release; cp_stock_delivery; cp_water_release; cp_water_delivery; cp_air_release; cp_air_delivery; cp_residue_release; cp_residue_delivery | Unallocated physical reconciliation |  |
| water_species | release; delivery | For molecular H2O retain opening + input + evidenced formation = closing + output + evidenced consumption + residual. Separate free/sorbed water, inlet humidity, evaporation and reaction water. Independently reconcile total physical mass and relevant elements; one residual cannot identify two unknowns. Unverified pathways or extent remain unknown. | cp_water_release; cp_water_delivery; cp_air_release; cp_air_delivery; cp_stock_release; cp_stock_delivery | Molecular-water and element ledgers |  |
| burden_cohorts | release; delivery | A carries upstream and opening-stock per-flow vectors once, plus genuine new F, minus only verified same-side duplicate X, with closing-stock carryout and actual coproduct responsibility traced. X never removes new repair water/material. Post-release storage, loading, dispatch, returns and rework use a separate cohort service ledger normalized only against the original release Q by normalize_exchange; they do not create new production or divide by time. | cp_stock_release; cp_stock_delivery; cp_activity_release; cp_activity_delivery; cp_dispatch; cp_pack; cp_release | Attributed raw A and stock carryover vectors | ilcd-allocation-2010 |
| package_balance | delivery | For each separate article apply the full cp_pack equality by ownership, stock state and movement purpose. Attached articles follow gross physical dispatch including rejected/returned loads; article production burden follows genuine purchase and cohort service attribution once. | cp_pack; cp_dispatch; cp_stock_release; cp_stock_delivery | Separate physical article and burden ledgers |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Native flow identity and provider compatibility are separate. Before adopting a UUID require actual query membership, complete public state100 direct object, all names/comments/CAS/route/form/state/geography/media/type/properties, and the exact property-version → unitgroup-version → reference-unit chain. A near name or an MJ label is insufficient. | Supplier/state records and independent identity review |
| dq_coverage | release; delivery | Use a complete declared crushing campaign with dates and all modes; prefer a full representative season/year. Disclose shortened coverage, missing quantities and supplier gaps. Ordinary future site measurements do not fabricate an identity, and an unknown core identity does not become approved through a finite check. | cp_release; cp_activity_release; cp_activity_delivery; cp_stock_release; cp_stock_delivery |
| dq_trace | all inventory rows | Retain original units, calibration, sample representativeness, detection limits, uncertainty and raw stock/burden vectors. Zero requires evidence of absence; missing values stay unknown. Every actual unlisted flow is added atomically. | cp_supplier; cp_water_release; cp_water_delivery; cp_air_release; cp_air_delivery; cp_residue_release; cp_residue_delivery |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | bagasse_release | Require the same wet whole-bagasse state and first-release Q in both languages, unique row link, all qualifiers and industrial receiving use. Unresolved reference identity and exact unit chain prevent complete quantitative use. | tnpl-bagasse-2025; mpm-bagasse-1999 |
| validate_physical | release; delivery | Require complete unallocated stage and combined physical ledgers, independent water/element evidence and explained residuals; retain failures, incidents, Q0, WIP/FG, stocks and historical vectors. Do not use environmental burden fractions to close mass. |  |
| validate_normalization | all inventory rows | Collection protocols contain unnormalized raw totals. Amount cards reference normalize_exchange once; its V/Q and A/Q belong to distinct physical and environmental accounts. Aggregation and downstream calculations must not divide the normalized result by Q or H again. |  |
| validate_background | bagasse_in; freight | Verify supplier status, responsibility and route before quantitative linking; do not allocate the sugar mill twice or double count the same transport leg. No default fuel export, avoided product or credit. | ilcd-allocation-2010; epa-sugar-1997 |
| validate_conditional | all inventory rows | No conditional card prescribes a positive amount or permits deletion of an actual occurrence. Document true absence; unresolved measurements remain gaps. Species, size bins, packaging, returned loads and treatment remain atomic and traceable. | tnpl-bagasse-2025 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input at a declared industrial lignocellulosic receiving gate before depithing/conversion, after dataset applicability review |
| allowed_use | Only the declared untreated undepithed whole wet industrial-material state and measured wet quantity |
| excluded_use | Fuel functionality; net heat MJ; dry mass by assumption; pulp or board m3; zero-burden waste; all sugar wastes; automatic substitution credits |
| required_metadata | All reference qualifiers; original Q and cohort service link; supplier burden vector; full physical/stock/article ledgers; route-specific actual exchanges and provider compatibility |
| required_quality_disclosure | Source scope and period; scientific review state; actual identity/measurement gaps; unknown emissions and stock burdens; allocation sensitivity; coverage limitations |
| update_trigger | Changed extraction/pretreatment/state, receiver specification, supply status, allocation, utilities, storage, packaging, transport or gate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-bagasse-2025 | official_guidance | UNSD CPC Version 3.0, explanatory notes 30 June 2025, p.199, subclasses 39141 and 39149; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39141 | Sugarcane extraction-fibre identity and neighbouring sugar-waste exclusion only; no moisture, grade, allocation or industrial route prescribed. |
| tnpl-bagasse-2025 | official_guidance | Tamil Nadu Newsprint and Papers Limited, Tender 252613004185, 12 September 2025, pp.1,4,6–8,10–15; https://tnpl.com/wp-content/uploads/2025/09/252613004185.pdf | Primary industrial procurement conditions for undepithed loose bagasse, rejection, weighing and transport-article controls. A tender is not evidence of executed delivery; no default composition, losses or loading rates. |
| mpm-bagasse-1999 | literature | Hadli M.S., Bagasse Utilisation For Pulp Making in MPM, IPPTA Vol.11 No.2, June 1999, printed pp.5–8 and final flowsheet; https://ippta.co/wp-content/uploads/2021/01/IPPTA-112-5-9-Bagasse-Utilisation-for.pdf | Mill-authored Karnataka industrial case: fresh whole wet transfer before moist depithing; separate pith, depithed/slurry and pulping states. Table 1 and flowsheet are not transferable composition/yield/energy defaults. |
| epa-sugar-1997 | official_guidance | US EPA, AP-42 Section 9.10.1.1 Sugarcane Processing, June 1997, §§9.10.1.1.1–2 and Figure 9.10.1.1-1, pp.1–3; https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1a.pdf | Qualitative sugar-mill extraction/common-output topology and potential material uses. No bagasse-specific allocation, current factory inventory or boiler emission factor adopted. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA — Detailed Guidance, first edition March 2010, §7.9.2–3, printed pp.255–268 (PDF pp.275–288); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional cases requiring allocation: subdivision, exchange-specific determining physical causality, then residual common-gate market value. Not sugar-mill engineering evidence, a fixed allocation factor or full ILCD conformity claim. |
