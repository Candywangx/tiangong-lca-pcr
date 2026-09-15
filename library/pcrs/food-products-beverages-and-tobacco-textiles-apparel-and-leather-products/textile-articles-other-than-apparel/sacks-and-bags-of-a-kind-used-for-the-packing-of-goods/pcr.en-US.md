---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.sacks-and-bags-of-a-kind-used-for-the-packing-of-goods
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Sacks and bags, of a kind used for the packing of goods

## 1. Scope and Applicability

This PCR governs gate-to-gate foreground data packages for finished textile sacks and bags whose principal function is packing, storing or transporting goods within CPC 27150. It covers woven polypropylene or high-density polyethylene tape sacks, jute or other bast-fibre sacking bags, cotton textile sacks, leno bags and flexible intermediate bulk containers when the declared product is a made-up textile packing article. The reporting product may be uncoated, coated, laminated, lined or printed, but its material construction and actual manufacturing route must be declared.

The foreground boundary begins with the received material condition declared by the manufacturer. It always includes cutting, forming, sewing or other joining, component assembly, inspection and factory-gate packing performed for the product. Polymer tape extrusion and circular weaving, jute preparation and weaving, coating, lamination, liner insertion and printing are included only when controlled by the reporting facility. Purchased fabric, yarn, film, liner, thread, ink, adhesive and other components require upstream datasets and must not be recreated inside the foreground model.

Retail shopping bags, handbags, purses, totes and other personal consumer bags are excluded, as are paper sacks, thermoplastic flexible-film sacks that are not textile articles, rigid containers, transport service, filling with the packed good, use, reuse, cleaning after sale and end-of-life. A product subject to dangerous-goods rules requires the additional applicable legal conformity specification; this PCR alone does not establish dangerous-goods approval.

Material families and routes must not be averaged unless foreground evidence shows that the result remains representative. Record every actually used polymer, fibre, filler, masterbatch, batching oil, thread, ink, adhesive, liner, packaging component, utility, fuel, refrigerant loss, waste and direct emission as its own atomic exchange.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.sacks-and-bags-of-a-kind-used-for-the-packing-of-goods |
| classification_refs | CPC 3.0: 27150 - Sacks and bags, of a kind used for the packing of goods |
| covered_products | Textile sacks and bags made for packing goods, including woven PP or HDPE tape sacks, jute or other bast-fibre sacking bags, cotton sacks, leno bags and textile FIBCs when classified in CPC 27150 |
| excluded_products | Retail shopping bags, handbags, purses, totes and personal bags; paper sacks; non-textile flexible-film sacks; rigid containers; filled goods; transport, use and end-of-life services |
| representative_product | One conforming finished textile sack or bag for packing goods at the manufacturing-facility gate |
| production_route | Purchased textile substrate or conditional integrated tape/fibre preparation and weaving, followed by route-specific coating or lamination, printing, cutting, sewing or thermal joining, component assembly, inspection and dispatch packing |
| market_state | Empty, accepted finished packing sack or bag at the factory gate, dry or at the declared conditioning state, excluding detachable dispatch packaging and the packed good |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished goods-packing textile sack that contains, protects or enables handling of the declared class of goods |
| How much | 1 kg net mass of accepted finished packing sacks or bags |
| How well | Meets the declared material, construction, capacity, dimensions, seam, strength, liner, coating, printing, lifting-device and conformity specification applicable to the product subtype |
| How long or cycle | One accepted manufacturing lot at the factory gate; service life and reuse cycles are declared for downstream use but do not change the mass reference |
| reference_flow_link | `finished_goods_packing_sack` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Goods-packing textile sack |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype and intended packed good; nominal capacity and safe working load where applicable; dimensions; polymer or fibre family and mass fractions; virgin or recovered content basis; tape, yarn and weave construction; fabric mass per area; coating, lamination and liner construction; seam and joining system; lifting and discharge components for an FIBC; printing and ink system; acceptance tests and conformity standard; net product mass; conditioning or moisture state; production geography; included onsite processes; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

No reference-product UUID is assigned. The verified state-100 candidate `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f` is **Sewn Bag**, described for cotton consumer bags, totes and purses at the consumer market; it is rejected because that route is not the goods-packing category represented here. The Mass and Units of mass identities remain valid quantitative support objects.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net accepted sack or bag product. Include permanently attached liners, lifting loops, closures and fittings; exclude the packed good, detachable dispatch packaging and pallets. |
| `conditioned_textile_mass` | Fibres, yarns, fabrics, product and textile wastes | Mass | kg | State the moisture or conditioning basis for every textile mass. Do not combine dry, conditioned and as-received masses without a measured or documented conversion. |
| `component_mass_reconciliation` | Product construction | Mass fraction | kg/kg | Record each polymer, fibre, coating, liner, thread and permanently attached component separately and reconcile their accepted-product mass fractions to the declared product construction. |
| `fabric_area_to_mass` | Fabric records | Mass and area | kg and m2 | When fabric is purchased or issued by area, convert to mass with lot-specific measured mass per area; retain both the source area and measured conversion. |
| `item_count_to_mass` | Bag production counts | Count and mass | item and kg | Convert accepted and rejected item counts to mass using representative lot-specific bag mass; retain the sampled mass, sample size and production lot. |
| `electricity_measurement` | Electricity | Energy | kWh | Preserve meter or invoice values, voltage level, geography and supply mix. Shared electricity is allocated only with a documented physical driver. |
| `fuel_and_steam_measurement` | Natural gas and purchased steam | Energy or delivered mass | MJ, Nm3 or kg | Keep every fuel and purchased steam separate. Record fuel calorific basis and steam pressure, temperature and condensate-return condition; retain all conversion factors. |
| `water_measurement` | Process water and wastewater | Mass or volume | kg or m3 | Preserve the measured unit. Convert volume to mass only with a declared density and temperature basis, and reconcile intake, reuse, evaporation, product carry-over and discharge. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received PP or HDPE resin, jute fibre, yarn, woven textile substrate, liner, coating, thread, ink, adhesive, components and packaging at the reporting facility, with material grade, recycled content, construction, conditioning state, supplier gate and included upstream processing declared |
| starting_condition_role | Purchased or interfacility product inputs whose upstream production is represented by separate datasets; integrated substrate manufacture becomes foreground only when controlled by the reporting facility |
| product_classification_scope | CPC 27150 made-up textile sacks and bags for packing goods; personal consumer bags, paper sacks, non-textile film sacks and rigid containers require another PCR |
| recursive_input_rule | A purchased sack, bag or intermediate already within CPC 27150 is recorded once as a supplied product input with an upstream dataset; only incremental conversion at the receiving facility is inventoried |
| upstream_dataset_requirement | Require material-, grade-, recycled-content-, geography- and route-specific upstream datasets for every received resin, fibre, yarn, fabric, liner, coating, thread, ink, adhesive, component, utility and packaging material |
| disclosure | Declare the input gate, onsite and outsourced operations, material route, product subtype, capacity, fabric and seam construction, coating/liner/printing system, FIBC components, conditioning state, exclusions, cut-offs, shared-facility allocation and all upstream data gaps |

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground product system | Include all manufacturer-controlled operations from the declared received-material condition through accepted empty finished product and its dispatch preparation at the factory gate. | `un-cpc-v3-structure-2023`; `eu-pef-2021` |
| `boundary_route_specificity` | Product route | Include polymer tape extrusion and weaving, jute preparation and weaving, coating, lamination, printing and liner production only when performed or controlled for the declared lot; otherwise use an upstream supplied-product dataset. | `unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023` |
| `boundary_product_conformity` | Woven PP sacks and FIBCs | Preserve the applicable material, construction, design, type-test, marking, capacity and intended-goods specification; this PCR does not replace product conformity assessment. | `iso-23560-2015`; `iso-21898-2024`; `bis-is-14887-2014` |
| `boundary_atomic_completeness` | Inputs and outputs | Add every actual material, chemical, packaging component, utility, fuel, refrigerant loss, waste stream and direct emission as a separate atomic exchange; do not use grouped carrier, chemical, packaging, waste or emission labels. | `eu-textiles-bref-2023`; `eu-pef-2021` |
| `boundary_exclusions` | Downstream stages | Exclude filling with the packed good, distribution, use, reuse, post-sale cleaning and end-of-life unless a separate declared study scope adds those stages without altering this factory-gate reference flow. | `un-cpc-v3-structure-2023`; `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_textile_substrate` | Integrated textile substrate manufacture | `conditional` | Include only when polymer tape extrusion and weaving or jute preparation, spinning and weaving are controlled by the reporting facility. | Foreground intermediate production | Per kg woven substrate transferred to conversion and reconciled to 1 kg accepted product |
| `bag_conversion_finishing` | Bag conversion, finishing, inspection and packing | `required` | Always include the manufacturer-controlled conversion of textile substrate and components into the accepted packing sack or bag. | Foreground final-product production | Exactly 1 kg net accepted textile sack or bag product |

### Process: Integrated textile substrate manufacture (`integrated_textile_substrate`)

#### Inputs

##### Product flows

###### Polypropylene raffia resin (`substrate_pp_resin`)

Polypropylene resin is recorded only for an integrated PP tape-extrusion route.

- Selected flow: Polypropylene raffia-grade resin
- Flow property / unit: Mass / kg
- Amount rule: measured resin issued to the tape-extrusion line, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven polyolefin substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `sharma-alagh-pp-packaging-2021`

###### High-density polyethylene tape resin (`substrate_hdpe_resin`)

HDPE tape resin is recorded separately from PP for an integrated HDPE sack route.

- Selected flow: High-density polyethylene tape-grade resin
- Flow property / unit: Mass / kg
- Amount rule: measured resin issued to the tape-extrusion line, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven polyolefin substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `bis-is-14887-2014`

###### Calcium carbonate filler (`substrate_calcium_carbonate`)

Calcium carbonate is recorded only when it is intentionally compounded into the tape formulation.

- Selected flow: Calcium carbonate filler
- Flow property / unit: Mass / kg
- Amount rule: weighed filler issued to the declared resin batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven polyolefin substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `sharma-alagh-pp-packaging-2021`

###### Colour masterbatch (`substrate_colour_masterbatch`)

The actual colour masterbatch is recorded separately from base resin and filler.

- Selected flow: Polyolefin colour masterbatch
- Flow property / unit: Mass / kg
- Amount rule: weighed masterbatch issued to the declared resin batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven polyolefin substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `sharma-alagh-pp-packaging-2021`

###### Raw jute fibre (`substrate_raw_jute_fibre`)

Raw jute fibre is recorded only for integrated jute preparation, spinning and weaving.

- Selected flow: Raw jute fibre for sacking
- Flow property / unit: Mass / kg
- Amount rule: weighed fibre opened for the declared production lot, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg jute sacking fabric transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `unido-jute-bag-factory-1990`

###### Jute batching oil (`substrate_batching_oil`)

The actual oil used to soften jute fibre is recorded as one formulated product input.

- Selected flow: Jute fibre batching oil
- Flow property / unit: Mass / kg
- Amount rule: measured oil delivered to the batching emulsion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg jute sacking fabric transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `unido-jute-bag-factory-1990`

###### Process water (`substrate_process_water`)

Water used in tape cooling, jute batching emulsion, damping or other onsite substrate operations is metered separately.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-recorded supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam_records`
- Sources: `unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`

###### Electricity (`substrate_electricity`)

Electricity used by extrusion, stretching, winding, carding, spinning, weaving, ventilation and controls is recorded from the applicable meter.

- Selected flow: Alternating-current electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to integrated substrate manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`

###### Natural gas (`substrate_natural_gas`)

Natural gas used for direct or indirect tape heating, annealing, drying or calendering is recorded only when consumed.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: metered or invoiced gas converted with the supplier net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bref-2023`

###### Purchased steam (`substrate_purchased_steam`)

Purchased steam used in jute conditioning or textile finishing is recorded separately from fuel and electricity.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: metered delivered steam at the declared pressure and condensate-return condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam_records`
- Sources: `eu-textiles-bref-2023`

##### Waste flows

No generic waste input is prescribed. A specific recovered material entering this process must be represented by its own material identity and provenance.

##### Elementary flows

No generic elementary input is prescribed. Direct water withdrawal or another resource taken from the environment must be added as a compartment-specific atomic exchange.

#### Outputs

##### Product flows

###### Woven polyolefin sack fabric (`substrate_woven_polyolefin_fabric`)

The declared PP or HDPE woven fabric is measured at transfer to bag conversion.

- Selected flow: Woven polyolefin tape fabric for sacks
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned fabric mass transferred to conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven polyolefin substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_records`
- Sources: `sharma-alagh-pp-packaging-2021`; `iso-23560-2015`

###### Jute sacking fabric (`substrate_jute_sacking_fabric`)

The woven jute sacking fabric is measured after the declared conditioning and calendering operations.

- Selected flow: Woven jute sacking fabric
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned fabric mass transferred to conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg jute sacking fabric transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_records`
- Sources: `unido-jute-bag-factory-1990`

##### Waste flows

###### Polyolefin tape trim waste (`substrate_polyolefin_tape_waste`)

Clean or contaminated PP or HDPE tape trim leaving tape manufacture is weighed without netting it from resin input. Woven-fabric rejects, when present, require a separate specific waste card.

- Selected flow: Polyolefin tape trim waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass transferred to the declared reuse, recycling or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven polyolefin substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `sharma-alagh-pp-packaging-2021`; `patti-cicala-acierno-2020`

###### Jute fibre and yarn waste (`substrate_jute_fibre_waste`)

Jute fibre, yarn and weaving waste leaving the process is weighed as its own waste stream.

- Selected flow: Jute fibre and yarn production waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass transferred to the declared reuse, recycling or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg jute sacking fabric transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `unido-jute-bag-factory-1990`; `patti-cicala-acierno-2020`

###### Textile substrate process wastewater (`substrate_process_wastewater`)

Wastewater leaving tape cooling, jute batching, damping, washing or finishing is measured at the treatment hand-off.

- Selected flow: Textile substrate process wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume at the declared internal or external treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide to air (`substrate_fossil_co2_to_air`)

Direct fossil carbon dioxide from onsite fuel combustion is calculated from the measured fuel inventory and documented factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated direct fossil CO2 from each onsite fuel record; do not include upstream fuel emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-textiles-bref-2023`

###### Nitrogen dioxide to air (`substrate_nitrogen_dioxide_to_air`)

Measured or permit-calculated nitrogen dioxide from onsite combustion is recorded as a substance-specific exchange. Other nitrogen oxides require separate cards.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated value from the recorded fuel and approved site factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven substrate transferred and reconciled to 1 kg accepted product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-textiles-bref-2023`

### Process: Bag conversion, finishing, inspection and packing (`bag_conversion_finishing`)

#### Inputs

##### Product flows

###### Woven polyolefin sack fabric (`conversion_woven_polyolefin_fabric`)

The PP or HDPE woven substrate is recorded only for the declared polyolefin bag route.

- Selected flow: Woven polyolefin tape fabric for sacks
- Flow property / unit: Mass / kg
- Amount rule: measured fabric issued to cutting and bag making, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `sharma-alagh-pp-packaging-2021`; `iso-23560-2015`

###### Jute sacking fabric (`conversion_jute_sacking_fabric`)

Jute sacking fabric is recorded only for the declared jute or bast-fibre bag route.

- Selected flow: Woven jute sacking fabric
- Flow property / unit: Mass / kg
- Amount rule: measured fabric issued to cutting and bag making, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `unido-jute-bag-factory-1990`

###### Cotton sacking fabric (`conversion_cotton_sacking_fabric`)

Cotton fabric is recorded only when the packing sack is demonstrably a cotton textile packing article rather than a consumer bag.

- Selected flow: Woven cotton sacking fabric
- Flow property / unit: Mass / kg
- Amount rule: measured fabric issued to cutting and bag making, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `un-cpc-v3-structure-2023`

###### Polypropylene sewing thread (`conversion_pp_sewing_thread`)

PP sewing thread is recorded separately for sewn polyolefin sacks and FIBCs.

- Selected flow: Polypropylene sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured thread issued less closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `iso-21898-2024`; `sharma-alagh-pp-packaging-2021`

###### Jute sewing twine (`conversion_jute_sewing_twine`)

Jute sewing twine is recorded only for the applicable jute-bag seam route.

- Selected flow: Jute sewing twine
- Flow property / unit: Mass / kg
- Amount rule: measured twine issued less closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `unido-jute-bag-factory-1990`

###### Water-based flexographic printing ink (`conversion_water_based_flexo_ink`)

The actual water-based flexographic ink formulation is recorded when the sack is printed onsite; each materially different ink formulation requires its own card.

- Selected flow: Water-based flexographic printing ink
- Flow property / unit: Mass / kg
- Amount rule: weighed ink issued minus recovered reusable ink
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023`

###### Low-density polyethylene liner film (`conversion_ldpe_liner_film`)

LDPE liner film is recorded only when it becomes a permanently supplied liner or lamination layer.

- Selected flow: Low-density polyethylene liner film
- Flow property / unit: Mass / kg
- Amount rule: measured film incorporated into accepted product plus measured process loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_records`
- Sources: `sharma-alagh-pp-packaging-2021`

###### Polyurethane laminating adhesive (`conversion_polyurethane_adhesive`)

The declared polyurethane adhesive is recorded only for an adhesive lamination route and is not combined with ink or solvent.

- Selected flow: Polyurethane laminating adhesive
- Flow property / unit: Mass / kg
- Amount rule: weighed as-supplied adhesive issued minus recovered reusable material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023`

###### Process water (`conversion_process_water`)

Water used for ink preparation, cleaning or route-specific finishing is recorded separately from purchased chemicals.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-recorded supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam_records`
- Sources: `eu-textiles-bref-2023`

###### Electricity (`conversion_electricity`)

Electricity used for cutting, sewing, joining, printing, lamination, inspection, ventilation and baling is recorded from the applicable meter.

- Selected flow: Alternating-current electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to bag conversion and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`

###### Natural gas (`conversion_natural_gas`)

Natural gas used for coating, lamination, printing or drying is recorded only when consumed onsite.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: metered or invoiced gas converted with the supplier net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-textiles-bref-2023`

###### Purchased steam (`conversion_purchased_steam`)

Purchased steam used in route-specific finishing or drying is recorded separately from natural gas and electricity.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: metered delivered steam at the declared pressure and condensate-return condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_steam_records`
- Sources: `eu-textiles-bref-2023`

###### Corrugated board box (`packaging_corrugated_box`)

Corrugated boxes used to dispatch the finished sacks or bags are recorded separately and excluded from reference-product mass.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: measured boxes consumed for factory-gate dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

###### Low-density polyethylene stretch film (`packaging_ldpe_stretch_film`)

LDPE stretch film used for dispatch wrapping is recorded separately from a liner incorporated into the product.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured film consumed for factory-gate dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

###### Polypropylene strapping band (`packaging_pp_strapping_band`)

PP strapping used to secure bales or boxes is measured independently from product PP material.

- Selected flow: Polypropylene strapping band
- Flow property / unit: Mass / kg
- Amount rule: measured band consumed for factory-gate dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `sharma-alagh-pp-packaging-2021`; `eu-pef-2021`

##### Waste flows

No generic waste input is prescribed. A specific returned or recovered material entering conversion requires its own material card and provenance.

##### Elementary flows

No generic elementary input is prescribed. Direct resource withdrawals must be added as compartment-specific atomic exchanges where applicable.

#### Outputs

##### Product flows

###### Finished goods-packing textile sack (`finished_goods_packing_sack`)

Accepted finished empty packing sacks or bags are weighed at the declared conditioning state before detachable dispatch packaging is added.

- Selected flow: Goods-packing textile sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net accepted finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-v3-structure-2023`; `iso-23560-2015`; `iso-21898-2024`

##### Waste flows

###### Polyolefin fabric offcut waste (`conversion_polyolefin_offcut_waste`)

PP or HDPE fabric offcuts and rejected polyolefin bags are weighed separately from natural-fibre waste.

- Selected flow: Polyolefin sack-fabric offcut waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass transferred to the declared reuse, recycling or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `sharma-alagh-pp-packaging-2021`; `patti-cicala-acierno-2020`

###### Jute fabric offcut waste (`conversion_jute_offcut_waste`)

Jute fabric offcuts and rejected jute bags are recorded as their own waste stream.

- Selected flow: Jute sacking-fabric offcut waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass transferred to the declared reuse, recycling or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `unido-jute-bag-factory-1990`; `patti-cicala-acierno-2020`

###### Cotton fabric offcut waste (`conversion_cotton_offcut_waste`)

Cotton fabric offcuts and rejected cotton packing sacks are recorded separately from jute and polyolefin waste.

- Selected flow: Cotton sacking-fabric offcut waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass transferred to the declared reuse, recycling or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `patti-cicala-acierno-2020`

###### Waste printing ink (`conversion_waste_ink`)

Unusable ink and ink-contaminated liquid transferred as waste are recorded separately from cleaning wastewater.

- Selected flow: Waste water-based flexographic printing ink
- Flow property / unit: Mass / kg
- Amount rule: measured waste ink mass transferred to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bref-2023`

###### Waste laminating adhesive (`conversion_waste_adhesive`)

Unusable laminating adhesive is recorded with its cure state and treatment destination.

- Selected flow: Waste polyurethane laminating adhesive
- Flow property / unit: Mass / kg
- Amount rule: measured waste adhesive mass transferred to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bref-2023`

###### Printing and cleaning wastewater (`conversion_cleaning_wastewater`)

Wastewater from printing, ink preparation or equipment cleaning is measured at the treatment hand-off.

- Selected flow: Printing and equipment-cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-estimated discharge volume at the declared treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide to air (`conversion_fossil_co2_to_air`)

Direct fossil carbon dioxide from onsite fuel combustion is calculated from measured fuel records.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculated direct fossil CO2 from each onsite fuel record; do not include upstream fuel emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-textiles-bref-2023`

###### Ethyl acetate to air (`conversion_ethyl_acetate_to_air`)

Ethyl acetate emitted from an applicable solvent-containing printing or laminating route is recorded as one substance-specific exchange. Every other monitored organic substance requires a separate card.

- Selected flow: Ethyl acetate, to air
- Flow property / unit: Mass / kg
- Amount rule: measured ethyl acetate emission for the applicable route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-textiles-bref-2023`

###### Refrigerant R-134a to air (`conversion_r134a_to_air`)

R-134a loss is recorded only when this exact refrigerant serves process cooling or conditioned production space; every other actual refrigerant requires a separate card.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a), to air
- Flow property / unit: Mass / kg
- Amount rule: calculated stock loss from refrigerant purchase, charge, recovery and closing inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted textile sack or bag product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Foreground processes | Avoid allocation by subdividing independently metered substrate, conversion, finishing and packing operations and by preserving route-specific material and waste records. | `eu-pef-2021` |
| `allocation_shared_utilities` | Shared meters and services | Allocate shared electricity, steam, fuel, compressed air, water and abatement by a documented physical driver such as metered machine time, mass processed or measured operating hours; disclose the driver and unallocated total. | `eu-pef-2021` |
| `allocation_multiple_products` | Multiple bag products | Use a causal physical relationship when products jointly use a process. If no defensible physical relation exists, use an economic relation and report a sensitivity result; do not average materially different products without representativeness evidence. | `eu-pef-2021` |
| `allocation_scrap_treatment` | Reusable or recyclable production scrap | Record the full scrap mass and treatment destination. Do not net scrap from material input or grant an avoided-product credit inside the gate-to-gate foreground inventory unless the downstream method explicitly requires and documents that treatment. | `eu-pef-2021` |
| `allocation_rework` | Internal rework | Keep internal rework inside the process mass balance and include the energy and material needed to reprocess it; only material crossing the system boundary is reported as waste or co-product output. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Resin, fibre, fabric, thread, film and component inputs | Weighbridge, goods receipt, issue and stock records | material identity; supplier; lot; opening stock; receipts; issues; closing stock; returned quantity; moisture/conditioning state | Reconcile issued mass from inventory movements and verified scales | kg | Per lot with monthly reconciliation | At least 12 consecutive representative months or the complete campaign | All controlled production lines in the declared dataset | Sum net consumption by exact material identity; normalize after accepted-product reconciliation | Calibration records; supplier specification; lot traceability; stock reconciliation |
| `cp_chemical_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Filler, masterbatch, batching oil, ink and adhesive inputs | Batch sheet, formulation and issue records | product identity; formulation; solids content; issued mass; recovered reusable mass; opening and closing stock | Weigh or meter each specific chemical product | kg | Per batch with monthly reconciliation | Same period as product output | Every controlled line using the chemical | Net consumption equals issue minus recovered reusable material and stock change | Scale calibration; safety/technical data sheet; batch sign-off |
| `cp_energy_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Electricity and each fuel | Meter, invoice and equipment-hour records | meter id; opening/closing reading; fuel quantity; unit; calorific value; line hours; allocation driver | Prefer dedicated meters; otherwise reconcile invoice total and physical allocation driver | kWh; MJ; Nm3 | Continuous or per invoice, reconciled monthly | Same period as product output | All included equipment and shared services | Convert with documented factors; preserve each carrier; allocation totals must equal the facility record | Meter calibration; invoices; fuel certificate; allocation reconciliation |
| `cp_water_steam_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Process water and purchased steam | Meter, batch and supplier records | water volume; steam mass; pressure; temperature; condensate return; reuse; evaporation estimate | Dedicated meter or documented batch recipe reconciled to site total | m3; kg | Per batch or continuous, reconciled monthly | Same period as product output | All included wet, cooling and steam-using operations | Preserve water and steam separately; reconcile water intake and discharge | Meter calibration; supplier statement; water balance |
| `cp_output_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Intermediate and accepted product outputs | Production and quality-release records | product id; lot; gross mass; detachable packaging mass; net mass; item count; rejected mass; conditioning state | Weigh transferred and accepted outputs on calibrated scales | kg; item | Per lot | Same period as input records | All included lines and inspection points | Sum accepted net mass by exact product specification; exclude detachable packaging | Scale calibration; release certificate; count-to-mass sample |
| `cp_waste_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Each solid or liquid waste other than wastewater | Waste log, container weight and transfer note | waste identity; source process; gross/tare/net mass; contamination; destination; recovery or treatment route | Weigh each waste stream at transfer | kg | Per transfer with monthly reconciliation | Same period as product output | All included processes and storage points | Sum by one material, contamination state and destination; no netting from inputs | Scale calibration; transfer note; contractor receipt |
| `cp_wastewater_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Each wastewater stream | Flow meter, batch discharge and treatment record | source process; volume; density if used; treatment hand-off; monitored composition | Meter discharge or document batch volume at the treatment boundary | m3; kg | Continuous or per batch, reconciled monthly | Same period as product output | All included wet and cleaning operations | Sum by composition and receiving treatment; reconcile with water balance | Meter calibration; sampling record; treatment receipt |
| `cp_direct_emission_records` | `integrated_textile_substrate`; `bag_conversion_finishing` | Each direct air emission | Stack test, continuous monitor, permit calculation and fuel record | substance; compartment; concentration; gas flow; duration; fuel amount; factor source | Prefer measured emissions; otherwise use an approved calculation tied to collected activity data | kg | Per monitoring schedule and monthly calculation | Same period as product output | Every onsite combustion, printing, coating and abatement source | Calculate each substance separately and reconcile operating hours | Laboratory report; monitor calibration; permit factor; calculation sheet |
| `cp_refrigerant_records` | `bag_conversion_finishing` | Each refrigerant loss | Refrigerant service and stock record | refrigerant identity; opening charge; purchase; addition; recovery; closing charge | Annual or campaign stock balance for each refrigerant | kg | Per service event with annual reconciliation | Same period as product output | All included cooling systems | Loss equals opening stock plus purchases minus recovery and closing stock, checked against service records | Technician record; cylinder weights; equipment register |
| `cp_packaging_records` | `bag_conversion_finishing` | Each detachable dispatch packaging input | Packing bill and material issue record | packaging identity; issued mass; returned mass; packed product mass; shipment id | Weigh or calculate from verified unit mass and count | kg | Per shipment with monthly reconciliation | Same period as product output | All factory-gate dispatch packing | Sum each packaging material separately and normalize to net product mass | Supplier specification; unit-mass sample; shipment reconciliation |
| `cp_quality_test_records` | `bag_conversion_finishing` | Product conformity and qualifiers | Specification, test and inspection records | subtype; capacity; dimensions; mass; weave; seam; strength; coating; liner; lifting components; marking; result | Apply the declared product-specific standard and sampling plan | declared test units | Per production lot | Same period as product output | All released products | Link each accepted mass to a passed or dispositioned lot | Test report; equipment calibration; release authorization |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | All inventory rows | Normalized amount = reporting-period exchange amount / reporting-period net accepted product mass. | Collected exchange amount; net accepted product mass | Exchange per 1 kg reference product | `eu-pef-2021` |
| `calc_inventory_consumption` | Materials and chemicals | Net consumption = opening stock + receipts - closing stock - documented return to supplier or reusable recovery. | Stock and issue records | Net consumed mass by atomic material identity | `eu-pef-2021` |
| `calc_item_to_mass` | Count-based records | Product or reject mass = item count × representative measured mass per item for the same lot and subtype. | Item count; sample mass; sample count | Lot-specific product or reject mass | `iso-23560-2015`; `iso-21898-2024` |
| `calc_material_balance` | Each process | Inputs = transferred product + accepted product + wastes + emissions + documented stock change, evaluated on compatible mass and moisture bases; investigate and disclose residuals. | Material inputs; outputs; wastes; emissions; stock change | Process material-balance residual | `eu-pef-2021` |
| `calc_shared_utility` | Shared utilities | Allocated utility = reconciled facility total × documented physical driver share; allocated shares must sum to the source total. | Facility total; driver values by process/product | Utility amount assigned to each product | `eu-pef-2021` |
| `calc_fuel_emissions` | Onsite combustion | Direct emission = collected fuel activity × documented site, supplier or authoritative emission factor; calculate each substance and fuel separately. | Fuel amount; calorific conversion; emission factor | Direct substance emission | `eu-textiles-bref-2023` |
| `calc_refrigerant_loss` | Cooling systems | Refrigerant loss = opening charge + purchases/additions - recovered amount - closing charge, reconciled to service events. | Refrigerant stock and service records | Loss of one refrigerant to air | `eu-pef-2021` |
| `calc_net_product_mass` | Reference product | Net product mass = gross released mass - detachable dispatch packaging mass; permanently attached liners and fittings remain in product mass. | Gross mass; packaging mass; construction record | Net accepted reference-product mass | `iso-23560-2015`; `iso-21898-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and all exchanges | Preserve exact product subtype, material chemistry, grade, construction, conditioning state, supplier gate and route; do not merge semantically different flows. | Specifications, supplier records, batch sheets and flow mapping review |
| `dq_temporal` | Foreground dataset | Cover at least 12 consecutive representative months or the entire shorter campaign, and explain shutdowns, start-up, abnormal production and seasonality. | Reporting-period calendar and production log |
| `dq_completeness` | Inputs and outputs | Reconcile purchases, issues, stock, accepted output, rejects, waste, wastewater and direct emissions; disclose every exclusion and unquantified stream. | Mass, water and energy balance with signed gap review |
| `dq_measurement` | Meters and scales | Use calibrated instruments suitable for the measured range and retain raw readings before conversion or allocation. | Calibration certificate, meter register and raw record |
| `dq_representativeness` | Aggregated dataset | Demonstrate representativeness before combining different fibre/polymer families, capacities, coated and uncoated products, FIBCs and small sacks, or integrated and conversion-only routes. | Production-share analysis and route-specific sensitivity |
| `dq_source_traceability` | Method and external evidence | Retain stable source identity and link each externally constrained rule to its source id; search snippets are not evidence. | Source register and original document review |
| `dq_range_status` | Important flows | Do not infer a range from one case or repeat a single value as both bounds. Until two independent boundary-compatible original sources support a range, retain site-specific collection and the manifest unresolved-range record. | Range evidence review and foreground records |
| `dq_conformity` | Released product | Link accepted product mass to the declared material, construction, performance, test and marking requirements for the applicable sack or FIBC subtype. | Product test report and release authorization |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | Dataset identity | Confirm that the reference product is an empty textile sack or bag used for packing goods within CPC 27150 and not a consumer bag, paper sack, non-textile film sack or rigid container. | `un-cpc-v3-structure-2023` |
| `validation_reference_flow` | Quantitative reference | Confirm exactly 1 kg net accepted finished product, excluding the packed good and detachable dispatch packaging but including permanently attached liners, loops and fittings. | `iso-23560-2015`; `iso-21898-2024` |
| `validation_route_boundary` | Process coverage | Verify that every controlled tape/fibre preparation, weaving, coating, lamination, printing, cutting, sewing, joining, assembly, inspection and packing operation is included and every purchased intermediate has an upstream dataset. | `unido-jute-bag-factory-1990`; `sharma-alagh-pp-packaging-2021`; `eu-textiles-bref-2023` |
| `validation_atomic_inventory` | Inventory rows | Reject grouped flow labels. Electricity, steam, each fuel, each refrigerant, water, each chemical, each packaging component, each waste stream and each direct emission must be represented by separate atomic exchanges. | `eu-textiles-bref-2023`; `eu-pef-2021` |
| `validation_mass_balance` | Materials and outputs | Check process mass balances on compatible conditioning bases and require investigation and disclosure of residuals; waste and reusable scrap must not be silently netted from input. | `eu-pef-2021` |
| `validation_allocation` | Shared processes | Confirm that subdivision was attempted first, every shared allocation uses a documented physical or justified economic driver, and allocated totals reconcile to source records. | `eu-pef-2021` |
| `validation_product_conformity` | Woven PP sacks and FIBCs | Verify the declared applicable standard, capacity, construction, test and marking evidence; flag any claim that this PCR itself confers conformity. | `iso-23560-2015`; `iso-21898-2024`; `bis-is-14887-2014` |
| `validation_ranges` | Quantitative ranges | Reject a range derived from one plant, one case, a search abstract, or identical lower and upper values. Accept an external empirical range only after two independent boundary-compatible original sources are documented. | `eu-pef-2021` |
| `validation_uuid_status` | Tiangong identities | Reject the Sewn Bag UUID for the reference product. Keep every unresolved semantic flow without a UUID until an exact state-100 Tiangong identity is confirmed. |  |
| `validation_bilingual_alignment` | English and Chinese PCR | Confirm identical ordered rule ids, process ids, row ids, source ids and controlled tokens, with accurate Chinese names for every concrete unresolved flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for a route-specific textile sack or bag for packing goods; after review it may support a `secondary_dataset` or `background_dataset` projection |
| downstream_use | Factory-gate process datasets and lifecycle models that require a specific empty packing sack or bag input with declared construction and geography |
| allowed_use | Use for the declared material family, product subtype, capacity, construction, finishing system, facility technology, geography and reporting period; aggregation requires demonstrated representativeness |
| excluded_use | Consumer bags; paper or non-textile film sacks; rigid containers; filled goods; dangerous-goods conformity without the applicable legal specification; use, reuse or end-of-life modelling not separately supplied |
| required_metadata | PCR id and version; product subtype; intended packed good; capacity or safe working load; dimensions; full material composition; fabric construction and mass per area; liner/coating/printing/seam/FIBC component specification; net mass and conditioning state; included onsite operations; supplier gates; geography; technology; reporting period; allocation; cut-offs; UUID gaps; source ids |
| required_quality_disclosure | Primary-data share; meter and scale coverage; calibration; mass/water/energy reconciliation; route representativeness; upstream dataset quality; allocation sensitivity; product conformity evidence; unresolved flow identities and unresolved range evidence |
| update_trigger | Change in material family, recycled content basis, capacity class, fabric or seam construction, liner/coating/printing system, FIBC design, supplier gate, technology, energy or fuel system, water/waste treatment, allocation driver, geography, applicable standard, product UUID availability or representative production mix |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2023` | `official_guidance` | United Nations Statistics Division. *Central Product Classification Version 3.0 structure*, code 27150. https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf | Official category identity and exclusion of adjacent product classes |
| `iso-23560-2015` | `standard` | ISO 23560:2015. *Woven polypropylene sacks for bulk packaging of foodstuffs*. https://www.iso.org/standard/65221.html | Woven PP sack scope, capacity, construction, testing and product qualifiers |
| `iso-21898-2024` | `standard` | ISO 21898:2024. *Packaging — Flexible intermediate bulk containers (FIBCs) for non-dangerous goods*. https://www.iso.org/standard/83014.html | FIBC materials, construction, design, type testing, marking and safe-use qualifiers |
| `bis-is-14887-2014` | `standard` | Bureau of Indian Standards. IS 14887:2014, *Textiles — HDPE/PP woven sacks for packaging of 50 kg food grains — Specification*. https://www.bis.gov.in/is-14887-2014/?lang=en | Official confirmation of HDPE/PP woven textile sack material and food-grain packing scope |
| `unido-jute-bag-factory-1990` | `official_guidance` | UNIDO. *Reactivation of the Jute Bag Factory: Economic Viability of a Bagging Factory*, report 18352, 1990. https://downloads.unido.org/ot/48/40/4840782/15001-20000_18352.pdf | Jute route decomposition: batching, carding, drawing, spinning, weaving, damping, calendering, cutting, hemming, seaming, printing and baling; identification of electricity and water needs without using the single case as range evidence |
| `eu-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre. *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, EUR 31392 EN, JRC131874, DOI 10.2760/355887, 2023. https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 | Conditional fabric production, coating, lamination, printing, finishing, wastewater and direct-emission inventory coverage |
| `eu-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj | System-boundary disclosure, company-specific manufacturing data, allocation hierarchy, data quality, traceability and validation logic |
| `sharma-alagh-pp-packaging-2021` | `literature` | Sharma, T.; Alagh, P. *Process and factor analysis in the manufacturing of woven polypropylene packaging textiles*. International Journal of Home Science 7(2), 109-115. DOI 10.22271/23957476.2021.v7.i2b.1155. https://www.homesciencejournal.com/archives/2021/vol7issue2/PartB/7-2-25-519.pdf | Original full-text evidence for PP resin/filler tape extrusion, stretching, weaving, printing, cutting, stitching, optional lamination, inspection, bundling and baling; no case values used as PCR ranges |
| `patti-cicala-acierno-2020` | `literature` | Patti, A.; Cicala, G.; Acierno, D. *Eco-Sustainability of the Textile Production: Waste Recovery and Current Recycling in the Composites World*. Polymers 13(1), 134. DOI 10.3390/polym13010134. https://www.mdpi.com/2073-4360/13/1/134 | Verified general textile production and solid-waste background only; explicitly not used for category-specific quantitative ranges |
