---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machine-stand
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-powered modular tubular-steel industrial sewing machine stand assembly

## 1. Scope and Applicability

This candidate covers a separately supplied non-powered modular tubular-steel industrial sewing machine stand assembled from externally finished powder-coated modules. The selected configuration has non-tilting tabletop supports, a horizontally adjustable treadle mounting bar, fixed rubber vibration-isolating feet and a threaded floor-levelling adjustment. Actual drawings/orders must establish the mechanical joint and height-lock architecture. The KESSLER KES-B description supports this configuration family; it does not supply a production inventory or authorize attribution of this assembly route to that manufacturer.

Exclude tabletop, sewing head, drive/control, electrical pedal, thread stand, drawers, casters, tilting supports, electric or spring-assisted lift, four-column variants, generic furniture/building structures, complete sewing workstation, local raw-stock fabrication/coating, installation service, customer sewing, maintenance and end of life. No coverage of the entire CPC44640 class is claimed.

The substantive method addition is separate support-module completeness and sewing-workstation interface, treadle clearance, height-lock/floor-contact acceptance; general fabrication techniques are reused rather than invented. This does not duplicate the complete lockstitch workstation method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machine-stand |
| classification_refs | CPC:3.0:44640; narrower |
| covered_products | This candidate covers a separately supplied non-powered modular tubular-steel industrial sewing machine stand assembled from externally finished powder-coated modules. The selected configuration has non-tilting tabletop supports, a horizontally adjustable treadle mounting bar, fixed rubber vibration-isolating feet and a threaded floor-levelling adjustment. Actual drawings/orders must establish the mechanical joint and height-lock architecture. The KESSLER KES-B description supports this configuration family; it does not supply a production inventory or authorize attribution of this assembly route to that manufacturer. |
| excluded_products | Exclude tabletop, sewing head, drive/control, electrical pedal, thread stand, drawers, casters, tilting supports, electric or spring-assisted lift, four-column variants, generic furniture/building structures, complete sewing workstation, local raw-stock fabrication/coating, installation service, customer sewing, maintenance and end of life. No coverage of the entire CPC44640 class is claimed. |
| representative_product | One accepted stand-only module, same drawing and complete configured structural supply |
| production_route | Receipt of finished modules; mechanical joining/adjustment; interface/completion acceptance; weighing/release and actual packing |
| market_state | New assembled accepted stand, before transport disassembly, without tabletop/head/motor or packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacturing the declared complete stand support module, not sewing textile or providing adjustable-workplace service |
| How much | 1 kg net accepted complete configured stand; a normalized portion of one complete product |
| How well | Conform to controlled BOM/drawing and signed acceptance plan for interfaces, geometry, adjustment locks, floor contact and completion; no universal load, torque, height or vibration threshold |
| How long or cycle | One manufacturing/acceptance cycle; no lifetime or sewing output specified |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted non-powered modular tubular-steel industrial sewing machine stand |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | stand model; drawing/BOM revision; order/lot; complete module supply; non-tilting tabletop interface and compatible sewing workstation; treadle mounting/clearance; height-lock and floor-levelling configuration; fixed rubber feet and compound; fastener grades/dimensions/coatings; retained module coating; measured net M and calibration; assembly and inspection plan; actual joint settings/test conditions; site/period/count; supplier gates/transport/upstream links; packaging/disassembly exclusions |

Declare every qualifier; mass normalization does not imply equivalent support/adjustment performance. The unresolved finished-flow identity must remain blank, not replaced with complete sewing machine or generic steel structure.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `electricity_units` | assembly_electricity; acceptance_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use actual meter/provider boundary; convert kWh using 1 kWh = 3.6 MJ and preserve original readings. |

M includes the accepted assembled stand and all mandatory retained modules, coating, feet and fasteners of that same configuration. Exclude tabletop, head, optional accessories, transport fixtures and packaging. Retain calibrated scale readings, tare and uncertainty; reconcile any transport disassembly with weighed accepted BOM without replacing M with catalogue weight. No drawing-derived or estimated mass is substituted.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Externally completed and powder-coated stand modules and finished individual fasteners received at assembly site |
| starting_condition_role | Declared foreground assembly module |
| product_classification_scope | This candidate covers a separately supplied non-powered modular tubular-steel industrial sewing machine stand assembled from externally finished powder-coated modules. The selected configuration has non-tilting tabletop supports, a horizontally adjustable treadle mounting bar, fixed rubber vibration-isolating feet and a threaded floor-levelling adjustment. Actual drawings/orders must establish the mechanical joint and height-lock architecture. The KESSLER KES-B description supports this configuration family; it does not supply a production inventory or authorize attribution of this assembly route to that manufacturer. |
| recursive_input_rule | Stop received modules at their exact supplied state; embedded tube/coating/welds are not added as fresh assembly inputs. Rework/internal transfers are not repurchases. A complete purchased stand is outside this assembly route. |
| upstream_dataset_requirement | Link actual compatible component manufacturing/coating, electricity supply, incoming transport and waste treatment for expanded assessment; unresolved providers remain gaps |
| disclosure | This is receipt-to-release foreground assembly, not complete cradle-to-gate; disclose outsourcing, supplier states, missing links and exact configuration |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_included` | all processes | Include actual in-gate receipt/handling, joining/adjustment, inspection, attributable tools/support activity, rework/rejects and packing. Supplier fabrication/coating is upstream, not silently inside this inventory. |  |
| `boundary_emissions` | all inventory rows | No process emission is presumed for mechanical assembly. Any measured external species or additional chemicals/utility/waste must be added as separate physically specific exchanges with medium, supplier state and real collection. No upstream coating fume is represented as assembly release. |  |
| `boundary_config` | reference product | Only the non-powered fixed-foot non-tilting stand is covered. Adding tabletop/head/lift/tilt/casters changes this product boundary and requires applicability review. | `kessler-stand` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `assembly` | Receipt and mechanical frame assembly | required | For declared assembly route; individual utilities/waste/packing remain actual conditional exchanges | foreground_process | 1 kg accepted stand reference; collect per accepted same-configuration unit |
| `acceptance` | Interface, adjustment and completion acceptance | required | For declared assembly route; individual utilities/waste/packing remain actual conditional exchanges | foreground_process | 1 kg accepted stand reference; collect per accepted same-configuration unit |
| `release` | Net-mass release and actual packaging | required | For declared assembly route; individual utilities/waste/packing remain actual conditional exchanges | foreground_process | 1 kg accepted stand reference; collect per accepted same-configuration unit |

### Process: Receipt and mechanical frame assembly (`assembly`)

Receive finished powder-coated matched modules; check supply state, fit structural cross-brace/supports, feet and treadle mounting bar, set the order-specific geometry and lock joints under the actual drawing. No local cutting, bending, welding or coating is assumed.

#### Inputs

##### Product flows

###### Powder-coated tubular-steel left telescopic leg module (`left_leg`)

One left structural module received finished, including its integral welded foot; reconcile part number and retained coating.

- Selected flow: Powder-coated tubular-steel left telescopic leg module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Powder-coated tubular-steel right telescopic leg module (`right_leg`)

One matched right module of the same drawing configuration; not raw steel stock.

- Selected flow: Powder-coated tubular-steel right telescopic leg module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Powder-coated steel rear cross-brace (`back_brace`)

Received finished rear structural brace; exact length and fixing interfaces from controlled BOM.

- Selected flow: Powder-coated steel rear cross-brace
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Powder-coated steel non-tilting tabletop support rail (`top_support`)

Each physical support rail, accumulated only for the same part number; supplied tabletop is excluded.

- Selected flow: Powder-coated steel non-tilting tabletop support rail
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Steel horizontally adjustable treadle mounting bar (`treadle_bar`)

Bar and integral adjustment interface, not an electrical pedal or motor-control system.

- Selected flow: Steel horizontally adjustable treadle mounting bar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Vulcanized rubber vibration-isolating foot pad (`rubber_foot`)

Supplier-certified rubber pad mass; rubber compound and metal insert state retained in supplied component identity.

- Selected flow: Vulcanized rubber vibration-isolating foot pad
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Steel threaded floor-levelling foot spindle (`levelling_foot`)

Received threaded spindle; record adjustment/locking interface without presumed screw dimension.

- Selected flow: Steel threaded floor-levelling foot spindle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Steel hexagon-head bolt (`bolt`)

Actual drawing-listed bolt grade, coating and dimensions; weigh supplied count or traceably weighed lots.

- Selected flow: Steel hexagon-head bolt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Steel hexagon nut (`nut`)

One exact steel nut specification per dataset exchange; no mixed fastening kit.

- Selected flow: Steel hexagon nut
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Steel flat washer (`washer`)

Drawing-defined flat washer; separate from bolt and nut mass.

- Selected flow: Steel flat washer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

###### Alternating current (`assembly_electricity`)

Only electricity actually used by in-gate tools/lighting/handling, attributed through measurement; upstream coating energy is excluded.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`rejected_steel`)

Only actually rejected stand steel transferred as segregated manufacturing waste; coating and rubber removal/contamination disclosed, reuse and returned modules are not waste.

- Selected flow: Post-industrial steel scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `kessler-stand`

##### Elementary flows

### Process: Interface, adjustment and completion acceptance (`acceptance`)

Verify tabletop support/fixing interfaces, treadle mounting position/clearance, height adjustment locks, floor contact/levelling and actual drawing-specified fastener and stability checks; record rework. Test loads and torque values require the controlled acceptance plan.

#### Inputs

##### Product flows

###### Alternating current (`acceptance_electricity`)

Metered electric gauges or bench activity only if actually used. No sewing-operation test is required for a stand-only product.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `kessler-stand`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Net-mass release and actual packaging (`release`)

Weigh the assembled accepted stand; reconcile any shipment disassembly to the same complete BOM and acceptance record, then pack the actual shipment.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`pack_film`)

Conditional nonadhesive noncellular unreinforced unlaminated wrapping; other actual packaging must be added as separate precise rows. Exclude from net M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `kessler-stand`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted non-powered modular tubular-steel industrial sewing machine stand (`finished_machine`)

Complete accepted frame with the declared non-tilting supports, treadle mounting bar, fixed rubber feet, levelling adjustment and all mandatory fastening; no tabletop or sewing head.

- Selected flow: Accepted non-powered modular tubular-steel industrial sewing machine stand
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `kessler-stand`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | all processes | Separate orders/configurations and station meters to avoid allocation. Unavoidable shared tools, inspection/support electricity require measured causal time/load or documented driver with numerator, idle/rework, accepted same-configuration count and sensitivity. No default mass allocation between differently adjusted stands. | `ghg-allocation` |
| `allocation_rejects` | rejected_steel | Reconcile rejected modules, return, repair and segregated waste; retained rubber/coating contamination disclosed. Sales do not automatically create a co-product or avoided virgin steel credit. Do not apply a recycling benefit without an independently reviewed boundary. | `ghg-allocation` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference product | weighing_record | model; configuration; drawing/BOM revision; serial/lot; accepted net mass M; scale calibration/tare/uncertainty; assembled completion and acceptance linkage | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration and lot | declared complete production period | assembled stand-only release station | accepted net mass per unit | original scale readings, calibration and complete BOM acceptance |
| `cp_assembly` | assembly | individual inventory exchanges | production_record | row_id; configuration; drawing/BOM; lot; accepted units; issue/return/stock; measured quantity/unit; meter coverage; supplier/recipient; inspection/rework | Collect actual net component issues, original meters, actual waste transfer and packaging issues at this station. Reconcile inventory changes, attribute shared loads by real causal records and divide attributable totals by accepted complete units of the same configuration. Keep actual zero, absent exchange and missing record distinct. | kg for mass; MJ for electricity after original kWh conversion | each order/lot and actual exchange | full declared period with stock dates | actual named assembly/acceptance/release station | attributable exchange amount / accepted units | BOM/delivery certificates, meter calibration, measured quantities, actual count and signed inspection/disposition |
| `cp_acceptance` | acceptance | individual inventory exchanges | production_record | row_id; configuration; drawing/BOM; lot; accepted units; issue/return/stock; measured quantity/unit; meter coverage; supplier/recipient; inspection/rework | Collect actual net component issues, original meters, actual waste transfer and packaging issues at this station. Reconcile inventory changes, attribute shared loads by real causal records and divide attributable totals by accepted complete units of the same configuration. Keep actual zero, absent exchange and missing record distinct. | kg for mass; MJ for electricity after original kWh conversion | each order/lot and actual exchange | full declared period with stock dates | actual named assembly/acceptance/release station | attributable exchange amount / accepted units | BOM/delivery certificates, meter calibration, measured quantities, actual count and signed inspection/disposition |
| `cp_release` | release | individual inventory exchanges | production_record | row_id; configuration; drawing/BOM; lot; accepted units; issue/return/stock; measured quantity/unit; meter coverage; supplier/recipient; inspection/rework | Collect actual net component issues, original meters, actual waste transfer and packaging issues at this station. Reconcile inventory changes, attribute shared loads by real causal records and divide attributable totals by accepted complete units of the same configuration. Keep actual zero, absent exchange and missing record distinct. | kg for mass; MJ for electricity after original kWh conversion | each order/lot and actual exchange | full declared period with stock dates | actual named assembly/acceptance/release station | attributable exchange amount / accepted units | BOM/delivery certificates, meter calibration, measured quantities, actual count and signed inspection/disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_interface` | reference product | Require current tabletop mounting pattern/support geometry, compatible head/table workstation, treadle mounting travel/clearance, height lock and levelling configuration; acceptance uses actual controlled drawing, fastener specification and inspection plan. No inferred universal load, torque or vibration performance. | current drawing/BOM, measured interfaces and signed checks |
| `completion_mass` | cp_mass | Same drawing/configuration defines complete assembled stand M including feet/adjustment/fasteners and retained supplier coating. Keep separate tabletop/head/accessory supply and shipment packaging outside M. Actual calibrated complete weighing and same-configuration count are mandatory. | original scale/BOM/acceptance/order records |
| `supplier_states` | assembly | Verify finished coated modules and exact rubber compound/insert/fastener states. Supplier welding/coating is not a local process. Preserve actual component supply identifiers; add upstream links before claiming extended completeness. | supplier drawings/certificates and gate records |
| `inventory_coverage` | all inventory rows | Reconcile net issues, stock changes, accepted count, defects/rework and actual recipient. Add real cleaning chemicals, additional packaging or utilities atomically if used; missing data is not zero. | complete period ledgers and meter/order evidence |
| `scientific_gaps` | dataset | No particular producer M, actual joint drawing, manufacturing quantities, acceptance originals, empirical ranges or complete supplier impact datasets have been obtained. These require later foreground acquisition and independent scientific review; a mechanical check does not approve them. | future physical originals and review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | dataset | Verify the exact stand-only fixed-foot non-powered configuration, finished module route and special tabletop/treadle interfaces; no product applicability from classification alone. | `kessler-stand` |
| `validate_measurement` | all inventory rows | Reference name equals finished output; actual same-configuration complete net M and cp_mass support q_item/M for every non-reference row. Verify public property/unit chain without replacing count/area/volume with Mass. |  |
| `validate_quality` | acceptance | Require actual drawing and signed measured interface/adjustment/fastener/completion acceptance. Missing actual criteria or records remain scientific/acquisition gaps despite structural validity. |  |
| `validate_boundary` | all processes | No duplicated embedded coating/steel, upstream fabrication energy or invented local weld emissions; reconcile actual waste and conditionally used utilities/packing before quantitative-completeness claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing assembly dataset |
| downstream_use | secondary_dataset; background_dataset only after quantitative completion and independent review |
| allowed_use | Declared stand input to compatible industrial sewing workstation manufacture |
| excluded_use | Exclude tabletop, sewing head, drive/control, electrical pedal, thread stand, drawers, casters, tilting supports, electric or spring-assisted lift, four-column variants, generic furniture/building structures, complete sewing workstation, local raw-stock fabrication/coating, installation service, customer sewing, maintenance and end of life. No coverage of the entire CPC44640 class is claimed. |
| required_metadata | stand model; drawing/BOM revision; order/lot; complete module supply; non-tilting tabletop interface and compatible sewing workstation; treadle mounting/clearance; height-lock and floor-levelling configuration; fixed rubber feet and compound; fastener grades/dimensions/coatings; retained module coating; measured net M and calibration; assembly and inspection plan; actual joint settings/test conditions; site/period/count; supplier gates/transport/upstream links; packaging/disassembly exclusions |
| required_quality_disclosure | Measured M/uncertainty, exact completed configuration, original acceptance plan/results, period/count/stock/causal allocation, supplied gates, missing upstream links/identities/ranges and scientific review status |
| update_trigger | Module design, interfaces, lift/foot/support variants, supply completion, coating/compound/fastener state, supplier gate or acceptance plan change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| kessler-stand | literature | KESSLER, Sewing machine stand KES-B; https://www.kessler-ergo.com/en/sewing-machine_stands_sit-down-and-stand-up-workstations/ ; unpaginated description, technical data, options and versions | Modular tubular-steel stand, tabletop support, treadle adjustment, fixed feet/levelling and supplied coating context. Approximate weight, advertised dimensions/load and performance claims not adopted as measured M or mandatory criteria. Actual joint/assembly route and acceptance require foreground drawings; no exact manufacturer production route inferred. |
| ghg-allocation | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; printed63 PDF65 Tables9.1–9.2 | Historical general allocation hierarchy; actual causal measurements required, not current product regulation or mass default. |
