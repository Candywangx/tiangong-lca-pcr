---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.welded-steel-wood-deck-platform-cart
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Welded-steel wood-deck manual four-wheel platform cart manufacture

## 1. Scope and Applicability

Candidate authored methodology for a new complete manually pushed open platform cart with welded tubular/profile steel frame and handle, finished wood-derived-board deck with beech-grain surface, two TPE-tyred swivel castors with wheel locks and two TPE-tyred fixed castors with ball-bearing hubs. Manufacture starts with received steel stock and finished panel/castor modules, includes actual stock cutting/forming, frame welding, shot-blast preparation and solvent-free powder coating, then assembly, controlled complete-cart acceptance, calibrated empty net weighing and release. The manufacturer fetra2500 is a configuration example, not a compulsory geometry, rated capacity or process recipe.

Narrower than CPC49930. Exclude two-wheel hand trucks, wheelbarrows, shelf/ladder/folding carts, hydraulic pallet trucks, towable industrial trailers, aluminium/stainless/plastic frame routes, four-swivel or unbraked castor variants, powered propulsion and operating material-handling service. A purchased complete frame/cart assembly route omits material forming/welding and cannot silently reuse this manufacture gate. Existing product/scaffold identity is not promoted merely from classification. Scientific review is pending; translation alignment and automated checks do not approve methodology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.welded-steel-wood-deck-platform-cart |
| classification_refs | CPC3.0 49930; narrower, no accepted mapping asserted |
| covered_products | Complete empty welded-steel wood-derived-board-deck manual four-wheel cart of declared2swivel/2fixed locked-castor architecture |
| excluded_products | Other cart frame/deck/castor families, pallet lifting/powered vehicles, incomplete kits and operating transport |
| representative_product | fetra2500 manufacturer base configuration; actual order/BOM and stock/chemical specifications required |
| production_route | Steel stock cutting/forming → frame/handle welding → shot blast and powder coat/cure → wood deck and castor assembly → controlled acceptance, empty net weighing and release |
| market_state | New complete accepted empty cart at declared manufacturing release gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete welded-steel wood-deck manual four-wheel platform cart |
| How much | 1 kg accepted complete empty configured cart net mass |
| How well | Released drawing/BOM and complete castor/lock/deck configuration under actual controlled manufacturing acceptance |
| How long or cycle | One manufacturing acceptance cycle; no lifetime or tonne-km handling service |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete welded-steel wood-deck manual four-wheel platform cart |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | producer/model/serial and drawing revision; manually pushed nonpowered open platform with welded steel tube/profile frame and handle; actual stock grade/cross-section/manufacturing route; finished wood-derived-board deck with beech-grain surface and actual board composition; two TPE swivel castors with wheel locks and two TPE fixed castors, ball-bearing hubs and supplier inclusions; blast/powder formulation/SDS and actual cure heat route; complete empty accepted measured net M kg and cp_mass scale/calibration, installed configuration and packing/load exclusion; declared rated capacity and actual controlled acceptance, no catalogue mass substitute; actual site/period/subcontract/gate, shielding gas and fossil cure-fuel composition when applicable, upstream supply and waste recipients |

Declare every required qualifier in dataset metadata or equivalent source-addressable fields. Equal mass does not establish equal load rating, rolling/lock performance or handling service. Never replace measured empty net M with payload, proof load or catalogue mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `exchange_mass` | all kg inventory rows | Mass | kg | Measure separate net received/consumed/returned physical amounts and actual waste/emissions in kg. Count-based panel/castor statistics need measured actual unit mass and supplier inclusion. Preserve any later adopted nonmass property and explicit measured conversion, never overwrite a public identity property. |
| `electric_energy` | forming_electricity; welding_electricity; finishing_electricity; assembly_electricity; acceptance_electricity | Net calorific value | MJ | Collect meter kWh and convert with1 kWh =3.6 MJ, preserving actual public energy property and process attribution. Upstream provider/technology/voltage/location are disclosed independently. |
| `gas_volume` | natural_gas | Volume | m3 | Preserve the public Volume reference. Meter actual pipeline gas volume with pressure/temperature/composition and volume convention; any billing-to-reference condition conversion uses actual documented supplier measurement. Do not infer density from auxiliary Mass values or generic examples. |
| `mass_configuration` | cp_mass | Mass | kg | Weigh the complete empty accepted cart with installed handle/frame/deck/four castors/locks/fasteners and retained powder coat. Remove carried goods, proof load, temporary test fixtures, transport packaging, loose optional accessories and reusable pallets. Record the exact base configuration; a folded/disassembled shipment needs an independently verified complete component reconciliation, never gross packing mass. |
| `mass_record_origin` | cp_mass | Mass | kg | Use actual serial accepted complete-cart calibrated platform-scale readings with calibration/zero/tare/uncertainty and signed configuration/acceptance record. No manufacturer catalogue mass, load-rating number or10-year guarantee is measured M or a lifetime factor. Missing records remain quantitative acquisition gaps. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received steel tube/profile stock and finished wood-board panel and completed castor modules |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Evidence-selected welded-steel wood-deck manual four-wheel platform-cart subset of CPC49930 |
| recursive_input_rule | Do not recursively include steelmaking, tube rolling, panel manufacture, castor/tyre/bearing manufacture inside this stock-to-cart gate |
| upstream_dataset_requirement | Link actual compatible stock, finished panel/castors, formulated consumables, electricity/gas supply, transport and waste-treatment datasets before broader supply-chain claims |
| disclosure | Foreground stock fabrication, dry blast/powder finish, assembly and acceptance/release only; actual subcontract scope and exclusions disclosed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_conditionals` | welding; finishing; acceptance | Actual filler/gas, abrasive/chemistry, heat source, emissions and protection need foreground evidence and exact individual exchanges. Required powder coating does not imply fossil burner, aqueous chemical pretreatment, VOC or wastewater. No routine proof load or universal test force inferred from a product payload rating. | `fetra-product`; `fetra-quality` |
| `boundary_completeness` | dataset | This foreground is not complete cradle-to-gate. Add every omitted actual specified input, external heat/air service, chemical and waste/emission atomically before claiming complete quantitative coverage; disclose actual unknowns and missing upstream links without combined category rows or invented zeros. Cart handling during use and post-gate delivery remain excluded. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Steel stock cutting and forming | required | Actual in-gate formation of the welded tubular/profile frame for this manual four-wheel platform cart. | foreground | one accepted complete unit normalized with M |
| `welding` | Frame and handle welding | required | Actual welded tube/profile structure, not a purchased complete cart/frame or bolt-only frame route. | foreground | one accepted complete unit normalized with M |
| `finishing` | Shot-blast preparation and solvent-free powder coating | required | Actual declared blast-pretreated powder-coated cart steel structure at site or separately disclosed included subcontractor. | foreground | one accepted complete unit normalized with M |
| `assembly` | Wood-board deck and castor assembly | required | One complete wood-derived-board platform with two TPE-tyred swivel castors with locks and two TPE-tyred fixed castors, manual push handle. | foreground | one accepted complete unit normalized with M |
| `acceptance` | Complete-cart acceptance, net weighing and release | required | Actual complete manufactured cart of the declared net delivery configuration. | foreground | one accepted complete unit normalized with M |

Stock cutting/forming feeds welded frame, then actual blast/powder finishing, supplied deck/castor assembly and serial acceptance/net weighing/release. Required stages do not make each conditional consumable or release mandatory. Declare actual station/subcontract order, material stock balance, rework and supplier module inclusions.

### Process: Steel stock cutting and forming (`forming`)

Receive declared steel tube and profile stock, saw to length and form actual handle/frame geometry, with drawing-specific hole preparation when present. Steelmaking and tube/profile rolling are upstream. The manufacturer names automatic saws, tube-bending/forming equipment; no exact grade, mandatory lubricant or scrap yield is inferred.

#### Inputs

##### Product flows

###### Weldable steel tube stock for manual cart frame (`steel_tube`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Weldable steel tube stock for manual cart frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `fetra-product`; `fetra-quality`

###### Weldable steel profile stock for manual cart frame (`steel_profile`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Weldable steel profile stock for manual cart frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `fetra-product`; `fetra-quality`

###### Formulated steel-sawing cutting oil (`cutting_oil`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Formulated steel-sawing cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `fetra-product`; `fetra-quality`

###### Foreground alternating-current electricity use (`forming_electricity`)

Measure actual separately attributable alternating-current electricity at point of use. Preserve meter kWh and multiply by3.6 MJ/kWh; public foreground-use identity leaves technology/provider/voltage/geography unspecified, so record actual supply and compatible upstream linkage independently. German manufacturer example does not justify China grid identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `fetra-product`; `fetra-quality`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel frame-stock cutting offcut transferred for treatment (`offcut`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Steel frame-stock cutting offcut transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `fetra-product`; `fetra-quality`

###### Steel sawing chips transferred for treatment (`chips`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Steel sawing chips transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `fetra-product`; `fetra-quality`

##### Elementary flows


### Process: Frame and handle welding (`welding`)

Weld the formed steel frame and handle joints to the current drawing and controlled welding procedure. The manufacturer supports welding/robots, not a universal welding method or shielding blend. Filler wire and argon/carbon-dioxide gas rows apply only when each is actually consumed; specify the real procedure, grades and measured blend fractions. Reusable jigs are not cart constituents.

#### Inputs

##### Product flows

###### Solid steel welding filler wire (`wire`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Solid steel welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `fetra-product`; `fetra-quality`

###### Argon shielding gas (`argon`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `fetra-product`; `fetra-quality`

###### Carbon dioxide shielding gas (`shield_co2`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `fetra-product`; `fetra-quality`

###### Foreground alternating-current electricity use (`welding_electricity`)

Measure actual separately attributable alternating-current electricity at point of use. Preserve meter kWh and multiply by3.6 MJ/kWh; public foreground-use identity leaves technology/provider/voltage/geography unspecified, so record actual supply and compatible upstream linkage independently. German manufacturer example does not justify China grid identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `fetra-product`; `fetra-quality`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Captured steel-welding fume residue transferred for treatment (`captured_fume`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Captured steel-welding fume residue transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `fetra-product`; `fetra-quality`

##### Elementary flows

###### Argon to air, unspecified (`weld_argon_air`)

Only actual measured argon CAS7440-37-1 released from this documented shielding-gas process to immediate air, unspecified. Resolve separate gas composition, returns/recovery and outlet balance; no air-resource or long-term/urban-air identity substitution. A documented gas balance requires real batch component masses and fate, not presuming the entire supplied blend is argon.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `fetra-product`; `fetra-quality`

###### Carbon dioxide, fossil, shielding-gas release to air, unspecified (`weld_co2_air`)

Only actual fossil-origin CO2 CAS124-38-9 shielding-gas release to immediate air, unspecified, from this welding stage. Require actual supplied batch fossil/biogenic origin and measured outlet or documented component input/return/recovery/fate balance. Do not classify fermentation CO2 as fossil or combine this release with cure-burner combustion. Unknown origin remains a quantity/identity review gap.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_welding`
- Sources: `fetra-product`; `fetra-quality`


### Process: Shot-blast preparation and solvent-free powder coating (`finishing`)

Prepare the steel surface by the actual shot-blast route, apply specified solvent-free powder coating and complete its actual cure. Manufacturer source specifies blasting and solvent-free powder, not binder chemistry, abrasive composition, temperature, heat source or emission amount. Steel-grit example requires actual abrasive evidence; powder is one finished formulation and requires supplier SDS and batch. Natural gas and combustion emissions are conditional on actual in-gate gas-fired heating, not mandatory powder-coating exchanges. No liquid wash, phosphating, chromium, solvent VOC or wastewater is inferred from this dry route.

#### Inputs

##### Product flows

###### Steel-grit blasting abrasive (`steel_grit`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Steel-grit blasting abrasive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

###### Formulated solvent-free steel-frame powder coating (`powder`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Formulated solvent-free steel-frame powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

###### Fossil natural gas supplied for cart powder-coating cure (`natural_gas`)

Only actual fossil gaseous natural gas compressed and pipeline-delivered to the consumer, compliant with the actual applicable gas standard, consumed by an in-gate cure burner. Preserve public reference Volume and real meter pressure/temperature/composition and volume convention; any corrected standard volume requires the supplier actual measured conversion, not an assumed density or standard state. Public auxiliary Mass mean values are not a density. No LNG, biogas, raw extraction methane or bought-heat substitution; disclosed heat route and actual quantities required.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

###### Foreground alternating-current electricity use (`finishing_electricity`)

Measure actual separately attributable alternating-current electricity at point of use. Preserve meter kWh and multiply by3.6 MJ/kWh; public foreground-use identity leaves technology/provider/voltage/geography unspecified, so record actual supply and compatible upstream linkage independently. German manufacturer example does not justify China grid identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent steel-grit blasting residue transferred for treatment (`spent_grit`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Spent steel-grit blasting residue transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

###### Uncured powder-coating residual transferred for treatment (`waste_powder`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Uncured powder-coating residual transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

##### Elementary flows

###### Carbon dioxide, fossil, to air, unspecified (`co2_air`)

Only actual CAS124-38-9 release to immediate air, unspecified, from a documented in-gate gas-fired cure burner. Measure the individual species with calibrated outlet concentration/flow and actual operating period, units, detection limits and uncertainty. CO2 requires actual fossil carbon origin; measured fossil carbon balance needs real composition and oxidation/product fate. NO is not NO2, N2O or total NOx. No mandatory burner or emission quantity and no welding particulate/VOC substitution.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

###### Nitrogen monoxide to air, unspecified (`no_air`)

Only actual CAS10102-43-9 release to immediate air, unspecified, from a documented in-gate gas-fired cure burner. Measure the individual species with calibrated outlet concentration/flow and actual operating period, units, detection limits and uncertainty. CO2 requires actual fossil carbon origin; measured fossil carbon balance needs real composition and oxidation/product fate. NO is not NO2, N2O or total NOx. No mandatory burner or emission quantity and no welding particulate/VOC substitution.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`

###### Nitrogen dioxide to air, unspecified (`no2_air`)

Only actual CAS10102-44-0 release to immediate air, unspecified, from a documented in-gate gas-fired cure burner. Measure the individual species with calibrated outlet concentration/flow and actual operating period, units, detection limits and uncertainty. CO2 requires actual fossil carbon origin; measured fossil carbon balance needs real composition and oxidation/product fate. NO is not NO2, N2O or total NOx. No mandatory burner or emission quantity and no welding particulate/VOC substitution.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`
- Sources: `fetra-product`; `fetra-quality`


### Process: Wood-board deck and castor assembly (`assembly`)

Install the separately supplied finished wood-derived-board deck with beech-grain surface and four completed castor modules, actual bolts and wheel locks. This is not asserted as solid beech, plywood, MDF or particleboard: supplier actual panel composition must be recorded before identity/background linkage. Castor modules include tyres/hubs/ball bearings and locks as supplied; do not duplicate separate wheel/bearing inputs. No powered propulsion, hydraulic lift, shelf structure or folding mechanism.

#### Inputs

##### Product flows

###### Finished wood-derived-board platform panel with beech-grain surface (`deck`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Finished wood-derived-board platform panel with beech-grain surface
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `fetra-product`

###### Completed TPE-tyred swivel castor with ball-bearing hub and wheel lock (`swivel_castor`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Completed TPE-tyred swivel castor with ball-bearing hub and wheel lock
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `fetra-product`

###### Completed TPE-tyred fixed castor with ball-bearing hub (`fixed_castor`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Completed TPE-tyred fixed castor with ball-bearing hub
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `fetra-product`

###### Steel threaded platform-cart assembly bolt (`bolt`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Steel threaded platform-cart assembly bolt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `fetra-product`

###### Foreground alternating-current electricity use (`assembly_electricity`)

Measure actual separately attributable alternating-current electricity at point of use. Preserve meter kWh and multiply by3.6 MJ/kWh; public foreground-use identity leaves technology/provider/voltage/geography unspecified, so record actual supply and compatible upstream linkage independently. German manufacturer example does not justify China grid identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `fetra-product`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows


### Process: Complete-cart acceptance, net weighing and release (`acceptance`)

Verify current drawing, weld/coat/deck/fastener completeness, castor orientation, free rolling and swivel-lock function under the actual controlled acceptance procedure. Any proof load or rolling test requires actual approved test record, not an invented universal500kg threshold. Weigh the accepted complete empty cart on calibrated equipment, remove any test load and temporary fixtures. Release is required; disposable protection applies only when actually used, independently of net M.

#### Inputs

##### Product flows

###### Finished corrugated-cardboard cart shipping carton (`cardboard`)

Only one actually supplied or transferred physical item at this process boundary; verify specification, weigh net issue less returns, reconcile stocks and supplier inclusion, and record its recipient/state. Actual absent conditional exchanges are documented as not applicable, not presumed universal.

- Selected flow: Finished corrugated-cardboard cart shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `fetra-product`; `fetra-quality`

###### Non-adhesive non-cellular LDPE protective packaging film (`film`)

Only actually consumed non-adhesive non-cellular LDPE film that is not reinforced, laminated or supported; verify actual supplier specification and measured net amount. Other structures require their own identity.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `fetra-product`; `fetra-quality`

###### Foreground alternating-current electricity use (`acceptance_electricity`)

Measure actual separately attributable alternating-current electricity at point of use. Preserve meter kWh and multiply by3.6 MJ/kWh; public foreground-use identity leaves technology/provider/voltage/geography unspecified, so record actual supply and compatible upstream linkage independently. German manufacturer example does not justify China grid identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `fetra-product`; `fetra-quality`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete welded-steel wood-deck manual four-wheel platform cart (`finished_machine`)

Fixed1kg of accepted complete empty configured cart including frame, powder coat, deck, handle, four castors and required locks/fasteners. Exclude carried goods, proof/test loads, fixtures, shipping packaging, loose optional parts and reusable pallets. Measure actual net M, not payload capacity or catalogue weight.

- Selected flow: Accepted complete welded-steel wood-deck manual four-wheel platform cart
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `fetra-product`; `fetra-quality`

##### Waste flows

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | Avoid allocation by order/batch/station subdivision and measured submetering. Allocate residual shared saw/welder/blast/cure loads only by demonstrated causal measured active machine-time/load or compatible actual coated area and cure recipe, with numerator/denominator and sensitivity. No equal-cart allocation across materially different structures or nominal payload/mass driver without physical cause. | `ghg-allocation` |
| `allocation_recovery` | offcut; chips; spent_grit; waste_powder | Distinguish stock returns, internal abrasive/powder circulation, transfer to treatment and genuine co-products. Recirculated grit/powder is not repeatedly charged as virgin input; residual waste is measured once. No automatic avoided-steel credit or sale-as-co-product rule. Reviewed co-product treatment and recipient supply boundaries are separately documented. | `ghg-allocation` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | reference product | weighing_record | serial; configuration; accepted net mass M; scale/zero/tare/calibration/uncertainty; empty installed BOM; excluded proof load/fixtures/packaging; accepted count and signature | Weigh the accepted complete unit on a calibrated platform scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted serial and changed configuration | actual manufacturing reporting period | declared manufacturing site | accepted net mass per unit | original scale/calibration/BOM and signed acceptance |
| `cp_forming` | `forming` | inventory rows | production_record | order/serial; configuration; actual item/grade/SDS; net issues/returns/stocks/recirculation; castor/panel supply inclusion; original raw unit; same-configuration accepted unit count; meters/calibration; actual gas pressure/temperature/composition/volume convention; electricity kWh; emission species/concentration/outlet flow/period; allocation numerator/denominator | Record drawing/stock grade and dimensions, measured net stock issues/returns, cut lengths, offcut/chip transfers, actual separately used lubricant and submeter energy. Collect kg item/waste/species net amounts, meter energy with3.6 MJ/kWh and actual pipeline gas m3 with stated conditions. Record conditional absence versus unknown measurements separately. Apply only actual documented stock/return corrections and causal attribution. | row-specific kg; MJ; m3 | each order/batch and actual measured process period | actual reporting period | declared factory and separately disclosed included subcontractor | attributable exchange amount / accepted units | original issues/stock/meter/SDS/BOM/test/waste and causal allocation evidence |
| `cp_welding` | `welding` | inventory rows | production_record | order/serial; configuration; actual item/grade/SDS; net issues/returns/stocks/recirculation; castor/panel supply inclusion; original raw unit; same-configuration accepted unit count; meters/calibration; actual gas pressure/temperature/composition/volume convention; electricity kWh; emission species/concentration/outlet flow/period; allocation numerator/denominator | Retain weld map/procedure/inspection, weighed filler issues/returns, measured individual shielding gas masses and composition, actual captured steel fume residue and electric use. Collect kg item/waste/species net amounts, meter energy with3.6 MJ/kWh and actual pipeline gas m3 with stated conditions. Record conditional absence versus unknown measurements separately. Apply only actual documented stock/return corrections and causal attribution. | row-specific kg; MJ; m3 | each order/batch and actual measured process period | actual reporting period | declared factory and separately disclosed included subcontractor | attributable exchange amount / accepted units | original issues/stock/meter/SDS/BOM/test/waste and causal allocation evidence |
| `cp_finishing` | `finishing` | inventory rows | production_record | order/serial; configuration; actual item/grade/SDS; net issues/returns/stocks/recirculation; castor/panel supply inclusion; original raw unit; same-configuration accepted unit count; meters/calibration; actual gas pressure/temperature/composition/volume convention; electricity kWh; emission species/concentration/outlet flow/period; allocation numerator/denominator | Collect actual abrasive/powder net issues, recovered recirculation and waste transfers separately, coated area and recipe, actual cure heat/energy metering, specified coating acceptance and calibrated measured burner species if applicable. Collect kg item/waste/species net amounts, meter energy with3.6 MJ/kWh and actual pipeline gas m3 with stated conditions. Record conditional absence versus unknown measurements separately. Apply only actual documented stock/return corrections and causal attribution. | row-specific kg; MJ; m3 | each order/batch and actual measured process period | actual reporting period | declared factory and separately disclosed included subcontractor | attributable exchange amount / accepted units | original issues/stock/meter/SDS/BOM/test/waste and causal allocation evidence |
| `cp_assembly` | `assembly` | inventory rows | production_record | order/serial; configuration; actual item/grade/SDS; net issues/returns/stocks/recirculation; castor/panel supply inclusion; original raw unit; same-configuration accepted unit count; meters/calibration; actual gas pressure/temperature/composition/volume convention; electricity kWh; emission species/concentration/outlet flow/period; allocation numerator/denominator | Measure net deck/castor/bolt supplied and installed masses, board grade/coating, castor orientation/lock arrangement, module inclusions, actual serial drawing and assembly checks. Collect kg item/waste/species net amounts, meter energy with3.6 MJ/kWh and actual pipeline gas m3 with stated conditions. Record conditional absence versus unknown measurements separately. Apply only actual documented stock/return corrections and causal attribution. | row-specific kg; MJ; m3 | each order/batch and actual measured process period | actual reporting period | declared factory and separately disclosed included subcontractor | attributable exchange amount / accepted units | original issues/stock/meter/SDS/BOM/test/waste and causal allocation evidence |
| `cp_acceptance` | `acceptance` | inventory rows | production_record | order/serial; configuration; actual item/grade/SDS; net issues/returns/stocks/recirculation; castor/panel supply inclusion; original raw unit; same-configuration accepted unit count; meters/calibration; actual gas pressure/temperature/composition/volume convention; electricity kWh; emission species/concentration/outlet flow/period; allocation numerator/denominator | Collect serial/configuration approval and castor/brake checks, measured proof loads if actually applied, scale/calibration/BOM net readings, accepted count and actual separately consumed packing net masses/returns. Collect kg item/waste/species net amounts, meter energy with3.6 MJ/kWh and actual pipeline gas m3 with stated conditions. Record conditional absence versus unknown measurements separately. Apply only actual documented stock/return corrections and causal attribution. | row-specific kg; MJ; m3 | each order/batch and actual measured process period | actual reporting period | declared factory and separately disclosed included subcontractor | attributable exchange amount / accepted units | original issues/stock/meter/SDS/BOM/test/waste and causal allocation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

First obtain attributable net q_item per accepted complete unit of the same configuration, in each row unit, from original measured batch quantities divided by actual accepted unit count and measured causal allocation. Keep rejects/rework/returns and identical scope explicit. Then divide by the same actual measured M. Equivalent units may aggregate exchanges over sum of measured net accepted masses; materially different frame/deck/castor/coat/heat routes remain separate. Gas-volume/kg and electricity-MJ/kg are not material-mass/kg. No universal density, yield, empirical mass or life is invented.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_origin and mass_configuration with actual calibrated complete empty cart weighing and signed BOM/acceptance. Reject payload, proof load and gross shipping weight. Missing actual M remains a quantitative gap. | actual serial scale/calibration/configuration and acceptance |
| `quality_materials` | forming; welding; finishing; assembly | Verify tube/profile grade and cross-section, welding consumable/gas procedure, abrasive composition, powder binder/SDS/cure route, actual wood-board type and finished castor inclusions. Beech-grain finish is not proof of solid beech or plywood. Add missing actual exchanges atomically; recycled powder and installed castor constituents are counted once. | actual drawing/BOM/SDS/supplier and measured stock records |
| `quality_shield_balance` | argon; shield_co2; weld_argon_air; weld_co2_air | When these shielding gases are actually used, reconcile individual component issue/return/recovery/actual immediate-air release with original batch composition and measured fate. For CO2 separately establish fossil/biogenic origin; unknown origin cannot be labelled fossil. Do not presume total blended gas is Ar or combine shielding release with burner combustion. Missing actual recipient/vent/gas balance blocks quantitative completion. | actual gas batch/supplier/origin, calibrated issue/return/recovery and outlet/fate records |
| `quality_heat_emissions` | natural_gas; co2_air; no_air; no2_air | Only actual in-gate fossil gas heat and separately measured immediate unspecified-air species qualify. Do not substitute bought heat, methane resource, NOx, N2O, workplace exposure or generic combustion factor. Retain calibrated outlet conversion, fossil composition and actual treatment/detection limits. | actual burner/meter/gas/SDS/speciated measured outlet evidence |
| `quality_evidence` | dataset | Disclose actual site/period/gate/subcontract, coverage and uncertainty, all quantity/identity/upstream gaps and conditional absences. Empirical QA ranges need actual calibrated records or independent compatible verified originals. Manufacturer product/process pages do not provide factory observations or scientific approval. | source and actual acquisition/gap records |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | Verify manual nonpowered welded-steel wood-board2swivel/2fixedTPE locked-castor configuration and actual positive net M for the complete empty accepted cart; fixed output1kg. Reject other vehicle architectures and carrying/operating-service reference substitutions. | `fetra-product` |
| `validate_rows` | all inventory rows | Verify one actual chemical/physical identity/direction/type, public reference property/unit and official Chinese name, source route/medium and legal lowercase linked rule/protocol. Preserve natural gas Volume and electric energy. Unresolved identities remain declared gaps; a mechanical pass does not prove scientific applicability. |  |
| `validate_balance` | all processes | Reconcile stock/cutting/weld addition, captured waste, abrasive/powder input/recirculation/retention/waste, finished panel/castors and actual net product. Quantitative completion requires actual M and all actual exchanges; complete cradle-to-gate additionally requires compatible upstream and treatment datasets. | `ghg-allocation` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured welded-steel wood-deck manual cart foreground manufacturing |
| downstream_use | secondary_dataset; background_dataset after qualified review and compatible upstream linkage |
| allowed_use | Declared compatible frame/deck/castor/coat manufacture with actual net M and gate |
| excluded_use | Whole CPC49930, other vehicle/frame routes, hydraulic/powered handling, operation and unsupported full lifecycle |
| required_metadata | producer/model/serial and drawing revision; manually pushed nonpowered open platform with welded steel tube/profile frame and handle; actual stock grade/cross-section/manufacturing route; finished wood-derived-board deck with beech-grain surface and actual board composition; two TPE swivel castors with wheel locks and two TPE fixed castors, ball-bearing hubs and supplier inclusions; blast/powder formulation/SDS and actual cure heat route; complete empty accepted measured net M kg and cp_mass scale/calibration, installed configuration and packing/load exclusion; declared rated capacity and actual controlled acceptance, no catalogue mass substitute; actual site/period/subcontract/gate, shielding gas and fossil cure-fuel composition when applicable, upstream supply and waste recipients |
| required_quality_disclosure | Actual quantities/M/calibration, stock/module inclusion, binder/abrasive/heat/gas conditions, measured emissions, allocation and empirical QA plus identity/upstream gaps |
| update_trigger | Frame grade/geometry, deck composition, castor/lock, powder/blast/weld/heat route, supplier inclusions and actual scale/configuration/gate/site/period change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fetra-product` | literature | [fetra Open cart2500](https://www.fetra.com/carts/open_cart-2500) | HTML Product information and Technical Data with variant context: welded tubular/profile steel, powder coat, wood-derived-board beech-grain platform,2swivel/2fixedTPE castors with ball-bearing hubs and swivel wheel locks. Base architecture only; options, dimensions/load rating do not set a universal recipe, proof test or net measured M. No assertion of solid wood/plywood composition. |
| `fetra-quality` | literature | [fetra Quality and production](https://www.fetra.com/quality) | HTML Perfect workmanship, Flawless workmanship and Superb finish: automatic saws, tube bending/forming, welding robots and shot-blast/shot-peen pre-treatment followed by solvent-free powder coating. Manufacturer route context, not exact stock/filler/blend/abrasive/binder, heat source, curing factor, measured quantities or10-year lifetime. |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2: historical allocation avoidance/subdivision and underlying physical relationship hierarchy only. Actual measured foreground causal drivers required; no cart numerical factor or current regulatory obligation inferred. |
