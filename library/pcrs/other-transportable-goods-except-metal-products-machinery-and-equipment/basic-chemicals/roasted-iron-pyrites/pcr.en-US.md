---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.roasted-iron-pyrites
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Roasted iron pyrites from fluidised-bed oxidative roasting

## 1. Scope and Applicability

Apply to iron-oxide-rich calcine made from natural unroasted pyrite mineral concentrate by single-stage fluidised-bed oxidative (dead) roasting, followed by actual solids recovery, cooling and bulk loading. Include roaster heat recovery, gas collection/cleaning and attributable effluent treatment before SO2-rich gas transfer to a separately modelled acid plant. BREF §4.2.3.3 and Metso's pyrite-concentrate description support this physical route (`jrc-lvic-aaf-2007`, `metso-roasting-2022`). Natural mineral feed and calcine are mixtures; neither is assigned pure-species composition.

Exclude unroasted mineral preparation alone, synthetic FeS2, high-arsenic two-stage/dearsenifying roasting, copper/zinc/gold-specific roasting, sulfating roasting, ferrous-sulfate decomposition, mixed sulphate/spent-acid feeds, smelting, pigment purification, pelletisation and downstream steel/cement manufacture. No acid conversion/absorption methodology is supplied. A meaningful departure requires a new applicability assessment and additional atomic exchanges. Generic product-flow identity does not authorise these excluded routes. Site/SKU/supplier measurements are future production requirements, not invented existing measurements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.roasted-iron-pyrites |
| classification_refs | CPC 3.0 34530; proposed narrower scope; classification is not methodology identity |
| covered_products | Cooled bulk roasted natural pyrite calcine from the specified oxidative fluidised-bed route |
| excluded_products | Unroasted pyrite; pure iron oxide; pigment; metal-specific calcine; sulfate-decomposition residue; two-stage high-arsenic calcine; pellets |
| representative_product | Accepted iron-oxide-rich calcine with measured residual sulfur, gangue, phases and moisture |
| production_route | Natural pyrite concentrate -> fluidised-bed oxidative roasting -> solids recovery/cooling -> bulk loading; parallel heat recovery and gas cleaning |
| market_state | Bulk cooled mineral mixture at declared roaster/calcine plant loading gate, with receiving-use specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply specified bulk roasted pyrite calcine as an iron-bearing material |
| How much | 1 kg dry accepted calcine at the declared loading gate |
| How well | Actual receiving specification for Fe/phase/residual S/gangue/contaminants/particle size; retain actual moisture and temperature |
| How long or cycle | One delivery at plant gate; no assumed use lifetime or service equivalence |
| reference_flow_link | calcine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Roasted iron pyrites (`4cf6c76c-7236-4704-8c8f-73d026ec456f`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | site/year; natural unroasted feed mineralogy and source; single-stage oxidative fluidised-bed route; accepted cooled bulk grade; net dry/as-dispatched masses and free-water assay; Fe/oxide phases/residual sulfur/gangue/trace metals; size and temperature; receiving specification; gas and steam transfer state; allocation and upstream provider bases; waste/discharge compartments |

Required qualifiers must appear in data-package metadata or equivalent fields. This declared unit is a reference-product quantity; comparison of different calcines requires actual receiving function and composition, not automatic equal-mass substitution.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | all inventory rows | Mass | kg | D is positive net dry accepted calcine produced in the matched collection period, reconciled with opening/closing stocks, rejects and dispatch; exclude packaging. Weigh net product with calibrated scales; measure representative sealed-lot free water with a matrix-validated laboratory method that preserves mineral phase and avoids confusing oxidation/volatile loss with water. D = sum(net accepted wet mass * (1 - measured wet-basis free-water fraction)). Record method, temperature, moisture basis, sampling and uncertainty. Do not infer moisture from total loss on ignition or assume zero. Every row and protocol uses per 1 kg reference flow. |
| reference_properties | all inventory rows | Native reference property | kg; m3; MJ | Use each row native reference unit: Volume/m3 for natural gas, direct river abstraction and liquid discharge; the specific unresolved wastewater/blowdown rows are also collected in m3; electricity is collected in MJ, with the compatible native energy property pending identity resolution. Other rows use Mass/kg, including purchased deionised water. 1 kWh = 3.6 MJ; 1 t = 1000 kg. Other mass-volume conversion requires measured state-dependent density, gas composition, absolute pressure, temperature, dry/wet state and compressibility with supplier reference-basis compatibility. Native secondary flow-property factors are not densities or heating values. |
| physical_balances | roasting | Mass | kg | Keep unallocated physical ledgers for wet mass, dry solids, Fe, S, carbon provenance, relevant trace elements and water. The illustrative pure-pyrite oxidation equation 4 FeS2 + 11 O2 -> 2 Fe2O3 + 8 SO2 establishes elemental accounting only; actual oxide phases, incomplete conversion, gangue, feed assay and gas composition control quantities. Include absorbed oxygen and split S among calcine, transferred gas, captured solids/liquor, stock and actual environmental release. No theoretical yield substitutes for measurements. |
| steam_state | steam | Mass and usable net heat | kg; MJ | Record steam mass and state, matched return condensate/feedwater and agreed heat-transfer boundary. Compute each stream enthalpy from measured absolute pressure/temperature/quality using a valid IAPWS-IF97 region; Qnet = (sum outgoing mass*enthalpy - sum returning mass*enthalpy)/1000 when enthalpy is kJ/kg, with any unmatched water/steam explicitly balanced. For an export without condensate return, use the explicitly agreed replacement-water/feedwater reference state in the complete boundary enthalpy balance; missing reference state makes usable net heat unresolved, not zero. Distinguish net heat from gross boiler production and count steam export/internal electricity once. Identity/support property alone does not establish usable heat. |

The following are accounting requirements derived from elemental conservation and the documented process interfaces, not empirical quantities from the sources. Use the general mass-balance framework in BREF §1.4.6 and the separate gas/heat interfaces in the Metso process diagram (`jrc-lvic-aaf-2007`, `metso-roasting-2022`).

- Keep hot roaster overflow, cyclone/filter dust, subsequent cooling and accepted cooled calcine as distinct stage records. Hot collected solids or slag are not automatically the accepted dry reference output. Reconcile returns, rejects, free water, stock and actual temperature; internally recovered dust entering calcine is counted once. Any actual external hot solids or slag require their own atomic identity, quantity and fate; do not merge them into scrubber sludge or airborne PM.
- Retain native species masses and a separate elemental sulfur ledger. For a known sulfur species X, sulfur mass = species mass * number of S atoms in X * molar mass of S / molar mass of X. Record the formula and molar-mass convention; apply this to measured SO2, sulfate and any other identified sulfur species. Total S cannot identify a sulfur species or gas-mixture mass. Keep sulfur in free liquor, solids and gas without counting it again as extra wet total mass.
- Distinguish free moisture, chemically bound water and reaction water. Balance measured intake plus reaction-generated water against consumption by actual reactions, exported steam/gas moisture, product/waste free water, liquid return/discharge, evaporation and stock change. The illustrative pure FeS2 oxidation has no hydrogen and supplies no reaction-water quantity; determine water generation/consumption from actual fuel composition, hydrated materials and reactions without assuming pure methane or a default stoichiometric site yield. Retain measured or independently supported reaction extents and species/phase identities for any water formation or consumption. Treat dry component and phase ledgers with their actual formation/consumption terms: total mass and elements conserve across the complete boundary, but individual dry compounds need not conserve through oxidation, dissolution, precipitation or hydration/dehydration. Do not infer reaction water or a dry component by forcing a mass-balance residual, COD or an assumed formula to close; unresolved chemistry remains an explicit balance uncertainty.
- Keep gross circulating cooling water separate from external makeup and returns. Internal cooling-water/condensate circulation cancels inside this boundary; an actual external condensate or cooling-water transfer requires a separate atomic row with matched quantity, state, receiver and opposite interface. Final freshwater cooling-water return belongs to water_discharge once, with its temperature and pollutants; treatment transfer belongs to the appropriate waste stream. Preserve boiler_blowdown separately from scrubber wastewater. Add any actual evaporative loss or other external water stream separately and resolve its compartment; none is inferred zero.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified natural unroasted pyrite concentrate delivered to roaster feed preparation |
| starting_condition_role | Supplied mineral feed, with actual upstream mining/beneficiation burden |
| product_classification_scope | Single-stage fluidised-bed oxidative roasted pyrite calcine; proposed narrower CPC 34530 relation |
| recursive_input_rule | Same-category returned calcine and captured fines are measured internal recycles, not new external purchases or independent credits; external same-category inputs need supplier datasets and applicability checks |
| upstream_dataset_requirement | Actual feed, utility, chemical, refractory, transport-to-gate and treatment providers; identity UUID alone is not a background dataset |
| disclosure | Actual starting gate, feed source/assay, physical units, delivered-product basis, gas/heat handoff, internal transfers, site allocation, provider cutoffs, waste fate and actual emission compartments |

Include upstream delivered feed and actual consumption burdens, air fans, startup and shutdown, roaster, waste-heat system, dry solids collection/cooling/handling, gas cleaning, wastewater treatment and bulk loading. Include incoming transport to the gate exactly once through measured shipment data and compatible upstream transport models; do not assume delivered-product UUIDs already include freight. Account for attributable infrastructure/refractory over real service life and document broader equipment-data cutoffs. Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`.

Gas cleaning may be subdivided internally, but identical transfers must cancel. SO2-rich gas is a mixture supplied to acid production, with composition and burden handoff specified. Downstream conversion, absorption, acid conditioning and its emissions belong to the receiving model. If acid operations cannot be separated from shared site burdens, expand the joint model and document it before using calcine guidance; do not omit acid-site common services or charge all acid-only operations to calcine. Residual site releases, water treatment and transferred waste retain actual fate; no zero-burden assumption for a marketable by-product.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| roasting | Feed preparation, oxidative roasting, heat recovery, gas cleaning, calcine cooling and bulk loading | required | Specified single-stage natural-pyrite route | Aggregated foreground manufacturing with separately metered stages and complete joint-product physical ledger | 1 kg dry accepted calcine |

Only the final calcine row carries the reference UUID. Retain stage meter readings and process diagrams in the data package; aggregation does not hide inter-stage physical transfers. Conditional rows are quantified if present; absence requires actual process/assay evidence. These cards are a minimum inventory, not permission to omit another measured material, fuel, waste or pollutant. Add one independently identified atomic row per additional stream. Package this bulk route without default bags or pallets.

### Process: Pyrite roasting and bulk calcine delivery (`roasting`)

#### Inputs

##### Product flows

###### Unroasted iron pyrites (`feed`)

Natural unroasted pyrite mineral concentrate supplied to the roaster; assay free water, Fe/S and phase, gangue and trace metals. Carry actual mining/beneficiation supplier burdens. Do not treat the feed as pure FeS2.

- Selected flow: Unroasted iron pyrites (`d39ec36e-8318-4a73-a652-a988fe60a58d`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_solids
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### Electricity (`power`)

Meter total purchased electricity for feed preparation, air fans, roasting auxiliaries, cooling, gas cleaning, wastewater treatment and loading. Separate on-site generation/internal consumption from exported power. Collect electricity on an energy/MJ basis and convert metered kWh using 3.6 MJ/kWh. Resolve a compatible electricity UUID and its native reference property against the actual voltage, geography, year and supplier before linking a background dataset; no default grid mix or unrelated site-case identity is specified.

- Selected flow: Electricity
- Flow property / unit: Electrical energy; compatible native reference property unresolved / MJ
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### natural gas in the gaseous state (`gas`)

Conditional fossil pipeline gas used for startup or auxiliary heating. Reference Volume/m3; retain temperature, absolute pressure, dry/wet composition and compressibility, and match the supplier background m3 definition. The secondary mass coefficient is not a density; methane CAS metadata does not establish pure methane or a site composition. Include real startup/shutdown consumption.

- Selected flow: natural gas in the gaseous state (`4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Volume / m3
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_gas
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### Air (`air`)

Ambient air delivered by the roaster fan is a mass-balance stream, not purchased pure oxygen. Determine dry and moist-air mass from metered volume and measured state/composition; count fan electricity once in power. The generic product identity does not supply an upstream air-production burden. Report the ambient intake as an auxiliary physical ledger where the modelling framework omits atmospheric air from LCI. Its miscellaneous-services classification does not establish a manufactured-air provider or justify purchased-air burdens.

- Selected flow: Air (`a483c088-1554-4193-b0d2-a8c9eca1e69f`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_gas
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### de-ionised water (`water`)

Purchased deionised water for waste-heat boiler make-up where used; native Mass/kg. Weigh or convert measured volume with measured density/temperature, track condensate return separately and link actual treatment/supply. Exclude internally recirculated water from fresh input.

- Selected flow: de-ionised water (`4f197bf0-7b3b-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### Slaked lime (`lime`)

Conditional powdered industrial slaked lime from traditional hydration for effluent neutralisation. The selected native identity describes European production; retain this source/route/grade restriction and resolve a different identity when actual supply is incompatible. Record commercial powder mass and actual Ca(OH)2 assay; slaking/milk preparation water is separate. The qualified UUID does not represent quicklime, lime milk or another supplier route. Other reagents need additional atomic rows and identity checks.

- Selected flow: Slaked lime (`49bf5000-b2da-4a30-8349-b0bb44171616`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_solids
- Sources: `metso-roasting-2022`

###### Roaster refractory lining (`lining_in`)

Replacement roaster refractory lining consumed over its measured service life; disclose composition, supplier, installation mass and campaign coverage. No generic aluminium oxide or fuel record substitutes for this component.

- Selected flow: Roaster refractory lining
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_solids
- Sources: `jrc-lvic-aaf-2007`

##### Waste flows

##### Elementary flows

###### river water (`river_water`)

Conditional direct river abstraction for cooling/scrubbing, Volume/m3; record basin, country, intake and discharge. Purchased water and in-house treated water retain supplier/abstraction separation to avoid double counting. This resource flow is not a liquid emission.

- Selected flow: river water (`805a7346-1664-4483-afe3-4b224be5e361`)
- Flow property / unit: Volume / m3
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `jrc-lvic-aaf-2007`

#### Outputs

##### Product flows

###### Roasted iron pyrites (`calcine`)

Accepted cooled roasted pyrite calcine delivered in bulk. Reference output is 1 kg dry accepted calcine, excluding free water, packaging and rejected solids. Retain as-dispatched wet mass and moisture conversion, total Fe, phase fractions, residual sulfur, gangue, trace metals, particle size, temperature and recipient specification. It is an iron-oxide-rich mineral mixture, not pure Fe2O3 or purified pigment.

- Selected flow: Roasted iron pyrites (`4cf6c76c-7236-4704-8c8f-73d026ec456f`)
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_product
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### Cleaned SO2-rich pyrite roasting gas (`process_gas`)

Cleaned SO2-rich roasting gas mixture transferred to a separately modelled acid plant before catalytic conversion; record total mixture mass, SO2/O2/N2/water and relevant contaminants, pressure/temperature and dry/wet basis. Internal inter-process transfer is not an air emission. No pure SO2 UUID is assigned. Match transfer quantity/state on both models and allocate the roasting joint burdens once.

- Selected flow: Cleaned SO2-rich pyrite roasting gas
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_gas
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### Exported waste-heat steam (`steam`)

Conditional exported waste-heat steam; measure gross outward delivered steam mass, absolute pressure, temperature/quality, feedwater and returned condensate state and quantity. Count gross boiler steam, internal use and vents separately, with only outward delivered steam here and condensate return recorded separately, never subtracted from this steam mass. Keep steam mass/kg and independently calculated usable net heat/MJ; no arbitrary mass-to-heat factor. UUID awaits compatible pressure/state and provider boundary.

- Selected flow: Exported waste-heat steam
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_heat
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`, `iapws-if97-2012`

##### Waste flows

###### Pyrite cinder (`dust_waste`)

Discarded pyrite cinder fines removed by collectors or product rejection and sent outside the foreground; weigh free water and assay contaminants, specify recipient and recovery/disposal. The broad cinder waste identity is conditional on actual roasted-pyrite solids. Dust internally returned or included in accepted calcine is not this output; captured dust is not airborne PM.

- Selected flow: Pyrite cinder (`7e956d6a-4b43-495a-8aac-ca00d22820f7`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `jrc-lvic-aaf-2007`

###### Dewatered pyrite-roasting scrubber sludge (`sludge`)

Dewatered sludge from roasting-gas cleaning/effluent neutralisation; record wet and dry mass, actual Fe/As/sulfate/lime content and acceptance/fate. It is not generic pyrite cinder, biological sludge or an assumed ferric arsenate formula.

- Selected flow: Dewatered pyrite-roasting scrubber sludge
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### Pyrite-roasting scrubber wastewater to off-site treatment (`wastewater`)

Conditional off-site transfer of scrubber wastewater to contracted treatment; measured volume and actual acidity/suspended solids/Fe/As/sulfate load with receiver specification. The specific manganese-residue washing wastewater identity is incompatible. Transfer is not final discharge; use final elementary releases only for treatment actually included inside the boundary, with no duplicate outsourced releases.

- Selected flow: Pyrite-roasting scrubber wastewater to off-site treatment
- Flow property / unit: Volume / m3
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `jrc-lvic-aaf-2007`

###### Spent pyrite-roaster refractory lining (`lining`)

Spent roaster refractory lining at replacement; actual material composition/metal contamination and recipient. Aluminium-production refractory and unspecified furnace slag are not demonstrated equivalents.

- Selected flow: Spent pyrite-roaster refractory lining
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_waste
- Sources: `jrc-lvic-aaf-2007`


###### Waste-heat boiler blowdown to treatment (`boiler_blowdown`)

Conditional external transfer of separately metered waste-heat boiler blowdown to treatment. Record actual dissolved-solids/chemical composition, pressure/cooling state, receiver and volume; internal treated return is only a balance transfer. Boiler blowdown is not pyrite scrubber wastewater and has no borrowed manganese-washing identity.

- Selected flow: Waste-heat boiler blowdown to treatment
- Flow property / unit: Volume / m3
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

##### Elementary flows

###### sulfur dioxide (`so2`)

Actual SO2 released to outdoor air after gas collection/controls, including fugitives and startup. Integrate matched concentrations and exhaust volume at the same state; exclude SO2 retained in exported gas or acid and do not substitute total SOx.

- Selected flow: sulfur dioxide (`fe0acd60-3ddc-11dd-ac48-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`, `epa-so2-6c-2017`

###### carbon dioxide (fossil) (`co2`)

Fossil CO2 from actually combusted natural gas and identified fossil carbon in feed. Reconcile carbon and exhaust monitoring; oxidation of iron sulfide alone produces no CO2. Do not adopt a producer carbon-free marketing claim for the whole site.

- Selected flow: carbon dioxide (fossil) (`08a91e70-3ddc-11dd-923d-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`

###### Carbon dioxide from mineral carbonate decomposition (`co2_mineral`)

Conditional CO2 from measured carbonate decomposition in gangue; quantify carbonate-derived carbon separately from fossil fuel and biogenic carbon. Do not assign a biogenic CO2 identity to mineral carbon.

- Selected flow: Carbon dioxide from mineral carbonate decomposition
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`

###### carbon dioxide (biogenic) (`co2_bio`)

Conditional biogenic CO2 only where actual biogenic carbon enters this route; determine carbon provenance and balance. Retain this LCI exchange even when a greenhouse-gas reporting convention excludes it from a particular total.

- Selected flow: carbon dioxide (biogenic) (`08a91e70-3ddc-11dd-9c15-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`

###### carbon monoxide (fossil) (`co`)

Actual fossil CO from incomplete oxidation of gas/identified fossil carbon; measured species mass, not CO2 equivalent or an assumed burner factor.

- Selected flow: carbon monoxide (fossil) (`08a91e70-3ddc-11dd-924e-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`

###### nitrogen monoxide (`no`)

Actual NO species mass released outdoors, from applicable measured combustion/roasting sources. If only total NOx as NO2 equivalent is reported, obtain validated speciation/conversion before filling NO and NO2 rows; never invent a split.

- Selected flow: nitrogen monoxide (`08a91e70-3ddc-11dd-96ee-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`

###### nitrogen dioxide (`no2`)

Actual NO2 species mass released outdoors. Do not duplicate total NOx alongside NO/NO2; N2O is a different species requiring a separate row if present.

- Selected flow: nitrogen dioxide (`08a91e70-3ddc-11dd-96e5-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`

###### particles (PM2.5) (`pm25`)

Escaped PM2.5 after collection, from stacks and feed/calcine handling. Measured aerodynamic-size fraction; no total dust-to-PM2.5 default.

- Selected flow: particles (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`, `epa-pm-201a-2020`

###### particles (PM2.5 - PM10) (`pm2510`)

Escaped particles above 2.5 and up to 10 micrometres. Derive this non-overlapping interval from paired cumulative measurements for the same source/time and sampling basis.

- Selected flow: particles (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`, `epa-pm-201a-2020`

###### particles (> PM10) (`pm10`)

Escaped particles above 10 micrometres, separately measured or obtained by compatible total-minus-PM10. Never sum total PM10 together with its nested PM2.5 fraction.

- Selected flow: particles (> PM10) (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `jrc-lvic-aaf-2007`, `epa-pm-201a-2020`

###### arsenic (`as_air`)

Actual airborne arsenic mass from trace feed contamination; analyse collected particulate and gaseous metal fractions without double counting arsenic as both compound and element. High-arsenic dearsenifying/two-stage routes are excluded.

- Selected flow: arsenic (`08a91e70-3ddc-11dd-91d7-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `metso-roasting-2022`, `epa-metals-29-2017`

###### mercury (`hg_air`)

Actual airborne mercury mass where assay/monitoring identifies it; retain sampling recovery, blanks and gaseous/particulate fractions.

- Selected flow: mercury (`fe0acd60-3ddc-11dd-a8c4-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `metso-roasting-2022`, `epa-metals-29-2017`

###### lead (`pb_air`)

Actual airborne lead mass where feed/lining contamination warrants measurement; no default emission proportional to total metal content.

- Selected flow: lead (`4d9a8790-3ddd-11dd-91dc-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `epa-metals-29-2017`

###### hydrogen chloride (`hcl`)

Conditional actual HCl species released after gas cleaning where feed chlorine is present; not elemental chlorine or undifferentiated acid gas.

- Selected flow: hydrogen chloride (`fe0acd60-3ddc-11dd-aab0-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `metso-roasting-2022`

###### hydrogen fluoride (`hf`)

Conditional actual HF species released after gas cleaning where feed fluorine is present; do not confuse HF mass with fluoride-ion or elemental-F mass.

- Selected flow: hydrogen fluoride (`08a91e70-3ddc-11dd-9804-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: `metso-roasting-2022`

###### arsenic (`as_water`)

Actual residual arsenic mass in final on-site-treated discharge to freshwater. Paired effluent concentration/volume and blanks; not arsenic transferred in off-site wastewater or sludge.

- Selected flow: arsenic (`08a91e70-3ddc-11dd-91df-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_effluent
- Sources: `jrc-lvic-aaf-2007`, `metso-roasting-2022`

###### iron (`iron_water`)

Actual total-iron element mass in final discharge to freshwater with dissolved/particulate analytical basis; not ferric oxide, ferrous sulfate or a guessed species mass.

- Selected flow: iron (`08a91e70-3ddc-11dd-9595-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_effluent
- Sources: `jrc-lvic-aaf-2007`

###### sulfate (`sulfate_water`)

Actual sulfate-ion mass in final freshwater discharge; record whether laboratory result is SO4 or S and convert with stated molar basis only. Exclude internal liquor recycle and outsourced treatment loads.

- Selected flow: sulfate (`fe0acd60-3ddc-11dd-ac59-0050c2490048`)
- Flow property / unit: Mass / kg
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_effluent
- Sources: `jrc-lvic-aaf-2007`


###### Water (`water_discharge`)

Conditional actual liquid water released to freshwater after included on-site cooling/effluent treatment, Volume/m3. Measure outfall volume and temperature, retaining pollutant loads as separate chemical exchanges. This is not river abstraction, off-site wastewater transfer, evaporation or an internally reused cooling-water stream.

- Selected flow: Water (`5e50fc01-19c6-4377-a1cc-bc65a12498ea`)
- Flow property / unit: Volume / m3
- Amount rule: Measure the defined physical exchange and normalize; per 1 kg reference flow.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_effluent
- Sources: `jrc-lvic-aaf-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| separate_physical_accounts | roasting | Keep a reconciled unallocated process ledger containing all actual calcine, cleaned gas and exported steam. D is accepted calcine dry output before allocation. Preserve full co-product output quantities and identical internal links; allocation never scales the physical gas or steam to an invented output. | `jrc-lvic-aaf-2007`, `metso-roasting-2022`, `ilcd-allocation-2010` |
| joint_burdens | roasting | Declare an attributional modelling goal. First subdivide dedicated calcine cooling/loading, gas cleaning and heat-delivery auxiliaries where physically separable. For genuinely joint roasting burdens, use a demonstrated causal physical relation if supported; otherwise use documented economic allocation at the actual separation gate and condition. For economic allocation, share_i = revenue_i / sum(revenue of all useful co-products); revenue uses measured output and representative matched-period gate price. An internal gas stream needs a defensible transfer value adjusted for downstream acid conversion/conditioning costs; final acid revenue is not an unadjusted gas price. Missing/zero/negative prices do not justify silently assigning zero burden; justify another method and sensitivity. Avoid adding steam credits to already allocated joint burdens. | `ilcd-allocation-2010` |
| product_waste_state | calcine, dust_waste, sludge, process_gas, steam | Determine useful product versus disposal obligation from actual specification, receiver and fate. Only accepted supplied calcine enters D. Waste/nonmarketable gas requires its actual treatment; it is not a positive co-product merely because a label says by-product. No default allocation percentage, yield, oxide purity, recipe or energy recovery is specified. | `ilcd-allocation-2010`, `jrc-lvic-aaf-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collect one representative matched operating year or explicitly justified campaign, including startup, shutdown, off-spec batches and outages; never normalise steady-state vendor values to an unrelated annual denominator. Keep sampling and lot linkage by process stage even though the model is aggregated. The protocol unit lists describe separate raw fields, not combined flow rows. No record is claimed already collected.

Each protocol retains raw, unallocated period records and the row total before normalisation. Include all attributable accepted, rejected, failed and zero-accepted-output batches, startup, shutdown, outages and rework within the same representative period; do not remove their inputs, wastes or releases because an individual batch has no accepted output. Reconcile applicable stocks and internal returns and attribute lining to its real service period. cp_product independently establishes positive D from unique accepted calcine output lots, reconciling production, dispatch and stocks without counting returned or reaccepted material twice. Apply period_normalisation exactly once to each reconciled period total; the protocol aggregation and calculation rule describe that same division, not successive divisions. A complete period with D <= 0 cannot produce a per-kg dataset and requires an explicitly justified wider representative period or an incomplete result. Machine or furnace-batch counts are not the denominator.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | roasting | calcine reference | Weighing and laboratory lot records | gross/tare/net mass; accepted/rejected lots; opening/closing stock; wet-basis free water; Fe/S/phase/gangue/metals; size; temperature; destination | Calibrated scales and traceable lot acceptance; representative sealed-lot moisture and mineral phase/chemical assays with validated methods, corrections and uncertainty | kg; mass fraction; degC | Each accepted lot; stock at period boundaries | Matched year or justified campaign | Same grade, route and site | per 1 kg reference flow | Scale calibration, certificates, sampling preservation, laboratory QA and receiver specification |
| cp_solids | roasting | feed, lime, lining_in | Receipt, dosing and service-life records | Individual commercial material mass; composition/purity/free water; delivered gate; supplier; internal returns; installation and life | Weigh each atomic material; supplier assay/phase verification; campaign-attributable refractory replacement records | kg; mass fraction | Each receipt/batch; each replacement | Same production period and measured refractory service coverage | Feed preparation, neutralisation and roaster | per 1 kg reference flow | Weighing checks, supplier/reference-basis match, solids and Fe/S balances |
| cp_utilities | roasting | electricity | Meter records | Purchase, on-site generation, internal use and export; equipment submeters; voltage; geography/year | Calibrated incoming and stage electricity meters; reconcile bills and meter coverage | kWh; MJ | Interval or daily; billing reconciliation | Same production period including downtime | All included stages; exclude separately allocated acid-only stages | per 1 kg reference flow | Meter calibration, missing interval estimation, generation/export reconciliation |
| cp_gas | roasting | gas, air, process_gas | Flow metering and analysis | Separate stream volume; absolute pressure; temperature; moisture; composition; compressibility; standard-state definition; gas supplier; transferred gas mass | Calibrated gas meters with matched state/composition analysis; density/state conversion trace; matched sending/receiving readings | m3; kg; K; Pa; mass or mole fraction | Interval and composition-change sampling | Same production period, including start/stop | Gas inlet, fan outlet and cleaned-gas handoff | per 1 kg reference flow | Meter QA, state and supplier-background agreement, independent sulfur balance |
| cp_water | roasting | water, river_water, wastewater, boiler_blowdown; separate actual external water returns/losses | Intake, transfer and balance records | Separate source/intake/return/evaporation/effluent volumes; density/temperature; basin; supplier; wastewater receiver and composition | Calibrated meters or weighing; matched intake and wastewater transfer; isolate internal recirculation | m3; kg; degC | Daily/interval and transfer batch | Same production period | Boiler/cooling/scrubbing and effluent system | per 1 kg reference flow | Meter QA, basin/fate evidence, actual density conversion and water balance |
| cp_heat | roasting | exported steam | State, mass and energy balance | Gross generated, internally used, exported and vented steam; pressure absolute; temperature; quality; condensate/feedwater mass and state; heat boundary | Calibrated mass/state meters at agreed interfaces; use IAPWS-IF97 in valid regions for ordinary water/steam; account for all actual returns | kg; K; Pa; kJ/kg; MJ | Interval; reconcile monthly | Same production period | Waste-heat boiler, internal users and export/return interface | per 1 kg reference flow | Calibration, quality evidence, state/return reconciliation, separate usable heat calculation and receiving provider match |
| cp_waste | roasting | dust_waste, sludge, lining | Weighbridge and laboratory/fate records | Separate wet/dry mass; free water; metals/sulfate/composition; collector returns; receiver and treatment | Weigh each waste stream independently; representative compositional assays; transfer and acceptance manifests | kg; mass fraction | Each batch/shipment and replacement | Same production period with lifetime attribution for lining | Collectors, effluent treatment and roaster | per 1 kg reference flow | Moisture QA, receiver compatibility, internal-return cancellation and contamination evidence |
| cp_air | roasting | Individual gaseous, metal and particulate emissions | Stack/fugitive monitoring and source mass balance | Species concentration, exhaust volume, dry/wet/temperature/pressure/O2 reference, duration, detection limits, carbon provenance, particle-size fractions, startup and fugitives | Calibrated species-specific monitoring or validated source balance; SO2 instrumental scope per EPA6C with all applicable referenced methods; metals per EPA29 or documented equivalent with applicable dependencies; validated size-selective PM and separate fugitive surveys; no vendor factor | kg; mg/m3; m3; h | Matched intervals; validated representative tests with coverage of operating modes | Same production period | Actual outdoor releases after control, across all included stages | per 1 kg reference flow | Calibration, blanks/recovery, interferences, compatible exhaust basis, speciation, source coverage and uncertainty; nondetects are bounded, not assumed zero |
| cp_effluent | roasting | as_water, iron_water, sulfate_water, water_discharge | Paired final-discharge laboratory and volume records | Actual receiving freshwater; volume; representative concentrations; total/dissolved basis; species versus element; detection limits; bypasses | Flow-proportional composite samples or justified equivalent; calibrated volume and validated laboratory methods; final discharge only | m3; mg/L; kg | Paired volume and representative samples, including nonroutine release | Same production period | Only on-site treatment final freshwater boundary | per 1 kg reference flow | Laboratory blanks, recovery, speciation basis, recipient/fate verification and treatment/transfer de-duplication |

For particulate sampling, EPA201A §§1.1-1.6 supports paired filterable PM10/PM2.5 intervals only under its valid droplet-free conditions. It cannot establish a dry-size split for wet-scrubber droplets. Use a validated compatible alternative for wet exhaust. Quantify condensable particulate separately under applicable methods (201A refers to Method202 where needed) and do not assume it has the same measured size distribution or add it twice. If applying Method201A §3.1, identify its explicit convention assigning condensable PM to PM2.5 and add it once on that basis; keep the filterable subtraction inputs separate. Retain actual sampling conditions and uncertainty; the cited methods have dependent procedures and are not standalone SOPs (`epa-pm-201a-2020`).

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | Divide each physically measured, stock-corrected period exchange by the same positive dry accepted calcine D. Reference product is exactly 1 kg. Retain raw unallocated physical totals separately from allocation of joint burdens. Each protocol retains raw, unallocated period records and the row total before normalisation. Include all attributable accepted, rejected, failed and zero-accepted-output batches, startup, shutdown, outages and rework within the same representative period; do not remove their inputs, wastes or releases because an individual batch has no accepted output. Reconcile applicable stocks and internal returns and attribute lining to its real service period. cp_product independently establishes positive D from unique accepted calcine output lots, reconciling production, dispatch and stocks without counting returned or reaccepted material twice. Apply period_normalisation exactly once to each reconciled period total; the protocol aggregation and calculation rule describe that same division, not successive divisions. A complete period with D <= 0 cannot produce a per-kg dataset and requires an explicitly justified wider representative period or an incomplete result. Machine or furnace-batch counts are not the denominator. | Row records; D; stocks; applicable collection protocol | Quantity per 1 kg reference flow | `ilcd-allocation-2010` |
| effluent_load | as_water, iron_water, sulfate_water | For paired samples, mass kg = sum(concentration mg/L * corresponding water volume m3) / 1000. Concentration and volume cover the same outfall/time; retain whether species or elemental mass. | Paired concentrations/volumes and QA; cp_effluent | Species mass before normalisation | `jrc-lvic-aaf-2007` |
| air_load | so2, co2, co2_mineral, co2_bio, co, no, no2, pm25, pm2510, pm10, as_air, hg_air, pb_air, hcl, hf | Mass kg = sum(concentration mg/m3 * corresponding exhaust volume m3) / 1000000. Undo any O2 reporting correction consistently and align dry/wet state, pressure/temperature before multiplying. Fugitive releases are separately measured/validated and added once. | Species-specific concentrations and exhaust volume; duration/state; cp_air | Species mass before normalisation | `epa-so2-6c-2017`, `epa-metals-29-2017` |
| nonoverlap_particles | pm25, pm2510, pm10 | Use matched filterable PM2.5, PM10 and total filterable particulate measurements: interval 2.5-10 = PM10 - PM2.5; above10 = total - PM10. Require nonnegative fractions within uncertainty; never fabricate a split from a single total or add cumulative fractions to their component intervals. | Matched size-selective measurements; cp_air | Non-overlapping particulate masses | `epa-pm-201a-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| physical_identity | all inventory rows | Verify complete native flow name, CAS where present, route, classification/comment conflicts, reference property/mean, unit group and actual physical stream. Generic identity does not verify provider or quantities. Unresolved identity remains explicit; never substitute nearby product/waste/species. | Native identity, supplier/lot/assay and state documentation |
| mass_sulfur_carbon | roasting | Retain process diagram and independent Fe/S/dry-solids/water/carbon balances before environmental-burden allocation. Reconcile oxidation oxygen, gas sulfur, material moisture, dust returns, stock and observed releases; flag closure outside measured uncertainty without inventing a correction flow. | cp_product, cp_solids, cp_gas, cp_water, cp_waste, cp_air, cp_effluent |
| quantitative_scope | all inventory rows | Require site measurements and documented uncertainty. Source acid-denominator ratios, vendor temperature/capacity, gas percentages and single-plant energy examples are not per-calcine defaults. No numerical recipe, yield, purity or allocation share is transferred here. | Actual sampling and meters; `jrc-lvic-aaf-2007`, `metso-roasting-2022` |
| completeness | roasting | Screen real feed/lining composition and operating conditions for every additional metal, gas species, wastewater constituent, reagent, fuel or packaging component; add atomic rows as required. PM and metal mass components may describe the same physical particulate for chemistry but must not be summed as independent total solids. | Source diagram, laboratory screening and inventories |

## 9. Validation Rules

Reject a data package with undefined/nonpositive D, incompatible dry/wet quantities, absent product/route qualification, missing physical balance or hidden joint-product allocation. Require one final reference output; any inter-stage product transfers must cancel with identical quantities.

Do not declare complete environmental LCI when actual SO2/NOx speciation, PM size partition, gas basis, steam state/usable heat, emission/discharge compartment, required additional pollutant or background reference quantity remains unknown. Treat identity resolution and provider compatibility separately. A missing UUID is an explicit linking gap; no process is approved merely because UUID lookup succeeded. Future measurements can fulfil this method; until supplied, the produced dataset must disclose its incomplete fields. EPA6C/29 references are technical measurement evidence for the cited editions, not a claim of current regulatory certification or a complete standalone testing SOP.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for qualified roasted pyrite calcine |
| downstream_use | secondary_dataset; background_dataset after declared independent methodology and data review |
| allowed_use | Iron-bearing raw-material supply at the stated dry product gate with actual receiving-specification applicability |
| excluded_use | Pure iron oxide/pigment; unroasted pyrite; sulphate decomposition; gold/copper-specific roasting; unspecified calcine blends; acid manufacturing method; assumed avoided steel/acid/steam credits |
| required_metadata | All reference qualifiers, actual source/gate, physical raw totals, sampling period, process stages, provider reference bases, gas/steam handoffs and allocation |
| required_quality_disclosure | All missing identities, measurements and upstream/treatment coverage; bounded nondetects, uncertainty, allocation sensitivity and applicable source limitations |
| update_trigger | Feed/phase/impurity change, roasting route or control change, gate/moisture basis change, utility provider/state change, co-product price/fate change or new measured pollutant |

## 11. Data Sources

| Source id | Type | Reference | Used for | Limitations |
| --- | --- | --- | --- | --- |
| jrc-lvic-aaf-2007 | official_guidance | European Commission JRC, Large Volume Inorganic Chemicals — Ammonia, Acids and Fertilisers, August2007, §4.2.3.3, printed157/PDF185; process overview Figure4.3 (printed151/PDF179) and §1.4.6 physical balances (printed19/PDF47). https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf | Pyrite fluidised-bed oxidation, jointly produced iron oxide/energy, multistage gas cleaning and scrubber-water treatment; distinction from §4.2.3.4 sulphate decomposition | Historical BREF technical route, not a site measurement. Do not use its per-acid feed ratio, gas concentrations or adjacent sulphate-route fuel list as calcine defaults. |
| metso-roasting-2022 | literature | Metso Outotec, Roasting Solutions, brochure4788-08/2022, PDF2-3 and route table PDF4. https://www.metso.com/globalassets/portfolio/technologies/roasting/brochure-roasting-solutions-4788-08-22-en-met.pdf?r=3 | Actual equipment maker's process decomposition, pyrite concentrate-to-oxide route, heat recovery, separate gas cleaning/acid stages and impurity/effluent handling | Manufacturer process capability, not actual site quantities. Its pyrite recommendation for no-trace-As feed cannot be expanded to high-arsenic two-stage route; other columns are different processes. No composition or temperature default. |
| ilcd-allocation-2010 | official_guidance | JRC ILCD Handbook, General guide for LCA, Detailed guidance, March2010, §7.9.2-7.9.3, especially printed256-257/PDF276-277 and printed264/PDF284. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Subdivision, justified physical/economic allocation and actual co-product condition at allocation gate | Choose applicable attributional modelling situation; no default calcine/gas/steam shares, substitution credits or market prices. |
| epa-so2-6c-2017 | official_guidance | US EPA Method6C, edition8/2/2017, §§1-2 and applicable dependent methods. https://www.epa.gov/sites/default/files/2017-08/documents/method_6c.pdf | Instrumental stationary-source SO2 measurement scope, QA and SO2 species identity | Does not itself fully specify all procedures; Methods1/4/6/7E and actual permitted testing scheme must be considered. Internet publication states it is not the official regulatory text. No emission factor or regulatory compliance claim. |
| epa-metals-29-2017 | official_guidance | US EPA Method29, edition8/2/2017, §§1-2. https://www.epa.gov/sites/default/files/2017-08/documents/method_29.pdf | Stationary-source As/Pb/Hg and other metals, particulate and gaseous collection and QA | Dependencies include Methods5/12; actual validated laboratory/speciation basis required. Not a quantitative emission range or current compliance certification. |
| iapws-if97-2012 | standard | IAPWS R7-97(2012), Revised Release on Industrial Formulation1997 for Water and Steam, §2 and corresponding phase-region equations. https://iapws.org/technical-guidance/release/IF97-Rev.download | Ordinary water/steam state-dependent enthalpy and region validity | Requires actual pressure/temperature/quality and boundary return flows. No generic usable MJ/kg, export pressure or provider supplied. |
| epa-pm-201a-2020 | official_guidance | US EPA Method201A, October7 2020, §§1.1-1.6 and §3.1 (PDF1-3). https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | Filterable PM10/PM2.5 and coarse interval measurement, paired total and size-fraction conditions | Invalid with water droplets; dependent Methods1-5 and condensable Method202 where applicable. No universal split or emission factor. |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3.0 Structure, 30June2025, code34530. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official roasted-pyrites classification label, distinct from 16120 unroasted pyrites and 14100 ordinary iron ores | Classification label establishes no manufacturing route, allocation or quantity. |
