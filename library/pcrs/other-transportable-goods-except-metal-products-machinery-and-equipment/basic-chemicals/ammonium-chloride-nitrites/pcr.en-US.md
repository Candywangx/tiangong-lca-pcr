---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-chloride-nitrites
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Additive-free crystalline ammonium chloride by aqueous direct neutralisation

## 1. Scope and Applicability

This PCR covers additive-free crystalline NH4Cl made by reacting purchased anhydrous liquid ammonia (including on-site vaporisation) with purchased aqueous hydrochloric acid in recycled aqueous NH4Cl liquor, followed by concentration, cooling crystallisation, filtration, indirect drying, screening and actual plant-gate bulk delivery or moisture-proof sack filling. One integrated foreground unit retains separate stage measurements and full internal loop ledgers. The historical route description is in `unido-nh4cl-study`, VI.A.1.d, printed P17; marketed untreated crystals are corroborated by `basf-nh4cl-grades`. Neither source establishes a universal grade, yield, recipe, energy intensity or emission quantity.

Exclude all nitrites, other ammonium salts, ammonia-solution manufacture, dry fertilizer blending, soda-ash/Hou co-production, sulfate/salt exchange, recovered glycine/tungsten waste liquor, gas-phase sublimation and intentional crystallisation/anti-caking additives. Use labels alone do not create separate identities. CPC3.0 34653 is a mixed category; only this subset is proposed as narrower. The broad native manufactured-product reference below contains no contrary route, form or geography restriction; use is explicitly NH4Cl CAS12125-02-9, not a nitrite or chemical mixture.

The represented configuration uses external steam, water-only scrubbing, indirect air cooling and off-site aqueous-waste treatment. Actual combustion, refrigeration, wet cooling, chemical cleaning, additives, extra package components or direct water discharge requires evidenced atomic extensions before dataset completion. Absence requires evidence; blank UUIDs and conditional rows never mean zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-chloride-nitrites |
| classification_refs | CPC 3.0 34653; narrower |
| covered_products | Additive-free crystalline NH4Cl, actual assay and residual moisture |
| excluded_products | Nitrites; other ammonium salts; formulated fertilizer; soda/exchange/recovery/sublimation routes; additive-treated crystals |
| representative_product | Crystalline ammonium chloride, NH4Cl, CAS12125-02-9 |
| production_route | Purchased NH3/aqueous HCl direct neutralisation, concentration, cooling crystallisation, filtration, indirect drying and delivery preparation |
| market_state | Accepted crystalline solid as supplied, bulk or actual moisture-proof packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply crystalline ammonium chloride as a chemical input |
| How much | 1 kg net accepted supplied product, excluding packaging |
| How well | Declare NH4Cl assay, moisture, impurities, acidity, particle form/size and actual acceptance specification; no dry-active or nutrient-only substitution |
| How long or cycle | Plant-gate delivery in the complete declared period; no lifetime or agronomic equivalence |
| reference_flow_link | nh4cl_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ammonium chloride, nitrites `d0574e16-32aa-40cc-a59a-b9aaceab62e7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | NH4Cl CAS12125-02-9; direct NH3/aqueous-HCl route; additive-free status; net as-supplied mass; assay and moisture methods; impurities/acidity; crystal size; bulk/pack design; site and period; acceptance and unique lot IDs; feed concentration; utilities and treatment interface |

Every qualifier must be declared in the actual data package. Identity does not prove provider/background quantity compatibility or supply a quantitative default.

## 4. Measurement and Unit Rules

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net as-supplied accepted crystal mass; moisture and NH4Cl assay remain separate subledgers. Unique positive Q must reconcile accepted production, stocks, dispatch and returns; never replace Q with dry NH4Cl or N mass. |
| solution_mass | feed_hcl | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole purchased solution is the procurement exchange; measured fraction times wet mass yields active HCl, with carrier water and impurities as subledgers, not duplicate purchases. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve native CN 1–35kV consumption mix to user; convert kWh to MJ using verified 3.6 MJ/kWh once. Native NCV label does not mean fuel combustion. |
| steam_basis | steam_import | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Steam mass is not delivered heat. Retain absolute/gauge pressure, T, dryness, imported/returned mass, enthalpy method and supplier convention; reconcile net enthalpy without duplicate steam/heat burdens. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased liquid anhydrous NH3, aqueous HCl and utilities received at works; include vaporisation and complete downstream preparation |
| starting_condition_role | foreground_collection_start |
| product_classification_scope | Only direct-route additive-free crystalline NH4Cl subset of CPC3.0 34653 |
| recursive_input_rule | Own recycled mother liquor, crystals and captured dust stay in balanced internal ledgers, not repeated purchases. Purchased NH4Cl seeds/rework require provenance, inherited burdens and added atomic rows. |
| upstream_dataset_requirement | Compatible delivered feeds, de-ionised water, actual electricity, steam and packaging, transport and off-site treatment; verify each provider reference basis |
| disclosure | Site, period, SKU/route, feeds/state/concentration, stocks/WIP, recycling, controls, utilities, transport, infrastructure, treatment and cut-offs |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | nh4cl_manufacture | Include reception/vaporisation, reaction, concentration, cooling, filtration, drying, screening, dust/water scrubbing, storage, packing and loadout with stage meters and failed/zero-output/start-stop operations. Paired internal transfers have identical quantities. | unido-nh4cl-study; jrc-cww-2016 |
| boundary_interfaces | all inventory rows | Trace all real inputs and outputs. Water-only scrubber solute returned internally stays in the loop; external purge/condensate is whole wet waste, not also an elementary emission. Extend actual treatment/discharges and unrepresented exchanges before completion. | jrc-cww-2016 |
| boundary_upstream | nh4cl_manufacture | No burden-free feeds, water, energy, transport, packaging or infrastructure is assumed. Retain equipment/service-life evidence, screening and explicit cut-offs; add included transports/assets individually in the data package. | jrc-ilcd-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| nh4cl_manufacture | Integrated direct-neutralisation crystalline NH4Cl manufacture | required | Actual declared route/state; no intentionally added treatment agent | foreground_manufacture | nh4cl_product |

### Process: Integrated NH4Cl manufacture (`nh4cl_manufacture`)

#### Inputs

##### Product flows

###### Ammonia, anhydrous, liquid (`feed_ammonia`)

Measure received/issued anhydrous liquid ammonia, vaporisation and residual liquid; include upstream supply and vaporiser utilities.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Hydrochloric Acid (`feed_hcl`)

Measure the entire purchased aqueous acid solution; assay HCl and carrier water as composition subledgers, not additional purchases.

- Selected flow: Hydrochloric Acid `a118a682-1600-4855-b959-c78777b75ee8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### de-ionised water (`water_makeup`)

Meter actual externally supplied de-ionised make-up, washing and water-only scrubbing water; exclude recirculated liquid from purchases.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Alternating current (`electricity`)

CN, 1–35 kV grid-average consumption mix to user only. Use measured whole-unit and stage kWh; different geography, voltage or contractual supply requires a compatible identity and provider.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_energy
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Steam, in chemical industry (`steam_import`)

Measure supplied steam mass and pressure, temperature, dryness and vaporiser/heater/dryer duties; native record sets no pressure or location. Verify supplier enthalpy/reference convention separately; do not assume 11.0 or 0.45 MPaG.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_energy
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Woven polypropylene chemical-product sack (`pp_sack`)

Weigh empty woven polypropylene sacks and count actual issues, returns and rejects; use the real closure design as separate atomic additions. No seed-bag consumption default.

- Selected flow: Woven polypropylene chemical-product sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Polyethylene film (`pe_liner`)

Measure polyethylene liner film only, including issued, shipped and rejected film. Name/CAS/comment support PE film; native CPC29220 is inconsistent and needs source clarification.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Ammonium chloride, nitrites (`nh4cl_product`)

1 kg accepted additive-free crystalline NH4Cl, net as supplied including measured residual moisture and impurities, excluding packaging. Broad native finished-product category is restricted here to this NH4Cl subset; never nitrite or a mixture.

- Selected flow: Ammonium chloride, nitrites `d0574e16-32aa-40cc-a59a-b9aaceab62e7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_product
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Woven polypropylene chemical-product sack (`delivered_pp`)

Retain actual polypropylene sacks leaving with product in the physical ledger; packaging has no co-function allocation or second chemical reference output.

- Selected flow: Woven polypropylene chemical-product sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Polyethylene film (`delivered_pe`)

Retain actual shipped polyethylene liner mass separately from net NH4Cl; it is embodied packaging, not an independently credited co-product.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Returned clean heating-steam condensate (`condensate_return`)

Measure exported clean heating-steam condensate only; document receiving utility and matched heat/mass convention. Internally reused condensate is not external output.

- Selected flow: Returned clean heating-steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_energy
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

##### Waste flows

###### Aqueous ammonium-chloride mother-liquor purge (`mother_purge`)

Weigh total aqueous NH4Cl mother-liquor purge to off-site treatment, with dissolved salt, acidity, ammonia, impurities and receiver; no pure salt identity for the wet mixture.

- Selected flow: Aqueous ammonium-chloride mother-liquor purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Aqueous ammonium-chloride cleaning effluent (`cleaning_effluent`)

Measure contained aqueous NH4Cl cleaning effluent including solids; no direct receiving-water discharge is assumed.

- Selected flow: Aqueous ammonium-chloride cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Ammonium-chloride-contaminated process condensate (`process_condensate`)

Measure contaminated condensate from concentration separately from clean heating-steam return; analyse entrained NH4Cl, NH3 and HCl; retain internal reuse and external treatment distinctly.

- Selected flow: Ammonium-chloride-contaminated process condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Rejected ammonium-chloride crystals (`rejected_crystals`)

Weigh discarded off-spec NH4Cl crystals and moisture; internal redissolution is rework, not waste or accepted output. Do not adopt a chemical-treatment or soda-byproduct-specific waste identity for untreated direct-route rejects.

- Selected flow: Rejected ammonium-chloride crystals
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Collected ammonium-chloride-rich dust (`collected_dust`)

Measure captured NH4Cl-rich dust actually sent off site; internal return stays in the loop ledger and never counts as atmospheric release.

- Selected flow: Collected ammonium-chloride-rich dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Salt-contaminated polypropylene sack waste (`waste_pp`)

Measure untreated salt-contaminated polypropylene sack waste and actual receiver; no assumed mechanical recycling or avoided-production credit.

- Selected flow: Salt-contaminated polypropylene sack waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Salt-contaminated polyethylene liner waste (`waste_pe`)

Measure untreated salt-contaminated polyethylene liner waste and receiver; cleaned recycling-plant identity is not this waste state.

- Selected flow: Salt-contaminated polyethylene liner waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

##### Elementary flows

###### ammonia (`air_nh3`)

Measure actual unreacted NH3 species released after controls, including start/stop and diffuse sources; ammonia-N results need explicit N-to-NH3 conversion. Air, unspecified.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### hydrogen chloride (`air_hcl`)

Measure actual gaseous HCl after controls; distinguish salt aerosol and chloride-in-liquid. Air, unspecified; not chlorine gas.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### particles (PM2.5) (`air_pm25`)

Dry escaped particles in PM2.5 bin only, after actual dust controls; measure composition for the N/Cl balance. Do not add cumulative PM10 or captured dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### particles (PM2.5 - PM10) (`air_pm10`)

Dry escaped particles between PM2.5 and PM10 only; use disjoint measured size cuts, not an assumed size fraction.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### particles (> PM10) (`air_pmover10`)

Dry escaped particles larger than PM10 only; include dryer, screening, storage and filling sources where present.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### Particulate matter, particle size unspecified (`air_pm_unsized`)

Unspecified-size dry particle parcels only when size is unmeasured; never repeat a parcel already represented by the three size bins. Retain size uncertainty.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

###### water vapour (`air_water`)

Measure net water vapour actually released, excluding water condensed or recycled; separately identify any real liquid drift before dataset completion.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured complete matched-period amount after raw unit conversion, divided by unique accepted Q once; retain failed/zero-output operations and opening/closing carried burdens.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `unido-nh4cl-study`; `jrc-cww-2016`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single | nh4cl_manufacture | One chemical product is defined; directly assign separable operations/utilities and packing. Internal liquor/dust/rework and rejected crystals are not co-products; shipped packaging has physical mass but no independent co-function. | jrc-ilcd-2010 |
| allocation_shared | nh4cl_manufacture | Subdivide measured exclusive activities first; residual shared burdens use demonstrated determining physical causality. If not demonstrable, use process-gate market-value allocation with matched quantities/prices and sensitivity. No default share or waste credit. | jrc-ilcd-2010 |
| allocation_ledgers | nh4cl_manufacture | Preserve full unallocated physical mass/element/water/stock ledgers separately from environmental burden allocation. Never multiply physical product, waste, emission or internal transfer by allocation factors. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols belong to nh4cl_manufacture and retain complete same-route/state/product raw period records, including failed/zero-output/start-stop runs, returns and rework. Reconcile opening/closing WIP and finished-stock quantities and carried burdens. Determine unique positive Q from accepted production plus stock/dispatch/return reconciliation; do not count production and dispatch twice or reacceptance twice. Match inherited and closing-stock burdens to the correct output cohort. Never delete failed-run loads by selecting successful lots. Q=0 retains raw records but gives no normalized result.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | nh4cl_manufacture | Product acceptance and Q | foreground_record | lot; SKU; net crystal kg; assay; moisture; acidity; impurities; size; rejection; dispatch; returns; opening/closing accepted stock/WIP; inherited burdens; Q | Calibrated net weighing excluding packaging and representative sampling; reconcile unique accepted lots and all stock/dispatch/rework records. | kg | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |
| cp_materials | nh4cl_manufacture | Feed and loop chemistry | foreground_record | supplier; whole solution kg; NH3/HCl assays; water; impurities; liquid NH3; stage charges; opening/closing feed/mother liquor; returns; reaction evidence | Calibrated weighing/meters and actual assays; retain whole procurement and component subledgers, density/T and paired internal transfers. | kg | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |
| cp_water | nh4cl_manufacture | Water and phase balance | foreground_record | source; meter volume; density/T; acid carrier water; wash/scrub loop; condensate; humidity; evaporation; moisture; opening/closing liquid | Independently measure water/condensate/air-moisture routes; convert integrated volume with measured density once; distinguish free, crystal-retained and vapour water. | kg | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |
| cp_energy | nh4cl_manufacture | Steam, return and electricity | foreground_record | stage/total kWh; vaporiser; fans/pumps; steam kg; pressure absolute/gauge; T; dryness; condensate kg/T; heat losses; supplier reference | Calibrated stage and supply/return meters, common-reference steam enthalpy method and bills; reconcile energy without equating mass to heat. | kg; kWh; MJ | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |
| cp_pack | nh4cl_manufacture | Packaging ledgers | foreground_record | polymer; empty component kg; count; capacity; closure; reuse cycles; issues; shipped; rejects; opening/closing stocks | Weigh each actual component and count issues/shipped/rejected units; retain full physical mass; reuse service fractions affect burden ledger only. | kg; items | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |
| cp_waste | nh4cl_manufacture | Waste and receiver | foreground_record | stream ID; wet kg; dry solids; water; NH4/NH3-N; Cl; acidity; impurities; dust; internal return; receiver/treatment; manifests; stocks | Weigh/sample each external stream separately; document actual state, receiver/treatment and stock changes; no residual-derived waste quantity. | kg | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |
| cp_air | nh4cl_manufacture | Post-control releases | foreground_record | source; species; dry/wet basis; actual/standard volume; T/P; integrated volume or flow rate/duration; NH3; HCl; particle bins/composition; water vapour; abatement; detection limits | Representative stack/fugitive monitoring of normal, failed and transient operation; match concentration/volume T/P/dry-wet basis; independently measure partition, not infer all loss as one species. | kg; mg/m3; m3; m3/h; h | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |
| cp_assets | nh4cl_manufacture | Transport/capital screening | foreground_record | shipment mass/distance/mode; equipment bill; installed mass; lifetime; throughput; shared service; maintenance; cut-offs | Verify supplier/receiver routes and equipment service records; add each included transport/asset/material atomically with explicit cut-off rationale. | kg; km; t*km; years | Each batch and continuous meters; start/stop and stocktake | Complete matched period including failures and downtime | Same site, direct route, state and product pool | per 1 kg reference flow | Calibration, method uncertainty, samples, batch/stock and transfer records |

Define Q as the sum of net kg of unique accepted supplied lots in the matched cohort, including accepted ending stock when its burdens remain in that cohort. Include opening accepted stock only with its carried burdens; production and dispatch are alternative observations of the same lots. WIP is not accepted output: retain all gross period physical inputs and loads, identify inherited WIP burdens, and explicitly carry ending-WIP burdens to its future output cohort rather than deleting them. External returned/reworked material keeps its inherited burdens and is not counted again merely because it is reaccepted. The normalized burden numerator is the verified cohort-attributable total after these carry-in/carry-out assignments; retain the unchanged gross-period physical ledger beside it.

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_period | all inventory rows | Convert raw units first; assemble complete matched-pool quantities and carried burdens, then divide once by unique positive Q. Retain raw totals and inherited/closing-stock burdens traceably; Q=0 has no normalized result. | cp_product; cp_materials; cp_water; cp_energy; cp_pack; cp_waste; cp_air | Atomic exchanges per 1 kg reference flow | jrc-cww-2016 |
| calc_chemical | feed_ammonia, feed_hcl, nh4cl_product | NH3 + HCl -> NH4Cl gives no net molecular water. Independent feed/product assays, actual reaction evidence, N/H/Cl balances and measured phase transfers determine conversion/losses. Track carrier/free/crystal-retained water separately; never fit unknown reaction water and unknown outlet to one residual or use COD for mass closure. | cp_materials; cp_product; cp_water; cp_waste; cp_air | Raw physical mass/element/water ledgers | unido-nh4cl-study; jrc-cww-2016 |
| calc_load | air_nh3, air_hcl, air_pm25, air_pm10, air_pmover10, air_pm_unsized | At matched gas conditions, emitted kg = sum(C_mg_per_m3 × integrated_V_m3) / 1000000. Integrate flow rate over time for volume; never multiply integrated volume by time again. Resolve NH3 versus N and dry particles versus wet droplets explicitly. | cp_air | Species/particle raw-period kg | jrc-cww-2016 |
| calc_utilities | electricity, steam_import, condensate_return | Electricity MJ = metered kWh × 3.6. Net steam enthalpy uses imported mass × supplied specific enthalpy minus matched return/vent enthalpy and declared interface terms; retain losses and verify provider conventions without double charging mass and heat. | cp_energy | Period electricity and separate steam mass/enthalpy ledger | jrc-cww-2016 |
| calc_pack | pp_sack, pe_liner, delivered_pp, delivered_pe | Physical packaging kg = measured empty component kg × actual count; reconcile issues, stocks, delivery and waste. Reuse allocation changes service burdens only, never physical output. | cp_pack | Physical packaging and separate service burden | jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_closure | nh4cl_manufacture | Close full unallocated mass and N/H/Cl/O plus actual impurity/packaging C ledgers using independent measurements and chemistry. Separate reaction/phase water and dry matter; no unexplained residual fitting or universal tolerance. | cp_materials; cp_water; cp_pack; cp_waste; cp_air |
| quality_identity | all inventory rows | Check complete native names/CAS/form/route/geography/medium and exact property-unit chain; identity is separate from provider quantity compatibility. Disclose broad-reference and source-classification limitations. | cp_product; cp_materials; cp_energy |
| quality_completeness | nh4cl_manufacture | Retain included/not-applicable/unmeasured/cut-off decisions, detection limits and uncertainty for each stage/source. Blank UUID is not zero; add actual extra chemicals, closures, cooling/treatment, liquid drift, transport and assets atomically. | cp_air; cp_assets; cp_waste |
| quality_no_defaults | nh4cl_manufacture | Actual grade, recipe, assay, yield, heat/power and monitoring records are required. Old report economics and producer examples supply no site/quantity defaults. | unido-nh4cl-study; basf-nh4cl-grades |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | nh4cl_product | Require one final chemical reference output, 1 kg net supplied crystals, all qualifiers and unique positive Q; reject nitrites, nutrient-only basis and incompatible route/form. | unsd-cpc3-2025; unido-nh4cl-study |
| validate_pool | nh4cl_manufacture | Reconcile full inputs/burdens including start/stop, failures, zero-output, returns/rework, stock/WIP and inherited burdens; normalize once after conversion. Q=0 gives no normalized values. | jrc-cww-2016 |
| validate_physics | nh4cl_manufacture | Require independent physical mass/element/water closure and reaction evidence; no net water from NH3+HCl. Wet procurement differs from constituent assays; physical and allocated ledgers remain separate. | unido-nh4cl-study; jrc-ilcd-2010; jrc-cww-2016 |
| validate_air | air_nh3, air_hcl, air_pm25, air_pm10, air_pmover10, air_pm_unsized, air_water | Verify species, medium, reference volume and post-control loads. Use disjoint particle bins or non-overlapping unsized remainder; captured/recycled dust is not release. Distinguish vapour, droplets and dry salt. | jrc-cww-2016 |
| validate_interfaces | all inventory rows | Verify CN/voltage limits, steam mass/enthalpy/provider convention and every receiver/treatment/transport link. Report unmeasured data, blank UUIDs and checks skipped; PCR checks are neither completed site inventory nor scientific approval. | jrc-cww-2016; jrc-ilcd-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Delivered crystalline NH4Cl input with compatible composition/state and direct-route scope |
| allowed_use | Declared additive-free aqueous direct route with actual site, period, SKU and providers |
| excluded_use | Other routes/salts/nitrites, pure-active/nutrient substitutions, default factory quantities, use-phase emissions or regulatory approval |
| required_metadata | Qualifiers; stages/flowsheet; complete Q/pool/stock/WIP and physical/burden ledgers; assays; utilities; pack design; providers/receivers/transports; treatment/capital/cut-offs; allocation; version |
| required_quality_disclosure | Methods, uncertainty, coverage; broad reference restriction; native location/voltage/source-metadata debts; blank identities/provider/receiver gaps; actual extensions and review scope |
| update_trigger | Route/feed/product/grade/additive, utility/abatement, supplier/receiver/packaging/stock/allocation evidence changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unido-nh4cl-study | official_guidance | UNIDO, Development of a portfolio of industrial opportunity studies for existing industries in Ethiopia, Final Report, scan17160, Ammonium Chloride study, VI.A.1.d, printed P17/PDF1172; undated historical scan. https://downloads.unido.org/ot/48/19/4819516/15001-20000_17160.pdf | Historical direct-neutralisation sequence: recycled aqueous liquor, concentration, cooling crystallisation, filtration, drying and moisture-proof packing. The report selects a different sulfate/salt route; none of its selected-route recipes, economics, old market restrictions or performance values becomes a default. |
| jrc-cww-2016 | official_guidance | European Commission JRC, CWW BREF,2016, BAT2–4, printed543–544/PDF573–574. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf | Chemical-sector reaction/side-product and waste-stream inventories, flow and pollutant-load characterisation and representative monitoring. No NH4Cl recipe, abatement design, emission factor or compliance claim; collect actual controls and samples. |
| basf-nh4cl-grades | literature | BASF, Inorganic Chemicals, Ammonium chloride product table, Untreated U Grade; publisher-page snapshot2026-10-16. https://chemicals.basf.com/global/en/Monomers/inorganic-chemicals | Producer evidence for marketed additive-free crystalline technical NH4Cl; other grades contain anti-caking additives. Grade assays and packaging sizes are examples only, not universal specifications, actual-site proof or manufacturing-route evidence. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance, first edition March2010, section7.9.3, printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Virtual subdivision and determining physical causality for attributional shared burdens; remaining burdens use process-gate market value with sensitivity. No fixed allocation share, avoided-production credit or default value. |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version3.0 Structure,30June2025, CSV line1493,34653. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification boundary only: ammonium chloride and nitrites. Direct-route crystalline NH4Cl is a narrower subset; classification proves neither manufacture nor single-species identity. |
