---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.lubricating-preparations-and-preparations-of-a-kind-used-for-the-oil-or-grease-treatmen-377cfc53
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Physically blended aqueous ethylene-glycol antifreeze from inhibitor superconcentrate

## 1. Scope and Applicability

This method is limited to onsite physical mixing of a purchased inhibitor superconcentrate with separately purchased ethylene glycol, followed by deionised-water dilution, quality control and dispatch of an aqueous Si-OAT ethylene-glycol antifreeze. BASF manufacturing originals establish one real route; a classification label is not a formulation or coverage of all lubricating preparations. The reference gate is actual net external delivery at the manufacturing site, not newly released mass.

Exclude petroleum lubricating oils and base oils/esters themselves, standalone additives, hydraulic liquids, propylene-glycol/glycerol formulations, aircraft deicers, waste-fluid regeneration and onsite inhibitor synthesis/neutralisation. Keep concentrate intermediates distinct from final aqueous product. Establish separate cohorts by final formulation/concentration, site and route. Reassess a changed process involving a real chemical reaction rather than applying this physical-blending method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.lubricating-preparations-and-preparations-of-a-kind-used-for-the-oil-or-grease-treatmen-377cfc53 |
| classification_refs | CPC 3.0 35430; narrower; only the aqueous ethylene-glycol antifreeze subset; accepted narrower association is governed by classifications/mappings/cpc-3.0-to-pcr.yaml and its decision record; scientific review remains pending |
| covered_products | Physically blended and diluted aqueous Si-OAT ethylene-glycol antifreeze with declared formulation, concentration and delivery state |
| excluded_products | Petroleum lubricant/base oil/ester; standalone additive; hydraulic liquid; propylene-glycol/glycerol product; aircraft deicer; reclaimed fluid; onsite reaction route |
| representative_product | A declared aqueous dilution of a compatible G40 concentrate intermediate prepared from G140K SC and ethylene glycol |
| production_route | Receive/store supplies → meter superconcentrate and glycol → thoroughly mix → dilute with water → test/rework → package or store/load in bulk → net delivery |
| market_state | Final aqueous liquid in bulk or declared HDPE drums; not dry solids, neat active substance or concentrate awaiting customer dilution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Product mass of the declared aqueous ethylene-glycol antifreeze formulation at the plant delivery gate |
| How much | 1 kg net delivered final aqueous liquid, excluding packaging; Q is positive actual net delivery mass for the matched cohort |
| How well | Conforms to the actual declared concentration, water-quality, inhibitor and batch acceptance specification; generic UUID gives no efficacy guarantee |
| How long or cycle | One explicit actual period and matched cohort; no service life, fill/maintenance quantity, use count or heat-transfer service assigned |
| reference_flow_link | delivered_antifreeze |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Antifreeze `f4d2de8d-01df-42a2-aa65-7f7215606250` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | final product and supplier formulation/revision; distinct identities of superconcentrate and concentrate intermediate and final aqueous liquid; ethylene-glycol supplied assay/water/impurities and ethylene-oxide-hydration route; whole superconcentrate composition and carrier water and supply region; final concentration value and mass/volume basis and preparation definition; measured density and temperature and mass-conversion records; water quality and inhibitor system and batch acceptance specification/method; actual net-delivery gate and unique batch/return identity; opening/closing raw-material and WIP and finished masses and carried burdens; complete period and matched cohort including failed/zero-output/rework operations; packaging mode and tare/reuse allocation; actual production geography and electricity voltage/provider and transport scope; native identity limitations and classification debt and provider compatibility |

Declare every required qualifier in the foreground package; missing items make the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual net delivery Q from cp_gate as the sole denominator, excluding packaging and undelivered finished stock. Release P is not Q; returned product reacceptance creates no new production. |
| wet_active_basis | formulation inputs and output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Separate whole supplied wet mass from glycol, inhibitor actives, water and other composition subledgers; dry, active, concentrate and final aqueous bases are not interchangeable. |
| volume_temperature | liquid records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | m = V × rho(T, actual composition). An integrated volume receives no time factor; integrate only a volume rate. Use each liquid’s actual batch state and temperature-specific density; neither neat-glycol density for formulations nor secondary property factors establish density. Volume ratios are not mass ratios and volume additivity is not assumed. |
| energy_preservation | utilities | Energy | kWh; MJ | Preserve measured energy units; 1 kWh = 3.6 MJ is only an explicit unit conversion. Steam heat uses mass and supply/return enthalpy difference, with mass and energy in separate ledgers. |
| manufacturer_dilution | final aqueous formulation | Mass | kg | For this G40 route restrict final preparation to the manufacturer-described 33–60 vol% concentrate, recording the actual supplier preparation definition; the illustrative 50/50 volume ratio is neither a mass ratio nor a default input factor. Convert the component additions using concentrate/water densities at their measured temperature and measure final-liquid state; do not assume additive mixed volume. Water must satisfy applicable batch specifications, checking manufacturer guidance of hardness 0–3.6 mmol/L and chloride and sulfate each no more than 100 ppm. Actual use-temperature/freeze performance requires separate acceptance evidence, not typical datasheet values. See basf-g40-2023. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased whole superconcentrate, separate glycol and deionised water, utilities and actual packaging at site receipt, plus traceable opening stocks |
| starting_condition_role | Foreground blending starts with supplier formulations/raw materials, not burden-free upstream supplies |
| product_classification_scope | The defined aqueous ethylene-glycol antifreeze route subset of CPC 3.0 35430 |
| recursive_input_rule | Link the whole superconcentrate once to its actual upstream provider; do not repurchase its contained constituents. Cancel onsite concentrate, rework and warehouse handovers when aggregating |
| upstream_dataset_requirement | Link each purchased ingredient, whole formulation, water treatment, utility, packaging and included transport to actual route/region/grade providers; generic flow identity proves no supplier quantity or burden |
| disclosure | Disclose production/delivery period and gate, formulation version, water/active bases, geography, storage, packaging, handling/loading, stocks and carried burdens, allocation, emissions and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | mix_dilute_dispatch | Include receipt and raw/WIP/finished storage, mixing/dilution, conditional conditioning/filtration, sampling/testing, failed runs, returns/rework, actual packaging, handling/loading and actual wastes/emissions. Extend atomic rows for observed chemicals, filters, seals, energy or releases; unresolved UUIDs never remove burdens. | `basf-g140k-sc-2023`; `basf-g40-2023` |
| boundary_external | upstream and downstream | Represent actual supply manufacture and included inbound logistics upstream; model user operation, equipment circulation, downstream distribution and end-of-life separately. Meter each actually included transport service independently, without default zero, distance or use count. | `basf-g40-2023` |
| boundary_formulation | superconcentrate and concentrate | G140K SC is available only in Asia-Pacific. The described route combines 67 wt% separately added glycol with 33 wt% superconcentrate before aqueous dilution. This is a recipe illustration, not an input factor per net delivery; actual losses, rework and stocks remain measured. Both technical documents are BASF evidence, not independent sources. | `basf-g140k-sc-2023`; `basf-g40-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mix_dilute_dispatch | Mixing, dilution, storage and delivery | required | Every matched cohort; include conditional operations actually used | One aggregate foreground; internal concentrate and warehouse handovers are not duplicate outputs | 1 kg net delivered aqueous antifreeze |

### Process: Mixing, dilution, storage and delivery (`mix_dilute_dispatch`)

#### Inputs

##### Product flows

###### Purchased inhibitor superconcentrate (`inhibitor_superconcentrate`)

Count the complete purchased formulation once, including its carrier glycol, water and inhibitors. Assayed constituents are a composition subledger, never additional purchased ingredients. Asia-Pacific supply scope; obtain actual supplier recipe compatibility and batch specification.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for inhibitor_superconcentrate; no division by Q during collection.

- Selected flow: GLYSANTIN G140K SC whole supplied liquid formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_materials`
- Sources: `basf-g140k-sc-2023`

###### Separately purchased ethylene glycol (`ethylene_glycol`)

Record separately purchased commercial ethylene glycol with assay, water and impurities, not glycol already inside the superconcentrate. Native CAS 107-21-1 and ethylene-oxide-hydration route must match; industrial/electrolyte use wording does not prove a supplier grade. No native geography is specified.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for ethylene_glycol; no division by Q during collection.

- Selected flow: Ethylene glycol `3685eaf5-415b-46b2-a350-8b8cf548abbf`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_materials`
- Sources: `basf-g140k-sc-2023`

###### Final dilution water (`dilution_water`)

Measure actual water added to make the final aqueous formulation. Native CAS 7732-18-5, IX/RO pure water at plant, unspecified geography and no certified coolant-water quality; test the actual water and link its treatment provider. Do not count carrier water as this purchased addition.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for dilution_water; no division by Q during collection.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_materials`
- Sources: `basf-g40-2023`

###### Equipment cleaning water (`cleaning_water`)

Record cleaning water separately from dilution water using distinct meter or issue records. The same IX/RO native identity is valid only for actual deionised cleaning water; ordinary mains water requires another atomic row and matching identity.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for cleaning_water; no division by Q during collection.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_materials`
- Sources:

###### Blending, storage and loading electricity (`electricity`)

Include pumps, mixing, dilution, QC, lighting attributable to included storage, packaging and loading, including failed runs and returns. A queried CN <1 kV consumption/grid-mix identity is not a universal supplier; keep UUID unresolved until actual site compatibility is established.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for electricity; no division by Q during collection.

- Selected flow: Low-voltage grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources:

###### Conditional purchased process steam (`steam`)

Include only where actual mixing, cleaning or temperature conditioning uses purchased steam. Record supply/return enthalpy, condensate and quantity without treating heat as product mass. Split onsite fuel and each direct emission when steam is generated onsite.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for steam; no division by Q during collection.

- Selected flow: Saturated process steam
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources:

###### Conditional handling diesel (`diesel`)

Include diesel actually used by attributable onsite unloading, forklifts or dispatch handling. Record fuel issue and equipment duty; do not assume every site uses diesel or omit an observed carrier.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for diesel; no division by Q during collection.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources:

###### Conditional drum body (`hdpe_drum`)

Use only actual supplied HDPE drum bodies for packaged delivery; measure body tare separately from closure and liquid. Bulk delivery has no disposable drum only if actual records demonstrate it.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for hdpe_drum; no division by Q during collection.

- Selected flow: High-density polyethylene drum body
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources:

###### Conditional drum closure (`hdpe_closure`)

Record the actual separate HDPE closure. A seal, gasket or closure of another material needs its own specific row, mass and provider; it is not silently part of liquid output.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for hdpe_closure; no division by Q during collection.

- Selected flow: High-density polyethylene drum closure
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources:

###### Conditional paper label (`paper_label`)

Measure the label used for actual packaged output; adhesive, wrap or carton observed outside this article requires a separate atomic exchange.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for paper_label; no division by Q during collection.

- Selected flow: Paper drum label
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources:

###### Conditional transport pallet (`wood_pallet`)

Record actual one-way pallet mass or evidenced reusable-pallet service allocation, with measured reuse and losses. No default life or number of trips is assigned.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for wood_pallet; no division by Q during collection.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources:

#### Outputs

##### Product flows

###### Terminal accepted net delivery (`delivered_antifreeze`)

This unique terminal Product output is the actual net external delivery of the declared aqueous Si-OAT ethylene-glycol antifreeze, excluding packaging. Native at-plant dissolution/dilution/additive identity, unspecified CAS/grade/geography; generic usual 30–70% base-liquid comment gives no batch recipe, density or performance guarantee. Native classification 34139 is a disclosed metadata debt, not permission to replace the formulation by pure glycol.

Amount explanation: 1 kg; cp_gate verifies actual delivery Q; the same normalize_once reporting operation yields Q/Q.

- Selected flow: Antifreeze `f4d2de8d-01df-42a2-aa65-7f7215606250`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_gate`
- Sources: `basf-g40-2023`

##### Waste flows

###### Rejected liquid sent offsite (`offspec_liquid`)

Record actual final rejects sent for treatment with composition and destination; a transfer back to the same process is internal rework, not this external waste and not a new accepted product. No avoided-product credit.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for offspec_liquid; no division by Q during collection.

- Selected flow: Off-spec aqueous ethylene-glycol antifreeze
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residuals`
- Sources:

###### Cleaning effluent (`glycol_wastewater`)

Measure whole wet effluent to its actual treatment boundary, with glycol and inhibitor analyses. COD is a treatment indicator, not evidence of glycol species, reaction water or an unmeasured mass outlet.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for glycol_wastewater; no division by Q during collection.

- Selected flow: Aqueous ethylene-glycol cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residuals`
- Sources:

###### Conditional empty input container (`empty_hdpe_container`)

Record actual emptied HDPE input-container mass and separately account for retained liquid. Other container materials and disposal streams require separate rows; reusable bulk tanks require evidenced handling/cleaning instead of a fictitious disposable container.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for empty_hdpe_container; no division by Q during collection.

- Selected flow: Empty HDPE superconcentrate container
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residuals`
- Sources:

##### Elementary flows

###### Measured glycol release to air (`ethylene_glycol_air`)

Include actual stack or fugitive species-specific glycol release to the declared air compartment. Use measured mass rate times duration or an integrated mass once; no default zero or inferred glycol mass from total VOC/COD alone.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for ethylene_glycol_air; no division by Q during collection.

- Selected flow: Ethylene glycol to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residuals`
- Sources:

###### Measured water evaporation (`water_air`)

Account for observed free-water evaporation using independent moisture/process measurements, separate from glycol loss. Physical mixing has no inherent reaction-water source; do not fit an unknown evaporation and unknown reaction water to the same residual.

Amount explanation: Apply normalize_once once to the raw attributable period numerator for water_air; no division by Q during collection.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residuals`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | all inventory rows | Prefer batch/tank and same-formulation tracing with measured equipment use; allocate shared utilities/storage by metered causal drivers and reconcile site totals. Retain failed and zero-output run burdens in the actual route/period, rather than selecting only positive-output batches. |  |
| allocation_internal | cohorts and returns | Internal concentrate, WIP, rework and finished-warehouse handovers are not coproducts. Cancel internal loops without repurchase or new production. Actual external returns retain unique identity, original carried burdens and additional rework burdens without duplicating denominator or old burdens. |  |
| allocation_no_credit | rejects and other products | Wastes/losses are neither accepted delivery nor burden credits. A genuine saleable coproduct needs separate physical-identity and causal-allocation evidence; until established, do not claim this single-product method covers that joint route. |  |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | mix_dilute_dispatch | delivered_antifreeze | dispatch_and_inventory | owner: logistics and QA; batch/formulation revision/concentration; unique first release P; net delivery Q; packaging tare; external returns and original invoices; opening/closing raw/WIP/finished masses and exchange-by-exchange carried burdens; internal transfers/rejects | Logistics/QA owners collect undivided masses and carried inventory burdens from calibrated net weighing, dispatch and acceptance records; reconcile production/warehouse/delivery by batch. Q counts net first accepted external deliveries, reversing a return against its original invoice and linking redelivery; onsite reacceptance creates no new production. Do not calculate A/Q during collection. Aggregation explanation:  normalize_once owns the single reporting operation; this protocol retains undivided numerators and complete carry ledgers. | kg | Each batch and period boundary | Declared actual start/end, including failed, zero-output and rework | One site/route/final-formulation cohort | per 1 kg reference flow | Calibration, opening-burden provenance, unique batch/return chain, signed ledgers and cancelled warehouse handovers |
| cp_materials | mix_dilute_dispatch | inhibitor_superconcentrate; ethylene_glycol; dilution_water; cleaning_water | batch_supply_and_composition | owner: production and laboratory; each whole commercial supply wet mass/lot/provider/route/revision; issues/returns; assay/water/active composition; density/temperature/integrated volume or rate-duration; concentrate-intermediate and final-liquid samples; opening/closing raw/WIP masses and carried burdens | Production/laboratory owners weigh each supply or convert using that material’s measured temperature/density; reconcile whole purchased formulations with composition subledgers, concentrate top/bottom homogeneity and final dilution state. Retain all actual-period raw records, failed charges, cleaning/rework and opening/closing inventory carry without collection-side normalization. Aggregation explanation:  normalize_once owns the single reporting operation; this protocol retains undivided numerators and complete carry ledgers. | kg; L; kg/L; degC | Each batch and period boundary | Declared actual start/end, including failed, zero-output and rework | One site/route/final-formulation cohort | per 1 kg reference flow | Supplier CoA/traceable confidential composition, route evidence, scale calibration, water-quality and species analysis |
| cp_utilities | mix_dilute_dispatch | electricity; steam; diesel | meter_and_duty | owner: utilities engineer; electricity start/end/voltage/supply region; steam mass/supply-return enthalpy/condensate; diesel mass/equipment duty; rate-duration or integrated amount; shared allocation drivers; carried utility burdens in inventories | Utility owner collects undivided full-period readings including failed/start-stop/rework, actual storage/packaging/handling/loading and cleaning; allocate by equipment causal drivers and reconcile totals. Do not multiply integrated volume/energy by duration or divide by Q during collection. Aggregation explanation:  normalize_once owns the single reporting operation; this protocol retains undivided numerators and complete carry ledgers. | kWh; MJ; kg | Each batch and period boundary | Declared actual start/end, including failed, zero-output and rework | One site/route/final-formulation cohort | per 1 kg reference flow | Meter calibration, energy invoices/region-voltage, duty allocation and site reconciliation |
| cp_packaging | mix_dilute_dispatch | hdpe_drum; hdpe_closure; paper_label; wood_pallet | packaging_and_handling | owner: packaging supervisor; each component receipts/issues/returns/scrap/net tare; reusable-asset allocation evidence; packaged production and actual delivery; opening/closing finished and packaging inventories with carried burdens | Packaging owner weighs each actual component and links to delivery, retaining packaging/handling rework and packaged/unpackaged stock states and burdens. Document bulk absence of drums; add each observed unlisted component. Retain raw amounts without normalization. Aggregation explanation:  normalize_once owns the single reporting operation; this protocol retains undivided numerators and complete carry ledgers. | kg | Each batch and period boundary | Declared actual start/end, including failed, zero-output and rework | One site/route/final-formulation cohort | per 1 kg reference flow | Component weights, material reconciliation, measured reuse, packaging-state and stock evidence |
| cp_residuals | mix_dilute_dispatch | offspec_liquid; glycol_wastewater; empty_hdpe_container; ethylene_glycol_air; water_air | waste_and_species | owner: environmental engineer and laboratory; each waste wet mass/composition/destination/water; container residual; glycol air compartment and species mass/rate-duration; independently measured evaporated water; raw/WIP/finished and elemental ledgers; detection limits/uncertainty | Environmental/laboratory owners measure wastes and actual species releases separately, retaining whole wet masses and composition subledgers; reconcile total mass and water/glycol/inhibitor elements over complete period and inventories. COD or residual closure cannot solve both unknown reaction water and an unknown outlet; non-detection is not zero. Collect undivided raw amounts only. Aggregation explanation:  normalize_once owns the single reporting operation; this protocol retains undivided numerators and complete carry ledgers. | kg | Each batch and period boundary | Declared actual start/end, including failed, zero-output and rework | One site/route/final-formulation cohort | per 1 kg reference flow | Treatment manifests, species/water analyses, methods/detection limits, independent conservation and uncertainty |

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert each raw record to its physical native unit first; liquid m = V × rho(T, composition); use integrated amounts directly and multiply only rates by corresponding duration. Composition m_k = m_supply × w_k is an internal check, not extra procurement. Steam process heat uses mass and supply/return enthalpy difference. | raw_records; density_at_temperature; assay; cp_materials; cp_utilities; cp_residuals | converted_raw | `basf-g140k-sc-2023`; `basf-g40-2023` |
| cohort_delivery | delivered_antifreeze | By batch, net delivery Q sums unique first accepted external delivery masses, reverses returns against original invoices and tracks redelivery. For returns of historical deliveries, explicitly align cohort boundary and burden reversal without duplication. Require Q > 0. Opening finished + first release P + external returns = outbound shipments + closing finished + warehouse rejects + returns to processing; cancel internal handovers on aggregation. Never presume P = Q. | cp_gate; opening_finished; first_release; external_returns; closing_finished; rejects; internal_returns | Q |  |
| carry_burdens | all inventory rows | For each exchange component form undivided attributable numerator A_i = actual-period external input/operation burdens + opening raw/WIP/finished carried burdens + evidenced net external-return carry - burdens retained in closing raw/WIP/finished stock. Inventories retain actual composition/state/packaging and burden provenance; keep conservation separate from burden accounting. Retain whole-period failed/zero-output/rework losses and waste-treatment burdens without avoided-product credits. Include actual storage, packaging, handling/loading by stage; cancel internal handovers once. | converted_raw; cp_gate; cp_materials; cp_utilities; cp_packaging; cp_residuals; opening_carry; closing_carry; return_carry | A_i |  |
| normalize_once | all inventory rows | a_i = A_i / Q, reported once after all raw conversions, period attribution and inventory carry; each a_i is an exchange per 1 kg net delivered reference flow. Terminal delivery gives Q/Q = 1 kg. Flow-card amount formulas and protocol aggregation_rule point to this same reporting operation, not sequential further division. Do not report a normalized dataset when Q is nonpositive or carry attribution is unresolved. | A_i; Q; cp_gate | a_i |  |
| physical_closure | formulation and residuals | Across the complete physical boundary, opening total mass + actual external receipts = actual outbound mass + closing total mass + independently measured wastes/releases; keep product, packaging and energy physical ledgers separate and cancel internal transfers. Independently check water, glycol and known inhibitor elements using actual analyses and uncertainty. Physical mixing creates no inherent reaction water; a real reaction needs actual-species and independent extent evidence and route reassessment, never residual-fitted water or loss. | cp_materials; cp_gate; cp_residuals; species_assays; uncertainty | mass_and_species_reconciliation |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_recipe | reference and materials | Align formulation, supplied wet state, water/active bases, supply region and native route; record superconcentrate, concentrate and final liquid separately. A manufacturer example proves no actual site production or OEM approval. | cp_materials; supplier specification; basf-g140k-sc-2023; basf-g40-2023 |
| quality_revisions | supplier properties | G140K 2023-07 and G40 2023-12 typical density/water tables differ; retain each material/revision context, not merged constraints or maxima as actual contents. Actual batch CoA and temperature/density govern; no universal final-solution density is supplied. | batch CoA; temperature-density measurements; basf-g140k-sc-2023; basf-g40-2023 |
| quality_complete | all inventory rows | Declare complete actual period/cohort, failed/zero-output/returns/rework, opening/closing raw/WIP/finished stock and per-exchange carry, detection limits and uncertainty; missing data are not zero. | cp_gate; cp_materials; cp_utilities; cp_packaging; cp_residuals |
| quality_native | UUID-bearing rows | All native name components, route, CAS, medium and properties establish identity only. Antifreeze has unspecified geography and 34139 classification proves neither pure alcohol nor accepted 35430 mapping; generic typical base-liquid proportion fixes no recipe. Water identity supplies no quality certification; verify actual glycol supplier route. | native identity audit; cp_materials |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_antifreeze | The unique reference_flow_link selects the terminal Product output with the declared UUID; require every qualifier and the same net wet-liquid delivery basis excluding packaging. Concentrate intermediates cannot replace the terminal. |  |
| validate_ledger | all inventory rows | Every card is atomic and links to an owned protocol. Trace raw period and inventory carry; normalize once only; require Q > 0 and consistent release/delivery, stocks, returns and burden ledgers; never fill unknowns as zero. |  |
| validate_chemistry | physical_closure | Conserve complete physical mass separately from actual constituents/elements. Pure mixing has no inherent reaction water; COD or the same residual cannot fit reaction water and an unknown outlet. A species-evidence gap limits a concrete dataset; fictitious reaction water cannot close it. |  |
| validate_scope | reference and external inputs | CAS, classification label, a source application or generic UUID establishes neither a whole formulation nor efficacy, maintenance, lifetime or supplier burdens. Preserve actual revision, region, state, route, grade and provider limits; resolve true contradictions and disclose ordinary auxiliary UUID gaps. | `basf-g140k-sc-2023`; `basf-g40-2023` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Declared actual-site foreground mixing/dilution/delivery dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-mass modelling for matched formulation/concentration/route/delivery gate with all applicability conditions |
| excluded_use | All-35430 coverage; neat-glycol/petroleum-oil substitution for formulation; default life/efficacy/service counts; use-service comparisons; unsupported certification |
| required_metadata | Every reference qualifier; raw/WIP/finished ledgers and carry; actual boundary and protocol owners; specification revisions and evidence |
| required_quality_disclosure | Measured/allocated/missing data, detection limits, uncertainty, UUID/provider gaps, native classification/geography limits and common manufacturer source |
| update_trigger | Reassess changes in formulation/feed grade/route/concentration/provider/gate/geography/carry or measurement method |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| basf-g140k-sc-2023 | literature | BASF, GLYSANTIN G140K SC, July 2023, D/EVO 3080 e, pp. 1–2. https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G140K%20SC%20-%20Engine%20Coolant%20Super%20Concentrate%20-%20TI_BMB%20updated.pdf | Manufacturer-specific Asia-Pacific superconcentrate mixing route, mass recipe and homogeneity check; typical tables are not actual batch specifications. Supports the stated material/revision, not a plant input factor. |
| basf-g40-2023 | literature | BASF, GLYSANTIN G40, December 2023, pp. 1–4. https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G40%C2%AE%20-%20Engine%20Coolant%20Concentrate%20-%20TI_12-2023.pdf | Concentrate/aqueous states, dilution basis and water-quality guidance; same manufacturer technical originals, not independent environmental-inventory or performance verification. Concentrate density is not final-dilution density. |
| unsd-cpc-3-0 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025, subclass 35430. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 35430 antifreeze preparation classification scope and distinction from petroleum oils only; establishes neither all-class coverage, correct native UUID classification nor accepted mapping. |
