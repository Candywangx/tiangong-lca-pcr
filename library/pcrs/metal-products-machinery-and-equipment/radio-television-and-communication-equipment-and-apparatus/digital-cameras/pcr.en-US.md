---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.digital-cameras
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Digital cameras

## 1. Scope and Applicability

This PCR defines the foreground manufacturing data package for new dedicated digital still cameras: fixed-lens, interchangeable-lens mirrorless and digital single-lens-reflex designs. Still cameras with an additional video mode remain within scope when their declared principal product function is still photography. Television cameras, camcorders, film cameras, smartphones, loose imaging modules, separately sold lenses and repair services have different product identities. CPC 3.0 distinguishes the camera subclasses; it does not supply manufacturing coefficients (`un-cpc-3-0-structure-2025`).

The supplied configuration, imaging performance and factory acceptance criteria define the product. CMOS or CCD technology, body construction and supplied accessories must be declared rather than averaged across unlike models. The professional Chinese category title is 数码照相机, consistent with CIPA terminology (`cipa-camera-battery-guidance`). Manufacturer specifications illustrate configuration fields, not category defaults (`nikon-z8-reference-guide`).

The foreground begins with received, finished components and ends at release of the packaged camera. Its two collection stages are assembly/calibration and packing. Component fabrication remains in linked upstream datasets unless actually performed at the reporting site. The minimum cards cover a modular assembly route; add separately identified exchanges for any on-site board fabrication, soldering, wet cleaning, machining, coating or other actual operations. No listed card authorizes omission of a real component, chemical, waste or direct emission. Route additions require their own collection records and atomic rows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.digital-cameras |
| classification_refs | CPC 3.0: 47215, Digital cameras; exact semantic mapping intent |
| covered_products | New complete digital still cameras; fixed-lens, mirrorless and digital SLR configurations |
| excluded_products | Film cameras; television cameras; video camera recorders; smartphones; separately sold sensors, lenses and camera components; repair and refurbishment services |
| representative_product | The declared production model and configuration, accepted for digital still photography; no default brand or sensor size |
| production_route | Purchased finished modules; mechanical assembly; firmware loading; optical alignment and imaging acceptance tests; supplied-accessory verification; packing |
| market_state | New tested camera at the factory gate, with net camera configuration and shipping contents separately identified |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a declared digital still-camera configuration capable of recording digital photographs |
| How much | 1 kg net accepted camera configuration at the factory gate; report the corresponding camera count |
| How well | Declared sensor technology and format, effective pixels, optical configuration, focus/exposure functions, firmware and documented imaging acceptance criteria |
| How long or cycle | One manufacturing and acceptance cycle; no assumed service life or lifetime photograph count |
| reference_flow_link | `finished_camera` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Digital cameras `9e283879-4269-4280-9b6e-8f09891ec5ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model and BOM revision; fixed/interchangeable lens configuration; included lens and battery identities; net-mass inclusions; supplied accessory list; sensor technology/format/effective pixels; firmware and imaging acceptance criteria; site/country/reporting period; supplier and in-house process boundaries; new-product state |

This manufacturing reference is not a complete lifetime service functional unit. Net configuration mass includes the camera body, its integral optics, any lens included in the declared camera kit and the supplied operating battery. Separately identified charger, cable, strap and packaging masses are excluded from this denominator but their production burdens remain included when shipped. Body-only and lens-kit datasets are distinguished. A battery or lens already inside a purchased module must not be added twice. Manufacturer body-only and equipped masses are different measurement states (`nikon-z8-reference-guide`). Required qualifiers must appear in data package metadata or equivalent product records. For lifetime comparisons, separately define service duration, operating modes and delivered imaging service (`ghg-protocol-product-standard-2011`).

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference and intermediate camera | Mass | kg | Weigh the declared net configuration by model. Record camera count N and accepted net mass M; m_unit = M/N. Never substitute gross shipping mass or a different model's catalogue mass. |
| `count_conversion` | BOM and supplied accessories | Mass | kg | Convert counted items using measured item masses and reconcile them with issue/return records. A piece is not a kg. Include battery casings, protection electronics and module substrates in the corresponding purchased module. |
| `energy_conversion` | factory electricity | Net calorific value | MJ | Preserve the meter's electrical-energy basis; multiply kWh by 3.6 for MJ. Battery rated capacity is a specification, not measured factory charging energy. |
| `internal_transfer` | assembly to packing | Mass | kg | Use the same net configuration on both internal transfer rows. Match batch identifiers and reconcile stock changes before connecting processes. |
| `shipping_balance` | packed output | Mass | kg | Reconstruct shipped physical mass as net camera mass plus separately recorded accessories and packaging. Do not treat the difference from net reference mass as unexplained loss. |

These are collection and conversion conventions of this PCR. Configuration evidence is provided by `nikon-z8-reference-guide`; no manufacturer case mass or power rating is an inventory default.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished purchased image-sensor, electronic, optical and enclosure components received at the declared assembly site; supplier processing excluded from direct site records |
| starting_condition_role | Foreground collection cut; not a claim that the components have no upstream burden |
| product_classification_scope | Dedicated digital still-camera configurations within the semantic CPC 47215 boundary |
| recursive_input_rule | Link an externally purchased complete digital camera to its upstream dataset as a bounded input. Internal accepted cameras transfer once from assembly to packing and cancel on aggregation; do not recursively manufacture them again. |
| upstream_dataset_requirement | Link each purchased component, electricity supply, packaging and off-site waste treatment to a compatible dataset when building a cradle-to-gate model. Record geography, technology, reference state, allocation and cut-offs; flag missing links. |
| disclosure | Report supplier/site responsibilities, included operations, transport treatment, accessory and mass boundaries, direct waste fate, data gaps and all exclusions; distinguish gate-to-gate records from an upstream-complete model. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site` | foreground_processes | Include actual assembly, adjustment, inspection, rework and packing activity. Split supplier operations from site operations and include each once. | `nikon-manufacturing` |
| `boundary_upstream` | linked_model | Retain attributable upstream processes and justify exclusions. Disclose transport legs and supplier dataset boundaries; do not add a delivery leg already included in supplier data. | `ghg-protocol-product-standard-2011` |
| `boundary_extensions` | additional_site_operations | Expand the process map and atomic inventory before using this modular profile for in-house component fabrication or chemical processing; collect each actual utility, chemical, waste and direct emission separately. | |
| `boundary_downstream` | dataset_interpretation | This manufacturing profile excludes customer distribution, use and end-of-life of sold cameras. A full product footprint must add declared downstream scenarios; do not label the manufacturing module a full product life cycle. | `ghg-protocol-product-standard-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Camera assembly and imaging acceptance | required | Applies to each manufactured model | foreground production | 1 kg accepted unpackaged net camera configuration |
| packing | Accessory verification and packing | required | Applies to factory-gate release | foreground finishing | 1 kg released net camera configuration |

Nikon describes assembly/adjustment and performance evaluation as manufacturing stages (`nikon-manufacturing`). The subdivisions here are collection boundaries; individual plants may share equipment. Allocate a shared meter once. Conditional cards are included only where their stated physical exchange occurs; extend the inventory for other actual materials. A purchased composite module is one product exchange, while its upstream material inventory is linked separately.

### Process: Camera assembly and imaging acceptance (`assembly`)

#### Inputs

##### Product flows

###### CMOS image sensor module (`cmos_sensor`)

inclusion_condition: A CMOS module is fitted and purchased separately from the populated board. CCD designs require their own separately identified sensor row.

- Selected flow: CMOS image sensor module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed module mass, including substrate and package, divided by accepted assembly net mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Sources: `nikon-z8-reference-guide`

###### Populated digital-camera circuit-board assembly (`camera_pcb`)

inclusion_condition: A populated camera board crosses the site boundary; identify every device already included in that board.

- Selected flow: Populated digital-camera circuit-board assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed populated-board mass divided by accepted assembly net mass; include mounted electronic devices exactly once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Sources:

###### Finished digital-camera housing (`camera_housing`)

inclusion_condition: A finished enclosure is received from a supplier; record its material composition and surface finish.

- Selected flow: Finished digital-camera housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed finished-housing mass divided by accepted assembly net mass; add separate records if fabrication moves on site.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Sources:

###### Digital-camera objective lens assembly (`camera_lens`)

inclusion_condition: An integral objective or specified kit lens is included; omit with evidence for a body-only configuration.

- Selected flow: Digital-camera objective lens assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed complete lens-assembly mass divided by accepted net configuration mass; do not add its upstream glass a second time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Sources:

###### Digital-camera LCD display module (`camera_lcd`)

inclusion_condition: The declared camera has an LCD module supplied separately; other display technologies require their own atomic row.

- Selected flow: Digital-camera LCD display module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed assembled LCD-module mass divided by accepted assembly net mass, including its attached controller when supplied.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Sources: `nikon-z8-reference-guide`

###### Rechargeable lithium-ion camera battery pack (`camera_battery`)

inclusion_condition: The net configuration includes a supplied operating lithium-ion battery; it may be fitted or travel with the camera to packing. Record other chemistries separately.

- Selected flow: Rechargeable lithium-ion camera battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed complete pack mass, including enclosure and protection circuit, divided by accepted assembly net mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Sources: `cipa-camera-battery-guidance`; `nikon-z8-reference-guide`

###### Steel screw (`steel_screws`)

inclusion_condition: Separately issued steel screws are used and not already counted inside purchased assemblies.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net issued screw mass divided by accepted assembly net mass; retain grade, coating and size records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_components`
- Sources:

###### Electricity (`assembly_electricity`)

inclusion_condition: Electricity supplies assembly, firmware loading, optical tests, rework or attributable shared room services.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered and justified allocated MJ divided by accepted assembly net mass; include failed test attempts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_energy`
- Sources:

##### Waste flows

No exchange is prescribed for the base route in this group; collect and add any actual exchange as an individual atomic row.

##### Elementary flows

No exchange is prescribed for the base route in this group; collect and add any actual exchange as an individual atomic row.

#### Outputs

##### Product flows

###### Digital cameras (`unpacked_camera`)

inclusion_condition: The configured camera passes imaging acceptance and leaves assembly unboxed; any included kit lens and operating battery accompany it.

- Selected flow: Digital cameras `9e283879-4269-4280-9b6e-8f09891ec5ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Accepted net configuration mass divided by the same process output mass; record paired transfer to packing.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_camera_transfer`
- Sources:

##### Waste flows

###### Discarded digital camera (`discarded_camera`)

inclusion_condition: A failed camera leaves the boundary as waste after rework is ruled out. Separately removed batteries or parts require separate waste rows.

- Selected flow: Discarded digital camera
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed discarded-camera mass after identified removals divided by accepted assembly net mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unpackaged net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_waste`
- Sources:

##### Elementary flows

No exchange is prescribed for the base route in this group; collect and add any actual exchange as an individual atomic row.

### Process: Accessory verification and packing (`packing`)

#### Inputs

##### Product flows

###### Digital cameras (`camera_to_pack`)

inclusion_condition: Receive the same accepted unboxed configuration from assembly; this is an internal product link, not a new purchase.

- Selected flow: Digital cameras `9e283879-4269-4280-9b6e-8f09891ec5ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Matched incoming net configuration mass divided by released net mass, with stock and rejected transfers reconciled.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_camera_transfer`
- Sources:

###### corrugated board boxes (`corrugated_box`)

inclusion_condition: A corrugated shipping or sales box is consumed for the supplied configuration.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed converted-box mass divided by released net camera mass; retain carton grade and recycled-content evidence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_items`
- Sources:

###### Molded pulp packaging insert (`pulp_insert`)

inclusion_condition: A moulded-pulp protective insert is used in the package.

- Selected flow: Molded pulp packaging insert `2452c680-7e60-4e7d-b170-fb98ac7a9fe2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed insert mass divided by released net camera mass; do not combine it with paper leaflets or plastic inserts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_items`
- Sources:

###### Low-density polyethylene packaging bag (`ldpe_bag`)

inclusion_condition: An LDPE bag is used for the camera or one supplied accessory; verify the polymer grade.

- Selected flow: Low-density polyethylene packaging bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed bag mass divided by released net camera mass; record separately from other polymer packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_items`
- Sources:

###### USB cable (`usb_cable`)

inclusion_condition: The regional supplied-accessory list includes a USB cable; declare connector types and length.

- Selected flow: USB cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Mass of supplied complete USB cables divided by released net camera mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_items`
- Sources: `nikon-z8-reference-guide`

###### Camera lithium-ion battery charger (`battery_charger`)

inclusion_condition: A dedicated charger is supplied; separately sold chargers are outside this product package.

- Selected flow: Camera lithium-ion battery charger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed complete charger mass divided by released net camera mass; identify included mains leads and avoid duplicate counting.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_items`
- Sources: `nikon-z8-reference-guide`

###### Camera neck strap (`camera_strap`)

inclusion_condition: A finished camera neck strap is supplied with the declared configuration.

- Selected flow: Camera neck strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Consumed strap mass, including buckles, divided by released net camera mass; record textile and trim composition.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_items`
- Sources: `nikon-z8-reference-guide`

###### Electricity (`packing_electricity`)

inclusion_condition: Packing equipment consumes electricity; shared meters are apportioned once with assembly.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered and allocated packing MJ divided by released net camera mass; manual-only packing records demonstrated absence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_energy`
- Sources:

##### Waste flows

No exchange is prescribed for the base route in this group; collect and add any actual exchange as an individual atomic row.

##### Elementary flows

No exchange is prescribed for the base route in this group; collect and add any actual exchange as an individual atomic row.

#### Outputs

##### Product flows

###### Digital cameras (`finished_camera`)

inclusion_condition: The tested camera configuration is released in its declared package state at the factory gate.

- Selected flow: Digital cameras `9e283879-4269-4280-9b6e-8f09891ec5ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Released net camera mass divided by itself, giving the 1 kg reference output; retain camera count and gross shipping mass separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources:

##### Waste flows

###### Segregated corrugated-board waste (`corrugated_waste`)

inclusion_condition: Damaged or trimmed corrugated board leaves packing as a separately collected waste.

- Selected flow: Segregated corrugated-board waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed segregated corrugated-board waste divided by released net camera mass; disclose moisture and contamination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net camera configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_waste`
- Sources:

##### Elementary flows

No exchange is prescribed for the base route in this group; collect and add any actual exchange as an individual atomic row.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared_site_activity | Prefer model-specific metering or process subdivision. If unavoidable, use a demonstrated physical relationship; justify an alternative relationship when physical allocation cannot be established. | `ghg-protocol-product-standard-2011` |
| `allocation_camera_time` | assembly_and_test_electricity | For a shared test station, collect model-specific powered test time and load. Allocate its measured total by those demonstrated demands, not by camera mass or pixel count alone. Reconcile allocated totals to the meter. | |
| `allocation_rework` | acceptance_and_rejects | Charge failed attempts and rework to the production cohort that caused them; only accepted output enters the normalization denominator. Record recovered parts and internal reuse explicitly, without duplicate purchases. | |
| `allocation_waste` | outgoing_scrap | Document waste/co-product status and treatment responsibility. Disclose the recycling allocation method and report any displacement claim separately; no automatic virgin-material credit is assigned by this PCR. | `ghg-protocol-product-standard-2011` |

The test-time and cohort conventions are foreground protocols of this PCR, not manufacturer benchmark factors.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | assembly | Individual purchased components | BOM and stock ledger | model; revision; part_id; item_mass; issues; returns; opening_stock; closing_stock; supplier; integrated_subparts | Weigh representative parts; reconcile released BOM with stores and supplier declarations | kg and item count | Each lot and BOM revision | Entire declared production period including failed lots | Assembly line and supplying stores | Determine consumed mass for each part separately and divide by accepted assembly net mass | Scale calibration; invoice; signed BOM; stock reconciliation |
| cp_assembly_energy | assembly | Electricity | Meter and equipment log | meter_id; opening_MJ; closing_MJ; model; powered_test_time; measured_load; idle_time; allocation_driver | Submeter assembly, firmware loading, optical testing and attributable room services; reconcile shared supply | MJ; kWh; h | Each shift and model change | Same period as accepted-output records | Assembly and test equipment plus declared shared services | Allocate measured interval energy once, then divide by accepted assembly net mass | Meter calibration; station logs; reconciliation to utility meter |
| cp_camera_transfer | assembly | Accepted camera and internal transfer | Acceptance and stock record | serial_or_lot; model; net_configuration; accepted_count; accepted_mass; transfer_mass; stock_change; rework_status | Weigh accepted configuration and pair transfer records with packing receipt | kg and camera count | Each lot transfer | Same reporting period with opening/closing work in progress | Assembly exit and packing receipt | Match paired net mass and batch; calculate transfer per destination output without double counting | Acceptance tests; scale evidence; two-sided transfer ledger |
| cp_assembly_waste | assembly | Discarded digital camera | Waste transfer record | lot; failure_reason; net_mass; battery_present; removed_parts; destination; treatment | Weigh discarded cameras after recording separately removed components; retain contractor ticket | kg | Each disposal shipment | Same cohort as assembly consumption | Reject area to off-site recipient | Sum actual discarded camera mass separately from rework and normalize by accepted assembly mass | Waste ticket; dismantling ledger; recipient treatment evidence |
| cp_packing_items | packing | Each supplied accessory or package article | Packing BOM and stock ledger | model; sales_region; item_id; issued_count; returned_count; item_mass; opening_stock; closing_stock | Weigh each item; check regional package contents and issued stock | kg and item count | Each packing lot and configuration change | Same period as camera release | Packing line and stores | Consume and normalize each item separately by released net camera mass | Scale check; packing BOM; regional content declaration |
| cp_packing_energy | packing | Electricity | Meter log | meter_id; interval_energy; model; line_time; allocation_driver | Measure packing/sealing line energy and reconcile its share of common supply | MJ; kWh | Each shift | Same reporting period | Packing equipment | Normalize measured allocated energy by released net camera mass | Meter check; shift log; no overlap with assembly meter |
| cp_release | packing | Finished camera | Release ledger | model; accepted_count; net_mass; accessory_mass; packaging_mass; shipped_gross_mass; opening_stock; closing_stock | Weigh net configuration and packaged units separately; reconcile release count | kg and camera count | Each released lot | Entire reporting period | Factory gate | Sum released net camera mass; retain count-to-mass and gross-mass reconciliation | Release authorization; scale calibration; shipment record |
| cp_packing_waste | packing | Corrugated-board waste | Waste ledger | dry_mass; moisture_state; carton_grade; source_lot; contamination; destination | Weigh segregated cardboard and retain collection ticket | kg | Each waste pickup | Same period as packing records | Packing area to recipient | Normalize discarded corrugated board by released net camera mass | Weighbridge or scale record; waste ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_consumption` | each component and package article | C_i = opening stock + receipts - closing stock - documented unused returns - transfers outside the cohort; reconcile to issues minus returns without counting receipts twice | Item-specific stock and issue records from cp_components or cp_packing_items | Consumed mass C_i in kg | |
| `calc_normalize` | each process exchange | q_i = C_i / M_good for the same model, process and period; use measured energy or waste mass in place of C_i where applicable; M_good must be positive | Relevant collection protocol and cp_camera_transfer or cp_release | kg/kg or MJ/kg process output | |
| `calc_transfer` | assembly to packing link | Packing demand for accepted camera = matched incoming net mass / released net mass. Scale assembly by that demand and cancel the linked intermediate exchange at aggregation | cp_camera_transfer; cp_release; work-in-progress and reject records | Internally consistent linked manufacturing model | |
| `calc_count` | downstream unit conversion | Inventory per camera = inventory per kg multiplied by measured net kg per camera of the same configuration | cp_release; normalized inventory | Per-camera dataset with declared mass basis | |
| `calc_yield` | assembly acceptance | Acceptance yield = accepted camera count / started camera count for a closed cohort; retain work-in-progress and rework records to explain the denominator | cp_camera_transfer; production-start log | Observed cohort yield, without an assumed category value | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_configuration | Product and parts | Freeze the BOM, firmware, camera/lens/battery configuration and sales-region package contents. Identify whether sensor and display are already included in a purchased board or module. | Signed BOM, part drawings and package records; nikon-z8-reference-guide illustrates state distinctions |
| dq_completeness | All processes | Reconcile every BOM line, stock movement, meter and outgoing waste. Add separately identified atomic rows for unlisted real exchanges. Missing data must be marked as gaps, never silent zeroes. | Completeness register and process walk-through |
| dq_period | Normalization | Use matched output and consumption periods. Explain stock changes, prototypes, shutdowns, rejects and outsourced processing. Do not divide annual energy by an unrelated month's output. | Dated collection records and cohort ledger |
| dq_measurement | Weighing and metering | Retain instrument identity, calibration, uncertainty and sampling coverage; distinguish measured, supplier-reported and calculated values. | Calibration certificates, sampling plan and supplier declarations |
| dq_upstream | Linked data | Check product state, geography, technology, time and allocation compatibility for each upstream dataset. Missing UUID identity and missing upstream impact data are different gaps. | Supplier dataset register and boundary reconciliation |
| dq_ranges | Empirical comparisons | Collect model-specific material use, energy, acceptance yield, packaging and waste observations. No external empirical range is supplied here; do not substitute catalogue specifications or one published case. | Foreground records; any later external interval requires two independent original-text-verified compatible sources |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | Verify dedicated digital still-camera identity and all required qualifiers; reject substitution by camcorder, film camera or component data. | `un-cpc-3-0-structure-2025` |
| `validate_mass` | quantitative_reference | Require positive accepted net mass and paired camera count; keep kit, battery, accessory and packaging mass boundaries explicit. Check conversion using the same configuration. | |
| `validate_modules` | component_inventory | Ensure each selected row is one exchange; remove duplicate sensor, board, lens or battery burdens when a purchased module already includes them. | |
| `validate_transfers` | linked_processes | Match camera transfer identifiers, property, unit and net configuration; reconcile stock and losses, then cancel the intermediate only on aggregation. | |
| `validate_energy` | electricity | Check meter boundary, kWh-to-MJ conversion, allocation closure and coverage of tests/rework/room services. Never calculate factory energy from battery capacity alone. | |
| `validate_evidence` | row_values | Require traceable source records and collection protocols for each amount. Check missing versus absent exchanges and do not replace missing identities with proxy UUIDs. | |
| `validate_scope` | published_claims | Distinguish manufacturing inventory from a complete lifetime footprint; disclose gaps, upstream coverage, exclusions and allocation choices. | `ghg-protocol-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Manufacturing module for a specified digital still-camera model/configuration; input to process and lifecyclemodel projections after upstream linking |
| allowed_use | Supplier and assembly modelling with disclosed state/technology/geography; measured conversion between kg and camera count; separately declared life-cycle scenario construction |
| excluded_use | Unqualified comparisons of photographic service; full life-cycle or GHG Protocol conformity claims from this partial module alone; substitution for film cameras or video camera recorders; treating missing upstream data as zero |
| required_metadata | Reference qualifiers; net unit mass and count; included kit/packaging list; reporting period and site; BOM/firmware revision; process and supplier boundaries; allocation; upstream dataset links |
| required_quality_disclosure | Primary-record coverage; meter allocation; sampling and uncertainty; stock reconciliation; failed and reworked output; UUID gaps; external-range gaps; unlinked upstream burdens and exclusions |
| update_trigger | BOM, sensor, battery, lens, packaging or supplied-accessory change; process or supplier relocation; meter/allocation change; new reporting period; new independently verified evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC 3.0 structure, 30 June 2025, row 47215 and adjacent camera rows. [Official CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv). Retrieved 2026-09-09. | Product classification identity; no inventory amounts |
| cipa-camera-battery-guidance | official_guidance | Camera & Imaging Products Association, Chinese camera battery guidance. [Original page](https://www.cipa.jp/battery/index_c.html), retrieved 2026-09-09. | Professional Chinese category terminology and assembled battery-pack identity |
| nikon-manufacturing | handbook | Nikon, Manufacturing, Manufacturing Activities / Production section and its assembly-adjustment and performance-evaluation captions. [Original technical page](https://www.nikon.com/company/technology/manufacturing/), retrieved and reverified 2026-09-09. | Assembly/adjustment and performance-evaluation context; the described Nikon Group in-house processing informs supplier/site boundary checks, not a universal route or amount |
| nikon-z8-reference-guide | handbook | Nikon Z 8 Reference Guide, [Specifications](https://onlinemanual.nikonimglib.com/z8/en/specifications_375.html) and [Package Contents](https://onlinemanual.nikonimglib.com/z8/en/package_contents_4.html), retrieved 2026-09-09. | Sensor, LCD, battery, accessory and body/equipped-state qualifiers; a single manual, not independent range observations |
| ghg-protocol-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6, 7 and 9. [Original PDF](https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf), retrieved 2026-09-09. | Reference-unit clarity, attributable-process disclosure and allocation hierarchy; applied as methodological guidance, not certification of this partial manufacturing profile |
