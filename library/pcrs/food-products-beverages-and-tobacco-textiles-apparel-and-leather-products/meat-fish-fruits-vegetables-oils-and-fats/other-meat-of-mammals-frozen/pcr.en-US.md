---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other meat of mammals, frozen

## 1. Scope and Applicability

This candidate PCR covers one foreground data-package instance within CPC 3.0 21139. The instance is farmed red deer (*Cervus elaphus*) meat, UNECE cut 9237 inner part of the leg, long-cut, boneless, vacuum packed in a polyamide/polyethylene pouch, packed in a corrugated cardboard carton with a polypropylene label, quick-frozen in a forced-air blast freezer using an R717 ammonia refrigeration system, stored frozen, and delivered at the facility loading dock with a thermal-centre product temperature of -18 deg C or colder.

CPC 21139 is broader than this instance. No authoritative CPC-wide species share was found. Red deer is therefore a mandatory data-package instance gate, not a claimed default market share. A dataset for another species, cut, bone state, freezing technology, refrigerant system, packaging configuration, or delivery-temperature specification requires a separately reviewed instance and must not be averaged with this one.

The foreground boundary starts with receipt of the specified chilled boneless red deer cut and ends with net frozen meat at the facility loading dock. It includes receiving, vacuum packaging, forced-air blast quick freezing, frozen storage, sanitation, on-site aerobic wastewater treatment, and dispatch. The upstream cut-specific dataset must include deer production, slaughter, dressing, chilling, boning, cut preparation, and their allocation. Distribution after the loading dock, retail, cooking, consumption, and end-of-life of consumer packaging are excluded. Edible offal, fresh or chilled meat, bone-in meat, comminuted meat, mixed-species production, cryogenic freezing, plate freezing, and still-air freezing are excluded.

The selected freezer uses electricity and R717 ammonia. Hot-gas defrost recirculates R717 inside the refrigeration system and is not a boundary-crossing heat-carrier flow. No fuel, steam, ice, transport service, or other thermal carrier may be added unless the instance gate is revised and the added flow is collected as its own atomic row.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-frozen |
| classification_refs | CPC 3.0 21139, narrower instance |
| covered_products | Frozen edible meat from farmed red deer (*Cervus elaphus*) represented only by UNECE 9237 inner part of the leg, long-cut, boneless, under the declared packaging, freezing, refrigeration, and delivery-temperature configuration |
| excluded_products | Other species; other cuts; bone-in, minced, comminuted, cooked, cured, smoked, or offal products; fresh or chilled meat; mixed-species averages; cryogenic, plate, still-air, or unspecified freezing; configurations delivered warmer than -18 deg C at the thermal centre |
| representative_product | Net frozen boneless farmed red deer inner part of the leg, long-cut, UNECE 9237 |
| production_route | Chilled boneless cut receipt -> vacuum packaging -> forced-air blast quick freezing with R717 ammonia -> frozen storage -> loading-dock dispatch |
| market_state | Vacuum-packed frozen cut in a corrugated cardboard shipping carton, thermal-centre product temperature <= -18 deg C at dispatch |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net edible frozen boneless farmed red deer inner part of the leg, long-cut, UNECE 9237 |
| How much | 1,000 kg net meat mass, excluding pouch, label, and carton |
| How well | Species, source-animal status, cut code, boneless state, packaging, freezing technology, R717 system, and thermal-centre dispatch temperature conform to the instance gate; the lot passes documented food-safety and quality release |
| How long or cycle | One identified production lot from chilled-cut receipt through loading-dock dispatch |
| reference_flow_link | `dispatched_frozen_red_deer_inner_leg` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other meat of mammals, frozen `1fc83e3b-ac93-4d3b-899e-eed337072097` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species=Cervus elaphus; source_animal=farmed red deer; incoming_cut=UNECE 9237 inner part of the leg, long-cut; bone_state=boneless; freezing_technology=forced-air blast quick freezing; refrigeration_system=R717 ammonia; primary_packaging=polyamide/polyethylene vacuum pouch; secondary_packaging=corrugated cardboard carton; label=polypropylene; delivery_temperature=thermal-centre product temperature <= -18 deg C; reference_mass_basis=net edible meat excluding packaging; lot_id; facility_id; production_period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass | kg | Report 1,000 kg net edible meat; exclude pouch, label, carton, pallet, ice, frost, glaze, and free liquid from reference mass. |
| `mass_balance_basis` | all meat-bearing processes | Mass | kg | Use calibrated receipt, transfer, reject, and dispatch masses on the same lot basis; calculated transfers must preserve `incoming mass = outgoing meat + meat rejects + measured mass change`, with any unresolved difference disclosed. |
| `packaging_mass_basis` | each packaging material | Mass | kg | Measure polyamide/polyethylene pouches, polypropylene labels, and corrugated cardboard cartons separately; do not report a combined packaging mass. |
| `electricity_unit` | each electricity row | Energy | kWh | Preserve submetered kWh by process; if a shared meter is used, apply and disclose one causal allocation calculation rather than combining process electricity rows. |
| `refrigerant_mass_balance` | each R717 refrigeration process | Mass | kg | For each equipment group and period, calculate R717 loss as `opening charge + make-up - closing charge - documented recovery`; do not combine blast-freezer and storage-system leakage. |
| `water_volume_mass` | sanitation water and wastewater | Volume and mass | m3 and kg | Record potable water and wastewater volume in m3 and pollutant loads in kg; calculate pollutant load from matched flow volume and concentration records. |
| `temperature_basis` | freezing, storage, and dispatch | Temperature | deg C | Record calibrated product thermal-centre temperatures for freezer completion and dispatch and continuous or logged storage-air temperatures; the instance gate is <= -18 deg C for product thermal-centre temperature. |

## 5. System Boundary

The foreground system is a gate-to-gate frozen-meat finishing operation. Product identity is inherited from a cut-specific upstream dataset and maintained through lot-level mass and traceability records.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Chilled, food-safe, boneless farmed red deer (*Cervus elaphus*) UNECE 9237 inner part of the leg, long-cut, received as an identified lot with measured net mass and temperature |
| starting_condition_role | Upstream product input to the frozen-meat finishing foreground system |
| product_classification_scope | Narrower data-package instance within CPC 3.0 21139; it is not a CPC-wide species or technology mix |
| recursive_input_rule | If any frozen meat that itself satisfies this PCR enters the foreground system, record it as a separate product input with an upstream dataset and subtract it from newly produced output; never recursively re-create or silently merge it with the reference output. |
| upstream_dataset_requirement | Use a cut-specific dataset covering farmed red deer production, slaughter, dressing, chilling, boning, UNECE 9237 cut preparation, and allocation to the received boneless cut; a live-animal, generic carcass, generic venison, or mixed-species dataset is not sufficient. |
| disclosure | Declare the exact species, farmed status, cut code and description, bone state, origin, upstream dataset, facility, production dates, freezing equipment, R717 equipment group, packaging specification, storage duration, dispatch temperature, and every deviation from the boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_instance_gate` | all foreground packages | Include only the declared red-deer UNECE 9237 boneless forced-air/R717 configuration; do not average another species, cut, bone state, freezing technology, refrigeration system, packaging configuration, or temperature specification. | `unstats-cpc-3-2025`; `unece-deer-meat-2013`; `dinz-farmed-venison`; `wiklund-et-al-2014-venison` |
| `boundary_upstream_cut` | chilled meat input | Require the upstream cut-specific dataset through chilled boneless-cut preparation and keep all upstream burdens outside the finishing foreground inventory to avoid double counting. | `unece-deer-meat-2013`; `fao-who-cxc-58-2005` |
| `boundary_quick_freezing` | blast freezing and cold chain | Include measured freezing and storage operations until dispatch; quick freezing is complete only when product thermal-centre temperature reaches <= -18 deg C, and the cold chain must preserve that condition subject only to documented legal tolerances. | `fao-who-cxc-8-1976`; `fao-meat-cold-store-manual` |
| `boundary_on_site_wastewater` | sanitation wastewater | Include the declared on-site aerobic treatment and direct discharge; another wastewater route requires a separately declared scenario and must not be averaged into this route. | `fao-who-cxc-58-2005` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `incoming_cut_receipt` | Chilled red deer cut receipt and acceptance | required | Always included for the declared instance | Receive, weigh, identify, temperature-check, and accept or reject the specified upstream cut | kg chilled boneless cut received |
| `vacuum_packaging` | Vacuum packaging and cartoning | required | Always included for the declared PA/PE pouch, PP label, and corrugated-carton configuration | Package the accepted cut without changing species, cut, or bone state | kg vacuum-packed chilled meat output |
| `blast_quick_freezing` | Forced-air blast quick freezing | required | Always included for the declared freezing technology and R717 equipment group | Pass the product rapidly through maximum ice crystallization and reach <= -18 deg C at the thermal centre | kg blast-frozen meat output |
| `frozen_storage` | R717 frozen storage | required | Always included from freezer exit until lot release to dispatch | Maintain the lot frozen and record storage duration and temperature | kg frozen meat released from storage |
| `sanitation` | Food-contact cleaning and sanitation | required | Always included for the declared sodium-hydroxide detergent and peracetic-acid sanitizer regime | Clean and sanitize receiving, packaging, and freezer-contact equipment | sanitation campaign linked to production lot |
| `onsite_wastewater_treatment` | On-site aerobic wastewater treatment and discharge | required | Always included for the declared wastewater route; a different route requires a separate scenario | Treat sanitation wastewater and quantify sludge and direct water emissions | m3 raw sanitation wastewater treated |
| `cold_dock_dispatch` | Frozen-product release and loading-dock dispatch | required | Always included after quality and temperature release | Weigh and release the reference product at the facility loading dock | 1,000 kg net frozen meat dispatched |

### Process: Chilled red deer cut receipt and acceptance (`incoming_cut_receipt`)

#### Inputs

##### Product flows

###### Chilled boneless red deer UNECE 9237 cut received (`chilled_red_deer_inner_leg_input`)

This card records only the specified chilled farmed-red-deer cut crossing from the cut-specific upstream dataset into the finishing facility.

- Selected flow: Chilled boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: foreground net mass measured at receipt for the identified lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incoming_cut_receipt`
- Sources: `unece-deer-meat-2013`; `dinz-farmed-venison`

###### Electricity for receiving equipment (`receiving_electricity`)

This card records metered electricity used by receiving scales, conveyors, and temperature-control equipment assigned to the lot.

- Selected flow: Electricity, receiving equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity, or calculated causal share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `mass-balance-identity`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Accepted chilled boneless red deer cut (`accepted_chilled_red_deer_inner_leg`)

This card records the measured mass of the conforming UNECE 9237 boneless cut released to packaging.

- Selected flow: Accepted chilled boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated from received mass minus rejected meat mass and documented receipt-stage mass change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg chilled cut accepted from `incoming_cut_receipt`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_mass_balance`
- Sources: `mass-balance-identity`

##### Waste flows

###### Rejected chilled red deer meat (`rejected_chilled_red_deer_meat`)

This card records chilled red deer meat rejected at receipt and transferred to the documented waste-management route.

- Selected flow: Rejected chilled red deer meat
- Flow property / unit: Mass / kg
- Amount rule: foreground reject mass measured by rejection reason for the identified lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_rejects`
- Sources: `fao-who-cxc-58-2005`

##### Elementary flows

None.

### Process: Vacuum packaging and cartoning (`vacuum_packaging`)

#### Inputs

##### Product flows

###### Accepted chilled red deer cut supplied to packaging (`packaging_red_deer_meat_input`)

This card records the accepted chilled cut transferred into the vacuum-packaging mass balance without changing its identity.

- Selected flow: Accepted chilled boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated transfer mass from the accepted output of `incoming_cut_receipt`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg vacuum-packed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_mass_balance`
- Sources: `mass-balance-identity`

###### Polyamide/polyethylene vacuum pouches (`pa_pe_vacuum_pouch_input`)

This card records only the PA/PE pouches issued to and consumed by the identified packaging lot.

- Selected flow: Polyamide/polyethylene vacuum pouch
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass minus returned unused mass, reconciled with pouch count and measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `unece-deer-meat-2013`; `fao-who-cxc-8-1976`

###### Polypropylene labels (`polypropylene_label_input`)

This card records the polypropylene labels consumed for lot and product identification.

- Selected flow: Polypropylene label
- Flow property / unit: Mass / kg
- Amount rule: foreground used label count multiplied by measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `unece-deer-meat-2013`; `fao-who-cxc-8-1976`

###### Corrugated cardboard cartons (`corrugated_carton_input`)

This card records only corrugated cardboard cartons consumed by the identified lot.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: foreground used carton count multiplied by measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `unece-deer-meat-2013`; `fao-who-cxc-8-1976`

###### Electricity for vacuum packaging and cartoning (`packaging_electricity`)

This card records electricity used by the vacuum packer, sealer, labeler, and carton-handling equipment.

- Selected flow: Electricity, vacuum packaging and cartoning
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity, or calculated causal share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `mass-balance-identity`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Vacuum-packed chilled red deer cut (`vacuum_packed_chilled_red_deer`)

This card records the chilled meat mass sealed in conforming PA/PE pouches and released to blast freezing.

- Selected flow: Vacuum-packed chilled boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated from packaging meat input minus measured meat rejects and documented packaging-stage mass change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg vacuum-packed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_mass_balance`
- Sources: `mass-balance-identity`

##### Waste flows

###### Rejected PA/PE vacuum pouches (`rejected_pa_pe_pouch_waste`)

This card records unused-damaged, seal-test, and rejected PA/PE pouch material leaving the packaging process as waste.

- Selected flow: Rejected polyamide/polyethylene pouch waste
- Flow property / unit: Mass / kg
- Amount rule: foreground waste mass reconciled with issued, returned, and product-packed pouch material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `mass-balance-identity`

###### Rejected polypropylene labels (`rejected_polypropylene_label_waste`)

This card records misprinted, damaged, and unused-issued polypropylene labels leaving the process as waste.

- Selected flow: Rejected polypropylene label waste
- Flow property / unit: Mass / kg
- Amount rule: foreground waste mass reconciled with issued, returned, and applied labels
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `mass-balance-identity`

###### Rejected corrugated cardboard cartons (`rejected_corrugated_carton_waste`)

This card records damaged and rejected corrugated cardboard cartons leaving the process as waste.

- Selected flow: Rejected corrugated cardboard carton waste
- Flow property / unit: Mass / kg
- Amount rule: foreground waste mass reconciled with issued, returned, and packed cartons
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- Sources: `mass-balance-identity`

##### Elementary flows

None.

### Process: Forced-air blast quick freezing (`blast_quick_freezing`)

#### Inputs

##### Product flows

###### Vacuum-packed chilled red deer supplied to blast freezer (`blast_freezer_packaged_meat_input`)

This card records the conforming packaged chilled meat loaded into the identified forced-air blast-freezer batch.

- Selected flow: Vacuum-packed chilled boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated transfer mass from `vacuum_packed_chilled_red_deer`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg blast-frozen meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_mass_balance`
- Sources: `mass-balance-identity`

###### Electricity for forced-air blast quick freezing (`blast_freezing_electricity`)

This card records compressor, evaporator-fan, condenser, pump, control, and batch-loading electricity attributable to blast freezing.

- Selected flow: Electricity, forced-air blast quick freezing
- Flow property / unit: Energy / kWh
- Amount rule: submetered blast-freezer system electricity for the batch, or calculated causal share from logged equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `fao-who-cxc-8-1976`; `fao-meat-cold-store-manual`

###### R717 ammonia make-up for blast-freezer refrigeration (`blast_freezer_r717_makeup`)

This card records R717 ammonia added to the blast-freezer refrigeration equipment group during the reporting period.

- Selected flow: Refrigerant R717 ammonia, blast-freezer system make-up
- Flow property / unit: Mass / kg
- Amount rule: foreground make-up mass from refrigerant service and inventory records assigned to the blast-freezer equipment group
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r717_mass_balance`
- Sources: `fao-who-cxc-8-1976`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Blast-frozen vacuum-packed red deer cut (`blast_frozen_red_deer_output`)

This card records packaged meat whose thermal centre has reached -18 deg C or colder after forced-air blast quick freezing.

- Selected flow: Blast-frozen vacuum-packed boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated from freezer input mass minus measured freezer rejects and documented mass change; release requires thermal-centre temperature <= -18 deg C
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg blast-frozen meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_batch`
- Sources: `fao-who-cxc-8-1976`; `mass-balance-identity`

##### Waste flows

None.

##### Elementary flows

###### R717 ammonia emitted to air from blast-freezer refrigeration (`blast_freezer_r717_to_air`)

This card records fugitive R717 ammonia loss from the blast-freezer refrigeration equipment group as a direct air emission.

- Selected flow: Ammonia, R717, to air
- Flow property / unit: Mass / kg
- Amount rule: opening charge + R717 make-up - closing charge - documented recovery for the blast-freezer equipment group
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_r717_mass_balance`
- Sources: `fao-who-cxc-8-1976`; `mass-balance-identity`

### Process: R717 frozen storage (`frozen_storage`)

#### Inputs

##### Product flows

###### Blast-frozen red deer supplied to frozen storage (`frozen_storage_meat_input`)

This card records conforming blast-frozen product transferred into the identified cold-store lot.

- Selected flow: Blast-frozen vacuum-packed boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated transfer mass from `blast_frozen_red_deer_output`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg frozen meat released from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_mass_balance`
- Sources: `mass-balance-identity`

###### Electricity for frozen storage (`frozen_storage_electricity`)

This card records compressor, evaporator-fan, condenser, pump, lighting, and control electricity causally assigned to the lot's storage duration.

- Selected flow: Electricity, frozen storage
- Flow property / unit: Energy / kWh
- Amount rule: submetered cold-store electricity allocated by documented storage duration and occupied mass or volume, preserving the separate storage row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `fao-who-cxc-8-1976`

###### R717 ammonia make-up for frozen-storage refrigeration (`frozen_storage_r717_makeup`)

This card records R717 ammonia added to the frozen-storage refrigeration equipment group during the reporting period.

- Selected flow: Refrigerant R717 ammonia, frozen-storage system make-up
- Flow property / unit: Mass / kg
- Amount rule: foreground make-up mass from refrigerant service and inventory records assigned to the frozen-storage equipment group
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r717_mass_balance`
- Sources: `fao-who-cxc-8-1976`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Frozen red deer released from storage (`stored_frozen_red_deer_output`)

This card records the frozen lot released from storage after temperature-history and packaging-integrity review.

- Selected flow: Stored frozen vacuum-packed boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated from storage input mass minus measured storage rejects and documented mass change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg frozen meat released from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_lot`
- Sources: `fao-who-cxc-8-1976`; `mass-balance-identity`

##### Waste flows

None.

##### Elementary flows

###### R717 ammonia emitted to air from frozen-storage refrigeration (`frozen_storage_r717_to_air`)

This card records fugitive R717 ammonia loss from the frozen-storage refrigeration equipment group as a direct air emission.

- Selected flow: Ammonia, R717, to air
- Flow property / unit: Mass / kg
- Amount rule: opening charge + R717 make-up - closing charge - documented recovery for the frozen-storage equipment group
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_r717_mass_balance`
- Sources: `fao-who-cxc-8-1976`; `mass-balance-identity`

### Process: Food-contact cleaning and sanitation (`sanitation`)

#### Inputs

##### Product flows

###### Potable water for cleaning and sanitation (`sanitation_potable_water`)

This card records metered potable water used for the sanitation campaigns assigned to the production lot.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: metered sanitation water volume assigned to the lot; exclude staff amenities and unrelated facility water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_water`
- Sources: `fao-who-cxc-58-2005`

###### Sodium hydroxide detergent (`sodium_hydroxide_detergent`)

This card records formulated detergent as sodium-hydroxide active mass used by the declared cleaning regime.

- Selected flow: Sodium hydroxide, active ingredient in detergent
- Flow property / unit: Mass / kg
- Amount rule: product mass issued multiplied by supplier active-ingredient fraction, minus returned unused product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `fao-who-cxc-58-2005`

###### Peracetic acid sanitizer (`peracetic_acid_sanitizer`)

This card records formulated sanitizer as peracetic-acid active mass used by the declared sanitation regime.

- Selected flow: Peracetic acid, active ingredient in sanitizer
- Flow property / unit: Mass / kg
- Amount rule: product mass issued multiplied by supplier active-ingredient fraction, minus returned unused product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_chemicals`
- Sources: `fao-who-cxc-58-2005`

###### Electricity for sanitation equipment (`sanitation_electricity`)

This card records electricity used by pumps, pressure washers, dosing equipment, and ventilation during assigned sanitation campaigns.

- Selected flow: Electricity, sanitation equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity, or calculated causal share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `mass-balance-identity`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

None.

##### Waste flows

###### Raw sanitation wastewater (`raw_sanitation_wastewater`)

This card records the wastewater volume transferred from sanitation to the declared on-site aerobic wastewater-treatment process.

- Selected flow: Raw meat-facility sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume assigned to sanitation, reconciled with potable water and documented retained or evaporated water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `fao-who-cxc-58-2005`; `mass-balance-identity`

##### Elementary flows

None.

### Process: On-site aerobic wastewater treatment and discharge (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity for on-site aerobic wastewater treatment (`wastewater_treatment_electricity`)

This card records electricity used by wastewater pumps, aerators, controls, and sludge-handling equipment for the assigned wastewater volume.

- Selected flow: Electricity, on-site aerobic wastewater treatment
- Flow property / unit: Energy / kWh
- Amount rule: submetered treatment electricity allocated by measured sanitation wastewater volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `mass-balance-identity`

##### Waste flows

###### Raw sanitation wastewater supplied to treatment (`raw_sanitation_wastewater_input`)

This card records the sanitation wastewater entering the declared on-site aerobic treatment system.

- Selected flow: Raw meat-facility sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: calculated transfer volume from `raw_sanitation_wastewater`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 raw wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `mass-balance-identity`

##### Elementary flows

None.

#### Outputs

##### Product flows

None.

##### Waste flows

###### Aerobic wastewater-treatment sludge (`wastewater_treatment_sludge`)

This card records dewatered sludge transferred from the on-site aerobic treatment system to its documented waste route.

- Selected flow: Aerobic wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: foreground wet sludge mass with dry-matter fraction recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Treated wastewater discharged to receiving water (`treated_wastewater_to_water`)

This card records treated effluent volume directly discharged from the on-site system to the declared receiving-water compartment.

- Selected flow: Water, treated wastewater, to water
- Flow property / unit: Volume / m3
- Amount rule: metered final-effluent discharge volume assigned to the sanitation wastewater input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_effluent`
- Sources: `fao-who-cxc-58-2005`

###### Chemical oxygen demand emitted to water (`cod_to_water`)

This card records COD load in the treated effluent as an individual direct-water emission.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: matched treated-effluent volume multiplied by laboratory COD concentration with unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_effluent`
- Sources: `mass-balance-identity`

###### Total nitrogen emitted to water (`total_nitrogen_to_water`)

This card records total-nitrogen load in the treated effluent as an individual direct-water emission.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: matched treated-effluent volume multiplied by laboratory total-nitrogen concentration with unit conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_effluent`
- Sources: `mass-balance-identity`

### Process: Frozen-product release and loading-dock dispatch (`cold_dock_dispatch`)

#### Inputs

##### Product flows

###### Stored frozen red deer supplied to dispatch (`dispatch_stored_frozen_red_deer_input`)

This card records frozen product transferred from storage to the cold loading dock after release review.

- Selected flow: Stored frozen vacuum-packed boneless farmed red deer inner part of the leg, long-cut, UNECE 9237
- Flow property / unit: Mass / kg
- Amount rule: calculated transfer mass from `stored_frozen_red_deer_output`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net frozen reference product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_release`
- Sources: `mass-balance-identity`

###### Electricity for cold-dock dispatch equipment (`dispatch_electricity`)

This card records electricity used by cold-dock handling, weighing, and temperature-control equipment assigned to the dispatched lot.

- Selected flow: Electricity, cold-dock dispatch equipment
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity, or calculated causal share from equipment power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `mass-balance-identity`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Dispatched frozen boneless red deer inner leg (`dispatched_frozen_red_deer_inner_leg`)

This card is the sole reference-product row and records net edible frozen meat released at the facility loading dock.

- Selected flow: Other meat of mammals, frozen `1fc83e3b-ac93-4d3b-899e-eed337072097`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net edible meat excluding pouch, label, carton, pallet, frost, glaze, and free liquid; thermal-centre product temperature <= -18 deg C
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net frozen reference product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_release`
- Sources: `unece-deer-meat-2013`; `fao-who-cxc-8-1976`; `mass-balance-identity`

##### Waste flows

None.

##### Elementary flows

None.

## 7. Allocation and Co-product Handling

The foreground finishing route has one intended meat product and no co-product. Packaging rejects, rejected meat, wastewater, and sludge remain waste flows unless a documented downstream recovery contract establishes otherwise.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_upstream_cut_specific` | upstream chilled cut | Use the supplier's cut-specific dataset and its reviewed slaughter/carcass allocation; do not allocate generic live-animal or carcass burdens inside this finishing foreground system. | `unece-deer-meat-2013` |
| `alloc_no_cross_instance_average` | species, cut, bone state, freezing, refrigerant, packaging, and wastewater route | Do not average another configuration with this instance; produce a separately reviewed package. | `unstats-cpc-3-2025`; `unece-deer-meat-2013` |
| `alloc_shared_electricity` | shared electric meters | Prefer process submeters; otherwise allocate each equipment group's electricity by documented operating time and power or refrigeration-load driver, preserving separate atomic electricity rows. Economic allocation is not permitted. | `mass-balance-identity` |
| `alloc_refrigerant_by_equipment` | R717 make-up and loss | Assign refrigerant by equipment-group mass balance; do not combine blast-freezer and frozen-storage R717 rows. | `mass-balance-identity` |
| `alloc_waste_no_credit` | rejected meat, packaging waste, wastewater, and sludge | Report gross waste leaving each process. Do not apply avoided-burden credit in the foreground inventory; model any downstream recovery as a separate documented system. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_incoming_cut_receipt` | `incoming_cut_receipt` | chilled cut receipt and identity | scale, supplier, traceability, and temperature records | lot_id; species; farmed_status; UNECE_cut_code; bone_state; supplier_dataset_id; origin; receipt_mass_kg; receipt_temperature_deg_c; scale_id; timestamp | weigh every received lot and verify identity and temperature before acceptance | kg; deg C | every lot | complete reporting period | declared facility receiving point | sum accepted and rejected masses by lot without mixing species or cut configurations | calibration certificate; supplier specification; traceability record; temperature-device check |
| `cp_meat_rejects` | `incoming_cut_receipt` | rejected meat | reject log and scale record | lot_id; reject_reason; reject_mass_kg; destination; scale_id; timestamp | weigh each reject batch and link it to the originating lot | kg | each reject event | complete reporting period | declared facility | sum reject mass by reason and destination | scale calibration; signed reject record; destination receipt |
| `cp_meat_mass_balance` | `incoming_cut_receipt`; `vacuum_packaging`; `blast_quick_freezing`; `frozen_storage` | meat transfer and mass balance | calibrated scale and batch-transfer records | lot_id; process_id; input_mass_kg; output_mass_kg; reject_mass_kg; timestamp; scale_id | reconcile process input, output, rejects, and documented mass change for each lot | kg | every lot and process | complete reporting period | all declared foreground meat processes | normalize the closed lot mass balance to 1,000 kg dispatched net meat | scale calibration; batch reconciliation; signed deviation investigation |
| `cp_process_electricity` | `incoming_cut_receipt`; `vacuum_packaging`; `blast_quick_freezing`; `frozen_storage`; `sanitation`; `onsite_wastewater_treatment`; `cold_dock_dispatch` | process electricity | submeter or equipment operating log | meter_id; start_kwh; end_kwh; process_id; equipment_id; rated_or_measured_power_kw; operating_hours; lot_id; storage_duration_h | subtract meter readings; where shared, calculate power multiplied by logged operating time or documented refrigeration-load driver | kWh | each batch or daily, with monthly reconciliation | complete reporting period including storage | declared equipment groups | sum by process row, then normalize to the reference flow without combining rows | meter calibration; utility reconciliation; equipment log; allocation worksheet |
| `cp_packaging_materials` | `vacuum_packaging` | each packaging input | issue, return, count, and unit-mass records | material_specification; material_type; issued_count; returned_count; used_count; unit_mass_kg; lot_id | reconcile issued, returned, and used units separately for PA/PE pouches, PP labels, and corrugated cartons | kg | each packaging lot | complete reporting period | declared packaging line | `used mass = used count x unit mass`, separately by material | supplier specification; calibrated unit-mass sample; inventory reconciliation |
| `cp_packaging_waste` | `vacuum_packaging` | each packaging waste | segregated waste scale record | material_type; waste_mass_kg; reason; destination; lot_id; scale_id | weigh PA/PE, PP-label, and corrugated-cardboard wastes separately | kg | each waste transfer | complete reporting period | declared packaging line | sum by material and destination; reconcile with packaging inputs | scale calibration; waste transfer receipt; material reconciliation |
| `cp_freezing_batch` | `blast_quick_freezing` | freezer output and thermal completion | batch mass and temperature logger | lot_id; freezer_id; load_mass_kg; start_time; end_time; product_thermal_centre_temperature_deg_c; sensor_id; reject_mass_kg | measure representative thermal-centre product temperature after equilibration and link it to batch mass and time | kg; deg C; h | every freezer batch | complete reporting period | declared forced-air blast freezer | accept only batches reaching <= -18 deg C; investigate and segregate nonconforming batches | calibrated temperature probe/logger; freezer batch record; corrective-action record |
| `cp_frozen_storage_lot` | `frozen_storage` | storage mass and temperature history | warehouse and temperature records | lot_id; entry_mass_kg; exit_mass_kg; entry_time; exit_time; storage_air_temperature_deg_c; product_check_temperature_deg_c; packaging_reject_mass_kg | track identified lot mass, duration, continuous air temperature, and release checks | kg; h; deg C | continuous temperature and each lot movement | full storage residence | declared R717 cold store | calculate storage duration and reconcile entry, exit, and rejects by lot | calibrated logger; warehouse record; alarm and corrective-action history |
| `cp_r717_mass_balance` | `blast_quick_freezing`; `frozen_storage` | R717 make-up and air loss | refrigerant inventory and service records | equipment_group; opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg; service_date; lot_or_period_basis | close a separate R717 mass balance for the blast-freezer and frozen-storage equipment groups | kg | every service event with at least annual closure | reporting period and charge-balance interval | declared R717 equipment groups | `loss = opening + additions - closing - recovered`; allocate by the documented equipment-group production or storage driver | technician record; cylinder weight; inventory reconciliation; leak-repair record |
| `cp_sanitation_water` | `sanitation` | potable water | dedicated water meter or sanitation log | meter_id; start_m3; end_m3; campaign_id; lot_ids; date | meter potable water for assigned sanitation campaigns | m3 | each campaign or daily | complete reporting period | declared food-contact sanitation system | allocate campaign volume only to linked production lots | meter calibration; sanitation schedule; water-potability evidence |
| `cp_sanitation_chemicals` | `sanitation` | sodium hydroxide and peracetic acid active ingredients | issue/return and supplier composition records | chemical_name; product_mass_kg; returned_mass_kg; active_fraction; campaign_id; lot_ids | weigh formulated product and calculate active mass separately for each chemical | kg active ingredient | each campaign | complete reporting period | declared sanitation system | `active mass = (issued product mass - returned mass) x active fraction` | supplier SDS/specification; scale calibration; dosing log |
| `cp_sanitation_wastewater` | `sanitation` | raw wastewater | wastewater meter and water-balance record | campaign_id; influent_volume_m3; potable_water_m3; retained_or_evaporated_water_m3; lot_ids | meter wastewater and reconcile it to sanitation water for the assigned campaigns | m3 | each campaign or daily | complete reporting period | sanitation drain to on-site treatment inlet | sum matched campaign volumes and normalize to reference flow | meter calibration; water-balance worksheet; drain routing verification |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | treatment input, electricity, and sludge | treatment meter, operations, and sludge records | influent_volume_m3; treatment_kwh; wet_sludge_kg; sludge_dry_matter_fraction; operating_period; linked_campaign_ids | meter influent and electricity and weigh dewatered sludge | m3; kWh; kg | daily or each treatment batch | complete reporting period | declared on-site aerobic treatment plant | allocate by matched sanitation influent volume | meter calibration; operator log; sludge analysis; transfer receipt |
| `cp_wastewater_effluent` | `onsite_wastewater_treatment` | treated-water volume, COD, and total nitrogen | final-effluent meter and accredited laboratory results | sample_id; sampling_start; sampling_end; effluent_volume_m3; cod_mg_l; total_nitrogen_mg_l; receiving_water_compartment | use time-matched representative samples and final-effluent flow records | m3; mg/L; kg | per permit and at least each representative reporting interval | complete reporting period | final discharge point | `pollutant kg = volume_m3 x concentration_mg_l / 1000`; aggregate matched intervals | laboratory accreditation; chain of custody; meter calibration; permit report |
| `cp_dispatch_release` | `cold_dock_dispatch` | reference product mass and release | calibrated dispatch scale, traceability, packaging, and temperature records | lot_id; net_meat_mass_kg; pouch_mass_kg; label_mass_kg; carton_mass_kg; pallet_mass_kg; thermal_centre_temperature_deg_c; dispatch_time; facility_id | weigh or reconcile net meat separately from packaging and verify release qualifiers and temperature | kg; deg C | every dispatched lot | complete reporting period | facility cold loading dock | sum conforming net meat and normalize exactly to 1,000 kg reference product | scale calibration; release certificate; temperature calibration; lot traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_process_meat_balance` | each meat-bearing process | `output meat = input meat - measured meat rejects - documented mass change`; unresolved difference is a quality finding, not a flow to be hidden | input_mass_kg; reject_mass_kg; documented_mass_change_kg | output_mass_kg | `mass-balance-identity` |
| `calc_packaging_material_mass` | each packaging material | `used material mass = used count x measured or supplier-declared unit mass`; calculate PA/PE, PP, and corrugated cardboard separately | used_count; unit_mass_kg | material_mass_kg | `mass-balance-identity` |
| `calc_electricity_share` | shared electricity meters | `assigned kWh = meter-period kWh x documented causal driver share`; use operating power x time or refrigeration load and duration, never revenue | meter_kwh; equipment_power_kw; operating_time_h; refrigeration_load_driver; storage_duration_h | process electricity kWh | `mass-balance-identity` |
| `calc_r717_loss` | each R717 equipment group | `R717 loss = opening charge + additions - closing charge - recovered mass` | opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg | R717 emitted to air, kg | `mass-balance-identity` |
| `calc_active_chemical` | each sanitation chemical | `active ingredient mass = (issued formulated-product mass - returned formulated-product mass) x supplier active fraction` | issued_mass_kg; returned_mass_kg; active_fraction | sodium-hydroxide or peracetic-acid active mass, kg | `mass-balance-identity` |
| `calc_effluent_pollutant_load` | COD and total nitrogen | `pollutant kg = matched effluent volume_m3 x concentration_mg_l / 1000` | effluent_volume_m3; cod_mg_l or total_nitrogen_mg_l | pollutant load, kg | `mass-balance-identity` |
| `calc_reference_normalization` | all inventory rows | `normalized amount = reporting-period row amount x 1000 / conforming dispatched net meat mass_kg` | row amount; conforming dispatched net meat mass_kg | row amount per 1,000 kg reference product | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_instance_identity` | product and upstream input | Preserve species, farmed status, UNECE cut 9237, boneless state, packaging, forced-air technology, R717 system, and temperature gate at lot level; no mixed-instance aggregation. | supplier specification; traceability chain; batch and release records |
| `dq_primary_data` | all non-upstream foreground rows | Use facility records for the reporting period; a reasoned estimate cannot replace publication-critical quantities. | meters; calibrated scales; logs; invoices; service records; laboratory reports |
| `dq_temporal_coverage` | foreground system | Cover at least 12 consecutive representative months or the complete campaign if production is seasonal; disclose shutdowns, abnormal batches, and storage carry-over. | production calendar; meter period; lot register; representativeness statement |
| `dq_completeness` | atomic inventory | Reconcile meat, each packaging material, water, each chemical, electricity by process, R717 by equipment group, waste, wastewater, COD, total nitrogen, and sludge; record zero only with evidence of no flow. | closure worksheet and signed completeness review |
| `dq_measurement` | mass, energy, volume, temperature, and concentration | Use in-calibration instruments and accredited or recognized laboratory methods; retain detection limits and sampling basis. | calibration certificates; method reports; chain of custody |
| `dq_no_uuid_invention` | all flow identities | Use the selected Tiangong UUID only on `dispatched_frozen_red_deer_inner_leg`; leave all other UUIDs blank until an authorized identity-alignment review. | UUID review record in manifest |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_instance_identity` | package metadata and reference flow | Fail if species, farmed status, UNECE 9237 cut, boneless state, forced-air blast technology, R717 system, packaging configuration, or <= -18 deg C dispatch gate is missing or differs; do not infer a species market share. | `unstats-cpc-3-2025`; `unece-deer-meat-2013`; `dinz-farmed-venison`; `fao-who-cxc-8-1976` |
| `val_reference_mass` | `dispatched_frozen_red_deer_inner_leg` | Fail unless reference output is exactly 1,000 kg net edible meat and packaging, pallet, frost, glaze, ice, and free liquid are excluded. | `unece-deer-meat-2013`; `mass-balance-identity` |
| `val_reference_uuid` | all inventory cards | Fail unless UUID `1fc83e3b-ac93-4d3b-899e-eed337072097` appears only on `dispatched_frozen_red_deer_inner_leg` and every other card has no UUID. | `mass-balance-identity` |
| `val_atomic_flows` | process inventory | Fail any aggregate or family card, including energy, materials, chemicals, fuels, refrigerants, packaging, wastes, emissions, or route-specific carriers; every crossing flow must have one row_id and non-empty description. | `mass-balance-identity` |
| `val_no_undeclared_route` | process and inventory | Fail if another species, cut, bone state, freezing method, refrigerant, packaging configuration, wastewater route, fuel, steam, ice, heat carrier, or distribution transport is averaged into this instance. | `unstats-cpc-3-2025`; `unece-deer-meat-2013`; `fao-who-cxc-8-1976` |
| `val_temperature_chain` | blast freezing, storage, and dispatch | Fail if freezer thermal-centre completion and dispatch product temperature records do not demonstrate <= -18 deg C, or if storage temperature history and excursions are missing. | `fao-who-cxc-8-1976`; `fao-meat-cold-store-manual` |
| `val_mass_closure` | meat and packaging | Fail unresolved meat-balance differences and missing separate PA/PE, PP-label, and corrugated-cardboard input/waste reconciliations. | `mass-balance-identity` |
| `val_refrigerant_closure` | blast and storage R717 systems | Fail if R717 make-up and loss are absent, combined across equipment groups, or not supported by charge/service/recovery records. | `fao-who-cxc-8-1976`; `mass-balance-identity` |
| `val_wastewater_closure` | sanitation and on-site treatment | Fail if raw wastewater, treatment electricity, sludge, treated-water discharge, COD, or total-nitrogen records are missing or if pollutant samples and effluent volumes are not time matched. | `fao-who-cxc-58-2005`; `mass-balance-identity` |
| `val_evidence_gap_disclosure` | candidate use | Mark validation inconclusive for publication if foreground quantities, non-reference UUID alignment, or the open species-market-share limitation is represented as reviewed default evidence rather than disclosed as an instance gate or evidence gap. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a completed, reviewed foreground data package |
| downstream_use | Process and lifecycle-model construction for the declared frozen farmed-red-deer UNECE 9237 boneless configuration |
| allowed_use | Use only where the study product matches the declared species, cut, bone state, packaging, forced-air/R717 freezing and storage route, wastewater route, geography and period relevance, and loading-dock temperature gate |
| excluded_use | CPC-wide species mix; generic venison; other cuts or bone states; fresh/chilled meat; offal; mixed-species production; alternative freezing or refrigerant systems; alternative wastewater routes; retail, cooking, or consumption modelling |
| required_metadata | PCR id and version; lot and facility scope; geography; reporting period; species and farmed status; UNECE cut; bone state; upstream cut dataset; packaging specifications; freezer and R717 equipment groups; storage duration; wastewater route; allocation methods; reference-flow UUID; dispatch temperature |
| required_quality_disclosure | Primary-data share; temporal coverage; calibration and laboratory status; meat and packaging mass closure; electricity allocation; R717 closure; temperature excursions; wastewater sampling; rejects; missing UUIDs; deviations and unresolved evidence gaps |
| update_trigger | Change in species, cut, bone state, source-animal system, packaging, freezer technology, refrigerant, wastewater route, delivery temperature, upstream allocation, facility technology, regulation, source evidence, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 21139, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | CPC boundary, included other mammals, and exclusions of fresh/chilled meat and edible offal |
| `unece-deer-meat-2013` | `standard` | UNECE Standard for Deer Meat - Carcases and Cuts, 2013. https://unece.org/sites/default/files/2024-03/DeerMeat-2013_E.pdf (retrieved 2026-08-13) | Deer species/cut specification, UNECE 9237 cut identity, boneless condition, packaging/traceability qualifiers, and frozen/deep-frozen product state |
| `dinz-farmed-venison` | `extension_guidance` | Deer Industry New Zealand, Farmed venison. https://deernz.org/home/our-great-products/farmed-venison/ (retrieved 2026-08-13) | Evidence that farmed red deer is a real single-species venison production route and that lot/farm traceability is practical; not used as a CPC-wide market-share default |
| `wiklund-et-al-2014-venison` | `literature` | Wiklund, E., Farouk, M. M. and Finstad, G. (2014), Venison: Meat from red deer (*Cervus elaphus*) and reindeer (*Rangifer tarandus tarandus*), Animal Frontiers 4(4):55-61. https://doi.org/10.2527/af.2014-0034; publisher PDF https://academic.oup.com/af/article-pdf/4/4/55/32410646/55.pdf (OpenAlex discovery and full-text verification 2026-08-20) | Farmed red deer identity, use of deer-specific slaughter/boning/processing facilities, and value-added removal of bones and silverskin; not used for a CPC market share or quantitative LCI default |
| `fao-who-cxc-58-2005` | `standard` | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-13) | Chilled-cut upstream boundary, hygienic cutting/packaging, potable-water sanitation, drainage, wastewater, process control, and records |
| `fao-who-cxc-8-1976` | `standard` | Codex Alimentarius, Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976, revised 2008. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf (retrieved 2026-08-13) | Quick-freezing definition, thermal-centre completion, -18 deg C cold chain, temperature monitoring, packaging, electricity continuity, cold storage, and refrigerant-leak control |
| `fao-meat-cold-store-manual` | `handbook` | FAO, Manual on Meat Cold Store Operation and Management, Freezing section. https://www.fao.org/4/T0098E/T0098E02.htm (retrieved 2026-08-13) | Forced-air blast freezing as the selected meat-freezing technology and process-decomposition support |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass and metered-activity identity defined in this PCR's calculation rules; no external quantitative default. | Meat, packaging, refrigerant, water, pollutant-load, electricity-allocation, and normalization calculations |
