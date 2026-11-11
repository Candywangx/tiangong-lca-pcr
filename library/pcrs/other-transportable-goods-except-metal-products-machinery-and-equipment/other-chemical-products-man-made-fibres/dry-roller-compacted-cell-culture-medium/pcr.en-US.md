---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.dry-roller-compacted-cell-culture-medium
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dry roller-compacted cell culture medium

## 1. Scope and Applicability

This PCR covers the physical dry roller compaction of one already complete, non-living, peptone- and tryptone-free prepared cell culture medium from a traceable homogeneous dry powder into released compacted granules. The manufacturing scope is evidenced by the Merck EZMix custom medium line and Cellvento medium examples: hopper feeding/mixer and tamp auger, hydraulically loaded rollers forming a plate, rotor milling, vibratory sieving, actual fines recirculation and first finished-granule acceptance. No water, binder or other excipient is added to the compaction operation. Actual complete-medium formulation identity, residual moisture and particle state remain declared lot attributes; no public nutrient recipe, culture, growth or engineering instruction is provided.

Exclude peptone- or tryptone-containing media, raw single nutrients, pure yeast extract or peptone as whole-medium proxies, incomplete supplements or cell-culture feeds, living cells/starter cultures, media reconstitution or biological use, wet granulation, liquid medium manufacture, drying a liquid formulation, irradiation/sterilisation as an assumed step, and dental/fire-extinguisher/modelling products. Each study fixes one actual whole-medium configuration; multiple different formulations are never blended into a heterogeneous reference. No research or laboratory medium is silently substituted for a food starter provider.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.dry-roller-compacted-cell-culture-medium |
| classification_refs | CPC 3.0 35440; narrower product and route boundary |
| covered_products | One traceable complete non-living peptone/tryptone-free prepared cell culture medium in dry compacted granules, actual formulation and release specification declared |
| excluded_products | Single nutrients; incomplete feeds/supplements; live cultures; wet granulation; liquids; downstream reconstitution/biological use; unrelated dental/fire/modelling products |
| representative_product | Actual EZMix/Cellvento whole-medium physical-format case, not an asserted universal recipe or a specific unqualified customer SKU |
| production_route | Complete homogeneous powder; feed/roll compaction; rotor milling; vibrating sieve; actual fines return; first acceptance |
| market_state | Whole net dehydrated compacted medium with actual retained water, excluding all containers |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply physically identified complete prepared cell culture medium in dry-compacted form |
| How much | 1 kg reference flow |
| How well | Declared actual whole-medium formulation/state and qualified release documents; no universal biological performance claim |
| How long or cycle | One unique first accepted compacted-medium lot with its original cohort |
| reference_flow_link | finished_medium |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Biological Medium `69282a93-5a5c-41bf-9cbf-734bcb5f3e96` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual complete peptone/tryptone-free medium identity and formulation identifier; powder-to-compacted state and residual-water convention; dry roller-mill-sieve and fines-recycle route; whole upstream premix producer and coupled interfaces; supplier grade and actual release-method scope; site and continuous time interval; unique first-acceptance gate and original cohort; complete physical stock and burden genealogy; actual electricity hydraulic air and cleaning services; actual packaging filter and conditional cooling configuration; whole wastes and distinct attributed provider vectors; physical measurement and source-method coverage limits |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole first accepted net compacted medium, actual gross minus container tare; dry-equivalent, volume and counts do not replace Q. |
| whole_premix | medium_powder | Mass | kg | Whole complete mixture once; actual moisture/components nested; preserve own-WIP or supplier history and paired interface. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Exact native electrical property; measured kWh×3.6 is MJ unit conversion only, not fuel/generation. |
| pack_tare | container_in, container_delivered, container_returned, cooling_pack_in, cooling_pack_delivered, cooling_pack_returned | Mass | kg | Actual whole assembly mass, nested material/fluid contents and matched configuration; count conversion requires measured mass, no assumed coolant composition or life. |
| whole_waste | offspec_medium, spent_filter, container_scrap, cooling_pack_scrap, cleaning_liquor, spent_hydraulic_fluid | Mass | kg | Actual receiver Qt/full actual provider quantity once; analytical Qt/Q differs from modeled evidenced compatible kg-equivalent A_c/Q_c. Other provider units remain separate explicit vectors, not relabelled kg. |
| dust_water | medium_dust_air, water_vapour_air | Mass | kg | Actual mixed dust mass and net process water separately, with size/chemical/air-state coverage. Particle counts/finite windows, total VOC, COD or LOD are not species or water masses. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete homogeneous prepared-medium powder transfer to the compaction line; upstream producer remains fully linked |
| starting_condition_role | Physical process-stage interface, not permission to truncate compounding or invent an external purchase |
| product_classification_scope | Dry roller-compacted complete prepared cell-medium subset only |
| recursive_input_rule | Actual same-category premix, own-WIP and fines retain unique genealogy and inherited burdens once; paired transfers cancel on consolidation, no new reference from recycle |
| upstream_dataset_requirement | Qualified actual complete powder producer and each utility, component and treatment; match formula/state, site/time, units, history and physical interfaces |
| disclosure | Full actual diagram, premix/compacted grade and release scope, stocks/events, provider/coupling and source-method limits, actual auxiliaries and packaging |

This PCR covers the physical dry roller compaction of one already complete, non-living, peptone- and tryptone-free prepared cell culture medium from a traceable homogeneous dry powder into released compacted granules. The manufacturing scope is evidenced by the Merck EZMix custom medium line and Cellvento medium examples: hopper feeding/mixer and tamp auger, hydraulically loaded rollers forming a plate, rotor milling, vibratory sieving, actual fines recirculation and first finished-granule acceptance. No water, binder or other excipient is added to the compaction operation. Actual complete-medium formulation identity, residual moisture and particle state remain declared lot attributes; no public nutrient recipe, culture, growth or engineering instruction is provided.

This is a genuine material transformation rather than receipt or repacking. Its foreground starts at the actual homogeneous complete-medium powder interface and includes the complete compaction/milling/sieving line and actual auxiliaries. The powder producer may be the same-site preceding operation or a genuine external supplier. Retain that producer with its actual source, owner, site/time, whole formulation and phase, compatible reference units and complete upstream inventory/burdens. Match sender/receiver powder lot and whole mass. An own-WIP transfer is not a fabricated purchase. Unavailable producer qualification prevents a completed LCI; an interface label cannot erase known blending, ingredient manufacture, cleaning or other operations.

Exclude peptone- or tryptone-containing media, raw single nutrients, pure yeast extract or peptone as whole-medium proxies, incomplete supplements or cell-culture feeds, living cells/starter cultures, media reconstitution or biological use, wet granulation, liquid medium manufacture, drying a liquid formulation, irradiation/sterilisation as an assumed step, and dental/fire-extinguisher/modelling products. Each study fixes one actual whole-medium configuration; multiple different formulations are never blended into a heterogeneous reference. No research or laboratory medium is silently substituted for a food starter provider.

The actual state100 native Biological Medium/生物培养基 is a whole Product family at plant. Its complete comment covers media for cells/microorganisms and has no hard purity, composition, route, phase or geography restriction. It is admitted only for the actual complete medium in the declared powder or compacted state, with formulation/grade/provider qualification, not as a component, living culture or service. Native classification35440 is consistent with current CPC3.0 explicitly including prepared media for plant/human/animal cells; this supports only the narrower physical product/route and does not cover the entire miscellaneous leaf or establish an accepted mapping.

The 2022 Merck technical brief is a primary manufacturer document describing the actual mechanical line and particular comparative observations. The 2015 Merck-authored article corroborates a named compacted-medium case and physical testing. Both derive from one producer and are not independent measured factory LCIs. Claims of unchanged chemistry, improved dissolution/density/dust, reduced packaging/cost or safety and environmental advantages are not universal effects or default factors. The EPO T1318/18 decision explicitly distinguishes dry roller compaction of its peptone/tryptone-free claimed medium from wet granulation and notes that the patent did not demonstrate avoidance of side reactions relative to wet granulation. Preserve this limitation; neither source claims nor a mechanical check substitute for actual formulation-specific evidence.

Q_c is the independent sum of disjoint positive first accepted net whole compacted-medium masses at the fixed release gate for original cohort c, excluding all packaging. Dehydrated does not mean zero moisture or a bone-dry denominator. Bulk/tapped volume, particle counts, active/nutrient equivalents and downstream reconstituted volume are companion quantities, not replacements for measured reference kg. Reference acceptance is an event account, not an extra external physical output.

Keep three separate accounts: actual raw/premix/WIP/finished-stock/asset/container physical transfers and stocks; unique reference events on original-cohort Q_c; and attributed environmental/provider-service vectors. Rework, retesting, internal recycle and returns create no second reference event. The full original-cohort bridge partitions net remaining delivery, every actual accepted on-site state, irreversible loss and all other terminal dispositions. Delivery plus closing stock is valid only when no other postgate state/exit exists.

Do not restore lost water or medium into surviving stock and also count the loss. Later external moisture/material additions are genuine separate inputs and are excluded from original-cohort equivalent mass. All raw totals survive when Q_c is zero or unknown and the normalized result remains unresolved. Carry own opening WIP and inherited foreground/upstream burdens once, independently from new purchases. Do not add a provider aggregate and its already embedded decomposed production again.

The complete premixed medium is one physical mixture input, not a list of purchased nutrients. Its actual constituent/moisture observations are nested analytical ledgers and must not be purchased again. Preserve actual formulation identifiers and supplier documentation without publishing a biological recipe. A qualifying incoming medium cannot be inferred from a generic name alone. Actual post-compaction composition and quality release remain formulation-specific; if an essential matrix/procedure is unestablished, it remains a hold and cannot be waived through future SOP or checkpass.

Retain the actual fines recycle and all start-up, shutdown, failed-lot, screen/line hold-up and off-spec states. Gross roller/mill/sieve throughput is not new purchased powder or additional accepted output on every pass. Match internal transfers and cancel paired links on consolidation without cancelling actual equipment work or inherited burden. Do not assume fines, granules, airborne dust and sampled material share the same composition or moisture when segregation/transformations are not measured.

Maintain whole/elemental conservation, actual species formation/consumption and water phases as separate checks. The absence of added granulation water/excipient does not prove zero residual-water exchange, zero chemical change or zero emissions. Record real air/humidity intake, evaporation/condensation, cleaning water and actual losses. Equipment cleaning water is separate from adding a binder to the medium; reconstitution and biological-use recipes remain outside this environmental manufacturing scope. Never fit unknown chemicals/water from a mass residual, COD/TOC or loss-on-drying measurement.

Keep the exact native electricity property Net calorific value/净热值 on MJ. Measured kWh×3.6 is solely an electrical unit conversion and does not imply a fuel or generation mix. Collect actual roller/auger/mill/sieve, hydraulic, ventilation, cleaning and required storage/control duties. Hydraulic-circuit fluid is a separate actual whole fluid with stocks/replacements and supplier basis; circulating fluid is not repeatedly consumed at every pass. No oil type, leak rate, equipment mass or life is invented. If capital equipment is included, its actual configuration, measured quantity, physical fleet and compatible provider-service history are separately documented.

An actual heater/cooler, dust collector, treatment system, irradiation step or grade-required storage/cold-chain operation is not erased by the dry-process label. Model the complete actual producer and matched interfaces, real reagents/fuels/air/water/energy, species/emissions and residues, with its documented reference units. Additional actual interfaces must be represented before a complete study is claimed. This PCR supplies no dummy treatment, available-background assertion, omitted operation or generic zero.

The primary culture-medium container and any genuine transport cooling pack are each one documented whole supplied assembly. Actual composition/tare, dimensions/configuration, stocks and delivered/returned/scrapped events remain separate from net medium Q. A cooling-pack mixture is not assumed to be pure water or ice. Include only actual grade-required configurations and retain their real production/conditioning/control burdens; no universal package, cold-chain condition, per-item mass, reuse life or credit is set.

Record one actual whole contaminated filter/container/cooling-pack waste transfer, including its dry substrate, retained medium/fluid and moisture once. Those components are nested subledgers, not extra attached-medium or water exchanges/treatment demand. Physically separated off-spec medium/caught powder is a distinct stream only when actually separated before the boundary. An intact assembly is not duplicated as separately discarded components. Preserve full physical fleets and all actual receiver quantities independently from service attribution.

Use three distinct waste/service ledgers: actual whole receiver transfer Qt and full actual treatment-provider quantity once; component/physical-cohort provenance where actually known; and independently evidenced non-overlapping compatible provider-service/environmental vectors A_c assigned to each served original Q_c. Qt/Q_c is analytical only. A shared10kg filter remains10kg actual export once. Given specifically evidenced25%/75% treatment shares and Q100/200, modeled2.5/7.5kg-equivalent gives.025/.0375 per reference, not physical2.5/7.5kg exports or10kg demand charged again to each cohort. These illustrative numbers are not empirical shares/defaults; unsupported assignment remains unresolved.

Airborne medium dust is an actual whole mixed particulate with its own sampled composition and medium, not pure yeast extract, a nutrient proxy or an assumed equal portion of the product. Particle-number counts per air volume from a finite laboratory size window are not a mass emission factor and do not cover all particle sizes, fugitive outlets or volatile/condensable species. Preserve actual size coverage, sample air conditions, calibration, blanks, uncertainty, component assays and whole wet-gas/condensate observations. No dust-reduction chart becomes zero plant emission or a universal factor; no whole PM plus all its constituents is double-counted.

The scope of component evidence is limited: Merck technical-brief Figure5 describes feed composition, and the 2015 article compares vitamins in Cellvento Feed-210, with some amino-acid/homogeneity data not shown. These observations are not a validated whole-component/speciation assay for every complete basal medium or actual customer formula. Analytical uncertainty, tested matrix and unreported data remain explicit; neither feed results nor selected component recovery proves all chemicals unchanged. Actual applicable whole-medium release and source procedures must be evidenced without inventing a culture protocol or treating future validation as present qualification.

For the air_in card, use the actual whole atmosphere-to-unit air withdrawal on a measured mass basis; it is a gross physical entry and does not establish net consumptive air use or oxygen uptake. Keep the matched complete exhaust/return mixture, unchanged carrier constituents, humidity and any transient stock in the separate physical ledger. Record medium dust and net process water vapour on their actual non-overlapping component bases; they are nested within real exhaust and are not added to it to close mass. Do not count unchanged incoming carrier air, ambient CO2 or moisture again as new process emissions. Bind only a flow whose intended gross-withdrawal meaning matches this entry; unavailable identity stays unbound, not silently converted to a net-resource or oxygen flow. Fan, conditioning and genuine producer burdens remain once.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete_route | medium_compaction | Retain actual whole premix producer, feeding/hydraulic rollers/mill/sieve/fines loop and all real auxiliary/treatment history. No synthetic receipt gate, nutrient proxy, free producer or generic zero. | merck-ezmix-2022; merck-compacted-2015; jrc-cww-2016 |
| boundary_identity_limits | reference and each actual medium lot | Verify actual whole prepared medium within native family/current35440; exact formulation/state/provider admission, no live culture or pure component; preserve source-specific chemical-performance and particle-method limits. | unsd-cpc3-2025; epo-dry-media-2022; merck-ezmix-2022 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| medium_compaction | Dry compaction of prepared cell medium | required | Declared actual dry route and whole-medium configuration | foreground production | finished_medium |

### Process: Dry compaction of prepared cell medium (`medium_compaction`)

#### Inputs

##### Product flows

###### Biological Medium (`medium_powder`)

Actual complete homogeneous prepared-medium powder from the fully linked real producer; matching whole formulation/state/reference units, own-WIP history or genuine purchase. Components are nested only.

- Selected flow: Biological Medium `69282a93-5a5c-41bf-9cbf-734bcb5f3e96`
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_premix`
- Sources: `merck-ezmix-2022`; `merck-compacted-2015`

###### Alternating current (`electricity`)

Actual compaction, milling, screening, hydraulics, air/cleaning/control/storage duties; native Net calorific value/MJ, kWh conversion only.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operations`
- Sources: `merck-ezmix-2022`

###### Compactor hydraulic-circuit fluid (`hydraulic_fluid`)

Actual whole circuit fluid only if used, with real composition, charge/replacement/stocks and compatible provider units; recirculation is not repeated consumption.

- Selected flow: Compactor hydraulic-circuit fluid
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operations`
- Sources: `merck-ezmix-2022`

###### Equipment cleaning water (`cleaning_water`)

Actual cleaning input only; separate from prohibited addition of granulation water to medium, without a universal use ratio.

- Selected flow: Equipment cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operations`
- Sources: `jrc-cww-2016`

###### Compaction-line dust-filter sleeve (`filter_sleeve`)

Actual installed whole sleeve with maker/material/dimensions/fleet history; neither a pure fabric/polymer proxy nor an assumed installed collector.

- Selected flow: Compaction-line dust-filter sleeve
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filter`
- Sources: `jrc-cww-2016`

###### Sealed culture-medium primary container assembly (`container_in`)

One actual primary container configuration, including its real closure/liner components as nested records; no assumed bottle/drum material or tare.

- Selected flow: Sealed culture-medium primary container assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `merck-ezmix-2022`

###### Culture-medium transport cooling-pack assembly (`cooling_pack_in`)

Conditional actual grade-required complete cooling pack and real conditioning burden; no pure-water/ice composition, size or cold-chain condition is inferred.

- Selected flow: Culture-medium transport cooling-pack assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `merck-ezmix-2022`

##### Waste flows

##### Elementary flows

###### Actual compaction-line ventilation air (`air_in`)

Actual whole air intake mixture and humidity/state where ventilation/handling uses it; blower and conditioning burdens remain genuine actual equipment duties. This card records gross physical air withdrawal; matched complete exhaust/carrier ledgers and nested incremental emissions follow the complete Section5 convention, without a net-consumption assumption.

- Selected flow: Actual compaction-line ventilation air
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operations`
- Sources: `merck-ezmix-2022`

#### Outputs

##### Product flows

###### Biological Medium (`finished_medium`)

One first accepted net whole compacted-medium reference output, not live cells, reconstituted liquid, incoming powder or repeated recycle; actual residual water included.

- Selected flow: Biological Medium `69282a93-5a5c-41bf-9cbf-734bcb5f3e96`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate`
- Sources: `merck-ezmix-2022`; `merck-compacted-2015`

###### Sealed culture-medium primary container assembly (`container_delivered`)

Actual matching delivered/returned whole assembly mass separately from medium Q; include only real events and retain physical fleet/components without reuse credit.

- Selected flow: Sealed culture-medium primary container assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `merck-ezmix-2022`

###### Sealed culture-medium primary container assembly (`container_returned`)

Actual matching delivered/returned whole assembly mass separately from medium Q; include only real events and retain physical fleet/components without reuse credit.

- Selected flow: Sealed culture-medium primary container assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `merck-ezmix-2022`

###### Culture-medium transport cooling-pack assembly (`cooling_pack_delivered`)

Actual matching delivered/returned whole assembly mass separately from medium Q; include only real events and retain physical fleet/components without reuse credit.

- Selected flow: Culture-medium transport cooling-pack assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `merck-ezmix-2022`

###### Culture-medium transport cooling-pack assembly (`cooling_pack_returned`)

Actual matching delivered/returned whole assembly mass separately from medium Q; include only real events and retain physical fleet/components without reuse credit.

- Selected flow: Culture-medium transport cooling-pack assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `merck-ezmix-2022`

##### Waste flows

###### Physically separated discarded cell culture medium (`offspec_medium`)

One actual distinct whole receiver transfer, including nested substrate/retained medium/fluid/water; no fictional separation or extra component treatment. Full physical Qt/provider quantity once, distinct from compatible evidenced service A_c/Q_c.

- Selected flow: Physically separated discarded cell culture medium
- Flow property / unit: Mass / kg
- Amount rule: Physical Qt and analytical Qt/Q recorded separately; linked modeled treatment only evidenced compatible kg-equivalent A_c / positive original Q_c, other provider units explicit separate vectors. Unknown attribution stays unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`

###### Whole contaminated compaction-line filter sleeve (`spent_filter`)

One actual distinct whole receiver transfer, including nested substrate/retained medium/fluid/water; no fictional separation or extra component treatment. Full physical Qt/provider quantity once, distinct from compatible evidenced service A_c/Q_c.

- Selected flow: Whole contaminated compaction-line filter sleeve
- Flow property / unit: Mass / kg
- Amount rule: Physical Qt and analytical Qt/Q recorded separately; linked modeled treatment only evidenced compatible kg-equivalent A_c / positive original Q_c, other provider units explicit separate vectors. Unknown attribution stays unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filter`
- Sources: `jrc-cww-2016`

###### Whole contaminated culture-medium container assembly (`container_scrap`)

One actual distinct whole receiver transfer, including nested substrate/retained medium/fluid/water; no fictional separation or extra component treatment. Full physical Qt/provider quantity once, distinct from compatible evidenced service A_c/Q_c.

- Selected flow: Whole contaminated culture-medium container assembly
- Flow property / unit: Mass / kg
- Amount rule: Physical Qt and analytical Qt/Q recorded separately; linked modeled treatment only evidenced compatible kg-equivalent A_c / positive original Q_c, other provider units explicit separate vectors. Unknown attribution stays unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-cww-2016`

###### Whole discarded culture-medium cooling-pack assembly (`cooling_pack_scrap`)

One actual distinct whole receiver transfer, including nested substrate/retained medium/fluid/water; no fictional separation or extra component treatment. Full physical Qt/provider quantity once, distinct from compatible evidenced service A_c/Q_c.

- Selected flow: Whole discarded culture-medium cooling-pack assembly
- Flow property / unit: Mass / kg
- Amount rule: Physical Qt and analytical Qt/Q recorded separately; linked modeled treatment only evidenced compatible kg-equivalent A_c / positive original Q_c, other provider units explicit separate vectors. Unknown attribution stays unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-cww-2016`

###### Aqueous medium-equipment cleaning liquor (`cleaning_liquor`)

One actual distinct whole receiver transfer, including nested substrate/retained medium/fluid/water; no fictional separation or extra component treatment. Full physical Qt/provider quantity once, distinct from compatible evidenced service A_c/Q_c.

- Selected flow: Aqueous medium-equipment cleaning liquor
- Flow property / unit: Mass / kg
- Amount rule: Physical Qt and analytical Qt/Q recorded separately; linked modeled treatment only evidenced compatible kg-equivalent A_c / positive original Q_c, other provider units explicit separate vectors. Unknown attribution stays unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`

###### Spent compactor hydraulic-circuit fluid (`spent_hydraulic_fluid`)

One actual distinct whole receiver transfer, including nested substrate/retained medium/fluid/water; no fictional separation or extra component treatment. Full physical Qt/provider quantity once, distinct from compatible evidenced service A_c/Q_c.

- Selected flow: Spent compactor hydraulic-circuit fluid
- Flow property / unit: Mass / kg
- Amount rule: Physical Qt and analytical Qt/Q recorded separately; linked modeled treatment only evidenced compatible kg-equivalent A_c / positive original Q_c, other provider units explicit separate vectors. Unknown attribution stays unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`

##### Elementary flows

###### Prepared cell-culture-medium particulate to outdoor air (`medium_dust_air`)

Actual whole mixed particulate, measured chemical/size coverage and outdoor medium; not pure nutrients, product loss by residual or a particle-count-derived mass factor. No double count with nested constituents.

- Selected flow: Prepared cell-culture-medium particulate to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `merck-ezmix-2022`; `jrc-cww-2016`

###### Net process water vapour to outdoor air (`water_vapour_air`)

Actual material-moisture and phase flux, separately reconciled against inlet-air humidity and any cleaning/conditioning water; no default evaporation or positive/zero value.

- Selected flow: Net process water vapour to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured non-overlapping attributable actual row numerator / positive original Q_c; cp_gate. Preserve full physical totals separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`

## 7. Allocation and Co-product Handling

Use three distinct waste/service ledgers: actual whole receiver transfer Qt and full actual treatment-provider quantity once; component/physical-cohort provenance where actually known; and independently evidenced non-overlapping compatible provider-service/environmental vectors A_c assigned to each served original Q_c. Qt/Q_c is analytical only. A shared10kg filter remains10kg actual export once. Given specifically evidenced25%/75% treatment shares and Q100/200, modeled2.5/7.5kg-equivalent gives.025/.0375 per reference, not physical2.5/7.5kg exports or10kg demand charged again to each cohort. These illustrative numbers are not empirical shares/defaults; unsupported assignment remains unresolved.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_single_medium | medium_compaction | One intended compacted medium. Recycle, off-spec, dust, packaging and spent fluids are not automatically cofunctions. Preserve actual masses/fleets, use causal evidenced nonoverlapping burden/service attribution with compatible units and original cohorts; unknown shares unresolved, no automatic recovery credit. | jrc-ilcd-2010; merck-ezmix-2022 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | medium_compaction | finished_medium | acceptance and full stock events | eventID; original cohort; gate/time; whole formulation/state; actual release document/method scope; gross/tare/net; incoming/WIP/FG opening/closing; all delivery/retest/return/rework/loss/addition/fates | Calibrated net weighing and unique first events; reconcile all raw physical stocks and disjoint fates, no repeated Q or loss restoration. | kg | Each actual lot/event and calibrated meter/sampling interval | One continuous declared period with all opening/closing, startup/failure/shutdown and served-cohort histories | Actual compaction site and genuine linked whole-medium/utility/treatment providers/receivers | per 1 kg reference flow | Traceable raw records, source/method scope, calibration, uncertainty, complete nonoverlap and explicit unresolved evidence |
| cp_premix | medium_compaction | medium_powder | whole-mixture producer coupling | formula/lot identifier without public recipe; source/owner/site/time; whole powder identity/state/assays/moisture; sender/receiver event and mass; real producer reference unit/inventory; own-WIP or purchase/history; uncertainty | Match actual complete mixture and source-qualified whole producer inventory, including real preceding manufacture; internal transfer is not a purchase and embedded history is added once. | kg; explicit producer reference units | Each actual lot/event and calibrated meter/sampling interval | One continuous declared period with all opening/closing, startup/failure/shutdown and served-cohort histories | Actual compaction site and genuine linked whole-medium/utility/treatment providers/receivers | per 1 kg reference flow | Traceable raw records, source/method scope, calibration, uncertainty, complete nonoverlap and explicit unresolved evidence |
| cp_operations | medium_compaction | electricity, hydraulic_fluid, cleaning_water, air_in | actual operational meter and state records | equipment diagram; power kWh/MJ; all real auxiliary/storage/treatment duties; actual hydraulic fluid identity charge/stock/replacement; water purpose/mass; air humidity/composition/conditions; source/method/provider units and genealogy; matched gross air intake/exhaust/return and transient carrier stocks; unchanged ambient components and actual process increments | Integrate actual calibrated meters once and preserve complete physical observations and linked producers; no invented fuel, fluid grade, mass, lifetime or zero. Keep gross physical air closure separate from consumptive-resource interpretation and nested incremental emissions. | kg; kWh; MJ; actual state units | Each actual lot/event and calibrated meter/sampling interval | One continuous declared period with all opening/closing, startup/failure/shutdown and served-cohort histories | Actual compaction site and genuine linked whole-medium/utility/treatment providers/receivers | per 1 kg reference flow | Traceable raw records, source/method scope, calibration, uncertainty, complete nonoverlap and explicit unresolved evidence |
| cp_pack | medium_compaction | container and cooling-pack assemblies | whole assembly events and services | assembly/configurationID; maker/material/components; actual whole tare/content/water; opening/additions/delivered/returned/scrapped/closing; conditioning/storage duties; receiverQt/provider units; original served cohorts and attribution evidence | Measure actual whole matching assembly and nested components; no material/coolant assumption. Keep full actual contaminated waste/receiver quantity once independently of compatible modeled service. | kg; counts with measured same-configuration kg/unit | Each actual lot/event and calibrated meter/sampling interval | One continuous declared period with all opening/closing, startup/failure/shutdown and served-cohort histories | Actual compaction site and genuine linked whole-medium/utility/treatment providers/receivers | per 1 kg reference flow | Traceable raw records, source/method scope, calibration, uncertainty, complete nonoverlap and explicit unresolved evidence |
| cp_filter | medium_compaction | filter_sleeve, spent_filter | actual filter fleet and cohort service | actual whole sleeve material/maker/dimensions/mass; opening/install/replacements/closing; captured media/water; whole discarded Qt/providerquantity; served originalQ cohorts and evidence for compatible service vectors | Conserve real physical fleet and actual complete contaminated export; nested substrate/medium/water are not extra waste. Unknown shares do not become defaults. | kg; dimensions; explicit compatible provider units | Each actual lot/event and calibrated meter/sampling interval | One continuous declared period with all opening/closing, startup/failure/shutdown and served-cohort histories | Actual compaction site and genuine linked whole-medium/utility/treatment providers/receivers | per 1 kg reference flow | Traceable raw records, source/method scope, calibration, uncertainty, complete nonoverlap and explicit unresolved evidence |
| cp_waste | medium_compaction | offspec_medium, cleaning_liquor, spent_hydraulic_fluid | whole receiver and treatment linkage | actual distinct stream/event; whole wet Qt; component/state/assay; matched source/receiver; actual complete treatment producer/inventory/referenceunits; raw providerquantity; physical-cohort provenance and independent nonoverlap service evidence | Weigh actual distinct whole transfer once; retain all real treatment inputs/outlets and joint provider demand across ports/cohorts. No generic disposal, attached-component fiction or proportional physical shrinkage. | kg; explicit compatible provider reference units | Each actual lot/event and calibrated meter/sampling interval | One continuous declared period with all opening/closing, startup/failure/shutdown and served-cohort histories | Actual compaction site and genuine linked whole-medium/utility/treatment providers/receivers | per 1 kg reference flow | Traceable raw records, source/method scope, calibration, uncertainty, complete nonoverlap and explicit unresolved evidence |
| cp_air | medium_compaction | medium_dust_air, water_vapour_air | source/matrix and particle/water observations | actual source/phase; whole wet gas/intake humidity/sampling conditions; size window; particulate mass versus count; composition; blank/calibration/recovery/interference; sampling time/flow/volume; actual condensed/waste routes; uncertainty/nondetect/gaps | Use actual applicable mass/chemical/phase methods; preserve particle-size and fugitive/volatile limitations, no conversion of lab counts or empirical reduction to plant massfactor. Never substitute COD/LOD or totalPM for unknown species/water. | kg; explicit concentration/air state/volume/time units | Each actual lot/event and calibrated meter/sampling interval | One continuous declared period with all opening/closing, startup/failure/shutdown and served-cohort histories | Actual compaction site and genuine linked whole-medium/utility/treatment providers/receivers | per 1 kg reference flow | Traceable raw records, source/method scope, calibration, uncertainty, complete nonoverlap and explicit unresolved evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| unique_gate | finished_medium | Sum disjoint unique positive first accepted net whole compacted-medium events as original Q_c; preserve all physical stocks/fates and losses without repeated acceptance or loss restoration. | cp_gate | Q_c in kg and full original-cohort bridge | merck-ezmix-2022; jrc-ilcd-2010; jrc-cww-2016 |
| normalize_cohort | medium_compaction | For positive original Q_c divide only evidenced non-overlapping attributable numerator or compatible provider-service vector A_c by Q_c once. Preserve full physical transfers independently; unknown/zero basis or unsupported assignment yields unresolved result. | cp_gate; cp_premix; cp_operations; cp_pack; cp_filter; cp_waste; cp_air | Declared per1kg-reference exchanges or unresolved result | merck-ezmix-2022; jrc-ilcd-2010; jrc-cww-2016 |
| physical_components | whole premix, recycle, stocks and outputs | Reconcile actual whole physical mass, nested components/elements, water phases and chemical formation/consumption separately. Internal fines are real recirculation but no new purchase/Q; do not assume chemistry, moisture or composition unchanged or create residual closure species. | cp_gate; cp_premix; cp_operations; cp_waste; cp_air | Separate physical/component/element/water/species ledgers with actual gaps | merck-ezmix-2022; jrc-ilcd-2010; jrc-cww-2016 |
| electric_conversion | electricity | Measured kWh×3.6 = MJ; exact Net calorific value property and actual provider/equipment/time boundary remain, no fuel or mix assumption. | cp_operations | Actual electrical numerator in MJ | merck-ezmix-2022; jrc-ilcd-2010; jrc-cww-2016 |
| whole_waste_service | all actual waste assemblies and streams | Actual whole receiver Qt/full actual providerquantity once, nested components and known physical provenance separately. Evidenced nonoverlapping joint service vectors in compatible units assigned across all actual served original cohorts/ports before normalization; no shrinking physical waste or full demand recharge per cohort. | cp_gate; cp_filter; cp_pack; cp_waste | Full raw physical ledger and distinct attributed compatible service ledger | merck-ezmix-2022; jrc-ilcd-2010; jrc-cww-2016 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_producer | whole medium and upstream interface | Actual complete non-living medium/configuration, appropriate native whole family and real coupled powder producer; no nutrient, live-cell, feed or fake purchase proxy. | Full native hardfields/FPUG; actual lot/formula identifier, producer source/inventory/units and paired transfers |
| actual_methods | formulation release and source observations | Source statements and EPO comparative limits stay scoped; actual chemical/water/size/mass procedures must fit the real configuration. An essential unestablished matrix/procedure stays a hold, never futureSOP or finitecheck closure. | Actual applicable methods/calibration/uncertainty/recovery/source coverage and qualified release evidence, no biological recipe published |
| history_and_Q | all stocks/events and recycle | Full physical/event/burden accounts; every first acceptance/state/fate, original cohorts, own-WIP and embedded-provider history once. | Continuous traceable raw stock/scale/meter/lot records and disjoint bridge, matched internal links |
| whole_waste_provider | filter/container/cooling/fluid waste and services | Actual contaminated whole transfer/provider quantity once, nested components and separate evidenced compatible service vectors; no extra attached-material export or share-reduced physical waste. | Receiver tickets, full physical fleets/stocks, real provider inventories/units and service-cohort evidence |
| completeness_and_limits | actual line and dataset | Retain all real auxiliary/treatment/grade-required storage burdens, source sizes/phases/species, nondetect versus missing, uncertainties and exact native electricity property; no universal benefit or zero. | Actual complete process/phase diagram, method/provider gaps and source-specific evidence; independent study/science pending |

## 9. Validation Rules

The 2022 Merck technical brief is a primary manufacturer document describing the actual mechanical line and particular comparative observations. The 2015 Merck-authored article corroborates a named compacted-medium case and physical testing. Both derive from one producer and are not independent measured factory LCIs. Claims of unchanged chemistry, improved dissolution/density/dust, reduced packaging/cost or safety and environmental advantages are not universal effects or default factors. The EPO T1318/18 decision explicitly distinguishes dry roller compaction of its peptone/tryptone-free claimed medium from wet granulation and notes that the patent did not demonstrate avoidance of side reactions relative to wet granulation. Preserve this limitation; neither source claims nor a mechanical check substitute for actual formulation-specific evidence.

Airborne medium dust is an actual whole mixed particulate with its own sampled composition and medium, not pure yeast extract, a nutrient proxy or an assumed equal portion of the product. Particle-number counts per air volume from a finite laboratory size window are not a mass emission factor and do not cover all particle sizes, fugitive outlets or volatile/condensable species. Preserve actual size coverage, sample air conditions, calibration, blanks, uncertainty, component assays and whole wet-gas/condensate observations. No dust-reduction chart becomes zero plant emission or a universal factor; no whole PM plus all its constituents is double-counted.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity_route | reference and process | Verify complete prepared cell-medium identity, actual powder/granule formulation-state and provider qualification, full roller/mill/sieve/fines topology, no wet binder or nutrient/live-culture proxy and no invented biological instruction. | merck-ezmix-2022; merck-compacted-2015; unsd-cpc3-2025 |
| validate_accounts | all rows and protocols | Check unique originalQ and all physical states/fates, no restored loss or recycled reference, complete real premix/own-WIP/provider histories once, exact native electrical property, whole wastes versus compatible evidenced A_c/Q_c, unsupported shares unresolved. | jrc-ilcd-2010; merck-ezmix-2022 |
| validate_method_scope | source/matrix and claims | Preserve EPO comparative counterevidence and actual method limits; lab particle counts/finite size windows and material-performance charts are not emissions, unchanged chemistry or environmental savings. Essential specific method/identity gap is a hold, ordinary missing study/provider records remain disclosed, no approval from checkpass. | epo-dry-media-2022; merck-ezmix-2022; jrc-cww-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_process; conditional linked complete manufacturing inventory |
| downstream_use | secondary_dataset/background_dataset only after actual whole-medium, complete coupled producer and study qualification |
| allowed_use | Environmental inventory of the exact dry-compaction material configuration and declared manufacturing stage |
| excluded_use | Culture recipes/growth/engineering advice, live-cell/food-starter provider, whole35440 coverage, clinical/therapeutic/registration/sterility or universal environmental-benefit claims |
| required_metadata | Whole-medium/formula/state identifier, actual coupled producer source/units/history, first gate/originalcohort, continuous site period, full stocks/fates, packaging/filter/cooling configurations and source-method coverage |
| required_quality_disclosure | Every actual grade/provider/method/quantity gap, source counterevidence, uncertainty, nonoverlap and pending independent science/translation/study/mapping decisions |
| update_trigger | Changed complete formulation/state/route/gate, premix producer, real utility/treatment/packaging/cooling scope, methods or new contrary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| merck-ezmix-2022 | literature | Merck/SAFC, Enabling Process Intensification with Compacted Cell Culture Media, MK_TB9283EN v1.0 June2022, complete8-page primary manufacturer technical brief; physical route PDF1–2/Figure1, physical measurement context PDF4/6–7; https://ptj.jiho.jp/sites/default/files/30015/pdfdocs/TechnicalBrief_EZMix-Compacted-Media.pdf | Actual complete Cellvento/EZMix powder-to-granule route and retained fines, particular physical observations/limitations. Branded primary original on journal-host mirror; no nutrient recipe, numerical operating setting, universal composition/performance, dust factor or environmental benefit adopted. |
| merck-compacted-2015 | literature | Nikolai Stankiewicz/Merck, Compacted Cell-Culture Media, GEN,31December2015/January2016 issue; complete manufacturer-authored article, physical route and abrasion/bulk-volume/dust observations only; https://www.genengnews.com/insights/compacted-cell-culture-media/ | Named compacted medium and real physical testing, same producer context as technical brief, not independent factoryLCI. No biological protocols, recipe, numerical reduction/benefit defaults or guarantee every formulation compacts equivalently. |
| epo-dry-media-2022 | official_guidance | European Patent Office Board of Appeal, T1318/18 Dry granulated cell culture media/MERCK,21October2022, full decision, sections6.3–6.4 and8.1–8.2.1; https://www.epo.org/boards-of-appeal/decisions/pdf/t181318eu1.pdf | Primary countercontext: dry versus wet route/particle distinction; patent did not demonstrate avoidance of side reactions relative to wet granulation. No legal approval/advice, universal chemical-preservation assertion, recipe or LCI default. |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025, complete PDF173/35440; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current prepared culture media expressly includes plant/human/animal cells; proposed narrower medium/material route only, no full-leaf coverage or accepted edge. |
| jrc-cww-2016 | official_guidance | European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector,2016, BAT2–5 PDF573–574/printed543–544; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Actual stream/phase/provider inventories and source-monitoring quality context; not a validated particular medium matrix, plant emission factor or mandatory local frequency/control efficiency. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook Detailed Guidance,firsteditionMarch2010, section7.9.3 PDF277–278/printed257–258; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Virtual subdivision and determining physical causality/allocation context; no universal service share, lifetime, recovery credit or claim that this exact cohort ledger is literally prescribed. |
