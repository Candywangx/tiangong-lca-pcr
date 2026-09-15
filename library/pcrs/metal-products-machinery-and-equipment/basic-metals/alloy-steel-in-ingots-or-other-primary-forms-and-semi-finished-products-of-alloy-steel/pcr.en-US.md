---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-alloy-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Alloy steel in ingots or other primary forms and semi-finished products of alloy steel

## 1. Scope and Applicability

This PCR applies to foreground data packages for alloy steel leaving a steelworks as an ingot, continuously or conventionally cast slab, bloom, billet, or another declared primary or semi-finished form. It covers stainless and other alloy-steel grades only while the product remains within the CPC 41122 primary-form boundary. Each dataset represents one declared grade or composition specification, delivery form, and route-specific production mix.

The boundary ends when conforming product is ready for dispatch from the steelworks. It excludes hot rolling, cold rolling, forging, extrusion, drawing, coating, machining, manufacture of finished articles, distribution beyond the steelworks gate, use, and end-of-life. Ferro-alloys, pig iron, DRI or HBI, and ferrous scrap are inputs rather than reference products. On-site ironmaking may be included, but route alternatives and incompatible grades or forms must not be silently averaged.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-alloy-steel |
| classification_refs | CPC 3.0: 41122, exact |
| covered_products | Alloy-steel ingots and other primary forms; cast slabs, blooms, billets and other semi-finished alloy-steel products, including stainless grades while they remain in the CPC 41122 primary-form state |
| excluded_products | Non-alloy steel; ferro-alloys; DRI sold as such; hot- or cold-rolled products; bars, wire, sections, tubes, forged or coated products; finished articles |
| representative_product | One declared alloy-steel grade supplied as a net saleable ingot, slab, bloom, billet or other declared semi-finished primary form at the steelworks gate |
| production_route | Declared BF-BOF, DRI-based, scrap-based EAF, mixed-charge EAF, or another documented route, followed by secondary metallurgy and ingot or continuous casting |
| market_state | Solid, unrolled primary or semi-finished alloy steel at the steelworks gate, with grade, form, dimensions, conditioning state and saleable mass declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply alloy steel in one declared ingot or semi-finished primary form for downstream transformation |
| How much | 1,000 kg net saleable alloy steel at the steelworks gate |
| How well | Conforming to the declared grade or composition specification, delivery form, dimensions and conditioning state |
| How long or cycle | One production lot or campaign through dispatch readiness; no service-life duration is represented |
| reference_flow_link | Net saleable mass after casting, cropping, scarfing or other declared primary conditioning and before downstream rolling or forming |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Alloy steel in a declared ingot or semi-finished primary form (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy family and grade or composition limits; ingot, slab, bloom, billet or other form; dimensions; steelmaking route and iron-unit shares; casting route; recycled metallic input share and accounting method; conditioning state; site and geography; production period; steelworks-gate boundary |

Every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net saleable mass after casting losses and declared primary conditioning; exclude transport packaging. |
| `metal_mass_consistency` | metal, product, scrap, slag, dust and scale rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain wet or dry basis and assay basis; convert only with auditable moisture and assay data. |
| `gas_volume_basis` | natural gas, oxygen and argon rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain meter reference temperature and pressure and never combine gas species. |
| `electricity_energy_basis` | alternating-current electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert kWh to MJ using 3.6 MJ/kWh and retain voltage, meter location and supply origin. |
| `internal_transfer_identity` | hot metal, DRI or HBI and liquid-steel transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use identical quantity, identity, state and period at producing and consuming processes; cancel only in aggregation. |

## 5. System Boundary

The foreground package covers material receipt and handling; any on-site iron-unit production claimed by the dataset; primary steelmaking; secondary metallurgy and alloy adjustment; casting and declared primary conditioning; attributed internal transport, energy and gas systems; water management; emission control; and treatment or recovery of residues generated before the steelworks gate. Purchased inputs require compatible upstream datasets and are not recreated as foreground processes unless physically produced inside the declared site boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare whether iron units enter as ore or pellets processed on-site, purchased hot metal, purchased DRI or HBI, or prepared ferrous scrap, and identify the first foreground custody point. |
| starting_condition_role | Prevent omission or double counting where integrated ironmaking, purchased intermediates and recycled metallic inputs meet steelmaking. |
| product_classification_scope | Alloy steel in solid ingot or other primary form and cast semi-finished alloy steel before rolling, forging, extrusion, drawing, coating or article manufacture. |
| recursive_input_rule | Record internally returned alloy-steel crop or reject once as output and once as input, then cancel in aggregation; externally purchased scrap uses an upstream dataset and is not the reference product. |
| upstream_dataset_requirement | Link every purchased ore, pellet, coke, DRI or HBI, hot metal, scrap, ferro-alloy, flux, deoxidizer, gas, fuel, electricity, water and mould consumable to a state-, geography- and technology-compatible upstream dataset. |
| disclosure | Disclose geography, period, grade or grade mix, delivery form, route and charge shares, casting route, recycled-content accounting, imported and exported process gases, purchased intermediates, co-product treatment, waste destinations and exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | foreground and linked upstream system | Include steelmaking and necessary on-site ancillary services through dispatch readiness, and link externally supplied materials, energy and consumables to upstream production and transport without double counting. | worldsteel-lci-methodology-2017 |
| `boundary_route_specificity` | BF-BOF, DRI and EAF routes | Model only declared route processes and charge shares; preserve route-specific direct emissions and intermediates. | eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry |
| `boundary_downstream_exclusion` | operations after primary casting | Exclude downstream rolling, forging, extrusion, drawing, coating and finished-product manufacture; identify included primary conditioning and its measured losses. | unsd-cpc-3.0-2025 |
| `boundary_internal_flows` | internal materials and process gases | Record production and consumption consistently, cancel identical internal transfers only in aggregation, and disclose net imports and exports. | worldsteel-lci-methodology-2017 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `iron_unit_production` | On-site iron-unit production | conditional | Include only when ore, pellets or another iron-bearing feed is reduced on-site; distinguish blast-furnace and direct-reduction operations. | Produces hot metal or DRI or HBI. | Measured transfer normalized to 1,000 kg reference product. |
| `primary_steelmaking` | Primary steelmaking | required | Select and disclose BOF, EAF or another documented technology and metallic charge shares. | Produces route-specific liquid steel. | Measured liquid-steel output normalized to 1,000 kg reference product. |
| `secondary_metallurgy` | Secondary metallurgy and alloy adjustment | required | Include actual ladle, vacuum, stirring, heating, deoxidation and alloy-addition operations. | Achieves final composition and casting condition. | Measured refined liquid-steel output normalized to 1,000 kg reference product. |
| `primary_casting` | Ingot or continuous casting and primary conditioning | required | Select ingot or continuous casting and include only conditioning before the declared gate. | Produces the net saleable reference product. | 1,000 kg net saleable reference product. |

### Process: On-site iron-unit production (`iron_unit_production`)

#### Inputs

##### Product flows

###### Iron ore feed (`iron_ore_feed`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Iron ore in the declared lump, fine or agglomeration-feed state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured as-received ore feed; applicable only when ore is processed on-site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Iron ore pellets (`iron_ore_pellets`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Iron ore pellets of the declared reduction grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pellet receipt or charge; applicable only when pellets are processed on-site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Metallurgical coke (`metallurgical_coke`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Metallurgical coke
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured charge; applicable only when coke is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### Natural gas for direct reduction or ironmaking (`natural_gas_iron_reduction`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume; applicable only when gas crosses this process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### Electricity for iron-unit production (`electricity_iron_unit`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered purchased and attributed on-site electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Oxygen for iron-unit production (`oxygen_iron_unit`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume; applicable only when oxygen is injected
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot metal transferred to steelmaking (`hot_metal_intermediate`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Hot metal with the declared chemistry and temperature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer; applicable only to a molten-iron route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Direct-reduced iron transferred to steelmaking (`direct_reduced_iron_intermediate`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Direct-reduced iron in the declared DRI or HBI state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer; applicable only to on-site direct reduction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

##### Waste flows

###### Ironmaking slag (`ironmaking_slag`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Ironmaking slag from the declared iron-unit route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass by internal reuse, external recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_unit_records`
- Sources: worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

##### Elementary flows

###### Direct fossil carbon dioxide from iron-unit production (`fossil_co2_iron_unit`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: carbon balance or verified stack and process-gas measurement without double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_iron_unit_records`
- Sources: ipcc-2006-metal-industry

### Process: Primary steelmaking (`primary_steelmaking`)

#### Inputs

##### Product flows

###### Hot metal charge (`hot_metal_charge`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Hot metal with the declared chemistry and temperature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured charge; applicable only to a molten-iron route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### DRI or HBI charge (`dri_hbi_charge`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Direct-reduced iron in the declared DRI or HBI state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured charge; applicable only when DRI or HBI is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### Prepared ferrous scrap charge (`ferrous_scrap_charge`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Prepared ferrous scrap of the declared alloy-compatible class
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured charged mass by class and internal or external origin
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### Metallurgical quicklime flux (`quicklime_flux`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Metallurgical quicklime
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured primary-steelmaking charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### Electricity for primary steelmaking (`electricity_primary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered purchased and attributed on-site electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Oxygen for primary steelmaking (`oxygen_primary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered oxygen delivered to the declared vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Natural gas for primary steelmaking (`natural_gas_primary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume; applicable only to burners or heating inside this process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Liquid alloy steel transferred to refining (`liquid_alloy_steel`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Liquid alloy steel with the declared heat chemistry and temperature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured tapped liquid-steel mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Waste flows

###### Primary steelmaking slag (`primary_slag`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Primary steelmaking slag from the declared vessel route
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass by recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### Primary steelmaking dust (`primary_dust`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Captured primary-steelmaking dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collected mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Elementary flows

###### Direct fossil carbon dioxide from primary steelmaking (`fossil_co2_primary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: carbon balance or verified stack measurement, including electrode carbon where applicable, without double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_primary_steelmaking_records`
- Sources: ipcc-2006-metal-industry

### Process: Secondary metallurgy and alloy adjustment (`secondary_metallurgy`)

#### Inputs

##### Product flows

###### Liquid steel entering secondary metallurgy (`liquid_steel_refining_input`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Liquid alloy steel with the declared heat chemistry and temperature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured input reconciled to the primary-steelmaking output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Ferrochromium addition (`ferrochromium_alloy`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Ferrochromium of the declared grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured heat-specific addition; applicable only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Ferronickel addition (`ferronickel_alloy`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Ferronickel of the declared grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured heat-specific addition; applicable only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Ferromanganese addition (`ferromanganese_alloy`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Ferromanganese of the declared grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured heat-specific addition; applicable only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Ferrosilicon addition (`ferrosilicon_alloy`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Ferrosilicon of the declared grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured heat-specific addition; applicable only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Aluminium deoxidizer (`aluminium_deoxidizer`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Aluminium deoxidizer of the declared purity and form
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured heat-specific addition; applicable only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Argon for ladle stirring (`argon_stirring`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Industrial argon of the declared purity
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered or batch-issued volume; applicable only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Quicklime for secondary metallurgy (`quicklime_secondary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Metallurgical quicklime
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured secondary-metallurgy charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Electricity for secondary metallurgy (`electricity_secondary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered purchased and attributed on-site electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Oxygen for secondary metallurgy (`oxygen_secondary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume; applicable only when oxygen is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Natural gas for ladle heating (`natural_gas_ladle`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume; applicable only to ladle or refining burners
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined liquid alloy steel transferred to casting (`refined_liquid_alloy_steel`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Refined liquid alloy steel with the declared final chemistry and casting temperature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer to the selected casting route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Waste flows

###### Secondary-metallurgy slag (`secondary_slag`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Secondary-metallurgy slag for the declared alloy grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass by recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### Secondary-metallurgy dust (`secondary_dust`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Captured secondary-metallurgy dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collected mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Elementary flows

###### Direct fossil carbon dioxide from secondary metallurgy (`fossil_co2_secondary`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: carbon balance or verified stack measurement without double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_secondary_metallurgy_records`
- Sources: ipcc-2006-metal-industry

### Process: Ingot or continuous casting and primary conditioning (`primary_casting`)

#### Inputs

##### Product flows

###### Refined liquid steel entering casting (`refined_liquid_steel_casting`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Refined liquid alloy steel with the declared final chemistry and casting temperature
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured input reconciled to the secondary-metallurgy output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Continuous-casting mould flux (`continuous_casting_mould_flux`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Continuous-casting mould flux of the declared formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issue; applicable only to continuous casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Cooling water supplied to casting (`cooling_water_casting`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Casting cooling-water make-up of the declared source and quality
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered make-up volume net of internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Electricity for casting (`electricity_casting`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered purchased and attributed on-site electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Natural gas for casting and conditioning (`natural_gas_casting`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume; applicable only to casting or included conditioning burners
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable alloy-steel primary or semi-finished product (`reference_product_output`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Alloy steel in the declared ingot or semi-finished primary form
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg by definition of the reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: unsd-cpc-3.0-2025

##### Waste flows

###### Alloy-steel casting crop and reject scrap (`casting_scrap`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Alloy-steel casting crop and reject scrap of the declared grade family
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by internal-recycling or external destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### Iron-oxide scale from casting or primary conditioning (`mill_scale`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Iron-oxide scale from casting or declared primary conditioning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured collected mass by recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-iron-steel-bref-2013

###### Casting-cooling wastewater (`casting_wastewater`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: Casting-cooling wastewater at the declared treatment or discharge boundary
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: measured net volume by destination after recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_records`
- Sources: eu-jrc-iron-steel-bref-2013

##### Elementary flows

###### Direct fossil carbon dioxide from casting and conditioning (`fossil_co2_casting`)

Record this atomic exchange when it crosses the declared process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: carbon balance or verified stack measurement without double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_casting_records`
- Sources: ipcc-2006-metal-industry

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | route processes and metered utilities | Avoid allocation by subdividing separately measured processes; attribute shared utilities with documented causal meter, operating-time or energy balances. | worldsteel-lci-methodology-2017 |
| `allocation_internal_recycling` | returned scrap, dust, scale, slag and process gases | Record production and consumption at process boundaries, then cancel identical internal transfers; never claim external credit for material remaining inside the system. | worldsteel-lci-methodology-2017 |
| `allocation_external_coproducts` | net exported slag, process gas or recovered material with demonstrated market use | Use system expansion only when actual use and a functionally equivalent displaced product are documented; disclose substitution and sensitivity. | worldsteel-lci-methodology-2017 |
| `allocation_waste_status` | residues without demonstrated market demand or use | Model actual waste treatment or disposal; split quantities when one residue has both recovery and waste destinations. | worldsteel-lci-methodology-2017 |
| `allocation_multiple_grades` | campaigns producing multiple saleable grades or forms | Prefer heat-specific subdivision; if shared burdens remain, allocate by net saleable mass and disclose affected processes, products and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_iron_unit_records` | iron_unit_production | material, utility, intermediate, residue and direct-emission records | scales; stock records; meters; assays; stack and process-gas records | campaign; route; identity; mass; assay; gas conditions; energy; carbon; destination | Reconcile records to iron-unit output and linked steel heats. | kg; m3; MJ | per heat, shift or campaign; monthly reconciliation | 12 representative months or complete shorter campaign | all attributed on-site iron-unit operations | Sum by route, subtract inventory change and normalize through linked heats. | calibration; assays; signed balance; outage log |
| `cp_primary_steelmaking_records` | primary_steelmaking | charge, utility, liquid steel, residue and direct-emission records | heat sheets; weigh hoppers; meters; analysis; off-gas records | heat; route; identity and origin; mass; gas; energy; tapped mass; chemistry; carbon; destination | Reconcile charge, tapped steel, residues and carbon per heat. | kg; m3; MJ | per heat; monthly reconciliation | 12 representative months or complete shorter campaign | all vessels and attributed auxiliaries | Aggregate conforming heats by route and normalize to reference flow. | calibrated equipment; complete heat sheets; laboratory and off-gas reconciliation |
| `cp_secondary_metallurgy_records` | secondary_metallurgy | liquid steel, alloy, gas, energy, residue and direct-emission records | heat sheets; issue records; scales; meters; chemistry | heat; transfer mass; alloy identity and assay; addition; gas; energy; chemistry; temperature; destination | Link every addition and utility to the heat and reconcile transfer to casting. | kg; m3; MJ | per heat; monthly reconciliation | 12 representative months or complete shorter campaign | all refining units used for declared grade | Sum heat-specific records and normalize to reference flow. | certificates; calibration; chemistry; heat genealogy |
| `cp_casting_records` | primary_casting | liquid steel, consumable, water, energy, product, residue and direct-emission records | casting logs; scales; meters; quality and dispatch records | heat; route; input; form; dimensions; consumable; water; energy; product; residue; destination | Reconcile heat genealogy through casting, conditioning and release. | kg; m3; MJ | per heat or sequence; monthly reconciliation | 12 representative months or complete shorter campaign | all casting and included conditioning operations | Sum dispatch-ready product and attributable exchanges; normalize to 1,000 kg. | calibration; casting log; release; waste and wastewater records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground exchange | normalized amount = attributable exchange / net saleable product mass × 1,000 kg | reconciled exchange; net saleable mass | exchange per 1,000 kg reference product |  |
| `calc_electricity_mj` | alternating-current electricity | MJ = kWh × 3.6; preserve supply origins before attribution | kWh or MWh; meter boundary; origin | MJ by process |  |
| `calc_internal_transfer_cancel` | intermediates, returned materials and process gas | Match identity and period, require equal output and input, and cancel only after process completeness checks. | producing output; consuming input; identity; period | zero net internal transfer plus gross process flows | worldsteel-lci-methodology-2017 |
| `calc_direct_fossil_co2` | direct fossil CO2 | CO2 = net fossil carbon oxidized × 44/12; subtract carbon retained in products, residues and net exports and avoid energy-sector double counting. | measured inputs and outputs; carbon content; gas transfers; stack data | kg fossil CO2 by process | ipcc-2006-metal-industry |
| `calc_mass_balance` | each process and full package | Reconcile metal inputs with product, transfers, slag, dust, scale, scrap and inventory change; investigate rather than force-close residuals. | measured mass flows; assays; inventory | signed residual and resolution record | eu-jrc-iron-steel-bref-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare grade or composition, form, dimensions, casting route, conditioning state and saleable mass; prohibit incompatible undeclared averages. | specification; heat certificate; release; dispatch record |
| `dq_route_and_charge` | iron-unit and primary-steelmaking routes | Declare route, technology, on-site versus purchased intermediates, and hot-metal, DRI or HBI and scrap shares. | route diagram; heat sheets; mass balance; supplier records |
| `dq_temporal_representativeness` | all records | Use 12 consecutive representative months unless a shorter complete campaign is the whole production period; explain outages and exclusions. | calendar; production, outage and maintenance logs |
| `dq_meter_and_assay` | measured quantities | Retain calibration, meter location, gas conditions, sampling method, laboratory result and wet or dry basis. | calibration; meter map; laboratory certificate; procedure |
| `dq_completeness` | process inventory | Cover every applicable process and atomic exchange role; mark not applicable only with route evidence. | completeness matrix; signed balance review |
| `dq_residue_destination` | slag, dust, scale, scrap and wastewater | Quantify internal reuse, external recovery, treatment and disposal separately. | transfer tickets; contracts; certificates; internal records |
| `dq_source_compatibility` | linked upstream datasets | Select product-state-, geography-, technology- and boundary-compatible datasets and disclose proxies. | dataset metadata; supplier declaration; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_quantity` | reference product | Normalized net saleable output must equal 1,000 kg with Mass and kg. |  |
| `validate_required_qualifiers` | reference-flow metadata | Fail completeness when grade, form, dimensions, route and charge shares, casting route, recycled-input accounting, geography, period or conditioning state is absent. | unsd-cpc-3.0-2025 |
| `validate_route_processes` | process map and inventory | Require primary steelmaking, secondary metallurgy and casting; require iron-unit production only when on-site and reject undeclared route exchanges. | eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry |
| `validate_internal_transfers` | internal transfers | Producing and consuming quantities, identities and periods must match before cancellation. | worldsteel-lci-methodology-2017 |
| `validate_direct_co2` | fossil CO2 rows | Reconcile calculated and measured CO2 and demonstrate that combustion and process emissions are not double counted. | ipcc-2006-metal-industry |
| `validate_mass_balance` | process and package totals | Report each signed residual and investigate rather than assign unexplained residuals to product. | eu-jrc-iron-steel-bref-2013 |
| `validate_coproduct_claims` | exported co-products | Permit avoided-burden claims only with documented use, functional equivalence, substituted product, quantity and sensitivity. | worldsteel-lci-methodology-2017 |
| `validate_uuid_status` | reference and inventory flows | Before activation, directly verify every UUID as public state 100 with matching names, type, classification, property, unit group, state, geography, technology and comment; keep unresolved rows explicit. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Background or supplier-specific modelling of alloy-steel ingots and cast semi-finished alloy-steel products before downstream rolling or forming |
| allowed_use | Declared or compatible grade, primary form, route, geography, period, gate boundary and conditioning state; aggregate only with production-weighted shares. |
| excluded_use | Non-alloy steel; ferro-alloy production; rolled, forged, drawn, extruded, coated or finished steel; undisclosed averages; use or end-of-life claims; unharmonized comparisons. |
| required_metadata | PCR id and version; grade or composition; form and dimensions; route and charge shares; casting route; site and geography; period; recycled-input method; conditioning; upstream datasets; co-product and waste treatment; owner and review status |
| required_quality_disclosure | Primary-data coverage; meter and assay quality; representativeness; mass-balance residuals; unresolved UUIDs; proxies; allocation; exclusions and gaps |
| update_trigger | Change in grade family, form, route or charge shares, casting technology, site boundary, major energy source, co-product treatment, period, or availability of verified UUID and independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3.0-2025` | official_guidance | United Nations Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41122 identity and primary-form boundary |
| `worldsteel-lci-methodology-2017` | method_factor | World Steel Association. Life Cycle Inventory Methodology Report, 2017. https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | Cradle-to-gate boundary, ancillary processes, internal recycling, co-products and waste treatment |
| `eu-jrc-iron-steel-bref-2013` | official_guidance | Remus, R.; Aguado-Monsonet, M. A.; Roudier, S.; Delgado Sancho, L. Best Available Techniques Reference Document for Iron and Steel Production. European Commission Joint Research Centre, EUR 25521 EN, 2013. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | BF-BOF and EAF decomposition; ladle metallurgy; casting; materials, energy, water, waste and emissions monitoring |
| `ipcc-2006-metal-industry` | method_factor | IPCC. 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 3, Chapter 4: Metal Industry Emissions. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_4_Ch4_Metal_Industry.pdf | Route distinction, plant activity data and direct fossil CO2 carbon balance |
