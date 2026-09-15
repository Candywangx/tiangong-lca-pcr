---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.wine-of-fresh-grapes-except-sparkling-wine-grape-must
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wine of fresh grapes, except sparkling wine; grape must

## 1. Scope and Applicability

This PCR governs foreground data packages for grape must and non-sparkling wine made from fresh grapes. It covers winery-gate production from receipt of fresh wine grapes through must preparation and, for wine, alcoholic fermentation, clarification, stabilisation, maturation, and dispatch in bulk or in declared packaging. Grape cultivation and transport to the winery are represented by upstream datasets; downstream distribution, retail, consumption, and packaging end of life are outside the foreground boundary unless the declared study expands them.

Sparkling and carbonated wine, vermouth and other aromatised wine, fruit wine, grape juice, distilled wine products, wine vinegar, and winery processes based only on non-grape feedstock are excluded. The data package shall declare whether the reference product is grape must or non-sparkling wine and shall apply only the route-specific processes and atomic exchanges that actually occur.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.wine-of-fresh-grapes-except-sparkling-wine-grape-must |
| classification_refs | CPC 3.0: 24212 |
| covered_products | Grape must obtained from fresh grapes; still wine obtained by partial or complete alcoholic fermentation of fresh grapes or grape must, whether supplied in bulk or in declared packaging |
| excluded_products | Sparkling or carbonated wine; vermouth and aromatised wine; fruit wine; grape juice; wine vinegar; distilled wine products; products not made from fresh grapes or grape must |
| representative_product | Market-ready non-sparkling grape wine or grape must at the winery dispatch gate |
| production_route | Fresh-grape reception, sorting, crushing and/or pressing; route-dependent must handling; alcoholic fermentation for wine; conditional clarification, stabilisation and maturation; bulk dispatch or packaging |
| market_state | Bulk liquid or packaged liquid; product form, still-wine status, alcohol state, packaging configuration, vintage or production campaign, and quality designation declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of market-ready grape must or non-sparkling wine made from fresh grapes at the winery dispatch gate |
| How much | 1,000 kg of reference product |
| How well | Conforms to the declared product form and applicable compositional, oenological, food-safety, and market specifications; wine is not sparkling or carbonated |
| How long or cycle | One completed production batch or campaign through winery dispatch |
| reference_flow_link | Net saleable output after documented process losses and before any downstream distribution |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Wine of fresh grapes, except sparkling wine, grape must `267f0e7f-b77b-4baf-8e0a-a4e4f180e3ec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a3c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | product_form=grape_must or non_sparkling_wine; bulk_or_packaged; grape variety or blend; vintage or production campaign; actual alcohol content for wine; residual sugar class where relevant; still-wine confirmation; preservation or stabilisation route; packaging configuration and fill quantity where packaged; geography; technology route |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalised exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1,000 kg net saleable reference product and normalise every exchange to that mass. |
| `liquid_mass_conversion` | Records measured by liquid volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert measured volume to mass with a product- and temperature-specific density record; retain raw volume, temperature, density, and conversion calculation. |
| `packaging_mass` | Each packaging component | Mass | kg | Record the placed-on-market mass of each component separately; do not use a combined packaging mass without component records. |
| `energy_separation` | Purchased electricity, purchased steam, and combusted fuels | Energy | kWh or MJ | Keep electricity, steam, and each fuel as separate exchanges and document conversion factors and heating-value basis. |
| `wastewater_load` | Direct discharge pollutant indicators | Mass | kg | Calculate each pollutant load separately as measured discharge volume multiplied by its matched concentration; retain sampling and flow records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh wine grapes received at the winery gate, or an explicitly disclosed same-category grape must or bulk wine input for recursive processing |
| starting_condition_role | Foreground entry point for winery operations |
| product_classification_scope | Grape must and non-sparkling wine made from fresh grapes; excludes sparkling, aromatised, distilled, vinegar, grape-juice, and non-grape products |
| recursive_input_rule | Record purchased grape must or bulk wine in this category once as an atomic product input with an upstream dataset; do not recursively reconstruct its winery production inside the receiving foreground process. |
| upstream_dataset_requirement | Require representative upstream datasets for fresh grapes, same-category bulk inputs, electricity, steam, each fuel, water, additives, processing aids, packaging components, and offsite waste treatment. |
| disclosure | Disclose included route, bulk or packaged dispatch, outsourced operations, excluded life-cycle stages, grape origin, vintage or campaign, product losses, wastewater route, waste and co-product destinations, and allocation choices. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground winery system | Include all attributable winery operations from receipt of fresh grapes or disclosed recursive inputs through net saleable product dispatch; disclose that grape production, downstream distribution, retail, use, and end of life require linked datasets when a full life cycle is modelled. | `oiv-ghg-2025`; `ferrara-de-feo-2018` |
| `boundary_route_selection` | Grape-must and wine routes | Include must preparation for both products; include alcoholic fermentation only for wine; include clarification, stabilisation, maturation, and packaging only when performed for the declared product. | `oiv-code-2025`; `lbnl-best-winery-2005` |
| `boundary_complete_exchanges` | Every included process | Inventory energy, water, raw materials, additives, processing aids, packaging components, products, co-products, each waste, wastewater, refrigerant loss, and each direct emission as separate exchanges. | `oiv-ghg-2025`; `oiv-viti-641-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `must_preparation` | Fresh-grape reception and must preparation | required | All declared products | Converts received fresh grapes into grape must and separated solids | 1,000 kg reference product |
| `alcoholic_fermentation` | Alcoholic fermentation | conditional | product_form=non_sparkling_wine | Converts grape sugars into ethanol, carbon dioxide, and young wine | 1,000 kg reference product |
| `wine_finishing` | Clarification, stabilisation, maturation, and cellar handling | conditional | Performed for the declared wine or treated/preserved must route | Produces finished bulk product and records cellar utilities, aids, residues, and losses | 1,000 kg reference product |
| `packaging_dispatch` | Packaging and dispatch preparation | conditional | Reference product is packaged before the winery gate | Fills and assembles the declared primary, secondary, and tertiary packaging | 1,000 kg reference product |
| `wastewater_treatment` | Onsite winery wastewater treatment | conditional | Winery wastewater is treated or discharged under foreground control | Treats wastewater and quantifies separate discharge indicators | 1,000 kg reference product |

### Process: Fresh-grape reception and must preparation (`must_preparation`)

#### Inputs

##### Product flows

###### Received fresh wine grapes (`fresh_wine_grapes`)

Fresh grapes entering the winery are weighed by lot before sorting, crushing, destemming, draining, or pressing.

- Selected flow: Fresh wine grapes
- Flow property / unit: Mass / kg
- Amount rule: Net accepted grape mass from calibrated inbound scales after documented rejected-load adjustments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `oiv-code-2025`; `lbnl-best-winery-2005`

###### Electricity for grape handling (`must_preparation_electricity`)

Metered electricity powers receiving, conveyors, crushers, destemmers, presses, pumps, and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity used by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `lbnl-best-winery-2005`

###### Cleaning water for receiving and pressing (`must_preparation_water`)

Water used to clean the crush pad, receiving equipment, presses, and associated lines is recorded separately from other cellar water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-estimated water delivered to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `lbnl-best-winery-2005`; `oiv-viti-641-2020`

###### Sulfur dioxide used before fermentation (`must_preparation_sulfur_dioxide`)

Sulfur dioxide is recorded when used to protect grapes or must; the pure active mass is derived from the actual formulation and concentration.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Active sulfur dioxide mass calculated from weighed formulation additions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_additive_records`
- Sources: `oiv-code-2025`

#### Outputs

##### Product flows

###### Grape must transferred or sold (`grape_must_output`)

Must leaving preparation is weighed or converted from calibrated volume and density; it is an intermediate for wine or the saleable reference product for the must route.

- Selected flow: Grape must
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer or dispatch mass net of retained solids and documented losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `oiv-code-2025`

##### Waste flows

###### Separated grape stems (`grape_stems`)

Stems removed during destemming are recorded by wet mass and destination.

- Selected flow: Grape stems
- Flow property / unit: Mass / kg
- Amount rule: Measured or container-weight-derived wet mass leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`; `lbnl-best-winery-2005`

###### White-wine or must-route grape pomace (`must_preparation_pomace`)

Skins, seeds, and pulp separated before fermentation are recorded as grape pomace with destination and market status.

- Selected flow: Grape pomace
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`; `ferrara-de-feo-2018`

###### Must-preparation winery wastewater (`must_preparation_wastewater`)

Wash water and product-bearing drainage leaving this process are recorded as one specific wastewater stream before treatment.

- Selected flow: Winery wastewater from grape receiving and pressing
- Flow property / unit: Volume / m3
- Amount rule: Measured wastewater volume attributable to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `oiv-viti-641-2020`; `lbnl-best-winery-2005`

##### Elementary flows

### Process: Alcoholic fermentation (`alcoholic_fermentation`)

#### Inputs

##### Product flows

###### Grape must to fermentation (`fermentation_grape_must`)

Must charged to fermenters is recorded by mass for the wine route.

- Selected flow: Grape must
- Flow property / unit: Mass / kg
- Amount rule: Measured fermenter charge mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `oiv-code-2025`

###### Active dry wine yeast (`wine_yeast`)

Purchased yeast is recorded only when inoculation occurs.

- Selected flow: Active dry wine yeast
- Flow property / unit: Mass / kg
- Amount rule: Weighed yeast addition from batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `oiv-code-2025`

###### Diammonium phosphate fermentation nutrient (`diammonium_phosphate`)

Diammonium phosphate is recorded as a separate chemical when added as a fermentation nutrient.

- Selected flow: Diammonium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Weighed nutrient addition from batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `oiv-code-2025`

###### Electricity for fermentation control (`fermentation_electricity`)

Electricity for pumping, agitation, controls, and cooling is recorded for the fermentation process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity used by fermentation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `lbnl-best-winery-2005`

###### Fermenter cleaning water (`fermentation_water`)

Water used for fermenter and transfer-line cleaning is separately recorded.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-estimated water delivered to fermentation cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `lbnl-best-winery-2005`

###### Refrigerant R134a makeup (`r134a_makeup`)

R134a purchased to replace losses from fermentation or cellar cooling is recorded when this refrigerant is used.

- Selected flow: Refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Verified R134a recharge mass assigned to winery production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `oiv-ghg-2025`

###### Refrigerant R404A makeup (`r404a_makeup`)

R404A purchased to replace losses from fermentation or cellar cooling is recorded when this refrigerant blend is used.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass / kg
- Amount rule: Verified R404A recharge mass assigned to winery production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `oiv-ghg-2025`

#### Outputs

##### Product flows

###### Young wine after alcoholic fermentation (`young_wine`)

Young wine transferred from fermentation is recorded by mass before finishing.

- Selected flow: Young non-sparkling grape wine
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass net of retained solids and documented spills
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `oiv-code-2025`

##### Waste flows

###### Red-wine grape pomace (`fermentation_pomace`)

Skins, seeds, and pulp separated after red-wine fermentation are recorded as grape pomace.

- Selected flow: Grape pomace
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass leaving fermentation or pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`; `ferrara-de-feo-2018`

###### Gross fermentation lees (`fermentation_lees`)

Settled yeast and solids removed at the first wine transfer are recorded separately from pomace.

- Selected flow: Wine lees
- Flow property / unit: Mass / kg
- Amount rule: Measured wet lees mass leaving fermentation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`; `lbnl-best-winery-2005`

###### Fermentation winery wastewater (`fermentation_wastewater`)

Fermenter and transfer-line wash water leaving the process is recorded before treatment.

- Selected flow: Winery wastewater from fermentation
- Flow property / unit: Volume / m3
- Amount rule: Measured wastewater volume attributable to fermentation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `oiv-viti-641-2020`; `lbnl-best-winery-2005`

##### Elementary flows

###### Biogenic carbon dioxide from fermentation (`fermentation_co2_biogenic`)

Carbon dioxide released by alcoholic fermentation is calculated from collected sugar-conversion or off-gas records and reported as biogenic.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured off-gas mass or stoichiometric calculation from fermentable sugar converted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `oiv-code-2025`; `lbnl-best-winery-2005`

###### R134a released to air (`r134a_to_air`)

R134a leakage is reported separately when systems containing R134a serve the foreground processes.

- Selected flow: 1,1,1,2-Tetrafluoroethane (HFC-134a), to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated refrigerant inventory loss assigned to production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `oiv-ghg-2025`

###### R404A released to air (`r404a_to_air`)

R404A leakage is reported separately when systems containing R404A serve the foreground processes.

- Selected flow: Refrigerant R404A, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated refrigerant inventory loss assigned to production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `oiv-ghg-2025`

### Process: Clarification, stabilisation, maturation, and cellar handling (`wine_finishing`)

#### Inputs

##### Product flows

###### Young wine to finishing (`finishing_young_wine`)

Young wine entering finishing is measured before clarification, stabilisation, maturation, or storage.

- Selected flow: Young non-sparkling grape wine
- Flow property / unit: Mass / kg
- Amount rule: Measured process charge mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `lbnl-best-winery-2005`

###### Electricity for cellar operations (`finishing_electricity`)

Electricity for pumping, filtration, refrigeration, stabilisation, and storage is recorded for the finishing process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity used by finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `lbnl-best-winery-2005`

###### Cellar cleaning water (`finishing_water`)

Water used to clean tanks, barrels, filters, floors, and transfer equipment is separately recorded.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-estimated water delivered to finishing and cellar cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `lbnl-best-winery-2005`; `oiv-viti-641-2020`

###### Purchased steam for hot cleaning (`finishing_steam`)

Purchased steam is a separate exchange when used for barrel, tank, or equipment cleaning.

- Selected flow: Steam, at industrial facility
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam energy assigned to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `lbnl-best-winery-2005`

###### Natural gas for onsite heat (`finishing_natural_gas`)

Natural gas is recorded separately when combusted onsite for hot water or steam used by the winery.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel consumption on a documented lower- or higher-heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `lbnl-best-winery-2005`; `oiv-ghg-2025`

###### Sulfur dioxide used in finishing (`finishing_sulfur_dioxide`)

Sulfur dioxide added after fermentation is recorded separately from pre-fermentation additions.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Active sulfur dioxide mass calculated from weighed formulation additions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_additive_records`
- Sources: `oiv-code-2025`

###### Bentonite fining agent (`bentonite`)

Bentonite is recorded when used for fining or clarification.

- Selected flow: Bentonite
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry bentonite charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `oiv-code-2025`; `lbnl-best-winery-2005`

###### Diatomaceous earth filter aid (`diatomaceous_earth`)

Diatomaceous earth is recorded when used in depth filtration.

- Selected flow: Diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry filter aid charged to filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `lbnl-best-winery-2005`

#### Outputs

##### Product flows

###### Finished bulk non-sparkling wine (`finished_bulk_wine`)

Finished bulk wine is measured after finishing and before packaging or bulk dispatch.

- Selected flow: Finished bulk non-sparkling grape wine
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer or dispatch mass net of retained residues and documented cellar losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `oiv-code-2025`; `lbnl-best-winery-2005`

##### Waste flows

###### Finishing wine lees (`finishing_lees`)

Lees removed during racking, clarification, stabilisation, or maturation are recorded separately.

- Selected flow: Wine lees
- Flow property / unit: Mass / kg
- Amount rule: Measured wet lees mass leaving finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`; `ferrara-de-feo-2018`

###### Spent bentonite (`spent_bentonite`)

Spent bentonite and entrained wine solids are recorded as a distinct waste stream.

- Selected flow: Spent bentonite from wine clarification
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass leaving clarification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`

###### Spent diatomaceous earth (`spent_diatomaceous_earth`)

Used diatomaceous earth and retained solids are recorded separately from other clarification residues.

- Selected flow: Spent diatomaceous earth from wine filtration
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass leaving filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`; `lbnl-best-winery-2005`

###### Finishing winery wastewater (`finishing_wastewater`)

Tank, barrel, filter, and cellar wash water leaving finishing is recorded before treatment.

- Selected flow: Winery wastewater from finishing and cellar cleaning
- Flow property / unit: Volume / m3
- Amount rule: Measured wastewater volume attributable to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `oiv-viti-641-2020`; `lbnl-best-winery-2005`

##### Elementary flows

###### Fossil carbon dioxide from onsite natural-gas combustion (`natural_gas_co2_fossil`)

Direct fossil carbon dioxide from the documented natural-gas use is calculated separately.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Natural-gas activity multiplied by the applicable documented carbon-dioxide emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `oiv-ghg-2025`

###### Methane from onsite natural-gas combustion (`natural_gas_ch4`)

Direct methane from onsite natural-gas combustion is calculated as its own exchange.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Natural-gas activity multiplied by the applicable documented methane emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `oiv-ghg-2025`

###### Nitrous oxide from onsite natural-gas combustion (`natural_gas_n2o`)

Direct nitrous oxide from onsite natural-gas combustion is calculated as its own exchange.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Natural-gas activity multiplied by the applicable documented nitrous-oxide emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `oiv-ghg-2025`

###### Nitrogen oxides from onsite natural-gas combustion (`natural_gas_nox`)

Direct nitrogen oxides from onsite natural-gas combustion are reported separately from greenhouse gases.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Natural-gas activity multiplied by the applicable documented nitrogen-oxides emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `oiv-ghg-2025`

### Process: Packaging and dispatch preparation (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Finished wine sent to packaging (`packaging_wine_input`)

Finished wine entering packaging is measured separately from grape must.

- Selected flow: Finished bulk non-sparkling grape wine
- Flow property / unit: Mass / kg
- Amount rule: Measured mass charged to the packaging line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `lbnl-best-winery-2005`

###### Grape must sent to packaging (`packaging_must_input`)

Grape must entering packaging is measured as a separate route-specific product input.

- Selected flow: Grape must
- Flow property / unit: Mass / kg
- Amount rule: Measured mass charged to the packaging line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `oiv-code-2025`

###### Electricity for packaging (`packaging_electricity`)

Electricity for rinsing, filling, closing, labelling, conveying, and pallet preparation is recorded.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity used by packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `lbnl-best-winery-2005`

###### Packaging-line cleaning water (`packaging_water`)

Water used for package rinsing and line cleaning is recorded separately.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-estimated water delivered to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `lbnl-best-winery-2005`

###### Nitrogen for inerting (`packaging_nitrogen`)

Nitrogen used for tank or package headspace inerting is recorded when applied.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Metered gas use or supplier-cylinder mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `lbnl-best-winery-2005`

###### Glass bottles (`glass_bottle`)

Glass bottle mass is recorded separately for the exact bottle specification used.

- Selected flow: Glass bottle
- Flow property / unit: Mass / kg
- Amount rule: Issued bottle count multiplied by verified unit mass, less returned unused units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `ferrara-de-feo-2018`; `oiv-viti-641-2020`

###### Natural cork closures (`natural_cork_closure`)

Natural cork closures are recorded only for products using this closure.

- Selected flow: Natural cork closure
- Flow property / unit: Mass / kg
- Amount rule: Issued closure count multiplied by verified unit mass, less returned unused units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `ferrara-de-feo-2018`

###### Aluminium screw-cap closures (`aluminium_screw_cap`)

Aluminium screw caps are recorded only for products using this closure and never combined with cork mass.

- Selected flow: Aluminium screw-cap closure
- Flow property / unit: Mass / kg
- Amount rule: Issued closure count multiplied by verified unit mass, less returned unused units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-viti-641-2020`

###### Paper labels (`paper_label`)

Paper labels are recorded as an individual packaging component.

- Selected flow: Coated paper label
- Flow property / unit: Mass / kg
- Amount rule: Applied label count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `ferrara-de-feo-2018`

###### Corrugated board cartons (`corrugated_board_carton`)

Corrugated board shipping cartons are recorded separately from labels and pallets.

- Selected flow: Corrugated board carton
- Flow property / unit: Mass / kg
- Amount rule: Used carton count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-viti-641-2020`

###### Low-density polyethylene stretch film (`ldpe_stretch_film`)

Stretch film used to secure palletised product is recorded as its own polymer component.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Issued roll mass less verified remainder, assigned to packaged output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-viti-641-2020`

###### Wooden pallets (`wood_pallet`)

One-way or allocated reusable wooden pallet mass is recorded separately with reuse assumptions disclosed.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: One-way pallet mass or verified lifetime allocation of reusable pallet mass assigned to output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-viti-641-2020`

#### Outputs

##### Product flows

###### Market-ready packaged reference product (`packaged_reference_product`)

Net saleable packaged wine or grape must is the reference output; product mass excludes packaging mass.

- Selected flow: Wine of fresh grapes, except sparkling wine, grape must `267f0e7f-b77b-4baf-8e0a-a4e4f180e3ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg net saleable product, excluding packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging-line winery wastewater (`packaging_wastewater`)

Rinsing and line-cleaning water leaving packaging is recorded before treatment.

- Selected flow: Winery wastewater from packaging
- Flow property / unit: Volume / m3
- Amount rule: Measured wastewater volume attributable to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `lbnl-best-winery-2005`

###### Broken glass bottles (`broken_glass`)

Broken or rejected glass bottles are recorded separately from other packaging losses.

- Selected flow: Waste glass from packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured mass or rejected bottle count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-viti-641-2020`

##### Elementary flows

### Process: Onsite winery wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity for wastewater treatment (`wastewater_treatment_electricity`)

Electricity used by pumps, aeration, mixing, and controls is recorded for onsite treatment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity used by wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `oiv-viti-641-2020`

##### Waste flows

###### Combined winery wastewater to onsite treatment (`winery_wastewater_treatment_input`)

The combined winery wastewater entering onsite treatment is measured without combining it with sanitary wastewater unless that scope is explicitly disclosed.

- Selected flow: Winery process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured influent volume assigned to the declared product system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `oiv-viti-641-2020`

#### Outputs

##### Product flows

##### Waste flows

###### Treated winery wastewater (`treated_winery_wastewater`)

Treated effluent sent to reuse, sewer, or controlled discharge is recorded by volume and destination.

- Selected flow: Treated winery wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured treated-effluent volume by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `oiv-viti-641-2020`

###### Wastewater treatment sludge (`wastewater_sludge`)

Sludge removed from winery wastewater treatment is recorded as a separate waste stream.

- Selected flow: Winery wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass with dry-matter content and destination retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `oiv-viti-641-2020`; `ferrara-de-feo-2018`

##### Elementary flows

###### Chemical oxygen demand discharged to water (`cod_to_water`)

COD load is reported as its own discharge indicator when treated effluent is released under foreground control.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured COD concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `oiv-viti-641-2020`

###### Five-day biochemical oxygen demand discharged to water (`bod5_to_water`)

BOD5 load is reported separately from COD.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured BOD5 concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `oiv-viti-641-2020`

###### Total suspended solids discharged to water (`tss_to_water`)

Suspended-solids load is reported as an individual water emission.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured total-suspended-solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `oiv-viti-641-2020`

###### Total nitrogen discharged to water (`total_nitrogen_to_water`)

Total-nitrogen load is reported as an individual water emission when monitored or required by permit.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `oiv-viti-641-2020`

###### Total phosphorus discharged to water (`total_phosphorus_to_water`)

Total-phosphorus load is reported as an individual water emission when monitored or required by permit.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `oiv-viti-641-2020`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Multi-output winery processes | Avoid allocation first by subdividing metered operations or expanding the system with separately modelled recovery processes where this is justified and consistently applied. | `oiv-ghg-2025` |
| `allocation_physical` | Wine, grape must, pomace, lees, and other valuable co-products | Where subdivision is not possible and a physical causal relationship exists, allocate the remaining shared inputs and outputs using that documented physical relationship; do not allocate solely because a residue has mass. | `oiv-ghg-2025` |
| `allocation_economic_fallback` | Joint valuable outputs without a defensible physical relationship | Use economic allocation only as a disclosed fallback based on contemporaneous values at the point where co-products leave the shared process; test sensitivity when the choice is material. | `oiv-ghg-2025`; `eu-pef-2021` |
| `waste_no_credit` | Outputs managed as waste | Assign no avoided-product credit unless a documented consequential or substitution scenario is explicitly in scope; record transport and treatment in the selected waste route. | `oiv-viti-641-2020`; `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | all | Product and intermediate mass | Scale, tank, density, and batch records | batch_id; timestamp; gross_mass; tare_mass; volume; temperature; density; product_form; transfer_loss | Calibrated scale or calibrated volume converted with matched density | kg | Each lot, transfer, and dispatch | Complete declared campaign | All foreground winery operations | Sum accepted or transferred mass by route; reconcile inputs, outputs, stocks, and documented losses before normalisation | Calibration certificates; tank charts; batch reconciliation; signed dispatch records |
| `cp_energy_records` | all | Electricity, steam, and each fuel | Meter, invoice, and equipment allocation records | meter_id; timestamp; energy_quantity; unit; fuel_identity; heating_value_basis; process_assignment | Direct sub-metering preferred; otherwise documented engineering allocation from facility meters | kWh; MJ | Continuous or invoice period | At least one representative complete production campaign | Foreground winery and onsite treatment | Aggregate each energy carrier separately and allocate shared meters using documented operating drivers | Meter calibration; invoices; allocation worksheet; completeness check |
| `cp_water_records` | all | Process water | Water meter and batch records | meter_id; timestamp; volume; source; process_assignment; reuse_flag | Direct meter or validated batch estimate | m3 | Continuous or each cleaning event | Complete declared campaign including peak vintage | Foreground winery | Sum by process and water source; keep reused water separate from fresh intake | Meter calibration; cleaning logs; water balance |
| `cp_additive_records` | all | Each additive, processing aid, yeast, nutrient, or inert gas | Weighing, formulation, issue, and batch records | material_identity; formulation; active_fraction; batch_id; issued_mass; returned_mass; gas_quantity | Weighed issue-and-return balance or calibrated dosing record | kg | Each addition | Complete declared campaign | Foreground winery | Calculate active material where needed and aggregate by atomic material and product route | Supplier specification; scale calibration; batch sheet; stock reconciliation |
| `cp_refrigerant_records` | alcoholic_fermentation | Each refrigerant and loss | Refrigeration asset register and service records | equipment_id; refrigerant_identity; opening_charge; added_mass; recovered_mass; closing_charge; service_date; process_assignment | Annual or campaign inventory balance for each refrigerant | kg | Each service and annual/campaign close | Period overlapping declared production | Refrigeration systems serving foreground processes | Calculate losses separately by refrigerant and assign by documented service or cooling driver | Technician records; purchase receipts; equipment register; inventory reconciliation |
| `cp_packaging_records` | packaging_dispatch | Each packaging component | Bill of materials, issue, count, unit-mass, and reject records | component_identity; supplier; specification; unit_mass; issued_count; returned_count; reject_count; reuse_cycles | Count multiplied by verified unit mass, or direct mass issue balance | kg | Each packaging run | Complete declared campaign | Packaging operations under foreground control | Aggregate each component separately; disclose reusable-pallet lifetime allocation | Supplier specification; sampled unit-mass check; line reconciliation |
| `cp_waste_records` | all | Each solid or semisolid waste and by-product | Container scale, collection, and destination records | waste_identity; wet_mass; dry_matter; batch_id; destination; market_status; haulier | Calibrated scale or container count with verified net mass | kg | Each removal | Complete declared campaign | All foreground processes | Aggregate each waste identity and destination separately; do not net sold co-products against inputs | Weigh tickets; manifests; dry-matter tests where relevant; destination evidence |
| `cp_wastewater_records` | all | Each winery wastewater stream | Flow meter, tank, sewer, and reuse records | source_process; timestamp; volume; destination; sanitary_inclusion; product_loss | Metered flow or validated tank-volume balance | m3 | Continuous or each discharge batch | Complete declared campaign including peak vintage | Winery wastewater under foreground control | Sum by source process and destination; reconcile treatment influent and effluent | Meter calibration; sewer invoice; tank logs; water balance |
| `cp_wastewater_monitoring` | wastewater_treatment | Each wastewater pollutant indicator | Matched flow and laboratory sample records | sample_id; start_time; end_time; discharge_volume; cod; bod5; tss; total_nitrogen; total_phosphorus; method; detection_limit | Representative composite sampling and accredited or documented laboratory analysis | kg; mg/L; m3 | Per permit and sufficient to represent vintage peaks | Complete declared campaign | Direct discharge under foreground control | Pair concentration with the same discharge interval; compute each pollutant load separately | Chain of custody; method; laboratory QA/QC; flow-meter calibration |
| `cp_direct_emission_records` | all | Fermentation and combustion emissions | Sugar balance, off-gas, fuel, and factor records | batch_id; sugar_before; sugar_after; offgas_mass; fuel_quantity; factor_id; factor_value; factor_unit | Direct measurement where available, otherwise activity data multiplied by documented factor or stoichiometric relation | kg | Each batch or fuel period | Complete declared campaign | Direct foreground emission sources | Calculate each emitted substance separately and normalise to reference mass | Analytical records; fuel invoices; factor provenance; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | Every inventory exchange | normalized_amount = campaign_amount / net_saleable_reference_product_mass × 1,000 kg | Campaign exchange amount; net saleable product mass | Exchange per 1,000 kg reference product | `oiv-ghg-2025` |
| `calc_volume_to_mass` | Wine and must volume records | mass = calibrated_volume × density measured or justified for the product and temperature | Volume; temperature; density | Product mass | `oiv-code-2025` |
| `calc_active_sulfur_dioxide` | Sulfiting additions | active_SO2_mass = formulation_mass × verified_SO2_mass_fraction | Formulation mass; supplier active fraction | Sulfur dioxide mass | `oiv-code-2025` |
| `calc_fermentation_co2` | Alcoholic fermentation | Use measured off-gas where reliable; otherwise CO2_mass = fermentable_hexose_equivalent_consumed × 88/180, with incomplete conversion and retained dissolved carbon disclosed | Sugar before and after fermentation; batch mass; off-gas or retention records | Biogenic carbon dioxide to air | `oiv-code-2025`; `lbnl-best-winery-2005` |
| `calc_refrigerant_loss` | Each refrigeration circuit | loss = opening_charge + additions - recovered_mass - closing_charge; report each refrigerant separately | Asset-level refrigerant inventory | Refrigerant emission to air | `oiv-ghg-2025` |
| `calc_combustion_emissions` | Each direct combustion emission | emission_mass = fuel_activity × documented substance-specific emission_factor | Fuel quantity; heating-value basis; factor identity | Separate CO2, CH4, N2O, and NOx emissions | `oiv-ghg-2025` |
| `calc_wastewater_load` | Each direct water-emission indicator | load_kg = matched_discharge_volume_m3 × concentration_mg_per_L / 1,000 | Discharge volume; matched concentration | Separate COD, BOD5, TSS, total-N, or total-P load | `oiv-viti-641-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and every exchange | Retain product form, route, material identity, waste destination, packaging specification, and refrigerant identity at atomic-flow level. | Batch sheets; supplier specifications; waste manifests; equipment register |
| `dq_temporal` | Foreground data | Cover one complete representative production campaign including peak vintage operations, finishing, storage, packaging, and wastewater treatment attributable to the product; disclose deviations. | Dated meter exports; batch calendar; inventory opening and closing records |
| `dq_measurement` | Mass, volume, energy, water, and pollutant records | Use calibrated instruments or documented engineering estimates; retain units, conversion factors, detection limits, and allocation drivers. | Calibration certificates; calculation worksheets; laboratory QA/QC |
| `dq_completeness` | All included processes | Reconcile product mass, utilities, additives, packaging components, each waste, wastewater destinations, refrigerants, and direct emissions; explain missing or excluded flows. | Campaign balance and signed completeness checklist |
| `dq_representativeness` | Foreground and linked upstream data | Characterise time, geography, technology, precision, completeness, consistency, reproducibility, source, and uncertainty; prioritise site-specific data for controlled processes. | Data-quality assessment and dataset metadata |
| `dq_uncertainty` | Material measured, calculated, or allocated values | Document measurement variability, estimation uncertainty, and sensitivity to allocation or secondary-data choices; do not convert one case value into an empirical range. | Uncertainty register; sensitivity calculation; source comparison |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm UUID, Product flow type, Mass reference property, kg unit, product_form qualifier, and explicit non-sparkling status. | `eu-regulation-1308-2013`; `oiv-code-2025` |
| `validate_route` | Process map | Require must preparation for every dataset; prohibit fermentation for unfermented grape must unless the declared preservation route includes partial fermentation; require fermentation for wine and disclose every conditional finishing and packaging process. | `oiv-code-2025`; `lbnl-best-winery-2005` |
| `validate_atomic_inventory` | Inventory rows | Reject any row that combines electricity with steam or fuel, multiple fuels, multiple refrigerants, multiple chemicals, multiple packaging components, multiple wastes, wastewater indicators, or air emissions. | `oiv-ghg-2025`; `oiv-viti-641-2020` |
| `validate_mass_balance` | Each process and campaign | Check opening stocks plus inputs against outputs, closing stocks, measured emissions, moisture changes, and documented losses; investigate material imbalance before publication. | `oiv-ghg-2025` |
| `validate_wastewater` | Wastewater treatment and discharge | Require source-process volumes and destinations; when discharge is under foreground control, calculate COD, BOD5, TSS, total nitrogen, and total phosphorus separately where monitored or required. | `oiv-viti-641-2020` |
| `validate_packaging` | Packaged product | Reconcile fill count and net product mass; require separate masses for every component actually used and disclose reusable-component allocation. | `ferrara-de-feo-2018`; `oiv-viti-641-2020` |
| `validate_sources_and_quality` | Foreground package | Require source ids for externally constrained rules, site-specific records for controlled processes, documented secondary data where primary data are impracticable, and complete data-quality disclosure. | `oiv-ghg-2025`; `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for grape must or non-sparkling wine at the winery dispatch gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product and process LCA, supply-chain inventory, environmental footprint studies, hotspot analysis, and scenario modelling consistent with the declared route, geography, vintage or campaign, product form, packaging, and boundary |
| excluded_use | Sparkling, carbonated, aromatised, distilled, vinegar, grape-juice, or non-grape products; undisclosed substitution between grape must and wine; consumer claims that imply cradle-to-grave coverage from this gate-to-gate dataset alone |
| required_metadata | PCR id and version; product form; grape variety or blend; vintage or campaign; actual alcohol content for wine; still-wine confirmation; geography; technology route; bulk or packaged state; package bill of materials; reference mass; data period; wastewater route; co-product and waste destinations; allocation method; upstream dataset identities |
| required_quality_disclosure | Primary-versus-secondary data share; measurement and conversion methods; calibration and laboratory evidence; temporal, geographical and technological representativeness; completeness; uncertainty; allocation sensitivity; missing UUIDs or flows; exclusions |
| update_trigger | Change in product form, grape source or variety mix, vintage representativeness, fermentation or stabilisation technology, energy system, refrigerant, packaging configuration, wastewater route, co-product treatment, allocation method, applicable regulation, or a material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-regulation-1308-2013` | standard | Regulation (EU) No 1308/2013, Annex VII Part II, consolidated text: https://eur-lex.europa.eu/eli/reg/2013/1308 | Legal product definitions for wine and grape must and exclusion of sparkling product routes; accessed 2026-08-20 |
| `oiv-code-2025` | official_guidance | OIV, International Code of Oenological Practices, 2025 issue, ISBN 978-2-85038-106-5: https://www.oiv.int/sites/default/files/publication/2025-04/CPO%202025%20EN.pdf | Product definitions and process decomposition for must preparation, fermentation, clarification, stabilisation, additives, and processing aids; accessed 2026-08-20 |
| `oiv-ghg-2025` | official_guidance | OIV, Methodological recommendations for GHG balance accounting in the vitivinicultural sector, Volume 1, July 2025: https://www.oiv.int/sites/default/files/2025-07/OIV-Expertise_document_Methodological_recommendations_for_accounting_for_GHG_balance.pdf | Functional-unit interpretation, partial-life-cycle disclosure, process mapping, foreground data collection, refrigerants, direct and indirect energy, allocation hierarchy, data quality, and uncertainty; accessed 2026-08-20 |
| `oiv-viti-641-2020` | official_guidance | OIV Resolution OIV-VITI 641-2020, Guide for the implementation of principles of sustainable vitiviniculture: https://www.oiv.int/standards/oiv-guide-for-the-implementation-of-principles-of-sustainable-vitiviculture- | Separate input and output management, waste and wastewater tracking, co-product treatment, packaging recyclability, and monitoring expectations; accessed 2026-08-20 |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, OJ L 471, 30.12.2021: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | Life-cycle data quality, verification, category-rule use, and allocation fallback context; accessed 2026-08-20 |
| `lbnl-best-winery-2005` | handbook | Galitsky, C., Worrell, E., Radspieler, A., Healy, P., and Zechiel, S. BEST Winery Guidebook, LBNL/PUB-3184, California Energy Commission, 2005, DOI 10.2172/862318: https://escholarship.org/content/qt7qb4h9g0/qt7qb4h9g0.pdf | Winery process sequence, refrigeration, pumping, hot water, cleaning, water use, clarification, storage, and bottling operations |
| `ferrara-de-feo-2018` | literature | Ferrara, C. and De Feo, G. Life Cycle Assessment Application to the Wine Sector: A Critical Review. Sustainability 10(2), 395. DOI: https://doi.org/10.3390/su10020395 | Independent peer-reviewed support for system-boundary variability, site-specific inventory need, winery wastes, and separate packaging-component significance |
