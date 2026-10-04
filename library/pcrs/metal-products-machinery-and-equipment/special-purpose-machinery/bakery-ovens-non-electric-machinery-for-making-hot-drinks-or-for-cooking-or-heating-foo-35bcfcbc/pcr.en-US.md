---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bakery-ovens-non-electric-machinery-for-making-hot-drinks-or-for-cooking-or-heating-foo-35bcfcbc
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-electric bakery ovens and non-domestic beverage, cooking or food-heating machinery manufacture

## 1. Scope and Applicability

This PCR constructs manufacture-stage foreground data packages for complete non-electric bakery ovens and non-domestic hot-drink, cooking or food-heating machines. The non-electric qualifier applies to bakery ovens; it does not exclude electric beverage boilers or commercial electric cookers. Identify the actual principal function and heating route before selecting guidance. Auxiliary fans and electronic controls do not turn a fuel-heated bakery oven into an electric bakery oven. Electric industrial bakery ovens and laboratory/other industrial furnaces belong to a different boundary; domestic appliances, separately delivered burners/parts, agricultural dryers, milling and other non-thermal food-processing machines are excluded. A combi-function product needs documented principal purpose and classification review when the category is ambiguous. Standalone automatic vending machines are excluded; a beverage maker with an optional accounting interface is not automatically a complete vending-machine reference. Review its actual delivered function and classification separately.

Manufacturer examples establish different configurations, not a common BOM or recipe. The rule follows actual fabrication, finishing, assembly, factory testing and gate delivery. Food, drink, energy and cleaning during later customer use, installation and end of life require separate downstream models; no machine lifetime, food yield, default power or universal mass is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bakery-ovens-non-electric-machinery-for-making-hot-drinks-or-for-cooking-or-heating-foo-35bcfcbc |
| classification_refs | CPC 3.0 44515 |
| covered_products | Non-electric bakery ovens; non-domestic hot-drink machines, commercial cookers and food heaters, including actual electric configurations in the latter branch |
| excluded_products | Electric industrial bakery ovens and other industrial/laboratory furnaces; domestic machines; standalone parts/burners; unrelated food processing and agricultural dryers |
| representative_product | Gas/oil-heated rack oven, electric coffee machine or ceramic-heated commercial cooker as separate configurations; none represents the full category |
| production_route | Actual make/buy receipt → conditional metal fabrication/finishing → configured thermal/electrical assembly → factory acceptance/rework → net-mass release/packing |
| market_state | New accepted complete machine at factory gate, configured and traceable; transport packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an accepted complete non-domestic food/beverage thermal machine of declared configuration |
| How much | 1 kg |
| How well | Approved design, food-contact/safety requirements and actual factory acceptance achieved; mass is a production reference, not equivalent cooking service |
| How long or cycle | Manufacture through factory gate only; no assumed service life or use cycle |
| reference_flow_link | final_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bakery ovens, non-electric, machinery for making hot drinks or for cooking or heating food, except domestic type machines `818fc255-fcf4-4702-818b-aa7b29550764` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer; model and serial/configuration; non-domestic intended duty; bakery oven versus beverage/cooking/heating function; main heating technology and actual fuel; capacity, food-contact and pressure ratings; steel and elastomer grades; make/buy components; burner, heat exchanger, boiler, heater, pumps, fan, grinder and controls actually fitted; included cooling and other add-ons; initial fluid charge; delivered net mass M and acceptance state; factory site, period and supplier geography; factory test duty and test consumables |

The category flow is a manufactured product at plant with Mass as reference property. Its broad identity supplies no particular BOM, grade or geography: retain exact configuration and supplier boundaries. Chinese display preserves the official flow name; the scope here independently distinguishes the two heating branches.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| net_scope | final_product | Mass | kg | Include delivered incorporated accessories and initial fluid charge; exclude transport packaging. Do not use a brochure empty weight for another configuration or mix dry/gross mass. |
| composition | chemical and metal rows | Mass | kg | Record formulation mass and measured active/contained-element fraction separately; assay all balance terms and measure wet/dry basis. |
| utilities | energy and water | Energy; Volume | kWh; MJ; m3 | Preserve actual reference property and calibrated raw unit. kWh × 3.6 = MJ; fuel uses actual NCV, water density is source-specific. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual certified sheet/tube and purchased completed subassemblies at receiving gate with supplier processing and transport identified |
| starting_condition_role | foreground_input |
| product_classification_scope | Semantic complete machinery boundary; CPC 44515 is mapping context only |
| recursive_input_rule | Bought same-category module records its supplier dataset once and only incremental local work; no recursive rebuilding of already embedded material/energy |
| upstream_dataset_requirement | Match actual grade/state, part specification, provider location/year and treatment destination; disclose transport coverage and missing supplier burdens |
| disclosure | manufacturer; model and serial/configuration; non-domestic intended duty; bakery oven versus beverage/cooking/heating function; main heating technology and actual fuel; capacity, food-contact and pressure ratings; steel and elastomer grades; make/buy components; burner, heat exchanger, boiler, heater, pumps, fan, grinder and controls actually fitted; included cooling and other add-ons; initial fluid charge; delivered net mass M and acceptance state; factory site, period and supplier geography; factory test duty and test consumables |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | all processes | Include actual receiving/transport, fabrication, finishing, assembly, utilities, controls, factory trials, rejects/rework, abatement and packaging. Exclude customer operation, customer food products and unrelated modules. | `un-cpc3-2025` |
| boundary_make_buy | assemblies | Maintain a make/buy matrix per actual component: starting state, supplier operations, local steps and upstream coverage. Bought complete burner/boiler/motor/refrigeration module and its embedded raw inputs cannot both be counted. Contracted finishing is a supplier process once, not also local chemicals. | `miwe-rack-oven`, `franke-a800`, `rational-ivario` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Chamber, pan, frame and fluid-path fabrication | conditional | Only actual in-house operations: cut, bend, machine and join certified sheet, tube and fittings; purchased completed vessels bypass supplier operations. Identify grade, joining procedure, scrap and food-contact finish. | foreground_production | per 1 kg reference flow; collected per one accepted finished machine |
| surface_finish | Conditional cleaning, passivation and protective finish | conditional | Actual degreasing, weld cleaning, passivation or exterior coating only. Record bath identity/concentration, rinse and curing; no universal acid, solvent or coating recipe. | foreground_production | per 1 kg reference flow; collected per one accepted finished machine |
| thermal_assembly | Configured thermal and fluid-system assembly | required | Assemble only the selected product route: gas/oil burner and heat exchanger for non-electric bakery ovens; actual hot-water/steam boiler, resistance/ceramic heater or supplied-steam interface for beverage/cooking machines. Retain pumps, valves and safety devices actually fitted. | foreground_production | per 1 kg reference flow; collected per one accepted finished machine |
| electromechanical | Drives, controls and configured refrigeration assembly | required | Install actual wiring, controller, sensors and motor/fan/grinder/tilting mechanism. Cooling units are optional: define included delivered module, compressor and refrigerant only when part of the product. | foreground_production | per 1 kg reference flow; collected per one accepted finished machine |
| factory_acceptance | Factory leak, safety and functional acceptance | required | Include actual pressure/leak, electrical safety, heating, circulation and control trials plus repeat tests and cleaning. Test limits follow approved design and applicable specification; tests are not lifetime customer operation. | foreground_production | per 1 kg reference flow; collected per one accepted finished machine |
| dispatch | Accepted release and transport packaging | required | Release the complete accepted machine at factory gate with declared accessories and installed initial fluid charge. Weigh packaging separately and preserve net mass basis. | foreground_production | per 1 kg reference flow; collected per one accepted finished machine |
| shared_services | Shared factory utilities and pollution controls | required | Reconcile allocated utilities, treatment and waste handling once across selected manufacture and factory tests; separately document purchased versus generated energy. | foreground_production | per 1 kg reference flow; collected per one accepted finished machine |

The cards are concrete conditional exchanges, not a mandatory common recipe. If a documented configuration uses another steel grade, fuel, coating chemical, refrigerant or packaging material, add its own atomic card and protocol; do not rename a basket or inherit an incompatible UUID. Mark absent routes not_applicable with BOM/process evidence; unknown quantity stays unresolved. Paired internal component transfers are reconciliation records, not additional external raw inputs.

### Process: Chamber, pan, frame and fluid-path fabrication (`fabrication`)

Only actual in-house operations: cut, bend, machine and join certified sheet, tube and fittings; purchased completed vessels bypass supplier operations. Identify grade, joining procedure, scrap and food-contact finish.

#### Inputs

##### Product flows

###### EN 1.4301 stainless steel sheet (`sheet_14301`)

Only when mill certificate identifies EN 1.4301 at the actual purchased surface/rolling state; other grades receive separate atomic cards. Never infer this grade from the word stainless in a brochure.

- Selected flow: EN 1.4301 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_sheet_14301.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sheet_14301`
- Sources: `epa-fabricated-metal`

###### EN 1.4404 stainless steel tube (`tube_14404`)

Only if certified actual food-contact tubing uses this grade; record wall, length and supplier forming state; alternate grade/shape needs its own card.

- Selected flow: EN 1.4404 stainless steel tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tube_14404.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tube_14404`
- Sources: `epa-fabricated-metal`

###### ER308L stainless steel welding wire (`weld_wire`)

Only for an actual qualified joining procedure specifying ER308L. Do not use it for an incompatible alloy joint; another filler is a separate exchange.

- Selected flow: ER308L stainless steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_weld_wire.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_wire`
- Sources: `epa-fabricated-metal`

###### Argon welding shielding gas (`argon`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_argon.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_argon`
- Sources: `epa-fabricated-metal`

###### Mineral-oil cutting lubricant (`cutting_oil`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Mineral-oil cutting lubricant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cutting_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cutting_oil`
- Sources: `epa-fabricated-metal`

###### Purchased factory electricity (`fabrication_electricity`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_electricity`
- Sources: `epa-fabricated-metal`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Stainless steel fabrication scrap (`stainless_scrap`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Stainless steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stainless_scrap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stainless_scrap`
- Sources: `epa-fabricated-metal`

###### Spent mineral cutting oil (`spent_cutting_oil`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Spent mineral cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_spent_cutting_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_cutting_oil`
- Sources: `epa-fabricated-metal`

##### Elementary flows

### Process: Conditional cleaning, passivation and protective finish (`surface_finish`)

Actual degreasing, weld cleaning, passivation or exterior coating only. Record bath identity/concentration, rinse and curing; no universal acid, solvent or coating recipe.

#### Inputs

##### Product flows

###### Sodium hydroxide degreasing solution (`naoh`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Sodium hydroxide degreasing solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_naoh.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_naoh`
- Sources: `epa-fabricated-metal`

###### Citric acid passivation solution (`citric`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Citric acid passivation solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_citric.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_citric`
- Sources: `epa-fabricated-metal`

###### Isopropanol surface-cleaning solvent (`ipa`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Isopropanol surface-cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_ipa.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa`
- Sources: `epa-fabricated-metal`

###### Polyester powder coating (`powder_coat`)

Only the actually specified exterior coating; no assumption of coating on food-contact surfaces. Record chemistry, overspray recovery and cure duty.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powder_coat.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder_coat`
- Sources: `epa-fabricated-metal`

###### Purchased factory electricity (`surface_finish_electricity`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish_electricity`
- Sources: `epa-fabricated-metal`

###### Treated tap water (`surface_finish_water`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Treated tap water
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish_water`
- Sources: `epa-fabricated-metal`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent sodium hydroxide cleaning solution (`spent_cleaner`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Spent sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_spent_cleaner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_cleaner`
- Sources: `epa-fabricated-metal`

###### Spent citric acid passivation solution (`spent_passivation`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Spent citric acid passivation solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_spent_passivation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_passivation`
- Sources: `epa-fabricated-metal`

###### Process wastewater for external treatment (`surface_finish_wastewater`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Process wastewater for external treatment
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish_wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish_wastewater`
- Sources: `epa-fabricated-metal`

##### Elementary flows

###### Isopropanol, to air (`ipa_air`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Isopropanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_ipa_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa_air`
- Sources: `epa-fabricated-metal`

### Process: Configured thermal and fluid-system assembly (`thermal_assembly`)

Assemble only the selected product route: gas/oil burner and heat exchanger for non-electric bakery ovens; actual hot-water/steam boiler, resistance/ceramic heater or supplied-steam interface for beverage/cooking machines. Retain pumps, valves and safety devices actually fitted.

#### Inputs

##### Product flows

###### Purchased complete stainless-steel bakery-oven chamber (`purchased_chamber`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased complete stainless-steel bakery-oven chamber
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_purchased_chamber.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_chamber`
- Sources: `miwe-rack-oven`

###### Purchased complete stainless-steel commercial cooking pan (`purchased_pan`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased complete stainless-steel commercial cooking pan
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_purchased_pan.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_pan`
- Sources: `rational-ivario`

###### Purchased complete machine support frame (`purchased_frame`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased complete machine support frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_purchased_frame.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_frame`
- Sources: `miwe-rack-oven`

###### Purchased gas burner assembly for bakery oven (`burner`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased gas burner assembly for bakery oven
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_burner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_burner`
- Sources: `miwe-rack-oven`

###### Purchased liquid-fuel burner assembly for bakery oven (`oil_burner`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased liquid-fuel burner assembly for bakery oven
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_oil_burner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oil_burner`
- Sources: `miwe-rack-oven`

###### Purchased stainless steel bakery-oven heat exchanger (`heat_exchanger`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased stainless steel bakery-oven heat exchanger
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_heat_exchanger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat_exchanger`
- Sources: `miwe-rack-oven`

###### Purchased beverage-machine steam boiler assembly (`steam_boiler`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased beverage-machine steam boiler assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steam_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam_boiler`
- Sources: `franke-a800`

###### Purchased beverage-machine hot-water boiler assembly (`hotwater_boiler`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased beverage-machine hot-water boiler assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hotwater_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hotwater_boiler`
- Sources: `franke-a800`

###### Purchased ceramic cooking-pan heating element (`ceramic_heater`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased ceramic cooking-pan heating element
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_ceramic_heater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ceramic_heater`
- Sources: `rational-ivario`

###### Purchased beverage-boiler resistance heating element (`resistance_heater`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased beverage-boiler resistance heating element
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_resistance_heater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resistance_heater`
- Sources: `franke-a800`

###### Purchased beverage-machine water pump assembly (`water_pump`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased beverage-machine water pump assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_pump.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_pump`
- Sources: `franke-a800`

###### Purchased steam safety valve (`steam_valve`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased steam safety valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steam_valve.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam_valve`
- Sources: `franke-a800`

###### Purchased insulated bakery-oven door glass (`insulating_glass`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Purchased insulated bakery-oven door glass
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_insulating_glass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_insulating_glass`
- Sources: `miwe-rack-oven`

###### Silicone rubber door gasket (`seal`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Silicone rubber door gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_seal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_seal`
- Sources: `miwe-rack-oven`

###### Mineral wool thermal insulation (`mineral_wool`)

Only for a configuration actually containing this named component/material. Supplier-certified BOM determines specification. Bought assembly includes its embodied materials and supplier fabrication once; when made here, use actual raw-material rows and manufacturing operations instead, never both.

- Selected flow: Mineral wool thermal insulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mineral_wool.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mineral_wool`
- Sources: `miwe-rack-oven`

###### Purchased factory electricity (`thermal_assembly_electricity`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal_assembly_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_assembly_electricity`
- Sources: `miwe-rack-oven`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Drives, controls and configured refrigeration assembly (`electromechanical`)

Install actual wiring, controller, sensors and motor/fan/grinder/tilting mechanism. Cooling units are optional: define included delivered module, compressor and refrigerant only when part of the product.

#### Inputs

##### Product flows

###### Purchased fan-drive electric motor (`motor`)

Actual fitted configuration only; track part specification, make/buy and supplier boundary. Bought motors/compressors already include embedded metal and oil; do not add their internal contents as fresh foreground inputs.

- Selected flow: Purchased fan-drive electric motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_motor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_motor`
- Sources: `franke-a800`

###### Purchased bakery-oven circulation fan (`fan`)

Actual fitted configuration only; track part specification, make/buy and supplier boundary. Bought motors/compressors already include embedded metal and oil; do not add their internal contents as fresh foreground inputs.

- Selected flow: Purchased bakery-oven circulation fan
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fan.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fan`
- Sources: `franke-a800`

###### Purchased ceramic-disc coffee grinder assembly (`grinder`)

Actual fitted configuration only; track part specification, make/buy and supplier boundary. Bought motors/compressors already include embedded metal and oil; do not add their internal contents as fresh foreground inputs.

- Selected flow: Purchased ceramic-disc coffee grinder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_grinder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grinder`
- Sources: `franke-a800`

###### Purchased machine control-board assembly (`controller`)

Actual fitted configuration only; track part specification, make/buy and supplier boundary. Bought motors/compressors already include embedded metal and oil; do not add their internal contents as fresh foreground inputs.

- Selected flow: Purchased machine control-board assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controller.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controller`
- Sources: `franke-a800`

###### Purchased temperature sensor (`sensor`)

Actual fitted configuration only; track part specification, make/buy and supplier boundary. Bought motors/compressors already include embedded metal and oil; do not add their internal contents as fresh foreground inputs.

- Selected flow: Purchased temperature sensor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_sensor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sensor`
- Sources: `franke-a800`

###### Copper conductor PVC-insulated machine wire (`wire`)

Actual fitted configuration only; track part specification, make/buy and supplier boundary. Bought motors/compressors already include embedded metal and oil; do not add their internal contents as fresh foreground inputs.

- Selected flow: Copper conductor PVC-insulated machine wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wire.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wire`
- Sources: `franke-a800`

###### Purchased sealed refrigeration compressor (`compressor`)

Actual fitted configuration only; track part specification, make/buy and supplier boundary. Bought motors/compressors already include embedded metal and oil; do not add their internal contents as fresh foreground inputs.

- Selected flow: Purchased sealed refrigeration compressor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_compressor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_compressor`
- Sources: `franke-a800`

###### Propane refrigerant R290 (`r290`)

Only if nameplate and charge record confirm R290 in an included cooling circuit; other actual refrigerants require separately named cards. Record initial charge and factory loss, not lifetime leakage. Factory-applied charge is separate from a precharged purchased compressor/module.

- Selected flow: Propane refrigerant R290
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_r290.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_r290`
- Sources: `franke-a800`

###### Purchased factory electricity (`electromechanical_electricity`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electromechanical_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electromechanical_electricity`
- Sources: `franke-a800`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Propane, to air (`r290_air`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Propane, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_r290_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_r290_air`
- Sources: `franke-a800`

### Process: Factory leak, safety and functional acceptance (`factory_acceptance`)

Include actual pressure/leak, electrical safety, heating, circulation and control trials plus repeat tests and cleaning. Test limits follow approved design and applicable specification; tests are not lifetime customer operation.

#### Inputs

##### Product flows

###### Natural gas for factory burner test (`test_naturalgas`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Natural gas for factory burner test
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_naturalgas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_naturalgas`
- Sources: `rational-ivario`

###### Distillate fuel oil for factory burner test (`test_fuel_oil`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Distillate fuel oil for factory burner test
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_fuel_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_fuel_oil`
- Sources: `rational-ivario`

###### Purchased steam for factory cooking-machine test (`test_steam`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased steam for factory cooking-machine test
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_steam.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_steam`
- Sources: `rational-ivario`

###### Roasted coffee beans for factory brewing test (`test_food`)

Only when actual factory acceptance consumes this specific test load; recipes for other test foods each need separate ingredient cards. Do not include future customer food throughput.

- Selected flow: Roasted coffee beans for factory brewing test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_food.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_food`
- Sources: `rational-ivario`

###### Purchased factory electricity (`factory_acceptance_electricity`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_factory_acceptance_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_factory_acceptance_electricity`
- Sources: `rational-ivario`

###### Treated tap water (`factory_acceptance_water`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Treated tap water
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_factory_acceptance_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_factory_acceptance_water`
- Sources: `rational-ivario`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wet spent coffee grounds from factory test (`coffee_residue`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Wet spent coffee grounds from factory test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coffee_residue.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coffee_residue`
- Sources: `rational-ivario`

###### Rejected food-heating machine for external dismantling (`rejected_machine`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Rejected food-heating machine for external dismantling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rejected_machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_machine`
- Sources: `rational-ivario`

###### Process wastewater for external treatment (`factory_acceptance_wastewater`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Process wastewater for external treatment
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_factory_acceptance_wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_factory_acceptance_wastewater`
- Sources: `rational-ivario`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_co2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2`
- Sources: `rational-ivario`

###### Carbon monoxide, to air (`co`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_co.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co`
- Sources: `rational-ivario`

###### Nitrogen oxides, as NO2, to air (`nox`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_nox.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nox`
- Sources: `rational-ivario`

### Process: Accepted release and transport packaging (`dispatch`)

Release the complete accepted machine at factory gate with declared accessories and installed initial fluid charge. Weigh packaging separately and preserve net mass basis.

#### Inputs

##### Product flows

###### Corrugated cardboard transport carton (`carton`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Corrugated cardboard transport carton
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_carton.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carton`
- Sources: `miwe-rack-oven`

###### Softwood transport pallet (`pallet`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Softwood transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pallet.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pallet`
- Sources: `miwe-rack-oven`

###### Low-density polyethylene transport film (`film`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Low-density polyethylene transport film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_film.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_film`
- Sources: `miwe-rack-oven`

###### Purchased factory electricity (`dispatch_electricity`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dispatch_electricity`
- Sources: `miwe-rack-oven`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bakery ovens, non-electric, machinery for making hot drinks or for cooking or heating food, except domestic type machines (`final_product`)

One accepted complete declared configuration; include incorporated initial charge and specified accessories, exclude all transport packaging.

- Selected flow: Bakery ovens, non-electric, machinery for making hot drinks or for cooking or heating food, except domestic type machines `818fc255-fcf4-4702-818b-aa7b29550764`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_product`
- Sources: `un-cpc3-2025`

##### Waste flows

##### Elementary flows

### Process: Shared factory utilities and pollution controls (`shared_services`)

Reconcile allocated utilities, treatment and waste handling once across selected manufacture and factory tests; separately document purchased versus generated energy.

#### Inputs

##### Product flows

###### Purchased factory electricity (`shared_services_electricity`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shared_services_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shared_services_electricity`
- Sources: `epa-fabricated-metal`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Metal-bearing wastewater treatment sludge (`sludge`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Metal-bearing wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_sludge.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sludge`
- Sources: `epa-fabricated-metal`

##### Elementary flows

###### Particulate matter smaller than 2.5 micrometres, to air (`pm25`)

Conditional on actual BOM or process use; declare grade, composition and interface. An absent exchange is not_applicable, not a missing-as-zero entry.

- Selected flow: Particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pm25.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm25`
- Sources: `epa-fabricated-metal`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared manufacture | Prefer subdivision; if shared, document physical causality using measured duty/load and matching period. Mass alone is not sufficient for unequal furnace cycles, test times or cooling duties. Other relationships require justification and sensitivity; retain unallocated totals and ensure allocations sum to one. | `ef-allocation-2021` |
| allocation_rejects | rework and residues | Retain all attributable rejected and repeated-test burdens in accepted-machine production. Exclude rejected count from N. Cancel internal transfers; exported scrap/waste has actual treatment once. Revenue does not itself establish co-product status and no avoided-metal credit is assumed. | `ef-allocation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

For a homogeneous model/configuration and reporting period, retain external receipts, opening/closing stocks, rejects and recoveries. Obtain accepted count N > 0 from serial release records. Calculate each attributable period exchange per accepted machine only after reconciliation and causal allocation; do not divide throughput by accepted count without retaining reject/rework burdens. If the configuration changes, split the lot and denominator. For period aggregation, retain calibrated net mass of every accepted unit in that same configuration: S = sum of those accepted net masses; M is their mean S / N and the collected per-machine exchange is Q / N. Thus normalized inventory equals Q / S. Preserve individual masses, variation and uncertainties; split incompatible configurations rather than averaging them. No numeric M, intensity, yield or lifetime is invented.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference_mass | measurement_record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted configuration/serial | Same reporting period as inventory | Declared factory gate | accepted net mass per machine | Calibration certificate; net weighing ticket; acceptance/BOM |
| cp_sheet_14301 | fabrication | sheet_14301 | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_tube_14404 | fabrication | tube_14404 | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_weld_wire | fabrication | weld_wire | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_argon | fabrication | argon | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Measure gas supply and residual cylinders with pressure/temperature and stated volume conditions; attribute actual weld duty. | m3 | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_cutting_oil | fabrication | cutting_oil | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_stainless_scrap | fabrication | stainless_scrap | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_spent_cutting_oil | fabrication | spent_cutting_oil | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_naoh | surface_finish | naoh | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_citric | surface_finish | citric | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_ipa | surface_finish | ipa | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_powder_coat | surface_finish | powder_coat | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_spent_cleaner | surface_finish | spent_cleaner | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_spent_passivation | surface_finish | spent_passivation | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_ipa_air | surface_finish | ipa_air | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Measure species-specific exhaust and fugitive loss; reconcile fresh/recovered solvent, stocks, residues and reaction; do not report total VOC as isopropanol. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_purchased_chamber | thermal_assembly | purchased_chamber | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_purchased_pan | thermal_assembly | purchased_pan | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_purchased_frame | thermal_assembly | purchased_frame | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_burner | thermal_assembly | burner | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_oil_burner | thermal_assembly | oil_burner | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_heat_exchanger | thermal_assembly | heat_exchanger | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_steam_boiler | thermal_assembly | steam_boiler | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_hotwater_boiler | thermal_assembly | hotwater_boiler | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_ceramic_heater | thermal_assembly | ceramic_heater | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_resistance_heater | thermal_assembly | resistance_heater | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_water_pump | thermal_assembly | water_pump | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_steam_valve | thermal_assembly | steam_valve | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_insulating_glass | thermal_assembly | insulating_glass | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_seal | thermal_assembly | seal | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_mineral_wool | thermal_assembly | mineral_wool | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_motor | electromechanical | motor | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_fan | electromechanical | fan | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_grinder | electromechanical | grinder | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_controller | electromechanical | controller | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_sensor | electromechanical | sensor | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_wire | electromechanical | wire | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_compressor | electromechanical | compressor | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_r290 | electromechanical | r290 | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_r290_air | electromechanical | r290_air | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use leak test, cylinder and recovery records to measure actual factory propane release; no prescribed leakage fraction. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_test_naturalgas | factory_acceptance | test_naturalgas | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Meter actual test input; fuel uses measured supplier net calorific value and mass/volume state; steam uses supply pressure, temperature and condensate-return enthalpy. Distinguish direct use from an in-house utility generation boundary. | MJ | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_test_fuel_oil | factory_acceptance | test_fuel_oil | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Meter actual test input; fuel uses measured supplier net calorific value and mass/volume state; steam uses supply pressure, temperature and condensate-return enthalpy. Distinguish direct use from an in-house utility generation boundary. | MJ | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_test_steam | factory_acceptance | test_steam | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Meter actual test input; fuel uses measured supplier net calorific value and mass/volume state; steam uses supply pressure, temperature and condensate-return enthalpy. Distinguish direct use from an in-house utility generation boundary. | MJ | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_co2 | factory_acceptance | co2 | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Measure each species after controls using matched concentration, dry/wet exhaust flow and test duration. Carbon-balance CO2 subtracts independently determined carbon in CO, hydrocarbons, soot and retained residues; carbon balance alone does not determine CO or NOx. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_co | factory_acceptance | co | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Measure each species after controls using matched concentration, dry/wet exhaust flow and test duration. Carbon-balance CO2 subtracts independently determined carbon in CO, hydrocarbons, soot and retained residues; carbon balance alone does not determine CO or NOx. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_nox | factory_acceptance | nox | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Measure each species after controls using matched concentration, dry/wet exhaust flow and test duration. Carbon-balance CO2 subtracts independently determined carbon in CO, hydrocarbons, soot and retained residues; carbon balance alone does not determine CO or NOx. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_test_food | factory_acceptance | test_food | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_coffee_residue | factory_acceptance | coffee_residue | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_rejected_machine | factory_acceptance | rejected_machine | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_carton | dispatch | carton | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_pallet | dispatch | pallet | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_film | dispatch | film | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_final_product | dispatch | final_product | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Reconcile serial-number acceptance, actual calibrated net weighing, delivered configuration and positive accepted count N; rejected machines are excluded from denominator, their attributable burdens retained. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | per 1 kg reference flow | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_fabrication_electricity | fabrication | fabrication_electricity | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Read calibrated process meter by interval and reconcile purchased site electricity; retain actual voltage, supplier/grid geography and year, test/production split and measured causal allocation. In-house generation instead has its own fuel and emissions, not a second purchased-power input. | kWh | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_surface_finish_electricity | surface_finish | surface_finish_electricity | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Read calibrated process meter by interval and reconcile purchased site electricity; retain actual voltage, supplier/grid geography and year, test/production split and measured causal allocation. In-house generation instead has its own fuel and emissions, not a second purchased-power input. | kWh | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_thermal_assembly_electricity | thermal_assembly | thermal_assembly_electricity | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Read calibrated process meter by interval and reconcile purchased site electricity; retain actual voltage, supplier/grid geography and year, test/production split and measured causal allocation. In-house generation instead has its own fuel and emissions, not a second purchased-power input. | kWh | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_electromechanical_electricity | electromechanical | electromechanical_electricity | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Read calibrated process meter by interval and reconcile purchased site electricity; retain actual voltage, supplier/grid geography and year, test/production split and measured causal allocation. In-house generation instead has its own fuel and emissions, not a second purchased-power input. | kWh | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_factory_acceptance_electricity | factory_acceptance | factory_acceptance_electricity | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Read calibrated process meter by interval and reconcile purchased site electricity; retain actual voltage, supplier/grid geography and year, test/production split and measured causal allocation. In-house generation instead has its own fuel and emissions, not a second purchased-power input. | kWh | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Read calibrated process meter by interval and reconcile purchased site electricity; retain actual voltage, supplier/grid geography and year, test/production split and measured causal allocation. In-house generation instead has its own fuel and emissions, not a second purchased-power input. | kWh | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_shared_services_electricity | shared_services | shared_services_electricity | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | For the same period reconcile actual site imports, on-site generation and exports, including measured storage change where applicable. Shared/residual electricity equals the reconciled electricity available to the factory minus electricity already assigned to fabrication, finishing, assembly, testing and dispatch. Allocate only the remaining measured shared loads by causal duty; never add the whole factory meter on top of process/test submeters. Keep provider and local-generation boundaries distinct. Investigate a negative residual against meter alignment and uncertainty; do not clip it to zero. | kWh | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_surface_finish_water | surface_finish | surface_finish_water | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Meter external water supply and loop make-up separately from recirculation; retain provider geography and source-specific density for mass balance, with actual dissolved loads and return destination. | m3 | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_surface_finish_wastewater | surface_finish | surface_finish_wastewater | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Meter discharge and sample actual composition/density; separate reusable internal returns, dissolved constituents and treatment sludge. | m3 | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_factory_acceptance_water | factory_acceptance | factory_acceptance_water | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Meter external water supply and loop make-up separately from recirculation; retain provider geography and source-specific density for mass balance, with actual dissolved loads and return destination. | m3 | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_factory_acceptance_wastewater | factory_acceptance | factory_acceptance_wastewater | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Meter discharge and sample actual composition/density; separate reusable internal returns, dissolved constituents and treatment sludge. | m3 | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_sludge | shared_services | sludge | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Use calibrated weighing, purchase/issue and opening/closing stock records; reconcile batch, recoveries, rejects and accepted count N of the same configuration. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |
| cp_pm25 | shared_services | pm25 | measurement_record | site; period; configuration; batch; raw amount and unit; stocks; returns; assay/density; allocation driver; accepted count N; uncertainty | Actual monitored welding/grinding exhaust after capture and abatement; retain size fraction, sampled air volume and production period. Unmeasured dust is unknown, never zero. | kg | Each batch/meter interval; period reconciliation | Actual representative year/campaign including rejects and repeat tests | Selected machine line and causally allocated factory services | attributable amount / accepted machines | Original signed records; calibration; assays; serial acceptance; make/buy boundary |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| physical_balance | site | Close each material/contained-element balance using opening stock + external inputs + reaction formation = closing stock + accepted product + external rejects/scrap + sludge/wastewater constituent + airborne species + reaction consumption. Apply measured assay to every corresponding stock/input/output term; gross steel mass is not chromium or nickel mass. Pair and cancel each internal transfer/recovery in the integrated boundary; internal return is not a new upstream purchase. For water use measured density and actual water fractions of wet product, sludge and residue: include make-up, test/cleaning feed, stock, retained moisture, evaporation, discharged water and reaction water; recirculation is paired, not consumption. For solvent retain fresh/recovered species, bath stock, residues, export, emissions and chemical reaction. Preserve residual and combined measurement/assay uncertainty; investigate unexplained closure, with no invented tolerance. | Stocks; assays; calibrated meters; reaction and return records; uncertainty | Closure residual and uncertainty |  |
| energy_units | utilities | kWh × 3.6 = MJ. Fuel mass × measured net calorific value = MJ. Net purchased steam energy E_net = m_steam × h_in - m_return × h_return: each measured kg is multiplied by matched specific enthalpy in MJ/kg at the actual pressure/temperature and common reference state. Retain actual return fraction and period/stock correspondence. In-house steam generation records its fuel, water and emissions instead of a second purchased-steam provider burden; do not duplicate generation fuel and supplied heat. | Calibrated meters; supplier NCV and state; condensate return | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | final_product | manufacturer; model and serial/configuration; non-domestic intended duty; bakery oven versus beverage/cooking/heating function; main heating technology and actual fuel; capacity, food-contact and pressure ratings; steel and elastomer grades; make/buy components; burner, heat exchanger, boiler, heater, pumps, fan, grinder and controls actually fitted; included cooling and other add-ons; initial fluid charge; delivered net mass M and acceptance state; factory site, period and supplier geography; factory test duty and test consumables | Order; approved drawings/BOM; supplier certificates; actual acceptance |
| identity_gaps | all cards | Resolve actual flow/provider/property and environmental compartment before complete dataset delivery. Generic sheet with no grade/state, Hong Kong water in a different region and source-specific biomass/incineration electricity do not establish these interfaces. | manifest review_metadata |
| ranges | all rows | No universal empirical range is supported. Retain actual records, signed applicability, calibration and uncertainty; unknown mandatory amount blocks completeness, while demonstrated absence is not_applicable. | Factory and independently compatible source evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify category branch, non-domestic use, main heating technology, positive measured M and N, same delivered configuration, 1 kg reference and full qualifier coverage. No equivalent cooking-service comparison by machine mass alone. | `un-cpc3-2025` |
| validate_balance | all processes | Close each material/contained-element balance using opening stock + external inputs + reaction formation = closing stock + accepted product + external rejects/scrap + sludge/wastewater constituent + airborne species + reaction consumption. Apply measured assay to every corresponding stock/input/output term; gross steel mass is not chromium or nickel mass. Pair and cancel each internal transfer/recovery in the integrated boundary; internal return is not a new upstream purchase. For water use measured density and actual water fractions of wet product, sludge and residue: include make-up, test/cleaning feed, stock, retained moisture, evaporation, discharged water and reaction water; recirculation is paired, not consumption. For solvent retain fresh/recovered species, bath stock, residues, export, emissions and chemical reaction. Preserve residual and combined measurement/assay uncertainty; investigate unexplained closure, with no invented tolerance. |  |
| validate_completeness | all applicable rows | Verify every actual route/external atomic flow, make/buy exclusivity, stocks, rejects/rework, causal utilities, normalization and species-specific post-control emissions. Unknown UUID/mandatory quantity or unsupported conversion blocks a complete dataset. This candidate methodology is not a certification or lifetime LCA. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Declared complete-equipment manufacture with verified upstream links |
| excluded_use | Customer food-production inventory, domestic machines, electric industrial bakery ovens or unsupported full-service equivalence |
| required_metadata | manufacturer; model and serial/configuration; non-domestic intended duty; bakery oven versus beverage/cooking/heating function; main heating technology and actual fuel; capacity, food-contact and pressure ratings; steel and elastomer grades; make/buy components; burner, heat exchanger, boiler, heater, pumps, fan, grinder and controls actually fitted; included cooling and other add-ons; initial fluid charge; delivered net mass M and acceptance state; factory site, period and supplier geography; factory test duty and test consumables |
| required_quality_disclosure | Route and make/buy coverage; unresolved identities/ranges; measurement and balance uncertainty; allocations; supplier geography/year; waste fate |
| update_trigger | Design/heating technology, supplier/grade, included cooling/add-ons, acceptance test, site or manufacturing route changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed pages 225–236, subclasses 43420/43430 and 44515/44516/44518. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Identity and adjacent product/part exclusions; classification alone is not manufacturing evidence. |
| miwe-rack-oven | handbook | MIWE roll-in e+ product information, PI RIE3.0/en/1909, pages 3–4. https://www.miwe.com/media/docs/produkte/prospekt/en/produktinformation-roll-in-eplus-3-0-en.pdf | Oil/gas versus electric oven alternatives; stainless heat exchanger, steam system, insulated glass, controls and optional door drive. No BOM grade, fabrication recipe or energy intensity established. |
| franke-a800 | handbook | Franke A800 product leaflet, 590.0690.071/09.23/CH-EN, pages 1–2. https://www.franke.com/content/dam/franke/language-masters/en/coffee-systems/documents/factsheets/en/EN_A800_Franke_CS_Product_Leaflet.pdf | Commercial coffee-machine boiler, grinder, brewing/control architecture and configuration-dependent cooling add-ons; electrical beverage counterexample to extending oven qualifier to every machine. Brochure mass/power are not defaults. |
| rational-ivario | handbook | RATIONAL, iVario The Game Changer, Restaurant brochure, pages 8–9. https://hcms.rational-online.com/hcms/v1.7/entity/brochure/166028/storage/MDE2NjAyOC8wL3BkZi1wcmV2aWV3LTE1MHBwaS1wcmludHNoZWV0/download/20_720_brochure_ivario_pro_restaurant_letter-en_ca.pdf | Electric ceramic heater and stainless pan-base configuration in commercial cooking; model-specific architecture, not factory consumption or food-production inventory. |
| epa-fabricated-metal | official_guidance | US EPA, Industrial Stormwater Fact Sheet Sector AA, EPA 833-F-06-042, Table 1 page 2. https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf | Generic fabrication countercheck for cutting, bending, welding, cleaning and associated residues. The sector explicitly excludes machinery: used only to prompt actual route verification, never to assert every route or an emission factor. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Subdivision and causal allocation hierarchy; no claim of complete PEF conformance. |
