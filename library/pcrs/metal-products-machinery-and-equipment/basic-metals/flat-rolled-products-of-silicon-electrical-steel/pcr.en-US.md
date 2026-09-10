---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-silicon-electrical-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of silicon-electrical steel

## 1. Scope and Applicability

This PCR applies to saleable flat-rolled silicon-electrical steel in coil, strip, or sheet form at the steelworks gate. It covers grain-oriented electrical steel (GOES) and non-oriented electrical steel (NOES), including fully processed and semi-processed supply conditions, only when the orientation class, supply condition, grade or governing specification, nominal thickness and width, coating condition, and production route are declared. A dataset may represent one site and grade family or a production-weighted mix whose components remain within this scope.

The product boundary ends at dispatch of the flat-rolled electrical-steel product. It excludes ordinary non-alloy, alloy, stainless, and high-speed flat steel; electrical-steel scrap sold as waste; cut or stamped laminations; assembled magnetic cores; transformers, motors, generators, and other electrical equipment. Downstream slitting or blanking performed by a customer is excluded unless it is performed by the reporting producer before the declared factory gate and is included consistently in the product specification and mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-silicon-electrical-steel |
| classification_refs | CPC 3.0: 41233, Flat-rolled products of silicon-electrical steel (exact scope context; mapping acceptance is governed outside this PCR) |
| covered_products | GOES and NOES flat products supplied as coils, strip, or sheets; fully processed or semi-processed material; coated or uncoated material when the actual supply state is declared |
| excluded_products | Ordinary non-alloy, other alloy, stainless, and high-speed flat steel; electrical-steel scrap; fabricated laminations and cores; complete electrical equipment |
| representative_product | One kilogram of saleable flat-rolled silicon-electrical steel at the producer gate, including any integral coating supplied with the product |
| production_route | Declared site-specific route from metallic charge or purchased semi-finished electrical-steel substrate through all on-site steelmaking, casting, rolling, annealing, texture control, coating, finishing, and internal recovery steps that apply; BOF, EAF, purchased-slab/hot-band, thin-strip, GOES, and NOES route distinctions shall not be averaged without production weights |
| market_state | Dry saleable coil, strip, or sheet at the producer gate in the declared semi-processed or fully processed condition, packaged where packaging is included in the reported gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable flat-rolled silicon-electrical steel at the producer gate |
| How much | 1 kg net product mass, including integral surface coating and excluding reusable transport equipment |
| How well | Conforming to the declared grade or specification and its magnetic, geometric, tolerance, technological, and coating requirements |
| How long or cycle | One completed production and dispatch batch; no use-life function is asserted by this cradle-to-gate declared unit |
| reference_flow_link | The reference output of `electrical_steel_finishing` shall equal the saleable mass used to normalize every included process |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Flat-rolled products of silicon-electrical steel `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | orientation class (GOES or NOES); semi-processed or fully processed supply condition; grade and governing specification; nominal thickness and width; coil, strip, or sheet form; coating type and coating mass or uncoated declaration; magnetic test basis and guaranteed loss/induction class where applicable; steelmaking route; casting and rolling route; final annealing and decarburization route; domain-refined status for GOES; production site and geography; reporting period; factory-gate definition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and all normalized inventory results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured net saleable product mass. Include an integral insulation or surface coating supplied on the electrical steel; exclude pallets, reels, and reusable transport equipment and disclose any non-reusable packaging reported separately. |
| `mass_conversion` | source records reported in tonnes or megagrams | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert 1 t or 1 Mg to 1,000 kg before normalization and retain the original unit and conversion record. |
| `magnetic_quality_not_mass_conversion` | grade-specific magnetic declarations | declared test result and test condition | declared source unit | Magnetic loss, induction, permeability, frequency, and polarization or field strength are required product qualifiers and quality evidence; they shall not be converted into or used as a substitute for reference mass. |
| `coating_mass_consistency` | coated reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference product mass and yield calculation shall use the same convention for integral coating mass; the convention and coating measurement basis shall be disclosed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identify the earliest foreground-controlled material state: metallic charge entering steelmaking, purchased cast slab, purchased hot band, or another verified semi-finished electrical-steel substrate. |
| starting_condition_role | Foreground data-collection start; it does not remove the requirement to link cradle-to-gate upstream datasets for purchased materials, energy, fuels, alloys, coatings, and transport. |
| product_classification_scope | Flat-rolled silicon-electrical steel only; route and grade variants remain within the category only when the required qualifiers are explicit. |
| recursive_input_rule | A purchased input already in this product category shall be recorded as an upstream product input with its own non-overlapping gate and dataset identifier; do not unfold it into this foreground chain or count its production twice. |
| upstream_dataset_requirement | Link geographically and technologically representative upstream datasets for all purchased metallic charge, ferroalloys, slab or hot band, energy carriers, process chemicals, coating materials, water supply, transport, and treatment services. |
| disclosure | Declare the starting condition, excluded on-site steps, supplier gates, BOF/EAF or other route, purchased-substrate share, GOES/NOES share, semi-/fully processed share, coating and domain-refining steps, internal scrap loops, and whether end-of-life recycling is reported separately. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | product system | Include raw-material and energy supply, inbound transport, every applicable on-site steelmaking and finishing operation, ancillary utilities, internal transport, recovery, wastewater and waste treatment, and emissions through the producer gate. | `worldsteel-lci-methodology`; `iso-20915-2018` |
| `sb_route_specificity` | route selection | Include only operations actually used, but do not omit route-defining casting, hot rolling, cold rolling, decarburization, annealing, texture control, coating, or domain-refining steps when they are part of the declared product. A mixed dataset shall use documented production-mass weights. | `ec-fmp-bref-2022`; `doe-grid-supply-chain-2022`; `mehdi-et-al-2024` |
| `sb_recursive_product_input` | purchased same-category input | Preserve a non-overlapping supplier gate and link the upstream product dataset; reject a model that counts the same electrical-steel production both as purchased input and foreground production. | `worldsteel-lci-methodology` |
| `sb_downstream_exclusion` | downstream manufacture and use | Exclude customer slitting, blanking, lamination stacking, core assembly, equipment manufacture, use, and end of life unless a separately declared extended system boundary is reported outside this cradle-to-gate result. | `worldsteel-lci-methodology`; `iec-60404-8-4-2022`; `iec-60404-8-7-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `steelmaking_and_casting` | Electrical-steel melt preparation and casting | conditional | Required when these operations are controlled by the reporting site; otherwise purchased slab, thin strip, or hot band enters with a linked upstream dataset. | Foreground production of composition-controlled semi-finished electrical steel | kg cast slab, strip, or hot band leaving the process |
| `hot_rolling_and_surface_preparation` | Hot rolling and surface preparation | conditional | Required for conventional slab or hot-band routes; a direct or thin-strip route shall document the replaced operation. | Thickness reduction, scale removal, and hot-band preparation | kg prepared hot band leaving the process |
| `cold_rolling_and_annealing` | Cold rolling, decarburization, and annealing | conditional | Required when used for the declared GOES/NOES grade or supply condition; omitted only with a documented alternative route or a product sold before these steps. | Gauge reduction and magnetic microstructure development | kg cold-rolled or annealed electrical steel leaving the process |
| `electrical_steel_finishing` | Grade-specific finishing, coating, inspection, and dispatch | required | Always required; non-applicable coating or domain-refining operations are declared as absent rather than silently omitted. | Establish the declared market state and reference output | 1 kg saleable reference product |

### Process: Electrical-steel melt preparation and casting (`steelmaking_and_casting`)

#### Inputs

##### Product flows

###### Metallic charge, silicon-bearing alloy additions, and refining materials (`metallic_charge_and_alloys`)

Record all purchased ore-based iron units, DRI/HBI, pig iron, scrap, ferroalloys, silicon-bearing additions, lime, and refining materials that cross the selected starting gate. Keep internal scrap returned within the same system identifiable and separate from externally purchased scrap.

- Selected flow: Declared metallic charge, ferroalloys, and refining materials
- Flow property / unit: Mass / kg
- Amount rule: measured receipts or batch-charge records allocated to conforming cast electrical-steel output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg cast electrical-steel slab, strip, or hot band output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

###### Purchased energy carriers and utilities (`steelmaking_energy_utilities`)

Record metered electricity, fuels, oxygen, nitrogen, argon, steam, and other externally supplied utilities used by included steelmaking, secondary metallurgy, casting, and ancillary services.

- Selected flow: Declared electricity, fuel, gas, steam, and utility products
- Flow property / unit: Energy or mass or volume / source unit retained and converted by documented factors
- Amount rule: metered use plus documented shared-utility allocation to conforming cast output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast electrical-steel slab, strip, or hot band output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Composition-controlled electrical-steel slab, strip, or hot band (`cast_electrical_steel_intermediate`)

Record measured conforming output transferred to rolling and keep its heat or cast identifier linked to composition and route records.

- Selected flow: Composition-controlled electrical-steel slab, thin strip, or hot band
- Flow property / unit: Mass / kg
- Amount rule: measured conforming transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `doe-grid-supply-chain-2022`; `mehdi-et-al-2024`

##### Waste flows

###### Slag, dust, sludge, and nonconforming metal outputs (`steelmaking_residues`)

Record each recovered co-product and waste separately by measured mass, destination, and internal-return status; do not combine saleable slag, returned metal, hazardous dust, and disposed sludge into one unqualified amount.

- Selected flow: Declared slag, dust, sludge, or nonconforming metal flow by destination
- Flow property / unit: Mass / kg
- Amount rule: measured output by residue type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast electrical-steel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

##### Elementary flows

###### Direct emissions from steelmaking and casting (`steelmaking_direct_emissions`)

Record measured or permit-calculated emissions to air, water, and soil at the most specific available process level, including the monitored greenhouse-gas, acidifying, particulate, metal, and wastewater parameters relevant to the site.

- Selected flow: Declared elementary emission by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored or calculation-protocol result assigned to included production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cast electrical-steel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steelmaking_casting_records`
- Sources: `worldsteel-lci-methodology`

### Process: Hot rolling and surface preparation (`hot_rolling_and_surface_preparation`)

#### Inputs

##### Product flows

###### Electrical-steel slab or direct-cast strip input (`hot_rolling_substrate`)

Record the measured mass and identity of the composition-controlled substrate entering reheating, rolling, descaling, and surface preparation.

- Selected flow: Electrical-steel slab, direct-cast strip, or declared hot-band substrate
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass net of material not entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg prepared hot-band output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`; `mehdi-et-al-2024`

###### Hot-rolling energy, water, and surface-treatment inputs (`hot_rolling_operating_inputs`)

Record metered reheating fuels, electricity, cooling and descaling water, and any pickling or surface-preparation chemicals used within the declared process boundary.

- Selected flow: Declared fuel, electricity, water, and surface-treatment products
- Flow property / unit: Energy or mass or volume / source unit retained and converted by documented factors
- Amount rule: metered or invoice-backed consumption assigned to prepared hot-band output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared hot-band output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`; `worldsteel-lci-methodology`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared electrical-steel hot band (`prepared_hot_band`)

Record conforming hot-band mass transferred to cold processing or sold at the declared intermediate supply condition.

- Selected flow: Prepared electrical-steel hot band
- Flow property / unit: Mass / kg
- Amount rule: measured conforming transfer or sale mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`; `mehdi-et-al-2024`

##### Waste flows

###### Scale, edge trim, pickling residues, and rejected hot band (`hot_rolling_residues`)

Record scale, trim, spent treatment residues, and rejected hot band separately, including internal recycling and external treatment destinations.

- Selected flow: Declared hot-rolling residue by type and destination
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared hot-band output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_records`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

### Process: Cold rolling, decarburization, and annealing (`cold_rolling_and_annealing`)

#### Inputs

##### Product flows

###### Prepared hot-band input (`cold_processing_substrate`)

Record the identified hot-band mass entering each cold-reduction and annealing route, retaining the heat, coil, orientation class, and grade-family link.

- Selected flow: Prepared electrical-steel hot band
- Flow property / unit: Mass / kg
- Amount rule: measured input coil mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cold-processed electrical-steel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `mehdi-et-al-2024`

###### Cold-processing energy, water, gases, and chemicals (`cold_processing_operating_inputs`)

Record metered electricity, annealing and decarburization fuels or gases, cooling water, rolling lubricants, cleaning agents, pickling agents, and annealing separators actually used by the declared route.

- Selected flow: Declared electricity, fuel, process gas, water, lubricant, cleaning, and annealing products
- Flow property / unit: Energy or mass or volume / source unit retained and converted by documented factors
- Amount rule: metered, batch-issued, or invoice-backed use assigned to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cold-processed electrical-steel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-fmp-bref-2022`; `mehdi-et-al-2024`; `doe-grid-supply-chain-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-rolled or annealed electrical steel (`cold_processed_electrical_steel`)

Record conforming output after the declared cold-reduction, decarburization, primary/intermediate/final annealing, and texture-development sequence, with omitted steps explicitly marked not applicable.

- Selected flow: Cold-rolled or annealed electrical steel in the declared supply condition
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `iec-60404-8-4-2022`; `iec-60404-8-7-2020`; `mehdi-et-al-2024`

##### Waste flows

###### Cold-rolling trim, rejects, spent liquids, and treatment residues (`cold_processing_residues`)

Record metal trim and rejects separately from spent pickle liquor, lubricant, sludge, and other treatment residues, including recovery or disposal destination.

- Selected flow: Declared cold-processing residue by type and destination
- Flow property / unit: Mass or volume / source unit
- Amount rule: measured residue quantity by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cold-processed electrical-steel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-fmp-bref-2022`

##### Elementary flows

###### Direct emissions from cold processing and annealing (`cold_processing_direct_emissions`)

Record monitored or protocol-calculated furnace, acid-treatment, coating-preparation, wastewater, and other direct emissions by substance and environmental compartment.

- Selected flow: Declared elementary emission by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored or calculation-protocol result assigned to included production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cold-processed electrical-steel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_processing_records`
- Sources: `ec-fmp-bref-2022`; `worldsteel-lci-methodology`

### Process: Grade-specific finishing, coating, inspection, and dispatch (`electrical_steel_finishing`)

#### Inputs

##### Product flows

###### Electrical-steel substrate entering final finishing (`finishing_substrate`)

Record the identified substrate entering grade-specific final annealing, insulation coating, domain refinement, skin pass, slitting, inspection, and packaging as applicable.

- Selected flow: Electrical steel in the declared pre-finishing condition
- Flow property / unit: Mass / kg
- Amount rule: measured input coil, strip, or sheet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `iec-60404-8-4-2022`; `iec-60404-8-7-2020`; `doe-grid-supply-chain-2022`

###### Coating, domain-refining, finishing energy, and packaging inputs (`finishing_operating_inputs`)

Record the actual insulation-coating components, annealing or curing energy, domain-refining energy and consumables, finishing agents, and non-reusable packaging. Mark each non-applicable route element explicitly rather than assigning zero without explanation.

- Selected flow: Declared coating, energy, finishing consumable, and packaging products
- Flow property / unit: Energy, mass, area, or volume / source unit retained and converted by documented factors
- Amount rule: metered or batch-issued amount assigned to saleable product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `iec-60404-8-4-2022`; `iec-60404-8-7-2020`; `doe-grid-supply-chain-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable flat-rolled silicon-electrical steel (`reference_product`)

Record net saleable mass at the declared factory gate after required magnetic, geometric, coating, and surface-quality acceptance checks.

- Selected flow: Flat-rolled products of silicon-electrical steel `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg after normalization from measured saleable output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `worldsteel-lci-methodology`; `iec-60404-8-4-2022`; `iec-60404-8-7-2020`

##### Waste flows

###### Finishing trim, coating waste, rejects, and packaging waste (`finishing_residues`)

Record metal trim and rejected product separately from coating waste, treatment residues, and packaging waste, with internal return, recycling, and disposal destinations.

- Selected flow: Declared finishing residue by type and destination
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `doe-grid-supply-chain-2022`

##### Elementary flows

###### Direct emissions from finishing and coating (`finishing_direct_emissions`)

Record monitored or protocol-calculated furnace, coating-line, wastewater, and other direct emissions by substance and compartment.

- Selected flow: Declared elementary emission by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored or calculation-protocol result assigned to saleable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_dispatch_records`
- Sources: `ec-fmp-bref-2022`; `worldsteel-lci-methodology`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | all multi-output foreground operations | First avoid allocation by metering and subdividing steelmaking, rolling, annealing, coating, and recovery operations wherever separate process records are available. | `iso-20915-2018`; `worldsteel-lci-methodology` |
| `alloc_recovered_coproducts` | useful slag, process gases, recovered chemicals, and other co-products | When a recovered co-product displaces an external function, apply transparent system expansion consistent with the selected steel LCI method and report the substituted product, amount, substitution ratio, and sensitivity; do not apply an undocumented credit. | `worldsteel-lci-methodology` |
| `alloc_residual_multioutput` | inseparable residual multi-output operation | If subdivision and justified system expansion are not feasible, select a physical relationship that reflects the causal production process; otherwise use another justified relationship and disclose the method, factors, affected flows, and sensitivity. | `iso-20915-2018` |
| `alloc_scrap_transparency` | internal, pre-consumer, and post-consumer ferrous scrap | Distinguish internal returns from purchased pre-consumer and post-consumer scrap. Report any end-of-life recycling burden or credit separately from the cradle-to-gate result and prevent double counting with downstream models. | `worldsteel-lci-methodology`; `iso-20915-2018` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steelmaking_casting_records` | `steelmaking_and_casting` | all input, output, residue, and direct-emission rows | weighbridge, batch/heat, meter, laboratory, emissions-monitoring, and disposition records | heat_id; route; charge and alloy quantities; utility meter values; cast output; composition; residue type/mass/destination; emission substance/value/method | reconcile production, purchasing, meter, laboratory, and environmental records to heat/cast campaigns | source units, normalized to kg reference product | each heat/batch or continuous meter; monthly reconciliation | representative reporting year; shorter period of at least six months requires justification | all included steelmaking, casting, ancillary, recovery, and treatment units | sum by route and grade family, reconcile mass, then divide by conforming saleable mass linked downstream | calibrated instruments; invoices; laboratory certificates; meter coverage; environmental calculation protocol; reconciliation sign-off |
| `cp_hot_rolling_records` | `hot_rolling_and_surface_preparation` | substrate, operating inputs, prepared hot band, and residues | coil/slab tracking, furnace and utility meters, chemical issue, water, weighbridge, and waste records | heat_id; slab_id; input_mass; fuel; electricity; water; chemical; hot_band_mass; scale; trim; reject; residue_destination | link slab/hot-band identifiers through reheating, rolling, descaling, pickling, and transfer | source units, normalized to kg prepared hot band and reference product | each coil/campaign; monthly reconciliation | representative reporting year; shorter period requires justification | all included hot-rolling and surface-preparation lines | sum matched inputs/outputs by route and divide by conforming output mass | calibrated scales/meters; coil genealogy; material balance; waste transfer records |
| `cp_cold_processing_records` | `cold_rolling_and_annealing` | substrate, operating inputs, cold-processed output, residues, and emissions | coil genealogy, rolling/annealing logs, utility meters, process-gas and chemical issues, quality tests, and environmental records | coil_id; orientation_class; grade; input/output_mass; pass_sequence; anneal/decarburize route; electricity; fuel; gas; water; lubricant; chemical; residue; emission | link every cold-reduction and heat-treatment campaign to conforming product and monitored releases | source units, normalized to kg cold-processed output and reference product | each coil/campaign; continuous meters with monthly reconciliation | representative reporting year; route-specific campaigns shall cover normal operation | all included cold mills, annealing/decarburization, cleaning, and treatment units | aggregate separately by GOES/NOES, supply condition, and materially distinct route before any weighted mix | coil traceability; calibrated meters; laboratory/magnetic test records; treatment records; mass balance |
| `cp_finishing_dispatch_records` | `electrical_steel_finishing` | finishing substrate, coating/domain-refining/packaging inputs, reference product, residues, and emissions | coil/sheet tracking, coating and furnace records, domain-refining logs, quality certificates, scales, meters, packaging and waste records | coil_id; grade/specification; thickness; width; orientation_class; supply_condition; coating_type/mass; domain_refined; magnetic_test_basis/result; input_mass; saleable_mass; utility/consumable; reject/residue/destination | reconcile final operations and acceptance tests to invoiced saleable mass at the declared gate | source units, normalized to kg saleable reference product | each coil/lot; monthly reconciliation | representative reporting year and all declared product families | all included final annealing, coating, domain refinement, inspection, slitting, packaging, and dispatch operations | sum accepted saleable mass and linked burdens by qualified product family; production-mass-weight only compatible families | calibrated scales/meters; coating and magnetic test certificates; batch genealogy; invoice and dispatch reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every included inventory row | normalized amount = amount assigned to included production / net saleable reference-product mass at the declared gate | assigned foreground amount; saleable mass using the section 4 convention | amount per 1 kg reference product | `worldsteel-lci-methodology` |
| `calc_production_weighted_mix` | multi-route, multi-site, or multi-grade-family dataset | mixed amount = sum(amount_i × saleable_mass_i) / sum(saleable_mass_i); retain each component and weight | route/site/product-family results and net saleable masses | production-mass-weighted result with disclosed coverage | `worldsteel-lci-methodology` |
| `calc_process_mass_balance` | each foreground process and linked chain | reconcile identified mass inputs = product + co-product + waste + emission outputs + documented stock change; investigate rather than force-close material gaps | measured material inputs/outputs, emissions, and opening/closing stocks | process mass-balance statement and unresolved difference | `worldsteel-lci-methodology` |
| `calc_coating_mass` | coated product | integral coating mass shall be measured or calculated from verified coated area and coating mass per area, and the result shall use the same convention as reference product mass | coated area; coating mass per area or direct mass measurement; saleable product mass | coating mass and coating mass fraction | `iec-60404-8-4-2022`; `iec-60404-8-7-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain grade/specification, orientation class, supply condition, dimensions, coating, magnetic-test basis, and acceptance certificate linked to each represented product family. | coil/lot genealogy and conformity or inspection certificate; `iec-60404-8-4-2022`; `iec-60404-8-7-2020` |
| `dq_route_coverage` | process chain | Demonstrate that each applicable steelmaking, casting, rolling, annealing, texture-control, coating, recovery, utility, and treatment step is included or explicitly outside the foreground gate with an upstream dataset. | route diagram, process list, supplier-gate records, and `worldsteel-lci-methodology` |
| `dq_temporal_geographic` | foreground and upstream data | Prefer one representative year of site data; justify shorter periods of at least six months and use geography- and technology-representative energy and material datasets. | reporting-period reconciliation and dataset metadata; `worldsteel-lci-methodology` |
| `dq_meter_and_allocation` | shared utilities and multi-output processes | Document meter coverage, calibration, subdivision, allocation or substitution factors, and sensitivity for material shared burdens. | calibration records, meter map, calculation workbook, and allocation evidence |
| `dq_completeness` | all inventory rows | Account for known material, energy, water, emissions, wastes, co-products, ancillary utilities, internal transport, and treatment flows; document cut-offs and unresolved mass-balance differences. | completeness checklist, environmental reports, mass balance, and `worldsteel-lci-methodology` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Require product flow `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, reference unit kg, and a normalized amount of 1. | `worldsteel-lci-methodology` |
| `val_required_qualifiers` | dataset metadata and reference product | Fail completeness when any required qualifier in section 3 is absent, internally inconsistent, or not tied to the represented production mass. | `iec-60404-8-4-2022`; `iec-60404-8-7-2020` |
| `val_boundary_route` | process inventory | Require every route-applicable process in section 6 or a documented replacement/purchased-input gate; reject silent omission of grade-specific annealing, texture control, coating, or domain refinement. | `ec-fmp-bref-2022`; `doe-grid-supply-chain-2022`; `mehdi-et-al-2024` |
| `val_mass_and_yield` | each process and full chain | Require input/output/stock-change reconciliation, a documented disposition for trim, scale, scrap, rejects, coating residues, and sludge, and an explanation for unresolved differences. | `worldsteel-lci-methodology` |
| `val_route_aggregation` | mixed dataset | Require explicit production-mass weights and separate component results for materially different steelmaking routes, GOES/NOES families, semi-/fully processed states, and finishing routes. | `worldsteel-lci-methodology` |
| `val_allocation_recycling` | co-products and scrap | Require the selected allocation/system-expansion method, substitution facts, scrap categories, and end-of-life burden or credit to be disclosed; reject double counting between the cradle-to-gate result and downstream recycling. | `iso-20915-2018`; `worldsteel-lci-methodology` |
| `val_data_period_quality` | foreground package | Require reporting-period coverage, site scope, meter/calibration evidence, product genealogy, source-unit retention, conversion records, and disclosure of data gaps and estimates. | `worldsteel-lci-methodology` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` representing cradle-to-gate production of a declared flat-rolled silicon-electrical steel product family |
| downstream_use | LCA process and lifecycle-model inputs for transformers, motors, generators, magnetic components, electrical equipment, and material supply chains when the required product and route qualifiers match |
| allowed_use | Mass-based cradle-to-gate inventory, supplier or production-mix modelling, hotspot analysis, and downstream product studies with compatible geography, time, grade, supply condition, and allocation conventions |
| excluded_use | Direct comparative claims between electrical-steel grades or routes without equivalent function, magnetic performance, system boundary, data quality, and critical review; use as a dataset for fabricated laminations, cores, or complete equipment without added downstream processes |
| required_metadata | PCR id and version; product flow UUID; grade/specification; GOES/NOES class; semi-/fully processed condition; dimensions; coating and domain-refined status; magnetic test basis; steelmaking/casting/rolling/annealing route; site/geography; reporting period; factory gate; upstream dataset identities; allocation and recycling method; net saleable production mass |
| required_quality_disclosure | Primary-data share; meter and coil/heat genealogy coverage; temporal and geographic representativeness; mass-balance status; product-family and route weights; cut-offs; estimates; allocation/substitution factors; upstream data age; review status |
| update_trigger | Material change in grade or supply scope, production route, purchased-substrate share, annealing/coating/domain-refining technology, site or energy mix, allocation/recycling method, source standards, or representative data period; otherwise review at least when the site dataset exceeds the selected data-age policy |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-20915-2018` | standard | ISO 20915:2018, Life cycle inventory calculation methodology for steel products. https://www.iso.org/standard/69447.html (retrieved 2026-08-09) | Steel-product functional/declared unit, boundary, scrap, co-product, and reporting principles |
| `worldsteel-lci-methodology` | method_factor | World Steel Association, Life Cycle Inventory Methodology Report. https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-08-09) | One-kilogram factory-gate declared unit, cradle-to-gate boundary, route weighting, data collection, co-product system expansion, scrap, emissions, and quality rules |
| `ec-fmp-bref-2022` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, 2022. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf (retrieved 2026-08-09) | Hot rolling, descaling, pickling, cold rolling, annealing, finishing, surface treatment, emissions, and residue process decomposition |
| `iec-60404-8-4-2022` | standard | IEC 60404-8-4:2022, Cold-rolled non-oriented electrical steel strip and sheet delivered in the fully-processed state. https://webstore.iec.ch/en/publication/65821 (retrieved 2026-08-09) | NOES scope, fully processed/final-annealed supply condition, grades, magnetic/geometric/technological requirements, and inspection qualifiers |
| `iec-60404-8-7-2020` | standard | IEC 60404-8-7:2020, Cold-rolled grain-oriented electrical steel strip and sheet delivered in the fully processed state. https://webstore.iec.ch/en/publication/63884 (retrieved 2026-08-09) | GOES scope, final-annealed supply condition, conventional/high-permeability/domain-refined classes, dimensions, and inspection qualifiers |
| `doe-grid-supply-chain-2022` | official_guidance | U.S. Department of Energy, Electric Grid Supply Chain Deep Dive Assessment, 2022. https://www.energy.gov/sites/default/files/2024-12/Electric%2520Grid%2520Supply%2520Chain%2520Report%2520-%2520Final%5B1%5D.pdf (retrieved 2026-08-09) | GOES-specific melt/cast, hot rolling, trimming, annealing/pickling, cold rolling, orientation, coating, and domain-refining process distinctions |
| `mehdi-et-al-2024` | literature | Mehdi, M. et al., Manufacturing of non-grain-oriented electrical steels: review, International Journal of Advanced Manufacturing Technology (2024). https://doi.org/10.1007/s00170-024-13837-9 | GOES/NOES identity distinction and route-dependent casting, hot rolling, cold rolling, decarburization, annealing, texture, and skin-pass process structure |
