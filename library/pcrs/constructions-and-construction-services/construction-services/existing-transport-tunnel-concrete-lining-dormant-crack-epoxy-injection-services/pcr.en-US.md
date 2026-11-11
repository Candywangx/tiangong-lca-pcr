---
pcr_id: pcr.existing-transport-tunnel-concrete-lining-dormant-crack-epoxy-injection-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Epoxy injection repair of dormant cracks in existing transport tunnel concrete lining

## 1. Scope and Applicability

This PCR covers pressure injection of an engineer-qualified dormant crack in the retained concrete lining of an existing road or rail transport tunnel using an actual compatible low-viscosity two-component epoxy. It includes job-specific access/protection, cause and movement assessment, cleaning/preparation, surface seal and ports, dosing/mixing, injection, purge/cleanup, required cure, inspection, defect closure and signed repair acceptance. The retained lining remains in place.

Exclude new tunnels or linings, mining/water tunnels, active moving cracks, injection under hydrostatic pressure or with standing water, elastic polyurethane waterstop grouting, major concrete replacement, structural strengthening, tunnel traffic operation and later repair. The dormant-crack subset is a PCR boundary requiring engineer approval, not a claim that the example PDS proves every moving crack impossible. Neither resin laboratory strength nor acceptance of this bounded job guarantees restored structural capacity, watertightness or remaining tunnel life.

The US Sikadur52 PDS read here is Edition 9.23.2014, currently linked by the US product page. It supplies route evidence, not universal contemporary settings. Actual current regional product/label/SDS, approved method and owner requirements govern the concrete job; retain their revision dates and suitability approval. No universal injection pressure, port spacing, component density, mass ratio, kg/m or cure duration is prescribed. [Sources: `un-cpc3-2025`; `sika-sikadur52-us-2014`.]
## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-transport-tunnel-concrete-lining-dormant-crack-epoxy-injection-services |
| classification_refs | CPC 3.0 54222; narrower semantic subset; proposed mapping requires separate acceptance |
| covered_products | Accepted dormant concrete-lining crack epoxy injection repair service in an existing transport tunnel |
| excluded_products | New asset/lining; mining/water tunnels; active or hydrostatic-pressure cracks; PU leak stopping; major strengthening/replacement |
| representative_product | An owner-accepted unique treated crack path with recorded branch geometry in retained transport tunnel lining |
| production_route | Finite repair campaign: qualification and preparation; ports and cured surface seal; actual A/B dosing and mixing; pressure injection; cleanup and required cure; verification and closed defects |
| market_state | Bounded completed repair service at signed owner acceptance; no future maintenance or tunnel operation included |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted epoxy injection repair service of a dormant crack in existing transport tunnel concrete lining |
| How much | 1 m of accepted unique treated crack path; total accepted path length L measured in m |
| How well | Engineer-approved dormant crack, sound retained lining, no standing water/hydrostatic-pressure application; actual compatible materials and qualified prestate; actual fill, cure and owner-required verification passed; defects closed and acceptance signed |
| How long or cycle | One bounded repair campaign from qualification/access through acceptance; record preparation, injection, cure and acceptance periods, with shared assets spanning their complete lives; no assumed subsequent service life |
| reference_flow_link | `accepted_crack_repair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted epoxy injection repair of dormant concrete transport tunnel lining crack |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | Tunnel road/rail use and location; crack segment/branch map and unique path method; width/depth with units and uncertainty; lining state and structural role; cause/movement assessment; moisture/pressure state; actual component and seal/port identities; approved method and dated regional instructions; injection pressure/time/volume units and tolerance source; cure records; verification method/threshold units and owner source; accepted length L and acceptance date |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `unique_length` | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | L is the measured accepted unique treated crack path from cp_acceptance. Segment unions remove overlap and repeat injection; count branches once by approved map. Tunnel centreline length, ports, sides and passes do not multiply L. No positive reference output if L is zero or acceptance incomplete. |
| `component_conversion` | resin_a; hardener_b; atomic_seal_paste; cleaner; water; fuel | Mass | kg | Use net material mass after actual container/vehicle tare, before outward returns. Convert actual supplied volume only with material-specific measured or supplier-evidenced density at recorded temperature/state and compatible units. Record A/B volume dosing independently; a volume ratio is not a mass ratio. Geometry alone does not prove void volume or absorbed resin. |
| `utilities_units` | electricity; purchased_air; transport | Actual exchange property | kWh; m3; kg*km | Preserve metered energy units and supply boundary. Purchased-air volume must record pressure, temperature, reference conditions and unit; on-site compressor energy and purchased air are mutually exclusive for the same air. Transport uses net cargo kg times actual km; t*km equals 1000 kg*km only with compatible support and units. |
| `emission_units` | atomic_direct_species; atomic_fluid_release | Mass | kg | Record identified substance, receiving medium, actual measured/modelled basis and capture/retention/reaction terms. Separate whole uncontained fluid from partial reported species; 100% solids does not establish zero emissions. Unknown residual is not an emission. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing sound retained concrete tunnel lining and engineer-qualified dormant crack with documented cause/movement, dimensions, access and moisture/pressure state; preparation is included, not assumed completed |
| starting_condition_role | Retained host condition; no new lining exchange or replacement credit |
| product_classification_scope | Bounded transport tunnel repair service; water/mining tunnel works excluded |
| recursive_input_rule | If a subcontract supplies the same-category repair, record its actual bounded accepted service and declared boundary; use its upstream dataset without recursively recreating identical operations or duplicating our materials/utilities |
| upstream_dataset_requirement | Actual supplied component/consumable, utility, transport, asset and waste-treatment datasets require matching product/state/geography/period and declared included packaging/service boundary |
| disclosure | Declare retained host, all preparation and test work, campaign/batch/period boundary, actual supplier gates, custody, transport legs, shared assets, rejects and any omitted/unmeasured exchanges with consequences |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers pressure injection of an engineer-qualified dormant crack in the retained concrete lining of an existing road or rail transport tunnel using an actual compatible low-viscosity two-component epoxy. It includes job-specific access/protection, cause and movement assessment, cleaning/preparation, surface seal and ports, dosing/mixing, injection, purge/cleanup, required cure, inspection, defect closure and signed repair acceptance. The retained lining remains in place. Exclude new tunnels or linings, mining/water tunnels, active moving cracks, injection under hydrostatic pressure or with standing water, elastic polyurethane waterstop grouting, major concrete replacement, structural strengthening, tunnel traffic operation and later repair. The dormant-crack subset is a PCR boundary requiring engineer approval, not a claim that the example PDS proves every moving crack impossible. Neither resin laboratory strength nor acceptance of this bounded job guarantees restored structural capacity, watertightness or remaining tunnel life. The US Sikadur52 PDS read here is Edition 9.23.2014, currently linked by the US product page. It supplies route evidence, not universal contemporary settings. Actual current regional product/label/SDS, approved method and owner requirements govern the concrete job; retain their revision dates and suitability approval. No universal injection pressure, port spacing, component density, mass ratio, kg/m or cure duration is prescribed. [Sources: `un-cpc3-2025`; `sika-sikadur52-us-2014`.] | `un-cpc3-2025`; `sika-sikadur52-us-2014` |
| `host_and_route` | crack_treatment | Own actual incremental preparation/removal, minor job-caused repair and protection through signed acceptance. Keep retained lining outside new concrete production; no avoided replacement credit. Material treatment, seal, mixing, cure and inspection form one integrated job unless an actual independent physical handoff is evidenced. | un-cpc3-2025; sika-sikadur52-us-2014 |
| `qualification` | crack_treatment | Require sound clean compatible substrate and engineer-approved dormant crack; document contaminants and removal, dry/damp state without standing water, no hydrostatic-pressure injection, approved ports/surface seal and verified seal cure before injection. Actual regional instructions and owner approval govern suitability and application limits. | sika-sikadur52-us-2014 |
| `job_completeness` | crack_treatment | Include access, protection, ventilation, compressor/purchased air, dosing/mixing, injection, purge, cleaning, cure protection and testing. Enumerate campaign and mix batches, setup/changeover, rework and all periods until acceptance; unaccepted work retains burdens. | sika-sikadur52-us-2014 |
| `custody_boundary` | crack_treatment | Record gross net-of-tare receipts/issues before actual outward product returns; retained closing stock is no outward product exchange. Reconcile opening stock burden, purchases, internal issues, use, returns and closing carried-forward burden. Separate product returns, wastes and direct releases; supplier-included packaging/service cannot be charged twice. |  |
| `asset_boundary` | equipment_share_pump; equipment_share_mixer; equipment_share_compressor; equipment_share_access; equipment_share_protection; equipment_share_ventilation; atomic_equipment_share | Include complete-life manufacture, maintenance, replacements and end-of-life burdens of actual injection/mixing/access/ventilation/compression/protection assets. Enumerate all nodes/jobs/period consumers; exclude separately inventoried fuel, consumables/spares and tools from duplicated asset coverage. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| crack_treatment | Integrated qualification, material treatment, injection, cure and repair acceptance | required | Within qualified dormant-crack transport tunnel repair boundary | foreground material treatment in a finite campaign and actual mixing/injection batches | Accepted unique treated crack path L m |

### Process: Integrated crack treatment and acceptance (`crack_treatment`)

The prestate is retained engineer-qualified dormant cracked lining. The output is the injected, cured and verified bounded repair at signed acceptance. Surface sealing, component mixing, waiting and inspection have no separately evidenced physical handoff here. Setup, purge and failed batches/rework remain owned by this node; rejects become accepted only after closed defects and required verification.

#### Inputs

##### Product flows


###### Actual epoxy resin component A at supply gate (`resin_a`)

Record each actual supplied compatible resin component A formulation separately. Net-of-tare gross boundary receipts or opening-stock withdrawals remain distinct from dosing, outward returns and closing stock. Range evidence need: Need actual formulation, receipt/dose masses, uptake, purge/returns and accepted crack geometry; PDS coverage or 2:1 volume ratio cannot establish kg/m.

- Selected flow: Actual epoxy resin component A at supply gate
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare component A crossing into the job, separately reconciled by lot over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

###### Actual epoxy hardener component B at supply gate (`hardener_b`)

Record actual matched component B as its own supplied formulation and lot, not generic neat amine or mass-ratio inference from volume dosing. Range evidence need: Need actual B identity/density/state, gross receipts and batch doses; no universal mass ratio or hardener intensity.

- Selected flow: Actual epoxy hardener component B at supply gate
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare component B crossing into the job, separately reconciled by lot over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`


###### Actual expendable injection ports (`injection_ports`)

Record each actual expendable port material/configuration; reusable ports belong in asset service. Identify installed, removed, recovered and discarded quantities without double counting. Range evidence need: Need actual system-specific spacing, geometry and installed/recovery counts; port count is not accepted crack length.

- Selected flow: Actual expendable injection ports
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual gross supplied expendable ports of each identity over accepted L; retain individual unit mass if the concrete exchange needs mass conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

###### Actual supplied cleaning or purge chemical (`cleaner`)

Conditional: record each actual compatible cleaner/purge formulation independently by supplied wet state and intended job use. Distinguish equipment cleaning from concrete preparation; do not thin the injection resin. Range evidence need: Need actual approved cleaner identity/SDS, supplied quantity, retained/captured and waste/release records; no zero-solvent assumption from 100% solids.

- Selected flow: Actual supplied cleaning or purge chemical
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare cleaner or purge material supplied over accepted L, with destination/outlets reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

###### Actual supplied job water (`water`)

Conditional: record supplied water for actual cleaning, dust suppression or testing only where approved and performed, with destination and dry/damp qualification documented. Range evidence need: Need actual cleaning/test route, meter/receipt records and effluent/retained/weather balances; no presumed water use.

- Selected flow: Actual supplied job water
- Flow property / unit: Mass / kg
- Amount rule: Actual supplied water mass over accepted L; volume conversion requires actual water condition, temperature and density evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Preparation abrasive (`consumables_abrasive`)

One independently identified preparation abrasive. This is a conditional independent object supported within the original consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage.

- Selected flow: Preparation abrasive
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_consumables_abrasive_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cleaning wipe (`consumables_wipe`)

One independently identified cleaning wipe. This is a conditional independent object supported within the original consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage.

- Selected flow: Cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_consumables_wipe_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumable filter (`consumables_filter`)

One independently identified consumable filter. This is a conditional independent object supported within the original consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage.

- Selected flow: Consumable filter
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_consumables_filter_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Masking and protection product (`consumables_masking`)

One independently identified masking and protection product. This is a conditional independent object supported within the original consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage.

- Selected flow: Masking and protection product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_consumables_masking_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Spill absorbent product (`consumables_absorbent`)

One independently identified spill absorbent product. This is a conditional independent object supported within the original consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage.

- Selected flow: Spill absorbent product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_consumables_absorbent_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cleanup containment product (`consumables_containment`)

One independently identified cleanup containment product. This is a conditional independent object supported within the original consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage.

- Selected flow: Cleanup containment product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_consumables_containment_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Bounded minor-repair material (`consumables_repair`)

One independently identified bounded minor-repair material. This is a conditional independent object supported within the original consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage.

- Selected flow: Bounded minor-repair material
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_consumables_repair_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual purchased electricity (`electricity`)

Meter injection/mixing, access, ventilation, lighting, cleaning and on-site compression electricity attributable to this campaign. Expand actual supply boundaries/providers separately. Range evidence need: Need actual circuits, meter intervals, equipment load evidence and shared-time records including cure protection and failed work; Energy support must be verified for the actual exchange.

- Selected flow: Actual purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased electricity over accepted L, subtracting separately measured non-job loads once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

###### Actual supplied fuel whole-fluid input (`fuel`)

Conditional: record each actual fuel formulation separately. Use gross net-of-tare boundary input when unused returns/wastes/releases occur; derive burned fuel separately using mutually exclusive outlets. Do not treat total incident spill as another deduction. Range evidence need: Need actual fuel identity, gross quantity, density/state/temperature for volume conversion, burn and outlet records; no universal consumption or fuel factor.

- Selected flow: Actual supplied fuel whole-fluid input
- Flow property / unit: Mass / kg
- Amount rule: Actual gross supplied fuel mass over accepted L with opening/closing stock, outward unused fuel and captured/uncontained whole-fluid outlets reconciled; combustion activity is a separate balance result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

###### Actual purchased compressed air (`purchased_air`)

Conditional purchased-air alternative only for the air actually purchased; do not also charge local compressor energy for that supply. Record air quality and pressure appropriate to the approved route. Range evidence need: Need actual supply boundary, measured volume/reference conditions and approved use; no universal air intensity or pressure.

- Selected flow: Actual purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Actual purchased air at recorded reference pressure/temperature conditions over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

###### Actual attributable freight transport service (`transport`)

Conditional: expand each actual cargo/vehicle/mode/route leg with provider and included-boundary evidence, covering deliveries, true returns and waste movements once. Empty travel and worker/access service require actual separate treatment rather than invented cargo. Range evidence need: Need actual cargo net-of-tare masses, distances, loading and provider boundaries; no universal haul distance.

- Selected flow: Actual attributable freight transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual leg net cargo kg times actual leg km attributable to this job, per accepted L; do not duplicate supplier-included delivery or waste treatment transport.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`

###### Injection pump asset equivalent (`equipment_share_pump`)

One independently identified injection pump asset equivalent. This is a conditional independent object supported within the original equipment_share scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed.

- Selected flow: Injection pump asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator L for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by L once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by L once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Injection mixer asset equivalent (`equipment_share_mixer`)

One independently identified injection mixer asset equivalent. This is a conditional independent object supported within the original equipment_share scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed.

- Selected flow: Injection mixer asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator L for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by L once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by L once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Compressor asset equivalent (`equipment_share_compressor`)

One independently identified compressor asset equivalent. This is a conditional independent object supported within the original equipment_share scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed.

- Selected flow: Compressor asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator L for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by L once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by L once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Access equipment asset equivalent (`equipment_share_access`)

One independently identified access equipment asset equivalent. This is a conditional independent object supported within the original equipment_share scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed.

- Selected flow: Access equipment asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator L for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by L once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by L once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Reusable protection asset equivalent (`equipment_share_protection`)

One independently identified reusable protection asset equivalent. This is a conditional independent object supported within the original equipment_share scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed.

- Selected flow: Reusable protection asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator L for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by L once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by L once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Ventilation equipment asset equivalent (`equipment_share_ventilation`)

One independently identified ventilation equipment asset equivalent. This is a conditional independent object supported within the original equipment_share scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed.

- Selected flow: Ventilation equipment asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator L for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by L once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by L once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

No waste is received as a treatment feed in this route.

##### Elementary flows

No default elementary resource extraction is added for product-supplied materials.

#### Outputs

##### Product flows

###### Accepted epoxy injection repair of dormant concrete transport tunnel lining crack (`accepted_crack_repair`)

Signed owner-accepted injected and cured unique crack path, with required verification passed and defects closed. A repeat pass, port, crack face or rejected segment creates no extra output. Range evidence need: 1 m is the exact reference definition, not an empirical yield range; actual unique accepted L, geometry and acceptance uncertainty are required.

- Selected flow: Accepted epoxy injection repair of dormant concrete transport tunnel lining crack
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `sika-sikadur52-us-2014`

###### Usable resin A outward return (`product_returns_resin_a`)

One independently identified usable resin a outward return. This is a conditional independent object supported within the original product_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand true outward unused resin A, B, seal, cleaner, fuel and other mass-based materials into separate identity/state/custody exchanges. This is not retained closing stock, internal movement or waste. Match gross input identity and avoid netting before counting return.

- Selected flow: Usable resin A outward return
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_product_returns_resin_a_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net-of-tare mass kg of each unused material or fuel leaving job custody over accepted L; match its gross input identity/state and declared burden transfer. No return credit without declared burden treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable hardener B outward return (`product_returns_hardener_b`)

One independently identified usable hardener b outward return. This is a conditional independent object supported within the original product_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand true outward unused resin A, B, seal, cleaner, fuel and other mass-based materials into separate identity/state/custody exchanges. This is not retained closing stock, internal movement or waste. Match gross input identity and avoid netting before counting return.

- Selected flow: Usable hardener B outward return
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_product_returns_hardener_b_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net-of-tare mass kg of each unused material or fuel leaving job custody over accepted L; match its gross input identity/state and declared burden transfer. No return credit without declared burden treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable seal formulation outward return (`product_returns_seal`)

One independently identified usable seal formulation outward return. This is a conditional independent object supported within the original product_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand true outward unused resin A, B, seal, cleaner, fuel and other mass-based materials into separate identity/state/custody exchanges. This is not retained closing stock, internal movement or waste. Match gross input identity and avoid netting before counting return.

- Selected flow: Usable seal formulation outward return
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_product_returns_seal_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net-of-tare mass kg of each unused material or fuel leaving job custody over accepted L; match its gross input identity/state and declared burden transfer. No return credit without declared burden treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable cleaner outward return (`product_returns_cleaner`)

One independently identified usable cleaner outward return. This is a conditional independent object supported within the original product_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand true outward unused resin A, B, seal, cleaner, fuel and other mass-based materials into separate identity/state/custody exchanges. This is not retained closing stock, internal movement or waste. Match gross input identity and avoid netting before counting return.

- Selected flow: Usable cleaner outward return
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_product_returns_cleaner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net-of-tare mass kg of each unused material or fuel leaving job custody over accepted L; match its gross input identity/state and declared burden transfer. No return credit without declared burden treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable fuel outward return (`product_returns_fuel`)

One independently identified usable fuel outward return. This is a conditional independent object supported within the original product_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand true outward unused resin A, B, seal, cleaner, fuel and other mass-based materials into separate identity/state/custody exchanges. This is not retained closing stock, internal movement or waste. Match gross input identity and avoid netting before counting return.

- Selected flow: Usable fuel outward return
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_product_returns_fuel_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net-of-tare mass kg of each unused material or fuel leaving job custody over accepted L; match its gross input identity/state and declared burden transfer. No return credit without declared burden treatment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual unused expendable ports returned outside job custody (`port_returns`)

Conditional: record each actual unused expendable port identity/configuration returned across the job custody boundary, matching injection_ports gross input. Retained stock, installed/removed waste ports and internal movements are separate. Range evidence need: Need signed outward custody receipts, matching gross input port identity/configuration and actual counts; no universal port return fraction.

- Selected flow: Actual unused expendable ports returned outside job custody
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual count Item(s) of each unused expendable port leaving job custody over accepted L; match gross input identity and declared burden transfer without netting input first.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

##### Waste flows

###### Captured uncontaminated concrete debris (`concrete_debris_clean`)

One independently identified captured uncontaminated concrete debris. This is a conditional independent object supported within the original concrete_debris scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: collected debris from actual bounded preparation or minor job-caused remedies; retained host is not entirely demolished. Expand contaminated and clean destination-specific wastes separately.

- Selected flow: Captured uncontaminated concrete debris
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_concrete_debris_clean_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual captured net debris mass over accepted L, excluding container tare and separately reported water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Captured contaminated concrete debris (`concrete_debris_contaminated`)

One independently identified captured contaminated concrete debris. This is a conditional independent object supported within the original concrete_debris scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: collected debris from actual bounded preparation or minor job-caused remedies; retained host is not entirely demolished. Expand contaminated and clean destination-specific wastes separately.

- Selected flow: Captured contaminated concrete debris
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_concrete_debris_contaminated_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual captured net debris mass over accepted L, excluding container tare and separately reported water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Uncured resin A waste (`epoxy_waste_resin_a`)

One independently identified uncured resin a waste. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Uncured resin A waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_resin_a_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Uncured hardener B waste (`epoxy_waste_hardener_b`)

One independently identified uncured hardener b waste. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Uncured hardener B waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_hardener_b_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Uncured mixed epoxy waste (`epoxy_waste_mixed_uncured`)

One independently identified uncured mixed epoxy waste. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Uncured mixed epoxy waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_mixed_uncured_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cured epoxy waste (`epoxy_waste_mixed_cured`)

One independently identified cured epoxy waste. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Cured epoxy waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_mixed_cured_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Seal-paste waste (`epoxy_waste_seal`)

One independently identified seal-paste waste. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Seal-paste waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_seal_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Collected purge residue (`epoxy_waste_purge`)

One independently identified collected purge residue. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Collected purge residue
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_purge_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Contaminated wipe waste (`epoxy_waste_wipe`)

One independently identified contaminated wipe waste. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Contaminated wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_wipe_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Contaminated filter waste (`epoxy_waste_filter`)

One independently identified contaminated filter waste. This is a conditional independent object supported within the original epoxy_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor.

- Selected flow: Contaminated filter waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_epoxy_waste_filter_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual collected wastewater sent for treatment (`wastewater`)

Conditional: record actual collected cleaning/testing water and contaminants by receiver and treatment gate; include moisture/water balance without assuming all supplied water becomes wastewater. Range evidence need: Need actual collected volume or mass, density/temperature/state if converted, composition and receiver; no default effluent fraction.

- Selected flow: Actual collected wastewater sent for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual outgoing wastewater net mass over accepted L with measured concentration/load where used in treatment modelling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Discarded product container (`packaging_waste_container`)

One independently identified discarded product container. This is a conditional independent object supported within the original packaging_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual empty containers, packaging materials and discarded ports by material, residual contamination and receiver. Returned reusable packaging is an actual product return only when outward custody is documented.

- Selected flow: Discarded product container
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_packaging_waste_container_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net outgoing mass of each packaging/removed-port waste over accepted L; do not re-charge manufacture already inside supplied-product dataset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded packaging material (`packaging_waste_packaging`)

One independently identified discarded packaging material. This is a conditional independent object supported within the original packaging_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual empty containers, packaging materials and discarded ports by material, residual contamination and receiver. Returned reusable packaging is an actual product return only when outward custody is documented.

- Selected flow: Discarded packaging material
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_packaging_waste_packaging_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net outgoing mass of each packaging/removed-port waste over accepted L; do not re-charge manufacture already inside supplied-product dataset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded injection port (`packaging_waste_port`)

One independently identified discarded injection port. This is a conditional independent object supported within the original packaging_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Conditional: expand actual empty containers, packaging materials and discarded ports by material, residual contamination and receiver. Returned reusable packaging is an actual product return only when outward custody is documented.

- Selected flow: Discarded injection port
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_packaging_waste_port_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator L; L=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net outgoing mass of each packaging/removed-port waste over accepted L; do not re-charge manufacture already inside supplied-product dataset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_campaign` | crack_treatment | Directly assign finite campaign and batch inputs, outputs, setup/changeover, purge/cleaning and all failed injection/cure/test/rework to the accepted unique crack path L. Reject unresolved or zero-L jobs as incomplete, not zero-burden service. Branches/repeat passes never multiply output. Shared campaign events have one owner; use measured causal time/activity for different jobs with documented reconciliation, never resin value as default allocation. |  |
| `return_and_stock_burden` | resin_a; hardener_b; atomic_seal_paste; injection_ports; cleaner; water; consumables_abrasive; consumables_wipe; consumables_filter; consumables_masking; consumables_absorbent; consumables_containment; consumables_repair; atomic_consumables; fuel; product_returns_resin_a; product_returns_hardener_b; product_returns_seal; product_returns_cleaner; product_returns_fuel; atomic_product_returns; port_returns | Track separate physical and upstream-burden ledgers by lot/state/period: opening stock retains its carried burden, new gross receipts introduce matching burden, outward returns transfer declared actual burden, and retained closing stock carries burden forward without outward exchange. Job-assigned burden plus outgoing transfer burden plus closing burden must reconcile opening plus new burden. Internal issue is not an additional purchased receipt. No automatic return/recycling/avoided-production credit. |  |
| `shared_asset_life` | equipment_share_pump; equipment_share_mixer; equipment_share_compressor; equipment_share_access; equipment_share_protection; equipment_share_ventilation; atomic_equipment_share | For each asset enumerate all jobs, nodes and periods, including this node; use measured compatible service driver to assign one complete-life burden share. Completed lives use observed service and retirement; in-service lives combine observed history and justified prospective remaining service/replacements/termination/EOL, labelled and sourced with uncertainty, sensitivity and updates. Missing scope/denominator blocks finalisation. Do not duplicate direct operating fuel, separately counted spare/consumable/tool coverage or another asset/rental dataset. |  |
| `period_and_reject` | crack_treatment | Link preparation, batches, injection, cure/protection, verification and defect closure to actual periods and the same job. Unused returned products retain identity/custody; failed or discarded materials take actual product-return, rework or waste paths. No rejected material or incomplete repair contributes accepted length. Common equipment and stock crossing periods carry one linked burden balance, not repeated charges. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

All quantities are produced from actual records per accepted L; conditional semantic cards expand into each distinct actual exchange identity before downstream dataset finalisation. Absence requires evidence, not an assumed zero. Raw fields preserve explicit measurement units and actual tolerance sources.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | crack_treatment | accepted crack and qualification | survey; owner acceptance | job_id; period_id; tunnel_use; lining_state; structural_role; cause_movement_assessment; segment_id; branch_id; start_end_coordinates_m; unique_segment_length_m; crack_width_mm; crack_depth_mm; geometry_uncertainty_mm; moisture_state; standing_water_observation; hydrostatic_pressure_state; approved_method_revision; current_regional_PDS_revision; current_label_revision; current_SDS_revision; product_suitability_approval; seal_cure_record; batch_id; injection_pressure_value; injection_pressure_unit; injection_pressure_tolerance; injection_volume_value; injection_volume_unit; injection_duration_value; injection_duration_unit; substrate_temperature_C; ambient_temperature_C; cure_start_end_UTC; cure_duration_h; cure_condition_records; verification_method; verification_result_value; verification_result_unit; acceptance_threshold_value; acceptance_threshold_unit; acceptance_tolerance; owner_criteria_source; defect_id; defect_closure; acceptance_signatory; accepted_date; accepted_length_L_m | Survey crack map and dimensions before work and accepted segments after required verification. Record actual clean/sound/ported/cured-seal prestate, dosing/injection records and product-specific cure conditions; trace owner thresholds/tolerances with units to dated sources. Sum union of accepted unique segments L; exclude unaccepted portions/repeats and retain their burdens. | m; mm; actual pressure/volume/time units; C; h | Each segment, batch and acceptance | Qualification to signed acceptance, including failed/repeated work | Same bounded retained lining and job | per reference flow | Approved map, calibration/uncertainty, dated method/product/owner criteria, signed acceptance and closed defects |
| cp_material | crack_treatment | supplied materials and outward product returns | lot mass/custody ledger | job_id; period_id; batch_id; lot_id; concrete_identity; supplied_state; supplier_boundary; receipt_gross_kg; receipt_container_tare_kg; receipt_net_kg; opening_stock_kg; opening_stock_count_items; new_receipt_kg; new_receipt_count_items; internal_issue_kg; internal_issue_count_items; dose_A_volume_value; dose_A_volume_unit; dose_B_volume_value; dose_B_volume_unit; volume_value; volume_unit; density_value; density_unit; density_temperature_C; density_state; density_source_revision; count_items; unit_mass_kg_per_item; used_kg; actual_dosed_kg; outward_return_kg; outward_return_count_items; return_custody_receipt; closing_stock_kg; closing_stock_count_items; installed_retained_kg; installed_retained_count_items; captured_waste_kg; captured_waste_count_items; port_disposition_event_id; port_disposition_record; uncontained_release_kg; reaction_mass_terms_kg; opening_burden_record; new_burden_record; return_burden_transfer; closing_burden_carry_forward; included_packaging_services; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh gross and tare before netting any return, or use traceable supplier net contents with receipt checks. Keep separate identity/state lot ledgers and actual component volume doses; collect density/temperature/state/units for every volume conversion and unit mass for count conversion. Reconcile opening stock and new receipts without counting an opening-stock internal issue as a second input. Actual dose/used quantity is intermediate activity, not an additive final destination; installed/retained quantities exclude all separately recorded return, waste and release outlets. Reconcile mass-based material returns in kg and expendable-port returns in Item(s) with actual matching gross inputs and outward custody; keep closing stock/burden separate. Record discarded expendable-port Item(s) from actual event/disposition evidence, never infer discarded count from contaminated mixed-waste kg; keep the waste mass separately measured or supported by matching actual per-port mass. Material destination terms require records, not assumed losses. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; Item(s); actual volume and density units; C | Each receipt, issue, batch, return and closing stock | All job periods with opening/closing balances | Each actual material/lot and supplier gate | per reference flow | Calibrated scales, supplier actual labels/SDS/density evidence, custody receipts and physical/upstream-burden reconciliation |
| cp_utilities | crack_treatment | electricity fuel and purchased air | meter; fuel and air ledger | job_id; period_id; batch_id; equipment_id; utility_identity; supplier_boundary; meter_start_kWh; meter_end_kWh; nonjob_kWh; service_time_h; power_kW; fuel_opening_kg; fuel_gross_receipt_kg; fuel_container_tare_kg; fuel_net_receipt_kg; fuel_closing_kg; fuel_unused_return_kg; fuel_captured_waste_kg; fuel_uncontained_wholefluid_kg; fuel_other_outlet_kg; fuel_volume_value; fuel_volume_unit; fuel_density_value; fuel_density_unit; fuel_temperature_C; fuel_state; fuel_density_source; incident_total_spill_kg; purchased_air_volume_m3; air_pressure_value; air_pressure_unit; air_temperature_C; air_reference_conditions; air_quality; air_supply_boundary; factor_source_revision | Read actual circuits/meters for injection, mixing, access, ventilation and cure protection. For shared loads use measured service time/load and documented causal attribution; reconcile entire run. Fuel gross inputs/outward outlets determine burned activity; incident total only audits mutually exclusive partition. Purchased-air reference conditions and local-compressor boundary avoid double supply. | kWh; h; kW; kg; actual volume/density/pressure units; C; m3 | Each meter interval, fuel transfer, batch and incident | Setup through closure including idle/cure and failed work | Actual equipment circuits and fuel/air suppliers | per reference flow | Meter calibration, measured driver, stock/custody/outlet reconciliation and actual supply conditions |
| cp_transport | crack_treatment | freight service | cargo and route leg records | job_id; period_id; leg_id; cargo_identity; vehicle_mode; provider; gross_cargo_container_kg; container_tare_kg; net_cargo_kg; actual_distance_km; loading_share; empty_leg_treatment; outward_return_link; waste_transfer_link; included_delivery_boundary | Pair actual net cargo with actual route distance for each leg; disclose loading/shared-leg and empty-travel method. Verify whether supplied product or receiver treatment already includes this transport and retain one owner. | kg; km; kg*km | Each actual leg | All deliveries, returns and wastes for the job | Actual origin/destination and provider | per reference flow | Weighbills, custody records, route evidence and supplier boundary check |
| cp_assets | crack_treatment | complete-life equipment shares | asset service and burden history/scenario | job_id; asset_id; asset_configuration; consuming_job_id; consuming_node_id; consuming_period_id; service_driver_unit; job_service; all_consumer_observed_service; future_remaining_service; complete_life_service; manufacture_burden_scope; maintenance_history; replacement_history; observed_retirement_EOL; future_replacement_scenario; future_termination_EOL_scenario; forecast_source; forecast_uncertainty; sensitivity_cases; excluded_direct_fuel; excluded_spares_consumables_tools; rental_included_scope; update_trigger; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Record injection/mixing, compressor, access/protection and ventilation assets separately and enumerate every consumer/period. Use compatible measured causal service units; obtain complete-life manufacture/maintenance/replacement/EOL coverage with observed and justified future portions explicitly distinguished. Document rental scope and remove overlaps; test denominator uncertainty and update when evidence changes. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | Item(s) equivalent; actual service-driver unit | Each asset service interval and scenario update | Complete observed life or observed history plus justified prospective remaining life | All consuming jobs/nodes/periods of each asset | per reference flow | Asset registers, service logs, burden dataset scope, observed retirement or justified sourced future scenarios; incomplete coverage/denominator blocks finalisation |
| cp_waste | crack_treatment | actual waste exits | net weights; receiver records | job_id; period_id; batch_id; incident_id; waste_identity; material_state; wet_dry_basis; composition; contamination; container_gross_kg; container_tare_kg; net_waste_kg; water_content_kg; wastewater_volume_value; wastewater_volume_unit; wastewater_density_value; wastewater_density_unit; wastewater_temperature_C; wastewater_state; concentration_value; concentration_unit; receiver; treatment_gate; custody_transfer; included_transport; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Segregate concrete debris, cured/uncured epoxy/seal/cleaner residues, wipes/filters, wastewater and packaging/removed ports by actual identity/state and receiver. Weigh gross/tare; water and contaminants are explicit; convert volume only with evidenced density/state/temperature. Verify receiver and included transport, keeping actual outward product returns and environmental releases separate. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; actual volume/density/concentration units; C | Each removal, container and custody transfer | Entire job including failures and cleanup | Actual producing node and destination | per reference flow | Scale evidence, composition/moisture records, signed receiver transfers and treatment boundary |
| cp_emissions | crack_treatment | direct and incident identified constituent releases | measurement; activity-factor; incident balance | job_id; period_id; batch_id; incident_id; concrete_substance; CAS_or_identity; receiving_medium; particle_size_basis; measurement_value; measurement_unit; sampling_duration_h; instrument_calibration; emission_activity; activity_unit; emission_factor_value; emission_factor_unit; factor_source_revision; fuel_burned_kg; actual_SDS_revision; component_mass_fraction; composition_fraction_basis; composition_fraction_source_revision; medium_fate_fraction; fate_fraction_basis; fate_fraction_source_revision; incident_constituent_measured_kg; retained_kg; captured_kg; reaction_terms_kg; incident_total_kg; recovered_product_kg; captured_waste_kg; uncontained_wholefluid_kg; liquid_volume_value; liquid_volume_unit; liquid_density_value; liquid_density_unit; liquid_temperature_C; liquid_state; host_moisture_kg; weather_water_kg; balance_uncertainty_kg; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status; incident_total_kg; recovered_product_kg; captured_waste_kg; incident_cutoff; tracked_mass_basis; reaction_counterpart; retention_custody | Identify substance and medium before elementary exchange; use actual measurements or compatible documented species-specific activity/factor and control conditions. For elementary exchanges use actual measured released constituent kg or whole-fluid kg times evidenced constituent mass fraction and medium-specific fate fraction, retaining fraction basis/source and uncertainty. Whole formulation is not an elementary exchange. Give each substance/medium/event one owner, exclude fluid_release incident constituents from direct_species, and prevent whole-fluid/partial-species double counting. Separate supplied water, dry solids, retained-host moisture and evidenced weather terms; investigate unknown residual rather than assign emission. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. Physical incident ledger only: incident_total_kg is the measured affected whole-fluid mass before recovery, capture, retention and environmental release, excluding ordinary intended application outside this incident. uncontained_wholefluid_kg = incident_total_kg + reaction_terms_kg - recovered_product_kg - captured_waste_kg - retained_kg. All final pools use the same incident, cutoff, material basis and net-mass unit and are mutually exclusive. retained_kg is independently measured material remaining inside the technosphere outside recovered product and captured waste, including attached residue; retained storage must not be counted again in either outlet. reaction_terms_kg is only an independently evidenced signed net addition/removal of mass across the defined tracked-fluid basis due to actual reaction, with the counterpart and state conversion recorded; it is not a closure residual, a second constituent fraction or an assumed loss. Evidence of no reaction permits zero; unknown retention, reaction or any further fate blocks this balance-derived route and requires complete fate evidence or independent release measurement. For each identified constituent/medium elementary exchange use measured released constituent kg / L, or independently supported uncontained_wholefluid_kg times evidenced constituent mass fraction times actual medium-specific release/fate fraction / L. Retain composition/state and fate evidence at the release state; already released species mass gets no second fraction. Whole-fluid mass remains a nonadditive physical audit; no duplicate whole-fluid and partial-species impact exchange. | kg; actual activity/factor/measurement/volume/density units; C; h | Each relevant batch/incident and emission measurement period | Full job and actual emission duration | Actual node and receiving medium | per reference flow | SDS/composition, factor applicability or measurement QA, capture/recovery records and uncertainty-qualified balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_union` | accepted_crack_repair | L = length of union of accepted unique crack segments in m; normalized reference output amount = 1 m; exclude rejected/incomplete segments and repeat passes. | cp_acceptance; accepted segment map | L m and 1 m reference service |  |
| `job_intensity` | resin_a; hardener_b; atomic_seal_paste; injection_ports; cleaner; water; consumables_abrasive; consumables_wipe; consumables_filter; consumables_masking; consumables_absorbent; consumables_containment; consumables_repair; atomic_consumables; electricity; fuel; purchased_air; product_returns_resin_a; product_returns_hardener_b; product_returns_seal; product_returns_cleaner; product_returns_fuel; atomic_product_returns; port_returns; concrete_debris_clean; concrete_debris_contaminated; atomic_concrete_debris; epoxy_waste_resin_a; epoxy_waste_hardener_b; epoxy_waste_mixed_uncured; epoxy_waste_mixed_cured; epoxy_waste_seal; epoxy_waste_purge; epoxy_waste_wipe; epoxy_waste_filter; atomic_epoxy_waste; wastewater; packaging_waste_container; packaging_waste_packaging; packaging_waste_port; atomic_packaging_waste | For each separately identified exchange, intensity = attributable actual campaign amount / L; L is accepted unique crack path in m. Keep campaign failed/repeated work in numerator; no output if L is zero. | cp_acceptance; cp_material; cp_utilities; cp_waste; actual exchange amounts | Each actual exchange unit per 1 m accepted crack path |  |
| `net_and_volume` | resin_a; hardener_b; atomic_seal_paste; cleaner; water; fuel; wastewater; atomic_fluid_release | Net mass = gross mass - actual container/vehicle tare before outward return deduction. When required, mass kg = actual volume times identity/state/temperature-specific density with evidenced unit conversion; count mass = actual count times measured matching unit mass. Volume dosing ratio is checked in its original units, never assumed to be a mass ratio. | cp_material; cp_utilities; cp_waste; cp_emissions; actual density and units | Traceable net mass and actual original dosing record |  |
| `material_custody` | resin_a; hardener_b; atomic_seal_paste; injection_ports; cleaner; water; consumables_abrasive; consumables_wipe; consumables_filter; consumables_masking; consumables_absorbent; consumables_containment; consumables_repair; atomic_consumables; product_returns_resin_a; product_returns_hardener_b; product_returns_seal; product_returns_cleaner; product_returns_fuel; atomic_product_returns; port_returns | For each lot/state in consistent physical units, opening stock + new gross net-of-tare receipts = installed/retained material + outward unused returns + captured waste + actual uncontained whole-fluid release + retained closing stock + evidenced reaction/other terms, with uncertainty stated. Installed/retained material excludes every separately recorded loss/outlet; actual dosed/used quantity is intermediate activity, never an additive final destination. Opening-stock internal issues are movements, not additional receipts. For expendable ports reconcile the same mutually exclusive destinations in Item(s). Opening burden + new burden = job-assigned burden + outward transferred burden + closing carried-forward burden. | cp_material; cp_waste; cp_emissions; custody and burden ledgers | Physical and upstream-burden closure by lot/period |  |
| `fuel_activity` | fuel; atomic_direct_species; atomic_fluid_release | Burned fuel kg = opening fuel + gross net-of-tare new fuel - closing fuel - unused outward return - captured fuel waste - uncontained whole-fluid fuel - evidenced other nonburned outlet. Reconcile the incident total under fluid_partition, including independently evidenced retained material and any supported signed reaction term at the same cutoff. Assign each retained fuel fate once to closing fuel or the separately evidenced other nonburned outlet; never subtract it in both. Actual recovered product takes its documented final stock/return fate, not an additional deduction. Total spill is audit-only and is not subtracted again; unknown fate blocks derived burn. | cp_utilities; cp_waste; cp_emissions | Burned kg and reconciled fluid outlets; intensity divided by L |  |
| `freight_activity` | transport | For each leg, transport intensity = actual net cargo kg times actual km times evidenced job share / L. Preserve compatible provider boundary and kg*km reference; conversion from t*km multiplies by 1000 only with confirmed support. | cp_transport; cp_acceptance | kg*km per 1 m accepted crack path |  |
| `asset_fraction` | equipment_share_pump; equipment_share_mixer; equipment_share_compressor; equipment_share_access; equipment_share_protection; equipment_share_ventilation; atomic_equipment_share | For each asset, intensity Item(s) equivalent = (attributable job service / complete-life all-consumer service) / L; multiply the fraction by matching complete-life manufacture/maintenance/replacement/EOL burden. Service numerator and denominator use the same actual driver unit. Observed and justified future portions and overlaps remain explicit. | cp_assets; cp_acceptance; complete-life burden scope | Asset-specific equivalent fraction and burden per 1 m accepted crack path |  |
| `species_release` | atomic_direct_species | For each routine substance/medium/event, intensity kg = actual measured release kg / L, or actual compatible activity times documented substance-specific factor times applicable uncaptured fraction / L. Use burned fuel activity when factor requires combustion; account retention/capture/reaction explicitly without assumed 100% solids zero. Exclude incident constituent exchanges assigned to fluid_release; one owner per substance/medium/event, never a generic mixed-formulation elementary exchange. | cp_emissions; cp_utilities; cp_acceptance; actual factor/measurement and controls | Species/medium-specific kg per 1 m accepted crack path |  |
| `fluid_partition` | atomic_fluid_release | Physical incident ledger only: incident_total_kg is the measured affected whole-fluid mass before recovery, capture, retention and environmental release, excluding ordinary intended application outside this incident. uncontained_wholefluid_kg = incident_total_kg + reaction_terms_kg - recovered_product_kg - captured_waste_kg - retained_kg. All final pools use the same incident, cutoff, material basis and net-mass unit and are mutually exclusive. retained_kg is independently measured material remaining inside the technosphere outside recovered product and captured waste, including attached residue; retained storage must not be counted again in either outlet. reaction_terms_kg is only an independently evidenced signed net addition/removal of mass across the defined tracked-fluid basis due to actual reaction, with the counterpart and state conversion recorded; it is not a closure residual, a second constituent fraction or an assumed loss. Evidence of no reaction permits zero; unknown retention, reaction or any further fate blocks this balance-derived route and requires complete fate evidence or independent release measurement. For each identified constituent/medium elementary exchange use measured released constituent kg / L, or independently supported uncontained_wholefluid_kg times evidenced constituent mass fraction times actual medium-specific release/fate fraction / L. Retain composition/state and fate evidence at the release state; already released species mass gets no second fraction. Whole-fluid mass remains a nonadditive physical audit; no duplicate whole-fluid and partial-species impact exchange. | cp_emissions; cp_waste; cp_material; cp_utilities; cp_acceptance; incident_total_kg; recovered_product_kg; captured_waste_kg; retained_kg; reaction_terms_kg; incident_cutoff; tracked_mass_basis; reaction_counterpart; retention_custody | Whole-fluid physical ledger only; identified constituent/medium kg per 1 m accepted crack path |  |
| atomic_child_normalization | consumables_abrasive; consumables_wipe; consumables_filter; consumables_masking; consumables_absorbent; consumables_containment; consumables_repair; equipment_share_pump; equipment_share_mixer; equipment_share_compressor; equipment_share_access; equipment_share_protection; equipment_share_ventilation; product_returns_resin_a; product_returns_hardener_b; product_returns_seal; product_returns_cleaner; product_returns_fuel; concrete_debris_clean; concrete_debris_contaminated; epoxy_waste_resin_a; epoxy_waste_hardener_b; epoxy_waste_mixed_uncured; epoxy_waste_mixed_cured; epoxy_waste_seal; epoxy_waste_purge; epoxy_waste_wipe; epoxy_waste_filter; packaging_waste_container; packaging_waste_packaging; packaging_waste_port | Record independent_physical_quantity separately by atomic_flow_row_id; actual_<row_id>_quantity is its named alias only, never a copied family amount. Materials retain original CP per-identity/state gross/net stock and outward-return conventions; transfers use actual paired custody quantity; usable exits and wastes use independent actual fate quantities. Owned assets use this PCR original job_driver/full_life_driver complete-life asset-equivalent method including manufacture, maintenance, replacement and end of life, with complete every-consumer positive denominator. Purchased services use only actual complete physical tasks whose real contract defines Item(s), with original actual attribution; hours, days and prices cannot become event counts. atomic_child_intensity = independent_physical_quantity / L, where L is unique finally accepted crack path union length in m under the original acceptance rule; L=0 blocks normalization. Non-exchange parent role ledgers and original CP operands retain their stock, transfer, closure and ownership functions, without adding a second exchange or changing the method. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; L; cp_material; cp_assets; cp_waste; cp_emissions | atomic_child_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `gate_quality` | accepted_crack_repair | Trace actual dormant cause/movement assessment, sound compatible substrate and moisture/pressure prestate, actual seal cure and product suitability; record injection/cure/verification units, actual thresholds/tolerances and dated owner source. All defects closed before signed length acceptance. | cp_acceptance; sika-sikadur52-us-2014 |
| `separate_identity` | all inventory rows | Every actual material, utility, waste and emission needs concrete identity/state/supplier or receiver, actual property/unit and verified final UUID. Conditional cards require disaggregation before dataset finalisation; unresolved is not verified absence. | Actual labels/SDS/custody and detail/support verification |
| `range_quality` | all inventory rows | Collect actual geometry, uptake, batch/setup/purge/waste/utility and shared-equipment evidence before proposing quantitative intensity ranges. Exact 1 m definition is not an empirical yield prior; example laboratory data are not universal field performance or consumption. | Linked protocols and range evidence need on every card |
| `closure_quality` | all inventory rows | Reconcile physical, custody and upstream-burden balances; report measurement precision, missingness and uncertainty. No generic residual emission, closing-stock output, net-then-return double count or hidden duplicate supplier/asset/service boundary. | cp_material; cp_utilities; cp_waste; cp_emissions; cp_assets |
| `life_quality` | equipment_share_pump; equipment_share_mixer; equipment_share_compressor; equipment_share_access; equipment_share_protection; equipment_share_ventilation; atomic_equipment_share | All consumer periods and complete-life coverage/denominator require evidence. In-service future scenarios must be justified, labelled and sensitivity-tested, with update triggers; missing coverage blocks finalisation. | cp_assets |
| `period_quality` | crack_treatment | Preserve repair campaign, mix/injection batch, failed/rework links and preparation/injection/cure/acceptance dates; reconcile stock/asset carry across periods and keep one owner for shared event burdens. | All node protocols |
| atomic_seal_paste | crack_treatment; cp_material | Former seal_paste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record each actual surface-seal formulation at its supply state, including its separately supplied components when relevant; seal cure before injection is a gate, not a separate product. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_consumables | crack_treatment; cp_material | Former consumables is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_equipment_share | crack_treatment; cp_assets | Former equipment_share is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_assets; actual_child_register; parent_ledger_id |
| atomic_product_returns | crack_treatment; cp_material | Former product_returns is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional: expand true outward unused resin A, B, seal, cleaner, fuel and other mass-based materials into separate identity/state/custody exchanges. This is not retained closing stock, internal movement or waste. Match gross input identity and avoid netting before counting return. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_material; actual_child_register; parent_ledger_id |
| atomic_concrete_debris | crack_treatment; cp_waste | Former concrete_debris is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional: collected debris from actual bounded preparation or minor job-caused remedies; retained host is not entirely demolished. Expand contaminated and clean destination-specific wastes separately. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_waste; actual_child_register; parent_ledger_id |
| atomic_epoxy_waste | crack_treatment; cp_waste | Former epoxy_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_waste; actual_child_register; parent_ledger_id |
| atomic_packaging_waste | crack_treatment; cp_waste | Former packaging_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional: expand actual empty containers, packaging materials and discarded ports by material, residual contamination and receiver. Returned reusable packaging is an actual product return only when outward custody is documented. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_waste; actual_child_register; parent_ledger_id |
| atomic_direct_species | crack_treatment; cp_emissions | Former direct_species is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional: expand each identified measured or evidence-modelled substance and receiving medium, including actual fuel combustion, routine resin/cleaner releases and size-specific uncaptured dust. Incident constituents owned by fluid_release are excluded here; each substance/medium/event has one owner. Source 100% solids is not zero emission proof; no generic VOC/NOx umbrella UUID. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_emissions; actual_child_register; parent_ledger_id |
| atomic_fluid_release | crack_treatment; cp_emissions | Former fluid_release is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional: expand each actual incident release into identified constituent/substance and receiving-medium elementary exchanges. Whole uncontained fuel, resin, cleaner or contaminated-water mass remains only the physical incident/material/fuel ledger. Derive constituent release from actual measured constituent mass or evidenced whole-fluid mass, actual composition fraction and medium-specific fate; a reported species subset is not total fluid. Each substance/medium/event is owned here once and excluded from direct_species. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_emissions; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | crack_treatment | Legacy roles are non-exchange stock, activity, fate or closure keys in the original CP. Independent child exchanges carry quantities; atomic_ requirements retain mandatory remaining-roster refinement and finalization blocks. Original raw fields, helpers and native-unit operands retain their responsibilities and reconcile by child identity and compatible unit, never adding parent totals or unlike units. Source-table Applies-to migration: seal_paste => atomic_seal_paste; consumables => consumables_abrasive, consumables_wipe, consumables_filter, consumables_masking, consumables_absorbent, consumables_containment, consumables_repair, atomic_consumables; equipment_share => equipment_share_pump, equipment_share_mixer, equipment_share_compressor, equipment_share_access, equipment_share_protection, equipment_share_ventilation, atomic_equipment_share; product_returns => product_returns_resin_a, product_returns_hardener_b, product_returns_seal, product_returns_cleaner, product_returns_fuel, atomic_product_returns; concrete_debris => concrete_debris_clean, concrete_debris_contaminated, atomic_concrete_debris; epoxy_waste => epoxy_waste_resin_a, epoxy_waste_hardener_b, epoxy_waste_mixed_uncured, epoxy_waste_mixed_cured, epoxy_waste_seal, epoxy_waste_purge, epoxy_waste_wipe, epoxy_waste_filter, atomic_epoxy_waste; packaging_waste => packaging_waste_container, packaging_waste_packaging, packaging_waste_port, atomic_packaging_waste; direct_species => atomic_direct_species; fluid_release => atomic_fluid_release | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | crack_treatment | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: consumables_abrasive => role=consumables, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; consumables_wipe => role=consumables, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; consumables_filter => role=consumables, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; consumables_masking => role=consumables, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; consumables_absorbent => role=consumables, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; consumables_containment => role=consumables, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; consumables_repair => role=consumables, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; equipment_share_pump => role=equipment_share, node=crack_treatment, property=Number of items, unit=Item(s), CP=cp_assets; equipment_share_mixer => role=equipment_share, node=crack_treatment, property=Number of items, unit=Item(s), CP=cp_assets; equipment_share_compressor => role=equipment_share, node=crack_treatment, property=Number of items, unit=Item(s), CP=cp_assets; equipment_share_access => role=equipment_share, node=crack_treatment, property=Number of items, unit=Item(s), CP=cp_assets; equipment_share_protection => role=equipment_share, node=crack_treatment, property=Number of items, unit=Item(s), CP=cp_assets; equipment_share_ventilation => role=equipment_share, node=crack_treatment, property=Number of items, unit=Item(s), CP=cp_assets; product_returns_resin_a => role=product_returns, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; product_returns_hardener_b => role=product_returns, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; product_returns_seal => role=product_returns, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; product_returns_cleaner => role=product_returns, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; product_returns_fuel => role=product_returns, node=crack_treatment, property=Mass, unit=kg, CP=cp_material; concrete_debris_clean => role=concrete_debris, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; concrete_debris_contaminated => role=concrete_debris, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_resin_a => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_hardener_b => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_mixed_uncured => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_mixed_cured => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_seal => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_purge => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_wipe => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; epoxy_waste_filter => role=epoxy_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; packaging_waste_container => role=packaging_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; packaging_waste_packaging => role=packaging_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste; packaging_waste_port => role=packaging_waste, node=crack_treatment, property=Mass, unit=kg, CP=cp_waste | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_range_noninheritance | consumables_abrasive; consumables_wipe; consumables_filter; consumables_masking; consumables_absorbent; consumables_containment; consumables_repair; equipment_share_pump; equipment_share_mixer; equipment_share_compressor; equipment_share_access; equipment_share_protection; equipment_share_ventilation; product_returns_resin_a; product_returns_hardener_b; product_returns_seal; product_returns_cleaner; product_returns_fuel; concrete_debris_clean; concrete_debris_contaminated; epoxy_waste_resin_a; epoxy_waste_hardener_b; epoxy_waste_mixed_uncured; epoxy_waste_mixed_cured; epoxy_waste_seal; epoxy_waste_purge; epoxy_waste_wipe; epoxy_waste_filter; packaging_waste_container; packaging_waste_packaging; packaging_waste_port | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | crack_treatment | Reject scope crossing to new/major replacement, moving/hydrostatic-pressure cracks, PU waterstop or water/mining tunnels; retained host receives no new lining burden or avoided replacement credit. | un-cpc3-2025; sika-sikadur52-us-2014 |
| `validate_gate` | accepted_crack_repair | Require recorded qualified prestate, actual compatible regional materials/method, surface seal cure before injection, complete actual injection/cure records and owner-sourced verification criteria/results/tolerances with units, defect closure and signed acceptance. Lab strength or elapsed time alone is not acceptance. | sika-sikadur52-us-2014 |
| `validate_length` | accepted_crack_repair | Recompute union of accepted unique paths and L; count each branch once, never tunnel length, ports/faces/passes or unresolved rejects. Confirm every exchange uses same positive accepted-L denominator with all failed/setup/purge work retained once. |  |
| `validate_custody` | all inventory rows | Audit gross net-of-tare receipts before returns, internal movements, outward custody, retained closing stock and burden carry-forward. Verify actual whole-fluid fuel outlets and burn calculation without incident double subtraction; capture/waste/elementary releases remain distinct. |  |
| `validate_assets` | equipment_share_pump; equipment_share_mixer; equipment_share_compressor; equipment_share_access; equipment_share_protection; equipment_share_ventilation; atomic_equipment_share | Verify every shared asset consumer/period, complete-life scope and compatible measured service driver; observed history plus justified future scenario for in-service assets includes replacement/termination/EOL and uncertainty/sensitivity/updates. Missing coverage or denominator blocks finalisation; remove overlapping direct fuel/spare/tool/rental coverage. |  |
| `validate_identity_and_emissions` | all inventory rows | Verify concrete identities/properties/units before final dataset exchange binding; do not substitute near-match resin manufacture/new tunnel/PU for repair service. Check actual species/medium and capture/retention/reaction, fluid partition and weather/host moisture; 100% solids never proves zero release. Record missing ranges, UUIDs and material evidence explicitly. |  |
| `validate_campaign` | crack_treatment | Trace all batches and preparation/injection/cure/verification periods, setup/changeover and rejects to this node and actual rework/waste/product-return destinations. Reject unresolved failures as accepted output; shared-job causal attribution reconciles once across periods. |  |
| close_atomic_seal_paste | crack_treatment; cp_material | Block final foreground completion until every actual object in atomic_seal_paste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_consumables | crack_treatment; cp_material | Block final foreground completion until every actual object in atomic_consumables is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_equipment_share | crack_treatment; cp_assets | Block final foreground completion until every actual object in atomic_equipment_share is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_product_returns | crack_treatment; cp_material | Block final foreground completion until every actual object in atomic_product_returns is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_concrete_debris | crack_treatment; cp_waste | Block final foreground completion until every actual object in atomic_concrete_debris is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_epoxy_waste | crack_treatment; cp_waste | Block final foreground completion until every actual object in atomic_epoxy_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_packaging_waste | crack_treatment; cp_waste | Block final foreground completion until every actual object in atomic_packaging_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_direct_species | crack_treatment; cp_emissions | Block final foreground completion until every actual object in atomic_direct_species is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_fluid_release | crack_treatment; cp_emissions | Block final foreground completion until every actual object in atomic_fluid_release is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground bounded repair-service data package with downstream process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset for actual compatible tunnel maintenance service |
| allowed_use | Matching accepted dormant-crack epoxy injection repair of retained transport tunnel concrete lining with declared geometry/state/material/gate |
| excluded_use | New tunnel/lining, active/hydrostatic cracks, PU leakage stopping, major replacement/strengthening, generic resin manufacture, tunnel operation or unsupported lifetime/structural/watertightness claims |
| required_metadata | Location/road-rail tunnel/lining; cause and dormant qualification; segment/branch/width/depth; actual material and supply state; dated regional instructions and owner method/criteria; campaign/batch/periods; accepted L and signatory; utilities/transport/receiver/asset boundaries |
| required_quality_disclosure | Unresolved concrete UUIDs and evidence, actual intensity/Range uncertainty, missingness, stock/custody and burden balances, failed/rework work, actual emissions/medium and shared-asset observed/future scenarios with sensitivity |
| update_trigger | Change in approved materials/method/gate, crack movement or moisture/pressure state, accepted length/geometry, supplier/utility/receiver boundary, emission evidence, asset service/life scenario or corrected records |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, printed p. 285; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Transport tunnel construction/repair classification scope and adjacent water-tunnel exclusion |
| sika-sikadur52-us-2014 | handbook | Sika US, Sikadur52 Product Data Sheet Edition 9.23.2014, both pages, currently linked at US product page; https://usa.sika.com/dam/dms/us01/0/Sikadur%2052.pdf | Two-component low-viscosity epoxy route; clean/sound dry/damp without standing water; actual volume dosing; ports and cured surface seal before pressure injection; no thinning/hydrostatic-pressure injection; site-specific current instructions requirement; laboratory data limitations |
