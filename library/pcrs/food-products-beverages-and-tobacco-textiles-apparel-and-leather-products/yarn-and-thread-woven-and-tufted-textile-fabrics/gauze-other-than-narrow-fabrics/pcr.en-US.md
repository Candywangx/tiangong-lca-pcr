---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.gauze-other-than-narrow-fabrics
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Gauze (other than narrow fabrics)

## 1. Scope and Applicability

This PCR covers the factory-gate production of gauze fabric in the piece whose woven construction has standing or ground warp threads and crossing or doup warp threads that turn around those threads to form loops through which weft threads pass. The saleable fabric must be wider than 30 cm and must not meet a narrower product identity that belongs to medical dressings, made-up articles, nonwovens, knitted or crocheted nets, lace, glass-fibre woven fabrics, coated or laminated fabrics classified elsewhere, or narrow woven fabrics. The construction and width rules follow `unsd-cpc-3-0-2025` and `eu-cn-gauze-narrow-fabric-1989`.

The foreground boundary begins with received warp and weft yarn and ends with net, dry, saleable gauze fabric at the manufacturing gate. It includes yarn preparation, conditional warp sizing, gauze weaving, route-specific wet preparation, bleaching or piece dyeing, drying or heat setting, inspection, rolling, packaging, on-site natural-gas steam generation when operated, and treatment of process wastewater when operated. Fibre production and yarn manufacture require upstream datasets. Distribution after the gate, conversion into bandages or other made-up articles, sterilisation, use, and end of life are outside the foreground boundary.

Greige, prepared, bleached and piece-dyed states are declared separately. Conditional routes are never averaged together merely because they produce the same mass of gauze. A data package shall declare fibre composition, weave construction, finished width, mass per unit area, finish state, dye or chemical formulation where applicable, loom technology, wet-processing route, thermal-supply route, wastewater route, site, reporting period and production lot coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.gauze-other-than-narrow-fabrics |
| classification_refs | CPC 3.0: 26860, Gauze (other than narrow fabrics), exact classification context |
| covered_products | Woven gauze fabric in the piece, wider than 30 cm, made with standing/ground and crossing/doup warp threads forming loops through which weft passes; greige, prepared, bleached or piece-dyed market states when their actual route is declared |
| excluded_products | Narrow woven fabrics at or below 30 cm as defined for the cited customs rule; tubular narrow fabrics; nonwovens; knitted or crocheted net; tulle and lace; glass-fibre woven fabrics; coated, impregnated, rubberised or laminated fabrics classified elsewhere; cut, folded, impregnated, medicated, sterilised or otherwise made-up medical gauze, bandages and dressings; garments and other made-up articles |
| representative_product | A roll of saleable woven gauze fabric, wider than 30 cm, with declared fibre composition, width, mass per unit area and finish state |
| production_route | Received yarn -> winding/warping/beaming -> conditional warp sizing -> gauze/leno weaving -> route-gated preparation, bleaching or piece dyeing -> route-gated drying/heat setting -> inspection/rolling -> packaging; on-site steam generation and wastewater treatment included only when operated |
| market_state | Dry saleable gauze fabric in rolls or folded lengths at the factory gate; packaging is inventoried but excluded from net reference-product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of woven gauze fabric in the piece, other than narrow fabric, with declared construction and finish state |
| How much | 1 kg net dry mass of saleable gauze fabric, excluding paperboard core, film, carton, pallet and all other packaging tare |
| How well | Standing/ground and crossing/doup warp construction with weft passing through the formed loops; finished width greater than 30 cm; declared fibre composition, mass per unit area, moisture/conditioning basis, colour and finish state; passes the producer's saleable quality specification |
| How long or cycle | One factory-gate delivery of the declared production lot; no use-stage service life is claimed |
| reference_flow_link | The reference amount below realizes this functional unit on a net-product-mass basis |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry saleable gauze fabric |
| Reference product flow | Woven gauze fabric, other than narrow fabric, dry and saleable at factory gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition; standing/ground and crossing/doup warp construction; finished width; mass per unit area; moisture or conditioning basis; greige/prepared/bleached/dyed state; colour; finishing formulation; loom technology; production geography; site; reporting period; lot coverage; packaging configuration |

The reference-product UUID remains unresolved. The Mass flow-property UUID, Units of mass unit-group UUID and kg reference unit are confirmed. The human-readable flow is intentionally exact and atomic; no broader cotton-fabric, medical-gauze or glass-fibre UUID may be substituted. Publication still requires an exact product-flow UUID confirmed by a new `state_code=100` direct read.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference gauze output | Mass | kg | Weigh saleable conditioned gauze and deduct paperboard core, film, carton, pallet and all other packaging tare; normalize all inventory to 1 kg net product. Retain gross, tare and net readings. |
| `fabric_width_identity` | Finished fabric width | Length | cm | Measure finished width across the usable fabric. This PCR requires width greater than 30 cm; fabric at or below 30 cm shall not be represented by this reference flow. `eu-cn-gauze-narrow-fabric-1989` |
| `area_mass_crosscheck` | Reference gauze output | Mass per area | g/m2 | Record conditioned mass per unit area, usable width and saleable length. Cross-check net mass against area multiplied by mass per area; investigate material disagreement rather than forcing equality. |
| `moisture_basis` | Yarn, intermediate and final textile masses | Mass | kg | Declare conditioning state or measured moisture basis and apply one consistent basis to input, output, loss and yield calculations. |
| `utility_units` | Electricity, thermal energy, steam, water and compressed air | Energy, mass or volume | kWh; MJ; kg; m3; Nm3 | Use calibrated meter or invoice units; document conversion factors, calorific-value basis, pressure/temperature basis for steam and standard conditions for compressed air. |
| `chemical_mass` | Each sizing, preparation, bleaching, dyeing and treatment chemical | Mass | kg | Record each purchased or internally prepared chemical constituent as a separate atomic exchange on as-used mass; separately document active concentration when a solution is purchased. |
| `emission_mass` | Direct air and water emissions | Mass | kg | Derive from measured concentration multiplied by measured standardized gas or effluent volume over the same period, or use a cited and disclosed method when direct measurement is unavailable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Warp and weft yarn received at the gauze-manufacturing site, with fibre composition, supplier, mass, moisture basis and upstream dataset references declared |
| starting_condition_role | Upstream product input to the foreground gauze-manufacturing system |
| product_classification_scope | Woven gauze fabric in the piece, CPC 3.0 26860 classification context; wider than 30 cm; not a made-up or medical article |
| recursive_input_rule | If purchased gauze of the same category is processed, record it as a separate upstream product input with its own dataset; do not silently merge its mass or upstream burdens with site-produced gauze |
| upstream_dataset_requirement | Fibre and yarn production, purchased electricity, purchased steam or heat, fuels, chemicals, water supply, packaging and external waste treatment require geographically and technologically representative upstream datasets |
| disclosure | Declare fibre and yarn origin, weave and width, finish-state route, outsourced operations, internal intermediate transfers, utility route, wastewater route, packaging tare, cut-off decisions, allocation decisions and unresolved data gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_yarn_to_gate` | foreground system | Include every operated step from yarn receipt through saleable gauze inspection/rolling and packaging, plus on-site utility generation and wastewater treatment; exclude fibre/yarn production from foreground but require upstream datasets. | `ifc-textile-ehs-2007`; `ec-ef-method-2021` |
| `boundary_route_gate` | conditional manufacturing routes | Include sizing, wet preparation, bleaching, dyeing, heat setting, direct-fired drying, on-site steam generation and wastewater treatment only when the declared lot actually uses the operation; preserve separate route totals and never average mutually exclusive states or technologies. | `jrc-textiles-bref-2023`; `ifc-textile-ehs-2007` |
| `boundary_packaging_tare` | reference output and packaging | Include packaging production and packaging losses in inventory, but exclude all packaging tare from the 1 kg reference-product mass. | `ec-ef-method-2021` |
| `boundary_outsourced_steps` | outsourced processing | Include an outsourced operation through a specific upstream process dataset and transport where it lies between received yarn and the declared gate; disclose that it is outsourced and avoid duplicating site utility or emission records. | `ec-ef-method-2021` |
| `boundary_post_gate_exclusion` | downstream stages | Exclude distribution after the factory gate, conversion into medical or made-up articles, sterilisation, use and end of life from this foreground package. | `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | Winding, warping and beaming | required | Every route using received yarn | Prepare full-width warp beam and weft supply for gauze weaving | kg prepared warp and weft supplied to weaving |
| `warp_sizing` | Warp sizing and drying | conditional | Include only when size is applied at the reporting site | Apply declared size formulation to protect warp during weaving | kg sized warp beam |
| `gauze_weaving` | Gauze/leno weaving | required | Every covered product | Interlace ground and crossing/doup warp with weft to produce greige gauze | kg greige gauze |
| `desizing_scouring` | Desizing, scouring, washing and neutralisation | conditional | Include when size or impurities are removed at the reporting site | Prepare greige gauze for sale or subsequent wet finishing | kg prepared gauze |
| `peroxide_bleaching` | Hydrogen-peroxide bleaching, washing and neutralisation | conditional | Include only for a declared peroxide-bleached route | Produce bleached gauze without averaging with greige or dyed routes | kg bleached gauze |
| `reactive_piece_dyeing` | Reactive piece dyeing, fixation and washing | conditional | Include only for a declared cellulosic route; instantiate one additional atomic exchange for every dye and auxiliary in the actual approved recipe rather than predeclaring an arbitrary dye identity | Produce declared dyed gauze | kg dyed gauze |
| `drying_heat_setting` | Mechanical dewatering, drying and conditional heat setting | conditional | Include after wet processing and whenever the declared route uses stentering or heat setting | Bring gauze to declared dry and dimensional state | kg dry finished gauze |
| `inspection_rolling_packaging` | Inspection, repair, trimming, rolling and packaging | required | Every route | Produce saleable net gauze and separately inventoried packaging | kg net saleable gauze |
| `thermal_supply` | On-site natural-gas steam generation | conditional | Include only when the site burns natural gas to supply steam within the foreground boundary; another boiler fuel requires its own separately reviewed route and atomic fuel and emission rows | Supply measured mill steam and record direct combustion exchanges | kg steam supplied |
| `wastewater_treatment` | On-site textile wastewater treatment and discharge | conditional | Include when process wastewater is treated and discharged by the reporting site | Treat combined measured textile wastewater without hiding individual upstream generating steps | m3 wastewater treated |

### Process: Winding, warping and beaming (`yarn_preparation`)

#### Inputs

##### Product flows

###### Warp yarn received (`warp_yarn`)

Received warp yarn crosses the site boundary and is prepared into ground and crossing/doup warp systems.

- Selected flow: Warp yarn for woven gauze
- Flow property / unit: Mass / kg
- Amount rule: Supplier- and lot-specific conditioned mass issued to yarn preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation`
- Sources: `ifc-textile-ehs-2007`

###### Weft yarn received (`weft_yarn`)

Received weft yarn crosses the site boundary and is prepared for insertion through the gauze warp loops.

- Selected flow: Weft yarn for woven gauze
- Flow property / unit: Mass / kg
- Amount rule: Supplier- and lot-specific conditioned mass issued to yarn preparation or directly to weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation`
- Sources: `ifc-textile-ehs-2007`

###### Electricity for winding and warping (`yarn_prep_electricity`)

Electricity powers winding, warping and beaming equipment.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or allocated main-meter electricity for yarn preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared warp and weft issued to weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared warp beam (`prepared_warp_beam`)

The full-width warp beam is the measured intermediate product passed to sizing or directly to weaving.

- Selected flow: Prepared warp beam for woven gauze
- Flow property / unit: Mass / kg
- Amount rule: Conditioned mass of warp yarn on the beam, excluding reusable beam hardware
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

###### Yarn preparation waste (`yarn_prep_waste`)

Broken, tangled and unusable yarn removed during winding, warping and beaming leaves the process as textile waste.

- Selected flow: Waste yarn from gauze yarn preparation
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste by lot, excluding yarn returned to the same process before normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_preparation`
- Sources: `ifc-textile-ehs-2007`

##### Elementary flows

### Process: Warp sizing and drying (`warp_sizing`)

#### Inputs

##### Product flows

###### Prepared warp beam entering sizing (`sizing_warp_beam_input`)

The prepared warp beam enters sizing only when the declared route applies size at the reporting site.

- Selected flow: Prepared warp beam for woven gauze
- Flow property / unit: Mass / kg
- Amount rule: Conditioned warp mass charged to the sizing range
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`

###### Corn-starch sizing agent (`corn_starch_size`)

Corn starch is recorded separately when it is an actual constituent of the applied warp-size formulation.

- Selected flow: Corn starch, sizing grade
- Flow property / unit: Mass / kg
- Amount rule: As-used starch mass from batch recipe and issue record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`

###### Polyvinyl-alcohol sizing agent (`pva_size`)

Polyvinyl alcohol is a distinct conditional exchange and is not combined with starch or other sizing agents.

- Selected flow: Polyvinyl alcohol, warp-sizing grade
- Flow property / unit: Mass / kg
- Amount rule: As-used PVA mass from batch recipe and issue record; zero only when confirmed absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`

###### Sizing process water (`sizing_water`)

Externally supplied make-up water added to the size preparation and application system is measured separately from cooling, domestic and internally recovered water.

- Selected flow: Process water for warp sizing
- Flow property / unit: Volume / m3
- Amount rule: Metered external make-up water supplied to sizing; report internally recovered water separately and do not add it to this product exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Electricity for sizing (`sizing_electricity`)

Electricity powers size preparation, pumps, drives and controls.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered sizing electricity or documented allocation from a common meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### Steam for sizing and drying (`sizing_steam`)

Steam transferred to the sizing range is one thermal product exchange; its upstream source is purchased steam or the conditional on-site thermal-supply process.

- Selected flow: Saturated steam supplied to warp sizing
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to size cooking and beam drying, with condensate treatment disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sized warp beam (`sized_warp_beam`)

The sized warp beam is transferred to gauze weaving with size add-on and dry mass recorded.

- Selected flow: Sized warp beam for woven gauze
- Flow property / unit: Mass / kg
- Amount rule: Conditioned mass of warp plus retained dry size, excluding reusable beam hardware
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

###### Sizing wastewater (`sizing_wastewater`)

Discarded size liquor and sizing-equipment wash water leave as a specific wastewater stream before treatment.

- Selected flow: Warp-sizing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or tank-volume-derived wastewater sent to treatment or external disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sized warp beam
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_sizing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Elementary flows

### Process: Gauze/leno weaving (`gauze_weaving`)

#### Inputs

##### Product flows

###### Warp beam for weaving (`weaving_warp_beam`)

One prepared or sized warp-beam product enters the loom; the route qualifier states whether sizing occurred.

- Selected flow: Warp beam for gauze weaving
- Flow property / unit: Mass / kg
- Amount rule: Conditioned warp mass issued to gauze looms
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `eu-cn-gauze-narrow-fabric-1989`; `ifc-textile-ehs-2007`

###### Weft yarn for weaving (`weaving_weft_yarn`)

Weft yarn is inserted through loops formed by the crossing/doup and ground warp systems.

- Selected flow: Weft yarn for woven gauze
- Flow property / unit: Mass / kg
- Amount rule: Conditioned weft mass issued to the gauze looms
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `eu-cn-gauze-narrow-fabric-1989`; `ifc-textile-ehs-2007`

###### Electricity for gauze weaving (`weaving_electricity`)

Electricity powers the loom, take-up, let-off, controls and local material handling.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered loom-area electricity or documented machine-power allocation over the same production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### Compressed air for air-jet weaving (`weaving_compressed_air`)

Compressed air is included only for an air-jet loom route and is not averaged with rapier, shuttle, projectile or water-jet routes.

- Selected flow: Compressed air at gauze mill
- Flow property / unit: Standard volume / Nm3
- Amount rule: Metered compressed air delivered to air-jet looms, with pressure and standard conditions declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige gauze from air-jet looms
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `ifc-textile-ehs-2007`

###### Water for water-jet weaving (`water_jet_water`)

Externally supplied make-up water is included only when a water-jet loom actually supplies the weft-insertion jet; internally recirculated water is disclosed separately.

- Selected flow: Process water for water-jet weaving
- Flow property / unit: Volume / m3
- Amount rule: Metered external make-up water supplied to water-jet looms; retain internally recirculated water as a separate raw field without adding it to this exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige gauze from water-jet looms
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven gauze (`greige_gauze`)

Greige gauze is the loom-state product with the required ground and crossing/doup warp construction.

- Selected flow: Greige woven gauze fabric, other than narrow fabric
- Flow property / unit: Mass / kg
- Amount rule: Conditioned mass leaving gauze looms before wet preparation or final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989`

##### Waste flows

###### Weaving textile waste (`weaving_textile_waste`)

Broken ends, loom start-up cloth, selvedge waste and unusable greige sections leave as one measured weaving-waste stream only when physically collected together.

- Selected flow: Gauze-weaving textile waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste removed from gauze looms and not returned to the same production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `ifc-textile-ehs-2007`

###### Water-jet loom wastewater (`water_jet_wastewater`)

Water discharged from water-jet weaving is a route-specific wastewater flow and is absent from dry-loom routes.

- Selected flow: Water-jet loom wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge from water-jet loom circulation and purge systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige gauze from water-jet looms
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `ifc-textile-ehs-2007`

##### Elementary flows

###### Particulate matter from weaving (`weaving_pm10`)

Measured textile dust emitted beyond capture equipment is recorded as a direct air emission, not as a product or waste flow.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack or room-exhaust measurement over the production period; include only releases crossing the environment boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gauze_weaving`
- Sources: `ifc-textile-ehs-2007`

### Process: Desizing, scouring, washing and neutralisation (`desizing_scouring`)

#### Inputs

##### Product flows

###### Greige gauze entering wet preparation (`prep_greige_gauze`)

Greige gauze enters only when the declared route removes size or natural and processing impurities at the reporting site.

- Selected flow: Greige woven gauze fabric, other than narrow fabric
- Flow property / unit: Mass / kg
- Amount rule: Conditioned mass charged to the desizing and scouring line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Process water for desizing and scouring (`prep_water`)

Externally supplied make-up process water for desizing, scouring, washing and neutralisation is measured at the line boundary; internally recovered water is tracked separately.

- Selected flow: Process water for textile wet preparation
- Flow property / unit: Volume / m3
- Amount rule: Metered external make-up water supplied to the line; retain internally recovered water as a separate raw field without adding it to this exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Steam for desizing and scouring (`prep_steam`)

Steam transferred to wet preparation is recorded separately from electricity and direct fuel.

- Selected flow: Saturated steam supplied to textile wet preparation
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to desizing, scouring and washing, with condensate return disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`

###### Electricity for desizing and scouring (`prep_electricity`)

Electricity powers bath circulation, washing, dosing, extraction and controls.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for the applicable wet-preparation campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### Sodium hydroxide for scouring (`prep_sodium_hydroxide`)

Sodium hydroxide is recorded as a separate chemical when used for alkaline scouring.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass calculated from batch issue and solution concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Amylase enzyme preparation for starch desizing (`prep_amylase_enzyme`)

An amylase enzyme preparation is recorded only when starch or modified-starch size is removed by the declared enzymatic-desizing route.

- Selected flow: Amylase enzyme preparation, textile desizing grade
- Flow property / unit: Mass / kg
- Amount rule: As-used enzyme-preparation mass from the approved recipe and issue record; retain enzyme activity and formulation concentration as quality evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared gauze from enzymatic starch desizing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Fatty-alcohol-ethoxylate surfactant (`prep_surfactant`)

The biodegradable nonionic surfactant is an atomic formulation constituent and is included only when present in the actual recipe.

- Selected flow: Fatty alcohol ethoxylate surfactant
- Flow property / unit: Mass / kg
- Amount rule: Active surfactant mass from formulation, concentration and batch issue record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Acetic acid for neutralisation (`prep_acetic_acid`)

Acetic acid is recorded separately when it neutralises residual alkali after scouring.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Active acetic-acid mass from batch issue and concentration record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared gauze (`prepared_gauze`)

Prepared gauze leaves after desizing, scouring, washing, neutralisation and mechanical water extraction.

- Selected flow: Prepared woven gauze fabric, wet
- Flow property / unit: Mass / kg
- Amount rule: Wet mass and separately determined dry textile mass transferred to sale finishing, bleaching or dyeing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Waste flows

###### Desizing and scouring wastewater (`prep_wastewater`)

Spent baths and wash water from wet preparation leave as a measured wastewater stream before treatment.

- Selected flow: Desizing and scouring wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge from applicable baths, washes and purges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry prepared gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desizing_scouring`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Elementary flows

### Process: Hydrogen-peroxide bleaching, washing and neutralisation (`peroxide_bleaching`)

#### Inputs

##### Product flows

###### Prepared gauze entering bleaching (`bleach_prepared_gauze`)

Prepared gauze enters this mutually gated route only when peroxide bleaching is declared.

- Selected flow: Prepared woven gauze fabric, wet
- Flow property / unit: Mass / kg
- Amount rule: Dry textile mass charged to the peroxide-bleaching line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Bleaching process water (`bleach_water`)

Externally supplied make-up water for bleaching, washing and neutralisation is measured independently of water used in preceding steps; internally recovered water is tracked separately.

- Selected flow: Process water for hydrogen-peroxide bleaching
- Flow property / unit: Volume / m3
- Amount rule: Metered external make-up water supplied to the bleaching line; retain internally recovered water as a separate raw field without adding it to this exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Steam for bleaching (`bleach_steam`)

Steam transferred to the bleaching line is recorded as one thermal product flow.

- Selected flow: Saturated steam supplied to hydrogen-peroxide bleaching
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to heating and washing, with condensate return disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`

###### Electricity for bleaching (`bleach_electricity`)

Electricity powers circulation, dosing, washing, extraction and controls.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for the peroxide-bleaching campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### Hydrogen peroxide (`bleach_hydrogen_peroxide`)

Hydrogen peroxide is the declared bleaching agent and is not combined with chlorine-based alternatives.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Active hydrogen-peroxide mass from purchased-solution concentration and batch issue record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Sodium hydroxide for peroxide bleaching (`bleach_sodium_hydroxide`)

Sodium hydroxide used to establish the bleaching bath alkalinity is measured separately.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass from concentration and batch issue record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`

###### Acetic acid after bleaching (`bleach_acetic_acid`)

Acetic acid is included when used for post-bleach neutralisation.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Active acetic-acid mass from concentration and batch issue record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bleached gauze (`bleached_gauze`)

Bleached gauze leaves the line with dry textile mass, residual moisture and whiteness specification recorded.

- Selected flow: Hydrogen-peroxide-bleached woven gauze fabric, wet
- Flow property / unit: Mass / kg
- Amount rule: Wet mass and separately determined dry textile mass transferred to drying or further finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Waste flows

###### Peroxide-bleaching wastewater (`bleach_wastewater`)

Spent bleaching bath, wash water and neutralisation rinse leave as a specific wastewater stream before treatment.

- Selected flow: Hydrogen-peroxide-bleaching wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge from the peroxide-bleaching and wash sequence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry bleached gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_peroxide_bleaching`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Elementary flows

### Process: Reactive piece dyeing, fixation and washing (`reactive_piece_dyeing`)

#### Inputs

##### Product flows

###### Gauze entering reactive dyeing (`dye_gauze_input`)

Prepared or bleached cellulosic gauze enters only when a reactive piece-dyed product state is declared.

- Selected flow: Prepared cellulosic woven gauze fabric, wet
- Flow property / unit: Mass / kg
- Amount rule: Dry textile mass charged to the declared dye lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Dyeing process water (`dye_water`)

Externally supplied make-up water for dye application, fixation and washing is measured for the declared dye lot; internally recovered water is tracked separately.

- Selected flow: Process water for reactive piece dyeing
- Flow property / unit: Volume / m3
- Amount rule: Metered external make-up water supplied to the dye bath and wash sequence; retain internally recovered water as a separate raw field without adding it to this exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Steam for reactive dyeing (`dye_steam`)

Steam transferred to dyeing and washing is separated from electricity and direct fuel.

- Selected flow: Saturated steam supplied to reactive piece dyeing
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to dyeing, fixation and washing, with condensate return disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`

###### Electricity for reactive dyeing (`dye_electricity`)

Electricity powers dosing, liquor circulation, washing, extraction and controls.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity for the declared reactive-dye campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### Sodium chloride for reactive dyeing (`dye_sodium_chloride`)

Sodium chloride is a distinct conditional electrolyte input and is never combined with dye or alkali.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: As-used sodium-chloride mass from recipe and batch issue record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`

###### Sodium carbonate for reactive dyeing (`dye_sodium_carbonate`)

Sodium carbonate is recorded separately when used to establish fixation alkalinity.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: As-used sodium-carbonate mass from recipe and batch issue record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reactive-dyed gauze (`dyed_gauze`)

Dyed gauze leaves with colour identity, shade, dry mass and residual moisture recorded.

- Selected flow: Reactive-dyed woven gauze fabric, wet
- Flow property / unit: Mass / kg
- Amount rule: Wet mass and separately determined dry textile mass transferred to drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Waste flows

###### Reactive-dyeing wastewater (`dye_wastewater`)

Spent dye bath, fixation liquor and wash water leave as a specific wastewater stream before treatment.

- Selected flow: Reactive piece-dyeing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge from dye application, fixation and washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dry dyed gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reactive_dyeing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Elementary flows

### Process: Mechanical dewatering, drying and conditional heat setting (`drying_heat_setting`)

#### Inputs

##### Product flows

###### Wet gauze entering drying (`drying_wet_gauze`)

Prepared, bleached or dyed wet gauze enters with route identity and dry textile mass preserved.

- Selected flow: Wet finished woven gauze fabric
- Flow property / unit: Mass / kg
- Amount rule: Wet mass entering mechanical extraction or drying, with dry textile mass separately determined
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry finished gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_finishing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Electricity for dewatering and drying (`drying_electricity`)

Electricity powers hydroextraction, drives, fans, controls and heat-setting equipment.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity over the applicable drying and heat-setting campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry finished gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_finishing`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### Steam for indirect textile drying (`drying_steam`)

Steam is recorded only when an indirect steam-heated dryer or stenter supplies heat to the declared route; it is not combined with direct-fired natural gas or another heat carrier.

- Selected flow: Saturated steam supplied to indirect textile drying
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to the applicable dryer or stenter, with pressure, temperature and condensate return disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry finished gauze from indirect steam drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_finishing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Natural gas for direct-fired drying (`drying_natural_gas`)

Natural gas crosses the foreground boundary only when a direct-fired dryer or stenter burns gas in this process; purchased heat and on-site steam are recorded through their own routes.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered gas volume converted with supplier net calorific value for the direct-fired equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry finished gauze from direct-fired drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_finishing`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dry finished gauze (`dried_gauze`)

Dry finished gauze leaves with conditioned net mass, width, mass per area and finish state measured.

- Selected flow: Dry finished woven gauze fabric, other than narrow fabric
- Flow property / unit: Mass / kg
- Amount rule: Conditioned dry mass transferred to inspection and rolling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dry finished gauze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_finishing`
- Sources: `unsd-cpc-3-0-2025`; `ifc-textile-ehs-2007`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from direct-fired drying (`drying_co2_fossil`)

Fossil carbon dioxide released by direct natural-gas combustion is recorded only for the direct-fired route.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculated from metered natural-gas carbon content using a disclosed method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry finished gauze from direct-fired drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_finishing`
- Sources: `ifc-textile-ehs-2007`

###### Nitrogen oxides from direct-fired drying (`drying_nox`)

Nitrogen oxides released to air are kept separate from carbon dioxide and other stack emissions.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack concentration multiplied by standardized dry-gas volume over the production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dry finished gauze from direct-fired drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_finishing`
- Sources: `ifc-textile-ehs-2007`

### Process: Inspection, repair, trimming, rolling and packaging (`inspection_rolling_packaging`)

#### Inputs

##### Product flows

###### Gauze entering final finishing (`finish_gauze_input`)

Greige or dry finished gauze enters final inspection with route identity preserved.

- Selected flow: Woven gauze fabric entering final inspection
- Flow property / unit: Mass / kg
- Amount rule: Conditioned textile mass entering inspection and rolling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989`

###### Electricity for inspection and packaging (`finish_electricity`)

Electricity powers inspection tables, repair equipment, rolling, cutting and packaging machinery.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment allocation over the same saleable-output period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `ec-ef-method-2021`

###### Paperboard roll core (`paperboard_core`)

The roll core is inventoried as packaging but excluded from net reference-product mass.

- Selected flow: Paperboard roll core
- Flow property / unit: Mass / kg
- Amount rule: Weighed purchased cores consumed, net of reusable cores returned within the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `ec-ef-method-2021`

###### Low-density polyethylene packaging film (`ldpe_film`)

Primary or secondary LDPE film used for roll protection is one packaging-material exchange.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Packaging-film issue mass attributed to the declared saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `ec-ef-method-2021`

###### Corrugated-board shipping box (`corrugated_board`)

Corrugated board is included only when the declared delivery configuration uses boxes.

- Selected flow: Corrugated paperboard box
- Flow property / unit: Mass / kg
- Amount rule: Weighed boxes consumed for the declared output, excluding reusable transport packaging tracked separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `ec-ef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable gauze reference output (`reference_gauze_output`)

This is the exact unresolved reference product flow; packaging tare is measured but not included in its mass.

- Selected flow: Woven gauze fabric, other than narrow fabric, dry and saleable at factory gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net conditioned gauze mass after subtracting core, film, carton, pallet and other packaging tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989`

##### Waste flows

###### Off-specification gauze waste (`offspec_gauze_waste`)

Rejected or trimmed gauze that is not returned to the same lot leaves as a measured textile waste.

- Selected flow: Off-specification woven gauze waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected and trimmed gauze by disposition route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `ec-ef-method-2021`

###### LDPE packaging scrap (`ldpe_packaging_scrap`)

Film offcuts and rejected film leave as a separate polymer waste stream.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed film scrap sent to reuse, recycling, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `ec-ef-method-2021`

###### Paperboard packaging scrap (`paperboard_packaging_scrap`)

Rejected cores and corrugated-board offcuts leave as a separate paperboard waste stream.

- Selected flow: Waste paperboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Weighed paperboard scrap sent to reuse, recycling, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable gauze
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_finishing_packaging`
- Sources: `ec-ef-method-2021`

##### Elementary flows

### Process: On-site natural-gas steam generation (`thermal_supply`)

#### Inputs

##### Product flows

###### Natural gas for the steam boiler (`boiler_natural_gas`)

Natural gas enters only when an on-site boiler supplies foreground steam; purchased steam excludes this internal fuel row.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered boiler gas converted with supplier net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_supply`
- Sources: `ifc-textile-ehs-2007`; `ec-ef-method-2021`

###### Boiler make-up water (`boiler_feedwater`)

Externally supplied boiler make-up water is the product exchange; returned condensate is an internal loop quantity retained separately in the raw records.

- Selected flow: Boiler make-up water
- Flow property / unit: Volume / m3
- Amount rule: Metered external make-up water supplied to the boiler; disclose returned condensate separately and do not add it to this exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_supply`
- Sources: `ifc-textile-ehs-2007`

###### Boiler electricity (`boiler_electricity`)

Electricity powers boiler fans, pumps, controls and water preparation.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered boiler-house electricity over the steam-production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_supply`
- Sources: `ec-ef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mill steam (`mill_steam`)

Steam supplied internally is the measured product passed to sizing and wet-processing users.

- Selected flow: Saturated steam at gauze mill
- Flow property / unit: Mass / kg
- Amount rule: Metered delivered steam, with pressure, temperature and condensate-return basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_supply`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

###### Boiler blowdown wastewater (`boiler_blowdown`)

Boiler blowdown leaves as a specific utility wastewater stream before treatment or discharge.

- Selected flow: Natural-gas-boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or calculated from blowdown events and vessel volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_supply`
- Sources: `ifc-textile-ehs-2007`

##### Elementary flows

###### Fossil carbon dioxide from the boiler (`boiler_co2_fossil`)

Fossil carbon dioxide from on-site natural-gas combustion is separated from purchased-energy background emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from metered gas carbon content using a disclosed method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_supply`
- Sources: `ifc-textile-ehs-2007`

###### Nitrogen oxides from the boiler (`boiler_nox`)

Nitrogen oxides leaving the boiler stack are measured independently of carbon dioxide.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack concentration multiplied by standardized dry-gas volume over the steam-production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_supply`
- Sources: `ifc-textile-ehs-2007`

### Process: On-site textile wastewater treatment and discharge (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity for wastewater treatment (`wastewater_treatment_electricity`)

Electricity powers equalisation, pumping, aeration, clarification, sludge dewatering and controls.

- Selected flow: Electricity, medium voltage, at gauze mill
- Flow property / unit: Energy / kWh
- Amount rule: Submetered treatment-plant electricity over the same wastewater volume and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Ferric chloride coagulant (`ferric_chloride`)

Ferric chloride is recorded only when it is the actual coagulation chemical used by the on-site plant.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Active ferric-chloride mass from purchased solution concentration and dosing record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

###### Sodium hydroxide for wastewater neutralisation (`wastewater_neutralization_naoh`)

Sodium hydroxide is a separate conditional input when used for pH control in wastewater treatment.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass from concentration and dosing record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

##### Waste flows

###### Combined textile wastewater entering treatment (`wastewater_input`)

This physically combined mill effluent is measured at the treatment inlet; upstream sizing, weaving, preparation, bleaching and dyeing wastewater rows remain separately quantified and reconciled.

- Selected flow: Combined gauze-mill process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Treatment-inlet flow meter total reconciled to each generating process and utility wastewater stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dewatered wastewater-treatment sludge (`wastewater_sludge`)

Sludge removed from treatment is a waste flow; its wet mass and dry-solids fraction are both retained.

- Selected flow: Dewatered textile wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed dewatered sludge with measured dry-solids fraction and disposition route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023`
- Range: IFC dewatered-sludge generation QA benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg
  - Basis: per m3 textile wastewater treated after sludge dewatering
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `ifc-textile-ehs-2007`

##### Elementary flows

###### Treated water discharged to freshwater (`treated_water_to_freshwater`)

The treated effluent volume crossing the site boundary to a freshwater receiving environment is an elementary water flow.

- Selected flow: Water, to freshwater
- Flow property / unit: Volume / m3
- Amount rule: Permitted discharge-flow meter total; use another receiving compartment as a separate row when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

###### Biochemical oxygen demand discharged to freshwater (`bod_to_freshwater`)

BOD mass is calculated from a measured concentration and the matched discharged-water volume.

- Selected flow: Biochemical oxygen demand, to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Laboratory BOD concentration multiplied by matched effluent volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

###### Chemical oxygen demand discharged to freshwater (`cod_to_freshwater`)

COD mass is kept distinct from BOD and other water pollutants.

- Selected flow: Chemical oxygen demand, to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Laboratory COD concentration multiplied by matched effluent volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

###### Total suspended solids discharged to freshwater (`total_suspended_solids_to_freshwater`)

Total suspended solids are reported separately from oxygen-demand and nutrient indicators.

- Selected flow: Suspended solids, total, to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Laboratory total-suspended-solids concentration multiplied by matched effluent volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

###### Total nitrogen discharged to freshwater (`total_nitrogen_to_freshwater`)

Total nitrogen mass is calculated from the matched laboratory result and discharged volume.

- Selected flow: Nitrogen, total, to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Total-nitrogen concentration multiplied by matched effluent volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

###### Total phosphorus discharged to freshwater (`total_phosphorus_to_freshwater`)

Total phosphorus is reported as a separate elementary emission.

- Selected flow: Phosphorus, total, to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Total-phosphorus concentration multiplied by matched effluent volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

###### Adsorbable organic halogens discharged to freshwater (`aox_to_freshwater`)

AOX is included only when measured or when chlorine-bearing inputs make it relevant; it is not merged with COD.

- Selected flow: Adsorbable organic halogens, to freshwater
- Flow property / unit: Mass / kg
- Amount rule: AOX concentration multiplied by matched effluent volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 textile wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `ifc-textile-ehs-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared processes and utilities | Avoid allocation by subdividing independently metered yarn preparation, weaving, wet-processing, finishing, utility and treatment operations, or by expanding the system only when the substituted function is explicit and justified. | `ec-ef-method-2021` |
| `allocation_physical_relation` | unavoidable shared burdens | When subdivision cannot remove a shared burden, use a measured physical causal relationship such as machine time, metered energy, bath volume, steam enthalpy or treated wastewater volume. Do not use net product mass merely because it is available if it does not drive the burden. | `ec-ef-method-2021` |
| `allocation_economic_last` | residual multifunctionality | Use economic allocation only when no defensible physical relationship exists; disclose prices, period, currency, volatility and sensitivity, and do not mix economic and physical allocation for the same burden. | `ec-ef-method-2021` |
| `allocation_internal_recycling` | yarn, size liquor, water, condensate and textile scrap returned within the system | Treat verified same-system reuse as an internal loop: record gross input, recovered amount, purge or loss and loop energy, but do not create a co-product credit for material returned to the same foreground system. | `ec-ef-method-2021`; `ifc-textile-ehs-2007` |
| `allocation_external_scrap` | sold or transferred yarn, gauze, polymer, paperboard or sludge outputs | Keep each external output mass and disposition separate. Apply the chosen multifunctionality hierarchy consistently; no avoided-burden credit may be asserted without a documented substituted product and compatible downstream boundary. | `ec-ef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_preparation` | `yarn_preparation` | yarn, electricity, prepared beam and yarn waste | weigh tickets, ERP issues, submeters and waste logs | yarn lot; fibre composition; gross/tare/net mass; conditioning basis; kWh; prepared-beam mass; waste mass | Calibrated scales, supplier/ERP reconciliation, submeter or documented main-meter allocation | kg; kWh | each lot and monthly meter close | At least 12 representative months or the complete shorter campaign | All winding, warping and beaming equipment serving the declared output | Sum matched records and normalize by conditioned prepared output and final reference mass | Scale and meter calibration; lot genealogy; invoice/ERP reconciliation; missing-record log |
| `cp_warp_sizing` | `warp_sizing` | warp, each size constituent, water, electricity, steam, sized beam and wastewater | batch recipe, chemical issue, concentration, meters, mass and tank records | warp mass; each chemical mass and concentration; water; kWh; steam; sized mass; effluent volume | Recipe-to-issue reconciliation with calibrated meters and scales | kg; m3; kWh | each sizing batch and monthly meter close | Same period as sized warp used in declared gauze | All applicable sizing ranges | Calculate active constituent mass separately; sum utilities; normalize by sized warp and reference output | Recipe approval; concentration certificate; meter calibration; mass-balance review |
| `cp_gauze_weaving` | `gauze_weaving` | warp, weft, loom utilities, greige gauze, waste, wastewater and dust | loom production log, yarn issue, submeter, flow meter, waste scale and air test | loom type; warp/weft mass; kWh; Nm3 air; m3 water; greige mass; waste; exhaust concentration and volume | Lot-level loom records with route-specific meters or documented equipment allocation | kg; kWh; Nm3; m3 | each lot; utilities at least shift or monthly | Representative campaign covering declared loom routes | All looms producing the declared gauze | Preserve route totals; normalize by conditioned greige output | Loom genealogy; calibration; downtime record; waste reconciliation; laboratory report |
| `cp_desizing_scouring` | `desizing_scouring` | greige input, each chemical and enzyme preparation, water, steam, electricity, prepared gauze and wastewater | batch sheet, issue records, formulation concentration or enzyme activity, meters, mass and effluent logs | textile dry mass; each chemical or enzyme-preparation mass; concentration or activity; water; steam; kWh; output dry mass; wastewater | Batch reconciliation and calibrated line meters | kg; m3; kWh | each batch and monthly close | Same wet-preparation campaigns as declared output | All desizing/scouring lines in scope | Keep each chemical or enzyme preparation atomic; sum utilities; normalize by dry prepared gauze | Recipe version; formulation certificate or enzyme-activity evidence; meter calibration; inlet/output dry-mass test; effluent reconciliation |
| `cp_peroxide_bleaching` | `peroxide_bleaching` | prepared input, peroxide, alkali, acid, water, steam, electricity, bleached gauze and wastewater | batch sheet, chemical issues, meters, whiteness and mass tests | input/output dry mass; active H2O2, NaOH and acetic acid; water; steam; kWh; wastewater | Batch-level chemical and utility reconciliation | kg; m3; kWh | each bleach batch and monthly close | Same bleach campaigns as declared output | All peroxide-bleaching lines in scope | Keep chemicals atomic; normalize by dry bleached gauze | Recipe and concentration evidence; calibration; whiteness test; wastewater log |
| `cp_reactive_dyeing` | `reactive_piece_dyeing` | textile, each dye/auxiliary, water, steam, electricity, dyed gauze and wastewater | colour recipe, issue records, meters, shade and mass tests | Colour Index identity; formulation concentration; each chemical mass; textile dry mass; water; steam; kWh; wastewater | Recipe-to-issue reconciliation and calibrated meters | kg; m3; kWh | each dye lot and monthly close | Same dye campaigns as declared output | Each declared reactive-dyeing line | Never aggregate dyes or auxiliaries into a collection row; normalize by dry dyed gauze | Approved colour recipe; SDS/certificate; shade result; meter calibration; effluent log |
| `cp_drying_finishing` | `drying_heat_setting` | wet textile, electricity, indirect steam, direct gas, dry textile and stack emissions | dryer batch log, moisture tests, electricity, steam and gas meters, and stack reports | wet/dry mass; kWh; steam mass and conditions; gas volume; net calorific value; stack concentrations and gas volume | Matched batch, energy and emissions records | kg; kWh; MJ | each campaign; fuel, steam and electricity monthly; stack per permit | Representative period for each drying technology | Each dryer/stenter route in scope | Preserve indirect-steam, direct-fired and other separately declared heat routes; normalize by dry output | Moisture test; meter calibration; steam balance; fuel invoice; stack method and laboratory accreditation |
| `cp_final_finishing_packaging` | `inspection_rolling_packaging` | inspected gauze, electricity, each packaging material, reference output and wastes | inspection log, scales, packaging issues, meter and waste log | width; length; mass/area; gross/tare/net mass; kWh; core, film and board mass; rejects and scraps | Calibrated product and tare weighing with lot genealogy | kg; cm; m; g/m2; kWh | each saleable roll or batch and monthly reconciliation | Complete declared output period | All inspection, rolling and packaging lines | Sum net product only for reference flow; separately normalize every packaging and waste row | Scale calibration; width and mass/area test; inspection release; packaging bill and waste receipts |
| `cp_thermal_supply` | `thermal_supply` | gas, feedwater, electricity, steam, blowdown and stack emissions | fuel, water, electricity and steam meters; fuel certificate; stack tests | gas volume; NCV; feedwater; condensate return; kWh; steam mass/conditions; blowdown; stack results | Calibrated utility meters and permit-compliant stack measurement | MJ; m3; kWh; kg | continuous or monthly; stack per permit | Same period as consuming processes | Boiler units supplying foreground steam | Calculate fuel energy from measured volume and NCV; normalize by delivered steam and final output | Meter calibration; supplier NCV; steam balance; stack report; blowdown log |
| `cp_wastewater_treatment` | `wastewater_treatment` | inlet wastewater, electricity, each treatment chemical, discharged water, pollutants and sludge | inlet/outlet flow, dosing, laboratory, electricity, sludge and disposal records | m3; each chemical mass/concentration; kWh; pH; BOD; COD; TSS; TN; TP; AOX; sludge wet/dry mass | Composite sampling matched to calibrated flow and dosing records | m3; kg; kWh; mg/L | flow continuous; chemistry at permit frequency; monthly mass balance | Same period as generating wet operations | Entire on-site treatment system and declared outfalls | Concentration x matched volume; keep pollutant rows separate; normalize both per m3 and reference output | Accredited laboratory; chain of custody; flow-meter calibration; permit; sludge receipt; inlet/outlet reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | Normalized amount = period amount attributable to declared route / net kg saleable gauze from the same route and period. | Matched flow record; route allocation; `reference_net_mass` | amount per 1 kg net saleable gauze | `ec-ef-method-2021` |
| `calc_active_chemical_mass` | chemical solutions and formulations | Active constituent mass = as-used solution mass x certified mass fraction. Preserve carrier water or solvent as separate flow when material. | issue mass; concentration certificate; batch recipe | kg active constituent | `ifc-textile-ehs-2007` |
| `calc_textile_mass_balance` | yarn through final gauze | Conditioned yarn input + retained dry size = conditioned saleable gauze + textile waste + measured inventory change; investigate residual rather than assigning it to product. | conditioned input/output/waste masses; retained size; inventory change | mass-balance residual and yield | `ec-ef-method-2021` |
| `calc_pollutant_load` | each water or air pollutant | Emitted mass = representative measured concentration x matched standardized gas or effluent volume, with unit conversion and non-detect treatment disclosed. | concentration; flow/volume; sampling period | kg pollutant per period and per reference flow | `ifc-textile-ehs-2007` |
| `calc_thermal_energy` | natural gas | Net calorific energy = metered gas volume x supplier net calorific value for the same period; do not substitute a higher heating value without disclosure. | gas volume; NCV | MJ natural-gas input | `ec-ef-method-2021` |
| `calc_wet_finish_totals` | comparable full woven-fabric-finishing route | Sum water, electricity and thermal energy over all applicable preparation, bleaching/dyeing, washing and drying steps before comparing with the official QA guardrails; never apply the aggregate range to each step. | route-specific wet-operation rows and dry finished mass | aggregate L/kg, kWh/kg and MJ/kg | `ifc-textile-ehs-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and route | Demonstrate gauze warp construction, width greater than 30 cm, fibre composition, finish state, lot genealogy and exact route; reject medical articles, nonwovens and other excluded identities. | Weave specification, width and mass/area test, product specification, lot and classification record; `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989` |
| `dq_temporal` | foreground data | Use at least 12 representative months when continuous production exists; a shorter complete campaign is acceptable only with seasonality, start-up, downtime and representativeness disclosed. | Meter periods, production schedule, downtime and campaign records; `ec-ef-method-2021` |
| `dq_completeness` | material, utility, waste and emission inventory | Reconcile purchase/issue, meters, product and waste. Every actual yarn, size constituent, dye, auxiliary, fuel, packaging component, waste and direct emission is a separate atomic row; zero or not-applicable requires evidence. | Reconciliation workbook, recipes, invoices, meters, waste receipts, laboratory and permit records |
| `dq_route_separation` | mutually exclusive routes | Keep greige, prepared, bleached, dyed, loom-technology, direct-fired/indirect-heated and on-site/purchased-steam routes separate through collection and normalization. | Route-coded production and utility records; `ifc-textile-ehs-2007` |
| `dq_measurement` | scales, meters and laboratory results | Use calibrated equipment, matched sampling and traceable methods; retain uncertainty, non-detect treatment and data corrections. | Calibration certificates, chain of custody, accredited laboratory reports; `ifc-textile-ehs-2007` |
| `dq_secondary_data` | upstream datasets | Select geographically, technologically and temporally representative yarn, electricity, fuel, chemical, water, packaging and treatment datasets; document every proxy and its effect. | Dataset metadata, selection record and sensitivity; `ec-ef-method-2021` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm gauze/leno warp construction, width greater than 30 cm, net conditioned mass and excluded medical/made-up identities; fail if a broader fabric or medical product UUID is used. | `unsd-cpc-3-0-2025`; `eu-cn-gauze-narrow-fabric-1989` |
| `validate_reference_uuid` | Tiangong identity | Before publication, require an exact Product flow UUID plus directly verified CPC 26860, English and Chinese baseName, Mass property UUID, unit-group UUID and reference unit from a `state_code=100` read; unresolved status fails publication but not candidate authoring. |  |
| `validate_atomic_inventory` | every process inventory | Reject plural selectors or combined carriers. Require one physical or chemical exchange per card and a separate row for every actual dye, auxiliary, fuel, packaging material, waste and elementary emission. |  |
| `validate_route_gates` | conditional processes | Reject averaging of mutually exclusive greige, bleached, dyed, loom, drying and thermal-supply routes; each included process must have an affirmative production record and each excluded route an explicit not-applicable basis. | `ifc-textile-ehs-2007`; `jrc-textiles-bref-2023` |
| `validate_mass_balance` | textile chain | Reconcile conditioned yarn, retained size, intermediate transfers, saleable gauze, textile wastes and inventory change; investigate and disclose residuals. | `ec-ef-method-2021` |
| `validate_packaging_tare` | reference output | Confirm reference mass excludes core, film, carton, pallet and other packaging while each consumed packaging component remains in inventory. | `ec-ef-method-2021` |
| `validate_wet_finish_resource_qa` | boundary-compatible full woven-fabric-finishing route | Compare aggregate foreground totals, not individual steps, with IFC comparative ranges: electricity 0.5-1.5 kWh/kg, thermal energy 30-70 MJ/kg and water 50-100 L/kg woven fabric finished. These ranges come from limited installations and are QA flags only; explain deviations and never replace measured data. | `ifc-textile-ehs-2007` |
| `validate_effluent_qa` | final on-site freshwater discharge | Compare representative discharge with the more stringent applicable permit or IFC guideline values, including pH 6-9, BOD 30 mg/L, COD 160 mg/L, TSS 50 mg/L, AOX 1 mg/L, total phosphorus 2 mg/L and total nitrogen 10 mg/L; report exceedance and do not convert the threshold into an inventory default. | `ifc-textile-ehs-2007` |
| `validate_allocation` | shared burdens and external outputs | Require the documented hierarchy of subdivision/system expansion, physical causality and economic allocation; reject unexplained allocation and duplicate recycling credits. | `ec-ef-method-2021` |
| `validate_evidence` | final foreground package | Verify coverage, precision, completeness, representativeness, consistency, reproducibility, sources and uncertainty through document review and model validation; retain access to underlying records. | `ec-ef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for one declared woven gauze product and route at the factory gate |
| downstream_use | May support `secondary_dataset` or `background_dataset` use after methodology, identity, translation and publication review |
| allowed_use | Route- and product-specific modelling of gauze fabric production when fibre composition, width, finish state, technology, geography, time and allocation are compatible |
| excluded_use | Medical gauze or bandage articles; nonwovens; narrow fabrics; glass-fibre fabric; coated/laminated fabric; proxying an undisclosed fibre or finish route; comparative assertion from a candidate or unreviewed dataset |
| required_metadata | Exact reference-flow identity and UUID status; CPC context; fibre composition; weave construction; width; mass per area; moisture basis; finish state; dye/formulation; loom and wet-processing technology; site and geography; period and production coverage; utility and wastewater routes; packaging configuration; allocation; cut-offs; upstream datasets; unresolved gaps |
| required_quality_disclosure | Primary-data coverage, calibration, sampling, mass balance, route separation, allocation basis, secondary-data representativeness, uncertainty, deviations from QA guardrails, permit compliance and unresolved UUIDs |
| update_trigger | Change in product identity, width or weave; fibre or formulation; loom or wet-processing route; utility or wastewater technology; site; allocation; reference-flow identity; material data source; or evidence showing current QA rules are no longer representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory material, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/CPC and https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-21) | CPC 26860 category boundary and separation from adjacent textile and made-up-article categories |
| `eu-cn-gauze-narrow-fabric-1989` | `standard` | Council Regulation (EEC) No 2886/89, Combined Nomenclature Chapter 58 notes for headings 5803 and 5806, https://eur-lex.europa.eu/eli/reg/1989/2886/oj/eng (retrieved 2026-08-21) | Gauze warp construction and narrow-fabric width definition used for identity and measurement |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry (retrieved 2026-08-21) | Route-gated fibre preparation, pretreatment, enzymatic starch desizing, washing, bleaching, dyeing and finishing operations; water, chemical, energy, wastewater and emission relevance |
| `ifc-textile-ehs-2007` | `official_guidance` | World Bank Group/IFC, Environmental, Health, and Safety Guidelines for Textile Manufacturing, 30 April 2007, Annex A and pp. 2-14, https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf (retrieved 2026-08-21) | Winding, warping, beaming, sizing, weaving and finishing unit operations; atomic inputs and releases; monitoring; official comparative woven-fabric-finishing and dewatered-sludge ranges; effluent guideline values including TSS |
| `ec-ef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, sections 3.2, 4.5, 4.6 and 8, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-08-21) | Functional unit and reference flow, system boundary, company-specific data, allocation hierarchy, data quality, reporting and verification/validation |
