---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.filter-blocks-slabs-and-plates-of-paper-pulp
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Wet-formed wood-pulp depth filter sheets and plates


## 1. Scope and Applicability

This PCR covers non-integrated manufacture of dried, cut-to-shape cellulose depth filter sheets/plates from purchased purified bleached chemical wood pulp. Hardwood and softwood fibres, actual diatomaceous-earth/perlite additions and polyamidoamine wet-strength resin are formulation-specific exchanges, not mandatory ingredients or fixed proportions. OIV describes slurry preparation, fibre fibrillation, vacuum drainage on a wire belt, oven drying and subsequent cutting. Its oenological monograph supports this physical route; its recipe restrictions, test limits and use instructions retain their oenological scope [oiv-depth-sheets-2021, sections 3-5].

Pall distinguishes mineral-containing and mineral-free cellulose grades, precoat-support sheets, acid-washed media and carbon-adsorption sheets. This method covers the first two depth-media families only when the stated wood-pulp route is confirmed. The product example establishes market form, not a named producer's utilities or universal resin formulation. Exclude activated-carbon/zeolite/PVPP adsorption media, precoat support sheets, polyolefin/glass/synthetic-fibre media, cotton-based grades, membranes, acid-washed media, filter housings/modules/capsules and uncut filter base-paper reels [pall-seitz-sheets]. No filtration volume, sorption capacity, sterile assurance or service equivalence follows from equal mass or the grade label.

The declared foreground route uses purchased electricity and, if present, externally supplied steam for indirect oven heating, purchased tap water, mechanical white-water/broke recovery and wastewater transfer to external treatment. Include incoming receipt, stock disintegration/screening/refining, formulation, vacuum forming, porosity-preserving dewatering/drying, dry cutting, testing, packaging, cleaning and changeovers. On-site pulping/bleaching, combustion/boilers, chemical or biological effluent treatment, direct liquid environmental discharge, water abstraction, coatings and unlisted chemical aids require a separately evidenced method extension. This scope does not claim those operations are absent from every producer. Verify the actual route before selecting this PCR.

BREF specialty-paper context explains why ordinary paper pressing and generic drying/water factors cannot be imported: refining, porosity and grade changes matter. Retain actual process settings and performance tests; do not prescribe a universal press pressure, dryness, recipe, retention grade, yield or emission factor [jrc-paper-bref-2015, 7.1.11.4].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.filter-blocks-slabs-and-plates-of-paper-pulp |
| classification_refs | CPC 3.0 32198; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Dried cut-to-shape wet-formed wood-pulp depth sheets/plates within the stated route |
| excluded_products | Uncut filter-paper reels; moulded blocks without verified route; sorbent/support/composite media and assembled filters |
| representative_product | Cellulose flat depth sheet, with formulation-specific mineral and resin content |
| production_route | Purchased pulp → disintegrate/screen/refine/formulate → wire-belt vacuum forming → oven dry → dry cut/test/pack; internal water/broke recovery |
| market_state | Unused accepted finished sheet/plate at recorded gate moisture; packaging separate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the specified physical cellulose depth medium for downstream filtration system integration |
| How much | 1 kg |
| How well | Actual formulation/grade, thickness, grammage, porosity/permeability, wet strength, retention test method/challenge fluid/pressure and cleanliness; no default performance value |
| How long or cycle | One factory-gate delivery; downstream throughput, flushing, regeneration, replacement and lifetime require separate actual-use evidence |
| reference_flow_link | filter_out |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Filter blocks, slabs and plates, of paper pulp `083aa644-72ee-464e-8ffa-f5b5f62321d5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Net gate mass/moisture; flat cut geometry; unused state; hardwood/softwood species and chemical-pulp route; actual furnish/mineral/resin grade and supplied/active basis; manufacturing/drying conditions; performance test conditions; absence of excluded operations; utility voltage/steam conditions; water source; effluent/waste receivers; site/period/provider boundaries |


The reference is 1 kg net gate-moist finished medium, not 1 kg dry cellulose, packaged gross mass or filtration service. The broad finished-product UUID contains this subset without a contrary route/material restriction. All required qualifiers must appear in the completed dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured accepted net gate-moist output Q from cp_output; do not use packaging, theoretical recipe mass or unaccepted output as denominator. |
| solution_basis | resin_in | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve supplied solution mass and measured solids separately; dry active mass is solution mass times verified active fraction. Carrier water belongs in the water balance, not a second purchased-water exchange. |
| energy_basis | electricity_in | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Verified energy unit group supports 1 kWh = 3.6 MJ; retain provider voltage, delivery point and loss boundary. This conversion does not establish net steam heat. |
| steam_basis | steam_in, condensate_out | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered steam and returned liquid separately. Heat balance uses their measured states and supplier-defined reference; do not infer usable heat from a property label or default enthalpy. |
| water_mass_basis | water_in | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve delivered tap-water mass. When measured by volume, convert using measured density and temperature compatible with the supplier reference; no default density. |
| effluent_volume_basis | effluent_out | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain measured V (m3), actual mixture density rho (kg/m3) at recorded temperature, full liquid mass m = V × rho and actual H2O fraction separately. Use m/Q for this native mass exchange; no default density or pure-water assumption. |
| particle_basis | pm_fine, pm_coarse, pm_large | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use disjoint aerodynamic size classes on compatible sample/control/time bases. Missing or inconsistent size data cannot establish zero or a default split. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased purified bleached chemical wood pulp and actual formulation ingredients received at the filter-media plant |
| starting_condition_role | Foreground input interface; upstream pulping and mineral/resin production linked through providers |
| product_classification_scope | CPC 3.0 32198 subset: finished flat wet-formed depth plates/sheets |
| recursive_input_rule | Internal same-grade broke stays inside manufacture; purchased finished sheet for conversion is a different starting condition and requires converter boundary review, without silently replacing purchased pulp. |
| upstream_dataset_requirement | Match pulp species/bleaching, mineral grade/production, resin supplied basis, utility conditions and deliveries; include transport to receipt and treatment after handover, without boundary overlap. |
| disclosure | Site, period, actual grade/formulation, excluded-operation checks, upstream cutoffs and external receivers |


| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_foreground | Collect the complete declared manufacturing campaign including losses, starts/stops and grade changes. Do not reuse conventional-writing-paper process settings. | oiv-depth-sheets-2021; jrc-paper-bref-2015 |
| boundary_interfaces | Document upstream supply and downstream waste-treatment providers; export of wastewater is a waste exchange, not a freshwater elementary emission. Excluded actual operations invalidate this route until extended. | epa-lca-2006 |
| boundary_internal | Retain the physical substage diagram and internal water, furnish and broke ledger. An internal link has equal quantities at both ends; count no duplicate external exchange. One aggregate process owns the sole finished reference output. | jrc-paper-bref-2015 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Wood-pulp depth-media manufacture and delivery preparation | required | Declared route; conditional atomic rows enabled only by actual records | foreground production | 1 kg net accepted finished medium |


Receipt → disintegration/screening → refining/formulation → wire-belt vacuum formation → porosity-preserving dewatering → oven drying → dry cutting/acceptance → packaging. White water and compatible wet/dry broke return to stock preparation. Independently meter substages even though their external exchanges are aggregated. This preserves stage burdens without declaring intermediate and final medium as two reference outputs.

### Process: Depth-media manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Chemical wood pulp, other than dissolving grades (`pulp_in`)

Purchased purified bleached non-dissolving chemical wood pulp; record hardwood/softwood species, bleaching route, supplied moisture, lot mass and dry solids. Separate supplies and species as distinct dataset exchanges; no universal furnish proportion.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_materials and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `oiv-depth-sheets-2021`


###### Diatomaceous earth filter aid (`de_in`)

Only for a formulation incorporating diatomaceous earth. Confirm incoming unused filter aid, calcined/flux-calcined/natural grade, silica phase, particle distribution, moisture and supplier. The beverage-clarification identity is a physical aid reference, not a filtration service or proof of upstream production burdens. This locator specifically describes a beverage-clarification filter aid; confirm the actual delivered grade and intended application satisfy that restriction. Other uses require another compatible identity.

- Selected flow: Diatomaceous earth filter aid `af13e1e4-290c-412d-b3fe-dcba0b4c5b81`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_materials and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `oiv-depth-sheets-2021`


###### Perlite filter aid (`perlite_in`)

Only for actual expanded ground perlite. This UUID describes selected ore expanded in a vertical shaft kiln using purified gas, then ground/purified; verify that supply route before linking it. Other furnace/fuel routes require an independently compatible identity/provider. Record grade, particle distribution and moisture; do not prescribe this kiln as the PCR default.

- Selected flow: Perlite filter aid `45203225-538a-422b-bf66-16f2e7931f18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_materials and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `oiv-depth-sheets-2021`


###### Aqueous polyamidoamine wet-strength resin (`resin_in`)

Only when the actual formulation uses this resin. Record supplied solution mass, polymer identity/CAS, crosslinker, grade, solids, carrier water, preservatives and residual monomers; distinguish solution from dry active polymer. Polyacrylamide, generic resin and paint resin are not substitutions. A different binder requires its own specific exchange and evidence.

- Selected flow: Aqueous polyamidoamine wet-strength resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_materials and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `oiv-depth-sheets-2021`


###### Alternating current (`electricity_in`)

Meter disintegration/refining, vacuum, dryer fans/electric heating if present, cutting, packing and mechanical water recovery separately, then total once. UUID applies only to grid-average low-voltage AC below 1 kV at user; another voltage/supply requires compatible identity. Convert measured kWh with the verified energy unit group; the property is named Net calorific value. The locator is CN supply; preserve China as its geographic limitation and select a compatible alternative for other supply geographies.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual atomic exchange with cp_energy and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-paper-bref-2015`


###### Purchased steam for indirect oven heating (`steam_in`)

Conditional on steam-heated equipment. Measure steam mass and pressure/temperature/dryness at the delivery point and pair condensate return. Neither 11.0 nor 0.45 MPaG is assumed; the selected supplier dataset must match actual conditions. Retain the mass inventory; energy conversion requires measured enthalpy balance and supplier background quantity definition. The selected steam-heat locator has native Mass/kg and no specified pressure. It is usable only after the actual provider confirms that one reference kg denotes delivered steam at this interface; its title alone does not prove that quantity definition. Retain measured steam mass, pressure, temperature, dryness, condensate mass/state and the provider heat boundary. If the provider reference is heat energy, establish an evidenced enthalpy/reference conversion or replace the link; never equate kg, gross calorific value and useful heat.

- Selected flow: Heat, from steam, in industrial boiler `f80f700c-a9ca-47bf-b3f0-f0c435b291d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_energy and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-paper-bref-2015`


###### Water, tap (`water_in`)

Purchased tap-water make-up for slurry, showers and cleaning, including grade changes and quality testing. Count external intake once; internal white water is not new intake. Mass reference requires measured density if meters report volume; no database secondary factor is a site density.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_water and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`


###### Low-density polyethylene foil (PE-LD) (`film_in`)

Only if actual shipping protection is non-cellular, non-laminated LDPE foil. Weigh issued material less unused returns and account for scrap. Other polymers or composites require separate specific exchanges. Packaging remains outside net filter mass.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_pack and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`


###### Corrugated paperboard shipping carton (`carton_in`)

Conditional on actual carton use; record board construction, printing/coating and fibre shares. The database corrugated-box record specifies 16.6% primary and 83.4% recycled fibre; no actual carton furnish is assumed to match. Avoid laminated folding-carton identity for a shipping corrugated box.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_pack and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-paper-bref-2015`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Filter blocks, slabs and plates, of paper pulp (`filter_out`)

1 kg net accepted finished filter plate/sheet at recorded gate moisture; exclude wrapping and cartons. This is the sole reference output. The broad identity does not prescribe a fibre/mineral/resin recipe or retention grade.

- Selected flow: Filter blocks, slabs and plates, of paper pulp `083aa644-72ee-464e-8ffa-f5b5f62321d5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `oiv-depth-sheets-2021`


###### Steam condensate returned to heat supplier (`condensate_out`)

Only for actual supplier return: meter mass, temperature and pressure separately from wastewater. Keep full physical return; no automatic sale, avoided-water credit or heat credit. Do not use milk-evaporation condensate or steam as the liquid identity. The treated industrial/process-water identity is conditional on actual clean steam condensate returned for industrial reuse, with measured liquid mass, quality, treatment history and receiver acceptance. It does not assert that treatment occurs here. Contaminated discarded condensate needs a separately qualified waste exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_energy and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-paper-bref-2015`


##### Waste flows

###### Purified wood-pulp stock screening rejects (`screen_out`)

Record external wet screening rejects separately from finished-sheet rejects. Measure moisture and fibre/contaminant composition and receiving treatment. Retained screening fibre returned internally is not external waste. Use the broad industrial discarded-solid identity only for this separately measured wet solid screening residue. Report its full as-transferred mass, H2O, dry fibre, minerals/resin and contaminants, physical phase and actual receiver route. A liquid screen purge is a separate liquid exchange; no generic composition, treatment or hazard classification follows from this UUID.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_waste and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`


###### Rejected cellulose depth filter sheet (`reject_out`)

External dry trimmings/off-spec sheets of this formulation, before filtration use. Record mineral/resin content, moisture and receiver; compatible internal broke is an internal transfer only. Used contaminant-loaded filters and ordinary recycled paper are different identities. The broad industrial discarded-solid locator conditionally covers actual unused fibre/mineral/resin manufacturing offcuts. Preserve this row separately from screenings and sludge, including full moisture-bearing mass and actual receiver acceptance. It establishes neither recyclability nor substitution credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_waste and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`


###### Dust (`dust_out`)

Only collected industrial cutting or powder-handling dust leaving the site as waste. This broad waste identity requires actual cellulose/mineral/resin fractions, silica phase, moisture, hazard class and receiver; it does not identify airborne elementary particulate releases. Internal recovery is not external waste.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_waste and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`


###### Dewatered primary cellulose-mineral recovery sludge (`sludge_out`)

Conditional on an external purge from mechanical white-water solids recovery. Keep dry solids, retained water and fibre/mineral/resin composition; distinguish biological sludge and untreated wastewater. Do not assume all recovered solids leave as sludge. The native paper-production-sludge identity is broad and supplies no solids fraction or treatment assumption. Apply it conditionally to separately collected mechanical primary fibre/mineral recovery sludge from this route, with measured full wet mass, dry solids, resin/contaminants, consistency and receiver compatibility; do not substitute biological sewage sludge.

- Selected flow: sludge (paper production) `b48b29ab-4ead-4413-9adb-07631cd7af09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_waste and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`


###### Untreated cellulose depth-filter manufacturing wastewater to external treatment (`effluent_out`)

Exported liquid to a named external treatment receiver; not direct freshwater discharge. Meter volume and sample COD, BOD, suspended solids, dissolved constituents, total nitrogen/phosphorus and AOX where resin chemistry warrants. Keep oxygen-demand indices as wastewater characteristics, not separate species emissions; document composition and treatment compatibility. The generic industrial liquid-waste identity is conditional on the actual liquid phase and receiver compatibility. Its native quantity is full liquid-mixture Mass/kg. Preserve the original measured wastewater volume V in m3; obtain m = V × rho using the measured batch/temperature-specific mixture density rho in kg/m3, then normalize m by Q. Record actual H2O fraction independently for the water balance; suspended/dissolved material is included in m. Do not treat full mixture mass as pure water or infer a legal hazard classification from generic narrative. Gel, solid residues or another phase need separate exchanges.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_water and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`


##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Actual PM2.5 leaving the site after abatement from dry cutting or powder handling; outdoor air, unspecified. Measure the fine size class, source, control, sampled exhaust flow and fugitive paths. Collected dust is excluded from this release.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_air and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`


###### particles (PM2.5 - PM10) (`pm_coarse`)

Actual outdoor-air particles in the disjoint PM2.5-PM10 class. For compatible cumulative samples only, subtract PM2.5 from PM10; do not add cumulative PM10 to these two fractions. Unresolved size distribution remains pending.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_air and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`


###### particles (> PM10) (`pm_large`)

Actual outdoor-air particles larger than PM10, not cumulative PM10. For compatible total particulate/PM10 measurements, use the difference with reported uncertainty; no sawmill factor or default size split.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_air and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-paper-bref-2015`


###### water vapour (`water_vapour`)

Net process-water evaporation reaching outdoor air from drying and open wet stages. Use a measured whole-boundary H2O balance or compatible inlet/outlet humidity and gas-flow integration. Count inlet-air humidity separately and deduct it once from total outlet moisture when using gas measurements. Internal recirculation and internal condensate recovery cancel at both ends of the same boundary; do not subtract circulating water again. Count only actual externally returned condensate, liquid exports, product/residue water and stock changes as separate boundary terms. No combustion water is assumed in this declared indirect/electric route.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the actual atomic exchange with cp_water and divide by accepted net finished mass; demonstrate absence for an inactive conditional row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-paper-bref-2015`


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_avoid | First avoid allocation through measured process subdivision or an evidenced system expansion that preserves the additional functions, functional unit and compatible reference flows. Explain infeasibility before using causal physical relationships; when those cannot be established or used, justify other relationships and sensitivity. No default fraction or automatic avoided-production credit. | epa-lca-2006 |
| allocation_physical | Keep full physical product/waste/water/carbon balances separately from the allocated environmental-burden ledger. Do not multiply physical co-product outputs or internal transfers by allocation shares. | epa-lca-2006 |
| allocation_recovery | Internal broke/white water gets no avoided virgin-input credit. External sale of rejects or residues requires actual receiver/use evidence and declared allocation or system-expansion boundaries, without double credits. | epa-lca-2006 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | manufacture | filter_out | weighing and acceptance | batch; grade; accepted net mass Q; tare; gate moisture; geometry; performance test conditions | Calibrated weighing of accepted unused cut sheets/plates excluding packaging; moisture and grade tests linked to the same campaign | kg | each batch | representative production campaign, including start/stop and changes | selected line and grade | per 1 kg reference flow | scale calibration; lot acceptance; moisture and grade reports |
| cp_materials | manufacture | pulp_in; de_in; perlite_in; resin_in | lot issue and analysis | supplier; lot; species/CAS; grade/production route; received and returned mass; moisture/solids; composition; stocks | Weigh actual ingredient issues and unused returns; reconcile opening/closing stock. Obtain supplier specifications and measure moisture/active solids; do not count carrier water twice | kg | each lot/batch | same campaign as cp_output | receipt and formulation | per 1 kg reference flow | invoices; scales; certificates; formulation and stock reconciliation |
| cp_energy | manufacture | electricity_in; steam_in; condensate_out | stage meters and supplier interface | stage; kWh; steam kg; pressure; temperature; dryness; condensate kg and state; supplier reference; losses | Submeter all active stages; separately measure delivered steam and returned condensate. Reconcile utilities with the supplier boundary and measured state; retain steam mass where heat compatibility is unestablished | MJ; kg | continuous or each batch | same campaign including idle/changeover | manufacture and supplier interface | per 1 kg reference flow | meter calibration; supply contract; state measurements; stage reconciliation |
| cp_water | manufacture | water_in; effluent_out; water_vapour | water meters and laboratory measurements | source; intake volume/mass; density/temperature; slurry/water stocks; internal transfers; product/waste water; export volume; sample load indices; exhaust humidity/flow | Meter external intake/export; use measured density for mass; reconcile formulation carrier water, product/waste moisture, condensate and evaporation. Flow-weighted wastewater samples include cleaning and changes; reconcile total nitrogen definitions and AOX applicability | kg; m3 | continuous balance; each batch and representative export sample | same campaign including cleaning | wet/dry substages and named external treatment receiver | per 1 kg reference flow | calibration; lab methods/LOD; receiver acceptance; water balance |
| cp_pack | manufacture | film_in; carton_in | packaging issue and weighing | material; polymer/board construction; grade; fibre shares; issued/returned/scrap kg; stock | Weigh each packaging component separately and reconcile actual issues, unused returns and scrap; retain supplier material and route specifications | kg | each packing lot | same campaign | packaging station | per 1 kg reference flow | scales; purchase specs; issue records |
| cp_waste | manufacture | screen_out; reject_out; dust_out; sludge_out | weighing composition and transfer | stream; external wet mass; moisture/dry solids; fibre/mineral/resin fractions; silica phase; hazard state; stock; receiver; internal return | Weigh each external waste separately; assay dry solids/composition and receiver compatibility. Retain internal wet/dry broke and captured dust recovery separately from external handover | kg | each transfer/batch | same campaign | manufacture and handover receiver | per 1 kg reference flow | weighbridge; analysis; transfer manifest; receiver route |
| cp_air | manufacture | pm_fine; pm_coarse; pm_large | source tests and fugitive assessment | source; grade; size cut; concentration; exhaust volume; temperature/pressure/wet-dry basis; control; hours; captured dust; fugitive paths; uncertainty | Test dry cutting and powder-handling discharge after controls with compatible flow and size measurement. Integrate load across actual operations including fugitive releases; distinguish cumulative from disjoint fractions; no wood-processing factor | kg | representative source/grade/control measurements and operating logs | same campaign including cutting/handling peaks | outdoor air at site boundary | per 1 kg reference flow | sampling/calibration/LOD; source map; controls; size and flow compatibility |


Preserve the complete physical ledger for every packaging component and supplier container: receipts, unused returns, opening/closing stocks, packaging shipped with accepted products, separately transferred waste, reusable returns and measured residues. Shipped packaging is an explicit physical output outside net reference Q, even where modelled with the product shipment. No material disappears when allocated burdens are calculated. Survey actual mould/wire replacement, lubricants, cleaning chemicals and other maintenance inputs and residues over the same representative campaign, with separate evidenced exchanges or supported absence; do not invent universal consumables or narrow the route to omit actual flows.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | For each atomic exchange, divide the measured campaign total in its declared unit by Q, the same accepted net kg finished reference product; product reference output is 1 kg. Preserve stage meters and units. No factor is inferred from this normalization. | campaign totals; Q; cp_output | per 1 kg reference flow | epa-lca-2006 |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| physical_balances | manufacture | Close dry fibre, mineral, resin, total mass, water and carbon balances before allocation; include opening/closing stocks, full physical co-product outputs and internal links. Distinguish biogenic pulp carbon from fossil resin/film carbon; stored carbon is not an automatic removal credit. Any actual biogenic CO2 release must be retained separately from fossil CO2, regardless of greenhouse reporting conventions; extend species inventory if identified. | weighing; composition; cp_water; full physical ledger |
| coverage | all inventory rows | Include losses, cleaning/changeovers and tests; demonstrate conditional absence. Inventory is not complete until every actual aid, packaging component, waste and emission has its own exchange and actual provider/receiver. Missing identity or amount is not zero. | route audit; records; analytical screening |
| identity_quantity | all inventory rows | Audit flow physical identity separately from supplier dataset reference quantity, route, geography and boundary. Sparse identity fields cannot supply a process burden, concentration, density, dosage or default energy value. | supplier specifications; verified identity; compatibility assessment |
| ranges | all inventory rows | No universal input, yield, utility, emission or waste range is supported here. Obtain actual grade/route-specific records and independent compatible sources before defining quantitative ranges; historical/single-factory observations remain case evidence. | collection protocols; external-source applicability |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | Require finished unused cut depth medium, declared formulation and manufacturing route; do not resolve an undried preform, uncut base paper or filtration service as the reference product. | oiv-depth-sheets-2021; pall-seitz-sheets |
| validate_measurement | Require one 1 kg reference output, same net-moisture Q across rows and complete calibration/conversions. Product, dry ingredient, water and heat bases must be explicit and compatible with providers. | jrc-paper-bref-2015 |
| validate_completeness | Missing UUID, unsupported supplier reference, incomplete source measurement or unaccounted actual exchange prevents claiming a complete dataset. Assess wastewater receiver and contaminant load; do not invent a matching flow or a zero emission. | epa-lca-2006 |
| validate_air | Check actual dry cutting and powder handling; particulate fractions must be disjoint, collected dust distinct and source/medium correct. Screen actual resin-related species; any identified chemical release requires separate exact species/media row. No universal emission factor. | jrc-paper-bref-2015 |
| validate_function | A factory-gate material inventory cannot establish adsorption or filtration service equivalence. Comparisons require matching challenge conditions, throughput, retention, cleaning/regeneration and lifetime evidence for the stated actual grade. | pall-seitz-sheets; oiv-depth-sheets-2021 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing inventory; after completion/review, secondary_dataset or background_dataset |
| downstream_use | Input for explicitly modelled filtration-system product and actual-use studies |
| allowed_use | Declared gate-moist grade/route with matched providers and complete actual inventory |
| excluded_use | Automatic mass-based filtration/adsorption equivalence; universal recipe; manufacture of excluded products/routes |
| required_metadata | Reference qualifiers; grade/formulation; site/period; stage diagram; physical balances and allocated burden ledger; supplier/receiver boundaries |
| required_quality_disclosure | Measured/modelled amounts; identity gaps; provider compatibility; uncertainties; omitted ranges; unreviewed scope; treatment handover |
| update_trigger | Change in furnish, mineral/resin grade, porosity/retention requirement, drying/cutting, utilities, water/effluent route or waste receiver |


## 11. Data Sources

| Source id | Type | Reference | Used for and applicability |
| --- | --- | --- | --- |
| oiv-depth-sheets-2021 | official_guidance | [OIV-OENO 629-2021, Monograph on depth filter sheets](https://www.oiv.int/node/2748/download/pdf); 2021; retrieved 2026-10-12; sections 3-5, PDF pp. 2-3 | Cellulose/mineral/wet-strength composition and vacuum-wire/oven/cutting route. Oenological scope; no universal recipe, energy route or service equivalence. |
| pall-seitz-sheets | handbook | [Pall, Seitz Filter Sheets](https://www.pall.com/jp/ja/food-beverage/depth-filtration/seitz-sheets.html); snapshot retrieved 2026-10-12; Classical DE, Ion Reduced, Pure Cellulose, Support, Activated Carbon sections | Manufacturer-specific physical product families and counterevidence; no assumption that a named producer follows the PCR utility configuration or common performance. |
| jrc-paper-bref-2015 | official_guidance | [JRC, Production of Pulp, Paper and Board BREF](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf); 2015; retrieved original 2026-10-11, re-read 2026-10-12; 2.2.2 (PDF 86-88), 7.1.1 (698), 7.1.3-4 (702-703), 7.1.10 (708/printed 670), 7.1.11.4 (713/printed 675), 7.2.2.3 (725) | Stage, recirculation, specialty-paper and monitoring context; cutting dust and additive/effluent screening. General paper-sector principles only, no ordinary-paper pressing/energy/water factors or historical recipe defaults. |
| epa-lca-2006 | official_guidance | [EPA/600/R-06/060, Life Cycle Assessment: Principles and Practice](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1000L86.TXT); May 2006; re-read 2026-10-12; Chapter 3, printed pp. 28-29 | General inventory/boundary and allocation hierarchy, not a current performance standard, paper recipe or environmental factor. |
