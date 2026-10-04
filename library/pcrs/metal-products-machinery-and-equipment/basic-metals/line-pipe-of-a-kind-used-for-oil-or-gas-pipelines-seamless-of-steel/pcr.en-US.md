---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-seamless-of-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Seamless steel line pipe for oil or gas pipelines

## 1. Scope and Applicability

This candidate covers seamless steel pipe supplied for oil or gas pipeline service after manufacturing acceptance. Declare carbon/non-alloy, low-alloy or other specified steel grade individually; no grade, composition, diameter, thickness or treatment range is assumed. It excludes longitudinal/spiral welded pipe, drilling casing/tubing/drill pipe, noncircular profiles, fittings, bends fabricated after pipe manufacture and installed pipeline construction/use. Upstream metallic iron, steelmaking and casting are linked supplier burdens, not duplicated pipe-forming methods.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-seamless-of-steel |
| classification_refs | CPC 3.0:41281 |
| covered_products | Seamless steel line pipe for oil or gas pipelines |
| excluded_products | Welded pipe; OCTG; hollow profiles; fittings; installed pipeline |
| representative_product | Accepted seamless steel line pipe |
| production_route | Hot piercing/elongation/rolling or actual extrusion, conditional cold reduction and heat treatment, acceptance and actual surface system |
| market_state | Net accepted pipe at declared manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Seamless steel line pipe for oil or gas pipelines |
| How much | 1 kg |
| How well | oil/gas linepipe application; specification and edition; product specification level; steel grade and heat chemistry; outside diameter, wall thickness and length; seamless forming route; hot/cold finishing; delivery heat-treatment condition; sour-service requirements; inspection and hydrotest acceptance; surface/coating system and coating mass; end preparation; site, period and feed starting state |
| How long or cycle | One supply at manufacturing gate; no pipeline service life is claimed |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted seamless steel line pipe |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | oil/gas linepipe application; specification and edition; product specification level; steel grade and heat chemistry; outside diameter, wall thickness and length; seamless forming route; hot/cold finishing; delivery heat-treatment condition; sour-service requirements; inspection and hydrotest acceptance; surface/coating system and coating mass; end preparation; site, period and feed starting state |

Declare all qualifiers in dataset metadata. D is the positive accepted net mass for the matched reporting period, with adherent coating included only when it is part of the declared delivered product. Separate steel-body and coating masses. Packaging, rejected lots and free test water are excluded.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_final_product measures D; each exchange normalizes its attributable period amount by D. |
| conversion | all exchanges | Row-specific property | kg; m3; kWh; MJ | Retain raw units and conversion evidence: 1 kWh = 3.6 MJ. Fuel volume needs measured net calorific value at declared temperature/pressure; wet wastes need solids and metal fraction. |
| balance | production | Mass | kg | Retain separate gross masses of received steel, accepted steel body, scrap, wet solids, water and opening/closing work in progress; do not add contained-iron mass to gross steel mass. Close the elemental iron balance on one contained-Fe basis: measured Fe in external feed plus opening work in progress = measured Fe in accepted steel body, external scrap, scale, sludge and effluent plus closing work in progress and every other measured Fe release. Derive each term from its own measured gross mass and Fe assay; use matched concentration and volume for effluent. Retain carbon and each actual alloy-element oxidation, release, retained mass and chemical-reaction records as separate elemental balances. Account for oxygen uptake, water content and actual reaction products; never assume pure iron, common composition, a fixed conversion or an invented yield. Cancel internal rework; retain its repeated energy and chemistry. Close water makeup + opening storage = external transfer + discharge + evaporation + product carryover + closing storage; close acid/chemical active-component stock, reaction, carryover and waste balances with measured uncertainty. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received solid steel billet/bloom/bar or purchased hot-finished hollow tube; declare upstream completed operations and temperature |
| starting_condition_role | Supplier intermediate product |
| product_classification_scope | Seamless steel line pipe for oil or gas pipelines |
| recursive_input_rule | Purchased same-category pipe carries distinct supplier burden; internal rework transfers cancel and never receive substitution credits |
| upstream_dataset_requirement | Link actual feed steel route, electricity, each fuel/chemical, transport and waste destination; disclosed gaps cannot mean zero |
| disclosure | oil/gas linepipe application; specification and edition; product specification level; steel grade and heat chemistry; outside diameter, wall thickness and length; seamless forming route; hot/cold finishing; delivery heat-treatment condition; sour-service requirements; inspection and hydrotest acceptance; surface/coating system and coating mass; end preparation; site, period and feed starting state |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | all processes | Include actual preparation, heating, seamless forming, cold finishing if used, all interpass/delivery heat treatment, descaling, end finishing, acceptance, surface operations and attributable utilities through the stated gate. | `ec-fmp-bref-2022`; `api-5l-announcement-2026` |
| boundary_surface | surface_dispatch | Bare and protected/coated pipe are separate declared states. Include the actual contract coating within the gate; outsourced coating carries supplier processing and transport. Later field-joint coating and installation are excluded. | `tenaris-coatings` |
| boundary_site | all exchanges | Include proportional handling, maintenance consumables and pollution controls. Justify infrastructure/capital exclusions or link their attributable service. Add every actual chemical, fuel, waste, emission and direct water source as an atomic row; these candidate cards do not replace a site audit. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| feed_receipt | Supplier feed receipt and preparation | required | Receive and trace actual solid feed or purchased hollow tube, declaring supplier operations and temperature. | Foreground manufacturing | per 1 kg reference flow |
| hot_forming | Feed preparation, heating and seamless hot forming | conditional | When solid billet/bloom/bar enters: crop/condition, reheat, pierce then elongate and size by actual mandrel/plug/pilger route; include hot extrusion if used. Purchased hollow tube bypasses only supplier-performed operations. | Foreground manufacturing | per 1 kg reference flow |
| cold_finish | Conditional pickling and cold drawing or pilgering | conditional | Only when actually used for the declared linepipe: descaling, degreasing, rinse, lubrication and repeated cold reduction; include interpass annealing in heat_treatment. | Foreground manufacturing | per 1 kg reference flow |
| heat_treatment | Delivery-condition heat treatment and straightening | conditional | Record actual normalizing, annealing, quench/temper and straightening; do not assume every grade follows every treatment. | Foreground manufacturing | per 1 kg reference flow |
| acceptance | End finishing, inspection and hydrotest | required | Cut/bevel, sample and test, perform required NDT and hydrotest, segregate rejects, mark and trace accepted pipe. Test pressure/time comes from the actual order specification. | Foreground manufacturing | per 1 kg reference flow |
| surface_dispatch | Conditional surface protection and gate dispatch | required | Record bare, temporarily protected or contract-coated state. Include actual abrasive cleaning, coating/cure, handling and separately measured packaging. | Foreground manufacturing | per 1 kg reference flow |
| water_controls | Shared water loops and pollution controls | required | Cooling, descaling, quenching, hydrotest and pickling loops, treatment and air controls; allocate each shared burden once. | Foreground manufacturing | per 1 kg reference flow |

### Process: Supplier feed receipt and preparation (`feed_receipt`)

#### Inputs

##### Product flows

###### Steel billet for seamless tube manufacture (`steel_billet`)

Use actual round billet/bloom for unalloyed/medium-alloy tubes; high-chrome steel may require rolled round bar from cast billet. Declare actual grade and supplier starting temperature; link full steelmaking/casting burden upstream. No steel composition or billet yield is prescribed.

- Selected flow: Steel billet for seamless tube manufacture
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_steel_billet / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_billet`
- Sources: `ec-fmp-bref-2022`

###### Purchased hot-finished seamless steel hollow tube (`purchased_hollow`)

Alternative purchased feed only; supplier burden includes already completed heating and forming. Do not count it together with billet for the same material path.

- Selected flow: Purchased hot-finished seamless steel hollow tube
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_purchased_hollow / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_hollow`
- Sources: `ec-fmp-bref-2022`

###### Purchased plant electricity (`feed_receipt_electricity`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable reporting-period amount from cp_feed_receipt_electricity / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed_receipt_electricity`
- Sources: `ec-fmp-bref-2022`

### Process: Feed preparation, heating and seamless hot forming (`hot_forming`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`hot_forming_electricity`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable reporting-period amount from cp_hot_forming_electricity / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_electricity`
- Sources: `ec-fmp-bref-2022`

###### Natural gas supplied for combustion (`hot_forming_natural_gas`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Natural gas supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable reporting-period amount from cp_hot_forming_natural_gas / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_natural_gas`
- Sources: `ec-fmp-bref-2022`

###### Fuel oil supplied for combustion (`hot_forming_fuel_oil`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Fuel oil supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable reporting-period amount from cp_hot_forming_fuel_oil / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_fuel_oil`
- Sources: `ec-fmp-bref-2022`

###### Lubricating oil for tube rolling (`rolling_oil`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Lubricating oil for tube rolling
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_rolling_oil / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rolling_oil`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Iron oxide mill scale (`mill_scale`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Iron oxide mill scale
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_mill_scale / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mill_scale`
- Sources: `ec-fmp-bref-2022`

###### Steel scrap (`hot_scrap`)

Weigh cropped ends and rejected hot-formed tube leaving the boundary; retain actual scrap fate and metal assay. Internal rework stays in throughput records.

- Selected flow: Steel scrap `21cb9bfe-3598-416d-b127-9e94906f80cc`
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_hot_scrap / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_scrap`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`hot_forming_co2`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_hot_forming_co2 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_co2`
- Sources: `ec-fmp-bref-2022`

###### Nitrogen oxides, as NO2, to air (`hot_forming_nox`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_hot_forming_nox / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_nox`
- Sources: `ec-fmp-bref-2022`

###### Carbon monoxide, to air (`hot_forming_co`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_hot_forming_co / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_co`
- Sources: `ec-fmp-bref-2022`

###### Sulfur dioxide, to air (`hot_forming_so2`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_hot_forming_so2 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_so2`
- Sources: `ec-fmp-bref-2022`

###### Particulate matter smaller than 2.5 micrometres, to air (`hot_forming_dust`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_hot_forming_dust / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_forming_dust`
- Sources: `ec-fmp-bref-2022`

### Process: Conditional pickling and cold drawing or pilgering (`cold_finish`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`cold_finish_electricity`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable reporting-period amount from cp_cold_finish_electricity / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold_finish_electricity`
- Sources: `ec-fmp-bref-2022`

###### Hydrochloric acid for pickling (`hcl`)

Conditional actual formulation only: record purchased concentration and active mass; do not count both pickling acids unless both are used. Additional bath chemicals require separate named rows.

- Selected flow: Hydrochloric acid for pickling
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_hcl / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hcl`
- Sources: `ec-fmp-bref-2022`

###### Sulfuric acid for pickling (`h2so4`)

Conditional actual formulation only: record purchased concentration and active mass; do not count both pickling acids unless both are used. Additional bath chemicals require separate named rows.

- Selected flow: Sulfuric acid for pickling
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_h2so4 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_h2so4`
- Sources: `ec-fmp-bref-2022`

###### Sodium hydroxide for degreasing (`naoh`)

Conditional actual formulation only: record purchased concentration and active mass; do not count both pickling acids unless both are used. Additional bath chemicals require separate named rows.

- Selected flow: Sodium hydroxide for degreasing
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_naoh / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_naoh`
- Sources: `ec-fmp-bref-2022`

###### Cold drawing lubricating oil (`drawing_oil`)

Conditional actual formulation only: record purchased concentration and active mass; do not count both pickling acids unless both are used. Additional bath chemicals require separate named rows.

- Selected flow: Cold drawing lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_drawing_oil / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drawing_oil`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Spent hydrochloric acid pickling liquor (`spent_hcl`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Spent hydrochloric acid pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_spent_hcl / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_hcl`
- Sources: `ec-fmp-bref-2022`

###### Spent sulfuric acid pickling liquor (`spent_h2so4`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Spent sulfuric acid pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_spent_h2so4 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_h2so4`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Hydrogen chloride, to air (`acid_mist`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Hydrogen chloride, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_acid_mist / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acid_mist`
- Sources: `ec-fmp-bref-2022`

### Process: Delivery-condition heat treatment and straightening (`heat_treatment`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`heat_treatment_electricity`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_electricity / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_electricity`
- Sources: `ec-fmp-bref-2022`

###### Natural gas supplied for combustion (`heat_treatment_natural_gas`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Natural gas supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_natural_gas / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_natural_gas`
- Sources: `ec-fmp-bref-2022`

###### Fuel oil supplied for combustion (`heat_treatment_fuel_oil`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Fuel oil supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_fuel_oil / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_fuel_oil`
- Sources: `ec-fmp-bref-2022`

###### Heat-treatment quenching oil (`quench_oil`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Heat-treatment quenching oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_quench_oil / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_quench_oil`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Spent quenching oil (`spent_quench_oil`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Spent quenching oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_spent_quench_oil / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_quench_oil`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`heat_treatment_co2`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_co2 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_co2`
- Sources: `ec-fmp-bref-2022`

###### Nitrogen oxides, as NO2, to air (`heat_treatment_nox`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_nox / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_nox`
- Sources: `ec-fmp-bref-2022`

###### Carbon monoxide, to air (`heat_treatment_co`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_co / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_co`
- Sources: `ec-fmp-bref-2022`

###### Sulfur dioxide, to air (`heat_treatment_so2`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_so2 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_so2`
- Sources: `ec-fmp-bref-2022`

###### Particulate matter smaller than 2.5 micrometres, to air (`heat_treatment_dust`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_heat_treatment_dust / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_treatment_dust`
- Sources: `ec-fmp-bref-2022`

### Process: End finishing, inspection and hydrotest (`acceptance`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`acceptance_electricity`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable reporting-period amount from cp_acceptance_electricity / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance_electricity`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Steel test specimen scrap (`test_sample`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Steel test specimen scrap
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_test_sample / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_sample`
- Sources: `ec-fmp-bref-2022`

###### Rejected seamless steel line pipe for external recycling (`rejected_pipe`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Rejected seamless steel line pipe for external recycling
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_rejected_pipe / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_pipe`
- Sources: `ec-fmp-bref-2022`

### Process: Conditional surface protection and gate dispatch (`surface_dispatch`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`surface_dispatch_electricity`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_electricity / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_electricity`
- Sources: `ec-fmp-bref-2022`

###### Natural gas supplied for combustion (`surface_dispatch_natural_gas`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Natural gas supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_natural_gas / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_natural_gas`
- Sources: `ec-fmp-bref-2022`

###### Fuel oil supplied for combustion (`surface_dispatch_fuel_oil`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Fuel oil supplied for combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_fuel_oil / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_fuel_oil`
- Sources: `ec-fmp-bref-2022`

###### Steel grit blast-cleaning abrasive (`abrasive`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Steel grit blast-cleaning abrasive
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_abrasive / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abrasive`
- Sources: `tenaris-coatings`

###### Fusion-bonded epoxy coating powder (`epoxy`)

Only for the delivered surface system actually ordered; record formulation, layer mass and losses. PE and PP are distinct alternatives; add actual internal liquid epoxy components separately.

- Selected flow: Fusion-bonded epoxy coating powder
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_epoxy / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_epoxy`
- Sources: `tenaris-coatings`

###### Polyolefin coating copolymer adhesive (`adhesive`)

Only for the delivered surface system actually ordered; record formulation, layer mass and losses. PE and PP are distinct alternatives; add actual internal liquid epoxy components separately.

- Selected flow: Polyolefin coating copolymer adhesive
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_adhesive / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_adhesive`
- Sources: `tenaris-coatings`

###### Polyethylene coating resin (`pe`)

Only for the delivered surface system actually ordered; record formulation, layer mass and losses. PE and PP are distinct alternatives; add actual internal liquid epoxy components separately.

- Selected flow: Polyethylene coating resin
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_pe / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pe`
- Sources: `tenaris-coatings`

###### Polypropylene coating resin (`pp`)

Only for the delivered surface system actually ordered; record formulation, layer mass and losses. PE and PP are distinct alternatives; add actual internal liquid epoxy components separately.

- Selected flow: Polypropylene coating resin
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_pp / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pp`
- Sources: `tenaris-coatings`

###### Temporary rust-preventive oil (`preservative`)

Only for the delivered surface system actually ordered; record formulation, layer mass and losses. PE and PP are distinct alternatives; add actual internal liquid epoxy components separately.

- Selected flow: Temporary rust-preventive oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_preservative / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preservative`
- Sources: `tenaris-coatings`

###### Steel packaging strap (`strapping`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Steel packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_strapping / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_strapping`
- Sources: `ec-fmp-bref-2022`

###### Wooden transport spacer (`wood`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Wooden transport spacer
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_wood / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`
- Sources: `ec-fmp-bref-2022`

###### Polyethylene end protector (`cap`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Polyethylene end protector
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_cap / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cap`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Product flows

###### Accepted seamless steel line pipe (`final_product`)

D is weighed accepted net delivered pipe, including declared adherent coating, excluding packaging and free test water. Report steel and coating mass separately.

- Selected flow: Accepted seamless steel line pipe
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_product`
- Sources: `api-5l-announcement-2026`

##### Waste flows

###### Spent steel blasting grit (`spent_grit`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Spent steel blasting grit
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_spent_grit / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_grit`
- Sources: `ec-fmp-bref-2022`

###### Waste fusion-bonded epoxy powder (`coating_waste`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Waste fusion-bonded epoxy powder
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_coating_waste / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coating_waste`
- Sources: `tenaris-coatings`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`surface_dispatch_co2`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_co2 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_co2`
- Sources: `ec-fmp-bref-2022`

###### Nitrogen oxides, as NO2, to air (`surface_dispatch_nox`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_nox / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_nox`
- Sources: `ec-fmp-bref-2022`

###### Carbon monoxide, to air (`surface_dispatch_co`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_co / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_co`
- Sources: `ec-fmp-bref-2022`

###### Sulfur dioxide, to air (`surface_dispatch_so2`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_so2 / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_so2`
- Sources: `ec-fmp-bref-2022`

###### Particulate matter smaller than 2.5 micrometres, to air (`surface_dispatch_dust`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_surface_dispatch_dust / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_dispatch_dust`
- Sources: `ec-fmp-bref-2022`

### Process: Shared water loops and pollution controls (`water_controls`)

#### Inputs

##### Product flows

###### Purchased plant electricity (`water_controls_electricity`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased plant electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable reporting-period amount from cp_water_controls_electricity / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_controls_electricity`
- Sources: `ec-fmp-bref-2022`

###### Purchased industrial process water (`freshwater`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Purchased industrial process water
- Flow property / unit: Volume / m3
- Amount rule: Attributable reporting-period amount from cp_freshwater / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freshwater`
- Sources: `ec-fmp-bref-2022`

###### Calcium hydroxide for wastewater neutralization (`lime`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Calcium hydroxide for wastewater neutralization
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_lime / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lime`
- Sources: `ec-fmp-bref-2022`

###### Polyacrylamide flocculant (`polymer`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_polymer / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polymer`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Water withdrawn from river (`riverwater`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Water withdrawn from river
- Flow property / unit: Volume / m3
- Amount rule: Attributable reporting-period amount from cp_riverwater / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_riverwater`
- Sources: `ec-fmp-bref-2022`

#### Outputs

##### Waste flows

###### Industrial wastewater transferred to treatment (`wastewater`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Industrial wastewater transferred to treatment
- Flow property / unit: Volume / m3
- Amount rule: Attributable reporting-period amount from cp_wastewater / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `ec-fmp-bref-2022`

###### Oily iron-bearing water-treatment sludge (`sludge`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Oily iron-bearing water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_sludge / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sludge`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Treated water discharged to river (`water_release`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Treated water discharged to river
- Flow property / unit: Volume / m3
- Amount rule: Attributable reporting-period amount from cp_water_release / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_release`
- Sources: `ec-fmp-bref-2022`

###### Iron dissolved in discharged river water (`iron_release`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Iron dissolved in discharged river water
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_iron_release / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_iron_release`
- Sources: `ec-fmp-bref-2022`

###### Petroleum hydrocarbons in discharged river water (`oil_release`)

Record when this exchange crosses the selected process boundary; document absence separately from unknown quantity.

- Selected flow: Petroleum hydrocarbons in discharged river water
- Flow property / unit: Mass / kg
- Amount rule: Attributable reporting-period amount from cp_oil_release / D; reconcile stock, internal transfers and allocation first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oil_release`
- Sources: `ec-fmp-bref-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint operations | Prefer subdivision; otherwise substantiate physical causality. Economic allocation is fallback with consistent period/currency/prices and sensitivity; retain unallocated totals. Do not use pipe mass alone as a furnace allocation driver unless it explains grade, heat cycle and loading differences. | `ef-allocation-2021` |
| allocation_rework | rework and residue | Retain all repeated processing energy and material for reworked/retested lots. Cancel internal transfer quantities; measure external scrap, scale and sludge separately and apply actual treatment once. Sale alone does not prove co-product status; disclose recycling allocation and never assume an avoided-steel credit. | `ef-allocation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_billet | feed_receipt | steel_billet | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_purchased_hollow | feed_receipt | purchased_hollow | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_feed_receipt_electricity | feed_receipt | feed_receipt_electricity | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Read process submeter by interval; reconcile to site purchased power; allocate auxiliaries by measured machine hours/load and retain voltage, grid region and supply year. | kWh | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_electricity | hot_forming | hot_forming_electricity | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Read process submeter by interval; reconcile to site purchased power; allocate auxiliaries by measured machine hours/load and retain voltage, grid region and supply year. | kWh | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_cold_finish_electricity | cold_finish | cold_finish_electricity | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Read process submeter by interval; reconcile to site purchased power; allocate auxiliaries by measured machine hours/load and retain voltage, grid region and supply year. | kWh | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_electricity | heat_treatment | heat_treatment_electricity | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Read process submeter by interval; reconcile to site purchased power; allocate auxiliaries by measured machine hours/load and retain voltage, grid region and supply year. | kWh | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_acceptance_electricity | acceptance | acceptance_electricity | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Read process submeter by interval; reconcile to site purchased power; allocate auxiliaries by measured machine hours/load and retain voltage, grid region and supply year. | kWh | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_electricity | surface_dispatch | surface_dispatch_electricity | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Read process submeter by interval; reconcile to site purchased power; allocate auxiliaries by measured machine hours/load and retain voltage, grid region and supply year. | kWh | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_water_controls_electricity | water_controls | water_controls_electricity | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Read process submeter by interval; reconcile to site purchased power; allocate auxiliaries by measured machine hours/load and retain voltage, grid region and supply year. | kWh | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_natural_gas | hot_forming | hot_forming_natural_gas | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Meter gas volume with declared pressure/temperature and measured net calorific value; retain supplier composition and convert to MJ, not an assumed gas factor. | MJ | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_fuel_oil | hot_forming | hot_forming_fuel_oil | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Weigh fuel oil and use lot-specific net calorific value; separate each actual alternative fuel on its own card. | MJ | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_co2 | hot_forming | hot_forming_co2 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_nox | hot_forming | hot_forming_nox | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_co | hot_forming | hot_forming_co | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_so2 | hot_forming | hot_forming_so2 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_forming_dust | hot_forming | hot_forming_dust | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_natural_gas | heat_treatment | heat_treatment_natural_gas | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Meter gas volume with declared pressure/temperature and measured net calorific value; retain supplier composition and convert to MJ, not an assumed gas factor. | MJ | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_fuel_oil | heat_treatment | heat_treatment_fuel_oil | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Weigh fuel oil and use lot-specific net calorific value; separate each actual alternative fuel on its own card. | MJ | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_co2 | heat_treatment | heat_treatment_co2 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_nox | heat_treatment | heat_treatment_nox | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_co | heat_treatment | heat_treatment_co | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_so2 | heat_treatment | heat_treatment_so2 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_heat_treatment_dust | heat_treatment | heat_treatment_dust | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_natural_gas | surface_dispatch | surface_dispatch_natural_gas | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Meter gas volume with declared pressure/temperature and measured net calorific value; retain supplier composition and convert to MJ, not an assumed gas factor. | MJ | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_fuel_oil | surface_dispatch | surface_dispatch_fuel_oil | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Weigh fuel oil and use lot-specific net calorific value; separate each actual alternative fuel on its own card. | MJ | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_co2 | surface_dispatch | surface_dispatch_co2 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_nox | surface_dispatch | surface_dispatch_nox | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_co | surface_dispatch | surface_dispatch_co | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_so2 | surface_dispatch | surface_dispatch_so2 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_surface_dispatch_dust | surface_dispatch | surface_dispatch_dust | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use matched stack/fugitive monitoring: concentration, dry/wet gas basis, flow and operating hours after controls. Fossil CO2 uses actual fuel carbon balance; report species and compartment; no default factor here. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_rolling_oil | hot_forming | rolling_oil | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_mill_scale | hot_forming | mill_scale | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hot_scrap | hot_forming | hot_scrap | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_hcl | cold_finish | hcl | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_h2so4 | cold_finish | h2so4 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_naoh | cold_finish | naoh | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_drawing_oil | cold_finish | drawing_oil | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_spent_hcl | cold_finish | spent_hcl | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_spent_h2so4 | cold_finish | spent_h2so4 | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_acid_mist | cold_finish | acid_mist | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Monitor pickling exhaust concentration and ventilation flow after capture/scrubbing; quantify fugitive loss separately. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_quench_oil | heat_treatment | quench_oil | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_spent_quench_oil | heat_treatment | spent_quench_oil | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_test_sample | acceptance | test_sample | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_rejected_pipe | acceptance | rejected_pipe | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_abrasive | surface_dispatch | abrasive | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_epoxy | surface_dispatch | epoxy | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_adhesive | surface_dispatch | adhesive | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_pe | surface_dispatch | pe | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_pp | surface_dispatch | pp | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_preservative | surface_dispatch | preservative | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_strapping | surface_dispatch | strapping | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_wood | surface_dispatch | wood | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_cap | surface_dispatch | cap | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_spent_grit | surface_dispatch | spent_grit | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_coating_waste | surface_dispatch | coating_waste | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_final_product | surface_dispatch | final_product | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Weigh accepted lots on calibrated scales; reconcile production acceptance, dispatch and opening/closing finished inventory; retain grade, dimensions and coating mass. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_freshwater | water_controls | freshwater | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Meter external makeup separately for cooling/descaling/quench/test/rinse loops; log bleed and stock changes. Internal circulating volume is not external withdrawal. | m3 | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_riverwater | water_controls | riverwater | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Meter only direct river abstraction; record basin, season and treatment, avoiding duplication of purchased water. | m3 | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_lime | water_controls | lime | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_polymer | water_controls | polymer | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_wastewater | water_controls | wastewater | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated transfer/discharge flowmeter, matched period and destination; retain temperature, suspended solids, density where mass conversion is used, and samples for pollutant analysis. | m3 | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_sludge | water_controls | sludge | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated weighing and opening + receipts - closing stock reconciliation, linked to batch and grade. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_water_release | water_controls | water_release | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Calibrated transfer/discharge flowmeter, matched period and destination; retain temperature, suspended solids, density where mass conversion is used, and samples for pollutant analysis. | m3 | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_iron_release | water_controls | iron_release | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Multiply matched effluent volume by dissolved iron concentration after treatment; subtract documented inlet load when required by the chosen method. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |
| cp_oil_release | water_controls | oil_release | measurement_record | site; period; batch; grade; raw amount/unit; stock; calibration; uncertainty; route condition; allocation; D | Use species/fraction-specific effluent analysis and volume; aggregate laboratory oil indices must not be mapped to a chemically incompatible elementary flow. | kg | Each batch or meter interval; monthly reconciliation | Complete year or justified representative campaign including rejects and rework | Declared pipe production line and shared services | per 1 kg reference flow | Original records; calibration; assays; acceptance and balance evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all exchanges | q_i = allocated external amount_i / D; output reference = 1 kg. Reconcile material stocks and cancel internal transfers before calculation. | cp_final_product; row-specific cp | per 1 kg |  |
| physical_balance | site | Retain separate gross masses of received steel, accepted steel body, scrap, wet solids, water and opening/closing work in progress; do not add contained-iron mass to gross steel mass. Close the elemental iron balance on one contained-Fe basis: measured Fe in external feed plus opening work in progress = measured Fe in accepted steel body, external scrap, scale, sludge and effluent plus closing work in progress and every other measured Fe release. Derive each term from its own measured gross mass and Fe assay; use matched concentration and volume for effluent. Retain carbon and each actual alloy-element oxidation, release, retained mass and chemical-reaction records as separate elemental balances. Account for oxygen uptake, water content and actual reaction products; never assume pure iron, common composition, a fixed conversion or an invented yield. Cancel internal rework; retain its repeated energy and chemistry. Close water makeup + opening storage = external transfer + discharge + evaporation + product carryover + closing storage; close acid/chemical active-component stock, reaction, carryover and waste balances with measured uncertainty. | Steel/iron assays; water meters; acid concentration; stocks; waste records | Closure residual with measurement uncertainty; no invented tolerance |  |
| energy_conversion | utilities | Metered kWh × 3.6 = MJ; fuel mass × measured NCV = MJ. Shared service allocations sum to measured total. | Meters; NCV; calibration; allocation driver | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| qualification | pipe | oil/gas linepipe application; specification and edition; product specification level; steel grade and heat chemistry; outside diameter, wall thickness and length; seamless forming route; hot/cold finishing; delivery heat-treatment condition; sour-service requirements; inspection and hydrotest acceptance; surface/coating system and coating mass; end preparation; site, period and feed starting state | Order; mill certificate; dimensional/heat-treatment and test records |
| coverage | all rows | Record applicability as present, absent, measured zero or unknown. No missing-as-zero. Resolve exact flow identity, supplier geography/year, treatment destination and emission compartment before dataset completion. | manifest review_metadata |
| ranges | all rows | No default process intensity, yield, chemistry or empirical range is established. Use foreground records; independent compatible range evidence remains pending. | Retained records and uncertainty |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Check positive measured D, 1 kg reference, accepted product, steel/coating separation and all qualifiers. Do not label generic tube or welded/OCTG UUID as seamless linepipe. |  |
| validate_balance | production | Retain separate gross masses of received steel, accepted steel body, scrap, wet solids, water and opening/closing work in progress; do not add contained-iron mass to gross steel mass. Close the elemental iron balance on one contained-Fe basis: measured Fe in external feed plus opening work in progress = measured Fe in accepted steel body, external scrap, scale, sludge and effluent plus closing work in progress and every other measured Fe release. Derive each term from its own measured gross mass and Fe assay; use matched concentration and volume for effluent. Retain carbon and each actual alloy-element oxidation, release, retained mass and chemical-reaction records as separate elemental balances. Account for oxygen uptake, water content and actual reaction products; never assume pure iron, common composition, a fixed conversion or an invented yield. Cancel internal rework; retain its repeated energy and chemistry. Close water makeup + opening storage = external transfer + discharge + evaporation + product carryover + closing storage; close acid/chemical active-component stock, reaction, carryover and waste balances with measured uncertainty. |  |
| validate_complete | dataset | Check applicable routes, each atomic external exchange, normalization, provider/waste fate and post-control emissions. Unresolved UUID, mandatory unknown quantity or unsupported unit conversion blocks a complete dataset; candidate methodology checks do not constitute product conformance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | process; lifecyclemodel |
| allowed_use | Specified seamless linepipe manufacturing, with upstream burdens linked |
| excluded_use | Welded/OCTG or installed pipeline; full API conformity inferred from this PCR |
| required_metadata | oil/gas linepipe application; specification and edition; product specification level; steel grade and heat chemistry; outside diameter, wall thickness and length; seamless forming route; hot/cold finishing; delivery heat-treatment condition; sour-service requirements; inspection and hydrotest acceptance; surface/coating system and coating mass; end preparation; site, period and feed starting state |
| required_quality_disclosure | Route, upstream coverage, identity/measurement gaps, uncertainty, allocation and waste fate |
| update_trigger | Grade/specification, process route, coating, yield, supply or acceptance requirement change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ec-fmp-bref-2022 | official_guidance | European Commission JRC, Ferrous Metals Processing BREF (2022), DOI 10.2760/196475, chapter 1 steel tubes; 2.2.1.6 tube mills; 2.2.18 wastes; 2.3.2 energy; 2.3.5 emissions. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | Seamless billet heating, piercing, elongation, final rolling and heat treatment; conditional cold drawing; water, oil, scale and combustion controls. No universal intensity or temperature adopted. |
| api-5l-announcement-2026 | official_guidance | API, API Announces 47th Edition of Foundational Line Pipe Standard, 2 June 2026. https://www.api.org/news-policy-and-issues/news/2026/06/02/api-announces-47th-edition-of-api-specification-5l | Official scope and manufacture/inspection/test/marking/traceability categories only. Announcement is not the specification: obtain the actual order edition and clauses for conformance. |
| tenaris-coatings | extension_guidance | Tenaris, Offshore and Onshore Pipeline Coating Solutions, pages 4 and 6, undated brochure, retrieved 2 October 2026. https://www.tenaris.com/media/1jtmlf5o/offshore-onshore-pipeline-coatingsolutions.pdf | Conditional FBE, adhesive and polyethylene/polypropylene layers; separate internal coating. Manufacturer offerings do not establish mandatory coating or universal thickness/intensity. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Subdivision, physical-causality and other-relationship allocation hierarchy; no claim of complete PEF conformance. |
