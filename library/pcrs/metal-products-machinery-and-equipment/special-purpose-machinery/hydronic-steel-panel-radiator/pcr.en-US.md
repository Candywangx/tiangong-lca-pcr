---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hydronic-steel-panel-radiator
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hydronic steel panel radiator manufacturing

## 1. Scope and Applicability

Passive non-electrically-heated hydronic radiators made from welded steel pressure panels, in one declared complete dry configuration. Declare panel count, convector-fin count, dimensions/orientation, surface finish, fitted top grille/side covers and factory-fitted plugs, air vent and integrated valve when present. This narrower category is within CPC44823; it does not cover all iron/steel radiator constructions. Manufacturing delivery is the reference function, not heating a room or delivering a kWh of heat.

Cast-iron sectional, steel tubular/column, aluminium and electric/fan-assisted radiators; independent valves, thermostatic heads, brackets and installation hardware; heat pumps/boilers, distribution piping, installation/service work, customer operating heat/water/electricity, building heat loss, maintenance, lifetime and end-of-life. A detached mounting kit packed alongside the radiator is a separate supplied product outside radiator net M; disclose it rather than silently include or omit its manufacture. Transport packing and test fluid are outside M.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hydronic-steel-panel-radiator |
| classification_refs | CPC:3.0:44823; narrower |
| covered_products | New accepted complete welded hydronic steel panel radiator, passive and non-electrical, dry/drained delivery. |
| excluded_products | Cast-iron sectional, steel tubular/column, aluminium and electric/fan-assisted radiators; independent valves, thermostatic heads, brackets and installation hardware; heat pumps/boilers, distribution piping, installation/service work, customer operating heat/water/electricity, building heat loss, maintenance, lifetime and end-of-life. A detached mounting kit packed alongside the radiator is a separate supplied product outside radiator net M; disclose it rather than silently include or omit its manufacture. Transport packing and test fluid are outside M. |
| representative_product | One configured welded pressure-panel radiator with actual panel/fin arrangement and fitted covers/connections/plugs/vent; integrated valve only when supplied fitted. Different panel/fin types, orientation and finish are separate BOM/test variants. |
| production_route | Steel receipt; blanking/pressing; panel/fitting/fin joining; actual leak/pressure test; conditional cleaning/conversion/primer; declared coating/cure; dry fitted release; actual packing. Bought-in component processes are upstream and replace duplicated foreground steps. |
| market_state | Complete accepted dry emitter ready for shipment, actual fitted accessories and dry coating included; mounting kit/packaging/test water outside net product M. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of the declared complete radiator, not building heat supply. |
| How much | 1 kg accepted dry net complete radiator of one configuration; normalized share of a whole unit, not an independently functional kilogram fragment. |
| How well | Released material/BOM/dimensions and model-specific weld/leak/pressure, surface/connection and fitted-supply acceptance. Record actual declared thermal performance and its test conditions as product qualifiers, not a heat-output denominator or generic EN442 claim. No universal pressure, coating thickness, output or lifespan prescribed. |
| How long or cycle | One manufacture/acceptance cycle; building heating season and reference service life outside normalization. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Radiators for central heating, not electrically heated, of iron or steel `a3bc941c-b74f-40e1-a32c-75888689ebdd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/BOM revision; batch/serial; panel/fin count; height/length/depth/orientation; steel grade/thickness/supplied state; weld route; coating/colour/primer; fitted covers/plugs/vent/valve; separately supplied mounting kit; dry drained net measured M; current test medium/pressure/time/criteria and actual thermal declaration conditions; site/period; make-or-buy; pretreatment/cure utilities; supplier/transport links; packing exclusions |

Declare every qualifier in dataset/reference metadata. The broad public radiator identity is narrowed to actual hydronic welded steel panels and fitted dry supply. Mass normalization alone does not make panel types or thermal performance interchangeable.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_units | forming_electricity; joining_electricity; testing_electricity; pretreatment_electricity; coating_electricity; release_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert measured kWh by3.6 MJ/kWh before normalization; retain actual below1kV provider/meter boundary. |
| gas_volume | natural_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve measured gas m3 with temperature/pressure/reference conditions and documented billing correction; no generic gas density/LHV or mass conversion. |

Weigh the complete accepted dry/drained emitter, including dry coating and actual fitted covers/valves/plugs/vent, on a calibrated scale before packing. Exclude pressure-test water, radiator operating water, all transport packing and detached hardware kit. Verify drained state, coating cure and supplied BOM; no gross shipping or catalogue model mass replaces M. Record detached-kit quantities and boundary separately. Each aqueous reagent is measured as its actual supplied solution mass; water mass uses weighing or measured same-temperature density/volume, never a generic mixture density. No per-radiator weight is supplied.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Manufacturer receives specified cold-rolled sheet/coil and finished fittings/coating chemicals; steelmaking and rolling are upstream. |
| starting_condition_role | Declared manufacturing foreground module starting point. |
| product_classification_scope | Passive non-electrically-heated hydronic radiators made from welded steel pressure panels, in one declared complete dry configuration. Declare panel count, convector-fin count, dimensions/orientation, surface finish, fitted top grille/side covers and factory-fitted plugs, air vent and integrated valve when present. This narrower category is within CPC44823; it does not cover all iron/steel radiator constructions. Manufacturing delivery is the reference function, not heating a room or delivering a kWh of heat. |
| recursive_input_rule | Bought-in welded/coated panel or fitting stops at documented supply boundary and replaces its contained steel/coating/site work. Internal pressed panels/fins are transfers, not additional purchases. Never substitute a complete radiator input for each component. |
| upstream_dataset_requirement | Expanded assessment links actual compatible steel/coating/component suppliers, outsourced work, inbound transport and waste treatment. Identity UUID alone is not an upstream impact dataset; missing provider/identity/amount remain distinct gaps. |
| disclosure | Disclose site/period, dry fitted emitter and detached-kit boundary, process routes, utility carriers, losses/rework/tests, bath/recovery loops, supplier scope, packing and capital/tool treatment. Foreground alone does not establish complete cradle-to-gate coverage. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacturing | Purmo Yangzhou case supports pressing/welding/testing/painting/packing as a manufacturing route and polyester-epoxy-coated cold-rolled panels. Current plant records govern detailed joins, test medium, pretreatment and cure, not an assumed universal recipe. | purmo-hub2894 |
| boundary_supply | radiator | Stelrad retained case shows varying panel/fin configurations, accessory supply and coating/packaging by site/model. Reconcile actual dry fitted supply; no EPD model weight, recycled share, mass allocation or lifespan transferred. | stelrad-panel-uk |
| boundary_use | building_heat | Exclude heat source/distribution and room-heating operation. Record actual factory test water and utility consumption only; radiator water volume/thermal wattage do not normalize manufacturing output. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| forming | Steel blanking and panel/fin pressing | required | Actual manufacturer forming of pressure-panel steel and declared fins; bought-in formed parts replace the matching site stock/operations. Supplier steelmaking/cold rolling stays upstream. | foreground_production | per 1 kg reference flow |
| joining | Panel seam and convector joining | required | Actual released seam/spot-weld route and fitting integration; no assumed filler wire/shield gas for resistance welding. Alternative welds and outsourced work require their own measured inventories. | foreground_production | per 1 kg reference flow |
| testing | Leak/pressure testing and draining | required | Current model-specific accepted test procedure determines medium, pressure, duration and pass criteria. Hydrostatic water is conditional; air testing has measured compressor demand. Reject/rework included. | foreground_production | per 1 kg reference flow |
| pretreatment | Cleaning and conversion pretreatment | conditional | Actual site cleaning/pretreatment recipe only; no universal zinc phosphate or alkaline cleaner prescribed. Record real bath chemistry and water/heat carriers separately. | foreground_production | per 1 kg reference flow |
| coating | Primer, powder application and cure | required | Declared surface coating route; actual supplier-finished part replaces local coating. Primer is conditional and powder formulation, cure carrier and recovery are site-specific. | foreground_production | per 1 kg reference flow |
| release | Fitted accessory assembly and release | required | Fit declared covers/plugs/vent/valve, inspect finish and connections, reconcile accepted dry complete configuration and weigh net M. | foreground_production | per 1 kg reference flow |
| packing | Transport protection and dispatch | conditional | Actual film/board/protection only; detached mounting kit separately disclosed; packaging excluded from M. | foreground_production | per 1 kg reference flow |

Each card is one defined material/component/carrier/waste/species. Quantities come from actual records, not a universal recipe. Conditional chemistry is omitted when not used; different grades/formulations/concentrations require separate rows. Complete the actual BOM and route before a completeness claim: include any separately supplied fin, grille, side-panel and valve assembly, individual clips/seals, electrode wear, tools, forming-oil waste, primer purge, cure/combustion species and packing materials not already contained. Keep internal water/powder loops separate from external net make-up and purge. Captured powder/sludge/treatment-bound effluent are waste, not elementary releases. Any direct wastewater discharge needs each measured species and exact receiving medium separately.

### Process: Steel blanking and panel/fin pressing (`forming`)

Actual manufacturer forming of pressure-panel steel and declared fins; bought-in formed parts replace the matching site stock/operations. Supplier steelmaking/cold rolling stays upstream.

#### Inputs

##### Product flows

###### Cold-rolled low-carbon steel coil for pressure panels (`panel_steel`)

One actual panel-sheet grade/thickness/supplied condition, weighed net issues/returns; steelmaking/cold rolling upstream. Fin stock kept distinct.

- Selected flow: Cold-rolled low-carbon steel coil for pressure panels
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming`

###### Cold-rolled low-carbon steel strip for convector fins (`fin_steel`)

Only actual fins in configured radiator; one fin-sheet grade/thickness, separate net stock issues. No mandatory fins for every panel type.

- Selected flow: Cold-rolled low-carbon steel strip for convector fins
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming`

###### Mineral-oil-based steel-forming lubricant (`forming_oil`)

Only actual specified forming-oil formulation and net new consumption; record returns/residue and actual chemistry. No generic oil loss fraction.

- Selected flow: Mineral-oil-based steel-forming lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming`

###### Alternating current (`forming_electricity`)

Measured below1kV grid AC pressing/cutting/tool and attributable extraction demand; other carriers separate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Separately weighed dry steel blanking/trim scrap leaving without further processing; internal reusable stock and oily scrap separate.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming`

### Process: Panel seam and convector joining (`joining`)

Actual released seam/spot-weld route and fitting integration; no assumed filler wire/shield gas for resistance welding. Alternative welds and outsourced work require their own measured inventories.

#### Inputs

##### Product flows

###### Steel threaded radiator water-connection boss (`steel_connection`)

One actual purchased finished water-connection boss with grade/thread/coating and mass; omit as purchase when internally formed or included in bought-in panel.

- Selected flow: Steel threaded radiator water-connection boss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining`

###### Alternating current (`joining_electricity`)

Measured below1kV resistance seam/spot welding and joining/extraction demand. Welding route established by current work orders; do not assume filler wire or shield gas for resistance welding.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining`

### Process: Leak/pressure testing and draining (`testing`)

Current model-specific accepted test procedure determines medium, pressure, duration and pass criteria. Hydrostatic water is conditional; air testing has measured compressor demand. Reject/rework included.

#### Inputs

##### Product flows

###### Tap water (`test_water`)

Conditional net new drinking-quality mains water for actual hydrostatic leak/pressure testing, kg water not internal recirculated gross pump flow; air-test route recorded separately. Drain and dry before M.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_testing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing`

###### Alternating current (`testing_electricity`)

Actual below1kV pumping/compressed-air generation/drying demand for released test route; not universal test duration or pressure. Compressed air made on site is internal carrier, not another energy purchase.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_testing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing`

#### Outputs

##### Waste flows

###### Discarded hydrostatic radiator-test water (`test_effluent`)

Only actual test-loop purge sent to treatment, characterized kg with dissolved/suspended contamination and handler; recirculation internal. Not a water-resource flow or automatic elementary discharge.

- Selected flow: Discarded hydrostatic radiator-test water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_testing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing`

### Process: Cleaning and conversion pretreatment (`pretreatment`)

Actual site cleaning/pretreatment recipe only; no universal zinc phosphate or alkaline cleaner prescribed. Record real bath chemistry and water/heat carriers separately.

#### Inputs

##### Product flows

###### Tap water (`wash_water`)

Only actual drinking-quality mains make-up for cleaning/rinsing; kg net new water, reused baths internal. Demineralized water needs a distinct supplied flow.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment`

###### Sodium hydroxide solution, 50% (`sodium_hydroxide`)

Conditional actual50% as-supplied aqueous NaOH reagent for recorded cleaning recipe; kg solution, not kg active NaOH or entire alkaline cleaner. Other ingredients split.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment`

###### Zinc-phosphate conversion-coating solution (`zinc_phosphate_solution`)

Conditional one actual formulated zinc-phosphating solution with supplier concentration/composition and mass; do not substitute iron/manganese phosphate or zinc phosphide. Alternative conversion chemistry separate.

- Selected flow: Zinc-phosphate conversion-coating solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment`

###### Alternating current (`pretreatment_electricity`)

Conditional measured below1kV wash-line pumps and electrically heated baths; actual other bath heating carriers add separate rows.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment`

#### Outputs

##### Waste flows

###### Alkaline steel-panel degreasing wastewater (`wash_effluent`)

Actual characterized alkaline cleaning/rinse purge sent to documented treatment; pH, oil, NaOH and solids loads measured, kg effluent distinct from water input or environmental species.

- Selected flow: Alkaline steel-panel degreasing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment`

###### Zinc-phosphate pretreatment sludge (`phosphate_sludge`)

Only actual characterized wet zinc-phosphate bath sludge, wet mass/dry solids/moisture/handler declared; not municipal sludge.

- Selected flow: Zinc-phosphate pretreatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pretreatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment`

### Process: Primer, powder application and cure (`coating`)

Declared surface coating route; actual supplier-finished part replaces local coating. Primer is conditional and powder formulation, cure carrier and recovery are site-specific.

#### Inputs

##### Product flows

###### Waterborne epoxy electrophoretic primer formulation (`epoxy_primer`)

Optional actual one supplied epoxy electrodeposition primer with solids/bath make-up and supplier specification; not prescribed for all panel radiators.

- Selected flow: Waterborne epoxy electrophoretic primer formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Powder Coating (`powder_paint`)

Actual one specified polyester-epoxy resin powder formulation, colour/solids/SDS recorded; net issues less valid return, internal recovered powder not new purchase. Other resin chemistries separate.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Alternating current (`coating_electricity`)

Actual below1kV coating-line/oven/fan and allocated demand; electric curing only when present.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Pipeline-delivered fossil natural gas for coating ovens (`natural_gas`)

Conditional actual purchased gaseous fossil natural gas at metered temperature/pressure/reference state, m3. Verify supplier gas composition and billing correction; no generic density/LHV and no duplicated purchased heat.

- Selected flow: Pipeline-delivered fossil natural gas for coating ovens
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

#### Outputs

##### Waste flows

###### Discarded polyester-epoxy powder overspray (`powder_waste`)

Only actual unreused specified dry polyester-epoxy overspray sent to treatment, not internally recovered powder; record resin/colour and handler.

- Selected flow: Discarded polyester-epoxy powder overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

##### Elementary flows

###### Particulate matter, particle size unspecified (`powder_air`)

Only measured post-control outdoor particulate emitted from actual powder process, air subcompartment/size unspecified; captured powder is waste/internal recovery, not emission.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### carbon dioxide (fossil) (`fossil_co2_air`)

Only measured or validated actual fossil-carbon balance of on-site oven fuel to outdoor air unspecified, immediate release; separate retained carbon, CO/unburned fuel and any biogenic fraction. No universal factor; purchased electricity upstream CO2 excluded here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

### Process: Fitted accessory assembly and release (`release`)

Fit declared covers/plugs/vent/valve, inspect finish and connections, reconcile accepted dry complete configuration and weigh net M.

#### Inputs

##### Product flows

###### Brass radiator blanking plug (`brass_plug`)

Only fitted specified brass blanking plug, actual thread/alloy/seal boundary, net mass; separately packed extras excluded from M.

- Selected flow: Brass radiator blanking plug
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Brass radiator manual air-vent plug (`brass_vent`)

Only actual fitted manual air-vent plug of stated alloy and supplied boundary; not general valve or automatic vent placeholder.

- Selected flow: Brass radiator manual air-vent plug
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Integrated brass radiator valve insert (`integrated_valve`)

Conditional factory-fitted valve insert within accepted supply, actual alloy/model/contained seal recorded; independent TRV/thermostatic head excluded.

- Selected flow: Integrated brass radiator valve insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Finished steel radiator top grille (`top_grille`)

Only actually fitted steel top grille of one drawing/finish, purchased if not site-made; omitted on ungrilled configurations.

- Selected flow: Finished steel radiator top grille
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Finished steel radiator side cover (`side_cover`)

One actually fitted steel side cover drawing/finish at a time; preserve both side quantities without mixed cover kit; no duplicate site stock.

- Selected flow: Finished steel radiator side cover
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### EPDM radiator connection gasket (`epdm_gasket`)

Only one actually fitted EPDM gasket specification and supplied mass, not included plug seal twice; other elastomers separate.

- Selected flow: EPDM radiator connection gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Alternating current (`release_electricity`)

Actual below1kV final fit/inspection/drying demand, including attributable rejects/rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

#### Outputs

##### Product flows

###### Radiators for central heating, not electrically heated, of iron or steel (`finished_machine`)

1kg accepted dry drained complete welded steel panel radiator in exact panel/fin/fitted-accessory configuration, measured M; excludes separate mounting kit and all packaging.

- Selected flow: Radiators for central heating, not electrically heated, of iron or steel `a3bc941c-b74f-40e1-a32c-75888689ebdd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

### Process: Transport protection and dispatch (`packing`)

Actual film/board/protection only; detached mounting kit separately disclosed; packaging excluded from M.

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Actual PE wrapping film, formulation/thickness/recycled fraction and net issues recorded; packaging excluded from radiator M. Not universal plastic recipe.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`corrugated_board`)

Only actual C/E/F flute board fiber≥80% containing recycled material per public identity; verify supplier, otherwise retain separate exact board identity. Excluded from M.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | Prefer work-order issues/submeters. Under cp_allocation split shared press/weld/bath/oven/compressor demand using measured causal demand or load/time, justify each driver and reconcile allocated plus excluded demand to the total. No fixed ratio or automatic mass allocation from EPD cases. |  |
| allocation_variants | configurations | Separate panel/fin counts, dimensions, surface areas, primer and cure routes. Accepted count alone need not explain shared energy. A mass/economic fallback requires measured causal justification, sensitivity and review. |  |
| allocation_scrap | waste | Track actual steel scrap and bath/powder waste without automatic avoided-steel or module-D credits. Internal reusable stock/powder/water remain internal. Genuine independent marketable outputs require disclosed quality/quantity and justified co-product treatment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration/serial or traceable homogeneous batch | same manufacturing period | same site and dry fitted supply | accepted net mass per unit | calibration; dry/drained state; fitted BOM; signed release |
| cp_forming | forming | each atomic row in this process | measurement | steel grade/thickness/route and sheet area; issues/returns; panel/fin dimensions/count; actual press/cut time/load/kWh; forming oil recipe; trim scrap mass | Weigh each coil issue/valid return and separate trim scrap; trace actual panel/fin nesting and forming yield; meter press/tool demand. No assumed sheet thickness, standard radiator weight or residual BOM mass. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier records; stock/count closure; missing data |
| cp_joining | joining | each atomic row in this process | measurement | weld route/map/current/time; fittings alloy/thread/mass; joint rework/rejects; kWh; electrode wear and other consumables | Trace joint work orders and fitting issues; submeter seam/spot welding and actual extraction; record electrode replacement and each actual alternative weld consumable separately. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier records; stock/count closure; missing data |
| cp_testing | testing | each atomic row in this process | measurement | model/serial; signed test medium/pressure/time/criteria; calibrated gauge; leak results/rework; new water and purge masses; compressor/pump/dryer kWh; drained state | Retain actual released test plan/results; meter water make-up and energy, separate recirculation and treatment-bound purge with contamination/handler; confirm empty dry product before M weighing. No universal pressure or duration. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier records; stock/count closure; missing data |
| cp_pretreatment | pretreatment | each atomic row in this process | measurement | bath recipe/SDS; NaOH supplied concentration and mass; conversion solution composition; water mass/temperature/density/volume; net issues/returns; bath replacement; wet sludge mass/dry solids; effluent quality/handler; kWh | Measure each chemical as actual solution mass and net make-up, retain supplier composition; weigh sludge with moisture basis and meter treatment-bound effluent separately. Shared bath heating/pumps allocated on measured demand; no universal concentration/consumption. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier records; stock/count closure; missing data |
| cp_coating | coating | each atomic row in this process | measurement | powder/primer formulation/SDS/colour/solids; net issues/returns/recovery; dry retained film; actual cure route/time; kWh; gas meter reference temperature/pressure/supplier composition; waste powder; outlet PM and fossil-carbon balance | Weigh each actual formulated coating and unreused waste, keep internal powder recovery; meter oven/fans by actual carrier. Measure post-control outlet particulate with matched gas volume/time/size; use measured fossil-carbon input, retention and other outputs or direct monitoring for CO2, no assumed factor. | kg; MJ; m3 | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier records; stock/count closure; missing data |
| cp_release | release | each atomic row in this process | measurement | model/BOM/serial; panel/fin/cover/connection supply; plugs/vent/valve/gaskets and included boundaries; dry coating/retained state; dimensions/weld/leak/finish acceptance; kWh; M; detached-kit boundary | Trace actual fitted parts and weigh mass, reconcile supplier-contained components and dry film; inspect current acceptance records and meter final fitting/inspection demand. Detached hardware is separate supplied product, not radiator weight. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier records; stock/count closure; missing data |
| cp_packing | packing | each atomic row in this process | measurement | PE recipe/thickness/recycled fraction and mass; board flute/fiber/recycled specification and mass; issues/returns; shipment configuration; detached hardware list | Weigh each actual packing material separately and exclude from M; record net issues and separate hardware supply. Add actual timber/foam/tape as individual exchanges, no generic packaging mix. | kg | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier records; stock/count closure; missing data |
| cp_allocation | manufacturing | shared_demand | measurement | total meter demand; submeter load/time; served variants; excluded loads | Submeter or measure exchange-specific causal load and actual time, justify driver and reconcile to total supplied demand. | MJ; m3; h | each shared batch; monthly closure | same manufacturing period | all served variants and excluded operations | partition by measured causal demand; attributable amount / accepted units | closure; submeter comparison; sensitivity; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | panel_steel; fin_steel; forming_oil; forming_electricity; steel_scrap; steel_connection; joining_electricity; test_water; testing_electricity; test_effluent; wash_water; sodium_hydroxide; zinc_phosphate_solution; pretreatment_electricity; wash_effluent; phosphate_sludge; epoxy_primer; powder_paint; coating_electricity; natural_gas; powder_waste; powder_air; fossil_co2_air; brass_plug; brass_vent; integrated_valve; top_grille; side_cover; epdm_gasket; release_electricity; pe_film; corrugated_board | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Derive q_item first from same configuration/period net issues, attributable utility or actual waste/species divided by accepted unit count. Reject/rework burdens go to accepted output. Normalize by measured dry M, preserving kg/M, MJ/M and gas m3/M numerators. Keep billing/unit correction and allocation separately traceable; no catalogue mass, thermal-output weighting or generic density. Combine compatible variants only after separate normalization with disclosed mass weighting.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | flows | Verify steel grade/rolled state, solution concentration/resin formulation, fitted supply, gas quality/reference state and environmental medium; public identity and provider inventories are distinct. | supplier sheets; state100 identity/property/unit audit |
| quality_complete | radiator | Reconcile dry fitted BOM and coating to M, all actual stock/utility/chemical inputs and losses/rework/tests, and detached-kit disclosure. Never fill unknown component masses as residual. | calibrated weigh; stock/bath balances; signed release |
| quality_period | records | Declare site/complete period, variants, outsourcing, utility routes, setup/idle load, primary coverage and uncertainty. EPD historical site quantities and cut-offs are not current universal data. | work orders; calibration; coverage; source limits |
| quality_acceptance | release | Retain actual model-specific dimensions, weld/leak/pressure tests, finish and fitted supply acceptance; actual performance declaration conditions if cited. No inferred universal EN442 numerical limits or certified status. | released specification; gauges; serial/batch test sheets |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require1kg output and cp_mass measured dry complete-unit M, reconciled exact panel/fin/fitted accessory supply; no pressure-test water, packaging or detached hardware in M. |  |
| validation_normalization | inventory | All applicable non-reference rows explicitly use normalize_mass and declared collection protocol; check same accepted count/period/configuration and numerator units. |  |
| validation_routes | manufacturing | Match forming/joining/test/pretreatment/coating to actual plant records; avoid bought-in-part/site-stock and powder-recovery duplication. Missing actual chemistry, media or carrier remain gaps. |  |
| validation_species | elementary_flows | Verify unspecified-size post-control outdoor-air particulate and immediate fossil CO2 to unspecified air. Long-term/high-stack flows, biogenic CO2, total NOx, captured powder and treatment effluent are not equivalent. Add actual combustion species individually when measured; do not assume all NOx is NO2. |  |
| validation_coverage | dataset | Distinguish measured/calculated/estimated/excluded/not-applicable/missing; reconcile accepted dry output, material/bath loops and allocated demand. Check pass does not approve science, inherit EPD verification or establish complete cradle-to-gate coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing module for exact dry hydronic steel-panel configuration/site/period; upstream-connected assessment only after separately establishing suppliers/transport/treatment coverage. |
| excluded_use | Building heat-service, operating water/heat, generic radiator thermal equivalence, lifetime-normalized comparisons and unsupported complete cradle-to-gate/EPD claims. |
| required_metadata | PCR id; model/BOM/panel/fin/dimensions; dry fitted net M and detached-kit boundary; test/finish/performance conditions; site/period; steel/chemical suppliers and make-or-buy; cure/gas/electricity/bath routes; providers/transport/waste; packing; allocation; sources/version. |
| required_quality_disclosure | Primary measured coverage; unresolved identity/provider/amount; omitted routes; bath/water/powder loops; source age/version limits; allocation/corrections; emissions evidence; uncertainty/review status. |
| update_trigger | Panel/fin/dimension/fitted-supply change; weld/test/coating/bath/utility revision; supplier/gas change; new representative period; resolved evidence/identity gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| purmo-hub2894 | handbook | Purmo Group Steel panel radiators EPD HUB-2894,21March2025, Yangzhou2023 case; PDF/printedpp.3–4 and process diagramp.6. https://manage.epdhub.com/declarations/file/download/epdSigned/lang/3494/en/ | Cold-rolled panels/polyester-epoxy powder and pressing/welding/testing/painting/packing route case; no numerical energy, composition share, allocation default, cut-off, installation/recycling or thermal factor adopted. |
| stelrad-panel-uk | handbook | Stelrad Steel Panel Radiators UK EPD, downloaded EPD-IES-0025108:001 version10August2025, PDF/printedp.4. Live programme catalogue reports003; retained001 architecture facts only. https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/ceb6cc5a-8851-447f-97cd-08ddc8250fc7/Documents | Independent manufacturer panel/fin, grille/side cover/accessory and site/model coating/packing variability case only; no model weights, shares, mass allocation, lifetime or inherited verification. |
