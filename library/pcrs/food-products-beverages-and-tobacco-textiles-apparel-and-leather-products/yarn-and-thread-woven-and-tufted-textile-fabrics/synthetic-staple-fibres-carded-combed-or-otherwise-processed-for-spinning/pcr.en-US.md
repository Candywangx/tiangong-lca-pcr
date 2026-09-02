---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.synthetic-staple-fibres-carded-combed-or-otherwise-processed-for-spinning
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Synthetic staple fibres, carded, combed or otherwise processed for spinning

## 1. Scope and Applicability

This PCR governs foreground data packages for synthetic staple fibres that have been carded, combed, drawn, blended, opened, or otherwise prepared for spinning while remaining unspun fibre material. It applies to disclosed synthetic polymer families such as polyester, polyamide, polyolefin, acrylic or modacrylic, and elastomeric-containing staple-fibre preparations when the output is classified within CPC 26210. Synthetic-synthetic blends may be included with their mass fractions declared. Mixed synthetic/natural or synthetic/artificial fibre preparations require an explicit classification determination and must not be assumed to belong to this PCR.

The common route is dry mechanical preparation from received synthetic staple fibre through opening, feeding, blending and a declared alignment/preparation operation. Combing and drawing, wet cleaning, application of spinning lubricants or antistatic agents, thermal conditioning, and dust-abatement operations are included only when they occur at the reporting facility. Each polymer family, blend composition, virgin or recovered feedstock route, preparation technology, and optional treatment route must be modelled separately unless foreground evidence demonstrates that aggregation remains representative.

Polymer synthesis, primary chemical-fibre manufacture, tow conversion to staple where it occurs before the declared input gate, yarn spinning, twisting, winding, sizing for weaving, weaving, knitting, nonwoven manufacture, dyeing, printing, coating, and textile finishing are outside this PCR. The output is fibre prepared for spinning; it is not yarn and is not woven or other fabric.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.synthetic-staple-fibres-carded-combed-or-otherwise-processed-for-spinning |
| classification_refs | CPC 3.0: 26210 - Synthetic staple fibres, carded, combed or otherwise processed for spinning |
| covered_products | Unspun synthetic staple fibres demonstrably classified as CPC 26210 after carding, combing, drawing, opening/blending, or another declared preparation for spinning; declared synthetic-synthetic blends |
| excluded_products | Unprocessed staple fibre outside CPC 26210; artificial or regenerated staple fibre; continuous filament or tow before the declared input gate; yarn and thread; woven, knitted, tufted, nonwoven or other fabric; dyed, printed, coated or finished textile products |
| representative_product | Dry bulk synthetic staple fibre in loose stock, web, sliver, roving-like preparation without yarn twist, or bale form, with polymer composition and preparation state declared and ready for the next spinning operation |
| production_route | Route-specific dry mechanical opening, feeding, blending and fibre alignment/preparation; conditional combing/drawing, lubricant or antistatic application, wet cleaning, thermal conditioning and packing; no unconditional cross-route or cross-polymer average |
| market_state | Net fibre mass at the preparation-facility gate, excluding packaging, at declared moisture/conditioning state and supplied in a declared loose, web, sliver or bale form |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Synthetic staple fibres demonstrably processed for spinning and not converted to yarn or fabric |
| How much | 1,000 kg net mass of prepared synthetic staple fibre, excluding packaging |
| How well | Meets the declared buyer or production specification for polymer identity, blend fractions, fibre length and linear density, crimp, finish or lubricant content, preparation state, contamination and moisture; ready for the declared next spinning operation |
| How long or cycle | One production lot at the preparation-facility gate; no service-life duration applies |
| reference_flow_link | The functional unit is realized by exactly 1,000 kg net reference product at the declared conditioned state |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net prepared fibre |
| Reference product flow | Synthetic Fiber Cloth `95a493a4-1e51-4eb5-9b7c-e06bf912e993` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 26210 scope confirmation; material state as synthetic staple fibre processed for spinning and explicitly not cloth; polymer family; each blend component and mass fraction; virgin or recovered feedstock status; fibre length distribution; linear density; crimp; finish, lubricant and antistatic content; carded, combed, drawn or other preparation state; wet or thermal treatment status; moisture basis; loose, web, sliver or bale delivery form; production geography; technology route; reporting period |

The verified Tiangong product flow is a state-code-100 Product flow and is CPC-exact for 26210, but its name, “Synthetic Fiber Cloth”, is semantically misleading. This PCR uses the UUID only as the required Tiangong database identity. Every foreground data package must override the misleading implication through the required qualifiers and a product description that states “synthetic staple fibre processed for spinning, not woven fabric”. The flow name must never be used to include weaving or any fabric manufacture. Classification scope is supported by `un-cpc-v3-2025`; the process-state distinction is supported by `ec-jrc-txt-bref-2023` and `ifc-textile-ehs-2007`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1,000 kg net prepared fibre. Exclude pallets, wrappers, straps, cones, bags and other packaging from the reference amount. |
| `conditioned_mass_basis` | Fibre inputs, intermediate fibre and reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh material at the declared conditioning and moisture state. Record moisture or conditioning method and do not combine dry-mass and as-received-mass records without a measured conversion. |
| `composition_mass_fraction` | Blended fibre inputs and output | Mass fraction | kg/kg | Record each polymer and non-synthetic component separately. Fractions must sum to the declared product composition; a mixed-fibre output requires an explicit classification determination. |
| `auxiliary_product_mass` | Finishes, lubricants, antistatic agents and wet-treatment chemicals | Mass | kg | Record supplied product mass and, when available, active or dry substance fraction separately. Do not treat commercial-product mass as active-substance mass. |
| `energy_carrier_separation` | Electricity, fuels, steam and purchased heat | Energy | kWh or MJ | Preserve each energy carrier and meter basis. Convert units with disclosed conversion factors and do not combine electricity and thermal energy into one undifferentiated amount. |
| `water_balance_units` | Conditional wet preparation | Volume or Mass | m3 or kg | Record intake, reuse, evaporation, product carry-over and wastewater consistently. State water density when converting between mass and volume. |
| `stock_change_balance` | Line-level material balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile opening and closing work-in-progress so that batch or period inputs and outputs refer to the same time boundary. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Synthetic staple fibre received before the in-scope preparation steps, with supplier, polymer family, blend fractions, virgin or recovered status, prior preparation, finish/lubricant content, moisture basis and delivery form declared |
| starting_condition_role | Purchased or interfacility product input whose upstream polymer and fibre-manufacturing burdens are supplied by a route- and fibre-specific upstream dataset |
| product_classification_scope | CPC 26210 only: unspun synthetic staple fibre after carding, combing or another documented preparation for spinning; ambiguous mixed-fibre preparations require classification review |
| recursive_input_rule | If an input is already within this PCR category, treat it as an upstream product flow with its supplier dataset and inventory only the incremental on-site preparation. Do not recursively recreate preparation already represented upstream. |
| upstream_dataset_requirement | Use supplier- or route-specific cradle-to-gate data for polymer production, chemical-fibre manufacture and any preparation completed before receipt. Do not substitute an unconditional average across polyester, polyamide, polyolefin, acrylic/modacrylic, elastomeric or recovered-fibre routes. |
| disclosure | Declare the input gate, polymer and blend identity, recovered content basis, actual process sequence, carding/combing/drawing or alternative preparation state, auxiliaries, dust controls, conditional wet/thermal operations, output form, moisture basis, packaging treatment, excluded spinning/fabric stages and any upstream data gaps. |

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground preparation facility | Include receipt and internal handling of synthetic staple fibre, actual opening/feeding/blending, the operation that makes the fibre ready for spinning, in-scope dust control, conditional preparation auxiliaries and treatments, and packing to the facility gate. | `un-cpc-v3-2025`; `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `boundary_route_separation` | Polymer, blend and technology routes | Model each materially different polymer family, blend, feedstock origin and preparation route separately. Aggregate only when process records demonstrate comparable inputs, yields, auxiliaries, controls and emissions and the aggregation method is disclosed. | `ec-jrc-txt-bref-2023`; `eu-pef-method-2021` |
| `boundary_excluded_transformation` | Upstream and downstream transformations | Exclude polymer synthesis, primary chemical-fibre manufacture and prior tow-to-staple conversion from the foreground gate; exclude spinning, twisting, winding, sizing, weaving, knitting, nonwoven manufacture, dyeing, printing, coating and finishing after the product gate. Represent relevant burdens with separate upstream or downstream datasets. | `un-cpc-v3-2025`; `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `boundary_dust_and_rejects` | Mechanical handling and fibre preparation | Include collected fibre dust, line rejects, filter residues, abatement electricity and residual particulate releases for the equipment actually used; distinguish recovered internal fibre from exported waste. | `ifc-textile-ehs-2007`; `eu-textiles-bat-2022` |
| `boundary_conditional_wet_thermal` | Wet cleaning or thermal conditioning | Include water, energy, process chemicals, wastewater, sludge and relevant air or water releases only when the operation is performed to prepare the fibre for spinning. Do not import dyeing or finishing burdens into a dry mechanical route. | `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_same_category_input` | Already-prepared synthetic staple fibre input | Record the input and its upstream dataset once, then inventory only additional on-site processing and disclose the inherited preparation state. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fibre_preparation_line` | Opening, blending and primary fibre preparation | required | Always required; document the actual operation that qualifies the output as processed for spinning | Foreground mechanical preparation and line-level mass balance | Per 1,000 kg net reference product |
| `combing_drawing` | Combing, drawing or additional alignment | conditional | Include only when combing, drawing, drafting or another additional alignment step occurs after primary preparation | Route-specific further preparation before spinning | Per 1,000 kg net reference product for the affected route |
| `wet_thermal_conditioning` | Wet cleaning or thermal conditioning | conditional | Include only when water, heat or process chemicals are used on site to make the staple fibre ready for spinning | Route-specific ancillary preparation | Per 1,000 kg net reference product for the treated route |
| `packing_dispatch` | Packing and product dispatch | required | Always required; zero-consumption packaging is permitted only for unpackaged internal transfer and must be disclosed | Final net-mass reference output and separate packaging inventory | Per 1,000 kg net reference product |

### Process: Opening, blending and primary fibre preparation (`fibre_preparation_line`)

#### Inputs

##### Product flows

###### Received polyester staple fibre (`received_polyester_staple_fibre`)

Record polyester (PET) staple fibre as its own input at the declared moisture state. For a blend, keep its mass separate from every other component.

- Selected flow: Polyester staple fibre, unspun, before in-scope preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for polyester-containing product lots; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for opening and closing stock and normalized to 1,000 kg net reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Source/status: `cp_material_receipt`; unresolved Tiangong flow mapping
- Sources: `un-cpc-v3-2025`
- Range: Provisional incoming-fibre mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; broad provisional screen pending route-specific foreground distributions
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Received polyamide staple fibre (`received_polyamide_staple_fibre`)

Record polyamide staple fibre as a separate input and do not combine it with polyester or another polymer.

- Selected flow: Polyamide staple fibre, unspun, before in-scope preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for polyamide-containing product lots; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Source/status: `cp_material_receipt`; unresolved Tiangong flow mapping
- Sources: `ifc-textile-ehs-2007`
- Range: Provisional incoming-polyamide mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Received polypropylene staple fibre (`received_polypropylene_staple_fibre`)

Record polypropylene staple fibre as a separate input and do not combine it with another polyolefin or polymer.

- Selected flow: Polypropylene staple fibre, unspun, before in-scope preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for polypropylene-containing product lots; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Source/status: `cp_material_receipt`; unresolved Tiangong flow mapping
- Sources: `ifc-textile-ehs-2007`
- Range: Provisional incoming-polypropylene mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Received acrylic staple fibre (`received_acrylic_staple_fibre`)

Record acrylic staple fibre as a separate input from modacrylic and every other polymer.

- Selected flow: Acrylic staple fibre, unspun, before in-scope preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for acrylic-containing product lots; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Source/status: `cp_material_receipt`; unresolved Tiangong flow mapping
- Sources: `ifc-textile-ehs-2007`
- Range: Provisional incoming-acrylic mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Received modacrylic staple fibre (`received_modacrylic_staple_fibre`)

Record modacrylic staple fibre as a separate input from acrylic and every other polymer.

- Selected flow: Modacrylic staple fibre, unspun, before in-scope preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for modacrylic-containing product lots; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Source/status: `cp_material_receipt`; unresolved Tiangong flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional incoming-modacrylic mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Received polyurethane elastane staple fibre (`received_elastane_staple_fibre`)

Record polyurethane elastane staple fibre as a separate blend input because its preparation-agent load and route can differ materially.

- Selected flow: Polyurethane elastane staple fibre, unspun, before in-scope preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for elastane-containing product lots; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed receipts adjusted for stock change and normalized to 1,000 kg net reference output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipt`
- Source/status: `cp_material_receipt`; unresolved Tiangong flow mapping
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- Range: Provisional incoming-elastane mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; zero when not applicable and replace with foreground distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for opening, feeding, blending and primary preparation (`primary_electricity`)

Record metered electricity for bale opening, conveying, feeding, blending, carding or the declared alternative preparation, ventilation and integrated dust extraction.

- Selected flow: Site electricity supply
- UUID status: unresolved - requires foreground mapping
- Applicability: Required for electrically driven preparation equipment; omit only with evidence that no electricity crosses this process boundary
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or a documented equipment-level calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong energy-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1,000 kg net reference product; replace with route-specific metered distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polydimethylsiloxane spin finish (`polydimethylsiloxane_finish`)

Record polydimethylsiloxane spin finish as its own chemical input.

- Selected flow: Polydimethylsiloxane spin finish
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when this substance is dosed; omit otherwise
- Flow property / unit: Mass / kg commercial product
- Amount rule: Metered addition, batch dosing record or stock-change calculation; preserve active or dry fraction separately when known
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_records`
- Source/status: `cp_auxiliary_records`; unresolved Tiangong flow mapping
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- Range: Provisional polydimethylsiloxane-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg commercial product
  - Basis: per 1,000 kg net reference product; route- and fibre-specific foreground data must replace this screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mineral-oil spinning lubricant (`mineral_oil_lubricant`)

Record mineral-oil spinning lubricant separately from silicone and glycol products.

- Selected flow: Mineral-oil spinning lubricant
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when this lubricant is dosed; omit otherwise
- Flow property / unit: Mass / kg commercial product
- Amount rule: Metered addition, batch dosing record or stock-change calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_records`
- Source/status: `cp_auxiliary_records`; unresolved Tiangong flow mapping
- Sources: `ec-jrc-txt-bref-2023`
- Range: Provisional mineral-oil-lubricant screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg commercial product
  - Basis: per 1,000 kg net reference product; replace with chemical-specific dosing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyethylene-glycol antistatic agent (`polyethylene_glycol_antistatic`)

Record polyethylene-glycol antistatic agent as its own input and do not combine it with lubricants.

- Selected flow: Polyethylene-glycol antistatic agent
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when this antistatic agent is dosed; omit otherwise
- Flow property / unit: Mass / kg commercial product
- Amount rule: Metered addition, batch dosing record or stock-change calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_records`
- Source/status: `cp_auxiliary_records`; unresolved Tiangong flow mapping
- Sources: `ec-jrc-txt-bref-2023`
- Range: Provisional polyethylene-glycol-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg commercial product
  - Basis: per 1,000 kg net reference product; replace with chemical-specific dosing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Carded synthetic staple fibre (`carded_fibre`)

Record the mass of carded web or sliver separately from merely opened/blended fibre and from combed/drawn fibre.

- Selected flow: Carded synthetic staple fibre, unspun
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when carding is the qualifying preparation; instantiate one row per declared polymer or blend lot
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or line mass balance for the actual route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- Sources: `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007`
- Range: Provisional intermediate-mass uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with matched lot balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Opened and blended synthetic staple fibre (`opened_blended_fibre`)

Record opened/blended fibre separately when another documented preparation, rather than carding or combing, qualifies the output for spinning.

- Selected flow: Opened and blended synthetic staple fibre, unspun
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for an otherwise-processed route without carding; instantiate one row per declared polymer or blend lot
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or line mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- Sources: `un-cpc-v3-2025`
- Range: Provisional opened/blended-output uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with matched lot balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Captured synthetic fibre dust (`primary_captured_fibre_dust`)

Record fibre dust captured by extraction and filtration as one waste flow. Do not combine it with off-spec fibre or filter media.

- Selected flow: Captured synthetic fibre dust
- UUID status: unresolved - requires foreground mapping
- Applicability: Include when captured dust leaves the line as waste; omit verified same-line recirculation
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste containers plus documented stock change; subtract only verified same-line returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- Sources: `ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- Range: Provisional captured-fibre-dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; broad screen pending facility mass-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-spec synthetic staple fibre (`primary_offspec_fibre`)

Record off-spec fibre removed from the preparation line separately from captured dust.

- Selected flow: Off-spec synthetic staple fibre, unspun
- UUID status: unresolved - requires foreground mapping
- Applicability: Include when off-spec fibre is exported as waste; omit verified same-line recirculation
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste containers adjusted for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional off-spec-fibre screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with facility mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Residual particulate releases to air (`primary_particulate_air`)

Record residual fibre particulate released after enclosure, local exhaust, extraction and filtration. Do not report captured filter material again as an elementary flow.

- Selected flow: Synthetic fibre particulate matter to air
- UUID status: unresolved - requires foreground mapping
- Applicability: Include for measured or calculated residual release from primary preparation; omit only with documented zero release
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace-exhaust measurement integrated over production, or documented concentration-times-flow calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source/status: `cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- Sources: `ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- Range: Provisional particulate screening range, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg particulate
  - Basis: per 1,000 kg net reference product; replace with measured facility emissions and applicable legal limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Combing, drawing or additional alignment (`combing_drawing`)

#### Inputs

##### Product flows

###### Fibre entering additional alignment (`alignment_input_fibre`)

Record the intermediate fibre transferred from primary preparation only for routes that actually use this conditional process.

- Selected flow: Carded synthetic staple fibre, unspun
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for lots entering combing, drawing or drafting; instantiate one row per declared polymer or blend lot
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or reconciled internal movement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product for the affected route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- Sources: `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007`
- Range: Provisional alignment-input uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with matched transfer record
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for combing, drawing or drafting (`alignment_electricity`)

Record electricity for the disclosed combination of combing, drawing, drafting, conveying, ventilation and local extraction.

- Selected flow: Site electricity supply
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when the conditional alignment process operates; omit otherwise
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product for the affected route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong energy-flow mapping
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- Range: Provisional alignment-electricity screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kWh
  - Basis: per 1,000 kg net reference product for an included route; replace with metered distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Combed, drawn or otherwise aligned fibre (`aligned_fibre`)

Record the output mass, state and transfer destination without including subsequent spinning, twisting or winding.

- Selected flow: Combed and drawn synthetic staple fibre, unspun
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for the actual aligned product lot; instantiate one row per declared polymer or blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed output or line mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product for the affected route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- Sources: `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007`
- Range: Provisional aligned-output uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with matched output record
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Synthetic staple-fibre noils (`alignment_noils`)

Record noils removed by combing as a separate waste flow, with destination and polymer identity retained.

- Selected flow: Synthetic staple-fibre noils
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when combing produces noils that leave the line; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed removal reconciled with input and aligned output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product for the affected route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- Sources: `ec-jrc-txt-bref-2023`
- Range: Provisional noils screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with route-specific mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Off-spec fibre from drawing or drafting (`alignment_offspec_fibre`)

Record fibre rejected during drawing or drafting separately from combing noils.

- Selected flow: Off-spec synthetic staple fibre from drawing or drafting
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when drawing or drafting rejects leave the line; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed removal reconciled with input and aligned output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product for the affected route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong waste-flow mapping
- Sources: `ec-jrc-txt-bref-2023`
- Range: Provisional drawing-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with route-specific mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Residual alignment particulate releases to air (`alignment_particulate_air`)

Record residual particulate from combing, drawing, drafting and associated extraction separately when this process is included.

- Selected flow: Synthetic fibre particulate matter to air from combing and drawing
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when the conditional alignment process releases particulate; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Measurement or documented concentration-times-flow calculation for the conditional equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the affected route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source/status: `cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- Sources: `ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- Range: Provisional alignment-particulate screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg particulate
  - Basis: per 1,000 kg net reference product for an included route; replace with measured facility emissions
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Wet cleaning or thermal conditioning (`wet_thermal_conditioning`)

#### Inputs

##### Product flows

###### Fibre entering wet or thermal conditioning (`conditioning_input_fibre`)

Record the actual prepared-fibre intermediate only when wet cleaning, drying, heat-setting or another in-scope conditioning operation occurs before the spinning-ready product gate.

- Selected flow: Carded synthetic staple fibre entering wet or thermal conditioning
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when carded fibre enters conditioning without combing/drawing; instantiate one row per declared polymer or blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or reconciled internal movement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- Sources: `ec-jrc-txt-bref-2023`
- Range: Provisional conditioning-input uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with matched transfer record
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Combed and drawn fibre entering conditioning (`aligned_conditioning_input`)

Record combed/drawn fibre as a separate conditioning input from carded fibre.

- Selected flow: Combed and drawn synthetic staple fibre entering wet or thermal conditioning
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when aligned fibre enters conditioning; instantiate one row per declared polymer or blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or reconciled internal movement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- Sources: `ec-jrc-txt-bref-2023`
- Range: Provisional aligned-conditioning-input uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with matched transfer record
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Municipal freshwater for wet preparation (`municipal_freshwater`)

Record metered municipal freshwater separately from reused process water.

- Selected flow: Municipal freshwater
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when municipal water is consumed by the wet route; omit otherwise
- Flow property / unit: Volume / m3
- Amount rule: Metered intake and reuse allocated to the treated route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Source/status: `cp_water_wastewater_records`; unresolved Tiangong water-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional wet-route water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1,000 kg net reference product for an included wet route; not applicable to an excluded dry route and replace with metered data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reused process water for wet preparation (`reused_process_water`)

Record water recovered inside or outside the line as a separate product input and disclose its source and treatment.

- Selected flow: Reused process water
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when reused water enters the wet process; omit otherwise
- Flow property / unit: Volume / m3
- Amount rule: Metered reused-water input allocated to the treated route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Source/status: `cp_water_wastewater_records`; unresolved Tiangong water-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional reused-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1,000 kg net reference product for an included wet route; replace with metered data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium carbonate for wet preparation (`sodium_carbonate`)

Record sodium carbonate separately when it is used in the declared wet-preparation recipe.

- Selected flow: Sodium carbonate
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when sodium carbonate is dosed; omit otherwise
- Flow property / unit: Mass / kg commercial product
- Amount rule: Batch dosing, metered addition or stock-change record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_records`
- Source/status: `cp_auxiliary_records`; unresolved Tiangong chemical-flow mapping
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- Range: Provisional sodium-carbonate screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg commercial product
  - Basis: per 1,000 kg net reference product for an included route; replace with product-specific dosing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium hydroxide for wet preparation (`sodium_hydroxide`)

Record sodium hydroxide separately when it is used; do not combine it with sodium carbonate or peroxide.

- Selected flow: Sodium hydroxide, purity 95-98% `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID status: confirmed Tiangong Product flow; state code 100; supplied product has 95-98% purity
- Applicability: Include only for sodium hydroxide supplied at 95-98% purity; represent another concentration as a separate atomic flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg commercial product
- Amount rule: Batch dosing, metered addition or stock-change record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; dosing evidence from `cp_auxiliary_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional sodium-hydroxide screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg commercial product
  - Basis: per 1,000 kg net reference product for an included route; replace with dosing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hydrogen peroxide for wet preparation (`hydrogen_peroxide`)

Record hydrogen peroxide separately when it is used; retain supplied concentration.

- Selected flow: Hydrogen peroxide solution, 50% in water `d834d970-3c7c-428d-baf6-d2516bebd0c7`
- UUID status: confirmed Tiangong Product flow; state code 100; textile wet-processing product supplied at 50% in water
- Applicability: Include only for hydrogen peroxide supplied at 50% in water; represent another concentration as a separate atomic flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg commercial solution
- Amount rule: Batch dosing, metered addition or stock-change record with supplied concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; dosing evidence from `cp_auxiliary_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional hydrogen-peroxide-solution screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg commercial solution
  - Basis: per 1,000 kg net reference product for an included route; replace with dosing records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for wet or thermal conditioning (`conditioning_electricity`)

Record conditioning electricity as a separate energy-carrier input.

- Selected flow: Electricity, site supply
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when electricity is consumed by the conditional process; omit otherwise
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or documented equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong energy-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional conditioning-electricity screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 3000
  - Unit: kWh
  - Basis: per 1,000 kg net reference product for an included route; replace with metered electricity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for wet or thermal conditioning (`purchased_steam`)

Record purchased steam separately from fuel and hot water.

- Selected flow: Heat from steam, industrial boiler `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- UUID status: confirmed Tiangong Product flow; state code 100; industrial-boiler steam heat
- Applicability: Include only when steam heat crosses the facility or process boundary; omit when on-site fuel rows fully represent the supplied heat
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered steam energy or steam mass converted with documented pressure, temperature and enthalpy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; metering evidence from `cp_energy_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional purchased-steam screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1,000 kg net reference product for an included route; replace with metered steam
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased hot water for wet conditioning (`purchased_hot_water`)

Record purchased hot water separately from steam and freshwater volume.

- Selected flow: Purchased hot water
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when hot water crosses the process boundary; omit otherwise
- Flow property / unit: Energy / MJ
- Amount rule: Metered volume and temperatures converted to delivered heat with disclosed heat-capacity assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong energy-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional purchased-hot-water screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ
  - Basis: per 1,000 kg net reference product for an included route; replace with measured heat delivery
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for on-site conditioning heat (`natural_gas`)

Record natural gas separately from LPG, diesel and purchased heat.

- Selected flow: Natural gas
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when natural gas is combusted for the conditional process; omit otherwise
- Flow property / unit: Energy / MJ lower heating value
- Amount rule: Metered gas volume converted with supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong fuel-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional natural-gas screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ lower heating value
  - Basis: per 1,000 kg net reference product for an included route; replace with metered fuel
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel for on-site conditioning heat (`diesel_fuel`)

Record diesel separately from natural gas and LPG.

- Selected flow: Diesel fuel
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when diesel is combusted for the conditional process; omit otherwise
- Flow property / unit: Energy / MJ lower heating value
- Amount rule: Fuel issue mass or volume converted with supplier density and heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong fuel-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional diesel screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ lower heating value
  - Basis: per 1,000 kg net reference product for an included route; replace with fuel records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas for on-site conditioning heat (`lpg_fuel`)

Record LPG separately from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when LPG is combusted for the conditional process; omit otherwise
- Flow property / unit: Energy / MJ lower heating value
- Amount rule: Fuel issue mass converted with supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong fuel-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional LPG screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: MJ lower heating value
  - Basis: per 1,000 kg net reference product for an included route; replace with fuel records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compressed air for fibre conditioning (`compressed_air`)

Record compressed air separately from electricity; upstream compressor electricity must not be duplicated if included in the electricity row.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID status: confirmed Tiangong Product flow; state code 100; volume reference property
- Applicability: Include only when compressed air crosses the selected process boundary; declare pressure and reference conditions
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Nm3 at declared reference conditions
- Amount rule: Metered normalized volume or documented compressor allocation with pressure disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; metering evidence from `cp_energy_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional compressed-air screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: Nm3
  - Basis: per 1,000 kg net reference product for an included route; replace with metered normalized volume
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant make-up (`r134a_refrigerant_makeup`)

Record R-134a make-up as a specific substance input; another refrigerant requires its own additional atomic row.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID status: confirmed Tiangong Product flow; state code 100; processing-plant refrigerant make-up
- Applicability: Include only when R-134a is added to in-scope cooling equipment; represent another refrigerant as a separate atomic flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Cylinder issue mass minus returned mass, attributed to the in-scope equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; cylinder evidence from `cp_energy_records`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional R-134a make-up screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with cylinder records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned prepared fibre (`conditioned_fibre`)

Record treated fibre mass and the wet or thermal process state. This intermediate remains unspun and is transferred to packing.

- Selected flow: Conditioned synthetic staple fibre prepared for spinning
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for the conditioned lot; instantiate one row per declared polymer or blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed output corrected only with measured moisture data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Source/status: `cp_process_mass_balance`; unresolved Tiangong internal-product mapping
- Sources: `ec-jrc-txt-bref-2023`
- Range: Provisional conditioned-output uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product for an included route; replace with matched output record
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wastewater sent to treatment (`conditioning_wastewater`)

Record wastewater volume, destination and measured characteristics. Keep direct releases after treatment in the elementary-flow inventory rather than double-counting them here.

- Selected flow: Wastewater from synthetic staple-fibre wet preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when this aqueous waste stream leaves the wet-preparation process; omit otherwise
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge reconciled with water intake, reuse, evaporation and product carry-over
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater_records`
- Source/status: `cp_water_wastewater_records`; unresolved Tiangong waste-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional wastewater-volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: m3
  - Basis: per 1,000 kg net reference product for an included wet route; replace with metered balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment sludge (`conditioning_sludge`)

Record wastewater-treatment sludge separately from filter media and other solid waste.

- Selected flow: Wastewater-treatment sludge from synthetic staple-fibre wet preparation
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when attributable sludge leaves the foreground boundary; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed removal with moisture basis and allocation method disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Source/status: `cp_waste_records`; unresolved Tiangong waste-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional sludge-and-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg as recorded with moisture basis
  - Basis: per 1,000 kg net reference product for an included route; replace with weighed facility distribution
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent fabric-filter media (`spent_filter_media`)

Record removed fabric-filter media separately from captured fibre dust and wastewater sludge.

- Selected flow: Spent fabric-filter media from fibre-dust control
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when filter media is replaced within the reporting period; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed removed media minus reusable hardware, with disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Source/status: `cp_waste_records`; unresolved Tiangong waste-flow mapping
- Sources: `ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- Range: Provisional spent-filter-media screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with maintenance records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide_air`)

Record fossil carbon dioxide from in-scope natural-gas, diesel or LPG combustion as its own elementary flow.

- Selected flow: carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID status: confirmed Tiangong Elementary flow; state code 100; compartment is emissions to air, unspecified
- Applicability: Include only for in-scope fossil-fuel combustion; keep biogenic carbon dioxide separate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- Amount rule: Direct measurement or activity data multiplied by a disclosed applicable emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; activity or measurement evidence from `cp_air_emissions`
- Sources: `ifc-textile-ehs-2007`; `eu-textiles-bat-2022`
- Range: Provisional fossil-carbon-dioxide screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg CO2
  - Basis: per 1,000 kg net reference product for an included route; replace with measured or source-backed substance-specific values
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen oxides to air (`nitrogen_oxides_air`)

Record nitrogen oxides from in-scope combustion separately from carbon monoxide and particulate matter.

- Selected flow: Nitrogen oxides, as NO2, to air
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for in-scope combustion with measured or applicable factor data; omit otherwise
- Flow property / unit: Mass / kg NO2
- Amount rule: Direct measurement or fuel activity multiplied by a disclosed applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source/status: `cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional nitrogen-oxides screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg NO2
  - Basis: per 1,000 kg net reference product for an included route; replace with measured or factor-based data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbon monoxide to air (`carbon_monoxide_air`)

Record carbon monoxide from in-scope combustion as its own elementary flow.

- Selected flow: carbon monoxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- UUID status: confirmed Tiangong Elementary flow; state code 100; fossil carbon monoxide in the emissions-to-air-unspecified compartment
- Applicability: Include only for in-scope combustion with measured or applicable factor data; omit otherwise
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO
- Amount rule: Direct measurement or fuel activity multiplied by a disclosed applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; activity or measurement evidence from `cp_air_emissions`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional carbon-monoxide screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg CO
  - Basis: per 1,000 kg net reference product for an included route; replace with measured or factor-based data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Combustion particulate matter to air (`combustion_particulate_air`)

Record combustion particulate separately from fibre dust emitted by mechanical operations.

- Selected flow: Particulate matter from combustion to air
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for in-scope combustion with measured or applicable factor data; omit otherwise
- Flow property / unit: Mass / kg particulate
- Amount rule: Direct measurement or fuel activity multiplied by a disclosed applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source/status: `cp_air_emissions`; unresolved Tiangong elementary-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional combustion-particulate screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg particulate
  - Basis: per 1,000 kg net reference product for an included route; replace with measured or factor-based data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant to air (`r134a_air`)

Record R-134a leakage as its own elementary flow and reconcile it with refrigerant make-up and equipment stock change.

- Selected flow: HFC-134a, emissions to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- UUID status: confirmed Tiangong Elementary flow; state code 100; compartment is emissions to air, unspecified
- Applicability: Include only when R-134a leakage is attributable to in-scope cooling equipment; omit otherwise
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Refrigerant make-up minus documented recovery and equipment stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; refrigerant-balance evidence from `cp_air_emissions`
- Sources: `eu-textiles-bat-2022`
- Range: Provisional R-134a leakage screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg R-134a
  - Basis: per 1,000 kg net reference product for an included route; replace with refrigerant balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Synthetic fibre particles to water (`synthetic_fibre_particles_water`)

Record synthetic fibre particles discharged after on-site treatment separately from dissolved preparation agents.

- Selected flow: Synthetic fibre particles to water
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when a direct discharge crosses the environment boundary and this pollutant is measured; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by matched discharge volume over the same period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater_records`
- Source/status: `cp_water_wastewater_records`; unresolved Tiangong elementary-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional fibre-particle discharge screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg synthetic fibre particles
  - Basis: per 1,000 kg net reference product for an included route; replace with matched measured loads and applicable legal limits
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mineral oil to water (`mineral_oil_water`)

Record discharged mineral oil separately when the wet route uses a mineral-oil lubricant and monitoring identifies it.

- Selected flow: white mineral oil (petroleum), emissions to fresh water `3c5e539b-bfd4-44dd-b000-3f990d2f3f3c`
- UUID status: confirmed Tiangong Elementary flow; state code 100; compartment is emissions to fresh water
- Applicability: Include only for a direct fresh-water discharge with measured white mineral oil; represent another oil or receiving compartment separately
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched mineral-oil concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; matched discharge evidence from `cp_water_wastewater_records`
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- Range: Provisional mineral-oil discharge screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg mineral oil
  - Basis: per 1,000 kg net reference product for an included route; replace with measured load
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polydimethylsiloxane to water (`polydimethylsiloxane_water`)

Record discharged polydimethylsiloxane separately when monitoring identifies it.

- Selected flow: Polydimethylsiloxane to water
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for a direct discharge with measured polydimethylsiloxane; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Matched concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater_records`
- Source/status: `cp_water_wastewater_records`; unresolved Tiangong elementary-flow mapping
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- Range: Provisional polydimethylsiloxane discharge screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg polydimethylsiloxane
  - Basis: per 1,000 kg net reference product for an included route; replace with measured load
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyethylene glycol to water (`polyethylene_glycol_water`)

Record discharged polyethylene glycol separately when monitoring identifies it.

- Selected flow: Polyethylene glycol to water
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for a direct discharge with measured polyethylene glycol; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Matched concentration multiplied by discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product for the treated route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater_records`
- Source/status: `cp_water_wastewater_records`; unresolved Tiangong elementary-flow mapping
- Sources: `ec-jrc-txt-bref-2023`; `eu-textiles-bat-2022`
- Range: Provisional polyethylene-glycol discharge screen, not an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg polyethylene glycol
  - Basis: per 1,000 kg net reference product for an included route; replace with measured load
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packing and product dispatch (`packing_dispatch`)

#### Inputs

##### Product flows

###### Carded fibre entering packing (`carded_packing_input`)

Record carded fibre entering packing separately from aligned and conditioned fibre.

- Selected flow: Carded synthetic staple fibre entering packing
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for a carded route without later alignment or conditioning; instantiate one row per declared polymer or blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed internal transfer reconciled to the final net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_output`
- Source/status: `cp_reference_output`; unresolved Tiangong internal-product mapping
- Sources: `un-cpc-v3-2025`
- Range: Provisional packing-input uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with matched packing transfer and tare record
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Combed and drawn fibre entering packing (`aligned_packing_input`)

Record combed/drawn fibre entering packing separately from carded and conditioned fibre.

- Selected flow: Combed and drawn synthetic staple fibre entering packing
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for an aligned route without later conditioning; instantiate one row per declared polymer or blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed internal transfer reconciled to final net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_output`
- Source/status: `cp_reference_output`; unresolved Tiangong internal-product mapping
- Sources: `un-cpc-v3-2025`
- Range: Provisional aligned-packing-input uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with matched packing transfer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioned fibre entering packing (`conditioned_packing_input`)

Record wet- or thermally-conditioned fibre entering packing separately from untreated prepared fibre.

- Selected flow: Conditioned synthetic staple fibre entering packing
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only for an included conditioning route; instantiate one row per declared polymer or blend
- Flow property / unit: Mass / kg
- Amount rule: Weighed internal transfer reconciled to final net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reference_output`
- Source/status: `cp_reference_output`; unresolved Tiangong internal-product mapping
- Sources: `un-cpc-v3-2025`
- Range: Provisional conditioned-packing-input uncertainty interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1500
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with matched packing transfer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyethylene bale film (`polyethylene_bale_film`)

Record polyethylene bale film as its own packaging input.

- Selected flow: Polyethylene bale film
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when polyethylene film leaves with the product; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Purchase issue, bill of materials, weighed packaging or stock-change record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Source/status: `cp_packaging_records`; unresolved Tiangong packaging-flow mapping
- Sources: `eu-pef-method-2021`
- Range: Provisional polyethylene-film screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg packaging
  - Basis: per 1,000 kg net reference product; replace with product-specific packaging records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polypropylene bale strapping (`polypropylene_strapping`)

Record polypropylene strapping separately from film, board and pallets.

- Selected flow: Polypropylene bale strapping
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when polypropylene strapping leaves with the product; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Unit mass multiplied by used straps or weighed packaging issue
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Source/status: `cp_packaging_records`; unresolved Tiangong packaging-flow mapping
- Sources: `eu-pef-method-2021`
- Range: Provisional polypropylene-strapping screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with product-specific packaging records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated-board packaging (`corrugated_board_packaging`)

Record corrugated board separately from polymer packaging and pallets.

- Selected flow: Corrugated cardboard, type C, E or F, fibre content at least 80% `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- UUID status: confirmed Tiangong Product flow; state code 100; CPC 32151
- Applicability: Include only for the stated corrugated-board grade leaving with the product; represent another grade as a separate atomic flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Unit mass multiplied by packages used or weighed packaging issue
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging evidence from `cp_packaging_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional corrugated-board screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with product-specific packaging records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden pallet (`wooden_pallet`)

Record wooden pallets separately and disclose reuse cycles when a pallet pool is used.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- UUID status: confirmed Tiangong Product flow; state code 100; CPC 31702
- Applicability: Include only when a pallet is attributable to the shipped product; omit otherwise
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Pallet unit mass times attributable units divided by documented reuse cycles where applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; pallet and reuse evidence from `cp_packaging_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional wooden-pallet screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg attributable pallet mass
  - Basis: per 1,000 kg net reference product; replace with pallet and reuse records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for packing and internal dispatch (`packing_electricity`)

Record electricity for baling, compression, wrapping, conveying and dispatch equipment within the facility gate.

- Selected flow: Site electricity supply
- UUID status: unresolved - requires foreground mapping
- Applicability: Include when baling, wrapping, conveying or dispatch uses electricity; omit only for documented zero-electricity transfer
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Source/status: `cp_energy_records`; unresolved Tiangong energy-flow mapping
- Sources: `eu-textiles-bat-2022`
- Range: Provisional packing-electricity screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg net reference product; replace with metered or equipment-specific data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net prepared synthetic staple fibre output (`reference_output`)

This is the reference output. It represents synthetic staple fibre processed for spinning and explicitly does not represent cloth, yarn or fabric despite the selected Tiangong flow name.

- Selected flow: Synthetic Fiber Cloth `95a493a4-1e51-4eb5-9b7c-e06bf912e993`
- UUID status: confirmed Tiangong Product flow; CPC 26210 semantic identity only; misleading name does not denote cloth
- Applicability: Required reference output for every conforming data package
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1,000 kg net fibre excluding packaging at the declared moisture state
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1,000 kg net prepared synthetic staple fibre
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Source/status: confirmed product UUID; net-mass release record `cp_reference_output`
- Sources: `un-cpc-v3-2025`
- Range: Exact reference-amount interval
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg net prepared fibre
  - Basis: exact PCR reference amount excluding packaging
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)

##### Waste flows

###### Waste polyethylene bale film (`waste_polyethylene_film`)

Record waste polyethylene film separately from other packaging waste.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- UUID status: confirmed Tiangong Waste flow; state code 100; plastic waste CPC 39270
- Applicability: Include only when polyethylene bale film becomes waste inside the foreground boundary; retain the film origin in the exchange documentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste or packaging input minus packaging shipped and documented stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging balance from `cp_packaging_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional waste-polyethylene-film screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with facility packaging balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Waste polypropylene strapping (`waste_polypropylene_strapping`)

Record waste polypropylene strapping separately from film, board and wood.

- Selected flow: Polypropylene wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- UUID status: confirmed Tiangong Waste flow; state code 100; plastic waste CPC 39270
- Applicability: Include only when polypropylene strapping becomes waste inside the foreground boundary; retain the strapping origin in the exchange documentation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste or input minus shipped strapping and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging balance from `cp_packaging_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional waste-polypropylene-strapping screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with packaging balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Waste corrugated board (`waste_corrugated_board`)

Record waste corrugated board separately from polymer packaging and wood.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- UUID status: confirmed Tiangong Waste flow; state code 100; cardboard packaging waste
- Applicability: Include only when corrugated board becomes waste inside the foreground boundary; omit otherwise
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed waste or input minus shipped board and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Source/status: confirmed by `flow-hybrid-search` and Tiangong `flow get`; packaging balance from `cp_packaging_records`
- Sources: `eu-pef-method-2021`
- Range: Provisional waste-corrugated-board screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with packaging balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Waste wooden pallet (`waste_wooden_pallet`)

Record discarded wooden pallets separately from reused pallets and other packaging waste.

- Selected flow: Waste wooden pallet
- UUID status: unresolved - requires foreground mapping
- Applicability: Include only when a pallet is discarded inside the foreground boundary; omit otherwise
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded pallet mass attributed to the product route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Source/status: `cp_packaging_records`; unresolved Tiangong waste-flow mapping
- Sources: `eu-pef-method-2021`
- Range: Provisional waste-pallet screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net reference product; replace with pallet records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Multi-output or shared preparation operations | Avoid allocation by submetering, batch separation, route separation or process subdivision so that only inputs and outputs attributable to the declared prepared fibre are included. | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_physical_relation` | Shared operations that cannot be subdivided | If subdivision is not feasible, use a documented causal physical relationship such as measured machine time, throughput, metered energy or mass only when it represents resource causality; preserve separate polymer and route results. | `eu-pef-method-2021` |
| `allocation_other_relation_fallback` | Residual multifunctionality without a defensible physical relation | Use another relationship, including economic allocation, only after documenting why subdivision and physical allocation fail, the price basis and period, and a sensitivity result. | `eu-pef-method-2021` |
| `allocation_internal_recirculation` | Fibre returned to the same foreground line | Treat verified same-line recirculation as an internal loop. Do not count it as both exported co-product and new external input; retain gross and net movement records for mass balance. | `eu-textiles-bat-2022` |
| `allocation_exported_fibre_material` | Saleable noils, off-spec fibre or other exported material | Classify an output as co-product only when it has documented product status and destination. Otherwise record it as waste. Disclose any burden allocation and do not apply an avoided-burden credit silently. | `eu-pef-method-2021`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipt` | `fibre_preparation_line` | Received fibre identity and mass | Supplier specification, goods receipt, weigh ticket and stock ledger | lot_id, supplier, polymer_family, blend_components, mass_fractions, virgin_or_recovered_status, prior_preparation, finish_content, gross_mass, tare_mass, net_mass, moisture_basis, receipt_time | Match supplier specification to each received lot and reconcile net weighed mass with inventory movement | kg and kg/kg | Each lot; reconcile at reporting-period close | Same representative period as output, including opening and closing stock | All facilities and lines represented by the dataset | Sum homogeneous lots only after preserving polymer, blend, origin and preparation-route strata | Calibrated scale record, supplier certificate, lot traceability and stock reconciliation |
| `cp_energy_records` | `fibre_preparation_line` | Electricity and thermal-energy use | Meter, fuel issue, steam invoice or equipment operating record | meter_id, carrier, opening_reading, closing_reading, fuel_mass_or_volume, heating_value_source, equipment_power, operating_time, process_id, lot_or_period, allocation_driver | Prefer process submetering; otherwise calculate from equipment power and operating time and document shared-utility allocation | kWh or MJ by carrier | Continuous or each batch; aggregate monthly or by campaign | Representative normal-operation period matched to production | Every included process and line | Subtract non-production use where metered, allocate shared use by causal driver, then normalize to net output | Meter calibration, invoices, runtime logs, conversion factors and allocation worksheet |
| `cp_auxiliary_records` | `fibre_preparation_line` | Preparation and conditioning auxiliary use | Batch dosing sheet, flow meter, purchase issue and stock ledger | product_name, supplier, function, composition_or_sds, active_fraction, opening_stock, receipts, closing_stock, dose, lot_id, process_id | Record commercial product mass by chemical and reconcile dosing with stock change | kg commercial product and kg active substance when known | Each batch or dosing event; reconcile monthly | Same period and product route as output | Every line applying auxiliaries | Keep products separate; normalize commercial and active mass independently | Dosing calibration, signed batch sheet, SDS or supplier composition and stock reconciliation |
| `cp_process_mass_balance` | `fibre_preparation_line` | Fibre intermediate, return loop, product and removed material | Weigh tickets, hopper or bale scales, production counter and stock ledger | process_id, lot_id, input_mass, output_mass, internal_return_mass, exported_reject_mass, captured_dust_mass, opening_wip, closing_wip, moisture_basis | Build process and line balances on a consistent conditioned-mass basis | kg | Each lot where feasible; otherwise each shift or campaign | Matched input-output period including work-in-progress change | Every included route and line | Sum within homogeneous route strata; retain gross internal returns and use net values for external inventory | Scale calibration, signed balance, reason for imbalance and disposition records |
| `cp_air_emissions` | `fibre_preparation_line` | Particulate and relevant air releases | Stack test, continuous monitor, ventilation survey or substance-specific emission calculation | emission_point, substance, concentration, gas_flow, operating_time, abatement_status, capture_efficiency, production_mass, method, detection_limit | Match concentration and flow measurements in time; otherwise apply a documented applicable factor to collected activity data | kg substance, mg/Nm3 and Nm3 as recorded | According to permit and risk; repeat after material process or control change | Representative operating condition and matched production | Every relevant emission point for included processes | Calculate mass load per substance and sum only comparable points; keep captured material out of air releases | Laboratory report, instrument calibration, sampling plan, operating log and legal-limit comparison |
| `cp_water_wastewater_records` | `wet_thermal_conditioning` | Water intake, reuse, wastewater and direct water releases | Water meters, batch records, discharge meters and laboratory analysis | water_source, intake_volume, reused_volume, evaporated_or_carryover_estimate, discharge_volume, sample_time, parameter, concentration, treatment_route, production_mass | Establish process water balance and match discharge concentration with corresponding flow period | m3, kg and mg/L as applicable | Each batch or continuous meter; sample according to permit and risk | Same treated-route period as output | All included wet processes, treatment units and discharge points | Keep fresh, reused and discharged streams separate; calculate pollutant load from matched concentration and volume | Meter calibration, chain of custody, accredited laboratory result, balance reconciliation and permit record |
| `cp_waste_records` | `wet_thermal_conditioning` | Sludge and other exported residues | Container weight, waste manifest and treatment receipt | waste_type, process_id, gross_mass, tare_mass, moisture_or_dry_solids, destination, treatment, date | Weigh each shipment or container and link it to the generating process | kg wet and kg dry where available | Each removal | Same period as treated output | All included wet or thermal processes | Sum by waste type, moisture basis and destination before normalization | Scale evidence, manifest, treatment receipt and moisture analysis |
| `cp_packaging_records` | `packing_dispatch` | Packaging input and packing residues | Bill of materials, purchase issue, pack specification and waste weight | package_type, material, unit_mass, units_used, shipped_units, damaged_units, waste_mass, stock_change, transfer_form | Calculate shipped and discarded packaging separately by material | kg | Each packaging batch or dispatch campaign | Same period as reference output | All packing formats in the dataset | Preserve material and format strata; normalize to net fibre output | Pack specification, unit-weight check, stock record and waste receipt |
| `cp_reference_output` | `packing_dispatch` | Net prepared-fibre output and qualifiers | Calibrated scale, lot release and product specification | lot_id, gross_shipped_mass, packaging_tare, net_fibre_mass, moisture_basis, polymer_family, blend_fractions, fibre_length, linear_density, crimp, finish_content, preparation_state, output_form, geography, route, release_time | Determine net fibre as gross shipped mass minus measured packaging tare and verify required qualifiers at release | kg and declared property units | Each released lot | Same period as all normalized inputs and outputs | Every represented product and route | Keep route and product strata separate; sum only after representativeness review | Scale calibration, release certificate, product specification and lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Released product lot | net_fibre_mass = gross_shipped_mass - measured_packaging_tare | gross_shipped_mass; measured_packaging_tare | kg net prepared fibre | `eu-pef-method-2021` |
| `calc_normalize_1000kg` | Every foreground inventory amount | normalized_amount = period_or_lot_amount / matched_net_fibre_mass * 1000 kg | period_or_lot_amount; matched_net_fibre_mass | amount per 1,000 kg net reference product | `eu-pef-method-2021` |
| `calc_conditioned_mass` | Records converted between moisture states | converted_mass = measured_mass * (1 - measured_initial_moisture_fraction) / (1 - declared_target_moisture_fraction); use only measured fractions on the same mass convention | measured_mass; measured_initial_moisture_fraction; declared_target_moisture_fraction | kg at declared moisture state |  |
| `calc_line_mass_balance` | Each process and reporting period | unexplained_difference = inputs + opening_work_in_progress - outputs - exported_waste - closing_work_in_progress; internal returns cancel within the same boundary | input_mass; output_mass; exported_waste_mass; opening_work_in_progress; closing_work_in_progress; internal_returns | kg unexplained difference with signed reconciliation | `eu-textiles-bat-2022` |
| `calc_shared_energy` | Shared meter lacking process submeter | Allocate by measured operating time times rated or measured load only when equipment and load states are documented; otherwise report the gap and do not claim site specificity | shared_meter_use; equipment_operating_time; measured_or_rated_load; production_mass | kWh or MJ by process | `eu-pef-method-2021`; `eu-textiles-bat-2022` |
| `calc_air_mass_load` | Measured channelled emission | substance_mass = concentration * dry_or_wet_gas_flow_on_matching_basis * operating_time, with explicit unit and reference-condition conversion | concentration; gas_flow; operating_time; reference_conditions | kg substance per period and per 1,000 kg product | `eu-textiles-bat-2022` |
| `calc_water_pollutant_load` | Direct discharge after treatment | pollutant_mass = matched_concentration * matched_discharge_volume with explicit unit conversion | concentration; discharge_volume; sample_and_flow_period | kg parameter or substance per period and per 1,000 kg product | `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Inputs and reference output | Trace every reported lot from supplier and receipt through process route to released output, including polymer, blend, feedstock origin, prior preparation and output-state qualifiers. | Supplier specification, receipt record, route traveller and release certificate; `un-cpc-v3-2025` |
| `dq_route_representativeness` | Aggregated dataset | Do not aggregate materially different polymer, blend, recovered-content, auxiliary, wet/thermal or equipment routes without a documented representativeness test and retained disaggregated records. | Route-stratified inventory and aggregation review; `ec-jrc-txt-bref-2023`; `eu-pef-method-2021` |
| `dq_temporal_match` | All foreground data | Use a recent period representative of normal operation and match inputs, outputs, work-in-progress, emissions and utilities to the same lots or reporting window. Identify abnormal, startup, shutdown and maintenance periods. | Dated ledgers, operating log, meter periods and reconciliation worksheet; `eu-pef-method-2021`; `eu-textiles-bat-2022` |
| `dq_measurement_quality` | Mass, energy, water and emission records | Retain instrument identity, calibration or verification status, method, detection limit where relevant and unit conversions. State whether each value is measured, calculated or estimated. | Calibration records, laboratory reports, invoices, meter exports and calculation workbook; `eu-pef-method-2021`; `eu-textiles-bat-2022` |
| `dq_completeness` | Process input-output inventory | Include all known material, energy, water, product, co-product, waste and direct-emission flows for included processes. Do not hide a flow through an undocumented cut-off. | Input-output inventory, mass and water balances, waste manifests and emission-point register; `eu-textiles-bat-2022` |
| `dq_estimate_replacement` | Provisional ranges and modelled values | Treat every reasoned-estimate range as a non-binding authoring and QA screen. Replace it with foreground distributions or reviewed route-specific evidence before publication and whenever it affects a study result. | Estimate register, replacement decision and retained source or foreground distribution |
| `dq_source_currency` | External guidance and standards | Check current legal, BAT, standard and classification status at dataset release and disclose any superseded source retained for comparability. | Source review record; `un-cpc-v3-2025`; `eu-textiles-bat-2022`; `iso-14044-2006` |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow and product description | Require product flow UUID 95a493a4-1e51-4eb5-9b7c-e06bf912e993, Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 and kg. Reject a package that interprets “Synthetic Fiber Cloth” as woven or other fabric instead of CPC 26210 prepared staple fibre. | `un-cpc-v3-2025` |
| `validation_scope_state` | Product category | Confirm that output is unspun synthetic staple fibre already carded, combed or otherwise prepared for spinning. Reject yarn, continuous filament, woven, knitted, tufted, nonwoven, dyed, printed, coated or finished products. | `un-cpc-v3-2025`; `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `validation_required_qualifiers` | Reference product metadata | Fail completeness when polymer and blend composition, feedstock origin, fibre properties, preparation state, optional treatments, moisture basis, output form, geography, route or reporting period is missing. | `eu-pef-method-2021`; `ec-jrc-txt-bref-2023` |
| `validation_route_conditioning` | Dataset aggregation | Reject an unconditional category average across polymer families, mixed compositions, virgin and recovered feedstock, or dry, combed/drawn, wet or thermal routes. Require route-specific records or a documented homogeneity test. | `ec-jrc-txt-bref-2023`; `eu-pef-method-2021` |
| `validation_process_inclusion` | Process map | Require `fibre_preparation_line` and `packing_dispatch`. Include `combing_drawing` and `wet_thermal_conditioning` only when their conditions are met, and reject unexplained inventory rows from excluded downstream textile processes. | `ec-jrc-txt-bref-2023`; `ifc-textile-ehs-2007` |
| `validation_mass_and_stock_balance` | Material inventory | Require net packaging exclusion, matched moisture basis, work-in-progress adjustment and a signed explanation for any unresolved material-balance difference. | `eu-textiles-bat-2022`; `eu-pef-method-2021` |
| `validation_dust_and_emissions` | Mechanical and conditional treatment routes | Require captured dust, exported rejects, abatement operation and residual releases to be distinguished; if wet or thermal treatment is included, require corresponding water, energy, chemicals, wastewater, residues and relevant direct emissions. | `ifc-textile-ehs-2007`; `eu-textiles-bat-2022` |
| `validation_allocation` | Shared or multi-output operations | Verify subdivision was attempted first and that any physical or other allocation has a causal driver, calculation record and sensitivity disclosure where required. Reject silent avoided-burden credits. | `eu-pef-method-2021`; `iso-14044-2006` |
| `validation_evidence_status` | Quantitative values | Distinguish collected, calculated, external-source and reasoned-estimate evidence. A reasoned-estimate range is not a measured value, legal limit or publication-ready default and must carry a replacement decision. | `eu-pef-method-2021` |
| `validation_temporal_completeness` | Foreground data package | Verify that input, output, utility, waste and emission records cover the same representative operating window and that exclusions, abnormal periods and missing measurements are disclosed. | `eu-pef-method-2021`; `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-, product- and facility-specific foreground dataset for production of synthetic staple fibre processed for spinning at the preparation-facility gate |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` for yarn and textile product systems only after methodology review, UUID completion and replacement or approval of provisional evidence |
| allowed_use | Model the disclosed CPC 26210 polymer, blend, feedstock origin, preparation route, geography, period and product state; connect separate upstream fibre-production and downstream spinning datasets |
| excluded_use | Woven or other cloth production; yarn spinning or twisting; primary polymer or chemical-fibre manufacture; artificial/regenerated staple fibre; undisclosed mixed-fibre classification; unconditional proxy for another polymer, recovered-content route, wet/thermal route, geography or technology |
| required_metadata | Canonical PCR id; CPC coordinate; reference UUIDs and semantic caveat; polymer and blend composition; virgin or recovered basis; fibre length, linear density, crimp and finish; preparation sequence; optional treatment status; moisture basis; output form; facility and geography; technology; reporting period; allocation; upstream datasets; data owner; review state |
| required_quality_disclosure | Foreground versus secondary values; instrument and calibration status; temporal and route coverage; mass, water and stock reconciliation; aggregation rationale; allocation method; missing UUIDs; estimate register; source versions; abnormal periods; completeness gaps and uncertainty |
| update_trigger | New foreground measurements or reviewed range evidence; resolution of inventory-flow UUIDs; change in polymer, blend, recovered-content basis, auxiliary chemistry, equipment, process sequence, dust control, wet/thermal treatment, packaging, allocation, upstream dataset, regulation, BAT conclusion, classification or reference-flow semantics |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, code 26210, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-12 | Official category identity, processed-for-spinning state and separation from artificial staple fibre and man-made-fibre yarn |
| `ec-jrc-txt-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, TXT BREF, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry, retrieved 2026-08-12 | Process decomposition, polymer- and route-conditioning, preparation agents, boundary between fibre preparation, yarn manufacture and fabric production |
| `eu-textiles-bat-2022` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj, retrieved 2026-08-12 | Input-output inventory, energy, water, chemicals, waste, emissions, monitoring and management requirements for applicable operations |
| `ifc-textile-ehs-2007` | Official guidance (`official_guidance`) | International Finance Corporation, Environmental, Health, and Safety Guidelines for Textile Manufacturing, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf, retrieved 2026-08-12 | Synthetic staple-fibre and yarn-process distinction, man-made fibre families, dust sources and enclosure, extraction and filtration controls |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method, ELI http://data.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-12 | Functional unit normalization, company-specific input-output data, data quality, subdivision and allocation hierarchy |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, including Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html, retrieved 2026-08-12 | LCA and LCI requirements, reporting framework and allocation hierarchy referenced by the EU PEF method |
