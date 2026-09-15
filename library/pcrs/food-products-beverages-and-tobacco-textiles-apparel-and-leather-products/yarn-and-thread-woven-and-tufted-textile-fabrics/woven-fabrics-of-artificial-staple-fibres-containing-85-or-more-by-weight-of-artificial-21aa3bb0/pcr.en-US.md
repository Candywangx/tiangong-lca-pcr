---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-artificial-staple-fibres-containing-85-or-more-by-weight-of-artificial-21aa3bb0
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of artificial staple fibres, containing 85% or more by weight of artificial staple fibres

## 1. Scope and Applicability

This PCR applies to factory-gate production of woven fabric in which artificial staple fibres account for at least 85% of total fibre mass. Artificial staple fibres include regenerated or otherwise artificial non-synthetic staple fibres such as viscose, modal, lyocell, cupro, or acetate when the finished fabric satisfies the composition threshold. The declared fabric may be greige or may include wet pretreatment, dyeing, printing, coating, or functional finishing when those operations are part of the marketed product state and are reported explicitly.

The foreground starts with accepted spun yarn at the weaving mill and covers yarn preparation, warping, conditional sizing, weaving, inspection, and any on-site finishing needed to reach the declared factory-gate state. Upstream fibre and yarn production is represented by linked upstream datasets. Garment manufacture, distribution, use, laundering, and end-of-life are outside this PCR. Non-wovens, knitted fabrics, tufted floor coverings, special fabrics, fabrics below the 85% artificial-staple-fibre threshold, and fabrics whose dominant fibre is synthetic staple fibre are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-artificial-staple-fibres-containing-85-or-more-by-weight-of-artificial-21aa3bb0 |
| classification_refs | CPC 3.0: 26750, exact mapping context |
| covered_products | Woven fabrics containing at least 85% artificial staple fibres by total fibre mass, supplied as greige, dyed, printed, coated, or otherwise finished fabric when the declared production route includes those operations |
| excluded_products | Knitted and non-woven textiles; carpets and tufted fabrics; special fabrics; garments and made-up articles; fabrics below the 85% threshold; fabrics dominated by synthetic staple fibres |
| representative_product | Factory-gate woven fabric made primarily from artificial staple-fibre yarn |
| production_route | Incoming yarn acceptance, winding or preparation, warping, conditional sizing, weaving, inspection, and conditional wet pretreatment or finishing |
| market_state | Declared greige or finished fabric at the producing facility gate, dry and saleable, before garment conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of woven fabric containing at least 85% artificial staple fibres by fibre mass |
| How much | 1 kg of saleable fabric at the factory gate |
| How well | Meets the declared fibre composition, weave, width, mass per unit area, colour or finish, quality grade, and moisture condition |
| How long or cycle | Not applicable to a mass-based intermediate product; one declared production lot is the reporting cycle |
| reference_flow_link | The saleable fabric output of the last included foreground process, normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of artificial staple fibres, containing 85% or more by weight of artificial staple fibres `7037e578-630a-4ba2-8768-7858df8a46aa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | artificial fibre type and supplier composition certificate; total fibre composition by mass; greige or finished state; weave or construction; fabric width; mass per unit area; colour, coating, or functional finish when present; moisture or conditioning state; quality grade; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net saleable fabric mass after conditioning to the declared moisture state; exclude pallets, cores, and external packaging. |
| `composition_threshold` | Product category membership | Fibre mass fraction | % by mass | Verify that artificial staple fibres are at least 85% of total fibre mass using a supplier certificate, bill of materials, or a quantitative fibre-analysis result under the applicable ISO 1833 method; remove non-fibrous matter as required by the test method and do not use coatings or packaging in the fibre denominator. |
| `area_to_mass_conversion` | Area-based production records | Mass and area | kg and m2 | Convert area records to mass only with the lot-specific measured mass per unit area and finished width; retain both raw measurements and the conversion formula. |
| `water_volume_conversion` | Metered process water and wastewater | Volume | m3 | Preserve measured volume; if a mass representation is required, apply a documented density and temperature basis rather than assuming an undocumented conversion. |
| `energy_carrier_separation` | Electricity, steam, and fuels | Energy | kWh or MJ | Record electricity, purchased steam, and fuels separately and preserve their original metered units before any conversion to a common energy unit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted artificial staple-fibre yarn and any minor-fibre yarns at the weaving facility gate, with composition, mass, moisture condition, and supplier identity documented |
| starting_condition_role | Upstream product input to the foreground weaving route |
| product_classification_scope | Woven fabric with at least 85% artificial staple fibres by total fibre mass; classification is a scope check and not the canonical PCR identity |
| recursive_input_rule | Purchased greige or partly finished fabric within the same category is recorded once as an upstream product input with a separate upstream dataset; its earlier production is not recursively rebuilt inside the receiving process |
| upstream_dataset_requirement | Link representative upstream datasets for fibre, yarn, sizing chemicals, water, electricity, fuels, other process chemicals, packaging, transport where included, and waste treatment |
| disclosure | Declare fibre type and composition, yarn origin, included unit operations, greige or finished state, wet-processing route, allocation choices, excluded operations, cut-offs, recycled-content claims, and whether utilities or treatment are on-site or supplied externally |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | Foreground start | Begin at documented receipt of spun yarn; model fibre and yarn manufacture as upstream datasets rather than silently omitting them. | `eu-pef-method-2021` |
| `boundary_process_completeness` | Foreground operations | Include yarn preparation, warping, weaving, inspection, and every conditional sizing or finishing operation actually required to reach the declared saleable fabric state. | `eu-jrc-textiles-bref-2023`; `zhang-et-al-2023-wet-processing` |
| `boundary_recursive_input` | Same-category intermediate fabric | Stop recursive foreground expansion at a purchased same-category fabric input and require a distinct upstream dataset and supplier-state disclosure. | `eu-pef-method-2021` |
| `boundary_environmental_flows` | Inputs and outputs | Inventory material, water, energy, chemical, wastewater, waste-gas, and solid-waste flows at process level where relevant; disclose any excluded flow and its justification. | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-conclusions-2022`; `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_warping` | Yarn acceptance, preparation, and warping | required | Always included from incoming yarn receipt through production of warp beams and prepared weft yarn | Foreground material preparation | kg prepared yarn delivered to weaving |
| `sizing` | Warp sizing and drying | conditional | Include when size is applied to warp yarn at the reporting facility | Foreground yarn protection for weaving | kg sized warp yarn |
| `weaving` | Loom weaving and fabric inspection | required | Always included | Foreground fabric formation | kg inspected greige woven fabric |
| `wet_pretreatment_and_finishing` | Desizing, washing, dyeing, printing, coating, or functional finishing | conditional | Include each operation performed on-site or under operational control to reach the declared market state | Foreground finishing | kg saleable finished fabric |

### Process: Yarn acceptance, preparation, and warping (`yarn_preparation_and_warping`)

#### Inputs

##### Product flows

###### Artificial staple-fibre yarn (`incoming_yarn`)

Record the accepted non-retail artificial staple-fibre yarn entering the foreground. Any minor-fibre yarn must be added as its own atomic card with its actual identity.

- Selected flow: Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass of accepted yarn consumed by the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Electricity for winding and warping (`preparation_electricity`)

Record submetered electricity or an allocated facility-meter value for yarn handling, winding, and warping equipment.

- Selected flow: Electricity, medium voltage, declared grid; exact Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: measured or meter-allocated electricity used during the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Textile yarn lubricating oil (`warping_lubricant`)

Record the actual lubricating-oil formulation deliberately applied during yarn preparation or warping. Add any antistatic formulation as a separate atomic card.

- Selected flow: Textile yarn lubricating oil, declared formulation; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured issue quantity less documented return quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-jrc-textiles-bref-2023`

##### Waste flows

No waste flow is expected as an input to this process unless recovered yarn is deliberately reintroduced; if used, record it as a separate product or waste input according to its legal and physical status.

##### Elementary flows

No category-specific elementary input is prescribed. Site-specific resource inputs that cross the environment boundary must still be recorded.

#### Outputs

##### Product flows

###### Prepared warp beams and weft yarn (`prepared_yarn_output`)

Record the mass of prepared yarn transferred to sizing or directly to weaving; reconcile the output with incoming yarn, retained work-in-progress, and losses.

- Selected flow: Prepared artificial staple-fibre yarn; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated from measured transfer mass and lot-level work-in-progress change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Waste artificial staple-fibre yarn (`preparation_yarn_waste`)

Measure artificial staple-fibre yarn ends and damaged yarn packages that leave the process as waste.

- Selected flow: Waste artificial staple-fibre yarn; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste leaving the process, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Waste paperboard yarn core (`preparation_paper_core_waste`)

Measure discarded paperboard yarn cores separately from yarn and plastic waste.

- Selected flow: Waste paperboard yarn core; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass dispatched as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Waste polyethylene packaging film (`preparation_plastic_film_waste`)

Measure discarded polyethylene film separately from paperboard and yarn waste.

- Selected flow: Waste polyethylene packaging film; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass dispatched as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Uncaptured fibre dust to air (`preparation_dust_to_air`)

Record direct dust emissions only when they cross the site boundary to air; captured dust remains a waste flow.

- Selected flow: Particles (PM10) to air, site emission compartment; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated value from a documented control-device mass balance or approved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg prepared yarn output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-textiles-bref-2023`

### Process: Warp sizing and drying (`sizing`)

#### Inputs

##### Product flows

###### Prepared warp yarn (`prepared_warp_input`)

Record the measured mass of warp yarn entering sizing and retain the link to its preparation lot.

- Selected flow: Prepared artificial staple-fibre warp yarn; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering sizing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Polyvinyl alcohol sizing agent (`polyvinyl_alcohol_size`)

Record polyvinyl alcohol only when it is an actual component of the warp-size recipe. Each other size component or auxiliary requires a separate atomic card.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass / kg
- Amount rule: measured recipe issue less recovered and returned quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Process water for sizing (`sizing_water`)

Record metered fresh, reused, and recycled water separately and avoid double counting recovered size liquor.

- Selected flow: Process water; exact Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered water delivered to sizing solution preparation, machine cleaning, and associated operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-textiles-bref-2023`

###### Electricity for sizing (`sizing_electricity`)

Record electricity for size preparation, pumps, sizing machines, and electrically heated or driven equipment.

- Selected flow: Electricity, medium voltage, declared grid; exact Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented allocation from electricity meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Steam for sizing and drying (`sizing_steam`)

Record purchased or internally transferred steam delivered to the sizing process.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered steam mass or calculated mass from calibrated condensate and documented losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Natural gas for direct sizing heat (`sizing_natural_gas`)

Record natural gas only when it is combusted for heat used by sizing or drying; do not combine it with steam.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured fuel volume converted to mass using documented gas conditions and density, or direct fuel-mass records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`

##### Waste flows

No waste input is prescribed. Recovered size returned from an external treatment system must be recorded separately with its upstream treatment dataset.

##### Elementary flows

Record site-specific water abstraction as an elementary input only when it is not represented by a supplied water product flow.

#### Outputs

##### Product flows

###### Sized warp yarn (`sized_warp_output`)

Record the conditioned mass transferred to weaving and calculate size add-on from dry yarn and sized-yarn records.

- Selected flow: Sized artificial staple-fibre warp yarn; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: calculated conditioned mass transferred to weaving
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Warp sizing wastewater (`sizing_wastewater`)

Record sizing wastewater sent to treatment after subtracting documented internal reuse. Concentrated spent liquor is a separate card.

- Selected flow: Warp sizing wastewater `33617934-f2c0-4016-bb14-264de8396a2c`
- Flow property / unit: Mass / kg
- Amount rule: metered discharge volume multiplied by measured or documented density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-textiles-bref-2023`

###### Spent polyvinyl-alcohol sizing liquor (`spent_sizing_liquor`)

Record a separately collected concentrated PVA sizing liquor only when it leaves the process independently from wastewater.

- Selected flow: Spent polyvinyl-alcohol sizing liquor; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass sent to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-textiles-bref-2023`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`sizing_nmvoc_to_air`)

Record NMVOC emitted from sizing and drying when measured or calculated from collected activity data. Other emitted substances require separate atomic cards.

- Selected flow: Non-methane volatile organic compounds to air, unspecified `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated value from fuel use and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg sized warp output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-textiles-bref-2023`

### Process: Loom weaving and fabric inspection (`weaving`)

#### Inputs

##### Product flows

###### Artificial staple-fibre weaving yarn (`weaving_yarn_input`)

Record the aggregate mass of the same exact artificial staple-fibre yarn flow issued as warp and weft. Different yarn compositions require separate cards.

- Selected flow: Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- Flow property / unit: Mass / kg
- Amount rule: measured yarn issued to looms adjusted for work-in-progress change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg inspected greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Loom electricity (`weaving_electricity`)

Record loom, compressed-air, local ventilation, and inspection electricity by submeter where possible.

- Selected flow: Electricity, medium voltage, declared grid; exact Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered or documented meter-allocated electricity for the weaving lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg inspected greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Loom lubricant (`loom_lubricant`)

Record lubricants deliberately consumed by loom and compressed-air systems and distinguish recovered waste oil.

- Selected flow: Textile loom lubricating oil, declared formulation; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued quantity less returned stock, allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg inspected greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-jrc-textiles-bref-2023`

##### Waste flows

No waste input is prescribed. Internally reused yarn ends must remain visible in the mass balance rather than being counted as a new virgin input.

##### Elementary flows

No category-specific elementary input is prescribed for the mechanical weaving step.

#### Outputs

##### Product flows

###### Inspected greige woven fabric (`greige_fabric_output`)

Record conditioned saleable greige mass after inspection. This row is the reference output only when no later finishing process is included.

- Selected flow: Woven fabrics of artificial staple fibres, containing 85% or more by weight of artificial staple fibres `7037e578-630a-4ba2-8768-7858df8a46aa`
- Flow property / unit: Mass / kg
- Amount rule: measured net saleable greige fabric mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference fabric when weaving is the last included process
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`

##### Waste flows

###### Waste artificial staple-fibre yarn (`weaving_yarn_waste`)

Record yarn ends that leave weaving as waste, excluding material returned internally to the same process.

- Selected flow: Waste artificial staple-fibre yarn; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the weaving process, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg inspected greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Waste woven artificial staple-fibre fabric (`weaving_fabric_waste`)

Record selvedge and off-grade greige fabric that leave weaving as waste separately from yarn waste.

- Selected flow: Waste woven artificial staple-fibre fabric; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the weaving process, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg inspected greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Uncaptured weaving dust to air (`weaving_dust_to_air`)

Record direct particulate emissions only when relevant and measured or calculable from site evidence.

- Selected flow: Particles (PM10) to air, site emission compartment; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculated value from a documented collection-system mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg inspected greige fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Wet pretreatment and finishing (`wet_pretreatment_and_finishing`)

#### Inputs

##### Product flows

###### Greige woven fabric (`finishing_fabric_input`)

Record the conditioned greige mass and link it to the weaving lot or supplier dataset.

- Selected flow: Greige woven fabric of artificial staple fibres; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the included finishing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Wet-processing water (`finishing_water`)

Record fresh, reused, and recycled water separately for desizing, washing, dyeing, printing, coating preparation, and cleaning.

- Selected flow: Process water; exact Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered gross water input by included wet process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-textiles-bref-2023`

###### Sodium hydroxide (`sodium_hydroxide`)

Record industrial-grade sodium hydroxide only when it is actually used in pretreatment or finishing; disclose supplied purity.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured recipe issue less recovered and returned quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Hydrogen peroxide solution (`hydrogen_peroxide_solution`)

Record one supplied hydrogen peroxide solution and its actual concentration when it is used; do not aggregate different concentrations.

- Selected flow: Hydrogen peroxide solution, declared concentration; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured recipe issue less recovered and returned quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Reactive dye formulation (`reactive_dye`)

Record one reactive-dye formulation per card with trade name, Colour Index identity, concentration, and recipe function.

- Selected flow: Reactive dye formulation, declared Colour Index identity; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured recipe issue less recovered and returned quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Sodium chloride (`sodium_chloride`)

Record sodium chloride separately when used as dyeing electrolyte.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass / kg
- Amount rule: measured recipe issue less recovered and returned quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Electricity for wet processing and finishing (`finishing_electricity`)

Record electricity for baths, pumps, dryers, stenters, curing, and abatement equipment.

- Selected flow: Electricity, medium voltage, declared grid; exact Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented electricity-meter allocation by included finishing process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Steam for wet processing and finishing (`finishing_steam`)

Record purchased or internally transferred steam separately from electricity and fuels.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered steam mass or calculated mass from calibrated condensate and documented losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Natural gas for direct finishing heat (`finishing_natural_gas`)

Record natural gas only when it is combusted for direct heating, drying, stentering, curing, or abatement.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured fuel volume converted to mass using documented gas conditions and density, or direct fuel-mass records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-textiles-bref-2023`

##### Waste flows

No waste input is prescribed. Off-site recovered chemical or water inputs must carry a linked recovery dataset.

##### Elementary flows

Record direct water abstraction or other natural-resource inputs when they cross the environment boundary rather than a supplied-product boundary.

#### Outputs

##### Product flows

###### Saleable finished woven fabric (`finished_fabric_output`)

Record conditioned net saleable mass after all included finishing and inspection. This row is the reference output when any finishing process is included.

- Selected flow: Woven fabrics of artificial staple fibres, containing 85% or more by weight of artificial staple fibres `7037e578-630a-4ba2-8768-7858df8a46aa`
- Flow property / unit: Mass / kg
- Amount rule: measured net saleable finished fabric mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`

##### Waste flows

###### Finishing wastewater (`finishing_wastewater`)

Record wastewater volume by stream, process origin, direct or indirect discharge route, reuse, and relevant measured pollutant parameters.

- Selected flow: Textile finishing wastewater; exact Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: metered discharge after subtracting documented reuse and recycled water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-jrc-textiles-bref-2023`

###### Textile wastewater-treatment sludge (`finishing_sludge`)

Measure dewatered sludge arising from treatment of the included textile wastewater and retain dry-matter and hazardous-status evidence.

- Selected flow: Textile wastewater-treatment sludge; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured waste leaving the included finishing operations, net of documented recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Off-grade woven artificial staple-fibre fabric (`offgrade_finished_fabric`)

Measure off-grade finished fabric sent to recovery or treatment separately from sludge and wastewater.

- Selected flow: Off-grade woven artificial staple-fibre fabric; exact Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured net mass leaving the included finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-textiles-bref-2023`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`finishing_nmvoc_to_air`)

Record NMVOC emitted from drying, stentering, curing, or other finishing steps when measured or calculated from collected activity data. Other emitted substances require separate atomic cards.

- Selected flow: Non-methane volatile organic compounds to air, unspecified `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured concentration times measured flow, or calculated value from collected fuel or chemical use and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable finished fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-textiles-bref-2023`

Every additional site-relevant fuel, chemical formulation, packaging component, waste stream, or elementary emission must be represented by its own card with a unique `row_id`, one selected flow, and the actual foreground collection protocol. Do not reuse a listed UUID when the direct-read identity, grade, concentration, geography, state, or compartment does not match.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared processes and utilities | Avoid allocation where possible by submetering, lot tracking, temporal subdivision, or physical separation of processes and utility systems. | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_physical_relation` | Unavoidable multifunctionality | When subdivision or system expansion is not practicable, allocate inputs and outputs using a documented causal physical relationship, such as machine time, metered energy, bath volume, or mass throughput, that represents resource use. | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_other_relation` | No defensible physical relation | Use another documented relationship, including economic allocation only as a last resort, and report the factor, prices, period, currency, and sensitivity to the choice. | `eu-pef-method-2021`; `iso-14044-2006` |
| `allocation_recycling_and_waste` | Internal reuse and saleable textile residues | Do not double count internally reused yarn, size, water, or fabric. Record recovered material once, disclose whether it remains waste or becomes a co-product, and link any off-site recycling or treatment dataset. | `eu-jrc-textiles-bref-2023`; `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `yarn_preparation_and_warping`; `sizing`; `weaving`; `wet_pretreatment_and_finishing` | Yarn, intermediate fabric, work-in-progress, and losses | Scale records, material issue and return records, production reports | lot_id, material_id, fibre_composition, warp_or_weft, opening_mass, issued_mass, returned_mass, transfer_mass, closing_wip_mass, moisture_state | Calibrated scales reconciled to stores and lot production records | kg | Each lot with monthly reconciliation | At least 12 representative months or the full campaign when shorter | All facilities and outsourced operations under operational control | Sum by lot and process; normalize to net saleable reference output; retain work-in-progress adjustments | Scale calibration, supplier composition certificate, signed stock reconciliation, anomaly log |
| `cp_product_output` | `weaving`; `wet_pretreatment_and_finishing` | Saleable reference fabric | Final scale and inspection records | lot_id, gross_mass, excluded_packaging_mass, net_mass, width, area, mass_per_area, moisture_state, quality_grade, rejection_mass | Calibrated final weighing after declared conditioning and inspection | kg | Each roll or lot | Full reporting period | Every producing site | Sum net saleable output; select only one final process as quantitative reference | Scale calibration, inspection release, roll register, moisture or conditioning record |
| `cp_energy_records` | All included processes | Electricity, steam, and fuel | Submeters, utility invoices, boiler and fuel logs | meter_id, carrier, opening_reading, closing_reading, conversion_factor, allocation_driver, process_id, operating_hours | Direct metering preferred; otherwise documented allocation from a complete facility balance | kWh, MJ, kg fuel, or m3 fuel | Continuous or per batch; reconcile monthly | At least 12 representative months or full campaign | All included production and utility systems | Difference meter readings; subtract exported energy; allocate shared use only under section 7 | Meter calibration, invoices, fuel lower-heating-value source, reconciliation |
| `cp_chemical_records` | `yarn_preparation_and_warping`; `sizing`; `weaving`; `wet_pretreatment_and_finishing` | Lubricants, sizing agents, dyes, and auxiliaries | Recipes, issue and return logs, stock records, safety and technical data sheets | chemical_id, trade_name, function, formulation_mass, concentration, issue_mass, return_mass, recovered_mass, batch_id | Weighed automatic dosing or reconciled stores issue | kg formulated product and kg active substance when known | Each batch with monthly stock reconciliation | Full reporting period | All included processes and contractors | Net use equals issued plus opening stock minus returned, recovered, and closing stock; retain formulation and active-substance views | Calibrated dosing record, recipe authorization, SDS/TDS, stock reconciliation |
| `cp_water_and_wastewater` | `sizing`; `wet_pretreatment_and_finishing` | Fresh, reused, recycled water and wastewater | Water meters, bath logs, discharge meters, laboratory results | source_or_stream, meter_id, volume, reuse_volume, temperature, process_id, discharge_route, sampling_time, concentration_by_parameter | Direct flow metering and representative compliant sampling at relevant stream locations | m3 and parameter-specific concentration units | Continuous or each batch; pollutant sampling at permit or method frequency | At least 12 representative months or full campaign | All included wet processes and treatment interfaces | Build process-level water balance; report gross intake, internal reuse, discharge, and pollutant mass separately | Meter calibration, sampling chain of custody, laboratory accreditation, water-balance closure |
| `cp_waste_records` | All included processes | Yarn, fabric, packaging, spent liquor, sludge, and waste oil | Weighbridge tickets, container weights, transfer notes | waste_id, material, process_origin, gross_mass, tare_mass, net_mass, hazardous_status, internal_reuse, treatment_route, destination | Direct weighing at generation or dispatch | kg | Each movement with monthly reconciliation | Full reporting period | All included processes | Sum net mass by type and route; subtract internal reuse only once | Calibrated scale, licensed transfer documentation, receiver evidence, stock reconciliation |
| `cp_direct_emissions` | All included processes | Direct air and water elementary flows | Stack tests, continuous monitors, flow meters, laboratory data, fuel and chemical records | substance, compartment, concentration, flow_rate, duration, control_status, method, detection_limit, factor_source | Measured concentration and flow preferred; otherwise calculation from collected activity data and a documented factor | kg substance and source measurement units | At applicable monitoring frequency and whenever recipes or controls materially change | Representative normal operation and disclosed abnormal periods | Every relevant emission point | Emission mass equals concentration times flow and time, or collected activity times documented factor; avoid duplication with waste-to-treatment flows | Accredited method, calibration, detection-limit treatment, operating-state record, factor reference |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | normalized amount = reporting-period amount divided by net kg of saleable reference fabric from the selected final process | Collected flow amount; `cp_product_output` net saleable mass | Amount per 1 kg reference fabric | `eu-pef-method-2021` |
| `calc_fibre_composition` | Product category membership | artificial staple fibre percentage = artificial staple-fibre mass divided by total fibre mass times 100; use the applicable ISO 1833 preparation and calculation basis for analytical results and exclude non-fibrous matter as that method requires | Supplier certificates, bill of materials, ISO 1833 test result | Verified fibre composition percentage | `un-cpc-3-0-2025`; `iso-1833-1-2020` |
| `calc_material_balance` | Each process and production lot | opening inventory plus inputs equals outputs plus closing inventory plus recorded losses; investigate unexplained residuals rather than assigning them automatically | `cp_material_mass_balance`; `cp_waste_records`; `cp_product_output` | Process mass-balance report and residual | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-conclusions-2022` |
| `calc_area_mass` | Area-only roll records | fabric mass = measured area times lot-specific mass per unit area; use measured net mass when available | Area, width and length, measured mass per unit area | kg fabric |  |
| `calc_water_pollutant_mass` | Wastewater pollutants | pollutant mass = measured wastewater volume times representative concentration, with unit conversion and sampling coverage disclosed | `cp_water_and_wastewater` volume and concentration | kg pollutant per reporting period and per kg reference fabric | `eu-jrc-textiles-bref-2023` |
| `calc_shared_utility_allocation` | Shared utilities | allocate only the unmetered residual using the documented physical driver most closely related to consumption; reconcile allocated totals to the facility meter | Facility meter, submeters, operating hours, machine load, throughput | Process-level utility amount | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and yarn inputs | Retain exact flow identities where resolved, fibre type, composition, lot, supplier, and production-route qualifiers; unresolved inventory UUID candidates must be reviewed before activation. | Tiangong exact reference-flow readback, supplier certificates, lot records |
| `dq_temporal` | Foreground activity data | Use a representative continuous 12-month period where production is ongoing, or the full campaign for shorter production; disclose shutdowns, abnormal batches, and seasonality. | Reporting-period coverage table and production log |
| `dq_technology` | Process and energy data | Match loom type, sizing system, wet-processing route, drying or curing equipment, abatement, and recycled-water configuration to the represented product. | Equipment register, process flow sheet, recipe and control records |
| `dq_geography` | Utilities and upstream datasets | Use the actual production geography and representative electricity, fuel, water, yarn, chemical, transport, and treatment datasets; document proxies. | Site address, supplier location, dataset metadata and proxy log |
| `dq_completeness` | Process inventory | Reconcile material, water, energy, chemical, wastewater, direct-emission, and waste records at process level; disclose exclusions and missing measurements. | Input-output inventory and reconciliation reports consistent with JRC BAT 2 and BAT 6 and the ISO 14044 inventory-analysis requirements |
| `dq_precision` | Measurements and calculations | Preserve meter resolution, calibration, sampling frequency, detection limits, formula inputs, allocation factors, and uncertainty or variability across lots. | Calibration records, laboratory reports, calculation workbook and anomaly log |
| `dq_consistency` | Multi-site or multi-product datasets | Apply identical reference state, units, process boundaries, allocation hierarchy, and calculation rules across sites and periods; document any deviation. | Method statement and cross-site consistency review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require product flow UUID `7037e578-630a-4ba2-8768-7858df8a46aa`, Mass flow property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validate_composition_threshold` | Category scope | Fail category conformance when artificial staple fibres are less than 85% of total fibre mass or the fibre denominator and applicable ISO 1833 test basis are not documented. | `un-cpc-3-0-2025`; `iso-1833-1-2020` |
| `validate_required_qualifiers` | Dataset metadata | Require all section 3 qualifiers, including fibre type, composition, construction, finished state, mass per unit area, moisture state, geography, and period. |  |
| `validate_mass_balance` | Foreground processes | Require a documented mass balance for every included process and investigate any unexplained residual before accepting the dataset. | `eu-jrc-textiles-bref-2023` |
| `validate_process_coverage` | Process map | Require both required processes and every conditional process actually used to reach the declared market state; reject a finished-fabric claim that omits performed finishing operations. | `eu-jrc-textiles-bref-2023` |
| `validate_inventory_and_quality` | Foreground inventory | Require process-level water, energy, material, chemical, wastewater, waste-gas, and solid-waste coverage where relevant, with temporal, technological, geographical, completeness, and precision evidence. | `eu-jrc-textiles-bref-2023`; `eu-pef-method-2021` |
| `validate_quantitative_reference` | Final output | Exactly one output row, `greige_fabric_output` or `finished_fabric_output`, must be selected as the 1 kg quantitative reference according to the declared final market state. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a declared woven artificial staple-fibre fabric and route |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and translation review |
| allowed_use | Cradle-to-gate or broader LCA models requiring representative factory-gate woven fabric with at least 85% artificial staple fibres, when geography, technology, composition, construction, and finish match |
| excluded_use | Synthetic-staple-fibre fabrics; fabrics below the 85% threshold; knitted, non-woven, tufted, special, or made-up textiles; use as a generic garment dataset; use without matching the declared finish and production route |
| required_metadata | PCR id and version when published; product-flow UUID; fibre type and composition; yarn origin; weave, width and mass per unit area; greige or finished state; included operations; geography; period; technology; allocation; upstream datasets; data owners; review status |
| required_quality_disclosure | Primary-data share; meter and sampling coverage; mass-, water-, and energy-balance closure; temporal, technological, and geographical representativeness; completeness; precision; proxies; allocation factors; cut-offs; unresolved UUIDs |
| update_trigger | Change in dominant artificial fibre type, fibre composition crossing the 85% threshold, yarn source, loom or sizing technology, finish recipe, water or energy system, production geography, allocation method, emission controls, or material evidence and UUID resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 26750, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Official category label and the 85% artificial-staple-fibre scope threshold |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-11) | Warping, sizing, weaving, and finishing process decomposition; input-output inventories; water, energy, chemical, wastewater, air-emission, and waste collection requirements |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional-unit and foreground-data framing, allocation hierarchy, normalization, and technological, geographical, temporal, completeness, and precision requirements |
| `eu-textiles-bat-conclusions-2022` | official_guidance | European Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, CELEX 32022D2508, https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng (retrieved 2026-08-12) | BAT 2 input-output inventory and BAT 6 annual, preferably direct, process-level monitoring of water, energy, materials, wastewater, recovered materials, and wastes |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | Goal and scope, life-cycle inventory analysis, allocation, interpretation, reporting, and critical-review framing |
| `iso-1833-1-2020` | standard | ISO 1833-1:2020, Textiles — Quantitative chemical analysis — Part 1: General principles of testing, https://www.iso.org/standard/74881.html (retrieved 2026-08-12) | Common preparation and calculation basis for quantitative fibre-composition analysis; use the applicable mixture-specific ISO 1833 part for the declared blend |
| `zhang-et-al-2023-wet-processing` | literature | Zhang, S. et al., Environmental assessment of fabric wet processing from gate-to-gate perspective: Comparative study of weaving and materials, Science of the Total Environment 857 (2023) 159495, https://doi.org/10.1016/j.scitotenv.2022.159495 | Peer-reviewed full-text evidence for treating pretreatment, dyeing, washing, and finishing as distinct wet-processing contributors and for collecting primary energy, water, chemical, wastewater, and direct-emission inventories |
