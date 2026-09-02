---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-marine-mammals
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fats and oils and their fractions, of marine mammals

## 1. Scope and Applicability

This PCR covers production of fats, oils, and physical fractions derived from a declared marine-mammal species and delivered in a declared crude, rendered, refined, or fractionated state. It applies only when the foreground data package identifies the species, source population or stock and geography, source-material route, product state, intended market use, and the legal and ethical basis under which acquisition, possession, processing, transport, and sale are permitted.

The PCR does not authorize harvest, trade, processing, food use, feed use, cosmetic use, or any other use. Conformance requires a documented regulatory chain for every source lot and destination market. A lot with missing, inconsistent, expired, or inapplicable authorization must not be represented as a conforming product dataset.

CPC 21526 is distinct from fish-liver oils, other fish oils, other rendered animal fats, and chemically modified animal fats classified elsewhere. Codex CXS 329-2017 is a fish-oil standard and is not applied to marine-mammal fats or oils. Codex CXS 211-1999 is not used as a composition, identity, or process specification for this category. No fish-oil or named-animal-fat composition table, contaminant profile, process assumption, or numerical range is transferred into this PCR.

No reviewed source used here establishes one cross-species composition or one uniform production route. Producers shall therefore use species-, lot-, site-, route-, and product-state-specific foreground records. All refining, physical fractionation, deodorization, winterization, blending, packaging, and storage steps are included only when actually performed and declared. Hydrogenation and other chemical modification outside CPC 21526, and blends whose marine-mammal share cannot be separately quantified, are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-marine-mammals |
| classification_refs | CPC 3.0: 21526 - Fats and oils and their fractions, of marine mammals |
| covered_products | Species-declared marine-mammal fats, oils, and physical fractions in a declared crude, rendered, refined, or fractionated state, where legal eligibility and chain of custody are documented |
| excluded_products | Fish-liver oils; other fish oils; terrestrial-animal fats; vegetable oils; unidentified or unquantified blends; illegal or authorization-incomplete material; chemically modified animal fats outside CPC 21526 |
| representative_product | 1 kg of species-declared marine-mammal fat, oil, or physical fraction at the declared factory gate and product state |
| production_route | Declared eligible source material or same-category oil receipt; conditional preparation and oil recovery; conditional refining and physical fractionation; finishing, storage, and transfer |
| market_state | Bulk or packaged; crude, rendered, refined, or physically fractionated; intended use and destination-market eligibility explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A species-declared marine-mammal fat, oil, or physical fraction at the stated product condition |
| How much | 1 kg net product mass |
| How well | Meets the producer's declared product specification and destination-market requirements; species, source, product state, intended use, and regulatory chain are complete |
| How long or cycle | At factory-gate transfer for the declared batch; no service duration is assigned |
| reference_flow_link | The reference product output in `product_finishing_storage` is normalized to 1 kg net product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fats and oils and their fractions, of marine mammals `e203a8c3-0e12-46f4-bef7-fb2bb53cc8a3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared marine-mammal common and scientific species name; source population or stock and geography; source-material route; acquisition and processing jurisdiction; authorization and chain-of-custody references; product state; physical fraction identity where applicable; intended use; destination market; factory-gate geography; batch and production dates; net mass basis |

When constructing a foreground data package, every required qualifier shall be recorded in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent auditable field. A generic “marine oil” or “animal oil” label is insufficient. The reference flow UUID identifies the Tiangong product flow only; it does not certify species, composition, legality, ethics, quality, or market eligibility.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the dataset to 1 kg net reference product at the declared factory gate; exclude packaging mass from reference-product mass. |
| `batch_mass_reconciliation` | every foreground batch and physical fraction | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated batch measurements on a consistent wet, dry, or as-received basis and declare that basis; reconcile inputs, products, co-products, residues, retained stock, and measured loss. |
| `moisture_and_nonlipid_basis` | source material and intermediate oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record moisture and non-lipid content when they materially affect yield or comparability; do not convert between as-received and dry or lipid bases without measured batch data and an explicit formula. |
| `utility_conversion` | electricity, fuels, steam, cooling, and heat | Energy or mass as metered | declared meter unit and converted SI unit | Preserve the measured unit, conversion factor, and energy carrier; report electricity and thermal energy separately and do not infer one from product mass. |
| `fraction_identity` | each fractionated output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each fraction separately by declared cut or specification and measured mass; do not infer a uniform fraction yield or composition across species, lots, or technologies. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_scope_identity` | product-category selection | Include only products within CPC 3.0 subclass 21526 and keep fish oils, other animal fats, and chemically modified animal fats outside this PCR. | `unsd-cpc-3-exp-notes-2025` |
| `sb_regulatory_chain` | every source lot and destination market | Identify species, source population or stock and geography, acquisition route, applicable jurisdiction, authorization documents, chain-of-custody transfers, processing eligibility, intended use, and destination-market status; reject conformance when this chain is incomplete or inapplicable. |  |
| `sb_upstream_acquisition` | source-material acquisition before the first foreground gate | Link harvest, collection, landing, carcass handling, by-product generation, and transport to specific upstream datasets when they occur outside the foreground boundary; disclose excluded stages and do not treat legal or ethical screening as a substitute for their environmental inventory. | `eu-pef-2021` |
| `sb_foreground_route` | processing under the operator's control | Include all actually performed receipt, preparation, oil recovery, separation, refining, physical fractionation, finishing, storage, treatment, and on-site utility operations through factory-gate transfer. | `eu-pef-2021` |
| `sb_same_category_input` | purchased marine-mammal oil or fraction entering foreground processing | Keep the same-category input as an explicit product flow with its own upstream dataset and qualifiers; do not recursively re-create its upstream production inside the receiving process. |  |
| `sb_cxs_fish_oil_exclusion` | product specification and validation | Do not apply CXS 329-2017 fish-oil identities, composition ranges, or processing assumptions to marine-mammal fats or oils. | `codex-cxs-329-2017` |
| `sb_named_animal_fat_limit` | product specification and validation | Do not use CXS 211-1999 as a marine-mammal composition, identity, or process specification. | `codex-cxs-211-1999` |
| `sb_fdm_bat_scope_limit` | technology and emission claims | Do not present EU FDM BAT as a product-specific BAT basis for primary rendering or fat melting; its stated scope excludes primary products from animal by-products such as rendering and fat melting. | `eu-fdm-bat-2019` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Legally eligible, species-declared lipid-bearing material or same-category oil/fraction at the first foreground-controlled receiving point |
| starting_condition_role | Separates upstream acquisition and transport datasets from foreground processing while preserving the regulatory and physical chain |
| product_classification_scope | CPC 3.0 subclass 21526 only |
| recursive_input_rule | Record a purchased CPC 21526 input explicitly and link its upstream dataset; never replace it with an internally generated loop or an unqualified generic animal/fish oil proxy |
| upstream_dataset_requirement | Species-, geography-, acquisition-route-, and period-representative datasets for all material stages before the declared starting condition, with authorization and chain-of-custody metadata retained |
| disclosure | Declare species, stock or population and geography, acquisition and material route, legal and ethical applicability, permits or other authorization references, custody transfers, processing route, product state, intended use, destination market, cut-offs, allocation choices, and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_receipt_qualification` | Source receipt and qualification | required | Always; the dataset cannot conform without source and regulatory-chain qualification | Foreground gate, identity control, and accepted-lot mass balance | kg accepted source material or same-category oil |
| `primary_oil_recovery` | Primary oil recovery and separation | conditional | Include when the foreground operator receives lipid-bearing tissue, fat, or other source material rather than recovered oil | Foreground preparation, rendering or other declared recovery, and separation | kg recovered oil intermediate |
| `oil_refining` | Oil refining | conditional | Include each refining operation actually performed | Foreground removal or conversion of declared impurities under the actual technology | kg refined oil output |
| `physical_fractionation` | Physical fractionation | conditional | Include when the declared product is a physical fraction or when co-fractions are produced | Foreground separation into declared physical fractions | kg target fraction and each co-fraction |
| `product_finishing_storage` | Product finishing, storage, and transfer | required | Always; packaging is conditional on the delivered form | Foreground product consolidation, storage, optional packaging, and factory-gate transfer | 1 kg net reference product |

### Process: Source receipt and qualification (`source_receipt_qualification`)

#### Inputs

##### Product flows

###### Species-declared source material or same-category oil (`received_source_material`)

Record each received lot separately. The record shall distinguish lipid-bearing material from recovered oil or fraction and shall link the physical lot to its complete regulatory chain and upstream dataset.

- Selected flow: Species-declared marine-mammal source material or CPC 21526 oil/fraction; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured gross and net received mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production batch leading to the reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_chain_and_receipt`

###### Inbound transport service (`inbound_transport`)

Record the actual origin, mode, distance, payload, temperature control, and trip allocation for transport from the upstream dataset gate to the first foreground gate.

- Selected flow: Mode-specific transport service; no Tiangong UUID selected
- Flow property / unit: Transport service / tkm or actual carrier activity unit
- Amount rule: calculated from verified shipment mass and route distance or direct carrier record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per production batch leading to the reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source_chain_and_receipt`

##### Waste flows

#### Outputs

##### Product flows

###### Accepted source material (`accepted_source_material`)

Record the measured mass released to the declared next operation after species, documentation, and physical acceptance checks.

- Selected flow: Accepted species-declared source material or oil intermediate; no Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receipt lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_chain_and_receipt`

##### Waste flows

###### Rejected or quarantined material (`rejected_source_material`)

Record rejected, quarantined, returned, destroyed, or diverted material separately with reason and final destination. Do not treat legally ineligible material as an accepted input.

- Selected flow: Destination-specific rejected material or waste; no Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receipt lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`

### Process: Primary oil recovery and separation (`primary_oil_recovery`)

#### Inputs

##### Product flows

###### Accepted lipid-bearing material (`recovery_feed`)

Record the accepted lot mass and its as-received basis at entry to the actual recovery operation.

- Selected flow: Accepted species-declared lipid-bearing material; no Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per recovery batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Recovery water or steam (`recovery_water_steam`)

Record separately metered process water and steam that cross the process boundary; preserve their measured state and unit.

- Selected flow: Site-specific water and steam supply flows; no Tiangong UUID selected
- Flow property / unit: Volume, mass, or energy / measured meter unit
- Amount rule: metered use allocated to the recovery batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recovery batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_steam`

###### Recovery electricity and fuels (`recovery_energy`)

Record electricity, each fuel, and purchased heat separately. Do not infer recovery energy from another species, lot, or fish-oil process.

- Selected flow: Site- and carrier-specific energy supply flows; no Tiangong UUID selected
- Flow property / unit: Energy or mass / metered carrier unit
- Amount rule: metered or invoice-reconciled use allocated to the recovery batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per recovery batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuels`

#### Outputs

##### Product flows

###### Recovered oil intermediate (`recovered_oil_intermediate`)

Record the separated oil mass and declared state. This is an internal intermediate unless it proceeds directly to product finishing as the declared crude or rendered product.

- Selected flow: Species-declared recovered marine-mammal oil intermediate; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured recovered oil mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per recovery batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

###### Solid residues and non-oil material (`recovery_residues`)

Record each residue or co-product separately by actual legal status and destination; a saleable output is not labelled as waste solely to avoid allocation.

- Selected flow: Destination-specific residue, co-product, or waste; no Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured mass by output and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recovery batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`

###### Recovery wastewater (`recovery_wastewater`)

Record discharged or transferred wastewater volume and measured characteristics needed by the selected treatment dataset.

- Selected flow: Destination-specific wastewater flow; no Tiangong UUID selected
- Flow property / unit: Volume / m3, with measured pollutant loads retained separately
- Amount rule: metered or mass-balance-derived discharge by batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per recovery batch or reconciled reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`

##### Elementary flows

###### Direct recovery emissions (`recovery_direct_emissions`)

Record only measured or permit-method-calculated emissions that cross the environment boundary; link captured streams to treatment rather than reporting them as direct emissions.

- Selected flow: Pollutant-specific elementary flows selected during dataset construction; no UUID inferred
- Flow property / unit: Mass / kg pollutant
- Amount rule: measured or approved-method-calculated load by reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reconciled production output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_monitoring`

### Process: Oil refining (`oil_refining`)

#### Inputs

##### Product flows

###### Oil feed to refining (`refining_feed_oil`)

Record the species, source lots, state, and measured mass of each oil feed entering the declared refining sequence.

- Selected flow: Species-declared recovered or purchased marine-mammal oil; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by refining batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per refining batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Refining water, energy, and processing aids (`refining_utilities_aids`)

Record water, electricity, fuels, heat, filtration media, adsorbents, alkali, acids, and other aids separately when actually used; retain concentration and recovered or discarded fate.

- Selected flow: Actual site-specific utility and processing-aid flows; no UUID inferred
- Flow property / unit: Mass, volume, or energy / measured unit
- Amount rule: metered, weighed, or invoice-reconciled amount by refining batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per refining batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_aids`

#### Outputs

##### Product flows

###### Refined oil intermediate (`refined_oil_intermediate`)

Record measured refined oil mass and the actual operations performed. Do not claim a uniform composition or quality level from the process label alone.

- Selected flow: Species-declared refined marine-mammal oil intermediate; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured refined oil mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per refining batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

###### Refining residues and spent aids (`refining_residues`)

Record soapstock, gums, spent media, distillates, sludge, or other actual outputs separately by measured mass and destination, without assuming that any named residue always occurs.

- Selected flow: Actual destination-specific refining residue or waste; no UUID inferred
- Flow property / unit: Mass / kg
- Amount rule: measured mass by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per refining batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`

###### Refining wastewater (`refining_wastewater`)

Record actual discharge or transfer volume and measured characteristics; keep water reused internally out of the discharge total.

- Selected flow: Destination-specific wastewater flow; no Tiangong UUID selected
- Flow property / unit: Volume / m3, with pollutant loads retained separately
- Amount rule: metered discharge by batch or reconciled reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per refining batch or reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`

##### Elementary flows

###### Direct refining emissions (`refining_direct_emissions`)

Record pollutant-specific direct releases from the actual refining system using measured or approved calculation records.

- Selected flow: Pollutant-specific elementary flows selected during dataset construction; no UUID inferred
- Flow property / unit: Mass / kg pollutant
- Amount rule: measured or approved-method-calculated load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reconciled refining output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_monitoring`

### Process: Physical fractionation (`physical_fractionation`)

#### Inputs

##### Product flows

###### Oil feed to fractionation (`fractionation_feed_oil`)

Record the measured mass, species, lot composition, and state of oil entering the actual physical fractionation operation.

- Selected flow: Species-declared marine-mammal oil feed; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by fractionation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fractionation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Fractionation energy and auxiliaries (`fractionation_energy_auxiliaries`)

Record electricity, heat, cooling, refrigerant make-up, and filtration or separation aids separately for the actual technology.

- Selected flow: Actual site-specific energy and auxiliary flows; no UUID inferred
- Flow property / unit: Mass or energy / measured unit
- Amount rule: metered or weighed amount by fractionation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per fractionation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_aids`

#### Outputs

##### Product flows

###### Target physical fraction (`target_fraction`)

Record the measured mass and declared cut or specification of the fraction that proceeds to product finishing.

- Selected flow: Declared target fraction of species-declared marine-mammal oil; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured target-fraction mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fractionation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Co-fractions (`co_fractions`)

Record every other marketable fraction separately by measured mass, specification, and destination.

- Selected flow: Declared co-fraction of species-declared marine-mammal oil; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured mass for each co-fraction by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fractionation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

###### Fractionation losses and spent media (`fractionation_waste`)

Record only actual off-specification material, unrecovered holdup removed from the system, and spent media, each with measured mass and destination.

- Selected flow: Actual destination-specific fractionation waste; no UUID inferred
- Flow property / unit: Mass / kg
- Amount rule: measured mass by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per fractionation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`

##### Elementary flows

###### Refrigerant and direct fractionation emissions (`fractionation_direct_emissions`)

Record actual refrigerant losses and other direct releases using equipment service records or approved monitoring methods.

- Selected flow: Substance-specific elementary flows selected during dataset construction; no UUID inferred
- Flow property / unit: Mass / kg substance
- Amount rule: measured or service-record-calculated loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reconciled fractionation output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_monitoring`

### Process: Product finishing, storage, and transfer (`product_finishing_storage`)

#### Inputs

##### Product flows

###### Declared oil or fraction for finishing (`finishing_feed`)

Record the measured mass and product state transferred from the last applicable production operation.

- Selected flow: Declared species-specific crude, rendered, refined, or fractionated marine-mammal oil; no additional Tiangong UUID selected
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finished-product batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and transport packaging separately when supplied within the declared factory gate; do not include packaging mass in the reference-product mass.

- Selected flow: Material-specific packaging flows; no UUID inferred
- Flow property / unit: Mass or count / measured unit
- Amount rule: weighed or bill-of-material amount allocated to shipped product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per shipped reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_storage`

###### Finishing and storage energy (`finishing_storage_energy`)

Record electricity, heat, cooling, and other energy used for finishing, maintaining the declared storage condition, and transfer.

- Selected flow: Site- and carrier-specific energy supply flows; no UUID inferred
- Flow property / unit: Energy or mass / metered carrier unit
- Amount rule: metered use allocated by measured operating driver and storage time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per shipped reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_storage`

#### Outputs

##### Product flows

###### Reference marine-mammal fat, oil, or fraction (`reference_product`)

Record the net transferred mass of the fully qualified product. The dataset shall carry all reference-flow qualifiers and shall not imply certification or legal approval from the Tiangong UUID.

- Selected flow: Fats and oils and their fractions, of marine mammals `e203a8c3-0e12-46f4-bef7-fb2bb53cc8a3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed normalization to 1 kg net reference product from measured batch output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product at factory-gate transfer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

###### Off-specification product and packaging waste (`finishing_waste`)

Record off-specification oil, clean-out material, spills recovered as waste, and packaging waste separately with actual treatment or recovery destination.

- Selected flow: Destination-specific product or packaging waste; no UUID inferred
- Flow property / unit: Mass / kg
- Amount rule: measured mass by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per finished-product batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | species, source lots, routes, and separately metered operations | Prefer subdivision and direct assignment; do not pool species, legal source routes, or product states when records permit separate modelling. | `eu-pef-2021` |
| `allocation_internal_transfers` | intermediate oil transferred between foreground processes | Carry measured intermediate mass and directly attributable utilities forward without creating an artificial co-product credit or recursive same-category input. |  |
| `allocation_marketable_outputs` | oil, physical fractions, and other marketable outputs | Identify each independently usable output and assign directly measured operations first; if shared burdens remain, select a physical relationship that reflects the process, or use economic allocation when no defensible physical relationship exists, and disclose the method and rationale. | `eu-pef-2021` |
| `allocation_fractionation` | target and co-fractions | Do not assume equal composition, value, or yield; use measured fraction masses and product-specific records, disclose shared-burden allocation, and test a materially plausible alternative allocation basis. |  |
| `allocation_residue_status` | residues, recovered materials, and wastes | Determine product, co-product, residue, or waste status from actual legal status, use, and destination; do not relabel a marketable output as waste to avoid allocation, and do not credit recovery without a documented substitution or end-of-waste model. |  |
| `allocation_upstream_source` | source material arising with other activities or products | Use the upstream dataset's reviewed multifunctionality treatment and disclose it; do not assign zero upstream burden merely because the material is called a by-product. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_chain_and_receipt` | `source_receipt_qualification` | source identity, legal and ethical applicability, custody, received and accepted mass, and transport | permits and authorizations; species record; stock/population and geography; acquisition route; custody documents; inspection and weigh records; shipment route | lot_id; common_name; scientific_name; stock_population; origin_geography; acquisition_route; jurisdictions; permit_or_authorization_ids; validity_dates; custody_parties_and_dates; intended_use; destination_market; gross_mass; tare_mass; accepted_mass; rejection_mass; origin; mode; distance; payload | verify documents against lot identity and validity; retain copies or durable references; use calibrated receiving scale and carrier records | kg; km; tkm | every lot and shipment | all lots represented by the dataset | every supplying route and receiving site | no aggregation across species or incompatible authorization routes; mass-weight only compatible lots | authorization validity check; custody reconciliation; scale calibration; shipment evidence; exception log |
| `cp_batch_mass_balance` | all production processes | feed, intermediate, product, co-product, residue, retained stock, and loss mass | scale tickets; tank gauges; calibrated meters; batch sheets; inventory movements | batch_id; lot_ids; opening_stock; each_input_mass; each_output_mass; closing_stock; moisture_or_basis; measurement_time; instrument_id | measure each transfer on a consistent declared basis and reconcile the batch | kg | every batch; stock reconciliation at least per reporting period | all production batches represented | every foreground site and applicable unit process | normalize only after batch reconciliation; aggregate mass-weighted by qualified product output | calibration records; signed batch sheet; reconciliation residual and investigation |
| `cp_water_and_steam` | `primary_oil_recovery` | water and steam | meters; condensate records; utility logs | meter_id; opening_reading; closing_reading; water_source; steam_mass_or_energy; batch_or_period; allocation_driver | direct metering preferred; otherwise reconcile a submetered period using documented operating drivers | m3; kg; MJ | each batch or shortest representative metered period | representative operating periods including cleaning | each site and relevant operation | allocate only to operations using the utility and normalize to reconciled output | meter calibration; reading logs; allocation calculation |
| `cp_energy_and_fuels` | all production processes | electricity, fuel, purchased heat, and cooling | submeters; fuel issue records; invoices; equipment logs | carrier; quantity; unit; meter_or_invoice_id; batch_or_period; operating_driver; allocation_factor | meter by carrier and operation where practicable; reconcile invoices to site totals | kWh; MJ; kg; m3 | each batch or monthly with operational reconciliation | representative operating and seasonal periods | each site and technology | keep carriers separate; allocate shared energy using measured operating drivers | meter calibration; invoice reconciliation; calculation record |
| `cp_utilities_and_aids` | `oil_refining`; `physical_fractionation` | water, energy, cooling, processing aids, filtration media, and refrigerant make-up | issue records; recipes; weigh records; meters; maintenance logs | material_or_carrier; concentration; quantity; unit; batch_id; recovered_quantity; disposal_route | weigh, meter, or reconcile issued quantity to batch and retained stock | kg; m3; kWh; MJ | every batch or issue | all applicable batches | each site and technology | report each aid and carrier separately; subtract documented returned unused stock only | calibrated instrument; issue and return records; batch sign-off |
| `cp_waste_and_discharge` | all production processes | rejected material, residues, co-products, solid waste, and wastewater | weigh records; manifests; invoices; tank or flow meters; laboratory results | stream_id; legal_status; mass_or_volume; destination; treatment; sale_or_transfer_value_if_applicable; flow; pH; temperature; relevant_pollutant_concentrations | measure each material stream and discharge; characterize wastewater for the selected treatment or emission model | kg; m3; kg pollutant | every batch or shipment; wastewater by monitoring plan | all represented production and discharge periods | each site and discharge or transfer point | keep streams and destinations separate; calculate loads from matched flow and concentration records | scale or meter calibration; transfer manifest; laboratory QA; destination evidence |
| `cp_emissions_monitoring` | all production processes | direct air and water emissions and refrigerant loss | stack or discharge monitoring; permit calculations; leak and service records | substance; source; concentration; flow; duration; direct_mass; method; detection_limit; service_addition; recovered_refrigerant; period | use applicable approved monitoring or mass-balance method and distinguish captured from directly released streams | kg substance; concentration and flow units | at permit or method frequency and after material process changes | all operating periods represented | source-specific before justified aggregation | calculate load from matched measurements; normalize to reconciled product output | method reference; calibration; laboratory QA; maintenance and exception records |
| `cp_packaging_and_storage` | `product_finishing_storage` | packaging, storage duration, product transfer, and allocated storage energy | bill of materials; packaging issue records; warehouse logs; energy meters; dispatch weights | packaging_material; quantity; unit; batch_id; storage_condition; entry_time; dispatch_time; storage_energy; allocation_driver; net_product_mass | reconcile issued packaging and storage records to dispatched batches; meter or allocate storage energy by documented driver | kg; item; day; kWh; MJ | every dispatch batch; energy monthly or shorter | all stored and shipped product represented | each warehouse and delivered form | exclude packaging from reference mass; allocate storage energy by occupied capacity and duration or a better measured driver | bill-of-material check; stock reconciliation; meter and dispatch records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_received_mass` | each source lot | net received mass = gross loaded mass - tare mass; accepted and rejected masses shall reconcile to net received mass after documented sampling or retained-stock adjustments | gross_mass; tare_mass; accepted_mass; rejection_mass; documented_adjustment | kg accepted and rejected source material |  |
| `calc_transport_service` | inbound shipment | transport service = verified payload mass in tonnes x route distance in kilometres; document empty-return or multi-drop allocation when included | payload_mass; route_distance; trip_allocation | tkm by mode and route | `eu-pef-2021` |
| `calc_batch_mass_balance` | every production batch | mass-balance residual = total measured inputs + opening stock - total measured outputs - closing stock; investigate and disclose material residuals rather than forcing them to zero | input_masses; output_masses; opening_stock; closing_stock | kg residual and percent of total measured input |  |
| `calc_process_yield` | recovery, refining, and fractionation | process yield = measured qualified output mass / measured process feed mass on the same declared basis; report separately by species, lot mix, product state, and technology | qualified_output_mass; feed_mass; measurement_basis | kg/kg process feed |  |
| `calc_utility_intensity` | each applicable process | utility intensity = utility quantity allocated to the process / measured qualified process output; keep water, electricity, each fuel, heat, and cooling separate | utility_quantity; allocation_driver; qualified_output_mass | utility unit per kg process output |  |
| `calc_pollutant_load` | measured wastewater or waste-gas stream | pollutant load = matched stream volume or gas flow x measured concentration, with unit conversion and sampling representativeness documented | flow_or_volume; concentration; operating_time; conversion_factor | kg pollutant per reporting period |  |
| `calc_reference_normalization` | finished product dataset | normalized inventory amount = reconciled foreground amount / net kg of qualified reference product transferred at the factory gate | foreground_amount; qualified_reference_product_mass | inventory amount per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_chain` | every source lot | Species, stock or population and geography, acquisition route, jurisdictions, authorization validity, custody transfers, intended use, and destination-market eligibility shall be complete and mutually consistent. | Source record, authorization reference, custody record, and lot reconciliation |
| `dqr_species_route_separation` | all aggregated data | Do not aggregate different species, materially different source routes, incompatible legal statuses, or materially different product states unless separate results are retained and the aggregation rationale is disclosed. | Disaggregated batch table and aggregation record |
| `dqr_measurement` | mass, utilities, aids, wastes, and emissions | Use calibrated or otherwise controlled measurement systems; retain raw readings, units, conversion factors, allocation drivers, detection limits, and correction records. | Calibration, meter, laboratory, invoice, and calculation records |
| `dqr_temporal` | foreground dataset | Cover a representative production period and all material operating modes, cleaning, start-up, shutdown, storage, and seasonal conditions; disclose excluded or abnormal periods. | Production calendar, operating logs, and coverage assessment |
| `dqr_completeness` | each process | Reconcile all material mass, water, energy, aids, products, co-products, wastes, wastewater, and direct emissions identified for the actual route; explain zero, not-applicable, and missing values separately. | Process flow sheet, balance tables, and gap log |
| `dqr_no_cross_species_defaults` | all quantitative values | Do not substitute fish-oil, terrestrial-animal-fat, another species, or another technology value without an explicit reviewed proxy justification and uncertainty assessment; no such default is supplied by this PCR. | Source applicability review and uncertainty record |
| `dqr_source_applicability` | external standards and guidance | Use cited sources only for the stated purpose: CPC for category scope, CXS 211 and CXS 329 for negative applicability screens, EU FDM BAT only to document that primary rendering and fat melting are outside its scope and that its BAT-AELs and environmental performance values must not be applied here, and EU PEF for lifecycle method and disclosure context. | Source-to-rule trace and reviewer check |
| `dqr_quantitative_evidence` | yield, composition, utilities, aids, emissions, waste, and allocation factors | Use foreground records or reviewed representative batch evidence. The absence of reliable cross-species ranges is a data requirement, not permission to invent a value. | Collection protocol outputs and reviewed evidence record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Confirm product flow UUID `e203a8c3-0e12-46f4-bef7-fb2bb53cc8a3`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, reference unit kg, and normalization to 1 kg net product. |  |
| `val_product_scope` | product identity | Confirm CPC 21526 scope, declared marine-mammal species and product state, and exclusion of fish oil, other animal fat, unidentified blends, and chemically modified products outside the subclass. | `unsd-cpc-3-exp-notes-2025` |
| `val_regulatory_chain` | every represented lot | Fail conformance if species, source geography and population or stock, acquisition route, applicable jurisdictions, authorization validity, custody transfers, processing eligibility, intended use, or destination-market status is missing, inconsistent, expired, or inapplicable. |  |
| `val_route_completeness` | process map | Include every operation actually performed and exclude only genuinely absent conditional processes; link all upstream acquisition and transport outside the foreground gate to qualified datasets. | `eu-pef-2021` |
| `val_mass_balance` | every batch and aggregation | Check consistent measurement basis and reconciliation of inputs, outputs, co-products, residues, retained stock, and loss; investigate and disclose material residuals. |  |
| `val_inventory_completeness` | each included process | Verify collected values or explicit not-applicable declarations for water, energy carriers, aids, outputs, wastes, wastewater, direct emissions, packaging, and storage relevant to the actual route. |  |
| `val_allocation` | multifunctional processes | Verify subdivision and direct assignment were attempted first, every marketable output is identified, the remaining allocation relationship and rationale are disclosed, and a materially plausible alternative is tested. | `eu-pef-2021` |
| `val_standard_non_transfer` | standard use | Reject any use of CXS 329 fish-oil values or CXS 211 named-animal-fat values as marine-mammal composition, identity, process, or numerical defaults. | `codex-cxs-329-2017`; `codex-cxs-211-1999` |
| `val_bat_claim` | BAT or regulatory claim | Reject a claim that EU FDM BAT provides product-specific BAT for primary rendering or fat melting; record the actually applicable jurisdictional requirement separately. | `eu-fdm-bat-2019` |
| `val_data_quality` | publication candidate | Verify temporal, technological, geographical, species, route, and product-state representativeness; list data gaps and proxy use; do not publish a reasoned estimate as a measured foreground value. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | species-, route-, site-, and product-state-specific foreground unit-process or aggregated-process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA modelling of the declared marine-mammal fat, oil, or physical fraction for the documented geography, period, route, product state, intended use, and destination market after conformance checks |
| excluded_use | Legal, ethical, sustainability, food-safety, feed-safety, or trade certification; fish-oil proxy; cross-species or cross-route substitution without review; modelling illegal or authorization-incomplete material; generic composition claims |
| required_metadata | All reference-flow qualifiers; included and excluded processes; upstream dataset links; species and source route; regulatory-chain references; product and fraction state; intended use and destination market; temporal, technological, and geographical coverage; cut-offs; allocation; collection protocols; data-owner and review status |
| required_quality_disclosure | Foreground versus secondary data; measurement basis and calibration; batch coverage and mass-balance residuals; proxy use; allocation sensitivity; missing quantitative range evidence; uncertainty; applicable and non-applicable source statements |
| update_trigger | Change in species, source population or geography, authorization or trade regime, destination-market eligibility, acquisition route, technology, product state or fraction, site, allocation, data age, material yield or utility profile, emission controls, or availability of reviewed quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-exp-notes-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 21526, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category identity and exclusions from fish oils, other animal fats, and chemically modified animal fats |
| `codex-cxs-211-1999` | Standard (`standard`) | Codex Alimentarius, CXS 211-1999, Standard for Named Animal Fats. https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf | Negative applicability screen only; not a marine-mammal identity, composition, process, or numerical source |
| `codex-cxs-329-2017` | Standard (`standard`) | Codex Alimentarius, CXS 329-2017, Standard for Fish Oils. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+329-2017%2FCXS_329e.pdf | Confirms fish-oil scope; negative applicability screen prohibiting transfer to marine-mammal fats and oils |
| `eu-pef-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj | Lifecycle boundary, high-quality and verifiable data, upstream linkage, allocation hierarchy, and disclosure context; no product-specific value |
| `eu-fdm-bat-2019` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Scope limitation only: primary animal by-product production such as rendering and fat melting is not addressed; do not apply FDM BAT-AELs or environmental performance values to this PCR |
