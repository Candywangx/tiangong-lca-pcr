---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fruits-and-vegetables
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Non-specialized store retail service for fresh whole dessert apples

## 1. Scope and Applicability

This PCR retains the fruit-and-vegetable retail identity but its usable methodology is a deliberately narrow apple-service subset. It is not applicable to the complete classification leaf. The substantive scope and duties below are normative.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fruits-and-vegetables |
| classification_refs | CPC 3.0 62121; narrower |
| covered_products | In-store net-mass retail service for fresh whole dessert apples of one declared cultivar/grade/state and the scope_route configuration |
| excluded_products | Other fruits/nuts/vegetables; preserved/prepared products; produce production as reference; processing and delivery outside scope_route |
| representative_product | One cultivar-specific whole fresh dessert apple service pool, such as Golden Delicious, not a generic produce basket |
| production_route | Receiving, sorting, ordinary-air R134a refrigeration, ambient display, optional LDPE self-bagging, checkout, reverse handling and residual management |
| market_state | Fresh whole raw edible apples, cultivar and quality contract fixed; actual wet state recorded at receiving and acceptance |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of the defined apple retail service |
| How much | 1 kg |
| How well | Final checkout acceptance of cultivar/grade/condition and measured net fruit mass under service_gates; no numeric default quality threshold |
| How long or cycle | One closed receiving-cohort pool through final fate and return resolution, retaining actual dates and residence time |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | In-store retail service for fresh whole dessert apples, accepted net mass throughput |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | store and geography; cultivar and grade; origin and harvest lot; receiving and acceptance wet state; quality acceptance contract; R134a plant configuration; cold temperature/humidity history; ambient display duration; bag route; cohort/pool dates and return closure; D and B_s/B_f mapping; upstream gate boundary; shared drivers and asset ledger; unresolved identities and uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mass_basis` | retail_service | Mass | kg | Use final accepted net wet apple kg only as service throughput; receiving-state background and final-state reference quantities are distinct and require calc_goods_background, not assumed equality. |
| `mass_conversion` | failed_apples; cleaning_water; cleaning_effluent; apple_waste | Mass | kg | Record moisture, tare and density where relevant. Use actual wet-state weighing for apples; never convert count or nominal box mass to kg without matched weighing. Water and effluent need condition-specific density; no assumed density constant. |
| split_labour_time | maintenance_service | Time | h | Use signed actual purchased labour hours only; order counts, area and asset counts cannot replace h. Materials, energy, tools, travel and wastes are independent exchanges. In-house hours are QA only, with no invented purchased exchange; normalize attributed hours once by the original final reference denominator. |
| selected_energy_identity | split_support_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | The selected AC identity has one reference energy property. Keep actual attributed quantities in the row unit;1kWh=3.6MJ in its unit group. Convert once before combining with a source expressed in another energy unit or supplying the reference-MJ exchange; never convert the same numerator twice or infer a supplier mix. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_route` | all processes | Apply only to in-store non-specialized retail of fresh whole dessert apples (Malus domestica), one declared cultivar/grade/receiving state per dataset, using ordinary-air R134a refrigerated holding and ambient display, sold by calibrated net mass. Exclude frozen, dried, canned, juiced, cut, washed/waxed on site, mixed-cultivar composite references, controlled atmosphere, home delivery and other produce. Customer self-bagging in specified LDPE bags is included. | `un-cpc`; `cde-apples` |
| `service_gates` | retail | Start at documented store receiving gate after inbound transport; end at final customer acceptance at checkout with agreed cultivar, net mass, grade, freedom from visible decay and recorded condition. Declare the actual quality contract and temperature/humidity/time specification prospectively; no literature value becomes a universal acceptance limit. Include receiving, sorting, cold holding, ambient display, checkout, sanitation, reversals, residual handling and attributable assets. No on-site produce processing occurs. | `cde-apples` |
| `goods_responsibility` | failed_apples | This incremental retail service excludes production and inbound transport for successful merchandise from its burden numerator; downstream links that receiving-gate background exactly once using B_s/D receiving-state kg, not 1 kg of newly produced apples. Include B_f/D receiving-state background for all permanently failed goods, spoilage, shrink and non-sale external transfers, including donation and supplier return. Keep retailer responsibility for these failed cohorts; no displacement credit or supplier refund removes it. A failed external handoff must state recipient, physical state, onward function and treatment responsibility and is never automatically waste. Upstream dataset boundary must include actual cultivar/origin/harvest/storage/packing and inbound transport through the same gate; subtract evidenced overlaps only. |  |
| `physical_boundary` | retail | The service inventory is not an all-receipts apple production model. cp_goods nevertheless closes all physical receiving, storage, sold, returned, donated, supplier-returned, wasted, respiration and moisture histories. Successful goods are documented carriers outside the service reference product; donor and supplier product outputs are physical carriers with no burden credit. Only failed_apples imports ancillary failed-goods background. Waste carriers link treatment once, never both treatment-service and its emissions. Upstream carton manufacture follows merchandise gate ownership; retailer carton treatment remains included. |  |
| `conditional_completeness` | all processes | For each conditional exchange retain equipment register, purchase/work-order search and operating inspection proving presence or absence for the whole period. Absence is not inferred from a blank invoice. Unknown occurrence, missing quantity, unverified identity, undefined background or unclosed balances block a complete dataset. Additional actual chemicals, bags, replacements, spills, waste carriers, cleaning evaporation or emissions need named atomic cards, matched single-process protocols and bilingual regeneration before completeness. Fruit washing or another refrigerant requires scope revision before use. | `jrc-retail` |
| `external_chain` | donated_apples; supplier_return_apples; failed_apples | A supplier return or donation is failure to provide this store retail service, not automatic physical destruction. Track unique fruit to documented recipient acceptance, condition, onward sale/use/treatment and ultimate background owner. Under this PCR original receiving-gate production and inbound transport for external non-sale transfers remain B_f responsibility of the origin service. Every recipient transfer record must carry an origin-cohort ID and production-already-borne marker with the exact B_f receiving-equivalent amount and original background reference; onward recipient models add only post-handoff actions and must not import that original production again. A recipient cannot silently reassign it through a financial credit. If the same fruit returns and is finally resold by this store, reopen the original pool, change B_s/B_f, D and actual numerator under calc_late_return, and reverse the external marker version. Unresolved recipient fate or ownership is incomplete. |  |
| `asset_completeness` | assets | Required retail capital is explicit: cold_assembly, retail_building, checkout_pos, weighing_scale and apple_display_rack, including leased/shared counterparts. Allocate each real asset through calc_assets; not owning it does not remove its responsibility. Building module includes structural shell, finishes, fixed wiring/plumbing, fixed general lighting and building ventilation, but excludes the cold-room assembly and movable POS/scale/rack. Cold-room complete assembly includes insulated wall/ceiling/floor panels, doors, internal lights, compressor/condenser/evaporator, piping and controls plus dedicated installation; excludes building shell, R134a charge, operation, maintenance and disposal. The separate terminal carrier matches that same full physical assembly after measured refrigerant recovery. The other four asset modules each cover one complete actual asset with manufacture, installation and its explicitly measured terminal treatment, excluding operation and maintenance. Verify supplier boundaries so no panel, control, light, wiring, structural element, installation or terminal treatment appears in two modules. Include actual asset maintenance/replacements via named atomic additions with no physical quantity retained inside the labour-only inspection card; missing necessary asset evidence is incomplete, not exclusion. |  |
| `external_air_and_condensate` | all processes | Elementary air exchanges occur only across the actual exterior store boundary. Fruit respiration/moisture trials define internal source terms; no indoor source is automatically emitted to the environment. Cold-room condensation/defrost water is a separate actual waste carrier under cold_condensate, measured at its sewer handoff. If it physically joins cleaning_effluent before one common meter, declare that actual common carrier and allocate its measured whole liquid once between the disjoint process views using upstream condensate and cleaning source meters/composition; the sum must equal the one common-meter mass. Do not record the full common mass in both cards, or record captured fruit water both as vapour and wastewater. Missing source split or capture evidence makes the relevant result incomplete. For retained liquid use stock change until an actual handoff occurs. Other captured species/carriers require their own atomic actual carrier cards when present. |  |
| split_exchange_identity | all inventory rows | Each card has exactly one concrete exchange identity and one reference measurement property/unit; a unit group is not a second property, and auxiliary measurements are conversion evidence only. Labour cards no longer carry bundled materials/energy/equipment/wastes. Retained complete homogeneous assets, original packaged goods and real mixed waste carriers require matching actual whole-scope background/receiver treatment and full composition; heterogeneous collections or selectors are prohibited. An original exchange enters one core card or one split source only; reverse all old package characterization when replacing it and combine only disjoint raw quantities with identical identity/property/unit. Every other actual substance, part, fuel, refrigerant, emission and treatment gap requires a named bilingual card and process protocol; unknown is never zero or complete. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole fresh apples delivered at store receiving gate with known cultivar, wet state and upstream responsibility |
| starting_condition_role | foreground_service_gate |
| product_classification_scope | CPC 3.0 62121 narrower apple-service subset |
| recursive_input_rule | No recursive retail-service input is automatically adopted; failed_apples is an explicitly required receiving-gate apple production background, not another copy of this retail service. |
| upstream_dataset_requirement | State-compatible source with origin, period, cultivar, packing, prior storage and inbound transport boundary; successful and failed receiving-equivalent quantities partitioned under goods_responsibility |
| disclosure | Disclose incremental-service boundary, physical ledger, final wet reference versus receiving-state backgrounds, all exclusions, unverified links and actual gate conditions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Apple handling and retail | required | Every declared apple-service pool | foreground | retail_service |
| cold | R134a refrigerated holding | required | Declared R134a ordinary-air route | foreground | retail_service |
| assets | Lifetime asset and maintenance support | required | All pools require building, POS, scale, rack and complete cold-room assets; inspection and terminal handoffs are conditional with occurrence/absence evidence | support | retail_service |
| split_support | Separate physical exchanges of cleaning or maintenance | conditional | Actual occurrence; prove presence or absence for each exchange | Disjoint resources, equipment and waste | retail_service |

### Process: Apple handling and retail (`retail`)

#### Inputs

##### Product flows

###### Fresh whole dessert apples at store receiving gate (`failed_apples`)

Ancillary upstream demand for goods not ultimately accepted by a paying customer; excludes the receiving-equivalent burden assigned to successful goods. This is a service burden input, not all physical throughput.

- Selected flow: Fresh whole dessert apples at store receiving gate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_goods`
- Sources: `cde-apples`

###### Alternating current (`retail_electricity`)

Point-of-use electricity for lighting, checkout and attributable building services, excluding the separately metered cold-room circuit.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail_energy`
- Sources: `jrc-retail`

###### Municipal potable water at store inlet (`cleaning_water`)

Water for the apple area, reusable crates and shared sanitation; fruit washing is outside this route.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-retail`

###### Anhydrous sodium carbonate cleaning powder (`sodium_carbonate`)

Conditional on documented use of this single specified substance; other cleaning formulations require their own atomic cards before completeness.

- Selected flow: Anhydrous sodium carbonate cleaning powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `jrc-retail`

###### Low-density polyethylene produce bag (`pe_bag`)

New optional self-service bags issued to apple purchasers, excluding upstream cartons and customer-owned bags.

- Selected flow: Low-density polyethylene produce bag
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `jrc-retail`

##### Elementary flows

###### Oxygen from external ambient air, net attributable uptake (`respiration_oxygen`)

This exchange crosses the store exterior environment boundary; the fruit-to-room source, cold-room/store transfer and retained/captured material remain internal until their actual terminal fate is established.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_store_air`
- Sources:

#### Outputs

##### Product flows

###### In-store retail service for fresh whole dessert apples, accepted net mass throughput (`retail_service`)

The reference output is the service for a final accepted mass of apples, not a kilogram of apple production.

- Selected flow: In-store retail service for fresh whole dessert apples, accepted net mass throughput
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_goods`
- Sources: `cde-apples`

###### Fresh whole dessert apples transferred for human-food donation (`donated_apples`)

Only documented recipient acceptance of edible fruit; zero retail reference output and no avoided-production credit. Physical quantity uses dispatch wet mass.

- Selected flow: Fresh whole dessert apples transferred for human-food donation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `jrc-retail`

###### Fresh whole dessert apples physically returned to supplier (`supplier_return_apples`)

Record recipient, condition and continued background responsibility; a financial credit alone is not this exchange.

- Selected flow: Fresh whole dessert apples physically returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `jrc-retail`

##### Waste flows

###### Discarded whole fresh apples for recorded treatment (`apple_waste`)

One wet fruit waste carrier measured at collection; exclude separately collected packaging and water already lost. Route-specific treatment is linked once.

- Selected flow: Discarded whole fresh apples for recorded treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `jrc-retail`

###### Discarded corrugated cardboard apple carton (`carton_waste`)

Dry packaging solids with moisture measured or reported; upstream carton manufacture follows the receiving-gate ownership ledger, not a second new-carton input here.

- Selected flow: Discarded corrugated cardboard apple carton
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `jrc-retail`

###### Discarded low-density polyethylene produce bag (`pe_bag_waste`)

Damaged or unused bags discarded within the retailer boundary, excluding bags accepted by customers.

- Selected flow: Discarded low-density polyethylene produce bag
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `jrc-retail`

###### Apple-area cleaning wastewater at sewer handoff (`cleaning_effluent`)

One real aqueous waste mixture at measured handoff, including dissolved cleaning agent; no duplicate dissolved-solute waste or elementary discharge when treatment is outside.

- Selected flow: Apple-area cleaning wastewater at sewer handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-retail`

##### Elementary flows

###### Water vapour, net fruit-origin release to external ambient air (`fruit_water_vapour`)

This exchange crosses the store exterior environment boundary; the fruit-to-room source, cold-room/store transfer and retained/captured material remain internal until their actual terminal fate is established.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_store_air`
- Sources:

###### Biogenic carbon dioxide, net apple-origin release to external ambient air (`respiration_co2`)

This exchange crosses the store exterior environment boundary; the fruit-to-room source, cold-room/store transfer and retained/captured material remain internal until their actual terminal fate is established.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_store_air`
- Sources:

###### Ethene, net apple-origin release to external ambient air (`fruit_ethylene`)

This exchange crosses the store exterior environment boundary; the fruit-to-room source, cold-room/store transfer and retained/captured material remain internal until their actual terminal fate is established.

- Selected flow: ethylene `fe0acd60-3ddc-11dd-a47d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_store_air`
- Sources:

### Process: R134a refrigerated holding (`cold`)

#### Inputs

##### Product flows

###### Alternating current (`cold_electricity`)

Cold-room circuit electricity for compressor, fans, defrost, internal lights and controls; excludes general building lighting and duplicated main-meter energy.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold_energy`
- Sources: `jrc-retail`

###### Refrigerant R134a, 1,1,1,2-tetrafluoroethane (`r134a_charge`)

Pure R134a by equipment label and supplier composition. This route excludes blends and other refrigerants.

- Selected flow: refrigerant, R134a (tetrafluoroethane) `210b4222-adda-4097-9e79-f2c9a6c172e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `jrc-retail`

#### Outputs

##### Waste flows

###### Recovered R134a for licensed reclamation (`r134a_recovered`)

Single recovered refrigerant carrier; exclude oil and mixed refrigerant, which require distinct measured cards.

- Selected flow: Recovered R134a for licensed reclamation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `jrc-retail`

###### Cold-room condensate and defrost wastewater at sewer handoff (`cold_condensate`)

One actual cold-room drainage mixture, including condensed water and its measured dissolved/suspended content; never an additional elementary water emission. Common cleaning-drain carrier handling follows external_air_and_condensate.

- Selected flow: Cold-room condensate and defrost wastewater at sewer handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold_water`
- Sources: `jrc-retail`

##### Elementary flows

###### R134a, 1,1,1,2-tetrafluoroethane, net release to external ambient air (`r134a_air`)

Equipment-to-indoor-air leakage is not automatically exterior release. Identify capture already included in contained stocks/recovery and any disjoint additional capture, and verify the actual exterior boundary.

The official record provides no Chinese baseName; the aligned rendering retains the same standard chemical identifier.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `jrc-retail`

### Process: Lifetime support (`assets`)

#### Inputs

##### Product flows

###### Complete installed R134a cold room with insulated enclosure and refrigeration plant, without refrigerant (`cold_assembly`)

One physical complete cold room including insulated panels, floor, doors, internal lights, piping, controls and compressor/condenser/evaporator. Manufacturing and dedicated installation only; excludes building shell, charge, operation, maintenance and terminal treatment.

- Selected flow: Complete installed R134a cold room with insulated enclosure and refrigeration plant, without refrigerant
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail`

###### Preventive refrigeration inspection labour only (`maintenance_service`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: Preventive refrigeration inspection labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / D; cp_split_labour_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_assets`
- Sources:

###### Complete installed retail building shell with fixed services (`retail_building`)

One specified real physical asset; full module comprises documented manufacture, installation and asset-specific terminal treatment with measured complete quantity and component fates, excluding operation, maintenance and the other asset cards. Missing full-module evidence blocks completeness.

- Selected flow: Complete installed retail building shell with fixed services
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail`

###### Complete installed electronic checkout POS terminal (`checkout_pos`)

One specified real physical asset; full module comprises documented manufacture, installation and asset-specific terminal treatment with measured complete quantity and component fates, excluding operation, maintenance and the other asset cards. Missing full-module evidence blocks completeness.

- Selected flow: Complete installed electronic checkout POS terminal
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail`

###### Complete installed calibrated produce weighing scale (`weighing_scale`)

One specified real physical asset; full module comprises documented manufacture, installation and asset-specific terminal treatment with measured complete quantity and component fates, excluding operation, maintenance and the other asset cards. Missing full-module evidence blocks completeness.

- Selected flow: Complete installed calibrated produce weighing scale
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail`

###### Complete installed apple display rack (`apple_display_rack`)

One specified real physical asset; full module comprises documented manufacture, installation and asset-specific terminal treatment with measured complete quantity and component fates, excluding operation, maintenance and the other asset cards. Missing full-module evidence blocks completeness.

- Selected flow: Complete installed apple display rack
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail`

#### Outputs

##### Waste flows

###### Decommissioned complete insulated cold room and refrigeration plant after refrigerant recovery (`cold_assembly_waste`)

The same complete physical cold room after refrigerant recovery. Use either direct calibrated net weighing of the actual remaining assembly, with no second subtraction of already removed parts/refrigerant, or the documented measured dry-component BOM reconstruction in calc_assets. The modes are mutually exclusive; separately removed carriers are recorded once.

- Selected flow: Decommissioned complete insulated cold room and refrigeration plant after refrigerant recovery
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail`

### Process: Separate physical support exchanges (`split_support`)

Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

#### Inputs

##### Product flows

###### Single-use nitrile protective glove (`split_inspection_glove`)

Conditional actual dry glove input, measured before use; not a proxy for all inspection consumables. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Single-use nitrile protective glove
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / D; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Complete electronic R134a refrigerant leak detector (`split_leak_detector`)

Conditional actual homogeneous tool model with a persistent lifetime ledger; separately supplied cells, calibration gas and electricity require named disjoint cards if present. Do not assume absence. Manufacture/initial installation only; excludes operation, maintenance and terminal treatment. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete electronic R134a refrigerant leak detector
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured homogeneous complete-model count times its persistent lifetime beneficiary fraction once / D; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Alternating-current electricity for the identified support work (`split_support_electricity`)

Only measured support electricity not already characterized in any store/asset/provider row. Allocate a containing meter to disjoint intervals/sources; the same kWh cannot be added again. Record voltage/provider; no grid mix inferred. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

The selected flow uses the single Net calorific value energy property. The inventory keeps its stated measured energy unit; Units of energy supports1kWh=3.6MJ. Apply this conversion once when expressing a kWh record in reference MJ, including compatible-source aggregation; retain the original kWh meter numerator and source attribution, without adding another electricity demand.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / D; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Diesel light-commercial-vehicle operation for the identified support visit (`split_support_travel`)

Conditional candidate for actual documented diesel light-commercial vehicle visits only, measured vehicle-km including actual empty repositioning. Match complete vehicle-operation background and all beneficiaries; other propulsion/vehicle modes require distinct cards. Do not also add included fuel or movement from an existing transport/asset provider. Stationary idle energy absent from this provider needs its own named exchange. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Diesel light-commercial-vehicle operation for the identified support visit
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / D; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

#### Outputs

##### Waste flows

###### Used nitrile inspection glove with retained contamination (`split_inspection_glove_waste`)

Actual dispatched whole carrier; identify contaminant/state and compatible receiving treatment. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Used nitrile inspection glove with retained contamination
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / D; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Retired complete electronic refrigerant leak detector after separately documented battery removal (`split_leak_detector_waste`)

Measured actual remaining complete carrier, with battery-removal event and separate battery waste card if present. Whole-tool treatment and lifetime attribution must be supported. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Retired complete electronic refrigerant leak detector after separately documented battery removal
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / D; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `full_pool` | all inventory rows | Subdivide by meters and unique events first. For a shared source total Q and causal driver x, attributable Q_i = Q*x_i/sum(x_j) over every actual beneficiary, including other store departments, failed cohorts, idle and closed periods. Use cold occupied m3-hours with declared vacancy standby capacity, sanitation measured task-time and store lighting occupied m2-hours; verify the physical relationship and include every beneficiary in the denominator. Do not allocate merely by successful apple sales or omit zero-driver intervals. | `ghg-product` |
| `idle_zero` | all inventory rows | Prospectively declare a same-cultivar/grade/route/configuration pool and observation period covering complete receiving cohorts and return resolution. Assign zero-driver standby by reserved capacity shares declared before outcomes; reconcile full Q including idle/closed time. Keep all failed and zero-sale cohorts and their actual burdens in this pool. A wholly zero-output pool has raw totals and unresolved normalization, never a zero service intensity or deletion; combine only with a prospectively justified same-configuration pool. |  |
| `persistent_assets` | assets | Maintain one persistent asset and package ledger across every period and beneficiary: unique serial/package ID, full manufacturing/installation burden, actual service history, expected lifetime capacity, earlier cumulative fractions and residual. Assign period fractions against total life capacity; cumulative fractions must not exceed one, and allocate the terminal residual with documented beneficiaries. A lifetime revision recalculates remaining responsibility and corrections to earlier allocations without restarting manufacture. Manufacture/installation, operation, inspection, replacements and end-of-life scopes are disjoint. maintenance_service represents evidenced purchased inspection labour h ONLY; complete work-order count is not its quantity. Actual travel, consumables, tool manufacture/terminal carriers and replacement parts use their specific separate cards. Labour background excludes those sources; reverse the old full package before installing the split, never retain both. Attribute inspection labour and its actual event physical sources by all-beneficiary asset exposure during the supported work-order cycle, without another whole-device manufacturing-lifetime fraction; an inspection tool own manufacture/terminal follows its separate all-history lifetime ledger. Quantify physical replacements by their own complete-product cards. |  |
| `no_coproduct_credit` | retail | The physical apple carriers are not additional retail services or allocation co-products. Donation, markdown, supplier credit, disposal proceeds and financial refund do not create a second functional output or an avoided-production credit. Keep physical return events separate from money events. |  |
| split_attribution | maintenance_service; split_inspection_glove; split_inspection_glove_waste; split_leak_detector; split_leak_detector_waste; split_support_electricity; split_support_travel | Prefer exclusive direct measurements. For shared cleaning events attribute each raw physical quantity by actual cleaned area-events across all beneficiaries; for maintenance use the repaired asset physical driver over all beneficiaries of the actual supported work-order cycle. Retain idle, failed, closed and zero-driver loads and their original carryover rules, never discard them using sales. New tool manufacture/retirement uses persistent lifetime ledgers and historical revision deltas; installed replacement parts are charged once to their actual maintenance event, not again as an original whole-asset acquisition. Do not reapply a share to an already-attributed source or charge terminal tools only to the retirement period. Remove any contained quantity from its old background or replace the entire package with this split; never characterize both. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_apples; retail_service | traceable cohort/event and weighing ledger | site; pool; cohort; unique lot/sub-lot; cultivar; grade; origin; receiving condition; wet mass; tare; receipt time; sale/physical-return/resale IDs and times; net accepted mass; financial refund flag; final fate; paired receiving/fate weight; moisture sample; dry matter; respiratory correction; B_s; B_f; opening/closing stock; background boundary | Calibrated net scales at receiving and checkout; identity-linked paired sublot weighing and representative moisture/dry-matter tests at each change; scan every movement; retain quality acceptance and supplier background records. Aggregation obligations: Close all stock and fate histories; calc_service and calc_goods_background establish D and disjoint gate responsibility; per 1 kg reference flow after one normalization. | kg | every receipt, handoff and return; daily stock; matched state-change sampling | all receiving cohorts to final fate, with retrospective late-return updates | receiving gate, cold room, display, checkout and returns desk of one store | per 1 kg reference flow | scale calibration/test weights; POS-to-stock reconciliation; sample representativeness; signed acceptance; complete original/corrected pool ledger |
| cp_fates | retail | donated_apples; supplier_return_apples; apple_waste; carton_waste; pe_bag_waste | dispatch and residual ledger | site; pool; cohort; event_ID; date; carrier; condition; wet/gross/tare/net kg; moisture; recipient; onward function; treatment route; custody; background owner; package source_ID | Calibrated weighing at each donation, supplier or waste handoff; inspect carrier segregation and obtain signed receiver/treatment records; reconcile with cp_goods original event IDs. Aggregation obligations: Sum each physical carrier once by unique event, attribute to original pool and divide once by D under calc_normalize. | kg | every handoff; daily segregated-residual checks | complete pool including failed/zero-sale cohorts and late returns | store dispatch and waste collection handoff | per 1 kg reference flow | weigh tickets; moisture evidence; receiver signatures; waste contracts; upstream package overlap check |
| cp_retail_energy | retail | retail_electricity | single-process meter view | meter_ID; parent_meter_ID; circuit; timestamp; opening/closing kWh; calibration; full beneficiary drivers; vacancy standby; excluded circuit IDs | Read circuit logger at store, check against utility invoice/main meter, inspect coverage; retain original meter events but select only this process view. Aggregation obligations: calc_electricity then full_pool allocation and calc_normalize; views must not duplicate source kWh. | kWh | continuous logger; interval and invoice reconciliation monthly | all operating, idle, closed and failure intervals in the declared pool period | named retail circuits | per 1 kg reference flow | meter certification; missing-interval log; full denominator; main/submeter reconciliation |
| cp_cold_energy | cold | cold_electricity | single-process meter view | meter_ID; parent_meter_ID; circuit; timestamp; opening/closing kWh; calibration; full beneficiary drivers; vacancy standby; excluded circuit IDs | Read circuit logger at store, check against utility invoice/main meter, inspect coverage; retain original meter events but select only this process view. Aggregation obligations: calc_electricity then full_pool allocation and calc_normalize; views must not duplicate source kWh. | kWh | continuous logger; interval and invoice reconciliation monthly | all operating, idle, closed and failure intervals in the declared pool period | named cold-room circuit | per 1 kg reference flow | meter certification; missing-interval log; full denominator; main/submeter reconciliation |
| cp_consumables | retail | sodium_carbonate; pe_bag | material issue and stock records | site; lot; product; formulation; dry/wet basis; moisture; active concentration; beginning/purchased/ending stock; issue; actual bag mass; beneficiary task; event_ID | Weigh actual pure anhydrous powder and LDPE bags separately; verify supplier composition; inventory-balance each material; record unused/damaged bags separately. Aggregation obligations: Reconcile initial + purchased - closing - external transfers to actual consumption; allocate each material once then calc_normalize. | kg | each issue and delivery; period-end stock count | all operating, idle, closed and failure intervals in the declared pool period | apple bag dispenser and sanitation store | per 1 kg reference flow | calibrated scale; composition sheet; receipts; stock reconciliation; absence inspection |
| cp_water | retail | cleaning_water; cleaning_effluent | independent supply/discharge meter and balance | meter_ID; date; actual whole wastewater m3; import m3; temperature; measured density kg/m3; wastewater composition; w_water; opening/closing stored water; internal reuse; measured evaporation; other water transfers; allocation tasks | Read separate store supply and sewer-handoff meters, sample density and composition for corresponding conditions, calibrate meters and cross-check supply invoice; inspect sanitation-only route. Aggregation obligations: Direct whole-liquid metering and water-component reconciliation under calc_water only; missing measurements are incomplete; full_pool attribution and calc_normalize once. | m3; kg/m3; kg | each meter interval and cleaning event; representative condition-change samples | all operating, idle, closed and failure intervals in the declared pool period | store inlet, apple cleaning task and sewer handoff | per 1 kg reference flow | meter/density calibration; samples; invoice; complete supply/storage/evaporation/discharge reconciliation |
| cp_respiration | retail | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene | matched sublot respiration and moisture observations | sublot_ID; cultivar; state; maturity; timestamp; actual trial wet/dry mass m_trial; M_state_t inventory kg; temperature; humidity; gas_temperature; gas_pressure; absolute C_in_s and C_out_s; F_in and F_out; measured gas-conversion chain; signed r_blank_s; detection limit; residence interval_ID | Use the raw absolute-concentration, calibrated matched sublot method and exact trial-mass/rate/exposure conversion in calc_respiration. Preserve measured raw inlet/outlet, blank and kg wet trial mass; output raw E_s internal source kg for calc_air_boundary only, never terminal elementary kg. Aggregation obligations: Raw source E_s remains linked to the final per 1 kg reference flow protocol view; only validated actual terminal kg is attributed and divided by D once under calc_air_boundary. | kg; h; degree C; kg/m3; m3/h; kg/(kg*h) | continuous environmental log; matched trials at each state/configuration change | all operating, idle, closed and failure intervals in the declared pool period | apple sublots, cold room and ambient display | per 1 kg reference flow | instrument zero/span and gas standards; blanks; representativeness; water/carbon/dry-matter closure; uncertainty |
| cp_refrigerant | cold | r134a_charge; r134a_recovered; r134a_air | species stock and maintenance balance | asset_ID; cylinder_ID; species/composition; tare; dates; opening/closing equipment/cylinder kg; acquired; recovery; sealed transfers; commissioning; calibration; beneficiary cold capacity; T_nonrecovery dispatch_IDs; R_recovered dispatch_IDs; disjoint-set check; recovery-vessel opening/closing stock; capture_stage; capture_already_in_balance_IDs; additional_capture_IDs; actual exterior species flux; room-air stock change | Weigh cylinders and recovered refrigerant and obtain equipment charge/service records; independently check equipment stocks and all transfers at same cutoff. The cold-process view of the shared original exterior-air ledger verifies R134a only, retaining distinct source/terminal and capture IDs without duplicating retail species records; use calc_air_boundary. Aggregation obligations: calc_refrigerant; retain full-system balance then full_pool share and calc_normalize; no netting recovered material twice. | kg | every charge/recovery/transfer; period-end full stock | all operating, idle, closed and failure intervals in the declared pool period | R134a plant and connected cylinders in cold-room service | per 1 kg reference flow | label/composition; calibrated scales; service signoff; cylinder register; closed stock balance |
| cp_assets | assets | cold_assembly; cold_assembly_waste; retail_building; checkout_pos; weighing_scale; apple_display_rack | persistent asset and bounded package ledger | serial/package_ID; full equipment specification; original burden; dry complete mass; refrigerant exclusion; installation scope; all beneficiaries/periods; capacity; life revisions; cumulative fraction; remaining fraction; work order; replaced parts; disposal receipt; asset_kind; reserved_capacity; exposure_interval; H_a_i; actual past exposure; remaining justified exposure; L_a; f_a_i; terminal component fates; module overlap matrix; terminal_mass_mode; direct_remaining_net_kg; full_dry_component_BOM; removed_part_IDs/masses; same-equipment boundary; tare/calibration | Inspect nameplate/specification and supplier package, weigh whole terminal assembly after documented gas recovery; audit lifetime ledger and signed inspection events against invoices. Inventory every building, POS, weighing scale, rack and complete cold room including shared/leased assets. Measure full lifetime exposure and actual terminal whole-asset quantity; obtain disjoint manufacture/installation/terminal boundaries for each module. Enforce the exclusive direct-net versus measured-BOM modes in calc_assets; a directly weighed remaining assembly is not reduced again for removed parts or recovered gas. Aggregation obligations: calc_assets then calc_normalize; manufacturing fraction, event inspection and terminal mass remain disjoint; persistent cumulative fractions at most one. | Item(s); kg | each asset/inspection/disposal event; each period and lifetime revision | all operating, idle, closed and failure intervals in the declared pool period | one store asset and all prior/current/future beneficiaries | per 1 kg reference flow | original supplier boundary; serial ledger; cross-period reconciliation; complete-unit scale; work orders and treatment acceptance |
| cp_store_air | retail | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene | actual exterior species flux and source-to-terminal reconciliation | species; source_sublot_ID; raw E_s; boundary_path_ID; actual time; gas temperature/pressure; absolute inlet/outlet concentration kg/m3; inlet/outlet flow m3/h; calibration; other-store-source_ID; capture_ID; captured species kg; carrier_ID; opening/closing gas, condensate and sorbent stock; transformation evidence; original pool_ID | Measure actual exterior paths with calibrated species/flow instruments and temperature/pressure conversions, matched non-fruit source observations and source-linked capture/stock samples. Link cp_respiration source records without repeating chamber corrections. Inspect all ventilation, recirculation, evaporator, drain and capture devices; unknown paths/capture are incomplete. Aggregation obligations: calc_air_boundary verifies net external species kg before full_pool attribution and one calc_normalize; each source, capture, stock and carrier event is used once. | kg; kg/m3; m3/h; h | continuous matched source/exterior intervals; every capture/drain event; opening/closing stocks | all operating, idle, closed and failure intervals in the declared pool period | store exterior air boundary and traced indoor apple-source compartments | per 1 kg reference flow | species/flow calibration and gas standards; whole-path coverage; signed drain/capture records; independently closed source-to-terminal mass balance; uncertainty |
| cp_cold_water | cold | cold_condensate | condensate and defrost liquid handoff ledger | drain_ID; event_ID; date/time; whole-liquid m3; actual density kg/m3; temperature; dissolved/suspended composition; measured water fraction; opening/closing condensate/ice stock kg; fruit-source capture attribution; source split meters; common carrier_ID; direct weighed kg; calibration | Directly weigh the actual sewer-handoff liquid, or directly meter whole-liquid volume and condition-specific measured density using one exclusive mode. Sample its water/species fractions and retained ice/liquid, reconcile defrost and drain events. If physically co-mingled with cleaning_effluent at one meter, preserve upstream actual source meters and the one common carrier, assign disjoint shares once and reconcile their sum; missing split evidence is incomplete. Aggregation obligations: Measured net whole-liquid carrier kg, with capture/storage reconciliation under calc_air_boundary; full_pool attribution then one calc_normalize; never add captured species kg as duplicate carrier mass. | kg; m3; kg/m3 | each defrost/drain event and meter interval; opening/closing liquid/ice stock | all operating, idle, closed and failure intervals in the declared pool period | cold-room evaporator drain through actual sewer handoff | per 1 kg reference flow | calibrated scale/drain meter and density samples; water/species analysis; defrost logs; stock reconciliation; common-carrier dedup proof |
| cp_split_labour_assets | assets | maintenance_service | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |
| cp_split_support | split_support | split_inspection_glove; split_inspection_glove_waste; split_leak_detector; split_leak_detector_waste; split_support_electricity; split_support_travel | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service | D is the sum of final accepted net wet apple kg at the customer gate in the closed pool, reversing physically returned acceptance, then adding a resale only at its new final acceptance. Refusal, repeated handling, internal transfers, failed sales and donations are not service output; money-only refunds do not change D. Reference output is 1 kg. | accepted_mass; physical_returns; resale_acceptance; cp_goods | D; reference output |  |
| calc_goods_background | failed_apples | For each traced receiving cohort k, use calibrated paired receiving and fate weights plus measured moisture/dry-matter observations on matched sublots to assign receiving-equivalent B_s,k to ultimately sold fruit; report the measured transition relation including respiratory dry-matter loss and moisture change. Do not treat shrink water as wet discarded apples or assume final kg equals receiving kg. B_f,k = R_k - B_s,k after all unique fruit in that closed cohort reaches final fate; R_k is actual received wet kg. Retain all lost units, rejected/donated/supplier-returned fruit and receiving-equivalent shrink not attributable to ultimately successful fruit in B_f,k. Document a disjoint receiving-mass ownership partition with B_s + B_f = R, including shrink of successful fruit in B_s, not also B_f. Direct identity-linked paired weighing is preferred; a dry-matter mapping may be used only with independently measured respiratory dry-matter changes, representative sampling and uncertainty. Missing transition evidence blocks background coupling. | R_k; fate_mass; paired_weights; moisture; respiratory_dry_loss; cp_goods; cp_respiration | B_s; B_f; B_f/D service background; B_s/D downstream coupling |  |
| calc_normalize | all inventory rows | For each non-reference row divide its complete attributed raw total by D exactly once after state/unit conversions. Record raw source total, allocation share, attributed numerator and final result; a preallocated or already normalized supplier amount must be restored to a consistent raw basis or documented as final, never allocated/normalized twice. D must be positive. | raw_total; attributable_share; D; cp_goods | exchange per 1 kg reference flow |  |
| calc_electricity | retail_electricity; cold_electricity | Convert measured point-of-use kWh to MJ using 1 kWh = 3.6 MJ before allocation and one division by D. Subtract the evidenced cold-room circuit from the retail main-meter pool before retail allocation; do not deduct it from a retail submeter already excluding it. Specify supplier geography, year, voltage, supply mix and transmission-loss boundary in the linked background. | kWh_retail; kWh_cold; source_meter_boundary; D | MJ per 1 kg reference flow |  |
| calc_water | cleaning_water; cleaning_effluent | Supply mass = V_import*rho_supply; whole wastewater handoff mass = V_discharge*rho_discharge, using separate direct meters and measured densities at recorded temperature/composition. Direct wastewater volume is the entire liquid waste mixture, including dissolved detergent and entrained apple solids, not an inferred water volume. Sample its water mass fraction w_water for the separate water-component balance: imported water + opening stored water = closing stored water + water component of whole effluent + independently measured evaporation + other documented water transfers; internal reuse cancels. Use water component = whole effluent mass*w_water, never replace whole effluent exchange by this water component. Imports already exclude internal reuse, and directly measured discharge is not reduced again for evaporation. This PCR permits direct discharge metering only: missing meter/density/composition records make the result incomplete; no reconstructed effluent amount is authorized. | V_import; rho_supply; V_discharge; rho_discharge; w_water; temperature; stored_water; measured_evaporation; other_water_transfers; D; cp_water | kg water and kg effluent per 1 kg reference flow |  |
| calc_refrigerant | r134a_charge; r134a_recovered; r134a_air | R134a released = opening equipment and cylinder stock + acquisitions - closing equipment and cylinder stock - T_nonrecovery - R_recovered. Weigh all terms in kg of pure R134a at one cutoff. T_nonrecovery means only sealed refrigerant transfers sent out for direct reuse/sale without reclamation; R_recovered means only weighed material sent out for reclamation under r134a_recovered. These are disjoint dispatch event-ID sets and their intersection must be empty; recovered dispatch is never deducted in T_nonrecovery. Internal cylinder/equipment/recovery-vessel transfers cancel and are not outward dispatches. Resolve commissioning, residues and terminal stock; keep purchases and recovery as distinct measured inventory exchanges. Attribute species release and acquisitions to full beneficiaries, then divide by D once; equipment manufacture excludes charge. This stock balance is the raw kg source reaching room air after any capture already represented by the same contained stocks or recovery dispatches; identify those capture event IDs explicitly. It is not automatically an exterior elementary emission. Include recovery-vessel stocks at both cutoffs, reconcile stage of capture, and pass the raw balance to calc_air_boundary for external release and room-air storage corrections. Do not subtract in calc_air_boundary a capture already included in closing contained stock or R_recovered; any additional measured capture outside this stock ledger must have a disjoint event ID. | opening_stock; acquired; closing_stock; T_nonrecovery; R_recovered; dispatch_event_IDs; D; cp_refrigerant | R134a supplied/recovered kg per reference; raw stock-balance source kg for calc_air_boundary |  |
| calc_respiration | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene | Use one raw-absolute-concentration mode only. For each instrumented sublot/condition interval measure absolute species mass concentrations C_in,s and C_out,s in kg/m3 and matched inlet/outlet volumetric flows F_in and F_out in m3/h at actual recorded gas temperature/pressure; retain the measured conversion from instrument mole/volume fractions to these concentrations. r_s = sigma_s*(F_out*C_out,s - F_in*C_in,s) - r_blank,s in kg/h for the entire measured sublot; sigma_s=+1 for CO2, ethene and water vapour and -1 for oxygen uptake. r_blank,s is the matched empty-chamber net rate with the same sign convention. Subtract inlet concentration and blank once each; do not additionally subtract ambient background, and do not use a supplier rate already inlet/blank corrected in this raw mode. Measure the sublot current wet mass m_trial in kg for that interval; k_s = r_s/m_trial in kg species/(kg wet apples*h). For each matching actual inventory state integrate E_s = integral k_s(state,t)*M_state(t) dt over actual wet apple inventory kg and residence hours, retain the resulting E_s as raw internal fruit source/uptake kg for calc_air_boundary; do not yet normalize or treat it as external emission. M_state(t) includes failed/returned and zero-sale inventory, never only final sold mass; each sublot measurement interval and actual inventory interval is used once. Independently check wet/dry-matter/water/carbon balance; blank mismatch, negative unexplained net rates, unsupported gas conversion or missing representative state data remain unresolved. No further division by trial mass, final apple mass, or occupancy is permitted. | C_in_s; C_out_s; F_in; F_out; gas_temperature; gas_pressure; measured_gas_conversion; sigma_s; r_blank_s; m_trial; M_state_t; residence_intervals; cp_respiration; D | E_s raw internal source/uptake kg; k_s kg species/(kg wet apples*h) |  |
| calc_assets | cold_assembly; cold_assembly_waste; retail_building; checkout_pos; weighing_scale; apple_display_rack | For each asset a and period-beneficiary i, measure exposure H_a,i as reserved-capacity*time over every actual operating, idle, closed and failed interval. Use cold-room reserved internal m3*h, building reserved gross floor m2*h, POS reserved checkout-station h, scale reserved weighing-station h and rack reserved shelf m2*h. All beneficiaries, including other store departments, enter the same asset ledger. L_a is the declared complete lifetime exposure in the same units: measured past exposure plus justified remaining exposure; f_a,i = H_a,i/L_a. Apply f_a,i once to the one complete asset manufacturing/installation burden. For the cold-room terminal waste carrier, q_terminal,a,i = measured whole dry terminal assembly kg*f_a,i using the same fraction, not another period share; its treatment burden is linked once. Building, POS, scale and rack full asset background modules include their own evidenced terminal deconstruction/treatment with actual whole-asset quantities and component fates; apply f_a,i once to each full module, never add their terminal waste/treatment again to foreground. At actual retirement set L_a to measured total lifetime exposure, reconcile sum_i H_a,i=L_a and sum_i f_a,i=1, allocate residual and issue versioned differences correcting prior fractions. Each revised L_a recalculates all cumulative fractions and the remaining ledger; never restart a full asset or allocate a terminal burden twice. Actual signed inspection events are separate, attributed over full period beneficiaries by reserved cold capacity and normalized once. Missing asset totals, past fractions, remaining exposure or terminal boundary evidence blocks completeness. Terminal mass uses one recorded exclusive mode: direct calibrated net weighing W_direct is the remaining whole assembly after refrigerant and removed parts have already left; do not subtract their mass again. Only when direct weighing is unavailable may a measured component-BOM reconstruction use W_BOM = sum(full dry component masses) - sum(uniquely removed dry component masses); document the same equipment, recovery/tare boundary and remaining parts, never deduct refrigerant from an already refrigerant-free dry BOM. Do not combine W_direct and W_BOM or apply removed_part corrections to W_direct. Set terminal_mass to the one selected net quantity, then apply f_a,i and D once; removed components have separate actual carrier accounting with no duplicate whole-assembly share. maintenance_service uses purchased labour h only under cp_split_labour_assets and c_split_quantity, never asset lifetime fractions or package counts. | asset_ID; H_a_i; L_a; f_a_i; past_exposure; remaining_exposure; full_asset_module; terminal_mass; inspection_events; D; cp_assets; terminal_mass_mode; W_direct; measured_full_dry_components; uniquely_removed_components | attributable items and kg per 1 kg reference flow |  |
| calc_late_return | all inventory rows | A late physical return reopens the original cohort/pool version: reverse its earlier accepted kg, append actual reverse-handling, storage, sanitation, packaging, disposal and other incremental burdens to that original numerator, revise B_s/B_f and physical fates, then recompute every normalized row. Keep event dates, prior values and delta receipts; do not also allocate those events to a new cohort. Resale preserves the same unique goods history and counts only its final acceptance. Money-only refunds update finance, not physical fate or D. | original_cohort_ID; return_event_ID; original_numerator; incremental_events; revised_D; revised_fates | versioned corrected original-pool exchanges |  |
| calc_air_boundary | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene; r134a_air | The store exterior is the elementary-flow boundary; fruit-to-indoor-air, cold-room-to-sales-floor, evaporator condensation and recirculation are internal transfers. Retain the wet-state mapping and raw absolute-concentration formula in calc_respiration. Use G_s=E_s for fruit CO2, ethene and water source kg, and G_O2=-E_O2 for oxygen uptake; for R134a use the raw source from calc_refrigerant with its already-captured event set identified. For each species close N_s,air = G_s - C_s,additional - DeltaS_s - K_s, where C_s,additional is measured net species kg removed across a non-air boundary and not already deducted in G_s, DeltaS_s is closing minus opening attributable species inventory in indoor air, retained condensate/defrost water, absorbed/captured media and other declared internal stocks, and K_s is independently evidenced net chemical/biological transformation not already present in the fruit source. Document sign, source attribution and uncertainty for every term; uptake uses a signed oxygen deficit/stock change relative to the measured matched background. Captured but retained material is DeltaS, captured material discharged in a carrier is C, never both; internal cold-room/store recirculation cancels. Check this source-to-terminal balance against independently measured actual external inlet/outlet mass fluxes integral(F_out*C_out,s - F_in*C_in,s)dt at recorded gas temperature/pressure and every actual exterior vent/leak path, with measured non-fruit/store sources separated and attributed consistently. Concentrations must be absolute in the exterior verification too; ventilation volume alone is never a species emission factor. The chamber inlet/blank correction is already in E_s and must not be applied again to E_s; exterior inlet subtraction concerns the separate actual exterior-flux check, with other sources removed once by unique records. For positive release species inventory only verified N_s,air as elementary output; oxygen elementary input is verified -N_O2,air. Attribute the terminal kg across full beneficiaries and divide by D once. Unknown capture, unmeasured storage/transformation, missing boundary paths, unexplained sign or unclosed source-to-terminal balance is incomplete, not zero. Record actual absence of capture/transformation with equipment/operating evidence. Captured species in wastewater is part of its one measured whole-liquid carrier, not an additional elementary emission or duplicate solute waste. | E_s; G_s; C_s_additional; captured_event_IDs; DeltaS_s; K_s; actual_exterior_inlet_outlet_flux; other_store_sources; cp_store_air; cp_cold_water; cp_refrigerant; D | verified terminal species kg per 1 kg reference flow |  |
| c_split_quantity | maintenance_service; split_inspection_glove; split_inspection_glove_waste; split_leak_detector; split_leak_detector_waste; split_support_electricity; split_support_travel | For each exact identity r in its single unit, restore normalized source q_source with its original denominator D_source as x_raw=q_source*D_source; already-raw quantities are not restored again. Apply only missing attribution once under split_attribution, deduplicate source/event/version and reverse old package and historical versions. Sum disjoint raw quantities as X_r; q_r=X_r/D, dividing by the final reference denominator once. Labour uses measured purchased h only, never old order counts/area; in-house hours are QA only. Calculate asset counts, material kg, electricity kWh, vehicle*km and waste-carrier kg separately; never add across properties or multiply already-measured physical quantities by labour hours. Unknown quantity/identity/background blocks completeness. | X_r; D_source; q_source; D; cp_split_labour_assets; cp_split_support | q_r |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | Verify each named flow against official state/type/name/medium/property/unit and actual use; retain candidate gaps explicitly. Electricity identity is provider-free point-of-use energy, not an electricity supply factor. | direct original identity records and row-specific binding decisions |
| q_goods_state | failed_apples; retail_service | Do not release a complete result without traceable receiving-to-final wet-state mapping, dry-matter/respiration evidence, closed unique goods history and B_s+B_f=R ownership. Normal water loss and successful fruit respiration remain with the same successful fruit receiving equivalent. | paired calibrated weights, moisture trials, cohort ledger, background links |
| q_coverage | all processes | Reconcile every meter, material, fate and asset source to full beneficiaries and the closed pool. Retain missing intervals as unknown; measured zero needs detection/absence evidence. Actual additional flows trigger atomic extension before completeness. | full source reconciliations, absence inspection, unresolved register and uncertainty |
| q_traceability | all inventory rows | Keep location, actual period, method, calibration, original event IDs, conversions, allocation numerator/denominator, background boundary, correction version and one final normalization for each row. Protocol views never duplicate source events. | auditable raw-to-final calculation workbook and signed custody records |
| q_media_boundary | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene; r134a_air; cold_condensate | Fruit respiration source terms and equipment stock losses are not exterior elementary emissions. Require species-specific source-to-terminal closure with measured capture, indoor/liquid/sorbent stock changes and independently verified exterior flux. Unknown capture/transformation is not zero. Condensed/defrosted water and dissolved captured species cross as one whole-liquid waste carrier; physically shared cleaning discharge is metered/attributed once. Direct terminal asset net weight is never reduced a second time for removed components. | raw source, exterior flux, capture/drain/stock and direct-net/BOM-mode evidence with unique IDs |
| q_quantity_failed_apples | failed_apples | B_f / D by calc_goods_background and calc_normalize; retain receiving-state kg. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_goods |
| q_quantity_retail_electricity | retail_electricity | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_retail_energy |
| q_quantity_cleaning_water | cleaning_water | V_import * rho_supply attributed once / D by calc_water; do not subtract internal reuse. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_water |
| q_quantity_sodium_carbonate | sodium_carbonate | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_consumables |
| q_quantity_pe_bag | pe_bag | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_consumables |
| q_quantity_respiration_oxygen | respiration_oxygen | Only the verified actual terminal species kg under calc_air_boundary, after capture and internal stock/transformation reconciliation, attributed and divided by D once. Raw fruit source E_s is not this exchange. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_store_air |
| q_quantity_retail_service | retail_service | 1 kg of reference flow; calc_service; cp_goods. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_goods |
| q_quantity_donated_apples | donated_apples | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_fates |
| q_quantity_supplier_return_apples | supplier_return_apples | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_fates |
| q_quantity_apple_waste | apple_waste | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_fates |
| q_quantity_carton_waste | carton_waste | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_fates |
| q_quantity_pe_bag_waste | pe_bag_waste | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_fates |
| q_quantity_cleaning_effluent | cleaning_effluent | V_discharge * rho_discharge attributed once / D by calc_water. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_water |
| q_quantity_fruit_water_vapour | fruit_water_vapour | Only the verified actual terminal species kg under calc_air_boundary, after capture and internal stock/transformation reconciliation, attributed and divided by D once. Raw fruit source E_s is not this exchange. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_store_air |
| q_quantity_respiration_co2 | respiration_co2 | Only the verified actual terminal species kg under calc_air_boundary, after capture and internal stock/transformation reconciliation, attributed and divided by D once. Raw fruit source E_s is not this exchange. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_store_air |
| q_quantity_fruit_ethylene | fruit_ethylene | Only the verified actual terminal species kg under calc_air_boundary, after capture and internal stock/transformation reconciliation, attributed and divided by D once. Raw fruit source E_s is not this exchange. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_store_air |
| q_quantity_cold_electricity | cold_electricity | Use the attributed raw total under calc_normalize; cp_goods fixes D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_cold_energy |
| q_quantity_r134a_charge | r134a_charge | Actual initial and top-up R134a supplied from cylinders, attributed / D by calc_refrigerant; no recharge-equals-leak assumption. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_refrigerant |
| q_quantity_r134a_recovered | r134a_recovered | Actual weighed recovery sent across the boundary / D by calc_refrigerant. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_refrigerant |
| q_quantity_r134a_air | r134a_air | Use calc_refrigerant raw stock source and calc_air_boundary terminal correction; deduct each capture once, resolve room-air inventory, and attribute verified exterior release kg / D once. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_refrigerant |
| q_quantity_cold_assembly | cold_assembly | One complete asset manufacturing and installation package times persistent attributable lifetime fraction / D by calc_assets. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_assets |
| q_quantity_maintenance_service | maintenance_service | Number of completed signed inspection work orders with the declared package boundary, attributed / D by calc_assets. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_assets |
| q_quantity_cold_assembly_waste | cold_assembly_waste | Measured remaining whole-assembly mass times persistent attributable end-of-life fraction / D by calc_assets. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_assets |
| q_quantity_retail_building | retail_building | One actual complete asset full-life background module times f_a,i / D under calc_assets; no duplicated manufacture/installation/terminal treatment. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_assets |
| q_quantity_checkout_pos | checkout_pos | One actual complete asset full-life background module times f_a,i / D under calc_assets; no duplicated manufacture/installation/terminal treatment. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_assets |
| q_quantity_weighing_scale | weighing_scale | One actual complete asset full-life background module times f_a,i / D under calc_assets; no duplicated manufacture/installation/terminal treatment. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_assets |
| q_quantity_apple_display_rack | apple_display_rack | One actual complete asset full-life background module times f_a,i / D under calc_assets; no duplicated manufacture/installation/terminal treatment. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_assets |
| q_quantity_cold_condensate | cold_condensate | Actual measured whole-liquid discharge kg by cp_cold_water, with retained stock and fruit-origin captured water reconciled under calc_air_boundary; use one disjoint carrier amount / D. | Raw source, attributed numerator, exact state conversion and final per-reference result; cp_cold_water |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | all processes | Confirm cultivar/grade/state, ordinary-air R134a cold holding, ambient display and checkout net-mass gates; incompatible processing, mixed cultivar or refrigerant is outside scope. |  |
| `v_reference` | retail_service | Require positive D, unique final accepted goods history, exact 1 kg service output and one normalization. Refusal, physical return, resale, money-only refund, internal transfer and donation must remain distinguishable. |  |
| `v_balance` | all inventory rows | Reject unclosed stock, wet-state transition, water, refrigerant, source-meter or persistent asset balances; verify B_s+B_f=R and successful downstream coupling exactly once. Retain zero-output pools as unnormalizable. |  |
| `v_complete` | all inventory rows | A target mechanical check does not approve methodology or unresolved identities. Complete datasets require bound row-specific UUID/property/unit/medium, actual quantities and background, all conditional occurrence decisions, additional actual atomic flows and bilingual alignment; no unsupported defaults. |  |
| `v_returns` | all inventory rows | Audit late-return corrections against original numerators, D, wet-state mapping, background and fates, with dates and deltas; ensure reverse-handling events are not also charged to a later cohort. |  |
| split_completeness | all inventory rows | Check every exact identity and single reference property, all actual work-order constituents, disjoint measurements, old-package reversal, no duplicated source/asset terminal scope, all-beneficiary historical attribution and one final normalization. Unverified sources, uncarded actual exchanges, unknown quantities or a mere claim of contract inclusion are incomplete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground incremental retail service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared apple-service route with reviewed applicability and completed bindings, measured quantities, balances and uncertainty |
| excluded_use | Whole classification coverage; fruit production reference; blanket retail comparisons; complete result while any identity, state conversion or denominator is unresolved |
| required_metadata | Required qualifiers; named conditional exchanges; reference throughput; upstream successful/failed receiving-state partition; exact supplier-package boundary; single-process protocol views |
| required_quality_disclosure | Source periods/geography; sample representation; missingness; instrument uncertainty; zero-output pools; original and late-corrected results; unresolved UUID/background and candidate limitations |
| update_trigger | Cultivar/grade/state, processing/holding/refrigerant/channel, supplier background, actual flow, return outcome, asset life or source evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc | official_guidance | UNSD, CPC Version 3.0, subclass 62121, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62121 | Classification includes vegetables, fruits/nuts and prepared/preserved groups; supports narrower declaration only |
| cde-apples | official_guidance | California Department of Education, Apples, Storage section, reviewed 2026-08-17, https://www.cde.ca.gov/ls/nu/fd/apples.asp | Apple cold/dry storage and avoiding pre-use rinsing support this declared route; school-food guidance, no retail compliance threshold or loss factor |
| jrc-retail | official_guidance | Schönberger, Gálvez Martos and Styles (2013), Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN, doi:10.2791/1775; section 1.2 direct/indirect aspects, refrigeration and food-waste sections; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Relevance of electricity, refrigeration, sanitation, packaging and residual management; no borrowed numerical benchmark or complete SRD conformity claim |
| ghg-product | standard | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, chapter 9, printed page 63, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision and physical-allocation hierarchy only; pool, wet-state background ownership, return correction and asset ledger are explicit PCR design decisions, not source-mandated factors |
