---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.non-alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-non-alloy-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Non-alloy steel in ingots or other primary forms, and semi-finished products of non-alloy steel

## 1. Scope and Applicability

This PCR applies to non-alloy crude steel delivered at the producing steelworks gate as an ingot, another primary form, or a semi-finished billet, bloom, or slab. It supports foreground packages for integrated blast-furnace/basic-oxygen-furnace (BF-BOF) and electric-arc-furnace (EAF) routes, including secondary metallurgy and solidification when those operations occur before the declared gate.

The PCR excludes alloy and stainless steel, direct-reduced iron sold before steelmaking, pig iron sold before conversion to steel, steel powders, remelting scrap ingots classified as waste or scrap, and downstream rolling, forging, drawing, coating, machining, or fabrication. A data package must select one actual product form and one production route; the representative slab UUID below must not be relabelled as an ingot, billet, bloom, liquid steel, or alloy steel.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.non-alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-non-alloy-steel |
| classification_refs | CPC 3.0: 41121, exact classification reference |
| covered_products | Non-alloy steel ingots; other primary forms of non-alloy steel; non-alloy steel billets, blooms, and slabs before downstream rolling or fabrication |
| excluded_products | Alloy steel and stainless steel; pig iron; direct-reduced iron sold as such; steel powders; scrap ingots; rolled, forged, drawn, coated, machined, or fabricated steel products |
| representative_product | Continuously cast non-alloy steel slab for flat rolling |
| production_route | Declared BF-BOF or EAF route, with actual iron-bearing charge, secondary metallurgy, and ingot or continuous-casting state disclosed |
| market_state | Unrolled, uncoated non-alloy crude steel at the producing steelworks gate; temperature, dimensions, grade, and surface-conditioning state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared non-alloy crude-steel primary or semi-finished form suitable for subsequent metal processing |
| How much | 1,000 kg net saleable product at the producing steelworks gate |
| How well | Meets the declared non-alloy grade, chemistry, dimensions, surface condition, and acceptance specification |
| How long or cycle | One production campaign represented by the data package's stated temporal coverage |
| reference_flow_link | The reference amount equals the net mass of the declared saleable product; exclude attached dunnage and separately supplied packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Continuously cast steel slab for flat rolling `fa93b446-0340-4d7b-9f4d-e3f78789ea94` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual product form; non-alloy grade or chemistry specification; BF-BOF or EAF route; iron-bearing charge shares; casting route; hot or cold delivery state; surface-conditioning state; plant geography; production technology; temporal coverage; recycled-content accounting approach; co-product treatment approach |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg of net saleable steel, excluding dunnage, external packaging, scale removed before the gate, and separately reported residues. |
| `wet_dry_mass` | ores, coke, fluxes, dust, sludge, scale, and slag | Mass | kg | State whether each mass is wet or dry; retain moisture observations and convert to dry mass only with measured moisture content. |
| `gas_reference_state` | oxygen and gaseous natural gas | Volume | m3 | State temperature and absolute pressure for every gas volume; do not mix normal-volume and actual-volume records without an explicit conversion. |
| `electricity_energy` | alternating-current electricity | Energy | MJ | Preserve metered kWh and convert only by the exact identity 1 kWh = 3.6 MJ; disclose voltage and treatment of transmission and distribution losses. |
| `internal_flow_consistency` | molten steel and return scrap | Mass | kg | Use identical flow identities and quantities at the sending and receiving process boundaries; do not count an internal transfer as an external input or output. |

## 5. System Boundary

The intended inventory is cradle-to-factory-gate. Foreground records cover steelworks-controlled operations for the declared route, while purchased materials, fuels, electricity, oxygen, and water retain linked upstream provider datasets. Downstream rolling and product fabrication are outside the boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-gate iron-bearing materials, reductants, fluxes, gases, electricity, and water entering the first steelworks-controlled operation, linked to appropriate upstream datasets |
| starting_condition_role | foreground steelworks gate with upstream provider linkage |
| product_classification_scope | Non-alloy crude steel in ingot, other primary, billet, bloom, or slab form before downstream rolling or fabrication |
| recursive_input_rule | Purchased input already within this PCR category is recorded once as a product input with its own upstream provider dataset; its production is not recursively reconstructed inside the receiving foreground system. |
| upstream_dataset_requirement | Link each purchased material and energy input to a geography-, technology-, and state-compatible upstream dataset, or disclose the unresolved provider gap. |
| disclosure | Declare route, product form, grade, charge mix, casting state, site geography, temporal coverage, internal recycling, exported energy, co-product status, and any excluded steelworks operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | complete product system | Include upstream resource and energy provision through the producing steelworks factory gate; do not include downstream rolling or fabrication unless it occurs before the declared reference-product gate. | `worldsteel-life-cycle-thinking` |
| `sb_route_operations` | foreground steelworks | Include the actual route operations among ironmaking, BF-BOF or EAF steelmaking, ladle metallurgy, slag handling, and ingot or continuous casting; disclose every omitted operation. | `eu-jrc-iron-steel-bref-2013` |
| `sb_inventory_coverage` | foreground and linked upstream inventory | Record all measured material, non-mass energy, water, direct emission, by-product, and waste exchanges without substituting a route-average carrier bundle. | `worldsteel-life-cycle-thinking` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bf_bof_route` | Integrated BF-BOF ironmaking and steelmaking | conditional | Include only when the declared product is made through an integrated blast-furnace/basic-oxygen-furnace route. | foreground ironmaking, steelmaking, and secondary metallurgy | molten non-alloy steel transferred to casting |
| `eaf_route` | Electric-arc-furnace steelmaking | conditional | Include only when the declared product is made through an electric-arc-furnace route; record DRI only when actually charged. | foreground melting, steelmaking, and secondary metallurgy | molten non-alloy steel transferred to casting |
| `casting` | Ingot or continuous casting and product handling | conditional | Include when the product is solidified before the declared gate; identify ingot, billet, bloom, or slab casting and exclude continuous-casting mould powder for ingot casting. | foreground solidification and factory-gate preparation | 1,000 kg declared saleable product |

### Process: Integrated BF-BOF ironmaking and steelmaking (`bf_bof_route`)

#### Inputs

##### Product flows

###### Iron ore pellets charged to the integrated route (`bf_iron_ore_pellets`)

Iron ore pellets charged to the integrated route is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Iron ore pellets
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of blast-furnace-grade pellets crossing the supplier-to-site boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

###### Metallurgical coke charged to the integrated route (`bf_metallurgical_coke`)

Metallurgical coke charged to the integrated route is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Metallurgical coke
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of metallurgical coke charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

###### Prepared ferrous scrap charged to the BOF (`bf_steel_scrap`)

Prepared ferrous scrap charged to the BOF is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Prepared ferrous scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass of external prepared scrap charged; internal returns are recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

###### Burnt lime flux charged to steelmaking (`bf_burnt_lime`)

Burnt lime flux charged to steelmaking is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Burnt lime
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of burnt lime charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

###### Industrial oxygen supplied to ironmaking and BOF (`bf_oxygen`)

Industrial oxygen supplied to ironmaking and BOF is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 (Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`)
- Amount rule: metered normal-volume oxygen supplied; disclose purity, reference conditions, pressure, and on-site generation boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

###### Alternating-current electricity consumed by the integrated route (`bf_electricity`)

Alternating-current electricity consumed by the integrated route is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased and on-site electricity consumed, net of separately reported exports
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

###### Process-water make-up supplied to the integrated route (`bf_process_water`)

Process-water make-up supplied to the integrated route is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh and externally supplied make-up water; exclude recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:
##### Waste flows

No atomic exchanges are prescribed in this flow-type group.

##### Elementary flows

No atomic exchanges are prescribed in this flow-type group.

#### Outputs

##### Product flows

###### Molten non-alloy steel transferred to casting (`bf_molten_steel`)

Molten non-alloy steel transferred to casting is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Molten non-alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the BF-BOF route to the declared casting process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:
##### Waste flows

###### BF-BOF slag sent to treatment (`bf_slag`)

BF-BOF slag sent to treatment is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: BF-BOF steelmaking slag
- Flow property / unit: Mass / kg
- Amount rule: measured wet or dry mass leaving the steelmaking process; disclose moisture and whether later recovered as a co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

###### Collected BF-BOF dust and sludge (`bf_dust`)

Collected BF-BOF dust and sludge is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: BF-BOF dust and sludge
- Flow property / unit: Mass / kg
- Amount rule: measured dry solids collected by off-gas and water-treatment systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:
##### Elementary flows

###### Direct fossil carbon dioxide to air (`bf_co2_fossil`)

Direct fossil carbon dioxide to air is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: measured or carbon-balance-calculated direct fossil CO2 released to air; keep the compartment as air, unspecified unless stack conditions justify a more specific flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_bof_balance`
- Sources:

### Process: Electric-arc-furnace steelmaking (`eaf_route`)

#### Inputs

##### Product flows

###### Prepared ferrous scrap charged to the EAF (`eaf_steel_scrap`)

Prepared ferrous scrap charged to the EAF is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Prepared ferrous scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass of external prepared scrap charged; disclose grade and residual-element controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Direct-reduced iron charged to the EAF (`eaf_direct_reduced_iron`)

Direct-reduced iron charged to the EAF is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Direct-reduced iron
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged when this iron-bearing feed is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Burnt lime flux charged to the EAF (`eaf_burnt_lime`)

Burnt lime flux charged to the EAF is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Burnt lime
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of burnt lime charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Graphite electrodes consumed by the EAF (`eaf_graphite_electrode`)

Graphite electrodes consumed by the EAF is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Graphite electrode
- Flow property / unit: Mass / kg
- Amount rule: stock-change or purchase-and-inventory-balance mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Industrial oxygen supplied to the EAF (`eaf_oxygen`)

Industrial oxygen supplied to the EAF is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 (Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`)
- Amount rule: metered normal-volume oxygen supplied; disclose purity, reference conditions, pressure, and on-site generation boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Alternating-current electricity consumed by the EAF route (`eaf_electricity`)

Alternating-current electricity consumed by the EAF route is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased and on-site electricity consumed, net of separately reported exports
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Gaseous natural gas consumed by the EAF route (`eaf_natural_gas`)

Gaseous natural gas consumed by the EAF route is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 (Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`)
- Amount rule: metered gaseous natural gas at the consumption boundary; disclose supplier geography and standard reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Process-water make-up supplied to the EAF route (`eaf_process_water`)

Process-water make-up supplied to the EAF route is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh and externally supplied make-up water; exclude recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:
##### Waste flows

No atomic exchanges are prescribed in this flow-type group.

##### Elementary flows

No atomic exchanges are prescribed in this flow-type group.

#### Outputs

##### Product flows

###### Molten non-alloy steel transferred to casting (`eaf_molten_steel`)

Molten non-alloy steel transferred to casting is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Molten non-alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the EAF route to the declared casting process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:
##### Waste flows

###### EAF slag sent to treatment (`eaf_slag`)

EAF slag sent to treatment is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Electric-arc-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: measured wet or dry mass leaving the EAF process; disclose moisture and whether later recovered as a co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

###### Collected EAF off-gas dust (`eaf_dust`)

Collected EAF off-gas dust is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Electric-arc-furnace dust
- Flow property / unit: Mass / kg
- Amount rule: measured dry solids collected by the EAF off-gas treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:
##### Elementary flows

###### Direct fossil carbon dioxide to air (`eaf_co2_fossil`)

Direct fossil carbon dioxide to air is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: measured or carbon-balance-calculated direct fossil CO2 released to air; keep the compartment as air, unspecified unless stack conditions justify a more specific flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_balance`
- Sources:

### Process: Ingot or continuous casting and product handling (`casting`)

#### Inputs

##### Product flows

###### Molten non-alloy steel received for solidification (`casting_molten_steel`)

Molten non-alloy steel received for solidification is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Molten non-alloy steel
- Flow property / unit: Mass / kg
- Amount rule: measured mass received from the selected steelmaking route; use the same internal linking flow at both ends
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:

###### Casting mould powder consumed (`casting_mould_powder`)

Casting mould powder consumed is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Continuous-casting mould powder
- Flow property / unit: Mass / kg
- Amount rule: purchase-and-inventory-balance mass consumed when continuous casting is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:

###### Alternating-current electricity consumed in casting (`casting_electricity`)

Alternating-current electricity consumed in casting is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased and on-site electricity consumed by casting and product handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:

###### Process-water make-up supplied to casting (`casting_process_water`)

Process-water make-up supplied to casting is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered fresh and externally supplied make-up water; exclude recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:
##### Waste flows

No atomic exchanges are prescribed in this flow-type group.

##### Elementary flows

No atomic exchanges are prescribed in this flow-type group.

#### Outputs

##### Product flows

###### Declared representative non-alloy steel slab (`reference_product`)

Declared representative non-alloy steel slab is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Continuously cast steel slab for flat rolling `fa93b446-0340-4d7b-9f4d-e3f78789ea94`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: measured saleable slab output normalized to 1,000 kg; other covered forms require a form-specific product flow rather than relabelling this UUID
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:
##### Waste flows

###### Iron-oxide scale from casting and handling (`casting_scale`)

Iron-oxide scale from casting and handling is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Iron-oxide scale from steel casting
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass leaving the process for treatment or recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:

###### Casting return scrap (`casting_return_scrap`)

Casting return scrap is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Steel casting return scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass returned internally or transferred to another process; record the destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:

###### Wastewater from casting operations (`casting_wastewater`)

Wastewater from casting operations is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Steel-casting wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater leaving the casting process before or after treatment, with treatment state disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:

###### Casting residue slag sent to treatment (`casting_slag`)

Casting residue slag sent to treatment is recorded as one atomic exchange when it crosses this process boundary.

- Selected flow: Steel-casting residue slag
- Flow property / unit: Mass / kg
- Amount rule: measured mass of tundish, ladle, or casting residue leaving the process for treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg declared reference product at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_balance`
- Sources:
##### Elementary flows

No atomic exchanges are prescribed in this flow-type group.


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | independently metered route processes | Avoid allocation by subdividing ironmaking, steelmaking, gas use, casting, and treatment operations wherever their inputs and outputs are separately measured. | `worldsteel-life-cycle-thinking` |
| `allocation_coproducts` | exported slag, process gas, steam, heat, or electricity | Identify whether each output is a co-product or waste. Use system expansion for a functionally equivalent displaced product when the study program permits it; otherwise apply the program-required allocation method and disclose the factor and sensitivity. | `worldsteel-life-cycle-thinking` |
| `allocation_internal_returns` | internally recycled steel, dust, scale, slag, process gas, water, and heat | Keep burdens within the foreground system and record the internal transfer consistently at both process boundaries; do not award an external avoided-product credit for an internal loop. | `worldsteel-life-cycle-thinking` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bf_bof_balance` | `bf_bof_route` | every listed atomic input and output | calibrated meters, weighbridge tickets, stock records, laboratory moisture tests, off-gas monitoring, and waste transfer records | quantity; unit; wet_or_dry; moisture; gas_reference_state; source_or_destination; meter_id; timestamp; batch_id | reconcile purchase, stock-change, charge, transfer, monitoring, and dispatch records by campaign | native record unit plus normalized kg, m3, or MJ | per heat or shift, aggregated monthly | at least 12 consecutive representative months | all BF-BOF units supplying the declared product | sum each atomic exchange separately, remove internal transfers from external totals, then normalize by net saleable output | calibration certificates, laboratory results, stock reconciliation, meter coverage, and signed mass-balance review |
| `cp_eaf_balance` | `eaf_route` | every listed atomic input and output | calibrated meters, weighbridge tickets, charge records, stock records, off-gas monitoring, and waste transfer records | quantity; unit; scrap_grade; DRI_grade; gas_reference_state; source_or_destination; meter_id; timestamp; heat_id | reconcile purchase, stock-change, charge, transfer, monitoring, and dispatch records by heat and campaign | native record unit plus normalized kg, m3, or MJ | per heat or shift, aggregated monthly | at least 12 consecutive representative months | all EAF and ladle-metallurgy units supplying the declared product | sum each atomic exchange separately, remove internal transfers from external totals, then normalize by net saleable output | calibration certificates, charge sheets, stock reconciliation, meter coverage, and signed mass-balance review |
| `cp_casting_balance` | `casting` | every listed atomic input and output | ladle and tundish weights, caster production reports, meters, stock records, quality release records, and waste transfer records | quantity; unit; product_form; grade; dimensions; temperature_state; source_or_destination; meter_id; timestamp; campaign_id | reconcile molten-steel receipts, consumables, saleable product, returns, residues, and wastewater by campaign | native record unit plus normalized kg, m3, or MJ | per heat or campaign, aggregated monthly | at least 12 consecutive representative months | every casting line supplying the declared product | sum each atomic exchange separately and normalize by net saleable product mass | scale calibration, product release records, yield reconciliation, meter coverage, and signed mass-balance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = campaign exchange quantity × 1,000 / campaign net saleable product mass | campaign exchange quantity; campaign net saleable product mass | exchange amount per 1,000 kg reference product | — |
| `calc_dry_mass` | wet ore, coke, dust, sludge, scale, or slag records | dry mass = wet mass × (1 - measured moisture mass fraction) | wet mass; measured moisture mass fraction | dry mass in kg | — |
| `calc_electricity_mj` | electricity records | electricity MJ = metered kWh × 3.6 | metered kWh | electricity in MJ | — |
| `calc_route_mix` | multi-route site average | combine only separately complete route inventories using each route's net saleable product mass share; retain route-specific results alongside the average | complete BF-BOF inventory; complete EAF inventory; route output masses | disclosed site-average inventory | — |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain grade or chemistry, form, dimensions, temperature state, surface state, and release specification for every represented product family. | laboratory certificate, product release record, and product master data |
| `dq_route_identity` | process system | Demonstrate the represented BF-BOF or EAF route and identify all supplying units and internal transfers. | process map, charge records, meter map, and site flow diagram |
| `dq_measurement` | measured exchanges | Use calibrated instruments or reconciled stock records and state wet/dry and gas reference conditions. | calibration certificates, stock reconciliation, moisture tests, and gas conditions |
| `dq_temporal` | reporting period | Cover at least 12 consecutive representative months or justify a shorter campaign and its seasonality, outages, and product-mix limitations. | dated production and maintenance records |
| `dq_completeness` | inventory | Reconcile product, metallic, carbon, water, and waste balances; document missing meters, estimates, and excluded minor inputs. | signed reconciliation and completeness register |
| `dq_upstream` | linked providers | Match geography, technology, product state, and temporal representativeness for major upstream materials and energy. | provider metadata and representativeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Reject a package that omits the actual product form, non-alloy grade or chemistry basis, route, plant geography, or factory-gate state, or that relabels the representative slab UUID as another form. | `un-cpc-v3-structure-2025` |
| `validation_route` | process map | Require at least one declared steelmaking route; require casting when the reference product is an ingot, billet, bloom, or slab; prohibit DRI, mould powder, or another conditional row when the declared route does not use it. | `eu-jrc-iron-steel-bref-2013` |
| `validation_internal_links` | molten steel and internal returns | Require equal sending and receiving quantities and identical linking-flow identities after normalization; report any unmatched internal transfer. | — |
| `validation_mass_balance` | metallic inputs and outputs | Reconcile metallic charge with saleable steel, internal returns, slag metal, dust, scale, and other measured losses; investigate and disclose every imbalance rather than forcing closure. | — |
| `validation_coproducts` | slag and exported energy carriers | Require declared product-or-waste status, destination, allocation or substitution method, factor, and sensitivity where material. | `worldsteel-life-cycle-thinking` |
| `validation_data_quality` | complete package | Require traceable raw records, temporal coverage, site coverage, calibration or reconciliation evidence, and explicit unresolved provider or UUID gaps. | `worldsteel-life-cycle-thinking` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a reviewed foreground steelworks package |
| downstream_use | Product systems requiring non-alloy crude steel ingot, primary-form, billet, bloom, or slab inputs, with route and form compatibility checked |
| allowed_use | Attributional cradle-to-gate modelling and route-specific supply-chain modelling where geography, technology, grade, product form, allocation, and recycled-content conventions are compatible |
| excluded_use | Direct comparison of steel routes or materials without harmonized boundaries; substitution for alloy or stainless steel; substitution for downstream rolled or fabricated steel; undisclosed relabelling of the representative slab UUID |
| required_metadata | Product form; grade or chemistry; dimensions; temperature and surface state; steelmaking and casting route; charge shares; site geography; technology; reference period; provider geography; co-product method; recycled-content convention; data-quality evidence |
| required_quality_disclosure | Meter and stock-record coverage; wet/dry conversions; gas reference conditions; internal transfer reconciliation; metallic, carbon, water, and waste balances; missing data; estimates; unresolved UUIDs; upstream representativeness |
| update_trigger | Material change in route, furnace, charge mix, product form, grade family, energy supply, co-product treatment, provider data, site coverage, or reference period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41121 classification identity and distinction from alloy steel |
| `eu-jrc-iron-steel-bref-2013` | `official_guidance` | European Commission Joint Research Centre, Iron and Steel Production BREF, published January 2013, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/iron-and-steel-production | BF-BOF and EAF process decomposition, ladle metallurgy, slag processing, and continuous casting |
| `worldsteel-life-cycle-thinking` | `official_guidance` | World Steel Association, About life cycle thinking, https://worldsteel.org/wider-sustainability/life-cycle-thinking/about-lca-lci/ | Cradle-to-gate boundary, upstream inventory coverage, foreground data quality, recycling, and co-product system expansion |
| `chinaisa-steel-products-pcr-2022` | `standard` | 中国钢铁工业协会，《钢铁产品产品种类规则》中文文件，https://www.chinaisa.org.cn/gxportalFile/attach/2022/01/12/0000000000065419.pdf | Professional Chinese terminology for UNCPC 41121 only; no methodology or numeric values copied |
